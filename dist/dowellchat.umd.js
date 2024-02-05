(function(T,h){typeof exports=="object"&&typeof module<"u"?h(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],h):(T=typeof globalThis<"u"?globalThis:T||self,h(T.dowellchat={},T.React))})(this,function(T,h){"use strict";var K={exports:{}},A={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var te;function Ne(){if(te)return A;te=1;var n=h,a=Symbol.for("react.element"),i=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,d=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function O(_,v,C){var b,x={},S=null,L=null;C!==void 0&&(S=""+C),v.key!==void 0&&(S=""+v.key),v.ref!==void 0&&(L=v.ref);for(b in v)u.call(v,b)&&!p.hasOwnProperty(b)&&(x[b]=v[b]);if(_&&_.defaultProps)for(b in v=_.defaultProps,v)x[b]===void 0&&(x[b]=v[b]);return{$$typeof:a,type:_,key:S,ref:L,props:x,_owner:d.current}}return A.Fragment=i,A.jsx=O,A.jsxs=O,A}var I={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ne;function Ae(){return ne||(ne=1,process.env.NODE_ENV!=="production"&&function(){var n=h,a=Symbol.for("react.element"),i=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),O=Symbol.for("react.provider"),_=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),b=Symbol.for("react.suspense_list"),x=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),L=Symbol.for("react.offscreen"),le=Symbol.iterator,qe="@@iterator";function Ke(e){if(e===null||typeof e!="object")return null;var r=le&&e[le]||e[qe];return typeof r=="function"?r:null}var D=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function y(e){{for(var r=arguments.length,t=new Array(r>1?r-1:0),o=1;o<r;o++)t[o-1]=arguments[o];Ge("error",e,t)}}function Ge(e,r,t){{var o=D.ReactDebugCurrentFrame,f=o.getStackAddendum();f!==""&&(r+="%s",t=t.concat([f]));var c=t.map(function(l){return String(l)});c.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,c)}}var Je=!1,He=!1,Xe=!1,Ze=!1,Qe=!1,fe;fe=Symbol.for("react.module.reference");function er(e){return!!(typeof e=="string"||typeof e=="function"||e===u||e===p||Qe||e===d||e===C||e===b||Ze||e===L||Je||He||Xe||typeof e=="object"&&e!==null&&(e.$$typeof===S||e.$$typeof===x||e.$$typeof===O||e.$$typeof===_||e.$$typeof===v||e.$$typeof===fe||e.getModuleId!==void 0))}function rr(e,r,t){var o=e.displayName;if(o)return o;var f=r.displayName||r.name||"";return f!==""?t+"("+f+")":t}function ce(e){return e.displayName||"Context"}function j(e){if(e==null)return null;if(typeof e.tag=="number"&&y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case u:return"Fragment";case i:return"Portal";case p:return"Profiler";case d:return"StrictMode";case C:return"Suspense";case b:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case _:var r=e;return ce(r)+".Consumer";case O:var t=e;return ce(t._context)+".Provider";case v:return rr(e,e.render,"ForwardRef");case x:var o=e.displayName||null;return o!==null?o:j(e.type)||"Memo";case S:{var f=e,c=f._payload,l=f._init;try{return j(l(c))}catch{return null}}}return null}var k=Object.assign,$=0,de,ve,pe,ge,me,be,he;function ye(){}ye.__reactDisabledLog=!0;function tr(){{if($===0){de=console.log,ve=console.info,pe=console.warn,ge=console.error,me=console.group,be=console.groupCollapsed,he=console.groupEnd;var e={configurable:!0,enumerable:!0,value:ye,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}$++}}function nr(){{if($--,$===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:k({},e,{value:de}),info:k({},e,{value:ve}),warn:k({},e,{value:pe}),error:k({},e,{value:ge}),group:k({},e,{value:me}),groupCollapsed:k({},e,{value:be}),groupEnd:k({},e,{value:he})})}$<0&&y("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var G=D.ReactCurrentDispatcher,J;function U(e,r,t){{if(J===void 0)try{throw Error()}catch(f){var o=f.stack.trim().match(/\n( *(at )?)/);J=o&&o[1]||""}return`
`+J+e}}var H=!1,V;{var ar=typeof WeakMap=="function"?WeakMap:Map;V=new ar}function Ee(e,r){if(!e||H)return"";{var t=V.get(e);if(t!==void 0)return t}var o;H=!0;var f=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var c;c=G.current,G.current=null,tr();try{if(r){var l=function(){throw Error()};if(Object.defineProperty(l.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(l,[])}catch(P){o=P}Reflect.construct(e,[],l)}else{try{l.call()}catch(P){o=P}e.call(l.prototype)}}else{try{throw Error()}catch(P){o=P}e()}}catch(P){if(P&&o&&typeof P.stack=="string"){for(var s=P.stack.split(`
`),E=o.stack.split(`
`),g=s.length-1,m=E.length-1;g>=1&&m>=0&&s[g]!==E[m];)m--;for(;g>=1&&m>=0;g--,m--)if(s[g]!==E[m]){if(g!==1||m!==1)do if(g--,m--,m<0||s[g]!==E[m]){var R=`
`+s[g].replace(" at new "," at ");return e.displayName&&R.includes("<anonymous>")&&(R=R.replace("<anonymous>",e.displayName)),typeof e=="function"&&V.set(e,R),R}while(g>=1&&m>=0);break}}}finally{H=!1,G.current=c,nr(),Error.prepareStackTrace=f}var N=e?e.displayName||e.name:"",Fe=N?U(N):"";return typeof e=="function"&&V.set(e,Fe),Fe}function or(e,r,t){return Ee(e,!1)}function ir(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function B(e,r,t){if(e==null)return"";if(typeof e=="function")return Ee(e,ir(e));if(typeof e=="string")return U(e);switch(e){case C:return U("Suspense");case b:return U("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case v:return or(e.render);case x:return B(e.type,r,t);case S:{var o=e,f=o._payload,c=o._init;try{return B(c(f),r,t)}catch{}}}return""}var z=Object.prototype.hasOwnProperty,_e={},Oe=D.ReactDebugCurrentFrame;function q(e){if(e){var r=e._owner,t=B(e.type,e._source,r?r.type:null);Oe.setExtraStackFrame(t)}else Oe.setExtraStackFrame(null)}function ur(e,r,t,o,f){{var c=Function.call.bind(z);for(var l in e)if(c(e,l)){var s=void 0;try{if(typeof e[l]!="function"){var E=Error((o||"React class")+": "+t+" type `"+l+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[l]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw E.name="Invariant Violation",E}s=e[l](r,l,o,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(g){s=g}s&&!(s instanceof Error)&&(q(f),y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",o||"React class",t,l,typeof s),q(null)),s instanceof Error&&!(s.message in _e)&&(_e[s.message]=!0,q(f),y("Failed %s type: %s",t,s.message),q(null))}}}var sr=Array.isArray;function X(e){return sr(e)}function lr(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,t=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t}}function fr(e){try{return Re(e),!1}catch{return!0}}function Re(e){return""+e}function we(e){if(fr(e))return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",lr(e)),Re(e)}var W=D.ReactCurrentOwner,cr={key:!0,ref:!0,__self:!0,__source:!0},xe,je,Z;Z={};function dr(e){if(z.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function vr(e){if(z.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function pr(e,r){if(typeof e.ref=="string"&&W.current&&r&&W.current.stateNode!==r){var t=j(W.current.type);Z[t]||(y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',j(W.current.type),e.ref),Z[t]=!0)}}function gr(e,r){{var t=function(){xe||(xe=!0,y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}}function mr(e,r){{var t=function(){je||(je=!0,y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}}var br=function(e,r,t,o,f,c,l){var s={$$typeof:a,type:e,key:r,ref:t,props:l,_owner:c};return s._store={},Object.defineProperty(s._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(s,"_self",{configurable:!1,enumerable:!1,writable:!1,value:o}),Object.defineProperty(s,"_source",{configurable:!1,enumerable:!1,writable:!1,value:f}),Object.freeze&&(Object.freeze(s.props),Object.freeze(s)),s};function hr(e,r,t,o,f){{var c,l={},s=null,E=null;t!==void 0&&(we(t),s=""+t),vr(r)&&(we(r.key),s=""+r.key),dr(r)&&(E=r.ref,pr(r,f));for(c in r)z.call(r,c)&&!cr.hasOwnProperty(c)&&(l[c]=r[c]);if(e&&e.defaultProps){var g=e.defaultProps;for(c in g)l[c]===void 0&&(l[c]=g[c])}if(s||E){var m=typeof e=="function"?e.displayName||e.name||"Unknown":e;s&&gr(l,m),E&&mr(l,m)}return br(e,s,E,f,o,W.current,l)}}var Q=D.ReactCurrentOwner,Pe=D.ReactDebugCurrentFrame;function F(e){if(e){var r=e._owner,t=B(e.type,e._source,r?r.type:null);Pe.setExtraStackFrame(t)}else Pe.setExtraStackFrame(null)}var ee;ee=!1;function re(e){return typeof e=="object"&&e!==null&&e.$$typeof===a}function Te(){{if(Q.current){var e=j(Q.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function yr(e){{if(e!==void 0){var r=e.fileName.replace(/^.*[\\\/]/,""),t=e.lineNumber;return`

Check your code at `+r+":"+t+"."}return""}}var Ce={};function Er(e){{var r=Te();if(!r){var t=typeof e=="string"?e:e.displayName||e.name;t&&(r=`

Check the top-level render call using <`+t+">.")}return r}}function Se(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var t=Er(r);if(Ce[t])return;Ce[t]=!0;var o="";e&&e._owner&&e._owner!==Q.current&&(o=" It was passed a child from "+j(e._owner.type)+"."),F(e),y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,o),F(null)}}function ke(e,r){{if(typeof e!="object")return;if(X(e))for(var t=0;t<e.length;t++){var o=e[t];re(o)&&Se(o,r)}else if(re(e))e._store&&(e._store.validated=!0);else if(e){var f=Ke(e);if(typeof f=="function"&&f!==e.entries)for(var c=f.call(e),l;!(l=c.next()).done;)re(l.value)&&Se(l.value,r)}}}function _r(e){{var r=e.type;if(r==null||typeof r=="string")return;var t;if(typeof r=="function")t=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===v||r.$$typeof===x))t=r.propTypes;else return;if(t){var o=j(r);ur(t,e.props,"prop",o,e)}else if(r.PropTypes!==void 0&&!ee){ee=!0;var f=j(r);y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",f||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function Or(e){{for(var r=Object.keys(e.props),t=0;t<r.length;t++){var o=r[t];if(o!=="children"&&o!=="key"){F(e),y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",o),F(null);break}}e.ref!==null&&(F(e),y("Invalid attribute `ref` supplied to `React.Fragment`."),F(null))}}function De(e,r,t,o,f,c){{var l=er(e);if(!l){var s="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(s+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var E=yr(f);E?s+=E:s+=Te();var g;e===null?g="null":X(e)?g="array":e!==void 0&&e.$$typeof===a?(g="<"+(j(e.type)||"Unknown")+" />",s=" Did you accidentally export a JSX literal instead of a component?"):g=typeof e,y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",g,s)}var m=hr(e,r,t,f,c);if(m==null)return m;if(l){var R=r.children;if(R!==void 0)if(o)if(X(R)){for(var N=0;N<R.length;N++)ke(R[N],e);Object.freeze&&Object.freeze(R)}else y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else ke(R,e)}return e===u?Or(m):_r(m),m}}function Rr(e,r,t){return De(e,r,t,!0)}function wr(e,r,t){return De(e,r,t,!1)}var xr=wr,jr=Rr;I.Fragment=u,I.jsx=xr,I.jsxs=jr}()),I}process.env.NODE_ENV==="production"?K.exports=Ne():K.exports=Ae();var w=K.exports,ae={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},oe=h.createContext&&h.createContext(ae),Ie=["attr","size","title"];function $e(n,a){if(n==null)return{};var i=We(n,a),u,d;if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(n);for(d=0;d<p.length;d++)u=p[d],!(a.indexOf(u)>=0)&&Object.prototype.propertyIsEnumerable.call(n,u)&&(i[u]=n[u])}return i}function We(n,a){if(n==null)return{};var i={},u=Object.keys(n),d,p;for(p=0;p<u.length;p++)d=u[p],!(a.indexOf(d)>=0)&&(i[d]=n[d]);return i}function M(){return M=Object.assign?Object.assign.bind():function(n){for(var a=1;a<arguments.length;a++){var i=arguments[a];for(var u in i)Object.prototype.hasOwnProperty.call(i,u)&&(n[u]=i[u])}return n},M.apply(this,arguments)}function ie(n,a){var i=Object.keys(n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(n);a&&(u=u.filter(function(d){return Object.getOwnPropertyDescriptor(n,d).enumerable})),i.push.apply(i,u)}return i}function Y(n){for(var a=1;a<arguments.length;a++){var i=arguments[a]!=null?arguments[a]:{};a%2?ie(Object(i),!0).forEach(function(u){Me(n,u,i[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(i)):ie(Object(i)).forEach(function(u){Object.defineProperty(n,u,Object.getOwnPropertyDescriptor(i,u))})}return n}function Me(n,a,i){return a=Ye(a),a in n?Object.defineProperty(n,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[a]=i,n}function Ye(n){var a=Le(n,"string");return typeof a=="symbol"?a:String(a)}function Le(n,a){if(typeof n!="object"||n===null)return n;var i=n[Symbol.toPrimitive];if(i!==void 0){var u=i.call(n,a||"default");if(typeof u!="object")return u;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(n)}function ue(n){return n&&n.map((a,i)=>h.createElement(a.tag,Y({key:i},a.attr),ue(a.child)))}function Ue(n){return a=>h.createElement(Ve,M({attr:Y({},n.attr)},a),ue(n.child))}function Ve(n){var a=i=>{var{attr:u,size:d,title:p}=n,O=$e(n,Ie),_=d||i.size||"1em",v;return i.className&&(v=i.className),n.className&&(v=(v?v+" ":"")+n.className),h.createElement("svg",M({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},i.attr,u,O,{className:v,style:Y(Y({color:n.color||i.color},i.style),n.style),height:_,width:_,xmlns:"http://www.w3.org/2000/svg"}),p&&h.createElement("title",null,p),n.children)};return oe!==void 0?h.createElement(oe.Consumer,null,i=>a(i)):a(ae)}function Be(n){return Ue({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M435.9 64.9l-367.1 160c-6.5 3.1-6.3 12.4.3 15.3l99.3 56.1c5.9 3.3 13.2 2.6 18.3-1.8l195.8-168.8c1.3-1.1 4.4-3.2 5.6-2 1.3 1.3-.7 4.3-1.8 5.6L216.9 320.1c-4.7 5.3-5.4 13.1-1.6 19.1l64.9 104.1c3.2 6.3 12.3 6.2 15.2-.2L447.2 76c3.3-7.2-4.2-14.5-11.3-11.1z"},child:[]}]})(n)}const se=({title:n,ContainerPosition:a,inputStyle:i,buttonStyle:u})=>{const[d,p]=h.useState(""),[O,_]=h.useState([]),v=()=>{d.trim()!==""&&(_([...O,d]),p(""))},C=b=>{b.key==="Enter"&&v()};return w.jsxs("div",{className:`${a} bg-white flex flex-col justify-center items-center md:w-80 p-2 space-y-5 shadow-lg rounded-lg border-2 border-solid`,children:[w.jsxs("h5",{className:"",children:[n," "]}),w.jsx("div",{className:"border-solid w-64 rounded-md h-60 overflow-y-auto border-2 border-[#f4f4f4] space-y-2 p-2",children:h.Children.toArray(O.map(b=>w.jsx("div",{className:"bg-[#f4f4f4] p-1.5 rounded-md",children:b})))}),w.jsxs("div",{className:"flex  flex-col md:flex-row gap-2",children:[w.jsx("input",{type:"text",value:d,onChange:b=>p(b.target.value),className:`${i}`,onKeyUp:C}),w.jsx("button",{className:`${u}`,onClick:v,children:w.jsx(Be,{size:30})})]})]})},ze=({position:n,title:a,ContainerPosition:i,inputStyle:u,buttonStyle:d})=>{const[p,O]=h.useState(!1),_=()=>{O(!p)};return w.jsxs("div",{className:`${n}`,children:[w.jsx("button",{className:`${p?"bg-red-300":"bg-blue-300"} p-3 rounded-full`,onClick:_,children:"chat"}),p&&w.jsx(se,{title:a??"Dowell Customer Support",ContainerPosition:i??"fixed bottom-16 left-16 sm:right-16 md:right-24 lg:right-28",inputStyle:u??"rounded-lg h-10 appearance-none bg-transparent border text-gray-700 px-1 focus:outline-none",buttonStyle:d??"rounded-lg border-4 border-double border-white bg-blue-300 py-1 px-2 h-10"})]})};T.DowellChatBox=se,T.default=ze,Object.defineProperties(T,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
