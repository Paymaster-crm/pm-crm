"use strict";(self.webpackChunkpaymaster_crm=self.webpackChunkpaymaster_crm||[]).push([[9844],{3557:(e,s,r)=>{r.d(s,{A:()=>m});var a=r(9950),o=r(9254),t=r(226),n=r(6639),i=r(5112),d=r(4414);const l={margin:0,width:20,height:20,marginRight:10,color:"#fff"};function c(e){const{theme:s}=a.useContext(i.D),r=(0,o.Ay)(t.A)({backgroundColor:"light"===s?"#111b21":"#0c3f61",color:"#fff",padding:"8px 20px",cursor:"pointer",boxShadow:"0 0 20px 1px rgba(0, 0, 0, 0.3)",borderRadius:"8px",marginTop:"10px",textTransform:"none",fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),"&:hover":{backgroundColor:"light"===s?"#111b21":"#0c3f61",boxShadow:"0 0 20px 1px rgba(0, 0, 0, 0.3)"}});return(0,d.jsx)(r,{startIcon:e.isSubmitting?(0,d.jsx)(a.Suspense,{fallback:(0,d.jsx)(n.A,{style:l}),children:(0,d.jsx)(n.A,{style:l})}):null,type:"submit",disableRipple:!0,variant:"contained",disabled:e.isSubmitting,children:e.name})}const m=a.memo(c)},9844:(e,s,r)=>{r.r(s),r.d(s,{default:()=>g});var a=r(9950),o=r(3939),t=r(4019),n=r(6106),i=r(9714);const d=i.Ik({otp:i.Yj().required("OTP is required").length(6,"OTP must be exactly 6 digits"),password:i.Yj().required("Password is required"),confirmPassword:i.Yj().oneOf([i.KR("password"),null],"Passwords must match").required("Confirm Password is required")});var l=r(3557),c=r(9845),m=r(3785),p=r(4414);function u(e){const{setAlert:s}=(0,a.useContext)(c.C);(0,a.useEffect)((()=>{!async function(){try{const r=await m.A.post("/send-forgot-password-otp",{username:e.username});s({open:!0,message:r.data.message,severity:"success"})}catch(r){s({open:!0,message:r.response.data.message,severity:"error"})}}()}),[e.username]);const r=(0,o.Wx)({initialValues:{otp:"",password:"",confirmPassword:""},validationSchema:d,onSubmit:async r=>{try{const a=await m.A.put("/update-password",{username:e.username,otp:r.otp,password:r.password});s({open:!0,message:a.data.message,severity:"success"}),"Password has been successfully reset"===a.data.message&&e.setForgotPassword(!1)}catch(a){a.response&&400===a.response.status?s({open:!0,message:a.response.data.message,severity:"error"}):s({open:!0,message:"An unexpected error occurred. Please try again later.",severity:"error"})}}});return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)("form",{onSubmit:r.handleSubmit,children:[(0,p.jsx)("span",{style:{color:"#0060ae",fontWeight:800,fontSize:"14px"},children:"Enter OTP"}),(0,p.jsx)(t.o,{placeholder:"Enter OTP",value:r.values.otp,onChange:e=>r.setFieldValue("otp",e.value),mask:!0,integerOnly:!0,length:6}),r.touched.otp&&r.errors.otp&&(0,p.jsx)("small",{className:"p-error",children:r.errors.otp}),(0,p.jsx)(n._,{toggleMask:!0,id:"password",name:"password",placeholder:"New Password",value:r.values.password,onChange:r.handleChange,className:r.touched.password&&r.errors.password?"p-invalid":"",feedback:!1}),r.touched.password&&r.errors.password&&(0,p.jsx)("small",{className:"p-error",children:r.errors.password}),(0,p.jsx)(n._,{toggleMask:!0,id:"confirmPassword",name:"confirmPassword",placeholder:"Confirm Password",value:r.values.confirmPassword,onChange:r.handleChange,className:r.touched.confirmPassword&&r.errors.confirmPassword?"p-invalid":"",feedback:!1}),r.touched.confirmPassword&&r.errors.confirmPassword&&(0,p.jsx)("small",{className:"p-error",children:r.errors.confirmPassword}),(0,p.jsx)("br",{}),(0,p.jsx)(l.A,{isSubmitting:r.isSubmitting,name:"Confirm"})]})})}const g=a.memo(u)}}]);