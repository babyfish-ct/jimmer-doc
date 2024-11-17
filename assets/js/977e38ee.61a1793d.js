"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[909,8108],{88835:(e,t,n)=>{n.d(t,{A:()=>I});var r=n(96540),i=n(74848);function o(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=r.Children.toArray(e),n=t.find((e=>r.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),o=t.filter((e=>e!==n)),s=n?.props.children;return{mdxAdmonitionTitle:s,rest:o.length>0?(0,i.jsx)(i.Fragment,{children:o}):null}}(e.children),o=e.title??t;return{...e,...o&&{title:o},children:n}}var s=n(18215),a=n(45122),l=n(79872);const c={admonition:"admonition_xJq3",admonitionHeading:"admonitionHeading_Gvgb",admonitionIcon:"admonitionIcon_Rf37",admonitionContent:"admonitionContent_BuS1"};function d(e){let{type:t,className:n,children:r}=e;return(0,i.jsx)("div",{className:(0,s.A)(l.G.common.admonition,l.G.common.admonitionType(t),c.admonition,n),children:r})}function u(e){let{icon:t,title:n}=e;return(0,i.jsxs)("div",{className:c.admonitionHeading,children:[(0,i.jsx)("span",{className:c.admonitionIcon,children:t}),n]})}function h(e){let{children:t}=e;return t?(0,i.jsx)("div",{className:c.admonitionContent,children:t}):null}function m(e){const{type:t,icon:n,title:r,children:o,className:s}=e;return(0,i.jsxs)(d,{type:t,className:s,children:[r||n?(0,i.jsx)(u,{title:r,icon:n}):null,(0,i.jsx)(h,{children:o})]})}function p(e){return(0,i.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const f={icon:(0,i.jsx)(p,{}),title:(0,i.jsx)(a.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function x(e){return(0,i.jsx)(m,{...f,...e,className:(0,s.A)("alert alert--secondary",e.className),children:e.children})}function j(e){return(0,i.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const b={icon:(0,i.jsx)(j,{}),title:(0,i.jsx)(a.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function v(e){return(0,i.jsx)(m,{...b,...e,className:(0,s.A)("alert alert--success",e.className),children:e.children})}function g(e){return(0,i.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const y={icon:(0,i.jsx)(g,{}),title:(0,i.jsx)(a.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function w(e){return(0,i.jsx)(m,{...y,...e,className:(0,s.A)("alert alert--info",e.className),children:e.children})}function A(e){return(0,i.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const T={icon:(0,i.jsx)(A,{}),title:(0,i.jsx)(a.A,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function C(e){return(0,i.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const N={icon:(0,i.jsx)(C,{}),title:(0,i.jsx)(a.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const k={icon:(0,i.jsx)(A,{}),title:(0,i.jsx)(a.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const q={...{note:x,tip:v,info:w,warning:function(e){return(0,i.jsx)(m,{...T,...e,className:(0,s.A)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,i.jsx)(m,{...N,...e,className:(0,s.A)("alert alert--danger",e.className),children:e.children})}},...{secondary:e=>(0,i.jsx)(x,{title:"secondary",...e}),important:e=>(0,i.jsx)(w,{title:"important",...e}),success:e=>(0,i.jsx)(v,{title:"success",...e}),caution:function(e){return(0,i.jsx)(m,{...k,...e,className:(0,s.A)("alert alert--warning",e.className),children:e.children})}}};function I(e){const t=o(e),n=(r=t.type,q[r]||(console.warn(`No admonition component found for admonition type "${r}". Using Info as fallback.`),q.info));var r;return(0,i.jsx)(n,{...t})}},56778:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var r=n(18215);const i={tabItem:"tabItem_Ymn6"};var o=n(74848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,s),hidden:n,children:t})}},37244:(e,t,n)=>{n.d(t,{A:()=>w});var r=n(96540),i=n(18215),o=n(44319),s=n(56347),a=n(94280),l=n(73024),c=n(58417),d=n(44031);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:i}}=e;return{value:t,label:n,attributes:r,default:i}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const i=(0,s.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(i.location.search);t.set(o,e),i.replace({...i.location,search:t.toString()})}),[o,i])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:i}=e,o=h(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[c,u]=p({queryString:n,groupId:i}),[f,x]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,o]=(0,d.Dv)(n);return[i,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:i}),j=(()=>{const e=c??f;return m({value:e,tabValues:o})?e:null})();(0,a.A)((()=>{j&&l(j)}),[j]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),x(e)}),[u,x,o]),tabValues:o}}var x=n(46916);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(74848);function v(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),d=e=>{const t=e.currentTarget,n=l.indexOf(t),i=a[n].value;i!==r&&(c(t),s(i))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},t),children:a.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:u,onClick:d,...o,className:(0,i.A)("tabs__item",j.tabItem,o?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function g(e){let{lazy:t,children:n,selectedValue:o}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function y(e){const t=f(e);return(0,b.jsxs)("div",{className:(0,i.A)("tabs-container",j.tabList),children:[(0,b.jsx)(v,{...t,...e}),(0,b.jsx)(g,{...t,...e})]})}function w(e){const t=(0,x.A)();return(0,b.jsx)(y,{...e,children:u(e.children)},String(t))}},38143:(e,t,n)=>{n.d(t,{$z:()=>c});var r=n(96540),i=n(37244),o=n(56778),s=(n(47389),n(37091)),a=(n(58226),n(88835)),l=n(74848);const c=(0,r.memo)((()=>(0,s.o)()?h:m)),d=n(94692).A,u=n(57095).A,h=(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(i.A,{groupId:"language",children:[(0,l.jsx)(o.A,{value:"java",label:"Java",children:(0,l.jsx)("div",{style:{position:"relative",width:"100%",paddingTop:"56.25%"},children:(0,l.jsx)("iframe",{src:"//player.bilibili.com/player.html?bvid=BV1W14y167x7&page=1&high_quality=1&danmaku=0",scrolling:"no",frameBorder:"no",allowFullScreen:!0,style:{position:"absolute",left:0,top:0,width:"100%",height:"100%"}})})}),(0,l.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,l.jsx)("div",{style:{position:"relative",width:"100%",paddingTop:"56.25%"},children:(0,l.jsx)("iframe",{src:"//player.bilibili.com/player.html?bvid=BV1ic411F7hz&page=1&high_quality=1&danmaku=0",scrolling:"no",frameBorder:"no",allowFullScreen:!0,style:{position:"absolute",left:0,top:0,width:"100%",height:"100%"}})})})]}),(0,l.jsxs)(a.A,{type:"info",children:["\u548cGraphQL\u6bd4\u8f83",(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:"GraphQL\u57fa\u4e8eHTTP\u670d\u52a1\uff0c\u8be5\u529f\u80fd\u53ea\u6709\u5728\u8de8\u8d8aHTTP\u670d\u52a1\u7684\u8fb9\u754c\u624d\u80fd\u5448\u73b0\uff1b\u800c\u5728Jimmer\u4e2d\uff0c\u8fd9\u662fORM\u7684\u57fa\u7840API\uff0c\u4f60\u53ef\u4ee5\u5728\u4efb\u4f55\u4ee3\u7801\u903b\u8f91\u4e2d\u4f7f\u7528\u6b64\u80fd\u529b\u3002"}),(0,l.jsx)("li",{children:"\u622a\u6b62\u5230\u76ee\u524d\u4e3a\u6b62\uff0cGraphQL\u534f\u8bae\u4e0d\u652f\u6301\u5bf9\u6df1\u5ea6\u65e0\u9650\u7684\u81ea\u5173\u8054\u5c5e\u6027\u7684\u9012\u5f52\u67e5\u8be2\uff1b\u800cJimmer\u652f\u6301\u3002"})]})]})]}),m=(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(i.A,{groupId:"language",children:[(0,l.jsx)(o.A,{value:"java",label:"Java",children:(0,l.jsxs)("video",{width:"100%",controls:!0,children:[(0,l.jsx)("source",{src:d,type:"video/mp4"}),(0,l.jsx)("div",{style:{padding:"1rem",fontSize:"2rem",color:"red"},children:"Your browser does not support the video tag."})]})}),(0,l.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,l.jsxs)("video",{width:"100%",controls:!0,children:[(0,l.jsx)("source",{src:u,type:"video/mp4"}),(0,l.jsx)("div",{style:{padding:"1rem",fontSize:"2rem",color:"red"},children:"Your browser does not support the video tag."})]})})]}),(0,l.jsxs)(a.A,{type:"info",children:["Compare to GraphQL",(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:"GraphQL is based on HTTP services, which can only be experienced if it crosses the boundaries of HTTP services. In Jimmer, this is the underlying API for ORM, and you can use this capability in any code logic."}),(0,l.jsx)("li",{children:"Until now, the GraphQL protocol does not support recursive queries on self-associated properties with infinite depth; And Jimmer supports"})]})]})]})},58226:(e,t,n)=>{n.d(t,{a:()=>f});var r=n(96540),i=n(72774),o=n(63051),s=n(28968),a=n(48875),l=n(44676),c=n(47859),d=n(4671),u=n(99343),h=n(7324),m=n(39781),p=n(74848);const f=(0,r.memo)((e=>{let{open:t,fullScreen:n=!1,title:a,maxWidth:f="md",onClose:j,children:b}=e;const[v,g]=(0,r.useState)(n),y=(0,r.useCallback)((()=>{g((e=>!e))}),[]);return(0,p.jsxs)(o.A,{open:t,onClose:j,fullScreen:v,TransitionComponent:x,maxWidth:f,children:[(0,p.jsx)(i.A,{sx:{position:"relative"},children:(0,p.jsxs)(l.A,{children:[(0,p.jsx)(c.A,{sx:{ml:2,flex:1},variant:"h6",component:"div",children:a}),(0,p.jsx)(d.A,{onClick:y,style:{color:"white"},children:v?(0,p.jsx)(h.A,{}):(0,p.jsx)(u.A,{})}),(0,p.jsx)(d.A,{"aria-label":"close",onClick:j,style:{color:"white"},children:(0,p.jsx)(m.A,{})})]})}),(0,p.jsx)(s.A,{children:b})]})})),x=r.forwardRef((function(e,t){return(0,p.jsx)(a.A,{direction:"up",ref:t,...e})}))},47389:(e,t,n)=>{n.d(t,{l:()=>a});var r=n(96540),i=n(67512),o=n(58226),s=n(74848);const a=(0,r.memo)((e=>{let{buttonText:t,fullScreen:n=!1,title:a=t,variant:l="outlined",large:c=!1,maxWidth:d,useOriginalText:u=!0,children:h}=e;const[m,p]=(0,r.useState)(!1),f=(0,r.useCallback)((e=>{p(!0),e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}),[]),x=(0,r.useCallback)((()=>{p(!1)}),[]),j=u?{textTransform:"none"}:{};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.A,{"data-is-view-more-button":"true",onClick:f,variant:l,size:c?"large":"small",style:j,children:t}),(0,s.jsx)(o.a,{open:m,onClose:x,title:a,maxWidth:d,fullScreen:n,children:h})]})}))},37091:(e,t,n)=>{n.d(t,{o:()=>i});var r=n(22777);function i(){const{i18n:e}=(0,r.A)(),t=e.currentLocale;return"zh"===t||"zh_cn"===t||"zh_CN"==t}},12372:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"query/object-fetcher/index","title":"Object Fetcher","description":"Concept","source":"@site/docs/query/object-fetcher/index.md","sourceDirName":"query/object-fetcher","slug":"/query/object-fetcher/","permalink":"/jimmer-doc/docs/query/object-fetcher/","draft":false,"unlisted":false,"editUrl":"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/query/object-fetcher/index.md","tags":[],"version":"current","lastUpdatedAt":1731427770000,"sidebarPosition":2,"frontMatter":{"sidebar_position":2,"title":"Object Fetcher"},"sidebar":"tutorialSidebar","previous":{"title":"Overview","permalink":"/jimmer-doc/docs/query/usage"},"next":{"title":"Basic Usage","permalink":"/jimmer-doc/docs/query/object-fetcher/usage"}}');var i=n(74848),o=n(28453),s=(n(37244),n(56778),n(38143));const a={sidebar_position:2,title:"Object Fetcher"},l=void 0,c={},d=[{value:"Concept",id:"concept",level:2},{value:"Examples",id:"examples",level:2}];function u(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"concept",children:"Concept"}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsx)(t.p,{children:"One statement to query data structure of arbitrary shape, like GraphQL"})}),"\n",(0,i.jsx)(t.p,{children:"The object fetcher is an important feature of Jimmer that automatically fetches specified fields and assembles them into objects, saving a lot of time writing manual conversion logic."}),"\n",(0,i.jsx)(t.p,{children:"The object fetcher is similar to the following technologies, but more powerful:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://www.baeldung.com/jpa-entity-graph",children:"JPA's EntityGraph"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/dotnet/api/system.data.objects.objectquery-1.include?view=netframework-4.8",children:"ADO.NET EntityFramework's include"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://guides.rubyonrails.org/active_record_querying.html#includes",children:"ActiveRecord's include"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Although the code to return entire objects in queries is simple, the default object format often does not meet development needs very well. It is easy to encounter two problems:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Over fetching problem"}),"\n",(0,i.jsx)(t.p,{children:"Object properties that we don't need are queried, causing waste, especially when there are many object fields."}),"\n",(0,i.jsxs)(t.p,{children:["Take JPA as an example. The returned object by default is a complete object that contains non-associative properties that are not needed. This is a big problem for traditional ORMs ",(0,i.jsxs)(t.em,{children:["(JPA's ",(0,i.jsx)(t.code,{children:"@Basic(fetch = FetchType.LAZY)"})," is designed for LOB column, it cannot be used by any column)"]}),"."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Under fetching problem"}),"\n",(0,i.jsx)(t.p,{children:"The object properties we need have not been fetched and are in an unavailable unloaded state, causing the program to fail to run correctly."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"The object fetcher solves this problem very well by allowing users to specify properties to fetch, and then utilizing the characteristics of dynamic objects to make the returned objects from the query neither over fetched nor under fetched."}),"\n",(0,i.jsx)(t.p,{children:"By using the object fetcher, it is easy to specify the return format of queries, because dynamic objects can describe data structures of any shape. You can decide whether a certain business perspective needs to query some entities, associations, or even every properties."}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(s.$z,{})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},94692:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/medias/java-fetcher-a47c6f710d4cc259e540c4a5909ae021.mp4"},57095:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/medias/kotlin-fetcher-b8ddc7a4ad25644d36d580ac726ec13f.mp4"},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var r=n(96540);const i={},o=r.createContext(i);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);