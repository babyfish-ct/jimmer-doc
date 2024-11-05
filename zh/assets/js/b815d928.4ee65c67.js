"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[7916],{77002:(e,n,a)=>{a.d(n,{Ay:()=>c,RM:()=>i});var t=a(74848),r=a(28453),l=a(11470),o=a(19365);const i=[];function s(e){const n={admonition:"admonition",code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Jimmer\u4e2d\u4e00\u5207\u53ef\u6267\u884c\u7684\u8bed\u53e5\u548c\u6307\u4ee4\u90fd\u652f\u6301\u4e24\u79cd\u6267\u884c\u6a21\u5f0f\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u57fa\u4e8e\u7528\u6237\u6307\u5b9a\u7684JDBC\u8fde\u63a5\u6267\u884c"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u7531Jimmer\u81ea\u52a8\u51b3\u5b9a\u57fa\u4e8e\u67d0\u4e2aJDBC\u8fde\u63a5\u6267\u884c"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\u8fd9\u91cc\uff0c\u4ee5",(0,t.jsx)(n.code,{children:"Executable"}),"(Java)\u6216",(0,t.jsx)(n.code,{children:"KExecutable"}),"(kotlin)\u63a5\u53e3\u4e3a\u4f8b"]}),"\n",(0,t.jsxs)(l.A,{groupId:"language",children:[(0,t.jsx)(o.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="Executable.java"',children:"package org.babyfish.jimmer.sql.ast;\n\nimport java.sql.Connection;\n\npublic interface Executable<R> {\n\n    R execute();\n\n    R execute(Connection con);\n}\n"})})}),(0,t.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",metastring:'title="KExecutable.kt"',children:"package org.babyfish.jimmer.sql.kt\n\nimport java.sql.Connection\n\ninterface KExecutable<R> {\n    fun execute(con: Connection? = null): R\n}\n"})})})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"execute(Connection)"}),"\uff1a\u5728\u7528\u6237\u6307\u5b9a\u7684JDBC\u8fde\u63a5\u4e0a\u6267\u884c\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u4ee5\u67e5\u8be2\u4e3a\u4f8b\uff1a"}),"\n",(0,t.jsxs)(l.A,{groupId:"language",children:[(0,t.jsx)(o.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"BookTable book = Tables.BOOK_TABLE;\n\nList<Book> books = sqlClient\n    .createQuery(book)\n    .select(book)\n    // highlight-next-line\n    .execute(con);\n"})})}),(0,t.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:"val books = sqlClient\n    .createQuery(Book::class) {\n        select(table)\n    }\n    // highlight-next-line\n    .execute(con)\n"})})})]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"\u5bf9\u8fd9\u79cd\u4f7f\u7528\u65b9\u5f0f\u800c\u8a00\uff0c\u65e0\u9700\u5bf9SqlClient\u505a\u51fa\u7279\u522b\u914d\u7f6e\u3002"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"execute()"}),"\u6216",(0,t.jsx)(n.code,{children:"execute(null)"}),"\uff1a\u7531Jimmer\u81ea\u4e3b\u51b3\u5b9a\u5728\u67d0\u4e2aJDBC\u8fde\u63a5\u4e0a\u6267\u884c\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u4ee5\u67e5\u8be2\u4e3a\u4f8b\uff1a"}),"\n",(0,t.jsxs)(l.A,{groupId:"language",children:[(0,t.jsx)(o.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"BookTable book = Tables.BOOK_TABLE;\n\nList<Book> books = sqlClient\n    .createQuery(book)\n    .select(book)\n    // highlight-next-line\n    .execute();\n"})})}),(0,t.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:"val books = sqlClient\n    .createQuery(Book::class) {\n        select(table)\n    }\n    // highlight-next-line\n    .execute()    \n"})})})]}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsxs)(n.p,{children:["\u5bf9\u8fd9\u79cd\u4f7f\u7528\u65b9\u5f0f\u800c\u8a00\uff0c\u5fc5\u987b\u4e3aSqlClient\u914d\u7f6e",(0,t.jsx)(n.code,{children:"ConnectionManager"}),"\u3002\u5426\u5219\u5c06\u4f1a\u5bfc\u81f4\u5f02\u5e38\u3002"]}),(0,t.jsxs)(n.p,{children:["\u6beb\u65e0\u7591\u95ee\uff0c\u7b2c2\u79cd\u65b9\u5f0f\u66f4\u7b26\u5408\u4e1a\u52a1\u7cfb\u7edf\u5f00\u53d1\u8981\u6c42\uff0c\u63a8\u8350\u4f7f\u7528\u3002\u6240\u4ee5\u5f3a\u70c8\u5efa\u8bae\u4e3aSqlClient\u914d\u7f6e",(0,t.jsx)(n.code,{children:"ConnectionManager"}),"\u3002"]})]}),"\n"]}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}},21478:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>u,default:()=>m,frontMatter:()=>c,metadata:()=>t,toc:()=>h});const t=JSON.parse('{"id":"configuration/connection-manager","title":"Connection Manager","description":"\u57fa\u672c\u6982\u5ff5","source":"@site/i18n/zh/docusaurus-plugin-content-docs/current/configuration/connection-manager.mdx","sourceDirName":"configuration","slug":"/configuration/connection-manager","permalink":"/jimmer-doc/zh/docs/configuration/connection-manager","draft":false,"unlisted":false,"editUrl":"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/configuration/connection-manager.mdx","tags":[],"version":"current","lastUpdatedAt":1722927798000,"sidebarPosition":2,"frontMatter":{"sidebar_position":2,"title":"Connection Manager"},"sidebar":"tutorialSidebar","previous":{"title":"\u65b9\u8a00","permalink":"/jimmer-doc/zh/docs/configuration/dialect"},"next":{"title":"\u591a\u6570\u636e\u6e90","permalink":"/jimmer-doc/zh/docs/configuration/multi-datasources"}}');var r=a(74848),l=a(28453),o=a(11470),i=a(19365),s=a(77002);const c={sidebar_position:2,title:"Connection Manager"},u=void 0,d={},h=[{value:"\u57fa\u672c\u6982\u5ff5",id:"\u57fa\u672c\u6982\u5ff5",level:2},...s.RM,{value:"\u7b80\u5355\u7684ConnectionManager",id:"\u7b80\u5355\u7684connectionmanager",level:2},{value:"\u53d7Spring\u4e8b\u52a1\u7ba1\u7406\u7684ConnectionManager",id:"\u53d7spring\u4e8b\u52a1\u7ba1\u7406\u7684connectionmanager",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u57fa\u672c\u6982\u5ff5",children:"\u57fa\u672c\u6982\u5ff5"}),"\n",(0,r.jsx)(s.Ay,{}),"\n",(0,r.jsx)(n.h2,{id:"\u7b80\u5355\u7684connectionmanager",children:"\u7b80\u5355\u7684ConnectionManager"}),"\n",(0,r.jsxs)(o.A,{groupId:"language",children:[(0,r.jsx)(i.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"javax.sql.DataSource dataSource = ...;\n\nJSqlClient sqlClient = JSqlClient\n    .newBuilder()\n    .setConnectionManager(\n        ConnectionManager\n            // highlight-next-line\n            .simpleConnectionManager(dataSource)\n    )\n    .builde();\n"})})}),(0,r.jsx)(i.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:'//    val dataSource: DataSource = DriverManagerDataSource().apply {\n//        setDriverClassName("com.mysql.cj.jdbc.Driver")\n//        url = "jdbc:mysql://localhost:3306/jimmer_demo"\n//        username = "root"\n//        password = "" // \u8f93\u5165\u4f60\u81ea\u5df1\u7684\u5bc6\u7801\n//    }\n\nval sqlClient = newKSqlClient {\n        setConnectionManager(\n            ConnectionManager.simpleConnectionManager(dataSource)\n        )\n        setDatabaseNamingStrategy(\n            //DefaultDatabaseNamingStrategy.LOWER_CASE\n        )\n    }\n'})})})]}),"\n",(0,r.jsxs)(n.admonition,{type:"danger",children:[(0,r.jsx)(n.p,{children:"\u8fd9\u79cd\u65b9\u5f0f\u4ec5\u8d1f\u8d23\u4eceDataSource\u83b7\u53d6\u8fde\u63a5\uff0c\u5e76\u6ca1\u6709\u4e8b\u52a1\u7ba1\u7406\u673a\u5236\u3002"}),(0,r.jsx)(n.p,{children:"\u4f46\u662f\uff0c\u5b9e\u9645\u9879\u76ee\u4e2d\uff0c\u4e8b\u52a1\u975e\u5e38\u91cd\u8981\uff0c\u56e0\u6b64\uff0c\u9664\u5b66\u4e60\u548c\u5c1d\u8bd5\u5916\uff0c\u4e0d\u5efa\u8bae\u5728\u5b9e\u9645\u9879\u76ee\u4f7f\u7528\u8fd9\u79cd\u65b9\u5f0f\u3002"})]}),"\n",(0,r.jsx)(n.h2,{id:"\u53d7spring\u4e8b\u52a1\u7ba1\u7406\u7684connectionmanager",children:"\u53d7Spring\u4e8b\u52a1\u7ba1\u7406\u7684ConnectionManager"}),"\n",(0,r.jsxs)(n.p,{children:["\u8fd9\u4e2a\u8bdd\u9898\u5728",(0,r.jsx)(n.a,{href:"../spring/transaction",children:"Spring\u7bc7/\u6574\u5408Spring\u4e8b\u52a1"}),"\u4e2d\u8be6\u7ec6\u8ba8\u8bba\u8fc7\uff0c\u672c\u6587\u4e0d\u505a\u91cd\u590d\u9610\u8ff0\u3002"]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"\u8ba9Jimmer\u53d7\u5230Spring\u4e8b\u52a1\u7684\u7ba1\u7406\uff0c\u662f\u63a8\u8350\u7528\u6cd5\u3002"})})]})}function m(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},19365:(e,n,a)=>{a.d(n,{A:()=>o});a(96540);var t=a(18215);const r={tabItem:"tabItem_Ymn6"};var l=a(74848);function o(e){let{children:n,hidden:a,className:o}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,t.A)(r.tabItem,o),hidden:a,children:n})}},11470:(e,n,a)=>{a.d(n,{A:()=>k});var t=a(96540),r=a(18215),l=a(23104),o=a(56347),i=a(205),s=a(57485),c=a(31682),u=a(70679);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:a}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:r}}=e;return{value:n,label:a,attributes:t,default:r}}))}(a);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function p(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:a}=e;const r=(0,o.W6)(),l=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,s.aZ)(l),(0,t.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(r.location.search);n.set(l,e),r.replace({...r.location,search:n.toString()})}),[l,r])]}function g(e){const{defaultValue:n,queryString:a=!1,groupId:r}=e,l=h(e),[o,s]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:l}))),[c,d]=m({queryString:a,groupId:r}),[g,x]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,l]=(0,u.Dv)(a);return[r,(0,t.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),b=(()=>{const e=c??g;return p({value:e,tabValues:l})?e:null})();(0,i.A)((()=>{b&&s(b)}),[b]);return{selectedValue:o,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),x(e)}),[d,x,l]),tabValues:l}}var x=a(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=a(74848);function f(e){let{className:n,block:a,selectedValue:t,selectValue:o,tabValues:i}=e;const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),u=e=>{const n=e.currentTarget,a=s.indexOf(n),r=i[a].value;r!==t&&(c(n),o(r))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=s.indexOf(e.currentTarget)+1;n=s[a]??s[0];break}case"ArrowLeft":{const a=s.indexOf(e.currentTarget)-1;n=s[a]??s[s.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},n),children:i.map((e=>{let{value:n,label:a,attributes:l}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>s.push(e),onKeyDown:d,onClick:u,...l,className:(0,r.A)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":t===n}),children:a??n},n)}))})}function v(e){let{lazy:n,children:a,selectedValue:l}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===l));return e?(0,t.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function C(e){const n=g(e);return(0,j.jsxs)("div",{className:(0,r.A)("tabs-container",b.tabList),children:[(0,j.jsx)(f,{...n,...e}),(0,j.jsx)(v,{...n,...e})]})}function k(e){const n=(0,x.A)();return(0,j.jsx)(C,{...e,children:d(e.children)},String(n))}},28453:(e,n,a)=>{a.d(n,{R:()=>o,x:()=>i});var t=a(96540);const r={},l=t.createContext(r);function o(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);