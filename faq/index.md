# FAQ

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::tip

FAQ内容由社区整理，用作常见问题速查表。

初版作者：**南暮**

:::

## Jimmer的实体为什么是接口而不是类

因为Java的类型，表达能力不足，因此使用接口来配合APT生成代码。

## 为什么采用生成代码的方式，而不是动态代理

因为动态代理性能差，且可观测性差，不利于debug，不利于AOT。

## org.babyfish.jimmer.UnloadedException

在 Java 传统中，用 `null` 来表示“没有值ˮ或者“值为`null`ˮ，并没有区分这两种情
况，因此在一些场景下带来二义性造成困扰。例如：通常动态查询条件中，需
要忽略 `null`，也就是说某属性值为null则不需要这个查询条件，假如有一个自关
联的表，按数据库规范而言，根节点的 `parent_id` 为 `null`，非根节点的 `parent_id`
不为 `null`，那么在java代码中，前端传入 `parent_id` 为 `null` 时，究竟是要查根节
点，还是不需要这个查询条件？

因此 Jimmer 引入了unloaded这个概念（实际是从 Hibernate 的 lazy load exception 演化来的）
用以区分是否已赋值，访问未赋值的属性就会抛出这个异 常。

```java
// 假设Book实体有name, edition, price等属性
// 这里给name赋值字符串，给edition赋值null，未给price赋值
Book book = BookDraft.$.produce(draft → draft.setName("Java入门到入土").setEdition(null)));
// name = "Java入门到入土"
String name = book.name();
// edition = null
Integer edition = book.edition();
// 抛出UnloadedException
Double price = book.price();
```

因此在 Jimmer 的属性中，`null` 就是有效值，就是表达“值为`null`ˮ这一明确概念，而不是与“没有值ˮ混淆。

## 什么是实体

与数据库表结构对应的Java接口，并且需要标注有 `@Entity` 注解。
注：接口名需要于表名一致，否则需要添加 `@Table` 注解指定表名

## 什么主动方和从动方

|     | 从数据库层面理解                   | 从实体层面理解                |
|-----|----------------------------|------------------------|
| 主动方 | 表字段中**包含外键**的表，由外键主动控制关联关系 | 关联映射注解中**不包含mappedBy** |
| 从动方 | 表字段中**不包含该外键**，不能主动控制关联关系  | 关联映射注解中**包含mappedBy**  |

例如 `book` 和 `book_store` 多对一，在数据库表当中，
是由 `book` 表的 `store_id` 这个外键来主动控制关联关系。

<table>
<tbody>
<tr>
<td>

```csharp
create table book(
    -- 省略其他
    -- 外键指向book_store表的id字段
    store_id int
    references book_store(id),
)
```

</td>
<td>

```java
@Entity
public interface Book{
    // 主动方没有mappedBy
    @ManyToOne
    BookStore bookStore();
}
```

</td>
</tr>
<tr>
<td>

```csharp
create table book_store(
    -- 没有外键指向book表
)
```

</td>
<td>

```java
@Entity
public interface BookStore {
    // 从动方有mappedBy
    @OneToMany(mappedBy = "bookStore")
    List<Book> books();
}
```

</td>
</tr>
</tbody>
</table>

## 整形逻辑删除标志位为什么不能default用1，已删除用0

已删除 `1` ，未删除 `0` 更符合直觉。

当逻辑删除属性的类型为 int 时，`0` 表示未删除的初始值，其他数字表示已删
除，这个是在源码里写死的。

默认情况下，不能实现 `1` 未删除 `0` 已删除这种反直觉的情况。但是可以通过枚举来规避，
枚举上得加 `@EnumType(EnumType.Strategy.ORDINAL)`

## 为什么select最多只能选9列，不够用

不推荐使用`select`(tuple)的方式，因为这种方式还需要手动转换将tuple映射为
dto。建议仅在编写统计查询时使用该方式。

Jimmer提供了非常强大的[对象抓取器](/docs/query/object-fetcher)，
可以帮你节省大量的编写DTO与结果集映射的时间。

:::tip

注：tuple可以与fetcher混用，因此9列也足够用了。

:::

## 为什么有智能分页

通常需要编写一个 `data-query` 和一个 `count-query` ，写多了之后也很繁琐。
因此 Jimmer 专门提供了智能分页，由 Jimmer 帮你生成 `count-query` ，
你只需关注 `data-query` 即可。Jimmer会优化 count-query ，
去掉 `orderBy` 与 `groupBy` 语句以提高性能。如果有 `groupBy` 语句则会报错。

