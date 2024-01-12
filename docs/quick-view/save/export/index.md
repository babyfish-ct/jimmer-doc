---  
sidebar_position: 2
title: Export Functionality  
---  

In [Save Any Shape/Feature Introduction](../feature), we introduced the powerful data saving capability of Jimmer,  
but also pointed out that for security reasons, Jimmer dynamic entities cannot be directly used as input parameters to directly expose this capability.  

To protect system security, [DTO Language](../../../object/view/dto-language) needs to be used to define Input DTO.  
Unlike Jimmer dynamic entities, InputDTO is static with fixed shape. Using Input DTO as the type constraint of the input parameters of remote APIs can solve security issues.