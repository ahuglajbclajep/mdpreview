!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){"use strict";n.d(t,"c",function(){return C}),n.d(t,"a",function(){return f}),n.d(t,"b",function(){return r});var r,o,u,l,i={},c=[],a=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i;function s(e,t){for(var n in t)e[n]=t[n];return e}function _(e){var t=e.parentNode;t&&t.removeChild(e)}function f(e,t,n){var r,o,u,l,i=arguments;if(t=s({},t),arguments.length>3)for(n=[n],r=3;r<arguments.length;r++)n.push(i[r]);if(null!=n&&(t.children=n),null!=e&&null!=e.defaultProps)for(o in e.defaultProps)void 0===t[o]&&(t[o]=e.defaultProps[o]);return l=t.key,null!=(u=t.ref)&&delete t.ref,null!=l&&delete t.key,p(e,t,l,u)}function p(e,t,n,o){var u={type:e,props:t,key:n,ref:o,__k:null,__p:null,__b:0,__e:null,l:null,__c:null,constructor:void 0};return r.vnode&&r.vnode(u),u}function d(e){return e.children}function v(e){if(null==e||"boolean"==typeof e)return null;if("string"==typeof e||"number"==typeof e)return p(null,e,null,null);if(null!=e.__e||null!=e.__c){var t=p(e.type,e.props,e.key,null);return t.__e=e.__e,t}return e}function h(e,t){this.props=e,this.context=t}function y(e,t){if(null==t)return e.__p?y(e.__p,e.__p.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?y(e):null}function m(e){!e.__d&&(e.__d=!0)&&1===o.push(e)&&(r.debounceRendering||u)(b)}function b(){var e;for(o.sort(function(e,t){return t.__v.__b-e.__v.__b});e=o.pop();)e.__d&&e.forceUpdate(!1)}function g(e,t,n,r,o,u,l,a,s){var f,p,d,h,m,b,g,w,S=t.__k||k(t.props.children,t.__k=[],v,!0),x=n&&n.__k||c,j=x.length;for(a==i&&(a=null!=u?u[0]:j?y(n,0):null),p=0;p<S.length;p++)if(null!=(f=S[p]=v(S[p]))){if(f.__p=t,f.__b=t.__b+1,null===(h=x[p])||h&&f.key==h.key&&f.type===h.type)x[p]=void 0;else for(d=0;d<j;d++){if((h=x[d])&&f.key==h.key&&f.type===h.type){x[d]=void 0;break}h=null}if(m=E(e,f,h=h||i,r,o,u,l,null,a,s),(d=f.ref)&&h.ref!=d&&(w||(w=[])).push(d,f.__c||m,f),null!=m){if(null==g&&(g=m),null!=f.l)m=f.l,f.l=null;else if(u==h||m!=a||null==m.parentNode)e:if(null==a||a.parentNode!==e)e.appendChild(m);else{for(b=a,d=0;(b=b.nextSibling)&&d<j;d+=2)if(b==m)break e;e.insertBefore(m,a)}a=m.nextSibling,"function"==typeof t.type&&(t.l=m)}}if(t.__e=g,null!=u&&"function"!=typeof t.type)for(p=u.length;p--;)null!=u[p]&&_(u[p]);for(p=j;p--;)null!=x[p]&&P(x[p],x[p]);if(w)for(p=0;p<w.length;p++)O(w[p],w[++p],w[++p])}function k(e,t,n,r){if(null==t&&(t=[]),null==e||"boolean"==typeof e)r&&t.push(null);else if(Array.isArray(e))for(var o=0;o<e.length;o++)k(e[o],t,n,r);else t.push(n?n(e):e);return t}function w(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]="number"==typeof n&&!1===a.test(t)?n+"px":n}function S(e,t,n,r,o){var u,l,i,c,a;if("key"===(t=o?"className"===t?"class":t:"class"===t?"className":t)||"children"===t);else if("style"===t)if(u=e.style,"string"==typeof n)u.cssText=n;else{if("string"==typeof r&&(u.cssText="",r=null),r)for(l in r)n&&l in n||w(u,l,"");if(n)for(i in n)r&&n[i]===r[i]||w(u,i,n[i])}else if("o"===t[0]&&"n"===t[1])c=t!==(t=t.replace(/Capture$/,"")),a=t.toLowerCase(),t=(a in e?a:t).slice(2),n?(r||e.addEventListener(t,x,c),(e.u||(e.u={}))[t]=n):e.removeEventListener(t,x,c);else if("list"!==t&&"tagName"!==t&&!o&&t in e)if(e.length&&"value"==t)for(t=e.length;t--;)e.options[t].selected=e.options[t].value==n;else e[t]=null==n?"":n;else"function"!=typeof n&&"dangerouslySetInnerHTML"!==t&&(t!==(t=t.replace(/^xlink:?/,""))?null==n||!1===n?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),n):null==n||!1===n?e.removeAttribute(t):e.setAttribute(t,n))}function x(e){return this.u[e.type](r.event?r.event(e):e)}function E(e,t,n,o,u,l,i,c,a,_){var f,p,y,m,b,w,S,x,E,j,O=t.type;if(void 0!==t.constructor)return null;(f=r.__b)&&f(t);try{e:if("function"==typeof O){if(x=t.props,E=(f=O.contextType)&&o[f.__c],j=f?E?E.props.value:f.__p:o,n.__c?S=(p=t.__c=n.__c).__p=p.__E:(O.prototype&&O.prototype.render?t.__c=p=new O(x,j):(t.__c=p=new h(x,j),p.constructor=O,p.render=H),E&&E.sub(p),p.props=x,p.state||(p.state={}),p.context=j,p.__n=o,y=p.__d=!0,p.__h=[]),null==p.__s&&(p.__s=p.state),null!=O.getDerivedStateFromProps&&s(p.__s==p.state?p.__s=s({},p.__s):p.__s,O.getDerivedStateFromProps(x,p.__s)),y)null==O.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),null!=p.componentDidMount&&i.push(p);else{if(null==O.getDerivedStateFromProps&&null==c&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(x,j),!c&&null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(x,p.__s,j)){p.props=x,p.state=p.__s,p.__d=!1,p.__v=t,t.__e=n.__e,t.__k=n.__k;break e}null!=p.componentWillUpdate&&p.componentWillUpdate(x,p.__s,j)}for(m=p.props,b=p.state,p.context=j,p.props=x,p.state=p.__s,(f=r.__r)&&f(t),p.__d=!1,p.__v=t,p.__P=e,k(null!=(f=p.render(p.props,p.state,p.context))&&f.type==d&&null==f.key?f.props.children:f,t.__k=[],v,!0),null!=p.getChildContext&&(o=s(s({},o),p.getChildContext())),y||null==p.getSnapshotBeforeUpdate||(w=p.getSnapshotBeforeUpdate(m,b)),g(e,t,n,o,u,l,i,a,_),p.base=t.__e;f=p.__h.pop();)f.call(p);y||null==m||null==p.componentDidUpdate||p.componentDidUpdate(m,b,w),S&&(p.__E=p.__p=null)}else t.__e=M(n.__e,t,n,o,u,l,i,_);(f=r.diffed)&&f(t)}catch(e){r.__e(e,t,n)}return t.__e}function j(e,t){for(var n;n=e.pop();)try{n.componentDidMount()}catch(e){r.__e(e,n.__v)}r.__c&&r.__c(t)}function M(e,t,n,r,o,u,l,a){var s,_,f,p,d=n.props,v=t.props;if(o="svg"===t.type||o,null==e&&null!=u)for(s=0;s<u.length;s++)if(null!=(_=u[s])&&(null===t.type?3===_.nodeType:_.localName===t.type)){e=_,u[s]=null;break}if(null==e){if(null===t.type)return document.createTextNode(v);e=o?document.createElementNS("http://www.w3.org/2000/svg",t.type):document.createElement(t.type),u=null}return null===t.type?d!==v&&(e.data=v):t!==n&&(null!=u&&(u=c.slice.call(e.childNodes)),f=(d=n.props||i).dangerouslySetInnerHTML,p=v.dangerouslySetInnerHTML,a||(p||f)&&(p&&f&&p.__html==f.__html||(e.innerHTML=p&&p.__html||"")),function(e,t,n,r,o){var u;for(u in n)u in t||S(e,u,null,n[u],r);for(u in t)o&&"function"!=typeof t[u]||"value"===u||"checked"===u||n[u]===t[u]||S(e,u,t[u],n[u],r)}(e,v,d,o,a),p||g(e,t,n,r,"foreignObject"!==t.type&&o,u,l,i,a),a||("value"in v&&void 0!==v.value&&v.value!==e.value&&(e.value=null==v.value?"":v.value),"checked"in v&&void 0!==v.checked&&v.checked!==e.checked&&(e.checked=v.checked))),e}function O(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){r.__e(e,n)}}function P(e,t,n){var o,u,l;if(r.unmount&&r.unmount(e),(o=e.ref)&&O(o,null,t),n||"function"==typeof e.type||(n=null!=(u=e.__e)),e.__e=e.l=null,null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){r.__e(e,t)}o.base=o.__P=null}if(o=e.__k)for(l=0;l<o.length;l++)o[l]&&P(o[l],t,n);null!=u&&_(u)}function H(e,t,n){return this.constructor(e,n)}function C(e,t,n){var o,u,a;r.__p&&r.__p(e,t),u=(o=n===l)?null:n&&n.__k||t.__k,e=f(d,null,[e]),a=[],E(t,o?t.__k=e:(n||t).__k=e,u||i,i,void 0!==t.ownerSVGElement,n&&!o?[n]:u?null:c.slice.call(t.childNodes),a,!1,n||i,o),j(a,e)}r={},h.prototype.setState=function(e,t){var n=this.__s!==this.state&&this.__s||(this.__s=s({},this.state));("function"!=typeof e||(e=e(n,this.props)))&&s(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),m(this))},h.prototype.forceUpdate=function(e){var t,n,r,o=this.__v,u=this.__v.__e,l=this.__P;l&&(t=!1!==e,n=[],r=E(l,o,s({},o),this.__n,void 0!==l.ownerSVGElement,null,n,t,null==u?y(o):u),j(n,o),r!=u&&function e(t){var n,r;if(null!=(t=t.__p)&&null!=t.__c){for(t.__e=t.__c.base=null,n=0;n<t.__k.length;n++)if(null!=(r=t.__k[n])&&null!=r.__e){t.__e=t.__c.base=r.__e;break}return e(t)}}(o)),e&&e()},h.prototype.render=d,o=[],u="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,r.__e=function(e,t,n){for(var r;t=t.__p;)if((r=t.__c)&&!r.__p)try{if(r.constructor&&null!=r.constructor.getDerivedStateFromError)r.setState(r.constructor.getDerivedStateFromError(e));else{if(null==r.componentDidCatch)continue;r.componentDidCatch(e)}return m(r.__E=r)}catch(t){e=t}throw e},l=i},function(e,t,n){"use strict";n.d(t,"c",function(){return _}),n.d(t,"a",function(){return f}),n.d(t,"b",function(){return p});var r,o,u=n(0),l=[],i=u.b.__r;u.b.__r=function(e){i&&i(e),r=0,(o=e.__c).__H&&(o.__H.t=y(o.__H.t))};var c=u.b.diffed;u.b.diffed=function(e){c&&c(e);var t=e.__c;if(t){var n=t.__H;n&&(n.u=y(n.u))}};var a=u.b.unmount;function s(e){u.b.__h&&u.b.__h(o);var t=o.__H||(o.__H={i:[],t:[],u:[]});return e>=t.i.length&&t.i.push({}),t.i[e]}function _(e){return function(e,t,n){var u=s(r++);return u.__c||(u.__c=o,u.o=[n?n(t):k(null,t),function(t){var n=e(u.o[0],t);u.o[0]!==n&&(u.o[0]=n,u.__c.setState({}))}]),u.o}(k,e)}function f(e,t){var n=s(r++);g(n.v,t)&&(n.o=e,n.v=t,o.__H.t.push(n),v(o))}function p(e){return d(function(){return{current:e}},[])}function d(e,t){var n=s(r++);return g(n.v,t)?(n.v=t,n.m=e,n.o=e()):n.o}u.b.unmount=function(e){a&&a(e);var t=e.__c;if(t){var n=t.__H;n&&n.i.forEach(function(e){return e.p&&e.p()})}};var v=function(){};function h(){l.some(function(e){e.l=!1,e.__P&&(e.__H.t=y(e.__H.t))}),l=[]}function y(e){return e.forEach(m),e.forEach(b),[]}function m(e){e.p&&e.p()}function b(e){var t=e.o();"function"==typeof t&&(e.p=t)}function g(e,t){return!e||t.some(function(t,n){return t!==e[n]})}function k(e,t){return"function"==typeof t?t(e):t}"undefined"!=typeof window&&(v=function(e){!e.l&&(e.l=!0)&&1===l.push(e)&&(u.b.requestAnimationFrame||function(e){var t=function(){clearTimeout(n),cancelAnimationFrame(r),setTimeout(e)},n=setTimeout(t,100),r=requestAnimationFrame(t)})(h)})},function(e,t,n){"use strict";n.d(t,"a",function(){return i});const r=Symbol("Comlink.proxy"),o=Symbol("Comlink.endpoint"),u=new WeakSet,l=new Map([["proxy",{canHandle:e=>e&&e[r],serialize(e){const{port1:t,port2:n}=new MessageChannel;return function e(t,n=self){n.addEventListener("message",async o=>{if(!o||!o.data)return;const{id:l,type:i,path:c}={path:[],...o.data},f=(o.data.argumentList||[]).map(_);let p;try{const n=c.slice(0,-1).reduce((e,t)=>e[t],t),l=c.reduce((e,t)=>e[t],t);switch(i){case 0:p=await l;break;case 1:n[c.slice(-1)[0]]=_(o.data.value),p=!0;break;case 2:p=await l.apply(n,f);break;case 3:{const e=await new l(...f);p=function(e){return Object.assign(e,{[r]:!0})}(e)}break;case 4:{const{port1:n,port2:r}=new MessageChannel;e(t,r),p=function(e,t){return a.set(e,t),e}(n,[n])}break;default:console.warn("Unrecognized message",o.data)}}catch(e){p=e,u.add(e)}const[d,v]=s(p);n.postMessage({...d,id:l},v)});n.start&&n.start()}(e,t),[n,[n]]},deserialize:e=>(e.start(),i(e))}],["throw",{canHandle:e=>u.has(e),serialize(e){const t=e instanceof Error;let n=e;return t&&(n={isError:t,message:e.message,stack:e.stack}),[n,[]]},deserialize(e){if(e.isError)throw Object.assign(new Error,e);throw e}}]]);function i(e){return function e(t,n=[]){const r=new Proxy(function(){},{get(o,u){if("then"===u){if(0===n.length)return{then:()=>r};const e=f(t,{type:0,path:n.map(e=>e.toString())}).then(_);return e.then.bind(e)}return e(t,[...n,u])},set(e,r,o){const[u,l]=s(o);return f(t,{type:1,path:[...n,r].map(e=>e.toString()),value:u},l).then(_)},apply(r,u,l){const i=n[n.length-1];if(i===o)return f(t,{type:4}).then(_);if("bind"===i)return e(t,n.slice(0,-1));const[a,s]=c(l);return f(t,{type:2,path:n.map(e=>e.toString()),argumentList:a},s).then(_)},construct(e,r){const[o,u]=c(r);return f(t,{type:3,path:n.map(e=>e.toString()),argumentList:o},u).then(_)}});return r}(e)}function c(e){const t=e.map(s);return[t.map(e=>e[0]),(n=t.map(e=>e[1]),Array.prototype.concat.apply([],n))];var n}const a=new WeakMap;function s(e){for(const[t,n]of l)if(n.canHandle(e)){const[r,o]=n.serialize(e);return[{type:3,name:t,value:r},o]}return[{type:0,value:e},a.get(e)||[]]}function _(e){switch(e.type){case 3:return l.get(e.name).deserialize(e.value);case 0:return e.value}}function f(e,t,n){return new Promise(r=>{const o=new Array(4).fill(0).map(()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)).join("-");e.addEventListener("message",function t(n){n.data&&n.data.id&&n.data.id===o&&(e.removeEventListener("message",t),r(n.data))}),e.start&&e.start(),e.postMessage({id:o,...t},n)})}},function(e,t,n){"use strict";n.d(t,"a",function(){return r});function r(e){if(0===e.length)return;const t=document.createElement("a");t.href=URL.createObjectURL(new Blob([e],{type:"text/markdown"})),t.download=`${function(){const e=new Date;return`${e.getFullYear()}-${`${e.getMonth()+1}`.padStart(2,"0")}-${`${e.getDate()}`.padStart(2,"0")}_${`${e.getHours()}`.padStart(2,"0")}-${`${e.getMinutes()}`.padStart(2,"0")}-${`${e.getSeconds()}`.padStart(2,"0")}`}()}.md`,t.dispatchEvent(new MouseEvent("click"))}},function(e,t,n){"use strict";n.r(t),function(e){var t=n(0),r=n(1),o=n(2),u=n(3),l=(n(6),n(7),function(e,t,n,r){return new(n||(n=Promise))(function(o,u){function l(e){try{c(r.next(e))}catch(e){u(e)}}function i(e){try{c(r.throw(e))}catch(e){u(e)}}function c(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(l,i)}c((r=r.apply(e,t||[])).next())})});const i=({worker:e,data:n})=>{const[o,i]=Object(r.c)(n.markdown),[c,a]=Object(r.c)(n.html),s=Object(r.b)(),_=Object(r.b)(n.cursor);return Object(r.a)(()=>{s.current&&(s.current.selectionEnd=_.current)},[_.current]),Object(t.a)("div",{className:"container",tabIndex:0,onKeyDown:t=>l(void 0,void 0,void 0,function*(){if(t.ctrlKey&&"f"===t.key&&s.current){t.preventDefault();const{formatted:n,cursorOffset:r}=yield e.format(o,s.current.selectionStart);i(n),_.current=r}else t.ctrlKey&&"s"===t.key&&s.current?(t.preventDefault(),e.save(o,s.current.selectionStart)):t.ctrlKey&&"d"===t.key&&(t.preventDefault(),Object(u.a)(o))})},Object(t.a)("textarea",{className:"edit-area",ref:s,value:o,onInput:t=>l(void 0,void 0,void 0,function*(){const n=t.target.value;i(n),a(yield e.md2html(n))}),autoFocus:!0,placeholder:"# mdpreview"}),Object(t.a)("div",{className:"markdown-body",dangerouslySetInnerHTML:{__html:c}}))};(()=>l(void 0,void 0,void 0,function*(){const n=Object(o.a)(new Worker(e,{})),r=yield new n,u=yield r.load();Object(t.c)(Object(t.a)(i,{worker:r,data:u}),document.body)}))()}.call(this,n(5))},function(e,t,n){e.exports=n.p+"0.worker.js"},function(e,t,n){},function(e,t,n){}]);