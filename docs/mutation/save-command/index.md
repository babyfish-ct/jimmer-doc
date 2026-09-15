---
sidebar_position: 3  
title: Save Command
---

## Features

Save commands are Jimmer's most powerful feature, used for saving arbitrary graph structures.

-   Merge data using the database's native upsert capabilities
-   Multiple objects at each level are handled using batch DML operations
-   Automatically translates constraint violation exceptions
-   Saved objects at any level can be incomplete
-   Can save either entities directly or input DTOs

:::caution
The usage of save commands is different from most other ORMs. It is recommended to first read the documentation or examples provided in this article, rather than making assumptions based on your understanding of other ORMs.
:::

## Examples

-   Java: [jimmer-examples/java/save-command](https://github.com/babyfish-ct/jimmer-examples/tree/main/java/save-command) 

-   Kotlin: [jimmer-examples/kotlin/save-command-kt](https://github.com/babyfish-ct/jimmer-examples/tree/main/kotlin/save-command-kt)

Simply open either one in an IDE, and run the unit tests.

## Control the Update Branch

-   [Upsert Mask](./upsert-mask.mdx): choose different insert and update properties.
-   [Assignment Expressions](./assignment.mdx): calculate new values from stored and input values.
-   [Update Conditions](./update-where.mdx): reject an update without an optimistic-lock exception.
-   [Version Mode](./version-mode.mdx): use the version as an optimistic lock or an assigned value.
-   [Save Result Fetching](./returning.mdx): obtain stored values and inspect whether the mutation was accepted.

When the input is a query result instead of an object graph, use
[Insert and Upsert from Select](../insert-from-select.mdx).
