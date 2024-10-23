"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[648],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>c});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=a.createContext({}),d=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},m=function(e){var n=d(e.components);return a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},k=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),k=d(t),c=l,s=k["".concat(p,".").concat(c)]||k[c]||u[c]||i;return t?a.createElement(s,r(r({ref:n},m),{},{components:t})):a.createElement(s,r({ref:n},m))}));function c(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=t.length,r=new Array(i);r[0]=k;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var d=2;d<i;d++)r[d]=t[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}k.displayName="MDXCreateElement"},85162:(e,n,t)=>{t.d(n,{Z:()=>r});var a=t(67294),l=t(34334);const i="tabItem_Ymn6";function r(e){let{children:n,hidden:t,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(i,r),hidden:t},n)}},65488:(e,n,t)=>{t.d(n,{Z:()=>c});var a=t(83117),l=t(67294),i=t(34334),r=t(72389),o=t(67392),p=t(7094),d=t(12466);const m="tabList__CuJ",u="tabItem_LNqP";function k(e){var n;const{lazy:t,block:r,defaultValue:k,values:c,groupId:s,className:N}=e,y=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=c??y.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),g=(0,o.l)(v,((e,n)=>e.value===n.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===k?k:k??(null==(n=y.find((e=>e.props.default)))?void 0:n.props.value)??y[0].props.value;if(null!==b&&!v.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:T}=(0,p.U)(),[I,h]=(0,l.useState)(b),E=[],{blockElementScrollPositionUntilNextRender:C}=(0,d.o5)();if(null!=s){const e=f[s];null!=e&&e!==I&&v.some((n=>n.value===e))&&h(e)}const x=e=>{const n=e.currentTarget,t=E.indexOf(n),a=v[t].value;a!==I&&(C(n),h(a),null!=s&&T(s,String(a)))},O=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{const n=E.indexOf(e.currentTarget)+1;t=E[n]??E[0];break}case"ArrowLeft":{const n=E.indexOf(e.currentTarget)-1;t=E[n]??E[E.length-1];break}}null==(n=t)||n.focus()};return l.createElement("div",{className:(0,i.Z)("tabs-container",m)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},N)},v.map((e=>{let{value:n,label:t,attributes:r}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:I===n?0:-1,"aria-selected":I===n,key:n,ref:e=>E.push(e),onKeyDown:O,onFocus:x,onClick:x},r,{className:(0,i.Z)("tabs__item",u,null==r?void 0:r.className,{"tabs__item--active":I===n})}),t??n)}))),t?(0,l.cloneElement)(y.filter((e=>e.props.value===I))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},y.map(((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==I})))))}function c(e){const n=(0,r.Z)();return l.createElement(k,(0,a.Z)({key:String(n)},e))}},18880:(e,n,t)=>{t.d(n,{ZP:()=>p});var a=t(83117),l=(t(67294),t(3905)),i=t(65488),r=t(85162);const o={toc:[]};function p(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},o,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u6700\u521d\uff0c\u4eba\u4eec\u76f4\u63a5\u7528\u4e1a\u52a1\u5b57\u6bb5\u4f5c\u4e3a\u8868\u7684\u4e3b\u952e\u3002\u8fd9\u662f\u6700\u76f4\u63a5\u6700\u5bb9\u6613\u4f7f\u7528\u7684\u65b9\u5f0f\uff0c\u4f46\u5b58\u5728\u4ee5\u4e0b\u95ee\u9898\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4e3b\u952e\u4e0d\u7a33\u5b9a"),(0,l.kt)("p",{parentName:"li"},"\u7531\u4e8e\u4e3b\u952e\u672c\u8eab\u662f\u4e1a\u52a1\u5b57\u6bb5\uff0c\u6240\u4ee5\u4f1a\u88ab\u4fee\u6539\uff0c\u8fd9\u5c31\u5bfc\u81f4\u4e3b\u952e\u4e0d\u7a33\u5b9a\u3002"),(0,l.kt)("p",{parentName:"li"},"\u867d\u7136\u6570\u636e\u5e93\u4e2d\u5f15\u7528\u5b83\u7684\u5916\u952e\u53ef\u4ee5\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"on update cascade"),"\u6765\u4fdd\u6301\u4e00\u81f4\uff0c\n\u4f46\u662f\u5bf9\u4e8e\u6570\u636e\u5e93\u5916\u7684\u7cfb\u7edf\uff0c\u6bd4\u5982\u7f13\u5b58\uff0c\u4e3b\u952e\u4e0d\u7a33\u5b9a\u4f1a\u5bfc\u81f4\u5f88\u591a\u95ee\u9898\u3002"),(0,l.kt)("p",{parentName:"li"},"\u5373\u4f7f\u4ece\u6280\u672f\u5c42\u9762\u80fd\u62bd\u8c61\u51fa\u4e3b\u952e\u4e0d\u7a33\u5b9a\u95ee\u9898\u7684\u7edf\u4e00\u89e3\u51b3\u529e\u6cd5\uff0c\u4e5f\u4e0d\u63a8\u8350\uff0c\u56e0\u4e3a\u8fd9\u6837\u7cfb\u7edf\u96be\u4ee5\u7406\u89e3\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u591a\u8868\u8fde\u63a5\u6210\u672c\u9ad8"),(0,l.kt)("p",{parentName:"li"},"\u7531\u4e8e\u4e3b\u952e\u672c\u8eab\u662f\u4e1a\u52a1\u5b57\u6bb5\uff0c\u4e3b\u952e\u7684\u7c7b\u578b\u5f88\u53ef\u80fd\u4e0d\u662f\u6570\u5b57\u7c7b\u578b\uff0c\u800c\u662f\u76f8\u5bf9\u8f83\u957f\u7684\u5b57\u7b26\u4e32\u7c7b\u578b\uff0c\n\u800c\u4e14\u8fd8\u53ef\u80fd\u662f\u591a\u4e2a\u5217\u7ec4\u5408\u800c\u6210\u7684\u8054\u5408\u4e3b\u952e\uff0c\u8fd9\u4f1a\u5bfc\u81f4\u591a\u8868\u94fe\u63a5\u6210\u672c\u9ad8\u3002"))),(0,l.kt)("p",null,"\u4e3a\u4e86\u89e3\u51b3\u4ee5\u4e0a\u95ee\u9898\uff0c\u4eba\u4eec\u5b66\u4f1a\u4f7f\u7528\u6ca1\u6709\u4e1a\u52a1\u610f\u4e49\u7684\u6570\u636e\u4f5c\u4e3a\u4e3b\u952e\uff0c\u6bd4\u5982"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6570\u636e\u5e93\u81ea\u52a8\u7f16\u53f7"),(0,l.kt)("li",{parentName:"ul"},"\u6570\u636e\u5e93\u5e8f\u5217\u503c"),(0,l.kt)("li",{parentName:"ul"},"UUID"),(0,l.kt)("li",{parentName:"ul"},"\u96ea\u82b1ID")),(0,l.kt)("p",null,"\u4e3a\u4e86\u8ba9\u4fdd\u5b58\u6307\u4ee4\u652f\u6301\u5e42\u7b49\u6027\u4fdd\u5b58\uff0cJimmer\u5f15\u5165\u4e86\u4e24\u4e2a\u6982\u5ff5\uff1aId\u548cKey"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"@Id: \u4e3b\u952e")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"@Key: \u4e1a\u52a1\u6027\u4e3b\u952e"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5982\u679cId\u672c\u8eab\u5c31\u662f\u4e1a\u52a1\u5c5e\u6027\uff08\u4e0d\u63a8\u8350\uff09\uff0c\u65e0\u9700\u6307\u5b9aKey\uff0c\u56e0\u4e3aId\u672c\u8eab\u5df2\u7ecf\u8868\u793a\u4e86\u4e1a\u52a1\u5c42\u9762\u7684\u552f\u4e00\u7ea6\u675f\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5982\u679cId\u6ca1\u6709\u4e1a\u52a1\u610f\u4e49\uff08\u63a8\u8350\uff09\uff0c\u90a3\u4e48Key\u8868\u793a\u4e1a\u52a1\u5c42\u9762\u7684\u552f\u4e00\u7ea6\u675f\u662f\u4ec0\u4e48\u3002"))))),(0,l.kt)("p",null,"\u8bf7\u770b\u4e0b\u7684\u4f8b\u5b50"),(0,l.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@Entity\npublic interface TreeNode {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    long id();\n\n    // highlight-next-line\n    @Key\n    String name();\n\n    // highlight-next-line\n    @Key\n    @ManyToOne\n    @Nullable\n    TreeNode parent();\n\n    @OneToMany(mappedBy = "parent")\n    List<TreeNode> childNodes();\n}\n'))),(0,l.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'@Entity\ninterface TreeNode {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    val id: Long\n\n    // highlight-next-line\n    @Key\n    val name: String\n\n    // highlight-next-line\n    @Key\n    @ManyToOne\n    val parent: TreeNode?\n\n    @OneToMany(mappedBy = "parent")\n    val childNodes: List<TreeNode>\n}\n')))),(0,l.kt)("p",null,"\u8fd9\u91cc\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"TreeNode"),"\u5b9e\u4f53\u7684Id\u91c7\u7528\u81ea\u52a8\u7f16\u53f7\uff0c\u5e76\u6ca1\u6709\u4e1a\u52a1\u610f\u4e49\u3002\u6240\u4ee5\uff0c\u4e3a\u4e86\u66f4\u597d\u5730\u914d\u5408\u4fdd\u5b58\u6307\u4ee4\uff0c\n\u8fd9\u91cc\u6307\u5b9a\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"key"),"\uff0c\u7531\u4e24\u4e2a\u5c5e\u6027\u6784\u6210\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"name"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"parent"),"\u3002"),(0,l.kt)("p",null,"\u5bf9\u5e94\u7684DDL\u662f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"create table TREE_NODE(\n    ID bigint not null,\n    NAME varchar(20) not null,\n    PARENT_ID bigint\n);\n\nalter table TREE_NODE\n    add constraint PK_TREE_NODE\n        primary key(ID);\n\nalter table TREE_NODE\n    add constraint UQ_TREE_NODE\n        /* highlight-next-line */\n        unique(NAME, PARENT_ID);\n")),(0,l.kt)("p",null,"\u5b9e\u4f53\u7c7b\u578b\u7684\u5c5e\u6027",(0,l.kt)("inlineCode",{parentName:"p"},"name"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"parent"),"\u88ab@Key\u4fee\u9970\uff0c\u5bf9\u5e94\u4e8e\u6570\u636e\u5e93\u4e2d",(0,l.kt)("inlineCode",{parentName:"p"},"NAME"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"PARENT_ID"),"\u5217\u7ec4\u6210\u7684UNIQUE\u7ea6\u675f ",(0,l.kt)("em",{parentName:"p"},"\uff08\u6216UNIQUE INDEX\uff09"),"\u3002"),(0,l.kt)("p",null,"\u8fd9\u4e2a\u552f\u4e00\u6027\u7ea6\u675f\u53ef\u4ee5\u7528\u8ba1\u7b97\u673a\u6587\u4ef6\u7cfb\u7edf\u505a\u4e3a\u7c7b\u6bd4\u3002\u6587\u4ef6\u7cfb\u7edf\u5141\u8bb8\u540c\u540d\u76ee\u5f55\u6216\u6587\u4ef6\uff0c\u4f46\u5982\u679c\u9650\u5b9a\u7236\u76ee\u5f55\uff0c\u5219\u4e0d\u5141\u8bb8\u540c\u540d\u3002"),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u901a\u8fc7\u8fd9\u4e2a\u4f8b\u5b50\uff0c\u6211\u4eec\u770b\u5230"),(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Key\u53ef\u4ee5\u7531\u591a\u4e2a\u5c5e\u6027\u7ec4\u6210")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5916\u952e\u53ef\u4ee5\u4f5c\u4e3aKey\u7684\u4e00\u90e8\u5206")))),(0,l.kt)("p",null,"\u8ba9\u6211\u4eec\u518d\u6765\u770b\u53e6\u5916\u4e00\u4e2a\u4f8b\u5b50\uff0c\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u7ec4\u6210Key\u7684\u5c5e\u6027\u5168\u90e8\u662f\u57fa\u4e8e\u5916\u952e\u7684\u5c5e\u6027"),(0,l.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"@Entity\npublic interface OrderItem {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    long id();\n\n    // highlight-next-line\n    @Key\n    @ManyToOne\n    Order order();\n\n    // highlight-next-line\n    @Key\n    @ManyToOne\n    Product product();\n\n    int quantity();\n\n    // Snapshot of `product.price`\n    BigDecimal unitPrice();\n}\n"))),(0,l.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Entity\ninterface OrderItem {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    val id: Long\n\n    // highlight-next-line\n    @Key\n    @ManyToOne\n    val order: Order\n\n    // highlight-next-line\n    @Key\n    @ManyToOne\n    val product: Product\n\n    val quantity: Int\n\n    // Snapshot of `product.price`\n    val unitPrice: BigDecimal\n}\n")))))}p.isMDXComponent=!0},73522:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>p,default:()=>c,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var a=t(83117),l=(t(67294),t(3905)),i=t(65488),r=t(85162);t(18880);const o={sidebar_position:2,title:"\u6570\u636e\u5206\u7c7b"},p=void 0,d={unversionedId:"mutation/save-command/data-classification",id:"mutation/save-command/data-classification",title:"\u6570\u636e\u5206\u7c7b",description:"save-command\u529f\u80fd\u53d1\u751f\u4e86\u8d28\u53d8\uff0c\u6587\u6863\u91cd\u6784\u4e2d\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/mutation/save-command/data-classification.mdx",sourceDirName:"mutation/save-command",slug:"/mutation/save-command/data-classification",permalink:"/jimmer-doc/zh/docs/mutation/save-command/data-classification",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/mutation/save-command/data-classification.mdx",tags:[],version:"current",lastUpdatedAt:1729717111,formattedLastUpdatedAt:"2024\u5e7410\u670823\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\u6570\u636e\u5206\u7c7b"},sidebar:"tutorialSidebar",previous:{title:"\u57fa\u672c\u7528\u6cd5",permalink:"/jimmer-doc/zh/docs/mutation/save-command/usage"},next:{title:"\u6839\u5bf9\u8c61\u4fdd\u5b58\u6a21\u5f0f",permalink:"/jimmer-doc/zh/docs/mutation/save-command/save-mode"}},m={},u=[{value:"\u5b9e\u4f53\u5b9a\u4e49",id:"\u5b9e\u4f53\u5b9a\u4e49",level:2},{value:"\u6570\u636e\u5206\u7c7b",id:"\u6570\u636e\u5206\u7c7b",level:2},{value:"1. Wild\u5bf9\u8c61",id:"1-wild\u5bf9\u8c61",level:3},{value:"2. Id-specified\u5bf9\u8c61",id:"2-id-specified\u5bf9\u8c61",level:3},{value:"3. Key-specified\u5bf9\u8c61",id:"3-key-specified\u5bf9\u8c61",level:3},{value:"4. Id-only\u5bf9\u8c61",id:"4-id-only\u5bf9\u8c61",level:3},{value:"5. Key-only\u5bf9\u8c61",id:"5-key-only\u5bf9\u8c61",level:3}],k={toc:u};function c(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"save-command\u529f\u80fd\u53d1\u751f\u4e86\u8d28\u53d8\uff0c\u6587\u6863\u91cd\u6784\u4e2d\u3002"),(0,l.kt)("p",{parentName:"admonition"},"\u8fd9\u662f\u4e00\u7bc7\u65b0\u6587\u7ae0\uff0c\u76ee\u524d\u548c\u5176\u4ed6\u6587\u7ae0\u6682\u65e0\u5173\u8054\uff0c\u4f46save-command\u6587\u6863\u91cd\u6784\u5b8c\u6210\u540e\uff0c\u5176\u4ed6\u6587\u7ae0\u5c06\u4f1a\u4e0e\u6b64\u5173\u8054\u3002")),(0,l.kt)("p",null,"\u4fdd\u5b58\u6307\u4ee4\u7528\u4e8e\u4fdd\u5b58\u4efb\u610f\u590d\u6742\u7684\u6570\u636e\u7ed3\u6784\uff0c\u4e3a\u4e86\u4fbf\u4e8e\u8ba8\u8bba\uff0c\u6211\u4eec\u6709\u5fc5\u8981\u5bf9\u6570\u636e\u7ed3\u6784\u7684\u5f62\u72b6\u8fdb\u884c\u4e00\u4e2a\u57fa\u672c\u5206\u7c7b\u3002"),(0,l.kt)("h2",{id:"\u5b9e\u4f53\u5b9a\u4e49"},"\u5b9e\u4f53\u5b9a\u4e49"),(0,l.kt)("p",null,"Jimmer\u5b9e\u4f53\u652f\u6301\u4e24\u79cd\u8868\u793a\u5c5e\u6027"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"@Id"),": Jimmer\u7684\u4efb\u4f55\u5b9e\u4f53\u7c7b\u578b\u90fd\u5fc5\u987b\u5b9a\u4e49\u7684\u4e00\u4e2a\u5c5e\u6027\u3002\u6280\u672f\u5c42\u9762\u7684\u552f\u4e00\u6807\u8bc6\uff0c\u884c\u4e1a\u5185\u79f0\u5176\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"Suggrogate Id"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"../../mapping/advanced/key"},"@Key"),": Jimmer\u5efa\u8bae\u4e3a\u5b9e\u4f53\u7c7b\u578b\u5b9a\u4e49\u7684\u591a\u4e2a\u5c5e\u6027\u3002\u4e1a\u52a1\u5c42\u9762\u7684\u552f\u4e00\u6807\u8bc6\uff0c\u884c\u4e1a\u5185\u79f0\u5176\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"Natural Id")))),(0,l.kt)("p",null,"\u5728\u672c\u7cfb\u5217\u6587\u7ae0\u4e2d\uff0c\u6240\u6709\u5b9e\u4f53\u90fd\u5b9a\u4e49\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"@Id"),"\u5c5e\u6027\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"@Key"),"\u5c5e\u6027\uff0c\u5e76\u8ba9Id\u5c5e\u6027\u4f7f\u7528\u6570\u636e\u5e93\u7684\u81ea\u52a8\u7f16\u53f7\u4f5c\u4e3a\u81ea\u52a8\u589e\u957f\u7b56\u7565\u3002\u8fd9\u91cc\u4ec5\u4ee5",(0,l.kt)("inlineCode",{parentName:"p"},"Book"),"\u4e3a\u4f8b\u793a\u8303\u5982\u4e0b"),(0,l.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Book.java"',title:'"Book.java"'},"@Entity\npublic interface Book {\n\n    @Id \u2776\n    @GeneratedValue(strategy = GenerationType.IDENTITY) \u2777\n    long id();\n\n    @Key \u2778\n    String name();\n    \n    @Key \u2778\n    int edition();\n\n    BigDecimal price();\n\n    ...\u7701\u7565\u5176\u4ed6\u5c5e\u6027...\n}\n"))),(0,l.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Book.kt"',title:'"Book.kt"'},"@Entity\ninterface Book {\n\n    @Id \u2776\n    @GeneratedValue(strategy = GenerationType.IDENTITY) \u2777\n    val id: Long\n\n    @Key \u2778\n    val name: String\n    \n    @Key \u2778\n    val edition: Int\n\n    val price: BigDecimal\n\n    ...\u7701\u7565\u5176\u4ed6\u5c5e\u6027...\n}\n")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u2776 Id\u5c5e\u6027, \u5373Surrogate Id"),(0,l.kt)("li",{parentName:"ul"},"\u2777 Id\u5c5e\u6027\u91c7\u7528\u6570\u636e\u5e93\u81ea\u52a8\u7f16\u53f7\u4f5c\u4e3a\u81ea\u52a8\u589e\u957f\u7b56\u7565"),(0,l.kt)("li",{parentName:"ul"},"\u2778 Key\u5c5e\u6027\uff0c\u5373Nartual Id")),(0,l.kt)("h2",{id:"\u6570\u636e\u5206\u7c7b"},"\u6570\u636e\u5206\u7c7b"),(0,l.kt)("h3",{id:"1-wild\u5bf9\u8c61"},"1. Wild\u5bf9\u8c61"),(0,l.kt)("p",null,"\u5982\u679c\u4e00\u4e2a\u5bf9\u8c61\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"@Id"),"\u5c5e\u6027 ",(0,l.kt)("em",{parentName:"p"},"(\u672c\u6587\u7684",(0,l.kt)("inlineCode",{parentName:"em"},"Book.id"),")")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"@Key"),"\u5c5e\u6027 ",(0,l.kt)("em",{parentName:"p"},"(\u672c\u6587\u7684",(0,l.kt)("inlineCode",{parentName:"em"},"Book.name"),"\u548c",(0,l.kt)("inlineCode",{parentName:"em"},"Book.edition"),")")," \u90fd\u6ca1\u6709\u88ab\u6307\u5b9a\uff0c\u5c31\u88ab\u79f0\u4e3awild\u5bf9\u8c61\u3002\u4f8b\u5982"),(0,l.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'Book book = Immutables.createBook(draft -> {\n    draft.setPrice(new BigDecimal("59.9"));\n});\n'))),(0,l.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val book = Book {\n    price = BigDecimal("59.9")\n}\n')))),(0,l.kt)("p",null,"\u8fd9\u91cc\u6240\u8c13\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"@Key"),"\u5c5e\u6027\u6ca1\u6709\u88ab\u6307\u5b9a\uff0c\u5305\u542b\u4e24\u79cd\u60c5\u51b5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5b9e\u4f53\u7c7b\u578b\u6839\u672c\u6ca1\u6709\u5b9a\u4e49",(0,l.kt)("inlineCode",{parentName:"li"},"@Key"),"\u5c5e\u6027 ",(0,l.kt)("em",{parentName:"li"},"(\u672c\u6587\u6848\u4f8b\u672a\u8ba8\u8bba)")),(0,l.kt)("li",{parentName:"ul"},"\u867d\u7136\u5b9e\u4f53\u7c7b\u578b\u5b9a\u4e49\u53ef",(0,l.kt)("inlineCode",{parentName:"li"},"@Key"),"\u5c5e\u6027\uff0c\u4f46\u5bf9\u8c61\u7684\u76f8\u5173\u5c5e\u6027\u88ab\u6ca1\u6709\u88ab\u6307\u5b9a")),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"Jimmer\u4e0d\u63a8\u8350Wild\u5bf9\u8c61\uff0c\u867d\u7136\u8c03\u8282API\u53c2\u6570\u53ef\u4ee5\u4fdd\u5b58wild\u5bf9\u8c61\uff0c\u4f46\u7ec8\u5f52\u4f1a\u5bfc\u81f4\u5e42\u7b49\u6027\u88ab\u7834\u574f\u3002")),(0,l.kt)("h3",{id:"2-id-specified\u5bf9\u8c61"},"2. Id-specified\u5bf9\u8c61"),(0,l.kt)("p",null,"\u5982\u679c\u4e00\u4e2a\u5bf9\u8c61\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"@Id"),"\u5c5e\u6027 ",(0,l.kt)("em",{parentName:"p"},"(\u672c\u6587\u7684",(0,l.kt)("inlineCode",{parentName:"em"},"Book.id"),")")," \u88ab\u6307\u5b9a\uff0c\u5c31\u88ab\u79f0\u4e3aid-specified\u5bf9\u8c61\u3002\u4f8b\u5982"),(0,l.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"Book book = Immutables.createBook(draft -> {\n    draft.setId(17L);\n    ...\u7701\u7565\u5176\u4ed6\u8bbe\u7f6e...\n});\n"))),(0,l.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val book = Book {\n    id = 17L\n    ...\u7701\u7565\u5176\u4ed6\u8bbe\u7f6e...\n}\n")))),(0,l.kt)("p",null,"Jimmer\u652f\u6301",(0,l.kt)("inlineCode",{parentName:"p"},"UPSERT"),"\u64cd\u4f5c\uff0c\u5373\uff0c\u7528\u6237\u5e76\u4e0d\u660e\u786e\u6307\u5b9a",(0,l.kt)("inlineCode",{parentName:"p"},"insert"),"\u6216",(0,l.kt)("inlineCode",{parentName:"p"},"update"),"\uff0c\u8ba9Jimmer\u81ea\u884c\u5224\u65ad\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"UPSERT"),"\u6a21\u5f0f\u4fdd\u5b58id-specified\u5bf9\u8c61\uff0c\u90a3\u4e48Jimmer\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"@Id"),"\u5c5e\u6027\u5224\u65ad\u6570\u636e\u5e93\u4e2d\u662f\u5426\u5df2\u7ecf\u5b58\u5728\u76f8\u5e94\u6570\u636e\uff0c\u6700\u7ec8\u51b3\u5b9a\u5e94\u8be5insert\u8fd8\u662fupdate\u3002"),(0,l.kt)("h3",{id:"3-key-specified\u5bf9\u8c61"},"3. Key-specified\u5bf9\u8c61"),(0,l.kt)("p",null,"\u5bf9\u4e8e\u4e00\u4e2a\u5bf9\u8c61\u800c\u8a00\uff0c\u5982\u679c",(0,l.kt)("inlineCode",{parentName:"p"},"@Id"),"\u5c5e\u6027 ",(0,l.kt)("em",{parentName:"p"},"(\u672c\u6587\u7684",(0,l.kt)("inlineCode",{parentName:"em"},"Book.id"),")")," \u6ca1\u6709\u88ab\u6307\u5b9a\uff0c\u4f46\u662f\u5176",(0,l.kt)("inlineCode",{parentName:"p"},"@Key"),"\u5c5e\u6027 ",(0,l.kt)("em",{parentName:"p"},"(\u672c\u6587\u7684",(0,l.kt)("inlineCode",{parentName:"em"},"Book.name"),"\u548c",(0,l.kt)("inlineCode",{parentName:"em"},"Book.edition"),")")," \u88ab\u6307\u5b9a\u4e86\uff0c\n\u90a3\u4e48\u8be5\u5bf9\u7231\u5bf9\u8c61\u4e3akey-specified\u5bf9\u8c61\uff0c\u4f8b\u5982"),(0,l.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'Book book = Immutables.createBook(draft -> {\n    draft.setName("GraphQL in Action");\n    draft.setEdition(2);\n    ...\u7701\u7565\u9664\u4e86id\u5916\u7684\u5176\u4ed6\u5c5e\u6027\u7684\u8bbe\u7f6e...\n});\n'))),(0,l.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val book = Book {\n    name = "GraphQL in Action"\n    edition = 1\n    ...\u7701\u7565\u9664\u4e86id\u5916\u7684\u5176\u4ed6\u5c5e\u6027\u7684\u8bbe\u7f6e...\n}\n')))),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"\u4e0a\u8ff0\u4ee3\u7801\u4e2d\uff0c\u88ab\u7701\u7565\u90e8\u5206\u4e0d\u5305\u542b\u5bf9",(0,l.kt)("inlineCode",{parentName:"p"},"@Id"),"\u5c5e\u6027\u7684\u8bbe\u7f6e\uff0c\u56e0\u4e3a\u4e00\u65e6\u8bbe\u7f6e\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"@Id"),"\u5c5e\u6027\uff0c\u5c31\u5e94\u8be5\u662fid-speicified\u5bf9\u8c61\uff0c\u800c\u975ekey-specified\u5bf9\u8c61\u3002")),(0,l.kt)("p",null,"Jimmer\u652f\u6301",(0,l.kt)("inlineCode",{parentName:"p"},"UPSERT"),"\u64cd\u4f5c\uff0c\u5373\uff0c\u7528\u6237\u5e76\u4e0d\u660e\u786e\u6307\u5b9a",(0,l.kt)("inlineCode",{parentName:"p"},"insert"),"\u6216",(0,l.kt)("inlineCode",{parentName:"p"},"update"),"\uff0c\u8ba9Jimmer\u81ea\u884c\u5224\u65ad\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"UPSERT"),"\u6a21\u5f0f\u4fdd\u5b58key-specified\u5bf9\u8c61\uff0c\u90a3\u4e48Jimmer\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"@Key"),"\u5c5e\u6027\u5224\u65ad\u6570\u636e\u5e93\u4e2d\u662f\u5426\u5df2\u7ecf\u5b58\u5728\u76f8\u5e94\u6570\u636e\uff0c\u6700\u7ec8\u51b3\u5b9a\u5e94\u8be5insert\u8fd8\u662fupdate\u3002"),(0,l.kt)("h3",{id:"4-id-only\u5bf9\u8c61"},"4. Id-only\u5bf9\u8c61"),(0,l.kt)("p",null,"\u5bf9\u4e8eid-specified\u5bf9\u8c61\u800c\u8a00\uff0c\u5982\u679c\u9664\u4e86id\u5916\u6ca1\u6709\u4efb\u4f55\u5c5e\u6027\u88ab\u6307\u5b9a\uff0c\u79f0\u4e3aid-only\u5bf9\u8c61\uff0c\u4f8b\u5982"),(0,l.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"Book book = Immutables.createBook(draft -> {\n    draft.setId(17L);\n});\n"))),(0,l.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val book = Book {\n    id = 17L\n}\n")))),(0,l.kt)("p",null,"\u5728\u5c42\u6b21\u5316\u7684\u6570\u636e\u7ed3\u6784\u4e2d\uff0c\u4efb\u4f55\u5bf9\u8c61\u90fd\u53ef\u4ee5\u6301\u6709\u66f4\u6df1\u7684\u5173\u8054\u5bf9\u8c61\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u5173\u8054\u5bf9\u8c61\u662fid-only\u5bf9\u8c61\uff0c\u90a3\u4e48\u5c31\u8868\u793a\u4ec5\u4ec5\u4fee\u6539\u5173\u8054\u5173\u7cfb\uff0c\u5e76\u4e0d\u4f1a\u8fdb\u4e00\u6b65\u521b\u5efa\u6216\u4fee\u6539\u5173\u8054\u5bf9\u8c61\u3002"),(0,l.kt)("h3",{id:"5-key-only\u5bf9\u8c61"},"5. Key-only\u5bf9\u8c61"),(0,l.kt)("p",null,"\u5bf9\u4e8eid-specified\u5bf9\u8c61\u800c\u8a00\uff0c\u5982\u679c\u9664\u4e86id\u5916\u6ca1\u6709\u4efb\u4f55\u5c5e\u6027\u88ab\u6307\u5b9a\uff0c\u79f0\u4e3aid-only\u5bf9\u8c61\uff0c\u4f8b\u5982"),(0,l.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'Book book = Immutables.createBook(draft -> {\n    draft.setName("GraphQL in Action");\n    draft.setEdition(2);\n});\n'))),(0,l.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val book = Book {\n    name = "GraphQL in Action"\n    edition = 1\n}\n')))),(0,l.kt)("p",null,"\u5728\u5c42\u6b21\u5316\u7684\u6570\u636e\u7ed3\u6784\u4e2d\uff0c\u4efb\u4f55\u5bf9\u8c61\u90fd\u53ef\u4ee5\u6301\u6709\u66f4\u6df1\u7684\u5173\u8054\u5bf9\u8c61\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u5173\u8054\u5bf9\u8c61\u662fkey-only\u5bf9\u8c61\uff0c\u90a3\u4e48\u5c31\u8868\u793a\u4ec5\u4ec5\u4fee\u6539\u5173\u8054\u5173\u7cfb\uff0c\u5e76\u4e0d\u4f1a\u8fdb\u4e00\u6b65\u521b\u5efa\u6216\u4fee\u6539\u5173\u8054\u5bf9\u8c61\u3002"))}c.isMDXComponent=!0}}]);