## Advantages

Direct writing of SQL, arbitrary and flexible; it is a strongly typed framework, with code safety *(The MyBatis ecosystem also has strongly typed SQL DSL extensions that can solve the code insecurity caused by native SQL strings)*.

## Disadvantages

Severe lack of convenience, and extremely high redundant labor.

MyBatis does not have a unified entity concept, but instead deals with specific business scenario DTOs, implementing mappings between ResultSets and these DTOs. Due to the many business scenarios, the various DTO types are similar but different, leading to high redundancy and extremely high redundant labor.

Apart from CRUD operations on single objects, support for complex data structures formed by multiple associated objects is relatively weak, lacking necessary abstractions, resulting in too many tedious low-level tasks being pushed onto developers *(many developers have been burdened by these tedious tasks for a long time without realizing it)*.

## Is Native SQL Really the Best Solution?

The most boastful point of this camp is: "Writing SQL directly will bring more direct control, and this direct control is superior to any ORM." In the long-term technical stagnation in this field, many developers firmly believe this.
However, the subsequent section [3.4. SQL DSL](#34-sql-dsl) has a surprise in store that will change this deep-rooted perception.
