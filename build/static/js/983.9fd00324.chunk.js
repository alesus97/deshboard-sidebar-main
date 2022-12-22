"use strict";(self.webpackChunkmetropolisad=self.webpackChunkmetropolisad||[]).push([[983],{9772:function(e,n,t){t.d(n,{Z:function(){return P}});var o=t(1413),r=t(885),a=t(225),i=t(4554),l=[.6,-.05,.01,.99],c={opacity:1,y:0,transition:{duration:.6,ease:l,delay:.16}},s=(0,a.Z)("div")({height:"100vh",display:"grid",placeItems:"center"}),d=(0,a.Z)(i.Z)({textAlign:"center"}),u=(0,a.Z)("div")({maxWidth:600,padding:25,margin:"auto",display:"flex",justifyContent:"center",flexDirection:"column",background:"#292828"}),p={initial:{y:60,opacity:0,transition:{duration:.6,ease:l}},animate:{y:0,opacity:1,transition:{duration:.6,ease:l}}},m=t(1614),f=t(890),h=t(1554),v=t(2003),b=t(9658),Z=t(5773),x=t(2791),g=t(1087),y=t(184),j=function(){return(0,y.jsx)(i.Z,{minHeight:180,children:(0,y.jsxs)(g.rU,{to:"/",children:[(0,y.jsx)("p",{}),(0,y.jsx)(i.Z,{component:"img",src:"logo128.png",alt:"logo"})]})})},k=t(9709),w=t(4098);function P(e){var n=(0,x.useState)(!1),t=(0,r.Z)(n,2),a=t[0],l=t[1],g=(0,x.useState)(),P=(0,r.Z)(g,2),C=P[0],S=P[1],z=(0,x.useState)(!1),R=(0,r.Z)(z,2),L=R[0],F=R[1];return(0,y.jsx)(s,{children:(0,y.jsx)(m.Z,{maxWidth:"sm",component:"form",onSubmit:function(n){F(!0),e.handleSubmit(n).then((function(){l(!1),S("")})).catch((function(e){console.log(e),F(!1),S(e.message),l(!0)}))},children:(0,y.jsxs)(u,{children:[(0,y.jsxs)(d,(0,o.Z)((0,o.Z)({component:w.E.div},p),{},{children:[(0,y.jsx)(j,{}),(0,y.jsx)(f.Z,{sx:{color:"text.secondary",mb:5},children:e.title})]})),(0,y.jsx)(i.Z,{sx:{display:"flex",flexDirection:"column"},component:w.E.div,initial:{opacity:0,y:40},animate:c,children:e.children}),(0,y.jsxs)(i.Z,{component:w.E.div,initial:{opacity:0,y:20},animate:c,children:[(0,y.jsx)(k.Z,{name:"loadingButton",fullWidth:!0,size:"large",type:"submit","data-cy":"loginButton",variant:"contained",loading:L,loadingIndicator:(0,y.jsx)(h.Z,{color:"primary",size:16}),children:L?"loading...":e.buttonLabel}),(0,y.jsx)("p",{}),a&&(0,y.jsx)(v.Z,{in:a,timeout:{enter:1e3,exit:1e3},addEndListener:function(){setTimeout((function(){l(!1)}),4e3)},children:(0,y.jsx)(b.Z,{"data-cy":"alertLogin",variant:"filled",color:"primary",icon:(0,y.jsx)(Z.Z,{fontSize:"inherit"}),children:C})})]})]})})})}},5983:function(e,n,t){t.r(n),t.d(n,{default:function(){return be}});var o=t(4165),r=t(5861),a=t(5665),i=t(2346),l=t(5967),c=t(7689),s=t(885),d=t(2791),u=t(1087),p=t(3710),m=t(9569),f=t(4554),h=t(4953),v=t(3466),b=t(3400),Z=t(3767),x=t(4942),g=t(3366),y=t(7462),j=t(8182),k=t(4419),w=t(2930),P=t(890),C=t(4036),S=t(6934),z=t(1402),R=t(5878),L=t(1217);function F(e){return(0,L.Z)("MuiFormControlLabel",e)}var I=(0,R.Z)("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error"]),M=t(6147),E=t(184),B=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","slotProps","value"],N=(0,S.ZP)("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[(0,x.Z)({},"& .".concat(I.label),n.label),n.root,n["labelPlacement".concat((0,C.Z)(t.labelPlacement))]]}})((function(e){var n=e.theme,t=e.ownerState;return(0,y.Z)((0,x.Z)({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16},"&.".concat(I.disabled),{cursor:"default"}),"start"===t.labelPlacement&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},"top"===t.labelPlacement&&{flexDirection:"column-reverse",marginLeft:16},"bottom"===t.labelPlacement&&{flexDirection:"column",marginLeft:16},(0,x.Z)({},"& .".concat(I.label),(0,x.Z)({},"&.".concat(I.disabled),{color:(n.vars||n).palette.text.disabled})))})),D=d.forwardRef((function(e,n){var t,o=(0,z.Z)({props:e,name:"MuiFormControlLabel"}),r=o.className,a=o.componentsProps,i=void 0===a?{}:a,l=o.control,c=o.disabled,s=o.disableTypography,u=o.label,p=o.labelPlacement,m=void 0===p?"end":p,f=o.slotProps,h=void 0===f?{}:f,v=(0,g.Z)(o,B),b=(0,w.Z)(),Z=c;"undefined"===typeof Z&&"undefined"!==typeof l.props.disabled&&(Z=l.props.disabled),"undefined"===typeof Z&&b&&(Z=b.disabled);var x={disabled:Z};["checked","name","onChange","value","inputRef"].forEach((function(e){"undefined"===typeof l.props[e]&&"undefined"!==typeof o[e]&&(x[e]=o[e])}));var S=(0,M.Z)({props:o,muiFormControl:b,states:["error"]}),R=(0,y.Z)({},o,{disabled:Z,labelPlacement:m,error:S.error}),L=function(e){var n=e.classes,t=e.disabled,o=e.labelPlacement,r=e.error,a={root:["root",t&&"disabled","labelPlacement".concat((0,C.Z)(o)),r&&"error"],label:["label",t&&"disabled"]};return(0,k.Z)(a,F,n)}(R),I=null!=(t=h.typography)?t:i.typography,D=u;return null==D||D.type===P.Z||s||(D=(0,E.jsx)(P.Z,(0,y.Z)({component:"span"},I,{className:(0,j.Z)(L.label,null==I?void 0:I.className),children:D}))),(0,E.jsxs)(N,(0,y.Z)({className:(0,j.Z)(L.root,r),ownerState:R,ref:n},v,{children:[d.cloneElement(l,x),D]}))})),A=t(2065),T=t(8744),V=t(3701);function H(e){return(0,L.Z)("PrivateSwitchBase",e)}(0,R.Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var W=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],O=(0,S.ZP)(V.Z)((function(e){var n=e.ownerState;return(0,y.Z)({padding:9,borderRadius:"50%"},"start"===n.edge&&{marginLeft:"small"===n.size?-3:-12},"end"===n.edge&&{marginRight:"small"===n.size?-3:-12})})),q=(0,S.ZP)("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),U=d.forwardRef((function(e,n){var t=e.autoFocus,o=e.checked,r=e.checkedIcon,a=e.className,i=e.defaultChecked,l=e.disabled,c=e.disableFocusRipple,d=void 0!==c&&c,u=e.edge,p=void 0!==u&&u,m=e.icon,f=e.id,h=e.inputProps,v=e.inputRef,b=e.name,Z=e.onBlur,x=e.onChange,P=e.onFocus,S=e.readOnly,z=e.required,R=e.tabIndex,L=e.type,F=e.value,I=(0,g.Z)(e,W),M=(0,T.Z)({controlled:o,default:Boolean(i),name:"SwitchBase",state:"checked"}),B=(0,s.Z)(M,2),N=B[0],D=B[1],A=(0,w.Z)(),V=l;A&&"undefined"===typeof V&&(V=A.disabled);var U="checkbox"===L||"radio"===L,Q=(0,y.Z)({},e,{checked:N,disabled:V,disableFocusRipple:d,edge:p}),G=function(e){var n=e.classes,t=e.checked,o=e.disabled,r=e.edge,a={root:["root",t&&"checked",o&&"disabled",r&&"edge".concat((0,C.Z)(r))],input:["input"]};return(0,k.Z)(a,H,n)}(Q);return(0,E.jsxs)(O,(0,y.Z)({component:"span",className:(0,j.Z)(G.root,a),centerRipple:!0,focusRipple:!d,disabled:V,tabIndex:null,role:void 0,onFocus:function(e){P&&P(e),A&&A.onFocus&&A.onFocus(e)},onBlur:function(e){Z&&Z(e),A&&A.onBlur&&A.onBlur(e)},ownerState:Q,ref:n},I,{children:[(0,E.jsx)(q,(0,y.Z)({autoFocus:t,checked:o,defaultChecked:i,className:G.input,disabled:V,id:U&&f,name:b,onChange:function(e){if(!e.nativeEvent.defaultPrevented){var n=e.target.checked;D(n),x&&x(e,n)}},readOnly:S,ref:v,required:z,ownerState:Q,tabIndex:R,type:L},"checkbox"===L&&void 0===F?{}:{value:F},h)),N?r:m]}))})),Q=t(6189),G=(0,Q.Z)((0,E.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),J=(0,Q.Z)((0,E.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),K=(0,Q.Z)((0,E.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function X(e){return(0,L.Z)("MuiCheckbox",e)}var Y=(0,R.Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),$=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],_=(0,S.ZP)(U,{shouldForwardProp:function(e){return(0,S.FO)(e)||"classes"===e},name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,t.indeterminate&&n.indeterminate,"default"!==t.color&&n["color".concat((0,C.Z)(t.color))]]}})((function(e){var n,t=e.theme,o=e.ownerState;return(0,y.Z)({color:(t.vars||t).palette.text.secondary},!o.disableRipple&&{"&:hover":{backgroundColor:t.vars?"rgba(".concat("default"===o.color?t.vars.palette.action.activeChannel:t.vars.palette.primary.mainChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,A.Fq)("default"===o.color?t.palette.action.active:t.palette[o.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==o.color&&(n={},(0,x.Z)(n,"&.".concat(Y.checked,", &.").concat(Y.indeterminate),{color:(t.vars||t).palette[o.color].main}),(0,x.Z)(n,"&.".concat(Y.disabled),{color:(t.vars||t).palette.action.disabled}),n))})),ee=(0,E.jsx)(J,{}),ne=(0,E.jsx)(G,{}),te=(0,E.jsx)(K,{}),oe=d.forwardRef((function(e,n){var t,o,r=(0,z.Z)({props:e,name:"MuiCheckbox"}),a=r.checkedIcon,i=void 0===a?ee:a,l=r.color,c=void 0===l?"primary":l,s=r.icon,u=void 0===s?ne:s,p=r.indeterminate,m=void 0!==p&&p,f=r.indeterminateIcon,h=void 0===f?te:f,v=r.inputProps,b=r.size,Z=void 0===b?"medium":b,x=r.className,w=(0,g.Z)(r,$),P=m?h:u,S=m?h:i,R=(0,y.Z)({},r,{color:c,indeterminate:m,size:Z}),L=function(e){var n=e.classes,t=e.indeterminate,o=e.color,r={root:["root",t&&"indeterminate","color".concat((0,C.Z)(o))]},a=(0,k.Z)(r,X,n);return(0,y.Z)({},n,a)}(R);return(0,E.jsx)(_,(0,y.Z)({type:"checkbox",inputProps:(0,y.Z)({"data-indeterminate":m},v),icon:d.cloneElement(P,{fontSize:null!=(t=P.props.fontSize)?t:Z}),checkedIcon:d.cloneElement(S,{fontSize:null!=(o=S.props.fontSize)?o:Z}),ownerState:R,ref:n,className:(0,j.Z)(L.root,x)},w,{classes:L}))})),re=t(2982),ae=t(3031),ie=t(2071);function le(e){return(0,L.Z)("MuiLink",e)}var ce=(0,R.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),se=t(8529),de={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},ue=function(e){var n=e.theme,t=e.ownerState,o=function(e){return de[e]||e}(t.color),r=(0,se.DW)(n,"palette.".concat(o),!1)||t.color,a=(0,se.DW)(n,"palette.".concat(o,"Channel"));return"vars"in n&&a?"rgba(".concat(a," / 0.4)"):(0,A.Fq)(r,.4)},pe=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],me=(0,S.ZP)(P.Z,{name:"MuiLink",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,n["underline".concat((0,C.Z)(t.underline))],"button"===t.component&&n.button]}})((function(e){var n=e.theme,t=e.ownerState;return(0,y.Z)({},"none"===t.underline&&{textDecoration:"none"},"hover"===t.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===t.underline&&(0,y.Z)({textDecoration:"underline"},"inherit"!==t.color&&{textDecorationColor:ue({theme:n,ownerState:t})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===t.component&&(0,x.Z)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(ce.focusVisible),{outline:"auto"}))})),fe=d.forwardRef((function(e,n){var t=(0,z.Z)({props:e,name:"MuiLink"}),o=t.className,r=t.color,a=void 0===r?"primary":r,i=t.component,l=void 0===i?"a":i,c=t.onBlur,u=t.onFocus,p=t.TypographyClasses,m=t.underline,f=void 0===m?"always":m,h=t.variant,v=void 0===h?"inherit":h,b=t.sx,Z=(0,g.Z)(t,pe),x=(0,ae.Z)(),w=x.isFocusVisibleRef,P=x.onBlur,S=x.onFocus,R=x.ref,L=d.useState(!1),F=(0,s.Z)(L,2),I=F[0],M=F[1],B=(0,ie.Z)(n,R),N=(0,y.Z)({},t,{color:a,component:l,focusVisible:I,underline:f,variant:v}),D=function(e){var n=e.classes,t=e.component,o=e.focusVisible,r=e.underline,a={root:["root","underline".concat((0,C.Z)(r)),"button"===t&&"button",o&&"focusVisible"]};return(0,k.Z)(a,le,n)}(N);return(0,E.jsx)(me,(0,y.Z)({color:a,className:(0,j.Z)(D.root,o),classes:p,component:l,onBlur:function(e){P(e),!1===w.current&&M(!1),c&&c(e)},onFocus:function(e){S(e),!0===w.current&&M(!0),u&&u(e)},ref:B,ownerState:N,variant:v,sx:[].concat((0,re.Z)(Object.keys(de).includes(a)?[]:[{color:a}]),(0,re.Z)(Array.isArray(b)?b:[b]))},Z))})),he=function(){var e=(0,d.useState)(!1),n=(0,s.Z)(e,2),t=n[0],o=n[1];return(0,E.jsxs)(f.Z,{children:[(0,E.jsx)(h.Z,{fullWidth:!0,autoComplete:"username","data-cy":"formEmail",margin:"normal",label:"Indirizzo email",required:!0,name:"email",type:"email",sx:{"& fieldset":{borderColor:"white"}}}),(0,E.jsx)(h.Z,{fullWidth:!0,margin:"normal","data-cy":"formPassword",name:"password",autoComplete:"current-password",type:t?"text":"password",label:"Password",sx:{"& fieldset":{borderColor:"white"}},InputProps:{endAdornment:(0,E.jsx)(v.Z,{position:"end",children:(0,E.jsx)(b.Z,{onClick:function(){return o((function(e){return!e}))},children:t?(0,E.jsx)(p.Z,{color:"primary"}):(0,E.jsx)(m.Z,{color:"primary"})})})}}),(0,E.jsxs)(Z.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{my:2},children:[(0,E.jsx)(D,{control:(0,E.jsx)(oe,{}),label:"Ricordami"}),(0,E.jsx)(fe,{"data-cy":"recPassLink",component:u.rU,color:"primary",variant:"subtitle2",to:"/identificaAccount",underline:"hover",children:"Password dimenticata?"})]})]})},ve=t(9772);function be(){a.dQ.configure(l.Z);var e=(0,c.s0)(),n=function(){var n=(0,r.Z)((0,o.Z)().mark((function n(t){var r,a,l;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.preventDefault(),r=new FormData(t.currentTarget),a=r.get("email"),l=r.get("password"),n.prev=4,n.next=7,i.g.signIn(a,l);case 7:n.sent,e("/",{replace:!0}),n.next=14;break;case 11:throw n.prev=11,n.t0=n.catch(4),n.t0;case 14:case"end":return n.stop()}}),n,null,[[4,11]])})));return function(e){return n.apply(this,arguments)}}();return(0,E.jsx)(ve.Z,{handleSubmit:n,title:"Effettua il login",buttonLabel:"Login",children:(0,E.jsx)(he,{})})}},3710:function(e,n,t){var o=t(6189),r=t(184);n.Z=(0,o.Z)((0,r.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility")},9569:function(e,n,t){var o=t(6189),r=t(184);n.Z=(0,o.Z)((0,r.jsx)("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}),"VisibilityOff")},3466:function(e,n,t){t.d(n,{Z:function(){return k}});var o=t(4942),r=t(3366),a=t(7462),i=t(2791),l=t(8182),c=t(4419),s=t(4036),d=t(890),u=t(3840),p=t(2930),m=t(6934),f=t(5878),h=t(1217);function v(e){return(0,h.Z)("MuiInputAdornment",e)}var b,Z=(0,f.Z)("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),x=t(1402),g=t(184),y=["children","className","component","disablePointerEvents","disableTypography","position","variant"],j=(0,m.ZP)("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,n["position".concat((0,s.Z)(t.position))],!0===t.disablePointerEvents&&n.disablePointerEvents,n[t.variant]]}})((function(e){var n=e.theme,t=e.ownerState;return(0,a.Z)({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(n.vars||n).palette.action.active},"filled"===t.variant&&(0,o.Z)({},"&.".concat(Z.positionStart,"&:not(.").concat(Z.hiddenLabel,")"),{marginTop:16}),"start"===t.position&&{marginRight:8},"end"===t.position&&{marginLeft:8},!0===t.disablePointerEvents&&{pointerEvents:"none"})})),k=i.forwardRef((function(e,n){var t=(0,x.Z)({props:e,name:"MuiInputAdornment"}),o=t.children,m=t.className,f=t.component,h=void 0===f?"div":f,Z=t.disablePointerEvents,k=void 0!==Z&&Z,w=t.disableTypography,P=void 0!==w&&w,C=t.position,S=t.variant,z=(0,r.Z)(t,y),R=(0,p.Z)()||{},L=S;S&&R.variant,R&&!L&&(L=R.variant);var F=(0,a.Z)({},t,{hiddenLabel:R.hiddenLabel,size:R.size,disablePointerEvents:k,position:C,variant:L}),I=function(e){var n=e.classes,t=e.disablePointerEvents,o=e.hiddenLabel,r=e.position,a=e.size,i=e.variant,l={root:["root",t&&"disablePointerEvents",r&&"position".concat((0,s.Z)(r)),i,o&&"hiddenLabel",a&&"size".concat((0,s.Z)(a))]};return(0,c.Z)(l,v,n)}(F);return(0,g.jsx)(u.Z.Provider,{value:null,children:(0,g.jsx)(j,(0,a.Z)({as:h,ownerState:F,className:(0,l.Z)(I.root,m),ref:n},z,{children:"string"!==typeof o||P?(0,g.jsxs)(i.Fragment,{children:["start"===C?b||(b=(0,g.jsx)("span",{className:"notranslate",children:"\u200b"})):null,o]}):(0,g.jsx)(d.Z,{color:"text.secondary",children:o})}))})}))}}]);
//# sourceMappingURL=983.9fd00324.chunk.js.map