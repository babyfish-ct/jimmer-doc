import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

子对象脱勾操作有5种模式

<table>
<thead>
<tr>
<th>模式</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>

NONE

(默认)

</td>
<td>

视全局配置[jimmer.default-dissociate-action-checking](/docs/configuration/dissociate-action-checking)而定

-   如果[jimmer.default-dissociate-action-checking](/docs/configuration/dissociate-action-checking)为true *(默认)* 或 当前关联所基于的外键是真的 *(数据库中存在相应的外键约束，请参见[真假外键](/docs/mapping/base/foreignkey))*，视为CHECK。

-   如果[jimmer.default-dissociate-action-checking](/docs/configuration/dissociate-action-checking)为false且当前关联所基于的外键是假的 *(数据库中没有相应的外键约束，请参见[真假外键](/docs/mapping/base/foreignkey))*，视为LAX。

</td>
</tr>
<tr>
<td>LAX</td>
<td>

脱钩操作不执行任何动作。

-   如果外键是真的 *(请参见[真假外键](/docs/mapping/base/foreignkey))*，当父对象被删除时

    -   如果为数据库中的外键配置了级联删除行为(`on cascade set null`或`on delete delete`)，由数据库来自动清空被脱钩的子对象的外键，或自动删除被脱钩的子对象

        > 虽然数据库层面的级联修改行为比ORM层面的级联修改行为性能高，但ORM对此毫不知情，在需要缓存一致性的项目中，请慎用

    -   否则，数据库会报告错误，保存指令被终止

-   如果外键是假的 *(请参见[真假外键](/docs/mapping/base/foreignkey))*，当父对象被删除时，不会有任何附加行为发生，放任子对象外键的值出现悬挂问题

    > 即使假外键的值是非法的悬挂值，jimmer的查询也不会出错，查询系统会得到父对象为null的结果，而非因父对象不存在而报错

</td>
</tr>
<tr>
<td>CHECK</td>
<td>不支持脱钩操作，如果数据库中当前父对象拥有需要脱钩的子对象，则抛出异常阻止操作。</td>
</tr>
<tr>
<td>SET_NULL</td>
<td>把被脱勾的子对象的外键设置为null。使用此模式的前提是子对象的外键关联属性是nullnullable的；否则尝试此配置将会导致异常。</td>
</tr>
<tr>
<td>DELETE</td>
<td>将被脱勾的子对象删除。</td>
</tr>
</tbody>
</table>
