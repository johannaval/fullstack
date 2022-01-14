(this["webpackJsonpbloglist-frontend"]=this["webpackJsonpbloglist-frontend"]||[]).push([[0],{121:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(36),i=n.n(a),s=n(26),j=n.n(s),o=n(33),l=n(41),u=n(12),b=n(169),d=n(2),O=function(e){var t=e.notification;return t?"success"===t.type?Object(d.jsxs)("div",{children:[Object(d.jsxs)(b.a,{severity:"success",children:[" ",t.message]}),Object(d.jsx)("br",{})]}):Object(d.jsxs)("div",{children:[Object(d.jsxs)(b.a,{severity:"error",children:[" ",t.message]}),Object(d.jsx)("br",{})]}):null},h=n(172),x=n(170),f=r.a.forwardRef((function(e,t){var n=Object(c.useState)(!1),r=Object(u.a)(n,2),a=r[0],i=r[1],s={display:a?"none":""},j={display:a?"":"none"},o=function(){i(!a)};return Object(c.useImperativeHandle)(t,(function(){return{toggleVisibility:o}})),Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{style:s,children:Object(d.jsx)(h.a,{variant:"contained",onClick:o,children:e.buttonLabel})}),Object(d.jsx)(x.a,{container:!0,spacing:1,children:Object(d.jsx)(x.a,{item:!0,xs:10,children:Object(d.jsxs)("div",{style:j,className:"togglableContent",children:[e.children,Object(d.jsx)("p",{}),Object(d.jsx)(h.a,{variant:"contained",color:"error",onClick:o,children:"cancel"})]})})})]})}));f.displayName="Togglable";var v=f,p=n(166),m=function(e){var t=Object(c.useState)(""),n=Object(u.a)(t,2),r=n[0],a=n[1],i=Object(c.useState)(""),s=Object(u.a)(i,2),j=s[0],o=s[1],l=Object(c.useState)(""),b=Object(u.a)(l,2),O=b[0],f=b[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"Create new blog:"}),Object(d.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.createBlog({title:r,author:j,url:O}),a(""),o(""),f("")},children:[Object(d.jsxs)(x.a,{container:!0,spacing:1,children:[Object(d.jsx)(x.a,{item:!0,xs:3,children:Object(d.jsx)("div",{children:Object(d.jsx)(p.a,{id:"outlined-basic",value:j,label:"author",variant:"outlined",onChange:function(e){var t=e.target;return o(t.value)}})})}),Object(d.jsx)(x.a,{item:!0,xs:3,children:Object(d.jsx)("div",{children:Object(d.jsx)(p.a,{id:"outlined-basic",value:r,label:"title",variant:"outlined",onChange:function(e){var t=e.target;return a(t.value)}})})}),Object(d.jsx)(x.a,{item:!0,xs:3,children:Object(d.jsx)("div",{children:Object(d.jsx)(p.a,{id:"outlined-basic",value:O,label:"url",variant:"outlined",onChange:function(e){var t=e.target;return f(t.value)}})})})]}),Object(d.jsx)("br",{}),Object(d.jsx)(h.a,{variant:"contained",type:"submit",id:"create",children:"create"})]})]})},g=n(37),k=n(174),y=n(173),S=n(175),w=n(176),C=n(177),B=n(178),E=n(179),L=function(e){var t=e.users;return Object(d.jsx)("div",{children:Object(d.jsx)(k.a,{component:y.a,children:Object(d.jsxs)(S.a,{children:[Object(d.jsx)(w.a,{children:Object(d.jsxs)(C.a,{children:[Object(d.jsx)(B.a,{children:"User"}),Object(d.jsx)(B.a,{children:"Blogs created"})]})}),Object(d.jsx)(E.a,{children:t.map((function(e){return Object(d.jsxs)(C.a,{children:[Object(d.jsx)(B.a,{children:Object(d.jsx)(g.b,{to:"/user/".concat(e.id),children:e.name})}),Object(d.jsx)(B.a,{children:e.blogs.length})]},e.id)}))})]})})})},I=function(e){var t=e.user;if(void 0===t)return null;var n=t.blogs;return Object(d.jsxs)("div",{children:[Object(d.jsx)("br",{}),Object(d.jsx)(k.a,{component:y.a,children:Object(d.jsxs)(S.a,{children:[Object(d.jsx)(w.a,{children:Object(d.jsx)(C.a,{children:Object(d.jsxs)(B.a,{children:["User ",t.name," has added blogs"]})})}),Object(d.jsx)(E.a,{children:n.map((function(e){return Object(d.jsx)(C.a,{children:Object(d.jsx)(B.a,{children:e.title})},e.id)}))})]})})]})},U=function(e){var t=e.blog,n=e.handleLike,r=e.addComment,a=Object(c.useState)(""),i=Object(u.a)(a,2),s=i[0],j=i[1];return void 0===t?null:Object(d.jsxs)("div",{children:[Object(d.jsxs)("h1",{children:[t.title," added by ",t.user.name]}),Object(d.jsxs)("h4",{children:["url: ",Object(d.jsx)("a",{href:t.url,children:t.url})," "]}),Object(d.jsxs)("h4",{children:["likes: ",t.likes,"  "]}),Object(d.jsx)(h.a,{variant:"contained",onClick:function(){return n(t.id)},children:"like"}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=t.id;r(n,s),j("")},children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:"Add new comment"}),Object(d.jsx)(p.a,{id:"outlined-basic",variant:"outlined",value:s,onChange:function(e){var t=e.target;return j(t.value)}})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("br",{}),Object(d.jsx)(h.a,{variant:"contained",type:"submit",id:"addComment",children:"Send "}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{})]})]}),Object(d.jsx)("br",{}),Object(d.jsx)(k.a,{component:y.a,children:Object(d.jsxs)(S.a,{children:[Object(d.jsx)(w.a,{children:Object(d.jsx)(C.a,{children:Object(d.jsx)(B.a,{children:"Comments"})})}),Object(d.jsx)(E.a,{children:t.comments.map((function(e){return Object(d.jsx)(C.a,{children:Object(d.jsx)(B.a,{children:e})},t.id)}))})]})})]})},A=n(180),J=n(181),N=n(167),D=n(30),R=n.n(D),T="loggedBlogAppUser",V=function(e){return localStorage.setItem(T,JSON.stringify(e))},z=function(){return JSON.parse(localStorage.getItem(T))},H=function(){return localStorage.removeItem(T)},P="/api/blogs",q=function(){return{headers:{Authorization:"bearer ".concat(z().token)}}},F=function(){return R.a.get(P).then((function(e){return e.data}))},G=function(e){return R.a.post(P,e,q()).then((function(e){return e.data}))},K=function(e){return R.a.put("".concat(P,"/").concat(e.id),e,q()).then((function(e){return e.data}))},M=function(e,t){return R.a.put("".concat(P,"/").concat(e,"/comments"),{id:e,comment:t},q()).then((function(e){return e.data}))},Q={login:function(){var e=Object(l.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},W=function(){return R.a.get("/api/users").then((function(e){return e.data}))},X=n(15),Y=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(null),s=Object(u.a)(i,2),o=s[0],b=s[1],x=Object(c.useState)(""),f=Object(u.a)(x,2),L=f[0],I=f[1],U=Object(c.useState)(""),A=Object(u.a)(U,2),J=A[0],N=A[1],D=Object(c.useState)(null),R=Object(u.a)(D,2),T=R[0],H=R[1],P=r.a.createRef();Object(c.useEffect)((function(){F().then((function(e){return a(e)}))}),[]),Object(c.useEffect)((function(){var e=z();b(e)}),[]);var q=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success";H({message:e,type:t}),setTimeout((function(){H(null)}),5e3)},K=function(){var e=Object(l.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,Q.login({username:L,password:J});case 4:n=e.sent,I(""),N(""),b(n),q("".concat(n.name," welcome back!")),V(n),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),q("wrong username/password","error");case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(l.a)(j.a.mark((function e(t){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,G(t);case 3:c=e.sent,P.current.toggleVisibility(),a(n.concat(c)),q("a new blog '".concat(c.title,"' by ").concat(c.author," added!")),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}();if(!o)return Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"Login to application"}),Object(d.jsx)(O,{notification:T}),Object(d.jsxs)("form",{onSubmit:K,children:[Object(d.jsx)("div",{children:Object(d.jsx)(p.a,{id:"outlined-basic",variant:"outlined",label:"Username",value:L,onChange:function(e){var t=e.target;return I(t.value)}})}),Object(d.jsx)("p",{}),Object(d.jsx)("div",{children:Object(d.jsx)(p.a,{id:"outlined-basic",variant:"outlined",label:"Password",value:J,onChange:function(e){var t=e.target;return N(t.value)}})}),Object(d.jsx)("br",{}),Object(d.jsx)(h.a,{variant:"contained",type:"submit",children:"Login "})]})]});return Object(d.jsxs)("div",{children:[Object(d.jsx)(O,{notification:T}),Object(d.jsx)(v,{buttonLabel:"create new blog",ref:P,children:Object(d.jsx)(m,{createBlog:M})}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)(k.a,{component:y.a,children:Object(d.jsxs)(S.a,{children:[Object(d.jsx)(w.a,{children:Object(d.jsxs)(C.a,{children:[Object(d.jsx)(B.a,{children:"Blog"}),Object(d.jsx)(B.a,{children:"Author"})]})}),Object(d.jsx)(E.a,{children:n.sort((function(e,t){return t.likes-e.likes})).map((function(e){return Object(d.jsxs)(C.a,{children:[Object(d.jsx)(B.a,{children:Object(d.jsx)(g.b,{to:"/blogs/".concat(e.id),children:e.title})}),Object(d.jsx)(B.a,{children:e.author})]},e.id)}))})]})})]})},Z=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)([]),i=Object(u.a)(a,2),s=i[0],b=i[1];Object(c.useEffect)((function(){W().then((function(e){return r(e)}))}),[]),Object(c.useEffect)((function(){F().then((function(e){return b(e)}))}),[]);var O=Object(c.useState)(null),x=Object(u.a)(O,2),f=x[0],v=x[1];Object(c.useEffect)((function(){var e=z();v(e)}),[]);var p=Object(X.f)("/user/:id"),m=p?n.find((function(e){return e.id===String(p.params.id)})):null,k=Object(X.f)("/blogs/:id"),y=k?s.find((function(e){return e.id===String(k.params.id)})):null,S=function(){var e=Object(l.a)(j.a.mark((function e(t){var n,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===(n=s.find((function(e){return e.id===t})))){e.next=6;break}return c=Object(o.a)(Object(o.a)({},n),{},{likes:n.likes+1,user:n.user.id}),e.next=5,K(c);case 5:b(s.map((function(e){return e.id===t?Object(o.a)(Object(o.a)({},n),{},{likes:n.likes+1}):e})));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(l.a)(j.a.mark((function e(t,n){var c,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=s.find((function(e){return e.id===t})),r=Object(o.a)(Object(o.a)({},c),{},{comments:c.comments.concat(n),user:c.user.id}),b(s.map((function(e){return e.id===t?Object(o.a)(Object(o.a)({},r),{},{comments:r.comments.concat(n)}):e}))),e.next=5,M(t,String(n));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(d.jsx)("div",{children:Object(d.jsxs)(N.a,{children:[Object(d.jsx)(A.a,{position:"static",style:{background:"#2E3B55"},children:Object(d.jsxs)(J.a,{children:[Object(d.jsx)(h.a,{color:"inherit",component:g.b,to:"/",children:"Blogs"}),Object(d.jsx)(h.a,{color:"inherit",component:g.b,to:"/users",children:"Users"}),Object(d.jsxs)("div",{style:{justifyContent:"flex-end"},children:[f?Object(d.jsxs)("em",{children:[" ",f.name," logged in ",Object(d.jsx)(h.a,{color:"inherit",onClick:function(){v(null),H()},children:"logout"})," "]}):""," "]})]})}),Object(d.jsx)("h1",{children:"Blog app"}),Object(d.jsxs)(X.c,{children:[Object(d.jsx)(X.a,{path:"/user/:id",children:Object(d.jsx)(I,{user:m})}),Object(d.jsx)(X.a,{path:"/users",children:Object(d.jsx)(L,{users:n})}),Object(d.jsx)(X.a,{path:"/blogs/:id",children:Object(d.jsx)(U,{blog:y,handleLike:S,addComment:w})}),Object(d.jsx)(X.a,{path:"/",children:Object(d.jsx)(Y,{})})]})]})})};i.a.render(Object(d.jsx)(g.a,{children:Object(d.jsx)(Z,{})}),document.getElementById("root"))}},[[121,1,2]]]);
//# sourceMappingURL=main.10664fc4.chunk.js.map