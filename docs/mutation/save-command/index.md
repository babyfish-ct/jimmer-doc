---
sidebar_position: 3  
title: Save Command
---

:::caution
In recent months, the save instruction has undergone a major restructuring, so there hasn't been time to update all the documentation in this directory.

Apart from new features, the new version of the save instruction has made minimal changes to existing functionality, and it remains largely consistent with the description in this directory. However, the new version of the save instruction **generates SQL with much higher performance than described here**.

The good news is that this historically significant restructuring of Jimmer has finally been completed and stabilized, so all the content in this directory will be updated soon.
:::

:::tip
One statement to save complex data of arbitrary shape, find DIFF to change database, like React/Vue
:::

Save commands are a very powerful capability of Jimmer that can greatly simplify the development difficulty of persisting complex data structures.

If [object fetchers](../../query/object-fetcher) enable output data to be in any shape, then save commands allow input data to also be in any shape.

For readers familiar with web frontend technologies, this can be analogized to `Virtual DOM diff` in [React](https://react.dev/) or [Vue](https://vuejs.org/).

:::tip 
Save command require developers to **completely change their thinking pattern**

-   Fundamental difference in thinking

    -   The traditional thinking pattern:

        Manually compare the data structure to be saved with existing data in the database, and execute `INSERT`, `UPDATE` or `DELETE` on the changed parts

    -   The thinking pattern for save command:

        Accept the data structure passed from client as a whole and just save it. Jimmer will handle everything *(automatically compare the data structure to be saved with existing data in the database, and execute `INSERT`, `UPDATE` or `DELETE` on the changed parts)*

-   Old habits should be replaced by better methods

    In the traditional development mode, developers like to do one thing: query an object first, then modify some of its properties, and finally save the modified object.

    Although Jimmer also allows developers to do this, it is recommended to use a more performant approach, please refer to [Incomplete Object](./usage#12-using-incomplete-objects-to-avoid-query-before-update).
:::

Calling a save command only takes one line of code, but hides countless details internally that documentation cannot exhaustively enumerate. Therefore, save commands have a dedicated sample project:

-   Java: [jimmer-examples/java/save-command](https://github.com/babyfish-ct/jimmer-examples/tree/main/java/save-command) 

-   Kotlin: [jimmer-examples/kotlin/save-command-kt](https://github.com/babyfish-ct/jimmer-examples/tree/main/kotlin/save-command-kt)

Simply open either one in an IDE, and run the unit tests.
