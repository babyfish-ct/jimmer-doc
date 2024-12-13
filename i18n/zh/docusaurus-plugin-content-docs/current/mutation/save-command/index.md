---
sidebar_position: 3
title: 保存指令
---

## 功能

保存指令是Jimmer最为强大的功能，用于保存任意图结构

-   利用数据库本身的upsert能力merge数据
-   每一层的多个对象都用批量DML操作
-   自动翻译违背约束的异常
-   任何层次的被保存对象都可以不完整    
-   既可以直接保存实体，也可保存Input DTO

:::caution
保存指令的用法和绝大部分ORM都不相同，建议先阅读文档或本文给出的示例，不要按照自己对其他ORM的理解去做猜测性使用。
:::

## 配套例子

-   Java: [jimmer-examples/java/save-command](https://github.com/babyfish-ct/jimmer-examples/tree/main/java/save-command)

-   Kotlin: [jimmer-examples/kotlin/save-command-kt](https://github.com/babyfish-ct/jimmer-examples/tree/main/kotlin/save-command-kt)

用IDE随意打开其中一个，运行单元测试即可。
