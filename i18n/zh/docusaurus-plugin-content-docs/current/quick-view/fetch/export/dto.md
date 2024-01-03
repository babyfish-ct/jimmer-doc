---
sidebar_position: 2
title: 返回输出DTO
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Java/Kotlin应用自己使用查询结果

在[上一篇](./entity)文档中，我们介绍让Web服务直接返回实体，并辅以`@FetchBy`注解在客户端中恢复所有DTO爆炸。

然而，如果某个查询的返回结果并不返回给Web客户端，而是服务端自己用呢?

<Tabs groupId="language">
<TabItem value="java" label="Java">

```java
List<Book> books = bookRepository.findBooksByName(
    "graphql",
    Fetchers.BOOK_FETCHER ❶
        .name()
        .edition()
);
for (Book book : books) {
    System.out.println("--------");
    System.out.println("Id: " + book.id());
    System.out.println("Name: " + book.id());
    System.out.println("Edition: " + book.id());
    System.out.println("Price:" + book.price()); ❷
}
```

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
val books = bookRepository.findBooksByName(
    "graphql",
    newFetcher(Book::class).by { ❶
        name()
        edition()
    }
)
for (book in books) {
    println("--------")
    println("Id: ${book.id}")
    println("Name: ${book.name}")
    println("Edition: ${book.edition}")
    println("Price: ${book.price}") ❷
}
```

</TabItem>
</Tabs>

这里，没有Web服务，没有远程调用，就是同一个JVM内部的调用

-   ❶处，只查询对象的三个属性：`id` *(隐含)*、`name`和`edition`

-   ❷处，访问`book`对象的未被查询属性`price`。

    这种错误访问会导致异常

    -   异常类型: org.babyfish.jimmer.UnloadedException

    -   异常消息：The property "com.yourcompany.yourproject.model.Book.price" is unloaded

可见，仅仅考虑在远程客户端Api中自动定义DTO类型是不够的，JVM内部本地直接使用查询结果时，就需要用为Java/Kotlin自身引入DTO类型来保证更好的编译时安全。