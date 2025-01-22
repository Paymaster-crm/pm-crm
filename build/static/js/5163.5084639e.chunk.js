"use strict";(self.webpackChunkpaymaster_crm=self.webpackChunkpaymaster_crm||[]).push([[5163],{5163:(e,s,o)=>{o.r(s),o.d(s,{default:()=>m});var i=o(9950),n=o(3939),a=o(3557),r=o(6888),t=o(3632),l=o(9845),_=o(3785),u=o(8394),c=o(4414);function d(){const{setAlert:e}=(0,i.useContext)(l.C),s=(0,n.Wx)({initialValues:{overall_job_satisfaction:0,clarity_of_job_duties:0,opportunity_to_utilize_skills:0,workload_and_stress_management:0,resources_and_tools_provided:0,quality_of_communication:"",support_from_manager:"",appreciation_for_work:"",collaboration_within_the_team:"",overall_company_culture:"",opportunities_for_professional_development:0,effectiveness_of_training_programs_provided:0,support_for_continuing_education:0,suggestions:""},onSubmit:async(s,o)=>{let{resetForm:i}=o;try{const o=await _.A.post("/add-exit-feedback",s);e({open:!0,message:o.data.message,severity:"success"}),i()}catch(n){e({open:!0,message:"Network Error"===n.message?"Network Error, your details will be submitted when you are back online":n.response.data.message,severity:"error"})}}});return(0,c.jsxs)("form",{onSubmit:s.handleSubmit,children:[(0,c.jsx)("h5",{children:"Job Role Satisfaction"}),(0,c.jsxs)(u.A,{container:!0,children:[(0,c.jsxs)(u.A,{size:4,children:["Overall job satisfaction",(0,c.jsx)("br",{}),(0,c.jsx)(t.A,{name:"overall_job_satisfaction",value:s.values.overall_job_satisfaction,onChange:(e,o)=>{s.setFieldValue("overall_job_satisfaction",o)}})]}),(0,c.jsxs)(u.A,{size:4,children:["Clarity of job duties",(0,c.jsx)("br",{}),(0,c.jsx)(t.A,{name:"clarity_of_job_duties",value:s.values.clarity_of_job_duties,onChange:(e,o)=>{s.setFieldValue("clarity_of_job_duties",o)}})]}),(0,c.jsxs)(u.A,{size:4,children:["Opportunity to utilize skills",(0,c.jsx)("br",{}),(0,c.jsx)(t.A,{name:"opportunity_to_utilize_skills",value:s.values.opportunity_to_utilize_skills,onChange:(e,o)=>{s.setFieldValue("opportunity_to_utilize_skills",o)}})]})]}),(0,c.jsxs)(u.A,{container:!0,children:[(0,c.jsxs)(u.A,{size:4,children:["Workload and stress management ",(0,c.jsx)("br",{}),(0,c.jsx)(t.A,{name:"workload_and_stress_management",value:s.values.workload_and_stress_management,onChange:(e,o)=>{s.setFieldValue("workload_and_stress_management",o)}})]}),(0,c.jsxs)(u.A,{size:4,children:["Resources and tools provided ",(0,c.jsx)("br",{}),(0,c.jsx)(t.A,{name:"resources_and_tools_provided",value:s.values.resources_and_tools_provided,onChange:(e,o)=>{s.setFieldValue("resources_and_tools_provided",o)}})]})]}),(0,c.jsx)("br",{}),(0,c.jsx)("h5",{children:"Management & Team Environment"}),(0,c.jsxs)(u.A,{container:!0,children:[(0,c.jsx)(u.A,{size:4,children:(0,c.jsx)(r.A,{id:"quality_of_communication",name:"quality_of_communication",label:"Quality of communication",formik:s,useSpeech:!0})}),(0,c.jsx)(u.A,{size:4,children:(0,c.jsx)(r.A,{id:"support_from_manager",name:"support_from_manager",label:"Support from manager",formik:s,useSpeech:!0})}),(0,c.jsx)(u.A,{size:4,children:(0,c.jsx)(r.A,{id:"appreciation_for_work",name:"appreciation_for_work",label:"Appreciation for work",formik:s,useSpeech:!0})})]}),(0,c.jsxs)(u.A,{container:!0,children:[(0,c.jsx)(u.A,{size:4,children:(0,c.jsx)(r.A,{id:"collaboration_within_the_team",name:"collaboration_within_the_team",label:"Collaboration within the team",formik:s,useSpeech:!0})}),(0,c.jsx)(u.A,{size:4,children:(0,c.jsx)(r.A,{id:"overall_company_culture",name:"overall_company_culture",label:"Overall company culture",formik:s,useSpeech:!0})})]}),(0,c.jsx)("br",{}),(0,c.jsx)("h5",{children:"Training & Development"}),(0,c.jsxs)(u.A,{container:!0,children:[(0,c.jsxs)(u.A,{size:4,children:["Opportunities for professional development",(0,c.jsx)("br",{}),(0,c.jsx)(t.A,{name:"opportunities_for_professional_development",value:s.values.opportunities_for_professional_development,onChange:(e,o)=>{s.setFieldValue("opportunities_for_professional_development",o)}})]}),(0,c.jsxs)(u.A,{size:4,children:["Effectiveness of training programs provided",(0,c.jsx)("br",{}),(0,c.jsx)(t.A,{name:"effectiveness_of_training_programs_provided",value:s.values.effectiveness_of_training_programs_provided,onChange:(e,o)=>{s.setFieldValue("effectiveness_of_training_programs_provided",o)}})]}),(0,c.jsxs)(u.A,{size:4,children:["Support for continuing education",(0,c.jsx)("br",{}),(0,c.jsx)(t.A,{name:"support_for_continuing_education",value:s.values.support_for_continuing_education,onChange:(e,o)=>{s.setFieldValue("support_for_continuing_education",o)}})]})]}),(0,c.jsx)(r.A,{id:"suggestions",name:"suggestions",label:"Suggestions for improvement",formik:s,multiline:!0,rows:2,useSpeech:!0}),(0,c.jsx)(a.A,{name:"Submit",isSubmitting:s.isSubmitting})]})}const m=i.memo(d)}}]);