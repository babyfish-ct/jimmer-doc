import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

There are 5 modes for child object dissociation operations

<table>
<thead>
<tr>
<th>Mode</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

NONE *(Default)*

</td>
<td>

Depends on global configuration [jimmer.default-dissociate-action-checking](/docs/configuration/dissociate-action-checking)

-   If [jimmer.default-dissociate-action-checking](/docs/configuration/dissociate-action-checking) is true *(default)* or the foreign key upon which the current association is based is real *(foreign key constraint exists in database, see [Real and Fake Foreign Keys](/docs/mapping/base/foreignkey))*, treated as `CHECK`.

-   If [jimmer.default-dissociate-action-checking](/docs/configuration/dissociate-action-checking) is false and the foreign key upon which the current association is based is fake *(no corresponding foreign key constraint in database, see [Real and Fake Foreign Keys](/docs/mapping/base/foreignkey))*, treated as `LAX`.

</td>
</tr>
<tr>
<td>LAX</td>
<td>

Dissociation operation performs no action.

-   If the foreign key is real *(see [Real and Fake Foreign Keys](/docs/mapping/base/foreignkey))*, when parent object is deleted:

    -   If cascade delete behavior is configured for the database foreign key (`on cascade set null` or `on delete delete`), database automatically clears the foreign key of dissociated child objects or automatically deletes the dissociated child objects

        >   Although database-level cascade modification performs better than ORM-level cascade modification, the ORM is unaware of this. Use with caution in projects requiring cache consistency

    -   Otherwise, database reports an error and the save command is terminated

-   If the foreign key is fake *(see [Real and Fake Foreign Keys](/docs/mapping/base/foreignkey))*, when parent object is deleted, no additional behavior occurs, allowing dangling issues with child object foreign key values

    >   Even if fake foreign key values are invalid dangling values, jimmer queries won't error - the query system will return null for parent objects rather than error due to non-existent parent

</td>
</tr>
<tr>
<td>CHECK</td>
<td>Does not support dissociation operations. Throws exception to prevent operation if current parent object in database has child objects that need to be dissociated.</td>
</tr>
<tr>
<td>SET_NULL</td>
<td>Sets the foreign key of dissociated child objects to null. This mode requires that the child object's foreign key property is nullable; otherwise attempting this configuration will cause an exception.</td>
</tr>
<tr>
<td>DELETE</td>
<td>Deletes the dissociated child objects.</td>
</tr>
</tbody>
</table>
