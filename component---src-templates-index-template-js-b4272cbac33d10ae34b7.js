(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"/d1K":function(e,t,a){"use strict";a.d(t,"a",(function(){return F}));var n=a("q1tI"),i=a.n(n),r=a("Wbzz"),l=a("9eSz"),m=a.n(l),s=a("iSRb"),c=a.n(s),o=function(e){var t=e.title,a=e.subtitle,n=e.isIndex,l=e.fixed;return i.a.createElement("div",{className:c.a.author},i.a.createElement(r.Link,{to:"/"},i.a.createElement(m.a,{imgStyle:{borderRadius:"50%"},fixed:l})),n?i.a.createElement("h1",{className:c.a.author__title},i.a.createElement(r.Link,{className:c.a["author__title-link"],to:"/"},t)):i.a.createElement("h2",{className:c.a.author__title},i.a.createElement(r.Link,{className:c.a["author__title-link"],to:"/"},t)),i.a.createElement("p",{className:c.a.author__subtitle},a))},_=a("7Qib"),d=a("euHg"),u=a.n(d),f=function(e){var t=e.icon,a=e.image;return"svg"===t.extension?i.a.createElement("svg",{className:u.a.icon,viewBox:t.viewBox},i.a.createElement("path",{d:t.path}),t.path2&&i.a.createElement("path",{d:t.path2})):i.a.createElement(m.a,{fixed:a.node.childImageSharp.fixed})},g=function(e){return"svg"!==e.icon.extension?i.a.createElement(r.StaticQuery,{query:"766859412",render:function(t){var a=t.images.edges.find((function(t){return t.node.relativePath===e.icon.name+"."+e.icon.extension}));return i.a.createElement(f,Object.assign({},e,{image:a}))}}):i.a.createElement(f,e)},p=a("aU/I"),h=a.n(p),v=function(e){var t=e.contacts;return i.a.createElement("div",{className:h.a.contacts},i.a.createElement("ul",{className:h.a.contacts__list},Object.keys(t).map((function(e){return i.a.createElement("li",{className:h.a["contacts__list-item"],key:e},i.a.createElement("a",{className:h.a["contacts__list-item-link"],href:Object(_.a)(e,t[e]),rel:"noopener noreferrer",target:"_blank"},i.a.createElement(g,{icon:Object(_.b)(e)})))}))))},E=a("Nrk+"),b=a.n(E),k=function(e){var t=e.copyright;return i.a.createElement("div",{className:b.a.copyright},t)},N=a("je8k"),x=a.n(N),P=function(e){var t=e.menu;return i.a.createElement("nav",{className:x.a.menu},i.a.createElement("ul",{className:x.a.menu__list},t.map((function(e){return i.a.createElement("li",{className:x.a["menu__list-item"],key:e.path},i.a.createElement(r.Link,{to:e.path,className:x.a["menu__list-item-link"],activeClassName:x.a["menu__list-item-link--active"]},e.label))}))))},y=a("SySy"),M=a.n(y),I=function(e){var t=e.data,a=e.isIndex,n=t.site.siteMetadata,r=n.author,l=n.copyright,m=n.menu,s=n.title,c=n.subtitle,_=t.file.childImageSharp.fixed;return i.a.createElement("div",{className:M.a.sidebar},i.a.createElement("div",{className:M.a.sidebar__inner},i.a.createElement(o,{title:s,subtitle:c,fixed:_,isIndex:a}),i.a.createElement("div",{className:M.a["sidebar__menu-contacts"]},i.a.createElement(P,{className:M.a["sidebar__menu-contacts__menu"],menu:m}),i.a.createElement(v,{className:M.a["sidebar__menu-contacts__contacts"],contacts:r.contacts})),i.a.createElement(k,{copyright:l})))},F=function(e){return i.a.createElement(r.StaticQuery,{query:"3735939162",render:function(t){return i.a.createElement(I,Object.assign({},e,{data:t}))}})}},"1xLx":function(e,t,a){e.exports={feed__item:"Feed-module--feed__item--2D5rE","feed__item-title":"Feed-module--feed__item-title--3nigr","feed__item-title-link":"Feed-module--feed__item-title-link--iFMRs","feed__item-img-a":"Feed-module--feed__item-img-a--3MCNf","feed__item-img":"Feed-module--feed__item-img--3XNlR","feed__item-description":"Feed-module--feed__item-description--1uO8e","feed__item-meta-time":"Feed-module--feed__item-meta-time--3t1fg","feed__item-meta-divider":"Feed-module--feed__item-meta-divider--N-Q0A","feed__item-meta-category-link":"Feed-module--feed__item-meta-category-link--23f8F","feed__item-tags":"Feed-module--feed__item-tags--3pzKe","feed__item-tags-item":"Feed-module--feed__item-tags-item--oEufZ","feed__item-tags-item-link":"Feed-module--feed__item-tags-item-link--3OIhV","feed__item-readmore":"Feed-module--feed__item-readmore--1u6bI"}},"6V6j":function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a("q1tI"),i=a.n(n),r=a("wd/R"),l=a.n(r),m=a("Wbzz"),s=a("9eSz"),c=a.n(s),o=a("1xLx"),_=a.n(o),d=a("LvDl"),u=function(e){var t=e.edge.node,a=t.fields,n=a.slug,r=a.tagSlugs,s=t.frontmatter,o=s.date,u=s.tags,f=s.title,g=s.description,p=s.image,h=d.get(p,"children.0.fluid");return i.a.createElement("div",{className:_.a.feed__item,key:n},i.a.createElement("div",{className:_.a["feed__item-meta"]},i.a.createElement("time",{className:_.a["feed__item-meta-time"],dateTime:l()(o).format("YYYY-MM-DD")},l()(o).format("YYYY-MM-DD")),i.a.createElement("span",{className:_.a["feed__item-meta-divider"]}),r.map((function(e,t){return i.a.createElement("span",{key:t},i.a.createElement(m.Link,{to:e,className:_.a["feed__item-tags-item-link"]},u[t]),i.a.createElement("span",{className:_.a["feed__item-meta-divider"]}))}))),i.a.createElement("h2",{className:_.a["feed__item-title"]},i.a.createElement(m.Link,{className:_.a["feed__item-title-link"],to:n},f)),h&&i.a.createElement(m.Link,{className:_.a["feed__item-img-a"],to:n},i.a.createElement(c.a,{className:_.a["feed__item-img"],fluid:h})),i.a.createElement("p",{className:_.a["feed__item-description"]},g),i.a.createElement(m.Link,{className:_.a["feed__item-readmore"],to:n},"Read"))}},"999l":function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return o}));var n=a("q1tI"),i=a.n(n),r=a("Zttt"),l=a("/d1K"),m=a("6V6j"),s=a("RXmK"),c=a("v0M6"),o="1035132383";t.default=function(e){var t=e.data,a=e.pageContext,n=t.site.siteMetadata,o=n.title,_=n.subtitle,d=t.file.publicURL,u=a.currentPage,f=a.hasNextPage,g=a.hasPrevPage,p=a.prevPagePath,h=a.nextPagePath,v=t.allMarkdownRemark.edges,E=u>0?"Posts - Page "+u+" - "+o:o;return i.a.createElement(r.a,{title:E,ogpTitle:E,description:_,type:"website",image:d},i.a.createElement(l.a,{isIndex:!0}),i.a.createElement(s.a,null,v.map((function(e,t){return i.a.createElement(m.a,{edge:e,key:t})})),i.a.createElement(c.a,{prevPagePath:p,nextPagePath:h,hasPrevPage:g,hasNextPage:f})))}},"Nrk+":function(e,t,a){e.exports={copyright:"Copyright-module--copyright--1ariN"}},RBgx:function(e,t,a){e.exports={page:"Page-module--page--2nMky",page__inner:"Page-module--page__inner--2M_vz",page__title:"Page-module--page__title--GPD8L",page__body:"Page-module--page__body--Ic6i6"}},RXmK:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a("q1tI"),i=a.n(n),r=a("RBgx"),l=a.n(r),m=function(e){var t=e.title,a=e.children,r=Object(n.useRef)();return Object(n.useEffect)((function(){r.current.scrollIntoView()})),i.a.createElement("div",{ref:r,className:l.a.page},i.a.createElement("div",{className:l.a.page__inner},t&&i.a.createElement("h1",{className:l.a.page__title},t),i.a.createElement("div",{className:l.a.page__body},a)))}},SySy:function(e,t,a){e.exports={sidebar:"Sidebar-module--sidebar--X4z2p",sidebar__inner:"Sidebar-module--sidebar__inner--Jdc5s","sidebar__menu-contacts":"Sidebar-module--sidebar__menu-contacts--3gyOs"}},U4DU:function(e,t,a){e.exports={pagination:"Pagination-module--pagination--2H3nO",pagination__prev:"Pagination-module--pagination__prev--bet5s","pagination__prev-link":"Pagination-module--pagination__prev-link--1Nzs6","pagination__prev-link--disable":"Pagination-module--pagination__prev-link--disable--Yklx9",pagination__next:"Pagination-module--pagination__next--3hFiN","pagination__next-link":"Pagination-module--pagination__next-link--3FUtA","pagination__next-link--disable":"Pagination-module--pagination__next-link--disable--30UwZ"}},UbMB:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(this&&this[n]||n);else if(Array.isArray(n))e.push(i.apply(this,n));else if("object"===r)for(var l in n)a.call(n,l)&&n[l]&&e.push(this&&this[l]||l)}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(n=function(){return i}.apply(t,[]))||(e.exports=n)}()},"aU/I":function(e,t,a){e.exports={contacts:"Contacts-module--contacts--1rGd1",contacts__list:"Contacts-module--contacts__list--3OgdW","contacts__list-item":"Contacts-module--contacts__list-item--16p9q","contacts__list-item-link":"Contacts-module--contacts__list-item-link--2MIDn"}},euHg:function(e,t,a){e.exports={icon:"Icon-module--icon--Gpyvw"}},iSRb:function(e,t,a){e.exports={author__photo:"Author-module--author__photo--36xCH",author__title:"Author-module--author__title--2CaTb","author__title-link":"Author-module--author__title-link--Yrism",author__subtitle:"Author-module--author__subtitle--cAaEB"}},je8k:function(e,t,a){e.exports={menu:"Menu-module--menu--Efbin",menu__list:"Menu-module--menu__list--31Zeo","menu__list-item":"Menu-module--menu__list-item--1lJ6B","menu__list-item-link":"Menu-module--menu__list-item-link--10Ush","menu__list-item-link--active":"Menu-module--menu__list-item-link--active--2CbUO"}},v0M6:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a("q1tI"),i=a.n(n),r=a("UbMB"),l=a.n(r),m=a("Wbzz"),s=a("WlAH"),c=a("U4DU"),o=a.n(c),_=l.a.bind(o.a),d=function(e){var t=e.prevPagePath,a=e.nextPagePath,n=e.hasNextPage,r=e.hasPrevPage,l=_({"pagination__prev-link":!0,"pagination__prev-link--disable":!r}),c=_({"pagination__next-link":!0,"pagination__next-link--disable":!n});return i.a.createElement("div",{className:o.a.pagination},i.a.createElement("div",{className:o.a.pagination__prev},i.a.createElement(m.Link,{rel:"prev",to:t,className:l},s.b.PREV_PAGE)),i.a.createElement("div",{className:o.a.pagination__next},i.a.createElement(m.Link,{rel:"next",to:a,className:c},s.b.NEXT_PAGE)))}}}]);
//# sourceMappingURL=component---src-templates-index-template-js-b4272cbac33d10ae34b7.js.map