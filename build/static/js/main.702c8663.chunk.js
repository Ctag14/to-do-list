(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,a,t){e.exports=t(232)},107:function(e,a,t){},108:function(e,a,t){},232:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),c=t(89),s=t.n(c),r=(t(107),t(108),t(10)),o=t(5),m=t(13),d=function(e){var a=e.tasks,t=e.tasksToday,n=e.setInViewSelect,c=e.completed;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"navModal",onClick:function(){n(!1)}}),l.a.createElement("div",{className:"viewSelection"},l.a.createElement(m.b,{onClick:function(){n(!1)},className:"viewSelection__Link",to:"/today",style:function(e){return{color:e.isActive&&"white",fontWeight:400}}},"Today",l.a.createElement("span",{className:"viewSelection__num"},t(a))),l.a.createElement(m.b,{onClick:function(){n(!1)},className:"viewSelection__Link",to:"/upcoming",style:function(e){return{color:e.isActive&&"white",fontWeight:400}}},"Upcoming",l.a.createElement("span",{className:"viewSelection__num"},a.length)),l.a.createElement(m.b,{onClick:function(){n(!1)},className:"viewSelection__Link",to:"/completed",style:function(e){return{color:e.isActive&&"white",fontWeight:400}}},"Completed",l.a.createElement("span",{className:"viewSelection__num"},c.length))))},i=t(4),u=t(27),p=t(21),E=t(8),_=t(235),g=function(e){var a=e.addOrUpdateTask,t=e.setOpenModal,n=E.c({name:E.d().max(30,"Must be 30 charcters or less").required("Task Name is required"),date:E.b().required("Date is required"),description:E.d().max(100,"Notes must be less than 100 characters"),type:E.a()});return l.a.createElement(i.d,{initialValues:{name:"",date:Object(_.a)(new Date,"yyyy-MM-dd"),type:!1,description:"",comments:""},validationSchema:n,onSubmit:function(e){a(e,"add")}},l.a.createElement(i.c,null,l.a.createElement("div",{className:"newTask__container"},l.a.createElement("div",{className:"newTask__containerRow1"},l.a.createElement(i.b,{className:"newTask__name",type:"text",id:"name",name:"name",placeholder:"Task name"}),l.a.createElement(i.a,{name:"name"}),l.a.createElement(i.b,{className:"newTask__description",type:"text",id:"description",name:"description",placeholder:"Description"})),l.a.createElement("div",{className:"newTask__containerRow2"},l.a.createElement("label",{htmlFor:"date"},l.a.createElement(p.a,{className:"newTask__calendar"}),l.a.createElement(i.b,{className:"newTask__date",type:"date",id:"date",name:"date"}),l.a.createElement(i.a,{name:"date"})),l.a.createElement("label",{className:"newTask__typeLabel",htmlFor:"type"},l.a.createElement(i.b,{className:"newTask__type",type:"checkbox",id:"type",name:"type"}),l.a.createElement("span",{className:"bell"},l.a.createElement(u.a,null))),l.a.createElement("div",{className:"btngrp"},l.a.createElement("button",{className:"newTask__cancel",onClick:function(){t(!1)}}," Cancel "),l.a.createElement("button",{className:"newTask__add",type:"submit"}," Add "))))))},b=t(28),h=t(237),N=function(e){var a=e.selectedTask,t=e.completeSelected,c=e.addOrUpdateTask,s=e.modalType,r=e.deleteTask,m="completed"===s,d=Object(n.useState)(!1),u=Object(o.a)(d,2),g=u[0],N=u[1],f=E.c({name:E.d().max(30,"Must be 30 charcters or less").required("Task Name is required"),date:E.b().required("Date is required"),description:E.d().max(100,"Notes must be less than 100 characters"),Type:E.a(),comments:E.d().max(100,"Must be 100 charcters or less")});return l.a.createElement(i.d,{initialValues:{id:a.id,name:a.name,date:Object(_.a)(a.date,"yyyy-MM-dd"),description:a.description,type:a.type,comments:a.comments},validationSchema:f,onSubmit:function(e){e.date=Object(h.a)(e.date),c(e,"update")}},l.a.createElement(i.c,{className:"selected ".concat(m&&"selected--completed")},l.a.createElement("div",{className:"selected__columns"},l.a.createElement("div",{className:"selected__column1"},l.a.createElement("div",{className:"selected__containerRow"},l.a.createElement("label",{htmlFor:a.name},l.a.createElement("input",{className:"selectedCheckbox__input",type:"checkbox",id:a.name,onChange:function(){return t(a,a.index)}}),l.a.createElement("div",{className:"selectedCheckbox"})),l.a.createElement("div",{className:"selected__nameCont",onFocus:function(){return N(!0)},onBlur:function(){return N(!1)},style:{border:g&&"1px solid var(--borderlineColor)"}},l.a.createElement(i.b,{className:"selected__name",type:"text",id:"name",name:"name"}),l.a.createElement(i.a,{name:"name"}),l.a.createElement("label",{className:"selected__descCont"},l.a.createElement(p.b,{className:"paraIcon"}),l.a.createElement(i.b,{className:"selected__description",type:"text",id:"description",name:"description",placeholder:"Description"})))),l.a.createElement("div",{className:"selected__commentsLine"}),l.a.createElement("div",{className:"selected__containerRow--comments"},l.a.createElement(i.b,{className:"selected__comments",type:"text",id:"comments",name:"comments",placeholder:"comments"}))),l.a.createElement("div",{className:"selected__column2"},l.a.createElement("div",{className:"selected__column2Line"}),l.a.createElement("div",{className:"selected__containerRow"},l.a.createElement("label",{className:"selected__datecont",htmlFor:"taskDate"},l.a.createElement(b.a,{className:"selectedCalendar"}),l.a.createElement(i.b,{className:"selected__date",type:"date",id:"date",name:"date"})),l.a.createElement(i.a,{name:"date"})),l.a.createElement("div",{className:"selected__column2Line"}),l.a.createElement("div",{className:"selected__containerRow"},l.a.createElement(i.b,{className:"selected__type",type:"checkbox",id:"type",name:"type"}),l.a.createElement("label",{className:"selected__typeLabel",htmlFor:"type"},"Urgent")),l.a.createElement("div",{className:"column2Line"}),!m&&l.a.createElement("button",{className:"selected__save",type:"submit"}," Update "),!m&&l.a.createElement("button",{className:"selected__delete",type:"delete",onClick:function(){r(a.id)}},"Delete")))))},f=t(236),k=function(e){var a=e.openModal,t=e.selectedTask,n=e.completeSelected,c=e.setOpenModal,s=e.addOrUpdateTask,r=e.modalType,o=e.deleteTask;return l.a.createElement(l.a.Fragment,null,l.a.createElement(f.a,{in:a,timeout:100,classNames:"modalTransition",unmountOnExit:!0},l.a.createElement("div",{className:"modal"},l.a.createElement("div",{className:"modal__Background",onClick:function(){c(!1)}}),l.a.createElement("div",{className:"modal__dialog"},l.a.createElement("div",{className:"modal__close"},l.a.createElement("button",{className:"modal__x",onClick:function(){return c(!1)}},"x")),"add"===r&&l.a.createElement(g,{addOrUpdateTask:s,setOpenModal:c}),"update"===r&&l.a.createElement(N,{addOrUpdateTask:s,selectedTask:t,completeSelected:n,setOpenModal:c,modalType:r,deleteTask:o}),"completed"===r&&l.a.createElement(N,{selectedTask:t,completeSelected:n,setOpenModal:c,modalType:r})))))},v=t(3),y=t(233),T=t(22),w=function(e){var a=e.onClick;return l.a.createElement("button",{onClick:a,className:"addTask"},l.a.createElement(b.c,{className:"addTask__plusIcon"}),l.a.createElement("p",null,"Add Task"))},O=t(96),S=function(e){var a=e.tasks,t=e.selectTask,c=e.completedSelected,s=e.setOpenModal,r=e.setModalType,m=e.tasksToday,d=e.getTasks,i=Object(n.useState)(!0),E=Object(o.a)(i,2),g=E[0],b=E[1];return Object(n.useEffect)(function(){d(),console.log("tasks loaded"),setTimeout(function(){b(!1)},5e3)},[]),g?l.a.createElement("div",{className:"loader"},l.a.createElement(O.a,{color:"white",ariaLabel:"loading-indicator"})):0===m(a)?l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",{className:"today__header"}," Today ",l.a.createElement("span",{className:"today__date"},Object(_.a)(new Date,"ccc MMM d "))),l.a.createElement(w,{onClick:function(){r("add"),s(!0)}}),l.a.createElement(T.b,{className:"noTasks"}),l.a.createElement("div",{className:"noTasks__message"},"No Tasks for Today !")):l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",{className:"today__header"}," Today ",l.a.createElement("span",{className:"today__date"},Object(_.a)(new Date,"ccc MMM d "))),a.map(function(e,a){if(Object(y.a)(e.date))return l.a.createElement("div",{className:"container",key:a},l.a.createElement("label",null,l.a.createElement("input",{className:"checkbox__input",type:"checkbox",onChange:function(){c(e,a)}}),l.a.createElement("div",{className:"checkbox"})),l.a.createElement("div",{onClick:function(){t(e,a,!1)},className:"task"},l.a.createElement("div",{className:"task__name"},e.name),e.description&&l.a.createElement("div",{className:"task__description"},e.description),l.a.createElement("div",{className:"task__date"},l.a.createElement(p.a,null),Object(_.a)(e.date,"MMM d")),e.type&&l.a.createElement("span",{className:"task__urgent"},"Urgent ",l.a.createElement(u.a,null))))}),m(a)>0&&l.a.createElement(w,{onClick:function(){r("add"),s(!0)}}))},j=t(238),M=t(234),C=t(29),x=function(e){var a=e.tasks,t=e.setOpenModal,n=e.selectTask,c=e.completedSelected,s=e.setModalType;e.getTasks;return 0===a.length?l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",{className:"today__header"}," Today ",l.a.createElement("span",{className:"today__date"},Object(_.a)(new Date,"ccc MMM d "))),l.a.createElement(w,{onClick:function(){s("add"),t(!0)}}),l.a.createElement(T.b,{className:"noTasks"}),l.a.createElement("div",{className:"noTasks__message"},"No Upcoming Tasks!")):l.a.createElement(l.a.Fragment,null,a.map(function(e,r){return l.a.createElement(l.a.Fragment,{key:r},function(e,n){return 0===n?l.a.createElement("h1",{className:"dayHeader"},Object(_.a)(e.date,"MMM d")," \u2022",Object(y.a)(e.date)&&l.a.createElement("span",null," Today \u2022"),Object(j.a)(e.date)&&l.a.createElement("span",null," Yesterday \u2022"),Object(M.a)(e.date)&&l.a.createElement("span",null," Tomorrow \u2022"),Object(_.a)(e.date," eeee")):Object(C.a)(a[n-1].date,e.date)?void 0:l.a.createElement(l.a.Fragment,null,l.a.createElement(w,{onClick:function(){s("add"),t(!0)}}),l.a.createElement("h1",{className:"dayHeader"},Object(_.a)(e.date,"MMM d")," \u2022",Object(y.a)(e.date)&&l.a.createElement("span",null," Today \u2022"),Object(j.a)(e.date)&&l.a.createElement("span",null," Yesterday \u2022"),Object(M.a)(e.date)&&l.a.createElement("span",null," Tomorrow \u2022"),Object(_.a)(e.date," eeee")))}(e,r),l.a.createElement("div",{className:"container"},l.a.createElement("label",null,l.a.createElement("input",{className:"checkbox__input",type:"checkbox",onChange:function(){c(e,r)}}),l.a.createElement("div",{className:"checkbox"})),l.a.createElement("div",{onClick:function(){n(e,r,!1)},className:"task"},l.a.createElement("div",{className:"task__name"},e.name),e.description&&l.a.createElement("div",{className:"task__description"},e.description),l.a.createElement("div",{className:"task__date"},l.a.createElement(p.a,null),Object(_.a)(e.date,"MMM d")),e.type&&l.a.createElement("span",{className:"task__urgent"},"Urgent ",l.a.createElement(u.a,null)))),r===a.length-1&&l.a.createElement(w,{onClick:function(){s("add"),t(!0)}}))}))},q=function(){var e=Object(v.g)();return l.a.createElement("h1",{className:"nav__header"},e.pathname.slice(1))},I=function(e){var a=e.inViewSelect,t=e.setInViewSelect;if(null!=localStorage.getItem("userId"))return l.a.createElement("nav",{className:"nav"},l.a.createElement("button",{className:"nav__Menu",onClick:function(){t(!a)}},l.a.createElement(b.b,{className:"nav__icon"})),l.a.createElement(q,{className:"nav__Page"}),l.a.createElement("button",{className:"nav__logout",onClick:function(){localStorage.removeItem("userId"),window.location.reload()}},"Log-Out"))},F=function(e){var a=e.completed,t=e.selectTask;return 0===a.length?l.a.createElement(l.a.Fragment,null,l.a.createElement(T.b,{className:"noTasks"}),l.a.createElement("div",{className:"noTasks__message"},"No Completed Tasks!")):l.a.createElement(l.a.Fragment,null,a.map(function(e,n){return l.a.createElement(l.a.Fragment,{key:n},function(e,t){return 0===t?l.a.createElement("h1",{className:"dayHeader"},Object(_.a)(e.date,"MMM d \u2022 eeee")):Object(C.a)(a[t-1].date,e.date)?void 0:l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",{className:"dayHeader"},Object(_.a)(e.date,"MMM d \u2022 eeee")))}(e,n),l.a.createElement("div",{className:"container"},l.a.createElement(T.a,{className:"task__completedCheck"}),l.a.createElement("div",{onClick:function(){t(e,n,!0)},className:"task"},l.a.createElement("div",{className:"task__name"},e.name),e.description&&l.a.createElement("div",{className:"task__description"},e.description))))}))},U=t(14),A=t.n(U),L=t(95),D=t.n(L),P=function(){var e=Object(v.h)(),a=Object(n.useState)(),t=Object(o.a)(a,2),c=t[0],s=t[1];Object(n.useEffect)(function(){localStorage.getItem("userId")?e("/today"):e("/login")},[]);var r=E.c({username:E.d().min(6,"Username must be more than 6 character ").max(15,"Must be 15 charcters or less").required("Username is required").matches(/^[a-zA-Z0-9_-]+$/,"Username contains invalid characters"),password:E.d().required("Password is required")});return l.a.createElement(i.d,{initialValues:{username:"",password:""},validationSchema:r,onSubmit:function(a){A.a.post("http://localhost/login.php",a).then(function(a){console.log(a.data),"string"===typeof a.data?s(a.data):(localStorage.setItem("userId",a.data),console.log("logged in"),e("/today"))}).catch(function(e){e.response?(console.log(e.response.data),console.log(e.response.status),console.log(e.response.headers)):e.request?console.log(e.request):console.log("Error",e.message),console.log(e.config)}),console.log("waited")}},l.a.createElement(i.c,null,l.a.createElement("div",{className:"login"},l.a.createElement("div",{className:"login__banner"},"Sign-in"),c&&l.a.createElement("div",{className:"login__error"},c),l.a.createElement("div",{className:"login__row"},l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"username",className:"login__label"},"Username")),l.a.createElement(i.b,{className:"login__input",type:"text",id:"username",name:"username",placeholder:"Enter you Username..."}),l.a.createElement(i.a,{name:"username"})),l.a.createElement("div",{className:"login__row"},l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"password",className:"login__label"},"Password")),l.a.createElement(i.b,{className:"login__input",type:"password",id:"password",name:"password",placeholder:"Enter you Password..."}),l.a.createElement(i.a,{name:"password"})),l.a.createElement("button",{className:"login__button",type:"submit"},"Log in"),l.a.createElement("div",{className:"login__create"},"Don\u2019t have an account? ",l.a.createElement(m.b,{className:"login_createLink",to:"../signup"},"Sign up")))))},V=function(){var e=Object(n.useState)(),a=Object(o.a)(e,2),t=a[0],c=a[1],s=Object(v.h)(),r=E.c({username:E.d().min(6,"Username must be more than 6 character ").max(15,"Must be 15 charcters or less").required("Username is required").matches(/^[a-zA-Z0-9_-]+$/,"Username contains invalid characters"),password:E.d().min(8,"Password must be more than 6 character ").max(15,"Pasword must be 15 characters or less").required("Password is required").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,"Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character")});return l.a.createElement(i.d,{initialValues:{username:"",password:""},validationSchema:r,onSubmit:function(e){A.a.post("http://localhost/create-user.php",e).then(function(e){"<Username Taken"==e.data?c("Username Taken"):(localStorage.setItem("userId",e.data),s("/today"))}).catch(function(e){e.response?(console.log(e.response.data),console.log(e.response.status),console.log(e.response.headers)):e.request?console.log(e.request):console.log("Error",e.message),console.log(e.config)})}},l.a.createElement(i.c,null,l.a.createElement("div",{className:"login"},l.a.createElement("div",{className:"login__banner"},"Create Account"),t&&l.a.createElement("div",{className:"login__error"},t),l.a.createElement("div",{className:"login__row"},l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"username",className:"login__label"},"Username")),l.a.createElement(i.b,{className:"login__input",type:"text",id:"username",name:"username",placeholder:"Enter you Username..."}),l.a.createElement(i.a,{name:"username"})),l.a.createElement("div",{className:"login__row"},l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"password",className:"login__label"},"Password")),l.a.createElement(i.b,{className:"login__input",type:"password",id:"password",name:"password",placeholder:"Enter you Password..."}),l.a.createElement(i.a,{name:"password"})),l.a.createElement("button",{className:"login__button",type:"submit"},"Create Account"))))},R=function(){return null!=localStorage.getItem("userId")?l.a.createElement(v.b,null):l.a.createElement(P,null)&&l.a.createElement(v.a,{to:"/login"})};function H(e,a){var t="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,a){if(!e)return;if("string"===typeof e)return B(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return B(e,a)}(e))||a&&e&&"number"===typeof e.length){t&&(e=t);var n=0,l=function(){};return{s:l,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:l}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,s=!0,r=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return s=e.done,e},e:function(e){r=!0,c=e},f:function(){try{s||null==t.return||t.return()}finally{if(r)throw c}}}}function B(e,a){(null==a||a>e.length)&&(a=e.length);for(var t=0,n=new Array(a);t<a;t++)n[t]=e[t];return n}var $=function(){var e=Object(n.useState)(!1),a=Object(o.a)(e,2),t=a[0],c=a[1],s=Object(n.useState)(!1),i=Object(o.a)(s,2),u=i[0],p=i[1],E=Object(n.useState)(null),g=Object(o.a)(E,2),b=g[0],N=g[1],T=Object(n.useState)(!1),w=Object(o.a)(T,2),O=w[0],j=w[1],M=Object(n.useState)([]),C=Object(o.a)(M,2),q=C[0],U=C[1],L=Object(n.useState)([]),B=Object(o.a)(L,2),$=B[0],z=B[1];function W(){var e=localStorage.getItem("userId");A.a.get("http://localhost/get-tasks.php",{params:{userId:e}}).then(function(e){var a,t=[],n=[],l=H(e.data.map(function(e){return e.date=Object(h.a)(e.date),e.type="1"===e.type,e}));try{for(l.s();!(a=l.n()).done;){var c=a.value;0===c.completed?n.push(c):t.push(c)}}catch(s){l.e(s)}finally{l.f()}z(n),U(t)}).catch(function(e){e.response?(console.log(e.response.data),console.log(e.response.status),console.log(e.response.headers)):e.request?console.log(e.request):console.log("Error",e.message),console.log(e.config)})}function Z(e,a){e.completed="1",A.a.put("http://localhost/complete-task.php",e).catch(function(e){e.response?(console.log(e.response.data),console.log(e.response.status),console.log(e.response.headers)):e.request?console.log(e.request):console.log("Error",e.message),console.log(e.config)});var t=Object(r.a)($),n=t.splice(a,1);z(t),U([].concat(Object(r.a)(q),Object(r.a)(n))),j(!1)}function J(e,a){if("add"===a){e.date=Object(h.a)(e.date),e.uID=localStorage.getItem("userId");var t=D()(e);t.date=Object(_.a)(t.date,"yyyy-MM-dd HH:mm:ss"),A.a.post("http://localhost/add-task.php",t).then(function(a){var t=a.data;e.id=t,z([].concat(Object(r.a)($),[e]))}).catch(function(e){e.response?(console.log(e.response.data),console.log(e.response.status),console.log(e.response.headers)):e.request?console.log(e.request):console.log("Error",e.message),console.log(e.config)})}else if("update"===a){A.a.put("http://localhost/update-task.php",e);var n=$.map(function(a){return a.id===e.id?e:a}).catch(function(e){e.response?(console.log(e.response.data),console.log(e.response.status),console.log(e.response.headers)):e.request?console.log(e.request):console.log("Error",e.message),console.log(e.config)});z(n)}j(!1)}function Y(e,a,t){e.index=a,N(e),c(t?"completed":"update"),j(!0)}function G(e){return e.filter(function(e){return Object(y.a)(e.date)}).length}return l.a.createElement(l.a.Fragment,null,l.a.createElement(k,{openModal:O,modalType:t,selectedTask:b,completeSelected:Z,setOpenModal:j,addOrUpdateTask:J,deleteTask:function(e){A.a.delete("http://localhost/delete-task.php",{data:{id:e}}).catch(function(e){e.response?(console.log(e.response.data),console.log(e.response.status),console.log(e.response.headers)):e.request?console.log(e.request):console.log("Error",e.message),console.log(e.config)});var a=$.filter(function(a){return a.id!==e});z(a),j(!1)}}),l.a.createElement(m.a,null,l.a.createElement(I,{setInViewSelect:p,inViewSelect:u}),l.a.createElement(f.a,{in:u,timeout:250,classNames:"nmodal",unmountOnExit:!0},l.a.createElement(d,{setInViewSelect:p,tasks:$,tasksToday:G,completed:q,addOrUpdateTask:J})),l.a.createElement("div",{className:"view"},l.a.createElement(v.e,null,l.a.createElement(v.c,{path:"*",element:l.a.createElement(P,null)}),l.a.createElement(v.c,{path:"/",element:l.a.createElement(P,null)}),l.a.createElement(v.c,{path:"/login",element:l.a.createElement(P,null)}),l.a.createElement(v.c,{path:"/signup",element:l.a.createElement(V,null)}),l.a.createElement(v.c,{element:l.a.createElement(R,null)},l.a.createElement(v.c,{path:"/today",element:l.a.createElement(S,{getTasks:W,tasks:$,selectTask:Y,setSelectedTask:N,setOpenModal:j,completedSelected:Z,setModalType:c,tasksToday:G})}),l.a.createElement(v.c,{path:"/upcoming",element:l.a.createElement(x,{getTasks:W,tasks:$,selectTask:Y,setOpenModal:j,setSelectedTask:N,completedSelected:Z,setModalType:c})}),l.a.createElement(v.c,{path:"/completed",element:l.a.createElement(F,{completed:q,selectTask:Y})}))))))},z=(t(231),function(){return l.a.createElement("div",{className:"App"},l.a.createElement($,null))}),W=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,239)).then(function(a){var t=a.getCLS,n=a.getFID,l=a.getFCP,c=a.getLCP,s=a.getTTFB;t(e),n(e),l(e),c(e),s(e)})};s.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(z,null))),W()}},[[100,1,2]]]);
//# sourceMappingURL=main.702c8663.chunk.js.map