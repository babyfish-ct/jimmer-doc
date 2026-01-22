# Jimmer DSL 查询参考 (Kotlin)

## 基础查询

```kotlin
@Repository
class BookRepository(
    private val sqlClient: KSqlClient
) {

    fun findBooks(): List<Book> =
        sqlClient
            .createQuery(Book::class) {
                where(table.name eq "Learning GraphQL")
                where(table.price gt BigDecimal(30))
                orderBy(table.name.asc())
                select(table)
            }
            .execute()
}
```

## 动态谓词

动态谓词根据参数决定是否添加 SQL 条件。

```kotlin
fun findBooks(
    name: String? = null,
    minPrice: BigDecimal? = null,
    maxPrice: BigDecimal? = null
): List<Book> =
    sqlClient
        .createQuery(Book::class) {
            where(table.name `ilike?` name)  // 动态 ILIKE
            where(table.price.`between?`(minPrice, maxPrice))  // 动态 BETWEEN
            select(table)
        }
        .execute()
```

**动态谓词规则：**
- `ilike?`：参数非 null 且非空字符串时生效
- `between?`：根据参数组合生成 `BETWEEN`、`>=`、`<=` 或不生成条件
- 其他动态谓词：`eq?`, `ne?`, `gt?`, `ge?`, `lt?`, `le?`

## 动态表连接

通过关联路径创建表连接，未使用的连接会被自动忽略。

```kotlin
fun findBooks(
    storeName: String? = null,
    storeWebsite: String? = null
): List<Book> =
    sqlClient
        .createQuery(Book::class) {
            // 通过 Book.store 关联到 BookStore
            where(table.store.name `ilike?` storeName)
            where(table.store.website `ilike?` storeWebsite)
            select(table)
        }
        .execute()
```

**关键特性：**
- 多次引用同一关联会自动合并为一个 JOIN
- 未使用的表连接会被自动忽略
- 默认使用 INNER JOIN，可指定 LEFT JOIN：`table.`storeId?``

## 隐式子查询

基于集合关联（一对多或多对多）创建子查询。

```kotlin
fun findBooks(
    authorName: String? = null,
    authorGender: Gender? = null
): List<Book> =
    sqlClient
        .createQuery(Book::class) {
            where += table.authors {
                or(
                    firstName `ilike?` authorName,
                    lastName `ilike?` authorName
                )
            }
            where += table.authors {
                gender `eq?` authorGender
            }
            select(table)
        }
        .execute()
```

**关键特性：**
- 生成 SQL `EXISTS` 子查询
- 父子查询的关联条件自动生成
- 多个基于同一关联的子查询会自动合并
- 无效的子查询会被自动忽略

## 对象抓取器 (Object Fetcher)

一句话查询任意形状的数据结构。

```kotlin
val books = sqlClient
    .createQuery(Book::class) {
        select(
            table.fetchBy {
                allScalarFields()
                store {
                    allScalarFields()
                }
                authors {
                    allScalarFields()
                }
            }
        )
    }
    .execute()
```

## 分页查询

```kotlin
val page = sqlClient
    .createQuery(Book::class) {
        where(table.name ilike "GraphQL")
        orderBy(table.name.asc())
        select(table)
    }
    .fetchPage(0, 10)  // 页码从 0 开始，每页 10 条
```

## 聚合查询

```kotlin
val result = sqlClient
    .createQuery(Book::class) {
        groupBy(table.storeId)
        select(
            table.storeId,
            avg(table.price)
        )
    }
    .execute()
```

## 常用谓词方法

### 比较运算符
- `eq` - 等于
- `ne` - 不等于
- `gt` - 大于
- `ge` - 大于等于
- `lt` - 小于
- `le` - 小于等于

### 字符串匹配
- `like` - LIKE 匹配
- `ilike` - 不区分大小写的 LIKE
- `startsWith` - 前缀匹配
- `endsWith` - 后缀匹配
- `contains` - 包含匹配

### 范围和集合
- `between` - 范围匹配
- `in` - IN 子句
- `notIn` - NOT IN 子句
- `isNull` - IS NULL
- `isNotNull` - IS NOT NULL

### 逻辑运算
- `or()` - OR 逻辑
- `and()` - AND 逻辑（默认）
- `not` - NOT 逻辑

### 动态版本
所有谓词都有动态版本，在方法名前后加反引号并加 `?`：
- `eq?`
- `ilike?`
- `between?`
- 等等...
