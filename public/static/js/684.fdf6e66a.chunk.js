"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[684],{925:function(e,t,n){n.r(t);var r=n(214),i=n(861),a=n(885),l=n(791),u=n(931),c=n(810),s=n(999),o=n(373),d=n(895),p=n(434),f=n(291),v=n(94),h=n(508),y=n(108),m=(n(55),n(184));t.default=function(){var e=(0,l.useContext)(y.V),t=(0,h.x)(),n=t.isLoading,x=t.error,Z=t.sendRequest,V=t.clearError,T=(0,l.useState)(),b=(0,a.Z)(T,2),j=b[0],C=b[1],I=(0,u.UO)().placeId,A=(0,u.k6)(),E=(0,v.c)({title:{value:"",isValid:!1},description:{value:"",isValid:!1}},!1),N=(0,a.Z)(E,3),g=N[0],k=N[1],w=N[2];(0,l.useEffect)((function(){var e=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Z("".concat("https://guedjcode-places-app.herokuapp.com/api","/places/").concat(I));case 3:t=e.sent,C(t.place),w({title:{value:t.place.title,isValid:!0},description:{value:t.place.description,isValid:!0}},!0),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[Z,I,w]);var S=function(){var t=(0,i.Z)((0,r.Z)().mark((function t(n){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,t.next=4,Z("".concat("https://guedjcode-places-app.herokuapp.com/api","/places/").concat(I),"PATCH",JSON.stringify({title:g.inputs.title.value,description:g.inputs.description.value}),{"Content-Type":"application/json",Authorization:"Bearer "+e.token});case 4:A.push("/"+e.userId+"/places"),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(1);case 9:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}();return n?(0,m.jsx)("div",{className:"center",children:(0,m.jsx)(d.Z,{})}):j||x?(0,m.jsxs)(l.Fragment,{children:[(0,m.jsx)(p.Z,{error:x,onClear:V}),!n&&j&&(0,m.jsxs)("form",{className:"place-form",onSubmit:S,children:[(0,m.jsx)(c.Z,{id:"title",element:"input",type:"text",label:"Title",validators:[(0,f.hg)()],errorText:"Please enter a valid title.",onInput:k,initialValue:j.title,initialValid:!0}),(0,m.jsx)(c.Z,{id:"description",element:"textarea",label:"Description",validators:[(0,f.CP)(5)],errorText:"Please enter a valid description (min. 5 characters).",onInput:k,initialValue:j.description,initialValid:!0}),(0,m.jsx)(s.Z,{type:"submit",disabled:!g.isValid,children:"UPDATE PLACE"})]})]}):(0,m.jsx)("div",{className:"center",children:(0,m.jsx)(o.Z,{children:(0,m.jsx)("h2",{children:"Could not find place!"})})})}},810:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(885),i=n(413),a=n(791),l=n(291),u=n(184),c=function(e,t){switch(t.type){case"CHANGE":return(0,i.Z)((0,i.Z)({},e),{},{value:t.val,isValid:(0,l.Gu)(t.val,t.validators)});case"TOUCH":return(0,i.Z)((0,i.Z)({},e),{},{isTouched:!0});default:return e}},s=function(e){var t=(0,a.useReducer)(c,{value:e.initialValue||"",isTouched:!1,isValid:e.initialValid||!1}),n=(0,r.Z)(t,2),i=n[0],l=n[1],s=e.id,o=e.onInput,d=i.value,p=i.isValid;(0,a.useEffect)((function(){o(s,d,p)}),[s,d,p,o]);var f=function(t){l({type:"CHANGE",val:t.target.value,validators:e.validators})},v=function(){l({type:"TOUCH"})},h="input"===e.element?(0,u.jsx)("input",{id:e.id,type:e.type,placeholder:e.placeholder,onChange:f,onBlur:v,value:i.value}):(0,u.jsx)("textarea",{id:e.id,rows:e.rows||3,onChange:f,onBlur:v,value:i.value});return(0,u.jsxs)("div",{className:"form-control ".concat(!i.isValid&&i.isTouched&&"form-control--invalid"),children:[(0,u.jsx)("label",{htmlFor:e.id,children:e.label}),h,!i.isValid&&i.isTouched&&(0,u.jsx)("p",{children:e.errorText})]})}},373:function(e,t,n){n.d(t,{Z:function(){return i}});n(791);var r=n(184),i=function(e){return(0,r.jsx)("div",{className:"card ".concat(e.className),style:e.style,children:e.children})}},94:function(e,t,n){n.d(t,{c:function(){return c}});var r=n(885),i=n(942),a=n(413),l=n(791),u=function(e,t){switch(t.type){case"INPUT_CHANGE":var n=!0;for(var r in e.inputs)e.inputs[r]&&(n=r===t.inputId?n&&t.isValid:n&&e.inputs[r].isValid);return(0,a.Z)((0,a.Z)({},e),{},{inputs:(0,a.Z)((0,a.Z)({},e.inputs),{},(0,i.Z)({},t.inputId,{value:t.value,isValid:t.isValid})),isValid:n});case"SET_DATA":return{inputs:t.inputs,isValid:t.formIsValid};default:return e}},c=function(e,t){var n=(0,l.useReducer)(u,{inputs:e,isValid:t}),i=(0,r.Z)(n,2),a=i[0],c=i[1];return[a,(0,l.useCallback)((function(e,t,n){c({type:"INPUT_CHANGE",value:t,isValid:n,inputId:e})}),[]),(0,l.useCallback)((function(e,t){c({type:"SET_DATA",inputs:e,formIsValid:t})}),[])]}},291:function(e,t,n){n.d(t,{Ox:function(){return o},CP:function(){return s},hg:function(){return c},Gu:function(){return d}});var r=n(192);var i="REQUIRE",a="MINLENGTH",l="MAXLENGTH",u="EMAIL",c=function(){return{type:i}},s=function(e){return{type:a,val:e}},o=function(){return{type:u}},d=function(e,t){var n,c=!0,s=function(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=(0,r.Z)(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var i=0,a=function(){};return{s:a,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,u=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return u=e.done,e},e:function(e){c=!0,l=e},f:function(){try{u||null==n.return||n.return()}finally{if(c)throw l}}}}(t);try{for(s.s();!(n=s.n()).done;){var o=n.value;o.type===i&&(c=c&&e.trim().length>0),o.type===a&&(c=c&&e.trim().length>=o.val),o.type===l&&(c=c&&e.trim().length<=o.val),"MIN"===o.type&&(c=c&&+e>=o.val),"MAX"===o.type&&(c=c&&+e<=o.val),o.type===u&&(c=c&&/^\S+@\S+\.\S+$/.test(e))}}catch(d){s.e(d)}finally{s.f()}return c}},55:function(){}}]);
//# sourceMappingURL=684.fdf6e66a.chunk.js.map