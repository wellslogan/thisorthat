(this.webpackJsonpthisorthat=this.webpackJsonpthisorthat||[]).push([[0],{32:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(25),l=n.n(r),s=(n(32),n(7)),o=n(19),i=n(15),d=n(20),u=n(11),j=n(0),b=function(){var e=c.a.useState(!1),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("nav",{className:"relative shadow-lg bg-white shadow-lg flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg",children:Object(j.jsx)("div",{className:"container px-4 mx-auto flex flex-wrap items-center justify-between",children:Object(j.jsxs)("div",{className:"w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start",children:[Object(j.jsx)("a",{className:"text-gray-800 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase",href:"/",children:"This Or That Helper"}),Object(j.jsx)("button",{className:"cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none",type:"button",onClick:function(){return a(!n)},children:Object(j.jsx)("i",{className:"text-gray-800 fas fa-bars"})})]})})})})},x=function(e){try{var t=decodeURIComponent(e).split(" - "),n=Object(s.a)(t,2),a=n[0],c=n[1],r=c.replace(/[^0-9.]/g,"");return!r||function(e,t){if(1!==t.length)throw new Error("Invalid search character for containsMultiple specified.");var n,a=!1,c=Object(o.a)(e);try{for(c.s();!(n=c.n()).done;)if(n.value===t){if(a)return!0;a=!0}}catch(r){c.e(r)}finally{c.f()}return!1}(r,".")?{success:!1,error:"".concat(c," is not a valid number")}:{success:!0,result:{name:a,display:c,value:parseFloat(r)}}}catch(l){return{success:!1,error:"Unknown error parsing ".concat(e)}}},f=function(e,t){return t.find((function(t){return t.name.toLowerCase().includes(e)}))},m=function(e,t){var n=e.name.toLocaleLowerCase(),a=t.name.toLocaleLowerCase();return n.localeCompare(a)};function p(){var e,t,n,c,r=Object(u.c)("i",u.a),l=Object(s.a)(r,2),p=l[0],h=l[1],v=Object(a.useState)(!(null===p||void 0===p?void 0:p.length)),O=Object(s.a)(v,2),g=O[0],w=O[1],y=Object(a.useState)(),N=Object(s.a)(y,2),C=N[0],k=N[1],L=Object(a.useState)(),F=Object(s.a)(L,2),S=F[0],R=F[1],I=Object(a.useState)(""),T=Object(s.a)(I,2),G=T[0],M=T[1],U=Object(a.useState)(),E=Object(s.a)(U,2),A=E[0],B=E[1],H=Object(a.useMemo)((function(){var e=[];if(p){var t,n=Object(o.a)(p);try{for(n.s();!(t=n.n()).done;){var a=t.value;if(a){var c=x(a),r=c.success,l=c.result;c.error;r&&l&&e.push(l)}}}catch(s){n.e(s)}finally{n.f()}}return void 0===A&&B(e.map((function(e){return"".concat(e.name," - ").concat(e.display)})).join("\n")),e}),[p,A]),J=Object(a.useMemo)((function(){var e=null===S||void 0===S?void 0:S[0],t=null===S||void 0===S?void 0:S[1];return e&&t?e.value>t.value?e:t:void 0}),[S]);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(b,{}),Object(j.jsxs)("main",{children:[Object(j.jsx)("section",{className:"bg-gray-300",children:Object(j.jsx)("div",{className:"container mx-auto px-4",children:Object(j.jsxs)("div",{className:"flex flex-wrap",children:[C?Object(j.jsxs)("div",{className:"text-white w-full mt-10 px-6 py-4 border-0 rounded relative bg-red-500",children:[Object(j.jsx)("span",{className:"text-xl inline-block mr-5 align-middle",children:Object(j.jsx)("i",{className:"fas fa-bell"})}),Object(j.jsx)("span",{className:"inline-block align-middle mr-8",children:C})]}):null,Object(j.jsxs)("div",{className:"py-6 w-full px-4",children:[Object(j.jsxs)("button",{type:"button",className:"inline-flex flex items-center justify-center space-x-1 rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5",onClick:function(){return w((function(e){return!e}))},children:[Object(j.jsxs)("span",{children:[g?"Hide":"Show"," Raw List"]}),Object(j.jsx)(d.a,{icon:g?i.b:i.a})]}),Object(j.jsxs)("button",{type:"button",className:"ml-4 inline-flex flex items-center justify-center space-x-1 rounded-md border border-red-300 px-4 py-2 bg-white text-base leading-6 font-medium text-red-700 shadow-sm hover:text-red-500 focus:outline-none focus:border-red-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5",onClick:function(){B(""),h(void 0),R(void 0),M("")},children:[Object(j.jsx)("span",{children:"Clear List"}),Object(j.jsx)(d.a,{icon:i.c})]}),g&&Object(j.jsx)("div",{className:"rounded mt-4",children:Object(j.jsx)("textarea",{rows:8,cols:80,onChange:function(e){var t=e.target.value;k(void 0),B(t);var n=t.split("\n").map((function(e){return encodeURIComponent(e.trim())}));n.reduce((function(e,t){return e+t.length+3}),window.location.host.length)>8201?(k("URL length exceeds ".concat(8201," characters - users will have to copy & paste items manually.")),h(void 0)):h(n)},className:"px-3 py-3 placeholder-gray-400 text-gray-700 bg-white text-sm shadow focus:outline-none focus:shadow-outline w-full",placeholder:"Name - Value",value:A})})]})]})})}),Object(j.jsx)("section",{className:"pb-20",children:Object(j.jsx)("div",{className:"container mx-auto px-4",children:Object(j.jsxs)("div",{className:"flex flex-col-reverse lg:flex-row",children:[Object(j.jsx)("div",{className:"w-full lg:w-1/4 pt-8 px-4",children:H.sort(m).map((function(e){return Object(j.jsxs)("button",{className:"w-full align-start text-left inline-flex space-x-4 hover:underline",onClick:function(){return function(e){var t=null!==S&&void 0!==S?S:[],n=Object(s.a)(t,2),a=n[0],c=n[1];if(a&&c)R([e,void 0]),M("".concat(e.name,".."));else if(void 0===a){var r;R((function(t){return[e,null===t||void 0===t?void 0:t[1]]})),M("".concat(e.name,"..").concat(null!==(r=null===c||void 0===c?void 0:c.name)&&void 0!==r?r:""))}else void 0===c&&(M("".concat(a.name,"..").concat(e.name)),R((function(t){return[null===t||void 0===t?void 0:t[0],e]})))}(e)},children:[Object(j.jsx)("span",{style:{flexGrow:1},children:e.name}),Object(j.jsx)("span",{children:e.display})]},e.name)}))}),Object(j.jsxs)("div",{className:"w-full lg:w-3/4 pt-8 px-4 flex-grow",style:{flexGrow:1},children:[Object(j.jsxs)("p",{className:"mb-4",children:[Object(j.jsx)("strong",{children:"Formula help:"}),' Type enough characters for a unique match for each item that is being compared, separated by \'..\' For example, to compare "Apple" and "Orange" you could type "app..ora"']}),Object(j.jsx)("input",{type:"text",className:"w-full transition-colors duration-100 ease-in-out focus:outline-0 border border-transparent focus:bg-white focus:border-gray-300 placeholder-gray-600 rounded-lg bg-gray-200 py-2 px-4 block w-full appearance-none leading-normal ds-input",placeholder:"Enter formula",value:G,onChange:function(e){var t=e.target.value;console.log(t),M(t);var n=t.split(".."),a=Object(s.a)(n,2),c=a[0],r=a[1],l=c?f(c.toLowerCase(),H):void 0,o=r?f(r.toLowerCase(),H):void 0;R([l,o])},onFocus:function(e){return e.target.select()}}),Object(j.jsxs)("div",{className:"my-10 flex",children:[Object(j.jsxs)("span",{className:"flex align-center justify-center text-center",style:{flexGrow:1},children:[null===S||void 0===S||null===(e=S[0])||void 0===e?void 0:e.name,Object(j.jsx)("br",{}),null===S||void 0===S||null===(t=S[0])||void 0===t?void 0:t.display]}),Object(j.jsxs)("span",{className:"flex align-center justify-center text-center",style:{flexGrow:1},children:[null===S||void 0===S||null===(n=S[1])||void 0===n?void 0:n.name,Object(j.jsx)("br",{}),null===S||void 0===S||null===(c=S[1])||void 0===c?void 0:c.display]})]}),Object(j.jsx)("div",{className:"my-10 flex w-full",children:Object(j.jsx)("p",{className:"text-center w-full text-4xl",children:Object(j.jsx)("strong",{children:null===J||void 0===J?void 0:J.name})})})]})]})})})]})]})}var h=n(26),v=n(3);var O=function(){return Object(j.jsx)(h.a,{children:Object(j.jsx)(u.b,{ReactRouterRoute:v.a,children:Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(p,{})})})})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,55)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,l=t.getTTFB;n(e),a(e),c(e),r(e),l(e)}))};l.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(O,{})}),document.getElementById("root")),g()}},[[54,1,2]]]);
//# sourceMappingURL=main.6a977bf4.chunk.js.map