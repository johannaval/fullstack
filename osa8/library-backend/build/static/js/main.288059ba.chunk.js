(this["webpackJsonplibrary-frontend-pohja"]=this["webpackJsonplibrary-frontend-pohja"]||[]).push([[0],{61:function(t,e,n){"use strict";n.r(e);var c,r,j=n(32),s=n(5),o=n(44),i=n.n(o),a=n(8),b=n(2),u=function(t){if(!t.show)return null;var e=t.authors;return Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:"authors"}),Object(b.jsx)("table",{children:Object(b.jsxs)("tbody",{children:[Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{}),Object(b.jsx)("th",{children:"born"}),Object(b.jsx)("th",{children:"books"})]}),e.map((function(t){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:t.name}),Object(b.jsx)("td",{children:t.born}),Object(b.jsx)("td",{children:t.bookCount})]},t.name)}))]})})]})},h=function(t){if(!t.show)return null;return Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:"books"}),Object(b.jsx)("table",{children:Object(b.jsxs)("tbody",{children:[Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{}),Object(b.jsx)("th",{children:"author"}),Object(b.jsx)("th",{children:"published"})]}),[].map((function(t){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:t.title}),Object(b.jsx)("td",{children:t.author}),Object(b.jsx)("td",{children:t.published})]},t.title)}))]})})]})},l=n(37),d=n.n(l),O=n(45),x=function(t){var e=Object(s.useState)(""),n=Object(a.a)(e,2),c=n[0],r=n[1],j=Object(s.useState)(""),o=Object(a.a)(j,2),i=o[0],u=o[1],h=Object(s.useState)(""),l=Object(a.a)(h,2),x=l[0],v=l[1],f=Object(s.useState)(""),p=Object(a.a)(f,2),k=p[0],m=p[1],y=Object(s.useState)([]),g=Object(a.a)(y,2),w=g[0],C=g[1];if(!t.show)return null;var S=function(){var t=Object(O.a)(d.a.mark((function t(e){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.preventDefault(),console.log("add book..."),r(""),v(""),u(""),C([]),m("");case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(b.jsx)("div",{children:Object(b.jsxs)("form",{onSubmit:S,children:[Object(b.jsxs)("div",{children:["title",Object(b.jsx)("input",{value:c,onChange:function(t){var e=t.target;return r(e.value)}})]}),Object(b.jsxs)("div",{children:["author",Object(b.jsx)("input",{value:i,onChange:function(t){var e=t.target;return u(e.value)}})]}),Object(b.jsxs)("div",{children:["published",Object(b.jsx)("input",{type:"number",value:x,onChange:function(t){var e=t.target;return v(e.value)}})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("input",{value:k,onChange:function(t){var e=t.target;return m(e.value)}}),Object(b.jsx)("button",{onClick:function(){C(w.concat(k)),m("")},type:"button",children:"add genre"})]}),Object(b.jsxs)("div",{children:["genres: ",w.join(" ")]}),Object(b.jsx)("button",{type:"submit",children:"create book"})]})})},v=n(70),f=n(74),p=Object(v.a)(c||(c=Object(j.a)(["\n  query {\n    allAuthors  {\n      name\n      born\n      id\n    }\n  }\n"]))),k=function(){var t=Object(f.a)(p),e=Object(s.useState)("authors"),n=Object(a.a)(e,2),c=n[0],r=n[1];return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{onClick:function(){return r("authors")},children:"authors"}),Object(b.jsx)("button",{onClick:function(){return r("books")},children:"books"}),Object(b.jsx)("button",{onClick:function(){return r("add")},children:"add book"})]}),Object(b.jsx)(u,{show:"authors"===c,authors:t.data.allAuthors.map((function(t){return t}))}),Object(b.jsx)(h,{show:"books"===c}),Object(b.jsx)(x,{show:"add"===c})]})},m=n(72),y=n(73),g=n(71),w=n(69),C=new m.a({cache:new y.a,link:new g.a({uri:"http://localhost:4000"})}),S=Object(v.a)(r||(r=Object(j.a)(["\n  query {\n    allPersons  {\n      name,\n      phone,\n      address {\n        street,\n        city\n      }\n      id\n    }\n  }\n"])));C.query({query:S}).then((function(t){console.log(t.data)})),i.a.render(Object(b.jsx)(w.a,{client:C,children:Object(b.jsx)(k,{})}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.288059ba.chunk.js.map