(self.webpackChunkblog_beerus_fr=self.webpackChunkblog_beerus_fr||[]).push([[851],{8797:function(e,t,n){var r="[object Symbol]",a=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,i=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,o="\\u2700-\\u27bf",u="a-z\\xdf-\\xf6\\xf8-\\xff",c="A-Z\\xc0-\\xd6\\xd8-\\xde",l="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",s="['’]",m="["+l+"]",f="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",p="\\d+",d="[\\u2700-\\u27bf]",g="["+u+"]",h="[^\\ud800-\\udfff"+l+p+o+u+c+"]",b="(?:\\ud83c[\\udde6-\\uddff]){2}",E="[\\ud800-\\udbff][\\udc00-\\udfff]",x="["+c+"]",y="(?:"+g+"|"+h+")",v="(?:"+x+"|"+h+")",A="(?:['’](?:d|ll|m|re|s|t|ve))?",N="(?:['’](?:D|LL|M|RE|S|T|VE))?",I="(?:[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]|\\ud83c[\\udffb-\\udfff])?",j="[\\ufe0e\\ufe0f]?",O=j+I+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",b,E].join("|")+")"+j+I+")*"),S="(?:"+[d,b,E].join("|")+")"+O,L=RegExp(s,"g"),Z=RegExp(f,"g"),C=RegExp([x+"?"+g+"+"+A+"(?="+[m,x,"$"].join("|")+")",v+"+"+N+"(?="+[m,x+y,"$"].join("|")+")",x+"?"+y+"+"+A,x+"+"+N,p,S].join("|"),"g"),k=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,U="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,T="object"==typeof self&&self&&self.Object===Object&&self,w=U||T||Function("return this")();var D,R=(D={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"ss"},function(e){return null==D?void 0:D[e]});var z=Object.prototype.toString,_=w.Symbol,P=_?_.prototype:void 0,B=P?P.toString:void 0;function G(e){if("string"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&z.call(e)==r}(e))return B?B.call(e):"";var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t}function q(e){return null==e?"":G(e)}var H,J=(H=function(e,t,n){return e+(n?"-":"")+t.toLowerCase()},function(e){return function(e,t,n,r){var a=-1,i=e?e.length:0;for(r&&i&&(n=e[++a]);++a<i;)n=t(n,e[a],a,e);return n}(function(e,t,n){return e=q(e),void 0===(t=n?void 0:t)?function(e){return k.test(e)}(e)?function(e){return e.match(C)||[]}(e):function(e){return e.match(a)||[]}(e):e.match(t)||[]}(function(e){return(e=q(e))&&e.replace(i,R).replace(Z,"")}(e).replace(L,"")),H,"")});e.exports=J},8454:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(1721),a=n(7294),i=n(5414),o=n(9230),u=n(8594),c=n.n(u),l=n(4479),s=n.n(l),m=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.Z)(t,e),t.prototype.render=function(){var e,t,n,r,u=this.props,l=u.postNode,m=u.postPath,f=u.postSEO,p="";if(f){var d=l.frontmatter;e=d.title,t=d.description?d.description:l.excerpt,d.thumbnail&&(p=d.thumbnail.childImageSharp?(0,o.d)(d.thumbnail.childImageSharp.gatsbyImageData):d.thumbnail.publicURL),n=c()(s().siteUrl,"/"===(r=m)?r:r.replace(/\/$/,""))}else e=s().siteTitle,t=s().siteDescription,p=s().siteLogo;p=c()(s().siteUrl,p);var g=c()(s().siteUrl,s().pathPrefix),h=[{"@context":"http://schema.org","@type":"WebSite",url:g,name:e,alternateName:s().siteTitleAlt?s().siteTitleAlt:""}];return f&&h.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":n,name:e,image:p}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:g,name:e,alternateName:s().siteTitleAlt?s().siteTitleAlt:"",headline:e,image:{"@type":"ImageObject",url:p},description:t}),a.createElement(i.q,null,a.createElement("meta",{name:"description",content:t}),a.createElement("meta",{name:"image",content:p}),a.createElement("script",{type:"application/ld+json"},JSON.stringify(h)),a.createElement("meta",{property:"og:url",content:f?n:g}),f&&a.createElement("meta",{property:"og:type",content:"article"}),a.createElement("meta",{property:"og:title",content:e}),a.createElement("meta",{property:"og:description",content:t}),a.createElement("meta",{property:"og:image",content:p}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.createElement("meta",{name:"twitter:creator",content:s().userTwitter}),a.createElement("meta",{name:"twitter:title",content:e}),a.createElement("meta",{name:"twitter:description",content:t}),a.createElement("meta",{name:"twitter:image",content:p}))},t}(a.Component)},3477:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return E}});var r=n(1721),a=n(7294),i=n(5414),o=n(9230),u=n(9013),c=n(8797),l=n.n(c),s=n(1597),m=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.tags,n=e.size;return a.createElement("div",{className:"tag-container"},t&&t.map((function(e){return a.createElement(s.Link,{to:"/tags/"+l()(e)+"/",key:e,style:{textDecoration:"none"}},a.createElement("span",{className:n},e))})))},t}(a.Component),f=n(8454),p=n(4479),d=n.n(p),g=n(838),h=n(1278),b=function(e){function t(t){var n;return(n=e.call(this,t)||this).commentBox=a.createRef(),n}(0,r.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=document.body.classList.contains("dark");console.log(this.context);var t=e?"github-dark":"github-light",n=document.createElement("script");n.setAttribute("src","https://utteranc.es/client.js"),n.setAttribute("crossorigin","anonymous"),n.setAttribute("async",!0),n.setAttribute("label","[Comment]"),n.setAttribute("repo","ramuskay/blog-beerus"),n.setAttribute("issue-term","pathname"),n.setAttribute("theme",t),this.commentBox.current.appendChild(n)},n.render=function(){return a.createElement("div",{className:"comment-box-wrapper container pt-7"},a.createElement("h1",{className:"mb-0"},"Comments"),a.createElement("hr",{className:"my-0"}),a.createElement("div",{ref:this.commentBox,className:"comment-box"}))},t}(a.Component);b.contextType=h.Z;var E=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.Z)(t,e),t.prototype.render=function(){var e,t=this.props.data.markdownRemark,n=t.frontmatter;n.id=t.fileAbsolutePath.split("/").slice(-2)[0].substr(11),n.category_id=d().postDefaultCategoryID,n.date=t.fileAbsolutePath.split("/").slice(-2)[0].substr(0,10),n.thumbnail&&(e=n.thumbnail.childImageSharp?a.createElement(o.G,{image:n.thumbnail.childImageSharp.gatsbyImageData}):a.createElement("div",{className:"gatsby-image-wrapper"},a.createElement("img",{src:n.thumbnail.publicURL,alt:""})));var r=(0,g.p)(n.date),c=(0,g.q)(n);return a.createElement(u.Z,null,a.createElement(i.q,null,a.createElement("title",null,n.title+" – "+d().siteTitle)),a.createElement(f.Z,{postPath:n.id,postNode:t,postSEO:!0}),a.createElement("article",{className:"single container"},a.createElement("header",{className:"single-header "+(e?"":"no-thumbnail")},e||a.createElement("div",null),a.createElement("div",{className:"flex"},a.createElement("h1",null,n.title),a.createElement("div",{className:"post-meta"},a.createElement("time",{className:"date"},r),"/",a.createElement("a",{className:"github-link",href:c,target:"_blank",rel:"noopener noreferrer"},"Edit")),a.createElement(m,{tags:n.tags}))),a.createElement("div",{className:"post",dangerouslySetInnerHTML:{__html:t.html}}),a.createElement(b,null)))},t}(a.Component)}}]);
//# sourceMappingURL=component---src-templates-post-js-b80bf9b720dbbeebeb04.js.map