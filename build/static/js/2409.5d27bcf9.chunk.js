"use strict";(self.webpackChunkpaymaster_crm=self.webpackChunkpaymaster_crm||[]).push([[2409],{2409:(e,i,a)=>{a.r(i),a.d(i,{default:()=>x});var l=a(9950),n=a(3939),s=a(6781),d=a(8459),r=a(9246),t=a(9714);const m=t.Ik({first_name:t.Yj().required("This field is required"),last_name:t.Yj().required("This field is required"),email:t.Yj().required("This field is required"),employment_type:t.Yj().required("This field is required")});var o=a(4414);const c=(0,l.lazy)((()=>a.e(3557).then(a.bind(a,3557)))),u=(0,l.lazy)((()=>a.e(6888).then(a.bind(a,6888))));function h(){const e=(0,n.Wx)({initialValues:{first_name:"",middle_name:"",last_name:"",email:"",employment_type:""},validationSchema:m,onSubmit:async(e,i)=>{let{resetForm:a}=i;try{const i=await r.A.post("https://sameer-yadav.online/api/onboard-employee",e,{withCredentials:!0});alert(i.data.message),a()}catch(l){console.error("Error occurred while onboarding employee:",l)}}});return(0,o.jsxs)("form",{onSubmit:e.handleSubmit,children:[(0,o.jsxs)(s.default,{children:[(0,o.jsx)(d.default,{xs:4,children:(0,o.jsx)(l.Suspense,{fallback:(0,o.jsx)("div",{children:"Loading First Name Field..."}),children:(0,o.jsx)(u,{id:"first_name",name:"first_name",label:"First Name",formik:e})})}),(0,o.jsx)(d.default,{xs:4,children:(0,o.jsx)(l.Suspense,{fallback:(0,o.jsx)("div",{children:"Loading Middle Name Field..."}),children:(0,o.jsx)(u,{id:"middle_name",name:"middle_name",label:"Middle Name",formik:e})})}),(0,o.jsx)(d.default,{xs:4,children:(0,o.jsx)(l.Suspense,{fallback:(0,o.jsx)("div",{children:"Loading Last Name Field..."}),children:(0,o.jsx)(u,{id:"last_name",name:"last_name",label:"Last Name",formik:e})})})]}),(0,o.jsxs)(s.default,{children:[(0,o.jsx)(d.default,{xs:4,children:(0,o.jsx)(l.Suspense,{fallback:(0,o.jsx)("div",{children:"Loading Email Field..."}),children:(0,o.jsx)(u,{id:"email",name:"email",label:"Email",formik:e})})}),(0,o.jsx)(d.default,{xs:4,children:(0,o.jsx)(l.Suspense,{fallback:(0,o.jsx)("div",{children:"Loading Employment Type Field..."}),children:(0,o.jsx)(u,{id:"employment_type",name:"employment_type",label:"Employment Type",formik:e,select:!0,options:[{value:"Internship",label:"Internship"},{value:"Probation",label:"Probation"},{value:"Permanent",label:"Permanent"}]})})})]}),(0,o.jsx)(l.Suspense,{fallback:(0,o.jsx)("div",{children:"Loading Submit Button..."}),children:(0,o.jsx)(c,{name:"Submit",isSubmitting:e.isSubmitting})})]})}const x=l.memo(h)}}]);