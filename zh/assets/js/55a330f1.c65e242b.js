"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[5795],{50536:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"showcase/fetch-association/join-fetch","title":"2.4 \u8fde\u63a5\u6293\u53d6","description":"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cJimmer\u4f7f\u7528\u6279\u91cf\u5316\u7684\u989d\u5916\u67e5\u8be2\u83b7\u53d6\u5173\u8054\u5bf9\u8c61\u3002","source":"@site/i18n/zh/docusaurus-plugin-content-docs/current/showcase/fetch-association/join-fetch.mdx","sourceDirName":"showcase/fetch-association","slug":"/showcase/fetch-association/join-fetch","permalink":"/jimmer-doc/zh/docs/showcase/fetch-association/join-fetch","draft":false,"unlisted":false,"editUrl":"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/showcase/fetch-association/join-fetch.mdx","tags":[],"version":"current","lastUpdatedAt":1742063236000,"sidebarPosition":4,"frontMatter":{"sidebar_position":4,"title":"2.4 \u8fde\u63a5\u6293\u53d6"},"sidebar":"tutorialSidebar","previous":{"title":"2.3 \u66f4\u6df1\u5173\u8054","permalink":"/jimmer-doc/zh/docs/showcase/fetch-association/deeper-association"},"next":{"title":"2.5 \u5c5e\u6027\u8fc7\u6ee4\u5668","permalink":"/jimmer-doc/zh/docs/showcase/fetch-association/prop-filter"}}');var r=t(74848),l=t(28453),s=t(11470),o=t(19365);const i={sidebar_position:4,title:"2.4 \u8fde\u63a5\u6293\u53d6"},c=void 0,u={},d=[{value:"\u67e5\u8be2\u52a8\u6001\u5b9e\u4f53",id:"\u67e5\u8be2\u52a8\u6001\u5b9e\u4f53",level:2},{value:"\u67e5\u8be2\u8b66\u9759\u6001DTO",id:"\u67e5\u8be2\u8b66\u9759\u6001dto",level:2}];function h(e){const n={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cJimmer\u4f7f\u7528\u6279\u91cf\u5316\u7684\u989d\u5916\u67e5\u8be2\u83b7\u53d6\u5173\u8054\u5bf9\u8c61\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u7136\u800c\uff0c\u5bf9\u5f15\u7528\u5173\u8054\u5c5e\u6027 ",(0,r.jsxs)(n.em,{children:["(\u5373\uff0c\u975e\u96c6\u5408\u5173\u8054\uff0c",(0,r.jsx)(n.code,{children:"@ManyToOne"}),"\u6216",(0,r.jsx)(n.code,{children:"OneToOne"}),")"]})," \u800c\u8a00\uff0c\u53ef\u4ee5\u901a\u8fc7SQL\u7684",(0,r.jsx)(n.code,{children:"left join"}),"\u5728\u67e5\u8be2\u5f53\u524d\u5bf9\u8c61\u65f6\u987a\u5e26\u67e5\u8be2\u5173\u8054\u5bf9\u8c61"]}),"\n",(0,r.jsx)(n.h2,{id:"\u67e5\u8be2\u52a8\u6001\u5b9e\u4f53",children:"\u67e5\u8be2\u52a8\u6001\u5b9e\u4f53"}),"\n",(0,r.jsxs)(s.A,{groupId:"language",children:[(0,r.jsx)(o.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'BookTable table = Tables.BOOK_TABLE;\n\nList<Book> books = sqlClient\n    .createQuery(table)\n    .where(table.name().eq("GraphQL in Action"))\n    .select(\n        table.fetch(\n            Fetchers.BOOK_FETCHER\n                .allScalarFields()\n                .store(\n                    // highlight-next-line\n                    ReferenceFetchType.JOIN_ALWAYS,\n                    Fetchers.BOOK_STORE_FETCHER\n                            .allScalarFields()\n                )\n        )\n    )\n    .execute();\n'})})}),(0,r.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:'val books = sqlClient.createQuery(Book::class) {\n    where(table.name eq "GraphQL in Action")\n    select(\n        table.fetchBy { \n            allScalarFields()\n            store(\n                // highlight-next-line\n                ReferenceFetchType.JOIN_ALWAYS\n            ) {\n                allScalarFields()\n            }\n        }\n    )\n}\n'})})})]}),"\n",(0,r.jsx)(n.p,{children:"\u751f\u6210\u5982\u4e0bSQL"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",children:"select\n    tb_1_.ID,\n    tb_1_.NAME,\n    tb_1_.EDITION,\n    tb_1_.PRICE,\n    tb_2_.ID,\n    tb_2_.NAME,\n    tb_2_.WEBSITE\nfrom BOOK tb_1_\n// highlight-start\nleft join BOOK_STORE tb_2_\n    on tb_1_.STORE_ID = tb_2_.ID\n// highlight-end\nwhere\n    tb_1_.NAME = ? /* GraphQL in Action */\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u6b64\u529f\u80fd\u53ea\u4f1a\u5f71\u54cd\u5bf9\u6293\u53d6\u5173\u8054\u5bf9\u8c61\u7684\u5e55\u540e\u673a\u5236\uff0c\u5bf9\u4e0a\u5c42\u529f\u80fd\u6ca1\u6709\u5f71\u54cd\uff0c\u6b64\u5904\u5ffd\u7565\u8fd4\u56de\u7684\u6570\u636e\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u67e5\u8be2\u8b66\u9759\u6001dto",children:"\u67e5\u8be2\u8b66\u9759\u6001DTO"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728",(0,r.jsx)(n.code,{children:"src/main/dto"}),"\u6587\u4ef6\u5939\u4e0b\u65b0\u5efa\u4efb\u4f55\u4e00\u4e2a\u6269\u5c55\u540d\u4e3adto\u7684\u6587\u4ef6\uff0c\u7f16\u8f91\u4ee3\u7801\u5982\u4e0b"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="Book.dto"',children:"export com.yourcompany.yourproject.model.BookStore\n    -> package com.yourcompany.yourproject.model.dto\n\nBookView {\n    #allScalars(this)\n\n    // highlight-next-line\n    !fetchType(JOIN_ALWAYS)\n    store {\n        #allScalars\n    }\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u7f16\u8bd1\u9879\u76ee\uff0c\u751f\u6210Java/Kotlin\u7c7b\u578bBookView\u3002"}),"\n",(0,r.jsxs)(s.A,{groupId:"language",children:[(0,r.jsx)(o.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'BookTable table = Tables.BOOK_TABLE;\n\nList<BookView> books = sqlClient\n    .createQuery(table)\n    .where(table.name().eq("GraphQL in Action"))\n    .select(\n        // highlight-next-line\n        table.fetch(BookView.class)\n    )\n    .execute();\n'})})}),(0,r.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:'val books = sqlClient.createQuery(Book::class) {\n    where(table.name eq "GraphQL in Action")\n    select(\n        // highlight-next-line\n        table.fetch(BookView::class)\n    )\n}\n'})})})]}),"\n",(0,r.jsx)(n.p,{children:"\u751f\u6210SQL\u5df2\u7ecf\u5728\u524d\u6587\u4e2d\u4ecb\u7ecd\u8fc7\uff0c\u6b64\u5904\u4e0d\u518d\u91cd\u590d\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u6b64\u529f\u80fd\u53ea\u4f1a\u5f71\u54cd\u5bf9\u6293\u53d6\u5173\u8054\u5bf9\u8c61\u7684\u5e55\u540e\u673a\u5236\uff0c\u5bf9\u4e0a\u5c42\u529f\u80fd\u6ca1\u6709\u5f71\u54cd\uff0c\u6b64\u5904\u5ffd\u7565\u8fd4\u56de\u7684\u6570\u636e\u3002"})]})}function p(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>s});t(96540);var a=t(34164);const r={tabItem:"tabItem_Ymn6"};var l=t(74848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,s),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>y});var a=t(96540),r=t(34164),l=t(23104),s=t(56347),o=t(205),i=t(57485),c=t(31682),u=t(70679);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:t}=e;const r=(0,s.W6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i.aZ)(l),(0,a.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(r.location.search);n.set(l,e),r.replace({...r.location,search:n.toString()})}),[l,r])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,l=h(e),[s,i]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:l}))),[c,d]=b({queryString:t,groupId:r}),[m,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,l]=(0,u.Dv)(t);return[r,(0,a.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:r}),g=(()=>{const e=c??m;return p({value:e,tabValues:l})?e:null})();(0,o.A)((()=>{g&&i(g)}),[g]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),f(e)}),[d,f,l]),tabValues:l}}var f=t(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(74848);function x(e){let{className:n,block:t,selectedValue:a,selectValue:s,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),u=e=>{const n=e.currentTarget,t=i.indexOf(n),r=o[t].value;r!==a&&(c(n),s(r))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:l}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>i.push(e),onKeyDown:d,onClick:u,...l,className:(0,r.A)("tabs__item",g.tabItem,l?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:l}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===l));return e?(0,a.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function _(e){const n=m(e);return(0,v.jsxs)("div",{className:(0,r.A)("tabs-container",g.tabList),children:[(0,v.jsx)(x,{...n,...e}),(0,v.jsx)(j,{...n,...e})]})}function y(e){const n=(0,f.A)();return(0,v.jsx)(_,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var a=t(96540);const r={},l=a.createContext(r);function s(e){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);