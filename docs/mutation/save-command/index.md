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
