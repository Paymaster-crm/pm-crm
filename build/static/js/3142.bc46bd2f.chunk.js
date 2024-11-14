"use strict";(self.webpackChunkpaymaster_crm=self.webpackChunkpaymaster_crm||[]).push([[3142],{3142:(e,s,r)=>{r.r(s),r.d(s,{default:()=>y});var l=r(9950),i=r(3939),o=r(6781),d=r(8459),n=r(9246),a=r(2436),t=r(8785),u=r(7256),c=r(9714);const m=c.Ik({skill:c.Yj().required("This field is required"),company_policy_visited:c.Yj().required("This field is required"),introduction_with_md:c.Yj().required("This field is required"),employee_photo:c.Yj().required("This field is required"),resume:c.Yj().required("This field is required"),address_proof:c.Yj().required("This field is required")});var h=r(4414);const p=(0,l.lazy)((()=>Promise.resolve().then(r.bind(r,3557)))),j=(0,l.lazy)((()=>Promise.resolve().then(r.bind(r,1407)))),x=(0,l.lazy)((()=>Promise.resolve().then(r.bind(r,6888))));function f(){const{user:e}=(0,l.useContext)(a.R),[s,r]=(0,l.useState)(!1),c=(0,l.useRef)({employeePhoto:null,resume:null,addressProof:null}),f=(0,i.Wx)({initialValues:{skill:"",company_policy_visited:"",introduction_with_md:"",employee_photo:"",resume:"",address_proof:""},validationSchema:m,onSubmit:async(s,r)=>{let{resetForm:l}=r;try{const r=await n.A.post("https://sameer-yadav.online/api/complete-onboarding",{...s,username:e.username},{withCredentials:!0});alert(r.data.message),l()}catch(i){console.error("Error occurred while completing onboarding:",i)}}}),y=[e.first_name,e.middle_name,e.last_name].filter(Boolean).join(" ");return(0,h.jsxs)("form",{onSubmit:f.handleSubmit,children:["Name:\xa0",y,(0,h.jsx)("br",{}),"Email:\xa0",e.email,(0,h.jsx)("br",{}),"Employment Type:\xa0",e.employment_type,(0,h.jsx)("br",{}),(0,h.jsxs)(o.default,{children:[(0,h.jsx)(d.default,{xs:4,children:(0,h.jsx)(l.Suspense,{fallback:(0,h.jsx)("div",{children:"Loading Skill field..."}),children:(0,h.jsx)(x,{id:"skill",name:"skill",label:"Skill",formik:f})})}),(0,h.jsx)(d.default,{xs:4,children:(0,h.jsx)(l.Suspense,{fallback:(0,h.jsx)("div",{children:"Loading Company Policy field..."}),children:(0,h.jsx)(x,{id:"company_policy_visited",name:"company_policy_visited",label:"Gone through company policy?",formik:f,select:!0,options:[{value:"Yes",label:"Yes"},{value:"No",label:"No"}]})})})]}),(0,h.jsx)("br",{}),(0,h.jsxs)(o.default,{children:[(0,h.jsxs)(d.default,{children:[(0,h.jsx)(l.Suspense,{fallback:(0,h.jsx)("div",{children:"Loading Upload Button..."}),children:(0,h.jsx)(j,{name:"Employee Photo",onChange:e=>{(0,u.i)(e,"employee_photo","kyc",f,r,!1)},ref:e=>c.current.employeePhoto=e})}),(0,h.jsx)("br",{}),""!==f.values.employee_photo?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("br",{}),(0,h.jsx)("a",{href:f.values.employee_photo,children:f.values.employee_photo})]}):""]}),(0,h.jsxs)(d.default,{children:[(0,h.jsx)(l.Suspense,{fallback:(0,h.jsx)("div",{children:"Loading Upload Button..."}),children:(0,h.jsx)(j,{name:"Resume",onChange:e=>(0,u.i)(e,"resume","kyc",f,r,!1),ref:e=>c.current.resume=e})}),(0,h.jsx)("br",{}),f.touched.resume&&f.errors.resume?(0,h.jsx)("div",{style:{color:"#D32F2F"},children:f.errors.resume}):null,""!==f.values.resume?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("br",{}),(0,h.jsx)("a",{href:f.values.resume,children:f.values.resume})]}):""]}),(0,h.jsxs)(d.default,{children:[(0,h.jsx)(l.Suspense,{fallback:(0,h.jsx)("div",{children:"Loading Upload Button..."}),children:(0,h.jsx)(j,{name:"Address Proof",onChange:e=>(0,u.i)(e,"address_proof","kyc",f,r,!1),ref:e=>c.current.addressProof=e})}),(0,h.jsx)("br",{}),f.touched.address_proof&&f.errors.address_proof?(0,h.jsx)("div",{style:{color:"#D32F2F"},children:f.errors.address_proof}):null,""!==f.values.address_proof?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("br",{}),(0,h.jsx)("a",{href:f.values.address_proof,children:f.values.address_proof})]}):""]})]}),(0,h.jsx)("br",{}),(0,h.jsx)(l.Suspense,{fallback:(0,h.jsx)("div",{children:"Loading Submit Button..."}),children:(0,h.jsx)(p,{name:"Submit",isSubmitting:f.isSubmitting})}),(0,h.jsx)(t.A,{open:s,message:"File uploaded successfully!",sx:{left:"auto !important",right:"24px !important"}})]})}const y=l.memo(f)}}]);