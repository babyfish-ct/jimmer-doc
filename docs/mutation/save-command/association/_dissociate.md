<table>
<thead>
<tr>
<th>Existing Database Structure</th>
<th>User's Expected Data Structure</th>
</tr>
</thead>
<tbody>
<tr>
<td>

```sh
+-Food
|
|
|
# highlight-next-line
+-----Meat(ignore child nodes)
|
\-----Bread(ignore child nodes)
```

</td>
<td>

```sh
+-Food
|
+-----Drinks(ignore child nodes)
|
|
|
\-----Bread(ignore child nodes)
```

</td>
</tr>
</tbody>
</table>

- For `Bread`, it exists in both old and new data structures, corresponding to an UPDATE operation

- For `Drinks`, it doesn't exist in the old data structure but exists in the new data, corresponding to an INSERT operation

- For `Meat`, it exists in the old data structure but not in the new data, corresponding to an operation called dissociation operation.