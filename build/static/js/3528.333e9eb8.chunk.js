"use strict";(self.webpackChunkpaymaster_crm=self.webpackChunkpaymaster_crm||[]).push([[3528],{3528:(e,t,s)=>{s.r(t),s.d(t,{default:()=>d});var r=s(9950),c=s(7946),a=s(2917),n=s(936),i=s(3785),o=s(7443),l=s(4414);function u(){const[e,t]=(0,r.useState)([]),[s,u]=(0,r.useState)(!1);(0,r.useEffect)((()=>{!async function(){u(!0);try{const e=await(0,i.A)("/get-hr-activities");t(e.data)}catch(e){console.error(e)}finally{u(!1)}}()}),[]);const d=[{accessorKey:"title",header:"Title"},{accessorKey:"description",header:"Description"},{accessorKey:"date",header:"Date",Cell:e=>{let{cell:t}=e;const s=t.getValue();return s?(e=>{if(!e||"string"!==typeof e)return(0,l.jsx)(a.A,{width:"50%"});const[t,s,r]=e.split("-");return`${r}-${s}-${t}`})(s):""}},{accessorKey:"time",header:"Time"}],h=(0,o.Y)(d),p=(0,n.A)(e,h,s),f=(0,c.Up)({...p});return(0,l.jsx)("div",{children:(0,l.jsx)(c.zp,{table:f})})}const d=r.memo(u)}}]);