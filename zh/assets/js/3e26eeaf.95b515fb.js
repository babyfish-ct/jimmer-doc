"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[9776],{90317:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>c,metadata:()=>t,toc:()=>h});const t=JSON.parse('{"id":"mutation/save-command/mysql","title":"MySQL\u7684\u95ee\u9898","description":"1. \u57fa\u672c\u6982\u5ff5","source":"@site/i18n/zh/docusaurus-plugin-content-docs/current/mutation/save-command/mysql.mdx","sourceDirName":"mutation/save-command","slug":"/mutation/save-command/mysql","permalink":"/jimmer-doc/zh/docs/mutation/save-command/mysql","draft":false,"unlisted":false,"editUrl":"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/mutation/save-command/mysql.mdx","tags":[],"version":"current","lastUpdatedAt":1734790168000,"sidebarPosition":10,"frontMatter":{"sidebar_position":10,"title":"MySQL\u7684\u95ee\u9898"},"sidebar":"tutorialSidebar","previous":{"title":"\u60b2\u89c2\u9501","permalink":"/jimmer-doc/zh/docs/mutation/save-command/pessimistic-locking"},"next":{"title":"Input DTO","permalink":"/jimmer-doc/zh/docs/mutation/save-command/input-dto/"}}');var l=i(74848),s=i(28453),r=i(11470),a=i(19365);const c={sidebar_position:10,title:"MySQL\u7684\u95ee\u9898"},o=void 0,d={},h=[{value:"1. \u57fa\u672c\u6982\u5ff5",id:"1-\u57fa\u672c\u6982\u5ff5",level:2},{value:"2. \u51c6\u5907\u5de5\u4f5c",id:"2-\u51c6\u5907\u5de5\u4f5c",level:2},{value:"2.1. \u542f\u7528MySQL\u7684\u6279\u91cf\u64cd\u4f5c",id:"21-\u542f\u7528mysql\u7684\u6279\u91cf\u64cd\u4f5c",level:3},{value:"2.2. \u660e\u786e\u8868\u793a\u54d1\u6279\u64cd\u4f5c\u53ef\u4ee5\u63a5\u53d7",id:"22-\u660e\u786e\u8868\u793a\u54d1\u6279\u64cd\u4f5c\u53ef\u4ee5\u63a5\u53d7",level:3},{value:"3. \u7b80\u5355\u6848\u4f8b",id:"3-\u7b80\u5355\u6848\u4f8b",level:2},{value:"3.1 \u6307\u5b9a\u5bf9\u8c61id",id:"31-\u6307\u5b9a\u5bf9\u8c61id",level:3},{value:"3.2 \u4e0d\u6307\u5b9a\u5bf9\u8c61id",id:"32-\u4e0d\u6307\u5b9a\u5bf9\u8c61id",level:3},{value:"4. \u590d\u6742\u6848\u4f8b",id:"4-\u590d\u6742\u6848\u4f8b",level:2}];function u(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"1-\u57fa\u672c\u6982\u5ff5",children:"1. \u57fa\u672c\u6982\u5ff5"}),"\n",(0,l.jsx)(n.p,{children:"\u5728\u4e4b\u524d\u7684\u6587\u7ae0\u4e2d\uff0c\u6211\u4eec\u53cd\u590d\u5f3a\u8c03\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cJimmer\u4e0d\u4f1a\u4e3aMySQL\u542f\u7528\u6279\u91cf\u67e5\u8be2\u3002\u8fd9\u662f\u56e0\u4e3aMySQL\u5bf9\u6279\u91cf\u67e5\u8be2\u7684\u652f\u6301\u5b58\u5728\u4e24\u4e2a\u7f3a\u9677\uff1a"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u5fc5\u987b\u5728JDBC\u8fde\u63a5\u5b57\u7b26\u4e32\u4e2d\u663e\u5f0f\u6307\u5b9a",(0,l.jsx)(n.code,{children:"rewriteBatchedStatements"}),"\u624d\u80fd\u5f00\u542fMySQL\u7684\u6279\u91cf\u64cd\u4f5c\u80fd\u529b\uff0c\u4f8b\u5982"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"jdbc:mysql://localhost:3306/mydb?rewriteBatchedStatements=true\n"})}),"\n",(0,l.jsx)(n.admonition,{type:"caution",children:(0,l.jsxs)(n.p,{children:["\u5982\u679c\u4e0d\u6307\u5b9a",(0,l.jsx)(n.code,{children:"rewriteBatchedStatements"}),"\uff0c\u867d\u7136JDBC\u7684Batch\u64cd\u4f5c\u4ecd\u7136\u53ef\u4ee5\u6267\u884c\uff0c\u4f46\u5b9e\u9645\u88ab\u8c03\u7528\u7684\u662f\u865a\u5047\u5b9e\u73b0\u3002\n\u5bf9\u6027\u80fd\u6ca1\u6709\u4efb\u4f55\u5e2e\u52a9\uff0c\u672c\u8d28\u4e0a\u548c\u4f7f\u7528\u591a\u6761SQL\u6ca1\u6709\u4efb\u4f55\u533a\u522b\u3002"]})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u4e00\u65e6\u771f\u6b63\u542f\u7528\u4e86MySQL\u7684\u6279\u91cf\u64cd\u4f5c\uff0c\u4f1a\u4e22\u5931\u5fc5\u8981\u7684\u8fd4\u56de\u4fe1\u606f\uff0c\u4f8b\u5982"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u65e0\u6cd5\u8fd4\u56deJDBC\u7684",(0,l.jsx)(n.code,{children:"generatedKeys"}),"\uff0c\u8fd9\u4f1a\u5bfc\u81f4\u65e0id\u5c5e\u6027\u7684\u5b9e\u4f53\u5bf9\u8c61\u7684id\u65e0\u6cd5\u88ab\u81ea\u52a8\u586b\u5145\uff0c\u800c\u8fd9\u5bf9\u57fa\u4e8e\u81ea\u52a8\u7f16\u53f7\u7684id\u5206\u914d\u7b56\u7565\u800c\u8a00\u662f\u975e\u5e38\u91cd\u8981\u4e14\u5e38\u89c1\u7684\u8bc9\u6c42"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u65e0\u6cd5\u8fd4\u56de\u4efb\u4f55\u64cd\u4f5c\u7684\u5f71\u54cd\u884c\u6570"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.admonition,{type:"info",children:[(0,l.jsxs)(n.p,{children:["Jimmer\u79f0MySQL\u7684\u8fd9\u79cd\u6279\u91cf\u64cd\u4f5c\u4e3a",(0,l.jsx)(n.strong,{children:"\u54d1\u6279\u64cd\u4f5c"}),"\u3002\u7531\u4e8e\u8be5\u64cd\u4f5c\u4f1a\u5bfc\u81f4\u5b9e\u8d28\u6027\u7684\u529f\u80fd\u7f3a\u5931"]}),(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u9664\u975e\u7528\u6237\u660e\u786e\u8868\u793a\u81ea\u5df1\u53ef\u4ee5\u63a5\u53d7",(0,l.jsx)(n.strong,{children:"\u54d1\u6279\u64cd\u4f5c"}),"\uff0cJimmer\u4e0d\u4f1a\u91c7\u7528MySQL\u7684\u6279\u91cf\u64cd\u4f5c"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u5373\u4f7f\u7528\u6237\u660e\u786e\u8868\u793a\u81ea\u5df1\u53ef\u4ee5\u63a5\u53d7",(0,l.jsx)(n.strong,{children:"\u54d1\u6279\u64cd\u4f5c"}),"\uff0cJimmer\u4e5f\u53ea\u662f\u5c3d\u91cf\u91c7\u7528MySQL\u7684\u6279\u91cf\u64cd\u4f5c\uff0c\u4f46\u4e0d\u4fdd\u8bc1\u4e00\u5b9a\u4f1a\u3002\u8fd9\u4e5f\u662f\u672c\u6587\u8981\u8ba8\u8bba\u7684\u91cd\u70b9\u4e4b\u4e00"]}),"\n"]}),"\n"]})]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"2-\u51c6\u5907\u5de5\u4f5c",children:"2. \u51c6\u5907\u5de5\u4f5c"}),"\n",(0,l.jsx)(n.h3,{id:"21-\u542f\u7528mysql\u7684\u6279\u91cf\u64cd\u4f5c",children:"2.1. \u542f\u7528MySQL\u7684\u6279\u91cf\u64cd\u4f5c"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u4fee\u6539\u6570\u636e\u5e93\u8fde\u63a5\u5b57\u7b26\u4e32"}),"\n",(0,l.jsxs)(n.p,{children:["\u4e3a\u8fde\u63a5\u5b57\u7b26\u4e32\u6307\u5b9a",(0,l.jsx)(n.code,{children:"rewriteBatchedStatements"}),"\uff0c\u4f8b\u5982"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"jdbc:mysql://localhost:3306/mydb?rewriteBatchedStatements=true\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u4e3asqlClient\u5f00\u542f\u660e\u786e\u7684\u6279\u91cf\u64cd\u4f5c\u652f\u6301\uff0c\u5b58\u5728\u5982\u4e0b\u4e24\u79cd\u7b49\u4ef7\u7684\u65b9\u6cd5\uff0c\u4efb\u9009\u5176\u4e00"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u91c7\u7528Jimmer\u7684Spring Boot Starter"}),"\n",(0,l.jsxs)(n.p,{children:["\u7f16\u8f91",(0,l.jsx)(n.code,{children:"application.yml"}),"\u6216",(0,l.jsx)(n.code,{children:"application.properties"}),"\uff0c\u5982\u4e0b"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",metastring:'title="application.yml"',children:"jimmer:\n    # highlight-next-line\n    explicit-batch-enabled: true\n    ...\u7701\u7565\u5176\u4ed6\u914d\u7f6e...\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u91c7\u7528Jimmer\u7684\u6838\u5fc3API"}),"\n",(0,l.jsxs)(r.A,{groupId:"language",children:[(0,l.jsx)(a.A,{value:"java",label:"Java",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:"JSqlClient sqlCient = JSqlClient\n    .newBuilder()\n    // highlight-next-line\n    .setExplicitBatchEnabled(true)\n    ...\u7701\u7565\u5176\u4ed6\u914d\u7f6e...\n    .build();\n"})})}),(0,l.jsx)(a.A,{value:"kotlin",label:"Kotlin",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-kotlin",children:"val sqlClient = sqlCient {\n    // highlight-next-line\n    setExplicitBatchEnabled(true)\n    ...\u7701\u7565\u5176\u4ed6\u914d\u7f6e...\n}\n"})})})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"22-\u660e\u786e\u8868\u793a\u54d1\u6279\u64cd\u4f5c\u53ef\u4ee5\u63a5\u53d7",children:"2.2. \u660e\u786e\u8868\u793a\u54d1\u6279\u64cd\u4f5c\u53ef\u4ee5\u63a5\u53d7"}),"\n",(0,l.jsx)(n.p,{children:"\u6709\u4e24\u79cd\u65b9\u6cd5\u53ef\u7528\u4e8e\u660e\u786e\u5730\u5411Jimmer\u8868\u793a\u54d1\u6279\u64cd\u4f5c\u662f\u53ef\u4ee5\u63a5\u53d7\u7684"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u5168\u5c40\u914d\u7f6e ",(0,l.jsx)(n.em,{children:"(\u4e0d\u63a8\u8350)"})]}),"\n",(0,l.jsx)(n.p,{children:"\u5168\u5c40\u914d\u7f6e\u53c8\u53ef\u5206\u4e3a\u4e24\u79cd"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u91c7\u7528Jimmer\u7684Spring Boot Starter"}),"\n",(0,l.jsxs)(n.p,{children:["\u7f16\u8f91",(0,l.jsx)(n.code,{children:"application.yml"}),"\u6216",(0,l.jsx)(n.code,{children:"application.properties"}),"\uff0c\u5982\u4e0b"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",metastring:'title="application.yml"',children:"jimmer:\n    # highlight-next-line\n    dumb-batch-acceptable: true\n    ...\u7701\u7565\u5176\u4ed6\u914d\u7f6e...\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u91c7\u7528Jimmer\u7684\u6838\u5fc3API"}),"\n",(0,l.jsxs)(r.A,{groupId:"language",children:[(0,l.jsx)(a.A,{value:"java",label:"Java",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:"JSqlClient sqlCient = JSqlClient\n    .newBuilder()\n    // highlight-next-line\n    .setDumbBatchAcceptable(true)\n    ...\u7701\u7565\u5176\u4ed6\u914d\u7f6e...\n    .build();\n"})})}),(0,l.jsx)(a.A,{value:"kotlin",label:"Kotlin",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-kotlin",children:"val sqlClient = sqlCient {\n    // highlight-next-line\n    setDumbBatchAcceptable(true)\n    ...\u7701\u7565\u5176\u4ed6\u914d\u7f6e...\n}\n"})})})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u4fdd\u5b58\u6307\u4ee4\u7ea7\u914d\u7f6e ",(0,l.jsx)(n.em,{children:"(\u63a8\u8350)"})]}),"\n",(0,l.jsxs)(r.A,{groupId:"language",children:[(0,l.jsx)(a.A,{value:"java",label:"Java",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:"List<Book> books = ...\u7565...;\n\nsqlClient\n    .saveEntitiesCommand(books)\n    // highlight-next-line\n    .setDumbBatchAcceptable(true)\n    .execute();\n"})})}),(0,l.jsx)(a.A,{value:"kotlin",label:"Kotlin",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-kotlin",children:"val books = ...\u7565...;\n\nsqlClient.saveEntities(books) {\n    // highlight-next-line\n    setDumbBatchAcceptable(true)\n}\n"})})})]}),"\n",(0,l.jsx)(n.admonition,{type:"info",children:(0,l.jsxs)(n.p,{children:["\u4e5f\u53ef\u4ee5\u4f7f\u7528\u66f4\u7b80\u5355\u7684\u65e0\u53c2\u8c03\u7528",(0,l.jsx)(n.code,{children:"setDumbBatchAcceptable()"})]})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.admonition,{type:"info",children:(0,l.jsx)(n.p,{children:"\u660e\u786e\u8868\u793a\u54d1\u6279\u64cd\u4f5c\u53ef\u63a5\u53d7\u4f1a\u5e26\u6765\u5b9e\u8d28\u6027\u7684\u529f\u80fd\u7f3a\u5931\uff0c\u66f4\u63a8\u8350\u5728\u4fdd\u5b58\u6307\u4ee4\u7ea7\u522b\u542f\u7528"})}),"\n",(0,l.jsx)(n.h2,{id:"3-\u7b80\u5355\u6848\u4f8b",children:"3. \u7b80\u5355\u6848\u4f8b"}),"\n",(0,l.jsx)(n.h3,{id:"31-\u6307\u5b9a\u5bf9\u8c61id",children:"3.1 \u6307\u5b9a\u5bf9\u8c61id"}),"\n",(0,l.jsxs)(n.p,{children:["\u5047\u8bbe",(0,l.jsx)(n.code,{children:"jimmer.explicit-batch-enabled"}),"\u5df2\u7ecf\u88ab\u6307\u5b9a\uff0c\u6267\u884c\u5982\u4e0b\u4ee3\u7801"]}),"\n",(0,l.jsxs)(r.A,{groupId:"language",children:[(0,l.jsx)(a.A,{value:"java",label:"Java",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:'List<Book> books = Arrays.asList(\n    Immutables.createBook(draft -> {\n        draft.setId(11L);\n        draft.setPrice(new BigDecimal("59.99"));\n    }),\n    Immutables.createBook(draft -> {\n        draft.setId(12L);\n        draft.setPrice(new BigDecimal("68.99"));\n    })\n);\n\nsqlClient\n    .saveEntitiesCommand(books)\n    .setMode(SaveMode.UPDATE_ONLY)\n    // highlight-next-line\n    .setDumbBatchAcceptable()\n    .execute();\n'})})}),(0,l.jsx)(a.A,{value:"kotlin",label:"Kotlin",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-kotlin",children:'val books = listOf(\n    Book {\n        id = 11L\n        price = BigDecimal("59.99")\n    },\n    Book {\n        id = 12L\n        price = BigDecimal("68.99")\n    }\n)\n\nsqlClient.updateEntities(books) {\n    // highlight-next-line\n    setDumbBatchAcceptable()\n}\n'})})})]}),"\n",(0,l.jsx)(n.p,{children:"\u6b64\u65f6\uff0cJimmer\u4f1a\u4e3aMySQL\u751f\u6210\u6279\u91cf\u64cd\u4f5cSQL"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"update BOOK\nset PRICE = ?\nwhere ID = ?\n-- highlight-next-line\n/* batch-0: [59.99, 11] */\n-- highlight-next-line\n/* batch-0: [57.99, 12] */\n"})}),"\n",(0,l.jsx)(n.h3,{id:"32-\u4e0d\u6307\u5b9a\u5bf9\u8c61id",children:"3.2 \u4e0d\u6307\u5b9a\u5bf9\u8c61id"}),"\n",(0,l.jsxs)(n.p,{children:["\u5047\u8bbe",(0,l.jsx)(n.code,{children:"jimmer.explicit-batch-enabled"}),"\u5df2\u7ecf\u88ab\u6307\u5b9a\uff0c\u6267\u884c\u5982\u4e0b\u4ee3\u7801"]}),"\n",(0,l.jsxs)(r.A,{groupId:"language",children:[(0,l.jsx)(a.A,{value:"java",label:"Java",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:'List<Book> books = Arrays.asList(\n    Immutables.createBook(draft -> {\n        // highlight-next-line\n        // \u65e0id\n        draft.setName("SQL in Action");\n        draft.setEdition(4);\n        draft.setPrice(new BigDecimal("59.99"));\n        draft.setStoreId(2L);\n    }),\n    Immutables.createBook(draft -> {\n        // highlight-next-line\n        // \u65e0id\n        draft.setName("LINQ in Action");\n        draft.setEdition(5);\n        draft.setPrice(new BigDecimal("68.99"));\n        draft.setStoreId(2L);\n    })\n);\n\nList<Book> insertedBooks = sqlClient\n    .saveEntitiesCommand(books)\n    .setMode(SaveMode.INSERT_ONLY)\n    .setDumbBatchAcceptable()\n    .execute()\n    .getItems()\n    .stream()\n    .map(BatchSaveResult.Item::getModifiedEntity)\n    .collect(Collectors.toList());\nfor (Book insertedBook : insertedBooks) {\n    System.out.println(insertedBook);\n}\n'})})}),(0,l.jsx)(a.A,{value:"kotlin",label:"Kotlin",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-kotlin",children:'val books = listOf(\n    Book {\n        // highlight-next-line\n        // \u65e0id\n        name = "SQL in Action"\n        edtion = 4\n        price = BigDecimal("59.99")\n        storeId = 2L\n    },\n    Book {\n        // highlight-next-line\n        // \u65e0id\n        name = "LINQ in Action"\n        edtion = 5\n        price = BigDecimal("68.99")\n        storeId = 2L\n    }\n)\n\nval insertedBooks = \n    sqlClient.insertEntities(books) {\n        setDumbBatchAcceptable()\n    }.items.map { \n        it.modifiedEntity \n    }\nfor (insertedBook in insertedBooks) {\n    println(insertedBook);\n}\n'})})})]}),"\n",(0,l.jsx)(n.p,{children:"\u6b64\u65f6\uff0cJimmer\u4f1a\u4e3aMySQL\u751f\u6210\u6279\u91cf\u64cd\u4f5cSQL"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"insert into BOOK(\n    NAME, EDITION, PRICE, STORE_ID\n) values(\n    ?, ?, ?, ?\n)\n-- highlight-next-line\n/* batch-0: [SQL in Action, 4, 59.99, 2] */\n-- highlight-next-line\n/* batch-0: [LINQ in Action, 5, 57.99, 2] */\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u6253\u5370\u7ed3\u679c\u5982\u4e0b ",(0,l.jsx)(n.em,{children:"(\u4e3a\u4e86\u4fbf\u4e8e\u9605\u8bfb\uff0c\u8fd9\u91cc\u4eba\u4e3a\u8fdb\u884c\u4e86\u683c\u5f0f\u5316)"})]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'{\n    // highlight-next-line\n    // \u65e0id\n    "name":"SQL in Action",\n    "edition":4,\n    "price":59.99,\n    "store":{"id":2}\n}\n{\n    // highlight-next-line\n    // \u65e0id\n    "name":"LINQ in Action",\n    "edition":5,\n    "price":68.99,\n    "store":{"id":2}\n}\n'})}),"\n",(0,l.jsxs)(n.admonition,{type:"info",children:[(0,l.jsx)(n.p,{children:"\u6211\u4eec\u7b2c\u4e00\u6b21\u770b\u5230\u4e86\u529f\u80fd\u4e22\u5931\uff0c\u4fdd\u5b58\u540e\u5bf9\u8c61\u4ecd\u7136\u6ca1\u6709id\uff0c\u6211\u4eec\u65e0\u6cd5\u5f97\u77e5\u6570\u636e\u5e93\u4e3a\u65b0\u63d2\u5165\u7684\u6570\u636e\u5206\u914d\u7684id\u3002"}),(0,l.jsx)(n.p,{children:"\u8fd9\u662f\u5b9e\u8d28\u6027\u7684\u529f\u80fd\u7f3a\u5931\uff0c\u6240\u4ee5\uff0cJimmer\u8981\u6c42\u5f00\u53d1\u4eba\u5458\u660e\u786e\u914d\u7f6e\u54d1\u6279\u64cd\u4f5c\u662f\u53ef\u4ee5\u63a5\u53d7\u7684\uff0c\u5e76\u63a8\u8350\u91c7\u7528\u6307\u4ee4\u7ea7\u7684\u914d\u7f6e\u3002"})]}),"\n",(0,l.jsx)(n.h2,{id:"4-\u590d\u6742\u6848\u4f8b",children:"4. \u590d\u6742\u6848\u4f8b"}),"\n",(0,l.jsx)(n.p,{children:"\u5373\u4f7f\u7528\u6237\u5b8c\u6210\u4e86\u6240\u6709\u4e3aMySQL\u542f\u7528\u6279\u91cf\u64cd\u4f5c\u7684\u914d\u7f6e\uff0cJimmer\u4e5f\u53ea\u662f\u5c3d\u91cf\u4f7f\u7528\u6279\u91cf\u64cd\u4f5c\uff0c\u4f46\u4e0d\u4fdd\u8bc1\u4e00\u5b9a\u4f7f\u7528\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u8fd9\u662f\u56e0\u4e3a\u54d1\u6279\u64cd\u4f5c\u4e0d\u4f1a\u4e3a\u7f3a\u5c11id\u5c5e\u6027\u7684\u5bf9\u8c61\u81ea\u52a8\u586b\u5145id\uff0c\u5982\u679c\u8be5\u5bf9\u8c61\u5177\u5907\u5176\u4ed6\u5173\u8054\u5bf9\u8c61\uff0c\u90a3\u4e48id\u7684\u7f3a\u5931\u5c06\u5bfc\u81f4\u65e0\u6cd5\u7ba1\u7406\u5173\u8054\u5173\u7cfb\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u56e0\u6b64\uff0cJimmer\u89c4\u5b9a\u4e86\u542f\u7528MySQL\u6279\u91cf\u67e5\u8be2\u7684\u6761\u4ef6"}),"\n",(0,l.jsxs)("table",{children:[(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{rowSpan:4,children:(0,l.jsx)(n.p,{children:"OR"})}),(0,l.jsx)("td",{colSpan:2,children:(0,l.jsx)(n.p,{children:"\u5f53\u524d\u5bf9\u8c61\u5177\u5907id"})})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{rowSpan:3,children:(0,l.jsx)(n.p,{children:"AND"})}),(0,l.jsx)("td",{children:(0,l.jsx)(n.p,{children:"\u5f53\u524d\u5bf9\u8c61\u5e76\u975e\u5176\u4ed6\u5bf9\u8c61\u7684\u524d\u7f6e\u5173\u8054\u5bf9\u8c61"})})]}),(0,l.jsx)("tr",{children:(0,l.jsx)("td",{children:(0,l.jsx)(n.p,{children:"\u5f53\u524d\u5bf9\u8c61\u6ca1\u6709\u66f4\u6df1\u7684\u540e\u7f6e\u5173\u8054"})})}),(0,l.jsx)("tr",{children:(0,l.jsxs)("td",{children:[(0,l.jsxs)(n.p,{children:["\u5982\u679c\u5f53\u524d\u5bf9\u8c61\u662f\u5176\u4ed6\u5bf9\u8c61\u7684\u540e\u7f6e\u5173\u8054\uff0c\u5173\u8054\u4fdd\u5b58\u6a21\u5f0f\u5e76\u975e",(0,l.jsx)(n.code,{children:"REPLACE"})]}),(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:["\u5373\uff0c\u65e0",(0,l.jsx)(n.a,{href:"./association/dissociation",children:"\u8131\u94a9\u884c\u4e3a"})]}),"\n"]})]})})]}),"\n",(0,l.jsxs)(n.p,{children:["\u5047\u8bbe",(0,l.jsx)(n.code,{children:"jimmer.explicit-batch-enabled"}),"\u5df2\u7ecf\u88ab\u6307\u5b9a\uff0c\u63d2\u5165\u6df1\u5ea6\u4e3a2\u7684\u6570\u636e\u7ed3\u6784\uff0c\u4ee3\u7801\u5982\u4e0b"]}),"\n",(0,l.jsxs)(r.A,{groupId:"language",children:[(0,l.jsx)(a.A,{value:"java",label:"Java",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:'List<BookStore> stores = Arrays.asList(\n    Immutables.createBookStore(draft -> {\n        draft.setName("MANNING");\n        draft.addIntoBooks(book -> {\n            book.setName("SQL in Action");\n            book.setEdition(1);\n            book.setPrice(new BigDecimal("49.9"));\n        });\n        draft.addIntoBooks(book -> {\n            book.setName("LINQ in Action");\n            book.setEdition(1);\n            book.setPrice(new BigDecimal("39.9"));\n        });\n    }),\n    Immutables.createBookStore(draft -> {\n        draft.setName("AMAZON");\n        draft.addIntoBooks(book -> {\n            book.setName("C++ Primer");\n            book.setEdition(5);\n            book.setPrice(new BigDecimal("44.02"));\n        });\n        draft.addIntoBooks(book -> {\n            book.setName("Programming RUST");\n            book.setEdition(1);\n            book.setPrice(new BigDecimal("71.99"));\n        });\n    })\n);\n\nsqlClient\n    .saveEntitiesCommand(stores)\n    .setMode(SaveMode.INSERT_ONLY)\n    .setAssociatedModeAll(AssociatedSaveMode.APPEND)\n    // highlight-next-line\n    .setDumbBatchAcceptable()\n    .execute();\n'})})}),(0,l.jsx)(a.A,{value:"kotlin",label:"Kotlin",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-kotlin",children:'val stores = listOf(\n    BookStore {\n        name = "MANNING"\n        books().addBy {\n            name = "SQL in Action"\n            edition = 1\n            price = BigDecimal("49.9")\n        }\n        books().addBy {\n            name = "LINQ in Action"\n            edition = 1\n            price = BigDecimal("39.9")\n        }\n    },\n    BookStore {\n        name = "AMAZON"\n        books().addBy {\n            name = "C++ Primer"\n            edition = 5\n            price = BigDecimal("44.02")\n        }\n        books().addBy {\n            name = "Programming RUST"\n            edition = 1\n            price = BigDecimal("71.99")\n        }\n    }\n)\n\nsqlClient.insertEntities(stores) {\n    // highlight-next-line\n    setDumbBatchAcceptable()\n}\n'})})})]}),"\n",(0,l.jsx)(n.p,{children:"\u663e\u7136"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u5bf9\u4e8e\u7b2c\u4e00\u7ea7\u7684",(0,l.jsx)(n.code,{children:"BookStore"}),"\u5bf9\u8c61\u800c\u8a00\uff0c\u5fc5\u987b\u83b7\u53d6\u63d2\u5165\u5b8c\u6210\u540e\u7684\u5bf9\u8c61id\u624d\u80fd\u548c\u7b2c\u4e8c\u7ea7\u5bf9\u8c61\u5efa\u7acb\u5173\u5173\u7cfb\u3002\u6240\u4ee5\u653e\u5f03\u4f7f\u7528MySQL\u7684\u6279\u91cf\u64cd\u4f5c"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u5bf9\u4e8e\u7b2c\u4e8c\u7ea7\u7684",(0,l.jsx)(n.code,{children:"Book"}),"\u5bf9\u8c61\u800c\u8a00\uff0c\u5b83\u4eec\u5df2\u7ecf\u662f\u6700\u6df1\u7684\u5173\u8054\u5bf9\u8c61\u4e86\uff0c\u65e0\u9700\u5f97\u5230\u63d2\u5165\u63d2\u5165\u5b8c\u6210\u540e\u7684\u5bf9\u8c61id\u3002\u6240\u4ee5\u53ef\u4ee5\u4f7f\u7528MySQL\u7684\u6279\u91cf\u64cd\u4f5c"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\u5c06\u4f1a\u751f\u6210\u4e24\u6761SQL"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u5bf9\u4e24\u4e2a\u6839\u5bf9\u8c61\u8fdb\u884cINSERT\u64cd\u4f5c ",(0,l.jsx)(n.em,{children:"(\u4e0d\u5f97\u4e0d\u653e\u5f03\u6279\u91cf\u64cd\u4f5c)"})]}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"insert into BOOK_STORE(\n    NAME\n) values(\n    ? /* MANNING */\n)\n\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"insert into BOOK_STORE(\n    NAME\n) values(\n    ? /* AMAZON */\n)\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u5bf94\u4e2a\u5173\u8054\u5bf9\u8c61\u8fdb\u884cINSERT\u64cd\u4f5c ",(0,l.jsx)(n.em,{children:"(\u91c7\u7528\u6279\u91cf\u64cd\u4f5c)"})]}),"\n",(0,l.jsx)(n.p,{children:"\u5047\u8bbe\u4e0a\u4e2aSQL\u4fdd\u5b58\u6839\u5bf9\u8c61\u540e"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"MANING"}),"\u7684id\u4e3a",(0,l.jsx)(n.code,{children:"2"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"AMAZON"}),"\u7684id\u4e3a",(0,l.jsx)(n.code,{children:"100"})]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\u751f\u6210\u5982\u4e0bSQL"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"insert into BOOK(\n    NAME, EDITION, PRICE, STORE_ID\n) values(?, ?, ?, ?)\n/* batch-0: [SQL in Action, 1, 49.9, 2] */\n/* batch-1: [LINQ in Action, 1, 39.9, 2] */\n/* batch-2: [C++ Primer, 5, 44.02, 100] */\n/* batch-3: [Programming RUST, 1, 71.99, 100] */\n"})}),"\n"]}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(u,{...e})}):u(e)}},19365:(e,n,i)=>{i.d(n,{A:()=>r});i(96540);var t=i(34164);const l={tabItem:"tabItem_Ymn6"};var s=i(74848);function r(e){let{children:n,hidden:i,className:r}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.A)(l.tabItem,r),hidden:i,children:n})}},11470:(e,n,i)=>{i.d(n,{A:()=>A});var t=i(96540),l=i(34164),s=i(23104),r=i(56347),a=i(205),c=i(57485),o=i(31682),d=i(70679);function h(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:i}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:i,attributes:t,default:l}}=e;return{value:n,label:i,attributes:t,default:l}}))}(i);return function(e){const n=(0,o.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,i])}function m(e){let{value:n,tabValues:i}=e;return i.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:i}=e;const l=(0,r.W6)(),s=function(e){let{queryString:n=!1,groupId:i}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return i??null}({queryString:n,groupId:i});return[(0,c.aZ)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(l.location.search);n.set(s,e),l.replace({...l.location,search:n.toString()})}),[s,l])]}function j(e){const{defaultValue:n,queryString:i=!1,groupId:l}=e,s=u(e),[r,c]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:i}=e;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:i}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${i.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=i.find((e=>e.default))??i[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[o,h]=x({queryString:i,groupId:l}),[j,p]=function(e){let{groupId:n}=e;const i=function(e){return e?`docusaurus.tab.${e}`:null}(n),[l,s]=(0,d.Dv)(i);return[l,(0,t.useCallback)((e=>{i&&s.set(e)}),[i,s])]}({groupId:l}),b=(()=>{const e=o??j;return m({value:e,tabValues:s})?e:null})();(0,a.A)((()=>{b&&c(b)}),[b]);return{selectedValue:r,selectValue:(0,t.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),p(e)}),[h,p,s]),tabValues:s}}var p=i(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=i(74848);function v(e){let{className:n,block:i,selectedValue:t,selectValue:r,tabValues:a}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.a_)(),d=e=>{const n=e.currentTarget,i=c.indexOf(n),l=a[i].value;l!==t&&(o(n),r(l))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const i=c.indexOf(e.currentTarget)+1;n=c[i]??c[0];break}case"ArrowLeft":{const i=c.indexOf(e.currentTarget)-1;n=c[i]??c[c.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":i},n),children:a.map((e=>{let{value:n,label:i,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>c.push(e),onKeyDown:h,onClick:d,...s,className:(0,l.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":t===n}),children:i??n},n)}))})}function f(e){let{lazy:n,children:i,selectedValue:s}=e;const r=(Array.isArray(i)?i:[i]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:(0,l.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function k(e){const n=j(e);return(0,g.jsxs)("div",{className:(0,l.A)("tabs-container",b.tabList),children:[(0,g.jsx)(v,{...n,...e}),(0,g.jsx)(f,{...n,...e})]})}function A(e){const n=(0,p.A)();return(0,g.jsx)(k,{...e,children:h(e.children)},String(n))}},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>a});var t=i(96540);const l={},s=t.createContext(l);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);