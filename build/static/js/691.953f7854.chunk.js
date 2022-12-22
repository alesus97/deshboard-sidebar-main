"use strict";(self.webpackChunkmetropolisad=self.webpackChunkmetropolisad||[]).push([[691],{4991:function(e,n,t){t.d(n,{t:function(){return a}});var r=t(8051),i="cinema-sad",a={getAllSpettacoli:function(e){return r.b.get(i,"/cinema/".concat(e,"/spettacoli"),{response:!0})},deleteSpettacolo:function(e){return r.b.del(i,"/spettacoli/".concat(e),{response:!0})},createSpettacolo:function(e,n){var t={body:n,response:!0};return r.b.post(i,"/sale/".concat(e,"/spettacoli"),t)},getAllSale:function(e){return r.b.get(i,"/cinema/".concat(e,"/sale"),{response:!0})},deleteSala:function(e){return r.b.del(i,"/sale/".concat(e),{response:!0})},createSala:function(e,n){var t={body:n,response:!0};return r.b.post(i,"/cinema/".concat(e,"/sale"),t)},getAllFilms:function(){return r.b.get(i,"/film",{response:!0})},deleteFilm:function(e){return r.b.del(i,"/film/".concat(e),{response:!0})},createFilm:function(e){var n={body:e,response:!0};return r.b.post(i,"/film",n)},getAllQuestions:function(e){return r.b.get(i,"/film/".concat(e,"/domande"),{response:!0})},deleteQuestion:function(e){return r.b.del(i,"/domande/".concat(e),{response:!0})},createQuestion:function(e,n){var t={body:n,response:!0};return r.b.post(i,"/film/".concat(e,"/domande"),t)},getAllPrizes:function(){return r.b.get(i,"/premi",{response:!0})},deletePrize:function(e){return r.b.del(i,"/premi/".concat(e),{response:!0})},createPrize:function(e){var n={body:e,response:!0};return r.b.post(i,"/premi",n)},getAllCinemas:function(){return r.b.get(i,"/cinema",{response:!0})},deleteCinema:function(e){return r.b.del(i,"/cinema/".concat(e),{response:!0})},createCinema:function(e){var n={body:e,response:!0};return r.b.post(i,"/cinema",n)},getPostiDisponibili:function(e){return r.b.get(i,"/spettacoli/".concat(e,"/disponibilita"),{response:!0})},getBiglietti:function(){return r.b.get(i,"/biglietti",{response:!0})},createBiglietto:function(e,n){var t={body:e,response:!0};return r.b.post(i,"/spettacoli/".concat(n,"/biglietti"),t)},getProfilo:function(){return r.b.get(i,"/user",{response:!0})}}},5578:function(e,n,t){t.d(n,{Z:function(){return c}});t(2791);var r=t(9157),i=t(1691),a=t(3767),o=t(890),s=t(753),l=t(184);function c(e){return(0,l.jsx)(r.Z,{children:(0,l.jsx)(i.Z,{component:"div",id:"alert-dialog-description",children:(0,l.jsxs)(a.Z,{justifyContent:"space-between",direction:{xs:"column",sm:"row"},spacing:2,children:[(0,l.jsx)(s.Z,{color:"error"}),(0,l.jsxs)(o.Z,{textAlign:"center",children:[" ",e.onDeleteMessage]}),(0,l.jsx)(s.Z,{color:"error"})]})})})}},6727:function(e,n,t){t.d(n,{Z:function(){return Z}});var r=t(885),i=t(2791),a=t(5289),o=t(5661),s=t(4721),l=t(9157),c=t(1614),u=t(4554),d=t(2003),p=t(9658),m=t(3767),f=t(6151),h=t(5773),x=t(184);function Z(e){var n=(0,i.useState)(!1),t=(0,r.Z)(n,2),Z=t[0],g=t[1],j=(0,i.useState)(!1),b=(0,r.Z)(j,2),v=b[0],y=b[1],S=(0,i.useState)([]),P=(0,r.Z)(S,2),w=P[0],_=P[1],C=function(){e.setCloseDialog(),y(!1),_("")};return(0,x.jsx)("div",{children:(0,x.jsxs)(a.Z,{open:e.openDialog,fullWidth:!0,maxWidth:"sm",onClose:C,children:[(0,x.jsx)(o.Z,{align:"center",children:e.title}),(0,x.jsx)(s.Z,{}),(0,x.jsx)(l.Z,{children:(0,x.jsx)(c.Z,{component:"main",maxWidth:"sm",children:(0,x.jsxs)(u.Z,{component:"form",onSubmit:function(n){g(!0),e.handleOK(n).then((function(){g(!1),C(),y(!1),_("")})).catch((function(e){console.log(e),y(!0),_(e.response.data.message)}))},children:[e.children,v&&(0,x.jsx)(d.Z,{in:v,timeout:{enter:1e3,exit:1e3},addEndListener:function(){setTimeout((function(){console.log("prova"),g(!1),y(!1)}),4e3)},children:(0,x.jsx)(p.Z,{"data-cy":"AlertDialog",variant:"filled",color:"primary",icon:(0,x.jsx)(h.Z,{fontSize:"inherit"}),children:w})}),(0,x.jsx)("p",{}),(0,x.jsxs)(m.Z,{justifyContent:"flex-end",direction:"row",spacing:2,children:[(0,x.jsx)(f.Z,{variant:"contained",onClick:C,children:"Cancel"}),(0,x.jsx)(f.Z,{"data-cy":"ok",variant:"contained",type:"submit",disabled:Z,children:"Ok"})]})]})})})]})})}},691:function(e,n,t){t.r(n),t.d(n,{default:function(){return k}});var r=t(4165),i=t(2982),a=t(5861),o=t(885),s=t(2791),l=t(4554),c=t(9877),u=t(1889),d=t(7621),p=t(7047),m=t(9585),f=t(890),h=t(3400),x=t(8087),Z=t(7247),g=t(2169),j=t(184);function b(e){var n=s.useState(!1),t=(0,o.Z)(n,2);t[0],t[1];return(0,j.jsxs)(d.Z,{raised:!0,sx:{maxWidth:500},children:[(0,j.jsx)(g.Z,{component:"img",height:"250",image:"https://www.bolognatoday.it/~media/horizontal-hi/43572212541236/cinema-8-2-2.jpg"}),(0,j.jsx)(m.Z,{title:(0,j.jsxs)(u.ZP,{container:!0,spacing:1,children:[(0,j.jsx)(u.ZP,{item:!0,xs:7,children:(0,j.jsxs)(f.Z,{align:"center",variant:"body1",children:["Sala ",e.info.numero_sala]})}),(0,j.jsx)(u.ZP,{item:!0,children:(0,j.jsxs)(f.Z,{align:"center",variant:"body1",children:[e.info.capienza," Posti"]})})]}),action:(0,j.jsx)(h.Z,{onClick:function(){return e.onDeleteAction()},children:(0,j.jsx)(Z.Z,{color:"primary"})})})]})}var v=t(6727),y=t(4953);function S(){return(0,j.jsxs)(l.Z,{children:[(0,j.jsx)(y.Z,{margin:"normal",fullWidth:!0,"data-cy":"numero_sala",label:"Numero Sala",type:"number",name:"numero_sala",sx:{"& fieldset":{borderColor:"white"}}}),(0,j.jsx)(y.Z,{margin:"normal",fullWidth:!0,"data-cy":"numero_file",label:"Numero File",type:"number",name:"numero_file",sx:{"& fieldset":{borderColor:"white"}}}),(0,j.jsx)(y.Z,{margin:"normal",fullWidth:!0,"data-cy":"numero_posti_per_fila",label:"Numero Posti per fila",type:"number",name:"postiPerFila",sx:{"& fieldset":{borderColor:"white"}}})]})}var P=t(5578);function w(e){var n=e.handleSubmit,t=e.handleDelete,r=e.loading,i=e.sale,a=e.setOnDeleteIndex,Z=s.useState(!1),g=(0,o.Z)(Z,2),y=g[0],w=g[1],_=s.useState(!1),C=(0,o.Z)(_,2),D=C[0],k=C[1],A=Array(10).fill("");return(0,j.jsxs)(l.Z,{sx:{p:3},children:[(0,j.jsx)(c.Z,{"data-cy":"addSala",sx:{position:"fixed",bottom:"3%",right:"3%"},color:"primary","aria-label":"add",onClick:function(){return w(!0)},children:(0,j.jsx)(x.Z,{})}),(0,j.jsxs)(u.ZP,{container:!0,spacing:{xs:2,md:3},columns:{xs:2,sm:8,md:10,lg:12},children:[r&&A.map((function(e,n){return(0,j.jsx)(u.ZP,{item:!0,xs:2,sm:4,md:10/3,lg:3,children:(0,j.jsxs)(d.Z,{raised:!0,sx:{maxWidth:500},children:[(0,j.jsx)(p.Z,{height:250,variant:"rounded"}),(0,j.jsx)(m.Z,{title:(0,j.jsxs)(u.ZP,{container:!0,spacing:1,children:[(0,j.jsx)(u.ZP,{item:!0,xs:7,children:(0,j.jsx)(f.Z,{align:"center",variant:"h6"})}),(0,j.jsx)(u.ZP,{item:!0,children:(0,j.jsx)(f.Z,{align:"center",variant:"h6"})})]}),action:(0,j.jsx)(h.Z,{})})]})},n)})),i&&i.map((function(e,n){return(0,j.jsx)(u.ZP,{item:!0,xs:2,sm:4,md:10/3,lg:3,children:(0,j.jsx)(b,{info:e,onDeleteAction:function(){a(n),k(!0)}})},e.id_sala)}))]}),(0,j.jsx)(v.Z,{openDialog:y,setCloseDialog:function(){return w(!1)},handleOK:n,title:"Inserisci nuova sala",children:(0,j.jsx)(S,{})}),(0,j.jsx)(v.Z,{openDialog:D,setCloseDialog:function(){return k(!1)},handleOK:t,title:"Sei sicuro di voler eliminare la sala?",children:(0,j.jsx)(P.Z,{onDeleteMessage:"L'eliminazione di una sala comporta l'eliminazione di tutti gli spettacoli ad essa associati"})}),(0,j.jsx)(l.Z,{height:70})]})}var _=t(2430),C=t(4991),D=t(5282);function k(){var e=(0,s.useState)([]),n=(0,o.Z)(e,2),t=n[0],l=n[1],c=(0,s.useState)(),u=(0,o.Z)(c,2),d=u[0],p=u[1],m=(0,s.useState)(!0),f=(0,o.Z)(m,2),h=f[0],x=f[1],Z=(0,s.useState)(""),g=(0,o.Z)(Z,2),b=g[0],v=g[1],y=(0,s.useState)(),S=(0,o.Z)(y,2),P=S[0],k=S[1],A=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var a,o,s,c,u;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),a=new FormData(n.currentTarget),o={numeroSala:a.get("numero_sala"),numeroFile:Number(a.get("numero_file")),postiPerFila:Number(a.get("postiPerFila"))},e.prev=3,e.next=6,C.t.createSala(10,o);case 6:s=e.sent,console.log(s),c={id_sala:s.data.id_sala,numero_sala:a.get("numero_sala"),capienza:Number(a.get("postiPerFila")*a.get("numero_file"))},console.log(c),(u=(0,i.Z)(t)).push(c),l(u),e.next=18;break;case 15:throw e.prev=15,e.t0=e.catch(3),e.t0;case 18:case"end":return e.stop()}}),e,null,[[3,15]])})));return function(n){return e.apply(this,arguments)}}(),z=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var a,o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),a=t[d].id_sala,e.prev=2,e.next=5,C.t.deleteSala(a);case 5:e.sent,(o=(0,i.Z)(t)).splice(d,1),l((0,i.Z)(o)),console.log("Sala cancellata correttamente"),e.next=15;break;case 12:throw e.prev=12,e.t0=e.catch(2),e.t0;case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(n){return e.apply(this,arguments)}}(),F=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:C.t.getAllSale(10).then((function(e){var n=e.data.map((function(e){return new D.Z(e)}));l(n),x(!1)})).catch((function(e){console.log(e),k(!0),v(e)}));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,s.useEffect)((function(){F()}),[]),P?(0,j.jsx)(_.Z,{error:b}):(0,j.jsx)(w,{handleSubmit:A,handleDelete:z,loading:h,sale:t,setOnDeleteIndex:p})}},5282:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(3144),i=t(5671),a=(0,r.Z)((function e(n){(0,i.Z)(this,e),this.id_sala=n.id_sala,this.numero_sala=n.numero_sala,this.codice_cinema=n.codice_cinema,this.capienza=n.capienza}))},2430:function(e,n,t){t.d(n,{Z:function(){return u}});t(2791);var r=t(4554),i=t(3767),a=t(1889),o=t(890),s=t(5021),l=t(7689),c=t(184);function u(e){var n,t,u;(0,l.s0)();return(0,c.jsx)(r.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center",height:"85vh"},children:(0,c.jsxs)(i.Z,{direction:"row",spacing:2,children:[(0,c.jsx)(s.ZP,{children:(0,c.jsxs)(a.ZP,{children:[(0,c.jsx)(o.Z,{variant:"h1",children:null===(n=e.error.response)||void 0===n?void 0:n.status}),(0,c.jsx)(o.Z,{variant:"h5",children:null===(t=e.error)||void 0===t?void 0:t.code}),(0,c.jsx)(o.Z,{variant:"h6",children:null===(u=e.error.response)||void 0===u?void 0:u.data.message}),(0,c.jsx)("p",{})]})}),(0,c.jsx)(s.ZP,{children:(0,c.jsx)(a.ZP,{children:(0,c.jsx)("img",{src:"/ErrorImage.png",alt:"",width:500,height:500})})})]})})}}}]);
//# sourceMappingURL=691.953f7854.chunk.js.map