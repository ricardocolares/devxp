"use strict";(self.webpackChunkpayload_blog_typescript=self.webpackChunkpayload_blog_typescript||[]).push([[860],{63860:(e,l,a)=>{a.r(l),a.d(l,{default:()=>h});var t=a(67294),o=a(9980),s=a(28630),n=a(75091),r=a(2143),i=a(5977),c=a(28584),d=a(77329);a(86456);const m="card",u=e=>{const{id:l,title:a,actions:o,onClick:s}=e,n=[m,l,s&&`${m}--has-onclick`].filter(Boolean).join(" ");return t.createElement("div",{className:n,id:l},t.createElement("h5",null,a),o&&t.createElement("div",{className:`${m}__actions`},o),s&&t.createElement(d.Z,{className:`${m}__click`,buttonStyle:"none",onClick:s}))};var v=a(69850);a(75634);const p="dashboard",b=e=>{const{collections:l,globals:a,permissions:s}=e,{push:n}=(0,i.k6)(),{routes:{admin:r},admin:{components:{afterDashboard:m,beforeDashboard:b}}}=(0,o.Z)();return t.createElement("div",{className:p},t.createElement(c.Z,null),t.createElement(v.T,{className:"dashboard__wrap"},Array.isArray(b)&&b.map(((e,l)=>t.createElement(e,{key:l}))),t.createElement("h2",{className:"dashboard__label"},"Collections"),t.createElement("ul",{className:"dashboard__card-list"},l.map((e=>{var l,a,o;const i=null===(o=null===(a=null===(l=null==s?void 0:s.collections)||void 0===l?void 0:l[e.slug])||void 0===a?void 0:a.create)||void 0===o?void 0:o.permission;return t.createElement("li",{key:e.slug},t.createElement(u,{title:e.labels.plural,id:`card-${e.slug}`,onClick:()=>n({pathname:`${r}/collections/${e.slug}`}),actions:i?t.createElement(d.Z,{el:"link",to:`${r}/collections/${e.slug}/create`,icon:"plus",round:!0,buttonStyle:"icon-label",iconStyle:"with-border"}):void 0}))}))),a.length>0&&t.createElement(t.Fragment,null,t.createElement("h2",{className:"dashboard__label"},"Globals"),t.createElement("ul",{className:"dashboard__card-list"},a.map((e=>t.createElement("li",{key:e.slug},t.createElement(u,{title:e.label,onClick:()=>n({pathname:`${r}/globals/${e.slug}`})})))))),Array.isArray(m)&&m.map(((e,l)=>t.createElement(e,{key:l})))))},h=()=>{const{permissions:e}=(0,s.a)(),{setStepNav:l}=(0,n.FP)(),[a,i]=(0,t.useState)([]),{collections:c,globals:d,admin:{components:{views:{Dashboard:m}={Dashboard:void 0}}={}}={}}=(0,o.Z)();return(0,t.useEffect)((()=>{i(d.filter((l=>{var a,t,o;return null===(o=null===(t=null===(a=null==e?void 0:e.globals)||void 0===a?void 0:a[l.slug])||void 0===t?void 0:t.read)||void 0===o?void 0:o.permission})))}),[e,d]),(0,t.useEffect)((()=>{l([])}),[l]),t.createElement(r.Z,{DefaultComponent:b,CustomComponent:m,componentProps:{globals:a,collections:c.filter((l=>{var a,t,o;return null===(o=null===(t=null===(a=null==e?void 0:e.collections)||void 0===a?void 0:a[l.slug])||void 0===t?void 0:t.read)||void 0===o?void 0:o.permission})),permissions:e}})}}}]);