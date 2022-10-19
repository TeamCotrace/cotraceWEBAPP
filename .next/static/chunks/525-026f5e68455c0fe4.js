"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[525],{3875:function(e,t,n){n.d(t,{II:function(){return E},BZ:function(){return S},Ui:function(){return L}});var r=n(7294),a=n(8387),l=n(6734),i=n(3961),o=n(4520),s=n(2494),u=(...e)=>e.filter(Boolean).join(" "),d=e=>e?"":void 0,c=e=>!!e||void 0;function p(...e){return function(t){e.some((e=>(null==e||e(t),null==t?void 0:t.defaultPrevented)))}}var[m,f]=(0,a.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),[h,v]=(0,a.k)({strict:!1,name:"FormControlContext"});function g(e){const{isDisabled:t,isInvalid:n,isReadOnly:r,isRequired:a,...l}=function(e){const t=v(),{id:n,disabled:r,readOnly:a,required:l,isRequired:i,isInvalid:o,isReadOnly:s,isDisabled:u,onFocus:d,onBlur:c,...m}=e,f=e["aria-describedby"]?[e["aria-describedby"]]:[];(null==t?void 0:t.hasFeedbackText)&&(null==t?void 0:t.isInvalid)&&f.push(t.feedbackId);(null==t?void 0:t.hasHelpText)&&f.push(t.helpTextId);return{...m,"aria-describedby":f.join(" ")||void 0,id:n??(null==t?void 0:t.id),isDisabled:r??u??(null==t?void 0:t.isDisabled),isReadOnly:a??s??(null==t?void 0:t.isReadOnly),isRequired:l??i??(null==t?void 0:t.isRequired),isInvalid:o??(null==t?void 0:t.isInvalid),onFocus:p(null==t?void 0:t.onFocus,d),onBlur:p(null==t?void 0:t.onBlur,c)}}(e);return{...l,disabled:t,readOnly:r,required:a,"aria-invalid":c(n),"aria-required":c(a),"aria-readonly":c(r)}}(0,i.Gp)((function(e,t){const n=(0,i.jC)("Form",e),a=(0,o.Lr)(e),{getRootProps:s,htmlProps:c,...p}=function(e){const{id:t,isRequired:n,isInvalid:a,isDisabled:i,isReadOnly:o,...s}=e,u=(0,r.useId)(),c=t||`field-${u}`,p=`${c}-label`,m=`${c}-feedback`,f=`${c}-helptext`,[h,v]=(0,r.useState)(!1),[g,y]=(0,r.useState)(!1),[x,I]=(0,r.useState)(!1),b=(0,r.useCallback)(((e={},t=null)=>({id:f,...e,ref:(0,l.lq)(t,(e=>{e&&y(!0)}))})),[f]),_=(0,r.useCallback)(((e={},t=null)=>({...e,ref:t,"data-focus":d(x),"data-disabled":d(i),"data-invalid":d(a),"data-readonly":d(o),id:e.id??p,htmlFor:e.htmlFor??c})),[c,i,x,a,o,p]),N=(0,r.useCallback)(((e={},t=null)=>({id:m,...e,ref:(0,l.lq)(t,(e=>{e&&v(!0)})),"aria-live":"polite"})),[m]),E=(0,r.useCallback)(((e={},t=null)=>({...e,...s,ref:t,role:"group"})),[s]),k=(0,r.useCallback)(((e={},t=null)=>({...e,ref:t,role:"presentation","aria-hidden":!0,children:e.children||"*"})),[]);return{isRequired:!!n,isInvalid:!!a,isReadOnly:!!o,isDisabled:!!i,isFocused:!!x,onFocus:()=>I(!0),onBlur:()=>I(!1),hasFeedbackText:h,setHasFeedbackText:v,hasHelpText:g,setHasHelpText:y,id:c,labelId:p,feedbackId:m,helpTextId:f,htmlProps:s,getHelpTextProps:b,getErrorMessageProps:N,getRootProps:E,getLabelProps:_,getRequiredIndicatorProps:k}}(a),f=u("chakra-form-control",e.className);return r.createElement(h,{value:p},r.createElement(m,{value:n},r.createElement(i.m$.div,{...s({},t),className:f,__css:n.container})))})).displayName="FormControl",(0,i.Gp)((function(e,t){const n=v(),a=f(),l=u("chakra-form__helper-text",e.className);return r.createElement(i.m$.div,{...null==n?void 0:n.getHelpTextProps(e,t),__css:a.helperText,className:l})})).displayName="FormHelperText";var[y,x]=(0,a.k)({name:"FormErrorStylesContext",errorMessage:"useFormErrorStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormError />\" "});(0,i.Gp)(((e,t)=>{const n=(0,i.jC)("FormError",e),a=(0,o.Lr)(e),l=v();return(null==l?void 0:l.isInvalid)?r.createElement(y,{value:n},r.createElement(i.m$.div,{...null==l?void 0:l.getErrorMessageProps(a,t),className:u("chakra-form__error-message",e.className),__css:{display:"flex",alignItems:"center",...n.text}})):null})).displayName="FormErrorMessage",(0,i.Gp)(((e,t)=>{const n=x(),a=v();if(!(null==a?void 0:a.isInvalid))return null;const l=u("chakra-form__error-icon",e.className);return r.createElement(s.JO,{ref:t,"aria-hidden":!0,...e,__css:n.icon,className:l},r.createElement("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"}))})).displayName="FormErrorIcon",(0,i.Gp)((function(e,t){const n=(0,i.mq)("FormLabel",e),a=(0,o.Lr)(e),{className:l,children:s,requiredIndicator:d=r.createElement(I,null),optionalIndicator:c=null,...p}=a,m=v(),f=(null==m?void 0:m.getLabelProps(p,t))??{ref:t,...p};return r.createElement(i.m$.label,{...f,className:u("chakra-form__label",a.className),__css:{display:"block",textAlign:"start",...n}},s,(null==m?void 0:m.isRequired)?d:c)})).displayName="FormLabel";var I=(0,i.Gp)((function(e,t){const n=v(),a=f();if(!(null==n?void 0:n.isRequired))return null;const l=u("chakra-form__required-indicator",e.className);return r.createElement(i.m$.span,{...null==n?void 0:n.getRequiredIndicatorProps(e,t),__css:a.requiredIndicator,className:l})}));I.displayName="RequiredIndicator";var b=n(5336),_=n(4031),N=n(6076),E=(0,i.Gp)((function(e,t){const{htmlSize:n,...a}=e,l=(0,i.jC)("Input",a),s=g((0,o.Lr)(a)),u=(0,b.cx)("chakra-input",e.className);return r.createElement(i.m$.input,{size:n,...s,__css:l.field,ref:t,className:u})}));E.displayName="Input",E.id="Input";var[k,C]=(0,a.k)({name:"InputGroupStylesContext",errorMessage:"useInputGroupStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<InputGroup />\" "}),S=(0,i.Gp)((function(e,t){const n=(0,i.jC)("Input",e),{children:a,className:l,...s}=(0,o.Lr)(e),u=(0,b.cx)("chakra-input__group",l),d={},c=(0,_.W)(a),p=n.field;c.forEach((e=>{n&&(p&&"InputLeftElement"===e.type.id&&(d.paddingStart=p.height??p.h),p&&"InputRightElement"===e.type.id&&(d.paddingEnd=p.height??p.h),"InputRightAddon"===e.type.id&&(d.borderEndRadius=0),"InputLeftAddon"===e.type.id&&(d.borderStartRadius=0))}));const m=c.map((t=>{var n,a;const l=(0,N.oA)({size:(null==(n=t.props)?void 0:n.size)||e.size,variant:(null==(a=t.props)?void 0:a.variant)||e.variant});return"Input"!==t.type.id?(0,r.cloneElement)(t,l):(0,r.cloneElement)(t,Object.assign(l,d,t.props))}));return r.createElement(i.m$.div,{className:u,ref:t,__css:{width:"100%",display:"flex",position:"relative"},...s},r.createElement(k,{value:n},m))}));S.displayName="InputGroup";var R={left:{marginEnd:"-1px",borderEndRadius:0,borderEndColor:"transparent"},right:{marginStart:"-1px",borderStartRadius:0,borderStartColor:"transparent"}},j=(0,i.m$)("div",{baseStyle:{flex:"0 0 auto",width:"auto",display:"flex",alignItems:"center",whiteSpace:"nowrap"}}),F=(0,i.Gp)((function(e,t){const{placement:n="left",...a}=e,l=R[n]??{},i=C();return r.createElement(j,{ref:t,...a,__css:{...i.addon,...l}})}));F.displayName="InputAddon";var L=(0,i.Gp)((function(e,t){return r.createElement(F,{ref:t,placement:"left",...e,className:(0,b.cx)("chakra-input__left-addon",e.className)})}));L.displayName="InputLeftAddon",L.id="InputLeftAddon";var q=(0,i.Gp)((function(e,t){return r.createElement(F,{ref:t,placement:"right",...e,className:(0,b.cx)("chakra-input__right-addon",e.className)})}));q.displayName="InputRightAddon",q.id="InputRightAddon";var w=(0,i.m$)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"0",zIndex:2}}),G=(0,i.Gp)((function(e,t){const{placement:n="left",...a}=e,l=C(),i=l.field,o={["left"===n?"insetStart":"insetEnd"]:"0",width:(null==i?void 0:i.height)??(null==i?void 0:i.h),height:(null==i?void 0:i.height)??(null==i?void 0:i.h),fontSize:null==i?void 0:i.fontSize,...l.element};return r.createElement(w,{ref:t,__css:o,...a})}));G.id="InputElement",G.displayName="InputElement";var A=(0,i.Gp)((function(e,t){const{className:n,...a}=e,l=(0,b.cx)("chakra-input__left-element",n);return r.createElement(G,{ref:t,placement:"left",className:l,...a})}));A.id="InputLeftElement",A.displayName="InputLeftElement";var P=(0,i.Gp)((function(e,t){const{className:n,...a}=e,l=(0,b.cx)("chakra-input__right-element",n);return r.createElement(G,{ref:t,placement:"right",className:l,...a})}));P.id="InputRightElement",P.displayName="InputRightElement"},3485:function(e,t,n){n.d(t,{L:function(){return s},v:function(){return o}});var r=n(7568),a=n(655),l=n(196),i=n(4599),o=function(){var e=(0,r.Z)((function(e){var t;return(0,a.__generator)(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,l.ZP.post("https://cotraceweb.vercel.app/api/Location/addlocation",e)];case 1:return[2,n.sent().data];case 2:return t=n.sent(),[2,(0,i.NA)(t,["response","data"])];case 3:return[2]}}))}));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=(0,r.Z)((function(e){var t;return(0,a.__generator)(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,l.ZP.post("https://cotraceweb.vercel.app/api/Location/list_location",e)];case 1:return[2,n.sent().data];case 2:return t=n.sent(),[2,(0,i.NA)(t,["response","data"])];case 3:return[2]}}))}));return function(t){return e.apply(this,arguments)}}()},8176:function(e,t,n){n.r(t);var r=n(7568),a=n(655),l=n(5893),i=n(7294),o=n(3485),s=n(7741),u=n(1163);t.default=function(e){var t=e.lat,n=e.lng,d=e.rad,c=e.locName,p=(0,i.useState)("634e86ad8b3a310a0652fcc6"),m=p[0],f=(p[1],(0,i.useState)(null)),h=(f[0],f[1],(0,u.useRouter)()),v=function(){var e=(0,r.Z)((function(e){var r,l;return(0,a.__generator)(this,(function(a){switch(a.label){case 0:return e.preventDefault(),r={locName:c,lat:t,lng:n,rad:d,userId:m},console.log("payload",r),[4,(0,o.v)(r)];case 1:return 1==(l=a.sent()).hasError?console.log({result:l}):(console.log("location data added"),h.replace("/")),[2]}}))}));return function(t){return e.apply(this,arguments)}}();return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("form",{onSubmit:v,children:(0,l.jsx)(s.zx,{type:"submit",children:"Save"})})})}},3525:function(e,t,n){n.r(t);var r,a=n(5893),l=n(8641),i=n(3875),o=n(7741),s=n(7294),u=n(6725),d=(n(3485),n(8176)),c=function(e){e.text;return(0,a.jsx)("div",{className:"pin"})};t.default=function(e){var t=e.coordinates,n=(0,s.useState)(""),p=n[0],m=n[1],f=(0,s.useState)(""),h=f[0],v=f[1],g=(0,s.useState)(""),y=g[0],x=g[1],I=(0,s.useState)(""),b=I[0],_=I[1],N=(0,s.useState)("631ad70c7d662c9bacd2654d");N[0],N[1];return(0,a.jsxs)(l.kC,{direction:"column",children:[console.log(p),(0,a.jsx)(l.xu,{h:"40vh",children:(0,a.jsx)(u.ZP,{yesIWantToUseGoogleMapApiInternals:!0,defaultCenter:{lat:11.772,lng:122.776},center:{lat:11.772,lng:122.776},defaultZoom:5,onChange:function(e){console.log(e.center.lat)},onClick:function(e){m(e.lat),v(e.lng)},onGoogleApiLoaded:function(e){var n=e.map,a=e.maps;(function(e,n){new n.Marker({position:t,map:e,title:"Hello World!"})})(n,a),function(e,t){r=new t.Circle({strokeColor:"#FF0000",strokeOpacity:.8,strokeWeight:2,fillColor:"#FF0000",fillOpacity:.3,map:e})}(n,a)},children:(0,a.jsx)(c,{lat:p,lng:h,text:"Marker"})})}),(0,a.jsxs)(l.xu,{children:[(0,a.jsxs)(i.BZ,{children:[(0,a.jsx)(i.Ui,{children:"Name"}),(0,a.jsx)(i.II,{value:b,onChange:function(e){_(e.target.value)}})]}),(0,a.jsxs)(i.BZ,{children:[(0,a.jsx)(i.Ui,{children:"Latitude"}),(0,a.jsx)(i.II,{value:p,onChange:function(e){m(e.target.value)}})]}),(0,a.jsxs)(i.BZ,{children:[(0,a.jsx)(i.Ui,{children:"Longtitude"}),(0,a.jsx)(i.II,{value:h,onChange:function(e){v(e.target.value)}})]}),(0,a.jsxs)(l.kC,{direction:"row",children:[(0,a.jsxs)(i.BZ,{children:[(0,a.jsx)(i.Ui,{children:"Radius"}),(0,a.jsx)(i.II,{placeholder:"Enter radius",type:"number",min:"10",name:"inputRad",onChange:function(e){x(e.target.value)}})]}),(0,a.jsx)(o.zx,{onClick:function(e){y>0&&(r.setCenter({lat:p,lng:h}),r.setRadius(Number(y)))},children:"Draw"}),(0,a.jsx)(d.default,{lat:p,lng:h,rad:y,locName:b})]})]})]})}},4599:function(e,t,n){n.d(t,{NA:function(){return a}});var r=n(2670),a=function(e,t,n){try{if(!(0,r.Z)(e,Array)){var a=e,l=!0,i=!1,o=void 0;try{for(var s,u=t[Symbol.iterator]();!(l=(s=u.next()).done);l=!0){var d=s.value;if(!(d in a))return n;a=a[d]}}catch(c){i=!0,o=c}finally{try{l||null==u.return||u.return()}finally{if(i)throw o}}return a}}catch(p){return n}}}}]);