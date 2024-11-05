"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[1567],{63064:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"showcase/recursive-query/multiple-props","title":"3.4 Multiple Properties","description":"Query Dynamic Entities","source":"@site/docs/showcase/recursive-query/multiple-props.mdx","sourceDirName":"showcase/recursive-query","slug":"/showcase/recursive-query/multiple-props","permalink":"/jimmer-doc/docs/showcase/recursive-query/multiple-props","draft":false,"unlisted":false,"editUrl":"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/showcase/recursive-query/multiple-props.mdx","tags":[],"version":"current","lastUpdatedAt":1708980990000,"sidebarPosition":4,"frontMatter":{"sidebar_position":4,"title":"3.4 Multiple Properties"},"sidebar":"tutorialSidebar","previous":{"title":"3.2 Control Recursion Of Node","permalink":"/jimmer-doc/docs/showcase/recursive-query/node-control"},"next":{"title":"4. Where","permalink":"/jimmer-doc/docs/showcase/where/"}}');var a=r(74848),s=r(28453),i=r(11470),l=r(19365);const o={sidebar_position:4,title:"3.4 Multiple Properties"},c=void 0,u={},d=[{value:"Query Dynamic Entities",id:"query-dynamic-entities",level:2},{value:"Query Static DTO",id:"query-static-dto",level:2}];function h(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"query-dynamic-entities",children:"Query Dynamic Entities"}),"\n",(0,a.jsxs)(i.A,{groupId:"language",children:[(0,a.jsx)(l.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"TreeNodeTable table = TreeNodeTable.$;\n\nTreeNode treeNode = sqlClient\n    .findById(\n        TreeNodeFetcher.$\n                .allScalarFields()\n                .recursiveParent() \u2776 \n                .recursiveChildNodes() \u2777,\n        10L\n    );\n"})})}),(0,a.jsx)(l.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"val treeNode = sqlClient\n    .findById(\n        newFetcher(Book::class).by {\n            allScalarFields()\n                `parent*`() \u2776\n                `childNodes*`() \u2777\n        },\n        10L\n    )\n"})})})]}),"\n",(0,a.jsx)(n.p,{children:"The result is"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n    "id":10,\n    "name":"Woman",\n    "parent":{ \u2776\n        "id":9,\n        "name":"Clothing",\n        "parent":{ \u2776\n            "id":1,\n            "name":"Home",\n            "parent":null \u2776\n        }\n    },\n    "childNodes":[ \u2777\n        {\n            "id":11,\n            "name":"Casual wear",\n            "childNodes":[ \u2777\n                {\n                    "id":12,\n                    "name":"Dress",\n                    "childNodes":[] \u2777\n                },\n                {\n                    "id":13,\n                    "name":"Miniskirt",\n                    "childNodes":[] \u2777\n                },\n                {\n                    "id":14,\n                    "name":"Jeans",\n                    "childNodes":[] \u2777\n                }\n            ]\n        },\n        {\n            "id":15,\n            "name":"Formal wear",\n            "childNodes":[ \u2777\n                {\n                    "id":16,\n                    "name":"Suit",\n                    "childNodes":[] \u2777\n                },\n                {\n                    "id":17,\n                    "name":"Shirt",\n                    "childNodes":[] \u2777\n                }\n            ]\n        }\n    ]\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"query-static-dto",children:"Query Static DTO"}),"\n",(0,a.jsxs)(n.p,{children:["Create any file with the ",(0,a.jsx)(n.code,{children:"dto"})," extension under the ",(0,a.jsx)(n.code,{children:"src/main/dto"})," folder, and edit the code as follows:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"export com.yourcompany.yourproject.model.TreeNode\n    -> package com.yourcompany.yourproject.model.dto\n\nRecursiveTreeNodeView {\n    #allScalars(this)\n    parent* \u2776\n    childNodes* \u2777\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Compile the project, a java/kotlin class named ",(0,a.jsx)(n.code,{children:"RecursiveTreeNodeView"})," will be automatically generated."]}),"\n",(0,a.jsxs)(i.A,{groupId:"language",children:[(0,a.jsx)(l.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"TreeNodeTable table = TreeNodeTable.$;\n\nRecursiveTreeNodeView treeNode = sqlClient\n    .findById(\n        RecursiveTreeNodeView.class,\n        10L\n    );\n"})})}),(0,a.jsx)(l.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"val treeNode = sqlClient\n    .findById(\n        RecursiveTreeNodeView::class,\n        10L\n    )\n"})})})]}),"\n",(0,a.jsx)(n.p,{children:"The result is"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:"RecursiveTreeNodeView(\n    id=10, \n    name=Woman, \n    parent=RecursiveTreeNodeView.TargetOf_parent( \u2776\n        id=9, \n        name=Clothing, \n        parent=RecursiveTreeNodeView.TargetOf_parent( \u2776\n            id=1, \n            name=Home, \n            parent=null \u2776\n        )\n    ), \n    childNodes=[ \u2777\n        RecursiveTreeNodeView.TargetOf_childNodes(\n            id=11, \n            name=Casual wear, \n            childNodes=[ \u2777\n                RecursiveTreeNodeView.TargetOf_childNodes(\n                    id=12, \n                    name=Dress, \n                    childNodes=[] \u2777\n                ), \n                RecursiveTreeNodeView.TargetOf_childNodes(\n                    id=13, \n                    name=Miniskirt, \n                    childNodes=[] \u2777\n                ), \n                RecursiveTreeNodeView.TargetOf_childNodes(\n                    id=14, \n                    name=Jeans, \n                    childNodes=[] \u2777\n                )\n            ]\n        ), \n        RecursiveTreeNodeView.TargetOf_childNodes(\n            id=15, \n            name=Formal wear, \n            childNodes=[ \u2777\n                RecursiveTreeNodeView.TargetOf_childNodes(\n                    id=16, \n                    name=Suit, \n                    childNodes=[] \u2777\n                ), \n                RecursiveTreeNodeView.TargetOf_childNodes(\n                    id=17, \n                    name=Shirt, \n                    childNodes=[] \u2777\n                )\n            ]\n        )\n    ]\n)\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>i});r(96540);var t=r(18215);const a={tabItem:"tabItem_Ymn6"};var s=r(74848);function i(e){let{children:n,hidden:r,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.A)(a.tabItem,i),hidden:r,children:n})}},11470:(e,n,r)=>{r.d(n,{A:()=>x});var t=r(96540),a=r(18215),s=r(23104),i=r(56347),l=r(205),o=r(57485),c=r(31682),u=r(70679);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:a}}=e;return{value:n,label:r,attributes:t,default:a}}))}(r);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:r}=e;const a=(0,i.W6)(),s=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,o.aZ)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function f(e){const{defaultValue:n,queryString:r=!1,groupId:a}=e,s=h(e),[i,o]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[c,d]=m({queryString:r,groupId:a}),[f,v]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,u.Dv)(r);return[a,(0,t.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:a}),b=(()=>{const e=c??f;return p({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{b&&o(b)}),[b]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),v(e)}),[d,v,s]),tabValues:s}}var v=r(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var N=r(74848);function g(e){let{className:n,block:r,selectedValue:t,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const n=e.currentTarget,r=o.indexOf(n),a=l[r].value;a!==t&&(c(n),i(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;n=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;n=o[r]??o[o.length-1];break}}n?.focus()};return(0,N.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},n),children:l.map((e=>{let{value:n,label:r,attributes:s}=e;return(0,N.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>o.push(e),onKeyDown:d,onClick:u,...s,className:(0,a.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function y(e){let{lazy:n,children:r,selectedValue:s}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,N.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function j(e){const n=f(e);return(0,N.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,N.jsx)(g,{...n,...e}),(0,N.jsx)(y,{...n,...e})]})}function x(e){const n=(0,v.A)();return(0,N.jsx)(j,{...e,children:d(e.children)},String(n))}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>l});var t=r(96540);const a={},s=t.createContext(a);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);