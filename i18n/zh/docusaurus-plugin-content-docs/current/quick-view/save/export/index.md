---
sidebar_position: 2 
title: 暴露功能
---

在[保存任意形状/功能介绍](../feature)一文中，我们介绍了Jimmer强大的数据保存能力，
但也指出，为了安全性，不能直接使用Jimmer动态实体作为输入参数以直接暴露这种能力。

要保护系统的安全性，需要使用[DTO语言](../../../object/view/dto-language)定义Input DTO，
和Jimmer动态实体不同，InputDTO是静态的，具备固定的形状，利用Input DTO作为远程Api的输入参数的类型约束，即可解决安全性问题。
