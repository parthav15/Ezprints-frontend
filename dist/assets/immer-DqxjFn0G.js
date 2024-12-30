var j=Symbol.for("immer-nothing"),T=Symbol.for("immer-draftable"),s=Symbol.for("immer-state");function a(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var h=Object.getPrototypeOf;function p(e){return!!e&&!!e[s]}function y(e){var t;return e?B(e)||Array.isArray(e)||!!e[T]||!!((t=e.constructor)!=null&&t[T])||F(e)||O(e):!1}var Q=Object.prototype.constructor.toString();function B(e){if(!e||typeof e!="object")return!1;const t=h(e);if(t===null)return!0;const r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object?!0:typeof r=="function"&&Function.toString.call(r)===Q}function w(e,t){g(e)===0?Reflect.ownKeys(e).forEach(r=>{t(r,e[r],e)}):e.forEach((r,n)=>t(n,r,e))}function g(e){const t=e[s];return t?t.type_:Array.isArray(e)?1:F(e)?2:O(e)?3:0}function C(e,t){return g(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function G(e,t,r){const n=g(e);n===2?e.set(t,r):n===3?e.add(r):e[t]=r}function Y(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}function F(e){return e instanceof Map}function O(e){return e instanceof Set}function _(e){return e.copy_||e.base_}function k(e,t){if(F(e))return new Map(e);if(O(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const r=B(e);if(t===!0||t==="class_only"&&!r){const n=Object.getOwnPropertyDescriptors(e);delete n[s];let i=Reflect.ownKeys(n);for(let o=0;o<i.length;o++){const f=i[o],c=n[f];c.writable===!1&&(c.writable=!0,c.configurable=!0),(c.get||c.set)&&(n[f]={configurable:!0,writable:!0,enumerable:c.enumerable,value:e[f]})}return Object.create(h(e),n)}else{const n=h(e);if(n!==null&&r)return{...e};const i=Object.create(n);return Object.assign(i,e)}}function N(e,t=!1){return A(e)||p(e)||!y(e)||(g(e)>1&&(e.set=e.add=e.clear=e.delete=Z),Object.freeze(e),t&&Object.entries(e).forEach(([r,n])=>N(n,!0))),e}function Z(){a(2)}function A(e){return Object.isFrozen(e)}var L={};function d(e){const t=L[e];return t||a(0,e),t}var m;function H(){return m}function V(e,t){return{drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function x(e,t){t&&(d("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function v(e){E(e),e.drafts_.forEach(ee),e.drafts_=null}function E(e){e===m&&(m=e.parent_)}function K(e){return m=V(m,e)}function ee(e){const t=e[s];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function W(e,t){t.unfinalizedDrafts_=t.drafts_.length;const r=t.drafts_[0];return e!==void 0&&e!==r?(r[s].modified_&&(v(t),a(4)),y(e)&&(e=z(t,e),t.parent_||S(t,e)),t.patches_&&d("Patches").generateReplacementPatches_(r[s].base_,e,t.patches_,t.inversePatches_)):e=z(t,r,[]),v(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==j?e:void 0}function z(e,t,r){if(A(t))return t;const n=t[s];if(!n)return w(t,(i,o)=>U(e,n,t,i,o,r)),t;if(n.scope_!==e)return t;if(!n.modified_)return S(e,n.base_,!0),n.base_;if(!n.finalized_){n.finalized_=!0,n.scope_.unfinalizedDrafts_--;const i=n.copy_;let o=i,f=!1;n.type_===3&&(o=new Set(i),i.clear(),f=!0),w(o,(c,l)=>U(e,n,i,c,l,r,f)),S(e,i,!1),r&&e.patches_&&d("Patches").generatePatches_(n,r,e.patches_,e.inversePatches_)}return n.copy_}function U(e,t,r,n,i,o,f){if(p(i)){const c=o&&t&&t.type_!==3&&!C(t.assigned_,n)?o.concat(n):void 0,l=z(e,i,c);if(G(r,n,l),p(l))e.canAutoFreeze_=!1;else return}else f&&r.add(i);if(y(i)&&!A(i)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;z(e,i),(!t||!t.scope_.parent_)&&typeof n!="symbol"&&Object.prototype.propertyIsEnumerable.call(r,n)&&S(e,i)}}function S(e,t,r=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&N(t,r)}function te(e,t){const r=Array.isArray(e),n={type_:r?1:0,scope_:t?t.scope_:H(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=n,o=I;r&&(i=[n],o=P);const{revoke:f,proxy:c}=Proxy.revocable(i,o);return n.draft_=c,n.revoke_=f,c}var I={get(e,t){if(t===s)return e;const r=_(e);if(!C(r,t))return re(e,r,t);const n=r[t];return e.finalized_||!y(n)?n:n===D(e.base_,t)?(b(e),e.copy_[t]=M(n,e)):n},has(e,t){return t in _(e)},ownKeys(e){return Reflect.ownKeys(_(e))},set(e,t,r){const n=X(_(e),t);if(n!=null&&n.set)return n.set.call(e.draft_,r),!0;if(!e.modified_){const i=D(_(e),t),o=i==null?void 0:i[s];if(o&&o.base_===r)return e.copy_[t]=r,e.assigned_[t]=!1,!0;if(Y(r,i)&&(r!==void 0||C(e.base_,t)))return!0;b(e),R(e)}return e.copy_[t]===r&&(r!==void 0||t in e.copy_)||Number.isNaN(r)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=r,e.assigned_[t]=!0),!0},deleteProperty(e,t){return D(e.base_,t)!==void 0||t in e.base_?(e.assigned_[t]=!1,b(e),R(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const r=_(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n&&{writable:!0,configurable:e.type_!==1||t!=="length",enumerable:n.enumerable,value:r[t]}},defineProperty(){a(11)},getPrototypeOf(e){return h(e.base_)},setPrototypeOf(){a(12)}},P={};w(I,(e,t)=>{P[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}});P.deleteProperty=function(e,t){return P.set.call(this,e,t,void 0)};P.set=function(e,t,r){return I.set.call(this,e[0],t,r,e[0])};function D(e,t){const r=e[s];return(r?_(r):e)[t]}function re(e,t,r){var i;const n=X(t,r);return n?"value"in n?n.value:(i=n.get)==null?void 0:i.call(e.draft_):void 0}function X(e,t){if(!(t in e))return;let r=h(e);for(;r;){const n=Object.getOwnPropertyDescriptor(r,t);if(n)return n;r=h(r)}}function R(e){e.modified_||(e.modified_=!0,e.parent_&&R(e.parent_))}function b(e){e.copy_||(e.copy_=k(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var ne=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(t,r,n)=>{if(typeof t=="function"&&typeof r!="function"){const o=r;r=t;const f=this;return function(l=o,...q){return f.produce(l,J=>r.call(this,J,...q))}}typeof r!="function"&&a(6),n!==void 0&&typeof n!="function"&&a(7);let i;if(y(t)){const o=K(this),f=M(t,void 0);let c=!0;try{i=r(f),c=!1}finally{c?v(o):E(o)}return x(o,n),W(i,o)}else if(!t||typeof t!="object"){if(i=r(t),i===void 0&&(i=t),i===j&&(i=void 0),this.autoFreeze_&&N(i,!0),n){const o=[],f=[];d("Patches").generateReplacementPatches_(t,i,o,f),n(o,f)}return i}else a(1,t)},this.produceWithPatches=(t,r)=>{if(typeof t=="function")return(f,...c)=>this.produceWithPatches(f,l=>t(l,...c));let n,i;return[this.produce(t,r,(f,c)=>{n=f,i=c}),n,i]},typeof(e==null?void 0:e.autoFreeze)=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof(e==null?void 0:e.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){y(e)||a(8),p(e)&&(e=ie(e));const t=K(this),r=M(e,void 0);return r[s].isManual_=!0,E(t),r}finishDraft(e,t){const r=e&&e[s];(!r||!r.isManual_)&&a(9);const{scope_:n}=r;return x(n,t),W(void 0,n)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let r;for(r=t.length-1;r>=0;r--){const i=t[r];if(i.path.length===0&&i.op==="replace"){e=i.value;break}}r>-1&&(t=t.slice(r+1));const n=d("Patches").applyPatches_;return p(e)?n(e,t):this.produce(e,i=>n(i,t))}};function M(e,t){const r=F(e)?d("MapSet").proxyMap_(e,t):O(e)?d("MapSet").proxySet_(e,t):te(e,t);return(t?t.scope_:H()).drafts_.push(r),r}function ie(e){return p(e)||a(10,e),$(e)}function $(e){if(!y(e)||A(e))return e;const t=e[s];let r;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,r=k(e,t.scope_.immer_.useStrictShallowCopy_)}else r=k(e,!0);return w(r,(n,i)=>{G(r,n,$(i))}),t&&(t.finalized_=!1),r}var u=new ne,oe=u.produce;u.produceWithPatches.bind(u);u.setAutoFreeze.bind(u);u.setUseStrictShallowCopy.bind(u);u.applyPatches.bind(u);u.createDraft.bind(u);u.finishDraft.bind(u);export{p as a,y as i,oe as p};
//# sourceMappingURL=immer-DqxjFn0G.js.map
