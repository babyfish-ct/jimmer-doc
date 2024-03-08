## Advantages

Convenient, code safety *(Based on a strongly typed language, most of the code is safe. If combined with QueryDSL, all code can be guaranteed to be safe)*

## Disadvantages

Lack of flexibility

- Even though JPA supports EntityGraph from version 2.1, the flexibility to control the format of queried data is still very limited. This solution's granularity is still too coarse, and the control capability is far from that of technologies like GraphQL.

- When saving objects, the detailed behavior is controlled by the `insertable`, `updateable` configurations of normal properties and the `cascade` configuration of associated properties. These configurations are hardcoded in the entity types, and the format of the saved data structure is fixed and lacks flexibility.

- To take advantage of ORM, you must query most of the non-associated properties of the entity object *(except for a few `@Basic(fetch = FetchType.Lazy)` properties, which are mostly designed for LOBs)*; if you only want to query a subset of properties, you must abandon object queries and instead use multi-column queries for those properties, losing the convenience and core value that ORM should have.
