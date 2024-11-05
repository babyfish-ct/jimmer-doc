"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[2864],{84987:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>u});const i=JSON.parse('{"id":"query/dynamic-join/weak-join","title":"Weak Join","description":"The Problem to Solve","source":"@site/docs/query/dynamic-join/weak-join.mdx","sourceDirName":"query/dynamic-join","slug":"/query/dynamic-join/weak-join","permalink":"/jimmer-doc/docs/query/dynamic-join/weak-join","draft":false,"unlisted":false,"editUrl":"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/query/dynamic-join/weak-join.mdx","tags":[],"version":"current","lastUpdatedAt":1704100403000,"sidebarPosition":6,"frontMatter":{"sidebar_position":6,"title":"Weak Join"},"sidebar":"tutorialSidebar","previous":{"title":"Pagination Safety","permalink":"/jimmer-doc/docs/query/dynamic-join/table-ex"},"next":{"title":"Join Features Specific to Kotlin","permalink":"/jimmer-doc/docs/query/dynamic-join/kotlin-join"}}');var t=s(74848),o=s(28453),a=s(11470),r=s(19365);const l={sidebar_position:6,title:"Weak Join"},c=void 0,d={},u=[{value:"The Problem to Solve",id:"the-problem-to-solve",level:2},{value:"Usage",id:"usage",level:2},{value:"Define Join Condition",id:"define-join-condition",level:3},{value:"Use the Join Condition",id:"use-the-join-condition",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"the-problem-to-solve",children:"The Problem to Solve"}),"\n",(0,t.jsx)(n.p,{children:"All the joins we have discussed so far rely on the association properties between entities, which means table joins are always related to primary and foreign keys."}),"\n",(0,t.jsx)(n.p,{children:"However, sometimes we need to join two tables based on some business properties unrelated to primary and foreign keys. Although not frequently used, such relatively free table joins can be very useful when needed."}),"\n",(0,t.jsx)(n.p,{children:"For this scenario, you have two options:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Use ",(0,t.jsx)(n.a,{href:"../../mapping/advanced/join-sql",children:"@JoinSql"})," to declare a ManyToMany association unrelated to primary and foreign keys, then use the association property to perform the join"]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"This approach is suitable when the corresponding join operation is needed by multiple business scenarios and has high reusability."})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Directly use the weak join explained in this article, without declaring any association properties between entities"}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["This approach is suitable when the corresponding join operation is only needed by some individual business scenarios and you don't want to define a ",(0,t.jsx)(n.a,{href:"../../mapping/advanced/join-sql",children:"@JoinSql"})," based association property in entities just for this purpose."]})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(n.h3,{id:"define-join-condition",children:"Define Join Condition"}),"\n",(0,t.jsx)(n.p,{children:"To use weak join:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["For Java, first implement the ",(0,t.jsx)(n.code,{children:"WeakJoin"})," interface"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["For Kotlin, implement the ",(0,t.jsx)(n.code,{children:"KWeakJoin"})," abstract class"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(a.A,{groupId:"language",children:[(0,t.jsx)(r.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="WeakJoin.java"  ',children:"package org.babyfish.jimmer.sql.ast.table;\n\nimport org.babyfish.jimmer.sql.ast.Predicate;\n\npublic interface WeakJoin<ST extends Table<?>, TT extends Table<?>> {\n\n    Predicate on(ST source, TT target);\n}\n"})})}),(0,t.jsx)(r.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",metastring:'title="KWeakJoin.kt"',children:"package org.babyfish.jimmer.sql.kt.ast.table\n\nabstract class KWeakJoin<S: Any, T: Any> /* omit super types */ {\n\n    abstract fun on(\n        source: KNonNullTable<S>,\n        target: KNonNullTable<T>\n    ): KNonNullExpression<Boolean>\n\n    ...other code omitted...\n}\n"})})})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["For Java, the generic type parameters of the ",(0,t.jsx)(n.code,{children:"WeakJoin"})," interface should be the ",(0,t.jsx)(n.code,{children:"Table"})," classes generated by the preprocessor for the current entity and target entity, e.g."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"WeakJoin<BookTable, AuthorTable>"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["For Kotlin, the generic type parameters of the ",(0,t.jsx)(n.code,{children:"KWeakJoin"})," abstract class should be the current entity and target entity, e.g."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"KWeakJoin<Book, Author>"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Developers need to customize a class to implement the custom table join condition:"}),"\n",(0,t.jsxs)(a.A,{groupId:"language",children:[(0,t.jsx)(r.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"private static class BookAuthorJoin implements WeakJoin<BookTable, AuthorTable> {\n\n    @Override\n    public Predicate on(BookTable source, AuthorTable target) {\n        return Prdicate.and(\n            source.businessProp1().eq(target.businessPropA()),\n            source.businessProp2().eq(target.businessPropB())\n        );\n    }\n}\n"})})}),(0,t.jsx)(r.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:"private class BookAuthorJoin : KWeakJoin<Book, Author> {\n\n    override fun on(\n        source: KNonNullTable<Book>,\n        target: KNonNullTable<Author>\n    ): KNonNullExpression<Boolean> =\n        and(\n            source.businessProp1 eq target.businessPropA,\n            source.businessProp2 eq target.businessPropB\n        )\n}\n"})})})]}),"\n",(0,t.jsxs)(n.admonition,{type:"caution",children:[(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"WeakJoin"}),"/",(0,t.jsx)(n.code,{children:"WeakJoin"})," is an interface, but implementation must be a class rather than a lambda expression."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Do not use anonymous classes for implementation. Although anonymous classes can work, they violate the design intent here."}),"\n",(0,t.jsx)(n.p,{children:"If the class has no reuse value at all, it is recommended to define it as a private static nested class."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The class itself does not have generic type parameters, but the generic parameters of the super interface/class must be explicitly specified."}),"\n"]}),"\n"]}),(0,t.jsx)(n.p,{children:"The reasons for the first two points will be explained later."})]}),"\n",(0,t.jsxs)(n.p,{children:["Developers can even use ",(0,t.jsx)(n.a,{href:"../native-sql",children:"NativeSQL expressions"})," to build more arbitrary join conditions, e.g. ",(0,t.jsxs)(n.em,{children:["(assuming MySQL is used here, calling the SQL function ",(0,t.jsx)(n.code,{children:"substr"}),")"]}),":"]}),"\n",(0,t.jsxs)(a.A,{groupId:"language",children:[(0,t.jsx)(r.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'private static class BookAuthorJoin implements WeakJoin<BookTable, AuthorTable> {\n\n    @Override\n    public Predicate on(BookTable source, AuthorTable target) {\n        return Predicate.sql(\n            "substr(%e, 1, 5) = substr(%e, 1, 5)",\n            new Expression[] {\n                source.code(),\n                target.code()\n            }\n        );\n    }\n}\n'})})}),(0,t.jsx)(r.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'private class BookAuthorJoin : KWeakJoin<Book, Author> {\n\n    override fun on(\n        source: KNonNullTable<Book>,\n        target: KNonNullTable<Author>\n    ): KNonNullExpression<Boolean> =\n        sql(Boolean::class, "substr(%e, 1, 5) = substr(%e, 1, 5)") {\n            expression(source.code)\n            expression(target.code)\n        }\n}\n'})})})]}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsxs)(n.p,{children:["Here, ",(0,t.jsx)(n.code,{children:"Predicate.sql"})," in Java code and ",(0,t.jsx)(n.code,{children:"sql"})," in Kotlin code are methods to mix native SQL snippets into the strongly typed Jimmer SQL DSL."]}),(0,t.jsxs)(n.p,{children:["We have never introduced these before, please refer to ",(0,t.jsx)(n.a,{href:"../native-sql",children:"NativeSQL expressions"}),"."]})]}),"\n",(0,t.jsx)(n.h3,{id:"use-the-join-condition",children:"Use the Join Condition"}),"\n",(0,t.jsxs)(a.A,{groupId:"language",children:[(0,t.jsx)(r.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'BookTable table = Tables.BOOK_TABLE;\n\nList<Long> bookIds = sqlClient\n    .createQuery(table)\n    .where(\n        table\n            .asTableEx() \u2776\n            .weakJoin(BookAutorJoin.class) \u2777\n            .firstName().eq("Alex")\n    )\n    .select(table.id())\n    .distinct()\n    .execute(); \n'})})}),(0,t.jsx)(r.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'val bookIds = sqlClient\n    .createQuery(Book::class) {\n        where(\n            table\n                .asTableEx() \u2776\n                .weakJoin(BookAutorJoin::class) \u2777\n                .firstName eq "Alex"\n        )\n        select(table.id)\n    }\n    .distinct()\n    .execute();\n'})})})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u2776 Converts ",(0,t.jsx)(n.code,{children:"Table"})," to ",(0,t.jsx)(n.code,{children:"TableEx"})," using ",(0,t.jsx)(n.code,{children:"asTableEx"})]}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.p,{children:["The subsequent ",(0,t.jsx)(n.code,{children:"weakJoin"})," is only supported by ",(0,t.jsx)(n.code,{children:"TableEx"}),", not by ",(0,t.jsx)(n.code,{children:"Table"}),"."]})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u2777 Calls ",(0,t.jsx)(n.code,{children:"weakJoin"})," with the ",(0,t.jsx)(n.code,{children:"BookAuthorJoin"})," class defined before as the join condition, joining to the author table"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Here, the return type of ",(0,t.jsx)(n.code,{children:"weakJoin"})," is ",(0,t.jsx)(n.code,{children:"AuthorTable"}),"/",(0,t.jsx)(n.code,{children:"KNonNullTable<Athor>"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The following methods can be used to support outer join:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Java: ",(0,t.jsx)(n.code,{children:"weakJoin(BookAuthorJoin.class, JoinType.LEFT)"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Kotlin: ",(0,t.jsx)(n.code,{children:"weakOuterJoin(BookAuthorJoin::class)"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsxs)(n.p,{children:["We have introduced a feature called ",(0,t.jsx)(n.a,{href:"./merge",children:"Merge Conflict Join"})," before. It is important that ",(0,t.jsx)(n.code,{children:"weakJoin"})," is compatible with it."]}),(0,t.jsxs)(n.p,{children:["For the same join source, if ",(0,t.jsx)(n.code,{children:"weakJoin"})," is called multiple times with the same WeakJoin class ",(0,t.jsx)(n.em,{children:"(the BookAuthorJoin class here)"}),", they can be merged into one join operation to avoid duplicate joins in the final SQL."]}),(0,t.jsxs)(n.p,{children:["This is why the ",(0,t.jsx)(n.code,{children:"BookAuthorJoin"})," class cannot be implemented using lambda or anonymous classes, as mentioned earlier."]})]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},19365:(e,n,s)=>{s.d(n,{A:()=>a});s(96540);var i=s(18215);const t={tabItem:"tabItem_Ymn6"};var o=s(74848);function a(e){let{children:n,hidden:s,className:a}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,i.A)(t.tabItem,a),hidden:s,children:n})}},11470:(e,n,s)=>{s.d(n,{A:()=>k});var i=s(96540),t=s(18215),o=s(23104),a=s(56347),r=s(205),l=s(57485),c=s(31682),d=s(70679);function u(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:s}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:s,attributes:i,default:t}}=e;return{value:n,label:s,attributes:i,default:t}}))}(s);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function p(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function j(e){let{queryString:n=!1,groupId:s}=e;const t=(0,a.W6)(),o=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,l.aZ)(o),(0,i.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(t.location.search);n.set(o,e),t.replace({...t.location,search:n.toString()})}),[o,t])]}function b(e){const{defaultValue:n,queryString:s=!1,groupId:t}=e,o=h(e),[a,l]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=s.find((e=>e.default))??s[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:o}))),[c,u]=j({queryString:s,groupId:t}),[b,m]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,o]=(0,d.Dv)(s);return[t,(0,i.useCallback)((e=>{s&&o.set(e)}),[s,o])]}({groupId:t}),x=(()=>{const e=c??b;return p({value:e,tabValues:o})?e:null})();(0,r.A)((()=>{x&&l(x)}),[x]);return{selectedValue:a,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),m(e)}),[u,m,o]),tabValues:o}}var m=s(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=s(74848);function v(e){let{className:n,block:s,selectedValue:i,selectValue:a,tabValues:r}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),d=e=>{const n=e.currentTarget,s=l.indexOf(n),t=r[s].value;t!==i&&(c(n),a(t))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const s=l.indexOf(e.currentTarget)+1;n=l[s]??l[0];break}case"ArrowLeft":{const s=l.indexOf(e.currentTarget)-1;n=l[s]??l[l.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":s},n),children:r.map((e=>{let{value:n,label:s,attributes:o}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...o,className:(0,t.A)("tabs__item",x.tabItem,o?.className,{"tabs__item--active":i===n}),children:s??n},n)}))})}function g(e){let{lazy:n,children:s,selectedValue:o}=e;const a=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===o));return e?(0,i.cloneElement)(e,{className:(0,t.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function y(e){const n=b(e);return(0,f.jsxs)("div",{className:(0,t.A)("tabs-container",x.tabList),children:[(0,f.jsx)(v,{...n,...e}),(0,f.jsx)(g,{...n,...e})]})}function k(e){const n=(0,m.A)();return(0,f.jsx)(y,{...e,children:u(e.children)},String(n))}},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>r});var i=s(96540);const t={},o=i.createContext(t);function a(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);