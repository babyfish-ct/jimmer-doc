---
sidebar_position: 6
title: Modification
---

In this section, we will introduce all the capabilities in Jimmer related to modifying the database. 

There are two groundbreaking capabilities:

-   [Save Command](./save-command/index.md)

    One statement to save complex data of arbitrary shape, find DIFF to change database, like React/Vue.

-   [Triggers](./trigger.mdx) 

    Awareness of data changes whether via Jimmer's own capabilities or integrating with existing CDC solutions. This enables automatic [Caching](../cache/index.mdx) invalidation.

## Query-Based Mutations

[Insert and Upsert from Select](./insert-from-select.mdx) maps typed base-query
results to a target table, with explicit conflict keys, separate insert/update
assignments, update conditions, and returning.