## java.lang.IllegalArgumentException: entity cannot be a draft object

Jimmer 操作的始终应该是最终的不可变对象，不应该是某个中间环节的 draft 对象。
尤其是不要在嵌套的 lambda 中保存，虽然看起来是不可变对象，但是实际还是 draft 代理对象。

```java
@Test
void test() {
    Book book = BookDraft.$.produce(draft -> {
        BookDraft bookDraft = draft.setName("abc").setEdition(1).setPrice(88.8);
        // 不应该在这里保存draft对象
        sqlClient.save(bookDraft);
        // 这里是不可变对象，但是也不能在嵌套的lambda中保存
        BookStore bookStore = BookStoreDraft.$.produce(storeDraft -> 
            storeDraft.setName("def").setWebsite("www.baidu.com"));
            
        // 注释掉 sqlClient.save(bookDraft); 之后执行会报同样的错误
        sqlClient.save(bookStore);
    });
    // 应该在此处保存
    sqlClient.save(book);
}
```

## 为什么不支持外键指向非主键

早期设计时，没有考虑到这种非规范建模的情况，目前外键引用非主键、既是外键又是主键、继承映射都还未支持，
需要花费的时间和精力较多，会在1.0正式版本支持。

## 基于假外键/逻辑删除/过滤器的关联，为什么要求Nullable

假外键：即便假外键字段本身设置为 notnull, 但它也可能是个非法的悬挂值，
不指向任何有意义的对象。从关联对象的角度，而非外键值的角度来看，
没办法确保关联对象一定存在，因此必须为 Nullable。

过滤器：经过过滤后，可能没有该关联对象的数据，因此必须为 Nullable。

逻辑删除：逻辑删除本质也是过滤器。

## mappedBy为什么报错

因为 `mappedBy` 是一个关联映射的镜像配置，所以需要被映射的属性上，
有对应的映射注解。

## 关联表bookStoreId()以及bookStore().id()的区别

前者表示当前表中的外键，不会触发连表查询，后者表示关联表的主键，
会触发关联表查询。

如果有过滤器，则可能想查当前表的外键 `book.storeId()` ，
并且不希望走过滤器，
那么fetcher中也有对应的api： `store(IdOnlyFetcherType)`

## 数据库校验报错中有 xxx not in table "xxx.null.book"

因为数据库隔离不是用的 schema 而是用的 catalog，
修改配置 `catalog.schema.table`

## 什么是upsert模式

先根据 id 或 key 执行一条SQL查询该数据是否已存在，若已存在则执行 update，
不存在则执行 insert，所以简称 upsert。

:::tip

upsert 模式仅针对聚合根对象，不针对关联对象。

:::

## 怎么只更新部分属性，不想更新全部属性。有没有类似JPA的@DynamicUpdate

Jimmer 没有提供该注解，但 Jimmer 有个最核心的特性：动态性。
借助动态性，可以只给想更新的属性赋值，然后保存即可。

```java
Book book = BookDraft.$.produce(draft → 
    draft.setId(1).setName("Java入门到入土")));
// 这将执行update book set name = ? where id = ?
sqlClient.update(book);
```

## 怎么只更新已变更的属性

JPA是有状态的，managed 状态的实体，属性发生变更后，配合 `@DynamicUpdate`，
可以达到追踪属性变更，只更新已变更的属性。

但 Jimmer 是无状态的，设计理念是不产生任何意料之外的SQL，
只由用户自己决定执行什么SQL。
虽然可以借助动态性实现该效果，但需要用户自行比对哪
些属性发生变更。

目前可行的方案为：前端配合只传入已变更字段，后端用动态实体或dto语言生成的dto来接收，
然后即可达到该效果。

## 为什么不支持直接from子查询: select … from (select …)

Jimmer 是很彻底的 ORM，这种形式与面向对象偏离甚远，因此没有支持。

## 怎么自定义排序，例如支持null first和null last

Jimmer 已经提供了这两功能：`orderBy(table.name().nullFirst())`

如果需要更特殊的处理， `orderBy` 也有重载方法接收 `Expression` 
类型的参数，可以使用 `Expression.sql()` 来嵌入任意复杂形式的逻辑。

## 嵌入原生SQL时怎么指定多个值

