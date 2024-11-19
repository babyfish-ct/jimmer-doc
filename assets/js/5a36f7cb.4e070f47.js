"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[5101],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),c=p(n),d=l,k=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,i=new Array(o);i[0]=c;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:l,i[1]=r;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),l=n(34334);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(o,i),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(83117),l=n(67294),o=n(34334),i=n(72389),r=n(67392),s=n(7094),p=n(12466);const u="tabList__CuJ",m="tabItem_LNqP";function c(e){var t;const{lazy:n,block:i,defaultValue:c,values:d,groupId:k,className:g}=e,b=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=d??b.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),v=(0,r.l)(h,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===c?c:c??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??b[0].props.value;if(null!==f&&!h.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:N}=(0,s.U)(),[T,S]=(0,l.useState)(f),C=[],{blockElementScrollPositionUntilNextRender:w}=(0,p.o5)();if(null!=k){const e=y[k];null!=e&&e!==T&&h.some((t=>t.value===e))&&S(e)}const x=e=>{const t=e.currentTarget,n=C.indexOf(t),a=h[n].value;a!==T&&(w(t),S(a),null!=k&&N(k,String(a)))},I=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=C.indexOf(e.currentTarget)+1;n=C[t]??C[0];break}case"ArrowLeft":{const t=C.indexOf(e.currentTarget)-1;n=C[t]??C[C.length-1];break}}null==(t=n)||t.focus()};return l.createElement("div",{className:(0,o.Z)("tabs-container",u)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},g)},h.map((e=>{let{value:t,label:n,attributes:i}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>C.push(e),onKeyDown:I,onFocus:x,onClick:x},i,{className:(0,o.Z)("tabs__item",m,null==i?void 0:i.className,{"tabs__item--active":T===t})}),n??t)}))),n?(0,l.cloneElement)(b.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function d(e){const t=(0,i.Z)();return l.createElement(c,(0,a.Z)({key:String(t)},e))}},32102:(e,t,n)=>{n.d(t,{s:()=>g});var a=n(83117),l=n(67294),o=n(42293),i=n(50657),r=n(6514),s=n(54776),p=n(10155),u=n(15861),m=n(93946),c=n(9137),d=n(61274),k=n(50594);const g=(0,l.memo)((e=>{let{open:t,fullScreen:n=!1,title:a,maxWidth:s="md",onClose:g,children:h}=e;const[v,f]=(0,l.useState)(n),y=(0,l.useCallback)((()=>{f((e=>!e))}),[]);return l.createElement(i.Z,{open:t,onClose:g,fullScreen:v,TransitionComponent:b,maxWidth:s},l.createElement(o.Z,{sx:{position:"relative"}},l.createElement(p.Z,null,l.createElement(u.Z,{sx:{ml:2,flex:1},variant:"h6",component:"div"},a),l.createElement(m.Z,{onClick:y,style:{color:"white"}},v?l.createElement(d.Z,null):l.createElement(c.Z,null)),l.createElement(m.Z,{"aria-label":"close",onClick:g,style:{color:"white"}},l.createElement(k.Z,null)))),l.createElement(r.Z,null,h))})),b=l.forwardRef((function(e,t){return l.createElement(s.Z,(0,a.Z)({direction:"up",ref:t},e))}))},39511:(e,t,n)=>{n.d(t,{b:()=>i});var a=n(67294),l=n(83321),o=n(32102);const i=(0,a.memo)((e=>{let{buttonText:t,fullScreen:n=!1,title:i=t,variant:r="outlined",large:s=!1,maxWidth:p,useOriginalText:u=!0,children:m}=e;const[c,d]=(0,a.useState)(!1),k=(0,a.useCallback)((e=>{d(!0),e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}),[]),g=(0,a.useCallback)((()=>{d(!1)}),[]),b=u?{textTransform:"none"}:{};return a.createElement(a.Fragment,null,a.createElement(l.Z,{"data-is-view-more-button":"true",onClick:k,variant:r,size:s?"large":"small",style:b},t),a.createElement(o.s,{open:c,onClose:g,title:i,maxWidth:p,fullScreen:n},m))}))},28625:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>k,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var a=n(83117),l=(n(67294),n(3905)),o=n(65488),i=n(85162),r=n(39511);const s={sidebar_position:5,title:"Final Usage"},p=void 0,u={unversionedId:"quick-view/get-started/usage",id:"quick-view/get-started/usage",title:"Final Usage",description:"Jimmer's Two Usages",source:"@site/docs/quick-view/get-started/usage.mdx",sourceDirName:"quick-view/get-started",slug:"/quick-view/get-started/usage",permalink:"/jimmer-doc/docs/quick-view/get-started/usage",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/quick-view/get-started/usage.mdx",tags:[],version:"current",lastUpdatedAt:1731502434,formattedLastUpdatedAt:"Nov 13, 2024",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Final Usage"},sidebar:"tutorialSidebar",previous:{title:"Generate Code",permalink:"/jimmer-doc/docs/quick-view/get-started/generate-code"},next:{title:"Standard Examples",permalink:"/jimmer-doc/docs/quick-view/standard-demo"}},m={},c=[{value:"SqlClient",id:"sqlclient",level:2},{value:"Query",id:"query",level:2},{value:"Save",id:"save",level:2},{value:"Save Short Associations",id:"save-short-associations",level:3},{value:"Save Long Associations",id:"save-long-associations",level:3},{value:"Delete",id:"delete",level:2}],d={toc:c};function k(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Jimmer's Two Usages  "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Use Jimmer's Spring Boot Starter")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Directly use the underlying SqlClient   "))),(0,l.kt)("p",null,"Jimmer has complete sample projects. For how to use Jimmer's Spring Boot Starter, please refer to the examples. This article discusses using the underlying sqlClient directly without Spring.  "),(0,l.kt)("h2",{id:"sqlclient"},"SqlClient"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"SqlClient")," is the lowest-level API in Jimmer  "),(0,l.kt)("table",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"Java"),(0,l.kt)("td",null,"org.babyfish.jimmer.sql.JSqlClient")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Kotlin"),(0,l.kt)("td",null,"org.babyfish.jimmer.sql.kt.KSqlClient"))),(0,l.kt)("p",null,"You need to create a global object of this type, which is the API entry point for all ORM behaviors of Jimmer."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"  ",(0,l.kt)("a",{parentName:"p",href:"../../configuration/multi-datasources"},"Multiple data sources")," require creating multiple global objects.\nHowever, here we discuss the most common case of a single data source, where one global object is sufficient.")),(0,l.kt)("p",null,"Since we are using the Jimmer Spring Boot Starter, in this case, please specify the following configuration in ",(0,l.kt)("inlineCode",{parentName:"p"},"application.yml")," ",(0,l.kt)("em",{parentName:"p"},"(or ",(0,l.kt)("inlineCode",{parentName:"em"},"application.properties"),")")),(0,l.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"spring:\n    datasource:\n        driver-class-name: com.mysql.cj.jdbc.Driver\n        url: jdbc:mysql://localhost:3306/jimmer_demo\n        username: root\n        password: 123456\njimmer:\n    dialect: org.babyfish.jimmer.sql.dialect.MySqlDialect\n    show-sql: true\n    pretty-sql: true\n    database-validation-mode: ERROR\n"))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"spring:\n    datasource:\n        driver-class-name: com.mysql.cj.jdbc.Driver\n        url: jdbc:mysql://localhost:3306/jimmer_demo\n        username: root\n        password: 123456\njimmer:\n    #highlight-next-line\n    language: kotlin // This is important for kotlin\n    dialect: org.babyfish.jimmer.sql.dialect.MySqlDialect\n    show-sql: true\n    pretty-sql: true\n    database-validation-mode: ERROR\n")))),(0,l.kt)("p",null,"The Jimmer Spring Boot Starter will automatically create this global object"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"  Note that for Kotlin, in order to create ",(0,l.kt)("inlineCode",{parentName:"p"},"KSqlClient")," instead of ",(0,l.kt)("inlineCode",{parentName:"p"},"JSqlClient"),", you need to configure ",(0,l.kt)("inlineCode",{parentName:"p"},"jimmer.language = kotlin")," in ",(0,l.kt)("inlineCode",{parentName:"p"},"application.yml"),"/",(0,l.kt)("inlineCode",{parentName:"p"},"application.properties"),".")),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Therefore, you can directly inject an object of type ",(0,l.kt)("inlineCode",{parentName:"p"},"JSqlClient"),"/",(0,l.kt)("inlineCode",{parentName:"p"},"KSqlClient")," anywhere."),(0,l.kt)("p",{parentName:"admonition"},"The subsequent code in this article will assume there is a ",(0,l.kt)("inlineCode",{parentName:"p"},"sqlClient")," variable and use it, but it will not provide an explanation, as a detailed explanation has already been given here.")),(0,l.kt)("h2",{id:"query"},"Query"),(0,l.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'package com.example.model.repository;  \n\nimport org.babyfish.jimmer.sql.JSqlClient;\nimport org.babyfish.jimmer.sql.fetcher.Fetcher;\nimport org.babyfish.jimmer.Page;  \n\nimport com.example.model.Book;\nimport com.example.model.BookTable;  \n\npublic class BookRepository {\n\n    private static final BookTable T = BookTable.$;\n\n    private final JSqlClient sqlClient;\n\n    public BookRepository(JSqlClient sqlClient) {\n        this.sqlClient = sqlClient;\n    }\n\n    public Page<Book> findBooks(  \n\n            int pageIndex, // Starts from 0\n            int pageSize,\n            \n            @Nullable Fetcher<Book> fetcher,\n\n            // e.g. "name asc, edition desc"\n            @Nullable String sortCode, \n            \n            @Nullable String name,\n            @Nullable BigDecimal minPrice,\n            @Nullable BigDecimal maxPrice, \n            @Nullable String storeName,\n            @Nullable String storeWebsite,\n            @Nullable String authorName,\n            @Nullable Gender authorGender\n    ) {\n        return sqlClient\n                .createQuery(T)\n                .where(T.name().ilikeIf(name)) \n                .where(T.price().betweenIf(minPrice, maxPrice))\n                .where(T.store().name().ilikeIf(storeName))\n                .where(T.store().website().ilikeIf(storeWebsite))\n                .where(\n                        T.authors(author -> \n                                Predicate.or(\n                                        author.firstName().ilikeIf(authorName),  \n                                        author.lastName().ilikeIf(authorName)\n                                )\n                        )\n                )\n                .where(T.authors(author -> author.gender().eqIf(authorGender)))\n                .orderBy(\n                        Order.makeOrders(\n                                T,\n                                sortCode != null ?  \n                                        sortCode :  \n                                        "name asc, edition desc"\n                        )\n                )\n                .select(\n                    T.fetch(fetcher)\n                )\n                .fetchPage(pageIndex, pageSize);\n    }\n} \n'))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'package com.example.model.repository  \n\nimport org.babyfish.jimmer.sql.kt.KSqlClient\nimport org.babyfish.jimmer.sql.fetcher.Fetcher \nimport org.babyfish.jimmer.Page  \n\nimport com.example.model.*  \n\nclass BookRepository(\n    private val sqlClient: KSqlClient\n) {\n\n    fun findBooks(\n        \n        pageIndex: Int, // Starts from 0 \n        pageSize: Int = 10, \n\n        fetcher: Fetcher<Book>? = null,\n\n        sortCode: String = "name asc, edition desc", \n\n        name: String? = null,\n        minPrice: BigDecimal? = null, \n        maxPrice: BigDecimal? = null,\n        storeName: String? = null, \n        storeWebsite: String? = null,\n        authorName: String? = null, \n        authorGender: Gender? = null  \n    ): Page<Book> =\n        sqlClient\n            .createQuery(Book::class) {\n                where(table.name `ilike?` name)\n                where(table.price.`between?`(minPrice, maxPrice))\n                where(table.store.name `ilike?` storeName)\n                where(table.store.website `ilike?` storeWebsite)\n                where += table.authors {  \n                    or(  \n                        firstName `ilike?` authorName,  \n                        lastName `ilike?` authorName  \n                    )\n                }\n                where += table.authors { gender `eq?` authorGender } \n                orderBy(table.makeOrders(sortCode))\n                select( \n                    table.fetch(fetcher)\n                )\n            }\n            .fetchPage(pageIndex, pageSize) \n}\n')))),(0,l.kt)("p",null,"Users can create ",(0,l.kt)("inlineCode",{parentName:"p"},"BookRepository")," objects and combine the parameters in various ways to test:  "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Dynamic queries ",(0,l.kt)("em",{parentName:"li"},"(including dynamic joins, implicit subqueries)"),"  "),(0,l.kt)("li",{parentName:"ul"},"Dynamic sorting"),(0,l.kt)("li",{parentName:"ul"},"Paged queries")),(0,l.kt)("p",null,"Details omitted here.  "),(0,l.kt)("h2",{id:"save"},"Save"),(0,l.kt)("h3",{id:"save-short-associations"},"Save Short Associations"),(0,l.kt)("p",null,"In the ",(0,l.kt)("inlineCode",{parentName:"p"},"src/main/dto")," directory, create any file with extension ",(0,l.kt)("inlineCode",{parentName:"p"},"dto")," and edit its code:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"export com.example.model.Book\n    -> package com.example.model.dto  \n\ninput BookInput {\n    #allScalars(this) \n    id(store) // as storeId\n    id(authors) as authorIds  \n}\n")),(0,l.kt)("p",null,"Compile to generate the Java/Kotlin DTO type ",(0,l.kt)("inlineCode",{parentName:"p"},"com.example.model.dto.BookInput"),":  "),(0,l.kt)(r.b,{buttonText:"View Generated Code",title:"Generated BookInput",mdxType:"ViewMore"},(0,l.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"package package com.example.model.dto;  \n\npublic class BookInput implements Input<Book> {  \n\n    @Nullable\n    private Long id;\n\n    private String name;   \n\n    private int edition;\n\n    private BigDecimal price;\n\n    @Nullable  \n    private Long storeId;\n\n    private List<Long> authorIds;  \n\n    ...other members omitted...\n}\n"))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"class BookInput(\n    val id: Long? = null, \n    val name: String,\n    val edition: Int,\n    val price: BigDecimal,\n    val storeId: Long? = null,\n    val authorIds: List<Long> = emptyList()  \n) : Input<Book> {\n    ...other members omitted... \n}\n")))),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("inlineCode",{parentName:"p"},"Book.id")," on entities cannot be null, but ",(0,l.kt)("inlineCode",{parentName:"p"},"BookInput.id")," on DTOs here is allowed to be null.",(0,l.kt)("br",{parentName:"p"}),"\n","See ",(0,l.kt)("a",{parentName:"p",href:"../../object/view/dto-language#32-input-specific-functionalities"},"DTO Language/3.2. Input-specific functionalities")))),(0,l.kt)("p",null,"Then modify the ",(0,l.kt)("inlineCode",{parentName:"p"},"BookRepository"),":  "),(0,l.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"public class BookRepository {\n\n    ...other members omitted...\n\n    public long saveBook(BookInput input) {\n        return sqlClient\n            .save(input) \n            .execute()\n            .getModifiedEntity()  \n            // Return auto-generated id if `input.id` is null\n            .getId(); \n    }  \n}\n"))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"class BookRepository {\n\n    ...other members omitted...  \n\n    fun saveBook(input: BookInput): Long =  \n        sqlClient \n            .save(input)\n            .modifiedEntity\n            // Return auto-generated id if `input.id` is null\n            .id\n}\n")))),(0,l.kt)("h3",{id:"save-long-associations"},"Save Long Associations"),(0,l.kt)("p",null,"In the ",(0,l.kt)("inlineCode",{parentName:"p"},"src/main/dto")," directory, create any file with extension ",(0,l.kt)("inlineCode",{parentName:"p"},"dto")," and edit its code: "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"export com.example.model.BookStore \n    -> package com.example.model.dto  \n\ninput CompositeBookStoreInput {\n    #allScalars(this)\n    books { \n        #allScalars(this)\n        -id\n    }  \n} \n")),(0,l.kt)("p",null,"Compile to generate the Java/Kotlin DTO type ",(0,l.kt)("inlineCode",{parentName:"p"},"com.example.model.dto.CompositeBookStoreInput"),":  "),(0,l.kt)(r.b,{buttonText:"View Generated Code",title:"Generated CompositeBookStoreInput",mdxType:"ViewMore"},(0,l.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"package package com.example.model.dto;\n\npublic class CompositeBookStoreInput implements Input<BookStore> {\n\n    @Nullable\n    private Long id;\n\n    private String name;  \n\n    @Nullable\n    private String website;\n\n    private List<TargetOf_books> books;\n\n    ...other members omitted...\n\n    public static class TargetOf_books implements Input<Book> {\n\n        private String name;\n\n        private int edition;\n\n        private BigPrice price;  \n\n        ...other members omitted...\n    }\n}\n"))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"class CompositeBookStoreInput(\n    val id: Long? = null,\n    val name: String, \n    val website: String? = null,\n    val books: List<TargetOf_books> = emptyList() \n) : Input<BookStore> {\n    ...other members omitted...\n\n    class TargetOf_books(\n        val name: String,\n        val edition: Int, \n        val price: BigDecimal \n    ) : Input<Book> {\n        ...other members omitted...\n    }\n}\n")))),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("inlineCode",{parentName:"p"},"BookStore.id")," on entities cannot be null, but ",(0,l.kt)("inlineCode",{parentName:"p"},"CompositeBookStoreInput.id")," on DTOs here is allowed to be null.",(0,l.kt)("br",{parentName:"p"}),"\n","See ",(0,l.kt)("a",{parentName:"p",href:"../../object/view/dto-language#32-input-specific-functionalities"},"DTO Language/3.2. Input-specific functionalities")))),(0,l.kt)("p",null,"Then create the ",(0,l.kt)("inlineCode",{parentName:"p"},"BookStoreRepository"),":  "),(0,l.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"public class BookStoreRepository {\n\n    public long saveBookStore(CompositeBookStoreInput input) {\n        return sqlClient\n            .save(input)\n            .execute()\n            .getModifiedEntity()  \n            // Return auto-generated id if `input.id` is null\n            .getId();\n    }\n} \n"))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"class BookStoreRepository {\n\n    fun saveBookStore(input: CompositeBookStoreInput): Long =\n        sqlClient\n            .save(input) \n            .modifiedEntity  \n            // Return auto-generated id if `input.id` is null\n            .id  \n}\n")))),(0,l.kt)("h2",{id:"delete"},"Delete"),(0,l.kt)("p",null,"Modify the ",(0,l.kt)("inlineCode",{parentName:"p"},"BookRepository"),":  "),(0,l.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"public class BookRepository {\n\n    ...other members omitted...\n\n    public void deleteBook(long id) {\n        sqlClient.deleteById(Book.class, id);\n    }\n}\n"))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"class BookRepository {\n\n    ...other members omitted...\n\n    fun deleteBook(id: Long) {\n        sqlClient.deleteById(Book::class, id) \n    }  \n}\n")))))}k.isMDXComponent=!0}}]);