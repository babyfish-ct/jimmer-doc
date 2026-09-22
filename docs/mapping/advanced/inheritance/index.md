---
sidebar_position: 3
title: Inheritance
---

Jimmer supports entity inheritance without giving up its immutable object model,
typed query DSL, fetchers, DTO language, or save commands.

Two relational mapping strategies are available:

-   [`SINGLE_TABLE`](./mapping.mdx#single-table) stores the whole hierarchy in one
    table.
-   [`JOINED`](./mapping.mdx#joined-tables) stores common properties in the root
    table and properties declared by derived entity types in additional tables.

Both strategies use a discriminator column in the root table. A root query
materializes the actual entity subtype automatically, and mutations keep the
discriminator and all physical tables consistent.

This section covers:

-   [Declaring the hierarchy and choosing a mapping strategy](./mapping.mdx)
-   [Polymorphic queries, fetchers, and type operations](./query.mdx)
-   [Save commands, update/delete statements, and type changes](./mutation.mdx)
-   [Polymorphic DTOs and inputs](./dto.mdx)

:::info
This feature is entity inheritance. [`@MappedSuperclass`](../mapped-super-class.mdx)
remains useful for sharing properties without creating a polymorphic entity
hierarchy.
:::