以下示例仅演示绑定多个值，并不深究实际sql

```java
BookTable table = BookTable.$;
List<Double> execute = sqlClient
    .createQuery(table)
    .select(
        Expression.numeric()
            .sql(
                Double.class,
                "rank() over(order by %e desc, %e desc)",
                // 此处使用多个value()来指定值，
                需要与上面的sql语句中的%e个数保持一致
                it -> it.value(table.name()).value(table.price())
            )
    )
.execute();
```

## 嵌入原生SQL只能用在where中吗？可以用在其他地方吗？

任何接收 `Expression` 的方法都可以使用，不是只有 `where` 中才可以嵌入原生SQL，
例如在 `orderBy` , `groupBy` , `select` 等也可以使用。

## 新增数据后怎么返回全部属性

由 Jimmer 的设计理念来讲，不会执行额外SQL，仅由用户决定执行哪些SQL。
因此 `save()` 之后的 `getModifiedEntity()` 只会在旧实体上新增一个id。
如需返回所有属性，则自行 `findById()` 。

## 怎么给实体属性设置默认值
使用[保存前过滤器](/docs/mutation/draft-interceptor)。

建议抽取公用属性到 `MappedSuperclass` 后配合过滤器
使用。

保存前过滤器比数据库默认值更强大。数据库默认值只能给出无业务含义的
值，而保存前过滤器，可以结合业务逻辑给出默认值。

## 既然已经有了动态性，为什么又设计了dto语言

实践中，对于查询应该使用动态对象，可以减少很多dto。但是对于保存/更新，
则需要校验数据的结构，避免出现意料之外的情况导致数据库被修改。

例如：保存书籍接口只应修改 `book` 表，但直接使用 `Book` 实体接收参数，没有做好结构校验的话，
若传入参数中包含关联 `BookStore`，则会导致 `book_store` 表也会被修改。

相比于手动校验数据的结构（如果可以接受一点性能损耗的话，可以自行用反射实现根据 
fetcher 校验实体结构是否吻合，比手动一个个属性校验要方便得多），直接定义静态对象更加方便。
原本定义dto的活是由用户自行完成，并且需要编写dto与实体之间的转换代码，但是由于实体的动态性，
导致一些现有工具无法直接应用，或使用起来比较麻烦。MapStruct 曾承诺在 1.6.0 版本兼容，
但过了半年多没有动静，因此 Jimmer 自行提供了dto语言。

## 怎么配合Lombok，MapStruct等其他代码生成技术的框架

这些框架都使用了APT代码生成技术，最常见的是 Lombok，而idea对 
Lombok 提供了特殊支持，因此在单独只使用 Lombok 时，不需要关心 apt，
只需要引入 Lombok 依赖即可。

但是多个APT框架混用时，必须要声明 Lombok 的APT，
同时多个APT之间需要根据依赖关系来声明APT的顺序。

通常情况下，Lombok 的顺序排第一位，因为需要 Lombok 生成的get/set等，
MapStruct 依赖相关的构造器与get/set方法，
Jimmer 本身不依赖 Lombok 生成的get/set等。

同时，APT的顺序仅在使用 maven 时需要注意，在使用 gradle 时，不需要特别指定。

<Tabs groupId="buildTool">
<TabItem value="maven" label="Maven">

```xml title="pom.xml"
<build>
    <plugins>
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-compiler-plugin</artifactId>
            <version>3.10.1</version>
            <configuration>
                <annotationProcessorPaths>
                    <!-- 注意此处的顺序，lombok应该在最前面 -->
                    <path>
                        <groupId>org.projectlombok</groupId>
                        <artifactId>lombok</artifactId>
                        <version>${lombok.version}</version>
                    </path>
                    <path>
                        <groupId>org.babyfish.jimmer</groupId>
                        <artifactId>jimmer-apt</artifactId>
                        <version>${jimmer.version}</version>
                    </path>
                </annotationProcessorPaths>
            </configuration>
        </plugin>
    </plugins>
</build>
```

</TabItem>
<TabItem value="gradle" label="Gradle">

```groovy title="build.gradle"
dependencies {
...省略其他依赖...
// 只需补充声明lombok的apt
annotationProcessor "org.projectlombok:lombok:${lombokVersion}"
annotationProcessor "org.babyfish.jimmer:jimmer-apt:${jimmerVersion}"
}
```

</TabItem>
</Tabs>
