"use strict";(self.webpackChunkpaymaster_crm=self.webpackChunkpaymaster_crm||[]).push([[4193],{3557:(e,o,s)=>{s.d(o,{A:()=>u});var a=s(9950),r=s(9254),n=s(226),t=s(6639),i=s(5112),l=s(4414);const d={margin:0,width:20,height:20,marginRight:10,color:"#fff"};function c(e){const{theme:o}=a.useContext(i.D),s=(0,r.Ay)(n.A)({backgroundColor:"light"===o?"#111b21":"#0c3f61",color:"#fff",padding:"8px 20px",cursor:"pointer",boxShadow:"0 0 20px 1px rgba(0, 0, 0, 0.3)",borderRadius:"8px",marginTop:"10px",textTransform:"none",fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),"&:hover":{backgroundColor:"light"===o?"#111b21":"#0c3f61",boxShadow:"0 0 20px 1px rgba(0, 0, 0, 0.3)"}});return(0,l.jsx)(s,{startIcon:e.isSubmitting?(0,l.jsx)(a.Suspense,{fallback:(0,l.jsx)(t.A,{style:d}),children:(0,l.jsx)(t.A,{style:d})}):null,type:"submit",disableRipple:!0,variant:"contained",disabled:e.isSubmitting,children:e.name})}const u=a.memo(c)},4193:(e,o,s)=>{s.r(o),s.d(o,{default:()=>h});var a=s(9950),r=s(3939),n=s(2436),t=s(9714);const i=(e,o)=>t.Ik({password:o?t.Yj().notRequired():t.Yj().required("Password is required"),twoFAToken:e&&!o?t.Yj().required("2FA token is required"):t.Yj().notRequired(),backupCode:o?t.Yj().required("Backup code is required").length(8,"Backup code must be exactly 8 characters long"):t.Yj().notRequired()});var l=s(4019),d=s(6106),c=s(3557),u=s(9845),p=s(3785),m=s(4414);function g(e){const{setUser:o}=(0,a.useContext)(n.R),[t,g]=(0,a.useState)(!1),h=(0,a.useRef)(null),{setAlert:b}=(0,a.useContext)(u.C),k=(0,r.Wx)({initialValues:{username:e.username,password:"",twoFAToken:"",backupCode:""},validationSchema:i(e.isTwoFactorEnabled,t),onSubmit:async a=>{const{getGeolocation:r}=await s.e(2986).then(s.bind(s,2986)),n=await r(b);if(n)try{const s=await p.A.post("/login",{username:a.username,password:a.password,twoFAToken:t?"":a.twoFAToken,backupCode:t?a.backupCode:"",userAgent:navigator.userAgent,geolocation:n,isTwoFactorEnabled:e.isTwoFactorEnabled,useBackupCode:t});"Login successful"===s.data.message?o(s.data.user):(b({open:!0,message:s.data.message,severity:"error"}),k.setFieldValue("twoFAToken",""),k.setFieldValue("backupCode",""))}catch(i){b({open:!0,message:i.response.data.message,severity:"error"})}}});return(0,a.useEffect)((()=>{var e;null===(e=h.current)||void 0===e||e.focus()}),[]),(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)("form",{className:"login-form",onSubmit:k.handleSubmit,children:[!t&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(d._,{ref:h,toggleMask:!0,id:"password",name:"password",placeholder:"Password",value:k.values.password,onChange:k.handleChange,feedback:!1,className:k.touched.password&&k.errors.password?"p-invalid":""}),k.touched.password&&k.errors.password&&(0,m.jsx)("small",{className:"p-error",children:k.errors.password})]}),e.isTwoFactorEnabled&&(0,m.jsxs)("div",{children:[t?(0,m.jsx)("span",{children:"Enter Backup Code"}):(0,m.jsx)("span",{children:"Enter Google Authenticator token"}),!t&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(l.o,{placeholder:"Enter 6-digit code",value:k.values.twoFAToken,onChange:e=>k.setFieldValue("twoFAToken",e.value),mask:!0,integerOnly:!0,length:6}),k.touched.twoFAToken&&k.errors.twoFAToken&&(0,m.jsx)("small",{className:"p-error",children:k.errors.twoFAToken})]}),t&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(l.o,{placeholder:"Enter Backup Code",value:k.values.backupCode,onChange:e=>k.setFieldValue("backupCode",e.value),mask:!0,length:8}),k.touched.backupCode&&k.errors.backupCode&&(0,m.jsx)("small",{className:"p-error",children:k.errors.backupCode})]}),(0,m.jsx)("span",{onClick:()=>g(!t),style:{cursor:"pointer",color:"#0060ae",fontWeight:"bold",marginTop:"16px"},children:t?"Use Google Authenticator":"Use Backup Code"})]}),(0,m.jsx)("div",{style:{marginTop:16},children:(0,m.jsx)(c.A,{isSubmitting:k.isSubmitting,name:"Login"})})]})})}const h=a.memo(g)}}]);