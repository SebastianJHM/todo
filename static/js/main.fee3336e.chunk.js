(this.webpackJsonptodo_app=this.webpackJsonptodo_app||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var l=n(1),a=n.n(l),c=n(5),r=n.n(c),s=(n(12),n(13),n(4)),o=n(2),i=n(0);var u=a.a.createContext();function d(e){var t=function(e,t){var n=a.a.useState(t),l=Object(o.a)(n,2),c=l[0],r=l[1],s=a.a.useState(!0),i=Object(o.a)(s,2),u=i[0],d=i[1],m=a.a.useState(!1),j=Object(o.a)(m,2),x=j[0],b=j[1];return a.a.useEffect((function(){setTimeout((function(){try{var n=localStorage.getItem(e);r(n?JSON.parse(n):t),!n&&localStorage.setItem(e,JSON.stringify(t)),d(!1)}catch(l){b(!0)}}),3e3)}),[]),{myItem:c,saveMyItem:function(t){r(t),localStorage.setItem(e,JSON.stringify(t))},loading:u,error:x}}("TODOS_V1",[]),n=t.myItem,l=t.saveMyItem,c=t.loading,r=t.error,d=a.a.useState(""),m=Object(o.a)(d,2),j=m[0],x=m[1],b=a.a.useState(!1),g=Object(o.a)(b,2),p=g[0],O=g[1],v=n.filter((function(e){return!0===e.completed})).length,f=n.length,h=n.filter((function(e){return e.text.includes(j)}));var E={todos:n,saveTodos:l,completedTodos:v,totalTodos:f,searchValue:j,setSearchValue:x,searchedTodos:h,globalDeleteTodo:function(e){var t=n.filter((function(t){return t.id!==e}));l(t)},globalChangeStateCompleteTodo:function(e){var t=Object(s.a)(n),a=t.findIndex((function(t){return t.id===e}));t[a].completed=!n[a].completed,l(t)},loadingService:c,errorService:r,openModal:p,setOpenModal:O};return Object(i.jsx)(u.Provider,{value:E,children:e.children})}n(15);var m={fontSize:"30px",fontWeight:"700",marginBottom:"0px",textTransform:"uppercase"};function j(e){var t=a.a.useContext(u),n=t.completedTodos,l=t.totalTodos;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{style:m,children:"\xbfQu\xe9 pasa?"}),Object(i.jsxs)("h2",{children:["Haz completado ",n," de ",l," tareas"]})]})}n(16);function x(){var e=a.a.useContext(u),t=e.searchValue,n=e.setSearchValue;return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("input",{className:"search",placeholder:"Buscar tarea ...",value:t,type:"text",onInput:function(e){console.log(e.target.value),n(e.target.value)}})})}var b,g,p,O,v,f,h,E,k,y,w,N,S,C,I,T;n(17);function M(e){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("section",{children:Object(i.jsx)("ul",{children:e.children})})})}var L=["title","titleId"];function B(){return B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},B.apply(this,arguments)}function P(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},c=Object.keys(e);for(l=0;l<c.length;l++)n=c[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(l=0;l<c.length;l++)n=c[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function z(e,t){var n=e.title,a=e.titleId,c=P(e,L);return l.createElement("svg",B({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"348.333px",height:"348.334px",viewBox:"0 0 348.333 348.334",style:{enableBackground:"new 0 0 348.333 348.334"},xmlSpace:"preserve",ref:t,"aria-labelledby":a},c),n?l.createElement("title",{id:a},n):null,b||(b=l.createElement("g",null,l.createElement("path",{d:"M336.559,68.611L231.016,174.165l105.543,105.549c15.699,15.705,15.699,41.145,0,56.85 c-7.844,7.844-18.128,11.769-28.407,11.769c-10.296,0-20.581-3.919-28.419-11.769L174.167,231.003L68.609,336.563 c-7.843,7.844-18.128,11.769-28.416,11.769c-10.285,0-20.563-3.919-28.413-11.769c-15.699-15.698-15.699-41.139,0-56.85 l105.54-105.549L11.774,68.611c-15.699-15.699-15.699-41.145,0-56.844c15.696-15.687,41.127-15.687,56.829,0l105.563,105.554 L279.721,11.767c15.705-15.687,41.139-15.687,56.832,0C352.258,27.466,352.258,52.912,336.559,68.611z"}))),g||(g=l.createElement("g",null)),p||(p=l.createElement("g",null)),O||(O=l.createElement("g",null)),v||(v=l.createElement("g",null)),f||(f=l.createElement("g",null)),h||(h=l.createElement("g",null)),E||(E=l.createElement("g",null)),k||(k=l.createElement("g",null)),y||(y=l.createElement("g",null)),w||(w=l.createElement("g",null)),N||(N=l.createElement("g",null)),S||(S=l.createElement("g",null)),C||(C=l.createElement("g",null)),I||(I=l.createElement("g",null)),T||(T=l.createElement("g",null)))}var D,V,_,A,F,J,R,X,H,Q,W,q,G,K,U,Y,Z=l.forwardRef(z),$=(n.p,["title","titleId"]);function ee(){return ee=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},ee.apply(this,arguments)}function te(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},c=Object.keys(e);for(l=0;l<c.length;l++)n=c[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(l=0;l<c.length;l++)n=c[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function ne(e,t){var n=e.title,a=e.titleId,c=te(e,$);return l.createElement("svg",ee({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 408.576 408.576",style:{enableBackground:"new 0 0 408.576 408.576"},xmlSpace:"preserve",ref:t,"aria-labelledby":a},c),n?l.createElement("title",{id:a},n):null,D||(D=l.createElement("g",null,l.createElement("g",null,l.createElement("path",{d:"M204.288,0C91.648,0,0,91.648,0,204.288s91.648,204.288,204.288,204.288s204.288-91.648,204.288-204.288 S316.928,0,204.288,0z M318.464,150.528l-130.56,129.536c-7.68,7.68-19.968,8.192-28.16,0.512L90.624,217.6 c-8.192-7.68-8.704-20.48-1.536-28.672c7.68-8.192,20.48-8.704,28.672-1.024l54.784,50.176L289.28,121.344 c8.192-8.192,20.992-8.192,29.184,0C326.656,129.536,326.656,142.336,318.464,150.528z"})))),V||(V=l.createElement("g",null)),_||(_=l.createElement("g",null)),A||(A=l.createElement("g",null)),F||(F=l.createElement("g",null)),J||(J=l.createElement("g",null)),R||(R=l.createElement("g",null)),X||(X=l.createElement("g",null)),H||(H=l.createElement("g",null)),Q||(Q=l.createElement("g",null)),W||(W=l.createElement("g",null)),q||(q=l.createElement("g",null)),G||(G=l.createElement("g",null)),K||(K=l.createElement("g",null)),U||(U=l.createElement("g",null)),Y||(Y=l.createElement("g",null)))}var le,ae,ce,re,se,oe,ie,ue,de,me,je,xe,be,ge,pe,Oe,ve=l.forwardRef(ne),fe=(n.p,["title","titleId"]);function he(){return he=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},he.apply(this,arguments)}function Ee(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},c=Object.keys(e);for(l=0;l<c.length;l++)n=c[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(l=0;l<c.length;l++)n=c[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function ke(e,t){var n=e.title,a=e.titleId,c=Ee(e,fe);return l.createElement("svg",he({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"25px",height:"25.001px",viewBox:"0 0 25 25.001",style:{enableBackground:"new 0 0 25 25.001"},xmlSpace:"preserve",ref:t,"aria-labelledby":a},c),n?l.createElement("title",{id:a},n):null,le||(le=l.createElement("g",null,l.createElement("path",{d:"M24.38,10.175l-2.231-0.268c-0.228-0.851-0.562-1.655-0.992-2.401l1.387-1.763c0.212-0.271,0.188-0.69-0.057-0.934 l-2.299-2.3c-0.242-0.243-0.662-0.269-0.934-0.057l-1.766,1.389c-0.743-0.43-1.547-0.764-2.396-0.99L14.825,0.62 C14.784,0.279,14.469,0,14.125,0h-3.252c-0.344,0-0.659,0.279-0.699,0.62L9.906,2.851c-0.85,0.227-1.655,0.562-2.398,0.991 L5.743,2.455c-0.27-0.212-0.69-0.187-0.933,0.056L2.51,4.812C2.268,5.054,2.243,5.474,2.456,5.746L3.842,7.51 c-0.43,0.744-0.764,1.549-0.991,2.4l-2.23,0.267C0.28,10.217,0,10.532,0,10.877v3.252c0,0.344,0.279,0.657,0.621,0.699l2.231,0.268 c0.228,0.848,0.561,1.652,0.991,2.396l-1.386,1.766c-0.211,0.271-0.187,0.69,0.057,0.934l2.296,2.301 c0.243,0.242,0.663,0.269,0.933,0.057l1.766-1.39c0.744,0.43,1.548,0.765,2.398,0.991l0.268,2.23 c0.041,0.342,0.355,0.62,0.699,0.62h3.252c0.345,0,0.659-0.278,0.699-0.62l0.268-2.23c0.851-0.228,1.655-0.562,2.398-0.991 l1.766,1.387c0.271,0.212,0.69,0.187,0.933-0.056l2.299-2.301c0.244-0.242,0.269-0.662,0.056-0.935l-1.388-1.764 c0.431-0.744,0.764-1.548,0.992-2.397l2.23-0.268C24.721,14.785,25,14.473,25,14.127v-3.252 C25.001,10.529,24.723,10.216,24.38,10.175z M12.501,18.75c-3.452,0-6.25-2.798-6.25-6.25s2.798-6.25,6.25-6.25 s6.25,2.798,6.25,6.25S15.954,18.75,12.501,18.75z"}))),ae||(ae=l.createElement("g",null)),ce||(ce=l.createElement("g",null)),re||(re=l.createElement("g",null)),se||(se=l.createElement("g",null)),oe||(oe=l.createElement("g",null)),ie||(ie=l.createElement("g",null)),ue||(ue=l.createElement("g",null)),de||(de=l.createElement("g",null)),me||(me=l.createElement("g",null)),je||(je=l.createElement("g",null)),xe||(xe=l.createElement("g",null)),be||(be=l.createElement("g",null)),ge||(ge=l.createElement("g",null)),pe||(pe=l.createElement("g",null)),Oe||(Oe=l.createElement("g",null)))}var ye=l.forwardRef(ke);n.p,n(18);function we(e){var t=a.a.useContext(u),n=t.globalDeleteTodo,l=t.globalChangeStateCompleteTodo;function c(){l(e.id)}return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("li",{children:Object(i.jsxs)("div",{className:"todo-container",children:[Object(i.jsx)("div",{className:"s1",children:!0===e.completed?Object(i.jsx)(ve,{className:"state-icon checked-icon",onClick:c}):Object(i.jsx)(ye,{className:"state-icon gear-icon",onClick:c})}),Object(i.jsxs)("div",{className:"s2",children:[Object(i.jsxs)("span",{className:"todo-title ".concat(e.completed?"todo-completed":""),children:["TODO ",e.id]}),Object(i.jsx)(Z,{className:"delete-icon",onClick:function(){n(e.id)}}),Object(i.jsx)("p",{className:"todo-text",children:e.text})]})]})})})}n(19);function Ne(e){var t=a.a.useContext(u).setOpenModal;return Object(i.jsx)("button",{className:"button-add",onClick:function(){console.log("Abr\xed el modal"),t(!0)},children:"Agregar Tarea"})}function Se(e){return r.a.createPortal(e.children,document.getElementById("modal"))}n(20);function Ce(){var e=a.a.useState(""),t=Object(o.a)(e,2),n=t[0],l=t[1],c=a.a.useContext(u),r=c.openModal,d=c.setOpenModal,m=c.todos,j=c.saveTodos;return Object(i.jsx)("div",{className:"modal-container ".concat(r?"a-open-modal":""),children:Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={id:String(Math.max.apply(Math,Object(s.a)(m.map((function(e){return Number(e.id)}))))+1),text:n,completed:!1},a=Object(s.a)(m);a.push(t),j(a),l(""),d(!1)},children:[Object(i.jsx)("h3",{children:Object(i.jsx)("span",{children:"Agregar nueva tarea"})}),Object(i.jsx)("textarea",{className:"new-todo-input",placeholder:"Mi siguiente tarea es ...",value:n,onInput:function(e){console.log(e.target.value),l(e.target.value)}}),Object(i.jsxs)("div",{className:"buttons-container",children:[Object(i.jsx)("button",{className:"new-todo-button",type:"submit",children:"Agregar"}),Object(i.jsx)("button",{className:"new-todo-button",type:"button",onClick:function(){d(!1)},children:"Cancelar"})]})]})})}n(21);function Ie(){return Object(i.jsxs)("li",{children:[Object(i.jsxs)("div",{className:"skeleton-container",children:[Object(i.jsx)("div",{className:"s1-skeleton",children:Object(i.jsx)("div",{className:"icon-skeleton animate-skeleton"})}),Object(i.jsxs)("div",{className:"s2-skeleton",children:[Object(i.jsx)("div",{className:"title-skeleton animate-skeleton"}),Object(i.jsx)("div",{className:"text-skeleton animate-skeleton"}),Object(i.jsx)("div",{className:"text-skeleton animate-skeleton"}),Object(i.jsx)("div",{className:"text-skeleton animate-skeleton"})]})]}),Object(i.jsxs)("div",{className:"skeleton-container",children:[Object(i.jsx)("div",{className:"s1-skeleton",children:Object(i.jsx)("div",{className:"icon-skeleton animate-skeleton"})}),Object(i.jsxs)("div",{className:"s2-skeleton",children:[Object(i.jsx)("div",{className:"title-skeleton animate-skeleton"}),Object(i.jsx)("div",{className:"text-skeleton animate-skeleton"}),Object(i.jsx)("div",{className:"text-skeleton animate-skeleton"}),Object(i.jsx)("div",{className:"text-skeleton animate-skeleton"})]})]}),Object(i.jsxs)("div",{className:"skeleton-container",children:[Object(i.jsx)("div",{className:"s1-skeleton",children:Object(i.jsx)("div",{className:"icon-skeleton animate-skeleton"})}),Object(i.jsxs)("div",{className:"s2-skeleton",children:[Object(i.jsx)("div",{className:"title-skeleton animate-skeleton"}),Object(i.jsx)("div",{className:"text-skeleton animate-skeleton"}),Object(i.jsx)("div",{className:"text-skeleton animate-skeleton"}),Object(i.jsx)("div",{className:"text-skeleton animate-skeleton"})]})]})]})}function Te(){var e=a.a.useContext(u),t=e.todos,n=e.searchValue,l=e.searchedTodos,c=e.loadingService,r=e.errorService,s=e.openModal;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(j,{}),Object(i.jsx)(x,{}),Object(i.jsxs)(M,{children:[c&&Object(i.jsx)(Ie,{}),!0===r&&Object(i.jsx)("p",{style:{marginBottom:"20px"},children:"Tenemos un error ... "}),!1===c&&0===t.length&&Object(i.jsx)("p",{children:"Crea tu primer TODO"}),n.length>1?l.map((function(e){return Object(i.jsx)(we,{text:e.text,id:e.id,completed:e.completed},e.id)})):t.map((function(e){return Object(i.jsx)(we,{text:e.text,id:e.id,completed:e.completed},e.id)}))]}),Object(i.jsx)(Ne,{}),Object(i.jsx)(Se,{children:Object(i.jsx)("div",{className:"background-modal ".concat(s?"open-modal":"close-modal"),children:Object(i.jsx)(Ce,{})})})]})}var Me=function(e){return Object(i.jsx)("div",{id:"myApp",children:Object(i.jsx)(d,{children:Object(i.jsx)(Te,{})})})};r.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(Me,{})}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.fee3336e.chunk.js.map