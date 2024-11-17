"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[3163],{56778:(n,e,i)=>{i.d(e,{A:()=>l});i(96540);var t=i(18215);const a={tabItem:"tabItem_Ymn6"};var r=i(74848);function l(n){let{children:e,hidden:i,className:l}=n;return(0,r.jsx)("div",{role:"tabpanel",className:(0,t.A)(a.tabItem,l),hidden:i,children:e})}},37244:(n,e,i)=>{i.d(e,{A:()=>k});var t=i(96540),a=i(18215),r=i(44319),l=i(56347),s=i(94280),o=i(73024),c=i(58417),d=i(44031);function u(n){return t.Children.toArray(n).filter((n=>"\n"!==n)).map((n=>{if(!n||(0,t.isValidElement)(n)&&function(n){const{props:e}=n;return!!e&&"object"==typeof e&&"value"in e}(n))return n;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof n.type?n.type:n.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(n){const{values:e,children:i}=n;return(0,t.useMemo)((()=>{const n=e??function(n){return u(n).map((n=>{let{props:{value:e,label:i,attributes:t,default:a}}=n;return{value:e,label:i,attributes:t,default:a}}))}(i);return function(n){const e=(0,c.XI)(n,((n,e)=>n.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((n=>n.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(n),n}),[e,i])}function p(n){let{value:e,tabValues:i}=n;return i.some((n=>n.value===e))}function g(n){let{queryString:e=!1,groupId:i}=n;const a=(0,l.W6)(),r=function(n){let{queryString:e=!1,groupId:i}=n;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return i??null}({queryString:e,groupId:i});return[(0,o.aZ)(r),(0,t.useCallback)((n=>{if(!r)return;const e=new URLSearchParams(a.location.search);e.set(r,n),a.replace({...a.location,search:e.toString()})}),[r,a])]}function x(n){const{defaultValue:e,queryString:i=!1,groupId:a}=n,r=h(n),[l,o]=(0,t.useState)((()=>function(n){let{defaultValue:e,tabValues:i}=n;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!p({value:e,tabValues:i}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${i.map((n=>n.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const t=i.find((n=>n.default))??i[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:e,tabValues:r}))),[c,u]=g({queryString:i,groupId:a}),[x,j]=function(n){let{groupId:e}=n;const i=function(n){return n?`docusaurus.tab.${n}`:null}(e),[a,r]=(0,d.Dv)(i);return[a,(0,t.useCallback)((n=>{i&&r.set(n)}),[i,r])]}({groupId:a}),m=(()=>{const n=c??x;return p({value:n,tabValues:r})?n:null})();(0,s.A)((()=>{m&&o(m)}),[m]);return{selectedValue:l,selectValue:(0,t.useCallback)((n=>{if(!p({value:n,tabValues:r}))throw new Error(`Can't select invalid tab value=${n}`);o(n),u(n),j(n)}),[u,j,r]),tabValues:r}}var j=i(46916);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=i(74848);function b(n){let{className:e,block:i,selectedValue:t,selectValue:l,tabValues:s}=n;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),d=n=>{const e=n.currentTarget,i=o.indexOf(e),a=s[i].value;a!==t&&(c(e),l(a))},u=n=>{let e=null;switch(n.key){case"Enter":d(n);break;case"ArrowRight":{const i=o.indexOf(n.currentTarget)+1;e=o[i]??o[0];break}case"ArrowLeft":{const i=o.indexOf(n.currentTarget)-1;e=o[i]??o[o.length-1];break}}e?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":i},e),children:s.map((n=>{let{value:e,label:i,attributes:r}=n;return(0,v.jsx)("li",{role:"tab",tabIndex:t===e?0:-1,"aria-selected":t===e,ref:n=>o.push(n),onKeyDown:u,onClick:d,...r,className:(0,a.A)("tabs__item",m.tabItem,r?.className,{"tabs__item--active":t===e}),children:i??e},e)}))})}function y(n){let{lazy:e,children:i,selectedValue:r}=n;const l=(Array.isArray(i)?i:[i]).filter(Boolean);if(e){const n=l.find((n=>n.props.value===r));return n?(0,t.cloneElement)(n,{className:(0,a.A)("margin-top--md",n.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:l.map(((n,e)=>(0,t.cloneElement)(n,{key:e,hidden:n.props.value!==r})))})}function f(n){const e=x(n);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",m.tabList),children:[(0,v.jsx)(b,{...e,...n}),(0,v.jsx)(y,{...e,...n})]})}function k(n){const e=(0,j.A)();return(0,v.jsx)(f,{...n,children:u(n.children)},String(e))}},90766:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>t,toc:()=>u});const t=JSON.parse('{"id":"query/object-fetcher/view","title":"\u89c6\u56fe\u5c5e\u6027","description":"IdView","source":"@site/i18n/zh/docusaurus-plugin-content-docs/current/query/object-fetcher/view.mdx","sourceDirName":"query/object-fetcher","slug":"/query/object-fetcher/view","permalink":"/jimmer-doc/zh/docs/query/object-fetcher/view","draft":false,"unlisted":false,"editUrl":"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/query/object-fetcher/view.mdx","tags":[],"version":"current","lastUpdatedAt":1731341376000,"sidebarPosition":5,"frontMatter":{"sidebar_position":5,"title":"\u89c6\u56fe\u5c5e\u6027"},"sidebar":"tutorialSidebar","previous":{"title":"\u9012\u5f52\u67e5\u8be2","permalink":"/jimmer-doc/zh/docs/query/object-fetcher/recursive"},"next":{"title":"DTO\u67e5\u8be2","permalink":"/jimmer-doc/zh/docs/query/object-fetcher/dto"}}');var a=i(74848),r=i(28453),l=i(37244),s=i(56778);const o={sidebar_position:5,title:"\u89c6\u56fe\u5c5e\u6027"},c=void 0,d={},u=[{value:"IdView",id:"idview",level:2},{value:"\u4fee\u6539\u793a\u4f8b\u5b9e\u4f53\u63a5\u53e3",id:"\u4fee\u6539\u793a\u4f8b\u5b9e\u4f53\u63a5\u53e3",level:3},{value:"\u6293\u53d6<code>@IdView</code>\u5c5e\u6027",id:"\u6293\u53d6idview\u5c5e\u6027",level:3},{value:"ManyToManyView",id:"manytomanyview",level:2},{value:"\u6570\u636e\u51c6\u5907",id:"\u6570\u636e\u51c6\u5907",level:3},{value:"\u5efa\u7acb\u5b9e\u4f53",id:"\u5efa\u7acb\u5b9e\u4f53",level:3},{value:"\u6293\u53d6<code>@ManyToManyView</code>\u5c5e\u6027",id:"\u6293\u53d6manytomanyview\u5c5e\u6027",level:3}];function h(n){const e={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{id:"idview",children:"IdView"}),"\n",(0,a.jsx)(e.p,{children:"\u5bf9\u4e8e\u6570\u636e\u7ed3\u6784\uff0c\u524d\u540e\u7aef\u5404\u81ea\u504f\u597d\u6709\u6240\u4e0d\u540c\uff0c\u540e\u7aef\u503e\u5411\u4e8e\u7ed3\u6784\u5316\u6570\u636e\uff0c\u800c\u524d\u7aef\u503e\u5411\u4e8e\u5e73\u94fa\u5316\u6570\u636e\u3002"}),"\n",(0,a.jsxs)(e.p,{children:["\u5bf9\u4e8eIdOnly\u7684\u5bf9\u8c61\uff0cJimmer\u63d0\u4f9b\u4e86",(0,a.jsx)(e.a,{href:"../../mapping/advanced/view/id-view",children:"@IdView"}),"\u6ce8\u89e3\uff0c\u53ef\u4ee5\u5f88\u65b9\u4fbf\u7684\u5c06IdOnly\u5bf9\u8c61\u5c55\u5f00\u6210\u4e00\u4e2a\u5b57\u6bb5\u3002"]}),"\n",(0,a.jsx)(e.h3,{id:"\u4fee\u6539\u793a\u4f8b\u5b9e\u4f53\u63a5\u53e3",children:"\u4fee\u6539\u793a\u4f8b\u5b9e\u4f53\u63a5\u53e3"}),"\n",(0,a.jsxs)(e.p,{children:["\u5728\u793a\u4f8b\u5b9e\u4f53\u63a5\u53e3\u4e2d\uff0c\u5206\u522b\u6dfb\u52a0\u4e86\u4e24\u4e2a",(0,a.jsx)(e.code,{children:"@IdView"}),"\u7684\u5c5e\u6027\uff0c\u8fd9\u662f\u4e00\u4e2a\u89c6\u56fe\u5c5e\u6027\uff0c\u8be5\u5c5e\u6027\u7684\u503c\u5c06\u81ea\u52a8\u540c\u6b65\u5bf9\u5e94\u5173\u8054\u5bf9\u8c61\u7684\u503c\u3002"]}),"\n",(0,a.jsxs)(e.p,{children:["\u5bf9\u4e8e\u96c6\u5408\u5c5e\u6027\u7684",(0,a.jsx)(e.code,{children:"IdView"}),"\uff0c\u9700\u8981\u624b\u52a8\u5199\u660e\u5176\u5bf9\u5e94\u7684\u662f\u54ea\u4e2a\u5173\u8054\u5c5e\u6027\u3002"]}),"\n",(0,a.jsxs)(l.A,{groupId:"language",children:[(0,a.jsx)(s.A,{value:"java",label:"Java",children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-java",children:'@Entity\npublic interface Book {\n\n    ...\u7701\u7565\u5176\u4ed6\u5c5e\u6027...\n\n    @Nullable\n    @ManyToOne\n    BookStore store();\n\n    @ManyToMany\n    List<Author> authors();\n\n    // highlight-next-line\n    @IdView\n    Long storeId();\n\n    // highlight-next-line\n    @IdView("authors")\n    List<Long> authorIds();\n}\n\n'})})}),(0,a.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-kotlin",children:'@Entity\ninterface Book {\n\n    ...\u7701\u7565\u5176\u4ed6\u5c5e\u6027...\n\n    @ManyToOne\n    val store: BookStore?\n\n    @ManyToMany\n    val authors: List<Author>\n\n    // highlight-next-line\n    @IdView\n    val storeId: Long?\n\n    // highlight-next-line\n    @IdView("authors")\n    val authorsIds: List<Long>\n}\n'})})})]}),"\n",(0,a.jsxs)(e.h3,{id:"\u6293\u53d6idview\u5c5e\u6027",children:["\u6293\u53d6",(0,a.jsx)(e.code,{children:"@IdView"}),"\u5c5e\u6027"]}),"\n",(0,a.jsx)(e.admonition,{type:"caution",children:(0,a.jsxs)(e.p,{children:["\u89c6\u56fe\u5c5e\u6027\u9700\u8981\u624b\u52a8\u6293\u53d6\uff0c",(0,a.jsx)(e.code,{children:"allScalarFields"}),"\u548c",(0,a.jsx)(e.code,{children:"allTableFields"}),"\u4e0d\u4f1a\u81ea\u52a8\u6293\u53d6\u89c6\u56fe\u5c5e\u6027\u3002"]})}),"\n",(0,a.jsxs)(l.A,{groupId:"language",children:[(0,a.jsx)(s.A,{value:"java",label:"Java",children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-java",children:"BookTable book = Tables.BOOK_TABLE;\n\nList<Book> bookWithIdViews = sqlClient\n    .createQuery(book)\n    .where(book.edition().eq(3))\n    .select(\n        book.fetch(\n            Fetchers.BOOK_FETCHER\n                .allScalarFields()\n                // highlight-next-line\n                .storeId()\n                // highlight-next-line\n                .authorIds()\n        )\n    )\n    .execute();\nSystem.out.println(bookWithIdViews);\n"})})}),(0,a.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-kotlin",children:"var bookWithIdViews = sqlClient\n    .createQuery(Book::class) {\n        where(table.edition eq 3)\n        select(\n            table.fetchBy {\n                allScalarFields\n                // highlight-next-line\n                storeId\n                // highlight-next-line\n                authorIds\n            }\n        )\n    }\n    .execute()\nprintln(bookWithIdViews)\n"})})})]}),"\n",(0,a.jsx)(e.p,{children:"\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-json",children:'[\n    {\n        "id": 3,\n        "name": "Learning GraphQL",\n        "edition": 3,\n        "price": 51.00,\n        // highlight-next-line\n        "storeId": 1,\n        // highlight-next-line\n        "authorIds": [1,2]\n    }\n    ...\u7701\u7565\u5176\u4ed6\u5bf9\u8c61\n]\n'})}),"\n",(0,a.jsx)(e.h2,{id:"manytomanyview",children:"ManyToManyView"}),"\n",(0,a.jsx)(e.p,{children:"\u67d0\u4e9b\u573a\u666f\u4e0b\uff0c\u591a\u5bf9\u591a\u5173\u8054\u7684\u4e2d\u95f4\u8868\uff0c\u4e0d\u518d\u662f\u7eaf\u7cb9\u7684\u7531\u53cc\u65b9id\u7ec4\u6210\uff0c\u800c\u662f\u5939\u6742\u4e86\u4e00\u4e9b\u5176\u4ed6\u5b57\u6bb5\u3002"}),"\n",(0,a.jsxs)(e.p,{children:["\u9664\u53cc\u65b9id\u5916\u8fd8\u6709\u5176\u4ed6\u5b57\u6bb5\u7684\u4e2d\u95f4\u8868\u65e0\u6cd5\u76f4\u63a5\u6620\u5c04\u4e3a",(0,a.jsx)(e.code,{children:"ManyToMany"}),"\u5173\u8054\u3002\u6211\u4eec\u4e0d\u5f97\u4e0d\u521b\u5efa\u4e09\u4e2a\u5b9e\u4f53\u7c7b\u578b\uff1a\u4e24\u4e2a\u539f\u672c\u7684\u5b9e\u4f53\u4e0e\u4e00\u4e2a\u4e2d\u95f4\u5b9e\u4f53\uff0c\u53cc\u65b9\u5b9e\u4f53\u5404\u6301\u6709\u4e00\u4e2a\u6307\u5411\u4e2d\u95f4\u5b9e\u4f53\u7684\u4e00\u5bf9\u591a\u5173\u8054\u5c5e\u6027\uff0c\u4e2d\u95f4\u5b9e\u4f53\u6301\u6709\u5230\u53cc\u65b9\u5b9e\u4f53\u7684\u4e24\u4e2a\u591a\u5bf9\u4e00\u5173\u8054\u5c5e\u6027\u3002"]}),"\n",(0,a.jsxs)(e.p,{children:["\u5e78\u8fd0\u7684\u662f\uff0cJimmer\u63d0\u4f9b\u4e86",(0,a.jsx)(e.a,{href:"../../mapping/advanced/view/many-to-many-view",children:"@ManyToManyView"}),"\uff0c\u53ef\u4ee5\u5728\u8fd9\u4e2d\u4e09\u5b9e\u4f53\u7ed3\u6784\u7684\u57fa\u7840\u4e0a\u62bd\u8c61\u51fa\u53cc\u65b9\u5b9e\u4f53\u4e4b\u95f4\u7684\u591a\u5bf9\u591a\u5173\u8054\u3002"]}),"\n",(0,a.jsx)(e.p,{children:"\u4e3a\u4e86\u66f4\u597d\u7684\u4e3e\u4f8b\uff0c\u8fd9\u91cc\u4e0d\u5728\u4f7f\u7528\u4e66\u7c4d\u3001\u4f5c\u8005\uff0c\u800c\u662f\u66f4\u5177\u771f\u5b9e\u542b\u4e49\u7684\u5b66\u751f(student)\u3001\u8bfe\u7a0b(course)\u3001\u8bfe\u7a0b\u5f97\u5206(learning_link)\u4e09\u5f20\u8868\u4e3a\u4f8b\u3002"}),"\n",(0,a.jsx)(e.h3,{id:"\u6570\u636e\u51c6\u5907",children:"\u6570\u636e\u51c6\u5907"}),"\n",(0,a.jsx)(e.p,{children:"\u4e3a\u4e86\u793a\u4f8b\u65b9\u4fbf\uff0c\u8fd9\u91cc\u4f7f\u7528\u7684\u662fH2\u6570\u636e\u5e93\uff0c\u9996\u5148\u4f7f\u7528\u4ee5\u4e0bsql\u5efa\u7acb\u8868\u7ed3\u6784\u548c\u521d\u59cb\u5316\u6570\u636e\uff1a"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:"drop table course if exists;\ndrop table learning_link if exists;\ndrop table student if exists;\n\ncreate table course(\n    id identity(100, 1) not null,\n    name varchar(50) not null,\n    academic_credit integer not null\n);\n\ncreate table student(\n    id identity(100, 1) not null,\n    name varchar(50) not null\n);\n\ncreate table learning_link(\n    id identity(100, 1) not null,\n    student_id int not null,\n    course_id int not null,\n    score int null\n);\n\nalter table learning_link\n    add constraint fk_learning_link__student\n        foreign key(student_id)\n            references student(id)\n            on delete cascade;\n\nalter table learning_link\n    add constraint fk_learning_link__course\n        foreign key(course_id)\n            references course(id)\n            on delete cascade;\n\ninsert into student(id, name)\nvalues  (1, 'John'),\n        (2, 'Jane'),\n        (3, 'Jack'),\n        (4, 'Jill'),\n        (5, 'Joe');\n\ninsert into course(id, name, academic_credit)\nvalues  (1, 'Math', 100),\n        (2, 'English', 100),\n        (3, 'History', 100),\n        (4, 'Science', 100),\n        (5, 'Art', 100);\n\ninsert into learning_link(student_id, course_id, score)\nvalues  (1, 1, 100), (1, 2, 90), (1, 3, 80), (1, 4, 70), (1, 5, 60),\n        (2, 1, 90), (2, 2, 80), (2, 3, 70), (2, 4, 60), (2, 5, 100),\n        (3, 1, 80), (3, 2, 70), (3, 3, 60), (3, 4, 100), (3, 5, 90),\n        (4, 1, 70), (4, 2, 60), (4, 3, 100), (4, 4, 90), (4, 5, 80),\n        (5, 1, 60), (5, 2, 100), (5, 3, 90), (5, 4, 80), (5, 5, 70);\n"})}),"\n",(0,a.jsx)(e.h3,{id:"\u5efa\u7acb\u5b9e\u4f53",children:"\u5efa\u7acb\u5b9e\u4f53"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:"Student"}),"\n",(0,a.jsxs)(l.A,{groupId:"language",children:[(0,a.jsx)(s.A,{value:"java",label:"Java",children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-java",children:'@Entity\npublic interface Student {\n\n    @Id\n    long id();\n\n    String name();\n\n    @OneToMany(mappedBy = "student")\n    List<LearningLink> learningLinks();\n\n    // \u591a\u5bf9\u591a\u89c6\u56fe\u5c5e\u6027\n    // prop: \u4ece\u5f53\u524d\u5b9e\u4f53\u6307\u5411\u4e2d\u95f4\u5b9e\u4f53\u7684\u5173\u8054\u5c5e\u6027`learningLinks`\n    // deeperProp: \u4ece\u4e2d\u95f4\u5b9e\u4f53\u6307\u5411\u76ee\u6807\u5b9e\u4f53\u7684\u5173\u8054\u5c5e\u6027`course`(\u53ef\u7701\u7565)\n    // highlight-next-line\n    @ManyToManyView(prop = "learningLinks", deeperProp = "course")\n    List<Course> courses();\n}\n'})})}),(0,a.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-kotlin",children:'@Entity\ninterface Student {\n    @Id\n    val id: Long\n\n    val name: String\n\n    @OneToMany(mappedBy = "student")\n    val learningLinks: List<LearningLink>\n\n    // \u591a\u5bf9\u591a\u89c6\u56fe\u5c5e\u6027\n    // prop: \u4ece\u5f53\u524d\u5b9e\u4f53\u6307\u5411\u4e2d\u95f4\u5b9e\u4f53\u7684\u5173\u8054\u5c5e\u6027`learningLinks`\n    // deeperProp: \u4ece\u4e2d\u95f4\u5b9e\u4f53\u6307\u5411\u76ee\u6807\u5b9e\u4f53\u7684\u5173\u8054\u5c5e\u6027`course`(\u53ef\u7701\u7565)\n    // highlight-next-line\n    @ManyToManyView(prop = "learningLinks", deeperProp = "course")\n    val courses: List<Course>\n}\n'})})})]}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:"Course"}),"\n",(0,a.jsxs)(l.A,{groupId:"language",children:[(0,a.jsx)(s.A,{value:"java",label:"Java",children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-java",children:'@Entity\npublic interface Course {\n\n    @Id\n    long id();\n\n    String name();\n\n    int academicCredit();\n\n    @OneToMany(mappedBy = "course")\n    List<LearningLink> learningLinks();\n\n    // \u591a\u5bf9\u591a\u89c6\u56fe\u5c5e\u6027\n    // prop: \u4ece\u5f53\u524d\u5b9e\u4f53\u6307\u5411\u4e2d\u95f4\u5b9e\u4f53\u7684\u5173\u8054\u5c5e\u6027`learningLinks`\n    // deeperProp: \u4ece\u4e2d\u95f4\u5b9e\u4f53\u6307\u5411\u76ee\u6807\u5b9e\u4f53\u7684\u5173\u8054\u5c5e\u6027`student`(\u53ef\u7701\u7565)\n    // highlight-next-line\n    @ManyToManyView(prop = "learningLinks", deeperProp = "student")\n    List<Student> students();\n}\n\n'})})}),(0,a.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-kotlin",children:'@Entity\ninterface Course {\n    @Id\n    val id: Long\n\n    val name: String\n\n    val academicCredit: Int\n\n    @OneToMany(mappedBy = "course")\n    val learningLinks: List<LearningLink>\n\n    // \u591a\u5bf9\u591a\u89c6\u56fe\u5c5e\u6027\n    // prop: \u4ece\u5f53\u524d\u5b9e\u4f53\u6307\u5411\u4e2d\u95f4\u5b9e\u4f53\u7684\u5173\u8054\u5c5e\u6027`learningLinks`\n    // deeperProp: \u4ece\u4e2d\u95f4\u5b9e\u4f53\u6307\u5411\u76ee\u6807\u5b9e\u4f53\u7684\u5173\u8054\u5c5e\u6027`student`(\u53ef\u7701\u7565)\n    // highlight-next-line\n    @ManyToManyView(prop = "learningLinks", deeperProp = "student")\n    val students: List<Student>\n}\n'})})})]}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:"\u4e2d\u95f4\u5b9e\u4f53LearningLink"}),"\n",(0,a.jsxs)(l.A,{groupId:"language",children:[(0,a.jsx)(s.A,{value:"java",label:"Java",children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-java",children:"@Entity\npublic interface LearningLink {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    long id();\n\n    // \u591a\u5bf9\u4e00\u5173\u8054\uff0c\u6307\u5411\u5b66\u751f\u5b9e\u4f53\n    @ManyToOne\n    @OnDissociate(DissociateAction.DELETE)\n    Student student();\n\n    // \u591a\u5bf9\u4e00\u5173\u8054\uff0c\u6307\u5411\u8bfe\u7a0b\u5b9e\u4f53\n    @ManyToOne\n    @OnDissociate(DissociateAction.DELETE)\n    Course course();\n\n    Integer score();\n}\n"})})}),(0,a.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-kotlin",children:"@Entity\ninterface LearningLink {\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    val id: Long\n\n    // \u591a\u5bf9\u4e00\u5173\u8054\uff0c\u6307\u5411\u5b66\u751f\u5b9e\u4f53\n    @ManyToOne\n    @OnDissociate(DissociateAction.DELETE)\n    val student: Student\n\n    // \u591a\u5bf9\u4e00\u5173\u8054\uff0c\u6307\u5411\u8bfe\u7a0b\u5b9e\u4f53\n    @ManyToOne\n    @OnDissociate(DissociateAction.DELETE)\n    val course: Course\n\n    val score: Int\n}\n"})})})]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(e.h3,{id:"\u6293\u53d6manytomanyview\u5c5e\u6027",children:["\u6293\u53d6",(0,a.jsx)(e.code,{children:"@ManyToManyView"}),"\u5c5e\u6027"]}),"\n",(0,a.jsxs)(e.p,{children:["\u7531\u4e8e\u5f15\u5165\u4e86\u4e2d\u95f4\u5b9e\u4f53\uff0c\u5b66\u751f\u5b9e\u4f53\u4e0e\u8bfe\u7a0b\u5b9e\u4f53\u4e0d\u518d\u76f4\u63a5\u4e92\u76f8\u5173\u8054\uff0c\u867d\u7136\u53ef\u4ee5\u901a\u8fc7",(0,a.jsx)(e.code,{children:"Student->LearningLink->Course"}),"\u8fd9\u6837\u7684\u94fe\u8def\u95f4\u63a5\u5173\u8054\uff0c\u4f46\u662f\u8def\u5f84\u592a\u957f\u3002"]}),"\n",(0,a.jsxs)(e.p,{children:["\u800c\u4e14\u4e2d\u95f4\u5b9e\u4f53",(0,a.jsx)(e.code,{children:"LearningLink"}),"\u53ea\u5e94\u8be5\u5728\u9700\u8981\u8bfb\u5199\u8003\u8bd5\u5206\u6570\u65f6\u5019\u88ab\u4f7f\u7528\uff0c\u5176\u4ed6\u60c5\u51b5\u4e0b\u5e94\u8be5\u5c3d\u91cf\u9690\u85cf\u4e2d\u95f4\u5b9e\u4f53\u3002"]}),"\n",(0,a.jsxs)(e.p,{children:["\u53ef\u4ee5\u5728\u5bf9\u8c61\u6293\u8d77\u5176\u4e2d\u4f7f\u7528",(0,a.jsx)(e.a,{href:"../../mapping/advanced/view/many-to-many-view",children:"@ManyToManyView"}),"\u5c5e\u6027 ",(0,a.jsxs)(e.em,{children:["(\u5bf9\u672c\u4f8b\u800c\u8a00\uff0c\u5c31\u662f",(0,a.jsx)(e.code,{children:"Student.courses"}),")"]})," \u6765\u51cf\u5c11\u8c03\u7528\u94fe\u8def\u957f\u5ea6\u3002"]}),"\n",(0,a.jsx)(e.p,{children:"\u4f8b\u5982\u4ee5\u4e0b\u67e5\u8be2\uff1aid\u4e3a1\u7684\u5b66\u751f\u7684\u6240\u6709\u8bfe\u7a0b\u540d\u79f0"}),"\n",(0,a.jsxs)(l.A,{groupId:"language",children:[(0,a.jsx)(s.A,{value:"java",label:"Java",children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-java",children:"Student student = sqlClient\n    .findNullable(\n        1L,\n        Fetchers.STUDENT_FETCHER\n            .name()\n            // highlight-next-line\n            .courses(\n                Fetchers.COURSE_FETCHER\n                    .name()\n            )\n    )\nSystem.out.println(student);\n"})})}),(0,a.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-kotlin",children:"val books = sqlClient\n    findNullable(\n        1L,\n        newFetcher(Student::class).by {\n            name()\n            // highlight-next-line\n            courses {\n                name()\n            }\n        }\n    )\n"})})})]}),"\n",(0,a.jsx)(e.p,{children:"\u751f\u6210SQL\u4e3a:"}),"\n",(0,a.jsxs)(e.ol,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsxs)(e.p,{children:["\u67e5\u8be2",(0,a.jsx)(e.code,{children:"Student"})]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:"select \n    tb_1_.ID, tb_1_.NAME \nfrom STUDENT tb_1_\nwhere tb_1_.ID = ? /* 1 */\n"})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsxs)(e.p,{children:["\u67e5\u8be2",(0,a.jsx)(e.code,{children:"LearningLink"})]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:"select \n    tb_1_.STUDENT_ID, \n    tb_1_.ID, tb_1_.COURSE_ID\nfrom LEARNING_LINK tb_1_\nwhere tb_1_.STUDENT_ID in (? /* 1 */)\n"})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsxs)(e.p,{children:["\u67e5\u8be2",(0,a.jsx)(e.code,{children:"Course"})]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:"select \n    tb_1_.ID, tb_1_.NAME \nfrom COURSE tb_1_ \nwhere tb_1_.ID in (\n    ? /* 1 */, ? /* 2 */, ? /* 3 */, \n    ? /* 4 */, ? /* 5 */\n)\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.p,{children:"\u8f93\u51fa\u7ed3\u679c\u4e3a\uff1a"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-json",children:'{\n    "id": 1,\n    "name": "John",\n    // highlight-next-line\n    "courses": [\n        {\n            "id": 1,\n            "name": "Math"\n        },\n        {\n            "id": 2,\n            "name": "English"\n        },\n        {\n            "id": 3,\n            "name": "History"\n        },\n        {\n            "id": 4,\n            "name": "Science"\n        },\n        {\n            "id": 5,\n            "name": "Art"\n        }\n    ]\n}\n'})}),"\n",(0,a.jsx)(e.p,{children:"\u4f7f\u7528\u591a\u5bf9\u591a\u89c6\u56fe\uff0c\u53ef\u4ee5\u50cf\u6ca1\u6709\u5f15\u5165\u4e2d\u95f4\u5b9e\u4f53\u65f6\u4e00\u6837\u65b9\u4fbf\u5feb\u6377\u7684\u76f4\u63a5\u64cd\u4f5c\u5173\u8054\u5bf9\u8c61\u3002"})]})}function p(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(h,{...n})}):h(n)}},28453:(n,e,i)=>{i.d(e,{R:()=>l,x:()=>s});var t=i(96540);const a={},r=t.createContext(a);function l(n){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:l(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);