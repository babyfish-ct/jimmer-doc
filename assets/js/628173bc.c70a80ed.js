"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[3093],{60841:(i,n,e)=>{e.r(n),e.d(n,{assets:()=>m,contentTitle:()=>l,default:()=>r,frontMatter:()=>d,metadata:()=>I,toc:()=>o});const I=JSON.parse('{"id":"quick-view/get-started/create-database","title":"Create Database","description":"UML","source":"@site/docs/quick-view/get-started/create-database.mdx","sourceDirName":"quick-view/get-started","slug":"/quick-view/get-started/create-database","permalink":"/jimmer-doc/docs/quick-view/get-started/create-database","draft":false,"unlisted":false,"editUrl":"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/quick-view/get-started/create-database.mdx","tags":[],"version":"current","lastUpdatedAt":1712477512000,"sidebarPosition":2,"frontMatter":{"sidebar_position":2,"title":"Create Database"},"sidebar":"tutorialSidebar","previous":{"title":"Create a Project","permalink":"/jimmer-doc/docs/quick-view/get-started/create-project"},"next":{"title":"Define Entities","permalink":"/jimmer-doc/docs/quick-view/get-started/define-entity"}}');var a=e(74848),t=e(28453);const d={sidebar_position:2,title:"Create Database"},l=void 0,m={},o=[{value:"UML",id:"uml",level:2},{value:"Create SQL File",id:"create-sql-file",level:2},{value:"Create Database",id:"create-database",level:2}];function c(i){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...i.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"uml",children:"UML"}),"\n",(0,a.jsx)(n.p,{children:"The examples in this tutorial require the following four entity types:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"uml",src:e(53370).A+"",width:"431",height:"202"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"BookStore, Book, Author:\nDemonstrate various associations including one-to-many, many-to-one, many-to-many."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["TreeNode:\nDemonstrates infinite recursion ",(0,a.jsx)(n.em,{children:"(self-associated properites)"}),", include recursive queries and recursive saving."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"create-sql-file",children:"Create SQL File"}),"\n",(0,a.jsxs)(n.p,{children:["This tutorial uses MySQL. Create a new SQL file ",(0,a.jsx)(n.code,{children:"jimmer-demo.sql"})," with the following code:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"create database jimmer_demo;\nuse jimmer_demo;\n\ncreate table book_store(\n    id bigint unsigned not null auto_increment primary key, \n    name varchar(50) not null,\n    website varchar(100)\n) engine=innodb;\n\n... \n\ncreate table book (\n    id bigint unsigned not null auto_increment primary key,\n    name varchar(50) not null,  \n    edition integer not null,\n    price numeric(10, 2) not null,\n    store_id bigint unsigned  \n) engine=innodb;   \n\n...\n\ncreate table author(\n   id bigint unsigned not null auto_increment primary key,\n   first_name varchar(25) not null,\n   last_name varchar(25) not null,\n   gender char(1) not null, \n   created_time datetime not null,\n   modified_time datetime not null\n) engine=innodb;\n\n...\n\n/*\nMany-to-many relationship between entities requires join table in ORM implementation.\n\nThis table stores many-to-many mapping between books and authors. It is a join table, \nnot an entity table, so no corresponding entity in the UML diagram above.  \n*/\ncreate table book_author_mapping(\n    book_id bigint unsigned not null,\n    author_id bigint unsigned not null\n) engine=innodb;\n\n...\n\ncreate table tree_node(\n    node_id bigint unsigned not null auto_increment primary key,\n    name varchar(20) not null,\n    parent_id bigint unsigned  \n) engine=innodb;\n\n...\n\ninsert into book_store(id, name) values\n    (1, 'O''REILLY'),\n    (2, 'MANNING')\n;\n\ninsert into book(id, name, edition, price, store_id) values\n    (1, 'Learning GraphQL', 1, 50, 1),\n    (2, 'Learning GraphQL', 2, 55, 1),\n    (3, 'Learning GraphQL', 3, 51, 1),\n\n    (4, 'Effective TypeScript', 1, 73, 1),\n    (5, 'Effective TypeScript', 2, 69, 1),\n    (6, 'Effective TypeScript', 3, 88, 1),\n\n    (7, 'Programming TypeScript', 1, 47.5, 1),\n    (8, 'Programming TypeScript', 2, 45, 1),\n    (9, 'Programming TypeScript', 3, 48, 1),\n\n    (10, 'GraphQL in Action', 1, 80, 2),\n    (11, 'GraphQL in Action', 2, 81, 2),\n    (12, 'GraphQL in Action', 3, 80, 2)\n;\n\ninsert into author(id, first_name, last_name, gender, created_time, modified_time) values\n    (1, 'Eve', 'Procello', 'F', now(), now()),\n    (2, 'Alex', 'Banks', 'M', now(), now()),\n    (3, 'Dan', 'Vanderkam', 'M', now(), now()),\n    (4, 'Boris', 'Cherny', 'M', now(), now()),\n    (5, 'Samer', 'Buna', 'M', now(), now())\n;\n\ninsert into book_author_mapping(book_id, author_id) values\n    (1, 1),\n    (2, 1),\n    (3, 1),\n\n    (1, 2),\n    (2, 2),\n    (3, 2),\n\n    (4, 3),\n    (5, 3),\n    (6, 3),\n\n    (7, 4),\n    (8, 4),\n    (9, 4),\n\n    (10, 5),\n    (11, 5),\n    (12, 5)\n;\n\ninsert into tree_node(\n    node_id, name, parent_id\n) values\n    (1, 'Home', null),\n        (2, 'Food', 1),\n            (3, 'Drinks', 2),\n                (4, 'Coca Cola', 3),\n                (5, 'Fanta', 3),\n            (6, 'Bread', 2),\n                (7, 'Baguette', 6),\n                (8, 'Ciabatta', 6),\n        (9, 'Clothing', 1),\n            (10, 'Woman', 9),\n                (11, 'Casual wear', 10),\n                    (12, 'Dress', 11),\n                    (13, 'Miniskirt', 11),\n                    (14, 'Jeans', 11),\n                (15, 'Formal wear', 10),\n                    (16, 'Suit', 15),\n                    (17, 'Shirt', 15),\n            (18, 'Man', 9),\n                (19, 'Casual wear', 18),\n                    (20, 'Jacket', 19),\n                    (21, 'Jeans', 19),\n                (22, 'Formal wear', 18),\n                    (23, 'Suit', 22),\n                    (24, 'Shirt', 22)\n;\n"})}),"\n",(0,a.jsx)(n.p,{children:"This SQL file shows:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Entity tables - ",(0,a.jsx)(n.code,{children:"book_store"}),", ",(0,a.jsx)(n.code,{children:"book"}),", ",(0,a.jsx)(n.code,{children:"author"}),", ",(0,a.jsx)(n.code,{children:"tree_node"})," map to entities in UML"]}),"\n",(0,a.jsxs)(n.li,{children:["Join table - ",(0,a.jsx)(n.code,{children:"book_author_mapping"})," represents many-to-many mapping between Book and Author"]}),"\n"]}),"\n",(0,a.jsxs)(n.admonition,{type:"note",children:[(0,a.jsx)(n.p,{children:"This is a basic database structure. More fields will be added in later tutorials."}),(0,a.jsxs)(n.p,{children:["See ",(0,a.jsx)(n.a,{href:"https://github.com/babyfish-ct/jimmer-examples/blob/main/env-with-cache/maxwell/jimmer-demo.sql",children:"https://github.com/babyfish-ct/jimmer-examples/blob/main/env-with-cache/maxwell/jimmer-demo.sql"})," for full SQL."]})]}),"\n",(0,a.jsx)(n.h2,{id:"create-database",children:"Create Database"}),"\n",(0,a.jsx)(n.p,{children:"Install Docker. Open a command line, navigate to the SQL file directory, and run:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"docker run \\ \n    --name jimmer-demo-mysql \\\n    ...\n    mysql \\\n    --lower_case_table_names=1\n    \ndocker cp jimmer-demo.sql jimmer-demo-mysql:/var/jimmer-demo.sql\n\ndocker exec jimmer-demo-mysql /bin/sh -c \\\n        'mysql -uroot -p123456 </var/jimmer-demo.sql' \n"})})]})}function r(i={}){const{wrapper:n}={...(0,t.R)(),...i.components};return n?(0,a.jsx)(n,{...i,children:(0,a.jsx)(c,{...i})}):c(i)}},53370:(i,n,e)=>{e.d(n,{A:()=>I});const I="data:image/svg+xml;base64,PHN2ZyBpZD0iU3ZnanNTdmcxMDAxIiB3aWR0aD0iNDMxIiBoZWlnaHQ9IjIwMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxuczpzdmdqcz0iaHR0cDovL3N2Z2pzLmNvbS9zdmdqcyI+PGRlZnMgaWQ9IlN2Z2pzRGVmczEwMDIiPjwvZGVmcz48ZyBpZD0iU3ZnanNHMTAwOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjUsMjUpIj48cGF0aCBpZD0iU3ZnanNQYXRoMTAwOSIgZD0iTSAwIDRRIDAgMCA0IDBMIDgxIDBRIDg1IDAgODUgNEwgODUgMjlRIDg1IDMzIDgxIDMzTCA0IDMzUSAwIDMzIDAgMjlaIiBzdHJva2U9InJnYmEoMzMsNDEsNDgsMSkiIHN0cm9rZS13aWR0aD0iMiIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PGcgaWQ9IlN2Z2pzRzEwMTAiPjx0ZXh0IGlkPSJTdmdqc1RleHQxMDExIiBmb250LWZhbWlseT0i5b6u6L2v6ZuF6buRIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjEzcHgiIHdpZHRoPSI2NXB4IiBmaWxsPSIjMzIzMjMyIiBmb250LXdlaWdodD0iNDAwIiBhbGlnbj0ibWlkZGxlIiBsaW5lSGVpZ2h0PSIxMjUlIiBhbmNob3I9Im1pZGRsZSIgZmFtaWx5PSLlvq7ova/pm4Xpu5EiIHNpemU9IjEzcHgiIHdlaWdodD0iNDAwIiBmb250LXN0eWxlPSIiIG9wYWNpdHk9IjEiIHk9IjUuODc1IiB0cmFuc2Zvcm09InJvdGF0ZSgwKSI+PHRzcGFuIGlkPSJTdmdqc1RzcGFuMTAxMiIgZHk9IjE2IiB4PSI0Mi41Ij48dHNwYW4gaWQ9IlN2Z2pzVHNwYW4xMDEzIiBzdHlsZT0idGV4dC1kZWNvcmF0aW9uOjsiPkJvb2tTdG9yZTwvdHNwYW4+PC90c3Bhbj48L3RleHQ+PC9nPjwvZz48ZyBpZD0iU3ZnanNHMTAxNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTczLDI1KSI+PHBhdGggaWQ9IlN2Z2pzUGF0aDEwMTUiIGQ9Ik0gMCA0USAwIDAgNCAwTCA4MSAwUSA4NSAwIDg1IDRMIDg1IDI5USA4NSAzMyA4MSAzM0wgNCAzM1EgMCAzMyAwIDI5WiIgc3Ryb2tlPSJyZ2JhKDMzLDQxLDQ4LDEpIiBzdHJva2Utd2lkdGg9IjIiIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjxnIGlkPSJTdmdqc0cxMDE2Ij48dGV4dCBpZD0iU3ZnanNUZXh0MTAxNyIgZm9udC1mYW1pbHk9IuW+rui9r+mbhem7kSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSIxM3B4IiB3aWR0aD0iNjVweCIgZmlsbD0iIzMyMzIzMiIgZm9udC13ZWlnaHQ9IjQwMCIgYWxpZ249Im1pZGRsZSIgbGluZUhlaWdodD0iMTI1JSIgYW5jaG9yPSJtaWRkbGUiIGZhbWlseT0i5b6u6L2v6ZuF6buRIiBzaXplPSIxM3B4IiB3ZWlnaHQ9IjQwMCIgZm9udC1zdHlsZT0iIiBvcGFjaXR5PSIxIiB5PSI1Ljg3NSIgdHJhbnNmb3JtPSJyb3RhdGUoMCkiPjx0c3BhbiBpZD0iU3ZnanNUc3BhbjEwMTgiIGR5PSIxNiIgeD0iNDIuNSI+PHRzcGFuIGlkPSJTdmdqc1RzcGFuMTAxOSIgc3R5bGU9InRleHQtZGVjb3JhdGlvbjo7Ij5Cb29rPC90c3Bhbj48L3RzcGFuPjwvdGV4dD48L2c+PC9nPjxnIGlkPSJTdmdqc0cxMDIwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMjEsMjUpIj48cGF0aCBpZD0iU3ZnanNQYXRoMTAyMSIgZD0iTSAwIDRRIDAgMCA0IDBMIDgxIDBRIDg1IDAgODUgNEwgODUgMjlRIDg1IDMzIDgxIDMzTCA0IDMzUSAwIDMzIDAgMjlaIiBzdHJva2U9InJnYmEoMzMsNDEsNDgsMSkiIHN0cm9rZS13aWR0aD0iMiIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PGcgaWQ9IlN2Z2pzRzEwMjIiPjx0ZXh0IGlkPSJTdmdqc1RleHQxMDIzIiBmb250LWZhbWlseT0i5b6u6L2v6ZuF6buRIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjEzcHgiIHdpZHRoPSI2NXB4IiBmaWxsPSIjMzIzMjMyIiBmb250LXdlaWdodD0iNDAwIiBhbGlnbj0ibWlkZGxlIiBsaW5lSGVpZ2h0PSIxMjUlIiBhbmNob3I9Im1pZGRsZSIgZmFtaWx5PSLlvq7ova/pm4Xpu5EiIHNpemU9IjEzcHgiIHdlaWdodD0iNDAwIiBmb250LXN0eWxlPSIiIG9wYWNpdHk9IjEiIHk9IjUuODc1IiB0cmFuc2Zvcm09InJvdGF0ZSgwKSI+PHRzcGFuIGlkPSJTdmdqc1RzcGFuMTAyNCIgZHk9IjE2IiB4PSI0Mi41Ij48dHNwYW4gaWQ9IlN2Z2pzVHNwYW4xMDI1IiBzdHlsZT0idGV4dC1kZWNvcmF0aW9uOjsiPkF1dGhvcjwvdHNwYW4+PC90c3Bhbj48L3RleHQ+PC9nPjwvZz48ZyBpZD0iU3ZnanNHMTAyNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjUsMTQ0KSI+PHBhdGggaWQ9IlN2Z2pzUGF0aDEwMjciIGQ9Ik0gMCA0USAwIDAgNCAwTCA4MyAwUSA4NyAwIDg3IDRMIDg3IDI5USA4NyAzMyA4MyAzM0wgNCAzM1EgMCAzMyAwIDI5WiIgc3Ryb2tlPSJyZ2JhKDMzLDQxLDQ4LDEpIiBzdHJva2Utd2lkdGg9IjIiIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjxnIGlkPSJTdmdqc0cxMDI4Ij48dGV4dCBpZD0iU3ZnanNUZXh0MTAyOSIgZm9udC1mYW1pbHk9IuW+rui9r+mbhem7kSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSIxM3B4IiB3aWR0aD0iNjdweCIgZmlsbD0iIzMyMzIzMiIgZm9udC13ZWlnaHQ9IjQwMCIgYWxpZ249Im1pZGRsZSIgbGluZUhlaWdodD0iMTI1JSIgYW5jaG9yPSJtaWRkbGUiIGZhbWlseT0i5b6u6L2v6ZuF6buRIiBzaXplPSIxM3B4IiB3ZWlnaHQ9IjQwMCIgZm9udC1zdHlsZT0iIiBvcGFjaXR5PSIxIiB5PSI1Ljg3NSIgdHJhbnNmb3JtPSJyb3RhdGUoMCkiPjx0c3BhbiBpZD0iU3ZnanNUc3BhbjEwMzAiIGR5PSIxNiIgeD0iNDMuNSI+PHRzcGFuIGlkPSJTdmdqc1RzcGFuMTAzMSIgc3R5bGU9InRleHQtZGVjb3JhdGlvbjo7Ij5UcmVlTm9kZTwvdHNwYW4+PC90c3Bhbj48L3RleHQ+PC9nPjwvZz48ZyBpZD0iU3ZnanNHMTAzMiI+PHBhdGggaWQ9IlN2Z2pzUGF0aDEwMzMiIGQ9Ik0xMTEgNDJMMTQxLjUgNDJMMTQxLjUgNDJMMTcyIDQyIiBzdHJva2U9IiM3ZjdmN2YiIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxyZWN0IGlkPSJTdmdqc1JlY3QxMDM0IiB3aWR0aD0iMjEiIGhlaWdodD0iMTYiIHg9IjEzMSIgeT0iMzQiIGZpbGw9IiNmZmZmZmYiPjwvcmVjdD48dGV4dCBpZD0iU3ZnanNUZXh0MTAzNSIgZm9udC1mYW1pbHk9IuW+rui9r+mbhem7kSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSIxM3B4IiB3aWR0aD0iMjFweCIgZmlsbD0iIzMyMzIzMiIgZm9udC13ZWlnaHQ9IjQwMCIgYWxpZ249InRvcCIgbGluZUhlaWdodD0iMTZweCIgYW5jaG9yPSJtaWRkbGUiIGZhbWlseT0i5b6u6L2v6ZuF6buRIiBzaXplPSIxM3B4IiB3ZWlnaHQ9IjQwMCIgZm9udC1zdHlsZT0iIiBvcGFjaXR5PSIxIiB5PSIzMS4zNzUiIHRyYW5zZm9ybT0icm90YXRlKDApIj48dHNwYW4gaWQ9IlN2Z2pzVHNwYW4xMDM2IiBkeT0iMTYiIHg9IjE0MS41Ij48dHNwYW4gaWQ9IlN2Z2pzVHNwYW4xMDM3IiBzdHlsZT0idGV4dC1kZWNvcmF0aW9uOjsiPjA6TjwvdHNwYW4+PC90c3Bhbj48L3RleHQ+PC9nPjxnIGlkPSJTdmdqc0cxMDM4Ij48cGF0aCBpZD0iU3ZnanNQYXRoMTAzOSIgZD0iTTI1OSA0MkwyODkuNSA0MkwyODkuNSA0MkwzMjAgNDIiIHN0cm9rZT0iIzdmOGI5OCIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIj48L3BhdGg+PHJlY3QgaWQ9IlN2Z2pzUmVjdDEwNDAiIHdpZHRoPSIyNCIgaGVpZ2h0PSIxNiIgeD0iMjc3LjUiIHk9IjM0IiBmaWxsPSIjZmZmZmZmIj48L3JlY3Q+PHRleHQgaWQ9IlN2Z2pzVGV4dDEwNDEiIGZvbnQtZmFtaWx5PSLlvq7ova/pm4Xpu5EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc2l6ZT0iMTNweCIgd2lkdGg9IjI0cHgiIGZpbGw9IiMzMjMyMzIiIGZvbnQtd2VpZ2h0PSI0MDAiIGFsaWduPSJ0b3AiIGxpbmVIZWlnaHQ9IjE2cHgiIGFuY2hvcj0ibWlkZGxlIiBmYW1pbHk9IuW+rui9r+mbhem7kSIgc2l6ZT0iMTNweCIgd2VpZ2h0PSI0MDAiIGZvbnQtc3R5bGU9IiIgb3BhY2l0eT0iMSIgeT0iMzEuMzc1IiB0cmFuc2Zvcm09InJvdGF0ZSgwKSI+PHRzcGFuIGlkPSJTdmdqc1RzcGFuMTA0MiIgZHk9IjE2IiB4PSIyODkuNSI+PHRzcGFuIGlkPSJTdmdqc1RzcGFuMTA0MyIgc3R5bGU9InRleHQtZGVjb3JhdGlvbjo7Ij5NOk48L3RzcGFuPjwvdHNwYW4+PC90ZXh0PjwvZz48ZyBpZD0iU3ZnanNHMTA0NCI+PHBhdGggaWQ9IlN2Z2pzUGF0aDEwNDUiIGQ9Ik02OC45ODMzMzU2NDc2NjYwMSAxNDMuMDAwMTM4ODU5OTYwNEw2OC41IDExNEwxNDIgMTE0TDE0MiAxNjFMMTEzIDE2MSIgc3Ryb2tlPSIjN2Y4Yjk4IiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiPjwvcGF0aD48cmVjdCBpZD0iU3ZnanNSZWN0MTA0NiIgd2lkdGg9IjIxIiBoZWlnaHQ9IjE2IiB4PSIxMTguMjQ3OTE2ODExMzIyNTEiIHk9IjEwNiIgZmlsbD0iI2ZmZmZmZiI+PC9yZWN0Pjx0ZXh0IGlkPSJTdmdqc1RleHQxMDQ3IiBmb250LWZhbWlseT0i5b6u6L2v6ZuF6buRIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjEzcHgiIHdpZHRoPSIyMXB4IiBmaWxsPSIjMzIzMjMyIiBmb250LXdlaWdodD0iNDAwIiBhbGlnbj0idG9wIiBsaW5lSGVpZ2h0PSIxNnB4IiBhbmNob3I9Im1pZGRsZSIgZmFtaWx5PSLlvq7ova/pm4Xpu5EiIHNpemU9IjEzcHgiIHdlaWdodD0iNDAwIiBmb250LXN0eWxlPSIiIG9wYWNpdHk9IjEiIHk9IjEwMy4zNzUiIHRyYW5zZm9ybT0icm90YXRlKDApIj48dHNwYW4gaWQ9IlN2Z2pzVHNwYW4xMDQ4IiBkeT0iMTYiIHg9IjEyOC43NDc5MTY4MTEzMjI1Ij48dHNwYW4gaWQ9IlN2Z2pzVHNwYW4xMDQ5IiBzdHlsZT0idGV4dC1kZWNvcmF0aW9uOjsiPjA6TjwvdHNwYW4+PC90c3Bhbj48L3RleHQ+PC9nPjwvc3ZnPg=="},28453:(i,n,e)=>{e.d(n,{R:()=>d,x:()=>l});var I=e(96540);const a={},t=I.createContext(a);function d(i){const n=I.useContext(t);return I.useMemo((function(){return"function"==typeof i?i(n):{...n,...i}}),[n,i])}function l(i){let n;return n=i.disableParentContext?"function"==typeof i.components?i.components(a):i.components||a:d(i.components),I.createElement(t.Provider,{value:n},i.children)}}}]);