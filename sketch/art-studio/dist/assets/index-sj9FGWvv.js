(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function cb(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Ad={exports:{}},vl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b1;function hb(){if(b1)return vl;b1=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var p in l)p!=="key"&&(u[p]=l[p])}else u=l;return l=u.ref,{$$typeof:r,type:s,key:d,ref:l!==void 0?l:null,props:u}}return vl.Fragment=e,vl.jsx=i,vl.jsxs=i,vl}var S1;function fb(){return S1||(S1=1,Ad.exports=hb()),Ad.exports}var H=fb(),wd={exports:{}},Ie={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A1;function db(){if(A1)return Ie;A1=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),b=Symbol.for("react.activity"),A=Symbol.iterator;function k(N){return N===null||typeof N!="object"?null:(N=A&&N[A]||N["@@iterator"],typeof N=="function"?N:null)}var Q={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},K=Object.assign,U={};function W(N,X,ie){this.props=N,this.context=X,this.refs=U,this.updater=ie||Q}W.prototype.isReactComponent={},W.prototype.setState=function(N,X){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,X,"setState")},W.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function J(){}J.prototype=W.prototype;function te(N,X,ie){this.props=N,this.context=X,this.refs=U,this.updater=ie||Q}var fe=te.prototype=new J;fe.constructor=te,K(fe,W.prototype),fe.isPureReactComponent=!0;var _e=Array.isArray;function Te(){}var R={H:null,A:null,T:null,S:null},w=Object.prototype.hasOwnProperty;function C(N,X,ie){var ue=ie.ref;return{$$typeof:r,type:N,key:X,ref:ue!==void 0?ue:null,props:ie}}function O(N,X){return C(N.type,X,N.props)}function M(N){return typeof N=="object"&&N!==null&&N.$$typeof===r}function V(N){var X={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(ie){return X[ie]})}var I=/\/+/g;function $e(N,X){return typeof N=="object"&&N!==null&&N.key!=null?V(""+N.key):X.toString(36)}function dt(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(Te,Te):(N.status="pending",N.then(function(X){N.status==="pending"&&(N.status="fulfilled",N.value=X)},function(X){N.status==="pending"&&(N.status="rejected",N.reason=X)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function q(N,X,ie,ue,pe){var Oe=typeof N;(Oe==="undefined"||Oe==="boolean")&&(N=null);var Me=!1;if(N===null)Me=!0;else switch(Oe){case"bigint":case"string":case"number":Me=!0;break;case"object":switch(N.$$typeof){case r:case e:Me=!0;break;case E:return Me=N._init,q(Me(N._payload),X,ie,ue,pe)}}if(Me)return pe=pe(N),Me=ue===""?"."+$e(N,0):ue,_e(pe)?(ie="",Me!=null&&(ie=Me.replace(I,"$&/")+"/"),q(pe,X,ie,"",function(jn){return jn})):pe!=null&&(M(pe)&&(pe=O(pe,ie+(pe.key==null||N&&N.key===pe.key?"":(""+pe.key).replace(I,"$&/")+"/")+Me)),X.push(pe)),1;Me=0;var Vt=ue===""?".":ue+":";if(_e(N))for(var rt=0;rt<N.length;rt++)ue=N[rt],Oe=Vt+$e(ue,rt),Me+=q(ue,X,ie,Oe,pe);else if(rt=k(N),typeof rt=="function")for(N=rt.call(N),rt=0;!(ue=N.next()).done;)ue=ue.value,Oe=Vt+$e(ue,rt++),Me+=q(ue,X,ie,Oe,pe);else if(Oe==="object"){if(typeof N.then=="function")return q(dt(N),X,ie,ue,pe);throw X=String(N),Error("Objects are not valid as a React child (found: "+(X==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":X)+"). If you meant to render a collection of children, use an array instead.")}return Me}function ae(N,X,ie){if(N==null)return N;var ue=[],pe=0;return q(N,ue,"","",function(Oe){return X.call(ie,Oe,pe++)}),ue}function ye(N){if(N._status===-1){var X=N._result;X=X(),X.then(function(ie){(N._status===0||N._status===-1)&&(N._status=1,N._result=ie)},function(ie){(N._status===0||N._status===-1)&&(N._status=2,N._result=ie)}),N._status===-1&&(N._status=0,N._result=X)}if(N._status===1)return N._result.default;throw N._result}var Ge=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var X=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(X))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},Qe={map:ae,forEach:function(N,X,ie){ae(N,function(){X.apply(this,arguments)},ie)},count:function(N){var X=0;return ae(N,function(){X++}),X},toArray:function(N){return ae(N,function(X){return X})||[]},only:function(N){if(!M(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return Ie.Activity=b,Ie.Children=Qe,Ie.Component=W,Ie.Fragment=i,Ie.Profiler=l,Ie.PureComponent=te,Ie.StrictMode=s,Ie.Suspense=g,Ie.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=R,Ie.__COMPILER_RUNTIME={__proto__:null,c:function(N){return R.H.useMemoCache(N)}},Ie.cache=function(N){return function(){return N.apply(null,arguments)}},Ie.cacheSignal=function(){return null},Ie.cloneElement=function(N,X,ie){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var ue=K({},N.props),pe=N.key;if(X!=null)for(Oe in X.key!==void 0&&(pe=""+X.key),X)!w.call(X,Oe)||Oe==="key"||Oe==="__self"||Oe==="__source"||Oe==="ref"&&X.ref===void 0||(ue[Oe]=X[Oe]);var Oe=arguments.length-2;if(Oe===1)ue.children=ie;else if(1<Oe){for(var Me=Array(Oe),Vt=0;Vt<Oe;Vt++)Me[Vt]=arguments[Vt+2];ue.children=Me}return C(N.type,pe,ue)},Ie.createContext=function(N){return N={$$typeof:d,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:u,_context:N},N},Ie.createElement=function(N,X,ie){var ue,pe={},Oe=null;if(X!=null)for(ue in X.key!==void 0&&(Oe=""+X.key),X)w.call(X,ue)&&ue!=="key"&&ue!=="__self"&&ue!=="__source"&&(pe[ue]=X[ue]);var Me=arguments.length-2;if(Me===1)pe.children=ie;else if(1<Me){for(var Vt=Array(Me),rt=0;rt<Me;rt++)Vt[rt]=arguments[rt+2];pe.children=Vt}if(N&&N.defaultProps)for(ue in Me=N.defaultProps,Me)pe[ue]===void 0&&(pe[ue]=Me[ue]);return C(N,Oe,pe)},Ie.createRef=function(){return{current:null}},Ie.forwardRef=function(N){return{$$typeof:p,render:N}},Ie.isValidElement=M,Ie.lazy=function(N){return{$$typeof:E,_payload:{_status:-1,_result:N},_init:ye}},Ie.memo=function(N,X){return{$$typeof:y,type:N,compare:X===void 0?null:X}},Ie.startTransition=function(N){var X=R.T,ie={};R.T=ie;try{var ue=N(),pe=R.S;pe!==null&&pe(ie,ue),typeof ue=="object"&&ue!==null&&typeof ue.then=="function"&&ue.then(Te,Ge)}catch(Oe){Ge(Oe)}finally{X!==null&&ie.types!==null&&(X.types=ie.types),R.T=X}},Ie.unstable_useCacheRefresh=function(){return R.H.useCacheRefresh()},Ie.use=function(N){return R.H.use(N)},Ie.useActionState=function(N,X,ie){return R.H.useActionState(N,X,ie)},Ie.useCallback=function(N,X){return R.H.useCallback(N,X)},Ie.useContext=function(N){return R.H.useContext(N)},Ie.useDebugValue=function(){},Ie.useDeferredValue=function(N,X){return R.H.useDeferredValue(N,X)},Ie.useEffect=function(N,X){return R.H.useEffect(N,X)},Ie.useEffectEvent=function(N){return R.H.useEffectEvent(N)},Ie.useId=function(){return R.H.useId()},Ie.useImperativeHandle=function(N,X,ie){return R.H.useImperativeHandle(N,X,ie)},Ie.useInsertionEffect=function(N,X){return R.H.useInsertionEffect(N,X)},Ie.useLayoutEffect=function(N,X){return R.H.useLayoutEffect(N,X)},Ie.useMemo=function(N,X){return R.H.useMemo(N,X)},Ie.useOptimistic=function(N,X){return R.H.useOptimistic(N,X)},Ie.useReducer=function(N,X,ie){return R.H.useReducer(N,X,ie)},Ie.useRef=function(N){return R.H.useRef(N)},Ie.useState=function(N){return R.H.useState(N)},Ie.useSyncExternalStore=function(N,X,ie){return R.H.useSyncExternalStore(N,X,ie)},Ie.useTransition=function(){return R.H.useTransition()},Ie.version="19.2.5",Ie}var w1;function mm(){return w1||(w1=1,wd.exports=db()),wd.exports}var re=mm(),Rd={exports:{}},_l={},Cd={exports:{}},Id={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R1;function mb(){return R1||(R1=1,(function(r){function e(q,ae){var ye=q.length;q.push(ae);e:for(;0<ye;){var Ge=ye-1>>>1,Qe=q[Ge];if(0<l(Qe,ae))q[Ge]=ae,q[ye]=Qe,ye=Ge;else break e}}function i(q){return q.length===0?null:q[0]}function s(q){if(q.length===0)return null;var ae=q[0],ye=q.pop();if(ye!==ae){q[0]=ye;e:for(var Ge=0,Qe=q.length,N=Qe>>>1;Ge<N;){var X=2*(Ge+1)-1,ie=q[X],ue=X+1,pe=q[ue];if(0>l(ie,ye))ue<Qe&&0>l(pe,ie)?(q[Ge]=pe,q[ue]=ye,Ge=ue):(q[Ge]=ie,q[X]=ye,Ge=X);else if(ue<Qe&&0>l(pe,ye))q[Ge]=pe,q[ue]=ye,Ge=ue;else break e}}return ae}function l(q,ae){var ye=q.sortIndex-ae.sortIndex;return ye!==0?ye:q.id-ae.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var d=Date,p=d.now();r.unstable_now=function(){return d.now()-p}}var g=[],y=[],E=1,b=null,A=3,k=!1,Q=!1,K=!1,U=!1,W=typeof setTimeout=="function"?setTimeout:null,J=typeof clearTimeout=="function"?clearTimeout:null,te=typeof setImmediate<"u"?setImmediate:null;function fe(q){for(var ae=i(y);ae!==null;){if(ae.callback===null)s(y);else if(ae.startTime<=q)s(y),ae.sortIndex=ae.expirationTime,e(g,ae);else break;ae=i(y)}}function _e(q){if(K=!1,fe(q),!Q)if(i(g)!==null)Q=!0,Te||(Te=!0,V());else{var ae=i(y);ae!==null&&dt(_e,ae.startTime-q)}}var Te=!1,R=-1,w=5,C=-1;function O(){return U?!0:!(r.unstable_now()-C<w)}function M(){if(U=!1,Te){var q=r.unstable_now();C=q;var ae=!0;try{e:{Q=!1,K&&(K=!1,J(R),R=-1),k=!0;var ye=A;try{t:{for(fe(q),b=i(g);b!==null&&!(b.expirationTime>q&&O());){var Ge=b.callback;if(typeof Ge=="function"){b.callback=null,A=b.priorityLevel;var Qe=Ge(b.expirationTime<=q);if(q=r.unstable_now(),typeof Qe=="function"){b.callback=Qe,fe(q),ae=!0;break t}b===i(g)&&s(g),fe(q)}else s(g);b=i(g)}if(b!==null)ae=!0;else{var N=i(y);N!==null&&dt(_e,N.startTime-q),ae=!1}}break e}finally{b=null,A=ye,k=!1}ae=void 0}}finally{ae?V():Te=!1}}}var V;if(typeof te=="function")V=function(){te(M)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,$e=I.port2;I.port1.onmessage=M,V=function(){$e.postMessage(null)}}else V=function(){W(M,0)};function dt(q,ae){R=W(function(){q(r.unstable_now())},ae)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(q){q.callback=null},r.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<q?Math.floor(1e3/q):5},r.unstable_getCurrentPriorityLevel=function(){return A},r.unstable_next=function(q){switch(A){case 1:case 2:case 3:var ae=3;break;default:ae=A}var ye=A;A=ae;try{return q()}finally{A=ye}},r.unstable_requestPaint=function(){U=!0},r.unstable_runWithPriority=function(q,ae){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var ye=A;A=q;try{return ae()}finally{A=ye}},r.unstable_scheduleCallback=function(q,ae,ye){var Ge=r.unstable_now();switch(typeof ye=="object"&&ye!==null?(ye=ye.delay,ye=typeof ye=="number"&&0<ye?Ge+ye:Ge):ye=Ge,q){case 1:var Qe=-1;break;case 2:Qe=250;break;case 5:Qe=1073741823;break;case 4:Qe=1e4;break;default:Qe=5e3}return Qe=ye+Qe,q={id:E++,callback:ae,priorityLevel:q,startTime:ye,expirationTime:Qe,sortIndex:-1},ye>Ge?(q.sortIndex=ye,e(y,q),i(g)===null&&q===i(y)&&(K?(J(R),R=-1):K=!0,dt(_e,ye-Ge))):(q.sortIndex=Qe,e(g,q),Q||k||(Q=!0,Te||(Te=!0,V()))),q},r.unstable_shouldYield=O,r.unstable_wrapCallback=function(q){var ae=A;return function(){var ye=A;A=ae;try{return q.apply(this,arguments)}finally{A=ye}}}})(Id)),Id}var C1;function pb(){return C1||(C1=1,Cd.exports=mb()),Cd.exports}var Dd={exports:{}},on={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I1;function gb(){if(I1)return on;I1=1;var r=mm();function e(g){var y="https://react.dev/errors/"+g;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)y+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+g+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(g,y,E){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:b==null?null:""+b,children:g,containerInfo:y,implementation:E}}var d=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(g,y){if(g==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return on.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,on.createPortal=function(g,y){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(e(299));return u(g,y,null,E)},on.flushSync=function(g){var y=d.T,E=s.p;try{if(d.T=null,s.p=2,g)return g()}finally{d.T=y,s.p=E,s.d.f()}},on.preconnect=function(g,y){typeof g=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,s.d.C(g,y))},on.prefetchDNS=function(g){typeof g=="string"&&s.d.D(g)},on.preinit=function(g,y){if(typeof g=="string"&&y&&typeof y.as=="string"){var E=y.as,b=p(E,y.crossOrigin),A=typeof y.integrity=="string"?y.integrity:void 0,k=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;E==="style"?s.d.S(g,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:b,integrity:A,fetchPriority:k}):E==="script"&&s.d.X(g,{crossOrigin:b,integrity:A,fetchPriority:k,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},on.preinitModule=function(g,y){if(typeof g=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var E=p(y.as,y.crossOrigin);s.d.M(g,{crossOrigin:E,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&s.d.M(g)},on.preload=function(g,y){if(typeof g=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var E=y.as,b=p(E,y.crossOrigin);s.d.L(g,E,{crossOrigin:b,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},on.preloadModule=function(g,y){if(typeof g=="string")if(y){var E=p(y.as,y.crossOrigin);s.d.m(g,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:E,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else s.d.m(g)},on.requestFormReset=function(g){s.d.r(g)},on.unstable_batchedUpdates=function(g,y){return g(y)},on.useFormState=function(g,y,E){return d.H.useFormState(g,y,E)},on.useFormStatus=function(){return d.H.useHostTransitionStatus()},on.version="19.2.5",on}var D1;function yb(){if(D1)return Dd.exports;D1=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Dd.exports=gb(),Dd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N1;function vb(){if(N1)return _l;N1=1;var r=pb(),e=mm(),i=yb();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function g(t){if(u(t)!==t)throw Error(s(188))}function y(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,o=n;;){var h=a.return;if(h===null)break;var f=h.alternate;if(f===null){if(o=h.return,o!==null){a=o;continue}break}if(h.child===f.child){for(f=h.child;f;){if(f===a)return g(h),t;if(f===o)return g(h),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=h,o=f;else{for(var v=!1,T=h.child;T;){if(T===a){v=!0,a=h,o=f;break}if(T===o){v=!0,o=h,a=f;break}T=T.sibling}if(!v){for(T=f.child;T;){if(T===a){v=!0,a=f,o=h;break}if(T===o){v=!0,o=f,a=h;break}T=T.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function E(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=E(t),n!==null)return n;t=t.sibling}return null}var b=Object.assign,A=Symbol.for("react.element"),k=Symbol.for("react.transitional.element"),Q=Symbol.for("react.portal"),K=Symbol.for("react.fragment"),U=Symbol.for("react.strict_mode"),W=Symbol.for("react.profiler"),J=Symbol.for("react.consumer"),te=Symbol.for("react.context"),fe=Symbol.for("react.forward_ref"),_e=Symbol.for("react.suspense"),Te=Symbol.for("react.suspense_list"),R=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),O=Symbol.for("react.memo_cache_sentinel"),M=Symbol.iterator;function V(t){return t===null||typeof t!="object"?null:(t=M&&t[M]||t["@@iterator"],typeof t=="function"?t:null)}var I=Symbol.for("react.client.reference");function $e(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===I?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case K:return"Fragment";case W:return"Profiler";case U:return"StrictMode";case _e:return"Suspense";case Te:return"SuspenseList";case C:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case Q:return"Portal";case te:return t.displayName||"Context";case J:return(t._context.displayName||"Context")+".Consumer";case fe:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case R:return n=t.displayName||null,n!==null?n:$e(t.type)||"Memo";case w:n=t._payload,t=t._init;try{return $e(t(n))}catch{}}return null}var dt=Array.isArray,q=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ae=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ye={pending:!1,data:null,method:null,action:null},Ge=[],Qe=-1;function N(t){return{current:t}}function X(t){0>Qe||(t.current=Ge[Qe],Ge[Qe]=null,Qe--)}function ie(t,n){Qe++,Ge[Qe]=t.current,t.current=n}var ue=N(null),pe=N(null),Oe=N(null),Me=N(null);function Vt(t,n){switch(ie(Oe,n),ie(pe,t),ie(ue,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Gy(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Gy(n),t=Qy(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}X(ue),ie(ue,t)}function rt(){X(ue),X(pe),X(Oe)}function jn(t){t.memoizedState!==null&&ie(Me,t);var n=ue.current,a=Qy(n,t.type);n!==a&&(ie(pe,t),ie(ue,a))}function fn(t){pe.current===t&&(X(ue),X(pe)),Me.current===t&&(X(Me),ml._currentValue=ye)}var Mi,hi;function _n(t){if(Mi===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Mi=n&&n[1]||"",hi=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Mi+t+hi}var ki=!1;function Vi(t,n){if(!t||ki)return"";ki=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var $=function(){throw Error()};if(Object.defineProperty($.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct($,[])}catch(F){var B=F}Reflect.construct(t,[],$)}else{try{$.call()}catch(F){B=F}t.call($.prototype)}}else{try{throw Error()}catch(F){B=F}($=t())&&typeof $.catch=="function"&&$.catch(function(){})}}catch(F){if(F&&B&&typeof F.stack=="string")return[F.stack,B.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),v=f[0],T=f[1];if(v&&T){var D=v.split(`
`),j=T.split(`
`);for(h=o=0;o<D.length&&!D[o].includes("DetermineComponentFrameRoot");)o++;for(;h<j.length&&!j[h].includes("DetermineComponentFrameRoot");)h++;if(o===D.length||h===j.length)for(o=D.length-1,h=j.length-1;1<=o&&0<=h&&D[o]!==j[h];)h--;for(;1<=o&&0<=h;o--,h--)if(D[o]!==j[h]){if(o!==1||h!==1)do if(o--,h--,0>h||D[o]!==j[h]){var Y=`
`+D[o].replace(" at new "," at ");return t.displayName&&Y.includes("<anonymous>")&&(Y=Y.replace("<anonymous>",t.displayName)),Y}while(1<=o&&0<=h);break}}}finally{ki=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?_n(a):""}function sn(t,n){switch(t.tag){case 26:case 27:case 5:return _n(t.type);case 16:return _n("Lazy");case 13:return t.child!==n&&n!==null?_n("Suspense Fallback"):_n("Suspense");case 19:return _n("SuspenseList");case 0:case 15:return Vi(t.type,!1);case 11:return Vi(t.type.render,!1);case 1:return Vi(t.type,!0);case 31:return _n("Activity");default:return""}}function Dn(t){try{var n="",a=null;do n+=sn(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var jt=Object.prototype.hasOwnProperty,$n=r.unstable_scheduleCallback,gr=r.unstable_cancelCallback,_o=r.unstable_shouldYield,Ss=r.unstable_requestPaint,Lt=r.unstable_now,la=r.unstable_getCurrentPriorityLevel,Tt=r.unstable_ImmediatePriority,Rt=r.unstable_UserBlockingPriority,ei=r.unstable_NormalPriority,ua=r.unstable_LowPriority,As=r.unstable_IdlePriority,Eo=r.log,Li=r.unstable_setDisableYieldValue,fi=null,Bt=null;function En(t){if(typeof Eo=="function"&&Li(t),Bt&&typeof Bt.setStrictMode=="function")try{Bt.setStrictMode(fi,t)}catch{}}var Yt=Math.clz32?Math.clz32:Se,le=Math.log,oe=Math.LN2;function Se(t){return t>>>=0,t===0?32:31-(le(t)/oe|0)|0}var Re=256,Le=262144,he=4194304;function He(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ke(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var h=0,f=t.suspendedLanes,v=t.pingedLanes;t=t.warmLanes;var T=o&134217727;return T!==0?(o=T&~f,o!==0?h=He(o):(v&=T,v!==0?h=He(v):a||(a=T&~t,a!==0&&(h=He(a))))):(T=o&~f,T!==0?h=He(T):v!==0?h=He(v):a||(a=o&~t,a!==0&&(h=He(a)))),h===0?0:n!==0&&n!==h&&(n&f)===0&&(f=h&-h,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:h}function Ct(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function dn(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Nn(){var t=he;return he<<=1,(he&62914560)===0&&(he=4194304),t}function ti(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function yr(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Xt(t,n,a,o,h,f){var v=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,D=t.expirationTimes,j=t.hiddenUpdates;for(a=v&~a;0<a;){var Y=31-Yt(a),$=1<<Y;T[Y]=0,D[Y]=-1;var B=j[Y];if(B!==null)for(j[Y]=null,Y=0;Y<B.length;Y++){var F=B[Y];F!==null&&(F.lane&=-536870913)}a&=~$}o!==0&&To(t,o,0),f!==0&&h===0&&t.tag!==0&&(t.suspendedLanes|=f&~(v&~n))}function To(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Yt(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function vr(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Yt(a),h=1<<o;h&n|t[o]&n&&(t[o]|=n),a&=~h}}function _r(t,n){var a=n&-n;return a=(a&42)!==0?1:bo(a),(a&(t.suspendedLanes|n))!==0?0:a}function bo(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function So(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ui(){var t=ae.p;return t!==0?t:(t=window.event,t===void 0?32:p1(t.type))}function $l(t,n){var a=ae.p;try{return ae.p=t,n()}finally{ae.p=a}}var di=Math.random().toString(36).slice(2),yt="__reactFiber$"+di,Wt="__reactProps$"+di,mi="__reactContainer$"+di,Er="__reactEvents$"+di,pi="__reactListeners$"+di,eu="__reactHandles$"+di,Ao="__reactResources$"+di,Pi="__reactMarker$"+di;function ws(t){delete t[yt],delete t[Wt],delete t[Er],delete t[pi],delete t[eu]}function zi(t){var n=t[yt];if(n)return n;for(var a=t.parentNode;a;){if(n=a[mi]||a[yt]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=$y(t);t!==null;){if(a=t[yt])return a;t=$y(t)}return n}t=a,a=t.parentNode}return null}function ji(t){if(t=t[yt]||t[mi]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function Rs(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function ni(t){var n=t[Ao];return n||(n=t[Ao]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function bt(t){t[Pi]=!0}var ca=new Set,Tr={};function mn(t,n){gi(t,n),gi(t+"Capture",n)}function gi(t,n){for(Tr[t]=n,t=0;t<n.length;t++)ca.add(n[t])}var Ah=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),wo={},Ro={};function tu(t){return jt.call(Ro,t)?!0:jt.call(wo,t)?!1:Ah.test(t)?Ro[t]=!0:(wo[t]=!0,!1)}function br(t,n,a){if(tu(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Sr(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Bn(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function pn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function nu(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function wh(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var h=o.get,f=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return h.call(this)},set:function(v){a=""+v,f.call(this,v)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function ha(t){if(!t._valueTracker){var n=nu(t)?"checked":"value";t._valueTracker=wh(t,n,""+t[n])}}function Co(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=nu(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function fa(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Bi=/[\n"\\]/g;function vt(t){return t.replace(Bi,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ar(t,n,a,o,h,f,v,T){t.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?t.type=v:t.removeAttribute("type"),n!=null?v==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+pn(n)):t.value!==""+pn(n)&&(t.value=""+pn(n)):v!=="submit"&&v!=="reset"||t.removeAttribute("value"),n!=null?da(t,v,pn(n)):a!=null?da(t,v,pn(a)):o!=null&&t.removeAttribute("value"),h==null&&f!=null&&(t.defaultChecked=!!f),h!=null&&(t.checked=h&&typeof h!="function"&&typeof h!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+pn(T):t.removeAttribute("name")}function Cs(t,n,a,o,h,f,v,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){ha(t);return}a=a!=null?""+pn(a):"",n=n!=null?""+pn(n):a,T||n===t.value||(t.value=n),t.defaultValue=n}o=o??h,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=T?t.checked:!!o,t.defaultChecked=!!o,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(t.name=v),ha(t)}function da(t,n,a){n==="number"&&fa(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Xe(t,n,a,o){if(t=t.options,n){n={};for(var h=0;h<a.length;h++)n["$"+a[h]]=!0;for(a=0;a<t.length;a++)h=n.hasOwnProperty("$"+t[a].value),t[a].selected!==h&&(t[a].selected=h),h&&o&&(t[a].defaultSelected=!0)}else{for(a=""+pn(a),n=null,h=0;h<t.length;h++){if(t[h].value===a){t[h].selected=!0,o&&(t[h].defaultSelected=!0);return}n!==null||t[h].disabled||(n=t[h])}n!==null&&(n.selected=!0)}}function Is(t,n,a){if(n!=null&&(n=""+pn(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+pn(a):""}function wr(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(dt(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=pn(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),ha(t)}function qn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Rh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Io(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||Rh.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function iu(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var h in n)o=n[h],n.hasOwnProperty(h)&&a[h]!==o&&Io(t,h,o)}else for(var f in n)n.hasOwnProperty(f)&&Io(t,f,n[f])}function Do(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ch=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ih=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function yi(t){return Ih.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function qt(){}var ma=null;function pa(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var qi=null,On=null;function ru(t){var n=ji(t);if(n&&(t=n.stateNode)){var a=t[Wt]||null;e:switch(t=n.stateNode,n.type){case"input":if(Ar(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+vt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var h=o[Wt]||null;if(!h)throw Error(s(90));Ar(o,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&Co(o)}break e;case"textarea":Is(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&Xe(t,!!a.multiple,n,!1)}}}var No=!1;function su(t,n,a){if(No)return t(n,a);No=!0;try{var o=t(n);return o}finally{if(No=!1,(qi!==null||On!==null)&&(tc(),qi&&(n=qi,t=On,On=qi=null,ru(n),t)))for(n=0;n<t.length;n++)ru(t[n])}}function Tn(t,n){var a=t.stateNode;if(a===null)return null;var o=a[Wt]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var ii=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Oo=!1;if(ii)try{var vi={};Object.defineProperty(vi,"passive",{get:function(){Oo=!0}}),window.addEventListener("test",vi,vi),window.removeEventListener("test",vi,vi)}catch{Oo=!1}var xn=null,ga=null,_i=null;function Rr(){if(_i)return _i;var t,n=ga,a=n.length,o,h="value"in xn?xn.value:xn.textContent,f=h.length;for(t=0;t<a&&n[t]===h[t];t++);var v=a-t;for(o=1;o<=v&&n[a-o]===h[f-o];o++);return _i=h.slice(t,1<o?1-o:void 0)}function Ds(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Cr(){return!0}function ut(){return!1}function an(t){function n(a,o,h,f,v){this._reactName=a,this._targetInst=h,this.type=o,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Cr:ut,this.isPropagationStopped=ut,this}return b(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Cr)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Cr)},persist:function(){},isPersistent:Cr}),n}var Hi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ns=an(Hi),Ir=b({},Hi,{view:0,detail:0}),au=an(Ir),Dr,ya,gn,Os=b({},Ir,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Or,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==gn&&(gn&&t.type==="mousemove"?(Dr=t.screenX-gn.screenX,ya=t.screenY-gn.screenY):ya=Dr=0,gn=t),Dr)},movementY:function(t){return"movementY"in t?t.movementY:ya}}),ou=an(Os),xs=b({},Os,{dataTransfer:0}),lu=an(xs),xo=b({},Ir,{relatedTarget:0}),Nr=an(xo),uu=b({},Hi,{animationName:0,elapsedTime:0,pseudoElement:0}),va=an(uu),Dh=b({},Hi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),cu=an(Dh),Ms=b({},Hi,{data:0}),Mo=an(Ms),hu={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ko={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vo={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fu(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Vo[t])?!!n[t]:!1}function Or(){return fu}var du=b({},Ir,{key:function(t){if(t.key){var n=hu[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Ds(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ko[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Or,charCode:function(t){return t.type==="keypress"?Ds(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ds(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),mu=an(du),Fi=b({},Os,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lo=an(Fi),pu=b({},Ir,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Or}),gu=an(pu),yu=b({},Hi,{propertyName:0,elapsedTime:0,pseudoElement:0}),_a=an(yu),yn=b({},Os,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),vu=an(yn),_u=b({},Hi,{newState:0,oldState:0}),xr=an(_u),c=[9,13,27,32],m=ii&&"CompositionEvent"in window,_=null;ii&&"documentMode"in document&&(_=document.documentMode);var S=ii&&"TextEvent"in window&&!_,P=ii&&(!m||_&&8<_&&11>=_),G=" ",se=!1;function et(t,n){switch(t){case"keyup":return c.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function It(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ke=!1;function Ht(t,n){switch(t){case"compositionend":return It(n);case"keypress":return n.which!==32?null:(se=!0,G);case"textInput":return t=n.data,t===G&&se?null:t;default:return null}}function Ft(t,n){if(ke)return t==="compositionend"||!m&&et(t,n)?(t=Rr(),_i=ga=xn=null,ke=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return P&&n.locale!=="ko"?null:n.data;default:return null}}var Mr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bn(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Mr[t.type]:n==="textarea"}function ks(t,n,a,o){qi?On?On.push(o):On=[o]:qi=o,n=lc(n,"onChange"),0<n.length&&(a=new Ns("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var Gi=null,Uo=null;function UE(t){zy(t,0)}function Eu(t){var n=Rs(t);if(Co(n))return t}function rp(t,n){if(t==="change")return n}var sp=!1;if(ii){var Nh;if(ii){var Oh="oninput"in document;if(!Oh){var ap=document.createElement("div");ap.setAttribute("oninput","return;"),Oh=typeof ap.oninput=="function"}Nh=Oh}else Nh=!1;sp=Nh&&(!document.documentMode||9<document.documentMode)}function op(){Gi&&(Gi.detachEvent("onpropertychange",lp),Uo=Gi=null)}function lp(t){if(t.propertyName==="value"&&Eu(Uo)){var n=[];ks(n,Uo,t,pa(t)),su(UE,n)}}function PE(t,n,a){t==="focusin"?(op(),Gi=n,Uo=a,Gi.attachEvent("onpropertychange",lp)):t==="focusout"&&op()}function zE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Eu(Uo)}function jE(t,n){if(t==="click")return Eu(n)}function BE(t,n){if(t==="input"||t==="change")return Eu(n)}function qE(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Mn=typeof Object.is=="function"?Object.is:qE;function Po(t,n){if(Mn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var h=a[o];if(!jt.call(n,h)||!Mn(t[h],n[h]))return!1}return!0}function up(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function cp(t,n){var a=up(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=up(a)}}function hp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?hp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function fp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=fa(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=fa(t.document)}return n}function xh(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var HE=ii&&"documentMode"in document&&11>=document.documentMode,Ea=null,Mh=null,zo=null,kh=!1;function dp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;kh||Ea==null||Ea!==fa(o)||(o=Ea,"selectionStart"in o&&xh(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),zo&&Po(zo,o)||(zo=o,o=lc(Mh,"onSelect"),0<o.length&&(n=new Ns("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=Ea)))}function Vs(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Ta={animationend:Vs("Animation","AnimationEnd"),animationiteration:Vs("Animation","AnimationIteration"),animationstart:Vs("Animation","AnimationStart"),transitionrun:Vs("Transition","TransitionRun"),transitionstart:Vs("Transition","TransitionStart"),transitioncancel:Vs("Transition","TransitionCancel"),transitionend:Vs("Transition","TransitionEnd")},Vh={},mp={};ii&&(mp=document.createElement("div").style,"AnimationEvent"in window||(delete Ta.animationend.animation,delete Ta.animationiteration.animation,delete Ta.animationstart.animation),"TransitionEvent"in window||delete Ta.transitionend.transition);function Ls(t){if(Vh[t])return Vh[t];if(!Ta[t])return t;var n=Ta[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in mp)return Vh[t]=n[a];return t}var pp=Ls("animationend"),gp=Ls("animationiteration"),yp=Ls("animationstart"),FE=Ls("transitionrun"),GE=Ls("transitionstart"),QE=Ls("transitioncancel"),vp=Ls("transitionend"),_p=new Map,Lh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Lh.push("scrollEnd");function ri(t,n){_p.set(t,n),mn(n,[t])}var Tu=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Hn=[],ba=0,Uh=0;function bu(){for(var t=ba,n=Uh=ba=0;n<t;){var a=Hn[n];Hn[n++]=null;var o=Hn[n];Hn[n++]=null;var h=Hn[n];Hn[n++]=null;var f=Hn[n];if(Hn[n++]=null,o!==null&&h!==null){var v=o.pending;v===null?h.next=h:(h.next=v.next,v.next=h),o.pending=h}f!==0&&Ep(a,h,f)}}function Su(t,n,a,o){Hn[ba++]=t,Hn[ba++]=n,Hn[ba++]=a,Hn[ba++]=o,Uh|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Ph(t,n,a,o){return Su(t,n,a,o),Au(t)}function Us(t,n){return Su(t,null,null,n),Au(t)}function Ep(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var h=!1,f=t.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(h=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,h&&n!==null&&(h=31-Yt(a),t=f.hiddenUpdates,o=t[h],o===null?t[h]=[n]:o.push(n),n.lane=a|536870912),f):null}function Au(t){if(50<ol)throw ol=0,Yf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Sa={};function KE(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kn(t,n,a,o){return new KE(t,n,a,o)}function zh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Qi(t,n){var a=t.alternate;return a===null?(a=kn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Tp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function wu(t,n,a,o,h,f){var v=0;if(o=t,typeof t=="function")zh(t)&&(v=1);else if(typeof t=="string")v=JT(t,a,ue.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case C:return t=kn(31,a,n,h),t.elementType=C,t.lanes=f,t;case K:return Ps(a.children,h,f,n);case U:v=8,h|=24;break;case W:return t=kn(12,a,n,h|2),t.elementType=W,t.lanes=f,t;case _e:return t=kn(13,a,n,h),t.elementType=_e,t.lanes=f,t;case Te:return t=kn(19,a,n,h),t.elementType=Te,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case te:v=10;break e;case J:v=9;break e;case fe:v=11;break e;case R:v=14;break e;case w:v=16,o=null;break e}v=29,a=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=kn(v,a,n,h),n.elementType=t,n.type=o,n.lanes=f,n}function Ps(t,n,a,o){return t=kn(7,t,o,n),t.lanes=a,t}function jh(t,n,a){return t=kn(6,t,null,n),t.lanes=a,t}function bp(t){var n=kn(18,null,null,0);return n.stateNode=t,n}function Bh(t,n,a){return n=kn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Sp=new WeakMap;function Fn(t,n){if(typeof t=="object"&&t!==null){var a=Sp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Dn(n)},Sp.set(t,n),n)}return{value:t,source:n,stack:Dn(n)}}var Aa=[],wa=0,Ru=null,jo=0,Gn=[],Qn=0,kr=null,Ei=1,Ti="";function Ki(t,n){Aa[wa++]=jo,Aa[wa++]=Ru,Ru=t,jo=n}function Ap(t,n,a){Gn[Qn++]=Ei,Gn[Qn++]=Ti,Gn[Qn++]=kr,kr=t;var o=Ei;t=Ti;var h=32-Yt(o)-1;o&=~(1<<h),a+=1;var f=32-Yt(n)+h;if(30<f){var v=h-h%5;f=(o&(1<<v)-1).toString(32),o>>=v,h-=v,Ei=1<<32-Yt(n)+h|a<<h|o,Ti=f+t}else Ei=1<<f|a<<h|o,Ti=t}function qh(t){t.return!==null&&(Ki(t,1),Ap(t,1,0))}function Hh(t){for(;t===Ru;)Ru=Aa[--wa],Aa[wa]=null,jo=Aa[--wa],Aa[wa]=null;for(;t===kr;)kr=Gn[--Qn],Gn[Qn]=null,Ti=Gn[--Qn],Gn[Qn]=null,Ei=Gn[--Qn],Gn[Qn]=null}function wp(t,n){Gn[Qn++]=Ei,Gn[Qn++]=Ti,Gn[Qn++]=kr,Ei=n.id,Ti=n.overflow,kr=t}var Zt=null,ct=null,Fe=!1,Vr=null,Kn=!1,Fh=Error(s(519));function Lr(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Bo(Fn(n,t)),Fh}function Rp(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[yt]=t,n[Wt]=o,a){case"dialog":Pe("cancel",n),Pe("close",n);break;case"iframe":case"object":case"embed":Pe("load",n);break;case"video":case"audio":for(a=0;a<ul.length;a++)Pe(ul[a],n);break;case"source":Pe("error",n);break;case"img":case"image":case"link":Pe("error",n),Pe("load",n);break;case"details":Pe("toggle",n);break;case"input":Pe("invalid",n),Cs(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Pe("invalid",n);break;case"textarea":Pe("invalid",n),wr(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Hy(n.textContent,a)?(o.popover!=null&&(Pe("beforetoggle",n),Pe("toggle",n)),o.onScroll!=null&&Pe("scroll",n),o.onScrollEnd!=null&&Pe("scrollend",n),o.onClick!=null&&(n.onclick=qt),n=!0):n=!1,n||Lr(t,!0)}function Cp(t){for(Zt=t.return;Zt;)switch(Zt.tag){case 5:case 31:case 13:Kn=!1;return;case 27:case 3:Kn=!0;return;default:Zt=Zt.return}}function Ra(t){if(t!==Zt)return!1;if(!Fe)return Cp(t),Fe=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||ud(t.type,t.memoizedProps)),a=!a),a&&ct&&Lr(t),Cp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));ct=Jy(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));ct=Jy(t)}else n===27?(n=ct,Wr(t.type)?(t=md,md=null,ct=t):ct=n):ct=Zt?Xn(t.stateNode.nextSibling):null;return!0}function zs(){ct=Zt=null,Fe=!1}function Gh(){var t=Vr;return t!==null&&(Rn===null?Rn=t:Rn.push.apply(Rn,t),Vr=null),t}function Bo(t){Vr===null?Vr=[t]:Vr.push(t)}var Qh=N(null),js=null,Yi=null;function Ur(t,n,a){ie(Qh,n._currentValue),n._currentValue=a}function Xi(t){t._currentValue=Qh.current,X(Qh)}function Kh(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Yh(t,n,a,o){var h=t.child;for(h!==null&&(h.return=t);h!==null;){var f=h.dependencies;if(f!==null){var v=h.child;f=f.firstContext;e:for(;f!==null;){var T=f;f=h;for(var D=0;D<n.length;D++)if(T.context===n[D]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),Kh(f.return,a,t),o||(v=null);break e}f=T.next}}else if(h.tag===18){if(v=h.return,v===null)throw Error(s(341));v.lanes|=a,f=v.alternate,f!==null&&(f.lanes|=a),Kh(v,a,t),v=null}else v=h.child;if(v!==null)v.return=h;else for(v=h;v!==null;){if(v===t){v=null;break}if(h=v.sibling,h!==null){h.return=v.return,v=h;break}v=v.return}h=v}}function Ca(t,n,a,o){t=null;for(var h=n,f=!1;h!==null;){if(!f){if((h.flags&524288)!==0)f=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var v=h.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var T=h.type;Mn(h.pendingProps.value,v.value)||(t!==null?t.push(T):t=[T])}}else if(h===Me.current){if(v=h.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(t!==null?t.push(ml):t=[ml])}h=h.return}t!==null&&Yh(n,t,a,o),n.flags|=262144}function Cu(t){for(t=t.firstContext;t!==null;){if(!Mn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Bs(t){js=t,Yi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Jt(t){return Ip(js,t)}function Iu(t,n){return js===null&&Bs(t),Ip(t,n)}function Ip(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Yi===null){if(t===null)throw Error(s(308));Yi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Yi=Yi.next=n;return a}var YE=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},XE=r.unstable_scheduleCallback,WE=r.unstable_NormalPriority,Dt={$$typeof:te,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Xh(){return{controller:new YE,data:new Map,refCount:0}}function qo(t){t.refCount--,t.refCount===0&&XE(WE,function(){t.controller.abort()})}var Ho=null,Wh=0,Ia=0,Da=null;function ZE(t,n){if(Ho===null){var a=Ho=[];Wh=0,Ia=ed(),Da={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Wh++,n.then(Dp,Dp),n}function Dp(){if(--Wh===0&&Ho!==null){Da!==null&&(Da.status="fulfilled");var t=Ho;Ho=null,Ia=0,Da=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function JE(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(h){a.push(h)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var h=0;h<a.length;h++)(0,a[h])(n)},function(h){for(o.status="rejected",o.reason=h,h=0;h<a.length;h++)(0,a[h])(void 0)}),o}var Np=q.S;q.S=function(t,n){dy=Lt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&ZE(t,n),Np!==null&&Np(t,n)};var qs=N(null);function Zh(){var t=qs.current;return t!==null?t:lt.pooledCache}function Du(t,n){n===null?ie(qs,qs.current):ie(qs,n.pool)}function Op(){var t=Zh();return t===null?null:{parent:Dt._currentValue,pool:t}}var Na=Error(s(460)),Jh=Error(s(474)),Nu=Error(s(542)),Ou={then:function(){}};function xp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Mp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(qt,qt),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Vp(t),t;default:if(typeof n.status=="string")n.then(qt,qt);else{if(t=lt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var h=n;h.status="fulfilled",h.value=o}},function(o){if(n.status==="pending"){var h=n;h.status="rejected",h.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Vp(t),t}throw Fs=n,Na}}function Hs(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Fs=a,Na):a}}var Fs=null;function kp(){if(Fs===null)throw Error(s(459));var t=Fs;return Fs=null,t}function Vp(t){if(t===Na||t===Nu)throw Error(s(483))}var Oa=null,Fo=0;function xu(t){var n=Fo;return Fo+=1,Oa===null&&(Oa=[]),Mp(Oa,t,n)}function Go(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Mu(t,n){throw n.$$typeof===A?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Lp(t){function n(L,x){if(t){var z=L.deletions;z===null?(L.deletions=[x],L.flags|=16):z.push(x)}}function a(L,x){if(!t)return null;for(;x!==null;)n(L,x),x=x.sibling;return null}function o(L){for(var x=new Map;L!==null;)L.key!==null?x.set(L.key,L):x.set(L.index,L),L=L.sibling;return x}function h(L,x){return L=Qi(L,x),L.index=0,L.sibling=null,L}function f(L,x,z){return L.index=z,t?(z=L.alternate,z!==null?(z=z.index,z<x?(L.flags|=67108866,x):z):(L.flags|=67108866,x)):(L.flags|=1048576,x)}function v(L){return t&&L.alternate===null&&(L.flags|=67108866),L}function T(L,x,z,Z){return x===null||x.tag!==6?(x=jh(z,L.mode,Z),x.return=L,x):(x=h(x,z),x.return=L,x)}function D(L,x,z,Z){var ve=z.type;return ve===K?Y(L,x,z.props.children,Z,z.key):x!==null&&(x.elementType===ve||typeof ve=="object"&&ve!==null&&ve.$$typeof===w&&Hs(ve)===x.type)?(x=h(x,z.props),Go(x,z),x.return=L,x):(x=wu(z.type,z.key,z.props,null,L.mode,Z),Go(x,z),x.return=L,x)}function j(L,x,z,Z){return x===null||x.tag!==4||x.stateNode.containerInfo!==z.containerInfo||x.stateNode.implementation!==z.implementation?(x=Bh(z,L.mode,Z),x.return=L,x):(x=h(x,z.children||[]),x.return=L,x)}function Y(L,x,z,Z,ve){return x===null||x.tag!==7?(x=Ps(z,L.mode,Z,ve),x.return=L,x):(x=h(x,z),x.return=L,x)}function $(L,x,z){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return x=jh(""+x,L.mode,z),x.return=L,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case k:return z=wu(x.type,x.key,x.props,null,L.mode,z),Go(z,x),z.return=L,z;case Q:return x=Bh(x,L.mode,z),x.return=L,x;case w:return x=Hs(x),$(L,x,z)}if(dt(x)||V(x))return x=Ps(x,L.mode,z,null),x.return=L,x;if(typeof x.then=="function")return $(L,xu(x),z);if(x.$$typeof===te)return $(L,Iu(L,x),z);Mu(L,x)}return null}function B(L,x,z,Z){var ve=x!==null?x.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return ve!==null?null:T(L,x,""+z,Z);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case k:return z.key===ve?D(L,x,z,Z):null;case Q:return z.key===ve?j(L,x,z,Z):null;case w:return z=Hs(z),B(L,x,z,Z)}if(dt(z)||V(z))return ve!==null?null:Y(L,x,z,Z,null);if(typeof z.then=="function")return B(L,x,xu(z),Z);if(z.$$typeof===te)return B(L,x,Iu(L,z),Z);Mu(L,z)}return null}function F(L,x,z,Z,ve){if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return L=L.get(z)||null,T(x,L,""+Z,ve);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case k:return L=L.get(Z.key===null?z:Z.key)||null,D(x,L,Z,ve);case Q:return L=L.get(Z.key===null?z:Z.key)||null,j(x,L,Z,ve);case w:return Z=Hs(Z),F(L,x,z,Z,ve)}if(dt(Z)||V(Z))return L=L.get(z)||null,Y(x,L,Z,ve,null);if(typeof Z.then=="function")return F(L,x,z,xu(Z),ve);if(Z.$$typeof===te)return F(L,x,z,Iu(x,Z),ve);Mu(x,Z)}return null}function de(L,x,z,Z){for(var ve=null,We=null,me=x,xe=x=0,je=null;me!==null&&xe<z.length;xe++){me.index>xe?(je=me,me=null):je=me.sibling;var Ze=B(L,me,z[xe],Z);if(Ze===null){me===null&&(me=je);break}t&&me&&Ze.alternate===null&&n(L,me),x=f(Ze,x,xe),We===null?ve=Ze:We.sibling=Ze,We=Ze,me=je}if(xe===z.length)return a(L,me),Fe&&Ki(L,xe),ve;if(me===null){for(;xe<z.length;xe++)me=$(L,z[xe],Z),me!==null&&(x=f(me,x,xe),We===null?ve=me:We.sibling=me,We=me);return Fe&&Ki(L,xe),ve}for(me=o(me);xe<z.length;xe++)je=F(me,L,xe,z[xe],Z),je!==null&&(t&&je.alternate!==null&&me.delete(je.key===null?xe:je.key),x=f(je,x,xe),We===null?ve=je:We.sibling=je,We=je);return t&&me.forEach(function(ts){return n(L,ts)}),Fe&&Ki(L,xe),ve}function be(L,x,z,Z){if(z==null)throw Error(s(151));for(var ve=null,We=null,me=x,xe=x=0,je=null,Ze=z.next();me!==null&&!Ze.done;xe++,Ze=z.next()){me.index>xe?(je=me,me=null):je=me.sibling;var ts=B(L,me,Ze.value,Z);if(ts===null){me===null&&(me=je);break}t&&me&&ts.alternate===null&&n(L,me),x=f(ts,x,xe),We===null?ve=ts:We.sibling=ts,We=ts,me=je}if(Ze.done)return a(L,me),Fe&&Ki(L,xe),ve;if(me===null){for(;!Ze.done;xe++,Ze=z.next())Ze=$(L,Ze.value,Z),Ze!==null&&(x=f(Ze,x,xe),We===null?ve=Ze:We.sibling=Ze,We=Ze);return Fe&&Ki(L,xe),ve}for(me=o(me);!Ze.done;xe++,Ze=z.next())Ze=F(me,L,xe,Ze.value,Z),Ze!==null&&(t&&Ze.alternate!==null&&me.delete(Ze.key===null?xe:Ze.key),x=f(Ze,x,xe),We===null?ve=Ze:We.sibling=Ze,We=Ze);return t&&me.forEach(function(ub){return n(L,ub)}),Fe&&Ki(L,xe),ve}function ot(L,x,z,Z){if(typeof z=="object"&&z!==null&&z.type===K&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case k:e:{for(var ve=z.key;x!==null;){if(x.key===ve){if(ve=z.type,ve===K){if(x.tag===7){a(L,x.sibling),Z=h(x,z.props.children),Z.return=L,L=Z;break e}}else if(x.elementType===ve||typeof ve=="object"&&ve!==null&&ve.$$typeof===w&&Hs(ve)===x.type){a(L,x.sibling),Z=h(x,z.props),Go(Z,z),Z.return=L,L=Z;break e}a(L,x);break}else n(L,x);x=x.sibling}z.type===K?(Z=Ps(z.props.children,L.mode,Z,z.key),Z.return=L,L=Z):(Z=wu(z.type,z.key,z.props,null,L.mode,Z),Go(Z,z),Z.return=L,L=Z)}return v(L);case Q:e:{for(ve=z.key;x!==null;){if(x.key===ve)if(x.tag===4&&x.stateNode.containerInfo===z.containerInfo&&x.stateNode.implementation===z.implementation){a(L,x.sibling),Z=h(x,z.children||[]),Z.return=L,L=Z;break e}else{a(L,x);break}else n(L,x);x=x.sibling}Z=Bh(z,L.mode,Z),Z.return=L,L=Z}return v(L);case w:return z=Hs(z),ot(L,x,z,Z)}if(dt(z))return de(L,x,z,Z);if(V(z)){if(ve=V(z),typeof ve!="function")throw Error(s(150));return z=ve.call(z),be(L,x,z,Z)}if(typeof z.then=="function")return ot(L,x,xu(z),Z);if(z.$$typeof===te)return ot(L,x,Iu(L,z),Z);Mu(L,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,x!==null&&x.tag===6?(a(L,x.sibling),Z=h(x,z),Z.return=L,L=Z):(a(L,x),Z=jh(z,L.mode,Z),Z.return=L,L=Z),v(L)):a(L,x)}return function(L,x,z,Z){try{Fo=0;var ve=ot(L,x,z,Z);return Oa=null,ve}catch(me){if(me===Na||me===Nu)throw me;var We=kn(29,me,null,L.mode);return We.lanes=Z,We.return=L,We}finally{}}}var Gs=Lp(!0),Up=Lp(!1),Pr=!1;function $h(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ef(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function zr(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function jr(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Je&2)!==0){var h=o.pending;return h===null?n.next=n:(n.next=h.next,h.next=n),o.pending=n,n=Au(t),Ep(t,null,a),n}return Su(t,o,n,a),Au(t)}function Qo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,vr(t,a)}}function tf(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var h=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?h=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?h=f=n:f=f.next=n}else h=f=n;a={baseState:o.baseState,firstBaseUpdate:h,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var nf=!1;function Ko(){if(nf){var t=Da;if(t!==null)throw t}}function Yo(t,n,a,o){nf=!1;var h=t.updateQueue;Pr=!1;var f=h.firstBaseUpdate,v=h.lastBaseUpdate,T=h.shared.pending;if(T!==null){h.shared.pending=null;var D=T,j=D.next;D.next=null,v===null?f=j:v.next=j,v=D;var Y=t.alternate;Y!==null&&(Y=Y.updateQueue,T=Y.lastBaseUpdate,T!==v&&(T===null?Y.firstBaseUpdate=j:T.next=j,Y.lastBaseUpdate=D))}if(f!==null){var $=h.baseState;v=0,Y=j=D=null,T=f;do{var B=T.lane&-536870913,F=B!==T.lane;if(F?(ze&B)===B:(o&B)===B){B!==0&&B===Ia&&(nf=!0),Y!==null&&(Y=Y.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var de=t,be=T;B=n;var ot=a;switch(be.tag){case 1:if(de=be.payload,typeof de=="function"){$=de.call(ot,$,B);break e}$=de;break e;case 3:de.flags=de.flags&-65537|128;case 0:if(de=be.payload,B=typeof de=="function"?de.call(ot,$,B):de,B==null)break e;$=b({},$,B);break e;case 2:Pr=!0}}B=T.callback,B!==null&&(t.flags|=64,F&&(t.flags|=8192),F=h.callbacks,F===null?h.callbacks=[B]:F.push(B))}else F={lane:B,tag:T.tag,payload:T.payload,callback:T.callback,next:null},Y===null?(j=Y=F,D=$):Y=Y.next=F,v|=B;if(T=T.next,T===null){if(T=h.shared.pending,T===null)break;F=T,T=F.next,F.next=null,h.lastBaseUpdate=F,h.shared.pending=null}}while(!0);Y===null&&(D=$),h.baseState=D,h.firstBaseUpdate=j,h.lastBaseUpdate=Y,f===null&&(h.shared.lanes=0),Gr|=v,t.lanes=v,t.memoizedState=$}}function Pp(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function zp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Pp(a[t],n)}var xa=N(null),ku=N(0);function jp(t,n){t=rr,ie(ku,t),ie(xa,n),rr=t|n.baseLanes}function rf(){ie(ku,rr),ie(xa,xa.current)}function sf(){rr=ku.current,X(xa),X(ku)}var Vn=N(null),Yn=null;function Br(t){var n=t.alternate;ie(St,St.current&1),ie(Vn,t),Yn===null&&(n===null||xa.current!==null||n.memoizedState!==null)&&(Yn=t)}function af(t){ie(St,St.current),ie(Vn,t),Yn===null&&(Yn=t)}function Bp(t){t.tag===22?(ie(St,St.current),ie(Vn,t),Yn===null&&(Yn=t)):qr()}function qr(){ie(St,St.current),ie(Vn,Vn.current)}function Ln(t){X(Vn),Yn===t&&(Yn=null),X(St)}var St=N(0);function Vu(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||fd(a)||dd(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Wi=0,Ne=null,st=null,Nt=null,Lu=!1,Ma=!1,Qs=!1,Uu=0,Xo=0,ka=null,$E=0;function _t(){throw Error(s(321))}function of(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Mn(t[a],n[a]))return!1;return!0}function lf(t,n,a,o,h,f){return Wi=f,Ne=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,q.H=t===null||t.memoizedState===null?Ag:Sf,Qs=!1,f=a(o,h),Qs=!1,Ma&&(f=Hp(n,a,o,h)),qp(t),f}function qp(t){q.H=Jo;var n=st!==null&&st.next!==null;if(Wi=0,Nt=st=Ne=null,Lu=!1,Xo=0,ka=null,n)throw Error(s(300));t===null||Ot||(t=t.dependencies,t!==null&&Cu(t)&&(Ot=!0))}function Hp(t,n,a,o){Ne=t;var h=0;do{if(Ma&&(ka=null),Xo=0,Ma=!1,25<=h)throw Error(s(301));if(h+=1,Nt=st=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}q.H=wg,f=n(a,o)}while(Ma);return f}function eT(){var t=q.H,n=t.useState()[0];return n=typeof n.then=="function"?Wo(n):n,t=t.useState()[0],(st!==null?st.memoizedState:null)!==t&&(Ne.flags|=1024),n}function uf(){var t=Uu!==0;return Uu=0,t}function cf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function hf(t){if(Lu){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Lu=!1}Wi=0,Nt=st=Ne=null,Ma=!1,Xo=Uu=0,ka=null}function vn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Nt===null?Ne.memoizedState=Nt=t:Nt=Nt.next=t,Nt}function At(){if(st===null){var t=Ne.alternate;t=t!==null?t.memoizedState:null}else t=st.next;var n=Nt===null?Ne.memoizedState:Nt.next;if(n!==null)Nt=n,st=t;else{if(t===null)throw Ne.alternate===null?Error(s(467)):Error(s(310));st=t,t={memoizedState:st.memoizedState,baseState:st.baseState,baseQueue:st.baseQueue,queue:st.queue,next:null},Nt===null?Ne.memoizedState=Nt=t:Nt=Nt.next=t}return Nt}function Pu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Wo(t){var n=Xo;return Xo+=1,ka===null&&(ka=[]),t=Mp(ka,t,n),n=Ne,(Nt===null?n.memoizedState:Nt.next)===null&&(n=n.alternate,q.H=n===null||n.memoizedState===null?Ag:Sf),t}function zu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Wo(t);if(t.$$typeof===te)return Jt(t)}throw Error(s(438,String(t)))}function ff(t){var n=null,a=Ne.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=Ne.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(h){return h.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Pu(),Ne.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=O;return n.index++,a}function Zi(t,n){return typeof n=="function"?n(t):n}function ju(t){var n=At();return df(n,st,t)}function df(t,n,a){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var h=t.baseQueue,f=o.pending;if(f!==null){if(h!==null){var v=h.next;h.next=f.next,f.next=v}n.baseQueue=h=f,o.pending=null}if(f=t.baseState,h===null)t.memoizedState=f;else{n=h.next;var T=v=null,D=null,j=n,Y=!1;do{var $=j.lane&-536870913;if($!==j.lane?(ze&$)===$:(Wi&$)===$){var B=j.revertLane;if(B===0)D!==null&&(D=D.next={lane:0,revertLane:0,gesture:null,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),$===Ia&&(Y=!0);else if((Wi&B)===B){j=j.next,B===Ia&&(Y=!0);continue}else $={lane:0,revertLane:j.revertLane,gesture:null,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},D===null?(T=D=$,v=f):D=D.next=$,Ne.lanes|=B,Gr|=B;$=j.action,Qs&&a(f,$),f=j.hasEagerState?j.eagerState:a(f,$)}else B={lane:$,revertLane:j.revertLane,gesture:j.gesture,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},D===null?(T=D=B,v=f):D=D.next=B,Ne.lanes|=$,Gr|=$;j=j.next}while(j!==null&&j!==n);if(D===null?v=f:D.next=T,!Mn(f,t.memoizedState)&&(Ot=!0,Y&&(a=Da,a!==null)))throw a;t.memoizedState=f,t.baseState=v,t.baseQueue=D,o.lastRenderedState=f}return h===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function mf(t){var n=At(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var o=a.dispatch,h=a.pending,f=n.memoizedState;if(h!==null){a.pending=null;var v=h=h.next;do f=t(f,v.action),v=v.next;while(v!==h);Mn(f,n.memoizedState)||(Ot=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function Fp(t,n,a){var o=Ne,h=At(),f=Fe;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var v=!Mn((st||h).memoizedState,a);if(v&&(h.memoizedState=a,Ot=!0),h=h.queue,yf(Kp.bind(null,o,h,t),[t]),h.getSnapshot!==n||v||Nt!==null&&Nt.memoizedState.tag&1){if(o.flags|=2048,Va(9,{destroy:void 0},Qp.bind(null,o,h,a,n),null),lt===null)throw Error(s(349));f||(Wi&127)!==0||Gp(o,n,a)}return a}function Gp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=Ne.updateQueue,n===null?(n=Pu(),Ne.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Qp(t,n,a,o){n.value=a,n.getSnapshot=o,Yp(n)&&Xp(t)}function Kp(t,n,a){return a(function(){Yp(n)&&Xp(t)})}function Yp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Mn(t,a)}catch{return!0}}function Xp(t){var n=Us(t,2);n!==null&&Cn(n,t,2)}function pf(t){var n=vn();if(typeof t=="function"){var a=t;if(t=a(),Qs){En(!0);try{a()}finally{En(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zi,lastRenderedState:t},n}function Wp(t,n,a,o){return t.baseState=a,df(t,st,typeof o=="function"?o:Zi)}function tT(t,n,a,o,h){if(Hu(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:h,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};q.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,Zp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Zp(t,n){var a=n.action,o=n.payload,h=t.state;if(n.isTransition){var f=q.T,v={};q.T=v;try{var T=a(h,o),D=q.S;D!==null&&D(v,T),Jp(t,n,T)}catch(j){gf(t,n,j)}finally{f!==null&&v.types!==null&&(f.types=v.types),q.T=f}}else try{f=a(h,o),Jp(t,n,f)}catch(j){gf(t,n,j)}}function Jp(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){$p(t,n,o)},function(o){return gf(t,n,o)}):$p(t,n,a)}function $p(t,n,a){n.status="fulfilled",n.value=a,eg(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Zp(t,a)))}function gf(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,eg(n),n=n.next;while(n!==o)}t.action=null}function eg(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function tg(t,n){return n}function ng(t,n){if(Fe){var a=lt.formState;if(a!==null){e:{var o=Ne;if(Fe){if(ct){t:{for(var h=ct,f=Kn;h.nodeType!==8;){if(!f){h=null;break t}if(h=Xn(h.nextSibling),h===null){h=null;break t}}f=h.data,h=f==="F!"||f==="F"?h:null}if(h){ct=Xn(h.nextSibling),o=h.data==="F!";break e}}Lr(o)}o=!1}o&&(n=a[0])}}return a=vn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:tg,lastRenderedState:n},a.queue=o,a=Tg.bind(null,Ne,o),o.dispatch=a,o=pf(!1),f=bf.bind(null,Ne,!1,o.queue),o=vn(),h={state:n,dispatch:null,action:t,pending:null},o.queue=h,a=tT.bind(null,Ne,h,f,a),h.dispatch=a,o.memoizedState=t,[n,a,!1]}function ig(t){var n=At();return rg(n,st,t)}function rg(t,n,a){if(n=df(t,n,tg)[0],t=ju(Zi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Wo(n)}catch(v){throw v===Na?Nu:v}else o=n;n=At();var h=n.queue,f=h.dispatch;return a!==n.memoizedState&&(Ne.flags|=2048,Va(9,{destroy:void 0},nT.bind(null,h,a),null)),[o,f,t]}function nT(t,n){t.action=n}function sg(t){var n=At(),a=st;if(a!==null)return rg(n,a,t);At(),n=n.memoizedState,a=At();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function Va(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=Ne.updateQueue,n===null&&(n=Pu(),Ne.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function ag(){return At().memoizedState}function Bu(t,n,a,o){var h=vn();Ne.flags|=t,h.memoizedState=Va(1|n,{destroy:void 0},a,o===void 0?null:o)}function qu(t,n,a,o){var h=At();o=o===void 0?null:o;var f=h.memoizedState.inst;st!==null&&o!==null&&of(o,st.memoizedState.deps)?h.memoizedState=Va(n,f,a,o):(Ne.flags|=t,h.memoizedState=Va(1|n,f,a,o))}function og(t,n){Bu(8390656,8,t,n)}function yf(t,n){qu(2048,8,t,n)}function iT(t){Ne.flags|=4;var n=Ne.updateQueue;if(n===null)n=Pu(),Ne.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function lg(t){var n=At().memoizedState;return iT({ref:n,nextImpl:t}),function(){if((Je&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function ug(t,n){return qu(4,2,t,n)}function cg(t,n){return qu(4,4,t,n)}function hg(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function fg(t,n,a){a=a!=null?a.concat([t]):null,qu(4,4,hg.bind(null,n,t),a)}function vf(){}function dg(t,n){var a=At();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&of(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function mg(t,n){var a=At();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&of(n,o[1]))return o[0];if(o=t(),Qs){En(!0);try{t()}finally{En(!1)}}return a.memoizedState=[o,n],o}function _f(t,n,a){return a===void 0||(Wi&1073741824)!==0&&(ze&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=py(),Ne.lanes|=t,Gr|=t,a)}function pg(t,n,a,o){return Mn(a,n)?a:xa.current!==null?(t=_f(t,a,o),Mn(t,n)||(Ot=!0),t):(Wi&42)===0||(Wi&1073741824)!==0&&(ze&261930)===0?(Ot=!0,t.memoizedState=a):(t=py(),Ne.lanes|=t,Gr|=t,n)}function gg(t,n,a,o,h){var f=ae.p;ae.p=f!==0&&8>f?f:8;var v=q.T,T={};q.T=T,bf(t,!1,n,a);try{var D=h(),j=q.S;if(j!==null&&j(T,D),D!==null&&typeof D=="object"&&typeof D.then=="function"){var Y=JE(D,o);Zo(t,n,Y,zn(t))}else Zo(t,n,o,zn(t))}catch($){Zo(t,n,{then:function(){},status:"rejected",reason:$},zn())}finally{ae.p=f,v!==null&&T.types!==null&&(v.types=T.types),q.T=v}}function rT(){}function Ef(t,n,a,o){if(t.tag!==5)throw Error(s(476));var h=yg(t).queue;gg(t,h,n,ye,a===null?rT:function(){return vg(t),a(o)})}function yg(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:ye,baseState:ye,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zi,lastRenderedState:ye},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function vg(t){var n=yg(t);n.next===null&&(n=t.alternate.memoizedState),Zo(t,n.next.queue,{},zn())}function Tf(){return Jt(ml)}function _g(){return At().memoizedState}function Eg(){return At().memoizedState}function sT(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=zn();t=zr(a);var o=jr(n,t,a);o!==null&&(Cn(o,n,a),Qo(o,n,a)),n={cache:Xh()},t.payload=n;return}n=n.return}}function aT(t,n,a){var o=zn();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Hu(t)?bg(n,a):(a=Ph(t,n,a,o),a!==null&&(Cn(a,t,o),Sg(a,n,o)))}function Tg(t,n,a){var o=zn();Zo(t,n,a,o)}function Zo(t,n,a,o){var h={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Hu(t))bg(n,h);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var v=n.lastRenderedState,T=f(v,a);if(h.hasEagerState=!0,h.eagerState=T,Mn(T,v))return Su(t,n,h,0),lt===null&&bu(),!1}catch{}finally{}if(a=Ph(t,n,h,o),a!==null)return Cn(a,t,o),Sg(a,n,o),!0}return!1}function bf(t,n,a,o){if(o={lane:2,revertLane:ed(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Hu(t)){if(n)throw Error(s(479))}else n=Ph(t,a,o,2),n!==null&&Cn(n,t,2)}function Hu(t){var n=t.alternate;return t===Ne||n!==null&&n===Ne}function bg(t,n){Ma=Lu=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Sg(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,vr(t,a)}}var Jo={readContext:Jt,use:zu,useCallback:_t,useContext:_t,useEffect:_t,useImperativeHandle:_t,useLayoutEffect:_t,useInsertionEffect:_t,useMemo:_t,useReducer:_t,useRef:_t,useState:_t,useDebugValue:_t,useDeferredValue:_t,useTransition:_t,useSyncExternalStore:_t,useId:_t,useHostTransitionStatus:_t,useFormState:_t,useActionState:_t,useOptimistic:_t,useMemoCache:_t,useCacheRefresh:_t};Jo.useEffectEvent=_t;var Ag={readContext:Jt,use:zu,useCallback:function(t,n){return vn().memoizedState=[t,n===void 0?null:n],t},useContext:Jt,useEffect:og,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Bu(4194308,4,hg.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Bu(4194308,4,t,n)},useInsertionEffect:function(t,n){Bu(4,2,t,n)},useMemo:function(t,n){var a=vn();n=n===void 0?null:n;var o=t();if(Qs){En(!0);try{t()}finally{En(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=vn();if(a!==void 0){var h=a(n);if(Qs){En(!0);try{a(n)}finally{En(!1)}}}else h=n;return o.memoizedState=o.baseState=h,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:h},o.queue=t,t=t.dispatch=aT.bind(null,Ne,t),[o.memoizedState,t]},useRef:function(t){var n=vn();return t={current:t},n.memoizedState=t},useState:function(t){t=pf(t);var n=t.queue,a=Tg.bind(null,Ne,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:vf,useDeferredValue:function(t,n){var a=vn();return _f(a,t,n)},useTransition:function(){var t=pf(!1);return t=gg.bind(null,Ne,t.queue,!0,!1),vn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=Ne,h=vn();if(Fe){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),lt===null)throw Error(s(349));(ze&127)!==0||Gp(o,n,a)}h.memoizedState=a;var f={value:a,getSnapshot:n};return h.queue=f,og(Kp.bind(null,o,f,t),[t]),o.flags|=2048,Va(9,{destroy:void 0},Qp.bind(null,o,f,a,n),null),a},useId:function(){var t=vn(),n=lt.identifierPrefix;if(Fe){var a=Ti,o=Ei;a=(o&~(1<<32-Yt(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Uu++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=$E++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Tf,useFormState:ng,useActionState:ng,useOptimistic:function(t){var n=vn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=bf.bind(null,Ne,!0,a),a.dispatch=n,[t,n]},useMemoCache:ff,useCacheRefresh:function(){return vn().memoizedState=sT.bind(null,Ne)},useEffectEvent:function(t){var n=vn(),a={impl:t};return n.memoizedState=a,function(){if((Je&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Sf={readContext:Jt,use:zu,useCallback:dg,useContext:Jt,useEffect:yf,useImperativeHandle:fg,useInsertionEffect:ug,useLayoutEffect:cg,useMemo:mg,useReducer:ju,useRef:ag,useState:function(){return ju(Zi)},useDebugValue:vf,useDeferredValue:function(t,n){var a=At();return pg(a,st.memoizedState,t,n)},useTransition:function(){var t=ju(Zi)[0],n=At().memoizedState;return[typeof t=="boolean"?t:Wo(t),n]},useSyncExternalStore:Fp,useId:_g,useHostTransitionStatus:Tf,useFormState:ig,useActionState:ig,useOptimistic:function(t,n){var a=At();return Wp(a,st,t,n)},useMemoCache:ff,useCacheRefresh:Eg};Sf.useEffectEvent=lg;var wg={readContext:Jt,use:zu,useCallback:dg,useContext:Jt,useEffect:yf,useImperativeHandle:fg,useInsertionEffect:ug,useLayoutEffect:cg,useMemo:mg,useReducer:mf,useRef:ag,useState:function(){return mf(Zi)},useDebugValue:vf,useDeferredValue:function(t,n){var a=At();return st===null?_f(a,t,n):pg(a,st.memoizedState,t,n)},useTransition:function(){var t=mf(Zi)[0],n=At().memoizedState;return[typeof t=="boolean"?t:Wo(t),n]},useSyncExternalStore:Fp,useId:_g,useHostTransitionStatus:Tf,useFormState:sg,useActionState:sg,useOptimistic:function(t,n){var a=At();return st!==null?Wp(a,st,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:ff,useCacheRefresh:Eg};wg.useEffectEvent=lg;function Af(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:b({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var wf={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=zn(),h=zr(o);h.payload=n,a!=null&&(h.callback=a),n=jr(t,h,o),n!==null&&(Cn(n,t,o),Qo(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=zn(),h=zr(o);h.tag=1,h.payload=n,a!=null&&(h.callback=a),n=jr(t,h,o),n!==null&&(Cn(n,t,o),Qo(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=zn(),o=zr(a);o.tag=2,n!=null&&(o.callback=n),n=jr(t,o,a),n!==null&&(Cn(n,t,a),Qo(n,t,a))}};function Rg(t,n,a,o,h,f,v){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,f,v):n.prototype&&n.prototype.isPureReactComponent?!Po(a,o)||!Po(h,f):!0}function Cg(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&wf.enqueueReplaceState(n,n.state,null)}function Ks(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=b({},a));for(var h in t)a[h]===void 0&&(a[h]=t[h])}return a}function Ig(t){Tu(t)}function Dg(t){console.error(t)}function Ng(t){Tu(t)}function Fu(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Og(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function Rf(t,n,a){return a=zr(a),a.tag=3,a.payload={element:null},a.callback=function(){Fu(t,n)},a}function xg(t){return t=zr(t),t.tag=3,t}function Mg(t,n,a,o){var h=a.type.getDerivedStateFromError;if(typeof h=="function"){var f=o.value;t.payload=function(){return h(f)},t.callback=function(){Og(n,a,o)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(t.callback=function(){Og(n,a,o),typeof h!="function"&&(Qr===null?Qr=new Set([this]):Qr.add(this));var T=o.stack;this.componentDidCatch(o.value,{componentStack:T!==null?T:""})})}function oT(t,n,a,o,h){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Ca(n,a,h,!0),a=Vn.current,a!==null){switch(a.tag){case 31:case 13:return Yn===null?nc():a.alternate===null&&Et===0&&(Et=3),a.flags&=-257,a.flags|=65536,a.lanes=h,o===Ou?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Zf(t,o,h)),!1;case 22:return a.flags|=65536,o===Ou?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Zf(t,o,h)),!1}throw Error(s(435,a.tag))}return Zf(t,o,h),nc(),!1}if(Fe)return n=Vn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=h,o!==Fh&&(t=Error(s(422),{cause:o}),Bo(Fn(t,a)))):(o!==Fh&&(n=Error(s(423),{cause:o}),Bo(Fn(n,a))),t=t.current.alternate,t.flags|=65536,h&=-h,t.lanes|=h,o=Fn(o,a),h=Rf(t.stateNode,o,h),tf(t,h),Et!==4&&(Et=2)),!1;var f=Error(s(520),{cause:o});if(f=Fn(f,a),al===null?al=[f]:al.push(f),Et!==4&&(Et=2),n===null)return!0;o=Fn(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=h&-h,a.lanes|=t,t=Rf(a.stateNode,o,t),tf(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Qr===null||!Qr.has(f))))return a.flags|=65536,h&=-h,a.lanes|=h,h=xg(h),Mg(h,t,a,o),tf(a,h),!1}a=a.return}while(a!==null);return!1}var Cf=Error(s(461)),Ot=!1;function $t(t,n,a,o){n.child=t===null?Up(n,null,a,o):Gs(n,t.child,a,o)}function kg(t,n,a,o,h){a=a.render;var f=n.ref;if("ref"in o){var v={};for(var T in o)T!=="ref"&&(v[T]=o[T])}else v=o;return Bs(n),o=lf(t,n,a,v,f,h),T=uf(),t!==null&&!Ot?(cf(t,n,h),Ji(t,n,h)):(Fe&&T&&qh(n),n.flags|=1,$t(t,n,o,h),n.child)}function Vg(t,n,a,o,h){if(t===null){var f=a.type;return typeof f=="function"&&!zh(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Lg(t,n,f,o,h)):(t=wu(a.type,null,o,n,n.mode,h),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Vf(t,h)){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:Po,a(v,o)&&t.ref===n.ref)return Ji(t,n,h)}return n.flags|=1,t=Qi(f,o),t.ref=n.ref,t.return=n,n.child=t}function Lg(t,n,a,o,h){if(t!==null){var f=t.memoizedProps;if(Po(f,o)&&t.ref===n.ref)if(Ot=!1,n.pendingProps=o=f,Vf(t,h))(t.flags&131072)!==0&&(Ot=!0);else return n.lanes=t.lanes,Ji(t,n,h)}return If(t,n,a,o,h)}function Ug(t,n,a,o){var h=o.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(o=n.child=t.child,h=0;o!==null;)h=h|o.lanes|o.childLanes,o=o.sibling;o=h&~f}else o=0,n.child=null;return Pg(t,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Du(n,f!==null?f.cachePool:null),f!==null?jp(n,f):rf(),Bp(n);else return o=n.lanes=536870912,Pg(t,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(Du(n,f.cachePool),jp(n,f),qr(),n.memoizedState=null):(t!==null&&Du(n,null),rf(),qr());return $t(t,n,h,a),n.child}function $o(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Pg(t,n,a,o,h){var f=Zh();return f=f===null?null:{parent:Dt._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&Du(n,null),rf(),Bp(n),t!==null&&Ca(t,n,o,!0),n.childLanes=h,null}function Gu(t,n){return n=Ku({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function zg(t,n,a){return Gs(n,t.child,null,a),t=Gu(n,n.pendingProps),t.flags|=2,Ln(n),n.memoizedState=null,t}function lT(t,n,a){var o=n.pendingProps,h=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Fe){if(o.mode==="hidden")return t=Gu(n,o),n.lanes=536870912,$o(null,t);if(af(n),(t=ct)?(t=Zy(t,Kn),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:kr!==null?{id:Ei,overflow:Ti}:null,retryLane:536870912,hydrationErrors:null},a=bp(t),a.return=n,n.child=a,Zt=n,ct=null)):t=null,t===null)throw Lr(n);return n.lanes=536870912,null}return Gu(n,o)}var f=t.memoizedState;if(f!==null){var v=f.dehydrated;if(af(n),h)if(n.flags&256)n.flags&=-257,n=zg(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(Ot||Ca(t,n,a,!1),h=(a&t.childLanes)!==0,Ot||h){if(o=lt,o!==null&&(v=_r(o,a),v!==0&&v!==f.retryLane))throw f.retryLane=v,Us(t,v),Cn(o,t,v),Cf;nc(),n=zg(t,n,a)}else t=f.treeContext,ct=Xn(v.nextSibling),Zt=n,Fe=!0,Vr=null,Kn=!1,t!==null&&wp(n,t),n=Gu(n,o),n.flags|=4096;return n}return t=Qi(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Qu(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function If(t,n,a,o,h){return Bs(n),a=lf(t,n,a,o,void 0,h),o=uf(),t!==null&&!Ot?(cf(t,n,h),Ji(t,n,h)):(Fe&&o&&qh(n),n.flags|=1,$t(t,n,a,h),n.child)}function jg(t,n,a,o,h,f){return Bs(n),n.updateQueue=null,a=Hp(n,o,a,h),qp(t),o=uf(),t!==null&&!Ot?(cf(t,n,f),Ji(t,n,f)):(Fe&&o&&qh(n),n.flags|=1,$t(t,n,a,f),n.child)}function Bg(t,n,a,o,h){if(Bs(n),n.stateNode===null){var f=Sa,v=a.contextType;typeof v=="object"&&v!==null&&(f=Jt(v)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=wf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},$h(n),v=a.contextType,f.context=typeof v=="object"&&v!==null?Jt(v):Sa,f.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(Af(n,a,v,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&wf.enqueueReplaceState(f,f.state,null),Yo(n,o,f,h),Ko(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){f=n.stateNode;var T=n.memoizedProps,D=Ks(a,T);f.props=D;var j=f.context,Y=a.contextType;v=Sa,typeof Y=="object"&&Y!==null&&(v=Jt(Y));var $=a.getDerivedStateFromProps;Y=typeof $=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,Y||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||j!==v)&&Cg(n,f,o,v),Pr=!1;var B=n.memoizedState;f.state=B,Yo(n,o,f,h),Ko(),j=n.memoizedState,T||B!==j||Pr?(typeof $=="function"&&(Af(n,a,$,o),j=n.memoizedState),(D=Pr||Rg(n,a,D,o,B,j,v))?(Y||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=j),f.props=o,f.state=j,f.context=v,o=D):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,ef(t,n),v=n.memoizedProps,Y=Ks(a,v),f.props=Y,$=n.pendingProps,B=f.context,j=a.contextType,D=Sa,typeof j=="object"&&j!==null&&(D=Jt(j)),T=a.getDerivedStateFromProps,(j=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==$||B!==D)&&Cg(n,f,o,D),Pr=!1,B=n.memoizedState,f.state=B,Yo(n,o,f,h),Ko();var F=n.memoizedState;v!==$||B!==F||Pr||t!==null&&t.dependencies!==null&&Cu(t.dependencies)?(typeof T=="function"&&(Af(n,a,T,o),F=n.memoizedState),(Y=Pr||Rg(n,a,Y,o,B,F,D)||t!==null&&t.dependencies!==null&&Cu(t.dependencies))?(j||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,F,D),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,F,D)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===t.memoizedProps&&B===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&B===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=F),f.props=o,f.state=F,f.context=D,o=Y):(typeof f.componentDidUpdate!="function"||v===t.memoizedProps&&B===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&B===t.memoizedState||(n.flags|=1024),o=!1)}return f=o,Qu(t,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&o?(n.child=Gs(n,t.child,null,h),n.child=Gs(n,null,a,h)):$t(t,n,a,h),n.memoizedState=f.state,t=n.child):t=Ji(t,n,h),t}function qg(t,n,a,o){return zs(),n.flags|=256,$t(t,n,a,o),n.child}var Df={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Nf(t){return{baseLanes:t,cachePool:Op()}}function Of(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Pn),t}function Hg(t,n,a){var o=n.pendingProps,h=!1,f=(n.flags&128)!==0,v;if((v=f)||(v=t!==null&&t.memoizedState===null?!1:(St.current&2)!==0),v&&(h=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,t===null){if(Fe){if(h?Br(n):qr(),(t=ct)?(t=Zy(t,Kn),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:kr!==null?{id:Ei,overflow:Ti}:null,retryLane:536870912,hydrationErrors:null},a=bp(t),a.return=n,n.child=a,Zt=n,ct=null)):t=null,t===null)throw Lr(n);return dd(t)?n.lanes=32:n.lanes=536870912,null}var T=o.children;return o=o.fallback,h?(qr(),h=n.mode,T=Ku({mode:"hidden",children:T},h),o=Ps(o,h,a,null),T.return=n,o.return=n,T.sibling=o,n.child=T,o=n.child,o.memoizedState=Nf(a),o.childLanes=Of(t,v,a),n.memoizedState=Df,$o(null,o)):(Br(n),xf(n,T))}var D=t.memoizedState;if(D!==null&&(T=D.dehydrated,T!==null)){if(f)n.flags&256?(Br(n),n.flags&=-257,n=Mf(t,n,a)):n.memoizedState!==null?(qr(),n.child=t.child,n.flags|=128,n=null):(qr(),T=o.fallback,h=n.mode,o=Ku({mode:"visible",children:o.children},h),T=Ps(T,h,a,null),T.flags|=2,o.return=n,T.return=n,o.sibling=T,n.child=o,Gs(n,t.child,null,a),o=n.child,o.memoizedState=Nf(a),o.childLanes=Of(t,v,a),n.memoizedState=Df,n=$o(null,o));else if(Br(n),dd(T)){if(v=T.nextSibling&&T.nextSibling.dataset,v)var j=v.dgst;v=j,o=Error(s(419)),o.stack="",o.digest=v,Bo({value:o,source:null,stack:null}),n=Mf(t,n,a)}else if(Ot||Ca(t,n,a,!1),v=(a&t.childLanes)!==0,Ot||v){if(v=lt,v!==null&&(o=_r(v,a),o!==0&&o!==D.retryLane))throw D.retryLane=o,Us(t,o),Cn(v,t,o),Cf;fd(T)||nc(),n=Mf(t,n,a)}else fd(T)?(n.flags|=192,n.child=t.child,n=null):(t=D.treeContext,ct=Xn(T.nextSibling),Zt=n,Fe=!0,Vr=null,Kn=!1,t!==null&&wp(n,t),n=xf(n,o.children),n.flags|=4096);return n}return h?(qr(),T=o.fallback,h=n.mode,D=t.child,j=D.sibling,o=Qi(D,{mode:"hidden",children:o.children}),o.subtreeFlags=D.subtreeFlags&65011712,j!==null?T=Qi(j,T):(T=Ps(T,h,a,null),T.flags|=2),T.return=n,o.return=n,o.sibling=T,n.child=o,$o(null,o),o=n.child,T=t.child.memoizedState,T===null?T=Nf(a):(h=T.cachePool,h!==null?(D=Dt._currentValue,h=h.parent!==D?{parent:D,pool:D}:h):h=Op(),T={baseLanes:T.baseLanes|a,cachePool:h}),o.memoizedState=T,o.childLanes=Of(t,v,a),n.memoizedState=Df,$o(t.child,o)):(Br(n),a=t.child,t=a.sibling,a=Qi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(v=n.deletions,v===null?(n.deletions=[t],n.flags|=16):v.push(t)),n.child=a,n.memoizedState=null,a)}function xf(t,n){return n=Ku({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Ku(t,n){return t=kn(22,t,null,n),t.lanes=0,t}function Mf(t,n,a){return Gs(n,t.child,null,a),t=xf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Fg(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Kh(t.return,n,a)}function kf(t,n,a,o,h,f){var v=t.memoizedState;v===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:h,treeForkCount:f}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=o,v.tail=a,v.tailMode=h,v.treeForkCount=f)}function Gg(t,n,a){var o=n.pendingProps,h=o.revealOrder,f=o.tail;o=o.children;var v=St.current,T=(v&2)!==0;if(T?(v=v&1|2,n.flags|=128):v&=1,ie(St,v),$t(t,n,o,a),o=Fe?jo:0,!T&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Fg(t,a,n);else if(t.tag===19)Fg(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(h){case"forwards":for(a=n.child,h=null;a!==null;)t=a.alternate,t!==null&&Vu(t)===null&&(h=a),a=a.sibling;a=h,a===null?(h=n.child,n.child=null):(h=a.sibling,a.sibling=null),kf(n,!1,h,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,h=n.child,n.child=null;h!==null;){if(t=h.alternate,t!==null&&Vu(t)===null){n.child=h;break}t=h.sibling,h.sibling=a,a=h,h=t}kf(n,!0,a,null,f,o);break;case"together":kf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function Ji(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Gr|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Ca(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=Qi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Qi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Vf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Cu(t)))}function uT(t,n,a){switch(n.tag){case 3:Vt(n,n.stateNode.containerInfo),Ur(n,Dt,t.memoizedState.cache),zs();break;case 27:case 5:jn(n);break;case 4:Vt(n,n.stateNode.containerInfo);break;case 10:Ur(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,af(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Br(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Hg(t,n,a):(Br(n),t=Ji(t,n,a),t!==null?t.sibling:null);Br(n);break;case 19:var h=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Ca(t,n,a,!1),o=(a&n.childLanes)!==0),h){if(o)return Gg(t,n,a);n.flags|=128}if(h=n.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),ie(St,St.current),o)break;return null;case 22:return n.lanes=0,Ug(t,n,a,n.pendingProps);case 24:Ur(n,Dt,t.memoizedState.cache)}return Ji(t,n,a)}function Qg(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)Ot=!0;else{if(!Vf(t,a)&&(n.flags&128)===0)return Ot=!1,uT(t,n,a);Ot=(t.flags&131072)!==0}else Ot=!1,Fe&&(n.flags&1048576)!==0&&Ap(n,jo,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=Hs(n.elementType),n.type=t,typeof t=="function")zh(t)?(o=Ks(t,o),n.tag=1,n=Bg(null,n,t,o,a)):(n.tag=0,n=If(null,n,t,o,a));else{if(t!=null){var h=t.$$typeof;if(h===fe){n.tag=11,n=kg(null,n,t,o,a);break e}else if(h===R){n.tag=14,n=Vg(null,n,t,o,a);break e}}throw n=$e(t)||t,Error(s(306,n,""))}}return n;case 0:return If(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,h=Ks(o,n.pendingProps),Bg(t,n,o,h,a);case 3:e:{if(Vt(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;h=f.element,ef(t,n),Yo(n,o,null,a);var v=n.memoizedState;if(o=v.cache,Ur(n,Dt,o),o!==f.cache&&Yh(n,[Dt],a,!0),Ko(),o=v.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=qg(t,n,o,a);break e}else if(o!==h){h=Fn(Error(s(424)),n),Bo(h),n=qg(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(ct=Xn(t.firstChild),Zt=n,Fe=!0,Vr=null,Kn=!0,a=Up(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(zs(),o===h){n=Ji(t,n,a);break e}$t(t,n,o,a)}n=n.child}return n;case 26:return Qu(t,n),t===null?(a=i1(n.type,null,n.pendingProps,null))?n.memoizedState=a:Fe||(a=n.type,t=n.pendingProps,o=uc(Oe.current).createElement(a),o[yt]=n,o[Wt]=t,en(o,a,t),bt(o),n.stateNode=o):n.memoizedState=i1(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return jn(n),t===null&&Fe&&(o=n.stateNode=e1(n.type,n.pendingProps,Oe.current),Zt=n,Kn=!0,h=ct,Wr(n.type)?(md=h,ct=Xn(o.firstChild)):ct=h),$t(t,n,n.pendingProps.children,a),Qu(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Fe&&((h=o=ct)&&(o=zT(o,n.type,n.pendingProps,Kn),o!==null?(n.stateNode=o,Zt=n,ct=Xn(o.firstChild),Kn=!1,h=!0):h=!1),h||Lr(n)),jn(n),h=n.type,f=n.pendingProps,v=t!==null?t.memoizedProps:null,o=f.children,ud(h,f)?o=null:v!==null&&ud(h,v)&&(n.flags|=32),n.memoizedState!==null&&(h=lf(t,n,eT,null,null,a),ml._currentValue=h),Qu(t,n),$t(t,n,o,a),n.child;case 6:return t===null&&Fe&&((t=a=ct)&&(a=jT(a,n.pendingProps,Kn),a!==null?(n.stateNode=a,Zt=n,ct=null,t=!0):t=!1),t||Lr(n)),null;case 13:return Hg(t,n,a);case 4:return Vt(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Gs(n,null,o,a):$t(t,n,o,a),n.child;case 11:return kg(t,n,n.type,n.pendingProps,a);case 7:return $t(t,n,n.pendingProps,a),n.child;case 8:return $t(t,n,n.pendingProps.children,a),n.child;case 12:return $t(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ur(n,n.type,o.value),$t(t,n,o.children,a),n.child;case 9:return h=n.type._context,o=n.pendingProps.children,Bs(n),h=Jt(h),o=o(h),n.flags|=1,$t(t,n,o,a),n.child;case 14:return Vg(t,n,n.type,n.pendingProps,a);case 15:return Lg(t,n,n.type,n.pendingProps,a);case 19:return Gg(t,n,a);case 31:return lT(t,n,a);case 22:return Ug(t,n,a,n.pendingProps);case 24:return Bs(n),o=Jt(Dt),t===null?(h=Zh(),h===null&&(h=lt,f=Xh(),h.pooledCache=f,f.refCount++,f!==null&&(h.pooledCacheLanes|=a),h=f),n.memoizedState={parent:o,cache:h},$h(n),Ur(n,Dt,h)):((t.lanes&a)!==0&&(ef(t,n),Yo(n,null,null,a),Ko()),h=t.memoizedState,f=n.memoizedState,h.parent!==o?(h={parent:o,cache:o},n.memoizedState=h,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=h),Ur(n,Dt,o)):(o=f.cache,Ur(n,Dt,o),o!==h.cache&&Yh(n,[Dt],a,!0))),$t(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function $i(t){t.flags|=4}function Lf(t,n,a,o,h){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(h&335544128)===h)if(t.stateNode.complete)t.flags|=8192;else if(_y())t.flags|=8192;else throw Fs=Ou,Jh}else t.flags&=-16777217}function Kg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!l1(n))if(_y())t.flags|=8192;else throw Fs=Ou,Jh}function Yu(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Nn():536870912,t.lanes|=n,za|=n)}function el(t,n){if(!Fe)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function ht(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var h=t.child;h!==null;)a|=h.lanes|h.childLanes,o|=h.subtreeFlags&65011712,o|=h.flags&65011712,h.return=t,h=h.sibling;else for(h=t.child;h!==null;)a|=h.lanes|h.childLanes,o|=h.subtreeFlags,o|=h.flags,h.return=t,h=h.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function cT(t,n,a){var o=n.pendingProps;switch(Hh(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ht(n),null;case 1:return ht(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Xi(Dt),rt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Ra(n)?$i(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Gh())),ht(n),null;case 26:var h=n.type,f=n.memoizedState;return t===null?($i(n),f!==null?(ht(n),Kg(n,f)):(ht(n),Lf(n,h,null,o,a))):f?f!==t.memoizedState?($i(n),ht(n),Kg(n,f)):(ht(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&$i(n),ht(n),Lf(n,h,t,o,a)),null;case 27:if(fn(n),a=Oe.current,h=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&$i(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return ht(n),null}t=ue.current,Ra(n)?Rp(n):(t=e1(h,o,a),n.stateNode=t,$i(n))}return ht(n),null;case 5:if(fn(n),h=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&$i(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return ht(n),null}if(f=ue.current,Ra(n))Rp(n);else{var v=uc(Oe.current);switch(f){case 1:f=v.createElementNS("http://www.w3.org/2000/svg",h);break;case 2:f=v.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;default:switch(h){case"svg":f=v.createElementNS("http://www.w3.org/2000/svg",h);break;case"math":f=v.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;case"script":f=v.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?v.createElement("select",{is:o.is}):v.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?v.createElement(h,{is:o.is}):v.createElement(h)}}f[yt]=n,f[Wt]=o;e:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)f.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break e;for(;v.sibling===null;){if(v.return===null||v.return===n)break e;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=f;e:switch(en(f,h,o),h){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&$i(n)}}return ht(n),Lf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&$i(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=Oe.current,Ra(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,h=Zt,h!==null)switch(h.tag){case 27:case 5:o=h.memoizedProps}t[yt]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Hy(t.nodeValue,a)),t||Lr(n,!0)}else t=uc(t).createTextNode(o),t[yt]=n,n.stateNode=t}return ht(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=Ra(n),a!==null){if(t===null){if(!o)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[yt]=n}else zs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;ht(n),t=!1}else a=Gh(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Ln(n),n):(Ln(n),null);if((n.flags&128)!==0)throw Error(s(558))}return ht(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(h=Ra(n),o!==null&&o.dehydrated!==null){if(t===null){if(!h)throw Error(s(318));if(h=n.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(s(317));h[yt]=n}else zs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;ht(n),h=!1}else h=Gh(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=h),h=!0;if(!h)return n.flags&256?(Ln(n),n):(Ln(n),null)}return Ln(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,h=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(h=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==h&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Yu(n,n.updateQueue),ht(n),null);case 4:return rt(),t===null&&rd(n.stateNode.containerInfo),ht(n),null;case 10:return Xi(n.type),ht(n),null;case 19:if(X(St),o=n.memoizedState,o===null)return ht(n),null;if(h=(n.flags&128)!==0,f=o.rendering,f===null)if(h)el(o,!1);else{if(Et!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Vu(t),f!==null){for(n.flags|=128,el(o,!1),t=f.updateQueue,n.updateQueue=t,Yu(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Tp(a,t),a=a.sibling;return ie(St,St.current&1|2),Fe&&Ki(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&Lt()>$u&&(n.flags|=128,h=!0,el(o,!1),n.lanes=4194304)}else{if(!h)if(t=Vu(f),t!==null){if(n.flags|=128,h=!0,t=t.updateQueue,n.updateQueue=t,Yu(n,t),el(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Fe)return ht(n),null}else 2*Lt()-o.renderingStartTime>$u&&a!==536870912&&(n.flags|=128,h=!0,el(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(t=o.last,t!==null?t.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Lt(),t.sibling=null,a=St.current,ie(St,h?a&1|2:a&1),Fe&&Ki(n,o.treeForkCount),t):(ht(n),null);case 22:case 23:return Ln(n),sf(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(ht(n),n.subtreeFlags&6&&(n.flags|=8192)):ht(n),a=n.updateQueue,a!==null&&Yu(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&X(qs),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Xi(Dt),ht(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function hT(t,n){switch(Hh(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Xi(Dt),rt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return fn(n),null;case 31:if(n.memoizedState!==null){if(Ln(n),n.alternate===null)throw Error(s(340));zs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Ln(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));zs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return X(St),null;case 4:return rt(),null;case 10:return Xi(n.type),null;case 22:case 23:return Ln(n),sf(),t!==null&&X(qs),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Xi(Dt),null;case 25:return null;default:return null}}function Yg(t,n){switch(Hh(n),n.tag){case 3:Xi(Dt),rt();break;case 26:case 27:case 5:fn(n);break;case 4:rt();break;case 31:n.memoizedState!==null&&Ln(n);break;case 13:Ln(n);break;case 19:X(St);break;case 10:Xi(n.type);break;case 22:case 23:Ln(n),sf(),t!==null&&X(qs);break;case 24:Xi(Dt)}}function tl(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var h=o.next;a=h;do{if((a.tag&t)===t){o=void 0;var f=a.create,v=a.inst;o=f(),v.destroy=o}a=a.next}while(a!==h)}}catch(T){it(n,n.return,T)}}function Hr(t,n,a){try{var o=n.updateQueue,h=o!==null?o.lastEffect:null;if(h!==null){var f=h.next;o=f;do{if((o.tag&t)===t){var v=o.inst,T=v.destroy;if(T!==void 0){v.destroy=void 0,h=n;var D=a,j=T;try{j()}catch(Y){it(h,D,Y)}}}o=o.next}while(o!==f)}}catch(Y){it(n,n.return,Y)}}function Xg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{zp(n,a)}catch(o){it(t,t.return,o)}}}function Wg(t,n,a){a.props=Ks(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){it(t,n,o)}}function nl(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(h){it(t,n,h)}}function bi(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(h){it(t,n,h)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(h){it(t,n,h)}else a.current=null}function Zg(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(h){it(t,t.return,h)}}function Uf(t,n,a){try{var o=t.stateNode;MT(o,t.type,a,n),o[Wt]=n}catch(h){it(t,t.return,h)}}function Jg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Wr(t.type)||t.tag===4}function Pf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Jg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Wr(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function zf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=qt));else if(o!==4&&(o===27&&Wr(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(zf(t,n,a),t=t.sibling;t!==null;)zf(t,n,a),t=t.sibling}function Xu(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&Wr(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Xu(t,n,a),t=t.sibling;t!==null;)Xu(t,n,a),t=t.sibling}function $g(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,h=n.attributes;h.length;)n.removeAttributeNode(h[0]);en(n,o,a),n[yt]=t,n[Wt]=a}catch(f){it(t,t.return,f)}}var er=!1,xt=!1,jf=!1,ey=typeof WeakSet=="function"?WeakSet:Set,Gt=null;function fT(t,n){if(t=t.containerInfo,od=gc,t=fp(t),xh(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var h=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var v=0,T=-1,D=-1,j=0,Y=0,$=t,B=null;t:for(;;){for(var F;$!==a||h!==0&&$.nodeType!==3||(T=v+h),$!==f||o!==0&&$.nodeType!==3||(D=v+o),$.nodeType===3&&(v+=$.nodeValue.length),(F=$.firstChild)!==null;)B=$,$=F;for(;;){if($===t)break t;if(B===a&&++j===h&&(T=v),B===f&&++Y===o&&(D=v),(F=$.nextSibling)!==null)break;$=B,B=$.parentNode}$=F}a=T===-1||D===-1?null:{start:T,end:D}}else a=null}a=a||{start:0,end:0}}else a=null;for(ld={focusedElem:t,selectionRange:a},gc=!1,Gt=n;Gt!==null;)if(n=Gt,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Gt=t;else for(;Gt!==null;){switch(n=Gt,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)h=t[a],h.ref.impl=h.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,h=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var de=Ks(a.type,h);t=o.getSnapshotBeforeUpdate(de,f),o.__reactInternalSnapshotBeforeUpdate=t}catch(be){it(a,a.return,be)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)hd(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":hd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,Gt=t;break}Gt=n.return}}function ty(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:nr(t,a),o&4&&tl(5,a);break;case 1:if(nr(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(v){it(a,a.return,v)}else{var h=Ks(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(h,n,t.__reactInternalSnapshotBeforeUpdate)}catch(v){it(a,a.return,v)}}o&64&&Xg(a),o&512&&nl(a,a.return);break;case 3:if(nr(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{zp(t,n)}catch(v){it(a,a.return,v)}}break;case 27:n===null&&o&4&&$g(a);case 26:case 5:nr(t,a),n===null&&o&4&&Zg(a),o&512&&nl(a,a.return);break;case 12:nr(t,a);break;case 31:nr(t,a),o&4&&ry(t,a);break;case 13:nr(t,a),o&4&&sy(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=TT.bind(null,a),BT(t,a))));break;case 22:if(o=a.memoizedState!==null||er,!o){n=n!==null&&n.memoizedState!==null||xt,h=er;var f=xt;er=o,(xt=n)&&!f?ir(t,a,(a.subtreeFlags&8772)!==0):nr(t,a),er=h,xt=f}break;case 30:break;default:nr(t,a)}}function ny(t){var n=t.alternate;n!==null&&(t.alternate=null,ny(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&ws(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var mt=null,Sn=!1;function tr(t,n,a){for(a=a.child;a!==null;)iy(t,n,a),a=a.sibling}function iy(t,n,a){if(Bt&&typeof Bt.onCommitFiberUnmount=="function")try{Bt.onCommitFiberUnmount(fi,a)}catch{}switch(a.tag){case 26:xt||bi(a,n),tr(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:xt||bi(a,n);var o=mt,h=Sn;Wr(a.type)&&(mt=a.stateNode,Sn=!1),tr(t,n,a),hl(a.stateNode),mt=o,Sn=h;break;case 5:xt||bi(a,n);case 6:if(o=mt,h=Sn,mt=null,tr(t,n,a),mt=o,Sn=h,mt!==null)if(Sn)try{(mt.nodeType===9?mt.body:mt.nodeName==="HTML"?mt.ownerDocument.body:mt).removeChild(a.stateNode)}catch(f){it(a,n,f)}else try{mt.removeChild(a.stateNode)}catch(f){it(a,n,f)}break;case 18:mt!==null&&(Sn?(t=mt,Xy(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Ka(t)):Xy(mt,a.stateNode));break;case 4:o=mt,h=Sn,mt=a.stateNode.containerInfo,Sn=!0,tr(t,n,a),mt=o,Sn=h;break;case 0:case 11:case 14:case 15:Hr(2,a,n),xt||Hr(4,a,n),tr(t,n,a);break;case 1:xt||(bi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Wg(a,n,o)),tr(t,n,a);break;case 21:tr(t,n,a);break;case 22:xt=(o=xt)||a.memoizedState!==null,tr(t,n,a),xt=o;break;default:tr(t,n,a)}}function ry(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Ka(t)}catch(a){it(n,n.return,a)}}}function sy(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ka(t)}catch(a){it(n,n.return,a)}}function dT(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new ey),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new ey),n;default:throw Error(s(435,t.tag))}}function Wu(t,n){var a=dT(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var h=bT.bind(null,t,o);o.then(h,h)}})}function An(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var h=a[o],f=t,v=n,T=v;e:for(;T!==null;){switch(T.tag){case 27:if(Wr(T.type)){mt=T.stateNode,Sn=!1;break e}break;case 5:mt=T.stateNode,Sn=!1;break e;case 3:case 4:mt=T.stateNode.containerInfo,Sn=!0;break e}T=T.return}if(mt===null)throw Error(s(160));iy(f,v,h),mt=null,Sn=!1,f=h.alternate,f!==null&&(f.return=null),h.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)ay(n,t),n=n.sibling}var si=null;function ay(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:An(n,t),wn(t),o&4&&(Hr(3,t,t.return),tl(3,t),Hr(5,t,t.return));break;case 1:An(n,t),wn(t),o&512&&(xt||a===null||bi(a,a.return)),o&64&&er&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var h=si;if(An(n,t),wn(t),o&512&&(xt||a===null||bi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,h=h.ownerDocument||h;t:switch(o){case"title":f=h.getElementsByTagName("title")[0],(!f||f[Pi]||f[yt]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=h.createElement(o),h.head.insertBefore(f,h.querySelector("head > title"))),en(f,o,a),f[yt]=t,bt(f),o=f;break e;case"link":var v=a1("link","href",h).get(o+(a.href||""));if(v){for(var T=0;T<v.length;T++)if(f=v[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(T,1);break t}}f=h.createElement(o),en(f,o,a),h.head.appendChild(f);break;case"meta":if(v=a1("meta","content",h).get(o+(a.content||""))){for(T=0;T<v.length;T++)if(f=v[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(T,1);break t}}f=h.createElement(o),en(f,o,a),h.head.appendChild(f);break;default:throw Error(s(468,o))}f[yt]=t,bt(f),o=f}t.stateNode=o}else o1(h,t.type,t.stateNode);else t.stateNode=s1(h,o,t.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?o1(h,t.type,t.stateNode):s1(h,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Uf(t,t.memoizedProps,a.memoizedProps)}break;case 27:An(n,t),wn(t),o&512&&(xt||a===null||bi(a,a.return)),a!==null&&o&4&&Uf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(An(n,t),wn(t),o&512&&(xt||a===null||bi(a,a.return)),t.flags&32){h=t.stateNode;try{qn(h,"")}catch(de){it(t,t.return,de)}}o&4&&t.stateNode!=null&&(h=t.memoizedProps,Uf(t,h,a!==null?a.memoizedProps:h)),o&1024&&(jf=!0);break;case 6:if(An(n,t),wn(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(de){it(t,t.return,de)}}break;case 3:if(fc=null,h=si,si=cc(n.containerInfo),An(n,t),si=h,wn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Ka(n.containerInfo)}catch(de){it(t,t.return,de)}jf&&(jf=!1,oy(t));break;case 4:o=si,si=cc(t.stateNode.containerInfo),An(n,t),wn(t),si=o;break;case 12:An(n,t),wn(t);break;case 31:An(n,t),wn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Wu(t,o)));break;case 13:An(n,t),wn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ju=Lt()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Wu(t,o)));break;case 22:h=t.memoizedState!==null;var D=a!==null&&a.memoizedState!==null,j=er,Y=xt;if(er=j||h,xt=Y||D,An(n,t),xt=Y,er=j,wn(t),o&8192)e:for(n=t.stateNode,n._visibility=h?n._visibility&-2:n._visibility|1,h&&(a===null||D||er||xt||Ys(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){D=a=n;try{if(f=D.stateNode,h)v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{T=D.stateNode;var $=D.memoizedProps.style,B=$!=null&&$.hasOwnProperty("display")?$.display:null;T.style.display=B==null||typeof B=="boolean"?"":(""+B).trim()}}catch(de){it(D,D.return,de)}}}else if(n.tag===6){if(a===null){D=n;try{D.stateNode.nodeValue=h?"":D.memoizedProps}catch(de){it(D,D.return,de)}}}else if(n.tag===18){if(a===null){D=n;try{var F=D.stateNode;h?Wy(F,!0):Wy(D.stateNode,!1)}catch(de){it(D,D.return,de)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Wu(t,a))));break;case 19:An(n,t),wn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Wu(t,o)));break;case 30:break;case 21:break;default:An(n,t),wn(t)}}function wn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(Jg(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var h=a.stateNode,f=Pf(t);Xu(t,f,h);break;case 5:var v=a.stateNode;a.flags&32&&(qn(v,""),a.flags&=-33);var T=Pf(t);Xu(t,T,v);break;case 3:case 4:var D=a.stateNode.containerInfo,j=Pf(t);zf(t,j,D);break;default:throw Error(s(161))}}catch(Y){it(t,t.return,Y)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function oy(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;oy(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function nr(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)ty(t,n.alternate,n),n=n.sibling}function Ys(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Hr(4,n,n.return),Ys(n);break;case 1:bi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Wg(n,n.return,a),Ys(n);break;case 27:hl(n.stateNode);case 26:case 5:bi(n,n.return),Ys(n);break;case 22:n.memoizedState===null&&Ys(n);break;case 30:Ys(n);break;default:Ys(n)}t=t.sibling}}function ir(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,h=t,f=n,v=f.flags;switch(f.tag){case 0:case 11:case 15:ir(h,f,a),tl(4,f);break;case 1:if(ir(h,f,a),o=f,h=o.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(j){it(o,o.return,j)}if(o=f,h=o.updateQueue,h!==null){var T=o.stateNode;try{var D=h.shared.hiddenCallbacks;if(D!==null)for(h.shared.hiddenCallbacks=null,h=0;h<D.length;h++)Pp(D[h],T)}catch(j){it(o,o.return,j)}}a&&v&64&&Xg(f),nl(f,f.return);break;case 27:$g(f);case 26:case 5:ir(h,f,a),a&&o===null&&v&4&&Zg(f),nl(f,f.return);break;case 12:ir(h,f,a);break;case 31:ir(h,f,a),a&&v&4&&ry(h,f);break;case 13:ir(h,f,a),a&&v&4&&sy(h,f);break;case 22:f.memoizedState===null&&ir(h,f,a),nl(f,f.return);break;case 30:break;default:ir(h,f,a)}n=n.sibling}}function Bf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&qo(a))}function qf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&qo(t))}function ai(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)ly(t,n,a,o),n=n.sibling}function ly(t,n,a,o){var h=n.flags;switch(n.tag){case 0:case 11:case 15:ai(t,n,a,o),h&2048&&tl(9,n);break;case 1:ai(t,n,a,o);break;case 3:ai(t,n,a,o),h&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&qo(t)));break;case 12:if(h&2048){ai(t,n,a,o),t=n.stateNode;try{var f=n.memoizedProps,v=f.id,T=f.onPostCommit;typeof T=="function"&&T(v,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(D){it(n,n.return,D)}}else ai(t,n,a,o);break;case 31:ai(t,n,a,o);break;case 13:ai(t,n,a,o);break;case 23:break;case 22:f=n.stateNode,v=n.alternate,n.memoizedState!==null?f._visibility&2?ai(t,n,a,o):il(t,n):f._visibility&2?ai(t,n,a,o):(f._visibility|=2,La(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),h&2048&&Bf(v,n);break;case 24:ai(t,n,a,o),h&2048&&qf(n.alternate,n);break;default:ai(t,n,a,o)}}function La(t,n,a,o,h){for(h=h&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,v=n,T=a,D=o,j=v.flags;switch(v.tag){case 0:case 11:case 15:La(f,v,T,D,h),tl(8,v);break;case 23:break;case 22:var Y=v.stateNode;v.memoizedState!==null?Y._visibility&2?La(f,v,T,D,h):il(f,v):(Y._visibility|=2,La(f,v,T,D,h)),h&&j&2048&&Bf(v.alternate,v);break;case 24:La(f,v,T,D,h),h&&j&2048&&qf(v.alternate,v);break;default:La(f,v,T,D,h)}n=n.sibling}}function il(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,h=o.flags;switch(o.tag){case 22:il(a,o),h&2048&&Bf(o.alternate,o);break;case 24:il(a,o),h&2048&&qf(o.alternate,o);break;default:il(a,o)}n=n.sibling}}var rl=8192;function Ua(t,n,a){if(t.subtreeFlags&rl)for(t=t.child;t!==null;)uy(t,n,a),t=t.sibling}function uy(t,n,a){switch(t.tag){case 26:Ua(t,n,a),t.flags&rl&&t.memoizedState!==null&&$T(a,si,t.memoizedState,t.memoizedProps);break;case 5:Ua(t,n,a);break;case 3:case 4:var o=si;si=cc(t.stateNode.containerInfo),Ua(t,n,a),si=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=rl,rl=16777216,Ua(t,n,a),rl=o):Ua(t,n,a));break;default:Ua(t,n,a)}}function cy(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function sl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Gt=o,fy(o,t)}cy(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)hy(t),t=t.sibling}function hy(t){switch(t.tag){case 0:case 11:case 15:sl(t),t.flags&2048&&Hr(9,t,t.return);break;case 3:sl(t);break;case 12:sl(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Zu(t)):sl(t);break;default:sl(t)}}function Zu(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Gt=o,fy(o,t)}cy(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Hr(8,n,n.return),Zu(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Zu(n));break;default:Zu(n)}t=t.sibling}}function fy(t,n){for(;Gt!==null;){var a=Gt;switch(a.tag){case 0:case 11:case 15:Hr(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:qo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Gt=o;else e:for(a=t;Gt!==null;){o=Gt;var h=o.sibling,f=o.return;if(ny(o),o===a){Gt=null;break e}if(h!==null){h.return=f,Gt=h;break e}Gt=f}}}var mT={getCacheForType:function(t){var n=Jt(Dt),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Jt(Dt).controller.signal}},pT=typeof WeakMap=="function"?WeakMap:Map,Je=0,lt=null,Ue=null,ze=0,nt=0,Un=null,Fr=!1,Pa=!1,Hf=!1,rr=0,Et=0,Gr=0,Xs=0,Ff=0,Pn=0,za=0,al=null,Rn=null,Gf=!1,Ju=0,dy=0,$u=1/0,ec=null,Qr=null,Ut=0,Kr=null,ja=null,sr=0,Qf=0,Kf=null,my=null,ol=0,Yf=null;function zn(){return(Je&2)!==0&&ze!==0?ze&-ze:q.T!==null?ed():Ui()}function py(){if(Pn===0)if((ze&536870912)===0||Fe){var t=Le;Le<<=1,(Le&3932160)===0&&(Le=262144),Pn=t}else Pn=536870912;return t=Vn.current,t!==null&&(t.flags|=32),Pn}function Cn(t,n,a){(t===lt&&(nt===2||nt===9)||t.cancelPendingCommit!==null)&&(Ba(t,0),Yr(t,ze,Pn,!1)),yr(t,a),((Je&2)===0||t!==lt)&&(t===lt&&((Je&2)===0&&(Xs|=a),Et===4&&Yr(t,ze,Pn,!1)),Si(t))}function gy(t,n,a){if((Je&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Ct(t,n),h=o?vT(t,n):Wf(t,n,!0),f=o;do{if(h===0){Pa&&!o&&Yr(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!gT(a)){h=Wf(t,n,!1),f=!1;continue}if(h===2){if(f=n,t.errorRecoveryDisabledLanes&f)var v=0;else v=t.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;e:{var T=t;h=al;var D=T.current.memoizedState.isDehydrated;if(D&&(Ba(T,v).flags|=256),v=Wf(T,v,!1),v!==2){if(Hf&&!D){T.errorRecoveryDisabledLanes|=f,Xs|=f,h=4;break e}f=Rn,Rn=h,f!==null&&(Rn===null?Rn=f:Rn.push.apply(Rn,f))}h=v}if(f=!1,h!==2)continue}}if(h===1){Ba(t,0),Yr(t,n,0,!0);break}e:{switch(o=t,f=h,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Yr(o,n,Pn,!Fr);break e;case 2:Rn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(h=Ju+300-Lt(),10<h)){if(Yr(o,n,Pn,!Fr),Ke(o,0,!0)!==0)break e;sr=n,o.timeoutHandle=Ky(yy.bind(null,o,a,Rn,ec,Gf,n,Pn,Xs,za,Fr,f,"Throttled",-0,0),h);break e}yy(o,a,Rn,ec,Gf,n,Pn,Xs,za,Fr,f,null,-0,0)}}break}while(!0);Si(t)}function yy(t,n,a,o,h,f,v,T,D,j,Y,$,B,F){if(t.timeoutHandle=-1,$=n.subtreeFlags,$&8192||($&16785408)===16785408){$={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:qt},uy(n,f,$);var de=(f&62914560)===f?Ju-Lt():(f&4194048)===f?dy-Lt():0;if(de=eb($,de),de!==null){sr=f,t.cancelPendingCommit=de(wy.bind(null,t,n,f,a,o,h,v,T,D,Y,$,null,B,F)),Yr(t,f,v,!j);return}}wy(t,n,f,a,o,h,v,T,D)}function gT(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var h=a[o],f=h.getSnapshot;h=h.value;try{if(!Mn(f(),h))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Yr(t,n,a,o){n&=~Ff,n&=~Xs,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var h=n;0<h;){var f=31-Yt(h),v=1<<f;o[f]=-1,h&=~v}a!==0&&To(t,a,n)}function tc(){return(Je&6)===0?(ll(0),!1):!0}function Xf(){if(Ue!==null){if(nt===0)var t=Ue.return;else t=Ue,Yi=js=null,hf(t),Oa=null,Fo=0,t=Ue;for(;t!==null;)Yg(t.alternate,t),t=t.return;Ue=null}}function Ba(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,LT(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),sr=0,Xf(),lt=t,Ue=a=Qi(t.current,null),ze=n,nt=0,Un=null,Fr=!1,Pa=Ct(t,n),Hf=!1,za=Pn=Ff=Xs=Gr=Et=0,Rn=al=null,Gf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var h=31-Yt(o),f=1<<h;n|=t[h],o&=~f}return rr=n,bu(),a}function vy(t,n){Ne=null,q.H=Jo,n===Na||n===Nu?(n=kp(),nt=3):n===Jh?(n=kp(),nt=4):nt=n===Cf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Un=n,Ue===null&&(Et=1,Fu(t,Fn(n,t.current)))}function _y(){var t=Vn.current;return t===null?!0:(ze&4194048)===ze?Yn===null:(ze&62914560)===ze||(ze&536870912)!==0?t===Yn:!1}function Ey(){var t=q.H;return q.H=Jo,t===null?Jo:t}function Ty(){var t=q.A;return q.A=mT,t}function nc(){Et=4,Fr||(ze&4194048)!==ze&&Vn.current!==null||(Pa=!0),(Gr&134217727)===0&&(Xs&134217727)===0||lt===null||Yr(lt,ze,Pn,!1)}function Wf(t,n,a){var o=Je;Je|=2;var h=Ey(),f=Ty();(lt!==t||ze!==n)&&(ec=null,Ba(t,n)),n=!1;var v=Et;e:do try{if(nt!==0&&Ue!==null){var T=Ue,D=Un;switch(nt){case 8:Xf(),v=6;break e;case 3:case 2:case 9:case 6:Vn.current===null&&(n=!0);var j=nt;if(nt=0,Un=null,qa(t,T,D,j),a&&Pa){v=0;break e}break;default:j=nt,nt=0,Un=null,qa(t,T,D,j)}}yT(),v=Et;break}catch(Y){vy(t,Y)}while(!0);return n&&t.shellSuspendCounter++,Yi=js=null,Je=o,q.H=h,q.A=f,Ue===null&&(lt=null,ze=0,bu()),v}function yT(){for(;Ue!==null;)by(Ue)}function vT(t,n){var a=Je;Je|=2;var o=Ey(),h=Ty();lt!==t||ze!==n?(ec=null,$u=Lt()+500,Ba(t,n)):Pa=Ct(t,n);e:do try{if(nt!==0&&Ue!==null){n=Ue;var f=Un;t:switch(nt){case 1:nt=0,Un=null,qa(t,n,f,1);break;case 2:case 9:if(xp(f)){nt=0,Un=null,Sy(n);break}n=function(){nt!==2&&nt!==9||lt!==t||(nt=7),Si(t)},f.then(n,n);break e;case 3:nt=7;break e;case 4:nt=5;break e;case 7:xp(f)?(nt=0,Un=null,Sy(n)):(nt=0,Un=null,qa(t,n,f,7));break;case 5:var v=null;switch(Ue.tag){case 26:v=Ue.memoizedState;case 5:case 27:var T=Ue;if(v?l1(v):T.stateNode.complete){nt=0,Un=null;var D=T.sibling;if(D!==null)Ue=D;else{var j=T.return;j!==null?(Ue=j,ic(j)):Ue=null}break t}}nt=0,Un=null,qa(t,n,f,5);break;case 6:nt=0,Un=null,qa(t,n,f,6);break;case 8:Xf(),Et=6;break e;default:throw Error(s(462))}}_T();break}catch(Y){vy(t,Y)}while(!0);return Yi=js=null,q.H=o,q.A=h,Je=a,Ue!==null?0:(lt=null,ze=0,bu(),Et)}function _T(){for(;Ue!==null&&!_o();)by(Ue)}function by(t){var n=Qg(t.alternate,t,rr);t.memoizedProps=t.pendingProps,n===null?ic(t):Ue=n}function Sy(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=jg(a,n,n.pendingProps,n.type,void 0,ze);break;case 11:n=jg(a,n,n.pendingProps,n.type.render,n.ref,ze);break;case 5:hf(n);default:Yg(a,n),n=Ue=Tp(n,rr),n=Qg(a,n,rr)}t.memoizedProps=t.pendingProps,n===null?ic(t):Ue=n}function qa(t,n,a,o){Yi=js=null,hf(n),Oa=null,Fo=0;var h=n.return;try{if(oT(t,h,n,a,ze)){Et=1,Fu(t,Fn(a,t.current)),Ue=null;return}}catch(f){if(h!==null)throw Ue=h,f;Et=1,Fu(t,Fn(a,t.current)),Ue=null;return}n.flags&32768?(Fe||o===1?t=!0:Pa||(ze&536870912)!==0?t=!1:(Fr=t=!0,(o===2||o===9||o===3||o===6)&&(o=Vn.current,o!==null&&o.tag===13&&(o.flags|=16384))),Ay(n,t)):ic(n)}function ic(t){var n=t;do{if((n.flags&32768)!==0){Ay(n,Fr);return}t=n.return;var a=cT(n.alternate,n,rr);if(a!==null){Ue=a;return}if(n=n.sibling,n!==null){Ue=n;return}Ue=n=t}while(n!==null);Et===0&&(Et=5)}function Ay(t,n){do{var a=hT(t.alternate,t);if(a!==null){a.flags&=32767,Ue=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){Ue=t;return}Ue=t=a}while(t!==null);Et=6,Ue=null}function wy(t,n,a,o,h,f,v,T,D){t.cancelPendingCommit=null;do rc();while(Ut!==0);if((Je&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=Uh,Xt(t,a,f,v,T,D),t===lt&&(Ue=lt=null,ze=0),ja=n,Kr=t,sr=a,Qf=f,Kf=h,my=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,ST(ei,function(){return Ny(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=q.T,q.T=null,h=ae.p,ae.p=2,v=Je,Je|=4;try{fT(t,n,a)}finally{Je=v,ae.p=h,q.T=o}}Ut=1,Ry(),Cy(),Iy()}}function Ry(){if(Ut===1){Ut=0;var t=Kr,n=ja,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=q.T,q.T=null;var o=ae.p;ae.p=2;var h=Je;Je|=4;try{ay(n,t);var f=ld,v=fp(t.containerInfo),T=f.focusedElem,D=f.selectionRange;if(v!==T&&T&&T.ownerDocument&&hp(T.ownerDocument.documentElement,T)){if(D!==null&&xh(T)){var j=D.start,Y=D.end;if(Y===void 0&&(Y=j),"selectionStart"in T)T.selectionStart=j,T.selectionEnd=Math.min(Y,T.value.length);else{var $=T.ownerDocument||document,B=$&&$.defaultView||window;if(B.getSelection){var F=B.getSelection(),de=T.textContent.length,be=Math.min(D.start,de),ot=D.end===void 0?be:Math.min(D.end,de);!F.extend&&be>ot&&(v=ot,ot=be,be=v);var L=cp(T,be),x=cp(T,ot);if(L&&x&&(F.rangeCount!==1||F.anchorNode!==L.node||F.anchorOffset!==L.offset||F.focusNode!==x.node||F.focusOffset!==x.offset)){var z=$.createRange();z.setStart(L.node,L.offset),F.removeAllRanges(),be>ot?(F.addRange(z),F.extend(x.node,x.offset)):(z.setEnd(x.node,x.offset),F.addRange(z))}}}}for($=[],F=T;F=F.parentNode;)F.nodeType===1&&$.push({element:F,left:F.scrollLeft,top:F.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<$.length;T++){var Z=$[T];Z.element.scrollLeft=Z.left,Z.element.scrollTop=Z.top}}gc=!!od,ld=od=null}finally{Je=h,ae.p=o,q.T=a}}t.current=n,Ut=2}}function Cy(){if(Ut===2){Ut=0;var t=Kr,n=ja,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=q.T,q.T=null;var o=ae.p;ae.p=2;var h=Je;Je|=4;try{ty(t,n.alternate,n)}finally{Je=h,ae.p=o,q.T=a}}Ut=3}}function Iy(){if(Ut===4||Ut===3){Ut=0,Ss();var t=Kr,n=ja,a=sr,o=my;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Ut=5:(Ut=0,ja=Kr=null,Dy(t,t.pendingLanes));var h=t.pendingLanes;if(h===0&&(Qr=null),So(a),n=n.stateNode,Bt&&typeof Bt.onCommitFiberRoot=="function")try{Bt.onCommitFiberRoot(fi,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=q.T,h=ae.p,ae.p=2,q.T=null;try{for(var f=t.onRecoverableError,v=0;v<o.length;v++){var T=o[v];f(T.value,{componentStack:T.stack})}}finally{q.T=n,ae.p=h}}(sr&3)!==0&&rc(),Si(t),h=t.pendingLanes,(a&261930)!==0&&(h&42)!==0?t===Yf?ol++:(ol=0,Yf=t):ol=0,ll(0)}}function Dy(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,qo(n)))}function rc(){return Ry(),Cy(),Iy(),Ny()}function Ny(){if(Ut!==5)return!1;var t=Kr,n=Qf;Qf=0;var a=So(sr),o=q.T,h=ae.p;try{ae.p=32>a?32:a,q.T=null,a=Kf,Kf=null;var f=Kr,v=sr;if(Ut=0,ja=Kr=null,sr=0,(Je&6)!==0)throw Error(s(331));var T=Je;if(Je|=4,hy(f.current),ly(f,f.current,v,a),Je=T,ll(0,!1),Bt&&typeof Bt.onPostCommitFiberRoot=="function")try{Bt.onPostCommitFiberRoot(fi,f)}catch{}return!0}finally{ae.p=h,q.T=o,Dy(t,n)}}function Oy(t,n,a){n=Fn(a,n),n=Rf(t.stateNode,n,2),t=jr(t,n,2),t!==null&&(yr(t,2),Si(t))}function it(t,n,a){if(t.tag===3)Oy(t,t,a);else for(;n!==null;){if(n.tag===3){Oy(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Qr===null||!Qr.has(o))){t=Fn(a,t),a=xg(2),o=jr(n,a,2),o!==null&&(Mg(a,o,n,t),yr(o,2),Si(o));break}}n=n.return}}function Zf(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new pT;var h=new Set;o.set(n,h)}else h=o.get(n),h===void 0&&(h=new Set,o.set(n,h));h.has(a)||(Hf=!0,h.add(a),t=ET.bind(null,t,n,a),n.then(t,t))}function ET(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,lt===t&&(ze&a)===a&&(Et===4||Et===3&&(ze&62914560)===ze&&300>Lt()-Ju?(Je&2)===0&&Ba(t,0):Ff|=a,za===ze&&(za=0)),Si(t)}function xy(t,n){n===0&&(n=Nn()),t=Us(t,n),t!==null&&(yr(t,n),Si(t))}function TT(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),xy(t,a)}function bT(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,h=t.memoizedState;h!==null&&(a=h.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),xy(t,a)}function ST(t,n){return $n(t,n)}var sc=null,Ha=null,Jf=!1,ac=!1,$f=!1,Xr=0;function Si(t){t!==Ha&&t.next===null&&(Ha===null?sc=Ha=t:Ha=Ha.next=t),ac=!0,Jf||(Jf=!0,wT())}function ll(t,n){if(!$f&&ac){$f=!0;do for(var a=!1,o=sc;o!==null;){if(t!==0){var h=o.pendingLanes;if(h===0)var f=0;else{var v=o.suspendedLanes,T=o.pingedLanes;f=(1<<31-Yt(42|t)+1)-1,f&=h&~(v&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Ly(o,f))}else f=ze,f=Ke(o,o===lt?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Ct(o,f)||(a=!0,Ly(o,f));o=o.next}while(a);$f=!1}}function AT(){My()}function My(){ac=Jf=!1;var t=0;Xr!==0&&VT()&&(t=Xr);for(var n=Lt(),a=null,o=sc;o!==null;){var h=o.next,f=ky(o,n);f===0?(o.next=null,a===null?sc=h:a.next=h,h===null&&(Ha=a)):(a=o,(t!==0||(f&3)!==0)&&(ac=!0)),o=h}Ut!==0&&Ut!==5||ll(t),Xr!==0&&(Xr=0)}function ky(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,h=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var v=31-Yt(f),T=1<<v,D=h[v];D===-1?((T&a)===0||(T&o)!==0)&&(h[v]=dn(T,n)):D<=n&&(t.expiredLanes|=T),f&=~T}if(n=lt,a=ze,a=Ke(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(nt===2||nt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&gr(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ct(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&gr(o),So(a)){case 2:case 8:a=Rt;break;case 32:a=ei;break;case 268435456:a=As;break;default:a=ei}return o=Vy.bind(null,t),a=$n(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&gr(o),t.callbackPriority=2,t.callbackNode=null,2}function Vy(t,n){if(Ut!==0&&Ut!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(rc()&&t.callbackNode!==a)return null;var o=ze;return o=Ke(t,t===lt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(gy(t,o,n),ky(t,Lt()),t.callbackNode!=null&&t.callbackNode===a?Vy.bind(null,t):null)}function Ly(t,n){if(rc())return null;gy(t,n,!0)}function wT(){UT(function(){(Je&6)!==0?$n(Tt,AT):My()})}function ed(){if(Xr===0){var t=Ia;t===0&&(t=Re,Re<<=1,(Re&261888)===0&&(Re=256)),Xr=t}return Xr}function Uy(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:yi(""+t)}function Py(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function RT(t,n,a,o,h){if(n==="submit"&&a&&a.stateNode===h){var f=Uy((h[Wt]||null).action),v=o.submitter;v&&(n=(n=v[Wt]||null)?Uy(n.formAction):v.getAttribute("formAction"),n!==null&&(f=n,v=null));var T=new Ns("action","action",null,o,h);t.push({event:T,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Xr!==0){var D=v?Py(h,v):new FormData(h);Ef(a,{pending:!0,data:D,method:h.method,action:f},null,D)}}else typeof f=="function"&&(T.preventDefault(),D=v?Py(h,v):new FormData(h),Ef(a,{pending:!0,data:D,method:h.method,action:f},f,D))},currentTarget:h}]})}}for(var td=0;td<Lh.length;td++){var nd=Lh[td],CT=nd.toLowerCase(),IT=nd[0].toUpperCase()+nd.slice(1);ri(CT,"on"+IT)}ri(pp,"onAnimationEnd"),ri(gp,"onAnimationIteration"),ri(yp,"onAnimationStart"),ri("dblclick","onDoubleClick"),ri("focusin","onFocus"),ri("focusout","onBlur"),ri(FE,"onTransitionRun"),ri(GE,"onTransitionStart"),ri(QE,"onTransitionCancel"),ri(vp,"onTransitionEnd"),gi("onMouseEnter",["mouseout","mouseover"]),gi("onMouseLeave",["mouseout","mouseover"]),gi("onPointerEnter",["pointerout","pointerover"]),gi("onPointerLeave",["pointerout","pointerover"]),mn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),mn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),mn("onBeforeInput",["compositionend","keypress","textInput","paste"]),mn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),mn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),mn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ul="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),DT=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ul));function zy(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],h=o.event;o=o.listeners;e:{var f=void 0;if(n)for(var v=o.length-1;0<=v;v--){var T=o[v],D=T.instance,j=T.currentTarget;if(T=T.listener,D!==f&&h.isPropagationStopped())break e;f=T,h.currentTarget=j;try{f(h)}catch(Y){Tu(Y)}h.currentTarget=null,f=D}else for(v=0;v<o.length;v++){if(T=o[v],D=T.instance,j=T.currentTarget,T=T.listener,D!==f&&h.isPropagationStopped())break e;f=T,h.currentTarget=j;try{f(h)}catch(Y){Tu(Y)}h.currentTarget=null,f=D}}}}function Pe(t,n){var a=n[Er];a===void 0&&(a=n[Er]=new Set);var o=t+"__bubble";a.has(o)||(jy(n,t,2,!1),a.add(o))}function id(t,n,a){var o=0;n&&(o|=4),jy(a,t,o,n)}var oc="_reactListening"+Math.random().toString(36).slice(2);function rd(t){if(!t[oc]){t[oc]=!0,ca.forEach(function(a){a!=="selectionchange"&&(DT.has(a)||id(a,!1,t),id(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[oc]||(n[oc]=!0,id("selectionchange",!1,n))}}function jy(t,n,a,o){switch(p1(n)){case 2:var h=ib;break;case 8:h=rb;break;default:h=_d}a=h.bind(null,n,a,t),h=void 0,!Oo||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(h=!0),o?h!==void 0?t.addEventListener(n,a,{capture:!0,passive:h}):t.addEventListener(n,a,!0):h!==void 0?t.addEventListener(n,a,{passive:h}):t.addEventListener(n,a,!1)}function sd(t,n,a,o,h){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var v=o.tag;if(v===3||v===4){var T=o.stateNode.containerInfo;if(T===h)break;if(v===4)for(v=o.return;v!==null;){var D=v.tag;if((D===3||D===4)&&v.stateNode.containerInfo===h)return;v=v.return}for(;T!==null;){if(v=zi(T),v===null)return;if(D=v.tag,D===5||D===6||D===26||D===27){o=f=v;continue e}T=T.parentNode}}o=o.return}su(function(){var j=f,Y=pa(a),$=[];e:{var B=_p.get(t);if(B!==void 0){var F=Ns,de=t;switch(t){case"keypress":if(Ds(a)===0)break e;case"keydown":case"keyup":F=mu;break;case"focusin":de="focus",F=Nr;break;case"focusout":de="blur",F=Nr;break;case"beforeblur":case"afterblur":F=Nr;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":F=ou;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":F=lu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":F=gu;break;case pp:case gp:case yp:F=va;break;case vp:F=_a;break;case"scroll":case"scrollend":F=au;break;case"wheel":F=vu;break;case"copy":case"cut":case"paste":F=cu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":F=Lo;break;case"toggle":case"beforetoggle":F=xr}var be=(n&4)!==0,ot=!be&&(t==="scroll"||t==="scrollend"),L=be?B!==null?B+"Capture":null:B;be=[];for(var x=j,z;x!==null;){var Z=x;if(z=Z.stateNode,Z=Z.tag,Z!==5&&Z!==26&&Z!==27||z===null||L===null||(Z=Tn(x,L),Z!=null&&be.push(cl(x,Z,z))),ot)break;x=x.return}0<be.length&&(B=new F(B,de,null,a,Y),$.push({event:B,listeners:be}))}}if((n&7)===0){e:{if(B=t==="mouseover"||t==="pointerover",F=t==="mouseout"||t==="pointerout",B&&a!==ma&&(de=a.relatedTarget||a.fromElement)&&(zi(de)||de[mi]))break e;if((F||B)&&(B=Y.window===Y?Y:(B=Y.ownerDocument)?B.defaultView||B.parentWindow:window,F?(de=a.relatedTarget||a.toElement,F=j,de=de?zi(de):null,de!==null&&(ot=u(de),be=de.tag,de!==ot||be!==5&&be!==27&&be!==6)&&(de=null)):(F=null,de=j),F!==de)){if(be=ou,Z="onMouseLeave",L="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(be=Lo,Z="onPointerLeave",L="onPointerEnter",x="pointer"),ot=F==null?B:Rs(F),z=de==null?B:Rs(de),B=new be(Z,x+"leave",F,a,Y),B.target=ot,B.relatedTarget=z,Z=null,zi(Y)===j&&(be=new be(L,x+"enter",de,a,Y),be.target=z,be.relatedTarget=ot,Z=be),ot=Z,F&&de)t:{for(be=NT,L=F,x=de,z=0,Z=L;Z;Z=be(Z))z++;Z=0;for(var ve=x;ve;ve=be(ve))Z++;for(;0<z-Z;)L=be(L),z--;for(;0<Z-z;)x=be(x),Z--;for(;z--;){if(L===x||x!==null&&L===x.alternate){be=L;break t}L=be(L),x=be(x)}be=null}else be=null;F!==null&&By($,B,F,be,!1),de!==null&&ot!==null&&By($,ot,de,be,!0)}}e:{if(B=j?Rs(j):window,F=B.nodeName&&B.nodeName.toLowerCase(),F==="select"||F==="input"&&B.type==="file")var We=rp;else if(bn(B))if(sp)We=BE;else{We=zE;var me=PE}else F=B.nodeName,!F||F.toLowerCase()!=="input"||B.type!=="checkbox"&&B.type!=="radio"?j&&Do(j.elementType)&&(We=rp):We=jE;if(We&&(We=We(t,j))){ks($,We,a,Y);break e}me&&me(t,B,j),t==="focusout"&&j&&B.type==="number"&&j.memoizedProps.value!=null&&da(B,"number",B.value)}switch(me=j?Rs(j):window,t){case"focusin":(bn(me)||me.contentEditable==="true")&&(Ea=me,Mh=j,zo=null);break;case"focusout":zo=Mh=Ea=null;break;case"mousedown":kh=!0;break;case"contextmenu":case"mouseup":case"dragend":kh=!1,dp($,a,Y);break;case"selectionchange":if(HE)break;case"keydown":case"keyup":dp($,a,Y)}var xe;if(m)e:{switch(t){case"compositionstart":var je="onCompositionStart";break e;case"compositionend":je="onCompositionEnd";break e;case"compositionupdate":je="onCompositionUpdate";break e}je=void 0}else ke?et(t,a)&&(je="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(je="onCompositionStart");je&&(P&&a.locale!=="ko"&&(ke||je!=="onCompositionStart"?je==="onCompositionEnd"&&ke&&(xe=Rr()):(xn=Y,ga="value"in xn?xn.value:xn.textContent,ke=!0)),me=lc(j,je),0<me.length&&(je=new Mo(je,t,null,a,Y),$.push({event:je,listeners:me}),xe?je.data=xe:(xe=It(a),xe!==null&&(je.data=xe)))),(xe=S?Ht(t,a):Ft(t,a))&&(je=lc(j,"onBeforeInput"),0<je.length&&(me=new Mo("onBeforeInput","beforeinput",null,a,Y),$.push({event:me,listeners:je}),me.data=xe)),RT($,t,j,a,Y)}zy($,n)})}function cl(t,n,a){return{instance:t,listener:n,currentTarget:a}}function lc(t,n){for(var a=n+"Capture",o=[];t!==null;){var h=t,f=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||f===null||(h=Tn(t,a),h!=null&&o.unshift(cl(t,h,f)),h=Tn(t,n),h!=null&&o.push(cl(t,h,f))),t.tag===3)return o;t=t.return}return[]}function NT(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function By(t,n,a,o,h){for(var f=n._reactName,v=[];a!==null&&a!==o;){var T=a,D=T.alternate,j=T.stateNode;if(T=T.tag,D!==null&&D===o)break;T!==5&&T!==26&&T!==27||j===null||(D=j,h?(j=Tn(a,f),j!=null&&v.unshift(cl(a,j,D))):h||(j=Tn(a,f),j!=null&&v.push(cl(a,j,D)))),a=a.return}v.length!==0&&t.push({event:n,listeners:v})}var OT=/\r\n?/g,xT=/\u0000|\uFFFD/g;function qy(t){return(typeof t=="string"?t:""+t).replace(OT,`
`).replace(xT,"")}function Hy(t,n){return n=qy(n),qy(t)===n}function at(t,n,a,o,h,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||qn(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&qn(t,""+o);break;case"className":Sr(t,"class",o);break;case"tabIndex":Sr(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Sr(t,a,o);break;case"style":iu(t,o,f);break;case"data":if(n!=="object"){Sr(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=yi(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&at(t,n,"name",h.name,h,null),at(t,n,"formEncType",h.formEncType,h,null),at(t,n,"formMethod",h.formMethod,h,null),at(t,n,"formTarget",h.formTarget,h,null)):(at(t,n,"encType",h.encType,h,null),at(t,n,"method",h.method,h,null),at(t,n,"target",h.target,h,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=yi(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=qt);break;case"onScroll":o!=null&&Pe("scroll",t);break;case"onScrollEnd":o!=null&&Pe("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(h.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=yi(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":Pe("beforetoggle",t),Pe("toggle",t),br(t,"popover",o);break;case"xlinkActuate":Bn(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Bn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Bn(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Bn(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Bn(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Bn(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Bn(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Bn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Bn(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":br(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Ch.get(a)||a,br(t,a,o))}}function ad(t,n,a,o,h,f){switch(a){case"style":iu(t,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(h.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof o=="string"?qn(t,o):(typeof o=="number"||typeof o=="bigint")&&qn(t,""+o);break;case"onScroll":o!=null&&Pe("scroll",t);break;case"onScrollEnd":o!=null&&Pe("scrollend",t);break;case"onClick":o!=null&&(t.onclick=qt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Tr.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(h=a.endsWith("Capture"),n=a.slice(2,h?a.length-7:void 0),f=t[Wt]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,h),typeof o=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,h);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):br(t,a,o)}}}function en(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Pe("error",t),Pe("load",t);var o=!1,h=!1,f;for(f in a)if(a.hasOwnProperty(f)){var v=a[f];if(v!=null)switch(f){case"src":o=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:at(t,n,f,v,a,null)}}h&&at(t,n,"srcSet",a.srcSet,a,null),o&&at(t,n,"src",a.src,a,null);return;case"input":Pe("invalid",t);var T=f=v=h=null,D=null,j=null;for(o in a)if(a.hasOwnProperty(o)){var Y=a[o];if(Y!=null)switch(o){case"name":h=Y;break;case"type":v=Y;break;case"checked":D=Y;break;case"defaultChecked":j=Y;break;case"value":f=Y;break;case"defaultValue":T=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(s(137,n));break;default:at(t,n,o,Y,a,null)}}Cs(t,f,T,D,j,v,h,!1);return;case"select":Pe("invalid",t),o=v=f=null;for(h in a)if(a.hasOwnProperty(h)&&(T=a[h],T!=null))switch(h){case"value":f=T;break;case"defaultValue":v=T;break;case"multiple":o=T;default:at(t,n,h,T,a,null)}n=f,a=v,t.multiple=!!o,n!=null?Xe(t,!!o,n,!1):a!=null&&Xe(t,!!o,a,!0);return;case"textarea":Pe("invalid",t),f=h=o=null;for(v in a)if(a.hasOwnProperty(v)&&(T=a[v],T!=null))switch(v){case"value":o=T;break;case"defaultValue":h=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:at(t,n,v,T,a,null)}wr(t,o,h,f);return;case"option":for(D in a)if(a.hasOwnProperty(D)&&(o=a[D],o!=null))switch(D){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:at(t,n,D,o,a,null)}return;case"dialog":Pe("beforetoggle",t),Pe("toggle",t),Pe("cancel",t),Pe("close",t);break;case"iframe":case"object":Pe("load",t);break;case"video":case"audio":for(o=0;o<ul.length;o++)Pe(ul[o],t);break;case"image":Pe("error",t),Pe("load",t);break;case"details":Pe("toggle",t);break;case"embed":case"source":case"link":Pe("error",t),Pe("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(j in a)if(a.hasOwnProperty(j)&&(o=a[j],o!=null))switch(j){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:at(t,n,j,o,a,null)}return;default:if(Do(n)){for(Y in a)a.hasOwnProperty(Y)&&(o=a[Y],o!==void 0&&ad(t,n,Y,o,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(o=a[T],o!=null&&at(t,n,T,o,a,null))}function MT(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,f=null,v=null,T=null,D=null,j=null,Y=null;for(F in a){var $=a[F];if(a.hasOwnProperty(F)&&$!=null)switch(F){case"checked":break;case"value":break;case"defaultValue":D=$;default:o.hasOwnProperty(F)||at(t,n,F,null,o,$)}}for(var B in o){var F=o[B];if($=a[B],o.hasOwnProperty(B)&&(F!=null||$!=null))switch(B){case"type":f=F;break;case"name":h=F;break;case"checked":j=F;break;case"defaultChecked":Y=F;break;case"value":v=F;break;case"defaultValue":T=F;break;case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(s(137,n));break;default:F!==$&&at(t,n,B,F,o,$)}}Ar(t,v,T,D,j,Y,f,h);return;case"select":F=v=T=B=null;for(f in a)if(D=a[f],a.hasOwnProperty(f)&&D!=null)switch(f){case"value":break;case"multiple":F=D;default:o.hasOwnProperty(f)||at(t,n,f,null,o,D)}for(h in o)if(f=o[h],D=a[h],o.hasOwnProperty(h)&&(f!=null||D!=null))switch(h){case"value":B=f;break;case"defaultValue":T=f;break;case"multiple":v=f;default:f!==D&&at(t,n,h,f,o,D)}n=T,a=v,o=F,B!=null?Xe(t,!!a,B,!1):!!o!=!!a&&(n!=null?Xe(t,!!a,n,!0):Xe(t,!!a,a?[]:"",!1));return;case"textarea":F=B=null;for(T in a)if(h=a[T],a.hasOwnProperty(T)&&h!=null&&!o.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:at(t,n,T,null,o,h)}for(v in o)if(h=o[v],f=a[v],o.hasOwnProperty(v)&&(h!=null||f!=null))switch(v){case"value":B=h;break;case"defaultValue":F=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(s(91));break;default:h!==f&&at(t,n,v,h,o,f)}Is(t,B,F);return;case"option":for(var de in a)if(B=a[de],a.hasOwnProperty(de)&&B!=null&&!o.hasOwnProperty(de))switch(de){case"selected":t.selected=!1;break;default:at(t,n,de,null,o,B)}for(D in o)if(B=o[D],F=a[D],o.hasOwnProperty(D)&&B!==F&&(B!=null||F!=null))switch(D){case"selected":t.selected=B&&typeof B!="function"&&typeof B!="symbol";break;default:at(t,n,D,B,o,F)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var be in a)B=a[be],a.hasOwnProperty(be)&&B!=null&&!o.hasOwnProperty(be)&&at(t,n,be,null,o,B);for(j in o)if(B=o[j],F=a[j],o.hasOwnProperty(j)&&B!==F&&(B!=null||F!=null))switch(j){case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(s(137,n));break;default:at(t,n,j,B,o,F)}return;default:if(Do(n)){for(var ot in a)B=a[ot],a.hasOwnProperty(ot)&&B!==void 0&&!o.hasOwnProperty(ot)&&ad(t,n,ot,void 0,o,B);for(Y in o)B=o[Y],F=a[Y],!o.hasOwnProperty(Y)||B===F||B===void 0&&F===void 0||ad(t,n,Y,B,o,F);return}}for(var L in a)B=a[L],a.hasOwnProperty(L)&&B!=null&&!o.hasOwnProperty(L)&&at(t,n,L,null,o,B);for($ in o)B=o[$],F=a[$],!o.hasOwnProperty($)||B===F||B==null&&F==null||at(t,n,$,B,o,F)}function Fy(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function kT(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var h=a[o],f=h.transferSize,v=h.initiatorType,T=h.duration;if(f&&T&&Fy(v)){for(v=0,T=h.responseEnd,o+=1;o<a.length;o++){var D=a[o],j=D.startTime;if(j>T)break;var Y=D.transferSize,$=D.initiatorType;Y&&Fy($)&&(D=D.responseEnd,v+=Y*(D<T?1:(T-j)/(D-j)))}if(--o,n+=8*(f+v)/(h.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var od=null,ld=null;function uc(t){return t.nodeType===9?t:t.ownerDocument}function Gy(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Qy(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function ud(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var cd=null;function VT(){var t=window.event;return t&&t.type==="popstate"?t===cd?!1:(cd=t,!0):(cd=null,!1)}var Ky=typeof setTimeout=="function"?setTimeout:void 0,LT=typeof clearTimeout=="function"?clearTimeout:void 0,Yy=typeof Promise=="function"?Promise:void 0,UT=typeof queueMicrotask=="function"?queueMicrotask:typeof Yy<"u"?function(t){return Yy.resolve(null).then(t).catch(PT)}:Ky;function PT(t){setTimeout(function(){throw t})}function Wr(t){return t==="head"}function Xy(t,n){var a=n,o=0;do{var h=a.nextSibling;if(t.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(h),Ka(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")hl(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,hl(a);for(var f=a.firstChild;f;){var v=f.nextSibling,T=f.nodeName;f[Pi]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=v}}else a==="body"&&hl(t.ownerDocument.body);a=h}while(a);Ka(n)}function Wy(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function hd(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":hd(a),ws(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function zT(t,n,a,o){for(;t.nodeType===1;){var h=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Pi])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==h.rel||t.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||t.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||t.getAttribute("title")!==(h.title==null?null:h.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(h.src==null?null:h.src)||t.getAttribute("type")!==(h.type==null?null:h.type)||t.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=h.name==null?null:""+h.name;if(h.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=Xn(t.nextSibling),t===null)break}return null}function jT(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Xn(t.nextSibling),t===null))return null;return t}function Zy(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Xn(t.nextSibling),t===null))return null;return t}function fd(t){return t.data==="$?"||t.data==="$~"}function dd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function BT(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function Xn(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var md=null;function Jy(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return Xn(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function $y(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function e1(t,n,a){switch(n=uc(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function hl(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);ws(t)}var Wn=new Map,t1=new Set;function cc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ar=ae.d;ae.d={f:qT,r:HT,D:FT,C:GT,L:QT,m:KT,X:XT,S:YT,M:WT};function qT(){var t=ar.f(),n=tc();return t||n}function HT(t){var n=ji(t);n!==null&&n.tag===5&&n.type==="form"?vg(n):ar.r(t)}var Fa=typeof document>"u"?null:document;function n1(t,n,a){var o=Fa;if(o&&typeof n=="string"&&n){var h=vt(n);h='link[rel="'+t+'"][href="'+h+'"]',typeof a=="string"&&(h+='[crossorigin="'+a+'"]'),t1.has(h)||(t1.add(h),t={rel:t,crossOrigin:a,href:n},o.querySelector(h)===null&&(n=o.createElement("link"),en(n,"link",t),bt(n),o.head.appendChild(n)))}}function FT(t){ar.D(t),n1("dns-prefetch",t,null)}function GT(t,n){ar.C(t,n),n1("preconnect",t,n)}function QT(t,n,a){ar.L(t,n,a);var o=Fa;if(o&&t&&n){var h='link[rel="preload"][as="'+vt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(h+='[imagesrcset="'+vt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(h+='[imagesizes="'+vt(a.imageSizes)+'"]')):h+='[href="'+vt(t)+'"]';var f=h;switch(n){case"style":f=Ga(t);break;case"script":f=Qa(t)}Wn.has(f)||(t=b({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),Wn.set(f,t),o.querySelector(h)!==null||n==="style"&&o.querySelector(fl(f))||n==="script"&&o.querySelector(dl(f))||(n=o.createElement("link"),en(n,"link",t),bt(n),o.head.appendChild(n)))}}function KT(t,n){ar.m(t,n);var a=Fa;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",h='link[rel="modulepreload"][as="'+vt(o)+'"][href="'+vt(t)+'"]',f=h;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Qa(t)}if(!Wn.has(f)&&(t=b({rel:"modulepreload",href:t},n),Wn.set(f,t),a.querySelector(h)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(dl(f)))return}o=a.createElement("link"),en(o,"link",t),bt(o),a.head.appendChild(o)}}}function YT(t,n,a){ar.S(t,n,a);var o=Fa;if(o&&t){var h=ni(o).hoistableStyles,f=Ga(t);n=n||"default";var v=h.get(f);if(!v){var T={loading:0,preload:null};if(v=o.querySelector(fl(f)))T.loading=5;else{t=b({rel:"stylesheet",href:t,"data-precedence":n},a),(a=Wn.get(f))&&pd(t,a);var D=v=o.createElement("link");bt(D),en(D,"link",t),D._p=new Promise(function(j,Y){D.onload=j,D.onerror=Y}),D.addEventListener("load",function(){T.loading|=1}),D.addEventListener("error",function(){T.loading|=2}),T.loading|=4,hc(v,n,o)}v={type:"stylesheet",instance:v,count:1,state:T},h.set(f,v)}}}function XT(t,n){ar.X(t,n);var a=Fa;if(a&&t){var o=ni(a).hoistableScripts,h=Qa(t),f=o.get(h);f||(f=a.querySelector(dl(h)),f||(t=b({src:t,async:!0},n),(n=Wn.get(h))&&gd(t,n),f=a.createElement("script"),bt(f),en(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(h,f))}}function WT(t,n){ar.M(t,n);var a=Fa;if(a&&t){var o=ni(a).hoistableScripts,h=Qa(t),f=o.get(h);f||(f=a.querySelector(dl(h)),f||(t=b({src:t,async:!0,type:"module"},n),(n=Wn.get(h))&&gd(t,n),f=a.createElement("script"),bt(f),en(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(h,f))}}function i1(t,n,a,o){var h=(h=Oe.current)?cc(h):null;if(!h)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Ga(a.href),a=ni(h).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Ga(a.href);var f=ni(h).hoistableStyles,v=f.get(t);if(v||(h=h.ownerDocument||h,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,v),(f=h.querySelector(fl(t)))&&!f._p&&(v.instance=f,v.state.loading=5),Wn.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Wn.set(t,a),f||ZT(h,t,a,v.state))),n&&o===null)throw Error(s(528,""));return v}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Qa(a),a=ni(h).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Ga(t){return'href="'+vt(t)+'"'}function fl(t){return'link[rel="stylesheet"]['+t+"]"}function r1(t){return b({},t,{"data-precedence":t.precedence,precedence:null})}function ZT(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),en(n,"link",a),bt(n),t.head.appendChild(n))}function Qa(t){return'[src="'+vt(t)+'"]'}function dl(t){return"script[async]"+t}function s1(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+vt(a.href)+'"]');if(o)return n.instance=o,bt(o),o;var h=b({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),bt(o),en(o,"style",h),hc(o,a.precedence,t),n.instance=o;case"stylesheet":h=Ga(a.href);var f=t.querySelector(fl(h));if(f)return n.state.loading|=4,n.instance=f,bt(f),f;o=r1(a),(h=Wn.get(h))&&pd(o,h),f=(t.ownerDocument||t).createElement("link"),bt(f);var v=f;return v._p=new Promise(function(T,D){v.onload=T,v.onerror=D}),en(f,"link",o),n.state.loading|=4,hc(f,a.precedence,t),n.instance=f;case"script":return f=Qa(a.src),(h=t.querySelector(dl(f)))?(n.instance=h,bt(h),h):(o=a,(h=Wn.get(f))&&(o=b({},a),gd(o,h)),t=t.ownerDocument||t,h=t.createElement("script"),bt(h),en(h,"link",o),t.head.appendChild(h),n.instance=h);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,hc(o,a.precedence,t));return n.instance}function hc(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=o.length?o[o.length-1]:null,f=h,v=0;v<o.length;v++){var T=o[v];if(T.dataset.precedence===n)f=T;else if(f!==h)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function pd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function gd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var fc=null;function a1(t,n,a){if(fc===null){var o=new Map,h=fc=new Map;h.set(a,o)}else h=fc,o=h.get(a),o||(o=new Map,h.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),h=0;h<a.length;h++){var f=a[h];if(!(f[Pi]||f[yt]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(n)||"";v=t+v;var T=o.get(v);T?T.push(f):o.set(v,[f])}}return o}function o1(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function JT(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function l1(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function $T(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var h=Ga(o.href),f=n.querySelector(fl(h));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=dc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,bt(f);return}f=n.ownerDocument||n,o=r1(o),(h=Wn.get(h))&&pd(o,h),f=f.createElement("link"),bt(f);var v=f;v._p=new Promise(function(T,D){v.onload=T,v.onerror=D}),en(f,"link",o),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=dc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var yd=0;function eb(t,n){return t.stylesheets&&t.count===0&&pc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&pc(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&yd===0&&(yd=62500*kT());var h=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&pc(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>yd?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(h)}}:null}function dc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)pc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var mc=null;function pc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,mc=new Map,n.forEach(tb,t),mc=null,dc.call(t))}function tb(t,n){if(!(n.state.loading&4)){var a=mc.get(t);if(a)var o=a.get(null);else{a=new Map,mc.set(t,a);for(var h=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<h.length;f++){var v=h[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),o=v)}o&&a.set(null,o)}h=n.instance,v=h.getAttribute("data-precedence"),f=a.get(v)||o,f===o&&a.set(null,h),a.set(v,h),this.count++,o=dc.bind(this),h.addEventListener("load",o),h.addEventListener("error",o),f?f.parentNode.insertBefore(h,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(h,t.firstChild)),n.state.loading|=4}}var ml={$$typeof:te,Provider:null,Consumer:null,_currentValue:ye,_currentValue2:ye,_threadCount:0};function nb(t,n,a,o,h,f,v,T,D){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ti(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ti(0),this.hiddenUpdates=ti(null),this.identifierPrefix=o,this.onUncaughtError=h,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=D,this.incompleteTransitions=new Map}function u1(t,n,a,o,h,f,v,T,D,j,Y,$){return t=new nb(t,n,a,v,D,j,Y,$,T),n=1,f===!0&&(n|=24),f=kn(3,null,null,n),t.current=f,f.stateNode=t,n=Xh(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},$h(f),t}function c1(t){return t?(t=Sa,t):Sa}function h1(t,n,a,o,h,f){h=c1(h),o.context===null?o.context=h:o.pendingContext=h,o=zr(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=jr(t,o,n),a!==null&&(Cn(a,t,n),Qo(a,t,n))}function f1(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function vd(t,n){f1(t,n),(t=t.alternate)&&f1(t,n)}function d1(t){if(t.tag===13||t.tag===31){var n=Us(t,67108864);n!==null&&Cn(n,t,67108864),vd(t,67108864)}}function m1(t){if(t.tag===13||t.tag===31){var n=zn();n=bo(n);var a=Us(t,n);a!==null&&Cn(a,t,n),vd(t,n)}}var gc=!0;function ib(t,n,a,o){var h=q.T;q.T=null;var f=ae.p;try{ae.p=2,_d(t,n,a,o)}finally{ae.p=f,q.T=h}}function rb(t,n,a,o){var h=q.T;q.T=null;var f=ae.p;try{ae.p=8,_d(t,n,a,o)}finally{ae.p=f,q.T=h}}function _d(t,n,a,o){if(gc){var h=Ed(o);if(h===null)sd(t,n,o,yc,a),g1(t,o);else if(ab(h,t,n,a,o))o.stopPropagation();else if(g1(t,o),n&4&&-1<sb.indexOf(t)){for(;h!==null;){var f=ji(h);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=He(f.pendingLanes);if(v!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;v;){var D=1<<31-Yt(v);T.entanglements[1]|=D,v&=~D}Si(f),(Je&6)===0&&($u=Lt()+500,ll(0))}}break;case 31:case 13:T=Us(f,2),T!==null&&Cn(T,f,2),tc(),vd(f,2)}if(f=Ed(o),f===null&&sd(t,n,o,yc,a),f===h)break;h=f}h!==null&&o.stopPropagation()}else sd(t,n,o,null,a)}}function Ed(t){return t=pa(t),Td(t)}var yc=null;function Td(t){if(yc=null,t=zi(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=p(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return yc=t,null}function p1(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(la()){case Tt:return 2;case Rt:return 8;case ei:case ua:return 32;case As:return 268435456;default:return 32}default:return 32}}var bd=!1,Zr=null,Jr=null,$r=null,pl=new Map,gl=new Map,es=[],sb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function g1(t,n){switch(t){case"focusin":case"focusout":Zr=null;break;case"dragenter":case"dragleave":Jr=null;break;case"mouseover":case"mouseout":$r=null;break;case"pointerover":case"pointerout":pl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":gl.delete(n.pointerId)}}function yl(t,n,a,o,h,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[h]},n!==null&&(n=ji(n),n!==null&&d1(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,h!==null&&n.indexOf(h)===-1&&n.push(h),t)}function ab(t,n,a,o,h){switch(n){case"focusin":return Zr=yl(Zr,t,n,a,o,h),!0;case"dragenter":return Jr=yl(Jr,t,n,a,o,h),!0;case"mouseover":return $r=yl($r,t,n,a,o,h),!0;case"pointerover":var f=h.pointerId;return pl.set(f,yl(pl.get(f)||null,t,n,a,o,h)),!0;case"gotpointercapture":return f=h.pointerId,gl.set(f,yl(gl.get(f)||null,t,n,a,o,h)),!0}return!1}function y1(t){var n=zi(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,$l(t.priority,function(){m1(a)});return}}else if(n===31){if(n=p(a),n!==null){t.blockedOn=n,$l(t.priority,function(){m1(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function vc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Ed(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);ma=o,a.target.dispatchEvent(o),ma=null}else return n=ji(a),n!==null&&d1(n),t.blockedOn=a,!1;n.shift()}return!0}function v1(t,n,a){vc(t)&&a.delete(n)}function ob(){bd=!1,Zr!==null&&vc(Zr)&&(Zr=null),Jr!==null&&vc(Jr)&&(Jr=null),$r!==null&&vc($r)&&($r=null),pl.forEach(v1),gl.forEach(v1)}function _c(t,n){t.blockedOn===n&&(t.blockedOn=null,bd||(bd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,ob)))}var Ec=null;function _1(t){Ec!==t&&(Ec=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Ec===t&&(Ec=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],h=t[n+2];if(typeof o!="function"){if(Td(o||a)===null)continue;break}var f=ji(a);f!==null&&(t.splice(n,3),n-=3,Ef(f,{pending:!0,data:h,method:a.method,action:o},o,h))}}))}function Ka(t){function n(D){return _c(D,t)}Zr!==null&&_c(Zr,t),Jr!==null&&_c(Jr,t),$r!==null&&_c($r,t),pl.forEach(n),gl.forEach(n);for(var a=0;a<es.length;a++){var o=es[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<es.length&&(a=es[0],a.blockedOn===null);)y1(a),a.blockedOn===null&&es.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var h=a[o],f=a[o+1],v=h[Wt]||null;if(typeof f=="function")v||_1(a);else if(v){var T=null;if(f&&f.hasAttribute("formAction")){if(h=f,v=f[Wt]||null)T=v.formAction;else if(Td(h)!==null)continue}else T=v.action;typeof T=="function"?a[o+1]=T:(a.splice(o,3),o-=3),_1(a)}}}function E1(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(v){return h=v})},focusReset:"manual",scroll:"manual"})}function n(){h!==null&&(h(),h=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,h=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),h!==null&&(h(),h=null)}}}function Sd(t){this._internalRoot=t}Tc.prototype.render=Sd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=zn();h1(a,o,t,n,null,null)},Tc.prototype.unmount=Sd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;h1(t.current,2,null,t,null,null),tc(),n[mi]=null}};function Tc(t){this._internalRoot=t}Tc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Ui();t={blockedOn:null,target:t,priority:n};for(var a=0;a<es.length&&n!==0&&n<es[a].priority;a++);es.splice(a,0,t),a===0&&y1(t)}};var T1=e.version;if(T1!=="19.2.5")throw Error(s(527,T1,"19.2.5"));ae.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=y(n),t=t!==null?E(t):null,t=t===null?null:t.stateNode,t};var lb={bundleType:0,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:q,reconcilerVersion:"19.2.5"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bc.isDisabled&&bc.supportsFiber)try{fi=bc.inject(lb),Bt=bc}catch{}}return _l.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,o="",h=Ig,f=Dg,v=Ng;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(h=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=u1(t,1,!1,null,null,a,o,null,h,f,v,E1),t[mi]=n.current,rd(t),new Sd(n)},_l.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var o=!1,h="",f=Ig,v=Dg,T=Ng,D=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(D=a.formState)),n=u1(t,1,!0,n,a??null,o,h,D,f,v,T,E1),n.context=c1(null),a=n.current,o=zn(),o=bo(o),h=zr(o),h.callback=null,jr(a,h,o),a=o,n.current.lanes=a,yr(n,a),Si(n),t[mi]=n.current,rd(t),new Tc(n)},_l.version="19.2.5",_l}var O1;function _b(){if(O1)return Rd.exports;O1=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Rd.exports=vb(),Rd.exports}var Eb=_b();const Tb=()=>{};var x1={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h_=function(r){const e=[];let i=0;for(let s=0;s<r.length;s++){let l=r.charCodeAt(s);l<128?e[i++]=l:l<2048?(e[i++]=l>>6|192,e[i++]=l&63|128):(l&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(l=65536+((l&1023)<<10)+(r.charCodeAt(++s)&1023),e[i++]=l>>18|240,e[i++]=l>>12&63|128,e[i++]=l>>6&63|128,e[i++]=l&63|128):(e[i++]=l>>12|224,e[i++]=l>>6&63|128,e[i++]=l&63|128)}return e},bb=function(r){const e=[];let i=0,s=0;for(;i<r.length;){const l=r[i++];if(l<128)e[s++]=String.fromCharCode(l);else if(l>191&&l<224){const u=r[i++];e[s++]=String.fromCharCode((l&31)<<6|u&63)}else if(l>239&&l<365){const u=r[i++],d=r[i++],p=r[i++],g=((l&7)<<18|(u&63)<<12|(d&63)<<6|p&63)-65536;e[s++]=String.fromCharCode(55296+(g>>10)),e[s++]=String.fromCharCode(56320+(g&1023))}else{const u=r[i++],d=r[i++];e[s++]=String.fromCharCode((l&15)<<12|(u&63)<<6|d&63)}}return e.join("")},f_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let l=0;l<r.length;l+=3){const u=r[l],d=l+1<r.length,p=d?r[l+1]:0,g=l+2<r.length,y=g?r[l+2]:0,E=u>>2,b=(u&3)<<4|p>>4;let A=(p&15)<<2|y>>6,k=y&63;g||(k=64,d||(A=64)),s.push(i[E],i[b],i[A],i[k])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(h_(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):bb(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const i=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let l=0;l<r.length;){const u=i[r.charAt(l++)],p=l<r.length?i[r.charAt(l)]:0;++l;const y=l<r.length?i[r.charAt(l)]:64;++l;const b=l<r.length?i[r.charAt(l)]:64;if(++l,u==null||p==null||y==null||b==null)throw new Sb;const A=u<<2|p>>4;if(s.push(A),y!==64){const k=p<<4&240|y>>2;if(s.push(k),b!==64){const Q=y<<6&192|b;s.push(Q)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class Sb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ab=function(r){const e=h_(r);return f_.encodeByteArray(e,!0)},jc=function(r){return Ab(r).replace(/\./g,"")},d_=function(r){try{return f_.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rb=()=>wb().__FIREBASE_DEFAULTS__,Cb=()=>{if(typeof process>"u"||typeof x1>"u")return;const r=x1.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},Ib=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&d_(r[1]);return e&&JSON.parse(e)},oh=()=>{try{return Tb()||Rb()||Cb()||Ib()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},m_=r=>{var e,i;return(i=(e=oh())===null||e===void 0?void 0:e.emulatorHosts)===null||i===void 0?void 0:i[r]},Db=r=>{const e=m_(r);if(!e)return;const i=e.lastIndexOf(":");if(i<=0||i+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(i+1),10);return e[0]==="["?[e.substring(1,i-1),s]:[e.substring(0,i),s]},p_=()=>{var r;return(r=oh())===null||r===void 0?void 0:r.config},g_=r=>{var e;return(e=oh())===null||e===void 0?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nb{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,i)=>{this.resolve=e,this.reject=i})}wrapCallback(e){return(i,s)=>{i?this.reject(i):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(i):e(i,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ho(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function y_(r){return(await fetch(r,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ob(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const i={alg:"none",type:"JWT"},s=e||"demo-project",l=r.iat||0,u=r.sub||r.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const d=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:l,exp:l+3600,auth_time:l,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},r);return[jc(JSON.stringify(i)),jc(JSON.stringify(d)),""].join(".")}const wl={};function xb(){const r={prod:[],emulator:[]};for(const e of Object.keys(wl))wl[e]?r.emulator.push(e):r.prod.push(e);return r}function Mb(r){let e=document.getElementById(r),i=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),i=!0),{created:i,element:e}}let M1=!1;function v_(r,e){if(typeof window>"u"||typeof document>"u"||!ho(window.location.host)||wl[r]===e||wl[r]||M1)return;wl[r]=e;function i(A){return`__firebase__banner__${A}`}const s="__firebase__banner",u=xb().prod.length>0;function d(){const A=document.getElementById(s);A&&A.remove()}function p(A){A.style.display="flex",A.style.background="#7faaf0",A.style.position="fixed",A.style.bottom="5px",A.style.left="5px",A.style.padding=".5em",A.style.borderRadius="5px",A.style.alignItems="center"}function g(A,k){A.setAttribute("width","24"),A.setAttribute("id",k),A.setAttribute("height","24"),A.setAttribute("viewBox","0 0 24 24"),A.setAttribute("fill","none"),A.style.marginLeft="-6px"}function y(){const A=document.createElement("span");return A.style.cursor="pointer",A.style.marginLeft="16px",A.style.fontSize="24px",A.innerHTML=" &times;",A.onclick=()=>{M1=!0,d()},A}function E(A,k){A.setAttribute("id",k),A.innerText="Learn more",A.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",A.setAttribute("target","__blank"),A.style.paddingLeft="5px",A.style.textDecoration="underline"}function b(){const A=Mb(s),k=i("text"),Q=document.getElementById(k)||document.createElement("span"),K=i("learnmore"),U=document.getElementById(K)||document.createElement("a"),W=i("preprendIcon"),J=document.getElementById(W)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(A.created){const te=A.element;p(te),E(U,K);const fe=y();g(J,W),te.append(J,Q,U,fe),document.body.appendChild(te)}u?(Q.innerText="Preview backend disconnected.",J.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(J.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,Q.innerText="Preview backend running in this workspace."),Q.setAttribute("id",k)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",b):b()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function kb(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(hn())}function Vb(){var r;const e=(r=oh())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Lb(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ub(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function Pb(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function zb(){const r=hn();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function jb(){return!Vb()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Bb(){try{return typeof indexedDB=="object"}catch{return!1}}function qb(){return new Promise((r,e)=>{try{let i=!0;const s="validate-browser-context-for-indexeddb-analytics-module",l=self.indexedDB.open(s);l.onsuccess=()=>{l.result.close(),i||self.indexedDB.deleteDatabase(s),r(!0)},l.onupgradeneeded=()=>{i=!1},l.onerror=()=>{var u;e(((u=l.error)===null||u===void 0?void 0:u.message)||"")}}catch(i){e(i)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hb="FirebaseError";class pr extends Error{constructor(e,i,s){super(i),this.code=e,this.customData=s,this.name=Hb,Object.setPrototypeOf(this,pr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Hl.prototype.create)}}class Hl{constructor(e,i,s){this.service=e,this.serviceName=i,this.errors=s}create(e,...i){const s=i[0]||{},l=`${this.service}/${e}`,u=this.errors[e],d=u?Fb(u,s):"Error",p=`${this.serviceName}: ${d} (${l}).`;return new pr(l,p,s)}}function Fb(r,e){return r.replace(Gb,(i,s)=>{const l=e[s];return l!=null?String(l):`<${s}?>`})}const Gb=/\{\$([^}]+)}/g;function Qb(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function $s(r,e){if(r===e)return!0;const i=Object.keys(r),s=Object.keys(e);for(const l of i){if(!s.includes(l))return!1;const u=r[l],d=e[l];if(k1(u)&&k1(d)){if(!$s(u,d))return!1}else if(u!==d)return!1}for(const l of s)if(!i.includes(l))return!1;return!0}function k1(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fl(r){const e=[];for(const[i,s]of Object.entries(r))Array.isArray(s)?s.forEach(l=>{e.push(encodeURIComponent(i)+"="+encodeURIComponent(l))}):e.push(encodeURIComponent(i)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Kb(r,e){const i=new Yb(r,e);return i.subscribe.bind(i)}class Yb{constructor(e,i){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=i,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(i=>{i.next(e)})}error(e){this.forEachObserver(i=>{i.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,i,s){let l;if(e===void 0&&i===void 0&&s===void 0)throw new Error("Missing Observer.");Xb(e,["next","error","complete"])?l=e:l={next:e,error:i,complete:s},l.next===void 0&&(l.next=Nd),l.error===void 0&&(l.error=Nd),l.complete===void 0&&(l.complete=Nd);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?l.error(this.finalError):l.complete()}catch{}}),this.observers.push(l),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let i=0;i<this.observers.length;i++)this.sendOne(i,e)}sendOne(e,i){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{i(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Xb(r,e){if(typeof r!="object"||r===null)return!1;for(const i of e)if(i in r&&typeof r[i]=="function")return!0;return!1}function Nd(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(r){return r&&r._delegate?r._delegate:r}class ea{constructor(e,i,s){this.name=e,this.instanceFactory=i,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ws="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wb{constructor(e,i){this.name=e,this.container=i,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const i=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(i)){const s=new Nb;if(this.instancesDeferred.set(i,s),this.isInitialized(i)||this.shouldAutoInitialize())try{const l=this.getOrInitializeService({instanceIdentifier:i});l&&s.resolve(l)}catch{}}return this.instancesDeferred.get(i).promise}getImmediate(e){var i;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),l=(i=e==null?void 0:e.optional)!==null&&i!==void 0?i:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(l)return null;throw u}else{if(l)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Jb(e))try{this.getOrInitializeService({instanceIdentifier:Ws})}catch{}for(const[i,s]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);try{const u=this.getOrInitializeService({instanceIdentifier:l});s.resolve(u)}catch{}}}}clearInstance(e=Ws){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(i=>"INTERNAL"in i).map(i=>i.INTERNAL.delete()),...e.filter(i=>"_delete"in i).map(i=>i._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ws){return this.instances.has(e)}getOptions(e=Ws){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:i={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const l=this.getOrInitializeService({instanceIdentifier:s,options:i});for(const[u,d]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(u);s===p&&d.resolve(l)}return l}onInit(e,i){var s;const l=this.normalizeInstanceIdentifier(i),u=(s=this.onInitCallbacks.get(l))!==null&&s!==void 0?s:new Set;u.add(e),this.onInitCallbacks.set(l,u);const d=this.instances.get(l);return d&&e(d,l),()=>{u.delete(e)}}invokeOnInitCallbacks(e,i){const s=this.onInitCallbacks.get(i);if(s)for(const l of s)try{l(e,i)}catch{}}getOrInitializeService({instanceIdentifier:e,options:i={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Zb(e),options:i}),this.instances.set(e,s),this.instancesOptions.set(e,i),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ws){return this.component?this.component.multipleInstances?e:Ws:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Zb(r){return r===Ws?void 0:r}function Jb(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $b{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const i=this.getProvider(e.name);if(i.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);i.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const i=new Wb(e,this);return this.providers.set(e,i),i}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Be;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Be||(Be={}));const e2={debug:Be.DEBUG,verbose:Be.VERBOSE,info:Be.INFO,warn:Be.WARN,error:Be.ERROR,silent:Be.SILENT},t2=Be.INFO,n2={[Be.DEBUG]:"log",[Be.VERBOSE]:"log",[Be.INFO]:"info",[Be.WARN]:"warn",[Be.ERROR]:"error"},i2=(r,e,...i)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),l=n2[e];if(l)console[l](`[${s}]  ${r.name}:`,...i);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class pm{constructor(e){this.name=e,this._logLevel=t2,this._logHandler=i2,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Be))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?e2[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Be.DEBUG,...e),this._logHandler(this,Be.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Be.VERBOSE,...e),this._logHandler(this,Be.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Be.INFO,...e),this._logHandler(this,Be.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Be.WARN,...e),this._logHandler(this,Be.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Be.ERROR,...e),this._logHandler(this,Be.ERROR,...e)}}const r2=(r,e)=>e.some(i=>r instanceof i);let V1,L1;function s2(){return V1||(V1=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function a2(){return L1||(L1=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const __=new WeakMap,Hd=new WeakMap,E_=new WeakMap,Od=new WeakMap,gm=new WeakMap;function o2(r){const e=new Promise((i,s)=>{const l=()=>{r.removeEventListener("success",u),r.removeEventListener("error",d)},u=()=>{i(us(r.result)),l()},d=()=>{s(r.error),l()};r.addEventListener("success",u),r.addEventListener("error",d)});return e.then(i=>{i instanceof IDBCursor&&__.set(i,r)}).catch(()=>{}),gm.set(e,r),e}function l2(r){if(Hd.has(r))return;const e=new Promise((i,s)=>{const l=()=>{r.removeEventListener("complete",u),r.removeEventListener("error",d),r.removeEventListener("abort",d)},u=()=>{i(),l()},d=()=>{s(r.error||new DOMException("AbortError","AbortError")),l()};r.addEventListener("complete",u),r.addEventListener("error",d),r.addEventListener("abort",d)});Hd.set(r,e)}let Fd={get(r,e,i){if(r instanceof IDBTransaction){if(e==="done")return Hd.get(r);if(e==="objectStoreNames")return r.objectStoreNames||E_.get(r);if(e==="store")return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return us(r[e])},set(r,e,i){return r[e]=i,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function u2(r){Fd=r(Fd)}function c2(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...i){const s=r.call(xd(this),e,...i);return E_.set(s,e.sort?e.sort():[e]),us(s)}:a2().includes(r)?function(...e){return r.apply(xd(this),e),us(__.get(this))}:function(...e){return us(r.apply(xd(this),e))}}function h2(r){return typeof r=="function"?c2(r):(r instanceof IDBTransaction&&l2(r),r2(r,s2())?new Proxy(r,Fd):r)}function us(r){if(r instanceof IDBRequest)return o2(r);if(Od.has(r))return Od.get(r);const e=h2(r);return e!==r&&(Od.set(r,e),gm.set(e,r)),e}const xd=r=>gm.get(r);function f2(r,e,{blocked:i,upgrade:s,blocking:l,terminated:u}={}){const d=indexedDB.open(r,e),p=us(d);return s&&d.addEventListener("upgradeneeded",g=>{s(us(d.result),g.oldVersion,g.newVersion,us(d.transaction),g)}),i&&d.addEventListener("blocked",g=>i(g.oldVersion,g.newVersion,g)),p.then(g=>{u&&g.addEventListener("close",()=>u()),l&&g.addEventListener("versionchange",y=>l(y.oldVersion,y.newVersion,y))}).catch(()=>{}),p}const d2=["get","getKey","getAll","getAllKeys","count"],m2=["put","add","delete","clear"],Md=new Map;function U1(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Md.get(e))return Md.get(e);const i=e.replace(/FromIndex$/,""),s=e!==i,l=m2.includes(i);if(!(i in(s?IDBIndex:IDBObjectStore).prototype)||!(l||d2.includes(i)))return;const u=async function(d,...p){const g=this.transaction(d,l?"readwrite":"readonly");let y=g.store;return s&&(y=y.index(p.shift())),(await Promise.all([y[i](...p),l&&g.done]))[0]};return Md.set(e,u),u}u2(r=>({...r,get:(e,i,s)=>U1(e,i)||r.get(e,i,s),has:(e,i)=>!!U1(e,i)||r.has(e,i)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p2{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(i=>{if(g2(i)){const s=i.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(i=>i).join(" ")}}function g2(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Gd="@firebase/app",P1="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cr=new pm("@firebase/app"),y2="@firebase/app-compat",v2="@firebase/analytics-compat",_2="@firebase/analytics",E2="@firebase/app-check-compat",T2="@firebase/app-check",b2="@firebase/auth",S2="@firebase/auth-compat",A2="@firebase/database",w2="@firebase/data-connect",R2="@firebase/database-compat",C2="@firebase/functions",I2="@firebase/functions-compat",D2="@firebase/installations",N2="@firebase/installations-compat",O2="@firebase/messaging",x2="@firebase/messaging-compat",M2="@firebase/performance",k2="@firebase/performance-compat",V2="@firebase/remote-config",L2="@firebase/remote-config-compat",U2="@firebase/storage",P2="@firebase/storage-compat",z2="@firebase/firestore",j2="@firebase/ai",B2="@firebase/firestore-compat",q2="firebase",H2="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qd="[DEFAULT]",F2={[Gd]:"fire-core",[y2]:"fire-core-compat",[_2]:"fire-analytics",[v2]:"fire-analytics-compat",[T2]:"fire-app-check",[E2]:"fire-app-check-compat",[b2]:"fire-auth",[S2]:"fire-auth-compat",[A2]:"fire-rtdb",[w2]:"fire-data-connect",[R2]:"fire-rtdb-compat",[C2]:"fire-fn",[I2]:"fire-fn-compat",[D2]:"fire-iid",[N2]:"fire-iid-compat",[O2]:"fire-fcm",[x2]:"fire-fcm-compat",[M2]:"fire-perf",[k2]:"fire-perf-compat",[V2]:"fire-rc",[L2]:"fire-rc-compat",[U2]:"fire-gcs",[P2]:"fire-gcs-compat",[z2]:"fire-fst",[B2]:"fire-fst-compat",[j2]:"fire-vertex","fire-js":"fire-js",[q2]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bc=new Map,G2=new Map,Kd=new Map;function z1(r,e){try{r.container.addComponent(e)}catch(i){cr.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,i)}}function so(r){const e=r.name;if(Kd.has(e))return cr.debug(`There were multiple attempts to register component ${e}.`),!1;Kd.set(e,r);for(const i of Bc.values())z1(i,r);for(const i of G2.values())z1(i,r);return!0}function ym(r,e){const i=r.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),r.container.getProvider(e)}function oi(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q2={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},cs=new Hl("app","Firebase",Q2);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K2{constructor(e,i,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},i),this._name=i.name,this._automaticDataCollectionEnabled=i.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ea("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw cs.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fo=H2;function T_(r,e={}){let i=r;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Qd,automaticDataCollectionEnabled:!0},e),l=s.name;if(typeof l!="string"||!l)throw cs.create("bad-app-name",{appName:String(l)});if(i||(i=p_()),!i)throw cs.create("no-options");const u=Bc.get(l);if(u){if($s(i,u.options)&&$s(s,u.config))return u;throw cs.create("duplicate-app",{appName:l})}const d=new $b(l);for(const g of Kd.values())d.addComponent(g);const p=new K2(i,s,d);return Bc.set(l,p),p}function b_(r=Qd){const e=Bc.get(r);if(!e&&r===Qd&&p_())return T_();if(!e)throw cs.create("no-app",{appName:r});return e}function hs(r,e,i){var s;let l=(s=F2[r])!==null&&s!==void 0?s:r;i&&(l+=`-${i}`);const u=l.match(/\s|\//),d=e.match(/\s|\//);if(u||d){const p=[`Unable to register library "${l}" with version "${e}":`];u&&p.push(`library name "${l}" contains illegal characters (whitespace or "/")`),u&&d&&p.push("and"),d&&p.push(`version name "${e}" contains illegal characters (whitespace or "/")`),cr.warn(p.join(" "));return}so(new ea(`${l}-version`,()=>({library:l,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y2="firebase-heartbeat-database",X2=1,Ml="firebase-heartbeat-store";let kd=null;function S_(){return kd||(kd=f2(Y2,X2,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Ml)}catch(i){console.warn(i)}}}}).catch(r=>{throw cs.create("idb-open",{originalErrorMessage:r.message})})),kd}async function W2(r){try{const i=(await S_()).transaction(Ml),s=await i.objectStore(Ml).get(A_(r));return await i.done,s}catch(e){if(e instanceof pr)cr.warn(e.message);else{const i=cs.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});cr.warn(i.message)}}}async function j1(r,e){try{const s=(await S_()).transaction(Ml,"readwrite");await s.objectStore(Ml).put(e,A_(r)),await s.done}catch(i){if(i instanceof pr)cr.warn(i.message);else{const s=cs.create("idb-set",{originalErrorMessage:i==null?void 0:i.message});cr.warn(s.message)}}}function A_(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z2=1024,J2=30;class $2{constructor(e){this.container=e,this._heartbeatsCache=null;const i=this.container.getProvider("app").getImmediate();this._storage=new tS(i),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,i;try{const l=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=B1();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((i=this._heartbeatsCache)===null||i===void 0?void 0:i.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(d=>d.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:l}),this._heartbeatsCache.heartbeats.length>J2){const d=nS(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(d,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){cr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const i=B1(),{heartbeatsToSend:s,unsentEntries:l}=eS(this._heartbeatsCache.heartbeats),u=jc(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=i,l.length>0?(this._heartbeatsCache.heartbeats=l,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(i){return cr.warn(i),""}}}function B1(){return new Date().toISOString().substring(0,10)}function eS(r,e=Z2){const i=[];let s=r.slice();for(const l of r){const u=i.find(d=>d.agent===l.agent);if(u){if(u.dates.push(l.date),q1(i)>e){u.dates.pop();break}}else if(i.push({agent:l.agent,dates:[l.date]}),q1(i)>e){i.pop();break}s=s.slice(1)}return{heartbeatsToSend:i,unsentEntries:s}}class tS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Bb()?qb().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const i=await W2(this.app);return i!=null&&i.heartbeats?i:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var i;if(await this._canUseIndexedDBPromise){const l=await this.read();return j1(this.app,{lastSentHeartbeatDate:(i=e.lastSentHeartbeatDate)!==null&&i!==void 0?i:l.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var i;if(await this._canUseIndexedDBPromise){const l=await this.read();return j1(this.app,{lastSentHeartbeatDate:(i=e.lastSentHeartbeatDate)!==null&&i!==void 0?i:l.lastSentHeartbeatDate,heartbeats:[...l.heartbeats,...e.heartbeats]})}else return}}function q1(r){return jc(JSON.stringify({version:2,heartbeats:r})).length}function nS(r){if(r.length===0)return-1;let e=0,i=r[0].date;for(let s=1;s<r.length;s++)r[s].date<i&&(i=r[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iS(r){so(new ea("platform-logger",e=>new p2(e),"PRIVATE")),so(new ea("heartbeat",e=>new $2(e),"PRIVATE")),hs(Gd,P1,r),hs(Gd,P1,"esm2017"),hs("fire-js","")}iS("");function vm(r,e){var i={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&e.indexOf(s)<0&&(i[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,s=Object.getOwnPropertySymbols(r);l<s.length;l++)e.indexOf(s[l])<0&&Object.prototype.propertyIsEnumerable.call(r,s[l])&&(i[s[l]]=r[s[l]]);return i}function w_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const rS=w_,R_=new Hl("auth","Firebase",w_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qc=new pm("@firebase/auth");function sS(r,...e){qc.logLevel<=Be.WARN&&qc.warn(`Auth (${fo}): ${r}`,...e)}function Nc(r,...e){qc.logLevel<=Be.ERROR&&qc.error(`Auth (${fo}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hr(r,...e){throw _m(r,...e)}function wi(r,...e){return _m(r,...e)}function C_(r,e,i){const s=Object.assign(Object.assign({},rS()),{[e]:i});return new Hl("auth","Firebase",s).create(e,{appName:r.name})}function fs(r){return C_(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function _m(r,...e){if(typeof r!="string"){const i=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(i,...s)}return R_.create(r,...e)}function we(r,e,...i){if(!r)throw _m(e,...i)}function or(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Nc(e),new Error(e)}function fr(r,e){r||or(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yd(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function aS(){return H1()==="http:"||H1()==="https:"}function H1(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(aS()||Ub()||"connection"in navigator)?navigator.onLine:!0}function lS(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(e,i){this.shortDelay=e,this.longDelay=i,fr(i>e,"Short delay should be less than long delay!"),this.isMobile=kb()||Pb()}get(){return oS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Em(r,e){fr(r.emulator,"Emulator should always be set here");const{url:i}=r.emulator;return e?`${i}${e.startsWith("/")?e.slice(1):e}`:i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_{static initialize(e,i,s){this.fetchImpl=e,i&&(this.headersImpl=i),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;or("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;or("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;or("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cS=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],hS=new Gl(3e4,6e4);function lh(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function mo(r,e,i,s,l={}){return D_(r,l,async()=>{let u={},d={};s&&(e==="GET"?d=s:u={body:JSON.stringify(s)});const p=Fl(Object.assign({key:r.config.apiKey},d)).slice(1),g=await r._getAdditionalHeaders();g["Content-Type"]="application/json",r.languageCode&&(g["X-Firebase-Locale"]=r.languageCode);const y=Object.assign({method:e,headers:g},u);return Lb()||(y.referrerPolicy="no-referrer"),r.emulatorConfig&&ho(r.emulatorConfig.host)&&(y.credentials="include"),I_.fetch()(await O_(r,r.config.apiHost,i,p),y)})}async function D_(r,e,i){r._canInitEmulator=!1;const s=Object.assign(Object.assign({},uS),e);try{const l=new fS(r),u=await Promise.race([i(),l.promise]);l.clearNetworkTimeout();const d=await u.json();if("needConfirmation"in d)throw Sc(r,"account-exists-with-different-credential",d);if(u.ok&&!("errorMessage"in d))return d;{const p=u.ok?d.errorMessage:d.error.message,[g,y]=p.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw Sc(r,"credential-already-in-use",d);if(g==="EMAIL_EXISTS")throw Sc(r,"email-already-in-use",d);if(g==="USER_DISABLED")throw Sc(r,"user-disabled",d);const E=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw C_(r,E,y);hr(r,E)}}catch(l){if(l instanceof pr)throw l;hr(r,"network-request-failed",{message:String(l)})}}async function N_(r,e,i,s,l={}){const u=await mo(r,e,i,s,l);return"mfaPendingCredential"in u&&hr(r,"multi-factor-auth-required",{_serverResponse:u}),u}async function O_(r,e,i,s){const l=`${e}${i}?${s}`,u=r,d=u.config.emulator?Em(r.config,l):`${r.config.apiScheme}://${l}`;return cS.includes(i)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(d).toString():d}class fS{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((i,s)=>{this.timer=setTimeout(()=>s(wi(this.auth,"network-request-failed")),hS.get())})}}function Sc(r,e,i){const s={appName:r.name};i.email&&(s.email=i.email),i.phoneNumber&&(s.phoneNumber=i.phoneNumber);const l=wi(r,e,s);return l.customData._tokenResponse=i,l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dS(r,e){return mo(r,"POST","/v1/accounts:delete",e)}async function Hc(r,e){return mo(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rl(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function mS(r,e=!1){const i=ci(r),s=await i.getIdToken(e),l=Tm(s);we(l&&l.exp&&l.auth_time&&l.iat,i.auth,"internal-error");const u=typeof l.firebase=="object"?l.firebase:void 0,d=u==null?void 0:u.sign_in_provider;return{claims:l,token:s,authTime:Rl(Vd(l.auth_time)),issuedAtTime:Rl(Vd(l.iat)),expirationTime:Rl(Vd(l.exp)),signInProvider:d||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function Vd(r){return Number(r)*1e3}function Tm(r){const[e,i,s]=r.split(".");if(e===void 0||i===void 0||s===void 0)return Nc("JWT malformed, contained fewer than 3 sections"),null;try{const l=d_(i);return l?JSON.parse(l):(Nc("Failed to decode base64 JWT payload"),null)}catch(l){return Nc("Caught error parsing JWT payload as JSON",l==null?void 0:l.toString()),null}}function F1(r){const e=Tm(r);return we(e,"internal-error"),we(typeof e.exp<"u","internal-error"),we(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kl(r,e,i=!1){if(i)return e;try{return await e}catch(s){throw s instanceof pr&&pS(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function pS({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var i;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const l=((i=this.user.stsTokenManager.expirationTime)!==null&&i!==void 0?i:0)-Date.now()-3e5;return Math.max(0,l)}}schedule(e=!1){if(!this.isRunning)return;const i=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},i)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(e,i){this.createdAt=e,this.lastLoginAt=i,this._initializeTime()}_initializeTime(){this.lastSignInTime=Rl(this.lastLoginAt),this.creationTime=Rl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fc(r){var e;const i=r.auth,s=await r.getIdToken(),l=await kl(r,Hc(i,{idToken:s}));we(l==null?void 0:l.users.length,i,"internal-error");const u=l.users[0];r._notifyReloadListener(u);const d=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?x_(u.providerUserInfo):[],p=vS(r.providerData,d),g=r.isAnonymous,y=!(r.email&&u.passwordHash)&&!(p!=null&&p.length),E=g?y:!1,b={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:p,metadata:new Xd(u.createdAt,u.lastLoginAt),isAnonymous:E};Object.assign(r,b)}async function yS(r){const e=ci(r);await Fc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function vS(r,e){return[...r.filter(s=>!e.some(l=>l.providerId===s.providerId)),...e]}function x_(r){return r.map(e=>{var{providerId:i}=e,s=vm(e,["providerId"]);return{providerId:i,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _S(r,e){const i=await D_(r,{},async()=>{const s=Fl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:l,apiKey:u}=r.config,d=await O_(r,l,"/v1/token",`key=${u}`),p=await r._getAdditionalHeaders();p["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:p,body:s};return r.emulatorConfig&&ho(r.emulatorConfig.host)&&(g.credentials="include"),I_.fetch()(d,g)});return{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token}}async function ES(r,e){return mo(r,"POST","/v2/accounts:revokeToken",lh(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){we(e.idToken,"internal-error"),we(typeof e.idToken<"u","internal-error"),we(typeof e.refreshToken<"u","internal-error");const i="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):F1(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,i)}updateFromIdToken(e){we(e.length!==0,"internal-error");const i=F1(e);this.updateTokensAndExpiration(e,null,i)}async getToken(e,i=!1){return!i&&this.accessToken&&!this.isExpired?this.accessToken:(we(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,i){const{accessToken:s,refreshToken:l,expiresIn:u}=await _S(e,i);this.updateTokensAndExpiration(s,l,Number(u))}updateTokensAndExpiration(e,i,s){this.refreshToken=i||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,i){const{refreshToken:s,accessToken:l,expirationTime:u}=i,d=new eo;return s&&(we(typeof s=="string","internal-error",{appName:e}),d.refreshToken=s),l&&(we(typeof l=="string","internal-error",{appName:e}),d.accessToken=l),u&&(we(typeof u=="number","internal-error",{appName:e}),d.expirationTime=u),d}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new eo,this.toJSON())}_performRefresh(){return or("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ns(r,e){we(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class li{constructor(e){var{uid:i,auth:s,stsTokenManager:l}=e,u=vm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new gS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=i,this.auth=s,this.stsTokenManager=l,this.accessToken=l.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new Xd(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const i=await kl(this,this.stsTokenManager.getToken(this.auth,e));return we(i,this.auth,"internal-error"),this.accessToken!==i&&(this.accessToken=i,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),i}getIdTokenResult(e){return mS(this,e)}reload(){return yS(this)}_assign(e){this!==e&&(we(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(i=>Object.assign({},i)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const i=new li(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return i.metadata._copy(this.metadata),i}_onReload(e){we(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,i=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),i&&await Fc(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(oi(this.auth.app))return Promise.reject(fs(this.auth));const e=await this.getIdToken();return await kl(this,dS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,i){var s,l,u,d,p,g,y,E;const b=(s=i.displayName)!==null&&s!==void 0?s:void 0,A=(l=i.email)!==null&&l!==void 0?l:void 0,k=(u=i.phoneNumber)!==null&&u!==void 0?u:void 0,Q=(d=i.photoURL)!==null&&d!==void 0?d:void 0,K=(p=i.tenantId)!==null&&p!==void 0?p:void 0,U=(g=i._redirectEventId)!==null&&g!==void 0?g:void 0,W=(y=i.createdAt)!==null&&y!==void 0?y:void 0,J=(E=i.lastLoginAt)!==null&&E!==void 0?E:void 0,{uid:te,emailVerified:fe,isAnonymous:_e,providerData:Te,stsTokenManager:R}=i;we(te&&R,e,"internal-error");const w=eo.fromJSON(this.name,R);we(typeof te=="string",e,"internal-error"),ns(b,e.name),ns(A,e.name),we(typeof fe=="boolean",e,"internal-error"),we(typeof _e=="boolean",e,"internal-error"),ns(k,e.name),ns(Q,e.name),ns(K,e.name),ns(U,e.name),ns(W,e.name),ns(J,e.name);const C=new li({uid:te,auth:e,email:A,emailVerified:fe,displayName:b,isAnonymous:_e,photoURL:Q,phoneNumber:k,tenantId:K,stsTokenManager:w,createdAt:W,lastLoginAt:J});return Te&&Array.isArray(Te)&&(C.providerData=Te.map(O=>Object.assign({},O))),U&&(C._redirectEventId=U),C}static async _fromIdTokenResponse(e,i,s=!1){const l=new eo;l.updateFromServerResponse(i);const u=new li({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:s});return await Fc(u),u}static async _fromGetAccountInfoResponse(e,i,s){const l=i.users[0];we(l.localId!==void 0,"internal-error");const u=l.providerUserInfo!==void 0?x_(l.providerUserInfo):[],d=!(l.email&&l.passwordHash)&&!(u!=null&&u.length),p=new eo;p.updateFromIdToken(s);const g=new li({uid:l.localId,auth:e,stsTokenManager:p,isAnonymous:d}),y={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:u,metadata:new Xd(l.createdAt,l.lastLoginAt),isAnonymous:!(l.email&&l.passwordHash)&&!(u!=null&&u.length)};return Object.assign(g,y),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G1=new Map;function lr(r){fr(r instanceof Function,"Expected a class definition");let e=G1.get(r);return e?(fr(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,G1.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,i){this.storage[e]=i}async _get(e){const i=this.storage[e];return i===void 0?null:i}async _remove(e){delete this.storage[e]}_addListener(e,i){}_removeListener(e,i){}}M_.type="NONE";const Q1=M_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oc(r,e,i){return`firebase:${r}:${e}:${i}`}class to{constructor(e,i,s){this.persistence=e,this.auth=i,this.userKey=s;const{config:l,name:u}=this.auth;this.fullUserKey=Oc(this.userKey,l.apiKey,u),this.fullPersistenceKey=Oc("persistence",l.apiKey,u),this.boundEventHandler=i._onStorageEvent.bind(i),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const i=await Hc(this.auth,{idToken:e}).catch(()=>{});return i?li._fromGetAccountInfoResponse(this.auth,i,e):null}return li._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const i=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,i)return this.setCurrentUser(i)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,i,s="authUser"){if(!i.length)return new to(lr(Q1),e,s);const l=(await Promise.all(i.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let u=l[0]||lr(Q1);const d=Oc(s,e.config.apiKey,e.name);let p=null;for(const y of i)try{const E=await y._get(d);if(E){let b;if(typeof E=="string"){const A=await Hc(e,{idToken:E}).catch(()=>{});if(!A)break;b=await li._fromGetAccountInfoResponse(e,A,E)}else b=li._fromJSON(e,E);y!==u&&(p=b),u=y;break}}catch{}const g=l.filter(y=>y._shouldAllowMigration);return!u._shouldAllowMigration||!g.length?new to(u,e,s):(u=g[0],p&&await u._set(d,p.toJSON()),await Promise.all(i.map(async y=>{if(y!==u)try{await y._remove(d)}catch{}})),new to(u,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K1(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(U_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(k_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(z_(e))return"Blackberry";if(j_(e))return"Webos";if(V_(e))return"Safari";if((e.includes("chrome/")||L_(e))&&!e.includes("edge/"))return"Chrome";if(P_(e))return"Android";{const i=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(i);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function k_(r=hn()){return/firefox\//i.test(r)}function V_(r=hn()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function L_(r=hn()){return/crios\//i.test(r)}function U_(r=hn()){return/iemobile/i.test(r)}function P_(r=hn()){return/android/i.test(r)}function z_(r=hn()){return/blackberry/i.test(r)}function j_(r=hn()){return/webos/i.test(r)}function bm(r=hn()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function TS(r=hn()){var e;return bm(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function bS(){return zb()&&document.documentMode===10}function B_(r=hn()){return bm(r)||P_(r)||j_(r)||z_(r)||/windows phone/i.test(r)||U_(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q_(r,e=[]){let i;switch(r){case"Browser":i=K1(hn());break;case"Worker":i=`${K1(hn())}-${r}`;break;default:i=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${i}/JsCore/${fo}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,i){const s=u=>new Promise((d,p)=>{try{const g=e(u);d(g)}catch(g){p(g)}});s.onAbort=i,this.queue.push(s);const l=this.queue.length-1;return()=>{this.queue[l]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const i=[];try{for(const s of this.queue)await s(e),s.onAbort&&i.push(s.onAbort)}catch(s){i.reverse();for(const l of i)try{l()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AS(r,e={}){return mo(r,"GET","/v2/passwordPolicy",lh(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wS=6;class RS{constructor(e){var i,s,l,u;const d=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(i=d.minPasswordLength)!==null&&i!==void 0?i:wS,d.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=d.maxPasswordLength),d.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=d.containsLowercaseCharacter),d.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=d.containsUppercaseCharacter),d.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=d.containsNumericCharacter),d.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=d.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(l=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&l!==void 0?l:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var i,s,l,u,d,p;const g={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,g),this.validatePasswordCharacterOptions(e,g),g.isValid&&(g.isValid=(i=g.meetsMinPasswordLength)!==null&&i!==void 0?i:!0),g.isValid&&(g.isValid=(s=g.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),g.isValid&&(g.isValid=(l=g.containsLowercaseLetter)!==null&&l!==void 0?l:!0),g.isValid&&(g.isValid=(u=g.containsUppercaseLetter)!==null&&u!==void 0?u:!0),g.isValid&&(g.isValid=(d=g.containsNumericCharacter)!==null&&d!==void 0?d:!0),g.isValid&&(g.isValid=(p=g.containsNonAlphanumericCharacter)!==null&&p!==void 0?p:!0),g}validatePasswordLengthOptions(e,i){const s=this.customStrengthOptions.minPasswordLength,l=this.customStrengthOptions.maxPasswordLength;s&&(i.meetsMinPasswordLength=e.length>=s),l&&(i.meetsMaxPasswordLength=e.length<=l)}validatePasswordCharacterOptions(e,i){this.updatePasswordCharacterOptionsStatuses(i,!1,!1,!1,!1);let s;for(let l=0;l<e.length;l++)s=e.charAt(l),this.updatePasswordCharacterOptionsStatuses(i,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,i,s,l,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=i)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=l)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CS{constructor(e,i,s,l){this.app=e,this.heartbeatServiceProvider=i,this.appCheckServiceProvider=s,this.config=l,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Y1(this),this.idTokenSubscription=new Y1(this),this.beforeStateQueue=new SS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=R_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=l.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,i){return i&&(this._popupRedirectResolver=lr(i)),this._initializationPromise=this.queue(async()=>{var s,l,u;if(!this._deleted&&(this.persistenceManager=await to.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((l=this._popupRedirectResolver)===null||l===void 0)&&l._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(i),this.lastNotifiedUid=((u=this.currentUser)===null||u===void 0?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const i=await Hc(this,{idToken:e}),s=await li._fromGetAccountInfoResponse(this,i,e);await this.directlySetCurrentUser(s)}catch(i){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",i),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(oi(this.app)){const d=this.app.settings.authIdToken;return d?new Promise(p=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(d).then(p,p))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let l=s,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const d=(i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId,p=l==null?void 0:l._redirectEventId,g=await this.tryRedirectSignIn(e);(!d||d===p)&&(g!=null&&g.user)&&(l=g.user,u=!0)}if(!l)return this.directlySetCurrentUser(null);if(!l._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(l)}catch(d){l=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(d))}return l?this.reloadAndSetCurrentUserOrClear(l):this.directlySetCurrentUser(null)}return we(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===l._redirectEventId?this.directlySetCurrentUser(l):this.reloadAndSetCurrentUserOrClear(l)}async tryRedirectSignIn(e){let i=null;try{i=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return i}async reloadAndSetCurrentUserOrClear(e){try{await Fc(e)}catch(i){if((i==null?void 0:i.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=lS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(oi(this.app))return Promise.reject(fs(this));const i=e?ci(e):null;return i&&we(i.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(i&&i._clone(this))}async _updateCurrentUser(e,i=!1){if(!this._deleted)return e&&we(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),i||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return oi(this.app)?Promise.reject(fs(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return oi(this.app)?Promise.reject(fs(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(lr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const i=this._getPasswordPolicyInternal();return i.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):i.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await AS(this),i=new RS(e);this.tenantId===null?this._projectPasswordPolicy=i:this._tenantPasswordPolicies[this.tenantId]=i}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Hl("auth","Firebase",e())}onAuthStateChanged(e,i,s){return this.registerStateListener(this.authStateSubscription,e,i,s)}beforeAuthStateChanged(e,i){return this.beforeStateQueue.pushCallback(e,i)}onIdTokenChanged(e,i,s){return this.registerStateListener(this.idTokenSubscription,e,i,s)}authStateReady(){return new Promise((e,i)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},i)}})}async revokeAccessToken(e){if(this.currentUser){const i=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:i};this.tenantId!=null&&(s.tenantId=this.tenantId),await ES(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,i){const s=await this.getOrInitRedirectPersistenceManager(i);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const i=e&&lr(e)||this._popupRedirectResolver;we(i,this,"argument-error"),this.redirectPersistenceManager=await to.create(this,[lr(i._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var i,s;return this._isInitialized&&await this.queue(async()=>{}),((i=this._currentUser)===null||i===void 0?void 0:i._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,i;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(i=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&i!==void 0?i:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,i,s,l){if(this._deleted)return()=>{};const u=typeof i=="function"?i:i.next.bind(i);let d=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(we(p,this,"internal-error"),p.then(()=>{d||u(this.currentUser)}),typeof i=="function"){const g=e.addObserver(i,s,l);return()=>{d=!0,g()}}else{const g=e.addObserver(i);return()=>{d=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return we(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=q_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const i={"X-Client-Version":this.clientVersion};this.app.options.appId&&(i["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(i["X-Firebase-Client"]=s);const l=await this._getAppCheckToken();return l&&(i["X-Firebase-AppCheck"]=l),i}async _getAppCheckToken(){var e;if(oi(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const i=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return i!=null&&i.error&&sS(`Error while retrieving App Check token: ${i.error}`),i==null?void 0:i.token}}function uh(r){return ci(r)}class Y1{constructor(e){this.auth=e,this.observer=null,this.addObserver=Kb(i=>this.observer=i)}get next(){return we(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sm={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function IS(r){Sm=r}function DS(r){return Sm.loadJS(r)}function NS(){return Sm.gapiScript}function OS(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xS(r,e){const i=ym(r,"auth");if(i.isInitialized()){const l=i.getImmediate(),u=i.getOptions();if($s(u,e??{}))return l;hr(l,"already-initialized")}return i.initialize({options:e})}function MS(r,e){const i=(e==null?void 0:e.persistence)||[],s=(Array.isArray(i)?i:[i]).map(lr);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function kS(r,e,i){const s=uh(r);we(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const l=!1,u=H_(e),{host:d,port:p}=VS(e),g=p===null?"":`:${p}`,y={url:`${u}//${d}${g}/`},E=Object.freeze({host:d,port:p,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:l})});if(!s._canInitEmulator){we(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),we($s(y,s.config.emulator)&&$s(E,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=y,s.emulatorConfig=E,s.settings.appVerificationDisabledForTesting=!0,ho(d)?(y_(`${u}//${d}${g}`),v_("Auth",!0)):LS()}function H_(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function VS(r){const e=H_(r),i=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!i)return{host:"",port:null};const s=i[2].split("@").pop()||"",l=/^(\[[^\]]+\])(:|$)/.exec(s);if(l){const u=l[1];return{host:u,port:X1(s.substr(u.length+1))}}else{const[u,d]=s.split(":");return{host:u,port:X1(d)}}}function X1(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function LS(){function r(){const e=document.createElement("p"),i=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",i.position="fixed",i.width="100%",i.backgroundColor="#ffffff",i.border=".1em solid #000000",i.color="#b50000",i.bottom="0px",i.left="0px",i.margin="0px",i.zIndex="10000",i.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{constructor(e,i){this.providerId=e,this.signInMethod=i}toJSON(){return or("not implemented")}_getIdTokenResponse(e){return or("not implemented")}_linkToIdToken(e,i){return or("not implemented")}_getReauthenticationResolver(e){return or("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function no(r,e){return N_(r,"POST","/v1/accounts:signInWithIdp",lh(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const US="http://localhost";class ta extends F_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const i=new ta(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(i.idToken=e.idToken),e.accessToken&&(i.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(i.nonce=e.nonce),e.pendingToken&&(i.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(i.accessToken=e.oauthToken,i.secret=e.oauthTokenSecret):hr("argument-error"),i}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const i=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:l}=i,u=vm(i,["providerId","signInMethod"]);if(!s||!l)return null;const d=new ta(s,l);return d.idToken=u.idToken||void 0,d.accessToken=u.accessToken||void 0,d.secret=u.secret,d.nonce=u.nonce,d.pendingToken=u.pendingToken||null,d}_getIdTokenResponse(e){const i=this.buildRequest();return no(e,i)}_linkToIdToken(e,i){const s=this.buildRequest();return s.idToken=i,no(e,s)}_getReauthenticationResolver(e){const i=this.buildRequest();return i.autoCreate=!1,no(e,i)}buildRequest(){const e={requestUri:US,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const i={};this.idToken&&(i.id_token=this.idToken),this.accessToken&&(i.access_token=this.accessToken),this.secret&&(i.oauth_token_secret=this.secret),i.providerId=this.providerId,this.nonce&&!this.pendingToken&&(i.nonce=this.nonce),e.postBody=Fl(i)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql extends G_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs extends Ql{constructor(){super("facebook.com")}static credential(e){return ta._fromParams({providerId:rs.PROVIDER_ID,signInMethod:rs.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rs.credentialFromTaggedObject(e)}static credentialFromError(e){return rs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return rs.credential(e.oauthAccessToken)}catch{return null}}}rs.FACEBOOK_SIGN_IN_METHOD="facebook.com";rs.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss extends Ql{constructor(){super("google.com"),this.addScope("profile")}static credential(e,i){return ta._fromParams({providerId:ss.PROVIDER_ID,signInMethod:ss.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:i})}static credentialFromResult(e){return ss.credentialFromTaggedObject(e)}static credentialFromError(e){return ss.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:i,oauthAccessToken:s}=e;if(!i&&!s)return null;try{return ss.credential(i,s)}catch{return null}}}ss.GOOGLE_SIGN_IN_METHOD="google.com";ss.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as extends Ql{constructor(){super("github.com")}static credential(e){return ta._fromParams({providerId:as.PROVIDER_ID,signInMethod:as.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return as.credentialFromTaggedObject(e)}static credentialFromError(e){return as.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return as.credential(e.oauthAccessToken)}catch{return null}}}as.GITHUB_SIGN_IN_METHOD="github.com";as.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os extends Ql{constructor(){super("twitter.com")}static credential(e,i){return ta._fromParams({providerId:os.PROVIDER_ID,signInMethod:os.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:i})}static credentialFromResult(e){return os.credentialFromTaggedObject(e)}static credentialFromError(e){return os.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:i,oauthTokenSecret:s}=e;if(!i||!s)return null;try{return os.credential(i,s)}catch{return null}}}os.TWITTER_SIGN_IN_METHOD="twitter.com";os.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PS(r,e){return N_(r,"POST","/v1/accounts:signUp",lh(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,i,s,l=!1){const u=await li._fromIdTokenResponse(e,s,l),d=W1(s);return new ps({user:u,providerId:d,_tokenResponse:s,operationType:i})}static async _forOperation(e,i,s){await e._updateTokensIfNecessary(s,!0);const l=W1(s);return new ps({user:e,providerId:l,_tokenResponse:s,operationType:i})}}function W1(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zS(r){var e;if(oi(r.app))return Promise.reject(fs(r));const i=uh(r);if(await i._initializationPromise,!((e=i.currentUser)===null||e===void 0)&&e.isAnonymous)return new ps({user:i.currentUser,providerId:null,operationType:"signIn"});const s=await PS(i,{returnSecureToken:!0}),l=await ps._fromIdTokenResponse(i,"signIn",s,!0);return await i._updateCurrentUser(l.user),l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc extends pr{constructor(e,i,s,l){var u;super(i.code,i.message),this.operationType=s,this.user=l,Object.setPrototypeOf(this,Gc.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:i.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,i,s,l){return new Gc(e,i,s,l)}}function Q_(r,e,i,s){return(e==="reauthenticate"?i._getReauthenticationResolver(r):i._getIdTokenResponse(r)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Gc._fromErrorAndOperation(r,u,e,s):u})}async function jS(r,e,i=!1){const s=await kl(r,e._linkToIdToken(r.auth,await r.getIdToken()),i);return ps._forOperation(r,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BS(r,e,i=!1){const{auth:s}=r;if(oi(s.app))return Promise.reject(fs(s));const l="reauthenticate";try{const u=await kl(r,Q_(s,l,e,r),i);we(u.idToken,s,"internal-error");const d=Tm(u.idToken);we(d,s,"internal-error");const{sub:p}=d;return we(r.uid===p,s,"user-mismatch"),ps._forOperation(r,l,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&hr(s,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qS(r,e,i=!1){if(oi(r.app))return Promise.reject(fs(r));const s="signIn",l=await Q_(r,s,e),u=await ps._fromIdTokenResponse(r,s,l);return i||await r._updateCurrentUser(u.user),u}function HS(r,e,i,s){return ci(r).onIdTokenChanged(e,i,s)}function FS(r,e,i){return ci(r).beforeAuthStateChanged(e,i)}function GS(r,e,i,s){return ci(r).onAuthStateChanged(e,i,s)}const Qc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{constructor(e,i){this.storageRetriever=e,this.type=i}_isAvailable(){try{return this.storage?(this.storage.setItem(Qc,"1"),this.storage.removeItem(Qc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,i){return this.storage.setItem(e,JSON.stringify(i)),Promise.resolve()}_get(e){const i=this.storage.getItem(e);return Promise.resolve(i?JSON.parse(i):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QS=1e3,KS=10;class Y_ extends K_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,i)=>this.onStorageEvent(e,i),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=B_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const i of Object.keys(this.listeners)){const s=this.storage.getItem(i),l=this.localCache[i];s!==l&&e(i,l,s)}}onStorageEvent(e,i=!1){if(!e.key){this.forAllChangedKeys((d,p,g)=>{this.notifyListeners(d,g)});return}const s=e.key;i?this.detachListener():this.stopPolling();const l=()=>{const d=this.storage.getItem(s);!i&&this.localCache[s]===d||this.notifyListeners(s,d)},u=this.storage.getItem(s);bS()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(l,KS):l()}notifyListeners(e,i){this.localCache[e]=i;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(i&&JSON.parse(i))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,i,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:i,newValue:s}),!0)})},QS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,i){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(i)}_removeListener(e,i){this.listeners[e]&&(this.listeners[e].delete(i),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,i){await super._set(e,i),this.localCache[e]=JSON.stringify(i)}async _get(e){const i=await super._get(e);return this.localCache[e]=JSON.stringify(i),i}async _remove(e){await super._remove(e),delete this.localCache[e]}}Y_.type="LOCAL";const YS=Y_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_ extends K_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,i){}_removeListener(e,i){}}X_.type="SESSION";const W_=X_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XS(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(i){return{fulfilled:!1,reason:i}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const i=this.receivers.find(l=>l.isListeningto(e));if(i)return i;const s=new ch(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const i=e,{eventId:s,eventType:l,data:u}=i.data,d=this.handlersMap[l];if(!(d!=null&&d.size))return;i.ports[0].postMessage({status:"ack",eventId:s,eventType:l});const p=Array.from(d).map(async y=>y(i.origin,u)),g=await XS(p);i.ports[0].postMessage({status:"done",eventId:s,eventType:l,response:g})}_subscribe(e,i){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(i)}_unsubscribe(e,i){this.handlersMap[e]&&i&&this.handlersMap[e].delete(i),(!i||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ch.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Am(r="",e=10){let i="";for(let s=0;s<e;s++)i+=Math.floor(Math.random()*10);return r+i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,i,s=50){const l=typeof MessageChannel<"u"?new MessageChannel:null;if(!l)throw new Error("connection_unavailable");let u,d;return new Promise((p,g)=>{const y=Am("",20);l.port1.start();const E=setTimeout(()=>{g(new Error("unsupported_event"))},s);d={messageChannel:l,onMessage(b){const A=b;if(A.data.eventId===y)switch(A.data.status){case"ack":clearTimeout(E),u=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),p(A.data.response);break;default:clearTimeout(E),clearTimeout(u),g(new Error("invalid_response"));break}}},this.handlers.add(d),l.port1.addEventListener("message",d.onMessage),this.target.postMessage({eventType:e,eventId:y,data:i},[l.port2])}).finally(()=>{d&&this.removeMessageHandler(d)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ri(){return window}function ZS(r){Ri().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z_(){return typeof Ri().WorkerGlobalScope<"u"&&typeof Ri().importScripts=="function"}async function JS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function $S(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function eA(){return Z_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J_="firebaseLocalStorageDb",tA=1,Kc="firebaseLocalStorage",$_="fbase_key";class Kl{constructor(e){this.request=e}toPromise(){return new Promise((e,i)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{i(this.request.error)})})}}function hh(r,e){return r.transaction([Kc],e?"readwrite":"readonly").objectStore(Kc)}function nA(){const r=indexedDB.deleteDatabase(J_);return new Kl(r).toPromise()}function Wd(){const r=indexedDB.open(J_,tA);return new Promise((e,i)=>{r.addEventListener("error",()=>{i(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(Kc,{keyPath:$_})}catch(l){i(l)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(Kc)?e(s):(s.close(),await nA(),e(await Wd()))})})}async function Z1(r,e,i){const s=hh(r,!0).put({[$_]:e,value:i});return new Kl(s).toPromise()}async function iA(r,e){const i=hh(r,!1).get(e),s=await new Kl(i).toPromise();return s===void 0?null:s.value}function J1(r,e){const i=hh(r,!0).delete(e);return new Kl(i).toPromise()}const rA=800,sA=3;class e0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Wd(),this.db)}async _withRetries(e){let i=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(i++>sA)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Z_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ch._getInstance(eA()),this.receiver._subscribe("keyChanged",async(e,i)=>({keyProcessed:(await this._poll()).includes(i.key)})),this.receiver._subscribe("ping",async(e,i)=>["keyChanged"])}async initializeSender(){var e,i;if(this.activeServiceWorker=await JS(),!this.activeServiceWorker)return;this.sender=new WS(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((i=s[0])===null||i===void 0)&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||$S()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Wd();return await Z1(e,Qc,"1"),await J1(e,Qc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,i){return this._withPendingWrite(async()=>(await this._withRetries(s=>Z1(s,e,i)),this.localCache[e]=i,this.notifyServiceWorker(e)))}async _get(e){const i=await this._withRetries(s=>iA(s,e));return this.localCache[e]=i,i}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(i=>J1(i,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(l=>{const u=hh(l,!1).getAll();return new Kl(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const i=[],s=new Set;if(e.length!==0)for(const{fbase_key:l,value:u}of e)s.add(l),JSON.stringify(this.localCache[l])!==JSON.stringify(u)&&(this.notifyListeners(l,u),i.push(l));for(const l of Object.keys(this.localCache))this.localCache[l]&&!s.has(l)&&(this.notifyListeners(l,null),i.push(l));return i}notifyListeners(e,i){this.localCache[e]=i;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(i)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),rA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,i){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(i)}_removeListener(e,i){this.listeners[e]&&(this.listeners[e].delete(i),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}e0.type="LOCAL";const aA=e0;new Gl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oA(r,e){return e?lr(e):(we(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm extends F_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return no(e,this._buildIdpRequest())}_linkToIdToken(e,i){return no(e,this._buildIdpRequest(i))}_getReauthenticationResolver(e){return no(e,this._buildIdpRequest())}_buildIdpRequest(e){const i={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(i.idToken=e),i}}function lA(r){return qS(r.auth,new wm(r),r.bypassAuthState)}function uA(r){const{auth:e,user:i}=r;return we(i,e,"internal-error"),BS(i,new wm(r),r.bypassAuthState)}async function cA(r){const{auth:e,user:i}=r;return we(i,e,"internal-error"),jS(i,new wm(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t0{constructor(e,i,s,l,u=!1){this.auth=e,this.resolver=s,this.user=l,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(i)?i:[i]}execute(){return new Promise(async(e,i)=>{this.pendingPromise={resolve:e,reject:i};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:i,sessionId:s,postBody:l,tenantId:u,error:d,type:p}=e;if(d){this.reject(d);return}const g={auth:this.auth,requestUri:i,sessionId:s,tenantId:u||void 0,postBody:l||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(g))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return lA;case"linkViaPopup":case"linkViaRedirect":return cA;case"reauthViaPopup":case"reauthViaRedirect":return uA;default:hr(this.auth,"internal-error")}}resolve(e){fr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){fr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hA=new Gl(2e3,1e4);class $a extends t0{constructor(e,i,s,l,u){super(e,i,l,u),this.provider=s,this.authWindow=null,this.pollId=null,$a.currentPopupAction&&$a.currentPopupAction.cancel(),$a.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return we(e,this.auth,"internal-error"),e}async onExecution(){fr(this.filter.length===1,"Popup operations only handle one event");const e=Am();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(i=>{this.reject(i)}),this.resolver._isIframeWebStorageSupported(this.auth,i=>{i||this.reject(wi(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(wi(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,$a.currentPopupAction=null}pollUserCancellation(){const e=()=>{var i,s;if(!((s=(i=this.authWindow)===null||i===void 0?void 0:i.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(wi(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,hA.get())};e()}}$a.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fA="pendingRedirect",xc=new Map;class dA extends t0{constructor(e,i,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,s),this.eventId=null}async execute(){let e=xc.get(this.auth._key());if(!e){try{const s=await mA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(i){e=()=>Promise.reject(i)}xc.set(this.auth._key(),e)}return this.bypassAuthState||xc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const i=await this.auth._redirectUserForId(e.eventId);if(i)return this.user=i,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function mA(r,e){const i=yA(e),s=gA(r);if(!await s._isAvailable())return!1;const l=await s._get(i)==="true";return await s._remove(i),l}function pA(r,e){xc.set(r._key(),e)}function gA(r){return lr(r._redirectPersistence)}function yA(r){return Oc(fA,r.config.apiKey,r.name)}async function vA(r,e,i=!1){if(oi(r.app))return Promise.reject(fs(r));const s=uh(r),l=oA(s,e),d=await new dA(s,l,i).execute();return d&&!i&&(delete d.user._redirectEventId,await s._persistUserIfCurrent(d.user),await s._setRedirectUser(null,e)),d}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _A=600*1e3;class EA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let i=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(i=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!TA(e)||(this.hasHandledPotentialRedirect=!0,i||(this.queuedRedirectEvent=e,i=!0)),i}sendToConsumer(e,i){var s;if(e.error&&!n0(e)){const l=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";i.onError(wi(this.auth,l))}else i.onAuthEvent(e)}isEventForConsumer(e,i){const s=i.eventId===null||!!e.eventId&&e.eventId===i.eventId;return i.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=_A&&this.cachedEventUids.clear(),this.cachedEventUids.has($1(e))}saveEventToCache(e){this.cachedEventUids.add($1(e)),this.lastProcessedEventTime=Date.now()}}function $1(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function n0({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function TA(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return n0(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bA(r,e={}){return mo(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,AA=/^https?/;async function wA(r){if(r.config.emulator)return;const{authorizedDomains:e}=await bA(r);for(const i of e)try{if(RA(i))return}catch{}hr(r,"unauthorized-domain")}function RA(r){const e=Yd(),{protocol:i,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const d=new URL(r);return d.hostname===""&&s===""?i==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):i==="chrome-extension:"&&d.hostname===s}if(!AA.test(i))return!1;if(SA.test(r))return s===r;const l=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+l+"|"+l+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CA=new Gl(3e4,6e4);function ev(){const r=Ri().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let i=0;i<r.CP.length;i++)r.CP[i]=null}}function IA(r){return new Promise((e,i)=>{var s,l,u;function d(){ev(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ev(),i(wi(r,"network-request-failed"))},timeout:CA.get()})}if(!((l=(s=Ri().gapi)===null||s===void 0?void 0:s.iframes)===null||l===void 0)&&l.Iframe)e(gapi.iframes.getContext());else if(!((u=Ri().gapi)===null||u===void 0)&&u.load)d();else{const p=OS("iframefcb");return Ri()[p]=()=>{gapi.load?d():i(wi(r,"network-request-failed"))},DS(`${NS()}?onload=${p}`).catch(g=>i(g))}}).catch(e=>{throw Mc=null,e})}let Mc=null;function DA(r){return Mc=Mc||IA(r),Mc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NA=new Gl(5e3,15e3),OA="__/auth/iframe",xA="emulator/auth/iframe",MA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},kA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function VA(r){const e=r.config;we(e.authDomain,r,"auth-domain-config-required");const i=e.emulator?Em(e,xA):`https://${r.config.authDomain}/${OA}`,s={apiKey:e.apiKey,appName:r.name,v:fo},l=kA.get(r.config.apiHost);l&&(s.eid=l);const u=r._getFrameworks();return u.length&&(s.fw=u.join(",")),`${i}?${Fl(s).slice(1)}`}async function LA(r){const e=await DA(r),i=Ri().gapi;return we(i,r,"internal-error"),e.open({where:document.body,url:VA(r),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:MA,dontclear:!0},s=>new Promise(async(l,u)=>{await s.restyle({setHideOnLeave:!1});const d=wi(r,"network-request-failed"),p=Ri().setTimeout(()=>{u(d)},NA.get());function g(){Ri().clearTimeout(p),l(s)}s.ping(g).then(g,()=>{u(d)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},PA=500,zA=600,jA="_blank",BA="http://localhost";class tv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function qA(r,e,i,s=PA,l=zA){const u=Math.max((window.screen.availHeight-l)/2,0).toString(),d=Math.max((window.screen.availWidth-s)/2,0).toString();let p="";const g=Object.assign(Object.assign({},UA),{width:s.toString(),height:l.toString(),top:u,left:d}),y=hn().toLowerCase();i&&(p=L_(y)?jA:i),k_(y)&&(e=e||BA,g.scrollbars="yes");const E=Object.entries(g).reduce((A,[k,Q])=>`${A}${k}=${Q},`,"");if(TS(y)&&p!=="_self")return HA(e||"",p),new tv(null);const b=window.open(e||"",p,E);we(b,r,"popup-blocked");try{b.focus()}catch{}return new tv(b)}function HA(r,e){const i=document.createElement("a");i.href=r,i.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),i.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FA="__/auth/handler",GA="emulator/auth/handler",QA=encodeURIComponent("fac");async function nv(r,e,i,s,l,u){we(r.config.authDomain,r,"auth-domain-config-required"),we(r.config.apiKey,r,"invalid-api-key");const d={apiKey:r.config.apiKey,appName:r.name,authType:i,redirectUrl:s,v:fo,eventId:l};if(e instanceof G_){e.setDefaultLanguage(r.languageCode),d.providerId=e.providerId||"",Qb(e.getCustomParameters())||(d.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,b]of Object.entries({}))d[E]=b}if(e instanceof Ql){const E=e.getScopes().filter(b=>b!=="");E.length>0&&(d.scopes=E.join(","))}r.tenantId&&(d.tid=r.tenantId);const p=d;for(const E of Object.keys(p))p[E]===void 0&&delete p[E];const g=await r._getAppCheckToken(),y=g?`#${QA}=${encodeURIComponent(g)}`:"";return`${KA(r)}?${Fl(p).slice(1)}${y}`}function KA({config:r}){return r.emulator?Em(r,GA):`https://${r.authDomain}/${FA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ld="webStorageSupport";class YA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=W_,this._completeRedirectFn=vA,this._overrideRedirectResult=pA}async _openPopup(e,i,s,l){var u;fr((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const d=await nv(e,i,s,Yd(),l);return qA(e,d,Am())}async _openRedirect(e,i,s,l){await this._originValidation(e);const u=await nv(e,i,s,Yd(),l);return ZS(u),new Promise(()=>{})}_initialize(e){const i=e._key();if(this.eventManagers[i]){const{manager:l,promise:u}=this.eventManagers[i];return l?Promise.resolve(l):(fr(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[i]={promise:s},s.catch(()=>{delete this.eventManagers[i]}),s}async initAndGetManager(e){const i=await LA(e),s=new EA(e);return i.register("authEvent",l=>(we(l==null?void 0:l.authEvent,e,"invalid-auth-event"),{status:s.onEvent(l.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=i,s}_isIframeWebStorageSupported(e,i){this.iframes[e._key()].send(Ld,{type:Ld},l=>{var u;const d=(u=l==null?void 0:l[0])===null||u===void 0?void 0:u[Ld];d!==void 0&&i(!!d),hr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const i=e._key();return this.originValidationPromises[i]||(this.originValidationPromises[i]=wA(e)),this.originValidationPromises[i]}get _shouldInitProactively(){return B_()||V_()||bm()}}const XA=YA;var iv="@firebase/auth",rv="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const i=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,i),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const i=this.internalListeners.get(e);i&&(this.internalListeners.delete(e),i(),this.updateProactiveRefresh())}assertAuthConfigured(){we(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZA(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function JA(r){so(new ea("auth",(e,{options:i})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:d,authDomain:p}=s.options;we(d&&!d.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:d,authDomain:p,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:q_(r)},y=new CS(s,l,u,g);return MS(y,i),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,i,s)=>{e.getProvider("auth-internal").initialize()})),so(new ea("auth-internal",e=>{const i=uh(e.getProvider("auth").getImmediate());return(s=>new WA(s))(i)},"PRIVATE").setInstantiationMode("EXPLICIT")),hs(iv,rv,ZA(r)),hs(iv,rv,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $A=300,ew=g_("authIdTokenMaxAge")||$A;let sv=null;const tw=r=>async e=>{const i=e&&await e.getIdTokenResult(),s=i&&(new Date().getTime()-Date.parse(i.issuedAtTime))/1e3;if(s&&s>ew)return;const l=i==null?void 0:i.token;sv!==l&&(sv=l,await fetch(r,{method:l?"POST":"DELETE",headers:l?{Authorization:`Bearer ${l}`}:{}}))};function nw(r=b_()){const e=ym(r,"auth");if(e.isInitialized())return e.getImmediate();const i=xS(r,{popupRedirectResolver:XA,persistence:[aA,YS,W_]}),s=g_("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const d=tw(u.toString());FS(i,d,()=>d(i.currentUser)),HS(i,p=>d(p))}}const l=m_("auth");return l&&kS(i,`http://${l}`),i}function iw(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}IS({loadJS(r){return new Promise((e,i)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=l=>{const u=wi("internal-error");u.customData=l,i(u)},s.type="text/javascript",s.charset="UTF-8",iw().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});JA("Browser");function Ac(r){throw new Error('Could not dynamically require "'+r+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Ud={exports:{}},av;function rw(){return av||(av=1,(function(r,e){(function(i){r.exports=i()})(function(){return(function i(s,l,u){function d(y,E){if(!l[y]){if(!s[y]){var b=typeof Ac=="function"&&Ac;if(!E&&b)return b(y,!0);if(p)return p(y,!0);var A=new Error("Cannot find module '"+y+"'");throw A.code="MODULE_NOT_FOUND",A}var k=l[y]={exports:{}};s[y][0].call(k.exports,function(Q){var K=s[y][1][Q];return d(K||Q)},k,k.exports,i,s,l,u)}return l[y].exports}for(var p=typeof Ac=="function"&&Ac,g=0;g<u.length;g++)d(u[g]);return d})({1:[function(i,s,l){function u(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}s.exports=u,u.EventEmitter=u,u.prototype._events=void 0,u.prototype._maxListeners=void 0,u.defaultMaxListeners=10,u.prototype.setMaxListeners=function(E){if(!p(E)||E<0||isNaN(E))throw TypeError("n must be a positive number");return this._maxListeners=E,this},u.prototype.emit=function(E){var b,A,k,Q,K,U;if(this._events||(this._events={}),E==="error"&&(!this._events.error||g(this._events.error)&&!this._events.error.length)){if(b=arguments[1],b instanceof Error)throw b;var W=new Error('Uncaught, unspecified "error" event. ('+b+")");throw W.context=b,W}if(A=this._events[E],y(A))return!1;if(d(A))switch(arguments.length){case 1:A.call(this);break;case 2:A.call(this,arguments[1]);break;case 3:A.call(this,arguments[1],arguments[2]);break;default:Q=Array.prototype.slice.call(arguments,1),A.apply(this,Q)}else if(g(A))for(Q=Array.prototype.slice.call(arguments,1),U=A.slice(),k=U.length,K=0;K<k;K++)U[K].apply(this,Q);return!0},u.prototype.addListener=function(E,b){var A;if(!d(b))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",E,d(b.listener)?b.listener:b),this._events[E]?g(this._events[E])?this._events[E].push(b):this._events[E]=[this._events[E],b]:this._events[E]=b,g(this._events[E])&&!this._events[E].warned&&(y(this._maxListeners)?A=u.defaultMaxListeners:A=this._maxListeners,A&&A>0&&this._events[E].length>A&&(this._events[E].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[E].length),typeof console.trace=="function"&&console.trace())),this},u.prototype.on=u.prototype.addListener,u.prototype.once=function(E,b){if(!d(b))throw TypeError("listener must be a function");var A=!1;function k(){this.removeListener(E,k),A||(A=!0,b.apply(this,arguments))}return k.listener=b,this.on(E,k),this},u.prototype.removeListener=function(E,b){var A,k,Q,K;if(!d(b))throw TypeError("listener must be a function");if(!this._events||!this._events[E])return this;if(A=this._events[E],Q=A.length,k=-1,A===b||d(A.listener)&&A.listener===b)delete this._events[E],this._events.removeListener&&this.emit("removeListener",E,b);else if(g(A)){for(K=Q;K-- >0;)if(A[K]===b||A[K].listener&&A[K].listener===b){k=K;break}if(k<0)return this;A.length===1?(A.length=0,delete this._events[E]):A.splice(k,1),this._events.removeListener&&this.emit("removeListener",E,b)}return this},u.prototype.removeAllListeners=function(E){var b,A;if(!this._events)return this;if(!this._events.removeListener)return arguments.length===0?this._events={}:this._events[E]&&delete this._events[E],this;if(arguments.length===0){for(b in this._events)b!=="removeListener"&&this.removeAllListeners(b);return this.removeAllListeners("removeListener"),this._events={},this}if(A=this._events[E],d(A))this.removeListener(E,A);else if(A)for(;A.length;)this.removeListener(E,A[A.length-1]);return delete this._events[E],this},u.prototype.listeners=function(E){var b;return!this._events||!this._events[E]?b=[]:d(this._events[E])?b=[this._events[E]]:b=this._events[E].slice(),b},u.prototype.listenerCount=function(E){if(this._events){var b=this._events[E];if(d(b))return 1;if(b)return b.length}return 0},u.listenerCount=function(E,b){return E.listenerCount(b)};function d(E){return typeof E=="function"}function p(E){return typeof E=="number"}function g(E){return typeof E=="object"&&E!==null}function y(E){return E===void 0}},{}],2:[function(i,s,l){var u,d,p,g,y;y=navigator.userAgent.toLowerCase(),g=navigator.platform.toLowerCase(),u=y.match(/(opera|ie|firefox|chrome|version)[\s\/:]([\w\d\.]+)?.*?(safari|version[\s\/:]([\w\d\.]+)|$)/)||[null,"unknown",0],p=u[1]==="ie"&&document.documentMode,d={name:u[1]==="version"?u[3]:u[1],version:p||parseFloat(u[1]==="opera"&&u[4]?u[4]:u[2]),platform:{name:y.match(/ip(?:ad|od|hone)/)?"ios":(y.match(/(?:webos|android)/)||g.match(/mac|win|linux/)||["other"])[0]}},d[d.name]=!0,d[d.name+parseInt(d.version,10)]=!0,d.platform[d.platform.name]=!0,s.exports=d},{}],3:[function(i,s,l){var u,d,p,g=function(A,k){for(var Q in k)y.call(k,Q)&&(A[Q]=k[Q]);function K(){this.constructor=A}return K.prototype=k.prototype,A.prototype=new K,A.__super__=k.prototype,A},y={}.hasOwnProperty,E=[].indexOf||function(A){for(var k=0,Q=this.length;k<Q;k++)if(k in this&&this[k]===A)return k;return-1},b=[].slice;u=i("events").EventEmitter,p=i("./browser.coffee"),d=(function(A){var k,Q;g(K,A),k={workerScript:"gif.worker.js",workers:2,repeat:0,background:"#fff",quality:10,width:null,height:null,transparent:null,debug:!1,dither:!1},Q={delay:500,copy:!1};function K(U){var W,J,te;this.running=!1,this.options={},this.frames=[],this.freeWorkers=[],this.activeWorkers=[],this.setOptions(U);for(J in k)te=k[J],(W=this.options)[J]==null&&(W[J]=te)}return K.prototype.setOption=function(U,W){if(this.options[U]=W,this._canvas!=null&&(U==="width"||U==="height"))return this._canvas[U]=W},K.prototype.setOptions=function(U){var W,J,te;J=[];for(W in U)y.call(U,W)&&(te=U[W],J.push(this.setOption(W,te)));return J},K.prototype.addFrame=function(U,W){var J,te;W==null&&(W={}),J={},J.transparent=this.options.transparent;for(te in Q)J[te]=W[te]||Q[te];if(this.options.width==null&&this.setOption("width",U.width),this.options.height==null&&this.setOption("height",U.height),typeof ImageData<"u"&&ImageData!==null&&U instanceof ImageData)J.data=U.data;else if(typeof CanvasRenderingContext2D<"u"&&CanvasRenderingContext2D!==null&&U instanceof CanvasRenderingContext2D||typeof WebGLRenderingContext<"u"&&WebGLRenderingContext!==null&&U instanceof WebGLRenderingContext)W.copy?J.data=this.getContextData(U):J.context=U;else if(U.childNodes!=null)W.copy?J.data=this.getImageData(U):J.image=U;else throw new Error("Invalid image");return this.frames.push(J)},K.prototype.render=function(){var U,W,J;if(this.running)throw new Error("Already running");if(this.options.width==null||this.options.height==null)throw new Error("Width and height must be set prior to rendering");if(this.running=!0,this.nextFrame=0,this.finishedFrames=0,this.imageParts=(function(){var te,fe,_e;for(_e=[],te=0,fe=this.frames.length;0<=fe?te<fe:te>fe;0<=fe?++te:--te)_e.push(null);return _e}).call(this),W=this.spawnWorkers(),this.options.globalPalette===!0)this.renderNextFrame();else for(U=0,J=W;0<=J?U<J:U>J;0<=J?++U:--U)this.renderNextFrame();return this.emit("start"),this.emit("progress",0)},K.prototype.abort=function(){for(var U;U=this.activeWorkers.shift(),U!=null;)this.log("killing active worker"),U.terminate();return this.running=!1,this.emit("abort")},K.prototype.spawnWorkers=function(){var U,W,J;return U=Math.min(this.options.workers,this.frames.length),(function(){J=[];for(var te=W=this.freeWorkers.length;W<=U?te<U:te>U;W<=U?te++:te--)J.push(te);return J}).apply(this).forEach((function(te){return function(fe){var _e;return te.log("spawning worker "+fe),_e=new Worker(te.options.workerScript),_e.onmessage=function(Te){return te.activeWorkers.splice(te.activeWorkers.indexOf(_e),1),te.freeWorkers.push(_e),te.frameFinished(Te.data)},te.freeWorkers.push(_e)}})(this)),U},K.prototype.frameFinished=function(U){var W,J;if(this.log("frame "+U.index+" finished - "+this.activeWorkers.length+" active"),this.finishedFrames++,this.emit("progress",this.finishedFrames/this.frames.length),this.imageParts[U.index]=U,this.options.globalPalette===!0&&(this.options.globalPalette=U.globalPalette,this.log("global palette analyzed"),this.frames.length>2))for(W=1,J=this.freeWorkers.length;1<=J?W<J:W>J;1<=J?++W:--W)this.renderNextFrame();return E.call(this.imageParts,null)>=0?this.renderNextFrame():this.finishRendering()},K.prototype.finishRendering=function(){var U,W,J,te,fe,_e,Te,R,w,C,O,M,V,I,$e,dt;for(R=0,I=this.imageParts,fe=0,w=I.length;fe<w;fe++)W=I[fe],R+=(W.data.length-1)*W.pageSize+W.cursor;for(R+=W.pageSize-W.cursor,this.log("rendering finished - filesize "+Math.round(R/1e3)+"kb"),U=new Uint8Array(R),M=0,$e=this.imageParts,_e=0,C=$e.length;_e<C;_e++)for(W=$e[_e],dt=W.data,J=Te=0,O=dt.length;Te<O;J=++Te)V=dt[J],U.set(V,M),J===W.data.length-1?M+=W.cursor:M+=W.pageSize;return te=new Blob([U],{type:"image/gif"}),this.emit("finished",te,U)},K.prototype.renderNextFrame=function(){var U,W,J;if(this.freeWorkers.length===0)throw new Error("No free workers");if(!(this.nextFrame>=this.frames.length))return U=this.frames[this.nextFrame++],J=this.freeWorkers.shift(),W=this.getTask(U),this.log("starting frame "+(W.index+1)+" of "+this.frames.length),this.activeWorkers.push(J),J.postMessage(W)},K.prototype.getContextData=function(U){return U.getImageData(0,0,this.options.width,this.options.height).data},K.prototype.getImageData=function(U){var W;return this._canvas==null&&(this._canvas=document.createElement("canvas"),this._canvas.width=this.options.width,this._canvas.height=this.options.height),W=this._canvas.getContext("2d"),W.setFill=this.options.background,W.fillRect(0,0,this.options.width,this.options.height),W.drawImage(U,0,0),this.getContextData(W)},K.prototype.getTask=function(U){var W,J;if(W=this.frames.indexOf(U),J={index:W,last:W===this.frames.length-1,delay:U.delay,transparent:U.transparent,width:this.options.width,height:this.options.height,quality:this.options.quality,dither:this.options.dither,globalPalette:this.options.globalPalette,repeat:this.options.repeat,canTransfer:p.name==="chrome"},U.data!=null)J.data=U.data;else if(U.context!=null)J.data=this.getContextData(U.context);else if(U.image!=null)J.data=this.getImageData(U.image);else throw new Error("Invalid frame");return J},K.prototype.log=function(){var U;if(U=1<=arguments.length?b.call(arguments,0):[],!!this.options.debug)return console.log.apply(console,U)},K})(u),s.exports=d},{"./browser.coffee":2,events:1}]},{},[3])(3)})})(Ud)),Ud.exports}var sw=rw();const aw=cb(sw),ow="/assets/gif.worker-CjkyQP34.js",lw={pencil:.7,marker:.5,wiggle:2.5,spray:1,stamp:.9,eraser:.35},uw=3,cw=10;let i0=0,ov=0;function hw(r,e,i,{theme:s,strokes:l,layers:u}){var y;const d=performance.now();d-ov>1e3/cw&&(i0++,ov=d);const p=s==="dark"?"#111":"#fff";r.fillStyle=p,r.fillRect(0,0,e,i);let g=0;for(const E of u)if(E.visible)for(const b of l){if(b.layerId!==E.id||!((y=b.points)!=null&&y.length)){g++;continue}r.save(),dw(r,b,p,g),r.restore(),g++}}function fw(r,e,i){const s=Math.sin(r*127.1+e*311.7+i*74.7)*43758.5453;return(s-Math.floor(s))*2-1}function is(r,e,i,s){const l=(i0+r*7)%uw;return fw(r+e*13,l,i)*s}function dw(r,e,i,s){var E;const l=e.type??"pencil",u=lw[l]??.7,d=l==="eraser"?i:e.color,p=e.size,g=l==="eraser"?1:e.opacity??1;if(r.globalAlpha=g,l==="spray"){r.fillStyle=d;for(let b=0;b<e.points.length;b++){const A=e.points[b],k=(E=e.sprayOffsets)==null?void 0:E[b];if(k)for(let Q=0;Q<k.length;Q++){const K=k[Q],U=is(s,b*100+Q,0,u),W=is(s,b*100+Q,1,u);r.fillRect(Math.floor(A.x+K.x+U),Math.floor(A.y+K.y+W),1,1)}}return}if(l==="stamp"){const b=e.points[0];if(!b)return;const A=p*2.5,k=A/2,Q=6,K=A/Q,U=is(s,999,0,u),W=is(s,999,1,u);r.fillStyle=d;let J=e.seed*999;for(let te=0;te<Q;te++)for(let fe=0;fe<Q;fe++)J=J*16807%2147483647,J%7>3&&r.fillRect(Math.floor(b.x-k+fe*K+U),Math.floor(b.y-k+te*K+W),Math.ceil(K),Math.ceil(K));return}r.strokeStyle=d,r.fillStyle=d,r.lineWidth=Math.max(1,p),r.lineCap=l==="marker"||l==="eraser"?"square":"round",r.lineJoin="round";const y=e.points;if(y.length===1){const b=Math.max(.5,p*.5),A=is(s,0,0,u),k=is(s,0,1,u);r.beginPath(),r.arc(y[0].x+A,y[0].y+k,b,0,Math.PI*2),r.fill();return}r.beginPath();for(let b=0;b<y.length;b++){const A=y[b].x+is(s,b,0,u),k=y[b].y+is(s,b,1,u);b===0?r.moveTo(A,k):r.lineTo(A,k)}r.stroke()}function lv(r){const e=[],i=Math.min(r,25);for(let s=0;s<i;s++){const l=Math.random()*r*.5,u=Math.random()*Math.PI*2;e.push({x:Math.cos(u)*l,y:Math.sin(u)*l})}return e}const mw=[{label:"32",size:32},{label:"48",size:48},{label:"64",size:64},{label:"96",size:96},{label:"128",size:128},{label:"256",size:256}],uv=64,Cl=512,Zd=1,r0=64,pw=.1,gw=1,yw=352,cv=220,vw=720,El=[{id:1,name:"Background",visible:!0,locked:!1},{id:2,name:"Linework",visible:!0,locked:!1}],_w=["#FFFFFF","#000000","#FACC15","#EF4444","#3B82F6","#22C55E"];var Ew="firebase",Tw="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */hs(Ew,Tw,"app");var hv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ds,s0;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(R,w){function C(){}C.prototype=w.prototype,R.D=w.prototype,R.prototype=new C,R.prototype.constructor=R,R.C=function(O,M,V){for(var I=Array(arguments.length-2),$e=2;$e<arguments.length;$e++)I[$e-2]=arguments[$e];return w.prototype[M].apply(O,I)}}function i(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,i),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function l(R,w,C){C||(C=0);var O=Array(16);if(typeof w=="string")for(var M=0;16>M;++M)O[M]=w.charCodeAt(C++)|w.charCodeAt(C++)<<8|w.charCodeAt(C++)<<16|w.charCodeAt(C++)<<24;else for(M=0;16>M;++M)O[M]=w[C++]|w[C++]<<8|w[C++]<<16|w[C++]<<24;w=R.g[0],C=R.g[1],M=R.g[2];var V=R.g[3],I=w+(V^C&(M^V))+O[0]+3614090360&4294967295;w=C+(I<<7&4294967295|I>>>25),I=V+(M^w&(C^M))+O[1]+3905402710&4294967295,V=w+(I<<12&4294967295|I>>>20),I=M+(C^V&(w^C))+O[2]+606105819&4294967295,M=V+(I<<17&4294967295|I>>>15),I=C+(w^M&(V^w))+O[3]+3250441966&4294967295,C=M+(I<<22&4294967295|I>>>10),I=w+(V^C&(M^V))+O[4]+4118548399&4294967295,w=C+(I<<7&4294967295|I>>>25),I=V+(M^w&(C^M))+O[5]+1200080426&4294967295,V=w+(I<<12&4294967295|I>>>20),I=M+(C^V&(w^C))+O[6]+2821735955&4294967295,M=V+(I<<17&4294967295|I>>>15),I=C+(w^M&(V^w))+O[7]+4249261313&4294967295,C=M+(I<<22&4294967295|I>>>10),I=w+(V^C&(M^V))+O[8]+1770035416&4294967295,w=C+(I<<7&4294967295|I>>>25),I=V+(M^w&(C^M))+O[9]+2336552879&4294967295,V=w+(I<<12&4294967295|I>>>20),I=M+(C^V&(w^C))+O[10]+4294925233&4294967295,M=V+(I<<17&4294967295|I>>>15),I=C+(w^M&(V^w))+O[11]+2304563134&4294967295,C=M+(I<<22&4294967295|I>>>10),I=w+(V^C&(M^V))+O[12]+1804603682&4294967295,w=C+(I<<7&4294967295|I>>>25),I=V+(M^w&(C^M))+O[13]+4254626195&4294967295,V=w+(I<<12&4294967295|I>>>20),I=M+(C^V&(w^C))+O[14]+2792965006&4294967295,M=V+(I<<17&4294967295|I>>>15),I=C+(w^M&(V^w))+O[15]+1236535329&4294967295,C=M+(I<<22&4294967295|I>>>10),I=w+(M^V&(C^M))+O[1]+4129170786&4294967295,w=C+(I<<5&4294967295|I>>>27),I=V+(C^M&(w^C))+O[6]+3225465664&4294967295,V=w+(I<<9&4294967295|I>>>23),I=M+(w^C&(V^w))+O[11]+643717713&4294967295,M=V+(I<<14&4294967295|I>>>18),I=C+(V^w&(M^V))+O[0]+3921069994&4294967295,C=M+(I<<20&4294967295|I>>>12),I=w+(M^V&(C^M))+O[5]+3593408605&4294967295,w=C+(I<<5&4294967295|I>>>27),I=V+(C^M&(w^C))+O[10]+38016083&4294967295,V=w+(I<<9&4294967295|I>>>23),I=M+(w^C&(V^w))+O[15]+3634488961&4294967295,M=V+(I<<14&4294967295|I>>>18),I=C+(V^w&(M^V))+O[4]+3889429448&4294967295,C=M+(I<<20&4294967295|I>>>12),I=w+(M^V&(C^M))+O[9]+568446438&4294967295,w=C+(I<<5&4294967295|I>>>27),I=V+(C^M&(w^C))+O[14]+3275163606&4294967295,V=w+(I<<9&4294967295|I>>>23),I=M+(w^C&(V^w))+O[3]+4107603335&4294967295,M=V+(I<<14&4294967295|I>>>18),I=C+(V^w&(M^V))+O[8]+1163531501&4294967295,C=M+(I<<20&4294967295|I>>>12),I=w+(M^V&(C^M))+O[13]+2850285829&4294967295,w=C+(I<<5&4294967295|I>>>27),I=V+(C^M&(w^C))+O[2]+4243563512&4294967295,V=w+(I<<9&4294967295|I>>>23),I=M+(w^C&(V^w))+O[7]+1735328473&4294967295,M=V+(I<<14&4294967295|I>>>18),I=C+(V^w&(M^V))+O[12]+2368359562&4294967295,C=M+(I<<20&4294967295|I>>>12),I=w+(C^M^V)+O[5]+4294588738&4294967295,w=C+(I<<4&4294967295|I>>>28),I=V+(w^C^M)+O[8]+2272392833&4294967295,V=w+(I<<11&4294967295|I>>>21),I=M+(V^w^C)+O[11]+1839030562&4294967295,M=V+(I<<16&4294967295|I>>>16),I=C+(M^V^w)+O[14]+4259657740&4294967295,C=M+(I<<23&4294967295|I>>>9),I=w+(C^M^V)+O[1]+2763975236&4294967295,w=C+(I<<4&4294967295|I>>>28),I=V+(w^C^M)+O[4]+1272893353&4294967295,V=w+(I<<11&4294967295|I>>>21),I=M+(V^w^C)+O[7]+4139469664&4294967295,M=V+(I<<16&4294967295|I>>>16),I=C+(M^V^w)+O[10]+3200236656&4294967295,C=M+(I<<23&4294967295|I>>>9),I=w+(C^M^V)+O[13]+681279174&4294967295,w=C+(I<<4&4294967295|I>>>28),I=V+(w^C^M)+O[0]+3936430074&4294967295,V=w+(I<<11&4294967295|I>>>21),I=M+(V^w^C)+O[3]+3572445317&4294967295,M=V+(I<<16&4294967295|I>>>16),I=C+(M^V^w)+O[6]+76029189&4294967295,C=M+(I<<23&4294967295|I>>>9),I=w+(C^M^V)+O[9]+3654602809&4294967295,w=C+(I<<4&4294967295|I>>>28),I=V+(w^C^M)+O[12]+3873151461&4294967295,V=w+(I<<11&4294967295|I>>>21),I=M+(V^w^C)+O[15]+530742520&4294967295,M=V+(I<<16&4294967295|I>>>16),I=C+(M^V^w)+O[2]+3299628645&4294967295,C=M+(I<<23&4294967295|I>>>9),I=w+(M^(C|~V))+O[0]+4096336452&4294967295,w=C+(I<<6&4294967295|I>>>26),I=V+(C^(w|~M))+O[7]+1126891415&4294967295,V=w+(I<<10&4294967295|I>>>22),I=M+(w^(V|~C))+O[14]+2878612391&4294967295,M=V+(I<<15&4294967295|I>>>17),I=C+(V^(M|~w))+O[5]+4237533241&4294967295,C=M+(I<<21&4294967295|I>>>11),I=w+(M^(C|~V))+O[12]+1700485571&4294967295,w=C+(I<<6&4294967295|I>>>26),I=V+(C^(w|~M))+O[3]+2399980690&4294967295,V=w+(I<<10&4294967295|I>>>22),I=M+(w^(V|~C))+O[10]+4293915773&4294967295,M=V+(I<<15&4294967295|I>>>17),I=C+(V^(M|~w))+O[1]+2240044497&4294967295,C=M+(I<<21&4294967295|I>>>11),I=w+(M^(C|~V))+O[8]+1873313359&4294967295,w=C+(I<<6&4294967295|I>>>26),I=V+(C^(w|~M))+O[15]+4264355552&4294967295,V=w+(I<<10&4294967295|I>>>22),I=M+(w^(V|~C))+O[6]+2734768916&4294967295,M=V+(I<<15&4294967295|I>>>17),I=C+(V^(M|~w))+O[13]+1309151649&4294967295,C=M+(I<<21&4294967295|I>>>11),I=w+(M^(C|~V))+O[4]+4149444226&4294967295,w=C+(I<<6&4294967295|I>>>26),I=V+(C^(w|~M))+O[11]+3174756917&4294967295,V=w+(I<<10&4294967295|I>>>22),I=M+(w^(V|~C))+O[2]+718787259&4294967295,M=V+(I<<15&4294967295|I>>>17),I=C+(V^(M|~w))+O[9]+3951481745&4294967295,R.g[0]=R.g[0]+w&4294967295,R.g[1]=R.g[1]+(M+(I<<21&4294967295|I>>>11))&4294967295,R.g[2]=R.g[2]+M&4294967295,R.g[3]=R.g[3]+V&4294967295}s.prototype.u=function(R,w){w===void 0&&(w=R.length);for(var C=w-this.blockSize,O=this.B,M=this.h,V=0;V<w;){if(M==0)for(;V<=C;)l(this,R,V),V+=this.blockSize;if(typeof R=="string"){for(;V<w;)if(O[M++]=R.charCodeAt(V++),M==this.blockSize){l(this,O),M=0;break}}else for(;V<w;)if(O[M++]=R[V++],M==this.blockSize){l(this,O),M=0;break}}this.h=M,this.o+=w},s.prototype.v=function(){var R=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);R[0]=128;for(var w=1;w<R.length-8;++w)R[w]=0;var C=8*this.o;for(w=R.length-8;w<R.length;++w)R[w]=C&255,C/=256;for(this.u(R),R=Array(16),w=C=0;4>w;++w)for(var O=0;32>O;O+=8)R[C++]=this.g[w]>>>O&255;return R};function u(R,w){var C=p;return Object.prototype.hasOwnProperty.call(C,R)?C[R]:C[R]=w(R)}function d(R,w){this.h=w;for(var C=[],O=!0,M=R.length-1;0<=M;M--){var V=R[M]|0;O&&V==w||(C[M]=V,O=!1)}this.g=C}var p={};function g(R){return-128<=R&&128>R?u(R,function(w){return new d([w|0],0>w?-1:0)}):new d([R|0],0>R?-1:0)}function y(R){if(isNaN(R)||!isFinite(R))return b;if(0>R)return U(y(-R));for(var w=[],C=1,O=0;R>=C;O++)w[O]=R/C|0,C*=4294967296;return new d(w,0)}function E(R,w){if(R.length==0)throw Error("number format error: empty string");if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(R.charAt(0)=="-")return U(E(R.substring(1),w));if(0<=R.indexOf("-"))throw Error('number format error: interior "-" character');for(var C=y(Math.pow(w,8)),O=b,M=0;M<R.length;M+=8){var V=Math.min(8,R.length-M),I=parseInt(R.substring(M,M+V),w);8>V?(V=y(Math.pow(w,V)),O=O.j(V).add(y(I))):(O=O.j(C),O=O.add(y(I)))}return O}var b=g(0),A=g(1),k=g(16777216);r=d.prototype,r.m=function(){if(K(this))return-U(this).m();for(var R=0,w=1,C=0;C<this.g.length;C++){var O=this.i(C);R+=(0<=O?O:4294967296+O)*w,w*=4294967296}return R},r.toString=function(R){if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(Q(this))return"0";if(K(this))return"-"+U(this).toString(R);for(var w=y(Math.pow(R,6)),C=this,O="";;){var M=fe(C,w).g;C=W(C,M.j(w));var V=((0<C.g.length?C.g[0]:C.h)>>>0).toString(R);if(C=M,Q(C))return V+O;for(;6>V.length;)V="0"+V;O=V+O}},r.i=function(R){return 0>R?0:R<this.g.length?this.g[R]:this.h};function Q(R){if(R.h!=0)return!1;for(var w=0;w<R.g.length;w++)if(R.g[w]!=0)return!1;return!0}function K(R){return R.h==-1}r.l=function(R){return R=W(this,R),K(R)?-1:Q(R)?0:1};function U(R){for(var w=R.g.length,C=[],O=0;O<w;O++)C[O]=~R.g[O];return new d(C,~R.h).add(A)}r.abs=function(){return K(this)?U(this):this},r.add=function(R){for(var w=Math.max(this.g.length,R.g.length),C=[],O=0,M=0;M<=w;M++){var V=O+(this.i(M)&65535)+(R.i(M)&65535),I=(V>>>16)+(this.i(M)>>>16)+(R.i(M)>>>16);O=I>>>16,V&=65535,I&=65535,C[M]=I<<16|V}return new d(C,C[C.length-1]&-2147483648?-1:0)};function W(R,w){return R.add(U(w))}r.j=function(R){if(Q(this)||Q(R))return b;if(K(this))return K(R)?U(this).j(U(R)):U(U(this).j(R));if(K(R))return U(this.j(U(R)));if(0>this.l(k)&&0>R.l(k))return y(this.m()*R.m());for(var w=this.g.length+R.g.length,C=[],O=0;O<2*w;O++)C[O]=0;for(O=0;O<this.g.length;O++)for(var M=0;M<R.g.length;M++){var V=this.i(O)>>>16,I=this.i(O)&65535,$e=R.i(M)>>>16,dt=R.i(M)&65535;C[2*O+2*M]+=I*dt,J(C,2*O+2*M),C[2*O+2*M+1]+=V*dt,J(C,2*O+2*M+1),C[2*O+2*M+1]+=I*$e,J(C,2*O+2*M+1),C[2*O+2*M+2]+=V*$e,J(C,2*O+2*M+2)}for(O=0;O<w;O++)C[O]=C[2*O+1]<<16|C[2*O];for(O=w;O<2*w;O++)C[O]=0;return new d(C,0)};function J(R,w){for(;(R[w]&65535)!=R[w];)R[w+1]+=R[w]>>>16,R[w]&=65535,w++}function te(R,w){this.g=R,this.h=w}function fe(R,w){if(Q(w))throw Error("division by zero");if(Q(R))return new te(b,b);if(K(R))return w=fe(U(R),w),new te(U(w.g),U(w.h));if(K(w))return w=fe(R,U(w)),new te(U(w.g),w.h);if(30<R.g.length){if(K(R)||K(w))throw Error("slowDivide_ only works with positive integers.");for(var C=A,O=w;0>=O.l(R);)C=_e(C),O=_e(O);var M=Te(C,1),V=Te(O,1);for(O=Te(O,2),C=Te(C,2);!Q(O);){var I=V.add(O);0>=I.l(R)&&(M=M.add(C),V=I),O=Te(O,1),C=Te(C,1)}return w=W(R,M.j(w)),new te(M,w)}for(M=b;0<=R.l(w);){for(C=Math.max(1,Math.floor(R.m()/w.m())),O=Math.ceil(Math.log(C)/Math.LN2),O=48>=O?1:Math.pow(2,O-48),V=y(C),I=V.j(w);K(I)||0<I.l(R);)C-=O,V=y(C),I=V.j(w);Q(V)&&(V=A),M=M.add(V),R=W(R,I)}return new te(M,R)}r.A=function(R){return fe(this,R).h},r.and=function(R){for(var w=Math.max(this.g.length,R.g.length),C=[],O=0;O<w;O++)C[O]=this.i(O)&R.i(O);return new d(C,this.h&R.h)},r.or=function(R){for(var w=Math.max(this.g.length,R.g.length),C=[],O=0;O<w;O++)C[O]=this.i(O)|R.i(O);return new d(C,this.h|R.h)},r.xor=function(R){for(var w=Math.max(this.g.length,R.g.length),C=[],O=0;O<w;O++)C[O]=this.i(O)^R.i(O);return new d(C,this.h^R.h)};function _e(R){for(var w=R.g.length+1,C=[],O=0;O<w;O++)C[O]=R.i(O)<<1|R.i(O-1)>>>31;return new d(C,R.h)}function Te(R,w){var C=w>>5;w%=32;for(var O=R.g.length-C,M=[],V=0;V<O;V++)M[V]=0<w?R.i(V+C)>>>w|R.i(V+C+1)<<32-w:R.i(V+C);return new d(M,R.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,s0=s,d.prototype.add=d.prototype.add,d.prototype.multiply=d.prototype.j,d.prototype.modulo=d.prototype.A,d.prototype.compare=d.prototype.l,d.prototype.toNumber=d.prototype.m,d.prototype.toString=d.prototype.toString,d.prototype.getBits=d.prototype.i,d.fromNumber=y,d.fromString=E,ds=d}).apply(typeof hv<"u"?hv:typeof self<"u"?self:typeof window<"u"?window:{});var wc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var a0,Tl,o0,kc,Jd,l0,u0,c0;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,m,_){return c==Array.prototype||c==Object.prototype||(c[m]=_.value),c};function i(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof wc=="object"&&wc];for(var m=0;m<c.length;++m){var _=c[m];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var s=i(this);function l(c,m){if(m)e:{var _=s;c=c.split(".");for(var S=0;S<c.length-1;S++){var P=c[S];if(!(P in _))break e;_=_[P]}c=c[c.length-1],S=_[c],m=m(S),m!=S&&m!=null&&e(_,c,{configurable:!0,writable:!0,value:m})}}function u(c,m){c instanceof String&&(c+="");var _=0,S=!1,P={next:function(){if(!S&&_<c.length){var G=_++;return{value:m(G,c[G]),done:!1}}return S=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}l("Array.prototype.values",function(c){return c||function(){return u(this,function(m,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var d=d||{},p=this||self;function g(c){var m=typeof c;return m=m!="object"?m:c?Array.isArray(c)?"array":m:"null",m=="array"||m=="object"&&typeof c.length=="number"}function y(c){var m=typeof c;return m=="object"&&c!=null||m=="function"}function E(c,m,_){return c.call.apply(c.bind,arguments)}function b(c,m,_){if(!c)throw Error();if(2<arguments.length){var S=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,S),c.apply(m,P)}}return function(){return c.apply(m,arguments)}}function A(c,m,_){return A=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:b,A.apply(null,arguments)}function k(c,m){var _=Array.prototype.slice.call(arguments,1);return function(){var S=_.slice();return S.push.apply(S,arguments),c.apply(this,S)}}function Q(c,m){function _(){}_.prototype=m.prototype,c.aa=m.prototype,c.prototype=new _,c.prototype.constructor=c,c.Qb=function(S,P,G){for(var se=Array(arguments.length-2),et=2;et<arguments.length;et++)se[et-2]=arguments[et];return m.prototype[P].apply(S,se)}}function K(c){const m=c.length;if(0<m){const _=Array(m);for(let S=0;S<m;S++)_[S]=c[S];return _}return[]}function U(c,m){for(let _=1;_<arguments.length;_++){const S=arguments[_];if(g(S)){const P=c.length||0,G=S.length||0;c.length=P+G;for(let se=0;se<G;se++)c[P+se]=S[se]}else c.push(S)}}class W{constructor(m,_){this.i=m,this.j=_,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function J(c){return/^[\s\xa0]*$/.test(c)}function te(){var c=p.navigator;return c&&(c=c.userAgent)?c:""}function fe(c){return fe[" "](c),c}fe[" "]=function(){};var _e=te().indexOf("Gecko")!=-1&&!(te().toLowerCase().indexOf("webkit")!=-1&&te().indexOf("Edge")==-1)&&!(te().indexOf("Trident")!=-1||te().indexOf("MSIE")!=-1)&&te().indexOf("Edge")==-1;function Te(c,m,_){for(const S in c)m.call(_,c[S],S,c)}function R(c,m){for(const _ in c)m.call(void 0,c[_],_,c)}function w(c){const m={};for(const _ in c)m[_]=c[_];return m}const C="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function O(c,m){let _,S;for(let P=1;P<arguments.length;P++){S=arguments[P];for(_ in S)c[_]=S[_];for(let G=0;G<C.length;G++)_=C[G],Object.prototype.hasOwnProperty.call(S,_)&&(c[_]=S[_])}}function M(c){var m=1;c=c.split(":");const _=[];for(;0<m&&c.length;)_.push(c.shift()),m--;return c.length&&_.push(c.join(":")),_}function V(c){p.setTimeout(()=>{throw c},0)}function I(){var c=Ge;let m=null;return c.g&&(m=c.g,c.g=c.g.next,c.g||(c.h=null),m.next=null),m}class $e{constructor(){this.h=this.g=null}add(m,_){const S=dt.get();S.set(m,_),this.h?this.h.next=S:this.g=S,this.h=S}}var dt=new W(()=>new q,c=>c.reset());class q{constructor(){this.next=this.g=this.h=null}set(m,_){this.h=m,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let ae,ye=!1,Ge=new $e,Qe=()=>{const c=p.Promise.resolve(void 0);ae=()=>{c.then(N)}};var N=()=>{for(var c;c=I();){try{c.h.call(c.g)}catch(_){V(_)}var m=dt;m.j(c),100>m.h&&(m.h++,c.next=m.g,m.g=c)}ye=!1};function X(){this.s=this.s,this.C=this.C}X.prototype.s=!1,X.prototype.ma=function(){this.s||(this.s=!0,this.N())},X.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ie(c,m){this.type=c,this.g=this.target=m,this.defaultPrevented=!1}ie.prototype.h=function(){this.defaultPrevented=!0};var ue=(function(){if(!p.addEventListener||!Object.defineProperty)return!1;var c=!1,m=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const _=()=>{};p.addEventListener("test",_,m),p.removeEventListener("test",_,m)}catch{}return c})();function pe(c,m){if(ie.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var _=this.type=c.type,S=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=m,m=c.relatedTarget){if(_e){e:{try{fe(m.nodeName);var P=!0;break e}catch{}P=!1}P||(m=null)}}else _=="mouseover"?m=c.fromElement:_=="mouseout"&&(m=c.toElement);this.relatedTarget=m,S?(this.clientX=S.clientX!==void 0?S.clientX:S.pageX,this.clientY=S.clientY!==void 0?S.clientY:S.pageY,this.screenX=S.screenX||0,this.screenY=S.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:Oe[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&pe.aa.h.call(this)}}Q(pe,ie);var Oe={2:"touch",3:"pen",4:"mouse"};pe.prototype.h=function(){pe.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var Me="closure_listenable_"+(1e6*Math.random()|0),Vt=0;function rt(c,m,_,S,P){this.listener=c,this.proxy=null,this.src=m,this.type=_,this.capture=!!S,this.ha=P,this.key=++Vt,this.da=this.fa=!1}function jn(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function fn(c){this.src=c,this.g={},this.h=0}fn.prototype.add=function(c,m,_,S,P){var G=c.toString();c=this.g[G],c||(c=this.g[G]=[],this.h++);var se=hi(c,m,S,P);return-1<se?(m=c[se],_||(m.fa=!1)):(m=new rt(m,this.src,G,!!S,P),m.fa=_,c.push(m)),m};function Mi(c,m){var _=m.type;if(_ in c.g){var S=c.g[_],P=Array.prototype.indexOf.call(S,m,void 0),G;(G=0<=P)&&Array.prototype.splice.call(S,P,1),G&&(jn(m),c.g[_].length==0&&(delete c.g[_],c.h--))}}function hi(c,m,_,S){for(var P=0;P<c.length;++P){var G=c[P];if(!G.da&&G.listener==m&&G.capture==!!_&&G.ha==S)return P}return-1}var _n="closure_lm_"+(1e6*Math.random()|0),ki={};function Vi(c,m,_,S,P){if(Array.isArray(m)){for(var G=0;G<m.length;G++)Vi(c,m[G],_,S,P);return null}return _=la(_),c&&c[Me]?c.K(m,_,y(S)?!!S.capture:!1,P):sn(c,m,_,!1,S,P)}function sn(c,m,_,S,P,G){if(!m)throw Error("Invalid event type");var se=y(P)?!!P.capture:!!P,et=Ss(c);if(et||(c[_n]=et=new fn(c)),_=et.add(m,_,S,se,G),_.proxy)return _;if(S=Dn(),_.proxy=S,S.src=c,S.listener=_,c.addEventListener)ue||(P=se),P===void 0&&(P=!1),c.addEventListener(m.toString(),S,P);else if(c.attachEvent)c.attachEvent(gr(m.toString()),S);else if(c.addListener&&c.removeListener)c.addListener(S);else throw Error("addEventListener and attachEvent are unavailable.");return _}function Dn(){function c(_){return m.call(c.src,c.listener,_)}const m=_o;return c}function jt(c,m,_,S,P){if(Array.isArray(m))for(var G=0;G<m.length;G++)jt(c,m[G],_,S,P);else S=y(S)?!!S.capture:!!S,_=la(_),c&&c[Me]?(c=c.i,m=String(m).toString(),m in c.g&&(G=c.g[m],_=hi(G,_,S,P),-1<_&&(jn(G[_]),Array.prototype.splice.call(G,_,1),G.length==0&&(delete c.g[m],c.h--)))):c&&(c=Ss(c))&&(m=c.g[m.toString()],c=-1,m&&(c=hi(m,_,S,P)),(_=-1<c?m[c]:null)&&$n(_))}function $n(c){if(typeof c!="number"&&c&&!c.da){var m=c.src;if(m&&m[Me])Mi(m.i,c);else{var _=c.type,S=c.proxy;m.removeEventListener?m.removeEventListener(_,S,c.capture):m.detachEvent?m.detachEvent(gr(_),S):m.addListener&&m.removeListener&&m.removeListener(S),(_=Ss(m))?(Mi(_,c),_.h==0&&(_.src=null,m[_n]=null)):jn(c)}}}function gr(c){return c in ki?ki[c]:ki[c]="on"+c}function _o(c,m){if(c.da)c=!0;else{m=new pe(m,this);var _=c.listener,S=c.ha||c.src;c.fa&&$n(c),c=_.call(S,m)}return c}function Ss(c){return c=c[_n],c instanceof fn?c:null}var Lt="__closure_events_fn_"+(1e9*Math.random()>>>0);function la(c){return typeof c=="function"?c:(c[Lt]||(c[Lt]=function(m){return c.handleEvent(m)}),c[Lt])}function Tt(){X.call(this),this.i=new fn(this),this.M=this,this.F=null}Q(Tt,X),Tt.prototype[Me]=!0,Tt.prototype.removeEventListener=function(c,m,_,S){jt(this,c,m,_,S)};function Rt(c,m){var _,S=c.F;if(S)for(_=[];S;S=S.F)_.push(S);if(c=c.M,S=m.type||m,typeof m=="string")m=new ie(m,c);else if(m instanceof ie)m.target=m.target||c;else{var P=m;m=new ie(S,c),O(m,P)}if(P=!0,_)for(var G=_.length-1;0<=G;G--){var se=m.g=_[G];P=ei(se,S,!0,m)&&P}if(se=m.g=c,P=ei(se,S,!0,m)&&P,P=ei(se,S,!1,m)&&P,_)for(G=0;G<_.length;G++)se=m.g=_[G],P=ei(se,S,!1,m)&&P}Tt.prototype.N=function(){if(Tt.aa.N.call(this),this.i){var c=this.i,m;for(m in c.g){for(var _=c.g[m],S=0;S<_.length;S++)jn(_[S]);delete c.g[m],c.h--}}this.F=null},Tt.prototype.K=function(c,m,_,S){return this.i.add(String(c),m,!1,_,S)},Tt.prototype.L=function(c,m,_,S){return this.i.add(String(c),m,!0,_,S)};function ei(c,m,_,S){if(m=c.i.g[String(m)],!m)return!0;m=m.concat();for(var P=!0,G=0;G<m.length;++G){var se=m[G];if(se&&!se.da&&se.capture==_){var et=se.listener,It=se.ha||se.src;se.fa&&Mi(c.i,se),P=et.call(It,S)!==!1&&P}}return P&&!S.defaultPrevented}function ua(c,m,_){if(typeof c=="function")_&&(c=A(c,_));else if(c&&typeof c.handleEvent=="function")c=A(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:p.setTimeout(c,m||0)}function As(c){c.g=ua(()=>{c.g=null,c.i&&(c.i=!1,As(c))},c.l);const m=c.h;c.h=null,c.m.apply(null,m)}class Eo extends X{constructor(m,_){super(),this.m=m,this.l=_,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:As(this)}N(){super.N(),this.g&&(p.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Li(c){X.call(this),this.h=c,this.g={}}Q(Li,X);var fi=[];function Bt(c){Te(c.g,function(m,_){this.g.hasOwnProperty(_)&&$n(m)},c),c.g={}}Li.prototype.N=function(){Li.aa.N.call(this),Bt(this)},Li.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var En=p.JSON.stringify,Yt=p.JSON.parse,le=class{stringify(c){return p.JSON.stringify(c,void 0)}parse(c){return p.JSON.parse(c,void 0)}};function oe(){}oe.prototype.h=null;function Se(c){return c.h||(c.h=c.i())}function Re(){}var Le={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function he(){ie.call(this,"d")}Q(he,ie);function He(){ie.call(this,"c")}Q(He,ie);var Ke={},Ct=null;function dn(){return Ct=Ct||new Tt}Ke.La="serverreachability";function Nn(c){ie.call(this,Ke.La,c)}Q(Nn,ie);function ti(c){const m=dn();Rt(m,new Nn(m))}Ke.STAT_EVENT="statevent";function yr(c,m){ie.call(this,Ke.STAT_EVENT,c),this.stat=m}Q(yr,ie);function Xt(c){const m=dn();Rt(m,new yr(m,c))}Ke.Ma="timingevent";function To(c,m){ie.call(this,Ke.Ma,c),this.size=m}Q(To,ie);function vr(c,m){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return p.setTimeout(function(){c()},m)}function _r(){this.g=!0}_r.prototype.xa=function(){this.g=!1};function bo(c,m,_,S,P,G){c.info(function(){if(c.g)if(G)for(var se="",et=G.split("&"),It=0;It<et.length;It++){var ke=et[It].split("=");if(1<ke.length){var Ht=ke[0];ke=ke[1];var Ft=Ht.split("_");se=2<=Ft.length&&Ft[1]=="type"?se+(Ht+"="+ke+"&"):se+(Ht+"=redacted&")}}else se=null;else se=G;return"XMLHTTP REQ ("+S+") [attempt "+P+"]: "+m+`
`+_+`
`+se})}function So(c,m,_,S,P,G,se){c.info(function(){return"XMLHTTP RESP ("+S+") [ attempt "+P+"]: "+m+`
`+_+`
`+G+" "+se})}function Ui(c,m,_,S){c.info(function(){return"XMLHTTP TEXT ("+m+"): "+di(c,_)+(S?" "+S:"")})}function $l(c,m){c.info(function(){return"TIMEOUT: "+m})}_r.prototype.info=function(){};function di(c,m){if(!c.g)return m;if(!m)return null;try{var _=JSON.parse(m);if(_){for(c=0;c<_.length;c++)if(Array.isArray(_[c])){var S=_[c];if(!(2>S.length)){var P=S[1];if(Array.isArray(P)&&!(1>P.length)){var G=P[0];if(G!="noop"&&G!="stop"&&G!="close")for(var se=1;se<P.length;se++)P[se]=""}}}}return En(_)}catch{return m}}var yt={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Wt={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},mi;function Er(){}Q(Er,oe),Er.prototype.g=function(){return new XMLHttpRequest},Er.prototype.i=function(){return{}},mi=new Er;function pi(c,m,_,S){this.j=c,this.i=m,this.l=_,this.R=S||1,this.U=new Li(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new eu}function eu(){this.i=null,this.g="",this.h=!1}var Ao={},Pi={};function ws(c,m,_){c.L=1,c.v=Is(vt(m)),c.m=_,c.P=!0,zi(c,null)}function zi(c,m){c.F=Date.now(),ni(c),c.A=vt(c.v);var _=c.A,S=c.R;Array.isArray(S)||(S=[String(S)]),qi(_.i,"t",S),c.C=0,_=c.j.J,c.h=new eu,c.g=gu(c.j,_?m:null,!c.m),0<c.O&&(c.M=new Eo(A(c.Y,c,c.g),c.O)),m=c.U,_=c.g,S=c.ca;var P="readystatechange";Array.isArray(P)||(P&&(fi[0]=P.toString()),P=fi);for(var G=0;G<P.length;G++){var se=Vi(_,P[G],S||m.handleEvent,!1,m.h||m);if(!se)break;m.g[se.key]=se}m=c.H?w(c.H):{},c.m?(c.u||(c.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,m)):(c.u="GET",c.g.ea(c.A,c.u,null,m)),ti(),bo(c.i,c.u,c.A,c.l,c.R,c.m)}pi.prototype.ca=function(c){c=c.target;const m=this.M;m&&gn(c)==3?m.j():this.Y(c)},pi.prototype.Y=function(c){try{if(c==this.g)e:{const Ft=gn(this.g);var m=this.g.Ba();const Mr=this.g.Z();if(!(3>Ft)&&(Ft!=3||this.g&&(this.h.h||this.g.oa()||Os(this.g)))){this.J||Ft!=4||m==7||(m==8||0>=Mr?ti(3):ti(2)),ca(this);var _=this.g.Z();this.X=_;t:if(ji(this)){var S=Os(this.g);c="";var P=S.length,G=gn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){mn(this),Tr(this);var se="";break t}this.h.i=new p.TextDecoder}for(m=0;m<P;m++)this.h.h=!0,c+=this.h.i.decode(S[m],{stream:!(G&&m==P-1)});S.length=0,this.h.g+=c,this.C=0,se=this.h.g}else se=this.g.oa();if(this.o=_==200,So(this.i,this.u,this.A,this.l,this.R,Ft,_),this.o){if(this.T&&!this.K){t:{if(this.g){var et,It=this.g;if((et=It.g?It.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!J(et)){var ke=et;break t}}ke=null}if(_=ke)Ui(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,gi(this,_);else{this.o=!1,this.s=3,Xt(12),mn(this),Tr(this);break e}}if(this.P){_=!0;let bn;for(;!this.J&&this.C<se.length;)if(bn=Rs(this,se),bn==Pi){Ft==4&&(this.s=4,Xt(14),_=!1),Ui(this.i,this.l,null,"[Incomplete Response]");break}else if(bn==Ao){this.s=4,Xt(15),Ui(this.i,this.l,se,"[Invalid Chunk]"),_=!1;break}else Ui(this.i,this.l,bn,null),gi(this,bn);if(ji(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ft!=4||se.length!=0||this.h.h||(this.s=1,Xt(16),_=!1),this.o=this.o&&_,!_)Ui(this.i,this.l,se,"[Invalid Chunked Response]"),mn(this),Tr(this);else if(0<se.length&&!this.W){this.W=!0;var Ht=this.j;Ht.g==this&&Ht.ba&&!Ht.M&&(Ht.j.info("Great, no buffering proxy detected. Bytes received: "+se.length),Vo(Ht),Ht.M=!0,Xt(11))}}else Ui(this.i,this.l,se,null),gi(this,se);Ft==4&&mn(this),this.o&&!this.J&&(Ft==4?du(this.j,this):(this.o=!1,ni(this)))}else ou(this.g),_==400&&0<se.indexOf("Unknown SID")?(this.s=3,Xt(12)):(this.s=0,Xt(13)),mn(this),Tr(this)}}}catch{}finally{}};function ji(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function Rs(c,m){var _=c.C,S=m.indexOf(`
`,_);return S==-1?Pi:(_=Number(m.substring(_,S)),isNaN(_)?Ao:(S+=1,S+_>m.length?Pi:(m=m.slice(S,S+_),c.C=S+_,m)))}pi.prototype.cancel=function(){this.J=!0,mn(this)};function ni(c){c.S=Date.now()+c.I,bt(c,c.I)}function bt(c,m){if(c.B!=null)throw Error("WatchDog timer not null");c.B=vr(A(c.ba,c),m)}function ca(c){c.B&&(p.clearTimeout(c.B),c.B=null)}pi.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?($l(this.i,this.A),this.L!=2&&(ti(),Xt(17)),mn(this),this.s=2,Tr(this)):bt(this,this.S-c)};function Tr(c){c.j.G==0||c.J||du(c.j,c)}function mn(c){ca(c);var m=c.M;m&&typeof m.ma=="function"&&m.ma(),c.M=null,Bt(c.U),c.g&&(m=c.g,c.g=null,m.abort(),m.ma())}function gi(c,m){try{var _=c.j;if(_.G!=0&&(_.g==c||br(_.h,c))){if(!c.K&&br(_.h,c)&&_.G==3){try{var S=_.Da.g.parse(m)}catch{S=null}if(Array.isArray(S)&&S.length==3){var P=S;if(P[0]==0){e:if(!_.u){if(_.g)if(_.g.F+3e3<c.F)Or(_),Nr(_);else break e;ko(_),Xt(18)}}else _.za=P[1],0<_.za-_.T&&37500>P[2]&&_.F&&_.v==0&&!_.C&&(_.C=vr(A(_.Za,_),6e3));if(1>=tu(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else Fi(_,11)}else if((c.K||_.g==c)&&Or(_),!J(m))for(P=_.Da.g.parse(m),m=0;m<P.length;m++){let ke=P[m];if(_.T=ke[0],ke=ke[1],_.G==2)if(ke[0]=="c"){_.K=ke[1],_.ia=ke[2];const Ht=ke[3];Ht!=null&&(_.la=Ht,_.j.info("VER="+_.la));const Ft=ke[4];Ft!=null&&(_.Aa=Ft,_.j.info("SVER="+_.Aa));const Mr=ke[5];Mr!=null&&typeof Mr=="number"&&0<Mr&&(S=1.5*Mr,_.L=S,_.j.info("backChannelRequestTimeoutMs_="+S)),S=_;const bn=c.g;if(bn){const ks=bn.g?bn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ks){var G=S.h;G.g||ks.indexOf("spdy")==-1&&ks.indexOf("quic")==-1&&ks.indexOf("h2")==-1||(G.j=G.l,G.g=new Set,G.h&&(Sr(G,G.h),G.h=null))}if(S.D){const Gi=bn.g?bn.g.getResponseHeader("X-HTTP-Session-Id"):null;Gi&&(S.ya=Gi,Xe(S.I,S.D,Gi))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-c.F,_.j.info("Handshake RTT: "+_.R+"ms")),S=_;var se=c;if(S.qa=pu(S,S.J?S.ia:null,S.W),se.K){Bn(S.h,se);var et=se,It=S.L;It&&(et.I=It),et.B&&(ca(et),ni(et)),S.g=se}else hu(S);0<_.i.length&&va(_)}else ke[0]!="stop"&&ke[0]!="close"||Fi(_,7);else _.G==3&&(ke[0]=="stop"||ke[0]=="close"?ke[0]=="stop"?Fi(_,7):xo(_):ke[0]!="noop"&&_.l&&_.l.ta(ke),_.v=0)}}ti(4)}catch{}}var Ah=class{constructor(c,m){this.g=c,this.map=m}};function wo(c){this.l=c||10,p.PerformanceNavigationTiming?(c=p.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(p.chrome&&p.chrome.loadTimes&&p.chrome.loadTimes()&&p.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ro(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function tu(c){return c.h?1:c.g?c.g.size:0}function br(c,m){return c.h?c.h==m:c.g?c.g.has(m):!1}function Sr(c,m){c.g?c.g.add(m):c.h=m}function Bn(c,m){c.h&&c.h==m?c.h=null:c.g&&c.g.has(m)&&c.g.delete(m)}wo.prototype.cancel=function(){if(this.i=pn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function pn(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let m=c.i;for(const _ of c.g.values())m=m.concat(_.D);return m}return K(c.i)}function nu(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(g(c)){for(var m=[],_=c.length,S=0;S<_;S++)m.push(c[S]);return m}m=[],_=0;for(S in c)m[_++]=c[S];return m}function wh(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(g(c)||typeof c=="string"){var m=[];c=c.length;for(var _=0;_<c;_++)m.push(_);return m}m=[],_=0;for(const S in c)m[_++]=S;return m}}}function ha(c,m){if(c.forEach&&typeof c.forEach=="function")c.forEach(m,void 0);else if(g(c)||typeof c=="string")Array.prototype.forEach.call(c,m,void 0);else for(var _=wh(c),S=nu(c),P=S.length,G=0;G<P;G++)m.call(void 0,S[G],_&&_[G],c)}var Co=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function fa(c,m){if(c){c=c.split("&");for(var _=0;_<c.length;_++){var S=c[_].indexOf("="),P=null;if(0<=S){var G=c[_].substring(0,S);P=c[_].substring(S+1)}else G=c[_];m(G,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function Bi(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof Bi){this.h=c.h,Ar(this,c.j),this.o=c.o,this.g=c.g,Cs(this,c.s),this.l=c.l;var m=c.i,_=new yi;_.i=m.i,m.g&&(_.g=new Map(m.g),_.h=m.h),da(this,_),this.m=c.m}else c&&(m=String(c).match(Co))?(this.h=!1,Ar(this,m[1]||"",!0),this.o=wr(m[2]||""),this.g=wr(m[3]||"",!0),Cs(this,m[4]),this.l=wr(m[5]||"",!0),da(this,m[6]||"",!0),this.m=wr(m[7]||"")):(this.h=!1,this.i=new yi(null,this.h))}Bi.prototype.toString=function(){var c=[],m=this.j;m&&c.push(qn(m,Io,!0),":");var _=this.g;return(_||m=="file")&&(c.push("//"),(m=this.o)&&c.push(qn(m,Io,!0),"@"),c.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&c.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&c.push("/"),c.push(qn(_,_.charAt(0)=="/"?Do:iu,!0))),(_=this.i.toString())&&c.push("?",_),(_=this.m)&&c.push("#",qn(_,Ih)),c.join("")};function vt(c){return new Bi(c)}function Ar(c,m,_){c.j=_?wr(m,!0):m,c.j&&(c.j=c.j.replace(/:$/,""))}function Cs(c,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);c.s=m}else c.s=null}function da(c,m,_){m instanceof yi?(c.i=m,ru(c.i,c.h)):(_||(m=qn(m,Ch)),c.i=new yi(m,c.h))}function Xe(c,m,_){c.i.set(m,_)}function Is(c){return Xe(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function wr(c,m){return c?m?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function qn(c,m,_){return typeof c=="string"?(c=encodeURI(c).replace(m,Rh),_&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function Rh(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Io=/[#\/\?@]/g,iu=/[#\?:]/g,Do=/[#\?]/g,Ch=/[#\?@]/g,Ih=/#/g;function yi(c,m){this.h=this.g=null,this.i=c||null,this.j=!!m}function qt(c){c.g||(c.g=new Map,c.h=0,c.i&&fa(c.i,function(m,_){c.add(decodeURIComponent(m.replace(/\+/g," ")),_)}))}r=yi.prototype,r.add=function(c,m){qt(this),this.i=null,c=On(this,c);var _=this.g.get(c);return _||this.g.set(c,_=[]),_.push(m),this.h+=1,this};function ma(c,m){qt(c),m=On(c,m),c.g.has(m)&&(c.i=null,c.h-=c.g.get(m).length,c.g.delete(m))}function pa(c,m){return qt(c),m=On(c,m),c.g.has(m)}r.forEach=function(c,m){qt(this),this.g.forEach(function(_,S){_.forEach(function(P){c.call(m,P,S,this)},this)},this)},r.na=function(){qt(this);const c=Array.from(this.g.values()),m=Array.from(this.g.keys()),_=[];for(let S=0;S<m.length;S++){const P=c[S];for(let G=0;G<P.length;G++)_.push(m[S])}return _},r.V=function(c){qt(this);let m=[];if(typeof c=="string")pa(this,c)&&(m=m.concat(this.g.get(On(this,c))));else{c=Array.from(this.g.values());for(let _=0;_<c.length;_++)m=m.concat(c[_])}return m},r.set=function(c,m){return qt(this),this.i=null,c=On(this,c),pa(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[m]),this.h+=1,this},r.get=function(c,m){return c?(c=this.V(c),0<c.length?String(c[0]):m):m};function qi(c,m,_){ma(c,m),0<_.length&&(c.i=null,c.g.set(On(c,m),K(_)),c.h+=_.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],m=Array.from(this.g.keys());for(var _=0;_<m.length;_++){var S=m[_];const G=encodeURIComponent(String(S)),se=this.V(S);for(S=0;S<se.length;S++){var P=G;se[S]!==""&&(P+="="+encodeURIComponent(String(se[S]))),c.push(P)}}return this.i=c.join("&")};function On(c,m){return m=String(m),c.j&&(m=m.toLowerCase()),m}function ru(c,m){m&&!c.j&&(qt(c),c.i=null,c.g.forEach(function(_,S){var P=S.toLowerCase();S!=P&&(ma(this,S),qi(this,P,_))},c)),c.j=m}function No(c,m){const _=new _r;if(p.Image){const S=new Image;S.onload=k(Tn,_,"TestLoadImage: loaded",!0,m,S),S.onerror=k(Tn,_,"TestLoadImage: error",!1,m,S),S.onabort=k(Tn,_,"TestLoadImage: abort",!1,m,S),S.ontimeout=k(Tn,_,"TestLoadImage: timeout",!1,m,S),p.setTimeout(function(){S.ontimeout&&S.ontimeout()},1e4),S.src=c}else m(!1)}function su(c,m){const _=new _r,S=new AbortController,P=setTimeout(()=>{S.abort(),Tn(_,"TestPingServer: timeout",!1,m)},1e4);fetch(c,{signal:S.signal}).then(G=>{clearTimeout(P),G.ok?Tn(_,"TestPingServer: ok",!0,m):Tn(_,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(P),Tn(_,"TestPingServer: error",!1,m)})}function Tn(c,m,_,S,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),S(_)}catch{}}function ii(){this.g=new le}function Oo(c,m,_){const S=_||"";try{ha(c,function(P,G){let se=P;y(P)&&(se=En(P)),m.push(S+G+"="+encodeURIComponent(se))})}catch(P){throw m.push(S+"type="+encodeURIComponent("_badmap")),P}}function vi(c){this.l=c.Ub||null,this.j=c.eb||!1}Q(vi,oe),vi.prototype.g=function(){return new xn(this.l,this.j)},vi.prototype.i=(function(c){return function(){return c}})({});function xn(c,m){Tt.call(this),this.D=c,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}Q(xn,Tt),r=xn.prototype,r.open=function(c,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=m,this.readyState=1,Rr(this)},r.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(m.body=c),(this.D||p).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,_i(this)),this.readyState=0},r.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Rr(this)),this.g&&(this.readyState=3,Rr(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof p.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ga(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function ga(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}r.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var m=c.value?c.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!c.done}))&&(this.response=this.responseText+=m)}c.done?_i(this):Rr(this),this.readyState==3&&ga(this)}},r.Ra=function(c){this.g&&(this.response=this.responseText=c,_i(this))},r.Qa=function(c){this.g&&(this.response=c,_i(this))},r.ga=function(){this.g&&_i(this)};function _i(c){c.readyState=4,c.l=null,c.j=null,c.v=null,Rr(c)}r.setRequestHeader=function(c,m){this.u.append(c,m)},r.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],m=this.h.entries();for(var _=m.next();!_.done;)_=_.value,c.push(_[0]+": "+_[1]),_=m.next();return c.join(`\r
`)};function Rr(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(xn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Ds(c){let m="";return Te(c,function(_,S){m+=S,m+=":",m+=_,m+=`\r
`}),m}function Cr(c,m,_){e:{for(S in _){var S=!1;break e}S=!0}S||(_=Ds(_),typeof c=="string"?_!=null&&encodeURIComponent(String(_)):Xe(c,m,_))}function ut(c){Tt.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}Q(ut,Tt);var an=/^https?$/i,Hi=["POST","PUT"];r=ut.prototype,r.Ha=function(c){this.J=c},r.ea=function(c,m,_,S){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);m=m?m.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():mi.g(),this.v=this.o?Se(this.o):Se(mi),this.g.onreadystatechange=A(this.Ea,this);try{this.B=!0,this.g.open(m,String(c),!0),this.B=!1}catch(G){Ns(this,G);return}if(c=_||"",_=new Map(this.headers),S)if(Object.getPrototypeOf(S)===Object.prototype)for(var P in S)_.set(P,S[P]);else if(typeof S.keys=="function"&&typeof S.get=="function")for(const G of S.keys())_.set(G,S.get(G));else throw Error("Unknown input type for opt_headers: "+String(S));S=Array.from(_.keys()).find(G=>G.toLowerCase()=="content-type"),P=p.FormData&&c instanceof p.FormData,!(0<=Array.prototype.indexOf.call(Hi,m,void 0))||S||P||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[G,se]of _)this.g.setRequestHeader(G,se);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ya(this),this.u=!0,this.g.send(c),this.u=!1}catch(G){Ns(this,G)}};function Ns(c,m){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=m,c.m=5,Ir(c),Dr(c)}function Ir(c){c.A||(c.A=!0,Rt(c,"complete"),Rt(c,"error"))}r.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,Rt(this,"complete"),Rt(this,"abort"),Dr(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Dr(this,!0)),ut.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?au(this):this.bb())},r.bb=function(){au(this)};function au(c){if(c.h&&typeof d<"u"&&(!c.v[1]||gn(c)!=4||c.Z()!=2)){if(c.u&&gn(c)==4)ua(c.Ea,0,c);else if(Rt(c,"readystatechange"),gn(c)==4){c.h=!1;try{const se=c.Z();e:switch(se){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break e;default:m=!1}var _;if(!(_=m)){var S;if(S=se===0){var P=String(c.D).match(Co)[1]||null;!P&&p.self&&p.self.location&&(P=p.self.location.protocol.slice(0,-1)),S=!an.test(P?P.toLowerCase():"")}_=S}if(_)Rt(c,"complete"),Rt(c,"success");else{c.m=6;try{var G=2<gn(c)?c.g.statusText:""}catch{G=""}c.l=G+" ["+c.Z()+"]",Ir(c)}}finally{Dr(c)}}}}function Dr(c,m){if(c.g){ya(c);const _=c.g,S=c.v[0]?()=>{}:null;c.g=null,c.v=null,m||Rt(c,"ready");try{_.onreadystatechange=S}catch{}}}function ya(c){c.I&&(p.clearTimeout(c.I),c.I=null)}r.isActive=function(){return!!this.g};function gn(c){return c.g?c.g.readyState:0}r.Z=function(){try{return 2<gn(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(c){if(this.g){var m=this.g.responseText;return c&&m.indexOf(c)==0&&(m=m.substring(c.length)),Yt(m)}};function Os(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function ou(c){const m={};c=(c.g&&2<=gn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let S=0;S<c.length;S++){if(J(c[S]))continue;var _=M(c[S]);const P=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const G=m[P]||[];m[P]=G,G.push(_)}R(m,function(S){return S.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function xs(c,m,_){return _&&_.internalChannelParams&&_.internalChannelParams[c]||m}function lu(c){this.Aa=0,this.i=[],this.j=new _r,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=xs("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=xs("baseRetryDelayMs",5e3,c),this.cb=xs("retryDelaySeedMs",1e4,c),this.Wa=xs("forwardChannelMaxRetries",2,c),this.wa=xs("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new wo(c&&c.concurrentRequestLimit),this.Da=new ii,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=lu.prototype,r.la=8,r.G=1,r.connect=function(c,m,_,S){Xt(0),this.W=c,this.H=m||{},_&&S!==void 0&&(this.H.OSID=_,this.H.OAID=S),this.F=this.X,this.I=pu(this,null,this.W),va(this)};function xo(c){if(uu(c),c.G==3){var m=c.U++,_=vt(c.I);if(Xe(_,"SID",c.K),Xe(_,"RID",m),Xe(_,"TYPE","terminate"),Ms(c,_),m=new pi(c,c.j,m),m.L=2,m.v=Is(vt(_)),_=!1,p.navigator&&p.navigator.sendBeacon)try{_=p.navigator.sendBeacon(m.v.toString(),"")}catch{}!_&&p.Image&&(new Image().src=m.v,_=!0),_||(m.g=gu(m.j,null),m.g.ea(m.v)),m.F=Date.now(),ni(m)}Lo(c)}function Nr(c){c.g&&(Vo(c),c.g.cancel(),c.g=null)}function uu(c){Nr(c),c.u&&(p.clearTimeout(c.u),c.u=null),Or(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&p.clearTimeout(c.s),c.s=null)}function va(c){if(!Ro(c.h)&&!c.s){c.s=!0;var m=c.Ga;ae||Qe(),ye||(ae(),ye=!0),Ge.add(m,c),c.B=0}}function Dh(c,m){return tu(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=m.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=vr(A(c.Ga,c,m),mu(c,c.B)),c.B++,!0)}r.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const P=new pi(this,this.j,c);let G=this.o;if(this.S&&(G?(G=w(G),O(G,this.S)):G=this.S),this.m!==null||this.O||(P.H=G,G=null),this.P)e:{for(var m=0,_=0;_<this.i.length;_++){t:{var S=this.i[_];if("__data__"in S.map&&(S=S.map.__data__,typeof S=="string")){S=S.length;break t}S=void 0}if(S===void 0)break;if(m+=S,4096<m){m=_;break e}if(m===4096||_===this.i.length-1){m=_+1;break e}}m=1e3}else m=1e3;m=Mo(this,P,m),_=vt(this.I),Xe(_,"RID",c),Xe(_,"CVER",22),this.D&&Xe(_,"X-HTTP-Session-Id",this.D),Ms(this,_),G&&(this.O?m="headers="+encodeURIComponent(String(Ds(G)))+"&"+m:this.m&&Cr(_,this.m,G)),Sr(this.h,P),this.Ua&&Xe(_,"TYPE","init"),this.P?(Xe(_,"$req",m),Xe(_,"SID","null"),P.T=!0,ws(P,_,null)):ws(P,_,m),this.G=2}}else this.G==3&&(c?cu(this,c):this.i.length==0||Ro(this.h)||cu(this))};function cu(c,m){var _;m?_=m.l:_=c.U++;const S=vt(c.I);Xe(S,"SID",c.K),Xe(S,"RID",_),Xe(S,"AID",c.T),Ms(c,S),c.m&&c.o&&Cr(S,c.m,c.o),_=new pi(c,c.j,_,c.B+1),c.m===null&&(_.H=c.o),m&&(c.i=m.D.concat(c.i)),m=Mo(c,_,1e3),_.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),Sr(c.h,_),ws(_,S,m)}function Ms(c,m){c.H&&Te(c.H,function(_,S){Xe(m,S,_)}),c.l&&ha({},function(_,S){Xe(m,S,_)})}function Mo(c,m,_){_=Math.min(c.i.length,_);var S=c.l?A(c.l.Na,c.l,c):null;e:{var P=c.i;let G=-1;for(;;){const se=["count="+_];G==-1?0<_?(G=P[0].g,se.push("ofs="+G)):G=0:se.push("ofs="+G);let et=!0;for(let It=0;It<_;It++){let ke=P[It].g;const Ht=P[It].map;if(ke-=G,0>ke)G=Math.max(0,P[It].g-100),et=!1;else try{Oo(Ht,se,"req"+ke+"_")}catch{S&&S(Ht)}}if(et){S=se.join("&");break e}}}return c=c.i.splice(0,_),m.D=c,S}function hu(c){if(!c.g&&!c.u){c.Y=1;var m=c.Fa;ae||Qe(),ye||(ae(),ye=!0),Ge.add(m,c),c.v=0}}function ko(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=vr(A(c.Fa,c),mu(c,c.v)),c.v++,!0)}r.Fa=function(){if(this.u=null,fu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=vr(A(this.ab,this),c)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Xt(10),Nr(this),fu(this))};function Vo(c){c.A!=null&&(p.clearTimeout(c.A),c.A=null)}function fu(c){c.g=new pi(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var m=vt(c.qa);Xe(m,"RID","rpc"),Xe(m,"SID",c.K),Xe(m,"AID",c.T),Xe(m,"CI",c.F?"0":"1"),!c.F&&c.ja&&Xe(m,"TO",c.ja),Xe(m,"TYPE","xmlhttp"),Ms(c,m),c.m&&c.o&&Cr(m,c.m,c.o),c.L&&(c.g.I=c.L);var _=c.g;c=c.ia,_.L=1,_.v=Is(vt(m)),_.m=null,_.P=!0,zi(_,c)}r.Za=function(){this.C!=null&&(this.C=null,Nr(this),ko(this),Xt(19))};function Or(c){c.C!=null&&(p.clearTimeout(c.C),c.C=null)}function du(c,m){var _=null;if(c.g==m){Or(c),Vo(c),c.g=null;var S=2}else if(br(c.h,m))_=m.D,Bn(c.h,m),S=1;else return;if(c.G!=0){if(m.o)if(S==1){_=m.m?m.m.length:0,m=Date.now()-m.F;var P=c.B;S=dn(),Rt(S,new To(S,_)),va(c)}else hu(c);else if(P=m.s,P==3||P==0&&0<m.X||!(S==1&&Dh(c,m)||S==2&&ko(c)))switch(_&&0<_.length&&(m=c.h,m.i=m.i.concat(_)),P){case 1:Fi(c,5);break;case 4:Fi(c,10);break;case 3:Fi(c,6);break;default:Fi(c,2)}}}function mu(c,m){let _=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(_*=2),_*m}function Fi(c,m){if(c.j.info("Error code "+m),m==2){var _=A(c.fb,c),S=c.Xa;const P=!S;S=new Bi(S||"//www.google.com/images/cleardot.gif"),p.location&&p.location.protocol=="http"||Ar(S,"https"),Is(S),P?No(S.toString(),_):su(S.toString(),_)}else Xt(2);c.G=0,c.l&&c.l.sa(m),Lo(c),uu(c)}r.fb=function(c){c?(this.j.info("Successfully pinged google.com"),Xt(2)):(this.j.info("Failed to ping google.com"),Xt(1))};function Lo(c){if(c.G=0,c.ka=[],c.l){const m=pn(c.h);(m.length!=0||c.i.length!=0)&&(U(c.ka,m),U(c.ka,c.i),c.h.i.length=0,K(c.i),c.i.length=0),c.l.ra()}}function pu(c,m,_){var S=_ instanceof Bi?vt(_):new Bi(_);if(S.g!="")m&&(S.g=m+"."+S.g),Cs(S,S.s);else{var P=p.location;S=P.protocol,m=m?m+"."+P.hostname:P.hostname,P=+P.port;var G=new Bi(null);S&&Ar(G,S),m&&(G.g=m),P&&Cs(G,P),_&&(G.l=_),S=G}return _=c.D,m=c.ya,_&&m&&Xe(S,_,m),Xe(S,"VER",c.la),Ms(c,S),S}function gu(c,m,_){if(m&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=c.Ca&&!c.pa?new ut(new vi({eb:_})):new ut(c.pa),m.Ha(c.J),m}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function yu(){}r=yu.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function _a(){}_a.prototype.g=function(c,m){return new yn(c,m)};function yn(c,m){Tt.call(this),this.g=new lu(m),this.l=c,this.h=m&&m.messageUrlParams||null,c=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(c?c["X-WebChannel-Content-Type"]=m.messageContentType:c={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(c?c["X-WebChannel-Client-Profile"]=m.va:c={"X-WebChannel-Client-Profile":m.va}),this.g.S=c,(c=m&&m.Sb)&&!J(c)&&(this.g.m=c),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!J(m)&&(this.g.D=m,c=this.h,c!==null&&m in c&&(c=this.h,m in c&&delete c[m])),this.j=new xr(this)}Q(yn,Tt),yn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},yn.prototype.close=function(){xo(this.g)},yn.prototype.o=function(c){var m=this.g;if(typeof c=="string"){var _={};_.__data__=c,c=_}else this.u&&(_={},_.__data__=En(c),c=_);m.i.push(new Ah(m.Ya++,c)),m.G==3&&va(m)},yn.prototype.N=function(){this.g.l=null,delete this.j,xo(this.g),delete this.g,yn.aa.N.call(this)};function vu(c){he.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var m=c.__sm__;if(m){e:{for(const _ in m){c=_;break e}c=void 0}(this.i=c)&&(c=this.i,m=m!==null&&c in m?m[c]:void 0),this.data=m}else this.data=c}Q(vu,he);function _u(){He.call(this),this.status=1}Q(_u,He);function xr(c){this.g=c}Q(xr,yu),xr.prototype.ua=function(){Rt(this.g,"a")},xr.prototype.ta=function(c){Rt(this.g,new vu(c))},xr.prototype.sa=function(c){Rt(this.g,new _u)},xr.prototype.ra=function(){Rt(this.g,"b")},_a.prototype.createWebChannel=_a.prototype.g,yn.prototype.send=yn.prototype.o,yn.prototype.open=yn.prototype.m,yn.prototype.close=yn.prototype.close,c0=function(){return new _a},u0=function(){return dn()},l0=Ke,Jd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},yt.NO_ERROR=0,yt.TIMEOUT=8,yt.HTTP_ERROR=6,kc=yt,Wt.COMPLETE="complete",o0=Wt,Re.EventType=Le,Le.OPEN="a",Le.CLOSE="b",Le.ERROR="c",Le.MESSAGE="d",Tt.prototype.listen=Tt.prototype.K,Tl=Re,ut.prototype.listenOnce=ut.prototype.L,ut.prototype.getLastError=ut.prototype.Ka,ut.prototype.getLastErrorCode=ut.prototype.Ba,ut.prototype.getStatus=ut.prototype.Z,ut.prototype.getResponseJson=ut.prototype.Oa,ut.prototype.getResponseText=ut.prototype.oa,ut.prototype.send=ut.prototype.ea,ut.prototype.setWithCredentials=ut.prototype.Ha,a0=ut}).apply(typeof wc<"u"?wc:typeof self<"u"?self:typeof window<"u"?window:{});const fv="@firebase/firestore",dv="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}un.UNAUTHENTICATED=new un(null),un.GOOGLE_CREDENTIALS=new un("google-credentials-uid"),un.FIRST_PARTY=new un("first-party-uid"),un.MOCK_USER=new un("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let po="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const na=new pm("@firebase/firestore");function Xa(){return na.logLevel}function ce(r,...e){if(na.logLevel<=Be.DEBUG){const i=e.map(Rm);na.debug(`Firestore (${po}): ${r}`,...i)}}function dr(r,...e){if(na.logLevel<=Be.ERROR){const i=e.map(Rm);na.error(`Firestore (${po}): ${r}`,...i)}}function gs(r,...e){if(na.logLevel<=Be.WARN){const i=e.map(Rm);na.warn(`Firestore (${po}): ${r}`,...i)}}function Rm(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(i){return JSON.stringify(i)})(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(r,e,i){let s="Unexpected state";typeof e=="string"?s=e:i=e,h0(r,s,i)}function h0(r,e,i){let s=`FIRESTORE (${po}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(i!==void 0)try{s+=" CONTEXT: "+JSON.stringify(i)}catch{s+=" CONTEXT: "+i}throw dr(s),new Error(s)}function tt(r,e,i,s){let l="Unexpected state";typeof i=="string"?l=i:s=i,r||h0(e,l,s)}function De(r,e){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ge extends pr{constructor(e,i){super(e,i),this.code=e,this.message=i,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(){this.promise=new Promise(((e,i)=>{this.resolve=e,this.reject=i}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f0{constructor(e,i){this.user=i,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class bw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,i){e.enqueueRetryable((()=>i(un.UNAUTHENTICATED)))}shutdown(){}}class Sw{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,i){this.changeListener=i,e.enqueueRetryable((()=>i(this.token.user)))}shutdown(){this.changeListener=null}}class Aw{constructor(e){this.t=e,this.currentUser=un.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,i){tt(this.o===void 0,42304);let s=this.i;const l=g=>this.i!==s?(s=this.i,i(g)):Promise.resolve();let u=new ms;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new ms,e.enqueueRetryable((()=>l(this.currentUser)))};const d=()=>{const g=u;e.enqueueRetryable((async()=>{await g.promise,await l(this.currentUser)}))},p=g=>{ce("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),d())};this.t.onInit((g=>p(g))),setTimeout((()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?p(g):(ce("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new ms)}}),0),d()}getToken(){const e=this.i,i=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(i).then((s=>this.i!==e?(ce("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(tt(typeof s.accessToken=="string",31837,{l:s}),new f0(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return tt(e===null||typeof e=="string",2055,{h:e}),new un(e)}}class ww{constructor(e,i,s){this.P=e,this.T=i,this.I=s,this.type="FirstParty",this.user=un.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Rw{constructor(e,i,s){this.P=e,this.T=i,this.I=s}getToken(){return Promise.resolve(new ww(this.P,this.T,this.I))}start(e,i){e.enqueueRetryable((()=>i(un.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class mv{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Cw{constructor(e,i){this.V=i,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,oi(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,i){tt(this.o===void 0,3512);const s=u=>{u.error!=null&&ce("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const d=u.token!==this.m;return this.m=u.token,ce("FirebaseAppCheckTokenProvider",`Received ${d?"new":"existing"} token.`),d?i(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable((()=>s(u)))};const l=u=>{ce("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((u=>l(u))),setTimeout((()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?l(u):ce("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new mv(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((i=>i?(tt(typeof i.token=="string",44558,{tokenResult:i}),this.m=i.token,new mv(i.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iw(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),i=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(i);else for(let s=0;s<r;s++)i[s]=Math.floor(256*Math.random());return i}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d0(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",i=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const l=Iw(40);for(let u=0;u<l.length;++u)s.length<20&&l[u]<i&&(s+=e.charAt(l[u]%62))}return s}}function Ve(r,e){return r<e?-1:r>e?1:0}function $d(r,e){let i=0;for(;i<r.length&&i<e.length;){const s=r.codePointAt(i),l=e.codePointAt(i);if(s!==l){if(s<128&&l<128)return Ve(s,l);{const u=d0(),d=Dw(u.encode(pv(r,i)),u.encode(pv(e,i)));return d!==0?d:Ve(s,l)}}i+=s>65535?2:1}return Ve(r.length,e.length)}function pv(r,e){return r.codePointAt(e)>65535?r.substring(e,e+2):r.substring(e,e+1)}function Dw(r,e){for(let i=0;i<r.length&&i<e.length;++i)if(r[i]!==e[i])return Ve(r[i],e[i]);return Ve(r.length,e.length)}function ao(r,e,i){return r.length===e.length&&r.every(((s,l)=>i(s,e[l])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gv="__name__";class Ai{constructor(e,i,s){i===void 0?i=0:i>e.length&&Ae(637,{offset:i,range:e.length}),s===void 0?s=e.length-i:s>e.length-i&&Ae(1746,{length:s,range:e.length-i}),this.segments=e,this.offset=i,this.len=s}get length(){return this.len}isEqual(e){return Ai.comparator(this,e)===0}child(e){const i=this.segments.slice(this.offset,this.limit());return e instanceof Ai?e.forEach((s=>{i.push(s)})):i.push(e),this.construct(i)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let i=0;i<this.length;i++)if(this.get(i)!==e.get(i))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let i=0;i<this.length;i++)if(this.get(i)!==e.get(i))return!1;return!0}forEach(e){for(let i=this.offset,s=this.limit();i<s;i++)e(this.segments[i])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,i){const s=Math.min(e.length,i.length);for(let l=0;l<s;l++){const u=Ai.compareSegments(e.get(l),i.get(l));if(u!==0)return u}return Ve(e.length,i.length)}static compareSegments(e,i){const s=Ai.isNumericId(e),l=Ai.isNumericId(i);return s&&!l?-1:!s&&l?1:s&&l?Ai.extractNumericId(e).compare(Ai.extractNumericId(i)):$d(e,i)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ds.fromString(e.substring(4,e.length-2))}}class pt extends Ai{construct(e,i,s){return new pt(e,i,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const i=[];for(const s of e){if(s.indexOf("//")>=0)throw new ge(ne.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);i.push(...s.split("/").filter((l=>l.length>0)))}return new pt(i)}static emptyPath(){return new pt([])}}const Nw=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class nn extends Ai{construct(e,i,s){return new nn(e,i,s)}static isValidIdentifier(e){return Nw.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),nn.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===gv}static keyField(){return new nn([gv])}static fromServerFormat(e){const i=[];let s="",l=0;const u=()=>{if(s.length===0)throw new ge(ne.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);i.push(s),s=""};let d=!1;for(;l<e.length;){const p=e[l];if(p==="\\"){if(l+1===e.length)throw new ge(ne.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[l+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new ge(ne.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=g,l+=2}else p==="`"?(d=!d,l++):p!=="."||d?(s+=p,l++):(u(),l++)}if(u(),d)throw new ge(ne.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new nn(i)}static emptyPath(){return new nn([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e){this.path=e}static fromPath(e){return new Ee(pt.fromString(e))}static fromName(e){return new Ee(pt.fromString(e).popFirst(5))}static empty(){return new Ee(pt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&pt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,i){return pt.comparator(e.path,i.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Ee(new pt(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ow(r,e,i){if(!i)throw new ge(ne.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function xw(r,e,i,s){if(e===!0&&s===!0)throw new ge(ne.INVALID_ARGUMENT,`${r} and ${i} cannot be used together.`)}function yv(r){if(!Ee.isDocumentKey(r))throw new ge(ne.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function m0(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function Im(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":Ae(12329,{type:typeof r})}function Vl(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new ge(ne.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const i=Im(r);throw new ge(ne.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${i}`)}}return r}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(r,e){const i={typeString:r};return e&&(i.value=e),i}function Yl(r,e){if(!m0(r))throw new ge(ne.INVALID_ARGUMENT,"JSON must be an object");let i;for(const s in e)if(e[s]){const l=e[s].typeString,u="value"in e[s]?{value:e[s].value}:void 0;if(!(s in r)){i=`JSON missing required field: '${s}'`;break}const d=r[s];if(l&&typeof d!==l){i=`JSON field '${s}' must be a ${l}.`;break}if(u!==void 0&&d!==u.value){i=`Expected '${s}' field to equal '${u.value}'`;break}}if(i)throw new ge(ne.INVALID_ARGUMENT,i);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vv=-62135596800,_v=1e6;class ft{static now(){return ft.fromMillis(Date.now())}static fromDate(e){return ft.fromMillis(e.getTime())}static fromMillis(e){const i=Math.floor(e/1e3),s=Math.floor((e-1e3*i)*_v);return new ft(i,s)}constructor(e,i){if(this.seconds=e,this.nanoseconds=i,i<0)throw new ge(ne.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+i);if(i>=1e9)throw new ge(ne.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+i);if(e<vv)throw new ge(ne.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ge(ne.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/_v}_compareTo(e){return this.seconds===e.seconds?Ve(this.nanoseconds,e.nanoseconds):Ve(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ft._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Yl(e,ft._jsonSchema))return new ft(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-vv;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ft._jsonSchemaVersion="firestore/timestamp/1.0",ft._jsonSchema={type:kt("string",ft._jsonSchemaVersion),seconds:kt("number"),nanoseconds:kt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{static fromTimestamp(e){return new Ce(e)}static min(){return new Ce(new ft(0,0))}static max(){return new Ce(new ft(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ll=-1;function Mw(r,e){const i=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,l=Ce.fromTimestamp(s===1e9?new ft(i+1,0):new ft(i,s));return new ys(l,Ee.empty(),e)}function kw(r){return new ys(r.readTime,r.key,Ll)}class ys{constructor(e,i,s){this.readTime=e,this.documentKey=i,this.largestBatchId=s}static min(){return new ys(Ce.min(),Ee.empty(),Ll)}static max(){return new ys(Ce.max(),Ee.empty(),Ll)}}function Vw(r,e){let i=r.readTime.compareTo(e.readTime);return i!==0?i:(i=Ee.comparator(r.documentKey,e.documentKey),i!==0?i:Ve(r.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lw="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Uw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function go(r){if(r.code!==ne.FAILED_PRECONDITION||r.message!==Lw)throw r;ce("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((i=>{this.isDone=!0,this.result=i,this.nextCallback&&this.nextCallback(i)}),(i=>{this.isDone=!0,this.error=i,this.catchCallback&&this.catchCallback(i)}))}catch(e){return this.next(void 0,e)}next(e,i){return this.callbackAttached&&Ae(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(i,this.error):this.wrapSuccess(e,this.result):new ee(((s,l)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,l)},this.catchCallback=u=>{this.wrapFailure(i,u).next(s,l)}}))}toPromise(){return new Promise(((e,i)=>{this.next(e,i)}))}wrapUserFunction(e){try{const i=e();return i instanceof ee?i:ee.resolve(i)}catch(i){return ee.reject(i)}}wrapSuccess(e,i){return e?this.wrapUserFunction((()=>e(i))):ee.resolve(i)}wrapFailure(e,i){return e?this.wrapUserFunction((()=>e(i))):ee.reject(i)}static resolve(e){return new ee(((i,s)=>{i(e)}))}static reject(e){return new ee(((i,s)=>{s(e)}))}static waitFor(e){return new ee(((i,s)=>{let l=0,u=0,d=!1;e.forEach((p=>{++l,p.next((()=>{++u,d&&u===l&&i()}),(g=>s(g)))})),d=!0,u===l&&i()}))}static or(e){let i=ee.resolve(!1);for(const s of e)i=i.next((l=>l?ee.resolve(l):s()));return i}static forEach(e,i){const s=[];return e.forEach(((l,u)=>{s.push(i.call(this,l,u))})),this.waitFor(s)}static mapArray(e,i){return new ee(((s,l)=>{const u=e.length,d=new Array(u);let p=0;for(let g=0;g<u;g++){const y=g;i(e[y]).next((E=>{d[y]=E,++p,p===u&&s(d)}),(E=>l(E)))}}))}static doWhile(e,i){return new ee(((s,l)=>{const u=()=>{e()===!0?i().next((()=>{u()}),l):s()};u()}))}}function Pw(r){const e=r.match(/Android ([\d.]+)/i),i=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(i)}function yo(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(e,i){this.previousValue=e,i&&(i.sequenceNumberHandler=s=>this._e(s),this.ae=s=>i.writeSequenceNumber(s))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}fh.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dm=-1;function dh(r){return r==null}function Yc(r){return r===0&&1/r==-1/0}function zw(r){return typeof r=="number"&&Number.isInteger(r)&&!Yc(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p0="";function jw(r){let e="";for(let i=0;i<r.length;i++)e.length>0&&(e=Ev(e)),e=Bw(r.get(i),e);return Ev(e)}function Bw(r,e){let i=e;const s=r.length;for(let l=0;l<s;l++){const u=r.charAt(l);switch(u){case"\0":i+="";break;case p0:i+="";break;default:i+=u}}return i}function Ev(r){return r+p0+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tv(r){let e=0;for(const i in r)Object.prototype.hasOwnProperty.call(r,i)&&e++;return e}function ra(r,e){for(const i in r)Object.prototype.hasOwnProperty.call(r,i)&&e(i,r[i])}function g0(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e,i){this.comparator=e,this.root=i||tn.EMPTY}insert(e,i){return new gt(this.comparator,this.root.insert(e,i,this.comparator).copy(null,null,tn.BLACK,null,null))}remove(e){return new gt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,tn.BLACK,null,null))}get(e){let i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return i.value;s<0?i=i.left:s>0&&(i=i.right)}return null}indexOf(e){let i=0,s=this.root;for(;!s.isEmpty();){const l=this.comparator(e,s.key);if(l===0)return i+s.left.size;l<0?s=s.left:(i+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((i,s)=>(e(i,s),!1)))}toString(){const e=[];return this.inorderTraversal(((i,s)=>(e.push(`${i}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Rc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Rc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Rc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Rc(this.root,e,this.comparator,!0)}}class Rc{constructor(e,i,s,l){this.isReverse=l,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=i?s(e.key,i):1,i&&l&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const i={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return i}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class tn{constructor(e,i,s,l,u){this.key=e,this.value=i,this.color=s??tn.RED,this.left=l??tn.EMPTY,this.right=u??tn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,i,s,l,u){return new tn(e??this.key,i??this.value,s??this.color,l??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,i,s){let l=this;const u=s(e,l.key);return l=u<0?l.copy(null,null,null,l.left.insert(e,i,s),null):u===0?l.copy(null,i,null,null,null):l.copy(null,null,null,null,l.right.insert(e,i,s)),l.fixUp()}removeMin(){if(this.left.isEmpty())return tn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,i){let s,l=this;if(i(e,l.key)<0)l.left.isEmpty()||l.left.isRed()||l.left.left.isRed()||(l=l.moveRedLeft()),l=l.copy(null,null,null,l.left.remove(e,i),null);else{if(l.left.isRed()&&(l=l.rotateRight()),l.right.isEmpty()||l.right.isRed()||l.right.left.isRed()||(l=l.moveRedRight()),i(e,l.key)===0){if(l.right.isEmpty())return tn.EMPTY;s=l.right.min(),l=l.copy(s.key,s.value,null,null,l.right.removeMin())}l=l.copy(null,null,null,null,l.right.remove(e,i))}return l.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,tn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,tn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),i=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,i)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ae(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Ae(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Ae(27949);return e+(this.isRed()?0:1)}}tn.EMPTY=null,tn.RED=!0,tn.BLACK=!1;tn.EMPTY=new class{constructor(){this.size=0}get key(){throw Ae(57766)}get value(){throw Ae(16141)}get color(){throw Ae(16727)}get left(){throw Ae(29726)}get right(){throw Ae(36894)}copy(e,i,s,l,u){return this}insert(e,i,s){return new tn(e,i)}remove(e,i){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e){this.comparator=e,this.data=new gt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((i,s)=>(e(i),!1)))}forEachInRange(e,i){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const l=s.getNext();if(this.comparator(l.key,e[1])>=0)return;i(l.key)}}forEachWhile(e,i){let s;for(s=i!==void 0?this.data.getIteratorFrom(i):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const i=this.data.getIteratorFrom(e);return i.hasNext()?i.getNext().key:null}getIterator(){return new bv(this.data.getIterator())}getIteratorFrom(e){return new bv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let i=this;return i.size<e.size&&(i=e,e=this),e.forEach((s=>{i=i.add(s)})),i}isEqual(e){if(!(e instanceof zt)||this.size!==e.size)return!1;const i=this.data.getIterator(),s=e.data.getIterator();for(;i.hasNext();){const l=i.getNext().key,u=s.getNext().key;if(this.comparator(l,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((i=>{e.push(i)})),e}toString(){const e=[];return this.forEach((i=>e.push(i))),"SortedSet("+e.toString()+")"}copy(e){const i=new zt(this.comparator);return i.data=e,i}}class bv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e){this.fields=e,e.sort(nn.comparator)}static empty(){return new ui([])}unionWith(e){let i=new zt(nn.comparator);for(const s of this.fields)i=i.add(s);for(const s of e)i=i.add(s);return new ui(i.toArray())}covers(e){for(const i of this.fields)if(i.isPrefixOf(e))return!0;return!1}isEqual(e){return ao(this.fields,e.fields,((i,s)=>i.isEqual(s)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e){this.binaryString=e}static fromBase64String(e){const i=(function(l){try{return atob(l)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new y0("Invalid base64 string: "+u):u}})(e);return new rn(i)}static fromUint8Array(e){const i=(function(l){let u="";for(let d=0;d<l.length;++d)u+=String.fromCharCode(l[d]);return u})(e);return new rn(i)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(i){return btoa(i)})(this.binaryString)}toUint8Array(){return(function(i){const s=new Uint8Array(i.length);for(let l=0;l<i.length;l++)s[l]=i.charCodeAt(l);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ve(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}rn.EMPTY_BYTE_STRING=new rn("");const qw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function vs(r){if(tt(!!r,39018),typeof r=="string"){let e=0;const i=qw.exec(r);if(tt(!!i,46558,{timestamp:r}),i[1]){let l=i[1];l=(l+"000000000").substr(0,9),e=Number(l)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:wt(r.seconds),nanos:wt(r.nanos)}}function wt(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function _s(r){return typeof r=="string"?rn.fromBase64String(r):rn.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v0="server_timestamp",_0="__type__",E0="__previous_value__",T0="__local_write_time__";function Nm(r){var e,i;return((i=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[_0])===null||i===void 0?void 0:i.stringValue)===v0}function mh(r){const e=r.mapValue.fields[E0];return Nm(e)?mh(e):e}function Ul(r){const e=vs(r.mapValue.fields[T0].timestampValue);return new ft(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hw{constructor(e,i,s,l,u,d,p,g,y,E){this.databaseId=e,this.appId=i,this.persistenceKey=s,this.host=l,this.ssl=u,this.forceLongPolling=d,this.autoDetectLongPolling=p,this.longPollingOptions=g,this.useFetchStreams=y,this.isUsingEmulator=E}}const Xc="(default)";class Pl{constructor(e,i){this.projectId=e,this.database=i||Xc}static empty(){return new Pl("","")}get isDefaultDatabase(){return this.database===Xc}isEqual(e){return e instanceof Pl&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b0="__type__",Fw="__max__",Cc={mapValue:{}},S0="__vector__",Wc="value";function Es(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Nm(r)?4:Qw(r)?9007199254740991:Gw(r)?10:11:Ae(28295,{value:r})}function Oi(r,e){if(r===e)return!0;const i=Es(r);if(i!==Es(e))return!1;switch(i){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return Ul(r).isEqual(Ul(e));case 3:return(function(l,u){if(typeof l.timestampValue=="string"&&typeof u.timestampValue=="string"&&l.timestampValue.length===u.timestampValue.length)return l.timestampValue===u.timestampValue;const d=vs(l.timestampValue),p=vs(u.timestampValue);return d.seconds===p.seconds&&d.nanos===p.nanos})(r,e);case 5:return r.stringValue===e.stringValue;case 6:return(function(l,u){return _s(l.bytesValue).isEqual(_s(u.bytesValue))})(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return(function(l,u){return wt(l.geoPointValue.latitude)===wt(u.geoPointValue.latitude)&&wt(l.geoPointValue.longitude)===wt(u.geoPointValue.longitude)})(r,e);case 2:return(function(l,u){if("integerValue"in l&&"integerValue"in u)return wt(l.integerValue)===wt(u.integerValue);if("doubleValue"in l&&"doubleValue"in u){const d=wt(l.doubleValue),p=wt(u.doubleValue);return d===p?Yc(d)===Yc(p):isNaN(d)&&isNaN(p)}return!1})(r,e);case 9:return ao(r.arrayValue.values||[],e.arrayValue.values||[],Oi);case 10:case 11:return(function(l,u){const d=l.mapValue.fields||{},p=u.mapValue.fields||{};if(Tv(d)!==Tv(p))return!1;for(const g in d)if(d.hasOwnProperty(g)&&(p[g]===void 0||!Oi(d[g],p[g])))return!1;return!0})(r,e);default:return Ae(52216,{left:r})}}function zl(r,e){return(r.values||[]).find((i=>Oi(i,e)))!==void 0}function oo(r,e){if(r===e)return 0;const i=Es(r),s=Es(e);if(i!==s)return Ve(i,s);switch(i){case 0:case 9007199254740991:return 0;case 1:return Ve(r.booleanValue,e.booleanValue);case 2:return(function(u,d){const p=wt(u.integerValue||u.doubleValue),g=wt(d.integerValue||d.doubleValue);return p<g?-1:p>g?1:p===g?0:isNaN(p)?isNaN(g)?0:-1:1})(r,e);case 3:return Sv(r.timestampValue,e.timestampValue);case 4:return Sv(Ul(r),Ul(e));case 5:return $d(r.stringValue,e.stringValue);case 6:return(function(u,d){const p=_s(u),g=_s(d);return p.compareTo(g)})(r.bytesValue,e.bytesValue);case 7:return(function(u,d){const p=u.split("/"),g=d.split("/");for(let y=0;y<p.length&&y<g.length;y++){const E=Ve(p[y],g[y]);if(E!==0)return E}return Ve(p.length,g.length)})(r.referenceValue,e.referenceValue);case 8:return(function(u,d){const p=Ve(wt(u.latitude),wt(d.latitude));return p!==0?p:Ve(wt(u.longitude),wt(d.longitude))})(r.geoPointValue,e.geoPointValue);case 9:return Av(r.arrayValue,e.arrayValue);case 10:return(function(u,d){var p,g,y,E;const b=u.fields||{},A=d.fields||{},k=(p=b[Wc])===null||p===void 0?void 0:p.arrayValue,Q=(g=A[Wc])===null||g===void 0?void 0:g.arrayValue,K=Ve(((y=k==null?void 0:k.values)===null||y===void 0?void 0:y.length)||0,((E=Q==null?void 0:Q.values)===null||E===void 0?void 0:E.length)||0);return K!==0?K:Av(k,Q)})(r.mapValue,e.mapValue);case 11:return(function(u,d){if(u===Cc.mapValue&&d===Cc.mapValue)return 0;if(u===Cc.mapValue)return 1;if(d===Cc.mapValue)return-1;const p=u.fields||{},g=Object.keys(p),y=d.fields||{},E=Object.keys(y);g.sort(),E.sort();for(let b=0;b<g.length&&b<E.length;++b){const A=$d(g[b],E[b]);if(A!==0)return A;const k=oo(p[g[b]],y[E[b]]);if(k!==0)return k}return Ve(g.length,E.length)})(r.mapValue,e.mapValue);default:throw Ae(23264,{le:i})}}function Sv(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return Ve(r,e);const i=vs(r),s=vs(e),l=Ve(i.seconds,s.seconds);return l!==0?l:Ve(i.nanos,s.nanos)}function Av(r,e){const i=r.values||[],s=e.values||[];for(let l=0;l<i.length&&l<s.length;++l){const u=oo(i[l],s[l]);if(u)return u}return Ve(i.length,s.length)}function lo(r){return em(r)}function em(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(i){const s=vs(i);return`time(${s.seconds},${s.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(i){return _s(i).toBase64()})(r.bytesValue):"referenceValue"in r?(function(i){return Ee.fromName(i).toString()})(r.referenceValue):"geoPointValue"in r?(function(i){return`geo(${i.latitude},${i.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(i){let s="[",l=!0;for(const u of i.values||[])l?l=!1:s+=",",s+=em(u);return s+"]"})(r.arrayValue):"mapValue"in r?(function(i){const s=Object.keys(i.fields||{}).sort();let l="{",u=!0;for(const d of s)u?u=!1:l+=",",l+=`${d}:${em(i.fields[d])}`;return l+"}"})(r.mapValue):Ae(61005,{value:r})}function Vc(r){switch(Es(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=mh(r);return e?16+Vc(e):16;case 5:return 2*r.stringValue.length;case 6:return _s(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((l,u)=>l+Vc(u)),0)})(r.arrayValue);case 10:case 11:return(function(s){let l=0;return ra(s.fields,((u,d)=>{l+=u.length+Vc(d)})),l})(r.mapValue);default:throw Ae(13486,{value:r})}}function tm(r){return!!r&&"integerValue"in r}function Om(r){return!!r&&"arrayValue"in r}function wv(r){return!!r&&"nullValue"in r}function Rv(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Lc(r){return!!r&&"mapValue"in r}function Gw(r){var e,i;return((i=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[b0])===null||i===void 0?void 0:i.stringValue)===S0}function Il(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return ra(r.mapValue.fields,((i,s)=>e.mapValue.fields[i]=Il(s))),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let i=0;i<(r.arrayValue.values||[]).length;++i)e.arrayValue.values[i]=Il(r.arrayValue.values[i]);return e}return Object.assign({},r)}function Qw(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===Fw}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e){this.value=e}static empty(){return new Zn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let i=this.value;for(let s=0;s<e.length-1;++s)if(i=(i.mapValue.fields||{})[e.get(s)],!Lc(i))return null;return i=(i.mapValue.fields||{})[e.lastSegment()],i||null}}set(e,i){this.getFieldsMap(e.popLast())[e.lastSegment()]=Il(i)}setAll(e){let i=nn.emptyPath(),s={},l=[];e.forEach(((d,p)=>{if(!i.isImmediateParentOf(p)){const g=this.getFieldsMap(i);this.applyChanges(g,s,l),s={},l=[],i=p.popLast()}d?s[p.lastSegment()]=Il(d):l.push(p.lastSegment())}));const u=this.getFieldsMap(i);this.applyChanges(u,s,l)}delete(e){const i=this.field(e.popLast());Lc(i)&&i.mapValue.fields&&delete i.mapValue.fields[e.lastSegment()]}isEqual(e){return Oi(this.value,e.value)}getFieldsMap(e){let i=this.value;i.mapValue.fields||(i.mapValue={fields:{}});for(let s=0;s<e.length;++s){let l=i.mapValue.fields[e.get(s)];Lc(l)&&l.mapValue.fields||(l={mapValue:{fields:{}}},i.mapValue.fields[e.get(s)]=l),i=l}return i.mapValue.fields}applyChanges(e,i,s){ra(i,((l,u)=>e[l]=u));for(const l of s)delete e[l]}clone(){return new Zn(Il(this.value))}}function A0(r){const e=[];return ra(r.fields,((i,s)=>{const l=new nn([i]);if(Lc(s)){const u=A0(s.mapValue).fields;if(u.length===0)e.push(l);else for(const d of u)e.push(l.child(d))}else e.push(l)})),new ui(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e,i,s,l,u,d,p){this.key=e,this.documentType=i,this.version=s,this.readTime=l,this.createTime=u,this.data=d,this.documentState=p}static newInvalidDocument(e){return new cn(e,0,Ce.min(),Ce.min(),Ce.min(),Zn.empty(),0)}static newFoundDocument(e,i,s,l){return new cn(e,1,i,Ce.min(),s,l,0)}static newNoDocument(e,i){return new cn(e,2,i,Ce.min(),Ce.min(),Zn.empty(),0)}static newUnknownDocument(e,i){return new cn(e,3,i,Ce.min(),Ce.min(),Zn.empty(),2)}convertToFoundDocument(e,i){return!this.createTime.isEqual(Ce.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=i,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Zn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Zn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ce.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof cn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new cn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(e,i){this.position=e,this.inclusive=i}}function Cv(r,e,i){let s=0;for(let l=0;l<r.position.length;l++){const u=e[l],d=r.position[l];if(u.field.isKeyField()?s=Ee.comparator(Ee.fromName(d.referenceValue),i.key):s=oo(d,i.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function Iv(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let i=0;i<r.position.length;i++)if(!Oi(r.position[i],e.position[i]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(e,i="asc"){this.field=e,this.dir=i}}function Kw(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w0{}class Pt extends w0{constructor(e,i,s){super(),this.field=e,this.op=i,this.value=s}static create(e,i,s){return e.isKeyField()?i==="in"||i==="not-in"?this.createKeyFieldInFilter(e,i,s):new Xw(e,i,s):i==="array-contains"?new Jw(e,s):i==="in"?new $w(e,s):i==="not-in"?new e4(e,s):i==="array-contains-any"?new t4(e,s):new Pt(e,i,s)}static createKeyFieldInFilter(e,i,s){return i==="in"?new Ww(e,s):new Zw(e,s)}matches(e){const i=e.data.field(this.field);return this.op==="!="?i!==null&&i.nullValue===void 0&&this.matchesComparison(oo(i,this.value)):i!==null&&Es(this.value)===Es(i)&&this.matchesComparison(oo(i,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ae(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class xi extends w0{constructor(e,i){super(),this.filters=e,this.op=i,this.he=null}static create(e,i){return new xi(e,i)}matches(e){return R0(this)?this.filters.find((i=>!i.matches(e)))===void 0:this.filters.find((i=>i.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,i)=>e.concat(i.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function R0(r){return r.op==="and"}function C0(r){return Yw(r)&&R0(r)}function Yw(r){for(const e of r.filters)if(e instanceof xi)return!1;return!0}function nm(r){if(r instanceof Pt)return r.field.canonicalString()+r.op.toString()+lo(r.value);if(C0(r))return r.filters.map((e=>nm(e))).join(",");{const e=r.filters.map((i=>nm(i))).join(",");return`${r.op}(${e})`}}function I0(r,e){return r instanceof Pt?(function(s,l){return l instanceof Pt&&s.op===l.op&&s.field.isEqual(l.field)&&Oi(s.value,l.value)})(r,e):r instanceof xi?(function(s,l){return l instanceof xi&&s.op===l.op&&s.filters.length===l.filters.length?s.filters.reduce(((u,d,p)=>u&&I0(d,l.filters[p])),!0):!1})(r,e):void Ae(19439)}function D0(r){return r instanceof Pt?(function(i){return`${i.field.canonicalString()} ${i.op} ${lo(i.value)}`})(r):r instanceof xi?(function(i){return i.op.toString()+" {"+i.getFilters().map(D0).join(" ,")+"}"})(r):"Filter"}class Xw extends Pt{constructor(e,i,s){super(e,i,s),this.key=Ee.fromName(s.referenceValue)}matches(e){const i=Ee.comparator(e.key,this.key);return this.matchesComparison(i)}}class Ww extends Pt{constructor(e,i){super(e,"in",i),this.keys=N0("in",i)}matches(e){return this.keys.some((i=>i.isEqual(e.key)))}}class Zw extends Pt{constructor(e,i){super(e,"not-in",i),this.keys=N0("not-in",i)}matches(e){return!this.keys.some((i=>i.isEqual(e.key)))}}function N0(r,e){var i;return(((i=e.arrayValue)===null||i===void 0?void 0:i.values)||[]).map((s=>Ee.fromName(s.referenceValue)))}class Jw extends Pt{constructor(e,i){super(e,"array-contains",i)}matches(e){const i=e.data.field(this.field);return Om(i)&&zl(i.arrayValue,this.value)}}class $w extends Pt{constructor(e,i){super(e,"in",i)}matches(e){const i=e.data.field(this.field);return i!==null&&zl(this.value.arrayValue,i)}}class e4 extends Pt{constructor(e,i){super(e,"not-in",i)}matches(e){if(zl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const i=e.data.field(this.field);return i!==null&&i.nullValue===void 0&&!zl(this.value.arrayValue,i)}}class t4 extends Pt{constructor(e,i){super(e,"array-contains-any",i)}matches(e){const i=e.data.field(this.field);return!(!Om(i)||!i.arrayValue.values)&&i.arrayValue.values.some((s=>zl(this.value.arrayValue,s)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n4{constructor(e,i=null,s=[],l=[],u=null,d=null,p=null){this.path=e,this.collectionGroup=i,this.orderBy=s,this.filters=l,this.limit=u,this.startAt=d,this.endAt=p,this.Pe=null}}function Dv(r,e=null,i=[],s=[],l=null,u=null,d=null){return new n4(r,e,i,s,l,u,d)}function xm(r){const e=De(r);if(e.Pe===null){let i=e.path.canonicalString();e.collectionGroup!==null&&(i+="|cg:"+e.collectionGroup),i+="|f:",i+=e.filters.map((s=>nm(s))).join(","),i+="|ob:",i+=e.orderBy.map((s=>(function(u){return u.field.canonicalString()+u.dir})(s))).join(","),dh(e.limit)||(i+="|l:",i+=e.limit),e.startAt&&(i+="|lb:",i+=e.startAt.inclusive?"b:":"a:",i+=e.startAt.position.map((s=>lo(s))).join(",")),e.endAt&&(i+="|ub:",i+=e.endAt.inclusive?"a:":"b:",i+=e.endAt.position.map((s=>lo(s))).join(",")),e.Pe=i}return e.Pe}function Mm(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<r.orderBy.length;i++)if(!Kw(r.orderBy[i],e.orderBy[i]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let i=0;i<r.filters.length;i++)if(!I0(r.filters[i],e.filters[i]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!Iv(r.startAt,e.startAt)&&Iv(r.endAt,e.endAt)}function im(r){return Ee.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(e,i=null,s=[],l=[],u=null,d="F",p=null,g=null){this.path=e,this.collectionGroup=i,this.explicitOrderBy=s,this.filters=l,this.limit=u,this.limitType=d,this.startAt=p,this.endAt=g,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function i4(r,e,i,s,l,u,d,p){return new ph(r,e,i,s,l,u,d,p)}function km(r){return new ph(r)}function Nv(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function r4(r){return r.collectionGroup!==null}function Dl(r){const e=De(r);if(e.Te===null){e.Te=[];const i=new Set;for(const u of e.explicitOrderBy)e.Te.push(u),i.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(d){let p=new zt(nn.comparator);return d.filters.forEach((g=>{g.getFlattenedFilters().forEach((y=>{y.isInequality()&&(p=p.add(y.field))}))})),p})(e).forEach((u=>{i.has(u.canonicalString())||u.isKeyField()||e.Te.push(new Jc(u,s))})),i.has(nn.keyField().canonicalString())||e.Te.push(new Jc(nn.keyField(),s))}return e.Te}function Ci(r){const e=De(r);return e.Ie||(e.Ie=s4(e,Dl(r))),e.Ie}function s4(r,e){if(r.limitType==="F")return Dv(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map((l=>{const u=l.dir==="desc"?"asc":"desc";return new Jc(l.field,u)}));const i=r.endAt?new Zc(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new Zc(r.startAt.position,r.startAt.inclusive):null;return Dv(r.path,r.collectionGroup,e,r.filters,r.limit,i,s)}}function rm(r,e,i){return new ph(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,i,r.startAt,r.endAt)}function gh(r,e){return Mm(Ci(r),Ci(e))&&r.limitType===e.limitType}function O0(r){return`${xm(Ci(r))}|lt:${r.limitType}`}function Wa(r){return`Query(target=${(function(i){let s=i.path.canonicalString();return i.collectionGroup!==null&&(s+=" collectionGroup="+i.collectionGroup),i.filters.length>0&&(s+=`, filters: [${i.filters.map((l=>D0(l))).join(", ")}]`),dh(i.limit)||(s+=", limit: "+i.limit),i.orderBy.length>0&&(s+=`, orderBy: [${i.orderBy.map((l=>(function(d){return`${d.field.canonicalString()} (${d.dir})`})(l))).join(", ")}]`),i.startAt&&(s+=", startAt: ",s+=i.startAt.inclusive?"b:":"a:",s+=i.startAt.position.map((l=>lo(l))).join(",")),i.endAt&&(s+=", endAt: ",s+=i.endAt.inclusive?"a:":"b:",s+=i.endAt.position.map((l=>lo(l))).join(",")),`Target(${s})`})(Ci(r))}; limitType=${r.limitType})`}function yh(r,e){return e.isFoundDocument()&&(function(s,l){const u=l.key.path;return s.collectionGroup!==null?l.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):Ee.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)})(r,e)&&(function(s,l){for(const u of Dl(s))if(!u.field.isKeyField()&&l.data.field(u.field)===null)return!1;return!0})(r,e)&&(function(s,l){for(const u of s.filters)if(!u.matches(l))return!1;return!0})(r,e)&&(function(s,l){return!(s.startAt&&!(function(d,p,g){const y=Cv(d,p,g);return d.inclusive?y<=0:y<0})(s.startAt,Dl(s),l)||s.endAt&&!(function(d,p,g){const y=Cv(d,p,g);return d.inclusive?y>=0:y>0})(s.endAt,Dl(s),l))})(r,e)}function a4(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function x0(r){return(e,i)=>{let s=!1;for(const l of Dl(r)){const u=o4(l,e,i);if(u!==0)return u;s=s||l.field.isKeyField()}return 0}}function o4(r,e,i){const s=r.field.isKeyField()?Ee.comparator(e.key,i.key):(function(u,d,p){const g=d.data.field(u),y=p.data.field(u);return g!==null&&y!==null?oo(g,y):Ae(42886)})(r.field,e,i);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return Ae(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(e,i){this.mapKeyFn=e,this.equalsFn=i,this.inner={},this.innerSize=0}get(e){const i=this.mapKeyFn(e),s=this.inner[i];if(s!==void 0){for(const[l,u]of s)if(this.equalsFn(l,e))return u}}has(e){return this.get(e)!==void 0}set(e,i){const s=this.mapKeyFn(e),l=this.inner[s];if(l===void 0)return this.inner[s]=[[e,i]],void this.innerSize++;for(let u=0;u<l.length;u++)if(this.equalsFn(l[u][0],e))return void(l[u]=[e,i]);l.push([e,i]),this.innerSize++}delete(e){const i=this.mapKeyFn(e),s=this.inner[i];if(s===void 0)return!1;for(let l=0;l<s.length;l++)if(this.equalsFn(s[l][0],e))return s.length===1?delete this.inner[i]:s.splice(l,1),this.innerSize--,!0;return!1}forEach(e){ra(this.inner,((i,s)=>{for(const[l,u]of s)e(l,u)}))}isEmpty(){return g0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l4=new gt(Ee.comparator);function mr(){return l4}const M0=new gt(Ee.comparator);function bl(...r){let e=M0;for(const i of r)e=e.insert(i.key,i);return e}function k0(r){let e=M0;return r.forEach(((i,s)=>e=e.insert(i,s.overlayedDocument))),e}function Zs(){return Nl()}function V0(){return Nl()}function Nl(){return new sa((r=>r.toString()),((r,e)=>r.isEqual(e)))}const u4=new gt(Ee.comparator),c4=new zt(Ee.comparator);function qe(...r){let e=c4;for(const i of r)e=e.add(i);return e}const h4=new zt(Ve);function f4(){return h4}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vm(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Yc(e)?"-0":e}}function L0(r){return{integerValue:""+r}}function d4(r,e){return zw(e)?L0(e):Vm(r,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(){this._=void 0}}function m4(r,e,i){return r instanceof $c?(function(l,u){const d={fields:{[_0]:{stringValue:v0},[T0]:{timestampValue:{seconds:l.seconds,nanos:l.nanoseconds}}}};return u&&Nm(u)&&(u=mh(u)),u&&(d.fields[E0]=u),{mapValue:d}})(i,e):r instanceof jl?P0(r,e):r instanceof Bl?z0(r,e):(function(l,u){const d=U0(l,u),p=Ov(d)+Ov(l.Ee);return tm(d)&&tm(l.Ee)?L0(p):Vm(l.serializer,p)})(r,e)}function p4(r,e,i){return r instanceof jl?P0(r,e):r instanceof Bl?z0(r,e):i}function U0(r,e){return r instanceof eh?(function(s){return tm(s)||(function(u){return!!u&&"doubleValue"in u})(s)})(e)?e:{integerValue:0}:null}class $c extends vh{}class jl extends vh{constructor(e){super(),this.elements=e}}function P0(r,e){const i=j0(e);for(const s of r.elements)i.some((l=>Oi(l,s)))||i.push(s);return{arrayValue:{values:i}}}class Bl extends vh{constructor(e){super(),this.elements=e}}function z0(r,e){let i=j0(e);for(const s of r.elements)i=i.filter((l=>!Oi(l,s)));return{arrayValue:{values:i}}}class eh extends vh{constructor(e,i){super(),this.serializer=e,this.Ee=i}}function Ov(r){return wt(r.integerValue||r.doubleValue)}function j0(r){return Om(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function g4(r,e){return r.field.isEqual(e.field)&&(function(s,l){return s instanceof jl&&l instanceof jl||s instanceof Bl&&l instanceof Bl?ao(s.elements,l.elements,Oi):s instanceof eh&&l instanceof eh?Oi(s.Ee,l.Ee):s instanceof $c&&l instanceof $c})(r.transform,e.transform)}class y4{constructor(e,i){this.version=e,this.transformResults=i}}class ur{constructor(e,i){this.updateTime=e,this.exists=i}static none(){return new ur}static exists(e){return new ur(void 0,e)}static updateTime(e){return new ur(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Uc(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class _h{}function B0(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new H0(r.key,ur.none()):new Xl(r.key,r.data,ur.none());{const i=r.data,s=Zn.empty();let l=new zt(nn.comparator);for(let u of e.fields)if(!l.has(u)){let d=i.field(u);d===null&&u.length>1&&(u=u.popLast(),d=i.field(u)),d===null?s.delete(u):s.set(u,d),l=l.add(u)}return new aa(r.key,s,new ui(l.toArray()),ur.none())}}function v4(r,e,i){r instanceof Xl?(function(l,u,d){const p=l.value.clone(),g=Mv(l.fieldTransforms,u,d.transformResults);p.setAll(g),u.convertToFoundDocument(d.version,p).setHasCommittedMutations()})(r,e,i):r instanceof aa?(function(l,u,d){if(!Uc(l.precondition,u))return void u.convertToUnknownDocument(d.version);const p=Mv(l.fieldTransforms,u,d.transformResults),g=u.data;g.setAll(q0(l)),g.setAll(p),u.convertToFoundDocument(d.version,g).setHasCommittedMutations()})(r,e,i):(function(l,u,d){u.convertToNoDocument(d.version).setHasCommittedMutations()})(0,e,i)}function Ol(r,e,i,s){return r instanceof Xl?(function(u,d,p,g){if(!Uc(u.precondition,d))return p;const y=u.value.clone(),E=kv(u.fieldTransforms,g,d);return y.setAll(E),d.convertToFoundDocument(d.version,y).setHasLocalMutations(),null})(r,e,i,s):r instanceof aa?(function(u,d,p,g){if(!Uc(u.precondition,d))return p;const y=kv(u.fieldTransforms,g,d),E=d.data;return E.setAll(q0(u)),E.setAll(y),d.convertToFoundDocument(d.version,E).setHasLocalMutations(),p===null?null:p.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map((b=>b.field)))})(r,e,i,s):(function(u,d,p){return Uc(u.precondition,d)?(d.convertToNoDocument(d.version).setHasLocalMutations(),null):p})(r,e,i)}function _4(r,e){let i=null;for(const s of r.fieldTransforms){const l=e.data.field(s.field),u=U0(s.transform,l||null);u!=null&&(i===null&&(i=Zn.empty()),i.set(s.field,u))}return i||null}function xv(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!(function(s,l){return s===void 0&&l===void 0||!(!s||!l)&&ao(s,l,((u,d)=>g4(u,d)))})(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class Xl extends _h{constructor(e,i,s,l=[]){super(),this.key=e,this.value=i,this.precondition=s,this.fieldTransforms=l,this.type=0}getFieldMask(){return null}}class aa extends _h{constructor(e,i,s,l,u=[]){super(),this.key=e,this.data=i,this.fieldMask=s,this.precondition=l,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function q0(r){const e=new Map;return r.fieldMask.fields.forEach((i=>{if(!i.isEmpty()){const s=r.data.field(i);e.set(i,s)}})),e}function Mv(r,e,i){const s=new Map;tt(r.length===i.length,32656,{Ae:i.length,Re:r.length});for(let l=0;l<i.length;l++){const u=r[l],d=u.transform,p=e.data.field(u.field);s.set(u.field,p4(d,p,i[l]))}return s}function kv(r,e,i){const s=new Map;for(const l of r){const u=l.transform,d=i.data.field(l.field);s.set(l.field,m4(u,d,e))}return s}class H0 extends _h{constructor(e,i){super(),this.key=e,this.precondition=i,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class E4 extends _h{constructor(e,i){super(),this.key=e,this.precondition=i,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T4{constructor(e,i,s,l){this.batchId=e,this.localWriteTime=i,this.baseMutations=s,this.mutations=l}applyToRemoteDocument(e,i){const s=i.mutationResults;for(let l=0;l<this.mutations.length;l++){const u=this.mutations[l];u.key.isEqual(e.key)&&v4(u,e,s[l])}}applyToLocalView(e,i){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(i=Ol(s,e,i,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(i=Ol(s,e,i,this.localWriteTime));return i}applyToLocalDocumentSet(e,i){const s=V0();return this.mutations.forEach((l=>{const u=e.get(l.key),d=u.overlayedDocument;let p=this.applyToLocalView(d,u.mutatedFields);p=i.has(l.key)?null:p;const g=B0(d,p);g!==null&&s.set(l.key,g),d.isValidDocument()||d.convertToNoDocument(Ce.min())})),s}keys(){return this.mutations.reduce(((e,i)=>e.add(i.key)),qe())}isEqual(e){return this.batchId===e.batchId&&ao(this.mutations,e.mutations,((i,s)=>xv(i,s)))&&ao(this.baseMutations,e.baseMutations,((i,s)=>xv(i,s)))}}class Lm{constructor(e,i,s,l){this.batch=e,this.commitVersion=i,this.mutationResults=s,this.docVersions=l}static from(e,i,s){tt(e.mutations.length===s.length,58842,{Ve:e.mutations.length,me:s.length});let l=(function(){return u4})();const u=e.mutations;for(let d=0;d<u.length;d++)l=l.insert(u[d].key,s[d].version);return new Lm(e,i,s,l)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b4{constructor(e,i){this.largestBatchId=e,this.mutation=i}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S4{constructor(e,i){this.count=e,this.unchangedNames=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Mt,Ye;function A4(r){switch(r){case ne.OK:return Ae(64938);case ne.CANCELLED:case ne.UNKNOWN:case ne.DEADLINE_EXCEEDED:case ne.RESOURCE_EXHAUSTED:case ne.INTERNAL:case ne.UNAVAILABLE:case ne.UNAUTHENTICATED:return!1;case ne.INVALID_ARGUMENT:case ne.NOT_FOUND:case ne.ALREADY_EXISTS:case ne.PERMISSION_DENIED:case ne.FAILED_PRECONDITION:case ne.ABORTED:case ne.OUT_OF_RANGE:case ne.UNIMPLEMENTED:case ne.DATA_LOSS:return!0;default:return Ae(15467,{code:r})}}function F0(r){if(r===void 0)return dr("GRPC error has no .code"),ne.UNKNOWN;switch(r){case Mt.OK:return ne.OK;case Mt.CANCELLED:return ne.CANCELLED;case Mt.UNKNOWN:return ne.UNKNOWN;case Mt.DEADLINE_EXCEEDED:return ne.DEADLINE_EXCEEDED;case Mt.RESOURCE_EXHAUSTED:return ne.RESOURCE_EXHAUSTED;case Mt.INTERNAL:return ne.INTERNAL;case Mt.UNAVAILABLE:return ne.UNAVAILABLE;case Mt.UNAUTHENTICATED:return ne.UNAUTHENTICATED;case Mt.INVALID_ARGUMENT:return ne.INVALID_ARGUMENT;case Mt.NOT_FOUND:return ne.NOT_FOUND;case Mt.ALREADY_EXISTS:return ne.ALREADY_EXISTS;case Mt.PERMISSION_DENIED:return ne.PERMISSION_DENIED;case Mt.FAILED_PRECONDITION:return ne.FAILED_PRECONDITION;case Mt.ABORTED:return ne.ABORTED;case Mt.OUT_OF_RANGE:return ne.OUT_OF_RANGE;case Mt.UNIMPLEMENTED:return ne.UNIMPLEMENTED;case Mt.DATA_LOSS:return ne.DATA_LOSS;default:return Ae(39323,{code:r})}}(Ye=Mt||(Mt={}))[Ye.OK=0]="OK",Ye[Ye.CANCELLED=1]="CANCELLED",Ye[Ye.UNKNOWN=2]="UNKNOWN",Ye[Ye.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ye[Ye.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ye[Ye.NOT_FOUND=5]="NOT_FOUND",Ye[Ye.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ye[Ye.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ye[Ye.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ye[Ye.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ye[Ye.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ye[Ye.ABORTED=10]="ABORTED",Ye[Ye.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ye[Ye.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ye[Ye.INTERNAL=13]="INTERNAL",Ye[Ye.UNAVAILABLE=14]="UNAVAILABLE",Ye[Ye.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w4=new ds([4294967295,4294967295],0);function Vv(r){const e=d0().encode(r),i=new s0;return i.update(e),new Uint8Array(i.digest())}function Lv(r){const e=new DataView(r.buffer),i=e.getUint32(0,!0),s=e.getUint32(4,!0),l=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new ds([i,s],0),new ds([l,u],0)]}class Um{constructor(e,i,s){if(this.bitmap=e,this.padding=i,this.hashCount=s,i<0||i>=8)throw new Sl(`Invalid padding: ${i}`);if(s<0)throw new Sl(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Sl(`Invalid hash count: ${s}`);if(e.length===0&&i!==0)throw new Sl(`Invalid padding when bitmap length is 0: ${i}`);this.fe=8*e.length-i,this.ge=ds.fromNumber(this.fe)}pe(e,i,s){let l=e.add(i.multiply(ds.fromNumber(s)));return l.compare(w4)===1&&(l=new ds([l.getBits(0),l.getBits(1)],0)),l.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const i=Vv(e),[s,l]=Lv(i);for(let u=0;u<this.hashCount;u++){const d=this.pe(s,l,u);if(!this.ye(d))return!1}return!0}static create(e,i,s){const l=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),d=new Um(u,l,i);return s.forEach((p=>d.insert(p))),d}insert(e){if(this.fe===0)return;const i=Vv(e),[s,l]=Lv(i);for(let u=0;u<this.hashCount;u++){const d=this.pe(s,l,u);this.we(d)}}we(e){const i=Math.floor(e/8),s=e%8;this.bitmap[i]|=1<<s}}class Sl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(e,i,s,l,u){this.snapshotVersion=e,this.targetChanges=i,this.targetMismatches=s,this.documentUpdates=l,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,i,s){const l=new Map;return l.set(e,Wl.createSynthesizedTargetChangeForCurrentChange(e,i,s)),new Eh(Ce.min(),l,new gt(Ve),mr(),qe())}}class Wl{constructor(e,i,s,l,u){this.resumeToken=e,this.current=i,this.addedDocuments=s,this.modifiedDocuments=l,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,i,s){return new Wl(s,i,qe(),qe(),qe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(e,i,s,l){this.Se=e,this.removedTargetIds=i,this.key=s,this.be=l}}class G0{constructor(e,i){this.targetId=e,this.De=i}}class Q0{constructor(e,i,s=rn.EMPTY_BYTE_STRING,l=null){this.state=e,this.targetIds=i,this.resumeToken=s,this.cause=l}}class Uv{constructor(){this.ve=0,this.Ce=Pv(),this.Fe=rn.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=qe(),i=qe(),s=qe();return this.Ce.forEach(((l,u)=>{switch(u){case 0:e=e.add(l);break;case 2:i=i.add(l);break;case 1:s=s.add(l);break;default:Ae(38017,{changeType:u})}})),new Wl(this.Fe,this.Me,e,i,s)}ke(){this.xe=!1,this.Ce=Pv()}qe(e,i){this.xe=!0,this.Ce=this.Ce.insert(e,i)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,tt(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class R4{constructor(e){this.We=e,this.Ge=new Map,this.ze=mr(),this.je=Ic(),this.Je=Ic(),this.He=new gt(Ve)}Ye(e){for(const i of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(i,e.be):this.Xe(i,e.key,e.be);for(const i of e.removedTargetIds)this.Xe(i,e.key,e.be)}et(e){this.forEachTarget(e,(i=>{const s=this.tt(i);switch(e.state){case 0:this.nt(i)&&s.Be(e.resumeToken);break;case 1:s.Ue(),s.Oe||s.ke(),s.Be(e.resumeToken);break;case 2:s.Ue(),s.Oe||this.removeTarget(i);break;case 3:this.nt(i)&&(s.Ke(),s.Be(e.resumeToken));break;case 4:this.nt(i)&&(this.rt(i),s.Be(e.resumeToken));break;default:Ae(56790,{state:e.state})}}))}forEachTarget(e,i){e.targetIds.length>0?e.targetIds.forEach(i):this.Ge.forEach(((s,l)=>{this.nt(l)&&i(l)}))}it(e){const i=e.targetId,s=e.De.count,l=this.st(i);if(l){const u=l.target;if(im(u))if(s===0){const d=new Ee(u.path);this.Xe(i,d,cn.newNoDocument(d,Ce.min()))}else tt(s===1,20013,{expectedCount:s});else{const d=this.ot(i);if(d!==s){const p=this._t(e),g=p?this.ut(p,e,d):1;if(g!==0){this.rt(i);const y=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(i,y)}}}}}_t(e){const i=e.De.unchangedNames;if(!i||!i.bits)return null;const{bits:{bitmap:s="",padding:l=0},hashCount:u=0}=i;let d,p;try{d=_s(s).toUint8Array()}catch(g){if(g instanceof y0)return gs("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{p=new Um(d,l,u)}catch(g){return gs(g instanceof Sl?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return p.fe===0?null:p}ut(e,i,s){return i.De.count===s-this.ht(e,i.targetId)?0:2}ht(e,i){const s=this.We.getRemoteKeysForTarget(i);let l=0;return s.forEach((u=>{const d=this.We.lt(),p=`projects/${d.projectId}/databases/${d.database}/documents/${u.path.canonicalString()}`;e.mightContain(p)||(this.Xe(i,u,null),l++)})),l}Pt(e){const i=new Map;this.Ge.forEach(((u,d)=>{const p=this.st(d);if(p){if(u.current&&im(p.target)){const g=new Ee(p.target.path);this.Tt(g).has(d)||this.It(d,g)||this.Xe(d,g,cn.newNoDocument(g,e))}u.Ne&&(i.set(d,u.Le()),u.ke())}}));let s=qe();this.Je.forEach(((u,d)=>{let p=!0;d.forEachWhile((g=>{const y=this.st(g);return!y||y.purpose==="TargetPurposeLimboResolution"||(p=!1,!1)})),p&&(s=s.add(u))})),this.ze.forEach(((u,d)=>d.setReadTime(e)));const l=new Eh(e,i,this.He,this.ze,s);return this.ze=mr(),this.je=Ic(),this.Je=Ic(),this.He=new gt(Ve),l}Ze(e,i){if(!this.nt(e))return;const s=this.It(e,i.key)?2:0;this.tt(e).qe(i.key,s),this.ze=this.ze.insert(i.key,i),this.je=this.je.insert(i.key,this.Tt(i.key).add(e)),this.Je=this.Je.insert(i.key,this.dt(i.key).add(e))}Xe(e,i,s){if(!this.nt(e))return;const l=this.tt(e);this.It(e,i)?l.qe(i,1):l.Qe(i),this.Je=this.Je.insert(i,this.dt(i).delete(e)),this.Je=this.Je.insert(i,this.dt(i).add(e)),s&&(this.ze=this.ze.insert(i,s))}removeTarget(e){this.Ge.delete(e)}ot(e){const i=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+i.addedDocuments.size-i.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let i=this.Ge.get(e);return i||(i=new Uv,this.Ge.set(e,i)),i}dt(e){let i=this.Je.get(e);return i||(i=new zt(Ve),this.Je=this.Je.insert(e,i)),i}Tt(e){let i=this.je.get(e);return i||(i=new zt(Ve),this.je=this.je.insert(e,i)),i}nt(e){const i=this.st(e)!==null;return i||ce("WatchChangeAggregator","Detected inactive target",e),i}st(e){const i=this.Ge.get(e);return i&&i.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new Uv),this.We.getRemoteKeysForTarget(e).forEach((i=>{this.Xe(e,i,null)}))}It(e,i){return this.We.getRemoteKeysForTarget(e).has(i)}}function Ic(){return new gt(Ee.comparator)}function Pv(){return new gt(Ee.comparator)}const C4={asc:"ASCENDING",desc:"DESCENDING"},I4={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},D4={and:"AND",or:"OR"};class N4{constructor(e,i){this.databaseId=e,this.useProto3Json=i}}function sm(r,e){return r.useProto3Json||dh(e)?e:{value:e}}function th(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function K0(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function O4(r,e){return th(r,e.toTimestamp())}function Ii(r){return tt(!!r,49232),Ce.fromTimestamp((function(i){const s=vs(i);return new ft(s.seconds,s.nanos)})(r))}function Pm(r,e){return am(r,e).canonicalString()}function am(r,e){const i=(function(l){return new pt(["projects",l.projectId,"databases",l.database])})(r).child("documents");return e===void 0?i:i.child(e)}function Y0(r){const e=pt.fromString(r);return tt($0(e),10190,{key:e.toString()}),e}function om(r,e){return Pm(r.databaseId,e.path)}function Pd(r,e){const i=Y0(e);if(i.get(1)!==r.databaseId.projectId)throw new ge(ne.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+i.get(1)+" vs "+r.databaseId.projectId);if(i.get(3)!==r.databaseId.database)throw new ge(ne.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+i.get(3)+" vs "+r.databaseId.database);return new Ee(W0(i))}function X0(r,e){return Pm(r.databaseId,e)}function x4(r){const e=Y0(r);return e.length===4?pt.emptyPath():W0(e)}function lm(r){return new pt(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function W0(r){return tt(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function zv(r,e,i){return{name:om(r,e),fields:i.value.mapValue.fields}}function M4(r,e){let i;if("targetChange"in e){e.targetChange;const s=(function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:Ae(39313,{state:y})})(e.targetChange.targetChangeType||"NO_CHANGE"),l=e.targetChange.targetIds||[],u=(function(y,E){return y.useProto3Json?(tt(E===void 0||typeof E=="string",58123),rn.fromBase64String(E||"")):(tt(E===void 0||E instanceof Buffer||E instanceof Uint8Array,16193),rn.fromUint8Array(E||new Uint8Array))})(r,e.targetChange.resumeToken),d=e.targetChange.cause,p=d&&(function(y){const E=y.code===void 0?ne.UNKNOWN:F0(y.code);return new ge(E,y.message||"")})(d);i=new Q0(s,l,u,p||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const l=Pd(r,s.document.name),u=Ii(s.document.updateTime),d=s.document.createTime?Ii(s.document.createTime):Ce.min(),p=new Zn({mapValue:{fields:s.document.fields}}),g=cn.newFoundDocument(l,u,d,p),y=s.targetIds||[],E=s.removedTargetIds||[];i=new Pc(y,E,g.key,g)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const l=Pd(r,s.document),u=s.readTime?Ii(s.readTime):Ce.min(),d=cn.newNoDocument(l,u),p=s.removedTargetIds||[];i=new Pc([],p,d.key,d)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const l=Pd(r,s.document),u=s.removedTargetIds||[];i=new Pc([],u,l,null)}else{if(!("filter"in e))return Ae(11601,{At:e});{e.filter;const s=e.filter;s.targetId;const{count:l=0,unchangedNames:u}=s,d=new S4(l,u),p=s.targetId;i=new G0(p,d)}}return i}function k4(r,e){let i;if(e instanceof Xl)i={update:zv(r,e.key,e.value)};else if(e instanceof H0)i={delete:om(r,e.key)};else if(e instanceof aa)i={update:zv(r,e.key,e.data),updateMask:H4(e.fieldMask)};else{if(!(e instanceof E4))return Ae(16599,{Rt:e.type});i={verify:om(r,e.key)}}return e.fieldTransforms.length>0&&(i.updateTransforms=e.fieldTransforms.map((s=>(function(u,d){const p=d.transform;if(p instanceof $c)return{fieldPath:d.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(p instanceof jl)return{fieldPath:d.field.canonicalString(),appendMissingElements:{values:p.elements}};if(p instanceof Bl)return{fieldPath:d.field.canonicalString(),removeAllFromArray:{values:p.elements}};if(p instanceof eh)return{fieldPath:d.field.canonicalString(),increment:p.Ee};throw Ae(20930,{transform:d.transform})})(0,s)))),e.precondition.isNone||(i.currentDocument=(function(l,u){return u.updateTime!==void 0?{updateTime:O4(l,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:Ae(27497)})(r,e.precondition)),i}function V4(r,e){return r&&r.length>0?(tt(e!==void 0,14353),r.map((i=>(function(l,u){let d=l.updateTime?Ii(l.updateTime):Ii(u);return d.isEqual(Ce.min())&&(d=Ii(u)),new y4(d,l.transformResults||[])})(i,e)))):[]}function L4(r,e){return{documents:[X0(r,e.path)]}}function U4(r,e){const i={structuredQuery:{}},s=e.path;let l;e.collectionGroup!==null?(l=s,i.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(l=s.popLast(),i.structuredQuery.from=[{collectionId:s.lastSegment()}]),i.parent=X0(r,l);const u=(function(y){if(y.length!==0)return J0(xi.create(y,"and"))})(e.filters);u&&(i.structuredQuery.where=u);const d=(function(y){if(y.length!==0)return y.map((E=>(function(A){return{field:Za(A.field),direction:j4(A.dir)}})(E)))})(e.orderBy);d&&(i.structuredQuery.orderBy=d);const p=sm(r,e.limit);return p!==null&&(i.structuredQuery.limit=p),e.startAt&&(i.structuredQuery.startAt=(function(y){return{before:y.inclusive,values:y.position}})(e.startAt)),e.endAt&&(i.structuredQuery.endAt=(function(y){return{before:!y.inclusive,values:y.position}})(e.endAt)),{Vt:i,parent:l}}function P4(r){let e=x4(r.parent);const i=r.structuredQuery,s=i.from?i.from.length:0;let l=null;if(s>0){tt(s===1,65062);const E=i.from[0];E.allDescendants?l=E.collectionId:e=e.child(E.collectionId)}let u=[];i.where&&(u=(function(b){const A=Z0(b);return A instanceof xi&&C0(A)?A.getFilters():[A]})(i.where));let d=[];i.orderBy&&(d=(function(b){return b.map((A=>(function(Q){return new Jc(Ja(Q.field),(function(U){switch(U){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(Q.direction))})(A)))})(i.orderBy));let p=null;i.limit&&(p=(function(b){let A;return A=typeof b=="object"?b.value:b,dh(A)?null:A})(i.limit));let g=null;i.startAt&&(g=(function(b){const A=!!b.before,k=b.values||[];return new Zc(k,A)})(i.startAt));let y=null;return i.endAt&&(y=(function(b){const A=!b.before,k=b.values||[];return new Zc(k,A)})(i.endAt)),i4(e,l,d,u,p,"F",g,y)}function z4(r,e){const i=(function(l){switch(l){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ae(28987,{purpose:l})}})(e.purpose);return i==null?null:{"goog-listen-tags":i}}function Z0(r){return r.unaryFilter!==void 0?(function(i){switch(i.unaryFilter.op){case"IS_NAN":const s=Ja(i.unaryFilter.field);return Pt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const l=Ja(i.unaryFilter.field);return Pt.create(l,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=Ja(i.unaryFilter.field);return Pt.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const d=Ja(i.unaryFilter.field);return Pt.create(d,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Ae(61313);default:return Ae(60726)}})(r):r.fieldFilter!==void 0?(function(i){return Pt.create(Ja(i.fieldFilter.field),(function(l){switch(l){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Ae(58110);default:return Ae(50506)}})(i.fieldFilter.op),i.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(i){return xi.create(i.compositeFilter.filters.map((s=>Z0(s))),(function(l){switch(l){case"AND":return"and";case"OR":return"or";default:return Ae(1026)}})(i.compositeFilter.op))})(r):Ae(30097,{filter:r})}function j4(r){return C4[r]}function B4(r){return I4[r]}function q4(r){return D4[r]}function Za(r){return{fieldPath:r.canonicalString()}}function Ja(r){return nn.fromServerFormat(r.fieldPath)}function J0(r){return r instanceof Pt?(function(i){if(i.op==="=="){if(Rv(i.value))return{unaryFilter:{field:Za(i.field),op:"IS_NAN"}};if(wv(i.value))return{unaryFilter:{field:Za(i.field),op:"IS_NULL"}}}else if(i.op==="!="){if(Rv(i.value))return{unaryFilter:{field:Za(i.field),op:"IS_NOT_NAN"}};if(wv(i.value))return{unaryFilter:{field:Za(i.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Za(i.field),op:B4(i.op),value:i.value}}})(r):r instanceof xi?(function(i){const s=i.getFilters().map((l=>J0(l)));return s.length===1?s[0]:{compositeFilter:{op:q4(i.op),filters:s}}})(r):Ae(54877,{filter:r})}function H4(r){const e=[];return r.fields.forEach((i=>e.push(i.canonicalString()))),{fieldPaths:e}}function $0(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e,i,s,l,u=Ce.min(),d=Ce.min(),p=rn.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=i,this.purpose=s,this.sequenceNumber=l,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=d,this.resumeToken=p,this.expectedCount=g}withSequenceNumber(e){return new ls(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,i){return new ls(this.target,this.targetId,this.purpose,this.sequenceNumber,i,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ls(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ls(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F4{constructor(e){this.gt=e}}function G4(r){const e=P4({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?rm(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q4{constructor(){this.Dn=new K4}addToCollectionParentIndex(e,i){return this.Dn.add(i),ee.resolve()}getCollectionParents(e,i){return ee.resolve(this.Dn.getEntries(i))}addFieldIndex(e,i){return ee.resolve()}deleteFieldIndex(e,i){return ee.resolve()}deleteAllFieldIndexes(e){return ee.resolve()}createTargetIndexes(e,i){return ee.resolve()}getDocumentsMatchingTarget(e,i){return ee.resolve(null)}getIndexType(e,i){return ee.resolve(0)}getFieldIndexes(e,i){return ee.resolve([])}getNextCollectionGroupToUpdate(e){return ee.resolve(null)}getMinOffset(e,i){return ee.resolve(ys.min())}getMinOffsetFromCollectionGroup(e,i){return ee.resolve(ys.min())}updateCollectionGroup(e,i,s){return ee.resolve()}updateIndexEntries(e,i){return ee.resolve()}}class K4{constructor(){this.index={}}add(e){const i=e.lastSegment(),s=e.popLast(),l=this.index[i]||new zt(pt.comparator),u=!l.has(s);return this.index[i]=l.add(s),u}has(e){const i=e.lastSegment(),s=e.popLast(),l=this.index[i];return l&&l.has(s)}getEntries(e){return(this.index[e]||new zt(pt.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jv={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},eE=41943040;class In{static withCacheSize(e){return new In(e,In.DEFAULT_COLLECTION_PERCENTILE,In.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,i,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=i,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */In.DEFAULT_COLLECTION_PERCENTILE=10,In.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,In.DEFAULT=new In(eE,In.DEFAULT_COLLECTION_PERCENTILE,In.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),In.DISABLED=new In(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new uo(0)}static ur(){return new uo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bv="LruGarbageCollector",Y4=1048576;function qv([r,e],[i,s]){const l=Ve(r,i);return l===0?Ve(e,s):l}class X4{constructor(e){this.Tr=e,this.buffer=new zt(qv),this.Ir=0}dr(){return++this.Ir}Er(e){const i=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(i);else{const s=this.buffer.last();qv(i,s)<0&&(this.buffer=this.buffer.delete(s).add(i))}}get maxValue(){return this.buffer.last()[0]}}class W4{constructor(e,i,s){this.garbageCollector=e,this.asyncQueue=i,this.localStore=s,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){ce(Bv,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(i){yo(i)?ce(Bv,"Ignoring IndexedDB error during garbage collection: ",i):await go(i)}await this.Rr(3e5)}))}}class Z4{constructor(e,i){this.Vr=e,this.params=i}calculateTargetCount(e,i){return this.Vr.mr(e).next((s=>Math.floor(i/100*s)))}nthSequenceNumber(e,i){if(i===0)return ee.resolve(fh.ue);const s=new X4(i);return this.Vr.forEachTarget(e,(l=>s.Er(l.sequenceNumber))).next((()=>this.Vr.gr(e,(l=>s.Er(l))))).next((()=>s.maxValue))}removeTargets(e,i,s){return this.Vr.removeTargets(e,i,s)}removeOrphanedDocuments(e,i){return this.Vr.removeOrphanedDocuments(e,i)}collect(e,i){return this.params.cacheSizeCollectionThreshold===-1?(ce("LruGarbageCollector","Garbage collection skipped; disabled"),ee.resolve(jv)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(ce("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),jv):this.pr(e,i)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,i){let s,l,u,d,p,g,y;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((b=>(b>this.params.maximumSequenceNumbersToCollect?(ce("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${b}`),l=this.params.maximumSequenceNumbersToCollect):l=b,d=Date.now(),this.nthSequenceNumber(e,l)))).next((b=>(s=b,p=Date.now(),this.removeTargets(e,s,i)))).next((b=>(u=b,g=Date.now(),this.removeOrphanedDocuments(e,s)))).next((b=>(y=Date.now(),Xa()<=Be.DEBUG&&ce("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${d-E}ms
	Determined least recently used ${l} in `+(p-d)+`ms
	Removed ${u} targets in `+(g-p)+`ms
	Removed ${b} documents in `+(y-g)+`ms
Total Duration: ${y-E}ms`),ee.resolve({didRun:!0,sequenceNumbersCollected:l,targetsRemoved:u,documentsRemoved:b}))))}}function J4(r,e){return new Z4(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $4{constructor(){this.changes=new sa((e=>e.toString()),((e,i)=>e.isEqual(i))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,i){this.assertNotApplied(),this.changes.set(e,cn.newInvalidDocument(e).setReadTime(i))}getEntry(e,i){this.assertNotApplied();const s=this.changes.get(i);return s!==void 0?ee.resolve(s):this.getFromCache(e,i)}getEntries(e,i){return this.getAllFromCache(e,i)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eR{constructor(e,i){this.overlayedDocument=e,this.mutatedFields=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tR{constructor(e,i,s,l){this.remoteDocumentCache=e,this.mutationQueue=i,this.documentOverlayCache=s,this.indexManager=l}getDocument(e,i){let s=null;return this.documentOverlayCache.getOverlay(e,i).next((l=>(s=l,this.remoteDocumentCache.getEntry(e,i)))).next((l=>(s!==null&&Ol(s.mutation,l,ui.empty(),ft.now()),l)))}getDocuments(e,i){return this.remoteDocumentCache.getEntries(e,i).next((s=>this.getLocalViewOfDocuments(e,s,qe()).next((()=>s))))}getLocalViewOfDocuments(e,i,s=qe()){const l=Zs();return this.populateOverlays(e,l,i).next((()=>this.computeViews(e,i,l,s).next((u=>{let d=bl();return u.forEach(((p,g)=>{d=d.insert(p,g.overlayedDocument)})),d}))))}getOverlayedDocuments(e,i){const s=Zs();return this.populateOverlays(e,s,i).next((()=>this.computeViews(e,i,s,qe())))}populateOverlays(e,i,s){const l=[];return s.forEach((u=>{i.has(u)||l.push(u)})),this.documentOverlayCache.getOverlays(e,l).next((u=>{u.forEach(((d,p)=>{i.set(d,p)}))}))}computeViews(e,i,s,l){let u=mr();const d=Nl(),p=(function(){return Nl()})();return i.forEach(((g,y)=>{const E=s.get(y.key);l.has(y.key)&&(E===void 0||E.mutation instanceof aa)?u=u.insert(y.key,y):E!==void 0?(d.set(y.key,E.mutation.getFieldMask()),Ol(E.mutation,y,E.mutation.getFieldMask(),ft.now())):d.set(y.key,ui.empty())})),this.recalculateAndSaveOverlays(e,u).next((g=>(g.forEach(((y,E)=>d.set(y,E))),i.forEach(((y,E)=>{var b;return p.set(y,new eR(E,(b=d.get(y))!==null&&b!==void 0?b:null))})),p)))}recalculateAndSaveOverlays(e,i){const s=Nl();let l=new gt(((d,p)=>d-p)),u=qe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,i).next((d=>{for(const p of d)p.keys().forEach((g=>{const y=i.get(g);if(y===null)return;let E=s.get(g)||ui.empty();E=p.applyToLocalView(y,E),s.set(g,E);const b=(l.get(p.batchId)||qe()).add(g);l=l.insert(p.batchId,b)}))})).next((()=>{const d=[],p=l.getReverseIterator();for(;p.hasNext();){const g=p.getNext(),y=g.key,E=g.value,b=V0();E.forEach((A=>{if(!u.has(A)){const k=B0(i.get(A),s.get(A));k!==null&&b.set(A,k),u=u.add(A)}})),d.push(this.documentOverlayCache.saveOverlays(e,y,b))}return ee.waitFor(d)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,i){return this.remoteDocumentCache.getEntries(e,i).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,i,s,l){return(function(d){return Ee.isDocumentKey(d.path)&&d.collectionGroup===null&&d.filters.length===0})(i)?this.getDocumentsMatchingDocumentQuery(e,i.path):r4(i)?this.getDocumentsMatchingCollectionGroupQuery(e,i,s,l):this.getDocumentsMatchingCollectionQuery(e,i,s,l)}getNextDocuments(e,i,s,l){return this.remoteDocumentCache.getAllFromCollectionGroup(e,i,s,l).next((u=>{const d=l-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,i,s.largestBatchId,l-u.size):ee.resolve(Zs());let p=Ll,g=u;return d.next((y=>ee.forEach(y,((E,b)=>(p<b.largestBatchId&&(p=b.largestBatchId),u.get(E)?ee.resolve():this.remoteDocumentCache.getEntry(e,E).next((A=>{g=g.insert(E,A)}))))).next((()=>this.populateOverlays(e,y,u))).next((()=>this.computeViews(e,g,y,qe()))).next((E=>({batchId:p,changes:k0(E)})))))}))}getDocumentsMatchingDocumentQuery(e,i){return this.getDocument(e,new Ee(i)).next((s=>{let l=bl();return s.isFoundDocument()&&(l=l.insert(s.key,s)),l}))}getDocumentsMatchingCollectionGroupQuery(e,i,s,l){const u=i.collectionGroup;let d=bl();return this.indexManager.getCollectionParents(e,u).next((p=>ee.forEach(p,(g=>{const y=(function(b,A){return new ph(A,null,b.explicitOrderBy.slice(),b.filters.slice(),b.limit,b.limitType,b.startAt,b.endAt)})(i,g.child(u));return this.getDocumentsMatchingCollectionQuery(e,y,s,l).next((E=>{E.forEach(((b,A)=>{d=d.insert(b,A)}))}))})).next((()=>d))))}getDocumentsMatchingCollectionQuery(e,i,s,l){let u;return this.documentOverlayCache.getOverlaysForCollection(e,i.path,s.largestBatchId).next((d=>(u=d,this.remoteDocumentCache.getDocumentsMatchingQuery(e,i,s,u,l)))).next((d=>{u.forEach(((g,y)=>{const E=y.getKey();d.get(E)===null&&(d=d.insert(E,cn.newInvalidDocument(E)))}));let p=bl();return d.forEach(((g,y)=>{const E=u.get(g);E!==void 0&&Ol(E.mutation,y,ui.empty(),ft.now()),yh(i,y)&&(p=p.insert(g,y))})),p}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nR{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,i){return ee.resolve(this.Br.get(i))}saveBundleMetadata(e,i){return this.Br.set(i.id,(function(l){return{id:l.id,version:l.version,createTime:Ii(l.createTime)}})(i)),ee.resolve()}getNamedQuery(e,i){return ee.resolve(this.Lr.get(i))}saveNamedQuery(e,i){return this.Lr.set(i.name,(function(l){return{name:l.name,query:G4(l.bundledQuery),readTime:Ii(l.readTime)}})(i)),ee.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iR{constructor(){this.overlays=new gt(Ee.comparator),this.kr=new Map}getOverlay(e,i){return ee.resolve(this.overlays.get(i))}getOverlays(e,i){const s=Zs();return ee.forEach(i,(l=>this.getOverlay(e,l).next((u=>{u!==null&&s.set(l,u)})))).next((()=>s))}saveOverlays(e,i,s){return s.forEach(((l,u)=>{this.wt(e,i,u)})),ee.resolve()}removeOverlaysForBatchId(e,i,s){const l=this.kr.get(s);return l!==void 0&&(l.forEach((u=>this.overlays=this.overlays.remove(u))),this.kr.delete(s)),ee.resolve()}getOverlaysForCollection(e,i,s){const l=Zs(),u=i.length+1,d=new Ee(i.child("")),p=this.overlays.getIteratorFrom(d);for(;p.hasNext();){const g=p.getNext().value,y=g.getKey();if(!i.isPrefixOf(y.path))break;y.path.length===u&&g.largestBatchId>s&&l.set(g.getKey(),g)}return ee.resolve(l)}getOverlaysForCollectionGroup(e,i,s,l){let u=new gt(((y,E)=>y-E));const d=this.overlays.getIterator();for(;d.hasNext();){const y=d.getNext().value;if(y.getKey().getCollectionGroup()===i&&y.largestBatchId>s){let E=u.get(y.largestBatchId);E===null&&(E=Zs(),u=u.insert(y.largestBatchId,E)),E.set(y.getKey(),y)}}const p=Zs(),g=u.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach(((y,E)=>p.set(y,E))),!(p.size()>=l)););return ee.resolve(p)}wt(e,i,s){const l=this.overlays.get(s.key);if(l!==null){const d=this.kr.get(l.largestBatchId).delete(s.key);this.kr.set(l.largestBatchId,d)}this.overlays=this.overlays.insert(s.key,new b4(i,s));let u=this.kr.get(i);u===void 0&&(u=qe(),this.kr.set(i,u)),this.kr.set(i,u.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rR{constructor(){this.sessionToken=rn.EMPTY_BYTE_STRING}getSessionToken(e){return ee.resolve(this.sessionToken)}setSessionToken(e,i){return this.sessionToken=i,ee.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(){this.qr=new zt(Qt.Qr),this.$r=new zt(Qt.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,i){const s=new Qt(e,i);this.qr=this.qr.add(s),this.$r=this.$r.add(s)}Kr(e,i){e.forEach((s=>this.addReference(s,i)))}removeReference(e,i){this.Wr(new Qt(e,i))}Gr(e,i){e.forEach((s=>this.removeReference(s,i)))}zr(e){const i=new Ee(new pt([])),s=new Qt(i,e),l=new Qt(i,e+1),u=[];return this.$r.forEachInRange([s,l],(d=>{this.Wr(d),u.push(d.key)})),u}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const i=new Ee(new pt([])),s=new Qt(i,e),l=new Qt(i,e+1);let u=qe();return this.$r.forEachInRange([s,l],(d=>{u=u.add(d.key)})),u}containsKey(e){const i=new Qt(e,0),s=this.qr.firstAfterOrEqual(i);return s!==null&&e.isEqual(s.key)}}class Qt{constructor(e,i){this.key=e,this.Hr=i}static Qr(e,i){return Ee.comparator(e.key,i.key)||Ve(e.Hr,i.Hr)}static Ur(e,i){return Ve(e.Hr,i.Hr)||Ee.comparator(e.key,i.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sR{constructor(e,i){this.indexManager=e,this.referenceDelegate=i,this.mutationQueue=[],this.er=1,this.Yr=new zt(Qt.Qr)}checkEmpty(e){return ee.resolve(this.mutationQueue.length===0)}addMutationBatch(e,i,s,l){const u=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const d=new T4(u,i,s,l);this.mutationQueue.push(d);for(const p of l)this.Yr=this.Yr.add(new Qt(p.key,u)),this.indexManager.addToCollectionParentIndex(e,p.key.path.popLast());return ee.resolve(d)}lookupMutationBatch(e,i){return ee.resolve(this.Zr(i))}getNextMutationBatchAfterBatchId(e,i){const s=i+1,l=this.Xr(s),u=l<0?0:l;return ee.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return ee.resolve(this.mutationQueue.length===0?Dm:this.er-1)}getAllMutationBatches(e){return ee.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,i){const s=new Qt(i,0),l=new Qt(i,Number.POSITIVE_INFINITY),u=[];return this.Yr.forEachInRange([s,l],(d=>{const p=this.Zr(d.Hr);u.push(p)})),ee.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,i){let s=new zt(Ve);return i.forEach((l=>{const u=new Qt(l,0),d=new Qt(l,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([u,d],(p=>{s=s.add(p.Hr)}))})),ee.resolve(this.ei(s))}getAllMutationBatchesAffectingQuery(e,i){const s=i.path,l=s.length+1;let u=s;Ee.isDocumentKey(u)||(u=u.child(""));const d=new Qt(new Ee(u),0);let p=new zt(Ve);return this.Yr.forEachWhile((g=>{const y=g.key.path;return!!s.isPrefixOf(y)&&(y.length===l&&(p=p.add(g.Hr)),!0)}),d),ee.resolve(this.ei(p))}ei(e){const i=[];return e.forEach((s=>{const l=this.Zr(s);l!==null&&i.push(l)})),i}removeMutationBatch(e,i){tt(this.ti(i.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Yr;return ee.forEach(i.mutations,(l=>{const u=new Qt(l.key,i.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,l.key)})).next((()=>{this.Yr=s}))}rr(e){}containsKey(e,i){const s=new Qt(i,0),l=this.Yr.firstAfterOrEqual(s);return ee.resolve(i.isEqual(l&&l.key))}performConsistencyCheck(e){return this.mutationQueue.length,ee.resolve()}ti(e,i){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const i=this.Xr(e);return i<0||i>=this.mutationQueue.length?null:this.mutationQueue[i]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aR{constructor(e){this.ni=e,this.docs=(function(){return new gt(Ee.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,i){const s=i.key,l=this.docs.get(s),u=l?l.size:0,d=this.ni(i);return this.docs=this.docs.insert(s,{document:i.mutableCopy(),size:d}),this.size+=d-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const i=this.docs.get(e);i&&(this.docs=this.docs.remove(e),this.size-=i.size)}getEntry(e,i){const s=this.docs.get(i);return ee.resolve(s?s.document.mutableCopy():cn.newInvalidDocument(i))}getEntries(e,i){let s=mr();return i.forEach((l=>{const u=this.docs.get(l);s=s.insert(l,u?u.document.mutableCopy():cn.newInvalidDocument(l))})),ee.resolve(s)}getDocumentsMatchingQuery(e,i,s,l){let u=mr();const d=i.path,p=new Ee(d.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(p);for(;g.hasNext();){const{key:y,value:{document:E}}=g.getNext();if(!d.isPrefixOf(y.path))break;y.path.length>d.length+1||Vw(kw(E),s)<=0||(l.has(E.key)||yh(i,E))&&(u=u.insert(E.key,E.mutableCopy()))}return ee.resolve(u)}getAllFromCollectionGroup(e,i,s,l){Ae(9500)}ri(e,i){return ee.forEach(this.docs,(s=>i(s)))}newChangeBuffer(e){return new oR(this)}getSize(e){return ee.resolve(this.size)}}class oR extends $4{constructor(e){super(),this.Or=e}applyChanges(e){const i=[];return this.changes.forEach(((s,l)=>{l.isValidDocument()?i.push(this.Or.addEntry(e,l)):this.Or.removeEntry(s)})),ee.waitFor(i)}getFromCache(e,i){return this.Or.getEntry(e,i)}getAllFromCache(e,i){return this.Or.getEntries(e,i)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lR{constructor(e){this.persistence=e,this.ii=new sa((i=>xm(i)),Mm),this.lastRemoteSnapshotVersion=Ce.min(),this.highestTargetId=0,this.si=0,this.oi=new zm,this.targetCount=0,this._i=uo.ar()}forEachTarget(e,i){return this.ii.forEach(((s,l)=>i(l))),ee.resolve()}getLastRemoteSnapshotVersion(e){return ee.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return ee.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),ee.resolve(this.highestTargetId)}setTargetsMetadata(e,i,s){return s&&(this.lastRemoteSnapshotVersion=s),i>this.si&&(this.si=i),ee.resolve()}hr(e){this.ii.set(e.target,e);const i=e.targetId;i>this.highestTargetId&&(this._i=new uo(i),this.highestTargetId=i),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,i){return this.hr(i),this.targetCount+=1,ee.resolve()}updateTargetData(e,i){return this.hr(i),ee.resolve()}removeTargetData(e,i){return this.ii.delete(i.target),this.oi.zr(i.targetId),this.targetCount-=1,ee.resolve()}removeTargets(e,i,s){let l=0;const u=[];return this.ii.forEach(((d,p)=>{p.sequenceNumber<=i&&s.get(p.targetId)===null&&(this.ii.delete(d),u.push(this.removeMatchingKeysForTargetId(e,p.targetId)),l++)})),ee.waitFor(u).next((()=>l))}getTargetCount(e){return ee.resolve(this.targetCount)}getTargetData(e,i){const s=this.ii.get(i)||null;return ee.resolve(s)}addMatchingKeys(e,i,s){return this.oi.Kr(i,s),ee.resolve()}removeMatchingKeys(e,i,s){this.oi.Gr(i,s);const l=this.persistence.referenceDelegate,u=[];return l&&i.forEach((d=>{u.push(l.markPotentiallyOrphaned(e,d))})),ee.waitFor(u)}removeMatchingKeysForTargetId(e,i){return this.oi.zr(i),ee.resolve()}getMatchingKeysForTargetId(e,i){const s=this.oi.Jr(i);return ee.resolve(s)}containsKey(e,i){return ee.resolve(this.oi.containsKey(i))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE{constructor(e,i){this.ai={},this.overlays={},this.ui=new fh(0),this.ci=!1,this.ci=!0,this.li=new rR,this.referenceDelegate=e(this),this.hi=new lR(this),this.indexManager=new Q4,this.remoteDocumentCache=(function(l){return new aR(l)})((s=>this.referenceDelegate.Pi(s))),this.serializer=new F4(i),this.Ti=new nR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let i=this.overlays[e.toKey()];return i||(i=new iR,this.overlays[e.toKey()]=i),i}getMutationQueue(e,i){let s=this.ai[e.toKey()];return s||(s=new sR(i,this.referenceDelegate),this.ai[e.toKey()]=s),s}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,i,s){ce("MemoryPersistence","Starting transaction:",e);const l=new uR(this.ui.next());return this.referenceDelegate.Ii(),s(l).next((u=>this.referenceDelegate.di(l).next((()=>u)))).toPromise().then((u=>(l.raiseOnCommittedEvent(),u)))}Ei(e,i){return ee.or(Object.values(this.ai).map((s=>()=>s.containsKey(e,i))))}}class uR extends Uw{constructor(e){super(),this.currentSequenceNumber=e}}class jm{constructor(e){this.persistence=e,this.Ai=new zm,this.Ri=null}static Vi(e){return new jm(e)}get mi(){if(this.Ri)return this.Ri;throw Ae(60996)}addReference(e,i,s){return this.Ai.addReference(s,i),this.mi.delete(s.toString()),ee.resolve()}removeReference(e,i,s){return this.Ai.removeReference(s,i),this.mi.add(s.toString()),ee.resolve()}markPotentiallyOrphaned(e,i){return this.mi.add(i.toString()),ee.resolve()}removeTarget(e,i){this.Ai.zr(i.targetId).forEach((l=>this.mi.add(l.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,i.targetId).next((l=>{l.forEach((u=>this.mi.add(u.toString())))})).next((()=>s.removeTargetData(e,i)))}Ii(){this.Ri=new Set}di(e){const i=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ee.forEach(this.mi,(s=>{const l=Ee.fromPath(s);return this.fi(e,l).next((u=>{u||i.removeEntry(l,Ce.min())}))})).next((()=>(this.Ri=null,i.apply(e))))}updateLimboDocument(e,i){return this.fi(e,i).next((s=>{s?this.mi.delete(i.toString()):this.mi.add(i.toString())}))}Pi(e){return 0}fi(e,i){return ee.or([()=>ee.resolve(this.Ai.containsKey(i)),()=>this.persistence.getTargetCache().containsKey(e,i),()=>this.persistence.Ei(e,i)])}}class nh{constructor(e,i){this.persistence=e,this.gi=new sa((s=>jw(s.path)),((s,l)=>s.isEqual(l))),this.garbageCollector=J4(this,i)}static Vi(e,i){return new nh(e,i)}Ii(){}di(e){return ee.resolve()}forEachTarget(e,i){return this.persistence.getTargetCache().forEachTarget(e,i)}mr(e){const i=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>i.next((l=>s+l))))}yr(e){let i=0;return this.gr(e,(s=>{i++})).next((()=>i))}gr(e,i){return ee.forEach(this.gi,((s,l)=>this.Sr(e,s,l).next((u=>u?ee.resolve():i(l)))))}removeTargets(e,i,s){return this.persistence.getTargetCache().removeTargets(e,i,s)}removeOrphanedDocuments(e,i){let s=0;const l=this.persistence.getRemoteDocumentCache(),u=l.newChangeBuffer();return l.ri(e,(d=>this.Sr(e,d,i).next((p=>{p||(s++,u.removeEntry(d,Ce.min()))})))).next((()=>u.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,i){return this.gi.set(i,e.currentSequenceNumber),ee.resolve()}removeTarget(e,i){const s=i.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,i,s){return this.gi.set(s,e.currentSequenceNumber),ee.resolve()}removeReference(e,i,s){return this.gi.set(s,e.currentSequenceNumber),ee.resolve()}updateLimboDocument(e,i){return this.gi.set(i,e.currentSequenceNumber),ee.resolve()}Pi(e){let i=e.key.toString().length;return e.isFoundDocument()&&(i+=Vc(e.data.value)),i}Sr(e,i,s){return ee.or([()=>this.persistence.Ei(e,i),()=>this.persistence.getTargetCache().containsKey(e,i),()=>{const l=this.gi.get(i);return ee.resolve(l!==void 0&&l>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm{constructor(e,i,s,l){this.targetId=e,this.fromCache=i,this.Is=s,this.ds=l}static Es(e,i){let s=qe(),l=qe();for(const u of i.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:l=l.add(u.doc.key)}return new Bm(e,i.fromCache,s,l)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hR{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return jb()?8:Pw(hn())>0?6:4})()}initialize(e,i){this.gs=e,this.indexManager=i,this.As=!0}getDocumentsMatchingQuery(e,i,s,l){const u={result:null};return this.ps(e,i).next((d=>{u.result=d})).next((()=>{if(!u.result)return this.ys(e,i,l,s).next((d=>{u.result=d}))})).next((()=>{if(u.result)return;const d=new cR;return this.ws(e,i,d).next((p=>{if(u.result=p,this.Rs)return this.Ss(e,i,d,p.size)}))})).next((()=>u.result))}Ss(e,i,s,l){return s.documentReadCount<this.Vs?(Xa()<=Be.DEBUG&&ce("QueryEngine","SDK will not create cache indexes for query:",Wa(i),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),ee.resolve()):(Xa()<=Be.DEBUG&&ce("QueryEngine","Query:",Wa(i),"scans",s.documentReadCount,"local documents and returns",l,"documents as results."),s.documentReadCount>this.fs*l?(Xa()<=Be.DEBUG&&ce("QueryEngine","The SDK decides to create cache indexes for query:",Wa(i),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ci(i))):ee.resolve())}ps(e,i){if(Nv(i))return ee.resolve(null);let s=Ci(i);return this.indexManager.getIndexType(e,s).next((l=>l===0?null:(i.limit!==null&&l===1&&(i=rm(i,null,"F"),s=Ci(i)),this.indexManager.getDocumentsMatchingTarget(e,s).next((u=>{const d=qe(...u);return this.gs.getDocuments(e,d).next((p=>this.indexManager.getMinOffset(e,s).next((g=>{const y=this.bs(i,p);return this.Ds(i,y,d,g.readTime)?this.ps(e,rm(i,null,"F")):this.vs(e,y,i,g)}))))})))))}ys(e,i,s,l){return Nv(i)||l.isEqual(Ce.min())?ee.resolve(null):this.gs.getDocuments(e,s).next((u=>{const d=this.bs(i,u);return this.Ds(i,d,s,l)?ee.resolve(null):(Xa()<=Be.DEBUG&&ce("QueryEngine","Re-using previous result from %s to execute query: %s",l.toString(),Wa(i)),this.vs(e,d,i,Mw(l,Ll)).next((p=>p)))}))}bs(e,i){let s=new zt(x0(e));return i.forEach(((l,u)=>{yh(e,u)&&(s=s.add(u))})),s}Ds(e,i,s,l){if(e.limit===null)return!1;if(s.size!==i.size)return!0;const u=e.limitType==="F"?i.last():i.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(l)>0)}ws(e,i,s){return Xa()<=Be.DEBUG&&ce("QueryEngine","Using full collection scan to execute query:",Wa(i)),this.gs.getDocumentsMatchingQuery(e,i,ys.min(),s)}vs(e,i,s,l){return this.gs.getDocumentsMatchingQuery(e,s,l).next((u=>(i.forEach((d=>{u=u.insert(d.key,d)})),u)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qm="LocalStore",fR=3e8;class dR{constructor(e,i,s,l){this.persistence=e,this.Cs=i,this.serializer=l,this.Fs=new gt(Ve),this.Ms=new sa((u=>xm(u)),Mm),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(s)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new tR(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(i=>e.collect(i,this.Fs)))}}function mR(r,e,i,s){return new dR(r,e,i,s)}async function nE(r,e){const i=De(r);return await i.persistence.runTransaction("Handle user change","readonly",(s=>{let l;return i.mutationQueue.getAllMutationBatches(s).next((u=>(l=u,i.Ns(e),i.mutationQueue.getAllMutationBatches(s)))).next((u=>{const d=[],p=[];let g=qe();for(const y of l){d.push(y.batchId);for(const E of y.mutations)g=g.add(E.key)}for(const y of u){p.push(y.batchId);for(const E of y.mutations)g=g.add(E.key)}return i.localDocuments.getDocuments(s,g).next((y=>({Bs:y,removedBatchIds:d,addedBatchIds:p})))}))}))}function pR(r,e){const i=De(r);return i.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const l=e.batch.keys(),u=i.Os.newChangeBuffer({trackRemovals:!0});return(function(p,g,y,E){const b=y.batch,A=b.keys();let k=ee.resolve();return A.forEach((Q=>{k=k.next((()=>E.getEntry(g,Q))).next((K=>{const U=y.docVersions.get(Q);tt(U!==null,48541),K.version.compareTo(U)<0&&(b.applyToRemoteDocument(K,y),K.isValidDocument()&&(K.setReadTime(y.commitVersion),E.addEntry(K)))}))})),k.next((()=>p.mutationQueue.removeMutationBatch(g,b)))})(i,s,e,u).next((()=>u.apply(s))).next((()=>i.mutationQueue.performConsistencyCheck(s))).next((()=>i.documentOverlayCache.removeOverlaysForBatchId(s,l,e.batch.batchId))).next((()=>i.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(p){let g=qe();for(let y=0;y<p.mutationResults.length;++y)p.mutationResults[y].transformResults.length>0&&(g=g.add(p.batch.mutations[y].key));return g})(e)))).next((()=>i.localDocuments.getDocuments(s,l)))}))}function iE(r){const e=De(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(i=>e.hi.getLastRemoteSnapshotVersion(i)))}function gR(r,e){const i=De(r),s=e.snapshotVersion;let l=i.Fs;return i.persistence.runTransaction("Apply remote event","readwrite-primary",(u=>{const d=i.Os.newChangeBuffer({trackRemovals:!0});l=i.Fs;const p=[];e.targetChanges.forEach(((E,b)=>{const A=l.get(b);if(!A)return;p.push(i.hi.removeMatchingKeys(u,E.removedDocuments,b).next((()=>i.hi.addMatchingKeys(u,E.addedDocuments,b))));let k=A.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(b)!==null?k=k.withResumeToken(rn.EMPTY_BYTE_STRING,Ce.min()).withLastLimboFreeSnapshotVersion(Ce.min()):E.resumeToken.approximateByteSize()>0&&(k=k.withResumeToken(E.resumeToken,s)),l=l.insert(b,k),(function(K,U,W){return K.resumeToken.approximateByteSize()===0||U.snapshotVersion.toMicroseconds()-K.snapshotVersion.toMicroseconds()>=fR?!0:W.addedDocuments.size+W.modifiedDocuments.size+W.removedDocuments.size>0})(A,k,E)&&p.push(i.hi.updateTargetData(u,k))}));let g=mr(),y=qe();if(e.documentUpdates.forEach((E=>{e.resolvedLimboDocuments.has(E)&&p.push(i.persistence.referenceDelegate.updateLimboDocument(u,E))})),p.push(yR(u,d,e.documentUpdates).next((E=>{g=E.Ls,y=E.ks}))),!s.isEqual(Ce.min())){const E=i.hi.getLastRemoteSnapshotVersion(u).next((b=>i.hi.setTargetsMetadata(u,u.currentSequenceNumber,s)));p.push(E)}return ee.waitFor(p).next((()=>d.apply(u))).next((()=>i.localDocuments.getLocalViewOfDocuments(u,g,y))).next((()=>g))})).then((u=>(i.Fs=l,u)))}function yR(r,e,i){let s=qe(),l=qe();return i.forEach((u=>s=s.add(u))),e.getEntries(r,s).next((u=>{let d=mr();return i.forEach(((p,g)=>{const y=u.get(p);g.isFoundDocument()!==y.isFoundDocument()&&(l=l.add(p)),g.isNoDocument()&&g.version.isEqual(Ce.min())?(e.removeEntry(p,g.readTime),d=d.insert(p,g)):!y.isValidDocument()||g.version.compareTo(y.version)>0||g.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(g),d=d.insert(p,g)):ce(qm,"Ignoring outdated watch update for ",p,". Current version:",y.version," Watch version:",g.version)})),{Ls:d,ks:l}}))}function vR(r,e){const i=De(r);return i.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=Dm),i.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function _R(r,e){const i=De(r);return i.persistence.runTransaction("Allocate target","readwrite",(s=>{let l;return i.hi.getTargetData(s,e).next((u=>u?(l=u,ee.resolve(l)):i.hi.allocateTargetId(s).next((d=>(l=new ls(e,d,"TargetPurposeListen",s.currentSequenceNumber),i.hi.addTargetData(s,l).next((()=>l)))))))})).then((s=>{const l=i.Fs.get(s.targetId);return(l===null||s.snapshotVersion.compareTo(l.snapshotVersion)>0)&&(i.Fs=i.Fs.insert(s.targetId,s),i.Ms.set(e,s.targetId)),s}))}async function um(r,e,i){const s=De(r),l=s.Fs.get(e),u=i?"readwrite":"readwrite-primary";try{i||await s.persistence.runTransaction("Release target",u,(d=>s.persistence.referenceDelegate.removeTarget(d,l)))}catch(d){if(!yo(d))throw d;ce(qm,`Failed to update sequence numbers for target ${e}: ${d}`)}s.Fs=s.Fs.remove(e),s.Ms.delete(l.target)}function Hv(r,e,i){const s=De(r);let l=Ce.min(),u=qe();return s.persistence.runTransaction("Execute query","readwrite",(d=>(function(g,y,E){const b=De(g),A=b.Ms.get(E);return A!==void 0?ee.resolve(b.Fs.get(A)):b.hi.getTargetData(y,E)})(s,d,Ci(e)).next((p=>{if(p)return l=p.lastLimboFreeSnapshotVersion,s.hi.getMatchingKeysForTargetId(d,p.targetId).next((g=>{u=g}))})).next((()=>s.Cs.getDocumentsMatchingQuery(d,e,i?l:Ce.min(),i?u:qe()))).next((p=>(ER(s,a4(e),p),{documents:p,qs:u})))))}function ER(r,e,i){let s=r.xs.get(e)||Ce.min();i.forEach(((l,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)})),r.xs.set(e,s)}class Fv{constructor(){this.activeTargetIds=f4()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class TR{constructor(){this.Fo=new Fv,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,i,s){}addLocalQueryTarget(e,i=!0){return i&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,i,s){this.Mo[e]=i}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Fv,Promise.resolve()}handleUserChange(e,i,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bR{xo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gv="ConnectivityMonitor";class Qv{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){ce(Gv,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){ce(Gv,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dc=null;function cm(){return Dc===null?Dc=(function(){return 268435456+Math.round(2147483648*Math.random())})():Dc++,"0x"+Dc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zd="RestConnection",SR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class AR{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const i=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),l=encodeURIComponent(this.databaseId.database);this.$o=i+"://"+e.host,this.Uo=`projects/${s}/databases/${l}`,this.Ko=this.databaseId.database===Xc?`project_id=${s}`:`project_id=${s}&database_id=${l}`}Wo(e,i,s,l,u){const d=cm(),p=this.Go(e,i.toUriEncodedString());ce(zd,`Sending RPC '${e}' ${d}:`,p,s);const g={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(g,l,u);const{host:y}=new URL(p),E=ho(y);return this.jo(e,p,g,s,E).then((b=>(ce(zd,`Received RPC '${e}' ${d}: `,b),b)),(b=>{throw gs(zd,`RPC '${e}' ${d} failed with error: `,b,"url: ",p,"request:",s),b}))}Jo(e,i,s,l,u,d){return this.Wo(e,i,s,l,u)}zo(e,i,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+po})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach(((l,u)=>e[u]=l)),s&&s.headers.forEach(((l,u)=>e[u]=l))}Go(e,i){const s=SR[e];return`${this.$o}/v1/${i}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wR{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ln="WebChannelConnection";class RR extends AR{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,i,s,l,u){const d=cm();return new Promise(((p,g)=>{const y=new a0;y.setWithCredentials(!0),y.listenOnce(o0.COMPLETE,(()=>{try{switch(y.getLastErrorCode()){case kc.NO_ERROR:const b=y.getResponseJson();ce(ln,`XHR for RPC '${e}' ${d} received:`,JSON.stringify(b)),p(b);break;case kc.TIMEOUT:ce(ln,`RPC '${e}' ${d} timed out`),g(new ge(ne.DEADLINE_EXCEEDED,"Request time out"));break;case kc.HTTP_ERROR:const A=y.getStatus();if(ce(ln,`RPC '${e}' ${d} failed with status:`,A,"response text:",y.getResponseText()),A>0){let k=y.getResponseJson();Array.isArray(k)&&(k=k[0]);const Q=k==null?void 0:k.error;if(Q&&Q.status&&Q.message){const K=(function(W){const J=W.toLowerCase().replace(/_/g,"-");return Object.values(ne).indexOf(J)>=0?J:ne.UNKNOWN})(Q.status);g(new ge(K,Q.message))}else g(new ge(ne.UNKNOWN,"Server responded with status "+y.getStatus()))}else g(new ge(ne.UNAVAILABLE,"Connection failed."));break;default:Ae(9055,{c_:e,streamId:d,l_:y.getLastErrorCode(),h_:y.getLastError()})}}finally{ce(ln,`RPC '${e}' ${d} completed.`)}}));const E=JSON.stringify(l);ce(ln,`RPC '${e}' ${d} sending request:`,l),y.send(i,"POST",E,s,15)}))}P_(e,i,s){const l=cm(),u=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],d=c0(),p=u0(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(g.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(g.useFetchStreams=!0),this.zo(g.initMessageHeaders,i,s),g.encodeInitMessageHeaders=!0;const E=u.join("");ce(ln,`Creating RPC '${e}' stream ${l}: ${E}`,g);const b=d.createWebChannel(E,g);this.T_(b);let A=!1,k=!1;const Q=new wR({Ho:U=>{k?ce(ln,`Not sending because RPC '${e}' stream ${l} is closed:`,U):(A||(ce(ln,`Opening RPC '${e}' stream ${l} transport.`),b.open(),A=!0),ce(ln,`RPC '${e}' stream ${l} sending:`,U),b.send(U))},Yo:()=>b.close()}),K=(U,W,J)=>{U.listen(W,(te=>{try{J(te)}catch(fe){setTimeout((()=>{throw fe}),0)}}))};return K(b,Tl.EventType.OPEN,(()=>{k||(ce(ln,`RPC '${e}' stream ${l} transport opened.`),Q.s_())})),K(b,Tl.EventType.CLOSE,(()=>{k||(k=!0,ce(ln,`RPC '${e}' stream ${l} transport closed`),Q.__(),this.I_(b))})),K(b,Tl.EventType.ERROR,(U=>{k||(k=!0,gs(ln,`RPC '${e}' stream ${l} transport errored. Name:`,U.name,"Message:",U.message),Q.__(new ge(ne.UNAVAILABLE,"The operation could not be completed")))})),K(b,Tl.EventType.MESSAGE,(U=>{var W;if(!k){const J=U.data[0];tt(!!J,16349);const te=J,fe=(te==null?void 0:te.error)||((W=te[0])===null||W===void 0?void 0:W.error);if(fe){ce(ln,`RPC '${e}' stream ${l} received error:`,fe);const _e=fe.status;let Te=(function(C){const O=Mt[C];if(O!==void 0)return F0(O)})(_e),R=fe.message;Te===void 0&&(Te=ne.INTERNAL,R="Unknown error status: "+_e+" with message "+fe.message),k=!0,Q.__(new ge(Te,R)),b.close()}else ce(ln,`RPC '${e}' stream ${l} received:`,J),Q.a_(J)}})),K(p,l0.STAT_EVENT,(U=>{U.stat===Jd.PROXY?ce(ln,`RPC '${e}' stream ${l} detected buffering proxy`):U.stat===Jd.NOPROXY&&ce(ln,`RPC '${e}' stream ${l} detected no buffering proxy`)})),setTimeout((()=>{Q.o_()}),0),Q}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((i=>i===e))}}function jd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Th(r){return new N4(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{constructor(e,i,s=1e3,l=1.5,u=6e4){this.Fi=e,this.timerId=i,this.d_=s,this.E_=l,this.A_=u,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const i=Math.floor(this.R_+this.p_()),s=Math.max(0,Date.now()-this.m_),l=Math.max(0,i-s);l>0&&ce("ExponentialBackoff",`Backing off for ${l} ms (base delay: ${this.R_} ms, delay with jitter: ${i} ms, last attempt: ${s} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,l,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kv="PersistentStream";class sE{constructor(e,i,s,l,u,d,p,g){this.Fi=e,this.w_=s,this.S_=l,this.connection=u,this.authCredentialsProvider=d,this.appCheckCredentialsProvider=p,this.listener=g,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new rE(e,i)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,i){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():i&&i.code===ne.RESOURCE_EXHAUSTED?(dr(i.toString()),dr("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):i&&i.code===ne.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(i)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),i=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,l])=>{this.b_===i&&this.W_(s,l)}),(s=>{e((()=>{const l=new ge(ne.UNKNOWN,"Fetching auth token failed: "+s.message);return this.G_(l)}))}))}W_(e,i){const s=this.K_(this.b_);this.stream=this.z_(e,i),this.stream.Zo((()=>{s((()=>this.listener.Zo()))})),this.stream.e_((()=>{s((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((l=>{s((()=>this.G_(l)))})),this.stream.onMessage((l=>{s((()=>++this.C_==1?this.j_(l):this.onNext(l)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return ce(Kv,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return i=>{this.Fi.enqueueAndForget((()=>this.b_===e?i():(ce(Kv,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class CR extends sE{constructor(e,i,s,l,u,d){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",i,s,l,d),this.serializer=u}z_(e,i){return this.connection.P_("Listen",e,i)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const i=M4(this.serializer,e),s=(function(u){if(!("targetChange"in u))return Ce.min();const d=u.targetChange;return d.targetIds&&d.targetIds.length?Ce.min():d.readTime?Ii(d.readTime):Ce.min()})(e);return this.listener.J_(i,s)}H_(e){const i={};i.database=lm(this.serializer),i.addTarget=(function(u,d){let p;const g=d.target;if(p=im(g)?{documents:L4(u,g)}:{query:U4(u,g).Vt},p.targetId=d.targetId,d.resumeToken.approximateByteSize()>0){p.resumeToken=K0(u,d.resumeToken);const y=sm(u,d.expectedCount);y!==null&&(p.expectedCount=y)}else if(d.snapshotVersion.compareTo(Ce.min())>0){p.readTime=th(u,d.snapshotVersion.toTimestamp());const y=sm(u,d.expectedCount);y!==null&&(p.expectedCount=y)}return p})(this.serializer,e);const s=z4(this.serializer,e);s&&(i.labels=s),this.k_(i)}Y_(e){const i={};i.database=lm(this.serializer),i.removeTarget=e,this.k_(i)}}class IR extends sE{constructor(e,i,s,l,u,d){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",i,s,l,d),this.serializer=u}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,i){return this.connection.P_("Write",e,i)}j_(e){return tt(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,tt(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){tt(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const i=V4(e.writeResults,e.commitTime),s=Ii(e.commitTime);return this.listener.ta(s,i)}na(){const e={};e.database=lm(this.serializer),this.k_(e)}X_(e){const i={streamToken:this.lastStreamToken,writes:e.map((s=>k4(this.serializer,s)))};this.k_(i)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DR{}class NR extends DR{constructor(e,i,s,l){super(),this.authCredentials=e,this.appCheckCredentials=i,this.connection=s,this.serializer=l,this.ra=!1}ia(){if(this.ra)throw new ge(ne.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,i,s,l){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,d])=>this.connection.Wo(e,am(i,s),l,u,d))).catch((u=>{throw u.name==="FirebaseError"?(u.code===ne.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new ge(ne.UNKNOWN,u.toString())}))}Jo(e,i,s,l,u){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([d,p])=>this.connection.Jo(e,am(i,s),l,d,p,u))).catch((d=>{throw d.name==="FirebaseError"?(d.code===ne.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),d):new ge(ne.UNKNOWN,d.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class OR{constructor(e,i){this.asyncQueue=e,this.onlineStateHandler=i,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const i=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(dr(i),this._a=!1):ce("OnlineStateTracker",i)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ia="RemoteStore";class xR{constructor(e,i,s,l,u){this.localStore=e,this.datastore=i,this.asyncQueue=s,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=u,this.Ea.xo((d=>{s.enqueueAndForget((async()=>{oa(this)&&(ce(ia,"Restarting streams for network reachability change."),await(async function(g){const y=De(g);y.Ia.add(4),await Zl(y),y.Aa.set("Unknown"),y.Ia.delete(4),await bh(y)})(this))}))})),this.Aa=new OR(s,l)}}async function bh(r){if(oa(r))for(const e of r.da)await e(!0)}async function Zl(r){for(const e of r.da)await e(!1)}function aE(r,e){const i=De(r);i.Ta.has(e.targetId)||(i.Ta.set(e.targetId,e),Qm(i)?Gm(i):vo(i).x_()&&Fm(i,e))}function Hm(r,e){const i=De(r),s=vo(i);i.Ta.delete(e),s.x_()&&oE(i,e),i.Ta.size===0&&(s.x_()?s.B_():oa(i)&&i.Aa.set("Unknown"))}function Fm(r,e){if(r.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ce.min())>0){const i=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(i)}vo(r).H_(e)}function oE(r,e){r.Ra.$e(e),vo(r).Y_(e)}function Gm(r){r.Ra=new R4({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>r.Ta.get(e)||null,lt:()=>r.datastore.serializer.databaseId}),vo(r).start(),r.Aa.aa()}function Qm(r){return oa(r)&&!vo(r).M_()&&r.Ta.size>0}function oa(r){return De(r).Ia.size===0}function lE(r){r.Ra=void 0}async function MR(r){r.Aa.set("Online")}async function kR(r){r.Ta.forEach(((e,i)=>{Fm(r,e)}))}async function VR(r,e){lE(r),Qm(r)?(r.Aa.la(e),Gm(r)):r.Aa.set("Unknown")}async function LR(r,e,i){if(r.Aa.set("Online"),e instanceof Q0&&e.state===2&&e.cause)try{await(async function(l,u){const d=u.cause;for(const p of u.targetIds)l.Ta.has(p)&&(await l.remoteSyncer.rejectListen(p,d),l.Ta.delete(p),l.Ra.removeTarget(p))})(r,e)}catch(s){ce(ia,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await ih(r,s)}else if(e instanceof Pc?r.Ra.Ye(e):e instanceof G0?r.Ra.it(e):r.Ra.et(e),!i.isEqual(Ce.min()))try{const s=await iE(r.localStore);i.compareTo(s)>=0&&await(function(u,d){const p=u.Ra.Pt(d);return p.targetChanges.forEach(((g,y)=>{if(g.resumeToken.approximateByteSize()>0){const E=u.Ta.get(y);E&&u.Ta.set(y,E.withResumeToken(g.resumeToken,d))}})),p.targetMismatches.forEach(((g,y)=>{const E=u.Ta.get(g);if(!E)return;u.Ta.set(g,E.withResumeToken(rn.EMPTY_BYTE_STRING,E.snapshotVersion)),oE(u,g);const b=new ls(E.target,g,y,E.sequenceNumber);Fm(u,b)})),u.remoteSyncer.applyRemoteEvent(p)})(r,i)}catch(s){ce(ia,"Failed to raise snapshot:",s),await ih(r,s)}}async function ih(r,e,i){if(!yo(e))throw e;r.Ia.add(1),await Zl(r),r.Aa.set("Offline"),i||(i=()=>iE(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{ce(ia,"Retrying IndexedDB access"),await i(),r.Ia.delete(1),await bh(r)}))}function uE(r,e){return e().catch((i=>ih(r,i,e)))}async function Sh(r){const e=De(r),i=Ts(e);let s=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Dm;for(;UR(e);)try{const l=await vR(e.localStore,s);if(l===null){e.Pa.length===0&&i.B_();break}s=l.batchId,PR(e,l)}catch(l){await ih(e,l)}cE(e)&&hE(e)}function UR(r){return oa(r)&&r.Pa.length<10}function PR(r,e){r.Pa.push(e);const i=Ts(r);i.x_()&&i.Z_&&i.X_(e.mutations)}function cE(r){return oa(r)&&!Ts(r).M_()&&r.Pa.length>0}function hE(r){Ts(r).start()}async function zR(r){Ts(r).na()}async function jR(r){const e=Ts(r);for(const i of r.Pa)e.X_(i.mutations)}async function BR(r,e,i){const s=r.Pa.shift(),l=Lm.from(s,e,i);await uE(r,(()=>r.remoteSyncer.applySuccessfulWrite(l))),await Sh(r)}async function qR(r,e){e&&Ts(r).Z_&&await(async function(s,l){if((function(d){return A4(d)&&d!==ne.ABORTED})(l.code)){const u=s.Pa.shift();Ts(s).N_(),await uE(s,(()=>s.remoteSyncer.rejectFailedWrite(u.batchId,l))),await Sh(s)}})(r,e),cE(r)&&hE(r)}async function Yv(r,e){const i=De(r);i.asyncQueue.verifyOperationInProgress(),ce(ia,"RemoteStore received new credentials");const s=oa(i);i.Ia.add(3),await Zl(i),s&&i.Aa.set("Unknown"),await i.remoteSyncer.handleCredentialChange(e),i.Ia.delete(3),await bh(i)}async function HR(r,e){const i=De(r);e?(i.Ia.delete(2),await bh(i)):e||(i.Ia.add(2),await Zl(i),i.Aa.set("Unknown"))}function vo(r){return r.Va||(r.Va=(function(i,s,l){const u=De(i);return u.ia(),new CR(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,l)})(r.datastore,r.asyncQueue,{Zo:MR.bind(null,r),e_:kR.bind(null,r),n_:VR.bind(null,r),J_:LR.bind(null,r)}),r.da.push((async e=>{e?(r.Va.N_(),Qm(r)?Gm(r):r.Aa.set("Unknown")):(await r.Va.stop(),lE(r))}))),r.Va}function Ts(r){return r.ma||(r.ma=(function(i,s,l){const u=De(i);return u.ia(),new IR(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,l)})(r.datastore,r.asyncQueue,{Zo:()=>Promise.resolve(),e_:zR.bind(null,r),n_:qR.bind(null,r),ea:jR.bind(null,r),ta:BR.bind(null,r)}),r.da.push((async e=>{e?(r.ma.N_(),await Sh(r)):(await r.ma.stop(),r.Pa.length>0&&(ce(ia,`Stopping write stream with ${r.Pa.length} pending writes`),r.Pa=[]))}))),r.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km{constructor(e,i,s,l,u){this.asyncQueue=e,this.timerId=i,this.targetTimeMs=s,this.op=l,this.removalCallback=u,this.deferred=new ms,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((d=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,i,s,l,u){const d=Date.now()+s,p=new Km(e,i,d,l,u);return p.start(s),p}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ge(ne.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ym(r,e){if(dr("AsyncQueue",`${e}: ${r}`),yo(r))return new ge(ne.UNAVAILABLE,`${e}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{static emptySet(e){return new io(e.comparator)}constructor(e){this.comparator=e?(i,s)=>e(i,s)||Ee.comparator(i.key,s.key):(i,s)=>Ee.comparator(i.key,s.key),this.keyedMap=bl(),this.sortedSet=new gt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const i=this.keyedMap.get(e);return i?this.sortedSet.indexOf(i):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((i,s)=>(e(i),!1)))}add(e){const i=this.delete(e.key);return i.copy(i.keyedMap.insert(e.key,e),i.sortedSet.insert(e,null))}delete(e){const i=this.get(e);return i?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(i)):this}isEqual(e){if(!(e instanceof io)||this.size!==e.size)return!1;const i=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;i.hasNext();){const l=i.getNext().key,u=s.getNext().key;if(!l.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach((i=>{e.push(i.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,i){const s=new io;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=i,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xv{constructor(){this.fa=new gt(Ee.comparator)}track(e){const i=e.doc.key,s=this.fa.get(i);s?e.type!==0&&s.type===3?this.fa=this.fa.insert(i,e):e.type===3&&s.type!==1?this.fa=this.fa.insert(i,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.fa=this.fa.insert(i,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.fa=this.fa.insert(i,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.fa=this.fa.remove(i):e.type===1&&s.type===2?this.fa=this.fa.insert(i,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.fa=this.fa.insert(i,{type:2,doc:e.doc}):Ae(63341,{At:e,ga:s}):this.fa=this.fa.insert(i,e)}pa(){const e=[];return this.fa.inorderTraversal(((i,s)=>{e.push(s)})),e}}class co{constructor(e,i,s,l,u,d,p,g,y){this.query=e,this.docs=i,this.oldDocs=s,this.docChanges=l,this.mutatedKeys=u,this.fromCache=d,this.syncStateChanged=p,this.excludesMetadataChanges=g,this.hasCachedResults=y}static fromInitialDocuments(e,i,s,l,u){const d=[];return i.forEach((p=>{d.push({type:0,doc:p})})),new co(e,i,io.emptySet(i),d,s,l,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&gh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const i=this.docChanges,s=e.docChanges;if(i.length!==s.length)return!1;for(let l=0;l<i.length;l++)if(i[l].type!==s[l].type||!i[l].doc.isEqual(s[l].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FR{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class GR{constructor(){this.queries=Wv(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(i,s){const l=De(i),u=l.queries;l.queries=Wv(),u.forEach(((d,p)=>{for(const g of p.wa)g.onError(s)}))})(this,new ge(ne.ABORTED,"Firestore shutting down"))}}function Wv(){return new sa((r=>O0(r)),gh)}async function QR(r,e){const i=De(r);let s=3;const l=e.query;let u=i.queries.get(l);u?!u.Sa()&&e.ba()&&(s=2):(u=new FR,s=e.ba()?0:1);try{switch(s){case 0:u.ya=await i.onListen(l,!0);break;case 1:u.ya=await i.onListen(l,!1);break;case 2:await i.onFirstRemoteStoreListen(l)}}catch(d){const p=Ym(d,`Initialization of query '${Wa(e.query)}' failed`);return void e.onError(p)}i.queries.set(l,u),u.wa.push(e),e.va(i.onlineState),u.ya&&e.Ca(u.ya)&&Xm(i)}async function KR(r,e){const i=De(r),s=e.query;let l=3;const u=i.queries.get(s);if(u){const d=u.wa.indexOf(e);d>=0&&(u.wa.splice(d,1),u.wa.length===0?l=e.ba()?0:1:!u.Sa()&&e.ba()&&(l=2))}switch(l){case 0:return i.queries.delete(s),i.onUnlisten(s,!0);case 1:return i.queries.delete(s),i.onUnlisten(s,!1);case 2:return i.onLastRemoteStoreUnlisten(s);default:return}}function YR(r,e){const i=De(r);let s=!1;for(const l of e){const u=l.query,d=i.queries.get(u);if(d){for(const p of d.wa)p.Ca(l)&&(s=!0);d.ya=l}}s&&Xm(i)}function XR(r,e,i){const s=De(r),l=s.queries.get(e);if(l)for(const u of l.wa)u.onError(i);s.queries.delete(e)}function Xm(r){r.Da.forEach((e=>{e.next()}))}var hm,Zv;(Zv=hm||(hm={})).Fa="default",Zv.Cache="cache";class WR{constructor(e,i,s){this.query=e,this.Ma=i,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=s||{}}Ca(e){if(!this.options.includeMetadataChanges){const s=[];for(const l of e.docChanges)l.type!==3&&s.push(l);e=new co(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let i=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),i=!0):this.Ba(e,this.onlineState)&&(this.La(e),i=!0),this.Oa=e,i}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let i=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),i=!0),i}Ba(e,i){if(!e.fromCache||!this.ba())return!0;const s=i!=="Offline";return(!this.options.ka||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||i==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const i=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!i)&&this.options.includeMetadataChanges===!0}La(e){e=co.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==hm.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fE{constructor(e){this.key=e}}class dE{constructor(e){this.key=e}}class ZR{constructor(e,i){this.query=e,this.Ha=i,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=qe(),this.mutatedKeys=qe(),this.Xa=x0(e),this.eu=new io(this.Xa)}get tu(){return this.Ha}nu(e,i){const s=i?i.ru:new Xv,l=i?i.eu:this.eu;let u=i?i.mutatedKeys:this.mutatedKeys,d=l,p=!1;const g=this.query.limitType==="F"&&l.size===this.query.limit?l.last():null,y=this.query.limitType==="L"&&l.size===this.query.limit?l.first():null;if(e.inorderTraversal(((E,b)=>{const A=l.get(E),k=yh(this.query,b)?b:null,Q=!!A&&this.mutatedKeys.has(A.key),K=!!k&&(k.hasLocalMutations||this.mutatedKeys.has(k.key)&&k.hasCommittedMutations);let U=!1;A&&k?A.data.isEqual(k.data)?Q!==K&&(s.track({type:3,doc:k}),U=!0):this.iu(A,k)||(s.track({type:2,doc:k}),U=!0,(g&&this.Xa(k,g)>0||y&&this.Xa(k,y)<0)&&(p=!0)):!A&&k?(s.track({type:0,doc:k}),U=!0):A&&!k&&(s.track({type:1,doc:A}),U=!0,(g||y)&&(p=!0)),U&&(k?(d=d.add(k),u=K?u.add(E):u.delete(E)):(d=d.delete(E),u=u.delete(E)))})),this.query.limit!==null)for(;d.size>this.query.limit;){const E=this.query.limitType==="F"?d.last():d.first();d=d.delete(E.key),u=u.delete(E.key),s.track({type:1,doc:E})}return{eu:d,ru:s,Ds:p,mutatedKeys:u}}iu(e,i){return e.hasLocalMutations&&i.hasCommittedMutations&&!i.hasLocalMutations}applyChanges(e,i,s,l){const u=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const d=e.ru.pa();d.sort(((E,b)=>(function(k,Q){const K=U=>{switch(U){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ae(20277,{At:U})}};return K(k)-K(Q)})(E.type,b.type)||this.Xa(E.doc,b.doc))),this.su(s),l=l!=null&&l;const p=i&&!l?this.ou():[],g=this.Za.size===0&&this.current&&!l?1:0,y=g!==this.Ya;return this.Ya=g,d.length!==0||y?{snapshot:new co(this.query,e.eu,u,d,e.mutatedKeys,g===0,y,!1,!!s&&s.resumeToken.approximateByteSize()>0),_u:p}:{_u:p}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Xv,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((i=>this.Ha=this.Ha.add(i))),e.modifiedDocuments.forEach((i=>{})),e.removedDocuments.forEach((i=>this.Ha=this.Ha.delete(i))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=qe(),this.eu.forEach((s=>{this.au(s.key)&&(this.Za=this.Za.add(s.key))}));const i=[];return e.forEach((s=>{this.Za.has(s)||i.push(new dE(s))})),this.Za.forEach((s=>{e.has(s)||i.push(new fE(s))})),i}uu(e){this.Ha=e.qs,this.Za=qe();const i=this.nu(e.documents);return this.applyChanges(i,!0)}cu(){return co.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Wm="SyncEngine";class JR{constructor(e,i,s){this.query=e,this.targetId=i,this.view=s}}class $R{constructor(e){this.key=e,this.lu=!1}}class e3{constructor(e,i,s,l,u,d){this.localStore=e,this.remoteStore=i,this.eventManager=s,this.sharedClientState=l,this.currentUser=u,this.maxConcurrentLimboResolutions=d,this.hu={},this.Pu=new sa((p=>O0(p)),gh),this.Tu=new Map,this.Iu=new Set,this.du=new gt(Ee.comparator),this.Eu=new Map,this.Au=new zm,this.Ru={},this.Vu=new Map,this.mu=uo.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function t3(r,e,i=!0){const s=_E(r);let l;const u=s.Pu.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),l=u.view.cu()):l=await mE(s,e,i,!0),l}async function n3(r,e){const i=_E(r);await mE(i,e,!0,!1)}async function mE(r,e,i,s){const l=await _R(r.localStore,Ci(e)),u=l.targetId,d=r.sharedClientState.addLocalQueryTarget(u,i);let p;return s&&(p=await i3(r,e,u,d==="current",l.resumeToken)),r.isPrimaryClient&&i&&aE(r.remoteStore,l),p}async function i3(r,e,i,s,l){r.gu=(b,A,k)=>(async function(K,U,W,J){let te=U.view.nu(W);te.Ds&&(te=await Hv(K.localStore,U.query,!1).then((({documents:R})=>U.view.nu(R,te))));const fe=J&&J.targetChanges.get(U.targetId),_e=J&&J.targetMismatches.get(U.targetId)!=null,Te=U.view.applyChanges(te,K.isPrimaryClient,fe,_e);return $v(K,U.targetId,Te._u),Te.snapshot})(r,b,A,k);const u=await Hv(r.localStore,e,!0),d=new ZR(e,u.qs),p=d.nu(u.documents),g=Wl.createSynthesizedTargetChangeForCurrentChange(i,s&&r.onlineState!=="Offline",l),y=d.applyChanges(p,r.isPrimaryClient,g);$v(r,i,y._u);const E=new JR(e,i,d);return r.Pu.set(e,E),r.Tu.has(i)?r.Tu.get(i).push(e):r.Tu.set(i,[e]),y.snapshot}async function r3(r,e,i){const s=De(r),l=s.Pu.get(e),u=s.Tu.get(l.targetId);if(u.length>1)return s.Tu.set(l.targetId,u.filter((d=>!gh(d,e)))),void s.Pu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(l.targetId),s.sharedClientState.isActiveQueryTarget(l.targetId)||await um(s.localStore,l.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(l.targetId),i&&Hm(s.remoteStore,l.targetId),fm(s,l.targetId)})).catch(go)):(fm(s,l.targetId),await um(s.localStore,l.targetId,!0))}async function s3(r,e){const i=De(r),s=i.Pu.get(e),l=i.Tu.get(s.targetId);i.isPrimaryClient&&l.length===1&&(i.sharedClientState.removeLocalQueryTarget(s.targetId),Hm(i.remoteStore,s.targetId))}async function a3(r,e,i){const s=d3(r);try{const l=await(function(d,p){const g=De(d),y=ft.now(),E=p.reduce(((k,Q)=>k.add(Q.key)),qe());let b,A;return g.persistence.runTransaction("Locally write mutations","readwrite",(k=>{let Q=mr(),K=qe();return g.Os.getEntries(k,E).next((U=>{Q=U,Q.forEach(((W,J)=>{J.isValidDocument()||(K=K.add(W))}))})).next((()=>g.localDocuments.getOverlayedDocuments(k,Q))).next((U=>{b=U;const W=[];for(const J of p){const te=_4(J,b.get(J.key).overlayedDocument);te!=null&&W.push(new aa(J.key,te,A0(te.value.mapValue),ur.exists(!0)))}return g.mutationQueue.addMutationBatch(k,y,W,p)})).next((U=>{A=U;const W=U.applyToLocalDocumentSet(b,K);return g.documentOverlayCache.saveOverlays(k,U.batchId,W)}))})).then((()=>({batchId:A.batchId,changes:k0(b)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(l.batchId),(function(d,p,g){let y=d.Ru[d.currentUser.toKey()];y||(y=new gt(Ve)),y=y.insert(p,g),d.Ru[d.currentUser.toKey()]=y})(s,l.batchId,i),await Jl(s,l.changes),await Sh(s.remoteStore)}catch(l){const u=Ym(l,"Failed to persist write");i.reject(u)}}async function pE(r,e){const i=De(r);try{const s=await gR(i.localStore,e);e.targetChanges.forEach(((l,u)=>{const d=i.Eu.get(u);d&&(tt(l.addedDocuments.size+l.modifiedDocuments.size+l.removedDocuments.size<=1,22616),l.addedDocuments.size>0?d.lu=!0:l.modifiedDocuments.size>0?tt(d.lu,14607):l.removedDocuments.size>0&&(tt(d.lu,42227),d.lu=!1))})),await Jl(i,s,e)}catch(s){await go(s)}}function Jv(r,e,i){const s=De(r);if(s.isPrimaryClient&&i===0||!s.isPrimaryClient&&i===1){const l=[];s.Pu.forEach(((u,d)=>{const p=d.view.va(e);p.snapshot&&l.push(p.snapshot)})),(function(d,p){const g=De(d);g.onlineState=p;let y=!1;g.queries.forEach(((E,b)=>{for(const A of b.wa)A.va(p)&&(y=!0)})),y&&Xm(g)})(s.eventManager,e),l.length&&s.hu.J_(l),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function o3(r,e,i){const s=De(r);s.sharedClientState.updateQueryState(e,"rejected",i);const l=s.Eu.get(e),u=l&&l.key;if(u){let d=new gt(Ee.comparator);d=d.insert(u,cn.newNoDocument(u,Ce.min()));const p=qe().add(u),g=new Eh(Ce.min(),new Map,new gt(Ve),d,p);await pE(s,g),s.du=s.du.remove(u),s.Eu.delete(e),Zm(s)}else await um(s.localStore,e,!1).then((()=>fm(s,e,i))).catch(go)}async function l3(r,e){const i=De(r),s=e.batch.batchId;try{const l=await pR(i.localStore,e);yE(i,s,null),gE(i,s),i.sharedClientState.updateMutationState(s,"acknowledged"),await Jl(i,l)}catch(l){await go(l)}}async function u3(r,e,i){const s=De(r);try{const l=await(function(d,p){const g=De(d);return g.persistence.runTransaction("Reject batch","readwrite-primary",(y=>{let E;return g.mutationQueue.lookupMutationBatch(y,p).next((b=>(tt(b!==null,37113),E=b.keys(),g.mutationQueue.removeMutationBatch(y,b)))).next((()=>g.mutationQueue.performConsistencyCheck(y))).next((()=>g.documentOverlayCache.removeOverlaysForBatchId(y,E,p))).next((()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,E))).next((()=>g.localDocuments.getDocuments(y,E)))}))})(s.localStore,e);yE(s,e,i),gE(s,e),s.sharedClientState.updateMutationState(e,"rejected",i),await Jl(s,l)}catch(l){await go(l)}}function gE(r,e){(r.Vu.get(e)||[]).forEach((i=>{i.resolve()})),r.Vu.delete(e)}function yE(r,e,i){const s=De(r);let l=s.Ru[s.currentUser.toKey()];if(l){const u=l.get(e);u&&(i?u.reject(i):u.resolve(),l=l.remove(e)),s.Ru[s.currentUser.toKey()]=l}}function fm(r,e,i=null){r.sharedClientState.removeLocalQueryTarget(e);for(const s of r.Tu.get(e))r.Pu.delete(s),i&&r.hu.pu(s,i);r.Tu.delete(e),r.isPrimaryClient&&r.Au.zr(e).forEach((s=>{r.Au.containsKey(s)||vE(r,s)}))}function vE(r,e){r.Iu.delete(e.path.canonicalString());const i=r.du.get(e);i!==null&&(Hm(r.remoteStore,i),r.du=r.du.remove(e),r.Eu.delete(i),Zm(r))}function $v(r,e,i){for(const s of i)s instanceof fE?(r.Au.addReference(s.key,e),c3(r,s)):s instanceof dE?(ce(Wm,"Document no longer in limbo: "+s.key),r.Au.removeReference(s.key,e),r.Au.containsKey(s.key)||vE(r,s.key)):Ae(19791,{yu:s})}function c3(r,e){const i=e.key,s=i.path.canonicalString();r.du.get(i)||r.Iu.has(s)||(ce(Wm,"New document in limbo: "+i),r.Iu.add(s),Zm(r))}function Zm(r){for(;r.Iu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const e=r.Iu.values().next().value;r.Iu.delete(e);const i=new Ee(pt.fromString(e)),s=r.mu.next();r.Eu.set(s,new $R(i)),r.du=r.du.insert(i,s),aE(r.remoteStore,new ls(Ci(km(i.path)),s,"TargetPurposeLimboResolution",fh.ue))}}async function Jl(r,e,i){const s=De(r),l=[],u=[],d=[];s.Pu.isEmpty()||(s.Pu.forEach(((p,g)=>{d.push(s.gu(g,e,i).then((y=>{var E;if((y||i)&&s.isPrimaryClient){const b=y?!y.fromCache:(E=i==null?void 0:i.targetChanges.get(g.targetId))===null||E===void 0?void 0:E.current;s.sharedClientState.updateQueryState(g.targetId,b?"current":"not-current")}if(y){l.push(y);const b=Bm.Es(g.targetId,y);u.push(b)}})))})),await Promise.all(d),s.hu.J_(l),await(async function(g,y){const E=De(g);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",(b=>ee.forEach(y,(A=>ee.forEach(A.Is,(k=>E.persistence.referenceDelegate.addReference(b,A.targetId,k))).next((()=>ee.forEach(A.ds,(k=>E.persistence.referenceDelegate.removeReference(b,A.targetId,k)))))))))}catch(b){if(!yo(b))throw b;ce(qm,"Failed to update sequence numbers: "+b)}for(const b of y){const A=b.targetId;if(!b.fromCache){const k=E.Fs.get(A),Q=k.snapshotVersion,K=k.withLastLimboFreeSnapshotVersion(Q);E.Fs=E.Fs.insert(A,K)}}})(s.localStore,u))}async function h3(r,e){const i=De(r);if(!i.currentUser.isEqual(e)){ce(Wm,"User change. New user:",e.toKey());const s=await nE(i.localStore,e);i.currentUser=e,(function(u,d){u.Vu.forEach((p=>{p.forEach((g=>{g.reject(new ge(ne.CANCELLED,d))}))})),u.Vu.clear()})(i,"'waitForPendingWrites' promise is rejected due to a user change."),i.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Jl(i,s.Bs)}}function f3(r,e){const i=De(r),s=i.Eu.get(e);if(s&&s.lu)return qe().add(s.key);{let l=qe();const u=i.Tu.get(e);if(!u)return l;for(const d of u){const p=i.Pu.get(d);l=l.unionWith(p.view.tu)}return l}}function _E(r){const e=De(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=pE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=f3.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=o3.bind(null,e),e.hu.J_=YR.bind(null,e.eventManager),e.hu.pu=XR.bind(null,e.eventManager),e}function d3(r){const e=De(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=l3.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=u3.bind(null,e),e}class rh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Th(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,i){return null}Fu(e,i){return null}vu(e){return mR(this.persistence,new hR,e.initialUser,this.serializer)}Du(e){return new tE(jm.Vi,this.serializer)}bu(e){return new TR}async terminate(){var e,i;(e=this.gcScheduler)===null||e===void 0||e.stop(),(i=this.indexBackfillerScheduler)===null||i===void 0||i.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}rh.provider={build:()=>new rh};class m3 extends rh{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,i){tt(this.persistence.referenceDelegate instanceof nh,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new W4(s,e.asyncQueue,i)}Du(e){const i=this.cacheSizeBytes!==void 0?In.withCacheSize(this.cacheSizeBytes):In.DEFAULT;return new tE((s=>nh.Vi(s,i)),this.serializer)}}class dm{async initialize(e,i){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(i),this.remoteStore=this.createRemoteStore(i),this.eventManager=this.createEventManager(i),this.syncEngine=this.createSyncEngine(i,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Jv(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=h3.bind(null,this.syncEngine),await HR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new GR})()}createDatastore(e){const i=Th(e.databaseInfo.databaseId),s=(function(u){return new RR(u)})(e.databaseInfo);return(function(u,d,p,g){return new NR(u,d,p,g)})(e.authCredentials,e.appCheckCredentials,s,i)}createRemoteStore(e){return(function(s,l,u,d,p){return new xR(s,l,u,d,p)})(this.localStore,this.datastore,e.asyncQueue,(i=>Jv(this.syncEngine,i,0)),(function(){return Qv.C()?new Qv:new bR})())}createSyncEngine(e,i){return(function(l,u,d,p,g,y,E){const b=new e3(l,u,d,p,g,y);return E&&(b.fu=!0),b})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,i)}async terminate(){var e,i;await(async function(l){const u=De(l);ce(ia,"RemoteStore shutting down."),u.Ia.add(5),await Zl(u),u.Ea.shutdown(),u.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(i=this.eventManager)===null||i===void 0||i.terminate()}}dm.provider={build:()=>new dm};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p3{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):dr("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,i){setTimeout((()=>{this.muted||e(i)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bs="FirestoreClient";class g3{constructor(e,i,s,l,u){this.authCredentials=e,this.appCheckCredentials=i,this.asyncQueue=s,this.databaseInfo=l,this.user=un.UNAUTHENTICATED,this.clientId=Cm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,(async d=>{ce(bs,"Received user=",d.uid),await this.authCredentialListener(d),this.user=d})),this.appCheckCredentials.start(s,(d=>(ce(bs,"Received new app check token=",d),this.appCheckCredentialListener(d,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ms;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(i){const s=Ym(i,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function Bd(r,e){r.asyncQueue.verifyOperationInProgress(),ce(bs,"Initializing OfflineComponentProvider");const i=r.configuration;await e.initialize(i);let s=i.initialUser;r.setCredentialChangeListener((async l=>{s.isEqual(l)||(await nE(e.localStore,l),s=l)})),e.persistence.setDatabaseDeletedListener((()=>{gs("Terminating Firestore due to IndexedDb database deletion"),r.terminate().then((()=>{ce("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((l=>{gs("Terminating Firestore due to IndexedDb database deletion failed",l)}))})),r._offlineComponents=e}async function e_(r,e){r.asyncQueue.verifyOperationInProgress();const i=await y3(r);ce(bs,"Initializing OnlineComponentProvider"),await e.initialize(i,r.configuration),r.setCredentialChangeListener((s=>Yv(e.remoteStore,s))),r.setAppCheckTokenChangeListener(((s,l)=>Yv(e.remoteStore,l))),r._onlineComponents=e}async function y3(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){ce(bs,"Using user provided OfflineComponentProvider");try{await Bd(r,r._uninitializedComponentsProvider._offline)}catch(e){const i=e;if(!(function(l){return l.name==="FirebaseError"?l.code===ne.FAILED_PRECONDITION||l.code===ne.UNIMPLEMENTED:!(typeof DOMException<"u"&&l instanceof DOMException)||l.code===22||l.code===20||l.code===11})(i))throw i;gs("Error using user provided cache. Falling back to memory cache: "+i),await Bd(r,new rh)}}else ce(bs,"Using default OfflineComponentProvider"),await Bd(r,new m3(void 0));return r._offlineComponents}async function EE(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(ce(bs,"Using user provided OnlineComponentProvider"),await e_(r,r._uninitializedComponentsProvider._online)):(ce(bs,"Using default OnlineComponentProvider"),await e_(r,new dm))),r._onlineComponents}function v3(r){return EE(r).then((e=>e.syncEngine))}async function _3(r){const e=await EE(r),i=e.eventManager;return i.onListen=t3.bind(null,e.syncEngine),i.onUnlisten=r3.bind(null,e.syncEngine),i.onFirstRemoteStoreListen=n3.bind(null,e.syncEngine),i.onLastRemoteStoreUnlisten=s3.bind(null,e.syncEngine),i}function E3(r,e,i={}){const s=new ms;return r.asyncQueue.enqueueAndForget((async()=>(function(u,d,p,g,y){const E=new p3({next:A=>{E.Ou(),d.enqueueAndForget((()=>KR(u,b)));const k=A.docs.has(p);!k&&A.fromCache?y.reject(new ge(ne.UNAVAILABLE,"Failed to get document because the client is offline.")):k&&A.fromCache&&g&&g.source==="server"?y.reject(new ge(ne.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):y.resolve(A)},error:A=>y.reject(A)}),b=new WR(km(p.path),E,{includeMetadataChanges:!0,ka:!0});return QR(u,b)})(await _3(r),r.asyncQueue,e,i,s))),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TE(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t_=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bE="firestore.googleapis.com",n_=!0;class i_{constructor(e){var i,s;if(e.host===void 0){if(e.ssl!==void 0)throw new ge(ne.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=bE,this.ssl=n_}else this.host=e.host,this.ssl=(i=e.ssl)!==null&&i!==void 0?i:n_;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=eE;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Y4)throw new ge(ne.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}xw("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=TE((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),(function(u){if(u.timeoutSeconds!==void 0){if(isNaN(u.timeoutSeconds))throw new ge(ne.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`);if(u.timeoutSeconds<5)throw new ge(ne.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`);if(u.timeoutSeconds>30)throw new ge(ne.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,l){return s.timeoutSeconds===l.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Jm{constructor(e,i,s,l){this._authCredentials=e,this._appCheckCredentials=i,this._databaseId=s,this._app=l,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new i_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ge(ne.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ge(ne.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new i_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new bw;switch(s.type){case"firstParty":return new Rw(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ge(ne.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(i){const s=t_.get(i);s&&(ce("ComponentProvider","Removing Datastore"),t_.delete(i),s.terminate())})(this),Promise.resolve()}}function T3(r,e,i,s={}){var l;r=Vl(r,Jm);const u=ho(e),d=r._getSettings(),p=Object.assign(Object.assign({},d),{emulatorOptions:r._getEmulatorOptions()}),g=`${e}:${i}`;u&&(y_(`https://${g}`),v_("Firestore",!0)),d.host!==bE&&d.host!==g&&gs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const y=Object.assign(Object.assign({},d),{host:g,ssl:u,emulatorOptions:s});if(!$s(y,p)&&(r._setSettings(y),s.mockUserToken)){let E,b;if(typeof s.mockUserToken=="string")E=s.mockUserToken,b=un.MOCK_USER;else{E=Ob(s.mockUserToken,(l=r._app)===null||l===void 0?void 0:l.options.projectId);const A=s.mockUserToken.sub||s.mockUserToken.user_id;if(!A)throw new ge(ne.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");b=new un(A)}r._authCredentials=new Sw(new f0(E,b))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{constructor(e,i,s){this.converter=i,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new $m(this.firestore,e,this._query)}}class Kt{constructor(e,i,s){this.converter=i,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ql(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Kt(this.firestore,e,this._key)}toJSON(){return{type:Kt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,i,s){if(Yl(i,Kt._jsonSchema))return new Kt(e,s||null,new Ee(pt.fromString(i.referencePath)))}}Kt._jsonSchemaVersion="firestore/documentReference/1.0",Kt._jsonSchema={type:kt("string",Kt._jsonSchemaVersion),referencePath:kt("string")};class ql extends $m{constructor(e,i,s){super(e,i,km(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Kt(this.firestore,null,new Ee(e))}withConverter(e){return new ql(this.firestore,e,this._path)}}function SE(r,e,...i){if(r=ci(r),arguments.length===1&&(e=Cm.newId()),Ow("doc","path",e),r instanceof Jm){const s=pt.fromString(e,...i);return yv(s),new Kt(r,null,new Ee(s))}{if(!(r instanceof Kt||r instanceof ql))throw new ge(ne.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(pt.fromString(e,...i));return yv(s),new Kt(r.firestore,r instanceof ql?r.converter:null,new Ee(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r_="AsyncQueue";class s_{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new rE(this,"async_queue_retry"),this.oc=()=>{const s=jd();s&&ce(r_,"Visibility state changed to "+s.visibilityState),this.F_.y_()},this._c=e;const i=jd();i&&typeof i.addEventListener=="function"&&i.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const i=jd();i&&typeof i.removeEventListener=="function"&&i.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const i=new ms;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(i.resolve,i.reject),i.promise))).then((()=>i.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!yo(e))throw e;ce(r_,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const i=this._c.then((()=>(this.nc=!0,e().catch((s=>{throw this.tc=s,this.nc=!1,dr("INTERNAL UNHANDLED ERROR: ",a_(s)),s})).then((s=>(this.nc=!1,s))))));return this._c=i,i}enqueueAfterDelay(e,i,s){this.ac(),this.sc.indexOf(e)>-1&&(i=0);const l=Km.createAndSchedule(this,e,i,s,(u=>this.lc(u)));return this.ec.push(l),l}ac(){this.tc&&Ae(47125,{hc:a_(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const i of this.ec)if(i.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((i,s)=>i.targetTimeMs-s.targetTimeMs));for(const i of this.ec)if(i.skipDelay(),e!=="all"&&i.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const i=this.ec.indexOf(e);this.ec.splice(i,1)}}function a_(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}class ep extends Jm{constructor(e,i,s,l){super(e,i,s,l),this.type="firestore",this._queue=new s_,this._persistenceKey=(l==null?void 0:l.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new s_(e),this._firestoreClient=void 0,await e}}}function b3(r,e){const i=typeof r=="object"?r:b_(),s=typeof r=="string"?r:Xc,l=ym(i,"firestore").getImmediate({identifier:s});if(!l._initialized){const u=Db("firestore");u&&T3(l,...u)}return l}function AE(r){if(r._terminated)throw new ge(ne.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||S3(r),r._firestoreClient}function S3(r){var e,i,s;const l=r._freezeSettings(),u=(function(p,g,y,E){return new Hw(p,g,y,E.host,E.ssl,E.experimentalForceLongPolling,E.experimentalAutoDetectLongPolling,TE(E.experimentalLongPollingOptions),E.useFetchStreams,E.isUsingEmulator)})(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,l);r._componentsProvider||!((i=l.localCache)===null||i===void 0)&&i._offlineComponentProvider&&(!((s=l.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(r._componentsProvider={_offline:l.localCache._offlineComponentProvider,_online:l.localCache._onlineComponentProvider}),r._firestoreClient=new g3(r._authCredentials,r._appCheckCredentials,r._queue,u,r._componentsProvider&&(function(p){const g=p==null?void 0:p._online.build();return{_offline:p==null?void 0:p._offline.build(g),_online:g}})(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Jn(rn.fromBase64String(e))}catch(i){throw new ge(ne.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+i)}}static fromUint8Array(e){return new Jn(rn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Jn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Yl(e,Jn._jsonSchema))return Jn.fromBase64String(e.bytes)}}Jn._jsonSchemaVersion="firestore/bytes/1.0",Jn._jsonSchema={type:kt("string",Jn._jsonSchemaVersion),bytes:kt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{constructor(...e){for(let i=0;i<e.length;++i)if(e[i].length===0)throw new ge(ne.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new nn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wE{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e,i){if(!isFinite(e)||e<-90||e>90)throw new ge(ne.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(i)||i<-180||i>180)throw new ge(ne.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+i);this._lat=e,this._long=i}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ve(this._lat,e._lat)||Ve(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Di._jsonSchemaVersion}}static fromJSON(e){if(Yl(e,Di._jsonSchema))return new Di(e.latitude,e.longitude)}}Di._jsonSchemaVersion="firestore/geoPoint/1.0",Di._jsonSchema={type:kt("string",Di._jsonSchemaVersion),latitude:kt("number"),longitude:kt("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(e){this._values=(e||[]).map((i=>i))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,l){if(s.length!==l.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==l[u])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Ni._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Yl(e,Ni._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((i=>typeof i=="number")))return new Ni(e.vectorValues);throw new ge(ne.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ni._jsonSchemaVersion="firestore/vectorValue/1.0",Ni._jsonSchema={type:kt("string",Ni._jsonSchemaVersion),vectorValues:kt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A3=/^__.*__$/;class w3{constructor(e,i,s){this.data=e,this.fieldMask=i,this.fieldTransforms=s}toMutation(e,i){return this.fieldMask!==null?new aa(e,this.data,this.fieldMask,i,this.fieldTransforms):new Xl(e,this.data,i,this.fieldTransforms)}}function RE(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ae(40011,{Ec:r})}}class np{constructor(e,i,s,l,u,d){this.settings=e,this.databaseId=i,this.serializer=s,this.ignoreUndefinedProperties=l,u===void 0&&this.Ac(),this.fieldTransforms=u||[],this.fieldMask=d||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new np(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var i;const s=(i=this.path)===null||i===void 0?void 0:i.child(e),l=this.Rc({path:s,mc:!1});return l.fc(e),l}gc(e){var i;const s=(i=this.path)===null||i===void 0?void 0:i.child(e),l=this.Rc({path:s,mc:!1});return l.Ac(),l}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return sh(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((i=>e.isPrefixOf(i)))!==void 0||this.fieldTransforms.find((i=>e.isPrefixOf(i.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(RE(this.Ec)&&A3.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class R3{constructor(e,i,s){this.databaseId=e,this.ignoreUndefinedProperties=i,this.serializer=s||Th(e)}Dc(e,i,s,l=!1){return new np({Ec:e,methodName:i,bc:s,path:nn.emptyPath(),mc:!1,Sc:l},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function C3(r){const e=r._freezeSettings(),i=Th(r._databaseId);return new R3(r._databaseId,!!e.ignoreUndefinedProperties,i)}function I3(r,e,i,s,l,u={}){const d=r.Dc(u.merge||u.mergeFields?2:0,e,i,l);NE("Data must be an object, but it was:",d,s);const p=IE(s,d);let g,y;if(u.merge)g=new ui(d.fieldMask),y=d.fieldTransforms;else if(u.mergeFields){const E=[];for(const b of u.mergeFields){const A=D3(e,b,i);if(!d.contains(A))throw new ge(ne.INVALID_ARGUMENT,`Field '${A}' is specified in your field mask but missing from your input data.`);O3(E,A)||E.push(A)}g=new ui(E),y=d.fieldTransforms.filter((b=>g.covers(b.field)))}else g=null,y=d.fieldTransforms;return new w3(new Zn(p),g,y)}function CE(r,e){if(DE(r=ci(r)))return NE("Unsupported field value:",e,r),IE(r,e);if(r instanceof wE)return(function(s,l){if(!RE(l.Ec))throw l.wc(`${s._methodName}() can only be used with update() and set()`);if(!l.path)throw l.wc(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(l);u&&l.fieldTransforms.push(u)})(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(s,l){const u=[];let d=0;for(const p of s){let g=CE(p,l.yc(d));g==null&&(g={nullValue:"NULL_VALUE"}),u.push(g),d++}return{arrayValue:{values:u}}})(r,e)}return(function(s,l){if((s=ci(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return d4(l.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=ft.fromDate(s);return{timestampValue:th(l.serializer,u)}}if(s instanceof ft){const u=new ft(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:th(l.serializer,u)}}if(s instanceof Di)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Jn)return{bytesValue:K0(l.serializer,s._byteString)};if(s instanceof Kt){const u=l.databaseId,d=s.firestore._databaseId;if(!d.isEqual(u))throw l.wc(`Document reference is for database ${d.projectId}/${d.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:Pm(s.firestore._databaseId||l.databaseId,s._key.path)}}if(s instanceof Ni)return(function(d,p){return{mapValue:{fields:{[b0]:{stringValue:S0},[Wc]:{arrayValue:{values:d.toArray().map((y=>{if(typeof y!="number")throw p.wc("VectorValues must only contain numeric values.");return Vm(p.serializer,y)}))}}}}}})(s,l);throw l.wc(`Unsupported field value: ${Im(s)}`)})(r,e)}function IE(r,e){const i={};return g0(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ra(r,((s,l)=>{const u=CE(l,e.Vc(s));u!=null&&(i[s]=u)})),{mapValue:{fields:i}}}function DE(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof ft||r instanceof Di||r instanceof Jn||r instanceof Kt||r instanceof wE||r instanceof Ni)}function NE(r,e,i){if(!DE(i)||!m0(i)){const s=Im(i);throw s==="an object"?e.wc(r+" a custom object"):e.wc(r+" "+s)}}function D3(r,e,i){if((e=ci(e))instanceof tp)return e._internalPath;if(typeof e=="string")return OE(r,e);throw sh("Field path arguments must be of type string or ",r,!1,void 0,i)}const N3=new RegExp("[~\\*/\\[\\]]");function OE(r,e,i){if(e.search(N3)>=0)throw sh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,i);try{return new tp(...e.split("."))._internalPath}catch{throw sh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,i)}}function sh(r,e,i,s,l){const u=s&&!s.isEmpty(),d=l!==void 0;let p=`Function ${e}() called with invalid data`;i&&(p+=" (via `toFirestore()`)"),p+=". ";let g="";return(u||d)&&(g+=" (found",u&&(g+=` in field ${s}`),d&&(g+=` in document ${l}`),g+=")"),new ge(ne.INVALID_ARGUMENT,p+r+g)}function O3(r,e){return r.some((i=>i.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xE{constructor(e,i,s,l,u){this._firestore=e,this._userDataWriter=i,this._key=s,this._document=l,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new Kt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new x3(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const i=this._document.data.field(ME("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i)}}}class x3 extends xE{data(){return super.data()}}function ME(r,e){return typeof e=="string"?OE(r,e):e instanceof tp?e._internalPath:e._delegate._internalPath}class M3{convertValue(e,i="none"){switch(Es(e)){case 0:return null;case 1:return e.booleanValue;case 2:return wt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,i);case 5:return e.stringValue;case 6:return this.convertBytes(_s(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,i);case 11:return this.convertObject(e.mapValue,i);case 10:return this.convertVectorValue(e.mapValue);default:throw Ae(62114,{value:e})}}convertObject(e,i){return this.convertObjectMap(e.fields,i)}convertObjectMap(e,i="none"){const s={};return ra(e,((l,u)=>{s[l]=this.convertValue(u,i)})),s}convertVectorValue(e){var i,s,l;const u=(l=(s=(i=e.fields)===null||i===void 0?void 0:i[Wc].arrayValue)===null||s===void 0?void 0:s.values)===null||l===void 0?void 0:l.map((d=>wt(d.doubleValue)));return new Ni(u)}convertGeoPoint(e){return new Di(wt(e.latitude),wt(e.longitude))}convertArray(e,i){return(e.values||[]).map((s=>this.convertValue(s,i)))}convertServerTimestamp(e,i){switch(i){case"previous":const s=mh(e);return s==null?null:this.convertValue(s,i);case"estimate":return this.convertTimestamp(Ul(e));default:return null}}convertTimestamp(e){const i=vs(e);return new ft(i.seconds,i.nanos)}convertDocumentKey(e,i){const s=pt.fromString(e);tt($0(s),9688,{name:e});const l=new Pl(s.get(1),s.get(3)),u=new Ee(s.popFirst(5));return l.isEqual(i)||dr(`Document ${u} contains a document reference within a different database (${l.projectId}/${l.database}) which is not supported. It will be treated as a reference in the current database (${i.projectId}/${i.database}) instead.`),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k3(r,e,i){let s;return s=r?r.toFirestore(e):e,s}class Al{constructor(e,i){this.hasPendingWrites=e,this.fromCache=i}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Js extends xE{constructor(e,i,s,l,u,d){super(e,i,s,l,d),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const i=new zc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(i,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,i={}){if(this._document){const s=this._document.data.field(ME("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,i.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ge(ne.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,i={};return i.type=Js._jsonSchemaVersion,i.bundle="",i.bundleSource="DocumentSnapshot",i.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?i:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),i.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),i)}}Js._jsonSchemaVersion="firestore/documentSnapshot/1.0",Js._jsonSchema={type:kt("string",Js._jsonSchemaVersion),bundleSource:kt("string","DocumentSnapshot"),bundleName:kt("string"),bundle:kt("string")};class zc extends Js{data(e={}){return super.data(e)}}class xl{constructor(e,i,s,l){this._firestore=e,this._userDataWriter=i,this._snapshot=l,this.metadata=new Al(l.hasPendingWrites,l.fromCache),this.query=s}get docs(){const e=[];return this.forEach((i=>e.push(i))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,i){this._snapshot.docs.forEach((s=>{e.call(i,new zc(this._firestore,this._userDataWriter,s.key,s,new Al(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const i=!!e.includeMetadataChanges;if(i&&this._snapshot.excludesMetadataChanges)throw new ge(ne.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===i||(this._cachedChanges=(function(l,u){if(l._snapshot.oldDocs.isEmpty()){let d=0;return l._snapshot.docChanges.map((p=>{const g=new zc(l._firestore,l._userDataWriter,p.doc.key,p.doc,new Al(l._snapshot.mutatedKeys.has(p.doc.key),l._snapshot.fromCache),l.query.converter);return p.doc,{type:"added",doc:g,oldIndex:-1,newIndex:d++}}))}{let d=l._snapshot.oldDocs;return l._snapshot.docChanges.filter((p=>u||p.type!==3)).map((p=>{const g=new zc(l._firestore,l._userDataWriter,p.doc.key,p.doc,new Al(l._snapshot.mutatedKeys.has(p.doc.key),l._snapshot.fromCache),l.query.converter);let y=-1,E=-1;return p.type!==0&&(y=d.indexOf(p.doc.key),d=d.delete(p.doc.key)),p.type!==1&&(d=d.add(p.doc),E=d.indexOf(p.doc.key)),{type:V3(p.type),doc:g,oldIndex:y,newIndex:E}}))}})(this,i),this._cachedChangesIncludeMetadataChanges=i),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ge(ne.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=xl._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Cm.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const i=[],s=[],l=[];return this.docs.forEach((u=>{u._document!==null&&(i.push(u._document),s.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),l.push(u.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function V3(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ae(61501,{type:r})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L3(r){r=Vl(r,Kt);const e=Vl(r.firestore,ep);return E3(AE(e),r._key).then((i=>j3(e,r,i)))}xl._jsonSchemaVersion="firestore/querySnapshot/1.0",xl._jsonSchema={type:kt("string",xl._jsonSchemaVersion),bundleSource:kt("string","QuerySnapshot"),bundleName:kt("string"),bundle:kt("string")};class U3 extends M3{constructor(e){super(),this.firestore=e}convertBytes(e){return new Jn(e)}convertReference(e){const i=this.convertDocumentKey(e,this.firestore._databaseId);return new Kt(this.firestore,null,i)}}function P3(r,e,i){r=Vl(r,Kt);const s=Vl(r.firestore,ep),l=k3(r.converter,e);return z3(s,[I3(C3(s),"setDoc",r._key,l,r.converter!==null,i).toMutation(r._key,ur.none())])}function z3(r,e){return(function(s,l){const u=new ms;return s.asyncQueue.enqueueAndForget((async()=>a3(await v3(s),l,u))),u.promise})(AE(r),e)}function j3(r,e,i){const s=i.docs.get(e._key),l=new U3(r);return new Js(r,l,e._key,s,new Al(i.hasPendingWrites,i.fromCache),e.converter)}(function(e,i=!0){(function(l){po=l})(fo),so(new ea("firestore",((s,{instanceIdentifier:l,options:u})=>{const d=s.getProvider("app").getImmediate(),p=new ep(new Aw(s.getProvider("auth-internal")),new Cw(d,s.getProvider("app-check-internal")),(function(y,E){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new ge(ne.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Pl(y.options.projectId,E)})(d,l),d);return u=Object.assign({useFetchStreams:i},u),p._setSettings(u),p}),"PUBLIC").setMultipleInstances(!0)),hs(fv,dv,e),hs(fv,dv,"esm2017")})();function B3(){return null}function q3(){const r=B3();if(!r)return{app:null,auth:null,db:null,appId:"local-dev"};const e=T_(r);return{app:e,auth:nw(e),db:b3(e),appId:"default-app-id"}}async function H3({db:r,appId:e,seedId:i,strokes:s,layers:l}){const u=SE(r,"artifacts",e,"public","data","seedArt",String(i));await P3(u,{strokes:JSON.stringify(s),layers:JSON.stringify(l),updatedAt:Date.now()})}async function F3({db:r,appId:e,seedId:i}){const s=SE(r,"artifacts",e,"public","data","seedArt",String(i)),l=await L3(s);if(!l.exists())return null;const u=l.data();return{strokes:JSON.parse(u.strokes),layers:JSON.parse(u.layers)}}const G3=`1.
abandon
2.
ability
3.
able
4.
about
5.
above
6.
absent
7.
absorb
8.
abstract
9.
absurd
10.
abuse
11.
access
12.
accident
13.
account
14.
accuse
15.
achieve
16.
acid
17.
acoustic
18.
acquire
19.
across
20.
act
21.
action
22.
actor
23.
actress
24.
actual
25.
adapt
26.
add
27.
addict
28.
address
29.
adjust
30.
admit
31.
adult
32.
advance
33.
advice
34.
aerobic
35.
affair
36.
afford
37.
afraid
38.
again
39.
age
40.
agent
41.
agree
42.
ahead
43.
aim
44.
air
45.
airport
46.
aisle
47.
alarm
48.
album
49.
alcohol
50.
alert
51.
alien
52.
all
53.
alley
54.
allow
55.
almost
56.
alone
57.
alpha
58.
already
59.
also
60.
alter
61.
always
62.
amateur
63.
amazing
64.
among
65.
amount
66.
amused
67.
analyst
68.
anchor
69.
ancient
70.
anger
71.
angle
72.
angry
73.
animal
74.
ankle
75.
announce
76.
annual
77.
another
78.
answer
79.
antenna
80.
antique
81.
anxiety
82.
any
83.
apart
84.
apology
85.
appear
86.
apple
87.
approve
88.
april
89.
arch
90.
arctic
91.
area
92.
arena
93.
argue
94.
arm
95.
armed
96.
armor
97.
army
98.
around
99.
arrange
100.
arrest
101.
arrive
102.
arrow
103.
art
104.
artefact
105.
artist
106.
artwork
107.
ask
108.
aspect
109.
assault
110.
asset
111.
assist
112.
assume
113.
asthma
114.
athlete
115.
atom
116.
attack
117.
attend
118.
attitude
119.
attract
120.
auction
121.
audit
122.
august
123.
aunt
124.
author
125.
auto
126.
autumn
127.
average
128.
avocado
129.
avoid
130.
awake
131.
aware
132.
away
133.
awesome
134.
awful
135.
awkward
136.
axis
137.
baby
138.
bachelor
139.
bacon
140.
badge
141.
bag
142.
balance
143.
balcony
144.
ball
145.
bamboo
146.
banana
147.
banner
148.
bar
149.
barely
150.
bargain
151.
barrel
152.
base
153.
basic
154.
basket
155.
battle
156.
beach
157.
bean
158.
beauty
159.
because
160.
become
161.
beef
162.
before
163.
begin
164.
behave
165.
behind
166.
believe
167.
below
168.
belt
169.
bench
170.
benefit
171.
best
172.
betray
173.
better
174.
between
175.
beyond
176.
bicycle
177.
bid
178.
bike
179.
bind
180.
biology
181.
bird
182.
birth
183.
bitter
184.
black
185.
blade
186.
blame
187.
blanket
188.
blast
189.
bleak
190.
bless
191.
blind
192.
blood
193.
blossom
194.
blouse
195.
blue
196.
blur
197.
blush
198.
board
199.
boat
200.
body
201.
boil
202.
bomb
203.
bone
204.
bonus
205.
book
206.
boost
207.
border
208.
boring
209.
borrow
210.
boss
211.
bottom
212.
bounce
213.
box
214.
boy
215.
bracket
216.
brain
217.
brand
218.
brass
219.
brave
220.
bread
221.
breeze
222.
brick
223.
bridge
224.
brief
225.
bright
226.
bring
227.
brisk
228.
broccoli
229.
broken
230.
bronze
231.
broom
232.
brother
233.
brown
234.
brush
235.
bubble
236.
buddy
237.
budget
238.
buffalo
239.
build
240.
bulb
241.
bulk
242.
bullet
243.
bundle
244.
bunker
245.
burden
246.
burger
247.
burst
248.
bus
249.
business
250.
busy
251.
butter
252.
buyer
253.
buzz
254.
cabbage
255.
cabin
256.
cable
257.
cactus
258.
cage
259.
cake
260.
call
261.
calm
262.
camera
263.
camp
264.
can
265.
canal
266.
cancel
267.
candy
268.
cannon
269.
canoe
270.
canvas
271.
canyon
272.
capable
273.
capital
274.
captain
275.
car
276.
carbon
277.
card
278.
cargo
279.
carpet
280.
carry
281.
cart
282.
case
283.
cash
284.
casino
285.
castle
286.
casual
287.
cat
288.
catalog
289.
catch
290.
category
291.
cattle
292.
caught
293.
cause
294.
caution
295.
cave
296.
ceiling
297.
celery
298.
cement
299.
census
300.
century
301.
cereal
302.
certain
303.
chair
304.
chalk
305.
champion
306.
change
307.
chaos
308.
chapter
309.
charge
310.
chase
311.
chat
312.
cheap
313.
check
314.
cheese
315.
chef
316.
cherry
317.
chest
318.
chicken
319.
chief
320.
child
321.
chimney
322.
choice
323.
choose
324.
chronic
325.
chuckle
326.
chunk
327.
churn
328.
cigar
329.
cinnamon
330.
circle
331.
citizen
332.
city
333.
civil
334.
claim
335.
clap
336.
clarify
337.
claw
338.
clay
339.
clean
340.
clerk
341.
clever
342.
click
343.
client
344.
cliff
345.
climb
346.
clinic
347.
clip
348.
clock
349.
clog
350.
close
351.
cloth
352.
cloud
353.
clown
354.
club
355.
clump
356.
cluster
357.
clutch
358.
coach
359.
coast
360.
coconut
361.
code
362.
coffee
363.
coil
364.
coin
365.
collect
366.
color
367.
column
368.
combine
369.
come
370.
comfort
371.
comic
372.
common
373.
company
374.
concert
375.
conduct
376.
confirm
377.
congress
378.
connect
379.
consider
380.
control
381.
convince
382.
cook
383.
cool
384.
copper
385.
copy
386.
coral
387.
core
388.
corn
389.
correct
390.
cost
391.
cotton
392.
couch
393.
country
394.
couple
395.
course
396.
cousin
397.
cover
398.
coyote
399.
crack
400.
cradle
401.
craft
402.
cram
403.
crane
404.
crash
405.
crater
406.
crawl
407.
crazy
408.
cream
409.
credit
410.
creek
411.
crew
412.
cricket
413.
crime
414.
crisp
415.
critic
416.
crop
417.
cross
418.
crouch
419.
crowd
420.
crucial
421.
cruel
422.
cruise
423.
crumble
424.
crunch
425.
crush
426.
cry
427.
crystal
428.
cube
429.
culture
430.
cup
431.
cupboard
432.
curious
433.
current
434.
curtain
435.
curve
436.
cushion
437.
custom
438.
cute
439.
cycle
440.
dad
441.
damage
442.
damp
443.
dance
444.
danger
445.
daring
446.
dash
447.
daughter
448.
dawn
449.
day
450.
deal
451.
debate
452.
debris
453.
decade
454.
december
455.
decide
456.
decline
457.
decorate
458.
decrease
459.
deer
460.
defense
461.
define
462.
defy
463.
degree
464.
delay
465.
deliver
466.
demand
467.
demise
468.
denial
469.
dentist
470.
deny
471.
depart
472.
depend
473.
deposit
474.
depth
475.
deputy
476.
derive
477.
describe
478.
desert
479.
design
480.
desk
481.
despair
482.
destroy
483.
detail
484.
detect
485.
develop
486.
device
487.
devote
488.
diagram
489.
dial
490.
diamond
491.
diary
492.
dice
493.
diesel
494.
diet
495.
differ
496.
digital
497.
dignity
498.
dilemma
499.
dinner
500.
dinosaur
501.
direct
502.
dirt
503.
disagree
504.
discover
505.
disease
506.
dish
507.
dismiss
508.
disorder
509.
display
510.
distance
511.
divert
512.
divide
513.
divorce
514.
dizzy
515.
doctor
516.
document
517.
dog
518.
doll
519.
dolphin
520.
domain
521.
donate
522.
donkey
523.
donor
524.
door
525.
dose
526.
double
527.
dove
528.
draft
529.
dragon
530.
drama
531.
drastic
532.
draw
533.
dream
534.
dress
535.
drift
536.
drill
537.
drink
538.
drip
539.
drive
540.
drop
541.
drum
542.
dry
543.
duck
544.
dumb
545.
dune
546.
during
547.
dust
548.
dutch
549.
duty
550.
dwarf
551.
dynamic
552.
eager
553.
eagle
554.
early
555.
earn
556.
earth
557.
easily
558.
east
559.
easy
560.
echo
561.
ecology
562.
economy
563.
edge
564.
edit
565.
educate
566.
effort
567.
egg
568.
eight
569.
either
570.
elbow
571.
elder
572.
electric
573.
elegant
574.
element
575.
elephant
576.
elevator
577.
elite
578.
else
579.
embark
580.
embody
581.
embrace
582.
emerge
583.
emotion
584.
employ
585.
empower
586.
empty
587.
enable
588.
enact
589.
end
590.
endless
591.
endorse
592.
enemy
593.
energy
594.
enforce
595.
engage
596.
engine
597.
enhance
598.
enjoy
599.
enlist
600.
enough
601.
enrich
602.
enroll
603.
ensure
604.
enter
605.
entire
606.
entry
607.
envelope
608.
episode
609.
equal
610.
equip
611.
era
612.
erase
613.
erode
614.
erosion
615.
error
616.
erupt
617.
escape
618.
essay
619.
essence
620.
estate
621.
eternal
622.
ethics
623.
evidence
624.
evil
625.
evoke
626.
evolve
627.
exact
628.
example
629.
excess
630.
exchange
631.
excite
632.
exclude
633.
excuse
634.
execute
635.
exercise
636.
exhaust
637.
exhibit
638.
exile
639.
exist
640.
exit
641.
exotic
642.
expand
643.
expect
644.
expire
645.
explain
646.
expose
647.
express
648.
extend
649.
extra
650.
eye
651.
eyebrow
652.
fabric
653.
face
654.
faculty
655.
fade
656.
faint
657.
faith
658.
fall
659.
false
660.
fame
661.
family
662.
famous
663.
fan
664.
fancy
665.
fantasy
666.
farm
667.
fashion
668.
fat
669.
fatal
670.
father
671.
fatigue
672.
fault
673.
favorite
674.
feature
675.
february
676.
federal
677.
fee
678.
feed
679.
feel
680.
female
681.
fence
682.
festival
683.
fetch
684.
fever
685.
few
686.
fiber
687.
fiction
688.
field
689.
figure
690.
file
691.
film
692.
filter
693.
final
694.
find
695.
fine
696.
finger
697.
finish
698.
fire
699.
firm
700.
first
701.
fiscal
702.
fish
703.
fit
704.
fitness
705.
fix
706.
flag
707.
flame
708.
flash
709.
flat
710.
flavor
711.
flee
712.
flight
713.
flip
714.
float
715.
flock
716.
floor
717.
flower
718.
fluid
719.
flush
720.
fly
721.
foam
722.
focus
723.
fog
724.
foil
725.
fold
726.
follow
727.
food
728.
foot
729.
force
730.
forest
731.
forget
732.
fork
733.
fortune
734.
forum
735.
forward
736.
fossil
737.
foster
738.
found
739.
fox
740.
fragile
741.
frame
742.
frequent
743.
fresh
744.
friend
745.
fringe
746.
frog
747.
front
748.
frost
749.
frown
750.
frozen
751.
fruit
752.
fuel
753.
fun
754.
funny
755.
furnace
756.
fury
757.
future
758.
gadget
759.
gain
760.
galaxy
761.
gallery
762.
game
763.
gap
764.
garage
765.
garbage
766.
garden
767.
garlic
768.
garment
769.
gas
770.
gasp
771.
gate
772.
gather
773.
gauge
774.
gaze
775.
general
776.
genius
777.
genre
778.
gentle
779.
genuine
780.
gesture
781.
ghost
782.
giant
783.
gift
784.
giggle
785.
ginger
786.
giraffe
787.
girl
788.
give
789.
glad
790.
glance
791.
glare
792.
glass
793.
glide
794.
glimpse
795.
globe
796.
gloom
797.
glory
798.
glove
799.
glow
800.
glue
801.
goat
802.
goddess
803.
gold
804.
good
805.
goose
806.
gorilla
807.
gospel
808.
gossip
809.
govern
810.
gown
811.
grab
812.
grace
813.
grain
814.
grant
815.
grape
816.
grass
817.
gravity
818.
great
819.
green
820.
grid
821.
grief
822.
grit
823.
grocery
824.
group
825.
grow
826.
grunt
827.
guard
828.
guess
829.
guide
830.
guilt
831.
guitar
832.
gun
833.
gym
834.
habit
835.
hair
836.
half
837.
hammer
838.
hamster
839.
hand
840.
happy
841.
harbor
842.
hard
843.
harsh
844.
harvest
845.
hat
846.
have
847.
hawk
848.
hazard
849.
head
850.
health
851.
heart
852.
heavy
853.
hedgehog
854.
height
855.
hello
856.
helmet
857.
help
858.
hen
859.
hero
860.
hidden
861.
high
862.
hill
863.
hint
864.
hip
865.
hire
866.
history
867.
hobby
868.
hockey
869.
hold
870.
hole
871.
holiday
872.
hollow
873.
home
874.
honey
875.
hood
876.
hope
877.
horn
878.
horror
879.
horse
880.
hospital
881.
host
882.
hotel
883.
hour
884.
hover
885.
hub
886.
huge
887.
human
888.
humble
889.
humor
890.
hundred
891.
hungry
892.
hunt
893.
hurdle
894.
hurry
895.
hurt
896.
husband
897.
hybrid
898.
ice
899.
icon
900.
idea
901.
identify
902.
idle
903.
ignore
904.
ill
905.
illegal
906.
illness
907.
image
908.
imitate
909.
immense
910.
immune
911.
impact
912.
impose
913.
improve
914.
impulse
915.
inch
916.
include
917.
income
918.
increase
919.
index
920.
indicate
921.
indoor
922.
industry
923.
infant
924.
inflict
925.
inform
926.
inhale
927.
inherit
928.
initial
929.
inject
930.
injury
931.
inmate
932.
inner
933.
innocent
934.
input
935.
inquiry
936.
insane
937.
insect
938.
inside
939.
inspire
940.
install
941.
intact
942.
interest
943.
into
944.
invest
945.
invite
946.
involve
947.
iron
948.
island
949.
isolate
950.
issue
951.
item
952.
ivory
953.
jacket
954.
jaguar
955.
jar
956.
jazz
957.
jealous
958.
jeans
959.
jelly
960.
jewel
961.
job
962.
join
963.
joke
964.
journey
965.
joy
966.
judge
967.
juice
968.
jump
969.
jungle
970.
junior
971.
junk
972.
just
973.
kangaroo
974.
keen
975.
keep
976.
ketchup
977.
key
978.
kick
979.
kid
980.
kidney
981.
kind
982.
kingdom
983.
kiss
984.
kit
985.
kitchen
986.
kite
987.
kitten
988.
kiwi
989.
knee
990.
knife
991.
knock
992.
know
993.
lab
994.
label
995.
labor
996.
ladder
997.
lady
998.
lake
999.
lamp
1000.
language
1001.
laptop
1002.
large
1003.
later
1004.
latin
1005.
laugh
1006.
laundry
1007.
lava
1008.
law
1009.
lawn
1010.
lawsuit
1011.
layer
1012.
lazy
1013.
leader
1014.
leaf
1015.
learn
1016.
leave
1017.
lecture
1018.
left
1019.
leg
1020.
legal
1021.
legend
1022.
leisure
1023.
lemon
1024.
lend
1025.
length
1026.
lens
1027.
leopard
1028.
lesson
1029.
letter
1030.
level
1031.
liar
1032.
liberty
1033.
library
1034.
license
1035.
life
1036.
lift
1037.
light
1038.
like
1039.
limb
1040.
limit
1041.
link
1042.
lion
1043.
liquid
1044.
list
1045.
little
1046.
live
1047.
lizard
1048.
load
1049.
loan
1050.
lobster
1051.
local
1052.
lock
1053.
logic
1054.
lonely
1055.
long
1056.
loop
1057.
lottery
1058.
loud
1059.
lounge
1060.
love
1061.
loyal
1062.
lucky
1063.
luggage
1064.
lumber
1065.
lunar
1066.
lunch
1067.
luxury
1068.
lyrics
1069.
machine
1070.
mad
1071.
magic
1072.
magnet
1073.
maid
1074.
mail
1075.
main
1076.
major
1077.
make
1078.
mammal
1079.
man
1080.
manage
1081.
mandate
1082.
mango
1083.
mansion
1084.
manual
1085.
maple
1086.
marble
1087.
march
1088.
margin
1089.
marine
1090.
market
1091.
marriage
1092.
mask
1093.
mass
1094.
master
1095.
match
1096.
material
1097.
math
1098.
matrix
1099.
matter
1100.
maximum
1101.
maze
1102.
meadow
1103.
mean
1104.
measure
1105.
meat
1106.
mechanic
1107.
medal
1108.
media
1109.
melody
1110.
melt
1111.
member
1112.
memory
1113.
mention
1114.
menu
1115.
mercy
1116.
merge
1117.
merit
1118.
merry
1119.
mesh
1120.
message
1121.
metal
1122.
method
1123.
middle
1124.
midnight
1125.
milk
1126.
million
1127.
mimic
1128.
mind
1129.
minimum
1130.
minor
1131.
minute
1132.
miracle
1133.
mirror
1134.
misery
1135.
miss
1136.
mistake
1137.
mix
1138.
mixed
1139.
mixture
1140.
mobile
1141.
model
1142.
modify
1143.
mom
1144.
moment
1145.
monitor
1146.
monkey
1147.
monster
1148.
month
1149.
moon
1150.
moral
1151.
more
1152.
morning
1153.
mosquito
1154.
mother
1155.
motion
1156.
motor
1157.
mountain
1158.
mouse
1159.
move
1160.
movie
1161.
much
1162.
muffin
1163.
mule
1164.
multiply
1165.
muscle
1166.
museum
1167.
mushroom
1168.
music
1169.
must
1170.
mutual
1171.
myself
1172.
mystery
1173.
myth
1174.
naive
1175.
name
1176.
napkin
1177.
narrow
1178.
nasty
1179.
nation
1180.
nature
1181.
near
1182.
neck
1183.
need
1184.
negative
1185.
neglect
1186.
neither
1187.
nephew
1188.
nerve
1189.
nest
1190.
net
1191.
network
1192.
neutral
1193.
never
1194.
news
1195.
next
1196.
nice
1197.
night
1198.
noble
1199.
noise
1200.
nominee
1201.
noodle
1202.
normal
1203.
north
1204.
nose
1205.
notable
1206.
note
1207.
nothing
1208.
notice
1209.
novel
1210.
now
1211.
nuclear
1212.
number
1213.
nurse
1214.
nut
1215.
oak
1216.
obey
1217.
object
1218.
oblige
1219.
obscure
1220.
observe
1221.
obtain
1222.
obvious
1223.
occur
1224.
ocean
1225.
october
1226.
odor
1227.
off
1228.
offer
1229.
office
1230.
often
1231.
oil
1232.
okay
1233.
old
1234.
olive
1235.
olympic
1236.
omit
1237.
once
1238.
one
1239.
onion
1240.
online
1241.
only
1242.
open
1243.
opera
1244.
opinion
1245.
oppose
1246.
option
1247.
orange
1248.
orbit
1249.
orchard
1250.
order
1251.
ordinary
1252.
organ
1253.
orient
1254.
original
1255.
orphan
1256.
ostrich
1257.
other
1258.
outdoor
1259.
outer
1260.
output
1261.
outside
1262.
oval
1263.
oven
1264.
over
1265.
own
1266.
owner
1267.
oxygen
1268.
oyster
1269.
ozone
1270.
pact
1271.
paddle
1272.
page
1273.
pair
1274.
palace
1275.
palm
1276.
panda
1277.
panel
1278.
panic
1279.
panther
1280.
paper
1281.
parade
1282.
parent
1283.
park
1284.
parrot
1285.
party
1286.
pass
1287.
patch
1288.
path
1289.
patient
1290.
patrol
1291.
pattern
1292.
pause
1293.
pave
1294.
payment
1295.
peace
1296.
peanut
1297.
pear
1298.
peasant
1299.
pelican
1300.
pen
1301.
penalty
1302.
pencil
1303.
people
1304.
pepper
1305.
perfect
1306.
permit
1307.
person
1308.
pet
1309.
phone
1310.
photo
1311.
phrase
1312.
physical
1313.
piano
1314.
picnic
1315.
picture
1316.
piece
1317.
pig
1318.
pigeon
1319.
pill
1320.
pilot
1321.
pink
1322.
pioneer
1323.
pipe
1324.
pistol
1325.
pitch
1326.
pizza
1327.
place
1328.
planet
1329.
plastic
1330.
plate
1331.
play
1332.
please
1333.
pledge
1334.
pluck
1335.
plug
1336.
plunge
1337.
poem
1338.
poet
1339.
point
1340.
polar
1341.
pole
1342.
police
1343.
pond
1344.
pony
1345.
pool
1346.
popular
1347.
portion
1348.
position
1349.
possible
1350.
post
1351.
potato
1352.
pottery
1353.
poverty
1354.
powder
1355.
power
1356.
practice
1357.
praise
1358.
predict
1359.
prefer
1360.
prepare
1361.
present
1362.
pretty
1363.
prevent
1364.
price
1365.
pride
1366.
primary
1367.
print
1368.
priority
1369.
prison
1370.
private
1371.
prize
1372.
problem
1373.
process
1374.
produce
1375.
profit
1376.
program
1377.
project
1378.
promote
1379.
proof
1380.
property
1381.
prosper
1382.
protect
1383.
proud
1384.
provide
1385.
public
1386.
pudding
1387.
pull
1388.
pulp
1389.
pulse
1390.
pumpkin
1391.
punch
1392.
pupil
1393.
puppy
1394.
purchase
1395.
purity
1396.
purpose
1397.
purse
1398.
push
1399.
put
1400.
puzzle
1401.
pyramid
1402.
quality
1403.
quantum
1404.
quarter
1405.
question
1406.
quick
1407.
quit
1408.
quiz
1409.
quote
1410.
rabbit
1411.
raccoon
1412.
race
1413.
rack
1414.
radar
1415.
radio
1416.
rail
1417.
rain
1418.
raise
1419.
rally
1420.
ramp
1421.
ranch
1422.
random
1423.
range
1424.
rapid
1425.
rare
1426.
rate
1427.
rather
1428.
raven
1429.
raw
1430.
razor
1431.
ready
1432.
real
1433.
reason
1434.
rebel
1435.
rebuild
1436.
recall
1437.
receive
1438.
recipe
1439.
record
1440.
recycle
1441.
reduce
1442.
reflect
1443.
reform
1444.
refuse
1445.
region
1446.
regret
1447.
regular
1448.
reject
1449.
relax
1450.
release
1451.
relief
1452.
rely
1453.
remain
1454.
remember
1455.
remind
1456.
remove
1457.
render
1458.
renew
1459.
rent
1460.
reopen
1461.
repair
1462.
repeat
1463.
replace
1464.
report
1465.
require
1466.
rescue
1467.
resemble
1468.
resist
1469.
resource
1470.
response
1471.
result
1472.
retire
1473.
retreat
1474.
return
1475.
reunion
1476.
reveal
1477.
review
1478.
reward
1479.
rhythm
1480.
rib
1481.
ribbon
1482.
rice
1483.
rich
1484.
ride
1485.
ridge
1486.
rifle
1487.
right
1488.
rigid
1489.
ring
1490.
riot
1491.
ripple
1492.
risk
1493.
ritual
1494.
rival
1495.
river
1496.
road
1497.
roast
1498.
robot
1499.
robust
1500.
rocket
1501.
romance
1502.
roof
1503.
rookie
1504.
room
1505.
rose
1506.
rotate
1507.
rough
1508.
round
1509.
route
1510.
royal
1511.
rubber
1512.
rude
1513.
rug
1514.
rule
1515.
run
1516.
runway
1517.
rural
1518.
sad
1519.
saddle
1520.
sadness
1521.
safe
1522.
sail
1523.
salad
1524.
salmon
1525.
salon
1526.
salt
1527.
salute
1528.
same
1529.
sample
1530.
sand
1531.
satisfy
1532.
satoshi
1533.
sauce
1534.
sausage
1535.
save
1536.
say
1537.
scale
1538.
scan
1539.
scare
1540.
scatter
1541.
scene
1542.
scheme
1543.
school
1544.
science
1545.
scissors
1546.
scorpion
1547.
scout
1548.
scrap
1549.
screen
1550.
script
1551.
scrub
1552.
sea
1553.
search
1554.
season
1555.
seat
1556.
second
1557.
secret
1558.
section
1559.
security
1560.
seed
1561.
seek
1562.
segment
1563.
select
1564.
sell
1565.
seminar
1566.
senior
1567.
sense
1568.
sentence
1569.
series
1570.
service
1571.
session
1572.
settle
1573.
setup
1574.
seven
1575.
shadow
1576.
shaft
1577.
shallow
1578.
share
1579.
shed
1580.
shell
1581.
sheriff
1582.
shield
1583.
shift
1584.
shine
1585.
ship
1586.
shiver
1587.
shock
1588.
shoe
1589.
shoot
1590.
shop
1591.
short
1592.
shoulder
1593.
shove
1594.
shrimp
1595.
shrug
1596.
shuffle
1597.
shy
1598.
sibling
1599.
sick
1600.
side
1601.
siege
1602.
sight
1603.
sign
1604.
silent
1605.
silk
1606.
silly
1607.
silver
1608.
similar
1609.
simple
1610.
since
1611.
sing
1612.
siren
1613.
sister
1614.
situate
1615.
six
1616.
size
1617.
skate
1618.
sketch
1619.
ski
1620.
skill
1621.
skin
1622.
skirt
1623.
skull
1624.
slab
1625.
slam
1626.
sleep
1627.
slender
1628.
slice
1629.
slide
1630.
slight
1631.
slim
1632.
slogan
1633.
slot
1634.
slow
1635.
slush
1636.
small
1637.
smart
1638.
smile
1639.
smoke
1640.
smooth
1641.
snack
1642.
snake
1643.
snap
1644.
sniff
1645.
snow
1646.
soap
1647.
soccer
1648.
social
1649.
sock
1650.
soda
1651.
soft
1652.
solar
1653.
soldier
1654.
solid
1655.
solution
1656.
solve
1657.
someone
1658.
song
1659.
soon
1660.
sorry
1661.
sort
1662.
soul
1663.
sound
1664.
soup
1665.
source
1666.
south
1667.
space
1668.
spare
1669.
spatial
1670.
spawn
1671.
speak
1672.
special
1673.
speed
1674.
spell
1675.
spend
1676.
sphere
1677.
spice
1678.
spider
1679.
spike
1680.
spin
1681.
spirit
1682.
split
1683.
spoil
1684.
sponsor
1685.
spoon
1686.
sport
1687.
spot
1688.
spray
1689.
spread
1690.
spring
1691.
spy
1692.
square
1693.
squeeze
1694.
squirrel
1695.
stable
1696.
stadium
1697.
staff
1698.
stage
1699.
stairs
1700.
stamp
1701.
stand
1702.
start
1703.
state
1704.
stay
1705.
steak
1706.
steel
1707.
stem
1708.
step
1709.
stereo
1710.
stick
1711.
still
1712.
sting
1713.
stock
1714.
stomach
1715.
stone
1716.
stool
1717.
story
1718.
stove
1719.
strategy
1720.
street
1721.
strike
1722.
strong
1723.
struggle
1724.
student
1725.
stuff
1726.
stumble
1727.
style
1728.
subject
1729.
submit
1730.
subway
1731.
success
1732.
such
1733.
sudden
1734.
suffer
1735.
sugar
1736.
suggest
1737.
suit
1738.
summer
1739.
sun
1740.
sunny
1741.
sunset
1742.
super
1743.
supply
1744.
supreme
1745.
sure
1746.
surface
1747.
surge
1748.
surprise
1749.
surround
1750.
survey
1751.
suspect
1752.
sustain
1753.
swallow
1754.
swamp
1755.
swap
1756.
swarm
1757.
swear
1758.
sweet
1759.
swift
1760.
swim
1761.
swing
1762.
switch
1763.
sword
1764.
symbol
1765.
symptom
1766.
syrup
1767.
system
1768.
table
1769.
tackle
1770.
tag
1771.
tail
1772.
talent
1773.
talk
1774.
tank
1775.
tape
1776.
target
1777.
task
1778.
taste
1779.
tattoo
1780.
taxi
1781.
teach
1782.
team
1783.
tell
1784.
ten
1785.
tenant
1786.
tennis
1787.
tent
1788.
term
1789.
test
1790.
text
1791.
thank
1792.
that
1793.
theme
1794.
then
1795.
theory
1796.
there
1797.
they
1798.
thing
1799.
this
1800.
thought
1801.
three
1802.
thrive
1803.
throw
1804.
thumb
1805.
thunder
1806.
ticket
1807.
tide
1808.
tiger
1809.
tilt
1810.
timber
1811.
time
1812.
tiny
1813.
tip
1814.
tired
1815.
tissue
1816.
title
1817.
toast
1818.
tobacco
1819.
today
1820.
toddler
1821.
toe
1822.
together
1823.
toilet
1824.
token
1825.
tomato
1826.
tomorrow
1827.
tone
1828.
tongue
1829.
tonight
1830.
tool
1831.
tooth
1832.
top
1833.
topic
1834.
topple
1835.
torch
1836.
tornado
1837.
tortoise
1838.
toss
1839.
total
1840.
tourist
1841.
toward
1842.
tower
1843.
town
1844.
toy
1845.
track
1846.
trade
1847.
traffic
1848.
tragic
1849.
train
1850.
transfer
1851.
trap
1852.
trash
1853.
travel
1854.
tray
1855.
treat
1856.
tree
1857.
trend
1858.
trial
1859.
tribe
1860.
trick
1861.
trigger
1862.
trim
1863.
trip
1864.
trophy
1865.
trouble
1866.
truck
1867.
true
1868.
truly
1869.
trumpet
1870.
trust
1871.
truth
1872.
try
1873.
tube
1874.
tuition
1875.
tumble
1876.
tuna
1877.
tunnel
1878.
turkey
1879.
turn
1880.
turtle
1881.
twelve
1882.
twenty
1883.
twice
1884.
twin
1885.
twist
1886.
two
1887.
type
1888.
typical
1889.
ugly
1890.
umbrella
1891.
unable
1892.
unaware
1893.
uncle
1894.
uncover
1895.
under
1896.
undo
1897.
unfair
1898.
unfold
1899.
unhappy
1900.
uniform
1901.
unique
1902.
unit
1903.
universe
1904.
unknown
1905.
unlock
1906.
until
1907.
unusual
1908.
unveil
1909.
update
1910.
upgrade
1911.
uphold
1912.
upon
1913.
upper
1914.
upset
1915.
urban
1916.
urge
1917.
usage
1918.
use
1919.
used
1920.
useful
1921.
useless
1922.
usual
1923.
utility
1924.
vacant
1925.
vacuum
1926.
vague
1927.
valid
1928.
valley
1929.
valve
1930.
van
1931.
vanish
1932.
vapor
1933.
various
1934.
vast
1935.
vault
1936.
vehicle
1937.
velvet
1938.
vendor
1939.
venture
1940.
venue
1941.
verb
1942.
verify
1943.
version
1944.
very
1945.
vessel
1946.
veteran
1947.
viable
1948.
vibrant
1949.
vicious
1950.
victory
1951.
video
1952.
view
1953.
village
1954.
vintage
1955.
violin
1956.
virtual
1957.
virus
1958.
visa
1959.
visit
1960.
visual
1961.
vital
1962.
vivid
1963.
vocal
1964.
voice
1965.
void
1966.
volcano
1967.
volume
1968.
vote
1969.
voyage
1970.
wage
1971.
wagon
1972.
wait
1973.
walk
1974.
wall
1975.
walnut
1976.
want
1977.
warfare
1978.
warm
1979.
warrior
1980.
wash
1981.
wasp
1982.
waste
1983.
water
1984.
wave
1985.
way
1986.
wealth
1987.
weapon
1988.
wear
1989.
weasel
1990.
weather
1991.
web
1992.
wedding
1993.
weekend
1994.
weird
1995.
welcome
1996.
west
1997.
wet
1998.
whale
1999.
what
2000.
wheat
2001.
wheel
2002.
when
2003.
where
2004.
whip
2005.
whisper
2006.
wide
2007.
width
2008.
wife
2009.
wild
2010.
will
2011.
win
2012.
window
2013.
wine
2014.
wing
2015.
wink
2016.
winner
2017.
winter
2018.
wire
2019.
wisdom
2020.
wise
2021.
wish
2022.
witness
2023.
wolf
2024.
woman
2025.
wonder
2026.
wood
2027.
wool
2028.
word
2029.
work
2030.
world
2031.
worry
2032.
worth
2033.
wrap
2034.
wreck
2035.
wrestle
2036.
wrist
2037.
write
2038.
wrong
2039.
yard
2040.
year
2041.
yellow
2042.
you
2043.
young
2044.
youth
2045.
zebra
2046.
zero
2047.
zone
2048.
zoo`;function Q3(r){const e=r.split(/\r?\n/).map(l=>l.trim()),i=[];let s=null;for(const l of e)if(l){if(/^\d+\.$/.test(l)){s=parseInt(l.replace(/\.$/,""),10);continue}s!=null&&/^[a-z]+$/.test(l)&&(i.push({id:s,text:l,seed:s-1}),s=null)}return i.sort((l,u)=>l.id-u.id),i}let Ya=null;function K3(){return Ya||(Ya=Q3(G3),Ya.length!==2048&&console.warn(`[words] Expected 2048 seeds from seeds.md, parsed ${Ya.length}`),Ya)}function Y3(r){const e={};for(const i of r){const s=i.text.charAt(0).toLowerCase();s>="a"&&s<="z"&&(e[s]=(e[s]||0)+1)}return e}const kE="ssas-seed-checklist-v1",X3=50;function qd(r){return JSON.parse(JSON.stringify(r))}function W3(r){var i;if(!r||r.nodeType!==1)return!1;const e=(i=r.tagName)==null?void 0:i.toLowerCase();if(e==="textarea"||e==="select")return!0;if(e==="input"){const s=(r.type||"text").toLowerCase();return!(s==="range"||s==="color"||s==="checkbox"||s==="radio"||s==="button"||s==="file"||s==="hidden")}return!!r.isContentEditable}function Z3(){try{const r=localStorage.getItem(kE);if(!r)return[];const e=JSON.parse(r);return Array.isArray(e)?e.filter(i=>Number.isInteger(i)&&i>=1&&i<=2048):[]}catch{return[]}}function o_(r,e,i,s){const l=r.getBoundingClientRect(),u=e.touches?e.touches[0].clientX:e.clientX,d=e.touches?e.touches[0].clientY:e.clientY;return{x:(u-l.left)*(i/l.width),y:(d-l.top)*(s/l.height),screenX:u-l.left,screenY:d-l.top}}function J3(){const r=re.useRef(null),e=re.useRef(null),i=re.useRef(null),s=re.useRef([]),l=re.useRef(null),u=re.useRef(!1),d=re.useRef("light"),p=re.useRef(El),g=re.useRef(2),y=re.useRef("pencil"),E=re.useRef("#000000"),b=re.useRef(2),A=re.useRef(1),k=re.useRef(null),Q=re.useRef(null),K=re.useRef(null),U=re.useRef(null),W=re.useRef(0),J=re.useRef([]),te=re.useRef([]),fe=re.useRef(""),_e=re.useRef(null),[Te,R]=re.useState("light"),[w,C]=re.useState("pencil"),[O,M]=re.useState("#000000"),[V,I]=re.useState(2),[$e,dt]=re.useState(1),[q,ae]=re.useState(uv),[ye,Ge]=re.useState(yw),[Qe,N]=re.useState(El),[X,ie]=re.useState(2),ue=re.useMemo(()=>K3(),[]),[pe,Oe]=re.useState(ue[0]),[Me,Vt]=re.useState(""),[rt,jn]=re.useState(null),[fn,Mi]=re.useState(Z3),[hi,_n]=re.useState(!1),[ki,Vi]=re.useState({visible:!1,text:"",error:!1});k.current=pe,re.useEffect(()=>{try{localStorage.setItem(kE,JSON.stringify([...fn].sort((le,oe)=>le-oe)))}catch{}},[fn]),re.useEffect(()=>{d.current=Te},[Te]),re.useEffect(()=>{p.current=Qe},[Qe]),re.useEffect(()=>{g.current=X},[X]),re.useEffect(()=>{y.current=w},[w]),re.useEffect(()=>{E.current=O},[O]),re.useEffect(()=>{b.current=V},[V]),re.useEffect(()=>{A.current=$e},[$e]);const sn=re.useCallback((le,oe=!1)=>{Vi({visible:!0,text:le,error:oe}),setTimeout(()=>{Vi(Se=>({...Se,visible:!1}))},2e3)},[]),Dn=re.useCallback(()=>{J.current=[],te.current=[]},[]),jt=re.useCallback(()=>{const le=r.current,oe=i.current;if(!le||!oe)return;const Se=Cl/(q||uv),Re=y.current,Le=b.current,he=A.current,He=(Re==="stamp"?Le*2.5:Le)*Se;oe.style.width=`${He}px`,oe.style.height=`${He}px`,oe.style.borderRadius=Re==="stamp"||Re==="eraser"||Re==="marker"?"0px":"50%",oe.style.opacity=Re==="eraser"?"1.0":String(he)},[q]);re.useEffect(()=>{const{auth:le,db:oe,appId:Se}=q3();if(K.current={db:oe,appId:Se},!le){console.warn("Firebase not configured; cloud save disabled.");return}return zS(le).catch(Re=>console.error("Auth failed",Re)),GS(le,Re=>{Q.current=Re})},[]),re.useEffect(()=>{const le=r.current;if(!le)return;le.width=q,le.height=q;const oe=le.getContext("2d",{alpha:!1});let Se=0;const Re=()=>{hw(oe,q,q,{theme:d.current,strokes:s.current,layers:p.current}),Se=requestAnimationFrame(Re)};return Se=requestAnimationFrame(Re),()=>cancelAnimationFrame(Se)},[q]);const $n=re.useCallback(async le=>{const oe=W.current,{db:Se,appId:Re}=K.current||{};if(!Se){s.current=[],Dn(),N([...El]),ie(2),g.current=2,sn("LOCAL MODE (NO FIREBASE)",!1);return}if(!Q.current){U.current&&clearTimeout(U.current),U.current=setTimeout(()=>{U.current=null,$n(le)},500);return}try{const Le=await F3({db:Se,appId:Re,seedId:le});if(oe!==W.current)return;Le?(s.current=Le.strokes,Dn(),N(Le.layers),Le.layers.length>0&&(ie(Le.layers[0].id),g.current=Le.layers[0].id),sn(`LOADED: ${k.current.text.toUpperCase()}`,!1)):(s.current=[],Dn(),N([...El]),ie(2),g.current=2,sn("EMPTY CANVAS",!1))}catch(Le){console.error("Load failed",Le)}},[sn,Dn]);re.useEffect(()=>(W.current+=1,$n(pe.id),()=>{U.current&&(clearTimeout(U.current),U.current=null)}),[pe.id,$n]),re.useEffect(()=>{jt()},[w,V,$e,jt]),re.useEffect(()=>(window.addEventListener("resize",jt),()=>window.removeEventListener("resize",jt)),[jt]),re.useEffect(()=>{const le=()=>{_e.current=null;const he=fe.current;if(fe.current="",!he)return;let He;if(he.length===1)if(he==="0")He=1;else{const Ke=parseInt(he,10);if(!Number.isFinite(Ke))return;He=Ke/10}else{const Ke=Math.min(100,parseInt(he,10));if(!Number.isFinite(Ke))return;He=Ke/100}He=Math.max(pw,Math.min(gw,He)),A.current=He,dt(He),jt()},oe=()=>{if(J.current.length===0){sn("NOTHING TO UNDO",!1);return}te.current.push(qd(s.current)),s.current=J.current.pop(),jt()},Se=()=>{if(te.current.length===0){sn("NOTHING TO REDO",!1);return}J.current.push(qd(s.current)),s.current=te.current.pop(),jt()},Re=he=>{const He=Math.max(Zd,Math.min(r0,b.current+he));b.current=He,I(He),jt()},Le=he=>{if(he.defaultPrevented||W3(he.target))return;const He=he.metaKey||he.ctrlKey,Ke=he.code==="KeyZ"||he.key==="z"||he.key==="Z";if(He&&Ke){he.preventDefault(),he.shiftKey?Se():oe();return}if(he.ctrlKey&&!he.metaKey&&(he.code==="KeyY"||he.key==="y"||he.key==="Y")){he.preventDefault(),Se();return}const Ct=he.shiftKey?5:1;if(he.code==="Minus"||he.code==="NumpadSubtract"||he.code==="BracketLeft"){he.preventDefault(),Re(-Ct);return}if(he.code==="NumpadAdd"||he.code==="BracketRight"||he.code==="Equal"){he.preventDefault(),Re(Ct);return}if(!He&&!he.altKey&&/^[0-9]$/.test(he.key)){if(he.preventDefault(),fe.current.length>=3)return;fe.current+=he.key,_e.current&&clearTimeout(_e.current),_e.current=setTimeout(le,420)}};return window.addEventListener("keydown",Le,!0),()=>{window.removeEventListener("keydown",Le,!0),_e.current&&clearTimeout(_e.current),_e.current=null,fe.current=""}},[jt,sn]),re.useEffect(()=>{const le=r.current,oe=i.current;if(!le||!oe)return;const Se=Ke=>{const Ct=p.current.find(ti=>ti.id===g.current);if(!Ct||!Ct.visible)return;le.focus({preventScroll:!0}),J.current.push(qd(s.current)),J.current.length>X3&&J.current.shift(),te.current=[],u.current=!0;const dn=o_(le,Ke,q,q),Nn={type:y.current,points:[dn],color:E.current,size:b.current,opacity:A.current,seed:k.current.seed,layerId:g.current,sprayOffsets:[]};Nn.type==="spray"&&Nn.sprayOffsets.push(lv(b.current)),l.current=Nn,s.current.push(Nn),Ke.cancelable&&Ke.preventDefault()},Re=Ke=>{const Ct=o_(le,Ke,q,q);if(oe.style.display="block",oe.style.left=`${Ct.screenX}px`,oe.style.top=`${Ct.screenY}px`,oe.style.transform="translate(-50%, -50%)",!u.current)return;const dn=l.current;if(!dn)return;const Nn=dn.points[dn.points.length-1];Math.hypot(Ct.x-Nn.x,Ct.y-Nn.y)>.25&&(dn.points.push(Ct),dn.type==="spray"&&dn.sprayOffsets.push(lv(b.current))),Ke.cancelable&&Ke.preventDefault()},Le=()=>{u.current=!1,l.current=null},he=()=>{oe.style.display="none"},He=()=>{oe.style.display="block"};return le.addEventListener("mouseleave",he),le.addEventListener("mouseenter",He),le.addEventListener("mousedown",Se),window.addEventListener("mousemove",Re),window.addEventListener("mouseup",Le),le.addEventListener("touchstart",Se),window.addEventListener("touchmove",Re),window.addEventListener("touchend",Le),()=>{le.removeEventListener("mouseleave",he),le.removeEventListener("mouseenter",He),le.removeEventListener("mousedown",Se),window.removeEventListener("mousemove",Re),window.removeEventListener("mouseup",Le),le.removeEventListener("touchstart",Se),window.removeEventListener("touchmove",Re),window.removeEventListener("touchend",Le)}},[q]);const gr=re.useCallback(async()=>{const{db:le,appId:oe}=K.current||{};if(!Q.current||!le){sn("WAITING FOR AUTH OR NO FIREBASE...",!0);return}sn("SAVING...",!1);try{await H3({db:le,appId:oe,seedId:pe.id,strokes:s.current,layers:p.current}),sn(`SAVED: ${pe.text.toUpperCase()}`,!1)}catch(Se){console.error(Se),sn("SAVE FAILED",!0)}},[pe,sn]),_o=re.useCallback(()=>{confirm("Wipe ALL layers?")&&(s.current=[],Dn())},[Dn]),Ss=re.useCallback(le=>{if(le===q)return;const oe=le;confirm(`Switch to ${oe}×${oe}? This will clear all strokes.`)&&(s.current=[],Dn(),N([...El]),ie(2),g.current=2,I(Math.max(Zd,Math.round(b.current*(le/q)))),ae(le))},[q,Dn]),Lt=re.useCallback(()=>{const le=r.current;if(!le)return;const oe=document.createElement("a");oe.download=`art-${pe.text}.png`,oe.href=le.toDataURL(),oe.click()},[pe.text]),la=re.useCallback(()=>{if(hi)return;const le=r.current;if(!le)return;const oe=le.getContext("2d");if(!oe)return;_n(!0);const Se=new aw({workers:2,quality:10,width:q,height:q,workerScript:ow});let Re=0;const Le=()=>{Re<12?(Se.addFrame(oe,{copy:!0,delay:100}),Re++,setTimeout(Le,100)):(Se.on("finished",he=>{const He=URL.createObjectURL(he),Ke=document.createElement("a");Ke.href=He,Ke.download=`wiggle-${pe.text}.gif`,Ke.click(),_n(!1)}),Se.render())};Le()},[q,pe.text,hi]),Tt=re.useCallback(()=>{R(le=>{const oe=le==="dark"?"light":"dark";return M(Se=>oe==="light"&&Se==="#FFFFFF"?"#000000":oe==="dark"&&Se==="#000000"?"#FFFFFF":Se),oe})},[]),Rt=re.useCallback(()=>{N(le=>{const oe=Math.max(...le.map(Re=>Re.id),0)+1,Se={id:oe,name:`Layer ${oe}`,visible:!0,locked:!1};return ie(oe),g.current=oe,[...le,Se]})},[]),ei=re.useCallback(le=>{ie(le),g.current=le},[]),ua=re.useCallback(le=>{N(oe=>oe.map(Se=>Se.id===le?{...Se,visible:!Se.visible}:Se))},[]),As=re.useCallback(le=>{N(oe=>{var Le;if(oe.length<=1)return oe;const Se=oe.find(he=>he.id===le);if(!Se||!confirm(`Delete ${Se.name}?`))return oe;s.current=s.current.filter(he=>he.layerId!==le);const Re=oe.filter(he=>he.id!==le);if(g.current===le){const he=((Le=Re[0])==null?void 0:Le.id)??1;ie(he),g.current=he}return Re})},[]),Eo=re.useCallback((le,oe)=>{N(Se=>Se.map(Re=>Re.id===le?{...Re,name:oe}:Re))},[]),Li=re.useCallback(le=>{Oe(le)},[]),fi=re.useCallback((le,oe)=>{var Se,Re;(Se=oe==null?void 0:oe.stopPropagation)==null||Se.call(oe),(Re=oe==null?void 0:oe.preventDefault)==null||Re.call(oe),Mi(Le=>{const he=new Set(Le);return he.has(le)?he.delete(le):he.add(le),[...he].sort((He,Ke)=>He-Ke)})},[]),Bt=re.useMemo(()=>Y3(ue),[ue]),En=re.useMemo(()=>{const le=Me.toLowerCase().trim();return ue.filter(oe=>!(rt&&oe.text.charAt(0).toLowerCase()!==rt||le&&!oe.text.includes(le)))},[ue,Me,rt]),Yt=re.useMemo(()=>({done:fn.length,total:ue.length}),[fn.length,ue.length]);return{theme:Te,toggleTheme:Tt,canvasRef:r,canvasContainerRef:e,brushPreviewRef:i,currentTool:w,setCurrentTool:C,paintColor:O,setPaintColor:M,brushSize:V,setBrushSize:I,brushOpacity:$e,setBrushOpacity:dt,layers:Qe,activeLayerId:X,addLayer:Rt,selectLayer:ei,toggleLayerVisible:ua,deleteLayer:As,renameLayer:Eo,wordFilter:Me,setWordFilter:Vt,letterFilter:rt,setLetterFilter:jn,letterCounts:Bt,filteredWords:En,currentWord:pe,selectWord:Li,checkedIds:fn,toggleWordChecked:fi,checklistProgress:Yt,status:ki,isRecording:hi,saveArt:gr,clearCanvas:_o,exportPng:Lt,recordWiggle:la,updateBrushPreview:jt,canvasSize:q,changeCanvasSize:Ss,rightDrawerWidth:ye,setRightDrawerWidth:Ge}}function $3({canvasRef:r,containerRef:e,brushPreviewRef:i,isRecording:s,status:l,canvasSize:u,onChangeCanvasSize:d,paintColor:p,onPaintColorChange:g}){const y=Math.round(Cl/u);return H.jsxs("section",{className:"relative flex flex-1 flex-col items-center justify-center overflow-auto bg-theme-canvas p-6 gap-4",children:[H.jsxs("div",{ref:e,className:"relative",onPointerDown:()=>{var E;(E=r.current)==null||E.focus({preventScroll:!0})},children:[H.jsx("div",{className:"studio-overlay studio-overlay--rec recording",style:{display:s?"block":"none"},children:"REC • CAPTURING..."}),H.jsx("div",{className:"studio-overlay studio-overlay--status",style:{display:l.visible?"block":"none",background:l.error?"#ef4444":"#22c55e"},children:l.text}),H.jsx("div",{ref:i,className:"brush-preview"}),H.jsx("canvas",{ref:r,id:"mainCanvas",tabIndex:0,"aria-label":"Drawing canvas",className:"bitmap-canvas",style:{width:Cl,height:Cl}})]}),H.jsxs("div",{className:"canvas-bar flex max-w-full flex-wrap items-end justify-center gap-6 px-2",children:[H.jsxs("div",{className:"flex flex-col items-center gap-2",children:[H.jsx("span",{className:"text-[10px] font-bold uppercase tracking-widest opacity-50",children:"Canvas"}),H.jsx("div",{className:"flex flex-wrap justify-center gap-1",children:mw.map(({label:E,size:b})=>H.jsx("button",{type:"button",onClick:()=>d(b),className:`canvas-size-btn ${u===b?"canvas-size-btn--active":""}`,title:`${b}×${b} px`,children:E},b))}),H.jsxs("span",{className:"text-[10px] uppercase tracking-widest opacity-40",children:[u,"×",u,"px · ",y,"× zoom"]})]}),H.jsx("div",{className:"border-l-theme hidden h-14 w-px shrink-0 sm:block","aria-hidden":!0}),H.jsxs("div",{className:"flex flex-col items-center gap-2",children:[H.jsx("span",{className:"text-[10px] font-bold uppercase tracking-widest opacity-50",children:"Color"}),H.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-2",children:[H.jsxs("div",{className:"group relative",children:[H.jsx("input",{type:"color",value:p,onChange:E=>g(E.target.value),className:"absolute inset-0 cursor-pointer opacity-0","aria-label":"Pick color"}),H.jsx("div",{className:"h-11 w-11 cursor-pointer border-2 border-[var(--border-color)] shadow-inner",style:{backgroundColor:p},title:"Custom color"})]}),H.jsx("div",{className:"grid grid-cols-3 gap-1",children:_w.map(E=>H.jsx("button",{type:"button",className:"swatch h-5 w-5",style:{background:E},"aria-label":`Color ${E}`,onClick:()=>g(E)},E))})]})]})]})]})}function e6({seed:r}){const e=re.useRef(null);return re.useEffect(()=>{const i=e.current;if(!i)return;const s=i.getContext("2d");if(!s)return;s.clearRect(0,0,8,8);let l=r*12345;for(let u=0;u<8;u++)for(let d=0;d<8;d++)l=l*16807%2147483647,s.fillStyle=l%5>2?"#fff":"#000",s.fillRect(d,u,1,1)},[r]),H.jsx("canvas",{ref:e,width:8,height:8,className:"pixel-icon"})}const t6="abcdefghijklmnopqrstuvwxyz".split("");function n6({filter:r,onFilterChange:e,words:i,currentWord:s,onSelectWord:l,letterFilter:u,onLetterFilterChange:d,letterCounts:p,checkedIds:g,onToggleWordChecked:y,checklistProgress:E}){const b=re.useMemo(()=>new Set(g),[g]);return H.jsxs("div",{className:"flex min-h-0 flex-1 flex-col overflow-hidden",children:[H.jsxs("div",{className:"border-b-theme bg-theme-primary p-4",children:[H.jsx("input",{type:"text",value:r,onChange:A=>e(A.target.value),placeholder:"SEARCH 2048 SEEDS...",className:"w-full border-theme bg-theme-secondary px-3 py-2 text-xl uppercase placeholder:opacity-30 transition-all focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"}),H.jsxs("div",{className:"mt-2 flex items-center justify-between text-sm uppercase opacity-80",children:[H.jsx("span",{children:"Checklist"}),H.jsxs("span",{className:"font-bold text-accent",children:[E.done,"/",E.total]})]})]}),H.jsx("div",{className:"scroll-container min-h-0 flex-1 space-y-1 overflow-y-auto p-2",children:i.length===0?H.jsx("p",{className:"text-theme-secondary px-2 py-4 text-center text-lg uppercase",children:"No seeds match"}):i.map(A=>H.jsxs("div",{role:"button",tabIndex:0,onClick:()=>l(A),onKeyDown:k=>{(k.key==="Enter"||k.key===" ")&&(k.preventDefault(),l(A))},className:`word-item flex w-full cursor-pointer items-center gap-2 rounded border-theme p-2 text-left ${s.id===A.id?"selected":""}`,children:[H.jsx("input",{type:"checkbox",checked:b.has(A.id),onChange:k=>y(A.id,k),onClick:k=>k.stopPropagation(),className:"seed-checkbox h-4 w-4 shrink-0 cursor-pointer accent-[var(--accent)]","aria-label":`Mark ${A.text} done`}),H.jsx("span",{className:"w-9 shrink-0 text-sm opacity-40",children:String(A.id).padStart(4,"0")}),H.jsx(e6,{seed:A.seed}),H.jsx("span",{className:"min-w-0 flex-1 text-lg font-bold uppercase tracking-wide",children:A.text})]},A.id))}),H.jsxs("div",{className:"border-t-theme bg-theme-primary px-2 py-2",children:[H.jsx("p",{className:"mb-1 text-center text-[10px] uppercase tracking-widest opacity-60",children:"By letter"}),H.jsxs("div",{className:"seed-letter-strip scroll-container flex flex-nowrap gap-1 overflow-x-auto overflow-y-hidden pb-1",children:[H.jsx("button",{type:"button",onClick:()=>d(null),className:`seed-letter-btn shrink-0 ${u===null?"seed-letter-btn--active":""}`,children:"All"}),t6.map(A=>{const k=p[A]??0,Q=u===A;return H.jsx("button",{type:"button",disabled:k===0,title:`${k} seed${k===1?"":"s"}`,onClick:()=>d(Q?null:A),className:`seed-letter-btn shrink-0 ${Q?"seed-letter-btn--active":""} ${k===0?"seed-letter-btn--empty":""}`,children:A.toUpperCase()},A)})]})]}),H.jsx("div",{className:"border-t-theme bg-theme-primary p-4",children:H.jsxs("div",{className:"text-lg uppercase",children:["Active seed:"," ",H.jsx("span",{className:"text-accent font-bold",children:s.text.toUpperCase()})]})})]})}function i6(r){const{drawerWidth:e,onDrawerWidthChange:i,wordFilter:s,onWordFilterChange:l,letterFilter:u,onLetterFilterChange:d,letterCounts:p,filteredWords:g,currentWord:y,onSelectWord:E,checkedIds:b,onToggleWordChecked:A,checklistProgress:k}=r,Q=re.useRef(null),K=re.useCallback(U=>{if(U.button!==0)return;U.preventDefault();const W=U.clientX,J=e,te=Math.min(vw,Math.floor(window.innerWidth*.55));Q.current={startX:W,startW:J,capMax:te};const fe=Te=>{const R=Q.current;if(!R)return;const w=Te.clientX-R.startX,C=Math.min(R.capMax,Math.max(cv,R.startW+w));i(C)},_e=()=>{Q.current=null,window.removeEventListener("pointermove",fe),window.removeEventListener("pointerup",_e),window.removeEventListener("pointercancel",_e)};window.addEventListener("pointermove",fe),window.addEventListener("pointerup",_e),window.addEventListener("pointercancel",_e)},[e,i]);return H.jsxs(H.Fragment,{children:[H.jsx("div",{className:"side-panel-resizer shrink-0",onPointerDown:K,role:"separator","aria-orientation":"vertical","aria-label":"Resize word panel",title:"Drag to resize"}),H.jsx("aside",{className:"side-panel-drawer flex min-h-0 shrink-0 flex-col border-l-theme bg-theme-secondary",style:{width:e,minWidth:cv},children:H.jsx(n6,{filter:s,onFilterChange:l,words:g,currentWord:y,onSelectWord:E,letterFilter:u,onLetterFilterChange:d,letterCounts:p,checkedIds:b,onToggleWordChecked:A,checklistProgress:k})})]})}function r6(r){return H.jsx("svg",{viewBox:"0 0 24 24",width:"20",height:"20",stroke:"currentColor",fill:"none",strokeWidth:"2",...r,children:H.jsx("path",{d:"M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"})})}function s6(r){return H.jsxs("svg",{viewBox:"0 0 24 24",width:"20",height:"20",stroke:"currentColor",fill:"none",strokeWidth:"2",...r,children:[H.jsx("path",{d:"M21 7V3h-4l-3 3-9 9-2 5 5-2 9-9 3-3z"}),H.jsx("path",{d:"M16 5l3 3"})]})}function a6(r){return H.jsxs("svg",{viewBox:"0 0 24 24",width:"20",height:"20",stroke:"currentColor",fill:"none",strokeWidth:"2",...r,children:[H.jsx("path",{d:"M12 19l7-7 3 3-7 7-3-3z"}),H.jsx("path",{d:"M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"})]})}function o6(r){return H.jsxs("svg",{viewBox:"0 0 24 24",width:"20",height:"20",stroke:"currentColor",fill:"none",strokeWidth:"2",...r,children:[H.jsx("circle",{cx:"12",cy:"12",r:"2"}),H.jsx("circle",{cx:"8",cy:"8",r:"1"}),H.jsx("circle",{cx:"16",cy:"16",r:"1"}),H.jsx("circle",{cx:"16",cy:"8",r:"1"}),H.jsx("circle",{cx:"8",cy:"16",r:"1"})]})}function l6(r){return H.jsxs("svg",{viewBox:"0 0 24 24",width:"20",height:"20",stroke:"currentColor",fill:"none",strokeWidth:"2",...r,children:[H.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),H.jsx("circle",{cx:"12",cy:"12",r:"3"})]})}function u6(r){return H.jsxs("svg",{viewBox:"0 0 24 24",width:"20",height:"20",stroke:"currentColor",fill:"none",strokeWidth:"2",...r,children:[H.jsx("path",{d:"M20 20H7L3 16C2 15 2 13 3 12L13 2L22 11L20 20Z"}),H.jsx("path",{d:"M18 11L7 22"})]})}function c6(r){return H.jsxs("svg",{viewBox:"0 0 24 24",width:"20",height:"20",stroke:"currentColor",fill:"none",strokeWidth:"2",...r,children:[H.jsx("circle",{cx:"12",cy:"12",r:"5"}),H.jsx("path",{d:"M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"})]})}function h6({onToggleTheme:r,onClear:e,onSaveCloud:i,onRecord:s,onDownloadPng:l}){return H.jsxs("header",{className:"border-b-theme z-10 flex items-center justify-between bg-theme-primary p-4",children:[H.jsx("div",{className:"flex items-center gap-4",children:H.jsxs("h1",{className:"text-3xl font-bold uppercase tracking-tight",children:["Super Serious Art Studio"," ",H.jsx("span",{className:"text-sm opacity-50",children:"PRO BITMAP"})]})}),H.jsxs("div",{className:"flex items-center gap-4",children:[H.jsx("button",{type:"button",onClick:r,className:"border-theme bg-white p-2 text-black transition-colors hover:bg-zinc-100","aria-label":"Toggle theme",children:H.jsx(c6,{})}),H.jsx("div",{className:"mx-2 h-8 w-px bg-black/20"}),H.jsx("button",{type:"button",onClick:e,className:"border-theme bg-white px-4 py-1 uppercase transition-all hover:invert",children:"Reset"}),H.jsx("button",{type:"button",onClick:i,className:"border-theme bg-accent px-4 py-1 font-bold uppercase text-white transition-all hover:opacity-80",children:"Save Art"}),H.jsxs("button",{type:"button",onClick:s,className:"flex items-center gap-2 border-theme bg-red-600 px-4 py-1 font-bold uppercase text-white transition-colors hover:bg-red-700",children:[H.jsx("span",{className:"h-2 w-2 animate-ping rounded-full bg-white"}),"Record Wiggle"]}),H.jsx("button",{type:"button",onClick:l,className:"border-theme bg-black px-4 py-1 font-bold uppercase text-white transition-all hover:invert",children:"Export PNG"})]})]})}function l_({layers:r,activeLayerId:e,onSelectLayer:i,onToggleVisible:s,onDeleteLayer:l,onRenameLayer:u,onAddLayer:d,horizontal:p=!1}){const g=[...r].reverse();return p?H.jsxs("div",{className:"flex items-center gap-1 px-1",children:[H.jsx("span",{className:"text-[9px] font-bold uppercase tracking-widest opacity-40 shrink-0",children:"Ly"}),g.map(y=>{const E=e===y.id,b=r.length>1;return H.jsxs("div",{className:`layer-chip flex items-stretch ${E?"layer-chip--active":""}`,children:[H.jsx("button",{type:"button",title:`${y.name} — click to select, dbl-click rename`,onClick:()=>i(y.id),onDoubleClick:A=>{A.preventDefault();const k=prompt("Layer name:",y.name);k!=null&&k.trim()&&u(y.id,k.trim())},className:"layer-chip-sel",children:y.name.length>5?y.name.slice(0,5)+"…":y.name}),H.jsx("button",{type:"button",className:"layer-chip-aux",title:y.visible?"Hide layer":"Show layer",onClick:A=>{A.stopPropagation(),s(y.id)},children:y.visible?"👁":"—"}),b&&H.jsx("button",{type:"button",className:"layer-chip-aux layer-chip-del",title:"Delete layer",onClick:A=>{A.stopPropagation(),l(y.id)},children:"×"})]},y.id)}),H.jsx("button",{type:"button",onClick:d,className:"tool-btn flex h-7 w-7 items-center justify-center text-xs font-bold shrink-0",title:"New layer",children:"+"})]}):H.jsxs("div",{className:"flex flex-col items-center gap-1 w-full px-1",children:[H.jsx("span",{className:"text-[9px] font-bold uppercase tracking-widest opacity-40",children:"Layers"}),g.map(y=>{const E=e===y.id,b=r.length>1;return H.jsxs("div",{className:`layer-chip layer-chip-v flex items-stretch w-full ${E?"layer-chip--active":""}`,children:[H.jsx("button",{type:"button",title:`${y.name} — click to select, dbl-click rename`,onClick:()=>i(y.id),onDoubleClick:A=>{A.preventDefault();const k=prompt("Layer name:",y.name);k!=null&&k.trim()&&u(y.id,k.trim())},className:"layer-chip-sel flex-1 text-left truncate",children:y.name}),H.jsx("button",{type:"button",className:"layer-chip-aux",title:y.visible?"Hide layer":"Show layer",onClick:A=>{A.stopPropagation(),s(y.id)},children:y.visible?"👁":"—"}),b&&H.jsx("button",{type:"button",className:"layer-chip-aux layer-chip-del",title:"Delete layer",onClick:A=>{A.stopPropagation(),l(y.id)},children:"×"})]},y.id)}),H.jsx("button",{type:"button",onClick:d,className:"tool-btn flex h-6 w-full items-center justify-center text-xs font-bold",title:"New layer",children:"+ Layer"})]})}const ro=Zd,ah=r0,VE=2.35,ip=1e3,u_=[{id:"pencil",label:"Pen",Icon:r6},{id:"marker",label:"Mkr",Icon:s6},{id:"wiggle",label:"Wgl",Icon:a6},{id:"spray",label:"Spr",Icon:o6},{id:"stamp",label:"Stp",Icon:l6},{id:"eraser",label:"Ers",Icon:u6}];function LE(r,e,i){return Math.min(i,Math.max(e,Math.round(r)))}function f6(r){const e=(LE(r,ro,ah)-ro)/(ah-ro);return Math.round(Math.pow(Math.max(0,Math.min(1,e)),1/VE)*ip)}function d6(r){const e=Math.max(0,Math.min(1,Number(r)/ip));return LE(ro+(ah-ro)*Math.pow(e,VE),ro,ah)}function c_({brushSize:r,onBrushSizeChange:e,previewPx:i}){return H.jsxs("div",{className:"brush-size-block flex flex-col items-center gap-1",children:[H.jsx("div",{className:"brush-size-handle",title:"Matches stroke on canvas",children:H.jsx("div",{className:"brush-size-dot",style:{width:i,height:i}})}),H.jsx("input",{type:"range",className:"brush-size-range",min:0,max:ip,step:1,value:f6(r),onChange:s=>e(d6(s.target.value)),"aria-label":"Brush size"}),H.jsxs("span",{className:"text-sm font-bold tabular-nums leading-none",children:[r,"px"]})]})}function m6({currentTool:r,onToolChange:e,brushSize:i,onBrushSizeChange:s,brushOpacity:l,onBrushOpacityChange:u,layers:d,activeLayerId:p,onSelectLayer:g,onToggleLayerVisible:y,onDeleteLayer:E,onRenameLayer:b,onAddLayer:A,canvasSize:k}){const Q=re.useRef(null),[K,U]=re.useState({x:12,y:80}),[W,J]=re.useState(!0),te=re.useRef(K);re.useEffect(()=>{te.current=K},[K]);const fe=re.useCallback(R=>{if(W)return;R.preventDefault();const w=(R.touches?R.touches[0].clientX:R.clientX)-te.current.x,C=(R.touches?R.touches[0].clientY:R.clientY)-te.current.y,O=V=>{const I=V.touches?V.touches[0].clientX:V.clientX,$e=V.touches?V.touches[0].clientY:V.clientY;U({x:I-w,y:$e-C})},M=()=>{window.removeEventListener("mousemove",O),window.removeEventListener("mouseup",M),window.removeEventListener("touchmove",O),window.removeEventListener("touchend",M)};window.addEventListener("mousemove",O),window.addEventListener("mouseup",M),window.addEventListener("touchmove",O),window.addEventListener("touchend",M)},[W]),_e=Cl/(k||64),Te=Math.max(4,Math.min(56,i*_e));return W?H.jsxs("aside",{className:"toolbar-docked scroll-container flex flex-col items-center gap-2 overflow-y-auto py-3",children:[H.jsx("button",{type:"button",className:"toolbar-dock-btn",title:"Undock — float toolbar",onClick:()=>J(!1),children:"⇱"}),H.jsx("div",{className:"toolbar-sep-h"}),u_.map(({id:R,label:w,Icon:C})=>H.jsx("button",{type:"button",title:w,onClick:()=>e(R),className:`tool-btn flex h-10 w-10 items-center justify-center rounded-sm ${r===R?"active":""}`,children:H.jsx(C,{})},R)),H.jsx("div",{className:"toolbar-sep-h"}),H.jsx(c_,{brushSize:i,onBrushSizeChange:s,previewPx:Te}),H.jsx("div",{className:"toolbar-sep-h"}),H.jsxs("div",{className:"flex flex-col items-center gap-1",children:[H.jsx("label",{className:"text-[9px] uppercase opacity-50",children:"Op"}),H.jsx("input",{type:"range",min:.1,max:1,step:.05,value:l,onChange:R=>u(Number(R.target.value)),className:"toolbar-v-slider",orient:"vertical"}),H.jsxs("span",{className:"text-[11px] font-bold tabular-nums",children:[Math.round(l*100),"%"]})]}),H.jsx("div",{className:"toolbar-sep-h"}),H.jsx(l_,{layers:d,activeLayerId:p,onSelectLayer:g,onToggleVisible:y,onDeleteLayer:E,onRenameLayer:b,onAddLayer:A})]}):H.jsxs("div",{ref:Q,className:"toolbar-float",style:{left:K.x,top:K.y},children:[H.jsx("div",{className:"toolbar-grip",onMouseDown:fe,onTouchStart:fe,children:H.jsx("span",{className:"toolbar-grip-dots",children:"⠿"})}),H.jsx("button",{type:"button",className:"toolbar-dock-btn",title:"Dock to left side",onClick:()=>J(!0),children:"⇲"}),H.jsx("div",{className:"toolbar-divider"}),H.jsx("div",{className:"flex gap-1",children:u_.map(({id:R,label:w,Icon:C})=>H.jsx("button",{type:"button",title:w,onClick:()=>e(R),className:`tool-btn flex h-10 w-10 items-center justify-center rounded-sm ${r===R?"active":""}`,children:H.jsx(C,{})},R))}),H.jsx("div",{className:"toolbar-divider"}),H.jsx(c_,{brushSize:i,onBrushSizeChange:s,previewPx:Te}),H.jsx("div",{className:"toolbar-divider"}),H.jsxs("div",{className:"flex items-center gap-2 px-1",children:[H.jsx("label",{className:"text-[10px] uppercase opacity-60",children:"Op"}),H.jsx("input",{type:"range",min:.1,max:1,step:.05,value:l,onChange:R=>u(Number(R.target.value)),className:"w-16"}),H.jsxs("span",{className:"text-sm font-bold tabular-nums",children:[Math.round(l*100),"%"]})]}),H.jsx("div",{className:"toolbar-divider"}),H.jsx(l_,{layers:d,activeLayerId:p,onSelectLayer:g,onToggleVisible:y,onDeleteLayer:E,onRenameLayer:b,onAddLayer:A,horizontal:!0})]})}function p6(){const r=J3();return H.jsxs("div",{className:"flex h-screen flex-col","data-theme":r.theme,children:[H.jsx(h6,{onToggleTheme:r.toggleTheme,onClear:r.clearCanvas,onSaveCloud:r.saveArt,onRecord:r.recordWiggle,onDownloadPng:r.exportPng}),H.jsxs("main",{className:"flex flex-1 overflow-hidden",children:[H.jsx(m6,{currentTool:r.currentTool,onToolChange:e=>{r.setCurrentTool(e),r.updateBrushPreview()},brushSize:r.brushSize,onBrushSizeChange:e=>{r.setBrushSize(e),r.updateBrushPreview()},brushOpacity:r.brushOpacity,onBrushOpacityChange:e=>{r.setBrushOpacity(e),r.updateBrushPreview()},layers:r.layers,activeLayerId:r.activeLayerId,onSelectLayer:r.selectLayer,onToggleLayerVisible:r.toggleLayerVisible,onDeleteLayer:r.deleteLayer,onRenameLayer:r.renameLayer,onAddLayer:r.addLayer,canvasSize:r.canvasSize}),H.jsx($3,{canvasRef:r.canvasRef,containerRef:r.canvasContainerRef,brushPreviewRef:r.brushPreviewRef,isRecording:r.isRecording,status:r.status,canvasSize:r.canvasSize,onChangeCanvasSize:r.changeCanvasSize,paintColor:r.paintColor,onPaintColorChange:r.setPaintColor}),H.jsx(i6,{drawerWidth:r.rightDrawerWidth,onDrawerWidthChange:r.setRightDrawerWidth,wordFilter:r.wordFilter,onWordFilterChange:r.setWordFilter,letterFilter:r.letterFilter,onLetterFilterChange:r.setLetterFilter,letterCounts:r.letterCounts,filteredWords:r.filteredWords,currentWord:r.currentWord,onSelectWord:r.selectWord,checkedIds:r.checkedIds,onToggleWordChecked:r.toggleWordChecked,checklistProgress:r.checklistProgress})]})]})}Eb.createRoot(document.getElementById("root")).render(H.jsx(re.StrictMode,{children:H.jsx(p6,{})}));
