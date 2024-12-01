<table>
<thead>
<tr>
<th>数据库已有数据结构</th>
<th>用户期望保存的数据结构</th>
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
+-----Meat(忽略子节点)
|
\-----Bread(忽略子节点)
```

</td>
<td>

```sh
+-Food
|
+-----Drinks(忽略子节点)
|
|
|
\-----Bread(忽略子节点)
```

</td>
</tr>
</tbody>
</table>

-   对于`Bread`而言，在新旧数据结构中都存在，对应update操作

-   对于`Drinks`而言，在旧数据结构中不存在，但在新数据中存在，对应INSERT操作

-   对于`Meat`而言，在旧数据结构中存在，但在新数据中不存在，对应的操作叫做脱勾操作。