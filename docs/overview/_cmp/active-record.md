## Advantages: 

For dynamic language ORMs, you only need to combine the flexibility of dynamic language object structures with ORM implementation to achieve both convenience and flexibility.

## Disadvantages

It is well known that dynamic languages lack maintainability and are not conducive to collaborative development by multiple people, despite being both convenient and flexible.

Modern software is often complex and requires team collaboration. Whether it facilitates collaboration between team members is far more important than individual perceptions of programming.

Here, I don't want to discuss the debate between static and dynamic languages too much, but one point needs to be made: Since Java/Kotlin has been chosen as a static language, it should be used in a static language way, and not in the way that solutions like `jFinal` treat static languages as dynamic languages. Nor should `java.util.Map` be frequently used in applications to replace data objects. This kind of practice violates the original intention of choosing Java/Kotlin. If you really want to do it this way, why not just choose a dynamic language?
