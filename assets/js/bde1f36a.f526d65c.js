"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[5597],{16343:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"mapping/advanced/json","title":"JSON Mapping","description":"Jimmer supports JSON properties. In Java/Kotlin entity types, such properties can be declared as any type other than java.lang.Object and kotlin.Any.","source":"@site/docs/mapping/advanced/json.mdx","sourceDirName":"mapping/advanced","slug":"/mapping/advanced/json","permalink":"/jimmer-doc/docs/mapping/advanced/json","draft":false,"unlisted":false,"editUrl":"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/mapping/advanced/json.mdx","tags":[],"version":"current","lastUpdatedAt":1704015848000,"sidebarPosition":7,"frontMatter":{"sidebar_position":7,"title":"JSON Mapping"},"sidebar":"tutorialSidebar","previous":{"title":"Enum Mapping","permalink":"/jimmer-doc/docs/mapping/advanced/enum"},"next":{"title":"Non-Structural Mapping","permalink":"/jimmer-doc/docs/mapping/advanced/join-sql"}}');var r=t(74848),i=t(28453),l=t(11470),s=t(19365);const o={sidebar_position:7,title:"JSON Mapping"},c=void 0,p={},d=[{value:"Global JSON Mapping",id:"global-json-mapping",level:2},{value:"Property-level JSON Mapping",id:"property-level-json-mapping",level:2},{value:"ObjectMapper Configuration",id:"objectmapper-configuration",level:2},{value:"Use Low-level API",id:"use-low-level-api",level:3},{value:"Use Spring Boot Starter",id:"use-spring-boot-starter",level:3}];function u(e){const n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Jimmer supports JSON properties. In Java/Kotlin entity types, such properties can be declared as any type other than ",(0,r.jsx)(n.code,{children:"java.lang.Object"})," and ",(0,r.jsx)(n.code,{children:"kotlin.Any"}),".\nIn the database, the information stored in the corresponding column is JSON."]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"JSON properties are simple properties, not association properties."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["According to the current implementation, the corresponding column type in Postgres should be ",(0,r.jsx)(n.code,{children:"jsonb"}),", and the corresponding column type in other databases should be string."]}),"\n"]}),"\n"]})}),"\n",(0,r.jsxs)(n.p,{children:["Jimmer provides ",(0,r.jsx)(n.code,{children:"org.babyfish.jimmer.sql.Serialized"}),". There are two ways to use JSON mapping:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Global JSON mapping"}),"\n",(0,r.jsxs)(n.p,{children:["If the property type is a custom class rather than an array, collection, or Map, decorate this class with ",(0,r.jsx)(n.code,{children:"@Serialized"}),". This way, any properties of the this type in all entities will become JSON properties."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Property-level JSON mapping"}),"\n",(0,r.jsxs)(n.p,{children:["The current property can be decorated with ",(0,r.jsx)(n.code,{children:"@Serialized"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Properties of array, collection, or map types must use property-level mapping; however, global mapping is better for custom types."}),"\n",(0,r.jsx)(n.h2,{id:"global-json-mapping",children:"Global JSON Mapping"}),"\n",(0,r.jsxs)(n.p,{children:["First, define a custom class and decorate it with ",(0,r.jsx)(n.code,{children:"@Serialized"}),":"]}),"\n",(0,r.jsxs)(l.A,{groupId:"language",children:[(0,r.jsx)(s.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="UserType.java"',children:"// highlight-next-line\n@Serialized\npublic class UserType {\n\n    ...Omit members, can contain any info...\n    ...As long as Json serialization/deserialization is supported... \n}\n"})})}),(0,r.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",metastring:'title="UserType.kt"',children:"// highlight-next-line\n@Serialized  \ndata class UserType(\n\n    ...Omit parameters, can contain any info...\n    ...As long as Json serialization/deserialization is supported...\n)\n"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["Then ",(0,r.jsx)(n.code,{children:"UserType"})," can be used to define properties for any entity:"]}),"\n",(0,r.jsxs)(l.A,{groupId:"language",children:[(0,r.jsx)(s.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="Book.java" ',children:"@Entity\npublic interface Book {\n\n    // highlight-next-line\n    UserType userData();\n\n    ...Omit other types...\n}\n"})})}),(0,r.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",metastring:'title="Book.kt"',children:"@Entity\ninterface Book {\n\n    // highlight-next-line\n    val userData: UserType\n    \n    ...Omit other types... \n}\n"})})})]}),"\n",(0,r.jsx)(n.h2,{id:"property-level-json-mapping",children:"Property-level JSON Mapping"}),"\n",(0,r.jsxs)(n.p,{children:["Just decorate the property with ",(0,r.jsx)(n.code,{children:"@Serialized"}),":"]}),"\n",(0,r.jsxs)(l.A,{groupId:"language",children:[(0,r.jsx)(s.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="Book.java" ',children:"@Entity\npublic interface Book {\n\n    // highlight-next-line\n    @Serialized\n    List<Map<String, SomeType1>> userData1();\n\n    // highlight-next-line\n    @Serialized\n    Map<String, List<SomeType2>> userData2();\n\n    ...Omit other types...\n}\n"})})}),(0,r.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",metastring:'title="Book.kt"',children:"@Entity\ninterface Book {\n\n    // highlight-next-line\n    @Serialized\n    val userData1: List<Map<String, SomeType1>>\n    \n    // highlight-next-line \n    @Serialized\n    val userData2: Map<String, List<SomeType2>>\n    \n    ...Omit other types...\n}\n"})})})]}),"\n",(0,r.jsx)(n.h2,{id:"objectmapper-configuration",children:"ObjectMapper Configuration"}),"\n",(0,r.jsx)(n.h3,{id:"use-low-level-api",children:"Use Low-level API"}),"\n",(0,r.jsxs)(n.p,{children:["Developers can configure the ObjectMapper for JSON serialization/deserialization of properties decorated with ",(0,r.jsx)(n.code,{children:"@Seralized"}),"."]}),"\n",(0,r.jsxs)(l.A,{groupId:"language",children:[(0,r.jsx)(s.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"ObjectMapper mapper1 = ...omitted...;\nObjectMapper mapper2 = ...omitted...; \nObjectMapper mapper3 = ...omitted...;\nJSqlClient sqlClient = JSqlClient\n    .newBuilder()\n    .setDefaultSerializedTypeObjectMapper(mapper1) \u2776\n    .setSerializedTypeObjectMapper(MetaConfig.class, mapper2) \u2777\n    .setSerializedTypePropMapper(TopicProps.TAGS, mapper3) \u2778\n    ...Omit other configurations...\n    .build();\n"})})}),(0,r.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:"val mapper1: ObjectMapper = ...omitted...\nval mapper2: ObjectMapper = ...omitted...\nval mapper3: ObjectMapper = ...omitted...\nval sqlClient = newKSqlClient {\n    setDefaultSerializedTypeObjectMapper(mapper1) \u2776\n    setSerializedTypeObjectMapper(MetaConfig::class, mapper2) \u2777\n    setSerializedTypePropMapper(Topic::tags, mapper3) \u2778\n    ...Omit other configurations...\n}\n"})})})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u2776 Set default ObjectMapper to ",(0,r.jsx)(n.code,{children:"mapper1"})]}),"\n",(0,r.jsxs)(n.p,{children:["Equivalent to ",(0,r.jsx)(n.code,{children:"setSerializedTypeObjectMapper(Object.class, mapper1)"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u2777 For any property whose return type is MetaConfig or its subclass, use ",(0,r.jsx)(n.code,{children:"mapper2"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u2778 Explicitly set ObjectMapper for ",(0,r.jsx)(n.code,{children:"Topic.tags"})," to ",(0,r.jsx)(n.code,{children:"mapper3"})]}),"\n",(0,r.jsxs)(n.p,{children:["If the set property is not decorated with ",(0,r.jsx)(n.code,{children:"@Serialized"}),", an exception will be thrown"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Configuration precedence: \u2778 > \u2777 > \u2776"}),"\n",(0,r.jsx)(n.h3,{id:"use-spring-boot-starter",children:"Use Spring Boot Starter"}),"\n",(0,r.jsxs)(n.p,{children:["If using the Spring Boot Starter, the SqlClient is created automatically, but users can change the configuration before SqlClient is created via ",(0,r.jsx)(n.code,{children:"Customizer/KCoustomizer"}),":"]}),"\n",(0,r.jsxs)(l.A,{groupId:"language",children:[(0,r.jsx)(s.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"// highlight-next-line\n@Component \npublic class SerializationCustomizer implements Customizer {\n\n    @Override  \n    public void customize(JSqlClient.Builder builder) {\n        builder\n            .setDefaultSerializedTypeObjectMapper(...omitted...)\n            .setSerializedTypeObjectMapper(MetaConfig.class, ...omitted...)\n            .setSerializedTypePropMapper(TopicProps.TAGS, ...omitted...); \n    }\n}\n"})})}),(0,r.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:"// highlight-next-line\n@Component\nclass SerializationCustomizer : KCustomizer {\n    \n    override fun customize(dsl: KSqlClientDsl) {\n        dsl\n            .setDefaultSerializedTypeObjectMapper(...omitted...)\n            .setSerializedTypeObjectMapper(MetaConfig::class, ...omitted...)\n            .setSerializedTypePropMapper(Topic::tags, ...omitted...);\n    }\n}\n"})})})]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>l});t(96540);var a=t(18215);const r={tabItem:"tabItem_Ymn6"};var i=t(74848);function l(e){let{children:n,hidden:t,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,l),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>S});var a=t(96540),r=t(18215),i=t(23104),l=t(56347),s=t(205),o=t(57485),c=t(31682),p=t(70679);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const r=(0,l.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(i),(0,a.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})}),[i,r])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,i=u(e),[l,o]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:i}))),[c,d]=m({queryString:t,groupId:r}),[g,j]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,i]=(0,p.Dv)(t);return[r,(0,a.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:r}),b=(()=>{const e=c??g;return h({value:e,tabValues:i})?e:null})();(0,s.A)((()=>{b&&o(b)}),[b]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),j(e)}),[d,j,i]),tabValues:i}}var j=t(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(74848);function v(e){let{className:n,block:t,selectedValue:a,selectValue:l,tabValues:s}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),p=e=>{const n=e.currentTarget,t=o.indexOf(n),r=s[t].value;r!==a&&(c(n),l(r))},d=e=>{let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>o.push(e),onKeyDown:d,onClick:p,...i,className:(0,r.A)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function f(e){let{lazy:n,children:t,selectedValue:i}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===i));return e?(0,a.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function y(e){const n=g(e);return(0,x.jsxs)("div",{className:(0,r.A)("tabs-container",b.tabList),children:[(0,x.jsx)(v,{...n,...e}),(0,x.jsx)(f,{...n,...e})]})}function S(e){const n=(0,j.A)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>s});var a=t(96540);const r={},i=a.createContext(r);function l(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);