---
sidebar_position: 3  
title: Save Arbitrary Shape  
---

The save directive is a very powerful capability of Jimmer. With just one function call, data structures of any shape can be saved.  

Whether the data structure to be saved is simple (such as a single object or even a truncated object) or complex (an aggregate root object holds many associated objects through associative relationships, with unlimited depth and breadth), it can be saved into the database with one function call.

:::tip
Saving operations for single table records has never been the difficulty of application development. Even without using any ORM framework, it is very easy to achieve with direct use of JDBC.  

However, saving complex data structures is not so easy. Developers will have to query existing data structures from the database and compare them with the data structures to be saved, so as to discover multiple changed parts and convert them into corresponding `INSERT`, `UPDATE` and `DELETE` statements. This process is very cumbersome and error-prone.  

Therefore, from the very beginning, Jimmer focused on how to save complex data structures, rather than how to save a single entity object.  
:::