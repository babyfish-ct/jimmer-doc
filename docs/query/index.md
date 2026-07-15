---
sidebar_position: 5
title: Query
---

In this section, we will introduce the various queries in Jimmer without considering [Cache](../cache). 

There are three groundbreaking capabilities:

For repetitive back-office list pages, [Low Query](./low-query) can generate typed Kotlin query helpers from entity annotations.

-   [Object Fetcher](./object-fetcher)

    One statement to query data structure of arbitrary shape, like [GraphQL](https://graphql.org/)

-   [Dynamic Join](./dynamic-join)

    This addresses a huge gap in the JVM ecosystem, enabling easy complex dynamic queries

-   [Smart Paging](./paging) 

    Users only focus on querying the raw data, row count queries are auto-generated and optimized for convenience