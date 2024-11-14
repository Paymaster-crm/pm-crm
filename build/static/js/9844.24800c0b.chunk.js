"use strict";(self.webpackChunkpaymaster_crm=self.webpackChunkpaymaster_crm||[]).push([[9844,3557],{3557:(e,s,r)=>{r.r(s),r.d(s,{default:()=>c});var a=r(9950),o=r(9254),t=r(226),n=r(4414);const i=a.lazy((()=>r.e(5569).then(r.bind(r,5569)))),d=(0,o.Ay)(t.A)({backgroundColor:"#111b21",color:"#fff",padding:"8px 20px",cursor:"pointer",boxShadow:"0 0 20px 1px rgba(0, 0, 0, 0.3)",borderRadius:"8px",marginTop:"10px",textTransform:"none",fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),"&:hover":{backgroundColor:"#111b21",boxShadow:"0 0 20px 1px rgba(0, 0, 0, 0.3)"}});function l(e){return(0,n.jsx)(d,{startIcon:e.isSubmitting?(0,n.jsx)(a.Suspense,{fallback:(0,n.jsx)(i,{style:{margin:0,width:20,height:20,marginRight:10,color:"#fff"}}),children:(0,n.jsx)(i,{style:{margin:0,width:20,height:20,marginRight:10,color:"#fff"}})}):null,type:"submit",disableRipple:!0,variant:"contained",disabled:e.isSubmitting,children:e.name})}const c=a.memo(l)},9844:(e,s,r)=>{r.r(s),r.d(s,{default:()=>u});var a=r(9950),o=r(9246),t=r(3939),n=r(4019),i=r(1118),d=r(9714);const l=d.Ik({otp:d.Yj().required("OTP is required").length(6,"OTP must be exactly 6 digits"),password:d.Yj().required("Password is required"),confirmPassword:d.Yj().oneOf([d.KR("password"),null],"Passwords must match").required("Confirm Password is required")});var c=r(3557),m=r(4414);function p(e){(0,a.useEffect)((()=>{!async function(){try{const s=await o.A.post("https://sameer-yadav.online/api/send-forgot-password-otp",{username:e.username},{withCredentials:!0});alert(s.data.message)}catch(s){alert("Failed to send OTP")}}()}),[e.username]);const s=(0,t.Wx)({initialValues:{otp:"",password:"",confirmPassword:""},validationSchema:l,onSubmit:async s=>{try{const r=await o.A.put("https://sameer-yadav.online/api/update-password",{username:e.username,otp:s.otp,password:s.password},{withCredentials:!0});alert(r.data.message),"Password has been successfully reset"===r.data.message&&e.setForgotPassword(!1)}catch(r){r.response&&400===r.response.status?alert(r.response.data.message):alert("An unexpected error occurred. Please try again later.")}}});return(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)("form",{onSubmit:s.handleSubmit,children:[(0,m.jsx)("span",{style:{color:"#0060ae",fontWeight:800,fontSize:"14px"},children:"Enter OTP"}),(0,m.jsx)(n.o,{placeholder:"Enter OTP",value:s.values.otp,onChange:e=>s.setFieldValue("otp",e.value),mask:!0,integerOnly:!0,length:6}),s.touched.otp&&s.errors.otp&&(0,m.jsx)("small",{className:"p-error",children:s.errors.otp}),(0,m.jsx)(i._,{toggleMask:!0,id:"password",name:"password",placeholder:"New Password",value:s.values.password,onChange:s.handleChange,className:s.touched.password&&s.errors.password?"p-invalid":"",feedback:!1}),s.touched.password&&s.errors.password&&(0,m.jsx)("small",{className:"p-error",children:s.errors.password}),(0,m.jsx)(i._,{toggleMask:!0,id:"confirmPassword",name:"confirmPassword",placeholder:"Confirm Password",value:s.values.confirmPassword,onChange:s.handleChange,className:s.touched.confirmPassword&&s.errors.confirmPassword?"p-invalid":"",feedback:!1}),s.touched.confirmPassword&&s.errors.confirmPassword&&(0,m.jsx)("small",{className:"p-error",children:s.errors.confirmPassword}),(0,m.jsx)("br",{}),(0,m.jsx)(c.default,{isSubmitting:s.isSubmitting,name:"Confirm"})]})})}const u=a.memo(p)}}]);