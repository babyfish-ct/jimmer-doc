"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[4855],{50709:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>x,frontMatter:()=>d,metadata:()=>u,toc:()=>p});var r=l(74848),t=l(28453),a=l(11470),o=l(19365);function i(e){const n={admonition:"admonition",code:"code",em:"em",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"\u9996\u5148\u5b9a\u4e49\u4e00\u4e2a\u4e0d\u53ef\u53d8\u7684\u6811\u8282\u70b9"}),"\n",(0,r.jsxs)(a.A,{groupId:"language",children:[(0,r.jsx)(o.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="TreeNode.java"',children:"record TreeNode(\n    String name, \n    List<TreeNode> childNodes\n) {}\n"})})}),(0,r.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="TreeNode.java"',children:"data class TreeNode(\n    val name: String, \n    val childNodes: List<TreeNode>\n)\n"})})})]}),"\n",(0,r.jsx)(n.p,{children:"\u51c6\u5907\u4e00\u4e2a\u65e7\u5bf9\u8c61"}),"\n",(0,r.jsxs)(a.A,{groupId:"language",children:[(0,r.jsx)(o.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"var oldTreeNode = ...blabla...\n"})})}),(0,r.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:"val oldTreeNode = ...blabla...\n"})})})]}),"\n",(0,r.jsx)(n.p,{children:"\u8ba9\u6211\u4eec\u4ece\u7b80\u5355\u5230\u590d\u6742\u4f9d\u6b21\u5b9e\u73b0\u4e09\u79cd\u6570\u636e\u53d8\u66f4\u64cd\u4f5c\uff0c\u521b\u5efa\u5168\u65b0\u7684\u5bf9\u8c61"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u53d8\u66f4\u6839\u8282\u70b9\u7684name\u5c5e\u6027"}),"\n",(0,r.jsxs)(a.A,{groupId:"language",children:[(0,r.jsx)(o.A,{value:"java",lable:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'TreeNode newTreeNode = new TreeNode(\n    // highlight-next-line\n    "Hello", // \u8bbe\u7f6e\u6839\u8282\u70b9\u7684\u540d\u79f0\n    oldTreeNode.childNodes()\n);\n'})})}),(0,r.jsx)(o.A,{value:"kotlin",lable:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:'val newTreeNode = oldTreeNode.copy(\n    // highlight-next-line\n    name = "Hello" // \u8bbe\u7f6e\u6839\u8282\u70b9\u7684\u540d\u79f0\n);\n'})})})]}),"\n",(0,r.jsx)(n.p,{children:"\u8fd9\u79cd\u6848\u4f8b\u975e\u5e38\u7b80\u5355\uff0c\u6ca1\u770b\u51faJava/Kotlin\u7684\u95ee\u9898\u3002\u522b\u6025\uff0c\u8f7b\u5f80\u540e\u770b\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u53d8\u66f4\u7b2c\u4e00\u7ea7\u5b50\u8282\u70b9\u7684name\u5c5e\u6027"}),"\n",(0,r.jsx)(n.p,{children:"\u9762\u5305\u5c51\u6761\u4ef6\u5982\u4e0b\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7b2c\u4e00\u7ea7\u5b50\u8282\u70b9\u7684\u4f4d\u7f6e: pos1"}),"\n"]}),"\n",(0,r.jsxs)(a.A,{groupId:"language",children:[(0,r.jsx)(o.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'TreeNode newTreeNode = new TreeNode(\n    oldTreeNode.name(),\n    IntStream\n        .range(0, oldTreeNode.childNodes().size())\n        .mapToObj(index1 -> {\n            TreeNode oldChild1 = oldTreeNode.childNodes().get(index1);\n            if (index1 != pos1) {\n                return oldChild1;\n            }\n            return new TreeNode(\n                // highlight-next-line\n                "Hello", // \u8bbe\u7f6e\u7b2c\u4e00\u7ea7\u5b50\u8282\u70b9\u7684\u540d\u79f0\n                oldChild1.childNodes()\n            );\n        })\n        .toList()\n);\n'})})}),(0,r.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:'val newTreeNode = oldTreeNode.copy(\n    childNodes = oldTreeNode\n        .childNodes\n        .mapIndexed { index1, child1 ->\n            if (index1 == pos1) {\n                child1.copy(\n                    // highlight-next-line\n                    name = "Hello" // \u8bbe\u7f6e\u7b2c\u4e00\u7ea7\u5b50\u8282\u70b9\u7684\u540d\u79f0\n                )\n            } else {\n                child1\n            }\n        }\n)\n'})})})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u53d8\u66f4\u7b2c\u4e8c\u7ea7\u5b50\u8282\u70b9\u7684name\u5c5e\u6027"}),"\n",(0,r.jsx)(n.p,{children:"\u9762\u5305\u5c51\u6761\u4ef6\u5982\u4e0b\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7b2c\u4e00\u7ea7\u5b50\u8282\u70b9\u7684\u4f4d\u7f6e: pos1"}),"\n",(0,r.jsx)(n.li,{children:"\u7b2c\u4e8c\u7ea7\u5b50\u8282\u70b9\u7684\u4f4d\u7f6e: pos2"}),"\n"]}),"\n",(0,r.jsxs)(a.A,{groupId:"language",children:[(0,r.jsx)(o.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'TreeNode newTreeNode = new TreeNode(\n    oldTreeNode.name(),\n    IntStream\n        .range(0, oldTreeNode.childNodes().size())\n        .mapToObj(index1 -> {\n            TreeNode oldChild1 = oldTreeNode.childNodes().get(index1);\n            if (index1 != pos1) {\n                return oldChild1;\n            }\n            return new TreeNode(\n                oldChild1.name(),\n                IntStream\n                    .range(0, oldChild1.childNodes().size())\n                    .mapToObj(index2 -> {\n                        TreeNode oldChild2 = oldChild1.childNodes().get(index2);\n                        if (index2 != pos2) {\n                            return oldChild2;\n                        } else {\n                            return new TreeNode(\n                                // highlight-next-line\n                                "Hello", // \u8bbe\u7f6e\u7b2c\u4e8c\u7ea7\u5b50\u8282\u70b9\u7684\u540d\u79f0\n                                oldChild2.childNodes()\n                            );\n                        }\n                    })\n                    .toList()\n            );\n        })\n        .toList()\n);\n'})})}),(0,r.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:'val newTreeNode = oldTreeNode.copy(\n    childNodes = oldTreeNode\n        .childNodes\n        .mapIndexed { index1, child1 ->\n            if (index1 == pos1) {\n                child1.copy(\n                    childNodes = child1\n                        .childNodes\n                        .mapIndexed { index2, child2 -> \n                            if (index2 == pos2) {\n                                child2.copy(\n                                    // highlight-next-line\n                                    name = "Hello" // \u8bbe\u7f6e\u7b2c\u4e8c\u7ea7\u5b50\u8282\u70b9\u7684\u540d\u79f0\n                                )\n                            } else {\n                                child2\n                            }\n                        }\n                )\n            } else {\n                child1\n            }\n        }\n)\n'})})})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["\u53ef\u89c1\uff0c\u53ea\u8981\u5bf9\u8c61\u6811\u6709\u4e00\u70b9\u6df1\u5ea6\uff0c\u57fa\u4e8e\u53e6\u4e00\u4e2a\u4e0d\u53ef\u53d8\u5bf9\u8c61\u521b\u5efa\u65b0\u7684\u4e0d\u53ef\u53d8\u5bf9\u8c61 ",(0,r.jsx)(n.em,{children:'(\u5373\uff0c\u4e8c\u6b21"\u4fee\u6539")'})," \u5c06\u662f\u4e00\u573a\u5669\u68a6\u3002"]})})]})}function s(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}const d={sidebar_position:2,title:"\u73b0\u72b6"},c=void 0,u={id:"object/immutable/current-situation",title:"\u73b0\u72b6",description:"Java\u4ece14\u5f00\u59cb\u652f\u6301\u4e0d\u53ef\u53d8record\u7c7b\u578b\uff0ckotlin\u7684data class\u53ef\u8f7b\u677e\u5b9e\u73b0\u4e0d\u53ef\u53d8\u7c7b\uff0c\u751a\u81f3\u652f\u6301copy\u51fd\u6570\u3002\u7136\u800c\uff0c\u5b83\u4eec\u90fd\u662f\u4e3a\u7b80\u5355\u7684\u4e0d\u53ef\u53d8\u5bf9\u8c61\u800c\u8bbe\u8ba1\uff0c\u5904\u7406\u590d\u6742\u7684\u7684\u6df1\u5c42\u6b21\u6570\u636e\u7ed3\u6784\u4f1a\u9762\u4e34\u95ee\u9898\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/object/immutable/current-situation.mdx",sourceDirName:"object/immutable",slug:"/object/immutable/current-situation",permalink:"/jimmer-doc/zh/docs/object/immutable/current-situation",draft:!1,unlisted:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/object/immutable/current-situation.mdx",tags:[],version:"current",lastUpdatedAt:1722888025e3,sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\u73b0\u72b6"},sidebar:"tutorialSidebar",previous:{title:"\u539f\u56e0",permalink:"/jimmer-doc/zh/docs/object/immutable/reason"},next:{title:"\u65b9\u6848",permalink:"/jimmer-doc/zh/docs/object/immutable/solution"}},h={},p=[];function m(e){const n={p:"p",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Java\u4ece14\u5f00\u59cb\u652f\u6301\u4e0d\u53ef\u53d8record\u7c7b\u578b\uff0ckotlin\u7684data class\u53ef\u8f7b\u677e\u5b9e\u73b0\u4e0d\u53ef\u53d8\u7c7b\uff0c\u751a\u81f3\u652f\u6301copy\u51fd\u6570\u3002\u7136\u800c\uff0c\u5b83\u4eec\u90fd\u662f\u4e3a\u7b80\u5355\u7684\u4e0d\u53ef\u53d8\u5bf9\u8c61\u800c\u8bbe\u8ba1\uff0c\u5904\u7406\u590d\u6742\u7684\u7684\u6df1\u5c42\u6b21\u6570\u636e\u7ed3\u6784\u4f1a\u9762\u4e34\u95ee\u9898\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u6df1\u5c42\u6b21\u7684\u590d\u6742\u4e0d\u53ef\u53d8\u5bf9\u8c61\u96be\u4ee5\u5904\u7406\u7684\u539f\u56e0\uff0c\u4e0d\u662f\u5982\u4f55\u4ece\u5934\u521b\u5efa\u4e00\u4e2a\u5168\u65b0\u7684\u6570\u636e\u7ed3\u6784\uff0c\u8fd9\u5bf9\u4efb\u4f55\u7f16\u7a0b\u8bed\u8a00\u800c\u8a00\u90fd\u5f88\u7b80\u5355\u3002\u771f\u6b63\u7684\u96be\u70b9\u5728\u4e8e\uff0c\u671f\u671b\u5bf9\u5df2\u6709\u7684\u6570\u636e\u7ed3\u6784\u505a\u4e00\u4e9b\u5c40\u90e8\u8c03\u6574\uff0c\u6784\u5efa\u65b0\u7684\u6570\u636e\u7ed3\u6784\u3002\u8fd9\u5bf9\u5f53\u524d\u7684Java\u548cKotlin\u800c\u8a00\u5f88\u96be\u5904\u7406\uff0c\u8bf7\u53c2\u89c1"}),"\n",(0,r.jsx)(s,{})]})}function x(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},19365:(e,n,l)=>{l.d(n,{A:()=>o});l(96540);var r=l(18215);const t={tabItem:"tabItem_Ymn6"};var a=l(74848);function o(e){let{children:n,hidden:l,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(t.tabItem,o),hidden:l,children:n})}},11470:(e,n,l)=>{l.d(n,{A:()=>T});var r=l(96540),t=l(18215),a=l(23104),o=l(56347),i=l(205),s=l(57485),d=l(31682),c=l(70679);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:l}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:l,attributes:r,default:t}}=e;return{value:n,label:l,attributes:r,default:t}}))}(l);return function(e){const n=(0,d.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,l])}function p(e){let{value:n,tabValues:l}=e;return l.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:l}=e;const t=(0,o.W6)(),a=function(e){let{queryString:n=!1,groupId:l}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!l)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return l??null}({queryString:n,groupId:l});return[(0,s.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(t.location.search);n.set(a,e),t.replace({...t.location,search:n.toString()})}),[a,t])]}function x(e){const{defaultValue:n,queryString:l=!1,groupId:t}=e,a=h(e),[o,s]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:l}=e;if(0===l.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:l}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${l.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=l.find((e=>e.default))??l[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[d,u]=m({queryString:l,groupId:t}),[x,b]=function(e){let{groupId:n}=e;const l=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,a]=(0,c.Dv)(l);return[t,(0,r.useCallback)((e=>{l&&a.set(e)}),[l,a])]}({groupId:t}),j=(()=>{const e=d??x;return p({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{j&&s(j)}),[j]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),b(e)}),[u,b,a]),tabValues:a}}var b=l(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=l(74848);function v(e){let{className:n,block:l,selectedValue:r,selectValue:o,tabValues:i}=e;const s=[],{blockElementScrollPositionUntilNextRender:d}=(0,a.a_)(),c=e=>{const n=e.currentTarget,l=s.indexOf(n),t=i[l].value;t!==r&&(d(n),o(t))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const l=s.indexOf(e.currentTarget)+1;n=s[l]??s[0];break}case"ArrowLeft":{const l=s.indexOf(e.currentTarget)-1;n=s[l]??s[s.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":l},n),children:i.map((e=>{let{value:n,label:l,attributes:a}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>s.push(e),onKeyDown:u,onClick:c,...a,className:(0,t.A)("tabs__item",j.tabItem,a?.className,{"tabs__item--active":r===n}),children:l??n},n)}))})}function f(e){let{lazy:n,children:l,selectedValue:t}=e;const a=(Array.isArray(l)?l:[l]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===t));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function N(e){const n=x(e);return(0,g.jsxs)("div",{className:(0,t.A)("tabs-container",j.tabList),children:[(0,g.jsx)(v,{...n,...e}),(0,g.jsx)(f,{...n,...e})]})}function T(e){const n=(0,b.A)();return(0,g.jsx)(N,{...e,children:u(e.children)},String(n))}},28453:(e,n,l)=>{l.d(n,{R:()=>o,x:()=>i});var r=l(96540);const t={},a=r.createContext(t);function o(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);