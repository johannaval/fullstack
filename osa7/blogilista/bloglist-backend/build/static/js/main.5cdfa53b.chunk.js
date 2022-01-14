(this["webpackJsonpbloglist-frontend"]=this["webpackJsonpbloglist-frontend"]||[]).push([[0],{94:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),i=n(57),a=n.n(i),s=n(21),u=n.n(s),o=n(28),l=n(30),j=n(6),b=n(1),d=function(e){var t=e.notification;if(!t)return null;var n={borderStyle:"solid",borderRadius:5,padding:10,color:"success"===t.type?"green":"red",background:"lightgrey"};return Object(b.jsx)("div",{style:n,children:t.message})},O=c.a.forwardRef((function(e,t){var n=Object(r.useState)(!1),c=Object(j.a)(n,2),i=c[0],a=c[1],s={display:i?"none":""},u={display:i?"":"none"},o=function(){a(!i)};return Object(r.useImperativeHandle)(t,(function(){return{toggleVisibility:o}})),Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{style:s,children:Object(b.jsx)("button",{onClick:o,children:e.buttonLabel})}),Object(b.jsxs)("div",{style:u,className:"togglableContent",children:[e.children,Object(b.jsx)("button",{onClick:o,children:"cancel"})]})]})}));O.displayName="Togglable";var h=O,f=function(e){var t=Object(r.useState)(""),n=Object(j.a)(t,2),c=n[0],i=n[1],a=Object(r.useState)(""),s=Object(j.a)(a,2),u=s[0],o=s[1],l=Object(r.useState)(""),d=Object(j.a)(l,2),O=d[0],h=d[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:"create new"}),Object(b.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.createBlog({title:c,author:u,url:O}),i(""),o(""),h("")},children:[Object(b.jsxs)("div",{children:["author",Object(b.jsx)("input",{id:"author",value:u,onChange:function(e){var t=e.target;return o(t.value)}})]}),Object(b.jsxs)("div",{children:["title",Object(b.jsx)("input",{id:"title",value:c,onChange:function(e){var t=e.target;return i(t.value)}})]}),Object(b.jsxs)("div",{children:["url",Object(b.jsx)("input",{id:"url",value:O,onChange:function(e){var t=e.target;return h(t.value)}})]}),Object(b.jsx)("button",{id:"create",children:"create"})]})]})},x=n(29),p=function(e){var t=e.users;return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Users"}),Object(b.jsxs)("table",{children:[Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:" "}),Object(b.jsxs)("td",{children:[" ",Object(b.jsx)("b",{children:" blogs created "})," "]})]}),t.map((function(e){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:Object(b.jsx)("div",{children:Object(b.jsx)(x.b,{to:"/user/".concat(e.id),children:e.name})})}),Object(b.jsxs)("td",{children:[" ",e.blogs.length," "]})]},e.id)}))]})]})},v=function(e){var t=e.user;if(void 0===t)return null;var n=t.blogs;return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:t.name}),Object(b.jsx)("br",{}),Object(b.jsx)("b",{children:"Added blogs"}),Object(b.jsx)("p",{}),n.map((function(e){return Object(b.jsxs)("li",{children:[" ",e.title]},e.id)}))]})},g=function(e){var t=e.blog,n=e.handleLike;e.addComment;return void 0===t?null:Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:t.title}),Object(b.jsx)("a",{href:t.url,children:t.url}),Object(b.jsxs)("p",{children:["likes ",t.likes,Object(b.jsx)("button",{onClick:function(){return n(t.id)},children:"like"})," "]}),Object(b.jsxs)("p",{children:["added by ",t.user.name," "]}),Object(b.jsx)("br",{}),Object(b.jsx)("h3",{children:"Comments"}),t.comments.map((function(e){return Object(b.jsxs)("li",{children:[" ",e.content," "]},e.id)}))]})},m=n(112),k=n(114),w=n(111),y=n(25),S=n.n(y),C="loggedBlogAppUser",B=function(e){return localStorage.setItem(C,JSON.stringify(e))},E=function(){return JSON.parse(localStorage.getItem(C))},I=function(){return localStorage.removeItem(C)},J="/api/blogs",L=function(){return{headers:{Authorization:"bearer ".concat(E().token)}}},N=function(){return S.a.get(J).then((function(e){return e.data}))},A=function(e){return S.a.post(J,e,L()).then((function(e){return e.data}))},R=function(e){return S.a.put("".concat(J,"/").concat(e.id),e,L()).then((function(e){return e.data}))},U=function(e,t){return S.a.put(J,e,t).then((function(e){return e.data}))},D={login:function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},T=function(){return S.a.get("/api/users").then((function(e){return e.data}))},V=n(8),z=function(){var e=Object(r.useState)([]),t=Object(j.a)(e,2),n=t[0],i=t[1],a=Object(r.useState)(null),s=Object(j.a)(a,2),o=s[0],O=s[1],p=Object(r.useState)(""),v=Object(j.a)(p,2),g=v[0],m=v[1],k=Object(r.useState)(""),w=Object(j.a)(k,2),y=w[0],S=w[1],C=Object(r.useState)(null),I=Object(j.a)(C,2),J=I[0],L=I[1],R=c.a.createRef();Object(r.useEffect)((function(){N().then((function(e){return i(e)}))}),[]),Object(r.useEffect)((function(){var e=E();O(e)}),[]);var U=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success";L({message:e,type:t}),setTimeout((function(){L(null)}),5e3)},T=function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,D.login({username:g,password:y});case 4:n=e.sent,m(""),S(""),O(n),U("".concat(n.name," welcome back!")),B(n),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),U("wrong username/password","error");case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}(),V=function(){var e=Object(l.a)(u.a.mark((function e(t){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A(t);case 3:r=e.sent,R.current.toggleVisibility(),i(n.concat(r)),U("a new blog '".concat(r.title,"' by ").concat(r.author," added!")),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}();if(!o)return Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:"login to application"}),Object(b.jsx)(d,{notification:J}),Object(b.jsxs)("form",{onSubmit:T,children:[Object(b.jsxs)("div",{children:["username",Object(b.jsx)("input",{id:"username",value:g,onChange:function(e){var t=e.target;return m(t.value)}})]}),Object(b.jsxs)("div",{children:["password",Object(b.jsx)("input",{id:"password",value:y,onChange:function(e){var t=e.target;return S(t.value)}})]}),Object(b.jsx)("button",{id:"login",children:"login"})]})]});return Object(b.jsxs)("div",{children:[Object(b.jsx)(d,{notification:J}),Object(b.jsx)(h,{buttonLabel:"create new blog",ref:R,children:Object(b.jsx)(f,{createBlog:V})}),n.sort((function(e,t){return t.likes-e.likes})).map((function(e){return Object(b.jsxs)("li",{children:[" ",Object(b.jsxs)(x.b,{to:"/blogs/".concat(e.id),children:[e.title," by ",e.author]})," "]},e.id)}))]})},H=function(){var e=Object(r.useState)([]),t=Object(j.a)(e,2),n=t[0],c=t[1],i=Object(r.useState)([]),a=Object(j.a)(i,2),s=a[0],d=a[1];Object(r.useEffect)((function(){T().then((function(e){return c(e)}))}),[]),Object(r.useEffect)((function(){N().then((function(e){return d(e)}))}),[]);var O=Object(r.useState)(null),h=Object(j.a)(O,2),f=h[0],y=h[1];Object(r.useEffect)((function(){var e=E();y(e)}),[]);var S=Object(V.f)("/user/:id"),C=S?n.find((function(e){return e.id===String(S.params.id)})):null,B=Object(V.f)("/blogs/:id"),J=B?s.find((function(e){return e.id===String(B.params.id)})):null,L=function(){var e=Object(l.a)(u.a.mark((function e(t){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===(n=s.find((function(e){return e.id===t})))){e.next=6;break}return r=Object(o.a)(Object(o.a)({},n),{},{likes:n.likes+1,user:n.user.id}),e.next=5,R(r);case 5:d(s.map((function(e){return e.id===t?Object(o.a)(Object(o.a)({},n),{},{likes:n.likes+1}):e})));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(l.a)(u.a.mark((function e(t,n){var r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=s.find((function(e){return e.id===t})),c=Object(o.a)(Object(o.a)({},r),{},{comments:r.comments.concat(n),user:r.user.id}),e.next=5,U(c);case 5:d(s.map((function(e){return e.id===t?Object(o.a)(Object(o.a)({},c),{},{comments:c.comments.concat(n)}):e}))),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{children:[Object(b.jsx)(m.a,{position:"static",children:Object(b.jsxs)(k.a,{children:[Object(b.jsx)(w.a,{color:"inherit",component:x.b,to:"/",children:"Blogs"}),Object(b.jsx)(w.a,{color:"inherit",component:x.b,to:"/users",children:"Users"}),f?Object(b.jsxs)("em",{children:[f.name," logged in ",Object(b.jsx)("button",{onClick:function(){y(null),I()},children:"logout"})," "]}):""]})}),Object(b.jsx)("h1",{children:"Blog app"}),Object(b.jsxs)(V.c,{children:[Object(b.jsx)(V.a,{path:"/user/:id",children:Object(b.jsx)(v,{user:C})}),Object(b.jsx)(V.a,{path:"/users",children:Object(b.jsx)(p,{users:n})}),Object(b.jsx)(V.a,{path:"/blogs/:id",children:Object(b.jsx)(g,{blog:J,handleLike:L,addComment:A})}),Object(b.jsx)(V.a,{path:"/",children:Object(b.jsx)(z,{})})]})]})};a.a.render(Object(b.jsx)(x.a,{children:Object(b.jsx)(H,{})}),document.getElementById("root"))}},[[94,1,2]]]);
//# sourceMappingURL=main.5cdfa53b.chunk.js.map