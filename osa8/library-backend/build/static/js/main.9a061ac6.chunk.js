(this["webpackJsonplibrary-frontend-pohja"]=this["webpackJsonplibrary-frontend-pohja"]||[]).push([[0],{64:function(t,e,n){"use strict";n.r(e);var r,c,s,j=n(4),o=n(49),a=n.n(o),i=n(8),b=n(32),u=n(2),l=function(t){if(!t.show)return null;var e=t.authors;return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"authors"}),Object(u.jsx)("table",{children:Object(u.jsxs)("tbody",{children:[Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{}),Object(u.jsx)("th",{children:"born"}),Object(u.jsx)("th",{children:"books"})]}),e.map((function(t){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:t.name}),Object(u.jsx)("td",{children:t.born}),Object(u.jsx)("td",{children:t.bookCount})]},t.name)}))]})})]})},h=function(t){if(!t.show)return null;var e=t.books;return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"books"}),Object(u.jsx)("table",{children:Object(u.jsxs)("tbody",{children:[Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{}),Object(u.jsx)("th",{children:"author"}),Object(u.jsx)("th",{children:"published"})]}),e.map((function(t){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:t.title}),Object(u.jsx)("td",{children:t.author}),Object(u.jsx)("td",{children:t.published})]},t.title)}))]})})]})},d=n(40),O=n.n(d),x=n(50),p=n(75),v=n(67),f=Object(p.a)(r||(r=Object(b.a)(["\nmutation createBook($title: String!, $author: String!, $published: Int!, $genres: [String!]!) {\n  addBook(\n    title: $title,\n    author: $author,\n    published: $published,\n    genres: $genres\n  ) {\n    title\n    author\n    published\n    genres\n  }\n}\n"]))),k=function(t){var e=Object(j.useState)(""),n=Object(i.a)(e,2),r=n[0],c=n[1],s=Object(j.useState)(""),o=Object(i.a)(s,2),a=o[0],b=o[1],l=Object(j.useState)(""),h=Object(i.a)(l,2),d=h[0],p=h[1],k=Object(j.useState)(""),g=Object(i.a)(k,2),m=g[0],w=g[1],y=Object(j.useState)([]),C=Object(i.a)(y,2),S=C[0],$=C[1],B=Object(v.a)(f),I=Object(i.a)(B,1)[0];if(!t.show)return null;var q=function(){var t=Object(x.a)(O.a.mark((function t(e){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.preventDefault(),I({variables:{title:r,published:parseInt(d,10),author:a,genres:S}}),console.log("add book..."),c(""),p(""),b(""),$([]),w("");case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(u.jsx)("div",{children:Object(u.jsxs)("form",{onSubmit:q,children:[Object(u.jsxs)("div",{children:["title",Object(u.jsx)("input",{value:r,onChange:function(t){var e=t.target;return c(e.value)}})]}),Object(u.jsxs)("div",{children:["author",Object(u.jsx)("input",{value:a,onChange:function(t){var e=t.target;return b(e.value)}})]}),Object(u.jsxs)("div",{children:["published",Object(u.jsx)("input",{type:"number",value:Number(d),onChange:function(t){var e=t.target;return p(e.value)}})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{value:m,onChange:function(t){var e=t.target;return w(e.value)}}),Object(u.jsx)("button",{onClick:function(){$(S.concat(m)),w("")},type:"button",children:"add genre"})]}),Object(u.jsxs)("div",{children:["genres: ",S.join(" ")]}),Object(u.jsx)("button",{type:"submit",children:"create book"})]})})},g=n(73),m=Object(p.a)(c||(c=Object(b.a)(["\n  query {\n    allAuthors  {\n      name\n      born\n      bookCount\n      id\n    }\n  }\n"]))),w=Object(p.a)(s||(s=Object(b.a)(["\n  query {\n    allBooks  {\n      title\n      published\n      author\n      id\n    }\n  }\n"]))),y=function(){var t=Object(g.a)(m,{pollInterval:2e3}),e=Object(g.a)(w,{pollInterval:2e3}),n=Object(j.useState)("authors"),r=Object(i.a)(n,2),c=r[0],s=r[1];return Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{onClick:function(){return s("authors")},children:"authors"}),Object(u.jsx)("button",{onClick:function(){return s("books")},children:"books"}),Object(u.jsx)("button",{onClick:function(){return s("add")},children:"add book"})]}),Object(u.jsx)(l,{show:"authors"===c,authors:t.data.allAuthors}),Object(u.jsx)(h,{show:"books"===c,books:e.data.allBooks}),Object(u.jsx)(k,{show:"add"===c})]})},C=n(54),S=n(77),$=n(76),B=n(74),I=new C.a({cache:new S.a,link:new $.a({uri:"http://localhost:4000"})});a.a.render(Object(u.jsx)(B.a,{client:I,children:Object(u.jsx)(y,{})}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.9a061ac6.chunk.js.map