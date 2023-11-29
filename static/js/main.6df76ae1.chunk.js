(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var a,s=c(8),n=c.n(s),o=c(5),r=c(1),i=(c(13),c(14),c(6)),d=c.n(i),l=c(2);function j(e,t){switch(t.type){case"setTodos":return Object(l.a)(Object(l.a)({},e),{},{todos:t.payload});case"setOpenedTodo":return Object(l.a)(Object(l.a)({},e),{},{openedTodo:t.payload});case"setUser":return Object(l.a)(Object(l.a)({},e),{},{user:t.payload});case"setFilterOption":return Object(l.a)(Object(l.a)({},e),{},{filter:Object(l.a)(Object(l.a)({},e.filter),{},{option:t.payload})});case"setFilterQuery":return Object(l.a)(Object(l.a)({},e),{},{filter:Object(l.a)(Object(l.a)({},e.filter),{},{query:t.payload})});case"setIsModalOpened":return Object(l.a)(Object(l.a)({},e),{},{isModalOpened:t.payload});case"setIsLoadingTodos":return Object(l.a)(Object(l.a)({},e),{},{isLoadingTodos:t.payload});case"setIsLoadingUser":return Object(l.a)(Object(l.a)({},e),{},{isLoadingUser:t.payload});default:return Object(l.a)({},e)}}!function(e){e.All="all",e.Active="active",e.Completed="completed"}(a||(a={}));var u=c(0),b=function(){},p={todos:[],openedTodo:{id:0,title:"",completed:!1,userId:0},user:{id:0,name:"",email:"",phone:""},filter:{option:a.All,query:""},isModalOpened:!1,isLoadingTodos:!0,isLoadingUser:!0},O=Object(r.createContext)(b),h=Object(r.createContext)(p),m=function(e){var t=e.children,c=Object(r.useReducer)(j,p),a=Object(o.a)(c,2),s=a[0],n=a[1];return Object(u.jsx)(O.Provider,{value:n,children:Object(u.jsx)(h.Provider,{value:s,children:t})})},f=function(e){var t=e.todos,c=Object(r.useContext)(O),a=Object(r.useContext)(h),s=a.openedTodo,n=a.isModalOpened;return Object(u.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"#"}),Object(u.jsx)("th",{children:Object(u.jsx)("span",{className:"icon",children:Object(u.jsx)("i",{className:"fas fa-check"})})}),Object(u.jsx)("th",{children:"Title"}),Object(u.jsx)("th",{children:" "})]})}),Object(u.jsx)("tbody",{children:t.map((function(e){return Object(u.jsxs)("tr",{"data-cy":"todo",className:d()({"has-background-info-light":e.id===s.id}),children:[Object(u.jsx)("td",{className:"is-vcentered",children:e.id}),Object(u.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(u.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(u.jsx)("i",{className:"fas fa-check"})})}),Object(u.jsx)("td",{className:"is-vcentered is-expanded",children:Object(u.jsx)("p",{className:d()({"has-text-success":e.completed,"has-text-danger":!e.completed}),children:e.title})}),Object(u.jsx)("td",{className:"has-text-right is-vcentered",children:Object(u.jsx)("button",{type:"button","data-cy":"selectButton",className:"button",onClick:function(){return function(e){c({type:"setOpenedTodo",payload:e}),c({type:"setIsModalOpened",payload:!0})}(e)},children:Object(u.jsx)("span",{className:"icon",children:Object(u.jsx)("i",{className:d()("far",{"fa-eye":!n,"fa-eye-slash":n})})})})})]},e.id)}))})]})},x=function(){var e=Object(r.useContext)(O),t=Object(r.useContext)(h).filter.query;return Object(u.jsxs)("form",{className:"field has-addons",onSubmit:function(e){e.preventDefault()},children:[Object(u.jsx)("p",{className:"control",children:Object(u.jsx)("span",{className:"select",children:Object(u.jsx)("select",{"data-cy":"statusSelect",onChange:function(t){e({type:"setFilterOption",payload:t.target.value})},children:Object.entries(a).map((function(e){var t=Object(o.a)(e,2),c=t[0],a=t[1];return Object(u.jsx)("option",{value:a,children:c},c)}))})})}),Object(u.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(u.jsx)("input",{type:"text","data-cy":"searchInput",value:t,placeholder:"Search...",className:"input",onChange:function(t){e({type:"setFilterQuery",payload:t.target.value})}}),Object(u.jsx)("span",{className:"icon is-left",children:Object(u.jsx)("i",{className:"fas fa-magnifying-glass"})}),t.length>0&&Object(u.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(u.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return e({type:"setFilterQuery",payload:""})}})})]})]})},y=(c(16),function(){return Object(u.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(u.jsx)("div",{className:"Loader__content"})})}),v=c(4),N=c(3),g=c.n(N),C="https://mate-academy.github.io/react_dynamic-list-of-todos/api";function T(e){return new Promise((function(t){setTimeout(t,e)}))}function k(e){return w.apply(this,arguments)}function w(){return(w=Object(v.a)(g.a.mark((function e(t){var c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=C+t+".json",e.abrupt("return",T(300).then((function(){return fetch(c)})).then((function(e){return e.json()})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(){return(L=Object(v.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",k("/users/".concat(t)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var I=function(e){var t=e.todo,c=Object(r.useContext)(O),a=Object(r.useContext)(h),s=a.user,n=a.isLoadingUser;return Object(r.useEffect)((function(){(function(e){return L.apply(this,arguments)})(t.userId).then((function(e){c({type:"setUser",payload:e}),c({type:"setIsLoadingUser",payload:!1})}))}),[t,c]),Object(u.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(u.jsx)("div",{className:"modal-background"}),n?Object(u.jsx)(y,{}):Object(u.jsxs)("div",{className:"modal-card",children:[Object(u.jsxs)("header",{className:"modal-card-head",children:[Object(u.jsx)("div",{"data-cy":"modal-header",className:"modal-card-title has-text-weight-medium",children:"Todo #".concat(t.id)}),Object(u.jsx)("button",{type:"button","data-cy":"modal-close",className:"delete",onClick:function(){c({type:"setOpenedTodo",payload:{id:0,title:"",completed:!1,userId:0}}),c({type:"setIsModalOpened",payload:!1}),c({type:"setIsLoadingUser",payload:!0})}})]}),Object(u.jsxs)("div",{className:"modal-card-body",children:[Object(u.jsx)("p",{"data-cy":"modal-title",className:"block",children:t.title}),Object(u.jsxs)("p",{"data-cy":"modal-user",className:"block",children:[Object(u.jsx)("strong",{className:d()({"has-text-success":t.completed,"has-text-danger":!t.completed}),children:t.completed?"Done":"Planned"})," by ",Object(u.jsx)("a",{href:"mailto:".concat(s.email),children:s.name})]})]})]})]})};function U(){return(U=Object(v.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",k("/todos"));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var M=function(){var e=Object(r.useContext)(O),t=Object(r.useContext)(h),c=t.todos,s=t.openedTodo,n=t.filter,i=t.isModalOpened,d=t.isLoadingTodos,l=Object(r.useCallback)((function(e){var t=n.option,c=n.query;return function(e,t){return e.filter((function(e){return e.title.toLowerCase().includes(t.toLowerCase())}))}(function(e,t){switch(t){case a.All:default:return e;case a.Active:return e.filter((function(e){return!e.completed}));case a.Completed:return e.filter((function(e){return e.completed}))}}(e,t),c)}),[n]),j=Object(r.useState)(l(c)),b=Object(o.a)(j,2),p=b[0],m=b[1];return Object(r.useEffect)((function(){(function(){return U.apply(this,arguments)})().then((function(t){e({type:"setTodos",payload:t}),e({type:"setIsLoadingTodos",payload:!1})}))}),[e]),Object(r.useEffect)((function(){m(l(c))}),[c,n,l]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"section",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"box",children:[Object(u.jsx)("h1",{className:"title",children:"Todos:"}),Object(u.jsx)("div",{className:"block",children:Object(u.jsx)(x,{})}),Object(u.jsxs)("div",{className:"block",children:[d&&Object(u.jsx)(y,{}),!d&&c.length>0&&Object(u.jsx)(f,{todos:p})]})]})})}),i&&Object(u.jsx)(I,{todo:s})]})};n.a.render(Object(u.jsx)(m,{children:Object(u.jsx)(M,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.6df76ae1.chunk.js.map