# Jimmer DSL 查询参考 (Java)

## 基础查询

```java
@Repository
public class BookRepository {

    private final JSqlClient sqlClient;

    public BookRepository(JSqlClient sqlClient) {
        this.sqlClient = sqlClient;
    }

    public List<Book> findBooks() {
        BookTable table = Tables.BOOK_TABLE;

        return sqlClient
            .createQuery(table)
            .where(table.name().eq("Learning GraphQL"))
            .where(table.price().gt(new BigDecimal(30)))
            .orderBy(table.name().asc())
            .select(table)
            .execute();
    }
}
```

## 动态谓词

动态谓词根据参数决定是否添加 SQL 条件。

```java
List<Book> findBooks(
    @Nullable String name,
    @Nullable BigDecimal minPrice,
    @Nullable BigDecimal maxPrice
) {
    BookTable table = Tables.BOOK_TABLE;

    return sqlClient
        .createQuery(table)
        .where(table.name().ilikeIf(name))  // 动态 ILIKE
        .where(table.price().betweenIf(minPrice, maxPrice))  // 动态 BETWEEN
        .select(table)
        .execute();
}
```

**动态谓词规则：**
- `ilikeIf`：参数非 null 且非空字符串时生效
- `betweenIf`：根据参数组合生成 `BETWEEN`、`>=`、`<=` 或不生成条件
- 其他动态谓词：`eqIf`, `neIf`, `gtIf`, `geIf`, `ltIf`, `leIf`

## 动态表连接

通过关联路径创建表连接，未使用的连接会被自动忽略。

```java
List<Book> findBooks(
    @Nullable String storeName,
    @Nullable String storeWebsite
) {
    BookTable table = Tables.BOOK_TABLE;

    return sqlClient
        .createQuery(table)
        // 通过 Book.store 关联到 BookStore
        .where(table.store().name().ilikeIf(storeName))
        .where(table.store().website().ilikeIf(storeWebsite))
        .select(table)
        .execute();
}
```

**关键特性：**
- 多次引用同一关联会自动合并为一个 JOIN
- 未使用的表连接会被自动忽略
- 默认使用 INNER JOIN，可指定 LEFT JOIN：`table.store(JoinType.LEFT)`

## 隐式子查询

基于集合关联（一对多或多对多）创建子查询。

```java
List<Book> findBooks(
    @Nullable String authorName,
    @Nullable Gender authorGender
) {
    BookTable table = Tables.BOOK_TABLE;

    return sqlClient
        .createQuery(table)
        .where(
            table.authors(author ->
                Predicate.or(
                    author.firstName().ilikeIf(authorName),
                    author.lastName().ilikeIf(authorName)
                )
            )
        )
        .where(
            table.authors(author ->
                author.gender().eqIf(authorGender)
            )
        )
        .select(table)
        .execute();
}
```

**关键特性：**
- 生成 SQL `EXISTS` 子查询
- 父子查询的关联条件自动生成
- 多个基于同一关联的子查询会自动合并
- 无效的子查询会被自动忽略

## 对象抓取器 (Object Fetcher)

一句话查询任意形状的数据结构。

```java
List<Book> books = sqlClient
    .createQuery(table)
    .select(
        table.fetch(
            Fetchers.BOOK_FETCHER
                .allScalarFields()
                .store(
                    Fetchers.BOOK_STORE_FETCHER
                        .allScalarFields()
                )
                .authors(
                    Fetchers.AUTHOR_FETCHER
                        .allScalarFields()
                )
        )
    )
    .execute();
```

## 分页查询

```java
Page<Book> page = sqlClient
    .createQuery(table)
    .where(table.name().ilike("GraphQL"))
    .orderBy(table.name().asc())
    .select(table)
    .fetchPage(0, 10);  // 页码从 0 开始，每页 10 条
```

## 聚合查询

```java
List<Tuple2<Long, BigDecimal>> result = sqlClient
    .createQuery(table)
    .groupBy(table.storeId())
    .select(
        table.storeId(),
        table.price().avg()
    )
    .execute();
```

## 常用谓词方法

### 比较运算符
- `eq()` - 等于
- `ne()` - 不等于
- `gt()` - 大于
- `ge()` - 大于等于
- `lt()` - 小于
- `le()` - 小于等于

### 字符串匹配
- `like()` - LIKE 匹配
- `ilike()` - 不区分大小写的 LIKE
- `startsWith()` - 前缀匹配
- `endsWith()` - 后缀匹配
- `contains()` - 包含匹配

### 范围和集合
- `between()` - 范围匹配
- `in()` - IN 子句
- `notIn()` - NOT IN 子句
- `isNull()` - IS NULL
- `isNotNull()` - IS NOT NULL

### 逻辑运算
- `Predicate.or()` - OR 逻辑
- `Predicate.and()` - AND 逻辑（默认）
- `not()` - NOT 逻辑

### 动态版本
所有谓词都有动态版本，在方法名后加 `If`：
- `eqIf()`
- `ilikeIf()`
- `betweenIf()`
- 等等...
