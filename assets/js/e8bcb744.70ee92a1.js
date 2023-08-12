/*! For license information please see e8bcb744.70ee92a1.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[892163],{585250:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>u,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var t=n(824246),o=n(511151);const a={id:"plugin-catalog-backend-module-ldap.readldaporg",title:"readLdapOrg()",description:"API reference for readLdapOrg()"},c=void 0,i={unversionedId:"reference/plugin-catalog-backend-module-ldap.readldaporg",id:"reference/plugin-catalog-backend-module-ldap.readldaporg",title:"readLdapOrg()",description:"API reference for readLdapOrg()",source:"@site/../docs/reference/plugin-catalog-backend-module-ldap.readldaporg.md",sourceDirName:"reference",slug:"/reference/plugin-catalog-backend-module-ldap.readldaporg",permalink:"/docs/reference/plugin-catalog-backend-module-ldap.readldaporg",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-catalog-backend-module-ldap.readldaporg.md",tags:[],version:"current",frontMatter:{id:"plugin-catalog-backend-module-ldap.readldaporg",title:"readLdapOrg()",description:"API reference for readLdapOrg()"}},u={},s=[{value:"Parameters",id:"parameters",level:2}];function l(e){const r=Object.assign({p:"p",a:"a",code:"code",b:"b",pre:"pre",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,o.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap",children:(0,t.jsx)(r.code,{children:"@backstage/plugin-catalog-backend-module-ldap"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.readldaporg",children:(0,t.jsx)(r.code,{children:"readLdapOrg"})})]}),"\n",(0,t.jsx)(r.p,{children:"Reads users and groups out of an LDAP provider."}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.b,{children:"Signature:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"function readLdapOrg(client: LdapClient, userConfig: UserConfig, groupConfig: GroupConfig, options: {\n    groupTransformer?: GroupTransformer;\n    userTransformer?: UserTransformer;\n    logger: Logger;\n}): Promise<{\n    users: UserEntity[];\n    groups: GroupEntity[];\n}>;\n"})}),"\n",(0,t.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Parameter"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"client"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.ldapclient",children:"LdapClient"})}),(0,t.jsx)(r.td,{children:"The LDAP client"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"userConfig"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.userconfig",children:"UserConfig"})}),(0,t.jsx)(r.td,{children:"The user data configuration"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"groupConfig"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.groupconfig",children:"GroupConfig"})}),(0,t.jsx)(r.td,{children:"The group data configuration"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"options"}),(0,t.jsxs)(r.td,{children:["{ groupTransformer?: ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.grouptransformer",children:"GroupTransformer"}),"; userTransformer?: ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.usertransformer",children:"UserTransformer"}),"; logger: Logger; }"]}),(0,t.jsx)(r.td,{children:"Additional options"})]})]})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.b,{children:"Returns:"})}),"\n",(0,t.jsxs)(r.p,{children:["Promise<{ users: ",(0,t.jsx)(r.a,{href:"/docs/reference/catalog-model.userentityv1alpha1",children:"UserEntity"}),"[]; groups: ",(0,t.jsx)(r.a,{href:"/docs/reference/catalog-model.groupentityv1alpha1",children:"GroupEntity"}),"[]; }>"]})]})}const d=function(e={}){const{wrapper:r}=Object.assign({},(0,o.ah)(),e.components);return r?(0,t.jsx)(r,Object.assign({},e,{children:(0,t.jsx)(l,e)})):l(e)}},862525:e=>{var r=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},n=0;n<10;n++)r["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var t={};return"abcdefghijklmnopqrst".split("").forEach((function(e){t[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},t)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var a,c,i=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),u=1;u<arguments.length;u++){for(var s in a=Object(arguments[u]))n.call(a,s)&&(i[s]=a[s]);if(r){c=r(a);for(var l=0;l<c.length;l++)t.call(a,c[l])&&(i[c[l]]=a[c[l]])}}return i}},371426:(e,r,n)=>{n(862525);var t=n(827378),o=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var a=Symbol.for;o=a("react.element"),r.Fragment=a("react.fragment")}var c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,u={key:!0,ref:!0,__self:!0,__source:!0};function s(e,r,n){var t,a={},s=null,l=null;for(t in void 0!==n&&(s=""+n),void 0!==r.key&&(s=""+r.key),void 0!==r.ref&&(l=r.ref),r)i.call(r,t)&&!u.hasOwnProperty(t)&&(a[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===a[t]&&(a[t]=r[t]);return{$$typeof:o,type:e,key:s,ref:l,props:a,_owner:c.current}}r.jsx=s,r.jsxs=s},541535:(e,r,n)=>{var t=n(862525),o=60103,a=60106;r.Fragment=60107,r.StrictMode=60108,r.Profiler=60114;var c=60109,i=60110,u=60112;r.Suspense=60113;var s=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var d=Symbol.for;o=d("react.element"),a=d("react.portal"),r.Fragment=d("react.fragment"),r.StrictMode=d("react.strict_mode"),r.Profiler=d("react.profiler"),c=d("react.provider"),i=d("react.context"),u=d("react.forward_ref"),r.Suspense=d("react.suspense"),s=d("react.memo"),l=d("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function p(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function y(e,r,n){this.props=e,this.context=r,this.refs=g,this.updater=n||h}function m(){}function b(e,r,n){this.props=e,this.context=r,this.refs=g,this.updater=n||h}y.prototype.isReactComponent={},y.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(p(85));this.updater.enqueueSetState(this,e,r,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=y.prototype;var j=b.prototype=new m;j.constructor=b,t(j,y.prototype),j.isPureReactComponent=!0;var v={current:null},x=Object.prototype.hasOwnProperty,_={key:!0,ref:!0,__self:!0,__source:!0};function k(e,r,n){var t,a={},c=null,i=null;if(null!=r)for(t in void 0!==r.ref&&(i=r.ref),void 0!==r.key&&(c=""+r.key),r)x.call(r,t)&&!_.hasOwnProperty(t)&&(a[t]=r[t]);var u=arguments.length-2;if(1===u)a.children=n;else if(1<u){for(var s=Array(u),l=0;l<u;l++)s[l]=arguments[l+2];a.children=s}if(e&&e.defaultProps)for(t in u=e.defaultProps)void 0===a[t]&&(a[t]=u[t]);return{$$typeof:o,type:e,key:c,ref:i,props:a,_owner:v.current}}function O(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var C=/\/+/g;function w(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function E(e,r,n,t,c){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var u=!1;if(null===e)u=!0;else switch(i){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case o:case a:u=!0}}if(u)return c=c(u=e),e=""===t?"."+w(u,0):t,Array.isArray(c)?(n="",null!=e&&(n=e.replace(C,"$&/")+"/"),E(c,r,n,"",(function(e){return e}))):null!=c&&(O(c)&&(c=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(c,n+(!c.key||u&&u.key===c.key?"":(""+c.key).replace(C,"$&/")+"/")+e)),r.push(c)),1;if(u=0,t=""===t?".":t+":",Array.isArray(e))for(var s=0;s<e.length;s++){var l=t+w(i=e[s],s);u+=E(i,r,n,l,c)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),s=0;!(i=e.next()).done;)u+=E(i=i.value,r,n,l=t+w(i,s++),c);else if("object"===i)throw r=""+e,Error(p(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return u}function P(e,r,n){if(null==e)return e;var t=[],o=0;return E(e,t,"","",(function(e){return r.call(n,e,o++)})),t}function S(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var R={current:null};function $(){var e=R.current;if(null===e)throw Error(p(321));return e}var L={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:v,IsSomeRendererActing:{current:!1},assign:t};r.Children={map:P,forEach:function(e,r,n){P(e,(function(){r.apply(this,arguments)}),n)},count:function(e){var r=0;return P(e,(function(){r++})),r},toArray:function(e){return P(e,(function(e){return e}))||[]},only:function(e){if(!O(e))throw Error(p(143));return e}},r.Component=y,r.PureComponent=b,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L,r.cloneElement=function(e,r,n){if(null==e)throw Error(p(267,e));var a=t({},e.props),c=e.key,i=e.ref,u=e._owner;if(null!=r){if(void 0!==r.ref&&(i=r.ref,u=v.current),void 0!==r.key&&(c=""+r.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in r)x.call(r,l)&&!_.hasOwnProperty(l)&&(a[l]=void 0===r[l]&&void 0!==s?s[l]:r[l])}var l=arguments.length-2;if(1===l)a.children=n;else if(1<l){s=Array(l);for(var d=0;d<l;d++)s[d]=arguments[d+2];a.children=s}return{$$typeof:o,type:e.type,key:c,ref:i,props:a,_owner:u}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:i,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},r.createElement=k,r.createFactory=function(e){var r=k.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:u,render:e}},r.isValidElement=O,r.lazy=function(e){return{$$typeof:l,_payload:{_status:-1,_result:e},_init:S}},r.memo=function(e,r){return{$$typeof:s,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return $().useCallback(e,r)},r.useContext=function(e,r){return $().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return $().useEffect(e,r)},r.useImperativeHandle=function(e,r,n){return $().useImperativeHandle(e,r,n)},r.useLayoutEffect=function(e,r){return $().useLayoutEffect(e,r)},r.useMemo=function(e,r){return $().useMemo(e,r)},r.useReducer=function(e,r,n){return $().useReducer(e,r,n)},r.useRef=function(e){return $().useRef(e)},r.useState=function(e){return $().useState(e)},r.version="17.0.2"},827378:(e,r,n)=>{e.exports=n(541535)},824246:(e,r,n)=>{e.exports=n(371426)},511151:(e,r,n)=>{n.d(r,{Zo:()=>i,ah:()=>a});var t=n(667294);const o=t.createContext({});function a(e){const r=t.useContext(o);return t.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const c={};function i({components:e,children:r,disableParentContext:n}){let i;return i=n?"function"==typeof e?e({}):e||c:a(e),t.createElement(o.Provider,{value:i},r)}}}]);