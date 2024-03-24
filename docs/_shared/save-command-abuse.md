The UI design for modifying data in an application can be divided into two styles:

- Fully Commit

    This type of UI often has complex forms and provides a final button. After editing, the user submits all the information in the form at once.

- Incremental Commit

    This type of UI does not have a submit button. Each time the user completes a local operation, the page automatically submits the changed part, which is a fragmented commit mode.

The greatest value of the Save Command lies in simplifying the development of fully commit mode functionality. For the two different modes, the usage is different.

<table>
<thead>
<tr>
<th>Fully Commit</th>
<th>Incremental Commit</th>
</tr>
</thead>
<tbody>
<tr>
<td>

Jimmer automatically handles the internal details, comparing the new and old data to find all differences and executing the relevant modification operations *(Jimmer's unique perspective)*

**Use the Save Command** *(parameters are often complex data structures)*

</td>
<td>

Business code uses a combination of multiple simple operations to implement complex operations, and the user handles the internal details *(the same as traditional methods)*.

Comprehensively use multiple methods:

- **Save Command** *(parameters are often relatively simple objects)*
- [Delete Command](/docs/mutation/delete-command)
- [Update Statement](/docs/mutation/update-statement)
- [Delete Statement](/docs/mutation/delete-statement)
- [Directly Modify Join Tables](/docs/mutation/associations)

</td>
</tr>
</tbody>
</table>

Developers need to analyze their business scenarios to determine whether the current modification operation is a fully commit or an incremental commit, and make the right choice accordingly, without abuse.
