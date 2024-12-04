"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[9300],{56778:(e,n,t)=>{t.d(n,{A:()=>l});t(96540);var r=t(18215);const a={tabItem:"tabItem_Ymn6"};var o=t(74848);function l(e){let{children:n,hidden:t,className:l}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,l),hidden:t,children:n})}},37244:(e,n,t)=>{t.d(n,{A:()=>k});var r=t(96540),a=t(18215),o=t(44319),l=t(56347),s=t(94280),i=t(73024),u=t(58417),c=t(44031);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,u.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:t}=e;const a=(0,l.W6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(a.location.search);n.set(o,e),a.replace({...a.location,search:n.toString()})}),[o,a])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,o=p(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:o}))),[u,d]=h({queryString:t,groupId:a}),[b,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,o]=(0,c.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:a}),v=(()=>{const e=u??b;return m({value:e,tabValues:o})?e:null})();(0,s.A)((()=>{v&&i(v)}),[v]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),f(e)}),[d,f,o]),tabValues:o}}var f=t(46916);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(74848);function j(e){let{className:n,block:t,selectedValue:r,selectValue:l,tabValues:s}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.a_)(),c=e=>{const n=e.currentTarget,t=i.indexOf(n),a=s[t].value;a!==r&&(u(n),l(a))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>i.push(e),onKeyDown:d,onClick:c,...o,className:(0,a.A)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function g(e){let{lazy:n,children:t,selectedValue:o}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function y(e){const n=b(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,x.jsx)(j,{...n,...e}),(0,x.jsx)(g,{...n,...e})]})}function k(e){const n=(0,f.A)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(n))}},34460:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"mutation/save-command/input-dto/lonely","title":"\u5b64\u5355\u8868\u5355","description":"\u8fd9\u662f\u4e00\u4e2a\u975e\u5e38\u7b80\u964b\u7684\u65b9\u6848\uff0c\u4ec5\u4f9b\u5b66\u4e60\u6216\u975e\u5e38\u7b80\u5355\u7684\u9879\u76ee\u4f7f\u7528\u3002","source":"@site/i18n/zh/docusaurus-plugin-content-docs/current/mutation/save-command/input-dto/lonely.mdx","sourceDirName":"mutation/save-command/input-dto","slug":"/mutation/save-command/input-dto/lonely","permalink":"/jimmer-doc/zh/docs/mutation/save-command/input-dto/lonely","draft":false,"unlisted":false,"editUrl":"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/mutation/save-command/input-dto/lonely.mdx","tags":[],"version":"current","lastUpdatedAt":1731427770000,"sidebarPosition":2,"frontMatter":{"sidebar_position":2,"title":"\u5b64\u5355\u8868\u5355"},"sidebar":"tutorialSidebar","previous":{"title":"\u95ee\u9898","permalink":"/jimmer-doc/zh/docs/mutation/save-command/input-dto/problem"},"next":{"title":"\u4f7f\u7528DTO\u8bed\u8a00","permalink":"/jimmer-doc/zh/docs/mutation/save-command/input-dto/dto-lang"}}');var a=t(74848),o=t(28453),l=t(37244),s=t(56778);const i={sidebar_position:2,title:"\u5b64\u5355\u8868\u5355"},u=void 0,c={},d=[];function p(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.admonition,{type:"caution",children:(0,a.jsx)(n.p,{children:"\u8fd9\u662f\u4e00\u4e2a\u975e\u5e38\u7b80\u964b\u7684\u65b9\u6848\uff0c\u4ec5\u4f9b\u5b66\u4e60\u6216\u975e\u5e38\u7b80\u5355\u7684\u9879\u76ee\u4f7f\u7528\u3002"})}),"\n",(0,a.jsx)(n.p,{children:"\u9650\u5236\uff1a\u53ea\u80fd\u4fdd\u5b58\u5355\u8868\u6570\u636e\uff0c\u65e0\u6cd5\u5b9e\u73b0\u590d\u6742\u6570\u636e\u7ed3\u6784\u7684\u4fdd\u5b58"}),"\n",(0,a.jsxs)(n.p,{children:["\u529f\u80fd\uff1a\u89e3\u51b3\u5b89\u5168\u6027\u95ee\u9898 ",(0,a.jsxs)(n.em,{children:["(\u8be5\u95ee\u9898\u5728",(0,a.jsx)(n.a,{href:"./problem",children:"\u4e0a\u4e00\u7bc7\u6587\u6863"}),"\u4e2d\u8ba8\u8bba\u8fc7)"]})]}),"\n",(0,a.jsx)(n.p,{children:"\u4f18\u70b9\uff1a\u65e0\u9700\u5b9a\u4e49Input DTO"}),"\n",(0,a.jsxs)(n.p,{children:["\u7f3a\u70b9\uff1a\u4e0d\u89e3\u51b3API\u6a21\u7cca\u6027\u95ee\u9898 ",(0,a.jsxs)(n.em,{children:["(\u8be5\u95ee\u9898\u5728",(0,a.jsx)(n.a,{href:"./problem",children:"\u4e0a\u4e00\u7bc7\u6587\u6863"}),"\u4e2d\u8ba8\u8bba\u8fc7)"]})]}),"\n",(0,a.jsxs)(l.A,{groupId:"language",children:[(0,a.jsx)(s.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'@PutMapping("/book")\npublic void saveBook(\n    @RequestBody Book book\n) {\n    // highlight-next-line\n    if (!ImmutableObjects.isLonely(book)) {\n        throw new IllegalArgumentException("The input object is too complex");\n    }\n    bookRepository.save(book);\n}\n'})})}),(0,a.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:'@PutMapping("/book")\nfun saveBook(\n    // highlight-next-line\n    @RequestBody book: Book\n) {\n    // highlight-next-line\n    if (!isLonely(book)) {\n        throw IllegalArgumentException("The input object is too complex")\n    }\n    bookRepository.save(input)\n}\n'})})})]}),"\n",(0,a.jsx)(n.p,{children:"\u8fd9\u4e2a\u4f8b\u5b50\u76f4\u63a5\u91c7\u7528Jimmer\u52a8\u6001\u5bf9\u8c61\u4f5c\u4e3a\u5165\u53c2\uff0c\u4e0d\u9650\u5236\u4f20\u5165\u7684\u6570\u636e\u7ed3\u6784\u7684\u590d\u6742\u5ea6\u3002\u4f46\u662f\uff0c\u6211\u4eec\u52a0\u4e86\u4e00\u4e2a\u9a8c\u8bc1\uff0c\u5982\u679c\u53c2\u6570\u4e0d\u662f\u5b64\u5355\u5bf9\u8c61\uff0c\u629b\u51fa\u5f02\u5e38\u4ee5\u4fdd\u8bc1\u5b89\u5168\u6027\u3002"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"isLonely"}),"\u7528\u4e8e\u5224\u65ad\u52a8\u6001\u5bf9\u8c61\u662f\u5426\u53ea\u662f\u5b64\u5355\u5bf9\u8c61\uff0c\u5b64\u5355\u5bf9\u8c61\u53ea\u80fd\u5b58\u5728\u4e24\u79cd\u5c5e\u6027"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"\u6807\u91cf\u5c5e\u6027"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"\u57fa\u4e8e\u5916\u952e\u7684\u7684\u5173\u8054\u5c5e\u6027\uff0c\u4f46\u53ea\u80fd\u88ab\u8d4b\u4e3anull\u6216\u53ea\u6709id\u5c5e\u6027\u7684\u5173\u8054\u5bf9\u8c61\u3002"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["\u4e0d\u96be\u770b\u51fa\uff0c\u4e0a\u9762\u4ee3\u7801\u4e2d\u9a8c\u8bc1\u53ef\u4ee5\u4fdd\u8bc1\u6240\u6709\u7684",(0,a.jsx)(n.code,{children:"insert"}),"\u6216",(0,a.jsx)(n.code,{children:"update"}),"\u64cd\u4f5c\u53ea\u80fd\u9488\u5bf9\u4e00\u5f20\u8868\u3002"]}),"\n",(0,a.jsx)(n.p,{children:"\u5982\u679c\u5f00\u53d1\u4eba\u5458\u8ba4\u4e3a"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"\u5c06\u529f\u80fd\u9650\u5236\u4e3a\u53ea\u80fd\u4fee\u6539\u4e00\u5f20\u8868\u5c31\u8fbe\u5230\u81ea\u5df1\u9700\u8981\u7684\u5b89\u5168\u9650\u5236"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"\u53e6\u5916\u4e00\u4e2aAPI\u6a21\u7cca\u5316\u95ee\u9898\u662f\u53ef\u4ee5\u63a5\u53d7\u7684\u3002"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"\u90a3\u4e48\u8fd9\u7684\u786e\u662f\u4e00\u4e2a\u975e\u5e38\u7b80\u964b\u4f46\u53ef\u7528\u7684\u65b9\u6848\u3002"})]})}function m(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>s});var r=t(96540);const a={},o=r.createContext(a);function l(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);