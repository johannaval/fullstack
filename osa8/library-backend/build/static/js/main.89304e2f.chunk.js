(this["webpackJsonplibrary-frontend-pohja"]=this["webpackJsonplibrary-frontend-pohja"]||[]).push([[0],{61:function(t,e,n){"use strict";n.r(e);var c,r=n(5),j=n(43),s=n.n(j),i=n(8),o=n(44),a=n(2),b=function(t){if(!t.show)return null;var e=t.authors;return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"authors"}),Object(a.jsx)("table",{children:Object(a.jsxs)("tbody",{children:[Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{}),Object(a.jsx)("th",{children:"born"}),Object(a.jsx)("th",{children:"books"})]}),e.map((function(t){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:t.name}),Object(a.jsx)("td",{children:t.born}),Object(a.jsx)("td",{children:t.bookCount})]},t.name)}))]})})]})},u=function(t){if(!t.show)return null;return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"books"}),Object(a.jsx)("table",{children:Object(a.jsxs)("tbody",{children:[Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{}),Object(a.jsx)("th",{children:"author"}),Object(a.jsx)("th",{children:"published"})]}),[].map((function(t){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:t.title}),Object(a.jsx)("td",{children:t.author}),Object(a.jsx)("td",{children:t.published})]},t.title)}))]})})]})},l=n(36),h=n.n(l),d=n(45),O=function(t){var e=Object(r.useState)(""),n=Object(i.a)(e,2),c=n[0],j=n[1],s=Object(r.useState)(""),o=Object(i.a)(s,2),b=o[0],u=o[1],l=Object(r.useState)(""),O=Object(i.a)(l,2),x=O[0],v=O[1],f=Object(r.useState)(""),p=Object(i.a)(f,2),k=p[0],g=p[1],m=Object(r.useState)([]),w=Object(i.a)(m,2),y=w[0],C=w[1];if(!t.show)return null;var S=function(){var t=Object(d.a)(h.a.mark((function t(e){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.preventDefault(),console.log("add book..."),j(""),v(""),u(""),C([]),g("");case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(a.jsx)("div",{children:Object(a.jsxs)("form",{onSubmit:S,children:[Object(a.jsxs)("div",{children:["title",Object(a.jsx)("input",{value:c,onChange:function(t){var e=t.target;return j(e.value)}})]}),Object(a.jsxs)("div",{children:["author",Object(a.jsx)("input",{value:b,onChange:function(t){var e=t.target;return u(e.value)}})]}),Object(a.jsxs)("div",{children:["published",Object(a.jsx)("input",{type:"number",value:x,onChange:function(t){var e=t.target;return v(e.value)}})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{value:k,onChange:function(t){var e=t.target;return g(e.value)}}),Object(a.jsx)("button",{onClick:function(){C(y.concat(k)),g("")},type:"button",children:"add genre"})]}),Object(a.jsxs)("div",{children:["genres: ",y.join(" ")]}),Object(a.jsx)("button",{type:"submit",children:"create book"})]})})},x=n(70),v=n(74),f=Object(x.a)(c||(c=Object(o.a)(["\n  query {\n    allAuthors  {\n      name\n      born\n      id\n    }\n  }\n"]))),p=function(){var t=Object(v.a)(f),e=Object(r.useState)("authors"),n=Object(i.a)(e,2),c=n[0],j=n[1];return console.log(t.data.allAuthors.map((function(t){return t}))),t.loading?Object(a.jsx)("div",{children:"loading..."}):Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{onClick:function(){return j("authors")},children:"authors"}),Object(a.jsx)("button",{onClick:function(){return j("books")},children:"books"}),Object(a.jsx)("button",{onClick:function(){return j("add")},children:"add book"})]}),Object(a.jsx)(b,{show:"authors"===c,authors:t.data.allAuthors}),Object(a.jsx)(u,{show:"books"===c}),Object(a.jsx)(O,{show:"add"===c})]})},k=n(72),g=n(73),m=n(71),w=n(69),y=new k.a({cache:new g.a,link:new m.a({uri:"http://localhost:4000"})});s.a.render(Object(a.jsx)(w.a,{client:y,children:Object(a.jsx)(p,{})}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.89304e2f.chunk.js.map