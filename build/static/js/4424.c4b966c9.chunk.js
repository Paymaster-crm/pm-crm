"use strict";(self.webpackChunkpaymaster_crm=self.webpackChunkpaymaster_crm||[]).push([[4424],{4424:(e,t,r)=>{r.r(t),r.d(t,{default:()=>K});var n=r(9950),a=r(2004),o=r(3505),i=r(237),s=r(8465),l=r(9254),c=r(8463),d=r(4857);const u=n.createContext();var p=r(1763),m=r(423);function v(e){return(0,m.Ay)("MuiGrid",e)}const g=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],h=(0,p.A)("MuiGrid",["root","container","item","zeroMinWidth",...[0,1,2,3,4,5,6,7,8,9,10].map((e=>`spacing-xs-${e}`)),...["column-reverse","column","row-reverse","row"].map((e=>`direction-xs-${e}`)),...["nowrap","wrap-reverse","wrap"].map((e=>`wrap-xs-${e}`)),...g.map((e=>`grid-xs-${e}`)),...g.map((e=>`grid-sm-${e}`)),...g.map((e=>`grid-md-${e}`)),...g.map((e=>`grid-lg-${e}`)),...g.map((e=>`grid-xl-${e}`))]);var f=r(4414);function b(e){let{breakpoints:t,values:r}=e,n="";Object.keys(r).forEach((e=>{""===n&&0!==r[e]&&(n=e)}));const a=Object.keys(t).sort(((e,r)=>t[e]-t[r]));return a.slice(0,a.indexOf(n))}const x=(0,l.Ay)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e,{container:n,direction:a,item:o,spacing:i,wrap:s,zeroMinWidth:l,breakpoints:c}=r;let d=[];n&&(d=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!e||e<=0)return[];if("string"===typeof e&&!Number.isNaN(Number(e))||"number"===typeof e)return[r[`spacing-xs-${String(e)}`]];const n=[];return t.forEach((t=>{const a=e[t];Number(a)>0&&n.push(r[`spacing-${t}-${String(a)}`])})),n}(i,c,t));const u=[];return c.forEach((e=>{const n=r[e];n&&u.push(t[`grid-${e}-${String(n)}`])})),[t.root,n&&t.container,o&&t.item,l&&t.zeroMinWidth,...d,"row"!==a&&t[`direction-xs-${String(a)}`],"wrap"!==s&&t[`wrap-xs-${String(s)}`],...u]}})((e=>{let{ownerState:t}=e;return{boxSizing:"border-box",...t.container&&{display:"flex",flexWrap:"wrap",width:"100%"},...t.item&&{margin:0},...t.zeroMinWidth&&{minWidth:0},..."wrap"!==t.wrap&&{flexWrap:t.wrap}}}),(function(e){let{theme:t,ownerState:r}=e;const n=(0,o.kW)({values:r.direction,breakpoints:t.breakpoints.values});return(0,o.NI)({theme:t},n,(e=>{const t={flexDirection:e};return e.startsWith("column")&&(t[`& > .${h.item}`]={maxWidth:"none"}),t}))}),(function(e){let{theme:t,ownerState:r}=e;const{container:n,rowSpacing:a}=r;let i={};if(n&&0!==a){const e=(0,o.kW)({values:a,breakpoints:t.breakpoints.values});let r;"object"===typeof e&&(r=b({breakpoints:t.breakpoints.values,values:e})),i=(0,o.NI)({theme:t},e,((e,n)=>{const a=t.spacing(e);return"0px"!==a?{marginTop:`calc(-1 * ${a})`,[`& > .${h.item}`]:{paddingTop:a}}:r?.includes(n)?{}:{marginTop:0,[`& > .${h.item}`]:{paddingTop:0}}}))}return i}),(function(e){let{theme:t,ownerState:r}=e;const{container:n,columnSpacing:a}=r;let i={};if(n&&0!==a){const e=(0,o.kW)({values:a,breakpoints:t.breakpoints.values});let r;"object"===typeof e&&(r=b({breakpoints:t.breakpoints.values,values:e})),i=(0,o.NI)({theme:t},e,((e,n)=>{const a=t.spacing(e);if("0px"!==a){return{width:`calc(100% + ${a})`,marginLeft:`calc(-1 * ${a})`,[`& > .${h.item}`]:{paddingLeft:a}}}return r?.includes(n)?{}:{width:"100%",marginLeft:0,[`& > .${h.item}`]:{paddingLeft:0}}}))}return i}),(function(e){let t,{theme:r,ownerState:n}=e;return r.breakpoints.keys.reduce(((e,a)=>{let i={};if(n[a]&&(t=n[a]),!t)return e;if(!0===t)i={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===t)i={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const s=(0,o.kW)({values:n.columns,breakpoints:r.breakpoints.values}),l="object"===typeof s?s[a]:s;if(void 0===l||null===l)return e;const c=Math.round(t/l*1e8)/1e6+"%";let d={};if(n.container&&n.item&&0!==n.columnSpacing){const e=r.spacing(n.columnSpacing);if("0px"!==e){const t=`calc(${c} + ${e})`;d={flexBasis:t,maxWidth:t}}}i={flexBasis:c,flexGrow:0,maxWidth:c,...d}}return 0===r.breakpoints.values[a]?Object.assign(e,i):e[r.breakpoints.up(a)]=i,e}),{})}));const y=e=>{const{classes:t,container:r,direction:n,item:a,spacing:o,wrap:i,zeroMinWidth:l,breakpoints:c}=e;let d=[];r&&(d=function(e,t){if(!e||e<=0)return[];if("string"===typeof e&&!Number.isNaN(Number(e))||"number"===typeof e)return[`spacing-xs-${String(e)}`];const r=[];return t.forEach((t=>{const n=e[t];if(Number(n)>0){const e=`spacing-${t}-${String(n)}`;r.push(e)}})),r}(o,c));const u=[];c.forEach((t=>{const r=e[t];r&&u.push(`grid-${t}-${String(r)}`)}));const p={root:["root",r&&"container",a&&"item",l&&"zeroMinWidth",...d,"row"!==n&&`direction-xs-${String(n)}`,"wrap"!==i&&`wrap-xs-${String(i)}`,...u]};return(0,s.A)(p,v,t)},w=n.forwardRef((function(e,t){const r=(0,c.b)({props:e,name:"MuiGrid"}),{breakpoints:o}=(0,d.A)(),s=(0,i.A)(r),{className:l,columns:p,columnSpacing:m,component:v="div",container:g=!1,direction:h="row",item:b=!1,rowSpacing:w,spacing:A=0,wrap:$="wrap",zeroMinWidth:k=!1,...S}=s,C=w||A,j=m||A,N=n.useContext(u),M=g?p||12:N,W={},R={...S};o.keys.forEach((e=>{null!=S[e]&&(W[e]=S[e],delete R[e])}));const O={...s,columns:M,container:g,direction:h,item:b,rowSpacing:C,columnSpacing:j,wrap:$,zeroMinWidth:k,spacing:A,...W,breakpoints:o.keys},I=y(O);return(0,f.jsx)(u.Provider,{value:M,children:(0,f.jsx)(x,{ownerState:O,className:(0,a.A)(I.root,l),as:v,ref:t,...R})})}));const A=w;var $=r(249),k=r(693);function S(e){return(0,m.Ay)("MuiCard",e)}(0,p.A)("MuiCard",["root"]);const C=(0,l.Ay)(k.A,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})({overflow:"hidden"}),j=n.forwardRef((function(e,t){const r=(0,c.b)({props:e,name:"MuiCard"}),{className:n,raised:o=!1,...i}=r,l={...r,raised:o},d=(e=>{const{classes:t}=e;return(0,s.A)({root:["root"]},S,t)})(l);return(0,f.jsx)(C,{className:(0,a.A)(d.root,n),elevation:o?8:void 0,ref:t,ownerState:l,...i})}));var N=r(7569),M=r(7233);function W(e){return(0,m.Ay)("MuiCardHeader",e)}const R=(0,p.A)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),O=(0,l.Ay)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(e,t)=>[{[`& .${R.title}`]:t.title},{[`& .${R.subheader}`]:t.subheader},t.root]})({display:"flex",alignItems:"center",padding:16}),I=(0,l.Ay)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(e,t)=>t.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),G=(0,l.Ay)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(e,t)=>t.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),T=(0,l.Ay)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(e,t)=>t.content})({flex:"1 1 auto",[`.${N.A.root}:where(& .${R.title})`]:{display:"block"},[`.${N.A.root}:where(& .${R.subheader})`]:{display:"block"}}),z=n.forwardRef((function(e,t){const r=(0,c.b)({props:e,name:"MuiCardHeader"}),{action:n,avatar:o,className:i,component:l="div",disableTypography:d=!1,subheader:u,subheaderTypographyProps:p,title:m,titleTypographyProps:v,...g}=r,h={...r,component:l,disableTypography:d},b=(e=>{const{classes:t}=e;return(0,s.A)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},W,t)})(h);let x=m;null==x||x.type===M.A||d||(x=(0,f.jsx)(M.A,{variant:o?"body2":"h5",className:b.title,component:"span",...v,children:x}));let y=u;return null==y||y.type===M.A||d||(y=(0,f.jsx)(M.A,{variant:o?"body2":"body1",className:b.subheader,color:"textSecondary",component:"span",...p,children:y})),(0,f.jsxs)(O,{className:(0,a.A)(b.root,i),as:l,ref:t,ownerState:h,...g,children:[o&&(0,f.jsx)(I,{className:b.avatar,ownerState:h,children:o}),(0,f.jsxs)(T,{className:b.content,ownerState:h,children:[x,y]}),n&&(0,f.jsx)(G,{className:b.action,ownerState:h,children:n})]})}));var B=r(7357),E=r(3563),H=r(4195),L=r(3038),P=r(226),U=r(4745),V=r(3987),F=r(2436),X=r(3785),D=r(9845);function _(e,t){return e.filter((e=>-1===t.indexOf(e)))}function Y(e,t){return e.filter((e=>-1!==t.indexOf(e)))}function q(e,t){return[...e,..._(t,e)]}function J(e){const[t,a]=(0,n.useState)([]),[o,i]=(0,n.useState)([]),{user:s}=(0,n.useContext)(F.R),{setAlert:l}=(0,n.useContext)(D.C),c=(0,V.A)(s),d=c.filter((e=>!e.canBeAssigned)).map((e=>e.name)),u=c.map((e=>e.name)).filter((e=>!d.includes(e)));(0,n.useEffect)((()=>{!async function(){if(e.selectedUser)try{const t=await(0,X.A)(`/get-user-modules/${e.selectedUser}`);i(t.data.modules),v(u.filter((e=>{var r;return!(null!==(r=t.data.modules)&&void 0!==r&&r.includes(e))})))}catch(t){console.error("Error occurred while fetching user modules:",t)}else v([]),i([])}()}),[e.selectedUser]);const p=u.sort().filter((e=>null===o||void 0===o?void 0:o.includes(e))),[m,v]=(0,n.useState)(p),g=Y(t,m),h=Y(t,o),b=e=>async()=>{const{handleToggle:n}=await r.e(7159).then(r.bind(r,7159));n(e,t,a)},x=e=>{var r;return null===(r=Y(t,e))||void 0===r?void 0:r.length},y=e=>async()=>{const{handleToggleAll:n}=await r.e(8712).then(r.bind(r,8712));n(e,q,x,_,t,a)},w=(e,r)=>(0,f.jsxs)(j,{children:[(0,f.jsx)(z,{sx:{px:2},avatar:(0,f.jsx)(L.A,{onClick:y(r),checked:x(r)===(null===r||void 0===r?void 0:r.length)&&0!==(null===r||void 0===r?void 0:r.length),indeterminate:x(r)!==(null===r||void 0===r?void 0:r.length)&&0!==x(r),disabled:0===(null===r||void 0===r?void 0:r.length),inputProps:{"aria-label":"all items selected"}}),title:e,subheader:`${x(r)}/${null===r||void 0===r?void 0:r.length} selected`}),(0,f.jsx)(U.A,{}),(0,f.jsx)($.A,{sx:{width:400,height:550,bgcolor:"background.paper",overflow:"auto"},dense:!0,component:"div",role:"list",children:null===r||void 0===r?void 0:r.map((e=>{const r=`transfer-list-all-item-${e}-label`;return(0,f.jsxs)(B.A,{role:"listitem",onClick:b(e),children:[(0,f.jsx)(H.A,{children:(0,f.jsx)(L.A,{sx:{color:"#000"},checked:-1!==t.indexOf(e),tabIndex:-1,disableRipple:!0,inputProps:{"aria-labelledby":r}})}),(0,f.jsx)(E.A,{id:r,primary:e})]},e)}))})]});return(0,f.jsx)("div",{children:(0,f.jsxs)(A,{container:!0,spacing:2,justifyContent:"center",alignItems:"center",children:[(0,f.jsx)(A,{item:!0,children:w("Available Modules",m)}),(0,f.jsx)(A,{item:!0,children:(0,f.jsxs)(A,{container:!0,direction:"column",alignItems:"center",children:[(0,f.jsx)(P.A,{sx:{my:.5},variant:"outlined",size:"small",onClick:async()=>{const r=o.concat(g).sort(),n=_(m,g).sort();i(r),v(n),a(_(t,g));try{await X.A.put("/assign-modules",{modules:g,username:e.selectedUser})}catch(s){l({open:!0,message:"Network Error"===s.message?"Network Error, your details will be submitted when you are back online":s.response.data.message,severity:"error"})}},disabled:0===(null===g||void 0===g?void 0:g.length),"aria-label":"move selected right",children:">"}),(0,f.jsx)(P.A,{sx:{my:.5},variant:"outlined",size:"small",onClick:async()=>{const r=m.concat(h).sort(),n=_(o,h).sort();v(r),i(n),a(_(t,h));try{await X.A.put("/unassign-modules",{modules:h,username:e.selectedUser})}catch(s){console.error("Error occurred while unassigning modules:",s)}},disabled:0===(null===h||void 0===h?void 0:h.length),"aria-label":"move selected left",children:"<"})]})}),(0,f.jsx)(A,{item:!0,children:w("Assigned Modules",o)})]})})}const K=n.memo(J)},7357:(e,t,r)=>{r.d(t,{A:()=>b});var n=r(9950),a=r(2004),o=r(8465),i=r(3933),s=r(9254),l=r(4265),c=r(8463),d=r(9608),u=r(1923),p=r(9044),m=r(1506),v=r(3372),g=r(9813),h=r(4414);const f=(0,s.Ay)(u.A,{shouldForwardProp:e=>(0,d.A)(e)||"classes"===e,name:"MuiListItemButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.dense&&t.dense,"flex-start"===r.alignItems&&t.alignItemsFlexStart,r.divider&&t.divider,!r.disableGutters&&t.gutters]}})((0,l.A)((e=>{let{theme:t}=e;return{display:"flex",flexGrow:1,justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minWidth:0,boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${g.A.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:(0,i.X4)(t.palette.primary.main,t.palette.action.selectedOpacity),[`&.${g.A.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:(0,i.X4)(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},[`&.${g.A.selected}:hover`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:(0,i.X4)(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:(0,i.X4)(t.palette.primary.main,t.palette.action.selectedOpacity)}},[`&.${g.A.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${g.A.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity},variants:[{props:e=>{let{ownerState:t}=e;return t.divider},style:{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"}},{props:{alignItems:"flex-start"},style:{alignItems:"flex-start"}},{props:e=>{let{ownerState:t}=e;return!t.disableGutters},style:{paddingLeft:16,paddingRight:16}},{props:e=>{let{ownerState:t}=e;return t.dense},style:{paddingTop:4,paddingBottom:4}}]}}))),b=n.forwardRef((function(e,t){const r=(0,c.b)({props:e,name:"MuiListItemButton"}),{alignItems:i="center",autoFocus:s=!1,component:l="div",children:d,dense:u=!1,disableGutters:b=!1,divider:x=!1,focusVisibleClassName:y,selected:w=!1,className:A,...$}=r,k=n.useContext(v.A),S=n.useMemo((()=>({dense:u||k.dense||!1,alignItems:i,disableGutters:b})),[i,k.dense,u,b]),C=n.useRef(null);(0,p.A)((()=>{s&&C.current&&C.current.focus()}),[s]);const j={...r,alignItems:i,dense:S.dense,disableGutters:b,divider:x,selected:w},N=(e=>{const{alignItems:t,classes:r,dense:n,disabled:a,disableGutters:i,divider:s,selected:l}=e,c={root:["root",n&&"dense",!i&&"gutters",s&&"divider",a&&"disabled","flex-start"===t&&"alignItemsFlexStart",l&&"selected"]},d=(0,o.A)(c,g.Y,r);return{...r,...d}})(j),M=(0,m.A)(C,t);return(0,h.jsx)(v.A.Provider,{value:S,children:(0,h.jsx)(f,{ref:M,href:$.href||$.to,component:($.href||$.to)&&"div"===l?"button":l,focusVisibleClassName:(0,a.A)(N.focusVisible,y),ownerState:j,className:(0,a.A)(N.root,A),...$,classes:N,children:d})})}))}}]);