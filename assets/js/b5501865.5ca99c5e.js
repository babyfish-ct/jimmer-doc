"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[5261],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=o,h=m["".concat(s,".").concat(u)]||m[u]||c[u]||i;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},31536:(e,t,n)=>{n.d(t,{Z:()=>x});var a=n(80102),o=n(83117),i=n(67294),r=n(10209),l=n(59766),s=n(94780),p=n(34867);const d=(0,n(70182).ZP)();var c=n(29628),m=n(39707),u=n(66500),h=n(95408),k=n(98700),g=n(85893);const b=["component","direction","spacing","divider","children","className","useFlexGap"],y=(0,u.Z)(),N=d("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root});function v(e){return(0,c.Z)({props:e,name:"MuiStack",defaultTheme:y})}function f(e,t){const n=i.Children.toArray(e).filter(Boolean);return n.reduce(((e,a,o)=>(e.push(a),o<n.length-1&&e.push(i.cloneElement(t,{key:`separator-${o}`})),e)),[])}const w=({ownerState:e,theme:t})=>{let n=(0,o.Z)({display:"flex",flexDirection:"column"},(0,h.k9)({theme:t},(0,h.P$)({values:e.direction,breakpoints:t.breakpoints.values}),(e=>({flexDirection:e}))));if(e.spacing){const a=(0,k.hB)(t),o=Object.keys(t.breakpoints.values).reduce(((t,n)=>(("object"==typeof e.spacing&&null!=e.spacing[n]||"object"==typeof e.direction&&null!=e.direction[n])&&(t[n]=!0),t)),{}),i=(0,h.P$)({values:e.direction,base:o}),r=(0,h.P$)({values:e.spacing,base:o});"object"==typeof i&&Object.keys(i).forEach(((e,t,n)=>{if(!i[e]){const a=t>0?i[n[t-1]]:"column";i[e]=a}}));const s=(t,n)=>{return e.useFlexGap?{gap:(0,k.NA)(a,t)}:{"& > :not(style) ~ :not(style)":{margin:0,[`margin${o=n?i[n]:e.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[o]}`]:(0,k.NA)(a,t)}};var o};n=(0,l.Z)(n,(0,h.k9)({theme:t},r,s))}return n=(0,h.dt)(t.breakpoints,n),n};var I=n(90948),T=n(71657);const C=function(e={}){const{createStyledComponent:t=N,useThemeProps:n=v,componentName:l="MuiStack"}=e,d=t(w),c=i.forwardRef((function(e,t){const i=n(e),c=(0,m.Z)(i),{component:u="div",direction:h="column",spacing:k=0,divider:y,children:N,className:v,useFlexGap:w=!1}=c,I=(0,a.Z)(c,b),T={direction:h,spacing:k,useFlexGap:w},C=(0,s.Z)({root:["root"]},(e=>(0,p.Z)(l,e)),{});return(0,g.jsx)(d,(0,o.Z)({as:u,ownerState:T,ref:t,className:(0,r.Z)(C.root,v)},I,{children:y?f(N,y):N}))}));return c}({createStyledComponent:(0,I.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root}),useThemeProps:e=>(0,T.Z)({props:e,name:"MuiStack"})}),x=C},20036:(e,t,n)=>{n.d(t,{k:()=>y});var a=n(52263),o=n(94054),i=n(33841),r=n(23599),l=n(90629),s=n(43246),p=n(31536),d=n(61903),c=n(50657),m=n(37645),u=n(6514),h=n(31425),k=n(58951),g=n(83321),b=n(67294);const y=(0,b.memo)((()=>{const[e,t]=(0,b.useState)((()=>({name:"Learning GraphQL",edition:1,price:45,storeId:1,authorIds:[1,2]}))),n=(0,b.useCallback)((e=>{t((t=>({...t,name:e.target.value})))}),[]),y=(0,b.useCallback)((e=>{t((t=>({...t,edition:e.target.valueAsNumber})))}),[]),N=(0,b.useCallback)((e=>{t((t=>({...t,price:e.target.valueAsNumber})))}),[]),v=(0,b.useCallback)((e=>{let n;const a=e.target.value;n="string"==typeof a?parseInt(a):a,-1===n&&(n=void 0),t((e=>({...e,storeId:n})))}),[]),f=(0,b.useCallback)((e=>{let n=[];console.log(e.target.value);const a=e.target.value;n="string"==typeof a?a.split(",").map((e=>parseInt(e))):a,t((e=>({...e,authorIds:n})))}),[]),{i18n:w}=(0,a.Z)(),I=(0,b.useMemo)((()=>"zh"==w.currentLocale||"zh_cn"==w.currentLocale||"zh_CN"==w.currentLocale),[w.currentLocale]),[T,C]=(0,b.useState)(!1),x=(0,b.useCallback)((()=>{C(!0)}),[]),j=(0,b.useCallback)((()=>{C(!1)}),[]);return b.createElement(l.Z,{elevation:3,style:{padding:"1.5rem",width:500}},b.createElement(p.Z,{spacing:2},b.createElement("h1",null,"Book Form"),b.createElement(d.Z,{label:"Name",value:e.name,onChange:n,error:""===e.name,helperText:""===e.name?"Name is required":""}),b.createElement(d.Z,{label:"Edition",type:"number",value:e.edition,onChange:y}),b.createElement(d.Z,{label:"Price",type:"number",value:e.price,onChange:N}),b.createElement(o.Z,{fullWidth:!0},b.createElement(i.Z,{id:"store-select-label"},"Store"),b.createElement(s.Z,{labelId:"store-select-label",label:"Authors",value:e.storeId,onChange:v},b.createElement(r.Z,{value:-1},"--NONE--"),b.createElement(r.Z,{value:1},"O'REILLY"),b.createElement(r.Z,{value:2},"MANNING"))),b.createElement(o.Z,{fullWidth:!0},b.createElement(i.Z,{id:"author-multi-select-label"},"Authors"),b.createElement(s.Z,{multiple:!0,labelId:"author-multi-select-label",label:"Authors",value:e.authorIds,onChange:f},b.createElement(r.Z,{value:1},"Eve Procello"),b.createElement(r.Z,{value:2},"Alex Banks"),b.createElement(r.Z,{value:3},"Dan Vanderkam"),b.createElement(r.Z,{value:4},"Boris Cherny"),b.createElement(r.Z,{value:5},"Samer Buna"))),b.createElement(o.Z,null,b.createElement(g.Z,{onClick:x,variant:"contained"},I?"\u63d0\u4ea4":"Submit"))),b.createElement(c.Z,{open:T,onClose:j},b.createElement(m.Z,null,I?"\u4fe1\u606f":"Info"),b.createElement(u.Z,null,b.createElement(k.Z,null,I?"\u4ec5\u4f5c\u793a\u8303\uff0c\u65e0\u4efb\u4f55\u6548\u679c":"For demonstration only, without any effect")),b.createElement(h.Z,null,b.createElement(g.Z,{onClick:j},"\u5173\u95ed"))))}))},65846:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>m});var a=n(83117),o=(n(67294),n(3905)),i=n(65488),r=n(85162),l=n(20036);const s={sidebar_position:1,title:"IdView"},p=void 0,d={unversionedId:"mapping/advanced/view/id-view",id:"mapping/advanced/view/id-view",title:"IdView",description:"Basic Concepts: Short Associations",source:"@site/docs/mapping/advanced/view/id-view.mdx",sourceDirName:"mapping/advanced/view",slug:"/mapping/advanced/view/id-view",permalink:"/jimmer-doc/docs/mapping/advanced/view/id-view",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/mapping/advanced/view/id-view.mdx",tags:[],version:"current",lastUpdatedAt:1731427770,formattedLastUpdatedAt:"Nov 12, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"IdView"},sidebar:"tutorialSidebar",previous:{title:"View Properties",permalink:"/jimmer-doc/docs/mapping/advanced/view/"},next:{title:"ManyToManyView",permalink:"/jimmer-doc/docs/mapping/advanced/view/many-to-many-view"}},c={},m=[{value:"Basic Concepts: Short Associations",id:"basic-concepts-short-associations",level:2},{value:"Microsoft&#39;s Solution",id:"microsofts-solution",level:2},{value:"IdView Property",id:"idview-property",level:2},{value:"Declaring View Properties",id:"declaring-view-properties",level:3},{value:"Essence of View Properties",id:"essence-of-view-properties",level:3},{value:"Fetching IdView Properties",id:"fetching-idview-properties",level:2},{value:"Do Not Abuse",id:"do-not-abuse",level:2}],u={toc:m};function h(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"basic-concepts-short-associations"},"Basic Concepts: Short Associations"),(0,o.kt)("p",null,"Before introducing IdView, we need to first introduce a concept: short associations."),(0,o.kt)("p",null,"Before introducing short associations, let's first look at a normal association"),(0,o.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"Book book = bookRepository.findNullable(\n    1L,\n    Fetchers.BOOK_FETCHER\n        .allScalarFields()\n        // highlight-next-line\n        .store(\n            Fetchers.BOOK_STORE_FETCHER\n                .allScalarFields()\n        )\n        // highlight-next-line\n        .authors(\n            Fetchers.AUTHOR_FETCHER\n                .firstName()\n                .lastName()\n        )\n);\nSystem.out.println(book);\n"))),(0,o.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"val book = bookRepository.findNullable(\n    1L, \n    newFetcher(Book::class).by {\n        allScalarFields()\n        // highlight-next-line\n        store {\n            allScalarFields()\n        }\n        // highlight-next-line\n        authors {\n            firstName()\n            lastName()\n        }\n    }\n);\nSystem.out.println(book);\n")))),(0,o.kt)("p",null,"In this code:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Fetches associated ",(0,o.kt)("inlineCode",{parentName:"li"},"BookStore")," object via ",(0,o.kt)("inlineCode",{parentName:"li"},"store")," association property of ",(0,o.kt)("inlineCode",{parentName:"li"},"Book"),", expecting to get all non-associative properties of associated object"),(0,o.kt)("li",{parentName:"ul"},"Fetches associated ",(0,o.kt)("inlineCode",{parentName:"li"},"Author")," objects via ",(0,o.kt)("inlineCode",{parentName:"li"},"authors")," association property of ",(0,o.kt)("inlineCode",{parentName:"li"},"Book"),", expecting ",(0,o.kt)("inlineCode",{parentName:"li"},"id")," (implicit + mandatory), ",(0,o.kt)("inlineCode",{parentName:"li"},"firstName")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"lastName")," of associated objects")),(0,o.kt)("p",null,"The output is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id":1,\n    "name":"Learning GraphQL",  \n    "edition":1,\n    "price":45,  \n    // highlight-next-line\n    "store":{\n        "id":1,\n        "name":"O\'REILLY",\n        "website":null\n    },\n    // highlight-next-line \n    "authors":[\n        {\n            "id":2,\n            "firstName":"Alex",\n            "lastName":"Banks"\n        },\n        {\n            "id":1, \n            "firstName":"Eve",\n            "lastName":"Procello"\n        }\n    ]\n}\n')),(0,o.kt)("p",null,"Here, associated objects ",(0,o.kt)("inlineCode",{parentName:"p"},"BookStore")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Author")," on aggregate root ",(0,o.kt)("inlineCode",{parentName:"p"},"Book")," have properties other than ",(0,o.kt)("inlineCode",{parentName:"p"},"id"),", with relatively complete information. "),(0,o.kt)("p",null,"More importantly, non-",(0,o.kt)("inlineCode",{parentName:"p"},"id"),' properties of course also include associated properties, so this data structure can be nested multiple levels or even recursive. This kind of association can also be called a "long association".'),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"However, not all cases require such a deep data structure. In actual projects, sometimes only a very simple UI is needed, like below:")),(0,o.kt)(l.k,{mdxType:"ShortAssociation"}),(0,o.kt)("p",null,"In this UI:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Book.store")," is a many-to-one association, rendered as a dropdown selector"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Book.authors")," is a many-to-many association, rendered as a multiple dropdown selector")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"Of course, if there are too many options, a dropdown list is no longer a reasonable design. In this case, improve it to a popup dialog with pagination. But these UI details are unimportant and irrelevant to the current topic."))),(0,o.kt)("p",null,"It is obvious that at this point, the user only cares about the ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," of the associated object, and has no interest in other properties of the associated object. "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"That is, we want the associated object to only have the id property")," "),(0,o.kt)("p",null,"To allow aggregate roots to be associated with some objects that only have id, we can improve the code."),(0,o.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"Book book = bookRepository.findNullable(\n    1L,\n    Fetchers.BOOK_FETCHER\n        .allScalarFields()\n        // highlight-next-line\n        .store() // no args means id only  \n        // highlight-next-line\n        .authors() // no args means id only\n);\nSystem.out.println(book);\n"))),(0,o.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"val book = bookRepository.findNullable(\n    1L,\n    newFetcher(Book::class).by {\n        allScalarFields()\n        // highlight-next-line\n        store() // no args means id only\n        // highlight-next-line \n        authors() // no args means id only\n    } \n);\nSystem.out.println(book);\n")))),(0,o.kt)("p",null,"This time, we get a data structure like this: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id":1,\n    "name":"Learning GraphQL",\n    "edition":1,\n    "price":45,\n    "store":{\n        // Only has id property  \n        // highlight-next-line\n        "id":1\n    }, \n    "authors":[\n        {\n            // Only has id property\n            // highlight-next-line\n            "id":1\n        },\n        {\n            // Only has id property \n            // highlight-next-line\n            "id":2\n        }\n    ]\n}\n')),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"In Hibernate, this kind of object with only id property is called a proxy object. ")),(0,o.kt)("p",null,"However, associated objects with only id are not as simple as just the id of the association. Let's look at the same data expressed with associated ids instead of associated objects:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id":1, \n    "name":"Learning GraphQL",\n    "edition":1,\n    "price":45,  \n    // highlight-next-line \n    "storeId": 1,\n    // highlight-next-line\n    "authorIds":[1, 2] \n}\n')),(0,o.kt)("p",null,"It is obvious that for short association use cases, associated ids or their collections are simpler than associated objects or their collections with only id."),(0,o.kt)("h2",{id:"microsofts-solution"},"Microsoft's Solution"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ADO.NET EF Core")," is Microsoft's ORM. Let's look at its design: ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/ef/core/modeling/relationships?tabs=fluent-api%2Cfluent-api-simple-key%2Csimple-key"},"https://learn.microsoft.com/en-us/ef/core/modeling/relationships?tabs=fluent-api%2Cfluent-api-simple-key%2Csimple-key")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"public class Post \n{\n    public int PostId { get; set; }\n    public string Title { get; set; }\n    public string Content { get; set; }\n\n    // highlight-start\n    public int BlogId { get; set; } \n    public Blog Blog { get; set; }\n    // highlight-end\n}\n")),(0,o.kt)("p",null,"It's easy to see that:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Associated object: ",(0,o.kt)("inlineCode",{parentName:"li"},"public Blog Blog { get; set; }"),"  "),(0,o.kt)("li",{parentName:"ul"},"Associated id: ",(0,o.kt)("inlineCode",{parentName:"li"},"public int BlogId { get; set; }"))),(0,o.kt)("p",null,"They coexist."),(0,o.kt)("p",null,"Jimmer learns from this design of ",(0,o.kt)("inlineCode",{parentName:"p"},"ADO.NET EF Core")," and provides the ",(0,o.kt)("inlineCode",{parentName:"p"},"@IdView")," property."),(0,o.kt)("h2",{id:"idview-property"},"IdView Property"),(0,o.kt)("h3",{id:"declaring-view-properties"},"Declaring View Properties"),(0,o.kt)("p",null,"IdView properties are declared with ",(0,o.kt)("inlineCode",{parentName:"p"},"@org.babyfish.jimmer.sql.IdView"),":"),(0,o.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Book.java"',title:'"Book.java"'},'package com.example.model;\n\nimport org.babyfish.jimmer.sql.*;\nimport org.jetbrains.annotations.Nullable;\n\n@Entity\npublic interface Book {\n\n    ...other properties omitted... \n    \n    @ManyToOne  \n    @Nullable\n    BookStore store();\n\n    @ManyToMany\n    @JoinTable(\n        name = "BOOK_AUTHOR_MAPPING",\n        joinColumnName = "BOOK_ID", \n        inverseJoinColumnName = "AUTHOR_id"\n    )\n    List<Author> authors();\n\n    // highlight-next-line \n    @IdView // View of store id\n    Long storeId();\n\n    // View of all author ids in authors collection\n    // highlight-next-line\n    @IdView("authors")  \n    List<Long> authorIds(); \n}\n'))),(0,o.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Book.kt"',title:'"Book.kt"'},'package com.example.model\n\nimport org.babyfish.jimmer.sql.*\n\n@Entity  \ninterface Book {\n\n    ...other properties omitted...\n\n    @ManyToOne\n    val store: BookStore?\n\n    @ManyToMany\n    @JoinTable(\n        name = "BOOK_AUTHOR_MAPPING",\n        joinColumnName = "BOOK_ID",\n        inverseJoinColumnName = "AUTHOR_id" \n    )\n    val authors: List<Author>\n\n    // highlight-next-line\n    @IdView // View of store id\n    val storeId: Long? \n\n    // View of all author ids in authors collection\n    // highlight-next-line \n    @IdView("authors")\n    val authorIds: List<Long>  \n}\n')))),(0,o.kt)("p",null,"Where: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Book.storeId"),": View of the id of associated ",(0,o.kt)("inlineCode",{parentName:"p"},"Book.store")," object."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Since ",(0,o.kt)("inlineCode",{parentName:"p"},"storeId")," itself ends with ",(0,o.kt)("inlineCode",{parentName:"p"},"Id"),", the parameter of ",(0,o.kt)("inlineCode",{parentName:"p"},"@IdView")," annotation can be omitted. Jimmer infers the original association property to be ",(0,o.kt)("inlineCode",{parentName:"p"},"Book.store"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Nullability of original association property and IdView property must be consistent. "),(0,o.kt)("p",{parentName:"li"},"In this example, ",(0,o.kt)("inlineCode",{parentName:"p"},"Book.store")," property can be null, i.e. annotated with ",(0,o.kt)("inlineCode",{parentName:"p"},"@Nullable")," in Java, or returns ",(0,o.kt)("inlineCode",{parentName:"p"},"BookStore?")," in Kotlin."),(0,o.kt)("p",{parentName:"li"},"Therefore, ",(0,o.kt)("inlineCode",{parentName:"p"},"Book.storeId")," must also be nullable, i.e. returns ",(0,o.kt)("inlineCode",{parentName:"p"},"Long")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"long")," in Java, or returns ",(0,o.kt)("inlineCode",{parentName:"p"},"Long?")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"Long")," in Kotlin."),(0,o.kt)("p",{parentName:"li"},"Otherwise it would cause compile error.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Book.authorIds"),": View of ids of all ",(0,o.kt)("inlineCode",{parentName:"p"},"Author")," objects in associated ",(0,o.kt)("inlineCode",{parentName:"p"},"Book.authors")," collection."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"authorIds")," itself does not end with ",(0,o.kt)("inlineCode",{parentName:"p"},"Id"),", so the parameter of ",(0,o.kt)("inlineCode",{parentName:"p"},"@IdView")," annotation must be specified to explicitly indicate its original association is ",(0,o.kt)("inlineCode",{parentName:"p"},"Book.authors"),"."),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"This is required in this case due to irregular noun pluralization in English.")))))),(0,o.kt)("h3",{id:"essence-of-view-properties"},"Essence of View Properties"),(0,o.kt)("p",null,'The emphasis on the word "view" above is intentional. IdView properties do not have their own data, they are just views of original association properties. '),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"IdView properties and original association properties are linked. Setting one necessarily affects the other.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Setting view property affects original property:"),(0,o.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// Set view property\nBook book = Immutables.createBook(draft -> {\n    draft.setStoreId(10L);\n    draft.setAuthorIds(Arrays.asList(100L, 101L)); \n});\n\n// Print original property  \nSystem.out.println("Store: " + book.store());\nSystem.out.println("Authors:" + book.authors());\n'))),(0,o.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'// Set view property\nval book = Book { \n    storeId = 10L\n    authorIds = listOf(100L, 101L)\n}\n\n// Print original property\nprintln("Store: $book.store}")  \nprintln("Authors: ${book.authors}")\n')))),(0,o.kt)("p",{parentName:"li"},"Prints:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'Store: {"id":10}\nAuthors: [{"id":100},{"id":101}]\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Setting original property affects view property:"),(0,o.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// Set original property\nBook book = Immutables.createBook(draft -> {\n    draft.applyStore(store -> {\n        store.setId(10L).storeName("TURING")  \n    });\n    draft.addIntoAuthors(author -> {\n        author.setId(101L);\n        author.setFirstName("Fabrice");\n        author.setLastName("Marguerie"); \n    });\n    draft.addIntoAuthors(author -> {\n        author.setId(101L);\n        author.setFirstName("Steve");\n        author.setLastName("Eichert");  \n    });\n});\n\n// Print view property\nSystem.out.println("StoreId: " + book.storeId()); \nSystem.out.println("AuthorIds:" + book.authorIds());\n'))),(0,o.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'// Set original property\nval book = Book {\n    store { \n        id = 10L\n        name = "TURING"\n    }\n    authors().addBy {\n        id = 100L;\n        firstName = "Fabrice"\n        lastName = "Marguerie"\n    }\n    authors().addBy {\n        id = 101L  \n        firstName = "Steve"\n        lastName = "Eichert"  \n    }\n}\n\n// Print view property\nprintln("Store: $book.storeId}")\nprintln("Authors: ${book.authorIds}") \n')))),(0,o.kt)("p",{parentName:"li"},"Prints:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"StoreId: 10\nAuthorIds: [100, 101] \n")))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"This shows that view properties and original properties are highly unified. Jimmer is still a ORM framework that is core-associated-object-oriented. View properties are just syntactic sugar."),(0,o.kt)("p",{parentName:"admonition"},"Except for the impact on ",(0,o.kt)("a",{parentName:"p",href:"../../../query/object-fetcher"},"ObjectFetcher")," to be explained below, view properties do not affect ORM and core logic at all.")),(0,o.kt)("h2",{id:"fetching-idview-properties"},"Fetching IdView Properties"),(0,o.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"Book book = bookRepository.findNullable(\n    1L,\n    Fetchers.BOOK_FETCHER\n        .allScalarFields()\n        // highlight-next-line  \n        .storeId()\n        // highlight-next-line\n        .authorIds()\n);\nSystem.out.println(book);\n"))),(0,o.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"val book = bookRepository.findNullable(\n    1L,\n    newFetcher(Book::class).by {\n        allScalarFields() \n        // highlight-next-line\n        storeId()\n        // highlight-next-line\n        authorIds()\n    }\n);\nSystem.out.println(book); \n")))),(0,o.kt)("p",null,"Prints:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id":1,\n    "name":"Learning GraphQL",\n    "edition":1,\n    "price":45,\n    // highlight-next-line\n    "storeId": 1,  \n    // highlight-next-line\n    "authorIds":[1, 2]\n}\n')),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"For Jimmer dynamic entities, original association properties and view properties are absolutely consistent. Either both can be accessed, or both are missing."),(0,o.kt)("p",{parentName:"admonition"},"Whether choosing to fetch the original association property or choosing to fetch the IdView view property does not affect the underlying execution logic of Jimmer, including the ultimately generated SQL. "),(0,o.kt)("p",{parentName:"admonition"},"The only difference brought by different choices is that the Jackson ",(0,o.kt)("a",{parentName:"p",href:"../../../object/visibility"},"visibility flag")," of original association properties and view properties are different."),(0,o.kt)("p",{parentName:"admonition"},"That is, properties fetched directly will be serialized by Jackson, while properties not fetched directly will be ignored.")),(0,o.kt)("p",null,"Here is the English translation of the file, with the code indentation preserved:"),(0,o.kt)("h2",{id:"do-not-abuse"},"Do Not Abuse"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Without the assistance of DTOs, hope that the entity itself can express associated ids, is the only scenario where it is appropriate to use ",(0,o.kt)("inlineCode",{parentName:"p"},"@IdView"),"."),(0,o.kt)("p",{parentName:"admonition"},"Other features make no assumptions about whether an association property has a corresponding ",(0,o.kt)("inlineCode",{parentName:"p"},"@IdView")," property.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Using associated IDs in the SQL DSL"),(0,o.kt)("p",{parentName:"li"},"Even if an entity's one-to-one or many-to-one association property does not have a corresponding ",(0,o.kt)("inlineCode",{parentName:"p"},"@IdView")," property, you can still use associated id expressions in the SQL DSL, for example:"),(0,o.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-java"},"where(table.storeId().eq(2L));\n"))),(0,o.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"where(table.storeId eq 2L)\n")))),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"Of course, if you are not satisfied with the auto-generated name for the associated id (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"storeId")," here), you can provide an ",(0,o.kt)("inlineCode",{parentName:"p"},"@IdView")," property to change its name."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Using associated ids in the DTO language"),(0,o.kt)("p",{parentName:"li"},"The DTO language does not require ",(0,o.kt)("inlineCode",{parentName:"p"},"@IdView")," properties at all. Even if an entity's associated property already has a corresponding ",(0,o.kt)("inlineCode",{parentName:"p"},"@IdView")," property,\nit is not recommended to use it in the DTO language, as this is a fragile assumption.\nOnce that ",(0,o.kt)("inlineCode",{parentName:"p"},"@IdView")," property is removed, the DTO code cannot be correctly compiled until it is synchronized with the change."),(0,o.kt)("p",{parentName:"li"},"The DTO language should directly use the association properties, for example:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"export yourpackage.Book\n    -> package yourpackage.dto\n\ninput BookInput {\n    allScalarFields()\n    #highlight-next-line\n    id(store) // as storeId\n    #highlight-next-line\n    id(authors) as authorIds\n}\n\nspecification BookSpecification {\n    like/i(name)\n    #highlight-next-line\n    associatedIdIn(store) as storeIds\n    #highlight-next-line\n    associatedIdNotIn(store) as excludedStoreIds\n}\n")))))}h.isMDXComponent=!0}}]);