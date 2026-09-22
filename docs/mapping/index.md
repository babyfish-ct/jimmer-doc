---
sidebar_position: 4
title: Mapping
---

In this section, we introduce how to map a relational database to entity model. 

-   For readers with ORM experience *(especially JPA)*, you can skim through quickly. Major differences from JPA:

    -   Basic Mapping:
        -   [Nullability](./base/nullity.mdx)
  
    -   Advanced Mapping: 
        -   [View Properties](./advanced/view/index.md)

        -   [Calculated Properties](./advanced/calculated/index.md)

        -   [Remote Associations](./advanced/remote.mdx)

        -   [Key](./advanced/key.mdx)
        
            Key is very important for [Save Command](../mutation/save-command/index.md)

        -   [OnDissociate](./advanced/on-dissociate.mdx)

-   For readers without ORM experience, you'll have to read slowly. 

    This process is tedious but required for any ORM. All powerful and cool ORM capabilities are built on top of these mappings.

    To avoid extended tedium for ORM beginners, a suggestion - initially only read the basic mappings, enough to understand most of the docs. Come back for advanced mappings when needed.