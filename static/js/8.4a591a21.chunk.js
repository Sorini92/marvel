(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[8],{212:function(t,e,n){},225:function(t,e,n){"use strict";n.r(e);var c=n(35),r=n(34),a=n(4),s=n(1),i=n(6),o=n(223),u=n(224),l=n(29),p=n(10),m=n(24),b=(n(212),n(0)),j=function(t,e,n){switch(t){case"waiting":return Object(b.jsx)(p.a,{});case"loading":return n?Object(b.jsx)(e,{}):Object(b.jsx)(p.a,{});case"confirmed":return Object(b.jsx)(e,{});case"error":return Object(b.jsx)(m.a,{});default:throw new Error("Unexpected process state")}},f=function(){var t=Object(s.useState)([]),e=Object(a.a)(t,2),n=e[0],c=e[1],p=Object(s.useState)(!1),m=Object(a.a)(p,2),f=m[0],d=m[1],h=Object(s.useState)(210),v=Object(a.a)(h,2),O=v[0],g=v[1],x=Object(s.useState)(!1),w=Object(a.a)(x,2),_=w[0],k=w[1],y=Object(l.a)(),C=y.getAllComics,N=y.process,E=y.setProcess;Object(s.useEffect)((function(){A(O,!0)}),[]);var A=function(t,e){d(!e),C(t).then(S).then((function(){return E("confirmed")}))},S=function(t){var e=!1;t.length<8&&(e=!0),c((function(e){return[].concat(Object(r.a)(e),Object(r.a)(t))})),d(!1),g((function(t){return t+8})),k(e)};return Object(b.jsxs)("div",{className:"comics__list",children:[j(N,(function(){return function(t){var e=t.map((function(t,e){return Object(b.jsx)(o.a,{timeout:500,classNames:"comics__item",children:Object(b.jsx)("li",{className:"comics__item",children:Object(b.jsxs)(i.b,{to:"/comics/".concat(t.id),children:[Object(b.jsx)("img",{src:t.thumbnail,alt:t.title,className:"comics__item-img"}),Object(b.jsx)("div",{className:"comics__item-name",children:t.title}),Object(b.jsxs)("div",{className:"comics__item-price",children:[t.price,"$"]})]})},e)},e)}));return Object(b.jsx)("ul",{className:"comics__grid",children:Object(b.jsx)(u.a,{component:null,children:e})})}(n)}),f),Object(b.jsx)("button",{className:"button button__main button__long",disabled:f,style:{display:_?"none":"block"},onClick:function(){return A(O)},children:Object(b.jsx)("div",{className:"inner",children:"load more"})})]})},d=n(64);e.default=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)(c.a,{children:[Object(b.jsx)("meta",{name:"description",content:"Page with list of our comics"}),Object(b.jsx)("title",{children:"Comics page"})]}),Object(b.jsx)(d.a,{}),Object(b.jsx)(f,{})]})}},24:function(t,e,n){"use strict";var c=n.p+"static/media/error.42292aa1.gif",r=n(0);e.a=function(){return Object(r.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:c,alt:"Error"})}},29:function(t,e,n){"use strict";var c=n(30),r=n.n(c),a=n(31),s=n(4),i=n(1);e.a=function(){var t=function(){var t=Object(i.useState)("waiting"),e=Object(s.a)(t,2),n=e[0],c=e[1],o=Object(i.useCallback)(function(){var t=Object(a.a)(r.a.mark((function t(e){var n,a,s,i,o,u=arguments;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=u.length>1&&void 0!==u[1]?u[1]:"GET",a=u.length>2&&void 0!==u[2]?u[2]:null,s=u.length>3&&void 0!==u[3]?u[3]:{"Content-Type":"application/json"},c("loading"),t.prev=4,t.next=7,fetch(e,{method:n,body:a,headers:s});case 7:if((i=t.sent).ok){t.next=10;break}throw new Error("Could not fetch ".concat(e,", status: ").concat(i.status));case 10:return t.next=12,i.json();case 12:return o=t.sent,t.abrupt("return",o);case 16:throw t.prev=16,t.t0=t.catch(4),c("error"),t.t0;case 20:case"end":return t.stop()}}),t,null,[[4,16]])})));return function(e){return t.apply(this,arguments)}}(),[]);return{request:o,clearError:Object(i.useCallback)((function(){c("loading")}),[]),process:n,setProcess:c}}(),e=t.request,n=t.clearError,c=t.process,o=t.setProcess,u="https://gateway.marvel.com:443/v1/public/",l="apikey=64ef3ab1205888e0cb64123cc4133373",p=210,m=function(){var t=Object(a.a)(r.a.mark((function t(){var n,c,a=arguments;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.length>0&&void 0!==a[0]?a[0]:p,t.next=3,e("".concat(u,"characters?limit=9&offset=").concat(n,"&").concat(l));case 3:return c=t.sent,t.abrupt("return",c.data.results.map(j));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),b=function(){var t=Object(a.a)(r.a.mark((function t(n){var c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("".concat(u,"characters/").concat(n,"?").concat(l));case 2:return c=t.sent,t.abrupt("return",j(c.data.results[0]));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),j=function(t){return{id:t.id,name:t.name,description:t.description?t.description:"There is no description for this character",thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,homepage:t.urls[0].url,wiki:t.urls[1].url,comics:t.comics.items.length<10?t.comics.items:t.comics.items.slice(0,10)}},f=function(){var t=Object(a.a)(r.a.mark((function t(n){var c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("".concat(u,"characters?name=").concat(n,"&").concat(l));case 2:return c=t.sent,t.abrupt("return",c.data.results.map(j));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=Object(a.a)(r.a.mark((function t(){var n,c,a=arguments;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.length>0&&void 0!==a[0]?a[0]:p,t.next=3,e("".concat(u,"comics?limit=8&offset=").concat(n,"&").concat(l));case 3:return c=t.sent,t.abrupt("return",c.data.results.map(v));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),h=function(){var t=Object(a.a)(r.a.mark((function t(n){var c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("".concat(u,"comics/").concat(n,"?").concat(l));case 2:return c=t.sent,t.abrupt("return",v(c.data.results[0]));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(t){return{id:t.id,title:t.title,description:t.description?t.description:"There is no description",pageCount:t.pageCount?"".concat(t.pageCount," p."):"No information about the number of pages",thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,language:t.textObjects.language||"en-us",price:t.prices[0].price?"".concat(t.prices[0].price,"$"):"not available"}};return{getAllCharacters:m,getCharacter:b,process:c,clearError:n,getAllComics:d,getComic:h,getCharacterByName:f,setProcess:o}}},63:function(t,e,n){},64:function(t,e,n){"use strict";n(63);var c=n.p+"static/media/Avengers.4065c8f9.png",r=n.p+"static/media/Avengers_logo.9eaf2193.png",a=n(0);e.a=function(){return Object(a.jsxs)("div",{className:"app__banner",children:[Object(a.jsx)("img",{src:c,alt:"Avengers"}),Object(a.jsxs)("div",{className:"app__banner-text",children:["New comics every week!",Object(a.jsx)("br",{}),"Stay tuned!"]}),Object(a.jsx)("img",{src:r,alt:"Avengers logo"})]})}}}]);
//# sourceMappingURL=8.4a591a21.chunk.js.map