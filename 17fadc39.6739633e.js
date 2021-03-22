(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{160:function(e,t,n){"use strict";n.r(t);n(213);var a=n(0),r=n.n(a),o=n(165),i=n(179),l=(n(166),n(167),n(164)),s=n(133),c=n.n(s);function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var p=n(4),d=n(131),m=n.n(d),h=n(64),f=n.n(h),y=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={opacity:0},n}Object(p.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.setState({opacity:1})},n._computeDimensions=function(){var e=.8*document.body.clientWidth,t=e/16*9;return{width:Math.floor(e),height:Math.floor(t)}},n._renderBody=function(){var e=this._computeDimensions(),t=e.width,n=e.height;return r.a.createElement("div",{className:m.a.videoOverlay,onClick:this.props.onCloseClick,style:{opacity:this.state.opacity}},r.a.createElement("div",{className:"shadow--tl",style:{height:n+"px",width:t+"px",backgroundColor:"#000000"}},r.a.createElement("iframe",{width:t,height:n,src:"https://www.youtube-nocookie.com/embed/qNlIH98vCgY?autoplay=1&modestbranding=1",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})))},n.render=function(){return f.a.createPortal(this._renderBody(),document.body)},t}(r.a.Component);y.defaultProps={onCloseClick:function(){}};var g=y,v=n(188);function b(){return r.a.createElement("a",{className:"button button--primary detailsButton",href:"https://dl.acm.org/doi/10.1145/3379337.3415890?cid=99659587236",target:"_blank"},"View Paper")}var k=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={showCitation:!1,showVideo:!1},n._showCitationClick=n._showCitationClick.bind(u(n)),n._toggleVideo=n._toggleVideo.bind(u(n)),n}Object(p.a)(t,e);var n=t.prototype;return n._showCitationClick=function(){this.setState({showCitation:!this.state.showCitation})},n._toggleVideo=function(){this.setState({showVideo:!this.state.showVideo})},n.render=function(){var e=this.state,t=e.showCitation,n=e.showVideo;return r.a.createElement("div",{className:Object(o.a)("container",m.a.paperDetails)},r.a.createElement(b,null),r.a.createElement("button",{onClick:this._toggleVideo,className:"button button--secondary detailsButton"},"Watch the Video"),r.a.createElement("button",{onClick:this._showCitationClick,className:Object(o.a)("button button--secondary detailsButton",t&&"button--active")},t?"Hide Citation":"Show Citation"),t?r.a.createElement(v.a,null):null,n?r.a.createElement(g,{onCloseClick:this._toggleVideo}):null)},t}(r.a.Component),w={name:"University of Toronto",url:"https://web.cs.toronto.edu"},E={name:"Vector Institute",url:"https://vectorinstitute.ai"};function N(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:c.a.paperTitle},r.a.createElement("h1",null,"Skyline: Interactive In-Editor Computational Performance Profiling for Deep Neural Network Training"),r.a.createElement("p",null,r.a.createElement("a",{className:"modest-link",href:"https://uist.acm.org/uist2020/",target:"_blank"},"Proceedings of the 33rd ACM Symposium on User Interface Software and Technology (UIST'20)"))),r.a.createElement(x,null))}function C(){return r.a.createElement("div",{className:Object(o.a)("container",c.a.paperAbstract)},r.a.createElement("strong",null,"Abstract"),r.a.createElement("p",null,"Training a state-of-the-art deep neural network (DNN) is a computationally-expensive and time-consuming process, which incentivizes deep learning developers to debug their DNNs for computational performance. However, effectively performing this debugging requires intimate knowledge about the underlying software and hardware systems\u2014something that the typical deep learning developer may not have. To help bridge this gap, we present Skyline: a new interactive tool for DNN training that supports in-editor computational performance profiling, visualization, and debugging. Skyline's key contribution is that it leverages special computational properties of DNN training to provide (i) interactive performance predictions and visualizations, and (ii) directly manipulatable visualizations that, when dragged, mutate the batch size in the code. As an in-editor tool, Skyline allows users to leverage these diagnostic features to debug the performance of their DNNs during development. An exploratory qualitative user study of Skyline produced promising results; all the participants found Skyline to be useful and easy to use."))}function j(e){return r.a.createElement("div",{className:Object(o.a)("avatar",c.a.paperAuthor)},r.a.createElement("div",{className:"avatar__intro"},r.a.createElement("h4",{className:"avatar__name"},r.a.createElement("a",{className:"modest-link",href:e.website,target:"_blank"},e.name)),r.a.createElement("small",{className:"avatar__subtitle"},e.affiliations.map((function(t,n){var a=t.name,o=t.url,i=r.a.createElement("a",{className:"modest-link",href:o,target:"_blank"},a);return n==e.affiliations.length-1?r.a.createElement("span",{key:o},i):r.a.createElement("span",{key:o},i,", ")})))))}function x(){return r.a.createElement("div",{className:Object(o.a)("row",c.a.authorsList)},r.a.createElement("div",{className:"col col--4"},r.a.createElement(j,{name:"Geoffrey X. Yu",affiliations:[w,E],website:"https://www.geoffreyyu.com"})),r.a.createElement("div",{className:"col col--4"},r.a.createElement(j,{name:"Tovi Grossman",affiliations:[w],website:"https://www.tovigrossman.com"})),r.a.createElement("div",{className:"col col--4"},r.a.createElement(j,{name:"Gennady Pekhimenko",affiliations:[w,E],website:"https://www.cs.toronto.edu/~pekhimenko"})))}t.default=function(){return Object(l.a)().siteConfig,r.a.createElement(i.a,{title:"Research Paper",description:"Details about the Skyline research paper, published at UIST'20."},r.a.createElement("main",null,r.a.createElement(N,null),r.a.createElement(C,null),r.a.createElement(k,null)))}},171:function(e,t,n){"use strict";var a=n(12),r=n(80)(!0);a(a.P,"Array",{includes:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),n(77)("includes")},172:function(e,t,n){"use strict";var a=n(12),r=n(169);a(a.P+a.F*n(170)("includes"),"String",{includes:function(e){return!!~r(this,e,"includes").indexOf(e,arguments.length>1?arguments[1]:void 0)}})},176:function(e,t,n){"use strict";var a=n(8),r=n(27),o=n(56),i=n(57);n(58)("match",1,(function(e,t,n,l){return[function(n){var a=e(this),r=null==n?void 0:n[t];return void 0!==r?r.call(n,a):new RegExp(n)[t](String(a))},function(e){var t=l(n,e,this);if(t.done)return t.value;var s=a(e),c=String(this);if(!s.global)return i(s,c);var u=s.unicode;s.lastIndex=0;for(var p,d=[],m=0;null!==(p=i(s,c));){var h=String(p[0]);d[m]=h,""===h&&(s.lastIndex=o(c,r(s.lastIndex),u)),m++}return 0===m?null:d}]}))},177:function(e,t,n){"use strict";const a=(e,{target:t=document.body}={})=>{const n=document.createElement("textarea"),a=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const r=document.getSelection();let o=!1;r.rangeCount>0&&(o=r.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let i=!1;try{i=document.execCommand("copy")}catch(l){}return n.remove(),o&&(r.removeAllRanges(),r.addRange(o)),a&&a.focus(),i};e.exports=a,e.exports.default=a},178:function(e,t){e.exports.parse=function(e){var t=e.split(",").map((function(e){return function(e){if(/^-?\d+$/.test(e))return parseInt(e,10);var t;if(t=e.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){var n=t[1],a=t[2],r=t[3];if(n&&r){var o=[],i=(n=parseInt(n))<(r=parseInt(r))?1:-1;"-"!=a&&".."!=a&&"\u2025"!=a||(r+=i);for(var l=n;l!=r;l+=i)o.push(l);return o}}return[]}(e)}));return 0===t.length?[]:1===t.length?Array.isArray(t[0])?t[0]:t:t.reduce((function(e,t){return Array.isArray(e)||(e=[e]),Array.isArray(t)||(t=[t]),e.concat(t)}))}},180:function(e,t,n){"use strict";var a=n(2),r=(n(171),n(172),n(81),n(78),n(176),n(174),n(0)),o=n.n(r),i=n(165),l={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},s={Prism:n(52).a,theme:l};function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var p=/\r\n|\r|\n/,d=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},m=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},h=function(e,t){var n=e.plain,a=Object.create(null),r=e.styles.reduce((function(e,n){var a=n.languages,r=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=u({},e[t],r);e[t]=n})),e}),a);return r.root=n,r.plain=u({},n,{backgroundColor:null}),r};function f(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var y=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),c(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?h(e.theme,e.language):void 0;return t.themeDict=n})),c(this,"getLineProps",(function(e){var n=e.key,a=e.className,r=e.style,o=u({},f(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),i=t.getThemeDict(t.props);return void 0!==i&&(o.style=i.plain),void 0!==r&&(o.style=void 0!==o.style?u({},o.style,r):r),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o})),c(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,r=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===r&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===r&&!a)return o[n[0]];var i=a?{display:"inline-block"}:{},l=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[i].concat(l))}})),c(this,"getTokenProps",(function(e){var n=e.key,a=e.className,r=e.style,o=e.token,i=u({},f(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==r&&(i.style=void 0!==i.style?u({},i.style,r):r),void 0!==n&&(i.key=n),a&&(i.className+=" "+a),i}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,r=e.children,o=this.getThemeDict(this.props),i=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],a=[0],r=[e.length],o=0,i=0,l=[],s=[l];i>-1;){for(;(o=a[i]++)<r[i];){var c=void 0,u=t[i],h=n[i][o];if("string"==typeof h?(u=i>0?u:["plain"],c=h):(u=m(u,h.type),h.alias&&(u=m(u,h.alias)),c=h.content),"string"==typeof c){var f=c.split(p),y=f.length;l.push({types:u,content:f[0]});for(var g=1;g<y;g++)d(l),s.push(l=[]),l.push({types:u,content:f[g]})}else i++,t.push(u),n.push(c),a.push(0),r.push(c.length)}i--,t.pop(),n.pop(),a.pop(),r.pop()}return d(l),s}(void 0!==i?t.tokenize(a,i,n):[a]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component),g=n(177),v=n.n(g),b=n(178),k=n.n(b),w=n(164),E={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},N=n(168),C=function(){var e=Object(w.a)().siteConfig.themeConfig.prism,t=void 0===e?{}:e,n=Object(N.a)().isDarkTheme,a=t.theme||E,r=t.darkTheme||a;return n?r:a},j=n(132),x=n.n(j),S=/{([\d,-]+)}/,O=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),a=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+a+")\\s*$")},T=/title=".*"/;t.a=function(e){var t=e.children,n=e.className,l=e.metastring,c=Object(w.a)().siteConfig.themeConfig.prism,u=void 0===c?{}:c,p=Object(r.useState)(!1),d=p[0],m=p[1],h=Object(r.useState)(!1),f=h[0],g=h[1];Object(r.useEffect)((function(){g(!0)}),[]);var b=Object(r.useRef)(null),E=[],N="",j=C();if(l&&S.test(l)){var P=l.match(S)[1];E=k.a.parse(P).filter((function(e){return e>0}))}l&&T.test(l)&&(N=l.match(T)[0].split("title=")[1].replace(/"+/g,""));var _=n&&n.replace(/language-/,"");!_&&u.defaultLanguage&&(_=u.defaultLanguage);var I=t.replace(/\n$/,"");if(0===E.length&&void 0!==_){for(var D,B="",A=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return O(["js","jsBlock"]);case"jsx":case"tsx":return O(["js","jsBlock","jsx"]);case"html":return O(["js","jsBlock","html"]);case"python":case"py":return O(["python"]);default:return O()}}(_),V=t.replace(/\n$/,"").split("\n"),L=0;L<V.length;){var G=L+1,z=V[L].match(A);if(null!==z){switch(z.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":B+=G+",";break;case"highlight-start":D=G;break;case"highlight-end":B+=D+"-"+(G-1)+","}V.splice(L,1)}else L+=1}E=k.a.parse(B),I=V.join("\n")}var F=function(){v()(I),m(!0),setTimeout((function(){return m(!1)}),2e3)};return o.a.createElement(y,Object(a.a)({},s,{key:f,theme:j,code:I,language:_}),(function(e){var t,n,r=e.className,l=e.style,s=e.tokens,c=e.getLineProps,u=e.getTokenProps;return o.a.createElement(o.a.Fragment,null,N&&o.a.createElement("div",{style:l,className:x.a.codeBlockTitle},N),o.a.createElement("div",{className:x.a.codeBlockContent},o.a.createElement("button",{ref:b,type:"button","aria-label":"Copy code to clipboard",className:Object(i.a)(x.a.copyButton,(t={},t[x.a.copyButtonWithTitle]=N,t)),onClick:F},d?"Copied":"Copy"),o.a.createElement("div",{tabIndex:"0",className:Object(i.a)(r,x.a.codeBlock,(n={},n[x.a.codeBlockWithTitle]=N,n))},o.a.createElement("div",{className:x.a.codeBlockLines,style:l},s.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=c({line:e,key:t});return E.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),o.a.createElement("div",Object(a.a)({key:t},n),e.map((function(e,t){return o.a.createElement("span",Object(a.a)({key:t},u({token:e,key:t})))})))}))))))}))}},188:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(131),i=n.n(o),l=n(180),s=n(189),c=n(190);t.a=function(){return r.a.createElement("div",{className:i.a.citationBlock},r.a.createElement(s.a,{defaultValue:"bibtex",values:[{label:"BibTeX",value:"bibtex"},{label:"Plain Text",value:"txt"}]},r.a.createElement(c.a,{value:"bibtex"},r.a.createElement(l.a,{language:"tex"},"@inproceedings{skyline-yu20,\n  title = {{Skyline: Interactive In-Editor Computational Performance Profiling\n    for Deep Neural Network Training}},\n  author = {Yu, Geoffrey X. and Grossman, Tovi and Pekhimenko, Gennady},\n  booktitle = {{Proceedings of the 33rd ACM Symposium on User Interface\n    Software and Technology (UIST'20)}},\n  year = {2020},\n}")),r.a.createElement(c.a,{value:"txt"},r.a.createElement(l.a,{language:"txt"},"Geoffrey X. Yu, Tovi Grossman, and Gennady Pekhimenko.\nSkyline: Interactive In-Editor Computational Performance Profiling for\nDeep Neural Network Training. In Proceedings of the 33rd ACM Symposium\non User Interface Software and Technology (UIST'20). 2020."))))}},189:function(e,t,n){"use strict";n(31),n(21),n(22);var a=n(0),r=n.n(a),o=n(173),i=n(165),l=n(134),s=n.n(l),c=37,u=39;t.a=function(e){var t=e.block,n=e.children,l=e.defaultValue,p=e.values,d=e.groupId,m=Object(o.a)(),h=m.tabGroupChoices,f=m.setTabGroupChoices,y=Object(a.useState)(l),g=y[0],v=y[1];if(null!=d){var b=h[d];null!=b&&b!==g&&p.some((function(e){return e.value===b}))&&v(b)}var k=function(e){v(e),null!=d&&f(d,e)},w=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t})},p.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":g===t,className:Object(i.a)("tabs__item",s.a.tabItem,{"tabs__item--active":g===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){return function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case c:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e)},onFocus:function(){return k(t)},onClick:function(){return k(t)}},n)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===g}))[0]))}},190:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}},213:function(e,t,n){var a=n(26).f,r=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in r||n(10)&&a(r,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})}}]);