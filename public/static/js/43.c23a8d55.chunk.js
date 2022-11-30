"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[43],{743:function(e,n,r){r.r(n),r.d(n,{default:function(){return Z}});var t=r(214),c=r(861),a=r(885),s=r(791),o=r(931),i=r(373),l=r(999),d=r(921),u=r(184),p=function(e){var n=(0,s.useRef)(),r=e.center,t=e.zoom;return(0,s.useEffect)((function(){var e=new window.google.maps.Map(n.current,{center:r,zoom:t});new window.google.maps.Marker({position:r,map:e})}),[r,t]),(0,u.jsx)("div",{ref:n,className:"map ".concat(e.className),style:e.style})},h=r(434),m=r(895),f=r(108),x=r(508),j=function(e){var n=(0,x.x)(),r=n.isLoading,o=n.error,j=n.sendRequest,v=n.clearError,Z=(0,s.useContext)(f.V),g=(0,s.useState)(!1),k=(0,a.Z)(g,2),C=k[0],E=k[1],w=(0,s.useState)(!1),N=(0,a.Z)(w,2),_=N[0],y=N[1],D=function(){return E(!1)},I=function(){y(!1)},L=function(){var n=(0,c.Z)((0,t.Z)().mark((function n(){return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return y(!1),n.prev=1,n.next=4,j("".concat("https://guedjcode-places-app.herokuapp.com/api","/places/").concat(e.id),"DELETE",null,{Authorization:"Bearer "+Z.token});case 4:e.onDelete(e.id),n.next=9;break;case 7:n.prev=7,n.t0=n.catch(1);case 9:case"end":return n.stop()}}),n,null,[[1,7]])})));return function(){return n.apply(this,arguments)}}();return(0,u.jsxs)(s.Fragment,{children:[(0,u.jsx)(h.Z,{error:o,onClear:v}),(0,u.jsx)(d.Z,{show:C,onCancel:D,header:e.address,contentClass:"place-item__modal-content",footerClass:"place-item__modal-actions",footer:(0,u.jsx)(l.Z,{onClick:D,children:"CLOSE"}),children:(0,u.jsx)("div",{className:"map-container",children:(0,u.jsx)(p,{center:e.coordinates,zoom:16})})}),(0,u.jsx)(d.Z,{show:_,onCancel:I,header:"Are you sure?",footerClass:"place-item__modal-actions",footer:(0,u.jsxs)(s.Fragment,{children:[(0,u.jsx)(l.Z,{inverse:!0,onClick:I,children:"CANCEL"}),(0,u.jsx)(l.Z,{danger:!0,onClick:L,children:"DELETE"})]}),children:(0,u.jsx)("p",{children:"Do you want to proceed and delete this place? Please note that it can't be undone thereafter."})}),(0,u.jsx)("li",{className:"place-item",children:(0,u.jsxs)(i.Z,{className:"place-item__content",children:[r&&(0,u.jsx)(m.Z,{asOverlay:!0}),(0,u.jsx)("div",{className:"place-item__image",children:(0,u.jsx)("img",{src:"".concat("https://guedjcode-places-app.herokuapp.com","/").concat(e.image),alt:e.title})}),(0,u.jsxs)("div",{className:"place-item__info",children:[(0,u.jsx)("h2",{children:e.title}),(0,u.jsx)("h3",{children:e.address}),(0,u.jsx)("p",{children:e.description})]}),(0,u.jsxs)("div",{className:"place-item__actions",children:[(0,u.jsx)(l.Z,{inverse:!0,onClick:function(){return E(!0)},children:"VIEW ON MAP"}),Z.userId===e.creatorId&&(0,u.jsx)(l.Z,{to:"/places/".concat(e.id),children:"EDIT"}),Z.userId===e.creatorId&&(0,u.jsx)(l.Z,{danger:!0,onClick:function(){y(!0)},children:"DELETE"})]})]})})]})},v=function(e){return 0===e.items.length?(0,u.jsx)("div",{className:"place-list center",children:(0,u.jsxs)(i.Z,{children:[(0,u.jsx)("h2",{children:"No places found. Maybe create one?"}),(0,u.jsx)(l.Z,{to:"/places/new",children:"Share Place"})]})}):(0,u.jsx)("ul",{className:"place-list",children:e.items.map((function(n){return(0,u.jsx)(j,{id:n.id,image:n.image,title:n.title,description:n.description,address:n.address,creatorId:n.creator,coordinates:n.location,onDelete:e.onDeletePlace},n.id)}))})},Z=function(){var e=(0,s.useState)(),n=(0,a.Z)(e,2),r=n[0],i=n[1],l=(0,x.x)(),d=l.isLoading,p=l.error,f=l.sendRequest,j=l.clearError,Z=(0,o.UO)().userId;(0,s.useEffect)((function(){var e=function(){var e=(0,c.Z)((0,t.Z)().mark((function e(){var n;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f("".concat("https://guedjcode-places-app.herokuapp.com/api","/places/user/").concat(Z));case 3:n=e.sent,i(n.places),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[f,Z]);return(0,u.jsxs)(s.Fragment,{children:[(0,u.jsx)(h.Z,{error:p,onClear:j}),d&&(0,u.jsx)("div",{className:"center",children:(0,u.jsx)(m.Z,{})}),!d&&r&&(0,u.jsx)(v,{items:r,onDeletePlace:function(e){i((function(n){return n.filter((function(n){return n.id!==e}))}))}})]})}},373:function(e,n,r){r.d(n,{Z:function(){return c}});r(791);var t=r(184),c=function(e){return(0,t.jsx)("div",{className:"card ".concat(e.className),style:e.style,children:e.children})}}}]);
//# sourceMappingURL=43.c23a8d55.chunk.js.map