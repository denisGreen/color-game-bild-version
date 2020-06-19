(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{194:function(e,t,c){e.exports=c(403)},199:function(e,t,c){},396:function(e,t,c){},397:function(e,t,c){},398:function(e,t,c){},399:function(e,t,c){},400:function(e,t,c){},403:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(46),o=c.n(a),i=(c(199),c(71)),l=(c(204),c(213),c(396),function(){return r.a.createElement("div",{className:"header"},r.a.createElement("h1",{className:"header-text centered"},r.a.createElement("span",{className:"header-text-color-one"},"Color "),r.a.createElement("span",{className:"header-text-color-two"},"Cards "),r.a.createElement("span",{className:"header-text-color-three"},"Game")),r.a.createElement("h2",{className:"header-text centered"},"Find two cards with the same color"))}),d=c(406),s=c(405),u=(c(397),c(398),function(e){var t=e.color,c=e.clicked,n=e.onClick,a=e.id;return r.a.createElement("div",{id:a,className:"color-card"+(c?" clicked":""),onClick:n},r.a.createElement("div",{className:"color-card-inner"},r.a.createElement("div",{className:"color-card-front"},r.a.createElement("p",{className:"color-card-text"},"Click Me:)")),r.a.createElement("div",{className:"color-card-back",style:{backgroundColor:t}},r.a.createElement("p",{className:"color-card-text"},"Find the same color"))))}),m=c(120),f=c.n(m),p=c(187),b="CARD_TOGGLE_CLICK",O="CARD_COMPARE_COLORS",v="CARD_COMPARE_START",E="CARD_COMPARE_FINISH";function C(e,t){return e&&t?{type:e,payload:t}:e&&!t?{type:e}:"Error"}var j=function(e){return C(b,e)},h=function(e,t){return new Promise((function(c){setTimeout((function(){c(t(function(e){return C(O,e)}(e)))}),1e3)}))},k=function(e,t,c,n){return function(){var r=Object(p.a)(f.a.mark((function r(a){return f.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!t&&c<2&&a(j(e)),t||1!==c||n===e){r.next=6;break}return a(C(v)),r.next=5,h(e,a);case 5:a(C(E));case 6:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},N=function(){var e=Object(i.c)((function(e){return e})),t=e.cards,c=e.openCards,n=e.isComparing,a=e.openCardId,o=Object(i.b)();return t?0===t.length?r.a.createElement("div",{className:"game-container"},r.a.createElement("div",{className:"winner"},r.a.createElement("h1",{className:"centered"},"YOU WON!"),r.a.createElement("h1",{className:"centered"},"CONGRATULATIONS!"))):r.a.createElement("div",{className:"game-container"},r.a.createElement(d.a,{className:"cards-box"},t.map((function(e){return r.a.createElement(s.a,{key:e.id,timeout:500,classNames:"item"},r.a.createElement(u,{id:e.id,color:e.color,clicked:e.clicked,onClick:function(){return o(k(e.id,n,c,a))}}))})))):new Error("ColorCard crashed")},g=(c(399),function(e){return r.a.createElement("div",{className:"main-content-container"},e.children)}),x=c(188),w=c(189),y=c(192),I=c(191),A=function(e){Object(y.a)(c,e);var t=Object(I.a)(c);function c(e){var n;return Object(x.a)(this,c),(n=t.call(this,e)).state={hasError:!1},n}return Object(w.a)(c,[{key:"componentDidCatch",value:function(e,t){console.log("Error log:",e,t)}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("div",null,r.a.createElement("h1",null,"DON'T PANIC!"),r.a.createElement("h2",null,"Something went wrong but we will fix it soon :)")):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),c}(n.Component),R=(c(400),function(e){return r.a.createElement("aside",{className:"side-box ".concat(e.positionClass)},r.a.createElement("h2",{className:"side-box-text"},"Place for the advertisment"))});function _(){return r.a.createElement("div",{className:"App"},r.a.createElement(l,null),r.a.createElement(A,null,r.a.createElement(g,null,r.a.createElement(R,null),r.a.createElement(A,null,r.a.createElement(N,null)),r.a.createElement(R,{positionClass:"right"}))))}var D=c(70),S=c(38),T=c(32),P=c(14),M={openCardId:"",isComparing:!1,openCards:0,cards:[{id:Object(P.v4)(),color:"#f0690a",clicked:!1},{id:Object(P.v4)(),color:"#108651",clicked:!1},{id:Object(P.v4)(),color:"#108651",clicked:!1},{id:Object(P.v4)(),color:"#f0690a",clicked:!1},{id:Object(P.v4)(),color:"#10f90a",clicked:!1},{id:Object(P.v4)(),color:"#1202b4",clicked:!1},{id:Object(P.v4)(),color:"#1202b4",clicked:!1},{id:Object(P.v4)(),color:"#10f90a",clicked:!1},{id:Object(P.v4)(),color:"#f0699a",clicked:!1},{id:Object(P.v4)(),color:"#101051",clicked:!1},{id:Object(P.v4)(),color:"#101051",clicked:!1},{id:Object(P.v4)(),color:"#f0699a",clicked:!1},{id:Object(P.v4)(),color:"#13690a",clicked:!1},{id:Object(P.v4)(),color:"#108614",clicked:!1},{id:Object(P.v4)(),color:"#108614",clicked:!1},{id:Object(P.v4)(),color:"#13690a",clicked:!1}]},F=function(e,t){return e.find((function(e){return e.id===t}))},G=function(e){return Object(T.a)(Object(T.a)({},e),{},{clicked:!1})},L=function(e,t,c){var n=e.openCards,r=t.findIndex((function(e){var t=e.clicked,n=e.id;return!0===t&&n!==c.id}));if(2===n){var a=t.findIndex((function(e){return e.id===c.id}));if(-1!==r){var o=t[r];return o.color===c.color?function(e,t,c,n){return{openCardId:"",isComparing:!1,openCards:0,cards:t.filter((function(e){return e.id!==c.id&&e.id!==n.id}))}}(0,t,c,o):function(e,t,c,n,r,a){var o=[].concat(Object(S.a)(t.slice(0,r)),[G(c)],Object(S.a)(t.slice(r+1)));return{openCardId:"",isComparing:!1,openCards:0,cards:[].concat(Object(S.a)(o.slice(0,a)),[G(n)],Object(S.a)(o.slice(a+1)))}}(0,t,c,o,a,r)}}return e},J=function(e){return Object(T.a)({isComparing:!0},e)},U=function(e){return Object(T.a)({isComparing:!1},e)},B=function(e,t,c,n){var r=e.openCards,a=e.openCardId;if(r<2){var o=function(e){return Object(T.a)(Object(T.a)({},e),{},{clicked:!e.clicked})}(c);return a===c.id?Object(T.a)(Object(T.a)({},e),{},{openCardId:"",openCards:0,cards:[].concat(Object(S.a)(t.slice(0,n)),[o],Object(S.a)(t.slice(n+1)))}):Object(T.a)(Object(T.a)({},e),{},{openCardId:c.id,openCards:r+1,cards:[].concat(Object(S.a)(t.slice(0,n)),[o],Object(S.a)(t.slice(n+1)))})}return e},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},c=e.cards,n=F(c,t.payload),r=c.findIndex((function(e){return e.id===t.payload}));switch(t.type){case b:return B(e,c,n,r);case v:return J(e);case O:return L(e,c,n);case E:return U(e);default:return e}},K=c(190),W=Object(D.c)(H,Object(D.a)(K.a,(function(e){var t=e.getState;return function(e){return function(c){return console.log("logMiddleware",c.type,t()),e(c)}}}))),Y=function(){return r.a.createElement(i.a,{store:W},r.a.createElement(A,null,r.a.createElement(_,null)))},q=document.getElementById("root");o.a.render(r.a.createElement(Y,null),q)}},[[194,1,2]]]);
//# sourceMappingURL=main.a5720e57.chunk.js.map