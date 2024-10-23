"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[4851],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||l;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(34334);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(83117),r=n(67294),l=n(34334),i=n(72389),o=n(67392),s=n(7094),u=n(12466);const c="tabList__CuJ",m="tabItem_LNqP";function p(e){var t;const{lazy:n,block:i,defaultValue:p,values:d,groupId:h,className:b}=e,k=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=d??k.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),v=(0,o.l)(f,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===p?p:p??(null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)??k[0].props.value;if(null!==g&&!f.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:w}=(0,s.U)(),[N,T]=(0,r.useState)(g),x=[],{blockElementScrollPositionUntilNextRender:I}=(0,u.o5)();if(null!=h){const e=y[h];null!=e&&e!==N&&f.some((t=>t.value===e))&&T(e)}const C=e=>{const t=e.currentTarget,n=x.indexOf(t),a=f[n].value;a!==N&&(I(t),T(a),null!=h&&w(h,String(a)))},O=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;n=x[t]??x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;n=x[t]??x[x.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":i},b)},f.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>x.push(e),onKeyDown:O,onFocus:C,onClick:C},i,{className:(0,l.Z)("tabs__item",m,null==i?void 0:i.className,{"tabs__item--active":N===t})}),n??t)}))),n?(0,r.cloneElement)(k.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function d(e){const t=(0,i.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},52651:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>m});var a=n(83117),r=(n(67294),n(3905)),l=n(65488),i=n(85162);const o={sidebar_position:2,title:"4.2 \u52a8\u6001\u6761\u4ef6"},s=void 0,u={unversionedId:"showcase/where/dynamic-where",id:"showcase/where/dynamic-where",title:"4.2 \u52a8\u6001\u6761\u4ef6",description:"\u4f7f\u7528whereIf",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/showcase/where/dynamic-where.mdx",sourceDirName:"showcase/where",slug:"/showcase/where/dynamic-where",permalink:"/jimmer-doc/zh/docs/showcase/where/dynamic-where",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/showcase/where/dynamic-where.mdx",tags:[],version:"current",lastUpdatedAt:1714129053,formattedLastUpdatedAt:"2024\u5e744\u670826\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"4.2 \u52a8\u6001\u6761\u4ef6"},sidebar:"tutorialSidebar",previous:{title:"4.1 \u57fa\u672c\u7528\u6cd5",permalink:"/jimmer-doc/zh/docs/showcase/where/usage"},next:{title:"4.3 \u5173\u8054id",permalink:"/jimmer-doc/zh/docs/showcase/where/associated-id"}},c={},m=[{value:"\u4f7f\u7528whereIf",id:"\u4f7f\u7528whereif",level:2},{value:"\u4f7f\u7528\u52a8\u6001\u8c13\u8bcd",id:"\u4f7f\u7528\u52a8\u6001\u8c13\u8bcd",level:2},{value:"\u6bd4\u8f83",id:"\u6bd4\u8f83",level:2}],p={toc:m};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u4f7f\u7528whereif"},"\u4f7f\u7528whereIf"),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@Nullable String name = ...\u7565...;\n@Nullable Integer edition = ...\u7565...;\n\nBookTable table = BookTable.$;\nList<Book> books = sqlClient\n    .createQuery(table)\n    // highlight-next-line\n    .whereIf(\n        name != null && !name.isEmpty(), \n        () -> table.name().ilike(name)\n    )\n    // highlight-next-line\n    .whereIf(\n        edition != null, \n        table.edition().eq(edition)\n    )\n    .select(table)\n    .execute();\n"))),(0,r.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val name: String? = ...\u7565...\nval edition: Int? = ...\u7565...\n\nval books = sqlClient\n    .createQuery(Book::class) {\n        // highlight-next-line\n        name?.takeIf { it.isNotEmpty() }?.let {\n            where(table.name ilike it)\n        }\n        // highlight-next-line\n        edition?.let {\n            where(table.edition eq it)\n        }\n        select(table)\n    }\n    .execute()\n")))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Java\u4ee3\u7801\u4e2d\uff0c\u7b2c\u4e00\u4e2awhereIf\u91c7\u7528Lambda\u4f20\u5165\u8868\u8fbe\u5f0f\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u8fd9\u662f\u56e0\u4e3a\u9664\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"eq"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"ne"),"\u80fd\u63a5\u53d7null\u503c",(0,r.kt)("em",{parentName:"p"},"(\u7ffb\u8bd1\u4e3a",(0,r.kt)("inlineCode",{parentName:"em"},"is null"),"\u548c",(0,r.kt)("inlineCode",{parentName:"em"},"is not null"),")"),"\u5916\uff0c\n\u5176\u4ed6\u6761\u4ef6",(0,r.kt)("em",{parentName:"p"},"(\u6bd4\u5982\uff0c\u8fd9\u91cc\u7684",(0,r.kt)("inlineCode",{parentName:"em"},"ilike"),")"),"\u4e0d\u63a5\u53d7null\u5e76\u89c6\u4e4b\u4e3a\u5f00\u53d1\u4eba\u5458\u72af\u4e0b\u7684BUG\u3002")),(0,r.kt)("h2",{id:"\u4f7f\u7528\u52a8\u6001\u8c13\u8bcd"},"\u4f7f\u7528\u52a8\u6001\u8c13\u8bcd"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"whereIf"),"\u5e76\u975e\u552f\u4e00\u7684\u52a8\u6001\u67e5\u8be2\u7684\u5199\u6cd5\uff0c\u4e0a\u8ff0\u4ee3\u7801\u53ef\u4ee5\u7528\u53e6\u5916\u4e00\u79cd\u5199\u6cd5\u6765\u4ee3\u66ff\u3002"),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@Nullable String name = ...\u7565...;\n@Nullable Integer edition = ...\u7565...;\n\nBookTable table = BookTable.$;\nList<Book> books = sqlClient\n    .createQuery(table)\n    // highlight-next-line\n    .where(table.name().ilikeIf(name))\n    // highlight-next-line\n    .whereIf(table.edition().eqIf(edition))\n    .select(table)\n    .execute();\n"))),(0,r.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val name: String? = ...\u7565...\nval edition: Int? = ...\u7565...\n\nval books = sqlClient\n    .createQuery(Book::class) {\n        // highlight-next-line\n        where(table.name `ilike?` name)\n        // highlight-next-line\n        where(table.edition `eq?` edition)\n        select(table)\n    }\n    .execute()\n")))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u5927\u90e8\u5206SQL\u6761\u4ef6",(0,r.kt)("em",{parentName:"p"},"(\u6bd4\u5982\uff0c\u8fd9\u91cc\u7684",(0,r.kt)("inlineCode",{parentName:"em"},"ilike"),")"),"\u4e0d\u63a5\u53d7null\uff0c\u5e76\u89c6\u4e4b\u4e3a\u5f00\u53d1\u4eba\u5458\u72af\u4e0b\u7684BUG\u3002",(0,r.kt)("em",{parentName:"p"},"(",(0,r.kt)("inlineCode",{parentName:"em"},"eq"),"\u548c",(0,r.kt)("inlineCode",{parentName:"em"},"ne"),"\u9664\u5916\uff0c\u56e0\u4e3a\u5b83\u4eec\u4f1a\u5c06null\u6e32\u67d3\u4e3a",(0,r.kt)("inlineCode",{parentName:"em"},"is null"),"\u548c",(0,r.kt)("inlineCode",{parentName:"em"},"not null"),")")),(0,r.kt)("p",{parentName:"admonition"},"\u7136\u800c\uff0c\u52a8\u6001\u8c13\u8bcd ",(0,r.kt)("em",{parentName:"p"},"(Java\u4e2d",(0,r.kt)("inlineCode",{parentName:"em"},"ilikeIf"),"\u548cKotlin\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"em"},"ilike?"),")"),' \u5219\u5b8c\u5168\u4e0d\u540c\uff0c\u5b83\u4eec\u63a5\u53d7null\u503c\u5e76\u5c06\u4e4b\u7406\u89e3\u4e3a\u52a8\u6001\u67e5\u8be2\u3002\u5373\uff0c\u5982\u679c\u53c2\u6570\u4e3anull\u6216""\uff0c\u5219\u5ffd\u7565\u5f53\u524dSQL\u6761\u4ef6\u3002')),(0,r.kt)("h2",{id:"\u6bd4\u8f83"},"\u6bd4\u8f83"),(0,r.kt)("p",null,"\u867d\u7136",(0,r.kt)("inlineCode",{parentName:"p"},"whereIf"),"\u5177\u5907\u826f\u597d\u7684\u53ef\u8bfb\u6027\uff0c\u4f46\u662f\u52a8\u6001\u8c13\u8bcd\u80fd\u9002\u5e94\u66f4\u590d\u6742\u7684\u573a\u666f ",(0,r.kt)("em",{parentName:"p"},"(\u53ef\u4ee5\u5728\u590d\u6742\u7684\u6761\u4ef6\u4e2d\u4f7f\u7528\uff0c\u5305\u62ec\u5d4c\u5957\u591a\u5c42\u7684and, not, or\u7ed3\u6784)"),"\u3002\u540e\u6587\u4e2d\u6211\u4eec\u4e00\u5f8b\u4f7f\u7528\u52a8\u6001\u8c13\u8bcd\u3002"))}d.isMDXComponent=!0}}]);