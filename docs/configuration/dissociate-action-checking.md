---
sidebar_position: 14
title: Default Dissociation Mode
---

In the [OnDissociate](../mapping/advanced/on-dissociate) article, we know there are 5 dissociation modes:

- NONE *(default)*

- LAX

- CHECK  

- SET_NULL

- DELETE

For pseudo foreign key *(please refer to [Real and Fake Foreign Keys](../mapping/base/foreignkey))* associative properties, when its dissociation mode is `NONE`:

- If the global configuration `jimmer.default-dissociation-action-checkable` is true *(default)*, it is equivalent to `CHECK`.

- If the global configuration `jimmer.default-dissociation-action-checkable` is false, it is equivalent to `NONE`.
