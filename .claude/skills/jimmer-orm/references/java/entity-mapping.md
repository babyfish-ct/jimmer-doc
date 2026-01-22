# Jimmer 实体映射参考 (Java)

## 基础概念

- Jimmer 实体使用 **interface** 定义，而非 class
- 实体是**动态对象**和**不可变对象**
- 由 AnnotationProcessor 在编译时生成实现
- 属性未设置 ≠ 属性为 null

## 基础实体定义

```java
package com.example.model;

import org.babyfish.jimmer.sql.*;
import org.jetbrains.annotations.Nullable;

@Entity
public interface Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id();

    @Key
    String name();

    int edition();

    BigDecimal price();

    @Nullable
    String description();
}
```

## 关联映射

### 多对一 (ManyToOne)

```java
@Entity
public interface Book {
    // ... 其他属性

    @ManyToOne
    @Nullable
    BookStore store();
}
```

### 一对多 (OneToMany)

一对多必须作为多对一的镜像，使用 `mappedBy` 指定：

```java
@Entity
public interface BookStore {
    // ... 其他属性

    @OneToMany(mappedBy = "store")
    List<Book> books();
}
```

### 多对多 (ManyToMany)

主动端：

```java
@Entity
public interface Book {
    // ... 其他属性

    @ManyToMany
    @JoinTable(
        name = "BOOK_AUTHOR_MAPPING",
        joinColumnName = "BOOK_ID",
        inverseJoinColumnName = "AUTHOR_ID"
    )
    List<Author> authors();
}
```

镜像端：

```java
@Entity
public interface Author {
    // ... 其他属性

    @ManyToMany(mappedBy = "authors")
    List<Book> books();
}
```

## 常用注解

- `@Entity` - 标记实体类型
- `@Id` - 标记主键
- `@GeneratedValue` - 主键生成策略
- `@Key` - 业务键（用于唯一性约束）
- `@Column` - 自定义列名（仅用于非关联字段）
- `@Table` - 自定义表名
- `@ManyToOne` / `@OneToMany` / `@ManyToMany` / `@OneToOne` - 关联映射
- `@JoinColumn` - 自定义外键列名
- `@JoinTable` - 自定义中间表配置
- `@Nullable` - 标记可空属性

## 枚举映射

```java
public enum Gender {
    @EnumItem(name = "M")
    MALE,

    @EnumItem(name = "F")
    FEMALE
}
```

## 自引用关联（树形结构）

```java
@Entity
public interface TreeNode {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id();

    String name();

    @ManyToOne
    @Nullable
    TreeNode parent();

    @OneToMany(mappedBy = "parent")
    List<TreeNode> childNodes();
}
```

## 命名约定

- 实体接口名 → 表名：`BookStore` → `BOOK_STORE`
- 属性名 → 列名：`firstName` → `FIRST_NAME`
- 多对一外键：`store` → `STORE_ID`
- 如果不匹配，使用 `@Table` 或 `@Column` 自定义
