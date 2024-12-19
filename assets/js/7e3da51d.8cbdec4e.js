"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[7255],{67760:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>u});const i=JSON.parse('{"id":"mutation/save-command/pessimistic-locking","title":"Pessimistic Locking","description":"Preparation","source":"@site/docs/mutation/save-command/pessimistic-locking.mdx","sourceDirName":"mutation/save-command","slug":"/mutation/save-command/pessimistic-locking","permalink":"/jimmer-doc/docs/mutation/save-command/pessimistic-locking","draft":false,"unlisted":false,"editUrl":"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/mutation/save-command/pessimistic-locking.mdx","tags":[],"version":"current","lastUpdatedAt":1734649331000,"sidebarPosition":9,"frontMatter":{"sidebar_position":9,"title":"Pessimistic Locking"},"sidebar":"tutorialSidebar","previous":{"title":"Optimistic Locking","permalink":"/jimmer-doc/docs/mutation/save-command/optimistic-locking"},"next":{"title":"MySQL issues","permalink":"/jimmer-doc/docs/mutation/save-command/mysql"}}');var s=n(74848),r=n(28453),a=n(11470),o=n(19365);n(74400);const l={sidebar_position:9,title:"Pessimistic Locking"},c=void 0,d={},u=[{value:"Preparation",id:"preparation",level:2},{value:"Demonstrating Pessimistic Locks",id:"demonstrating-pessimistic-locks",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"preparation",children:"Preparation"}),"\n",(0,s.jsx)(t.p,{children:"The pessimistic lock discussed in this article is not the ordinary query pessimistic lock, but rather the pessimistic lock within save commands."}),"\n",(0,s.jsx)(t.p,{children:"When facing a save operation, the save command will adopt two distinctly different behaviors depending on the situation:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Directly utilize the database's capability to perform upsert operations"}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"First check if the data to be saved exists through a select operation, then decide whether the subsequent operation should be insert or update based on the query results"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Jimmer will try to execute ",(0,s.jsx)(t.code,{children:"1"})," whenever possible. If it cannot do so, it will execute ",(0,s.jsx)(t.code,{children:"2"})," and report the ",(0,s.jsx)(t.code,{children:"QueryReason"})," to the user."]}),"\n",(0,s.jsxs)(t.p,{children:["When Jimmer has to execute ",(0,s.jsx)(t.code,{children:"2"}),", there is an issue: there exists a time window between the initial select operation and the subsequent insert or update operation, during which other transactions might squeeze into this window and modify the same data."]}),"\n",(0,s.jsxs)(t.p,{children:["To solve this problem, the save command allows users to enable pessimistic locking, adding the ",(0,s.jsx)(t.code,{children:"for update"})," option when executing the select operation, which remains in effect until the transaction is committed."]}),"\n",(0,s.jsxs)(t.p,{children:["Before demonstrating pessimistic locks, we need to make the save command execute ",(0,s.jsx)(t.code,{children:"2"})," above rather than ",(0,s.jsx)(t.code,{children:"1"}),". An effective way is to enable in-transaction triggers:"]}),"\n",(0,s.jsxs)(t.p,{children:["In-transaction triggers are a type of ",(0,s.jsx)(t.a,{href:"../trigger",children:"trigger"})," supported by Jimmer. Jimmer always queries the old data before modification through select operations to simulate the trigger effect."]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"In-transaction triggers are a feature that hasn't been introduced yet, however, readers don't need to pay too much attention to it. Here, we're just using it to ensure Jimmer adopts the query-before-modify strategy."})}),"\n",(0,s.jsx)(t.p,{children:"Use either of the following methods to enable in-transaction triggers"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Using Jimmer's Spring Boot Starter"}),"\n",(0,s.jsxs)(t.p,{children:["Modify the ",(0,s.jsx)(t.code,{children:"application.yml"})," or ",(0,s.jsx)(t.code,{children:"application.properties"})," file to complete the configuration"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",metastring:'title="application.yml"',children:"jimmer:\n    # highlight-next-line\n    trigger-type: TRANSACTION_ONLY\n"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Using Jimmer's core API"}),"\n",(0,s.jsxs)(a.A,{groupId:"language",children:[(0,s.jsx)(o.A,{value:"java",label:"Java",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:"JSqlClient sqlClient = JSqlClient\n    .newBuilder()\n    // highlight-next-line\n    .setTriggerType(TriggerType.TRANSACTION_ONLY)\n    ...other configurations omitted...\n    .build();\n"})})}),(0,s.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-kotlin",children:"val sqlClient = sqlClient {\n    // highlight-next-line\n    setTriggerType(TriggerType.TRANSACTION_ONLY)\n    ...other configurations omitted...\n}\n"})})})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Through this configuration, we force Jimmer to always query before modifying, to facilitate the demonstration of pessimistic locks."}),"\n",(0,s.jsx)(t.h2,{id:"demonstrating-pessimistic-locks",children:"Demonstrating Pessimistic Locks"}),"\n",(0,s.jsxs)(t.p,{children:["We can enable pessimistic locks for save commands using the ",(0,s.jsx)(t.code,{children:"setPessimisticLock"})," method"]}),"\n",(0,s.jsxs)(a.A,{groupId:"language",children:[(0,s.jsx)(o.A,{value:"java",label:"Java",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:'List<Book> books = Arrays.asList(\n    Immutables.createBook(draft -> {\n        draft.setName("GraphQL in Action");\n        draft.setEdition(3);\n        draft.setPrice(new BigDecimal("59.9"));\n    }),\n    Immutables.createBook(draft -> {\n        draft.setName("GraphQL in Action");\n        draft.setEdition(4);\n        draft.setPrice(new BigDecimal("59.9"));\n    })\n);\nsqlClient\n        .saveEntitiesCommand(books)\n        // highlight-next-line\n        .setPessimisticLock(Book.class)\n        .execute();\n'})})}),(0,s.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-kotlin",children:'val books = listOf(\n    Book { \n        name = "SQL in Action"\n        edition = 3\n        price = BigDecimal("59.9")\n    },\n    Book {\n        name = "SQL in Action"\n        edition = 4\n        price = BigDecimal("59.9")\n    }\n)\n\nsqlClient.saveEntities(books) {\n    // highlight-next-line\n    setPessimisticLock(Book::class)\n}\n'})})})]}),"\n",(0,s.jsxs)(t.p,{children:["Here, ",(0,s.jsx)(t.code,{children:"setPessimisticLock"})," enables pessimistic locking for the ",(0,s.jsx)(t.code,{children:"Book"})," entity. If the save command needs to query ",(0,s.jsx)(t.code,{children:"Book"})," type objects, the related select statement will use the ",(0,s.jsx)(t.code,{children:"for update"})," option."]}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:["In fact, you can also call the ",(0,s.jsx)(t.code,{children:"setPessimisticLockAll"})," method to blindly enable pessimistic locks for all entity types"]})}),"\n",(0,s.jsx)(t.p,{children:"Finally, three SQL statements are generated"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Query whether the objects to be saved exist, with the ",(0,s.jsx)(t.code,{children:"for update"})," option"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"Purpose: COMMAND(TRIGGER)\nSQL: select\n    tb_1_.ID,\n    tb_1_.NAME,\n    tb_1_.EDITION,\n    tb_1_.PRICE,\n    tb_1_.STORE_ID\nfrom BOOK tb_1_\nwhere\n    (tb_1_.NAME, tb_1_.EDITION) in (\n        (? /* GraphQL in Action */, ? /* 3 */), \n        (? /* GraphQL in Action */, ? /* 4 */)\n        -- highlight-next-line\n    ) for update\n"})}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:["Here, the query statement includes the ",(0,s.jsx)(t.code,{children:"for update"})," option, indicating that the pessimistic lock is in effect."]})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(n,{children:[(0,s.jsxs)("summary",{children:["Insert non-existent data ",(0,s.jsx)(t.em,{children:"(not the focus of this article, collapsed by default)"})," "]}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"insert into BOOK(\n    NAME, EDITION, PRICE\n) values(\n    ? /* GraphQL in Action */, \n    ? /* 4 */, \n    ? /* 59.9 */\n)\n"})})]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(n,{children:[(0,s.jsxs)("summary",{children:["Update existing data ",(0,s.jsx)(t.em,{children:"(not the focus of this article, collapsed by default)"})," "]}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"update BOOK\nset\n    PRICE = ? /* 59.9 */\nwhere\n    ID = ? /* 12 */\n"})})]}),"\n"]}),"\n"]})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>a});n(96540);var i=n(34164);const s={tabItem:"tabItem_Ymn6"};var r=n(74848);function a(e){let{children:t,hidden:n,className:a}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,i.A)(s.tabItem,a),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>k});var i=n(96540),s=n(34164),r=n(23104),a=n(56347),o=n(205),l=n(57485),c=n(31682),d=n(70679);function u(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,i.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:i,default:s}}=e;return{value:t,label:n,attributes:i,default:s}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const s=(0,a.W6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(r),(0,i.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(s.location.search);t.set(r,e),s.replace({...s.location,search:t.toString()})}),[r,s])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,r=h(e),[a,l]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const i=n.find((e=>e.default))??n[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:t,tabValues:r}))),[c,u]=p({queryString:n,groupId:s}),[f,x]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,r]=(0,d.Dv)(n);return[s,(0,i.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:s}),g=(()=>{const e=c??f;return m({value:e,tabValues:r})?e:null})();(0,o.A)((()=>{g&&l(g)}),[g]);return{selectedValue:a,selectValue:(0,i.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),x(e)}),[u,x,r]),tabValues:r}}var x=n(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(74848);function j(e){let{className:t,block:n,selectedValue:i,selectValue:a,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),d=e=>{const t=e.currentTarget,n=l.indexOf(t),s=o[n].value;s!==i&&(c(t),a(s))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,ref:e=>l.push(e),onKeyDown:u,onClick:d,...r,className:(0,s.A)("tabs__item",g.tabItem,r?.className,{"tabs__item--active":i===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:r}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===r));return e?(0,i.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function y(e){const t=f(e);return(0,b.jsxs)("div",{className:(0,s.A)("tabs-container",g.tabList),children:[(0,b.jsx)(j,{...t,...e}),(0,b.jsx)(v,{...t,...e})]})}function k(e){const t=(0,x.A)();return(0,b.jsx)(y,{...e,children:u(e.children)},String(t))}},66971:(e,t,n)=>{n.d(t,{a:()=>f});var i=n(96540),s=n(72774),r=n(63051),a=n(28968),o=n(48875),l=n(44676),c=n(47859),d=n(4671),u=n(99343),h=n(7324),m=n(39781),p=n(74848);const f=(0,i.memo)((e=>{let{open:t,fullScreen:n=!1,title:o,maxWidth:f="md",onClose:g,children:b}=e;const[j,v]=(0,i.useState)(n),y=(0,i.useCallback)((()=>{v((e=>!e))}),[]);return(0,p.jsxs)(r.A,{open:t,onClose:g,fullScreen:j,TransitionComponent:x,maxWidth:f,children:[(0,p.jsx)(s.A,{sx:{position:"relative"},children:(0,p.jsxs)(l.A,{children:[(0,p.jsx)(c.A,{sx:{ml:2,flex:1},variant:"h6",component:"div",children:o}),(0,p.jsx)(d.A,{onClick:y,style:{color:"white"},children:j?(0,p.jsx)(h.A,{}):(0,p.jsx)(u.A,{})}),(0,p.jsx)(d.A,{"aria-label":"close",onClick:g,style:{color:"white"},children:(0,p.jsx)(m.A,{})})]})}),(0,p.jsx)(a.A,{children:b})]})})),x=i.forwardRef((function(e,t){return(0,p.jsx)(o.A,{direction:"up",ref:t,...e})}))},74400:(e,t,n)=>{n.d(t,{l:()=>o});var i=n(96540),s=n(67512),r=n(66971),a=n(74848);const o=(0,i.memo)((e=>{let{buttonText:t,fullScreen:n=!1,title:o=t,variant:l="outlined",large:c=!1,maxWidth:d,useOriginalText:u=!0,children:h}=e;const[m,p]=(0,i.useState)(!1),f=(0,i.useCallback)((e=>{p(!0),e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}),[]),x=(0,i.useCallback)((()=>{p(!1)}),[]),g=u?{textTransform:"none"}:{};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.A,{"data-is-view-more-button":"true",onClick:f,variant:l,size:c?"large":"small",style:g,children:t}),(0,a.jsx)(r.a,{open:m,onClose:x,title:o,maxWidth:d,fullScreen:n,children:h})]})}))},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var i=n(96540);const s={},r=i.createContext(s);function a(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);