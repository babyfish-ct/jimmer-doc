---
sidebar_position: 4 
title: 3. Arbitrary Dynamic Query
---  

Jimmer supports strongly typed SQL DSL.  

:::tip
Note that unlike most frameworks that use strongly typed DSLs, Jimmer's strongly typed DSL is not only for compile-time safety assurance and IDE intelligent prompt experience of SQL statements, but also for solving the problem of table joins and subqueries in native SQL. They are too cumbersome so jimmer gives them higher abstractions.  

After giving table joins and subqueries higher abstractions, building arbitrary complex dynamic queries with Jimmer becomes very easy. From the beginning, Jimmer is designed for easy construction of arbitrary complex dynamic queries.  
:::  

In addition, for the powerful non-sql-standard features owned by specific database products, Jimmer's SQL DSL can embed Native SQL fragments without the abstraction of the strongly typed DSL affecting developers' full use of the special features of the data. *(This part of the function will not be introduced in the quick preview. Interested supervisors please check [Query/Native Expressions](../../query/native-sql))*