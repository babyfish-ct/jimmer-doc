package com.example.model;

import org.babyfish.jimmer.sql.*;
import org.jetbrains.annotations.Nullable;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

/**
 * 实体模板 - 包含常见字段和关联类型
 */
@Entity
public interface EntityTemplate {

    // ========== 主键 ==========
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id();

    // ========== 业务键 ==========
    @Key
    String name();

    // ========== 基础字段 ==========
    String description();

    @Nullable
    String optionalField();

    BigDecimal amount();

    int count();

    boolean active();

    LocalDateTime createdTime();

    @Nullable
    LocalDateTime updatedTime();

    // ========== 多对一关联 ==========
    @ManyToOne
    @Nullable
    ParentEntity parent();

    // ========== 一对多关联（镜像） ==========
    @OneToMany(mappedBy = "parent")
    List<ChildEntity> children();

    // ========== 多对多关联 ==========
    @ManyToMany
    @JoinTable(
        name = "ENTITY_RELATED_MAPPING",
        joinColumnName = "ENTITY_ID",
        inverseJoinColumnName = "RELATED_ID"
    )
    List<RelatedEntity> relatedEntities();
}
