(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"/9aa":function(e,t,n){var a=n("NykK"),r=n("ExA7");e.exports=function(e){return"symbol"==typeof e||r(e)&&"[object Symbol]"==a(e)}},"/d1K":function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));var a=n("q1tI"),r=n.n(a),i=n("Wbzz"),u=n("9eSz"),o=n.n(u),c=n("iSRb"),l=n.n(c),s=function(e){var t=e.title,n=e.subtitle,a=e.isIndex,u=e.fixed;return r.a.createElement("div",{className:l.a.author},r.a.createElement(i.Link,{to:"/"},r.a.createElement(o.a,{imgStyle:{borderRadius:"50%"},fixed:u})),a?r.a.createElement("h1",{className:l.a.author__title},r.a.createElement(i.Link,{className:l.a["author__title-link"],to:"/"},t)):r.a.createElement("h2",{className:l.a.author__title},r.a.createElement(i.Link,{className:l.a["author__title-link"],to:"/"},t)),r.a.createElement("p",{className:l.a.author__subtitle},n))},f=n("7Qib"),m=n("euHg"),d=n.n(m),_=function(e){var t=e.icon,n=e.image;return"svg"===t.extension?r.a.createElement("svg",{className:d.a.icon,viewBox:t.viewBox},r.a.createElement("path",{d:t.path}),t.path2&&r.a.createElement("path",{d:t.path2})):r.a.createElement(o.a,{fixed:n.node.childImageSharp.fixed})},p=function(e){return"svg"!==e.icon.extension?r.a.createElement(i.StaticQuery,{query:"766859412",render:function(t){var n=t.images.edges.find((function(t){return t.node.relativePath===e.icon.name+"."+e.icon.extension}));return r.a.createElement(_,Object.assign({},e,{image:n}))}}):r.a.createElement(_,e)},x=n("aU/I"),b=n.n(x),g=function(e){var t=e.contacts;return r.a.createElement("div",{className:b.a.contacts},r.a.createElement("ul",{className:b.a.contacts__list},Object.keys(t).map((function(e){return r.a.createElement("li",{className:b.a["contacts__list-item"],key:e},r.a.createElement("a",{className:b.a["contacts__list-item-link"],href:Object(f.a)(e,t[e]),rel:"noopener noreferrer",target:"_blank"},r.a.createElement(p,{icon:Object(f.b)(e)})))}))))},v=n("Nrk+"),E=n.n(v),h=function(e){var t=e.copyright;return r.a.createElement("div",{className:E.a.copyright},t)},y=n("je8k"),N=n.n(y),k=function(e){var t=e.menu;return r.a.createElement("nav",{className:N.a.menu},r.a.createElement("ul",{className:N.a.menu__list},t.map((function(e){return r.a.createElement("li",{className:N.a["menu__list-item"],key:e.path},r.a.createElement(i.Link,{to:e.path,className:N.a["menu__list-item-link"],activeClassName:N.a["menu__list-item-link--active"]},e.label))}))))},A=n("SySy"),j=n.n(A),S=function(e){var t=e.data,n=e.isIndex,a=t.site.siteMetadata,i=a.author,u=a.copyright,o=a.menu,c=a.title,l=a.subtitle,f=t.file.childImageSharp.fixed;return r.a.createElement("div",{className:j.a.sidebar},r.a.createElement("div",{className:j.a.sidebar__inner},r.a.createElement(s,{title:c,subtitle:l,fixed:f,isIndex:n}),r.a.createElement("div",{className:j.a["sidebar__menu-contacts"]},r.a.createElement(k,{className:j.a["sidebar__menu-contacts__menu"],menu:o}),r.a.createElement(g,{className:j.a["sidebar__menu-contacts__contacts"],contacts:i.contacts})),r.a.createElement(h,{copyright:u})))},O=function(e){return r.a.createElement(i.StaticQuery,{query:"3735939162",render:function(t){return r.a.createElement(S,Object.assign({},e,{data:t}))}})}},"3cYt":function(e,t){e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},"6nK8":function(e,t,n){var a=n("dVn5"),r=n("fo6e"),i=n("dt0z"),u=n("9NmV");e.exports=function(e,t,n){return e=i(e),void 0===(t=n?void 0:t)?r(e)?u(e):a(e):e.match(t)||[]}},"9NmV":function(e,t){var n="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",a="["+n+"]",r="\\d+",i="[\\u2700-\\u27bf]",u="[a-z\\xdf-\\xf6\\xf8-\\xff]",o="[^\\ud800-\\udfff"+n+r+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",c="(?:\\ud83c[\\udde6-\\uddff]){2}",l="[\\ud800-\\udbff][\\udc00-\\udfff]",s="[A-Z\\xc0-\\xd6\\xd8-\\xde]",f="(?:"+u+"|"+o+")",m="(?:"+s+"|"+o+")",d="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",_="[\\ufe0e\\ufe0f]?"+d+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",c,l].join("|")+")[\\ufe0e\\ufe0f]?"+d+")*"),p="(?:"+[i,c,l].join("|")+")"+_,x=RegExp([s+"?"+u+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[a,s,"$"].join("|")+")",m+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[a,s+f,"$"].join("|")+")",s+"?"+f+"+(?:['’](?:d|ll|m|re|s|t|ve))?",s+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",r,p].join("|"),"g");e.exports=function(e){return e.match(x)||[]}},AN6v:function(e,t,n){"use strict";n.r(t),n.d(t,"query",(function(){return f}));var a=n("q1tI"),r=n.n(a),i=n("Wbzz"),u=n("N1om"),o=n.n(u),c=n("Zttt"),l=n("/d1K"),s=n("RXmK"),f="3515867683";t.default=function(e){var t=e.data,n=t.site.siteMetadata,a=n.title,u=n.subtitle,f=t.allMarkdownRemark.group,m=t.file.publicURL;return r.a.createElement(c.a,{title:"Tags - "+a,ogpTitle:a,description:u,type:"website",image:m},r.a.createElement(l.a,null),r.a.createElement(s.a,{title:"Tags"},r.a.createElement("ul",null,f.map((function(e){return r.a.createElement("li",{key:e.fieldValue},r.a.createElement(i.Link,{to:"/tag/"+o()(e.fieldValue)+"/"},e.fieldValue," (",e.totalCount,")"))})))))}},AP2z:function(e,t,n){var a=n("nmnc"),r=Object.prototype,i=r.hasOwnProperty,u=r.toString,o=a?a.toStringTag:void 0;e.exports=function(e){var t=i.call(e,o),n=e[o];try{e[o]=void 0;var a=!0}catch(c){}var r=u.call(e);return a&&(t?e[o]=n:delete e[o]),r}},ExA7:function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},KfNM:function(e,t){var n=Object.prototype.toString;e.exports=function(e){return n.call(e)}},Kz5y:function(e,t,n){var a=n("WFqU"),r="object"==typeof self&&self&&self.Object===Object&&self,i=a||r||Function("return this")();e.exports=i},N1om:function(e,t,n){var a=n("sgoq")((function(e,t,n){return e+(n?"-":"")+t.toLowerCase()}));e.exports=a},"Nrk+":function(e,t,n){e.exports={copyright:"Copyright-module--copyright--1ariN"}},NykK:function(e,t,n){var a=n("nmnc"),r=n("AP2z"),i=n("KfNM"),u=a?a.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":u&&u in Object(e)?r(e):i(e)}},RBgx:function(e,t,n){e.exports={page:"Page-module--page--2nMky",page__inner:"Page-module--page__inner--2M_vz",page__title:"Page-module--page__title--GPD8L",page__body:"Page-module--page__body--Ic6i6"}},RXmK:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n("q1tI"),r=n.n(a),i=n("RBgx"),u=n.n(i),o=function(e){var t=e.title,n=e.children,i=Object(a.useRef)();return Object(a.useEffect)((function(){i.current.scrollIntoView()})),r.a.createElement("div",{ref:i,className:u.a.page},r.a.createElement("div",{className:u.a.page__inner},t&&r.a.createElement("h1",{className:u.a.page__title},t),r.a.createElement("div",{className:u.a.page__body},n)))}},SySy:function(e,t,n){e.exports={sidebar:"Sidebar-module--sidebar--X4z2p",sidebar__inner:"Sidebar-module--sidebar__inner--Jdc5s","sidebar__menu-contacts":"Sidebar-module--sidebar__menu-contacts--3gyOs"}},TKrE:function(e,t,n){var a=n("qRkn"),r=n("dt0z"),i=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,u=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");e.exports=function(e){return(e=r(e))&&e.replace(i,a).replace(u,"")}},WFqU:function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(this,n("yLpj"))},Z0cm:function(e,t){var n=Array.isArray;e.exports=n},"aU/I":function(e,t,n){e.exports={contacts:"Contacts-module--contacts--1rGd1",contacts__list:"Contacts-module--contacts__list--3OgdW","contacts__list-item":"Contacts-module--contacts__list-item--16p9q","contacts__list-item-link":"Contacts-module--contacts__list-item-link--2MIDn"}},asDA:function(e,t){e.exports=function(e,t,n,a){var r=-1,i=null==e?0:e.length;for(a&&i&&(n=e[++r]);++r<i;)n=t(n,e[r],r,e);return n}},dVn5:function(e,t){var n=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(n)||[]}},dt0z:function(e,t,n){var a=n("zoYe");e.exports=function(e){return null==e?"":a(e)}},eUgh:function(e,t){e.exports=function(e,t){for(var n=-1,a=null==e?0:e.length,r=Array(a);++n<a;)r[n]=t(e[n],n,e);return r}},euHg:function(e,t,n){e.exports={icon:"Icon-module--icon--Gpyvw"}},fo6e:function(e,t){var n=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return n.test(e)}},iSRb:function(e,t,n){e.exports={author__photo:"Author-module--author__photo--36xCH",author__title:"Author-module--author__title--2CaTb","author__title-link":"Author-module--author__title-link--Yrism",author__subtitle:"Author-module--author__subtitle--cAaEB"}},je8k:function(e,t,n){e.exports={menu:"Menu-module--menu--Efbin",menu__list:"Menu-module--menu__list--31Zeo","menu__list-item":"Menu-module--menu__list-item--1lJ6B","menu__list-item-link":"Menu-module--menu__list-item-link--10Ush","menu__list-item-link--active":"Menu-module--menu__list-item-link--active--2CbUO"}},nmnc:function(e,t,n){var a=n("Kz5y").Symbol;e.exports=a},qRkn:function(e,t,n){var a=n("3cYt")({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});e.exports=a},sgoq:function(e,t,n){var a=n("asDA"),r=n("TKrE"),i=n("6nK8"),u=RegExp("['’]","g");e.exports=function(e){return function(t){return a(i(r(t).replace(u,"")),e,"")}}},zoYe:function(e,t,n){var a=n("nmnc"),r=n("eUgh"),i=n("Z0cm"),u=n("/9aa"),o=a?a.prototype:void 0,c=o?o.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(i(t))return r(t,e)+"";if(u(t))return c?c.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n}}}]);
//# sourceMappingURL=component---src-templates-tags-list-template-js-f6016ecd29e4135e843b.js.map