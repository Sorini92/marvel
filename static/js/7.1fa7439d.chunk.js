(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[7],{100:function(e,t,c){},101:function(e,t,c){},102:function(e,t,c){},211:function(e,t,c){},222:function(e,t,c){"use strict";c.r(t);var r=c(4),a=c(1),n=c(35),s=c(29),i=c(47),o=(c(100),c.p+"static/media/mjolnir.61f31e18.png"),l=c(0),u=function(e){var t=e.data,c=t.name,r=t.description,a=t.thumbnail,n=t.homepage,s=t.wiki,i={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===a&&(i={objectFit:"contain"}),Object(l.jsxs)("div",{className:"randomchar__block",children:[Object(l.jsx)("img",{src:a,style:i,alt:"Random character",className:"randomchar__img"}),Object(l.jsxs)("div",{className:"randomchar__info",children:[Object(l.jsx)("p",{className:"randomchar__name",children:c}),Object(l.jsx)("p",{className:"randomchar__descr",children:r?r.slice(0,210):"There is no description for this character"}),Object(l.jsxs)("div",{className:"randomchar__btns",children:[Object(l.jsx)("a",{href:n,className:"button button__main",children:Object(l.jsx)("div",{className:"inner",children:"homepage"})}),Object(l.jsx)("a",{href:s,className:"button button__secondary",children:Object(l.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},h=function(){var e=Object(a.useState)({}),t=Object(r.a)(e,2),c=t[0],n=t[1],h=Object(s.a)(),j=h.getCharacter,d=h.clearError,b=h.process,m=h.setProcess;Object(a.useEffect)((function(){O()}),[]);var p=function(e){n(e)},O=function(){d();var e=Math.floor(400*Math.random()+1011e3);j(e).then(p).then((function(){return m("confirmed")}))};return Object(l.jsxs)("div",{className:"randomchar",children:[Object(i.a)(b,u,c),Object(l.jsxs)("div",{className:"randomchar__static",children:[Object(l.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",Object(l.jsx)("br",{}),"Do you want to get to know him better?"]}),Object(l.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),Object(l.jsx)("button",{className:"button button__main",onClick:O,children:Object(l.jsx)("div",{className:"inner",children:"try it"})}),Object(l.jsx)("img",{src:o,alt:"mjolnir",className:"randomchar__decoration"})]})]})},j=c(34),d=c(223),b=c(224),m=c(10),p=c(24),O=(c(101),function(e){var t=Object(a.useState)([]),c=Object(r.a)(t,2),n=c[0],i=c[1],o=Object(a.useState)(!1),u=Object(r.a)(o,2),h=u[0],O=u[1],f=Object(a.useState)(210),x=Object(r.a)(f,2),v=x[0],_=x[1],g=Object(a.useState)(!1),N=Object(r.a)(g,2),k=N[0],w=N[1],y=Object(s.a)(),C=y.getAllCharacters,E=y.process,S=y.setProcess;Object(a.useEffect)((function(){F(v,!0)}),[]);var F=function(e,t){O(!t),C(e).then(T).then((function(){return S("confirmed")}))},T=function(e){var t=!1;e.length<9&&(t=!0),i((function(t){return[].concat(Object(j.a)(t),Object(j.a)(e))})),O(!1),_((function(e){return e+9})),w(t)},P=Object(a.useRef)([]),I=function(e){P.current.forEach((function(e){return e.classList.remove("char__item_selected")})),P.current[e].classList.add("char__item_selected"),P.current[e].focus()};var M=Object(a.useMemo)((function(){return function(e,t,c){switch(e){case"waiting":return Object(l.jsx)(m.a,{});case"loading":return c?Object(l.jsx)(t,{}):Object(l.jsx)(m.a,{});case"confirmed":return Object(l.jsx)(t,{});case"error":return Object(l.jsx)(p.a,{});default:throw new Error("Unexpected process state")}}(E,(function(){return function(t){var c=t.map((function(t,c){var r={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===t.thumbnail&&(r={objectFit:"contain"}),Object(l.jsx)(d.a,{timeout:500,classNames:"char__item",children:Object(l.jsxs)("li",{tabIndex:0,ref:function(e){return P.current[c]=e},className:"char__item",onClick:function(){I(c),e.onCharSelected(t.id)},onKeyPress:function(r){"Enter"===r.key&&(I(c),e.onCharSelected(t.id))},children:[Object(l.jsx)("img",{src:t.thumbnail,style:r,alt:t.name}),Object(l.jsx)("div",{className:"char__name",children:t.name})]})},t.id)}));return Object(l.jsx)("ul",{className:"char__grid",children:Object(l.jsx)(b.a,{component:null,children:c})})}(n)}),h)}),[E]);return Object(l.jsxs)("div",{className:"char__list",children:[M,Object(l.jsx)("button",{className:"button button__main button__long",disabled:h,style:{display:k?"none":"block"},onClick:function(){return F(v)},children:Object(l.jsx)("div",{className:"inner",children:"load more"})})]})}),f=c(6),x=(c(102),function(e){var t=e.data,c=t.name,r=t.description,a=t.thumbnail,n=t.homepage,s=t.wiki,i=t.comics,o={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===a&&(o={objectFit:"contain"}),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"char__basics",children:[Object(l.jsx)("img",{src:a,alt:c,style:o}),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"char__info-name",children:c}),Object(l.jsxs)("div",{className:"char__btns",children:[Object(l.jsx)("a",{href:n,className:"button button__main",children:Object(l.jsx)("div",{className:"inner",children:"homepage"})}),Object(l.jsx)("a",{href:s,className:"button button__secondary",children:Object(l.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),Object(l.jsx)("div",{className:"char__descr",children:r}),Object(l.jsx)("div",{className:"char__comics",children:"Comics:"}),Object(l.jsxs)("ul",{className:"char__comics-list",children:[i.length>0?null:"There is no comics with this character",i.map((function(e,t){return Object(l.jsx)("li",{className:"char__comics-item",children:Object(l.jsx)(f.b,{to:"".concat(e.resourceURI.slice(35)),children:e.name})},t)}))]})]})}),v=function(e){var t=Object(a.useState)(null),c=Object(r.a)(t,2),n=c[0],o=c[1],u=Object(s.a)(),h=u.getCharacter,j=u.clearError,d=u.process,b=u.setProcess;Object(a.useEffect)((function(){m()}),[e.charId]);var m=function(){var t=e.charId;t&&(j(),h(t).then(p).then((function(){return b("confirmed")})))},p=function(e){o(e)};return Object(l.jsx)("div",{className:"char__info",children:Object(i.a)(d,x,n)})},_=c(21),g=c(22),N=c(26),k=c(28),w=function(e){Object(N.a)(c,e);var t=Object(k.a)(c);function c(){var e;Object(_.a)(this,c);for(var r=arguments.length,a=new Array(r),n=0;n<r;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a))).state={error:!1},e}return Object(g.a)(c,[{key:"componentDidCatch",value:function(e,t){console.log(e,t),this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?Object(l.jsx)(p.a,{}):this.props.children}}]),c}(a.Component),y=w,C=c(216),E=c(217),S=(c(211),function(){var e=Object(a.useState)(null),t=Object(r.a)(e,2),c=t[0],n=t[1],i=Object(s.a)(),o=i.getCharacterByName,u=i.clearError,h=i.process,j=i.setProcess,d=function(e){n(e)},b="error"===h?Object(l.jsx)("div",{className:"char__search-critical-error",children:Object(l.jsx)(p.a,{})}):null,m=c?c.length>0?Object(l.jsxs)("div",{className:"char__search-wrapper",children:[Object(l.jsxs)("div",{className:"char__search-success",children:["There is! Visit ",c[0].name," page?"]}),Object(l.jsx)(f.b,{to:"/characters/".concat(c[0].id),className:"button button__secondary",children:Object(l.jsx)("div",{className:"inner",children:"To page"})})]}):Object(l.jsx)("div",{className:"char__search-error",children:"The character was not found. Check the name and try again"}):null;return Object(l.jsxs)("div",{className:"char__search-form",children:[Object(l.jsx)(C.d,{initialValues:{charName:""},validationSchema:E.a({charName:E.b().required("This field is required")}),onSubmit:function(e){var t,c=e.charName;t=c,u(),o(t).then(d).then((function(){return j("confirmed")}))},children:Object(l.jsxs)(C.c,{children:[Object(l.jsx)("label",{className:"char__search-label",htmlFor:"charName",children:"Or find a character by name:"}),Object(l.jsxs)("div",{className:"char__search-wrapper",children:[Object(l.jsx)(C.b,{id:"charName",name:"charName",type:"text",placeholder:"Enter name"}),Object(l.jsx)("button",{type:"submit",className:"button button__main",disabled:"loading"===h,children:Object(l.jsx)("div",{className:"inner",children:"find"})})]}),Object(l.jsx)(C.a,{component:"div",className:"char__search-error",name:"charName"})]})}),m,b]})}),F=c.p+"static/media/vision.067d4ae1.png";t.default=function(){var e=Object(a.useState)(null),t=Object(r.a)(e,2),c=t[0],s=t[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)(n.a,{children:[Object(l.jsx)("meta",{name:"description",content:"Marvel information portal"}),Object(l.jsx)("title",{children:"Marvel information portal"})]}),Object(l.jsx)(y,{children:Object(l.jsx)(h,{})}),Object(l.jsxs)("div",{className:"char__content",children:[Object(l.jsx)(y,{children:Object(l.jsx)(O,{onCharSelected:function(e){s(e)}})}),Object(l.jsxs)("div",{children:[Object(l.jsx)(y,{children:Object(l.jsx)(v,{charId:c})}),Object(l.jsx)(y,{children:Object(l.jsx)(S,{})})]})]}),Object(l.jsx)("img",{className:"bg-decoration",src:F,alt:"vision"})]})}},24:function(e,t,c){"use strict";var r=c.p+"static/media/error.42292aa1.gif",a=c(0);t.a=function(){return Object(a.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:r,alt:"Error"})}},29:function(e,t,c){"use strict";var r=c(30),a=c.n(r),n=c(31),s=c(4),i=c(1);t.a=function(){var e=function(){var e=Object(i.useState)("waiting"),t=Object(s.a)(e,2),c=t[0],r=t[1],o=Object(i.useCallback)(function(){var e=Object(n.a)(a.a.mark((function e(t){var c,n,s,i,o,l=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=l.length>1&&void 0!==l[1]?l[1]:"GET",n=l.length>2&&void 0!==l[2]?l[2]:null,s=l.length>3&&void 0!==l[3]?l[3]:{"Content-Type":"application/json"},r("loading"),e.prev=4,e.next=7,fetch(t,{method:c,body:n,headers:s});case 7:if((i=e.sent).ok){e.next=10;break}throw new Error("Could not fetch ".concat(t,", status: ").concat(i.status));case 10:return e.next=12,i.json();case 12:return o=e.sent,e.abrupt("return",o);case 16:throw e.prev=16,e.t0=e.catch(4),r("error"),e.t0;case 20:case"end":return e.stop()}}),e,null,[[4,16]])})));return function(t){return e.apply(this,arguments)}}(),[]);return{request:o,clearError:Object(i.useCallback)((function(){r("loading")}),[]),process:c,setProcess:r}}(),t=e.request,c=e.clearError,r=e.process,o=e.setProcess,l="https://gateway.marvel.com:443/v1/public/",u="apikey=64ef3ab1205888e0cb64123cc4133373",h=210,j=function(){var e=Object(n.a)(a.a.mark((function e(){var c,r,n=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=n.length>0&&void 0!==n[0]?n[0]:h,e.next=3,t("".concat(l,"characters?limit=9&offset=").concat(c,"&").concat(u));case 3:return r=e.sent,e.abrupt("return",r.data.results.map(b));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(n.a)(a.a.mark((function e(c){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t("".concat(l,"characters/").concat(c,"?").concat(u));case 2:return r=e.sent,e.abrupt("return",b(r.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(e){return{id:e.id,name:e.name,description:e.description?e.description:"There is no description for this character",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items.length<10?e.comics.items:e.comics.items.slice(0,10)}},m=function(){var e=Object(n.a)(a.a.mark((function e(c){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t("".concat(l,"characters?name=").concat(c,"&").concat(u));case 2:return r=e.sent,e.abrupt("return",r.data.results.map(b));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(n.a)(a.a.mark((function e(){var c,r,n=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=n.length>0&&void 0!==n[0]?n[0]:h,e.next=3,t("".concat(l,"comics?limit=8&offset=").concat(c,"&").concat(u));case 3:return r=e.sent,e.abrupt("return",r.data.results.map(f));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(n.a)(a.a.mark((function e(c){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t("".concat(l,"comics/").concat(c,"?").concat(u));case 2:return r=e.sent,e.abrupt("return",f(r.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(e){return{id:e.id,title:e.title,description:e.description?e.description:"There is no description",pageCount:e.pageCount?"".concat(e.pageCount," p."):"No information about the number of pages",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,language:e.textObjects.language||"en-us",price:e.prices[0].price?"".concat(e.prices[0].price,"$"):"not available"}};return{getAllCharacters:j,getCharacter:d,process:r,clearError:c,getAllComics:p,getComic:O,getCharacterByName:m,setProcess:o}}},47:function(e,t,c){"use strict";var r=c(10),a=c(24),n=(c(50),c(0)),s=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),Object(n.jsxs)("div",{className:"skeleton",children:[Object(n.jsxs)("div",{className:"pulse skeleton__header",children:[Object(n.jsx)("div",{className:"pulse skeleton__circle"}),Object(n.jsx)("div",{className:"pulse skeleton__mini"})]}),Object(n.jsx)("div",{className:"pulse skeleton__block"}),Object(n.jsx)("div",{className:"pulse skeleton__block"}),Object(n.jsx)("div",{className:"pulse skeleton__block"})]})]})};t.a=function(e,t,c){switch(e){case"waiting":return Object(n.jsx)(s,{});case"loading":return Object(n.jsx)(r.a,{});case"confirmed":return Object(n.jsx)(t,{data:c});case"error":return Object(n.jsx)(a.a,{});default:throw new Error("Unexpected process state")}}},50:function(e,t,c){}}]);
//# sourceMappingURL=7.1fa7439d.chunk.js.map