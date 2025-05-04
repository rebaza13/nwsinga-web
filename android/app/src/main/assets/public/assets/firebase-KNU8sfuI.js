import{d as Of}from"./index-D0a3PjNi.js";const Ff=()=>{};var Mu={};/**
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
 */const fl=function(r){const t=[];let e=0;for(let n=0;n<r.length;n++){let s=r.charCodeAt(n);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(s=65536+((s&1023)<<10)+(r.charCodeAt(++n)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},Lf=function(r){const t=[];let e=0,n=0;for(;e<r.length;){const s=r[e++];if(s<128)t[n++]=String.fromCharCode(s);else if(s>191&&s<224){const i=r[e++];t[n++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=r[e++],a=r[e++],u=r[e++],l=((s&7)<<18|(i&63)<<12|(a&63)<<6|u&63)-65536;t[n++]=String.fromCharCode(55296+(l>>10)),t[n++]=String.fromCharCode(56320+(l&1023))}else{const i=r[e++],a=r[e++];t[n++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return t.join("")},ml={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,t){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let s=0;s<r.length;s+=3){const i=r[s],a=s+1<r.length,u=a?r[s+1]:0,l=s+2<r.length,d=l?r[s+2]:0,m=i>>2,g=(i&3)<<4|u>>4;let I=(u&15)<<2|d>>6,S=d&63;l||(S=64,a||(I=64)),n.push(e[m],e[g],e[I],e[S])}return n.join("")},encodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(r):this.encodeByteArray(fl(r),t)},decodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(r):Lf(this.decodeStringToByteArray(r,t))},decodeStringToByteArray(r,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let s=0;s<r.length;){const i=e[r.charAt(s++)],u=s<r.length?e[r.charAt(s)]:0;++s;const d=s<r.length?e[r.charAt(s)]:64;++s;const g=s<r.length?e[r.charAt(s)]:64;if(++s,i==null||u==null||d==null||g==null)throw new Bf;const I=i<<2|u>>4;if(n.push(I),d!==64){const S=u<<4&240|d>>2;if(n.push(S),g!==64){const C=d<<6&192|g;n.push(C)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class Bf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Uf=function(r){const t=fl(r);return ml.encodeByteArray(t,!0)},gl=function(r){return Uf(r).replace(/\./g,"")},qf=function(r){try{return ml.decodeString(r,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function pl(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const zf=()=>pl().__FIREBASE_DEFAULTS__,jf=()=>{if(typeof process>"u"||typeof Mu>"u")return;const r=Mu.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},$f=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=r&&qf(r[1]);return t&&JSON.parse(t)},_l=()=>{try{return Ff()||zf()||jf()||$f()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Kf=()=>{var r;return(r=_l())===null||r===void 0?void 0:r.config};/**
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
 */class Gf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,n))}}}/**
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
 */function Ps(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Qf(){var r;const t=(r=_l())===null||r===void 0?void 0:r.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function yl(){return!Qf()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Il(){try{return typeof indexedDB=="object"}catch{return!1}}function Hf(){return new Promise((r,t)=>{try{let e=!0;const n="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(n);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(n),r(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(e){t(e)}})}/**
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
 */const Wf="FirebaseError";class Nn extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=Wf,Object.setPrototypeOf(this,Nn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,El.prototype.create)}}class El{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},s=`${this.service}/${t}`,i=this.errors[t],a=i?Yf(i,n):"Error",u=`${this.serviceName}: ${a} (${s}).`;return new Nn(s,u,n)}}function Yf(r,t){return r.replace(Jf,(e,n)=>{const s=t[n];return s!=null?String(s):`<${n}?>`})}const Jf=/\{\$([^}]+)}/g;function Vs(r,t){if(r===t)return!0;const e=Object.keys(r),n=Object.keys(t);for(const s of e){if(!n.includes(s))return!1;const i=r[s],a=t[s];if(Ou(i)&&Ou(a)){if(!Vs(i,a))return!1}else if(i!==a)return!1}for(const s of n)if(!e.includes(s))return!1;return!0}function Ou(r){return r!==null&&typeof r=="object"}/**
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
 */function Yt(r){return r&&r._delegate?r._delegate:r}class Tr{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Ve="[DEFAULT]";/**
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
 */class Xf{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const n=new Gf;if(this.instancesDeferred.set(e,n),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&n.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(t?.identifier),s=(e=t?.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(tm(t))try{this.getOrInitializeService({instanceIdentifier:Ve})}catch{}for(const[e,n]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const i=this.getOrInitializeService({instanceIdentifier:s});n.resolve(i)}catch{}}}}clearInstance(t=Ve){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ve){return this.instances.has(t)}getOptions(t=Ve){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[i,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(i);n===u&&a.resolve(s)}return s}onInit(t,e){var n;const s=this.normalizeInstanceIdentifier(e),i=(n=this.onInitCallbacks.get(s))!==null&&n!==void 0?n:new Set;i.add(t),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&t(a,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const s of n)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:Zf(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch{}return n||null}normalizeInstanceIdentifier(t=Ve){return this.component?this.component.multipleInstances?t:Ve:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Zf(r){return r===Ve?void 0:r}function tm(r){return r.instantiationMode==="EAGER"}/**
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
 */class em{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Xf(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Q;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Q||(Q={}));const nm={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},rm=Q.INFO,sm={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},im=(r,t,...e)=>{if(t<r.logLevel)return;const n=new Date().toISOString(),s=sm[t];if(s)console[s](`[${n}]  ${r.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Tl{constructor(t){this.name=t,this._logLevel=rm,this._logHandler=im,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Q))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?nm[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...t),this._logHandler(this,Q.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...t),this._logHandler(this,Q.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...t),this._logHandler(this,Q.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...t),this._logHandler(this,Q.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...t),this._logHandler(this,Q.ERROR,...t)}}const om=(r,t)=>t.some(e=>r instanceof e);let Fu,Lu;function am(){return Fu||(Fu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function um(){return Lu||(Lu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const vl=new WeakMap,so=new WeakMap,wl=new WeakMap,Gi=new WeakMap,Lo=new WeakMap;function cm(r){const t=new Promise((e,n)=>{const s=()=>{r.removeEventListener("success",i),r.removeEventListener("error",a)},i=()=>{e(he(r.result)),s()},a=()=>{n(r.error),s()};r.addEventListener("success",i),r.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&vl.set(e,r)}).catch(()=>{}),Lo.set(t,r),t}function lm(r){if(so.has(r))return;const t=new Promise((e,n)=>{const s=()=>{r.removeEventListener("complete",i),r.removeEventListener("error",a),r.removeEventListener("abort",a)},i=()=>{e(),s()},a=()=>{n(r.error||new DOMException("AbortError","AbortError")),s()};r.addEventListener("complete",i),r.addEventListener("error",a),r.addEventListener("abort",a)});so.set(r,t)}let io={get(r,t,e){if(r instanceof IDBTransaction){if(t==="done")return so.get(r);if(t==="objectStoreNames")return r.objectStoreNames||wl.get(r);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return he(r[t])},set(r,t,e){return r[t]=e,!0},has(r,t){return r instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in r}};function hm(r){io=r(io)}function dm(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const n=r.call(Qi(this),t,...e);return wl.set(n,t.sort?t.sort():[t]),he(n)}:um().includes(r)?function(...t){return r.apply(Qi(this),t),he(vl.get(this))}:function(...t){return he(r.apply(Qi(this),t))}}function fm(r){return typeof r=="function"?dm(r):(r instanceof IDBTransaction&&lm(r),om(r,am())?new Proxy(r,io):r)}function he(r){if(r instanceof IDBRequest)return cm(r);if(Gi.has(r))return Gi.get(r);const t=fm(r);return t!==r&&(Gi.set(r,t),Lo.set(t,r)),t}const Qi=r=>Lo.get(r);function mm(r,t,{blocked:e,upgrade:n,blocking:s,terminated:i}={}){const a=indexedDB.open(r,t),u=he(a);return n&&a.addEventListener("upgradeneeded",l=>{n(he(a.result),l.oldVersion,l.newVersion,he(a.transaction),l)}),e&&a.addEventListener("blocked",l=>e(l.oldVersion,l.newVersion,l)),u.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),u}const gm=["get","getKey","getAll","getAllKeys","count"],pm=["put","add","delete","clear"],Hi=new Map;function Bu(r,t){if(!(r instanceof IDBDatabase&&!(t in r)&&typeof t=="string"))return;if(Hi.get(t))return Hi.get(t);const e=t.replace(/FromIndex$/,""),n=t!==e,s=pm.includes(e);if(!(e in(n?IDBIndex:IDBObjectStore).prototype)||!(s||gm.includes(e)))return;const i=async function(a,...u){const l=this.transaction(a,s?"readwrite":"readonly");let d=l.store;return n&&(d=d.index(u.shift())),(await Promise.all([d[e](...u),s&&l.done]))[0]};return Hi.set(t,i),i}hm(r=>({...r,get:(t,e,n)=>Bu(t,e)||r.get(t,e,n),has:(t,e)=>!!Bu(t,e)||r.has(t,e)}));/**
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
 */class _m{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(ym(e)){const n=e.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(e=>e).join(" ")}}function ym(r){const t=r.getComponent();return t?.type==="VERSION"}const oo="@firebase/app",Uu="0.11.5";/**
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
 */const Jt=new Tl("@firebase/app"),Im="@firebase/app-compat",Em="@firebase/analytics-compat",Tm="@firebase/analytics",vm="@firebase/app-check-compat",wm="@firebase/app-check",Am="@firebase/auth",Rm="@firebase/auth-compat",bm="@firebase/database",Sm="@firebase/data-connect",Pm="@firebase/database-compat",Vm="@firebase/functions",Cm="@firebase/functions-compat",Dm="@firebase/installations",xm="@firebase/installations-compat",Nm="@firebase/messaging",km="@firebase/messaging-compat",Mm="@firebase/performance",Om="@firebase/performance-compat",Fm="@firebase/remote-config",Lm="@firebase/remote-config-compat",Bm="@firebase/storage",Um="@firebase/storage-compat",qm="@firebase/firestore",zm="@firebase/vertexai",jm="@firebase/firestore-compat",$m="firebase",Km="11.6.1";/**
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
 */const Gm="[DEFAULT]",Qm={[oo]:"fire-core",[Im]:"fire-core-compat",[Tm]:"fire-analytics",[Em]:"fire-analytics-compat",[wm]:"fire-app-check",[vm]:"fire-app-check-compat",[Am]:"fire-auth",[Rm]:"fire-auth-compat",[bm]:"fire-rtdb",[Sm]:"fire-data-connect",[Pm]:"fire-rtdb-compat",[Vm]:"fire-fn",[Cm]:"fire-fn-compat",[Dm]:"fire-iid",[xm]:"fire-iid-compat",[Nm]:"fire-fcm",[km]:"fire-fcm-compat",[Mm]:"fire-perf",[Om]:"fire-perf-compat",[Fm]:"fire-rc",[Lm]:"fire-rc-compat",[Bm]:"fire-gcs",[Um]:"fire-gcs-compat",[qm]:"fire-fst",[jm]:"fire-fst-compat",[zm]:"fire-vertex","fire-js":"fire-js",[$m]:"fire-js-all"};/**
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
 */const ao=new Map,Hm=new Map,uo=new Map;function qu(r,t){try{r.container.addComponent(t)}catch(e){Jt.debug(`Component ${t.name} failed to register with FirebaseApp ${r.name}`,e)}}function Cs(r){const t=r.name;if(uo.has(t))return Jt.debug(`There were multiple attempts to register component ${t}.`),!1;uo.set(t,r);for(const e of ao.values())qu(e,r);for(const e of Hm.values())qu(e,r);return!0}function Wm(r,t){const e=r.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),r.container.getProvider(t)}function Ym(r){return r==null?!1:r.settings!==void 0}/**
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
 */const Jm={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Fe=new El("app","Firebase",Jm);/**
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
 */class Xm{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Tr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Fe.create("app-deleted",{appName:this._name})}}/**
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
 */const Zm=Km;function tg(r,t={}){let e=r;typeof t!="object"&&(t={name:t});const n=Object.assign({name:Gm,automaticDataCollectionEnabled:!1},t),s=n.name;if(typeof s!="string"||!s)throw Fe.create("bad-app-name",{appName:String(s)});if(e||(e=Kf()),!e)throw Fe.create("no-options");const i=ao.get(s);if(i){if(Vs(e,i.options)&&Vs(n,i.config))return i;throw Fe.create("duplicate-app",{appName:s})}const a=new em(s);for(const l of uo.values())a.addComponent(l);const u=new Xm(e,n,a);return ao.set(s,u),u}function dn(r,t,e){var n;let s=(n=Qm[r])!==null&&n!==void 0?n:r;e&&(s+=`-${e}`);const i=s.match(/\s|\//),a=t.match(/\s|\//);if(i||a){const u=[`Unable to register library "${s}" with version "${t}":`];i&&u.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&u.push("and"),a&&u.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Jt.warn(u.join(" "));return}Cs(new Tr(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const eg="firebase-heartbeat-database",ng=1,vr="firebase-heartbeat-store";let Wi=null;function Al(){return Wi||(Wi=mm(eg,ng,{upgrade:(r,t)=>{switch(t){case 0:try{r.createObjectStore(vr)}catch(e){console.warn(e)}}}}).catch(r=>{throw Fe.create("idb-open",{originalErrorMessage:r.message})})),Wi}async function rg(r){try{const e=(await Al()).transaction(vr),n=await e.objectStore(vr).get(Rl(r));return await e.done,n}catch(t){if(t instanceof Nn)Jt.warn(t.message);else{const e=Fe.create("idb-get",{originalErrorMessage:t?.message});Jt.warn(e.message)}}}async function zu(r,t){try{const n=(await Al()).transaction(vr,"readwrite");await n.objectStore(vr).put(t,Rl(r)),await n.done}catch(e){if(e instanceof Nn)Jt.warn(e.message);else{const n=Fe.create("idb-set",{originalErrorMessage:e?.message});Jt.warn(n.message)}}}function Rl(r){return`${r.name}!${r.options.appId}`}/**
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
 */const sg=1024,ig=30;class og{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new ug(e),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ju();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>ig){const a=cg(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){Jt.warn(n)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ju(),{heartbeatsToSend:n,unsentEntries:s}=ag(this._heartbeatsCache.heartbeats),i=gl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return Jt.warn(e),""}}}function ju(){return new Date().toISOString().substring(0,10)}function ag(r,t=sg){const e=[];let n=r.slice();for(const s of r){const i=e.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),$u(e)>t){i.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),$u(e)>t){e.pop();break}n=n.slice(1)}return{heartbeatsToSend:e,unsentEntries:n}}class ug{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Il()?Hf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await rg(this.app);return e?.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return zu(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return zu(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function $u(r){return gl(JSON.stringify({version:2,heartbeats:r})).length}function cg(r){if(r.length===0)return-1;let t=0,e=r[0].date;for(let n=1;n<r.length;n++)r[n].date<e&&(e=r[n].date,t=n);return t}/**
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
 */function lg(r){Cs(new Tr("platform-logger",t=>new _m(t),"PRIVATE")),Cs(new Tr("heartbeat",t=>new og(t),"PRIVATE")),dn(oo,Uu,r),dn(oo,Uu,"esm2017"),dn("fire-js","")}lg("");var Ku=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var de,bl;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(E,p){function y(){}y.prototype=p.prototype,E.D=p.prototype,E.prototype=new y,E.prototype.constructor=E,E.C=function(T,v,R){for(var _=Array(arguments.length-2),Gt=2;Gt<arguments.length;Gt++)_[Gt-2]=arguments[Gt];return p.prototype[v].apply(T,_)}}function e(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(n,e),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,p,y){y||(y=0);var T=Array(16);if(typeof p=="string")for(var v=0;16>v;++v)T[v]=p.charCodeAt(y++)|p.charCodeAt(y++)<<8|p.charCodeAt(y++)<<16|p.charCodeAt(y++)<<24;else for(v=0;16>v;++v)T[v]=p[y++]|p[y++]<<8|p[y++]<<16|p[y++]<<24;p=E.g[0],y=E.g[1],v=E.g[2];var R=E.g[3],_=p+(R^y&(v^R))+T[0]+3614090360&4294967295;p=y+(_<<7&4294967295|_>>>25),_=R+(v^p&(y^v))+T[1]+3905402710&4294967295,R=p+(_<<12&4294967295|_>>>20),_=v+(y^R&(p^y))+T[2]+606105819&4294967295,v=R+(_<<17&4294967295|_>>>15),_=y+(p^v&(R^p))+T[3]+3250441966&4294967295,y=v+(_<<22&4294967295|_>>>10),_=p+(R^y&(v^R))+T[4]+4118548399&4294967295,p=y+(_<<7&4294967295|_>>>25),_=R+(v^p&(y^v))+T[5]+1200080426&4294967295,R=p+(_<<12&4294967295|_>>>20),_=v+(y^R&(p^y))+T[6]+2821735955&4294967295,v=R+(_<<17&4294967295|_>>>15),_=y+(p^v&(R^p))+T[7]+4249261313&4294967295,y=v+(_<<22&4294967295|_>>>10),_=p+(R^y&(v^R))+T[8]+1770035416&4294967295,p=y+(_<<7&4294967295|_>>>25),_=R+(v^p&(y^v))+T[9]+2336552879&4294967295,R=p+(_<<12&4294967295|_>>>20),_=v+(y^R&(p^y))+T[10]+4294925233&4294967295,v=R+(_<<17&4294967295|_>>>15),_=y+(p^v&(R^p))+T[11]+2304563134&4294967295,y=v+(_<<22&4294967295|_>>>10),_=p+(R^y&(v^R))+T[12]+1804603682&4294967295,p=y+(_<<7&4294967295|_>>>25),_=R+(v^p&(y^v))+T[13]+4254626195&4294967295,R=p+(_<<12&4294967295|_>>>20),_=v+(y^R&(p^y))+T[14]+2792965006&4294967295,v=R+(_<<17&4294967295|_>>>15),_=y+(p^v&(R^p))+T[15]+1236535329&4294967295,y=v+(_<<22&4294967295|_>>>10),_=p+(v^R&(y^v))+T[1]+4129170786&4294967295,p=y+(_<<5&4294967295|_>>>27),_=R+(y^v&(p^y))+T[6]+3225465664&4294967295,R=p+(_<<9&4294967295|_>>>23),_=v+(p^y&(R^p))+T[11]+643717713&4294967295,v=R+(_<<14&4294967295|_>>>18),_=y+(R^p&(v^R))+T[0]+3921069994&4294967295,y=v+(_<<20&4294967295|_>>>12),_=p+(v^R&(y^v))+T[5]+3593408605&4294967295,p=y+(_<<5&4294967295|_>>>27),_=R+(y^v&(p^y))+T[10]+38016083&4294967295,R=p+(_<<9&4294967295|_>>>23),_=v+(p^y&(R^p))+T[15]+3634488961&4294967295,v=R+(_<<14&4294967295|_>>>18),_=y+(R^p&(v^R))+T[4]+3889429448&4294967295,y=v+(_<<20&4294967295|_>>>12),_=p+(v^R&(y^v))+T[9]+568446438&4294967295,p=y+(_<<5&4294967295|_>>>27),_=R+(y^v&(p^y))+T[14]+3275163606&4294967295,R=p+(_<<9&4294967295|_>>>23),_=v+(p^y&(R^p))+T[3]+4107603335&4294967295,v=R+(_<<14&4294967295|_>>>18),_=y+(R^p&(v^R))+T[8]+1163531501&4294967295,y=v+(_<<20&4294967295|_>>>12),_=p+(v^R&(y^v))+T[13]+2850285829&4294967295,p=y+(_<<5&4294967295|_>>>27),_=R+(y^v&(p^y))+T[2]+4243563512&4294967295,R=p+(_<<9&4294967295|_>>>23),_=v+(p^y&(R^p))+T[7]+1735328473&4294967295,v=R+(_<<14&4294967295|_>>>18),_=y+(R^p&(v^R))+T[12]+2368359562&4294967295,y=v+(_<<20&4294967295|_>>>12),_=p+(y^v^R)+T[5]+4294588738&4294967295,p=y+(_<<4&4294967295|_>>>28),_=R+(p^y^v)+T[8]+2272392833&4294967295,R=p+(_<<11&4294967295|_>>>21),_=v+(R^p^y)+T[11]+1839030562&4294967295,v=R+(_<<16&4294967295|_>>>16),_=y+(v^R^p)+T[14]+4259657740&4294967295,y=v+(_<<23&4294967295|_>>>9),_=p+(y^v^R)+T[1]+2763975236&4294967295,p=y+(_<<4&4294967295|_>>>28),_=R+(p^y^v)+T[4]+1272893353&4294967295,R=p+(_<<11&4294967295|_>>>21),_=v+(R^p^y)+T[7]+4139469664&4294967295,v=R+(_<<16&4294967295|_>>>16),_=y+(v^R^p)+T[10]+3200236656&4294967295,y=v+(_<<23&4294967295|_>>>9),_=p+(y^v^R)+T[13]+681279174&4294967295,p=y+(_<<4&4294967295|_>>>28),_=R+(p^y^v)+T[0]+3936430074&4294967295,R=p+(_<<11&4294967295|_>>>21),_=v+(R^p^y)+T[3]+3572445317&4294967295,v=R+(_<<16&4294967295|_>>>16),_=y+(v^R^p)+T[6]+76029189&4294967295,y=v+(_<<23&4294967295|_>>>9),_=p+(y^v^R)+T[9]+3654602809&4294967295,p=y+(_<<4&4294967295|_>>>28),_=R+(p^y^v)+T[12]+3873151461&4294967295,R=p+(_<<11&4294967295|_>>>21),_=v+(R^p^y)+T[15]+530742520&4294967295,v=R+(_<<16&4294967295|_>>>16),_=y+(v^R^p)+T[2]+3299628645&4294967295,y=v+(_<<23&4294967295|_>>>9),_=p+(v^(y|~R))+T[0]+4096336452&4294967295,p=y+(_<<6&4294967295|_>>>26),_=R+(y^(p|~v))+T[7]+1126891415&4294967295,R=p+(_<<10&4294967295|_>>>22),_=v+(p^(R|~y))+T[14]+2878612391&4294967295,v=R+(_<<15&4294967295|_>>>17),_=y+(R^(v|~p))+T[5]+4237533241&4294967295,y=v+(_<<21&4294967295|_>>>11),_=p+(v^(y|~R))+T[12]+1700485571&4294967295,p=y+(_<<6&4294967295|_>>>26),_=R+(y^(p|~v))+T[3]+2399980690&4294967295,R=p+(_<<10&4294967295|_>>>22),_=v+(p^(R|~y))+T[10]+4293915773&4294967295,v=R+(_<<15&4294967295|_>>>17),_=y+(R^(v|~p))+T[1]+2240044497&4294967295,y=v+(_<<21&4294967295|_>>>11),_=p+(v^(y|~R))+T[8]+1873313359&4294967295,p=y+(_<<6&4294967295|_>>>26),_=R+(y^(p|~v))+T[15]+4264355552&4294967295,R=p+(_<<10&4294967295|_>>>22),_=v+(p^(R|~y))+T[6]+2734768916&4294967295,v=R+(_<<15&4294967295|_>>>17),_=y+(R^(v|~p))+T[13]+1309151649&4294967295,y=v+(_<<21&4294967295|_>>>11),_=p+(v^(y|~R))+T[4]+4149444226&4294967295,p=y+(_<<6&4294967295|_>>>26),_=R+(y^(p|~v))+T[11]+3174756917&4294967295,R=p+(_<<10&4294967295|_>>>22),_=v+(p^(R|~y))+T[2]+718787259&4294967295,v=R+(_<<15&4294967295|_>>>17),_=y+(R^(v|~p))+T[9]+3951481745&4294967295,E.g[0]=E.g[0]+p&4294967295,E.g[1]=E.g[1]+(v+(_<<21&4294967295|_>>>11))&4294967295,E.g[2]=E.g[2]+v&4294967295,E.g[3]=E.g[3]+R&4294967295}n.prototype.u=function(E,p){p===void 0&&(p=E.length);for(var y=p-this.blockSize,T=this.B,v=this.h,R=0;R<p;){if(v==0)for(;R<=y;)s(this,E,R),R+=this.blockSize;if(typeof E=="string"){for(;R<p;)if(T[v++]=E.charCodeAt(R++),v==this.blockSize){s(this,T),v=0;break}}else for(;R<p;)if(T[v++]=E[R++],v==this.blockSize){s(this,T),v=0;break}}this.h=v,this.o+=p},n.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var p=1;p<E.length-8;++p)E[p]=0;var y=8*this.o;for(p=E.length-8;p<E.length;++p)E[p]=y&255,y/=256;for(this.u(E),E=Array(16),p=y=0;4>p;++p)for(var T=0;32>T;T+=8)E[y++]=this.g[p]>>>T&255;return E};function i(E,p){var y=u;return Object.prototype.hasOwnProperty.call(y,E)?y[E]:y[E]=p(E)}function a(E,p){this.h=p;for(var y=[],T=!0,v=E.length-1;0<=v;v--){var R=E[v]|0;T&&R==p||(y[v]=R,T=!1)}this.g=y}var u={};function l(E){return-128<=E&&128>E?i(E,function(p){return new a([p|0],0>p?-1:0)}):new a([E|0],0>E?-1:0)}function d(E){if(isNaN(E)||!isFinite(E))return g;if(0>E)return D(d(-E));for(var p=[],y=1,T=0;E>=y;T++)p[T]=E/y|0,y*=4294967296;return new a(p,0)}function m(E,p){if(E.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(E.charAt(0)=="-")return D(m(E.substring(1),p));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=d(Math.pow(p,8)),T=g,v=0;v<E.length;v+=8){var R=Math.min(8,E.length-v),_=parseInt(E.substring(v,v+R),p);8>R?(R=d(Math.pow(p,R)),T=T.j(R).add(d(_))):(T=T.j(y),T=T.add(d(_)))}return T}var g=l(0),I=l(1),S=l(16777216);r=a.prototype,r.m=function(){if(k(this))return-D(this).m();for(var E=0,p=1,y=0;y<this.g.length;y++){var T=this.i(y);E+=(0<=T?T:4294967296+T)*p,p*=4294967296}return E},r.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(C(this))return"0";if(k(this))return"-"+D(this).toString(E);for(var p=d(Math.pow(E,6)),y=this,T="";;){var v=Y(y,p).g;y=$(y,v.j(p));var R=((0<y.g.length?y.g[0]:y.h)>>>0).toString(E);if(y=v,C(y))return R+T;for(;6>R.length;)R="0"+R;T=R+T}},r.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function C(E){if(E.h!=0)return!1;for(var p=0;p<E.g.length;p++)if(E.g[p]!=0)return!1;return!0}function k(E){return E.h==-1}r.l=function(E){return E=$(this,E),k(E)?-1:C(E)?0:1};function D(E){for(var p=E.g.length,y=[],T=0;T<p;T++)y[T]=~E.g[T];return new a(y,~E.h).add(I)}r.abs=function(){return k(this)?D(this):this},r.add=function(E){for(var p=Math.max(this.g.length,E.g.length),y=[],T=0,v=0;v<=p;v++){var R=T+(this.i(v)&65535)+(E.i(v)&65535),_=(R>>>16)+(this.i(v)>>>16)+(E.i(v)>>>16);T=_>>>16,R&=65535,_&=65535,y[v]=_<<16|R}return new a(y,y[y.length-1]&-2147483648?-1:0)};function $(E,p){return E.add(D(p))}r.j=function(E){if(C(this)||C(E))return g;if(k(this))return k(E)?D(this).j(D(E)):D(D(this).j(E));if(k(E))return D(this.j(D(E)));if(0>this.l(S)&&0>E.l(S))return d(this.m()*E.m());for(var p=this.g.length+E.g.length,y=[],T=0;T<2*p;T++)y[T]=0;for(T=0;T<this.g.length;T++)for(var v=0;v<E.g.length;v++){var R=this.i(T)>>>16,_=this.i(T)&65535,Gt=E.i(v)>>>16,qn=E.i(v)&65535;y[2*T+2*v]+=_*qn,z(y,2*T+2*v),y[2*T+2*v+1]+=R*qn,z(y,2*T+2*v+1),y[2*T+2*v+1]+=_*Gt,z(y,2*T+2*v+1),y[2*T+2*v+2]+=R*Gt,z(y,2*T+2*v+2)}for(T=0;T<p;T++)y[T]=y[2*T+1]<<16|y[2*T];for(T=p;T<2*p;T++)y[T]=0;return new a(y,0)};function z(E,p){for(;(E[p]&65535)!=E[p];)E[p+1]+=E[p]>>>16,E[p]&=65535,p++}function U(E,p){this.g=E,this.h=p}function Y(E,p){if(C(p))throw Error("division by zero");if(C(E))return new U(g,g);if(k(E))return p=Y(D(E),p),new U(D(p.g),D(p.h));if(k(p))return p=Y(E,D(p)),new U(D(p.g),p.h);if(30<E.g.length){if(k(E)||k(p))throw Error("slowDivide_ only works with positive integers.");for(var y=I,T=p;0>=T.l(E);)y=et(y),T=et(T);var v=H(y,1),R=H(T,1);for(T=H(T,2),y=H(y,2);!C(T);){var _=R.add(T);0>=_.l(E)&&(v=v.add(y),R=_),T=H(T,1),y=H(y,1)}return p=$(E,v.j(p)),new U(v,p)}for(v=g;0<=E.l(p);){for(y=Math.max(1,Math.floor(E.m()/p.m())),T=Math.ceil(Math.log(y)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),R=d(y),_=R.j(p);k(_)||0<_.l(E);)y-=T,R=d(y),_=R.j(p);C(R)&&(R=I),v=v.add(R),E=$(E,_)}return new U(v,E)}r.A=function(E){return Y(this,E).h},r.and=function(E){for(var p=Math.max(this.g.length,E.g.length),y=[],T=0;T<p;T++)y[T]=this.i(T)&E.i(T);return new a(y,this.h&E.h)},r.or=function(E){for(var p=Math.max(this.g.length,E.g.length),y=[],T=0;T<p;T++)y[T]=this.i(T)|E.i(T);return new a(y,this.h|E.h)},r.xor=function(E){for(var p=Math.max(this.g.length,E.g.length),y=[],T=0;T<p;T++)y[T]=this.i(T)^E.i(T);return new a(y,this.h^E.h)};function et(E){for(var p=E.g.length+1,y=[],T=0;T<p;T++)y[T]=E.i(T)<<1|E.i(T-1)>>>31;return new a(y,E.h)}function H(E,p){var y=p>>5;p%=32;for(var T=E.g.length-y,v=[],R=0;R<T;R++)v[R]=0<p?E.i(R+y)>>>p|E.i(R+y+1)<<32-p:E.i(R+y);return new a(v,E.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,bl=n,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=m,de=a}).apply(typeof Ku<"u"?Ku:typeof self<"u"?self:typeof window<"u"?window:{});var ls=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Sl,cr,Pl,_s,co,Vl,Cl,Dl;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,c,h){return o==Array.prototype||o==Object.prototype||(o[c]=h.value),o};function e(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof ls=="object"&&ls];for(var c=0;c<o.length;++c){var h=o[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var n=e(this);function s(o,c){if(c)t:{var h=n;o=o.split(".");for(var f=0;f<o.length-1;f++){var A=o[f];if(!(A in h))break t;h=h[A]}o=o[o.length-1],f=h[o],c=c(f),c!=f&&c!=null&&t(h,o,{configurable:!0,writable:!0,value:c})}}function i(o,c){o instanceof String&&(o+="");var h=0,f=!1,A={next:function(){if(!f&&h<o.length){var b=h++;return{value:c(b,o[b]),done:!1}}return f=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}s("Array.prototype.values",function(o){return o||function(){return i(this,function(c,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function l(o){var c=typeof o;return c=c!="object"?c:o?Array.isArray(o)?"array":c:"null",c=="array"||c=="object"&&typeof o.length=="number"}function d(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function m(o,c,h){return o.call.apply(o.bind,arguments)}function g(o,c,h){if(!o)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,f),o.apply(c,A)}}return function(){return o.apply(c,arguments)}}function I(o,c,h){return I=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:g,I.apply(null,arguments)}function S(o,c){var h=Array.prototype.slice.call(arguments,1);return function(){var f=h.slice();return f.push.apply(f,arguments),o.apply(this,f)}}function C(o,c){function h(){}h.prototype=c.prototype,o.aa=c.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(f,A,b){for(var N=Array(arguments.length-2),tt=2;tt<arguments.length;tt++)N[tt-2]=arguments[tt];return c.prototype[A].apply(f,N)}}function k(o){const c=o.length;if(0<c){const h=Array(c);for(let f=0;f<c;f++)h[f]=o[f];return h}return[]}function D(o,c){for(let h=1;h<arguments.length;h++){const f=arguments[h];if(l(f)){const A=o.length||0,b=f.length||0;o.length=A+b;for(let N=0;N<b;N++)o[A+N]=f[N]}else o.push(f)}}class ${constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function z(o){return/^[\s\xa0]*$/.test(o)}function U(){var o=u.navigator;return o&&(o=o.userAgent)?o:""}function Y(o){return Y[" "](o),o}Y[" "]=function(){};var et=U().indexOf("Gecko")!=-1&&!(U().toLowerCase().indexOf("webkit")!=-1&&U().indexOf("Edge")==-1)&&!(U().indexOf("Trident")!=-1||U().indexOf("MSIE")!=-1)&&U().indexOf("Edge")==-1;function H(o,c,h){for(const f in o)c.call(h,o[f],f,o)}function E(o,c){for(const h in o)c.call(void 0,o[h],h,o)}function p(o){const c={};for(const h in o)c[h]=o[h];return c}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(o,c){let h,f;for(let A=1;A<arguments.length;A++){f=arguments[A];for(h in f)o[h]=f[h];for(let b=0;b<y.length;b++)h=y[b],Object.prototype.hasOwnProperty.call(f,h)&&(o[h]=f[h])}}function v(o){var c=1;o=o.split(":");const h=[];for(;0<c&&o.length;)h.push(o.shift()),c--;return o.length&&h.push(o.join(":")),h}function R(o){u.setTimeout(()=>{throw o},0)}function _(){var o=vi;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class Gt{constructor(){this.h=this.g=null}add(c,h){const f=qn.get();f.set(c,h),this.h?this.h.next=f:this.g=f,this.h=f}}var qn=new $(()=>new tf,o=>o.reset());class tf{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let zn,jn=!1,vi=new Gt,Ma=()=>{const o=u.Promise.resolve(void 0);zn=()=>{o.then(ef)}};var ef=()=>{for(var o;o=_();){try{o.h.call(o.g)}catch(h){R(h)}var c=qn;c.j(o),100>c.h&&(c.h++,o.next=c.g,c.g=o)}jn=!1};function ne(){this.s=this.s,this.C=this.C}ne.prototype.s=!1,ne.prototype.ma=function(){this.s||(this.s=!0,this.N())},ne.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function pt(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}pt.prototype.h=function(){this.defaultPrevented=!0};var nf=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};u.addEventListener("test",h,c),u.removeEventListener("test",h,c)}catch{}return o}();function $n(o,c){if(pt.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,f=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget){if(et){t:{try{Y(c.nodeName);var A=!0;break t}catch{}A=!1}A||(c=null)}}else h=="mouseover"?c=o.fromElement:h=="mouseout"&&(c=o.toElement);this.relatedTarget=c,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:rf[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&$n.aa.h.call(this)}}C($n,pt);var rf={2:"touch",3:"pen",4:"mouse"};$n.prototype.h=function(){$n.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Kr="closure_listenable_"+(1e6*Math.random()|0),sf=0;function of(o,c,h,f,A){this.listener=o,this.proxy=null,this.src=c,this.type=h,this.capture=!!f,this.ha=A,this.key=++sf,this.da=this.fa=!1}function Gr(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Qr(o){this.src=o,this.g={},this.h=0}Qr.prototype.add=function(o,c,h,f,A){var b=o.toString();o=this.g[b],o||(o=this.g[b]=[],this.h++);var N=Ai(o,c,f,A);return-1<N?(c=o[N],h||(c.fa=!1)):(c=new of(c,this.src,b,!!f,A),c.fa=h,o.push(c)),c};function wi(o,c){var h=c.type;if(h in o.g){var f=o.g[h],A=Array.prototype.indexOf.call(f,c,void 0),b;(b=0<=A)&&Array.prototype.splice.call(f,A,1),b&&(Gr(c),o.g[h].length==0&&(delete o.g[h],o.h--))}}function Ai(o,c,h,f){for(var A=0;A<o.length;++A){var b=o[A];if(!b.da&&b.listener==c&&b.capture==!!h&&b.ha==f)return A}return-1}var Ri="closure_lm_"+(1e6*Math.random()|0),bi={};function Oa(o,c,h,f,A){if(Array.isArray(c)){for(var b=0;b<c.length;b++)Oa(o,c[b],h,f,A);return null}return h=Ba(h),o&&o[Kr]?o.K(c,h,d(f)?!!f.capture:!1,A):af(o,c,h,!1,f,A)}function af(o,c,h,f,A,b){if(!c)throw Error("Invalid event type");var N=d(A)?!!A.capture:!!A,tt=Pi(o);if(tt||(o[Ri]=tt=new Qr(o)),h=tt.add(c,h,f,N,b),h.proxy)return h;if(f=uf(),h.proxy=f,f.src=o,f.listener=h,o.addEventListener)nf||(A=N),A===void 0&&(A=!1),o.addEventListener(c.toString(),f,A);else if(o.attachEvent)o.attachEvent(La(c.toString()),f);else if(o.addListener&&o.removeListener)o.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return h}function uf(){function o(h){return c.call(o.src,o.listener,h)}const c=cf;return o}function Fa(o,c,h,f,A){if(Array.isArray(c))for(var b=0;b<c.length;b++)Fa(o,c[b],h,f,A);else f=d(f)?!!f.capture:!!f,h=Ba(h),o&&o[Kr]?(o=o.i,c=String(c).toString(),c in o.g&&(b=o.g[c],h=Ai(b,h,f,A),-1<h&&(Gr(b[h]),Array.prototype.splice.call(b,h,1),b.length==0&&(delete o.g[c],o.h--)))):o&&(o=Pi(o))&&(c=o.g[c.toString()],o=-1,c&&(o=Ai(c,h,f,A)),(h=-1<o?c[o]:null)&&Si(h))}function Si(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[Kr])wi(c.i,o);else{var h=o.type,f=o.proxy;c.removeEventListener?c.removeEventListener(h,f,o.capture):c.detachEvent?c.detachEvent(La(h),f):c.addListener&&c.removeListener&&c.removeListener(f),(h=Pi(c))?(wi(h,o),h.h==0&&(h.src=null,c[Ri]=null)):Gr(o)}}}function La(o){return o in bi?bi[o]:bi[o]="on"+o}function cf(o,c){if(o.da)o=!0;else{c=new $n(c,this);var h=o.listener,f=o.ha||o.src;o.fa&&Si(o),o=h.call(f,c)}return o}function Pi(o){return o=o[Ri],o instanceof Qr?o:null}var Vi="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ba(o){return typeof o=="function"?o:(o[Vi]||(o[Vi]=function(c){return o.handleEvent(c)}),o[Vi])}function _t(){ne.call(this),this.i=new Qr(this),this.M=this,this.F=null}C(_t,ne),_t.prototype[Kr]=!0,_t.prototype.removeEventListener=function(o,c,h,f){Fa(this,o,c,h,f)};function Rt(o,c){var h,f=o.F;if(f)for(h=[];f;f=f.F)h.push(f);if(o=o.M,f=c.type||c,typeof c=="string")c=new pt(c,o);else if(c instanceof pt)c.target=c.target||o;else{var A=c;c=new pt(f,o),T(c,A)}if(A=!0,h)for(var b=h.length-1;0<=b;b--){var N=c.g=h[b];A=Hr(N,f,!0,c)&&A}if(N=c.g=o,A=Hr(N,f,!0,c)&&A,A=Hr(N,f,!1,c)&&A,h)for(b=0;b<h.length;b++)N=c.g=h[b],A=Hr(N,f,!1,c)&&A}_t.prototype.N=function(){if(_t.aa.N.call(this),this.i){var o=this.i,c;for(c in o.g){for(var h=o.g[c],f=0;f<h.length;f++)Gr(h[f]);delete o.g[c],o.h--}}this.F=null},_t.prototype.K=function(o,c,h,f){return this.i.add(String(o),c,!1,h,f)},_t.prototype.L=function(o,c,h,f){return this.i.add(String(o),c,!0,h,f)};function Hr(o,c,h,f){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();for(var A=!0,b=0;b<c.length;++b){var N=c[b];if(N&&!N.da&&N.capture==h){var tt=N.listener,mt=N.ha||N.src;N.fa&&wi(o.i,N),A=tt.call(mt,f)!==!1&&A}}return A&&!f.defaultPrevented}function Ua(o,c,h){if(typeof o=="function")h&&(o=I(o,h));else if(o&&typeof o.handleEvent=="function")o=I(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:u.setTimeout(o,c||0)}function qa(o){o.g=Ua(()=>{o.g=null,o.i&&(o.i=!1,qa(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class lf extends ne{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:qa(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Kn(o){ne.call(this),this.h=o,this.g={}}C(Kn,ne);var za=[];function ja(o){H(o.g,function(c,h){this.g.hasOwnProperty(h)&&Si(c)},o),o.g={}}Kn.prototype.N=function(){Kn.aa.N.call(this),ja(this)},Kn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ci=u.JSON.stringify,hf=u.JSON.parse,df=class{stringify(o){return u.JSON.stringify(o,void 0)}parse(o){return u.JSON.parse(o,void 0)}};function Di(){}Di.prototype.h=null;function $a(o){return o.h||(o.h=o.i())}function Ka(){}var Gn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function xi(){pt.call(this,"d")}C(xi,pt);function Ni(){pt.call(this,"c")}C(Ni,pt);var Ae={},Ga=null;function Wr(){return Ga=Ga||new _t}Ae.La="serverreachability";function Qa(o){pt.call(this,Ae.La,o)}C(Qa,pt);function Qn(o){const c=Wr();Rt(c,new Qa(c))}Ae.STAT_EVENT="statevent";function Ha(o,c){pt.call(this,Ae.STAT_EVENT,o),this.stat=c}C(Ha,pt);function bt(o){const c=Wr();Rt(c,new Ha(c,o))}Ae.Ma="timingevent";function Wa(o,c){pt.call(this,Ae.Ma,o),this.size=c}C(Wa,pt);function Hn(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){o()},c)}function Wn(){this.g=!0}Wn.prototype.xa=function(){this.g=!1};function ff(o,c,h,f,A,b){o.info(function(){if(o.g)if(b)for(var N="",tt=b.split("&"),mt=0;mt<tt.length;mt++){var W=tt[mt].split("=");if(1<W.length){var yt=W[0];W=W[1];var It=yt.split("_");N=2<=It.length&&It[1]=="type"?N+(yt+"="+W+"&"):N+(yt+"=redacted&")}}else N=null;else N=b;return"XMLHTTP REQ ("+f+") [attempt "+A+"]: "+c+`
`+h+`
`+N})}function mf(o,c,h,f,A,b,N){o.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+A+"]: "+c+`
`+h+`
`+b+" "+N})}function Ye(o,c,h,f){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+pf(o,h)+(f?" "+f:"")})}function gf(o,c){o.info(function(){return"TIMEOUT: "+c})}Wn.prototype.info=function(){};function pf(o,c){if(!o.g)return c;if(!c)return null;try{var h=JSON.parse(c);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var f=h[o];if(!(2>f.length)){var A=f[1];if(Array.isArray(A)&&!(1>A.length)){var b=A[0];if(b!="noop"&&b!="stop"&&b!="close")for(var N=1;N<A.length;N++)A[N]=""}}}}return Ci(h)}catch{return c}}var Yr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ya={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ki;function Jr(){}C(Jr,Di),Jr.prototype.g=function(){return new XMLHttpRequest},Jr.prototype.i=function(){return{}},ki=new Jr;function re(o,c,h,f){this.j=o,this.i=c,this.l=h,this.R=f||1,this.U=new Kn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ja}function Ja(){this.i=null,this.g="",this.h=!1}var Xa={},Mi={};function Oi(o,c,h){o.L=1,o.v=es(Qt(c)),o.m=h,o.P=!0,Za(o,null)}function Za(o,c){o.F=Date.now(),Xr(o),o.A=Qt(o.v);var h=o.A,f=o.R;Array.isArray(f)||(f=[String(f)]),fu(h.i,"t",f),o.C=0,h=o.j.J,o.h=new Ja,o.g=Du(o.j,h?c:null,!o.m),0<o.O&&(o.M=new lf(I(o.Y,o,o.g),o.O)),c=o.U,h=o.g,f=o.ca;var A="readystatechange";Array.isArray(A)||(A&&(za[0]=A.toString()),A=za);for(var b=0;b<A.length;b++){var N=Oa(h,A[b],f||c.handleEvent,!1,c.h||c);if(!N)break;c.g[N.key]=N}c=o.H?p(o.H):{},o.m?(o.u||(o.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,c)):(o.u="GET",o.g.ea(o.A,o.u,null,c)),Qn(),ff(o.i,o.u,o.A,o.l,o.R,o.m)}re.prototype.ca=function(o){o=o.target;const c=this.M;c&&Ht(o)==3?c.j():this.Y(o)},re.prototype.Y=function(o){try{if(o==this.g)t:{const It=Ht(this.g);var c=this.g.Ba();const Ze=this.g.Z();if(!(3>It)&&(It!=3||this.g&&(this.h.h||this.g.oa()||Eu(this.g)))){this.J||It!=4||c==7||(c==8||0>=Ze?Qn(3):Qn(2)),Fi(this);var h=this.g.Z();this.X=h;e:if(tu(this)){var f=Eu(this.g);o="";var A=f.length,b=Ht(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Re(this),Yn(this);var N="";break e}this.h.i=new u.TextDecoder}for(c=0;c<A;c++)this.h.h=!0,o+=this.h.i.decode(f[c],{stream:!(b&&c==A-1)});f.length=0,this.h.g+=o,this.C=0,N=this.h.g}else N=this.g.oa();if(this.o=h==200,mf(this.i,this.u,this.A,this.l,this.R,It,h),this.o){if(this.T&&!this.K){e:{if(this.g){var tt,mt=this.g;if((tt=mt.g?mt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!z(tt)){var W=tt;break e}}W=null}if(h=W)Ye(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Li(this,h);else{this.o=!1,this.s=3,bt(12),Re(this),Yn(this);break t}}if(this.P){h=!0;let Ft;for(;!this.J&&this.C<N.length;)if(Ft=_f(this,N),Ft==Mi){It==4&&(this.s=4,bt(14),h=!1),Ye(this.i,this.l,null,"[Incomplete Response]");break}else if(Ft==Xa){this.s=4,bt(15),Ye(this.i,this.l,N,"[Invalid Chunk]"),h=!1;break}else Ye(this.i,this.l,Ft,null),Li(this,Ft);if(tu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),It!=4||N.length!=0||this.h.h||(this.s=1,bt(16),h=!1),this.o=this.o&&h,!h)Ye(this.i,this.l,N,"[Invalid Chunked Response]"),Re(this),Yn(this);else if(0<N.length&&!this.W){this.W=!0;var yt=this.j;yt.g==this&&yt.ba&&!yt.M&&(yt.j.info("Great, no buffering proxy detected. Bytes received: "+N.length),$i(yt),yt.M=!0,bt(11))}}else Ye(this.i,this.l,N,null),Li(this,N);It==4&&Re(this),this.o&&!this.J&&(It==4?Su(this.j,this):(this.o=!1,Xr(this)))}else kf(this.g),h==400&&0<N.indexOf("Unknown SID")?(this.s=3,bt(12)):(this.s=0,bt(13)),Re(this),Yn(this)}}}catch{}finally{}};function tu(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function _f(o,c){var h=o.C,f=c.indexOf(`
`,h);return f==-1?Mi:(h=Number(c.substring(h,f)),isNaN(h)?Xa:(f+=1,f+h>c.length?Mi:(c=c.slice(f,f+h),o.C=f+h,c)))}re.prototype.cancel=function(){this.J=!0,Re(this)};function Xr(o){o.S=Date.now()+o.I,eu(o,o.I)}function eu(o,c){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Hn(I(o.ba,o),c)}function Fi(o){o.B&&(u.clearTimeout(o.B),o.B=null)}re.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(gf(this.i,this.A),this.L!=2&&(Qn(),bt(17)),Re(this),this.s=2,Yn(this)):eu(this,this.S-o)};function Yn(o){o.j.G==0||o.J||Su(o.j,o)}function Re(o){Fi(o);var c=o.M;c&&typeof c.ma=="function"&&c.ma(),o.M=null,ja(o.U),o.g&&(c=o.g,o.g=null,c.abort(),c.ma())}function Li(o,c){try{var h=o.j;if(h.G!=0&&(h.g==o||Bi(h.h,o))){if(!o.K&&Bi(h.h,o)&&h.G==3){try{var f=h.Da.g.parse(c)}catch{f=null}if(Array.isArray(f)&&f.length==3){var A=f;if(A[0]==0){t:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)as(h),is(h);else break t;ji(h),bt(18)}}else h.za=A[1],0<h.za-h.T&&37500>A[2]&&h.F&&h.v==0&&!h.C&&(h.C=Hn(I(h.Za,h),6e3));if(1>=su(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Se(h,11)}else if((o.K||h.g==o)&&as(h),!z(c))for(A=h.Da.g.parse(c),c=0;c<A.length;c++){let W=A[c];if(h.T=W[0],W=W[1],h.G==2)if(W[0]=="c"){h.K=W[1],h.ia=W[2];const yt=W[3];yt!=null&&(h.la=yt,h.j.info("VER="+h.la));const It=W[4];It!=null&&(h.Aa=It,h.j.info("SVER="+h.Aa));const Ze=W[5];Ze!=null&&typeof Ze=="number"&&0<Ze&&(f=1.5*Ze,h.L=f,h.j.info("backChannelRequestTimeoutMs_="+f)),f=h;const Ft=o.g;if(Ft){const cs=Ft.g?Ft.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(cs){var b=f.h;b.g||cs.indexOf("spdy")==-1&&cs.indexOf("quic")==-1&&cs.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(Ui(b,b.h),b.h=null))}if(f.D){const Ki=Ft.g?Ft.g.getResponseHeader("X-HTTP-Session-Id"):null;Ki&&(f.ya=Ki,rt(f.I,f.D,Ki))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),f=h;var N=o;if(f.qa=Cu(f,f.J?f.ia:null,f.W),N.K){iu(f.h,N);var tt=N,mt=f.L;mt&&(tt.I=mt),tt.B&&(Fi(tt),Xr(tt)),f.g=N}else Ru(f);0<h.i.length&&os(h)}else W[0]!="stop"&&W[0]!="close"||Se(h,7);else h.G==3&&(W[0]=="stop"||W[0]=="close"?W[0]=="stop"?Se(h,7):zi(h):W[0]!="noop"&&h.l&&h.l.ta(W),h.v=0)}}Qn(4)}catch{}}var yf=class{constructor(o,c){this.g=o,this.map=c}};function nu(o){this.l=o||10,u.PerformanceNavigationTiming?(o=u.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ru(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function su(o){return o.h?1:o.g?o.g.size:0}function Bi(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function Ui(o,c){o.g?o.g.add(c):o.h=c}function iu(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}nu.prototype.cancel=function(){if(this.i=ou(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function ou(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const h of o.g.values())c=c.concat(h.D);return c}return k(o.i)}function If(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(l(o)){for(var c=[],h=o.length,f=0;f<h;f++)c.push(o[f]);return c}c=[],h=0;for(f in o)c[h++]=o[f];return c}function Ef(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(l(o)||typeof o=="string"){var c=[];o=o.length;for(var h=0;h<o;h++)c.push(h);return c}c=[],h=0;for(const f in o)c[h++]=f;return c}}}function au(o,c){if(o.forEach&&typeof o.forEach=="function")o.forEach(c,void 0);else if(l(o)||typeof o=="string")Array.prototype.forEach.call(o,c,void 0);else for(var h=Ef(o),f=If(o),A=f.length,b=0;b<A;b++)c.call(void 0,f[b],h&&h[b],o)}var uu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Tf(o,c){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var f=o[h].indexOf("="),A=null;if(0<=f){var b=o[h].substring(0,f);A=o[h].substring(f+1)}else b=o[h];c(b,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function be(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof be){this.h=o.h,Zr(this,o.j),this.o=o.o,this.g=o.g,ts(this,o.s),this.l=o.l;var c=o.i,h=new Zn;h.i=c.i,c.g&&(h.g=new Map(c.g),h.h=c.h),cu(this,h),this.m=o.m}else o&&(c=String(o).match(uu))?(this.h=!1,Zr(this,c[1]||"",!0),this.o=Jn(c[2]||""),this.g=Jn(c[3]||"",!0),ts(this,c[4]),this.l=Jn(c[5]||"",!0),cu(this,c[6]||"",!0),this.m=Jn(c[7]||"")):(this.h=!1,this.i=new Zn(null,this.h))}be.prototype.toString=function(){var o=[],c=this.j;c&&o.push(Xn(c,lu,!0),":");var h=this.g;return(h||c=="file")&&(o.push("//"),(c=this.o)&&o.push(Xn(c,lu,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(Xn(h,h.charAt(0)=="/"?Af:wf,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",Xn(h,bf)),o.join("")};function Qt(o){return new be(o)}function Zr(o,c,h){o.j=h?Jn(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function ts(o,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);o.s=c}else o.s=null}function cu(o,c,h){c instanceof Zn?(o.i=c,Sf(o.i,o.h)):(h||(c=Xn(c,Rf)),o.i=new Zn(c,o.h))}function rt(o,c,h){o.i.set(c,h)}function es(o){return rt(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Jn(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Xn(o,c,h){return typeof o=="string"?(o=encodeURI(o).replace(c,vf),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function vf(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var lu=/[#\/\?@]/g,wf=/[#\?:]/g,Af=/[#\?]/g,Rf=/[#\?@]/g,bf=/#/g;function Zn(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function se(o){o.g||(o.g=new Map,o.h=0,o.i&&Tf(o.i,function(c,h){o.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}r=Zn.prototype,r.add=function(o,c){se(this),this.i=null,o=Je(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(c),this.h+=1,this};function hu(o,c){se(o),c=Je(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function du(o,c){return se(o),c=Je(o,c),o.g.has(c)}r.forEach=function(o,c){se(this),this.g.forEach(function(h,f){h.forEach(function(A){o.call(c,A,f,this)},this)},this)},r.na=function(){se(this);const o=Array.from(this.g.values()),c=Array.from(this.g.keys()),h=[];for(let f=0;f<c.length;f++){const A=o[f];for(let b=0;b<A.length;b++)h.push(c[f])}return h},r.V=function(o){se(this);let c=[];if(typeof o=="string")du(this,o)&&(c=c.concat(this.g.get(Je(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)c=c.concat(o[h])}return c},r.set=function(o,c){return se(this),this.i=null,o=Je(this,o),du(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},r.get=function(o,c){return o?(o=this.V(o),0<o.length?String(o[0]):c):c};function fu(o,c,h){hu(o,c),0<h.length&&(o.i=null,o.g.set(Je(o,c),k(h)),o.h+=h.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(var h=0;h<c.length;h++){var f=c[h];const b=encodeURIComponent(String(f)),N=this.V(f);for(f=0;f<N.length;f++){var A=b;N[f]!==""&&(A+="="+encodeURIComponent(String(N[f]))),o.push(A)}}return this.i=o.join("&")};function Je(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function Sf(o,c){c&&!o.j&&(se(o),o.i=null,o.g.forEach(function(h,f){var A=f.toLowerCase();f!=A&&(hu(this,f),fu(this,A,h))},o)),o.j=c}function Pf(o,c){const h=new Wn;if(u.Image){const f=new Image;f.onload=S(ie,h,"TestLoadImage: loaded",!0,c,f),f.onerror=S(ie,h,"TestLoadImage: error",!1,c,f),f.onabort=S(ie,h,"TestLoadImage: abort",!1,c,f),f.ontimeout=S(ie,h,"TestLoadImage: timeout",!1,c,f),u.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=o}else c(!1)}function Vf(o,c){const h=new Wn,f=new AbortController,A=setTimeout(()=>{f.abort(),ie(h,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:f.signal}).then(b=>{clearTimeout(A),b.ok?ie(h,"TestPingServer: ok",!0,c):ie(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(A),ie(h,"TestPingServer: error",!1,c)})}function ie(o,c,h,f,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),f(h)}catch{}}function Cf(){this.g=new df}function Df(o,c,h){const f=h||"";try{au(o,function(A,b){let N=A;d(A)&&(N=Ci(A)),c.push(f+b+"="+encodeURIComponent(N))})}catch(A){throw c.push(f+"type="+encodeURIComponent("_badmap")),A}}function ns(o){this.l=o.Ub||null,this.j=o.eb||!1}C(ns,Di),ns.prototype.g=function(){return new rs(this.l,this.j)},ns.prototype.i=function(o){return function(){return o}}({});function rs(o,c){_t.call(this),this.D=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(rs,_t),r=rs.prototype,r.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=c,this.readyState=1,er(this)},r.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(c.body=o),(this.D||u).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,tr(this)),this.readyState=0},r.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,er(this)),this.g&&(this.readyState=3,er(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;mu(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function mu(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}r.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?tr(this):er(this),this.readyState==3&&mu(this)}},r.Ra=function(o){this.g&&(this.response=this.responseText=o,tr(this))},r.Qa=function(o){this.g&&(this.response=o,tr(this))},r.ga=function(){this.g&&tr(this)};function tr(o){o.readyState=4,o.l=null,o.j=null,o.v=null,er(o)}r.setRequestHeader=function(o,c){this.u.append(o,c)},r.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=c.next();return o.join(`\r
`)};function er(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(rs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function gu(o){let c="";return H(o,function(h,f){c+=f,c+=":",c+=h,c+=`\r
`}),c}function qi(o,c,h){t:{for(f in h){var f=!1;break t}f=!0}f||(h=gu(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):rt(o,c,h))}function at(o){_t.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(at,_t);var xf=/^https?$/i,Nf=["POST","PUT"];r=at.prototype,r.Ha=function(o){this.J=o},r.ea=function(o,c,h,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ki.g(),this.v=this.o?$a(this.o):$a(ki),this.g.onreadystatechange=I(this.Ea,this);try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(b){pu(this,b);return}if(o=h||"",h=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var A in f)h.set(A,f[A]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const b of f.keys())h.set(b,f.get(b));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(h.keys()).find(b=>b.toLowerCase()=="content-type"),A=u.FormData&&o instanceof u.FormData,!(0<=Array.prototype.indexOf.call(Nf,c,void 0))||f||A||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,N]of h)this.g.setRequestHeader(b,N);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Iu(this),this.u=!0,this.g.send(o),this.u=!1}catch(b){pu(this,b)}};function pu(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.m=5,_u(o),ss(o)}function _u(o){o.A||(o.A=!0,Rt(o,"complete"),Rt(o,"error"))}r.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Rt(this,"complete"),Rt(this,"abort"),ss(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ss(this,!0)),at.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?yu(this):this.bb())},r.bb=function(){yu(this)};function yu(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Ht(o)!=4||o.Z()!=2)){if(o.u&&Ht(o)==4)Ua(o.Ea,0,o);else if(Rt(o,"readystatechange"),Ht(o)==4){o.h=!1;try{const N=o.Z();t:switch(N){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break t;default:c=!1}var h;if(!(h=c)){var f;if(f=N===0){var A=String(o.D).match(uu)[1]||null;!A&&u.self&&u.self.location&&(A=u.self.location.protocol.slice(0,-1)),f=!xf.test(A?A.toLowerCase():"")}h=f}if(h)Rt(o,"complete"),Rt(o,"success");else{o.m=6;try{var b=2<Ht(o)?o.g.statusText:""}catch{b=""}o.l=b+" ["+o.Z()+"]",_u(o)}}finally{ss(o)}}}}function ss(o,c){if(o.g){Iu(o);const h=o.g,f=o.v[0]?()=>{}:null;o.g=null,o.v=null,c||Rt(o,"ready");try{h.onreadystatechange=f}catch{}}}function Iu(o){o.I&&(u.clearTimeout(o.I),o.I=null)}r.isActive=function(){return!!this.g};function Ht(o){return o.g?o.g.readyState:0}r.Z=function(){try{return 2<Ht(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),hf(c)}};function Eu(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function kf(o){const c={};o=(o.g&&2<=Ht(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<o.length;f++){if(z(o[f]))continue;var h=v(o[f]);const A=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const b=c[A]||[];c[A]=b,b.push(h)}E(c,function(f){return f.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function nr(o,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||c}function Tu(o){this.Aa=0,this.i=[],this.j=new Wn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=nr("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=nr("baseRetryDelayMs",5e3,o),this.cb=nr("retryDelaySeedMs",1e4,o),this.Wa=nr("forwardChannelMaxRetries",2,o),this.wa=nr("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new nu(o&&o.concurrentRequestLimit),this.Da=new Cf,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Tu.prototype,r.la=8,r.G=1,r.connect=function(o,c,h,f){bt(0),this.W=o,this.H=c||{},h&&f!==void 0&&(this.H.OSID=h,this.H.OAID=f),this.F=this.X,this.I=Cu(this,null,this.W),os(this)};function zi(o){if(vu(o),o.G==3){var c=o.U++,h=Qt(o.I);if(rt(h,"SID",o.K),rt(h,"RID",c),rt(h,"TYPE","terminate"),rr(o,h),c=new re(o,o.j,c),c.L=2,c.v=es(Qt(h)),h=!1,u.navigator&&u.navigator.sendBeacon)try{h=u.navigator.sendBeacon(c.v.toString(),"")}catch{}!h&&u.Image&&(new Image().src=c.v,h=!0),h||(c.g=Du(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Xr(c)}Vu(o)}function is(o){o.g&&($i(o),o.g.cancel(),o.g=null)}function vu(o){is(o),o.u&&(u.clearTimeout(o.u),o.u=null),as(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&u.clearTimeout(o.s),o.s=null)}function os(o){if(!ru(o.h)&&!o.s){o.s=!0;var c=o.Ga;zn||Ma(),jn||(zn(),jn=!0),vi.add(c,o),o.B=0}}function Mf(o,c){return su(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=c.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Hn(I(o.Ga,o,c),Pu(o,o.B)),o.B++,!0)}r.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const A=new re(this,this.j,o);let b=this.o;if(this.S&&(b?(b=p(b),T(b,this.S)):b=this.S),this.m!==null||this.O||(A.H=b,b=null),this.P)t:{for(var c=0,h=0;h<this.i.length;h++){e:{var f=this.i[h];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break e}f=void 0}if(f===void 0)break;if(c+=f,4096<c){c=h;break t}if(c===4096||h===this.i.length-1){c=h+1;break t}}c=1e3}else c=1e3;c=Au(this,A,c),h=Qt(this.I),rt(h,"RID",o),rt(h,"CVER",22),this.D&&rt(h,"X-HTTP-Session-Id",this.D),rr(this,h),b&&(this.O?c="headers="+encodeURIComponent(String(gu(b)))+"&"+c:this.m&&qi(h,this.m,b)),Ui(this.h,A),this.Ua&&rt(h,"TYPE","init"),this.P?(rt(h,"$req",c),rt(h,"SID","null"),A.T=!0,Oi(A,h,null)):Oi(A,h,c),this.G=2}}else this.G==3&&(o?wu(this,o):this.i.length==0||ru(this.h)||wu(this))};function wu(o,c){var h;c?h=c.l:h=o.U++;const f=Qt(o.I);rt(f,"SID",o.K),rt(f,"RID",h),rt(f,"AID",o.T),rr(o,f),o.m&&o.o&&qi(f,o.m,o.o),h=new re(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),c&&(o.i=c.D.concat(o.i)),c=Au(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Ui(o.h,h),Oi(h,f,c)}function rr(o,c){o.H&&H(o.H,function(h,f){rt(c,f,h)}),o.l&&au({},function(h,f){rt(c,f,h)})}function Au(o,c,h){h=Math.min(o.i.length,h);var f=o.l?I(o.l.Na,o.l,o):null;t:{var A=o.i;let b=-1;for(;;){const N=["count="+h];b==-1?0<h?(b=A[0].g,N.push("ofs="+b)):b=0:N.push("ofs="+b);let tt=!0;for(let mt=0;mt<h;mt++){let W=A[mt].g;const yt=A[mt].map;if(W-=b,0>W)b=Math.max(0,A[mt].g-100),tt=!1;else try{Df(yt,N,"req"+W+"_")}catch{f&&f(yt)}}if(tt){f=N.join("&");break t}}}return o=o.i.splice(0,h),c.D=o,f}function Ru(o){if(!o.g&&!o.u){o.Y=1;var c=o.Fa;zn||Ma(),jn||(zn(),jn=!0),vi.add(c,o),o.v=0}}function ji(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Hn(I(o.Fa,o),Pu(o,o.v)),o.v++,!0)}r.Fa=function(){if(this.u=null,bu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Hn(I(this.ab,this),o)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,bt(10),is(this),bu(this))};function $i(o){o.A!=null&&(u.clearTimeout(o.A),o.A=null)}function bu(o){o.g=new re(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var c=Qt(o.qa);rt(c,"RID","rpc"),rt(c,"SID",o.K),rt(c,"AID",o.T),rt(c,"CI",o.F?"0":"1"),!o.F&&o.ja&&rt(c,"TO",o.ja),rt(c,"TYPE","xmlhttp"),rr(o,c),o.m&&o.o&&qi(c,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=es(Qt(c)),h.m=null,h.P=!0,Za(h,o)}r.Za=function(){this.C!=null&&(this.C=null,is(this),ji(this),bt(19))};function as(o){o.C!=null&&(u.clearTimeout(o.C),o.C=null)}function Su(o,c){var h=null;if(o.g==c){as(o),$i(o),o.g=null;var f=2}else if(Bi(o.h,c))h=c.D,iu(o.h,c),f=1;else return;if(o.G!=0){if(c.o)if(f==1){h=c.m?c.m.length:0,c=Date.now()-c.F;var A=o.B;f=Wr(),Rt(f,new Wa(f,h)),os(o)}else Ru(o);else if(A=c.s,A==3||A==0&&0<c.X||!(f==1&&Mf(o,c)||f==2&&ji(o)))switch(h&&0<h.length&&(c=o.h,c.i=c.i.concat(h)),A){case 1:Se(o,5);break;case 4:Se(o,10);break;case 3:Se(o,6);break;default:Se(o,2)}}}function Pu(o,c){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*c}function Se(o,c){if(o.j.info("Error code "+c),c==2){var h=I(o.fb,o),f=o.Xa;const A=!f;f=new be(f||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||Zr(f,"https"),es(f),A?Pf(f.toString(),h):Vf(f.toString(),h)}else bt(2);o.G=0,o.l&&o.l.sa(c),Vu(o),vu(o)}r.fb=function(o){o?(this.j.info("Successfully pinged google.com"),bt(2)):(this.j.info("Failed to ping google.com"),bt(1))};function Vu(o){if(o.G=0,o.ka=[],o.l){const c=ou(o.h);(c.length!=0||o.i.length!=0)&&(D(o.ka,c),D(o.ka,o.i),o.h.i.length=0,k(o.i),o.i.length=0),o.l.ra()}}function Cu(o,c,h){var f=h instanceof be?Qt(h):new be(h);if(f.g!="")c&&(f.g=c+"."+f.g),ts(f,f.s);else{var A=u.location;f=A.protocol,c=c?c+"."+A.hostname:A.hostname,A=+A.port;var b=new be(null);f&&Zr(b,f),c&&(b.g=c),A&&ts(b,A),h&&(b.l=h),f=b}return h=o.D,c=o.ya,h&&c&&rt(f,h,c),rt(f,"VER",o.la),rr(o,f),f}function Du(o,c,h){if(c&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Ca&&!o.pa?new at(new ns({eb:h})):new at(o.pa),c.Ha(o.J),c}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function xu(){}r=xu.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function us(){}us.prototype.g=function(o,c){return new xt(o,c)};function xt(o,c){_t.call(this),this.g=new Tu(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(o?o["X-WebChannel-Client-Profile"]=c.va:o={"X-WebChannel-Client-Profile":c.va}),this.g.S=o,(o=c&&c.Sb)&&!z(o)&&(this.g.m=o),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!z(c)&&(this.g.D=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new Xe(this)}C(xt,_t),xt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},xt.prototype.close=function(){zi(this.g)},xt.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=Ci(o),o=h);c.i.push(new yf(c.Ya++,o)),c.G==3&&os(c)},xt.prototype.N=function(){this.g.l=null,delete this.j,zi(this.g),delete this.g,xt.aa.N.call(this)};function Nu(o){xi.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){t:{for(const h in c){o=h;break t}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}C(Nu,xi);function ku(){Ni.call(this),this.status=1}C(ku,Ni);function Xe(o){this.g=o}C(Xe,xu),Xe.prototype.ua=function(){Rt(this.g,"a")},Xe.prototype.ta=function(o){Rt(this.g,new Nu(o))},Xe.prototype.sa=function(o){Rt(this.g,new ku)},Xe.prototype.ra=function(){Rt(this.g,"b")},us.prototype.createWebChannel=us.prototype.g,xt.prototype.send=xt.prototype.o,xt.prototype.open=xt.prototype.m,xt.prototype.close=xt.prototype.close,Dl=function(){return new us},Cl=function(){return Wr()},Vl=Ae,co={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Yr.NO_ERROR=0,Yr.TIMEOUT=8,Yr.HTTP_ERROR=6,_s=Yr,Ya.COMPLETE="complete",Pl=Ya,Ka.EventType=Gn,Gn.OPEN="a",Gn.CLOSE="b",Gn.ERROR="c",Gn.MESSAGE="d",_t.prototype.listen=_t.prototype.K,cr=Ka,at.prototype.listenOnce=at.prototype.L,at.prototype.getLastError=at.prototype.Ka,at.prototype.getLastErrorCode=at.prototype.Ba,at.prototype.getStatus=at.prototype.Z,at.prototype.getResponseJson=at.prototype.Oa,at.prototype.getResponseText=at.prototype.oa,at.prototype.send=at.prototype.ea,at.prototype.setWithCredentials=at.prototype.Ha,Sl=at}).apply(typeof ls<"u"?ls:typeof self<"u"?self:typeof window<"u"?window:{});const Gu="@firebase/firestore",Qu="4.7.11";/**
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
 */class Tt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Tt.UNAUTHENTICATED=new Tt(null),Tt.GOOGLE_CREDENTIALS=new Tt("google-credentials-uid"),Tt.FIRST_PARTY=new Tt("first-party-uid"),Tt.MOCK_USER=new Tt("mock-user");/**
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
 */let kn="11.6.1";/**
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
 */const qe=new Tl("@firebase/firestore");function an(){return qe.logLevel}function V(r,...t){if(qe.logLevel<=Q.DEBUG){const e=t.map(Bo);qe.debug(`Firestore (${kn}): ${r}`,...e)}}function ct(r,...t){if(qe.logLevel<=Q.ERROR){const e=t.map(Bo);qe.error(`Firestore (${kn}): ${r}`,...e)}}function wr(r,...t){if(qe.logLevel<=Q.WARN){const e=t.map(Bo);qe.warn(`Firestore (${kn}): ${r}`,...e)}}function Bo(r){if(typeof r=="string")return r;try{/**
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
*/return function(e){return JSON.stringify(e)}(r)}catch{return r}}/**
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
 */function O(r,t,e){let n="Unexpected state";typeof t=="string"?n=t:e=t,xl(r,n,e)}function xl(r,t,e){let n=`FIRESTORE (${kn}) INTERNAL ASSERTION FAILED: ${t} (ID: ${r.toString(16)})`;if(e!==void 0)try{n+=" CONTEXT: "+JSON.stringify(e)}catch{n+=" CONTEXT: "+e}throw ct(n),new Error(n)}function L(r,t,e,n){let s="Unexpected state";typeof e=="string"?s=e:n=e,r||xl(t,s,n)}function F(r,t){return r}/**
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
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class x extends Nn{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class jt{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class hg{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class dg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(Tt.UNAUTHENTICATED))}shutdown(){}}class fg{constructor(t){this.t=t,this.currentUser=Tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){L(this.o===void 0,42304);let n=this.i;const s=l=>this.i!==n?(n=this.i,e(l)):Promise.resolve();let i=new jt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new jt,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const l=i;t.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},u=l=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(l=>u(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?u(l):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new jt)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(n=>this.i!==t?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(L(typeof n.accessToken=="string",31837,{l:n}),new hg(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return L(t===null||typeof t=="string",2055,{h:t}),new Tt(t)}}class mg{constructor(t,e,n){this.P=t,this.T=e,this.I=n,this.type="FirstParty",this.user=Tt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class gg{constructor(t,e,n){this.P=t,this.T=e,this.I=n}getToken(){return Promise.resolve(new mg(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable(()=>e(Tt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Hu{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class pg{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ym(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){L(this.o===void 0,3512);const n=i=>{i.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,V("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>n(i))};const s=i=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Hu(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(L(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new Hu(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function _g(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let n=0;n<r;n++)e[n]=Math.floor(256*Math.random());return e}/**
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
 */function Nl(){return new TextEncoder}/**
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
 */class kl{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const s=_g(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<e&&(n+=t.charAt(s[i]%62))}return n}}function q(r,t){return r<t?-1:r>t?1:0}function lo(r,t){let e=0;for(;e<r.length&&e<t.length;){const n=r.codePointAt(e),s=t.codePointAt(e);if(n!==s){if(n<128&&s<128)return q(n,s);{const i=Nl(),a=yg(i.encode(Wu(r,e)),i.encode(Wu(t,e)));return a!==0?a:q(n,s)}}e+=n>65535?2:1}return q(r.length,t.length)}function Wu(r,t){return r.codePointAt(t)>65535?r.substring(t,t+2):r.substring(t,t+1)}function yg(r,t){for(let e=0;e<r.length&&e<t.length;++e)if(r[e]!==t[e])return q(r[e],t[e]);return q(r.length,t.length)}function mn(r,t,e){return r.length===t.length&&r.every((n,s)=>e(n,t[s]))}function Ml(r){return r+"\0"}/**
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
 */const Yu=-62135596800,Ju=1e6;class ot{static now(){return ot.fromMillis(Date.now())}static fromDate(t){return ot.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor((t-1e3*e)*Ju);return new ot(e,n)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new x(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new x(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Yu)throw new x(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new x(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ju}_compareTo(t){return this.seconds===t.seconds?q(this.nanoseconds,t.nanoseconds):q(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-Yu;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class B{static fromTimestamp(t){return new B(t)}static min(){return new B(new ot(0,0))}static max(){return new B(new ot(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Xu="__name__";class Bt{constructor(t,e,n){e===void 0?e=0:e>t.length&&O(637,{offset:e,range:t.length}),n===void 0?n=t.length-e:n>t.length-e&&O(1746,{length:n,range:t.length-e}),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return Bt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Bt?t.forEach(n=>{e.push(n)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const i=Bt.compareSegments(t.get(s),e.get(s));if(i!==0)return i}return q(t.length,e.length)}static compareSegments(t,e){const n=Bt.isNumericId(t),s=Bt.isNumericId(e);return n&&!s?-1:!n&&s?1:n&&s?Bt.extractNumericId(t).compare(Bt.extractNumericId(e)):lo(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return de.fromString(t.substring(4,t.length-2))}}class J extends Bt{construct(t,e,n){return new J(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new x(P.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(s=>s.length>0))}return new J(e)}static emptyPath(){return new J([])}}const Ig=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class it extends Bt{construct(t,e,n){return new it(t,e,n)}static isValidIdentifier(t){return Ig.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),it.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Xu}static keyField(){return new it([Xu])}static fromServerFormat(t){const e=[];let n="",s=0;const i=()=>{if(n.length===0)throw new x(P.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let a=!1;for(;s<t.length;){const u=t[s];if(u==="\\"){if(s+1===t.length)throw new x(P.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new x(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=l,s+=2}else u==="`"?(a=!a,s++):u!=="."||a?(n+=u,s++):(i(),s++)}if(i(),a)throw new x(P.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new it(e)}static emptyPath(){return new it([])}}/**
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
 */class M{constructor(t){this.path=t}static fromPath(t){return new M(J.fromString(t))}static fromName(t){return new M(J.fromString(t).popFirst(5))}static empty(){return new M(J.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&J.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return J.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new M(new J(t.slice()))}}/**
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
 */const gn=-1;class Ds{constructor(t,e,n,s){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=s}}function ho(r){return r.fields.find(t=>t.kind===2)}function Ce(r){return r.fields.filter(t=>t.kind!==2)}Ds.UNKNOWN_ID=-1;class ys{constructor(t,e){this.fieldPath=t,this.kind=e}}class Ar{constructor(t,e){this.sequenceNumber=t,this.offset=e}static empty(){return new Ar(0,Ot.min())}}function Ol(r,t){const e=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,s=B.fromTimestamp(n===1e9?new ot(e+1,0):new ot(e,n));return new Ot(s,M.empty(),t)}function Fl(r){return new Ot(r.readTime,r.key,gn)}class Ot{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Ot(B.min(),M.empty(),gn)}static max(){return new Ot(B.max(),M.empty(),gn)}}function Uo(r,t){let e=r.readTime.compareTo(t.readTime);return e!==0?e:(e=M.comparator(r.documentKey,t.documentKey),e!==0?e:q(r.largestBatchId,t.largestBatchId))}/**
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
 */const Ll="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Bl{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function Ie(r){if(r.code!==P.FAILED_PRECONDITION||r.message!==Ll)throw r;V("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class w{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&O(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new w((n,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(n,s)},this.catchCallback=i=>{this.wrapFailure(e,i).next(n,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof w?e:w.resolve(e)}catch(e){return w.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):w.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):w.reject(e)}static resolve(t){return new w((e,n)=>{e(t)})}static reject(t){return new w((e,n)=>{n(t)})}static waitFor(t){return new w((e,n)=>{let s=0,i=0,a=!1;t.forEach(u=>{++s,u.next(()=>{++i,a&&i===s&&e()},l=>n(l))}),a=!0,i===s&&e()})}static or(t){let e=w.resolve(!1);for(const n of t)e=e.next(s=>s?w.resolve(s):n());return e}static forEach(t,e){const n=[];return t.forEach((s,i)=>{n.push(e.call(this,s,i))}),this.waitFor(n)}static mapArray(t,e){return new w((n,s)=>{const i=t.length,a=new Array(i);let u=0;for(let l=0;l<i;l++){const d=l;e(t[d]).next(m=>{a[d]=m,++u,u===i&&n(a)},m=>s(m))}})}static doWhile(t,e){return new w((n,s)=>{const i=()=>{t()===!0?e().next(()=>{i()},s):n()};i()})}}/**
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
 */const Nt="SimpleDb";class Xs{static open(t,e,n,s){try{return new Xs(e,t.transaction(s,n))}catch(i){throw new mr(e,i)}}constructor(t,e){this.action=t,this.transaction=e,this.aborted=!1,this.S=new jt,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{e.error?this.S.reject(new mr(t,e.error)):this.S.resolve()},this.transaction.onerror=n=>{const s=qo(n.target.error);this.S.reject(new mr(t,s))}}get D(){return this.S.promise}abort(t){t&&this.S.reject(t),this.aborted||(V(Nt,"Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}v(){const t=this.transaction;this.aborted||typeof t.commit!="function"||t.commit()}store(t){const e=this.transaction.objectStore(t);return new Tg(e)}}class fe{static delete(t){return V(Nt,"Removing database:",t),xe(pl().indexedDB.deleteDatabase(t)).toPromise()}static C(){if(!Il())return!1;if(fe.F())return!0;const t=Ps(),e=fe.M(t),n=0<e&&e<10,s=Ul(t),i=0<s&&s<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||n||i)}static F(){var t;return typeof process<"u"&&((t=process.__PRIVATE_env)===null||t===void 0?void 0:t.O)==="YES"}static N(t,e){return t.store(e)}static M(t){const e=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=e?e[1].split("_").slice(0,2).join("."):"-1";return Number(n)}constructor(t,e,n){this.name=t,this.version=e,this.B=n,this.L=null,fe.M(Ps())===12.2&&ct("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async k(t){return this.db||(V(Nt,"Opening database:",this.name),this.db=await new Promise((e,n)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const a=i.target.result;e(a)},s.onblocked=()=>{n(new mr(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const a=i.target.error;a.name==="VersionError"?n(new x(P.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):a.name==="InvalidStateError"?n(new x(P.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+a)):n(new mr(t,a))},s.onupgradeneeded=i=>{V(Nt,'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const a=i.target.result;if(this.L!==null&&this.L!==i.oldVersion)throw new Error(`refusing to open IndexedDB database due to potential corruption of the IndexedDB database data; this corruption could be caused by clicking the "clear site data" button in a web browser; try reloading the web page to re-initialize the IndexedDB database: lastClosedDbVersion=${this.L}, event.oldVersion=${i.oldVersion}, event.newVersion=${i.newVersion}, db.version=${a.version}`);this.B.q(a,s.transaction,i.oldVersion,this.version).next(()=>{V(Nt,"Database upgrade to version "+this.version+" complete")})}}),this.db.addEventListener("close",e=>{const n=e.target;this.L=n.version},{passive:!0})),this.$&&(this.db.onversionchange=e=>this.$(e)),this.db}U(t){this.$=t,this.db&&(this.db.onversionchange=e=>t(e))}async runTransaction(t,e,n,s){const i=e==="readonly";let a=0;for(;;){++a;try{this.db=await this.k(t);const u=Xs.open(this.db,t,i?"readonly":"readwrite",n),l=s(u).next(d=>(u.v(),d)).catch(d=>(u.abort(d),w.reject(d))).toPromise();return l.catch(()=>{}),await u.D,l}catch(u){const l=u,d=l.name!=="FirebaseError"&&a<3;if(V(Nt,"Transaction failed with error:",l.message,"Retrying:",d),this.close(),!d)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}function Ul(r){const t=r.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}class Eg{constructor(t){this.K=t,this.W=!1,this.G=null}get isDone(){return this.W}get j(){return this.G}set cursor(t){this.K=t}done(){this.W=!0}H(t){this.G=t}delete(){return xe(this.K.delete())}}class mr extends x{constructor(t,e){super(P.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${e}`),this.name="IndexedDbTransactionError"}}function Ee(r){return r.name==="IndexedDbTransactionError"}class Tg{constructor(t){this.store=t}put(t,e){let n;return e!==void 0?(V(Nt,"PUT",this.store.name,t,e),n=this.store.put(e,t)):(V(Nt,"PUT",this.store.name,"<auto-key>",t),n=this.store.put(t)),xe(n)}add(t){return V(Nt,"ADD",this.store.name,t,t),xe(this.store.add(t))}get(t){return xe(this.store.get(t)).next(e=>(e===void 0&&(e=null),V(Nt,"GET",this.store.name,t,e),e))}delete(t){return V(Nt,"DELETE",this.store.name,t),xe(this.store.delete(t))}count(){return V(Nt,"COUNT",this.store.name),xe(this.store.count())}J(t,e){const n=this.options(t,e),s=n.index?this.store.index(n.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(n.range);return new w((a,u)=>{i.onerror=l=>{u(l.target.error)},i.onsuccess=l=>{a(l.target.result)}})}{const i=this.cursor(n),a=[];return this.Y(i,(u,l)=>{a.push(l)}).next(()=>a)}}Z(t,e){const n=this.store.getAll(t,e===null?void 0:e);return new w((s,i)=>{n.onerror=a=>{i(a.target.error)},n.onsuccess=a=>{s(a.target.result)}})}X(t,e){V(Nt,"DELETE ALL",this.store.name);const n=this.options(t,e);n.ee=!1;const s=this.cursor(n);return this.Y(s,(i,a,u)=>u.delete())}te(t,e){let n;e?n=t:(n={},e=t);const s=this.cursor(n);return this.Y(s,e)}ne(t){const e=this.cursor({});return new w((n,s)=>{e.onerror=i=>{const a=qo(i.target.error);s(a)},e.onsuccess=i=>{const a=i.target.result;a?t(a.primaryKey,a.value).next(u=>{u?a.continue():n()}):n()}})}Y(t,e){const n=[];return new w((s,i)=>{t.onerror=a=>{i(a.target.error)},t.onsuccess=a=>{const u=a.target.result;if(!u)return void s();const l=new Eg(u),d=e(u.primaryKey,u.value,l);if(d instanceof w){const m=d.catch(g=>(l.done(),w.reject(g)));n.push(m)}l.isDone?s():l.j===null?u.continue():u.continue(l.j)}}).next(()=>w.waitFor(n))}options(t,e){let n;return t!==void 0&&(typeof t=="string"?n=t:e=t),{index:n,range:e}}cursor(t){let e="next";if(t.reverse&&(e="prev"),t.index){const n=this.store.index(t.index);return t.ee?n.openKeyCursor(t.range,e):n.openCursor(t.range,e)}return this.store.openCursor(t.range,e)}}function xe(r){return new w((t,e)=>{r.onsuccess=n=>{const s=n.target.result;t(s)},r.onerror=n=>{const s=qo(n.target.error);e(s)}})}let Zu=!1;function qo(r){const t=fe.M(Ps());if(t>=12.2&&t<13){const e="An internal error was encountered in the Indexed Database server";if(r.message.indexOf(e)>=0){const n=new x("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${e}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Zu||(Zu=!0,setTimeout(()=>{throw n},0)),n}}return r}const gr="IndexBackfiller";class vg{constructor(t,e){this.asyncQueue=t,this.re=e,this.task=null}start(){this.ie(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}ie(t){V(gr,`Scheduled in ${t}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",t,async()=>{this.task=null;try{const e=await this.re.se();V(gr,`Documents written: ${e}`)}catch(e){Ee(e)?V(gr,"Ignoring IndexedDB error during index backfill: ",e):await Ie(e)}await this.ie(6e4)})}}class wg{constructor(t,e){this.localStore=t,this.persistence=e}async se(t=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",e=>this.oe(e,t))}oe(t,e){const n=new Set;let s=e,i=!0;return w.doWhile(()=>i===!0&&s>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(t).next(a=>{if(a!==null&&!n.has(a))return V(gr,`Processing collection: ${a}`),this._e(t,a,s).next(u=>{s-=u,n.add(a)});i=!1})).next(()=>e-s)}_e(t,e,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(t,e).next(s=>this.localStore.localDocuments.getNextDocuments(t,e,s,n).next(i=>{const a=i.changes;return this.localStore.indexManager.updateIndexEntries(t,a).next(()=>this.ae(s,i)).next(u=>(V(gr,`Updating offset: ${u}`),this.localStore.indexManager.updateCollectionGroup(t,e,u))).next(()=>a.size)}))}ae(t,e){let n=t;return e.changes.forEach((s,i)=>{const a=Fl(i);Uo(a,n)>0&&(n=a)}),new Ot(n.readTime,n.documentKey,Math.max(e.batchId,t.largestBatchId))}}/**
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
 */class Vt{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=n=>this.ue(n),this.ce=n=>e.writeSequenceNumber(n))}ue(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ce&&this.ce(t),t}}Vt.le=-1;/**
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
 */const Le=-1;function Zs(r){return r==null}function Rr(r){return r===0&&1/r==-1/0}function ql(r){return typeof r=="number"&&Number.isInteger(r)&&!Rr(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const xs="";function At(r){let t="";for(let e=0;e<r.length;e++)t.length>0&&(t=tc(t)),t=Ag(r.get(e),t);return tc(t)}function Ag(r,t){let e=t;const n=r.length;for(let s=0;s<n;s++){const i=r.charAt(s);switch(i){case"\0":e+="";break;case xs:e+="";break;default:e+=i}}return e}function tc(r){return r+xs+""}function qt(r){const t=r.length;if(L(t>=2,64408,{path:r}),t===2)return L(r.charAt(0)===xs&&r.charAt(1)==="",56145,{path:r}),J.emptyPath();const e=t-2,n=[];let s="";for(let i=0;i<t;){const a=r.indexOf(xs,i);switch((a<0||a>e)&&O(50515,{path:r}),r.charAt(a+1)){case"":const u=r.substring(i,a);let l;s.length===0?l=u:(s+=u,l=s,s=""),n.push(l);break;case"":s+=r.substring(i,a),s+="\0";break;case"":s+=r.substring(i,a+1);break;default:O(61167,{path:r})}i=a+2}return new J(n)}/**
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
 */const De="remoteDocuments",Fr="owner",tn="owner",br="mutationQueues",Rg="userId",Lt="mutations",ec="batchId",Oe="userMutationsIndex",nc=["userId","batchId"];/**
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
 */function Is(r,t){return[r,At(t)]}function zl(r,t,e){return[r,At(t),e]}const bg={},pn="documentMutations",Ns="remoteDocumentsV14",Sg=["prefixPath","collectionGroup","readTime","documentId"],Es="documentKeyIndex",Pg=["prefixPath","collectionGroup","documentId"],jl="collectionGroupIndex",Vg=["collectionGroup","readTime","prefixPath","documentId"],Sr="remoteDocumentGlobal",fo="remoteDocumentGlobalKey",_n="targets",$l="queryTargetsIndex",Cg=["canonicalId","targetId"],yn="targetDocuments",Dg=["targetId","path"],zo="documentTargetsIndex",xg=["path","targetId"],ks="targetGlobalKey",Be="targetGlobal",Pr="collectionParents",Ng=["collectionId","parent"],In="clientMetadata",kg="clientId",ti="bundles",Mg="bundleId",ei="namedQueries",Og="name",jo="indexConfiguration",Fg="indexId",mo="collectionGroupIndex",Lg="collectionGroup",Ms="indexState",Bg=["indexId","uid"],Kl="sequenceNumberIndex",Ug=["uid","sequenceNumber"],Os="indexEntries",qg=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],Gl="documentKeyIndex",zg=["indexId","uid","orderedDocumentKey"],ni="documentOverlays",jg=["userId","collectionPath","documentId"],go="collectionPathOverlayIndex",$g=["userId","collectionPath","largestBatchId"],Ql="collectionGroupOverlayIndex",Kg=["userId","collectionGroup","largestBatchId"],$o="globals",Gg="name",Hl=[br,Lt,pn,De,_n,Fr,Be,yn,In,Sr,Pr,ti,ei],Qg=[...Hl,ni],Wl=[br,Lt,pn,Ns,_n,Fr,Be,yn,In,Sr,Pr,ti,ei,ni],Yl=Wl,Ko=[...Yl,jo,Ms,Os],Hg=Ko,Wg=[...Ko,$o];/**
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
 */class po extends Bl{constructor(t,e){super(),this.he=t,this.currentSequenceNumber=e}}function dt(r,t){const e=F(r);return fe.N(e.he,t)}/**
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
 */function rc(r){let t=0;for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t++;return t}function Te(r,t){for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t(e,r[e])}function Jl(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
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
 */class nt{constructor(t,e){this.comparator=t,this.root=e||gt.EMPTY}insert(t,e){return new nt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,gt.BLACK,null,null))}remove(t){return new nt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,gt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(n===0)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new hs(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new hs(this.root,t,this.comparator,!1)}getReverseIterator(){return new hs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new hs(this.root,t,this.comparator,!0)}}class hs{constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class gt{constructor(t,e,n,s,i){this.key=t,this.value=e,this.color=n??gt.RED,this.left=s??gt.EMPTY,this.right=i??gt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,s,i){return new gt(t??this.key,e??this.value,n??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this;const i=n(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,e,n),null):i===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return gt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return gt.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,gt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,gt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw O(43730,{key:this.key,value:this.value});if(this.right.isRed())throw O(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw O(27949);return t+(this.isRed()?0:1)}}gt.EMPTY=null,gt.RED=!0,gt.BLACK=!1;gt.EMPTY=new class{constructor(){this.size=0}get key(){throw O(57766)}get value(){throw O(16141)}get color(){throw O(16727)}get left(){throw O(29726)}get right(){throw O(36894)}copy(t,e,n,s,i){return this}insert(t,e,n){return new gt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Z{constructor(t){this.comparator=t,this.data=new nt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new sc(this.data.getIterator())}getIteratorFrom(t){return new sc(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(n=>{e=e.add(n)}),e}isEqual(t){if(!(t instanceof Z)||this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,i=n.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new Z(this.comparator);return e.data=t,e}}class sc{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function en(r){return r.hasNext()?r.getNext():void 0}/**
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
 */class Ct{constructor(t){this.fields=t,t.sort(it.comparator)}static empty(){return new Ct([])}unionWith(t){let e=new Z(it.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new Ct(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return mn(this.fields,t.fields,(e,n)=>e.isEqual(n))}}/**
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
 */class Xl extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class lt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Xl("Invalid base64 string: "+i):i}}(t);return new lt(e)}static fromUint8Array(t){const e=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(t);return new lt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return q(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}lt.EMPTY_BYTE_STRING=new lt("");const Yg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Xt(r){if(L(!!r,39018),typeof r=="string"){let t=0;const e=Yg.exec(r);if(L(!!e,46558,{timestamp:r}),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:st(r.seconds),nanos:st(r.nanos)}}function st(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Zt(r){return typeof r=="string"?lt.fromBase64String(r):lt.fromUint8Array(r)}/**
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
 */const Zl="server_timestamp",th="__type__",eh="__previous_value__",nh="__local_write_time__";function Go(r){var t,e;return((e=(((t=r?.mapValue)===null||t===void 0?void 0:t.fields)||{})[th])===null||e===void 0?void 0:e.stringValue)===Zl}function ri(r){const t=r.mapValue.fields[eh];return Go(t)?ri(t):t}function Vr(r){const t=Xt(r.mapValue.fields[nh].timestampValue);return new ot(t.seconds,t.nanos)}/**
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
 */class Jg{constructor(t,e,n,s,i,a,u,l,d){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=l,this.useFetchStreams=d}}const Fs="(default)";class ze{constructor(t,e){this.projectId=t,this.database=e||Fs}static empty(){return new ze("","")}get isDefaultDatabase(){return this.database===Fs}isEqual(t){return t instanceof ze&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const Qo="__type__",rh="__max__",le={mapValue:{fields:{__type__:{stringValue:rh}}}},Ho="__vector__",En="value",Ts={nullValue:"NULL_VALUE"};function ge(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Go(r)?4:sh(r)?9007199254740991:si(r)?10:11:O(28295,{value:r})}function $t(r,t){if(r===t)return!0;const e=ge(r);if(e!==ge(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return Vr(r).isEqual(Vr(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Xt(s.timestampValue),u=Xt(i.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(s,i){return Zt(s.bytesValue).isEqual(Zt(i.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(s,i){return st(s.geoPointValue.latitude)===st(i.geoPointValue.latitude)&&st(s.geoPointValue.longitude)===st(i.geoPointValue.longitude)}(r,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return st(s.integerValue)===st(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=st(s.doubleValue),u=st(i.doubleValue);return a===u?Rr(a)===Rr(u):isNaN(a)&&isNaN(u)}return!1}(r,t);case 9:return mn(r.arrayValue.values||[],t.arrayValue.values||[],$t);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},u=i.mapValue.fields||{};if(rc(a)!==rc(u))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(u[l]===void 0||!$t(a[l],u[l])))return!1;return!0}(r,t);default:return O(52216,{left:r})}}function Cr(r,t){return(r.values||[]).find(e=>$t(e,t))!==void 0}function pe(r,t){if(r===t)return 0;const e=ge(r),n=ge(t);if(e!==n)return q(e,n);switch(e){case 0:case 9007199254740991:return 0;case 1:return q(r.booleanValue,t.booleanValue);case 2:return function(i,a){const u=st(i.integerValue||i.doubleValue),l=st(a.integerValue||a.doubleValue);return u<l?-1:u>l?1:u===l?0:isNaN(u)?isNaN(l)?0:-1:1}(r,t);case 3:return ic(r.timestampValue,t.timestampValue);case 4:return ic(Vr(r),Vr(t));case 5:return lo(r.stringValue,t.stringValue);case 6:return function(i,a){const u=Zt(i),l=Zt(a);return u.compareTo(l)}(r.bytesValue,t.bytesValue);case 7:return function(i,a){const u=i.split("/"),l=a.split("/");for(let d=0;d<u.length&&d<l.length;d++){const m=q(u[d],l[d]);if(m!==0)return m}return q(u.length,l.length)}(r.referenceValue,t.referenceValue);case 8:return function(i,a){const u=q(st(i.latitude),st(a.latitude));return u!==0?u:q(st(i.longitude),st(a.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return oc(r.arrayValue,t.arrayValue);case 10:return function(i,a){var u,l,d,m;const g=i.fields||{},I=a.fields||{},S=(u=g[En])===null||u===void 0?void 0:u.arrayValue,C=(l=I[En])===null||l===void 0?void 0:l.arrayValue,k=q(((d=S?.values)===null||d===void 0?void 0:d.length)||0,((m=C?.values)===null||m===void 0?void 0:m.length)||0);return k!==0?k:oc(S,C)}(r.mapValue,t.mapValue);case 11:return function(i,a){if(i===le.mapValue&&a===le.mapValue)return 0;if(i===le.mapValue)return 1;if(a===le.mapValue)return-1;const u=i.fields||{},l=Object.keys(u),d=a.fields||{},m=Object.keys(d);l.sort(),m.sort();for(let g=0;g<l.length&&g<m.length;++g){const I=lo(l[g],m[g]);if(I!==0)return I;const S=pe(u[l[g]],d[m[g]]);if(S!==0)return S}return q(l.length,m.length)}(r.mapValue,t.mapValue);default:throw O(23264,{Pe:e})}}function ic(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return q(r,t);const e=Xt(r),n=Xt(t),s=q(e.seconds,n.seconds);return s!==0?s:q(e.nanos,n.nanos)}function oc(r,t){const e=r.values||[],n=t.values||[];for(let s=0;s<e.length&&s<n.length;++s){const i=pe(e[s],n[s]);if(i)return i}return q(e.length,n.length)}function Tn(r){return _o(r)}function _o(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(e){const n=Xt(e);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(e){return Zt(e).toBase64()}(r.bytesValue):"referenceValue"in r?function(e){return M.fromName(e).toString()}(r.referenceValue):"geoPointValue"in r?function(e){return`geo(${e.latitude},${e.longitude})`}(r.geoPointValue):"arrayValue"in r?function(e){let n="[",s=!0;for(const i of e.values||[])s?s=!1:n+=",",n+=_o(i);return n+"]"}(r.arrayValue):"mapValue"in r?function(e){const n=Object.keys(e.fields||{}).sort();let s="{",i=!0;for(const a of n)i?i=!1:s+=",",s+=`${a}:${_o(e.fields[a])}`;return s+"}"}(r.mapValue):O(61005,{value:r})}function vs(r){switch(ge(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=ri(r);return t?16+vs(t):16;case 5:return 2*r.stringValue.length;case 6:return Zt(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(n){return(n.values||[]).reduce((s,i)=>s+vs(i),0)}(r.arrayValue);case 10:case 11:return function(n){let s=0;return Te(n.fields,(i,a)=>{s+=i.length+vs(a)}),s}(r.mapValue);default:throw O(13486,{value:r})}}function Dr(r,t){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${t.path.canonicalString()}`}}function yo(r){return!!r&&"integerValue"in r}function xr(r){return!!r&&"arrayValue"in r}function ac(r){return!!r&&"nullValue"in r}function uc(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function ws(r){return!!r&&"mapValue"in r}function si(r){var t,e;return((e=(((t=r?.mapValue)===null||t===void 0?void 0:t.fields)||{})[Qo])===null||e===void 0?void 0:e.stringValue)===Ho}function pr(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const t={mapValue:{fields:{}}};return Te(r.mapValue.fields,(e,n)=>t.mapValue.fields[e]=pr(n)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(r.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=pr(r.arrayValue.values[e]);return t}return Object.assign({},r)}function sh(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===rh}const ih={mapValue:{fields:{[Qo]:{stringValue:Ho},[En]:{arrayValue:{}}}}};function Xg(r){return"nullValue"in r?Ts:"booleanValue"in r?{booleanValue:!1}:"integerValue"in r||"doubleValue"in r?{doubleValue:NaN}:"timestampValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in r?{stringValue:""}:"bytesValue"in r?{bytesValue:""}:"referenceValue"in r?Dr(ze.empty(),M.empty()):"geoPointValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in r?{arrayValue:{}}:"mapValue"in r?si(r)?ih:{mapValue:{}}:O(35942,{value:r})}function Zg(r){return"nullValue"in r?{booleanValue:!1}:"booleanValue"in r?{doubleValue:NaN}:"integerValue"in r||"doubleValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in r?{stringValue:""}:"stringValue"in r?{bytesValue:""}:"bytesValue"in r?Dr(ze.empty(),M.empty()):"referenceValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in r?{arrayValue:{}}:"arrayValue"in r?ih:"mapValue"in r?si(r)?{mapValue:{}}:le:O(61959,{value:r})}function cc(r,t){const e=pe(r.value,t.value);return e!==0?e:r.inclusive&&!t.inclusive?-1:!r.inclusive&&t.inclusive?1:0}function lc(r,t){const e=pe(r.value,t.value);return e!==0?e:r.inclusive&&!t.inclusive?1:!r.inclusive&&t.inclusive?-1:0}/**
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
 */class wt{constructor(t){this.value=t}static empty(){return new wt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!ws(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=pr(e)}setAll(t){let e=it.emptyPath(),n={},s=[];t.forEach((a,u)=>{if(!e.isImmediateParentOf(u)){const l=this.getFieldsMap(e);this.applyChanges(l,n,s),n={},s=[],e=u.popLast()}a?n[u.lastSegment()]=pr(a):s.push(u.lastSegment())});const i=this.getFieldsMap(e);this.applyChanges(i,n,s)}delete(t){const e=this.field(t.popLast());ws(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return $t(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];ws(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){Te(e,(s,i)=>t[s]=i);for(const s of n)delete t[s]}clone(){return new wt(pr(this.value))}}function oh(r){const t=[];return Te(r.fields,(e,n)=>{const s=new it([e]);if(ws(n)){const i=oh(n.mapValue).fields;if(i.length===0)t.push(s);else for(const a of i)t.push(s.child(a))}else t.push(s)}),new Ct(t)}/**
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
 */class ut{constructor(t,e,n,s,i,a,u){this.key=t,this.documentType=e,this.version=n,this.readTime=s,this.createTime=i,this.data=a,this.documentState=u}static newInvalidDocument(t){return new ut(t,0,B.min(),B.min(),B.min(),wt.empty(),0)}static newFoundDocument(t,e,n,s){return new ut(t,1,e,B.min(),n,s,0)}static newNoDocument(t,e){return new ut(t,2,e,B.min(),B.min(),wt.empty(),0)}static newUnknownDocument(t,e){return new ut(t,3,e,B.min(),B.min(),wt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(B.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=wt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=B.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof ut&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ut(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class vn{constructor(t,e){this.position=t,this.inclusive=e}}function hc(r,t,e){let n=0;for(let s=0;s<r.position.length;s++){const i=t[s],a=r.position[s];if(i.field.isKeyField()?n=M.comparator(M.fromName(a.referenceValue),e.key):n=pe(a,e.data.field(i.field)),i.dir==="desc"&&(n*=-1),n!==0)break}return n}function dc(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let e=0;e<r.position.length;e++)if(!$t(r.position[e],t.position[e]))return!1;return!0}/**
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
 */class Nr{constructor(t,e="asc"){this.field=t,this.dir=e}}function tp(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
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
 */class ah{}class K extends ah{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,n):new ep(t,e,n):e==="array-contains"?new sp(t,n):e==="in"?new fh(t,n):e==="not-in"?new ip(t,n):e==="array-contains-any"?new op(t,n):new K(t,e,n)}static createKeyFieldInFilter(t,e,n){return e==="in"?new np(t,n):new rp(t,n)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(pe(e,this.value)):e!==null&&ge(this.value)===ge(e)&&this.matchesComparison(pe(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return O(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class X extends ah{constructor(t,e){super(),this.filters=t,this.op=e,this.Te=null}static create(t,e){return new X(t,e)}matches(t){return wn(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function wn(r){return r.op==="and"}function Io(r){return r.op==="or"}function Wo(r){return uh(r)&&wn(r)}function uh(r){for(const t of r.filters)if(t instanceof X)return!1;return!0}function Eo(r){if(r instanceof K)return r.field.canonicalString()+r.op.toString()+Tn(r.value);if(Wo(r))return r.filters.map(t=>Eo(t)).join(",");{const t=r.filters.map(e=>Eo(e)).join(",");return`${r.op}(${t})`}}function ch(r,t){return r instanceof K?function(n,s){return s instanceof K&&n.op===s.op&&n.field.isEqual(s.field)&&$t(n.value,s.value)}(r,t):r instanceof X?function(n,s){return s instanceof X&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,a,u)=>i&&ch(a,s.filters[u]),!0):!1}(r,t):void O(19439)}function lh(r,t){const e=r.filters.concat(t);return X.create(e,r.op)}function hh(r){return r instanceof K?function(e){return`${e.field.canonicalString()} ${e.op} ${Tn(e.value)}`}(r):r instanceof X?function(e){return e.op.toString()+" {"+e.getFilters().map(hh).join(" ,")+"}"}(r):"Filter"}class ep extends K{constructor(t,e,n){super(t,e,n),this.key=M.fromName(n.referenceValue)}matches(t){const e=M.comparator(t.key,this.key);return this.matchesComparison(e)}}class np extends K{constructor(t,e){super(t,"in",e),this.keys=dh("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class rp extends K{constructor(t,e){super(t,"not-in",e),this.keys=dh("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function dh(r,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(n=>M.fromName(n.referenceValue))}class sp extends K{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return xr(e)&&Cr(e.arrayValue,this.value)}}class fh extends K{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Cr(this.value.arrayValue,e)}}class ip extends K{constructor(t,e){super(t,"not-in",e)}matches(t){if(Cr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!Cr(this.value.arrayValue,e)}}class op extends K{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!xr(e)||!e.arrayValue.values)&&e.arrayValue.values.some(n=>Cr(this.value.arrayValue,n))}}/**
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
 */class ap{constructor(t,e=null,n=[],s=[],i=null,a=null,u=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=a,this.endAt=u,this.Ie=null}}function To(r,t=null,e=[],n=[],s=null,i=null,a=null){return new ap(r,t,e,n,s,i,a)}function je(r){const t=F(r);if(t.Ie===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(n=>Eo(n)).join(","),e+="|ob:",e+=t.orderBy.map(n=>function(i){return i.field.canonicalString()+i.dir}(n)).join(","),Zs(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Tn(n)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Tn(n)).join(",")),t.Ie=e}return t.Ie}function Lr(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<r.orderBy.length;e++)if(!tp(r.orderBy[e],t.orderBy[e]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let e=0;e<r.filters.length;e++)if(!ch(r.filters[e],t.filters[e]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!dc(r.startAt,t.startAt)&&dc(r.endAt,t.endAt)}function Ls(r){return M.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function Bs(r,t){return r.filters.filter(e=>e instanceof K&&e.field.isEqual(t))}function fc(r,t,e){let n=Ts,s=!0;for(const i of Bs(r,t)){let a=Ts,u=!0;switch(i.op){case"<":case"<=":a=Xg(i.value);break;case"==":case"in":case">=":a=i.value;break;case">":a=i.value,u=!1;break;case"!=":case"not-in":a=Ts}cc({value:n,inclusive:s},{value:a,inclusive:u})<0&&(n=a,s=u)}if(e!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(t)){const a=e.position[i];cc({value:n,inclusive:s},{value:a,inclusive:e.inclusive})<0&&(n=a,s=e.inclusive);break}}return{value:n,inclusive:s}}function mc(r,t,e){let n=le,s=!0;for(const i of Bs(r,t)){let a=le,u=!0;switch(i.op){case">=":case">":a=Zg(i.value),u=!1;break;case"==":case"in":case"<=":a=i.value;break;case"<":a=i.value,u=!1;break;case"!=":case"not-in":a=le}lc({value:n,inclusive:s},{value:a,inclusive:u})>0&&(n=a,s=u)}if(e!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(t)){const a=e.position[i];lc({value:n,inclusive:s},{value:a,inclusive:e.inclusive})>0&&(n=a,s=e.inclusive);break}}return{value:n,inclusive:s}}/**
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
 */class Mn{constructor(t,e=null,n=[],s=[],i=null,a="F",u=null,l=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=a,this.startAt=u,this.endAt=l,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function mh(r,t,e,n,s,i,a,u){return new Mn(r,t,e,n,s,i,a,u)}function ii(r){return new Mn(r)}function gc(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function gh(r){return r.collectionGroup!==null}function _r(r){const t=F(r);if(t.Ee===null){t.Ee=[];const e=new Set;for(const i of t.explicitOrderBy)t.Ee.push(i),e.add(i.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new Z(it.comparator);return a.filters.forEach(l=>{l.getFlattenedFilters().forEach(d=>{d.isInequality()&&(u=u.add(d.field))})}),u})(t).forEach(i=>{e.has(i.canonicalString())||i.isKeyField()||t.Ee.push(new Nr(i,n))}),e.has(it.keyField().canonicalString())||t.Ee.push(new Nr(it.keyField(),n))}return t.Ee}function Mt(r){const t=F(r);return t.de||(t.de=up(t,_r(r))),t.de}function up(r,t){if(r.limitType==="F")return To(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Nr(s.field,i)});const e=r.endAt?new vn(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new vn(r.startAt.position,r.startAt.inclusive):null;return To(r.path,r.collectionGroup,t,r.filters,r.limit,e,n)}}function vo(r,t){const e=r.filters.concat([t]);return new Mn(r.path,r.collectionGroup,r.explicitOrderBy.slice(),e,r.limit,r.limitType,r.startAt,r.endAt)}function wo(r,t,e){return new Mn(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,e,r.startAt,r.endAt)}function oi(r,t){return Lr(Mt(r),Mt(t))&&r.limitType===t.limitType}function ph(r){return`${je(Mt(r))}|lt:${r.limitType}`}function un(r){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>hh(s)).join(", ")}]`),Zs(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Tn(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Tn(s)).join(",")),`Target(${n})`}(Mt(r))}; limitType=${r.limitType})`}function Br(r,t){return t.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):M.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(r,t)&&function(n,s){for(const i of _r(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(r,t)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(r,t)&&function(n,s){return!(n.startAt&&!function(a,u,l){const d=hc(a,u,l);return a.inclusive?d<=0:d<0}(n.startAt,_r(n),s)||n.endAt&&!function(a,u,l){const d=hc(a,u,l);return a.inclusive?d>=0:d>0}(n.endAt,_r(n),s))}(r,t)}function _h(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function yh(r){return(t,e)=>{let n=!1;for(const s of _r(r)){const i=cp(s,t,e);if(i!==0)return i;n=n||s.field.isKeyField()}return 0}}function cp(r,t,e){const n=r.field.isKeyField()?M.comparator(t.key,e.key):function(i,a,u){const l=a.data.field(i),d=u.data.field(i);return l!==null&&d!==null?pe(l,d):O(42886)}(r.field,t,e);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return O(19790,{direction:r.dir})}}/**
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
 */class te{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n!==void 0){for(const[s,i]of n)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,e){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return this.inner[n]=[[t,e]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n===void 0)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],t))return n.length===1?delete this.inner[e]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Te(this.inner,(e,n)=>{for(const[s,i]of n)t(s,i)})}isEmpty(){return Jl(this.inner)}size(){return this.innerSize}}/**
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
 */const lp=new nt(M.comparator);function kt(){return lp}const Ih=new nt(M.comparator);function lr(...r){let t=Ih;for(const e of r)t=t.insert(e.key,e);return t}function Eh(r){let t=Ih;return r.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function zt(){return yr()}function Th(){return yr()}function yr(){return new te(r=>r.toString(),(r,t)=>r.isEqual(t))}const hp=new nt(M.comparator),dp=new Z(M.comparator);function j(...r){let t=dp;for(const e of r)t=t.add(e);return t}const fp=new Z(q);function Yo(){return fp}/**
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
 */function Jo(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Rr(t)?"-0":t}}function vh(r){return{integerValue:""+r}}function mp(r,t){return ql(t)?vh(t):Jo(r,t)}/**
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
 */class ai{constructor(){this._=void 0}}function gp(r,t,e){return r instanceof An?function(s,i){const a={fields:{[th]:{stringValue:Zl},[nh]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Go(i)&&(i=ri(i)),i&&(a.fields[eh]=i),{mapValue:a}}(e,t):r instanceof Rn?Ah(r,t):r instanceof bn?Rh(r,t):function(s,i){const a=wh(s,i),u=pc(a)+pc(s.Re);return yo(a)&&yo(s.Re)?vh(u):Jo(s.serializer,u)}(r,t)}function pp(r,t,e){return r instanceof Rn?Ah(r,t):r instanceof bn?Rh(r,t):e}function wh(r,t){return r instanceof kr?function(n){return yo(n)||function(i){return!!i&&"doubleValue"in i}(n)}(t)?t:{integerValue:0}:null}class An extends ai{}class Rn extends ai{constructor(t){super(),this.elements=t}}function Ah(r,t){const e=bh(t);for(const n of r.elements)e.some(s=>$t(s,n))||e.push(n);return{arrayValue:{values:e}}}class bn extends ai{constructor(t){super(),this.elements=t}}function Rh(r,t){let e=bh(t);for(const n of r.elements)e=e.filter(s=>!$t(s,n));return{arrayValue:{values:e}}}class kr extends ai{constructor(t,e){super(),this.serializer=t,this.Re=e}}function pc(r){return st(r.integerValue||r.doubleValue)}function bh(r){return xr(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
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
 */class Sh{constructor(t,e){this.field=t,this.transform=e}}function _p(r,t){return r.field.isEqual(t.field)&&function(n,s){return n instanceof Rn&&s instanceof Rn||n instanceof bn&&s instanceof bn?mn(n.elements,s.elements,$t):n instanceof kr&&s instanceof kr?$t(n.Re,s.Re):n instanceof An&&s instanceof An}(r.transform,t.transform)}class yp{constructor(t,e){this.version=t,this.transformResults=e}}class St{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new St}static exists(t){return new St(void 0,t)}static updateTime(t){return new St(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function As(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class ui{}function Ph(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new ci(r.key,St.none()):new On(r.key,r.data,St.none());{const e=r.data,n=wt.empty();let s=new Z(it.comparator);for(let i of t.fields)if(!s.has(i)){let a=e.field(i);a===null&&i.length>1&&(i=i.popLast(),a=e.field(i)),a===null?n.delete(i):n.set(i,a),s=s.add(i)}return new ee(r.key,n,new Ct(s.toArray()),St.none())}}function Ip(r,t,e){r instanceof On?function(s,i,a){const u=s.value.clone(),l=yc(s.fieldTransforms,i,a.transformResults);u.setAll(l),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(r,t,e):r instanceof ee?function(s,i,a){if(!As(s.precondition,i))return void i.convertToUnknownDocument(a.version);const u=yc(s.fieldTransforms,i,a.transformResults),l=i.data;l.setAll(Vh(s)),l.setAll(u),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(r,t,e):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function Ir(r,t,e,n){return r instanceof On?function(i,a,u,l){if(!As(i.precondition,a))return u;const d=i.value.clone(),m=Ic(i.fieldTransforms,l,a);return d.setAll(m),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(r,t,e,n):r instanceof ee?function(i,a,u,l){if(!As(i.precondition,a))return u;const d=Ic(i.fieldTransforms,l,a),m=a.data;return m.setAll(Vh(i)),m.setAll(d),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),u===null?null:u.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(g=>g.field))}(r,t,e,n):function(i,a,u){return As(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u}(r,t,e)}function Ep(r,t){let e=null;for(const n of r.fieldTransforms){const s=t.data.field(n.field),i=wh(n.transform,s||null);i!=null&&(e===null&&(e=wt.empty()),e.set(n.field,i))}return e||null}function _c(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&mn(n,s,(i,a)=>_p(i,a))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class On extends ui{constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ee extends ui{constructor(t,e,n,s,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Vh(r){const t=new Map;return r.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const n=r.data.field(e);t.set(e,n)}}),t}function yc(r,t,e){const n=new Map;L(r.length===e.length,32656,{Ve:e.length,me:r.length});for(let s=0;s<e.length;s++){const i=r[s],a=i.transform,u=t.data.field(i.field);n.set(i.field,pp(a,u,e[s]))}return n}function Ic(r,t,e){const n=new Map;for(const s of r){const i=s.transform,a=e.data.field(s.field);n.set(s.field,gp(i,a,t))}return n}class ci extends ui{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ch extends ui{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Xo{constructor(t,e,n,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&Ip(i,t,n[s])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Ir(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Ir(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=Th();return this.mutations.forEach(s=>{const i=t.get(s.key),a=i.overlayedDocument;let u=this.applyToLocalView(a,i.mutatedFields);u=e.has(s.key)?null:u;const l=Ph(a,u);l!==null&&n.set(s.key,l),a.isValidDocument()||a.convertToNoDocument(B.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),j())}isEqual(t){return this.batchId===t.batchId&&mn(this.mutations,t.mutations,(e,n)=>_c(e,n))&&mn(this.baseMutations,t.baseMutations,(e,n)=>_c(e,n))}}class Zo{constructor(t,e,n,s){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=s}static from(t,e,n){L(t.mutations.length===n.length,58842,{fe:t.mutations.length,ge:n.length});let s=function(){return hp}();const i=t.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,n[a].version);return new Zo(t,e,n,s)}}/**
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
 */class ta{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class Tp{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var ht,G;function vp(r){switch(r){case P.OK:return O(64938);case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0;default:return O(15467,{code:r})}}function Dh(r){if(r===void 0)return ct("GRPC error has no .code"),P.UNKNOWN;switch(r){case ht.OK:return P.OK;case ht.CANCELLED:return P.CANCELLED;case ht.UNKNOWN:return P.UNKNOWN;case ht.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case ht.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case ht.INTERNAL:return P.INTERNAL;case ht.UNAVAILABLE:return P.UNAVAILABLE;case ht.UNAUTHENTICATED:return P.UNAUTHENTICATED;case ht.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case ht.NOT_FOUND:return P.NOT_FOUND;case ht.ALREADY_EXISTS:return P.ALREADY_EXISTS;case ht.PERMISSION_DENIED:return P.PERMISSION_DENIED;case ht.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case ht.ABORTED:return P.ABORTED;case ht.OUT_OF_RANGE:return P.OUT_OF_RANGE;case ht.UNIMPLEMENTED:return P.UNIMPLEMENTED;case ht.DATA_LOSS:return P.DATA_LOSS;default:return O(39323,{code:r})}}(G=ht||(ht={}))[G.OK=0]="OK",G[G.CANCELLED=1]="CANCELLED",G[G.UNKNOWN=2]="UNKNOWN",G[G.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",G[G.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",G[G.NOT_FOUND=5]="NOT_FOUND",G[G.ALREADY_EXISTS=6]="ALREADY_EXISTS",G[G.PERMISSION_DENIED=7]="PERMISSION_DENIED",G[G.UNAUTHENTICATED=16]="UNAUTHENTICATED",G[G.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",G[G.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",G[G.ABORTED=10]="ABORTED",G[G.OUT_OF_RANGE=11]="OUT_OF_RANGE",G[G.UNIMPLEMENTED=12]="UNIMPLEMENTED",G[G.INTERNAL=13]="INTERNAL",G[G.UNAVAILABLE=14]="UNAVAILABLE",G[G.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const wp=new de([4294967295,4294967295],0);function Ec(r){const t=Nl().encode(r),e=new bl;return e.update(t),new Uint8Array(e.digest())}function Tc(r){const t=new DataView(r.buffer),e=t.getUint32(0,!0),n=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new de([e,n],0),new de([s,i],0)]}class ea{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new hr(`Invalid padding: ${e}`);if(n<0)throw new hr(`Invalid hash count: ${n}`);if(t.length>0&&this.hashCount===0)throw new hr(`Invalid hash count: ${n}`);if(t.length===0&&e!==0)throw new hr(`Invalid padding when bitmap length is 0: ${e}`);this.pe=8*t.length-e,this.ye=de.fromNumber(this.pe)}we(t,e,n){let s=t.add(e.multiply(de.fromNumber(n)));return s.compare(wp)===1&&(s=new de([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ye).toNumber()}be(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.pe===0)return!1;const e=Ec(t),[n,s]=Tc(e);for(let i=0;i<this.hashCount;i++){const a=this.we(n,s,i);if(!this.be(a))return!1}return!0}static create(t,e,n){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),a=new ea(i,s,e);return n.forEach(u=>a.insert(u)),a}insert(t){if(this.pe===0)return;const e=Ec(t),[n,s]=Tc(e);for(let i=0;i<this.hashCount;i++){const a=this.we(n,s,i);this.Se(a)}}Se(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class hr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ur{constructor(t,e,n,s,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const s=new Map;return s.set(t,qr.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new Ur(B.min(),s,new nt(q),kt(),j())}}class qr{constructor(t,e,n,s,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new qr(n,e,j(),j(),j())}}/**
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
 */class Rs{constructor(t,e,n,s){this.De=t,this.removedTargetIds=e,this.key=n,this.ve=s}}class xh{constructor(t,e){this.targetId=t,this.Ce=e}}class Nh{constructor(t,e,n=lt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=s}}class vc{constructor(){this.Fe=0,this.Me=wc(),this.xe=lt.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(t){t.approximateByteSize()>0&&(this.Ne=!0,this.xe=t)}qe(){let t=j(),e=j(),n=j();return this.Me.forEach((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:n=n.add(s);break;default:O(38017,{changeType:i})}}),new qr(this.xe,this.Oe,t,e,n)}Qe(){this.Ne=!1,this.Me=wc()}$e(t,e){this.Ne=!0,this.Me=this.Me.insert(t,e)}Ue(t){this.Ne=!0,this.Me=this.Me.remove(t)}Ke(){this.Fe+=1}We(){this.Fe-=1,L(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class Ap{constructor(t){this.ze=t,this.je=new Map,this.He=kt(),this.Je=ds(),this.Ye=ds(),this.Ze=new nt(q)}Xe(t){for(const e of t.De)t.ve&&t.ve.isFoundDocument()?this.et(e,t.ve):this.tt(e,t.key,t.ve);for(const e of t.removedTargetIds)this.tt(e,t.key,t.ve)}nt(t){this.forEachTarget(t,e=>{const n=this.rt(e);switch(t.state){case 0:this.it(e)&&n.ke(t.resumeToken);break;case 1:n.We(),n.Be||n.Qe(),n.ke(t.resumeToken);break;case 2:n.We(),n.Be||this.removeTarget(e);break;case 3:this.it(e)&&(n.Ge(),n.ke(t.resumeToken));break;case 4:this.it(e)&&(this.st(e),n.ke(t.resumeToken));break;default:O(56790,{state:t.state})}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.je.forEach((n,s)=>{this.it(s)&&e(s)})}ot(t){const e=t.targetId,n=t.Ce.count,s=this._t(e);if(s){const i=s.target;if(Ls(i))if(n===0){const a=new M(i.path);this.tt(e,a,ut.newNoDocument(a,B.min()))}else L(n===1,20013,{expectedCount:n});else{const a=this.ut(e);if(a!==n){const u=this.ct(t),l=u?this.lt(u,t,a):1;if(l!==0){this.st(e);const d=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(e,d)}}}}}ct(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:i=0}=e;let a,u;try{a=Zt(n).toUint8Array()}catch(l){if(l instanceof Xl)return wr("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{u=new ea(a,s,i)}catch(l){return wr(l instanceof hr?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return u.pe===0?null:u}lt(t,e,n){return e.Ce.count===n-this.Tt(t,e.targetId)?0:2}Tt(t,e){const n=this.ze.getRemoteKeysForTarget(e);let s=0;return n.forEach(i=>{const a=this.ze.Pt(),u=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;t.mightContain(u)||(this.tt(e,i,null),s++)}),s}It(t){const e=new Map;this.je.forEach((i,a)=>{const u=this._t(a);if(u){if(i.current&&Ls(u.target)){const l=new M(u.target.path);this.Et(l).has(a)||this.dt(a,l)||this.tt(a,l,ut.newNoDocument(l,t))}i.Le&&(e.set(a,i.qe()),i.Qe())}});let n=j();this.Ye.forEach((i,a)=>{let u=!0;a.forEachWhile(l=>{const d=this._t(l);return!d||d.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(n=n.add(i))}),this.He.forEach((i,a)=>a.setReadTime(t));const s=new Ur(t,e,this.Ze,this.He,n);return this.He=kt(),this.Je=ds(),this.Ye=ds(),this.Ze=new nt(q),s}et(t,e){if(!this.it(t))return;const n=this.dt(t,e.key)?2:0;this.rt(t).$e(e.key,n),this.He=this.He.insert(e.key,e),this.Je=this.Je.insert(e.key,this.Et(e.key).add(t)),this.Ye=this.Ye.insert(e.key,this.At(e.key).add(t))}tt(t,e,n){if(!this.it(t))return;const s=this.rt(t);this.dt(t,e)?s.$e(e,1):s.Ue(e),this.Ye=this.Ye.insert(e,this.At(e).delete(t)),this.Ye=this.Ye.insert(e,this.At(e).add(t)),n&&(this.He=this.He.insert(e,n))}removeTarget(t){this.je.delete(t)}ut(t){const e=this.rt(t).qe();return this.ze.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ke(t){this.rt(t).Ke()}rt(t){let e=this.je.get(t);return e||(e=new vc,this.je.set(t,e)),e}At(t){let e=this.Ye.get(t);return e||(e=new Z(q),this.Ye=this.Ye.insert(t,e)),e}Et(t){let e=this.Je.get(t);return e||(e=new Z(q),this.Je=this.Je.insert(t,e)),e}it(t){const e=this._t(t)!==null;return e||V("WatchChangeAggregator","Detected inactive target",t),e}_t(t){const e=this.je.get(t);return e&&e.Be?null:this.ze.Rt(t)}st(t){this.je.set(t,new vc),this.ze.getRemoteKeysForTarget(t).forEach(e=>{this.tt(t,e,null)})}dt(t,e){return this.ze.getRemoteKeysForTarget(t).has(e)}}function ds(){return new nt(M.comparator)}function wc(){return new nt(M.comparator)}const Rp={asc:"ASCENDING",desc:"DESCENDING"},bp={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Sp={and:"AND",or:"OR"};class Pp{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Ao(r,t){return r.useProto3Json||Zs(t)?t:{value:t}}function Sn(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function kh(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function Vp(r,t){return Sn(r,t.toTimestamp())}function Pt(r){return L(!!r,49232),B.fromTimestamp(function(e){const n=Xt(e);return new ot(n.seconds,n.nanos)}(r))}function na(r,t){return Ro(r,t).canonicalString()}function Ro(r,t){const e=function(s){return new J(["projects",s.projectId,"databases",s.database])}(r).child("documents");return t===void 0?e:e.child(t)}function Mh(r){const t=J.fromString(r);return L($h(t),10190,{key:t.toString()}),t}function Us(r,t){return na(r.databaseId,t.path)}function Ue(r,t){const e=Mh(t);if(e.get(1)!==r.databaseId.projectId)throw new x(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+r.databaseId.projectId);if(e.get(3)!==r.databaseId.database)throw new x(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+r.databaseId.database);return new M(Lh(e))}function Oh(r,t){return na(r.databaseId,t)}function Fh(r){const t=Mh(r);return t.length===4?J.emptyPath():Lh(t)}function bo(r){return new J(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Lh(r){return L(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function Ac(r,t,e){return{name:Us(r,t),fields:e.value.mapValue.fields}}function Cp(r,t,e){const n=Ue(r,t.name),s=Pt(t.updateTime),i=t.createTime?Pt(t.createTime):B.min(),a=new wt({mapValue:{fields:t.fields}}),u=ut.newFoundDocument(n,s,i,a);return e&&u.setHasCommittedMutations(),e?u.setHasCommittedMutations():u}function Dp(r,t){let e;if("targetChange"in t){t.targetChange;const n=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:O(39313,{state:d})}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(d,m){return d.useProto3Json?(L(m===void 0||typeof m=="string",58123),lt.fromBase64String(m||"")):(L(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),lt.fromUint8Array(m||new Uint8Array))}(r,t.targetChange.resumeToken),a=t.targetChange.cause,u=a&&function(d){const m=d.code===void 0?P.UNKNOWN:Dh(d.code);return new x(m,d.message||"")}(a);e=new Nh(n,s,i,u||null)}else if("documentChange"in t){t.documentChange;const n=t.documentChange;n.document,n.document.name,n.document.updateTime;const s=Ue(r,n.document.name),i=Pt(n.document.updateTime),a=n.document.createTime?Pt(n.document.createTime):B.min(),u=new wt({mapValue:{fields:n.document.fields}}),l=ut.newFoundDocument(s,i,a,u),d=n.targetIds||[],m=n.removedTargetIds||[];e=new Rs(d,m,l.key,l)}else if("documentDelete"in t){t.documentDelete;const n=t.documentDelete;n.document;const s=Ue(r,n.document),i=n.readTime?Pt(n.readTime):B.min(),a=ut.newNoDocument(s,i),u=n.removedTargetIds||[];e=new Rs([],u,a.key,a)}else if("documentRemove"in t){t.documentRemove;const n=t.documentRemove;n.document;const s=Ue(r,n.document),i=n.removedTargetIds||[];e=new Rs([],i,s,null)}else{if(!("filter"in t))return O(11601,{Vt:t});{t.filter;const n=t.filter;n.targetId;const{count:s=0,unchangedNames:i}=n,a=new Tp(s,i),u=n.targetId;e=new xh(u,a)}}return e}function qs(r,t){let e;if(t instanceof On)e={update:Ac(r,t.key,t.value)};else if(t instanceof ci)e={delete:Us(r,t.key)};else if(t instanceof ee)e={update:Ac(r,t.key,t.data),updateMask:Fp(t.fieldMask)};else{if(!(t instanceof Ch))return O(16599,{ft:t.type});e={verify:Us(r,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(n=>function(i,a){const u=a.transform;if(u instanceof An)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof Rn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof bn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof kr)return{fieldPath:a.field.canonicalString(),increment:u.Re};throw O(20930,{transform:a.transform})}(0,n))),t.precondition.isNone||(e.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Vp(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:O(27497)}(r,t.precondition)),e}function So(r,t){const e=t.currentDocument?function(i){return i.updateTime!==void 0?St.updateTime(Pt(i.updateTime)):i.exists!==void 0?St.exists(i.exists):St.none()}(t.currentDocument):St.none(),n=t.updateTransforms?t.updateTransforms.map(s=>function(a,u){let l=null;if("setToServerValue"in u)L(u.setToServerValue==="REQUEST_TIME",16630,{proto:u}),l=new An;else if("appendMissingElements"in u){const m=u.appendMissingElements.values||[];l=new Rn(m)}else if("removeAllFromArray"in u){const m=u.removeAllFromArray.values||[];l=new bn(m)}else"increment"in u?l=new kr(a,u.increment):O(16584,{proto:u});const d=it.fromServerFormat(u.fieldPath);return new Sh(d,l)}(r,s)):[];if(t.update){t.update.name;const s=Ue(r,t.update.name),i=new wt({mapValue:{fields:t.update.fields}});if(t.updateMask){const a=function(l){const d=l.fieldPaths||[];return new Ct(d.map(m=>it.fromServerFormat(m)))}(t.updateMask);return new ee(s,i,a,e,n)}return new On(s,i,e,n)}if(t.delete){const s=Ue(r,t.delete);return new ci(s,e)}if(t.verify){const s=Ue(r,t.verify);return new Ch(s,e)}return O(1463,{proto:t})}function xp(r,t){return r&&r.length>0?(L(t!==void 0,14353),r.map(e=>function(s,i){let a=s.updateTime?Pt(s.updateTime):Pt(i);return a.isEqual(B.min())&&(a=Pt(i)),new yp(a,s.transformResults||[])}(e,t))):[]}function Bh(r,t){return{documents:[Oh(r,t.path)]}}function Uh(r,t){const e={structuredQuery:{}},n=t.path;let s;t.collectionGroup!==null?(s=n,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=n.popLast(),e.structuredQuery.from=[{collectionId:n.lastSegment()}]),e.parent=Oh(r,s);const i=function(d){if(d.length!==0)return jh(X.create(d,"and"))}(t.filters);i&&(e.structuredQuery.where=i);const a=function(d){if(d.length!==0)return d.map(m=>function(I){return{field:cn(I.field),direction:kp(I.dir)}}(m))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const u=Ao(r,t.limit);return u!==null&&(e.structuredQuery.limit=u),t.startAt&&(e.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(t.endAt)),{gt:e,parent:s}}function qh(r){let t=Fh(r.parent);const e=r.structuredQuery,n=e.from?e.from.length:0;let s=null;if(n>0){L(n===1,65062);const m=e.from[0];m.allDescendants?s=m.collectionId:t=t.child(m.collectionId)}let i=[];e.where&&(i=function(g){const I=zh(g);return I instanceof X&&Wo(I)?I.getFilters():[I]}(e.where));let a=[];e.orderBy&&(a=function(g){return g.map(I=>function(C){return new Nr(ln(C.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(I))}(e.orderBy));let u=null;e.limit&&(u=function(g){let I;return I=typeof g=="object"?g.value:g,Zs(I)?null:I}(e.limit));let l=null;e.startAt&&(l=function(g){const I=!!g.before,S=g.values||[];return new vn(S,I)}(e.startAt));let d=null;return e.endAt&&(d=function(g){const I=!g.before,S=g.values||[];return new vn(S,I)}(e.endAt)),mh(t,s,a,i,u,"F",l,d)}function Np(r,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return O(28987,{purpose:s})}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function zh(r){return r.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=ln(e.unaryFilter.field);return K.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=ln(e.unaryFilter.field);return K.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ln(e.unaryFilter.field);return K.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=ln(e.unaryFilter.field);return K.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return O(61313);default:return O(60726)}}(r):r.fieldFilter!==void 0?function(e){return K.create(ln(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return O(58110);default:return O(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(e){return X.create(e.compositeFilter.filters.map(n=>zh(n)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return O(1026)}}(e.compositeFilter.op))}(r):O(30097,{filter:r})}function kp(r){return Rp[r]}function Mp(r){return bp[r]}function Op(r){return Sp[r]}function cn(r){return{fieldPath:r.canonicalString()}}function ln(r){return it.fromServerFormat(r.fieldPath)}function jh(r){return r instanceof K?function(e){if(e.op==="=="){if(uc(e.value))return{unaryFilter:{field:cn(e.field),op:"IS_NAN"}};if(ac(e.value))return{unaryFilter:{field:cn(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(uc(e.value))return{unaryFilter:{field:cn(e.field),op:"IS_NOT_NAN"}};if(ac(e.value))return{unaryFilter:{field:cn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:cn(e.field),op:Mp(e.op),value:e.value}}}(r):r instanceof X?function(e){const n=e.getFilters().map(s=>jh(s));return n.length===1?n[0]:{compositeFilter:{op:Op(e.op),filters:n}}}(r):O(54877,{filter:r})}function Fp(r){const t=[];return r.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function $h(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class Wt{constructor(t,e,n,s,i=B.min(),a=B.min(),u=lt.EMPTY_BYTE_STRING,l=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=l}withSequenceNumber(t){return new Wt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Wt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Wt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Wt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class Kh{constructor(t){this.wt=t}}function Lp(r,t){let e;if(t.document)e=Cp(r.wt,t.document,!!t.hasCommittedMutations);else if(t.noDocument){const n=M.fromSegments(t.noDocument.path),s=Ke(t.noDocument.readTime);e=ut.newNoDocument(n,s),t.hasCommittedMutations&&e.setHasCommittedMutations()}else{if(!t.unknownDocument)return O(56709);{const n=M.fromSegments(t.unknownDocument.path),s=Ke(t.unknownDocument.version);e=ut.newUnknownDocument(n,s)}}return t.readTime&&e.setReadTime(function(s){const i=new ot(s[0],s[1]);return B.fromTimestamp(i)}(t.readTime)),e}function Rc(r,t){const e=t.key,n={prefixPath:e.getCollectionPath().popLast().toArray(),collectionGroup:e.collectionGroup,documentId:e.path.lastSegment(),readTime:zs(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument())n.document=function(i,a){return{name:Us(i,a.key),fields:a.data.value.mapValue.fields,updateTime:Sn(i,a.version.toTimestamp()),createTime:Sn(i,a.createTime.toTimestamp())}}(r.wt,t);else if(t.isNoDocument())n.noDocument={path:e.path.toArray(),readTime:$e(t.version)};else{if(!t.isUnknownDocument())return O(57904,{document:t});n.unknownDocument={path:e.path.toArray(),version:$e(t.version)}}return n}function zs(r){const t=r.toTimestamp();return[t.seconds,t.nanoseconds]}function $e(r){const t=r.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function Ke(r){const t=new ot(r.seconds,r.nanoseconds);return B.fromTimestamp(t)}function Ne(r,t){const e=(t.baseMutations||[]).map(i=>So(r.wt,i));for(let i=0;i<t.mutations.length-1;++i){const a=t.mutations[i];if(i+1<t.mutations.length&&t.mutations[i+1].transform!==void 0){const u=t.mutations[i+1];a.updateTransforms=u.transform.fieldTransforms,t.mutations.splice(i+1,1),++i}}const n=t.mutations.map(i=>So(r.wt,i)),s=ot.fromMillis(t.localWriteTimeMs);return new Xo(t.batchId,s,e,n)}function dr(r){const t=Ke(r.readTime),e=r.lastLimboFreeSnapshotVersion!==void 0?Ke(r.lastLimboFreeSnapshotVersion):B.min();let n;return n=function(i){return i.documents!==void 0}(r.query)?function(i){const a=i.documents.length;return L(a===1,1966,{count:a}),Mt(ii(Fh(i.documents[0])))}(r.query):function(i){return Mt(qh(i))}(r.query),new Wt(n,r.targetId,"TargetPurposeListen",r.lastListenSequenceNumber,t,e,lt.fromBase64String(r.resumeToken))}function Gh(r,t){const e=$e(t.snapshotVersion),n=$e(t.lastLimboFreeSnapshotVersion);let s;s=Ls(t.target)?Bh(r.wt,t.target):Uh(r.wt,t.target).gt;const i=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:je(t.target),readTime:e,resumeToken:i,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:n,query:s}}function Qh(r){const t=qh({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?wo(t,t.limit,"L"):t}function Yi(r,t){return new ta(t.largestBatchId,So(r.wt,t.overlayMutation))}function bc(r,t){const e=t.path.lastSegment();return[r,At(t.path.popLast()),e]}function Sc(r,t,e,n){return{indexId:r,uid:t,sequenceNumber:e,readTime:$e(n.readTime),documentKey:At(n.documentKey.path),largestBatchId:n.largestBatchId}}/**
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
 */class Bp{getBundleMetadata(t,e){return Pc(t).get(e).next(n=>{if(n)return function(i){return{id:i.bundleId,createTime:Ke(i.createTime),version:i.version}}(n)})}saveBundleMetadata(t,e){return Pc(t).put(function(s){return{bundleId:s.id,createTime:$e(Pt(s.createTime)),version:s.version}}(e))}getNamedQuery(t,e){return Vc(t).get(e).next(n=>{if(n)return function(i){return{name:i.name,query:Qh(i.bundledQuery),readTime:Ke(i.readTime)}}(n)})}saveNamedQuery(t,e){return Vc(t).put(function(s){return{name:s.name,readTime:$e(Pt(s.readTime)),bundledQuery:s.bundledQuery}}(e))}}function Pc(r){return dt(r,ti)}function Vc(r){return dt(r,ei)}/**
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
 */class li{constructor(t,e){this.serializer=t,this.userId=e}static bt(t,e){const n=e.uid||"";return new li(t,n)}getOverlay(t,e){return sr(t).get(bc(this.userId,e)).next(n=>n?Yi(this.serializer,n):null)}getOverlays(t,e){const n=zt();return w.forEach(e,s=>this.getOverlay(t,s).next(i=>{i!==null&&n.set(s,i)})).next(()=>n)}saveOverlays(t,e,n){const s=[];return n.forEach((i,a)=>{const u=new ta(e,a);s.push(this.St(t,u))}),w.waitFor(s)}removeOverlaysForBatchId(t,e,n){const s=new Set;e.forEach(a=>s.add(At(a.getCollectionPath())));const i=[];return s.forEach(a=>{const u=IDBKeyRange.bound([this.userId,a,n],[this.userId,a,n+1],!1,!0);i.push(sr(t).X(go,u))}),w.waitFor(i)}getOverlaysForCollection(t,e,n){const s=zt(),i=At(e),a=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return sr(t).J(go,a).next(u=>{for(const l of u){const d=Yi(this.serializer,l);s.set(d.getKey(),d)}return s})}getOverlaysForCollectionGroup(t,e,n,s){const i=zt();let a;const u=IDBKeyRange.bound([this.userId,e,n],[this.userId,e,Number.POSITIVE_INFINITY],!0);return sr(t).te({index:Ql,range:u},(l,d,m)=>{const g=Yi(this.serializer,d);i.size()<s||g.largestBatchId===a?(i.set(g.getKey(),g),a=g.largestBatchId):m.done()}).next(()=>i)}St(t,e){return sr(t).put(function(s,i,a){const[u,l,d]=bc(i,a.mutation.key);return{userId:i,collectionPath:l,documentId:d,collectionGroup:a.mutation.key.getCollectionGroup(),largestBatchId:a.largestBatchId,overlayMutation:qs(s.wt,a.mutation)}}(this.serializer,this.userId,e))}}function sr(r){return dt(r,ni)}/**
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
 */class Up{Dt(t){return dt(t,$o)}getSessionToken(t){return this.Dt(t).get("sessionToken").next(e=>{const n=e?.value;return n?lt.fromUint8Array(n):lt.EMPTY_BYTE_STRING})}setSessionToken(t,e){return this.Dt(t).put({name:"sessionToken",value:e.toUint8Array()})}}/**
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
 */class ke{constructor(){}vt(t,e){this.Ct(t,e),e.Ft()}Ct(t,e){if("nullValue"in t)this.Mt(e,5);else if("booleanValue"in t)this.Mt(e,10),e.xt(t.booleanValue?1:0);else if("integerValue"in t)this.Mt(e,15),e.xt(st(t.integerValue));else if("doubleValue"in t){const n=st(t.doubleValue);isNaN(n)?this.Mt(e,13):(this.Mt(e,15),Rr(n)?e.xt(0):e.xt(n))}else if("timestampValue"in t){let n=t.timestampValue;this.Mt(e,20),typeof n=="string"&&(n=Xt(n)),e.Ot(`${n.seconds||""}`),e.xt(n.nanos||0)}else if("stringValue"in t)this.Nt(t.stringValue,e),this.Bt(e);else if("bytesValue"in t)this.Mt(e,30),e.Lt(Zt(t.bytesValue)),this.Bt(e);else if("referenceValue"in t)this.kt(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.Mt(e,45),e.xt(n.latitude||0),e.xt(n.longitude||0)}else"mapValue"in t?sh(t)?this.Mt(e,Number.MAX_SAFE_INTEGER):si(t)?this.qt(t.mapValue,e):(this.Qt(t.mapValue,e),this.Bt(e)):"arrayValue"in t?(this.$t(t.arrayValue,e),this.Bt(e)):O(19022,{Ut:t})}Nt(t,e){this.Mt(e,25),this.Kt(t,e)}Kt(t,e){e.Ot(t)}Qt(t,e){const n=t.fields||{};this.Mt(e,55);for(const s of Object.keys(n))this.Nt(s,e),this.Ct(n[s],e)}qt(t,e){var n,s;const i=t.fields||{};this.Mt(e,53);const a=En,u=((s=(n=i[a].arrayValue)===null||n===void 0?void 0:n.values)===null||s===void 0?void 0:s.length)||0;this.Mt(e,15),e.xt(st(u)),this.Nt(a,e),this.Ct(i[a],e)}$t(t,e){const n=t.values||[];this.Mt(e,50);for(const s of n)this.Ct(s,e)}kt(t,e){this.Mt(e,37),M.fromName(t).path.forEach(n=>{this.Mt(e,60),this.Kt(n,e)})}Mt(t,e){t.xt(e)}Bt(t){t.xt(2)}}ke.Wt=new ke;/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law | agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn=255;function qp(r){if(r===0)return 8;let t=0;return r>>4||(t+=4,r<<=4),r>>6||(t+=2,r<<=2),r>>7||(t+=1),t}function Cc(r){const t=64-function(n){let s=0;for(let i=0;i<8;++i){const a=qp(255&n[i]);if(s+=a,a!==8)break}return s}(r);return Math.ceil(t/8)}class zp{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Gt(t){const e=t[Symbol.iterator]();let n=e.next();for(;!n.done;)this.zt(n.value),n=e.next();this.jt()}Ht(t){const e=t[Symbol.iterator]();let n=e.next();for(;!n.done;)this.Jt(n.value),n=e.next();this.Yt()}Zt(t){for(const e of t){const n=e.charCodeAt(0);if(n<128)this.zt(n);else if(n<2048)this.zt(960|n>>>6),this.zt(128|63&n);else if(e<"\uD800"||"\uDBFF"<e)this.zt(480|n>>>12),this.zt(128|63&n>>>6),this.zt(128|63&n);else{const s=e.codePointAt(0);this.zt(240|s>>>18),this.zt(128|63&s>>>12),this.zt(128|63&s>>>6),this.zt(128|63&s)}}this.jt()}Xt(t){for(const e of t){const n=e.charCodeAt(0);if(n<128)this.Jt(n);else if(n<2048)this.Jt(960|n>>>6),this.Jt(128|63&n);else if(e<"\uD800"||"\uDBFF"<e)this.Jt(480|n>>>12),this.Jt(128|63&n>>>6),this.Jt(128|63&n);else{const s=e.codePointAt(0);this.Jt(240|s>>>18),this.Jt(128|63&s>>>12),this.Jt(128|63&s>>>6),this.Jt(128|63&s)}}this.Yt()}en(t){const e=this.tn(t),n=Cc(e);this.nn(1+n),this.buffer[this.position++]=255&n;for(let s=e.length-n;s<e.length;++s)this.buffer[this.position++]=255&e[s]}rn(t){const e=this.tn(t),n=Cc(e);this.nn(1+n),this.buffer[this.position++]=~(255&n);for(let s=e.length-n;s<e.length;++s)this.buffer[this.position++]=~(255&e[s])}sn(){this._n(nn),this._n(255)}an(){this.un(nn),this.un(255)}reset(){this.position=0}seed(t){this.nn(t.length),this.buffer.set(t,this.position),this.position+=t.length}cn(){return this.buffer.slice(0,this.position)}tn(t){const e=function(i){const a=new DataView(new ArrayBuffer(8));return a.setFloat64(0,i,!1),new Uint8Array(a.buffer)}(t),n=!!(128&e[0]);e[0]^=n?255:128;for(let s=1;s<e.length;++s)e[s]^=n?255:0;return e}zt(t){const e=255&t;e===0?(this._n(0),this._n(255)):e===nn?(this._n(nn),this._n(0)):this._n(e)}Jt(t){const e=255&t;e===0?(this.un(0),this.un(255)):e===nn?(this.un(nn),this.un(0)):this.un(t)}jt(){this._n(0),this._n(1)}Yt(){this.un(0),this.un(1)}_n(t){this.nn(1),this.buffer[this.position++]=t}un(t){this.nn(1),this.buffer[this.position++]=~t}nn(t){const e=t+this.position;if(e<=this.buffer.length)return;let n=2*this.buffer.length;n<e&&(n=e);const s=new Uint8Array(n);s.set(this.buffer),this.buffer=s}}class jp{constructor(t){this.ln=t}Lt(t){this.ln.Gt(t)}Ot(t){this.ln.Zt(t)}xt(t){this.ln.en(t)}Ft(){this.ln.sn()}}class $p{constructor(t){this.ln=t}Lt(t){this.ln.Ht(t)}Ot(t){this.ln.Xt(t)}xt(t){this.ln.rn(t)}Ft(){this.ln.an()}}class ir{constructor(){this.ln=new zp,this.hn=new jp(this.ln),this.Pn=new $p(this.ln)}seed(t){this.ln.seed(t)}Tn(t){return t===0?this.hn:this.Pn}cn(){return this.ln.cn()}reset(){this.ln.reset()}}/**
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
 */class Me{constructor(t,e,n,s){this.indexId=t,this.documentKey=e,this.arrayValue=n,this.directionalValue=s}In(){const t=this.directionalValue.length,e=t===0||this.directionalValue[t-1]===255?t+1:t,n=new Uint8Array(e);return n.set(this.directionalValue,0),e!==t?n.set([0],this.directionalValue.length):++n[n.length-1],new Me(this.indexId,this.documentKey,this.arrayValue,n)}}function oe(r,t){let e=r.indexId-t.indexId;return e!==0?e:(e=Dc(r.arrayValue,t.arrayValue),e!==0?e:(e=Dc(r.directionalValue,t.directionalValue),e!==0?e:M.comparator(r.documentKey,t.documentKey)))}function Dc(r,t){for(let e=0;e<r.length&&e<t.length;++e){const n=r[e]-t[e];if(n!==0)return n}return r.length-t.length}/**
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
 */class xc{constructor(t){this.En=new Z((e,n)=>it.comparator(e.field,n.field)),this.collectionId=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment(),this.dn=t.orderBy,this.An=[];for(const e of t.filters){const n=e;n.isInequality()?this.En=this.En.add(n):this.An.push(n)}}get Rn(){return this.En.size>1}Vn(t){if(L(t.collectionGroup===this.collectionId,49279),this.Rn)return!1;const e=ho(t);if(e!==void 0&&!this.mn(e))return!1;const n=Ce(t);let s=new Set,i=0,a=0;for(;i<n.length&&this.mn(n[i]);++i)s=s.add(n[i].fieldPath.canonicalString());if(i===n.length)return!0;if(this.En.size>0){const u=this.En.getIterator().getNext();if(!s.has(u.field.canonicalString())){const l=n[i];if(!this.fn(u,l)||!this.gn(this.dn[a++],l))return!1}++i}for(;i<n.length;++i){const u=n[i];if(a>=this.dn.length||!this.gn(this.dn[a++],u))return!1}return!0}pn(){if(this.Rn)return null;let t=new Z(it.comparator);const e=[];for(const n of this.An)if(!n.field.isKeyField())if(n.op==="array-contains"||n.op==="array-contains-any")e.push(new ys(n.field,2));else{if(t.has(n.field))continue;t=t.add(n.field),e.push(new ys(n.field,0))}for(const n of this.dn)n.field.isKeyField()||t.has(n.field)||(t=t.add(n.field),e.push(new ys(n.field,n.dir==="asc"?0:1)));return new Ds(Ds.UNKNOWN_ID,this.collectionId,e,Ar.empty())}mn(t){for(const e of this.An)if(this.fn(e,t))return!0;return!1}fn(t,e){if(t===void 0||!t.field.isEqual(e.fieldPath))return!1;const n=t.op==="array-contains"||t.op==="array-contains-any";return e.kind===2===n}gn(t,e){return!!t.field.isEqual(e.fieldPath)&&(e.kind===0&&t.dir==="asc"||e.kind===1&&t.dir==="desc")}}/**
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
 */function Hh(r){var t,e;if(L(r instanceof K||r instanceof X,20012),r instanceof K){if(r instanceof fh){const s=((e=(t=r.value.arrayValue)===null||t===void 0?void 0:t.values)===null||e===void 0?void 0:e.map(i=>K.create(r.field,"==",i)))||[];return X.create(s,"or")}return r}const n=r.filters.map(s=>Hh(s));return X.create(n,r.op)}function Kp(r){if(r.getFilters().length===0)return[];const t=Co(Hh(r));return L(Wh(t),7391),Po(t)||Vo(t)?[t]:t.getFilters()}function Po(r){return r instanceof K}function Vo(r){return r instanceof X&&Wo(r)}function Wh(r){return Po(r)||Vo(r)||function(e){if(e instanceof X&&Io(e)){for(const n of e.getFilters())if(!Po(n)&&!Vo(n))return!1;return!0}return!1}(r)}function Co(r){if(L(r instanceof K||r instanceof X,34018),r instanceof K)return r;if(r.filters.length===1)return Co(r.filters[0]);const t=r.filters.map(n=>Co(n));let e=X.create(t,r.op);return e=js(e),Wh(e)?e:(L(e instanceof X,64498),L(wn(e),40251),L(e.filters.length>1,57927),e.filters.reduce((n,s)=>ra(n,s)))}function ra(r,t){let e;return L(r instanceof K||r instanceof X,38388),L(t instanceof K||t instanceof X,25473),e=r instanceof K?t instanceof K?function(s,i){return X.create([s,i],"and")}(r,t):Nc(r,t):t instanceof K?Nc(t,r):function(s,i){if(L(s.filters.length>0&&i.filters.length>0,48005),wn(s)&&wn(i))return lh(s,i.getFilters());const a=Io(s)?s:i,u=Io(s)?i:s,l=a.filters.map(d=>ra(d,u));return X.create(l,"or")}(r,t),js(e)}function Nc(r,t){if(wn(t))return lh(t,r.getFilters());{const e=t.filters.map(n=>ra(r,n));return X.create(e,"or")}}function js(r){if(L(r instanceof K||r instanceof X,11850),r instanceof K)return r;const t=r.getFilters();if(t.length===1)return js(t[0]);if(uh(r))return r;const e=t.map(s=>js(s)),n=[];return e.forEach(s=>{s instanceof K?n.push(s):s instanceof X&&(s.op===r.op?n.push(...s.filters):n.push(s))}),n.length===1?n[0]:X.create(n,r.op)}/**
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
 */class Gp{constructor(){this.yn=new sa}addToCollectionParentIndex(t,e){return this.yn.add(e),w.resolve()}getCollectionParents(t,e){return w.resolve(this.yn.getEntries(e))}addFieldIndex(t,e){return w.resolve()}deleteFieldIndex(t,e){return w.resolve()}deleteAllFieldIndexes(t){return w.resolve()}createTargetIndexes(t,e){return w.resolve()}getDocumentsMatchingTarget(t,e){return w.resolve(null)}getIndexType(t,e){return w.resolve(0)}getFieldIndexes(t,e){return w.resolve([])}getNextCollectionGroupToUpdate(t){return w.resolve(null)}getMinOffset(t,e){return w.resolve(Ot.min())}getMinOffsetFromCollectionGroup(t,e){return w.resolve(Ot.min())}updateCollectionGroup(t,e,n){return w.resolve()}updateIndexEntries(t,e){return w.resolve()}}class sa{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e]||new Z(J.comparator),i=!s.has(n);return this.index[e]=s.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e];return s&&s.has(n)}getEntries(t){return(this.index[t]||new Z(J.comparator)).toArray()}}/**
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
 */const kc="IndexedDbIndexManager",fs=new Uint8Array(0);class Qp{constructor(t,e){this.databaseId=e,this.wn=new sa,this.bn=new te(n=>je(n),(n,s)=>Lr(n,s)),this.uid=t.uid||""}addToCollectionParentIndex(t,e){if(!this.wn.has(e)){const n=e.lastSegment(),s=e.popLast();t.addOnCommittedListener(()=>{this.wn.add(e)});const i={collectionId:n,parent:At(s)};return Mc(t).put(i)}return w.resolve()}getCollectionParents(t,e){const n=[],s=IDBKeyRange.bound([e,""],[Ml(e),""],!1,!0);return Mc(t).J(s).next(i=>{for(const a of i){if(a.collectionId!==e)break;n.push(qt(a.parent))}return n})}addFieldIndex(t,e){const n=or(t),s=function(u){return{indexId:u.indexId,collectionGroup:u.collectionGroup,fields:u.fields.map(l=>[l.fieldPath.canonicalString(),l.kind])}}(e);delete s.indexId;const i=n.add(s);if(e.indexState){const a=sn(t);return i.next(u=>{a.put(Sc(u,this.uid,e.indexState.sequenceNumber,e.indexState.offset))})}return i.next()}deleteFieldIndex(t,e){const n=or(t),s=sn(t),i=rn(t);return n.delete(e.indexId).next(()=>s.delete(IDBKeyRange.bound([e.indexId],[e.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([e.indexId],[e.indexId+1],!1,!0)))}deleteAllFieldIndexes(t){const e=or(t),n=rn(t),s=sn(t);return e.X().next(()=>n.X()).next(()=>s.X())}createTargetIndexes(t,e){return w.forEach(this.Sn(e),n=>this.getIndexType(t,n).next(s=>{if(s===0||s===1){const i=new xc(n).pn();if(i!=null)return this.addFieldIndex(t,i)}}))}getDocumentsMatchingTarget(t,e){const n=rn(t);let s=!0;const i=new Map;return w.forEach(this.Sn(e),a=>this.Dn(t,a).next(u=>{s&&(s=!!u),i.set(a,u)})).next(()=>{if(s){let a=j();const u=[];return w.forEach(i,(l,d)=>{V(kc,`Using index ${function(U){return`id=${U.indexId}|cg=${U.collectionGroup}|f=${U.fields.map(Y=>`${Y.fieldPath}:${Y.kind}`).join(",")}`}(l)} to execute ${je(e)}`);const m=function(U,Y){const et=ho(Y);if(et===void 0)return null;for(const H of Bs(U,et.fieldPath))switch(H.op){case"array-contains-any":return H.value.arrayValue.values||[];case"array-contains":return[H.value]}return null}(d,l),g=function(U,Y){const et=new Map;for(const H of Ce(Y))for(const E of Bs(U,H.fieldPath))switch(E.op){case"==":case"in":et.set(H.fieldPath.canonicalString(),E.value);break;case"not-in":case"!=":return et.set(H.fieldPath.canonicalString(),E.value),Array.from(et.values())}return null}(d,l),I=function(U,Y){const et=[];let H=!0;for(const E of Ce(Y)){const p=E.kind===0?fc(U,E.fieldPath,U.startAt):mc(U,E.fieldPath,U.startAt);et.push(p.value),H&&(H=p.inclusive)}return new vn(et,H)}(d,l),S=function(U,Y){const et=[];let H=!0;for(const E of Ce(Y)){const p=E.kind===0?mc(U,E.fieldPath,U.endAt):fc(U,E.fieldPath,U.endAt);et.push(p.value),H&&(H=p.inclusive)}return new vn(et,H)}(d,l),C=this.vn(l,d,I),k=this.vn(l,d,S),D=this.Cn(l,d,g),$=this.Fn(l.indexId,m,C,I.inclusive,k,S.inclusive,D);return w.forEach($,z=>n.Z(z,e.limit).next(U=>{U.forEach(Y=>{const et=M.fromSegments(Y.documentKey);a.has(et)||(a=a.add(et),u.push(et))})}))}).next(()=>u)}return w.resolve(null)})}Sn(t){let e=this.bn.get(t);return e||(t.filters.length===0?e=[t]:e=Kp(X.create(t.filters,"and")).map(n=>To(t.path,t.collectionGroup,t.orderBy,n.getFilters(),t.limit,t.startAt,t.endAt)),this.bn.set(t,e),e)}Fn(t,e,n,s,i,a,u){const l=(e!=null?e.length:1)*Math.max(n.length,i.length),d=l/(e!=null?e.length:1),m=[];for(let g=0;g<l;++g){const I=e?this.Mn(e[g/d]):fs,S=this.xn(t,I,n[g%d],s),C=this.On(t,I,i[g%d],a),k=u.map(D=>this.xn(t,I,D,!0));m.push(...this.createRange(S,C,k))}return m}xn(t,e,n,s){const i=new Me(t,M.empty(),e,n);return s?i:i.In()}On(t,e,n,s){const i=new Me(t,M.empty(),e,n);return s?i.In():i}Dn(t,e){const n=new xc(e),s=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment();return this.getFieldIndexes(t,s).next(i=>{let a=null;for(const u of i)n.Vn(u)&&(!a||u.fields.length>a.fields.length)&&(a=u);return a})}getIndexType(t,e){let n=2;const s=this.Sn(e);return w.forEach(s,i=>this.Dn(t,i).next(a=>{a?n!==0&&a.fields.length<function(l){let d=new Z(it.comparator),m=!1;for(const g of l.filters)for(const I of g.getFlattenedFilters())I.field.isKeyField()||(I.op==="array-contains"||I.op==="array-contains-any"?m=!0:d=d.add(I.field));for(const g of l.orderBy)g.field.isKeyField()||(d=d.add(g.field));return d.size+(m?1:0)}(i)&&(n=1):n=0})).next(()=>function(a){return a.limit!==null}(e)&&s.length>1&&n===2?1:n)}Nn(t,e){const n=new ir;for(const s of Ce(t)){const i=e.data.field(s.fieldPath);if(i==null)return null;const a=n.Tn(s.kind);ke.Wt.vt(i,a)}return n.cn()}Mn(t){const e=new ir;return ke.Wt.vt(t,e.Tn(0)),e.cn()}Bn(t,e){const n=new ir;return ke.Wt.vt(Dr(this.databaseId,e),n.Tn(function(i){const a=Ce(i);return a.length===0?0:a[a.length-1].kind}(t))),n.cn()}Cn(t,e,n){if(n===null)return[];let s=[];s.push(new ir);let i=0;for(const a of Ce(t)){const u=n[i++];for(const l of s)if(this.Ln(e,a.fieldPath)&&xr(u))s=this.kn(s,a,u);else{const d=l.Tn(a.kind);ke.Wt.vt(u,d)}}return this.qn(s)}vn(t,e,n){return this.Cn(t,e,n.position)}qn(t){const e=[];for(let n=0;n<t.length;++n)e[n]=t[n].cn();return e}kn(t,e,n){const s=[...t],i=[];for(const a of n.arrayValue.values||[])for(const u of s){const l=new ir;l.seed(u.cn()),ke.Wt.vt(a,l.Tn(e.kind)),i.push(l)}return i}Ln(t,e){return!!t.filters.find(n=>n instanceof K&&n.field.isEqual(e)&&(n.op==="in"||n.op==="not-in"))}getFieldIndexes(t,e){const n=or(t),s=sn(t);return(e?n.J(mo,IDBKeyRange.bound(e,e)):n.J()).next(i=>{const a=[];return w.forEach(i,u=>s.get([u.indexId,this.uid]).next(l=>{a.push(function(m,g){const I=g?new Ar(g.sequenceNumber,new Ot(Ke(g.readTime),new M(qt(g.documentKey)),g.largestBatchId)):Ar.empty(),S=m.fields.map(([C,k])=>new ys(it.fromServerFormat(C),k));return new Ds(m.indexId,m.collectionGroup,S,I)}(u,l))})).next(()=>a)})}getNextCollectionGroupToUpdate(t){return this.getFieldIndexes(t).next(e=>e.length===0?null:(e.sort((n,s)=>{const i=n.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:q(n.collectionGroup,s.collectionGroup)}),e[0].collectionGroup))}updateCollectionGroup(t,e,n){const s=or(t),i=sn(t);return this.Qn(t).next(a=>s.J(mo,IDBKeyRange.bound(e,e)).next(u=>w.forEach(u,l=>i.put(Sc(l.indexId,this.uid,a,n)))))}updateIndexEntries(t,e){const n=new Map;return w.forEach(e,(s,i)=>{const a=n.get(s.collectionGroup);return(a?w.resolve(a):this.getFieldIndexes(t,s.collectionGroup)).next(u=>(n.set(s.collectionGroup,u),w.forEach(u,l=>this.$n(t,s,l).next(d=>{const m=this.Un(i,l);return d.isEqual(m)?w.resolve():this.Kn(t,i,l,d,m)}))))})}Wn(t,e,n,s){return rn(t).put({indexId:s.indexId,uid:this.uid,arrayValue:s.arrayValue,directionalValue:s.directionalValue,orderedDocumentKey:this.Bn(n,e.key),documentKey:e.key.path.toArray()})}Gn(t,e,n,s){return rn(t).delete([s.indexId,this.uid,s.arrayValue,s.directionalValue,this.Bn(n,e.key),e.key.path.toArray()])}$n(t,e,n){const s=rn(t);let i=new Z(oe);return s.te({index:Gl,range:IDBKeyRange.only([n.indexId,this.uid,this.Bn(n,e)])},(a,u)=>{i=i.add(new Me(n.indexId,e,u.arrayValue,u.directionalValue))}).next(()=>i)}Un(t,e){let n=new Z(oe);const s=this.Nn(e,t);if(s==null)return n;const i=ho(e);if(i!=null){const a=t.data.field(i.fieldPath);if(xr(a))for(const u of a.arrayValue.values||[])n=n.add(new Me(e.indexId,t.key,this.Mn(u),s))}else n=n.add(new Me(e.indexId,t.key,fs,s));return n}Kn(t,e,n,s,i){V(kc,"Updating index entries for document '%s'",e.key);const a=[];return function(l,d,m,g,I){const S=l.getIterator(),C=d.getIterator();let k=en(S),D=en(C);for(;k||D;){let $=!1,z=!1;if(k&&D){const U=m(k,D);U<0?z=!0:U>0&&($=!0)}else k!=null?z=!0:$=!0;$?(g(D),D=en(C)):z?(I(k),k=en(S)):(k=en(S),D=en(C))}}(s,i,oe,u=>{a.push(this.Wn(t,e,n,u))},u=>{a.push(this.Gn(t,e,n,u))}),w.waitFor(a)}Qn(t){let e=1;return sn(t).te({index:Kl,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(n,s,i)=>{i.done(),e=s.sequenceNumber+1}).next(()=>e)}createRange(t,e,n){n=n.sort((a,u)=>oe(a,u)).filter((a,u,l)=>!u||oe(a,l[u-1])!==0);const s=[];s.push(t);for(const a of n){const u=oe(a,t),l=oe(a,e);if(u===0)s[0]=t.In();else if(u>0&&l<0)s.push(a),s.push(a.In());else if(l>0)break}s.push(e);const i=[];for(let a=0;a<s.length;a+=2){if(this.zn(s[a],s[a+1]))return[];const u=[s[a].indexId,this.uid,s[a].arrayValue,s[a].directionalValue,fs,[]],l=[s[a+1].indexId,this.uid,s[a+1].arrayValue,s[a+1].directionalValue,fs,[]];i.push(IDBKeyRange.bound(u,l))}return i}zn(t,e){return oe(t,e)>0}getMinOffsetFromCollectionGroup(t,e){return this.getFieldIndexes(t,e).next(Oc)}getMinOffset(t,e){return w.mapArray(this.Sn(e),n=>this.Dn(t,n).next(s=>s||O(44426))).next(Oc)}}function Mc(r){return dt(r,Pr)}function rn(r){return dt(r,Os)}function or(r){return dt(r,jo)}function sn(r){return dt(r,Ms)}function Oc(r){L(r.length!==0,28825);let t=r[0].indexState.offset,e=t.largestBatchId;for(let n=1;n<r.length;n++){const s=r[n].indexState.offset;Uo(s,t)<0&&(t=s),e<s.largestBatchId&&(e=s.largestBatchId)}return new Ot(t.readTime,t.documentKey,e)}/**
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
 */const Fc={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Yh=41943040;class vt{static withCacheSize(t){return new vt(t,vt.DEFAULT_COLLECTION_PERCENTILE,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}/**
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
 */function Jh(r,t,e){const n=r.store(Lt),s=r.store(pn),i=[],a=IDBKeyRange.only(e.batchId);let u=0;const l=n.te({range:a},(m,g,I)=>(u++,I.delete()));i.push(l.next(()=>{L(u===1,47070,{batchId:e.batchId})}));const d=[];for(const m of e.mutations){const g=zl(t,m.key.path,e.batchId);i.push(s.delete(g)),d.push(m.key)}return w.waitFor(i).next(()=>d)}function $s(r){if(!r)return 0;let t;if(r.document)t=r.document;else if(r.unknownDocument)t=r.unknownDocument;else{if(!r.noDocument)throw O(14731);t=r.noDocument}return JSON.stringify(t).length}/**
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
 */vt.DEFAULT_COLLECTION_PERCENTILE=10,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,vt.DEFAULT=new vt(Yh,vt.DEFAULT_COLLECTION_PERCENTILE,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),vt.DISABLED=new vt(-1,0,0);class hi{constructor(t,e,n,s){this.userId=t,this.serializer=e,this.indexManager=n,this.referenceDelegate=s,this.jn={}}static bt(t,e,n,s){L(t.uid!=="",64387);const i=t.isAuthenticated()?t.uid:"";return new hi(i,e,n,s)}checkEmpty(t){let e=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return ae(t).te({index:Oe,range:n},(s,i,a)=>{e=!1,a.done()}).next(()=>e)}addMutationBatch(t,e,n,s){const i=hn(t),a=ae(t);return a.add({}).next(u=>{L(typeof u=="number",49019);const l=new Xo(u,e,n,s),d=function(S,C,k){const D=k.baseMutations.map(z=>qs(S.wt,z)),$=k.mutations.map(z=>qs(S.wt,z));return{userId:C,batchId:k.batchId,localWriteTimeMs:k.localWriteTime.toMillis(),baseMutations:D,mutations:$}}(this.serializer,this.userId,l),m=[];let g=new Z((I,S)=>q(I.canonicalString(),S.canonicalString()));for(const I of s){const S=zl(this.userId,I.key.path,u);g=g.add(I.key.path.popLast()),m.push(a.put(d)),m.push(i.put(S,bg))}return g.forEach(I=>{m.push(this.indexManager.addToCollectionParentIndex(t,I))}),t.addOnCommittedListener(()=>{this.jn[u]=l.keys()}),w.waitFor(m).next(()=>l)})}lookupMutationBatch(t,e){return ae(t).get(e).next(n=>n?(L(n.userId===this.userId,48,"Unexpected user for mutation batch",{userId:n.userId,batchId:e}),Ne(this.serializer,n)):null)}Hn(t,e){return this.jn[e]?w.resolve(this.jn[e]):this.lookupMutationBatch(t,e).next(n=>{if(n){const s=n.keys();return this.jn[e]=s,s}return null})}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return ae(t).te({index:Oe,range:s},(a,u,l)=>{u.userId===this.userId&&(L(u.batchId>=n,47524,{Jn:n}),i=Ne(this.serializer,u)),l.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(t){const e=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=Le;return ae(t).te({index:Oe,range:e,reverse:!0},(s,i,a)=>{n=i.batchId,a.done()}).next(()=>n)}getAllMutationBatches(t){const e=IDBKeyRange.bound([this.userId,Le],[this.userId,Number.POSITIVE_INFINITY]);return ae(t).J(Oe,e).next(n=>n.map(s=>Ne(this.serializer,s)))}getAllMutationBatchesAffectingDocumentKey(t,e){const n=Is(this.userId,e.path),s=IDBKeyRange.lowerBound(n),i=[];return hn(t).te({range:s},(a,u,l)=>{const[d,m,g]=a,I=qt(m);if(d===this.userId&&e.path.isEqual(I))return ae(t).get(g).next(S=>{if(!S)throw O(61480,{Yn:a,batchId:g});L(S.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:S.userId,batchId:g}),i.push(Ne(this.serializer,S))});l.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Z(q);const s=[];return e.forEach(i=>{const a=Is(this.userId,i.path),u=IDBKeyRange.lowerBound(a),l=hn(t).te({range:u},(d,m,g)=>{const[I,S,C]=d,k=qt(S);I===this.userId&&i.path.isEqual(k)?n=n.add(C):g.done()});s.push(l)}),w.waitFor(s).next(()=>this.Zn(t,n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1,i=Is(this.userId,n),a=IDBKeyRange.lowerBound(i);let u=new Z(q);return hn(t).te({range:a},(l,d,m)=>{const[g,I,S]=l,C=qt(I);g===this.userId&&n.isPrefixOf(C)?C.length===s&&(u=u.add(S)):m.done()}).next(()=>this.Zn(t,u))}Zn(t,e){const n=[],s=[];return e.forEach(i=>{s.push(ae(t).get(i).next(a=>{if(a===null)throw O(35274,{batchId:i});L(a.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:a.userId,batchId:i}),n.push(Ne(this.serializer,a))}))}),w.waitFor(s).next(()=>n)}removeMutationBatch(t,e){return Jh(t.he,this.userId,e).next(n=>(t.addOnCommittedListener(()=>{this.Xn(e.batchId)}),w.forEach(n,s=>this.referenceDelegate.markPotentiallyOrphaned(t,s))))}Xn(t){delete this.jn[t]}performConsistencyCheck(t){return this.checkEmpty(t).next(e=>{if(!e)return w.resolve();const n=IDBKeyRange.lowerBound(function(a){return[a]}(this.userId)),s=[];return hn(t).te({range:n},(i,a,u)=>{if(i[0]===this.userId){const l=qt(i[1]);s.push(l)}else u.done()}).next(()=>{L(s.length===0,56720,{er:s.map(i=>i.canonicalString())})})})}containsKey(t,e){return Xh(t,this.userId,e)}tr(t){return Zh(t).get(this.userId).next(e=>e||{userId:this.userId,lastAcknowledgedBatchId:Le,lastStreamToken:""})}}function Xh(r,t,e){const n=Is(t,e.path),s=n[1],i=IDBKeyRange.lowerBound(n);let a=!1;return hn(r).te({range:i,ee:!0},(u,l,d)=>{const[m,g,I]=u;m===t&&g===s&&(a=!0),d.done()}).next(()=>a)}function ae(r){return dt(r,Lt)}function hn(r){return dt(r,pn)}function Zh(r){return dt(r,br)}/**
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
 */class Ge{constructor(t){this.nr=t}next(){return this.nr+=2,this.nr}static rr(){return new Ge(0)}static ir(){return new Ge(-1)}}/**
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
 */class Hp{constructor(t,e){this.referenceDelegate=t,this.serializer=e}allocateTargetId(t){return this.sr(t).next(e=>{const n=new Ge(e.highestTargetId);return e.highestTargetId=n.next(),this._r(t,e).next(()=>e.highestTargetId)})}getLastRemoteSnapshotVersion(t){return this.sr(t).next(e=>B.fromTimestamp(new ot(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(t){return this.sr(t).next(e=>e.highestListenSequenceNumber)}setTargetsMetadata(t,e,n){return this.sr(t).next(s=>(s.highestListenSequenceNumber=e,n&&(s.lastRemoteSnapshotVersion=n.toTimestamp()),e>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=e),this._r(t,s)))}addTargetData(t,e){return this.ar(t,e).next(()=>this.sr(t).next(n=>(n.targetCount+=1,this.ur(e,n),this._r(t,n))))}updateTargetData(t,e){return this.ar(t,e)}removeTargetData(t,e){return this.removeMatchingKeysForTargetId(t,e.targetId).next(()=>on(t).delete(e.targetId)).next(()=>this.sr(t)).next(n=>(L(n.targetCount>0,8065),n.targetCount-=1,this._r(t,n)))}removeTargets(t,e,n){let s=0;const i=[];return on(t).te((a,u)=>{const l=dr(u);l.sequenceNumber<=e&&n.get(l.targetId)===null&&(s++,i.push(this.removeTargetData(t,l)))}).next(()=>w.waitFor(i)).next(()=>s)}forEachTarget(t,e){return on(t).te((n,s)=>{const i=dr(s);e(i)})}sr(t){return Lc(t).get(ks).next(e=>(L(e!==null,2888),e))}_r(t,e){return Lc(t).put(ks,e)}ar(t,e){return on(t).put(Gh(this.serializer,e))}ur(t,e){let n=!1;return t.targetId>e.highestTargetId&&(e.highestTargetId=t.targetId,n=!0),t.sequenceNumber>e.highestListenSequenceNumber&&(e.highestListenSequenceNumber=t.sequenceNumber,n=!0),n}getTargetCount(t){return this.sr(t).next(e=>e.targetCount)}getTargetData(t,e){const n=je(e),s=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return on(t).te({range:s,index:$l},(a,u,l)=>{const d=dr(u);Lr(e,d.target)&&(i=d,l.done())}).next(()=>i)}addMatchingKeys(t,e,n){const s=[],i=ce(t);return e.forEach(a=>{const u=At(a.path);s.push(i.put({targetId:n,path:u})),s.push(this.referenceDelegate.addReference(t,n,a))}),w.waitFor(s)}removeMatchingKeys(t,e,n){const s=ce(t);return w.forEach(e,i=>{const a=At(i.path);return w.waitFor([s.delete([n,a]),this.referenceDelegate.removeReference(t,n,i)])})}removeMatchingKeysForTargetId(t,e){const n=ce(t),s=IDBKeyRange.bound([e],[e+1],!1,!0);return n.delete(s)}getMatchingKeysForTargetId(t,e){const n=IDBKeyRange.bound([e],[e+1],!1,!0),s=ce(t);let i=j();return s.te({range:n,ee:!0},(a,u,l)=>{const d=qt(a[1]),m=new M(d);i=i.add(m)}).next(()=>i)}containsKey(t,e){const n=At(e.path),s=IDBKeyRange.bound([n],[Ml(n)],!1,!0);let i=0;return ce(t).te({index:zo,ee:!0,range:s},([a,u],l,d)=>{a!==0&&(i++,d.done())}).next(()=>i>0)}Rt(t,e){return on(t).get(e).next(n=>n?dr(n):null)}}function on(r){return dt(r,_n)}function Lc(r){return dt(r,Be)}function ce(r){return dt(r,yn)}/**
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
 */const Bc="LruGarbageCollector",td=1048576;function Uc([r,t],[e,n]){const s=q(r,e);return s===0?q(t,n):s}class Wp{constructor(t){this.cr=t,this.buffer=new Z(Uc),this.lr=0}hr(){return++this.lr}Pr(t){const e=[t,this.hr()];if(this.buffer.size<this.cr)this.buffer=this.buffer.add(e);else{const n=this.buffer.last();Uc(e,n)<0&&(this.buffer=this.buffer.delete(n).add(e))}}get maxValue(){return this.buffer.last()[0]}}class ed{constructor(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.Tr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ir(6e4)}stop(){this.Tr&&(this.Tr.cancel(),this.Tr=null)}get started(){return this.Tr!==null}Ir(t){V(Bc,`Garbage collection scheduled in ${t}ms`),this.Tr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Tr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Ee(e)?V(Bc,"Ignoring IndexedDB error during garbage collection: ",e):await Ie(e)}await this.Ir(3e5)})}}class Yp{constructor(t,e){this.Er=t,this.params=e}calculateTargetCount(t,e){return this.Er.dr(t).next(n=>Math.floor(e/100*n))}nthSequenceNumber(t,e){if(e===0)return w.resolve(Vt.le);const n=new Wp(e);return this.Er.forEachTarget(t,s=>n.Pr(s.sequenceNumber)).next(()=>this.Er.Ar(t,s=>n.Pr(s))).next(()=>n.maxValue)}removeTargets(t,e,n){return this.Er.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.Er.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(V("LruGarbageCollector","Garbage collection skipped; disabled"),w.resolve(Fc)):this.getCacheSize(t).next(n=>n<this.params.cacheSizeCollectionThreshold?(V("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Fc):this.Rr(t,e))}getCacheSize(t){return this.Er.getCacheSize(t)}Rr(t,e){let n,s,i,a,u,l,d;const m=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(g=>(g>this.params.maximumSequenceNumbersToCollect?(V("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),s=this.params.maximumSequenceNumbersToCollect):s=g,a=Date.now(),this.nthSequenceNumber(t,s))).next(g=>(n=g,u=Date.now(),this.removeTargets(t,n,e))).next(g=>(i=g,l=Date.now(),this.removeOrphanedDocuments(t,n))).next(g=>(d=Date.now(),an()<=Q.DEBUG&&V("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-m}ms
	Determined least recently used ${s} in `+(u-a)+`ms
	Removed ${i} targets in `+(l-u)+`ms
	Removed ${g} documents in `+(d-l)+`ms
Total Duration: ${d-m}ms`),w.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:g})))}}function nd(r,t){return new Yp(r,t)}/**
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
 */class Jp{constructor(t,e){this.db=t,this.garbageCollector=nd(this,e)}dr(t){const e=this.Vr(t);return this.db.getTargetCache().getTargetCount(t).next(n=>e.next(s=>n+s))}Vr(t){let e=0;return this.Ar(t,n=>{e++}).next(()=>e)}forEachTarget(t,e){return this.db.getTargetCache().forEachTarget(t,e)}Ar(t,e){return this.mr(t,(n,s)=>e(s))}addReference(t,e,n){return ms(t,n)}removeReference(t,e,n){return ms(t,n)}removeTargets(t,e,n){return this.db.getTargetCache().removeTargets(t,e,n)}markPotentiallyOrphaned(t,e){return ms(t,e)}gr(t,e){return function(s,i){let a=!1;return Zh(s).ne(u=>Xh(s,u,i).next(l=>(l&&(a=!0),w.resolve(!l)))).next(()=>a)}(t,e)}removeOrphanedDocuments(t,e){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.mr(t,(a,u)=>{if(u<=e){const l=this.gr(t,a).next(d=>{if(!d)return i++,n.getEntry(t,a).next(()=>(n.removeEntry(a,B.min()),ce(t).delete(function(g){return[0,At(g.path)]}(a))))});s.push(l)}}).next(()=>w.waitFor(s)).next(()=>n.apply(t)).next(()=>i)}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(t,n)}updateLimboDocument(t,e){return ms(t,e)}mr(t,e){const n=ce(t);let s,i=Vt.le;return n.te({index:zo},([a,u],{path:l,sequenceNumber:d})=>{a===0?(i!==Vt.le&&e(new M(qt(s)),i),i=d,s=l):i=Vt.le}).next(()=>{i!==Vt.le&&e(new M(qt(s)),i)})}getCacheSize(t){return this.db.getRemoteDocumentCache().getSize(t)}}function ms(r,t){return ce(r).put(function(n,s){return{targetId:0,path:At(n.path),sequenceNumber:s}}(t,r.currentSequenceNumber))}/**
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
 */class rd{constructor(){this.changes=new te(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,ut.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return n!==void 0?w.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class Xp{constructor(t){this.serializer=t}setIndexManager(t){this.indexManager=t}addEntry(t,e,n){return Pe(t).put(n)}removeEntry(t,e,n){return Pe(t).delete(function(i,a){const u=i.path.toArray();return[u.slice(0,u.length-2),u[u.length-2],zs(a),u[u.length-1]]}(e,n))}updateMetadata(t,e){return this.getMetadata(t).next(n=>(n.byteSize+=e,this.pr(t,n)))}getEntry(t,e){let n=ut.newInvalidDocument(e);return Pe(t).te({index:Es,range:IDBKeyRange.only(ar(e))},(s,i)=>{n=this.yr(e,i)}).next(()=>n)}wr(t,e){let n={size:0,document:ut.newInvalidDocument(e)};return Pe(t).te({index:Es,range:IDBKeyRange.only(ar(e))},(s,i)=>{n={document:this.yr(e,i),size:$s(i)}}).next(()=>n)}getEntries(t,e){let n=kt();return this.br(t,e,(s,i)=>{const a=this.yr(s,i);n=n.insert(s,a)}).next(()=>n)}Sr(t,e){let n=kt(),s=new nt(M.comparator);return this.br(t,e,(i,a)=>{const u=this.yr(i,a);n=n.insert(i,u),s=s.insert(i,$s(a))}).next(()=>({documents:n,Dr:s}))}br(t,e,n){if(e.isEmpty())return w.resolve();let s=new Z(jc);e.forEach(l=>s=s.add(l));const i=IDBKeyRange.bound(ar(s.first()),ar(s.last())),a=s.getIterator();let u=a.getNext();return Pe(t).te({index:Es,range:i},(l,d,m)=>{const g=M.fromSegments([...d.prefixPath,d.collectionGroup,d.documentId]);for(;u&&jc(u,g)<0;)n(u,null),u=a.getNext();u&&u.isEqual(g)&&(n(u,d),u=a.hasNext()?a.getNext():null),u?m.H(ar(u)):m.done()}).next(()=>{for(;u;)n(u,null),u=a.hasNext()?a.getNext():null})}getDocumentsMatchingQuery(t,e,n,s,i){const a=e.path,u=[a.popLast().toArray(),a.lastSegment(),zs(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],l=[a.popLast().toArray(),a.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Pe(t).J(IDBKeyRange.bound(u,l,!0)).next(d=>{i?.incrementDocumentReadCount(d.length);let m=kt();for(const g of d){const I=this.yr(M.fromSegments(g.prefixPath.concat(g.collectionGroup,g.documentId)),g);I.isFoundDocument()&&(Br(e,I)||s.has(I.key))&&(m=m.insert(I.key,I))}return m})}getAllFromCollectionGroup(t,e,n,s){let i=kt();const a=zc(e,n),u=zc(e,Ot.max());return Pe(t).te({index:jl,range:IDBKeyRange.bound(a,u,!0)},(l,d,m)=>{const g=this.yr(M.fromSegments(d.prefixPath.concat(d.collectionGroup,d.documentId)),d);i=i.insert(g.key,g),i.size===s&&m.done()}).next(()=>i)}newChangeBuffer(t){return new Zp(this,!!t&&t.trackRemovals)}getSize(t){return this.getMetadata(t).next(e=>e.byteSize)}getMetadata(t){return qc(t).get(fo).next(e=>(L(!!e,20021),e))}pr(t,e){return qc(t).put(fo,e)}yr(t,e){if(e){const n=Lp(this.serializer,e);if(!(n.isNoDocument()&&n.version.isEqual(B.min())))return n}return ut.newInvalidDocument(t)}}function sd(r){return new Xp(r)}class Zp extends rd{constructor(t,e){super(),this.vr=t,this.trackRemovals=e,this.Cr=new te(n=>n.toString(),(n,s)=>n.isEqual(s))}applyChanges(t){const e=[];let n=0,s=new Z((i,a)=>q(i.canonicalString(),a.canonicalString()));return this.changes.forEach((i,a)=>{const u=this.Cr.get(i);if(e.push(this.vr.removeEntry(t,i,u.readTime)),a.isValidDocument()){const l=Rc(this.vr.serializer,a);s=s.add(i.path.popLast());const d=$s(l);n+=d-u.size,e.push(this.vr.addEntry(t,i,l))}else if(n-=u.size,this.trackRemovals){const l=Rc(this.vr.serializer,a.convertToNoDocument(B.min()));e.push(this.vr.addEntry(t,i,l))}}),s.forEach(i=>{e.push(this.vr.indexManager.addToCollectionParentIndex(t,i))}),e.push(this.vr.updateMetadata(t,n)),w.waitFor(e)}getFromCache(t,e){return this.vr.wr(t,e).next(n=>(this.Cr.set(e,{size:n.size,readTime:n.document.readTime}),n.document))}getAllFromCache(t,e){return this.vr.Sr(t,e).next(({documents:n,Dr:s})=>(s.forEach((i,a)=>{this.Cr.set(i,{size:a,readTime:n.get(i).readTime})}),n))}}function qc(r){return dt(r,Sr)}function Pe(r){return dt(r,Ns)}function ar(r){const t=r.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function zc(r,t){const e=t.documentKey.path.toArray();return[r,zs(t.readTime),e.slice(0,e.length-2),e.length>0?e[e.length-1]:""]}function jc(r,t){const e=r.path.toArray(),n=t.path.toArray();let s=0;for(let i=0;i<e.length-2&&i<n.length-2;++i)if(s=q(e[i],n[i]),s)return s;return s=q(e.length,n.length),s||(s=q(e[e.length-2],n[n.length-2]),s||q(e[e.length-1],n[n.length-1]))}/**
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
 */class t_{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class id{constructor(t,e,n,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=s}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(n=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(n!==null&&Ir(n.mutation,s,Ct.empty(),ot.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.getLocalViewOfDocuments(t,n,j()).next(()=>n))}getLocalViewOfDocuments(t,e,n=j()){const s=zt();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,n).next(i=>{let a=lr();return i.forEach((u,l)=>{a=a.insert(u,l.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const n=zt();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,j()))}populateOverlays(t,e,n){const s=[];return n.forEach(i=>{e.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(t,s).next(i=>{i.forEach((a,u)=>{e.set(a,u)})})}computeViews(t,e,n,s){let i=kt();const a=yr(),u=function(){return yr()}();return e.forEach((l,d)=>{const m=n.get(d.key);s.has(d.key)&&(m===void 0||m.mutation instanceof ee)?i=i.insert(d.key,d):m!==void 0?(a.set(d.key,m.mutation.getFieldMask()),Ir(m.mutation,d,m.mutation.getFieldMask(),ot.now())):a.set(d.key,Ct.empty())}),this.recalculateAndSaveOverlays(t,i).next(l=>(l.forEach((d,m)=>a.set(d,m)),e.forEach((d,m)=>{var g;return u.set(d,new t_(m,(g=a.get(d))!==null&&g!==void 0?g:null))}),u))}recalculateAndSaveOverlays(t,e){const n=yr();let s=new nt((a,u)=>a-u),i=j();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const u of a)u.keys().forEach(l=>{const d=e.get(l);if(d===null)return;let m=n.get(l)||Ct.empty();m=u.applyToLocalView(d,m),n.set(l,m);const g=(s.get(u.batchId)||j()).add(l);s=s.insert(u.batchId,g)})}).next(()=>{const a=[],u=s.getReverseIterator();for(;u.hasNext();){const l=u.getNext(),d=l.key,m=l.value,g=Th();m.forEach(I=>{if(!i.has(I)){const S=Ph(e.get(I),n.get(I));S!==null&&g.set(I,S),i=i.add(I)}}),a.push(this.documentOverlayCache.saveOverlays(t,d,g))}return w.waitFor(a)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.recalculateAndSaveOverlays(t,n))}getDocumentsMatchingQuery(t,e,n,s){return function(a){return M.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):gh(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,s):this.getDocumentsMatchingCollectionQuery(t,e,n,s)}getNextDocuments(t,e,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,s-i.size):w.resolve(zt());let u=gn,l=i;return a.next(d=>w.forEach(d,(m,g)=>(u<g.largestBatchId&&(u=g.largestBatchId),i.get(m)?w.resolve():this.remoteDocumentCache.getEntry(t,m).next(I=>{l=l.insert(m,I)}))).next(()=>this.populateOverlays(t,d,i)).next(()=>this.computeViews(t,l,d,j())).next(m=>({batchId:u,changes:Eh(m)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new M(e)).next(n=>{let s=lr();return n.isFoundDocument()&&(s=s.insert(n.key,n)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,n,s){const i=e.collectionGroup;let a=lr();return this.indexManager.getCollectionParents(t,i).next(u=>w.forEach(u,l=>{const d=function(g,I){return new Mn(I,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(e,l.child(i));return this.getDocumentsMatchingCollectionQuery(t,d,n,s).next(m=>{m.forEach((g,I)=>{a=a.insert(g,I)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,i,s))).next(a=>{i.forEach((l,d)=>{const m=d.getKey();a.get(m)===null&&(a=a.insert(m,ut.newInvalidDocument(m)))});let u=lr();return a.forEach((l,d)=>{const m=i.get(l);m!==void 0&&Ir(m.mutation,d,Ct.empty(),ot.now()),Br(e,d)&&(u=u.insert(l,d))}),u})}}/**
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
 */class e_{constructor(t){this.serializer=t,this.Fr=new Map,this.Mr=new Map}getBundleMetadata(t,e){return w.resolve(this.Fr.get(e))}saveBundleMetadata(t,e){return this.Fr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:Pt(s.createTime)}}(e)),w.resolve()}getNamedQuery(t,e){return w.resolve(this.Mr.get(e))}saveNamedQuery(t,e){return this.Mr.set(e.name,function(s){return{name:s.name,query:Qh(s.bundledQuery),readTime:Pt(s.readTime)}}(e)),w.resolve()}}/**
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
 */class n_{constructor(){this.overlays=new nt(M.comparator),this.Or=new Map}getOverlay(t,e){return w.resolve(this.overlays.get(e))}getOverlays(t,e){const n=zt();return w.forEach(e,s=>this.getOverlay(t,s).next(i=>{i!==null&&n.set(s,i)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((s,i)=>{this.St(t,e,i)}),w.resolve()}removeOverlaysForBatchId(t,e,n){const s=this.Or.get(n);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Or.delete(n)),w.resolve()}getOverlaysForCollection(t,e,n){const s=zt(),i=e.length+1,a=new M(e.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const l=u.getNext().value,d=l.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===i&&l.largestBatchId>n&&s.set(l.getKey(),l)}return w.resolve(s)}getOverlaysForCollectionGroup(t,e,n,s){let i=new nt((d,m)=>d-m);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>n){let m=i.get(d.largestBatchId);m===null&&(m=zt(),i=i.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const u=zt(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((d,m)=>u.set(d,m)),!(u.size()>=s)););return w.resolve(u)}St(t,e,n){const s=this.overlays.get(n.key);if(s!==null){const a=this.Or.get(s.largestBatchId).delete(n.key);this.Or.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(n.key,new ta(e,n));let i=this.Or.get(e);i===void 0&&(i=j(),this.Or.set(e,i)),this.Or.set(e,i.add(n.key))}}/**
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
 */class r_{constructor(){this.sessionToken=lt.EMPTY_BYTE_STRING}getSessionToken(t){return w.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,w.resolve()}}/**
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
 */class ia{constructor(){this.Nr=new Z(ft.Br),this.Lr=new Z(ft.kr)}isEmpty(){return this.Nr.isEmpty()}addReference(t,e){const n=new ft(t,e);this.Nr=this.Nr.add(n),this.Lr=this.Lr.add(n)}qr(t,e){t.forEach(n=>this.addReference(n,e))}removeReference(t,e){this.Qr(new ft(t,e))}$r(t,e){t.forEach(n=>this.removeReference(n,e))}Ur(t){const e=new M(new J([])),n=new ft(e,t),s=new ft(e,t+1),i=[];return this.Lr.forEachInRange([n,s],a=>{this.Qr(a),i.push(a.key)}),i}Kr(){this.Nr.forEach(t=>this.Qr(t))}Qr(t){this.Nr=this.Nr.delete(t),this.Lr=this.Lr.delete(t)}Wr(t){const e=new M(new J([])),n=new ft(e,t),s=new ft(e,t+1);let i=j();return this.Lr.forEachInRange([n,s],a=>{i=i.add(a.key)}),i}containsKey(t){const e=new ft(t,0),n=this.Nr.firstAfterOrEqual(e);return n!==null&&t.isEqual(n.key)}}class ft{constructor(t,e){this.key=t,this.Gr=e}static Br(t,e){return M.comparator(t.key,e.key)||q(t.Gr,e.Gr)}static kr(t,e){return q(t.Gr,e.Gr)||M.comparator(t.key,e.key)}}/**
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
 */class s_{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Jn=1,this.zr=new Z(ft.Br)}checkEmpty(t){return w.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,n,s){const i=this.Jn;this.Jn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Xo(i,e,n,s);this.mutationQueue.push(a);for(const u of s)this.zr=this.zr.add(new ft(u.key,i)),this.indexManager.addToCollectionParentIndex(t,u.key.path.popLast());return w.resolve(a)}lookupMutationBatch(t,e){return w.resolve(this.jr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=this.Hr(n),i=s<0?0:s;return w.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return w.resolve(this.mutationQueue.length===0?Le:this.Jn-1)}getAllMutationBatches(t){return w.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new ft(e,0),s=new ft(e,Number.POSITIVE_INFINITY),i=[];return this.zr.forEachInRange([n,s],a=>{const u=this.jr(a.Gr);i.push(u)}),w.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Z(q);return e.forEach(s=>{const i=new ft(s,0),a=new ft(s,Number.POSITIVE_INFINITY);this.zr.forEachInRange([i,a],u=>{n=n.add(u.Gr)})}),w.resolve(this.Jr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1;let i=n;M.isDocumentKey(i)||(i=i.child(""));const a=new ft(new M(i),0);let u=new Z(q);return this.zr.forEachWhile(l=>{const d=l.key.path;return!!n.isPrefixOf(d)&&(d.length===s&&(u=u.add(l.Gr)),!0)},a),w.resolve(this.Jr(u))}Jr(t){const e=[];return t.forEach(n=>{const s=this.jr(n);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){L(this.Yr(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.zr;return w.forEach(e.mutations,s=>{const i=new ft(s.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.zr=n})}Xn(t){}containsKey(t,e){const n=new ft(e,0),s=this.zr.firstAfterOrEqual(n);return w.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,w.resolve()}Yr(t,e){return this.Hr(t)}Hr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}jr(t){const e=this.Hr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class i_{constructor(t){this.Zr=t,this.docs=function(){return new nt(M.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,s=this.docs.get(n),i=s?s.size:0,a=this.Zr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return w.resolve(n?n.document.mutableCopy():ut.newInvalidDocument(e))}getEntries(t,e){let n=kt();return e.forEach(s=>{const i=this.docs.get(s);n=n.insert(s,i?i.document.mutableCopy():ut.newInvalidDocument(s))}),w.resolve(n)}getDocumentsMatchingQuery(t,e,n,s){let i=kt();const a=e.path,u=new M(a.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(u);for(;l.hasNext();){const{key:d,value:{document:m}}=l.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Uo(Fl(m),n)<=0||(s.has(m.key)||Br(e,m))&&(i=i.insert(m.key,m.mutableCopy()))}return w.resolve(i)}getAllFromCollectionGroup(t,e,n,s){O(9500)}Xr(t,e){return w.forEach(this.docs,n=>e(n))}newChangeBuffer(t){return new o_(this)}getSize(t){return w.resolve(this.size)}}class o_ extends rd{constructor(t){super(),this.vr=t}applyChanges(t){const e=[];return this.changes.forEach((n,s)=>{s.isValidDocument()?e.push(this.vr.addEntry(t,s)):this.vr.removeEntry(n)}),w.waitFor(e)}getFromCache(t,e){return this.vr.getEntry(t,e)}getAllFromCache(t,e){return this.vr.getEntries(t,e)}}/**
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
 */class a_{constructor(t){this.persistence=t,this.ei=new te(e=>je(e),Lr),this.lastRemoteSnapshotVersion=B.min(),this.highestTargetId=0,this.ti=0,this.ni=new ia,this.targetCount=0,this.ri=Ge.rr()}forEachTarget(t,e){return this.ei.forEach((n,s)=>e(s)),w.resolve()}getLastRemoteSnapshotVersion(t){return w.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return w.resolve(this.ti)}allocateTargetId(t){return this.highestTargetId=this.ri.next(),w.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.ti&&(this.ti=e),w.resolve()}ar(t){this.ei.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.ri=new Ge(e),this.highestTargetId=e),t.sequenceNumber>this.ti&&(this.ti=t.sequenceNumber)}addTargetData(t,e){return this.ar(e),this.targetCount+=1,w.resolve()}updateTargetData(t,e){return this.ar(e),w.resolve()}removeTargetData(t,e){return this.ei.delete(e.target),this.ni.Ur(e.targetId),this.targetCount-=1,w.resolve()}removeTargets(t,e,n){let s=0;const i=[];return this.ei.forEach((a,u)=>{u.sequenceNumber<=e&&n.get(u.targetId)===null&&(this.ei.delete(a),i.push(this.removeMatchingKeysForTargetId(t,u.targetId)),s++)}),w.waitFor(i).next(()=>s)}getTargetCount(t){return w.resolve(this.targetCount)}getTargetData(t,e){const n=this.ei.get(e)||null;return w.resolve(n)}addMatchingKeys(t,e,n){return this.ni.qr(e,n),w.resolve()}removeMatchingKeys(t,e,n){this.ni.$r(e,n);const s=this.persistence.referenceDelegate,i=[];return s&&e.forEach(a=>{i.push(s.markPotentiallyOrphaned(t,a))}),w.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.ni.Ur(e),w.resolve()}getMatchingKeysForTargetId(t,e){const n=this.ni.Wr(e);return w.resolve(n)}containsKey(t,e){return w.resolve(this.ni.containsKey(e))}}/**
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
 */class oa{constructor(t,e){this.ii={},this.overlays={},this.si=new Vt(0),this.oi=!1,this.oi=!0,this._i=new r_,this.referenceDelegate=t(this),this.ai=new a_(this),this.indexManager=new Gp,this.remoteDocumentCache=function(s){return new i_(s)}(n=>this.referenceDelegate.ui(n)),this.serializer=new Kh(e),this.ci=new e_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.oi=!1,Promise.resolve()}get started(){return this.oi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new n_,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.ii[t.toKey()];return n||(n=new s_(e,this.referenceDelegate),this.ii[t.toKey()]=n),n}getGlobalsCache(){return this._i}getTargetCache(){return this.ai}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.ci}runTransaction(t,e,n){V("MemoryPersistence","Starting transaction:",t);const s=new u_(this.si.next());return this.referenceDelegate.li(),n(s).next(i=>this.referenceDelegate.hi(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Pi(t,e){return w.or(Object.values(this.ii).map(n=>()=>n.containsKey(t,e)))}}class u_ extends Bl{constructor(t){super(),this.currentSequenceNumber=t}}class di{constructor(t){this.persistence=t,this.Ti=new ia,this.Ii=null}static Ei(t){return new di(t)}get di(){if(this.Ii)return this.Ii;throw O(60996)}addReference(t,e,n){return this.Ti.addReference(n,e),this.di.delete(n.toString()),w.resolve()}removeReference(t,e,n){return this.Ti.removeReference(n,e),this.di.add(n.toString()),w.resolve()}markPotentiallyOrphaned(t,e){return this.di.add(e.toString()),w.resolve()}removeTarget(t,e){this.Ti.Ur(e.targetId).forEach(s=>this.di.add(s.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(i=>this.di.add(i.toString()))}).next(()=>n.removeTargetData(t,e))}li(){this.Ii=new Set}hi(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return w.forEach(this.di,n=>{const s=M.fromPath(n);return this.Ai(t,s).next(i=>{i||e.removeEntry(s,B.min())})}).next(()=>(this.Ii=null,e.apply(t)))}updateLimboDocument(t,e){return this.Ai(t,e).next(n=>{n?this.di.delete(e.toString()):this.di.add(e.toString())})}ui(t){return 0}Ai(t,e){return w.or([()=>w.resolve(this.Ti.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Pi(t,e)])}}class Ks{constructor(t,e){this.persistence=t,this.Ri=new te(n=>At(n.path),(n,s)=>n.isEqual(s)),this.garbageCollector=nd(this,e)}static Ei(t,e){return new Ks(t,e)}li(){}hi(t){return w.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}dr(t){const e=this.Vr(t);return this.persistence.getTargetCache().getTargetCount(t).next(n=>e.next(s=>n+s))}Vr(t){let e=0;return this.Ar(t,n=>{e++}).next(()=>e)}Ar(t,e){return w.forEach(this.Ri,(n,s)=>this.gr(t,n,s).next(i=>i?w.resolve():e(s)))}removeTargets(t,e,n){return this.persistence.getTargetCache().removeTargets(t,e,n)}removeOrphanedDocuments(t,e){let n=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.Xr(t,a=>this.gr(t,a,e).next(u=>{u||(n++,i.removeEntry(a,B.min()))})).next(()=>i.apply(t)).next(()=>n)}markPotentiallyOrphaned(t,e){return this.Ri.set(e,t.currentSequenceNumber),w.resolve()}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,n)}addReference(t,e,n){return this.Ri.set(n,t.currentSequenceNumber),w.resolve()}removeReference(t,e,n){return this.Ri.set(n,t.currentSequenceNumber),w.resolve()}updateLimboDocument(t,e){return this.Ri.set(e,t.currentSequenceNumber),w.resolve()}ui(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=vs(t.data.value)),e}gr(t,e,n){return w.or([()=>this.persistence.Pi(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.Ri.get(e);return w.resolve(s!==void 0&&s>n)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class c_{constructor(t){this.serializer=t}q(t,e,n,s){const i=new Xs("createOrUpgrade",e);n<1&&s>=1&&(function(l){l.createObjectStore(Fr)}(t),function(l){l.createObjectStore(br,{keyPath:Rg}),l.createObjectStore(Lt,{keyPath:ec,autoIncrement:!0}).createIndex(Oe,nc,{unique:!0}),l.createObjectStore(pn)}(t),$c(t),function(l){l.createObjectStore(De)}(t));let a=w.resolve();return n<3&&s>=3&&(n!==0&&(function(l){l.deleteObjectStore(yn),l.deleteObjectStore(_n),l.deleteObjectStore(Be)}(t),$c(t)),a=a.next(()=>function(l){const d=l.store(Be),m={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:B.min().toTimestamp(),targetCount:0};return d.put(ks,m)}(i))),n<4&&s>=4&&(n!==0&&(a=a.next(()=>function(l,d){return d.store(Lt).J().next(g=>{l.deleteObjectStore(Lt),l.createObjectStore(Lt,{keyPath:ec,autoIncrement:!0}).createIndex(Oe,nc,{unique:!0});const I=d.store(Lt),S=g.map(C=>I.put(C));return w.waitFor(S)})}(t,i))),a=a.next(()=>{(function(l){l.createObjectStore(In,{keyPath:kg})})(t)})),n<5&&s>=5&&(a=a.next(()=>this.Vi(i))),n<6&&s>=6&&(a=a.next(()=>(function(l){l.createObjectStore(Sr)}(t),this.mi(i)))),n<7&&s>=7&&(a=a.next(()=>this.fi(i))),n<8&&s>=8&&(a=a.next(()=>this.gi(t,i))),n<9&&s>=9&&(a=a.next(()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(t)})),n<10&&s>=10&&(a=a.next(()=>this.pi(i))),n<11&&s>=11&&(a=a.next(()=>{(function(l){l.createObjectStore(ti,{keyPath:Mg})})(t),function(l){l.createObjectStore(ei,{keyPath:Og})}(t)})),n<12&&s>=12&&(a=a.next(()=>{(function(l){const d=l.createObjectStore(ni,{keyPath:jg});d.createIndex(go,$g,{unique:!1}),d.createIndex(Ql,Kg,{unique:!1})})(t)})),n<13&&s>=13&&(a=a.next(()=>function(l){const d=l.createObjectStore(Ns,{keyPath:Sg});d.createIndex(Es,Pg),d.createIndex(jl,Vg)}(t)).next(()=>this.yi(t,i)).next(()=>t.deleteObjectStore(De))),n<14&&s>=14&&(a=a.next(()=>this.wi(t,i))),n<15&&s>=15&&(a=a.next(()=>function(l){l.createObjectStore(jo,{keyPath:Fg,autoIncrement:!0}).createIndex(mo,Lg,{unique:!1}),l.createObjectStore(Ms,{keyPath:Bg}).createIndex(Kl,Ug,{unique:!1}),l.createObjectStore(Os,{keyPath:qg}).createIndex(Gl,zg,{unique:!1})}(t))),n<16&&s>=16&&(a=a.next(()=>{e.objectStore(Ms).clear()}).next(()=>{e.objectStore(Os).clear()})),n<17&&s>=17&&(a=a.next(()=>{(function(l){l.createObjectStore($o,{keyPath:Gg})})(t)})),a}mi(t){let e=0;return t.store(De).te((n,s)=>{e+=$s(s)}).next(()=>{const n={byteSize:e};return t.store(Sr).put(fo,n)})}Vi(t){const e=t.store(br),n=t.store(Lt);return e.J().next(s=>w.forEach(s,i=>{const a=IDBKeyRange.bound([i.userId,Le],[i.userId,i.lastAcknowledgedBatchId]);return n.J(Oe,a).next(u=>w.forEach(u,l=>{L(l.userId===i.userId,18650,"Cannot process batch from unexpected user",{batchId:l.batchId});const d=Ne(this.serializer,l);return Jh(t,i.userId,d).next(()=>{})}))}))}fi(t){const e=t.store(yn),n=t.store(De);return t.store(Be).get(ks).next(s=>{const i=[];return n.te((a,u)=>{const l=new J(a),d=function(g){return[0,At(g)]}(l);i.push(e.get(d).next(m=>m?w.resolve():(g=>e.put({targetId:0,path:At(g),sequenceNumber:s.highestListenSequenceNumber}))(l)))}).next(()=>w.waitFor(i))})}gi(t,e){t.createObjectStore(Pr,{keyPath:Ng});const n=e.store(Pr),s=new sa,i=a=>{if(s.add(a)){const u=a.lastSegment(),l=a.popLast();return n.put({collectionId:u,parent:At(l)})}};return e.store(De).te({ee:!0},(a,u)=>{const l=new J(a);return i(l.popLast())}).next(()=>e.store(pn).te({ee:!0},([a,u,l],d)=>{const m=qt(u);return i(m.popLast())}))}pi(t){const e=t.store(_n);return e.te((n,s)=>{const i=dr(s),a=Gh(this.serializer,i);return e.put(a)})}yi(t,e){const n=e.store(De),s=[];return n.te((i,a)=>{const u=e.store(Ns),l=function(g){return g.document?new M(J.fromString(g.document.name).popFirst(5)):g.noDocument?M.fromSegments(g.noDocument.path):g.unknownDocument?M.fromSegments(g.unknownDocument.path):O(36783)}(a).path.toArray(),d={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:a.readTime||[0,0],unknownDocument:a.unknownDocument,noDocument:a.noDocument,document:a.document,hasCommittedMutations:!!a.hasCommittedMutations};s.push(u.put(d))}).next(()=>w.waitFor(s))}wi(t,e){const n=e.store(Lt),s=sd(this.serializer),i=new oa(di.Ei,this.serializer.wt);return n.J().next(a=>{const u=new Map;return a.forEach(l=>{var d;let m=(d=u.get(l.userId))!==null&&d!==void 0?d:j();Ne(this.serializer,l).keys().forEach(g=>m=m.add(g)),u.set(l.userId,m)}),w.forEach(u,(l,d)=>{const m=new Tt(d),g=li.bt(this.serializer,m),I=i.getIndexManager(m),S=hi.bt(m,this.serializer,I,i.referenceDelegate);return new id(s,S,g,I).recalculateAndSaveOverlaysForDocumentKeys(new po(e,Vt.le),l).next()})})}}function $c(r){r.createObjectStore(yn,{keyPath:Dg}).createIndex(zo,xg,{unique:!0}),r.createObjectStore(_n,{keyPath:"targetId"}).createIndex($l,Cg,{unique:!0}),r.createObjectStore(Be)}const ue="IndexedDbPersistence",Ji=18e5,Xi=5e3,Zi="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",l_="main";class aa{constructor(t,e,n,s,i,a,u,l,d,m,g=17){if(this.allowTabSynchronization=t,this.persistenceKey=e,this.clientId=n,this.bi=i,this.window=a,this.document=u,this.Si=d,this.Di=m,this.Ci=g,this.si=null,this.oi=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Fi=null,this.inForeground=!1,this.Mi=null,this.xi=null,this.Oi=Number.NEGATIVE_INFINITY,this.Ni=I=>Promise.resolve(),!aa.C())throw new x(P.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Jp(this,s),this.Bi=e+l_,this.serializer=new Kh(l),this.Li=new fe(this.Bi,this.Ci,new c_(this.serializer)),this._i=new Up,this.ai=new Hp(this.referenceDelegate,this.serializer),this.remoteDocumentCache=sd(this.serializer),this.ci=new Bp,this.window&&this.window.localStorage?this.ki=this.window.localStorage:(this.ki=null,m===!1&&ct(ue,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.qi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new x(P.FAILED_PRECONDITION,Zi);return this.Qi(),this.$i(),this.Ui(),this.runTransaction("getHighestListenSequenceNumber","readonly",t=>this.ai.getHighestSequenceNumber(t))}).then(t=>{this.si=new Vt(t,this.Si)}).then(()=>{this.oi=!0}).catch(t=>(this.Li&&this.Li.close(),Promise.reject(t)))}Ki(t){return this.Ni=async e=>{if(this.started)return t(e)},t(this.isPrimary)}setDatabaseDeletedListener(t){this.Li.U(async e=>{e.newVersion===null&&await t()})}setNetworkEnabled(t){this.networkEnabled!==t&&(this.networkEnabled=t,this.bi.enqueueAndForget(async()=>{this.started&&await this.qi()}))}qi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",t=>gs(t).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Wi(t).next(e=>{e||(this.isPrimary=!1,this.bi.enqueueRetryable(()=>this.Ni(!1)))})}).next(()=>this.Gi(t)).next(e=>this.isPrimary&&!e?this.zi(t).next(()=>!1):!!e&&this.ji(t).next(()=>!0))).catch(t=>{if(Ee(t))return V(ue,"Failed to extend owner lease: ",t),this.isPrimary;if(!this.allowTabSynchronization)throw t;return V(ue,"Releasing owner lease after error during lease refresh",t),!1}).then(t=>{this.isPrimary!==t&&this.bi.enqueueRetryable(()=>this.Ni(t)),this.isPrimary=t})}Wi(t){return ur(t).get(tn).next(e=>w.resolve(this.Hi(e)))}Ji(t){return gs(t).delete(this.clientId)}async Yi(){if(this.isPrimary&&!this.Zi(this.Oi,Ji)){this.Oi=Date.now();const t=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",e=>{const n=dt(e,In);return n.J().next(s=>{const i=this.Xi(s,Ji),a=s.filter(u=>i.indexOf(u)===-1);return w.forEach(a,u=>n.delete(u.clientId)).next(()=>a)})}).catch(()=>[]);if(this.ki)for(const e of t)this.ki.removeItem(this.es(e.clientId))}}Ui(){this.xi=this.bi.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.qi().then(()=>this.Yi()).then(()=>this.Ui()))}Hi(t){return!!t&&t.ownerId===this.clientId}Gi(t){return this.Di?w.resolve(!0):ur(t).get(tn).next(e=>{if(e!==null&&this.Zi(e.leaseTimestampMs,Xi)&&!this.ts(e.ownerId)){if(this.Hi(e)&&this.networkEnabled)return!0;if(!this.Hi(e)){if(!e.allowTabSynchronization)throw new x(P.FAILED_PRECONDITION,Zi);return!1}}return!(!this.networkEnabled||!this.inForeground)||gs(t).J().next(n=>this.Xi(n,Xi).find(s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,a=!this.inForeground&&s.inForeground,u=this.networkEnabled===s.networkEnabled;if(i||a&&u)return!0}return!1})===void 0)}).next(e=>(this.isPrimary!==e&&V(ue,`Client ${e?"is":"is not"} eligible for a primary lease.`),e))}async shutdown(){this.oi=!1,this.ns(),this.xi&&(this.xi.cancel(),this.xi=null),this.rs(),this.ss(),await this.Li.runTransaction("shutdown","readwrite",[Fr,In],t=>{const e=new po(t,Vt.le);return this.zi(e).next(()=>this.Ji(e))}),this.Li.close(),this._s()}Xi(t,e){return t.filter(n=>this.Zi(n.updateTimeMs,e)&&!this.ts(n.clientId))}us(){return this.runTransaction("getActiveClients","readonly",t=>gs(t).J().next(e=>this.Xi(e,Ji).map(n=>n.clientId)))}get started(){return this.oi}getGlobalsCache(){return this._i}getMutationQueue(t,e){return hi.bt(t,this.serializer,e,this.referenceDelegate)}getTargetCache(){return this.ai}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(t){return new Qp(t,this.serializer.wt.databaseId)}getDocumentOverlayCache(t){return li.bt(this.serializer,t)}getBundleCache(){return this.ci}runTransaction(t,e,n){V(ue,"Starting transaction:",t);const s=e==="readonly"?"readonly":"readwrite",i=function(l){return l===17?Wg:l===16?Hg:l===15?Ko:l===14?Yl:l===13?Wl:l===12?Qg:l===11?Hl:void O(60245)}(this.Ci);let a;return this.Li.runTransaction(t,s,i,u=>(a=new po(u,this.si?this.si.next():Vt.le),e==="readwrite-primary"?this.Wi(a).next(l=>!!l||this.Gi(a)).next(l=>{if(!l)throw ct(`Failed to obtain primary lease for action '${t}'.`),this.isPrimary=!1,this.bi.enqueueRetryable(()=>this.Ni(!1)),new x(P.FAILED_PRECONDITION,Ll);return n(a)}).next(l=>this.ji(a).next(()=>l)):this.cs(a).next(()=>n(a)))).then(u=>(a.raiseOnCommittedEvent(),u))}cs(t){return ur(t).get(tn).next(e=>{if(e!==null&&this.Zi(e.leaseTimestampMs,Xi)&&!this.ts(e.ownerId)&&!this.Hi(e)&&!(this.Di||this.allowTabSynchronization&&e.allowTabSynchronization))throw new x(P.FAILED_PRECONDITION,Zi)})}ji(t){const e={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return ur(t).put(tn,e)}static C(){return fe.C()}zi(t){const e=ur(t);return e.get(tn).next(n=>this.Hi(n)?(V(ue,"Releasing primary lease."),e.delete(tn)):w.resolve())}Zi(t,e){const n=Date.now();return!(t<n-e)&&(!(t>n)||(ct(`Detected an update time that is in the future: ${t} > ${n}`),!1))}Qi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Mi=()=>{this.bi.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.qi()))},this.document.addEventListener("visibilitychange",this.Mi),this.inForeground=this.document.visibilityState==="visible")}rs(){this.Mi&&(this.document.removeEventListener("visibilitychange",this.Mi),this.Mi=null)}$i(){var t;typeof((t=this.window)===null||t===void 0?void 0:t.addEventListener)=="function"&&(this.Fi=()=>{this.ns();const e=/(?:Version|Mobile)\/1[456]/;yl()&&(navigator.appVersion.match(e)||navigator.userAgent.match(e))&&this.bi.enterRestrictedMode(!0),this.bi.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Fi))}ss(){this.Fi&&(this.window.removeEventListener("pagehide",this.Fi),this.Fi=null)}ts(t){var e;try{const n=((e=this.ki)===null||e===void 0?void 0:e.getItem(this.es(t)))!==null;return V(ue,`Client '${t}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(n){return ct(ue,"Failed to get zombied client id.",n),!1}}ns(){if(this.ki)try{this.ki.setItem(this.es(this.clientId),String(Date.now()))}catch(t){ct("Failed to set zombie client id.",t)}}_s(){if(this.ki)try{this.ki.removeItem(this.es(this.clientId))}catch{}}es(t){return`firestore_zombie_${this.persistenceKey}_${t}`}}function ur(r){return dt(r,Fr)}function gs(r){return dt(r,In)}function od(r,t){let e=r.projectId;return r.isDefaultDatabase||(e+="."+r.database),"firestore/"+t+"/"+e+"/"}/**
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
 */class ua{constructor(t,e,n,s){this.targetId=t,this.fromCache=e,this.ls=n,this.hs=s}static Ps(t,e){let n=j(),s=j();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new ua(t,e.fromCache,n,s)}}/**
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
 */class h_{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class ad{constructor(){this.Ts=!1,this.Is=!1,this.Es=100,this.ds=function(){return yl()?8:Ul(Ps())>0?6:4}()}initialize(t,e){this.As=t,this.indexManager=e,this.Ts=!0}getDocumentsMatchingQuery(t,e,n,s){const i={result:null};return this.Rs(t,e).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.Vs(t,e,s,n).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new h_;return this.fs(t,e,a).next(u=>{if(i.result=u,this.Is)return this.gs(t,e,a,u.size)})}).next(()=>i.result)}gs(t,e,n,s){return n.documentReadCount<this.Es?(an()<=Q.DEBUG&&V("QueryEngine","SDK will not create cache indexes for query:",un(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Es,"documents"),w.resolve()):(an()<=Q.DEBUG&&V("QueryEngine","Query:",un(e),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.ds*s?(an()<=Q.DEBUG&&V("QueryEngine","The SDK decides to create cache indexes for query:",un(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Mt(e))):w.resolve())}Rs(t,e){if(gc(e))return w.resolve(null);let n=Mt(e);return this.indexManager.getIndexType(t,n).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=wo(e,null,"F"),n=Mt(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next(i=>{const a=j(...i);return this.As.getDocuments(t,a).next(u=>this.indexManager.getMinOffset(t,n).next(l=>{const d=this.ps(e,u);return this.ys(e,d,a,l.readTime)?this.Rs(t,wo(e,null,"F")):this.ws(t,d,e,l)}))})))}Vs(t,e,n,s){return gc(e)||s.isEqual(B.min())?w.resolve(null):this.As.getDocuments(t,n).next(i=>{const a=this.ps(e,i);return this.ys(e,a,n,s)?w.resolve(null):(an()<=Q.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),un(e)),this.ws(t,a,e,Ol(s,gn)).next(u=>u))})}ps(t,e){let n=new Z(yh(t));return e.forEach((s,i)=>{Br(t,i)&&(n=n.add(i))}),n}ys(t,e,n,s){if(t.limit===null)return!1;if(n.size!==e.size)return!0;const i=t.limitType==="F"?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}fs(t,e,n){return an()<=Q.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",un(e)),this.As.getDocumentsMatchingQuery(t,e,Ot.min(),n)}ws(t,e,n,s){return this.As.getDocumentsMatchingQuery(t,n,s).next(i=>(e.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */const ca="LocalStore",d_=3e8;class f_{constructor(t,e,n,s){this.persistence=t,this.bs=e,this.serializer=s,this.Ss=new nt(q),this.Ds=new te(i=>je(i),Lr),this.vs=new Map,this.Cs=t.getRemoteDocumentCache(),this.ai=t.getTargetCache(),this.ci=t.getBundleCache(),this.Fs(n)}Fs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new id(this.Cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Cs.setIndexManager(this.indexManager),this.bs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Ss))}}function ud(r,t,e,n){return new f_(r,t,e,n)}async function cd(r,t){const e=F(r);return await e.persistence.runTransaction("Handle user change","readonly",n=>{let s;return e.mutationQueue.getAllMutationBatches(n).next(i=>(s=i,e.Fs(t),e.mutationQueue.getAllMutationBatches(n))).next(i=>{const a=[],u=[];let l=j();for(const d of s){a.push(d.batchId);for(const m of d.mutations)l=l.add(m.key)}for(const d of i){u.push(d.batchId);for(const m of d.mutations)l=l.add(m.key)}return e.localDocuments.getDocuments(n,l).next(d=>({Ms:d,removedBatchIds:a,addedBatchIds:u}))})})}function m_(r,t){const e=F(r);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const s=t.batch.keys(),i=e.Cs.newChangeBuffer({trackRemovals:!0});return function(u,l,d,m){const g=d.batch,I=g.keys();let S=w.resolve();return I.forEach(C=>{S=S.next(()=>m.getEntry(l,C)).next(k=>{const D=d.docVersions.get(C);L(D!==null,48541),k.version.compareTo(D)<0&&(g.applyToRemoteDocument(k,d),k.isValidDocument()&&(k.setReadTime(d.commitVersion),m.addEntry(k)))})}),S.next(()=>u.mutationQueue.removeMutationBatch(l,g))}(e,n,t,i).next(()=>i.apply(n)).next(()=>e.mutationQueue.performConsistencyCheck(n)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(n,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(u){let l=j();for(let d=0;d<u.mutationResults.length;++d)u.mutationResults[d].transformResults.length>0&&(l=l.add(u.batch.mutations[d].key));return l}(t))).next(()=>e.localDocuments.getDocuments(n,s))})}function ld(r){const t=F(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.ai.getLastRemoteSnapshotVersion(e))}function g_(r,t){const e=F(r),n=t.snapshotVersion;let s=e.Ss;return e.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=e.Cs.newChangeBuffer({trackRemovals:!0});s=e.Ss;const u=[];t.targetChanges.forEach((m,g)=>{const I=s.get(g);if(!I)return;u.push(e.ai.removeMatchingKeys(i,m.removedDocuments,g).next(()=>e.ai.addMatchingKeys(i,m.addedDocuments,g)));let S=I.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(g)!==null?S=S.withResumeToken(lt.EMPTY_BYTE_STRING,B.min()).withLastLimboFreeSnapshotVersion(B.min()):m.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(m.resumeToken,n)),s=s.insert(g,S),function(k,D,$){return k.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=d_?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0}(I,S,m)&&u.push(e.ai.updateTargetData(i,S))});let l=kt(),d=j();if(t.documentUpdates.forEach(m=>{t.resolvedLimboDocuments.has(m)&&u.push(e.persistence.referenceDelegate.updateLimboDocument(i,m))}),u.push(p_(i,a,t.documentUpdates).next(m=>{l=m.xs,d=m.Os})),!n.isEqual(B.min())){const m=e.ai.getLastRemoteSnapshotVersion(i).next(g=>e.ai.setTargetsMetadata(i,i.currentSequenceNumber,n));u.push(m)}return w.waitFor(u).next(()=>a.apply(i)).next(()=>e.localDocuments.getLocalViewOfDocuments(i,l,d)).next(()=>l)}).then(i=>(e.Ss=s,i))}function p_(r,t,e){let n=j(),s=j();return e.forEach(i=>n=n.add(i)),t.getEntries(r,n).next(i=>{let a=kt();return e.forEach((u,l)=>{const d=i.get(u);l.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(u)),l.isNoDocument()&&l.version.isEqual(B.min())?(t.removeEntry(u,l.readTime),a=a.insert(u,l)):!d.isValidDocument()||l.version.compareTo(d.version)>0||l.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(l),a=a.insert(u,l)):V(ca,"Ignoring outdated watch update for ",u,". Current version:",d.version," Watch version:",l.version)}),{xs:a,Os:s}})}function __(r,t){const e=F(r);return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(t===void 0&&(t=Le),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}function Gs(r,t){const e=F(r);return e.persistence.runTransaction("Allocate target","readwrite",n=>{let s;return e.ai.getTargetData(n,t).next(i=>i?(s=i,w.resolve(s)):e.ai.allocateTargetId(n).next(a=>(s=new Wt(t,a,"TargetPurposeListen",n.currentSequenceNumber),e.ai.addTargetData(n,s).next(()=>s))))}).then(n=>{const s=e.Ss.get(n.targetId);return(s===null||n.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.Ss=e.Ss.insert(n.targetId,n),e.Ds.set(t,n.targetId)),n})}async function Pn(r,t,e){const n=F(r),s=n.Ss.get(t),i=e?"readwrite":"readwrite-primary";try{e||await n.persistence.runTransaction("Release target",i,a=>n.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!Ee(a))throw a;V(ca,`Failed to update sequence numbers for target ${t}: ${a}`)}n.Ss=n.Ss.remove(t),n.Ds.delete(s.target)}function Do(r,t,e){const n=F(r);let s=B.min(),i=j();return n.persistence.runTransaction("Execute query","readwrite",a=>function(l,d,m){const g=F(l),I=g.Ds.get(m);return I!==void 0?w.resolve(g.Ss.get(I)):g.ai.getTargetData(d,m)}(n,a,Mt(t)).next(u=>{if(u)return s=u.lastLimboFreeSnapshotVersion,n.ai.getMatchingKeysForTargetId(a,u.targetId).next(l=>{i=l})}).next(()=>n.bs.getDocumentsMatchingQuery(a,t,e?s:B.min(),e?i:j())).next(u=>(fd(n,_h(t),u),{documents:u,Ns:i})))}function hd(r,t){const e=F(r),n=F(e.ai),s=e.Ss.get(t);return s?Promise.resolve(s.target):e.persistence.runTransaction("Get target data","readonly",i=>n.Rt(i,t).next(a=>a?a.target:null))}function dd(r,t){const e=F(r),n=e.vs.get(t)||B.min();return e.persistence.runTransaction("Get new document changes","readonly",s=>e.Cs.getAllFromCollectionGroup(s,t,Ol(n,gn),Number.MAX_SAFE_INTEGER)).then(s=>(fd(e,t,s),s))}function fd(r,t,e){let n=r.vs.get(t)||B.min();e.forEach((s,i)=>{i.readTime.compareTo(n)>0&&(n=i.readTime)}),r.vs.set(t,n)}/**
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
 */const md="firestore_clients";function Kc(r,t){return`${md}_${r}_${t}`}const gd="firestore_mutations";function Gc(r,t,e){let n=`${gd}_${r}_${e}`;return t.isAuthenticated()&&(n+=`_${t.uid}`),n}const pd="firestore_targets";function to(r,t){return`${pd}_${r}_${t}`}/**
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
 */const Ut="SharedClientState";class Qs{constructor(t,e,n,s){this.user=t,this.batchId=e,this.state=n,this.error=s}static qs(t,e,n){const s=JSON.parse(n);let i,a=typeof s=="object"&&["pending","acknowledged","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return a&&s.error&&(a=typeof s.error.message=="string"&&typeof s.error.code=="string",a&&(i=new x(s.error.code,s.error.message))),a?new Qs(t,e,s.state,i):(ct(Ut,`Failed to parse mutation state for ID '${e}': ${n}`),null)}Qs(){const t={state:this.state,updateTimeMs:Date.now()};return this.error&&(t.error={code:this.error.code,message:this.error.message}),JSON.stringify(t)}}class Er{constructor(t,e,n){this.targetId=t,this.state=e,this.error=n}static qs(t,e){const n=JSON.parse(e);let s,i=typeof n=="object"&&["not-current","current","rejected"].indexOf(n.state)!==-1&&(n.error===void 0||typeof n.error=="object");return i&&n.error&&(i=typeof n.error.message=="string"&&typeof n.error.code=="string",i&&(s=new x(n.error.code,n.error.message))),i?new Er(t,n.state,s):(ct(Ut,`Failed to parse target state for ID '${t}': ${e}`),null)}Qs(){const t={state:this.state,updateTimeMs:Date.now()};return this.error&&(t.error={code:this.error.code,message:this.error.message}),JSON.stringify(t)}}class Hs{constructor(t,e){this.clientId=t,this.activeTargetIds=e}static qs(t,e){const n=JSON.parse(e);let s=typeof n=="object"&&n.activeTargetIds instanceof Array,i=Yo();for(let a=0;s&&a<n.activeTargetIds.length;++a)s=ql(n.activeTargetIds[a]),i=i.add(n.activeTargetIds[a]);return s?new Hs(t,i):(ct(Ut,`Failed to parse client data for instance '${t}': ${e}`),null)}}class la{constructor(t,e){this.clientId=t,this.onlineState=e}static qs(t){const e=JSON.parse(t);return typeof e=="object"&&["Unknown","Online","Offline"].indexOf(e.onlineState)!==-1&&typeof e.clientId=="string"?new la(e.clientId,e.onlineState):(ct(Ut,`Failed to parse online state: ${t}`),null)}}class xo{constructor(){this.activeTargetIds=Yo()}$s(t){this.activeTargetIds=this.activeTargetIds.add(t)}Us(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Qs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class eo{constructor(t,e,n,s,i){this.window=t,this.bi=e,this.persistenceKey=n,this.Ks=s,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Ws=this.Gs.bind(this),this.zs=new nt(q),this.started=!1,this.js=[];const a=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.Hs=Kc(this.persistenceKey,this.Ks),this.Js=function(l){return`firestore_sequence_number_${l}`}(this.persistenceKey),this.zs=this.zs.insert(this.Ks,new xo),this.Ys=new RegExp(`^${md}_${a}_([^_]*)$`),this.Zs=new RegExp(`^${gd}_${a}_(\\d+)(?:_(.*))?$`),this.Xs=new RegExp(`^${pd}_${a}_(\\d+)$`),this.eo=function(l){return`firestore_online_state_${l}`}(this.persistenceKey),this.no=function(l){return`firestore_bundle_loaded_v2_${l}`}(this.persistenceKey),this.window.addEventListener("storage",this.Ws)}static C(t){return!(!t||!t.localStorage)}async start(){const t=await this.syncEngine.us();for(const n of t){if(n===this.Ks)continue;const s=this.getItem(Kc(this.persistenceKey,n));if(s){const i=Hs.qs(n,s);i&&(this.zs=this.zs.insert(i.clientId,i))}}this.ro();const e=this.storage.getItem(this.eo);if(e){const n=this.io(e);n&&this.so(n)}for(const n of this.js)this.Gs(n);this.js=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(t){this.setItem(this.Js,JSON.stringify(t))}getAllActiveQueryTargets(){return this.oo(this.zs)}isActiveQueryTarget(t){let e=!1;return this.zs.forEach((n,s)=>{s.activeTargetIds.has(t)&&(e=!0)}),e}addPendingMutation(t){this._o(t,"pending")}updateMutationState(t,e,n){this._o(t,e,n),this.ao(t)}addLocalQueryTarget(t,e=!0){let n="not-current";if(this.isActiveQueryTarget(t)){const s=this.storage.getItem(to(this.persistenceKey,t));if(s){const i=Er.qs(t,s);i&&(n=i.state)}}return e&&this.uo.$s(t),this.ro(),n}removeLocalQueryTarget(t){this.uo.Us(t),this.ro()}isLocalQueryTarget(t){return this.uo.activeTargetIds.has(t)}clearQueryState(t){this.removeItem(to(this.persistenceKey,t))}updateQueryState(t,e,n){this.co(t,e,n)}handleUserChange(t,e,n){e.forEach(s=>{this.ao(s)}),this.currentUser=t,n.forEach(s=>{this.addPendingMutation(s)})}setOnlineState(t){this.lo(t)}notifyBundleLoaded(t){this.ho(t)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Ws),this.removeItem(this.Hs),this.started=!1)}getItem(t){const e=this.storage.getItem(t);return V(Ut,"READ",t,e),e}setItem(t,e){V(Ut,"SET",t,e),this.storage.setItem(t,e)}removeItem(t){V(Ut,"REMOVE",t),this.storage.removeItem(t)}Gs(t){const e=t;if(e.storageArea===this.storage){if(V(Ut,"EVENT",e.key,e.newValue),e.key===this.Hs)return void ct("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.bi.enqueueRetryable(async()=>{if(this.started){if(e.key!==null){if(this.Ys.test(e.key)){if(e.newValue==null){const n=this.Po(e.key);return this.To(n,null)}{const n=this.Io(e.key,e.newValue);if(n)return this.To(n.clientId,n)}}else if(this.Zs.test(e.key)){if(e.newValue!==null){const n=this.Eo(e.key,e.newValue);if(n)return this.Ao(n)}}else if(this.Xs.test(e.key)){if(e.newValue!==null){const n=this.Ro(e.key,e.newValue);if(n)return this.Vo(n)}}else if(e.key===this.eo){if(e.newValue!==null){const n=this.io(e.newValue);if(n)return this.so(n)}}else if(e.key===this.Js){const n=function(i){let a=Vt.le;if(i!=null)try{const u=JSON.parse(i);L(typeof u=="number",30636,{mo:i}),a=u}catch(u){ct(Ut,"Failed to read sequence number from WebStorage",u)}return a}(e.newValue);n!==Vt.le&&this.sequenceNumberHandler(n)}else if(e.key===this.no){const n=this.fo(e.newValue);await Promise.all(n.map(s=>this.syncEngine.po(s)))}}}else this.js.push(e)})}}get uo(){return this.zs.get(this.Ks)}ro(){this.setItem(this.Hs,this.uo.Qs())}_o(t,e,n){const s=new Qs(this.currentUser,t,e,n),i=Gc(this.persistenceKey,this.currentUser,t);this.setItem(i,s.Qs())}ao(t){const e=Gc(this.persistenceKey,this.currentUser,t);this.removeItem(e)}lo(t){const e={clientId:this.Ks,onlineState:t};this.storage.setItem(this.eo,JSON.stringify(e))}co(t,e,n){const s=to(this.persistenceKey,t),i=new Er(t,e,n);this.setItem(s,i.Qs())}ho(t){const e=JSON.stringify(Array.from(t));this.setItem(this.no,e)}Po(t){const e=this.Ys.exec(t);return e?e[1]:null}Io(t,e){const n=this.Po(t);return Hs.qs(n,e)}Eo(t,e){const n=this.Zs.exec(t),s=Number(n[1]),i=n[2]!==void 0?n[2]:null;return Qs.qs(new Tt(i),s,e)}Ro(t,e){const n=this.Xs.exec(t),s=Number(n[1]);return Er.qs(s,e)}io(t){return la.qs(t)}fo(t){return JSON.parse(t)}async Ao(t){if(t.user.uid===this.currentUser.uid)return this.syncEngine.yo(t.batchId,t.state,t.error);V(Ut,`Ignoring mutation for non-active user ${t.user.uid}`)}Vo(t){return this.syncEngine.wo(t.targetId,t.state,t.error)}To(t,e){const n=e?this.zs.insert(t,e):this.zs.remove(t),s=this.oo(this.zs),i=this.oo(n),a=[],u=[];return i.forEach(l=>{s.has(l)||a.push(l)}),s.forEach(l=>{i.has(l)||u.push(l)}),this.syncEngine.bo(a,u).then(()=>{this.zs=n})}so(t){this.zs.get(t.clientId)&&this.onlineStateHandler(t.onlineState)}oo(t){let e=Yo();return t.forEach((n,s)=>{e=e.unionWith(s.activeTargetIds)}),e}}class _d{constructor(){this.So=new xo,this.Do={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.So.$s(t),this.Do[t]||"not-current"}updateQueryState(t,e,n){this.Do[t]=e}removeLocalQueryTarget(t){this.So.Us(t)}isLocalQueryTarget(t){return this.So.activeTargetIds.has(t)}clearQueryState(t){delete this.Do[t]}getAllActiveQueryTargets(){return this.So.activeTargetIds}isActiveQueryTarget(t){return this.So.activeTargetIds.has(t)}start(){return this.So=new xo,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class y_{vo(t){}shutdown(){}}/**
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
 */const Qc="ConnectivityMonitor";class Hc{constructor(){this.Co=()=>this.Fo(),this.Mo=()=>this.xo(),this.Oo=[],this.No()}vo(t){this.Oo.push(t)}shutdown(){window.removeEventListener("online",this.Co),window.removeEventListener("offline",this.Mo)}No(){window.addEventListener("online",this.Co),window.addEventListener("offline",this.Mo)}Fo(){V(Qc,"Network connectivity changed: AVAILABLE");for(const t of this.Oo)t(0)}xo(){V(Qc,"Network connectivity changed: UNAVAILABLE");for(const t of this.Oo)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ps=null;function No(){return ps===null?ps=function(){return 268435456+Math.round(2147483648*Math.random())}():ps++,"0x"+ps.toString(16)}/**
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
 */const no="RestConnection",I_={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class E_{get Bo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Lo=e+"://"+t.host,this.ko=`projects/${n}/databases/${s}`,this.qo=this.databaseId.database===Fs?`project_id=${n}`:`project_id=${n}&database_id=${s}`}Qo(t,e,n,s,i){const a=No(),u=this.$o(t,e.toUriEncodedString());V(no,`Sending RPC '${t}' ${a}:`,u,n);const l={"google-cloud-resource-prefix":this.ko,"x-goog-request-params":this.qo};return this.Uo(l,s,i),this.Ko(t,u,l,n).then(d=>(V(no,`Received RPC '${t}' ${a}: `,d),d),d=>{throw wr(no,`RPC '${t}' ${a} failed with error: `,d,"url: ",u,"request:",n),d})}Wo(t,e,n,s,i,a){return this.Qo(t,e,n,s,i)}Uo(t,e,n){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+kn}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((s,i)=>t[i]=s),n&&n.headers.forEach((s,i)=>t[i]=s)}$o(t,e){const n=I_[t];return`${this.Lo}/v1/${e}:${n}`}terminate(){}}/**
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
 */class T_{constructor(t){this.Go=t.Go,this.zo=t.zo}jo(t){this.Ho=t}Jo(t){this.Yo=t}Zo(t){this.Xo=t}onMessage(t){this.e_=t}close(){this.zo()}send(t){this.Go(t)}t_(){this.Ho()}n_(){this.Yo()}r_(t){this.Xo(t)}i_(t){this.e_(t)}}/**
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
 */const Et="WebChannelConnection";class v_ extends E_{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Ko(t,e,n,s){const i=No();return new Promise((a,u)=>{const l=new Sl;l.setWithCredentials(!0),l.listenOnce(Pl.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case _s.NO_ERROR:const m=l.getResponseJson();V(Et,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(m)),a(m);break;case _s.TIMEOUT:V(Et,`RPC '${t}' ${i} timed out`),u(new x(P.DEADLINE_EXCEEDED,"Request time out"));break;case _s.HTTP_ERROR:const g=l.getStatus();if(V(Et,`RPC '${t}' ${i} failed with status:`,g,"response text:",l.getResponseText()),g>0){let I=l.getResponseJson();Array.isArray(I)&&(I=I[0]);const S=I?.error;if(S&&S.status&&S.message){const C=function(D){const $=D.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf($)>=0?$:P.UNKNOWN}(S.status);u(new x(C,S.message))}else u(new x(P.UNKNOWN,"Server responded with status "+l.getStatus()))}else u(new x(P.UNAVAILABLE,"Connection failed."));break;default:O(9055,{s_:t,streamId:i,o_:l.getLastErrorCode(),__:l.getLastError()})}}finally{V(Et,`RPC '${t}' ${i} completed.`)}});const d=JSON.stringify(s);V(Et,`RPC '${t}' ${i} sending request:`,s),l.send(e,"POST",d,n,15)})}a_(t,e,n){const s=No(),i=[this.Lo,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=Dl(),u=Cl(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(l.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Uo(l.initMessageHeaders,e,n),l.encodeInitMessageHeaders=!0;const m=i.join("");V(Et,`Creating RPC '${t}' stream ${s}: ${m}`,l);const g=a.createWebChannel(m,l);let I=!1,S=!1;const C=new T_({Go:D=>{S?V(Et,`Not sending because RPC '${t}' stream ${s} is closed:`,D):(I||(V(Et,`Opening RPC '${t}' stream ${s} transport.`),g.open(),I=!0),V(Et,`RPC '${t}' stream ${s} sending:`,D),g.send(D))},zo:()=>g.close()}),k=(D,$,z)=>{D.listen($,U=>{try{z(U)}catch(Y){setTimeout(()=>{throw Y},0)}})};return k(g,cr.EventType.OPEN,()=>{S||(V(Et,`RPC '${t}' stream ${s} transport opened.`),C.t_())}),k(g,cr.EventType.CLOSE,()=>{S||(S=!0,V(Et,`RPC '${t}' stream ${s} transport closed`),C.r_())}),k(g,cr.EventType.ERROR,D=>{S||(S=!0,wr(Et,`RPC '${t}' stream ${s} transport errored. Name:`,D.name,"Message:",D.message),C.r_(new x(P.UNAVAILABLE,"The operation could not be completed")))}),k(g,cr.EventType.MESSAGE,D=>{var $;if(!S){const z=D.data[0];L(!!z,16349);const U=z,Y=U?.error||(($=U[0])===null||$===void 0?void 0:$.error);if(Y){V(Et,`RPC '${t}' stream ${s} received error:`,Y);const et=Y.status;let H=function(y){const T=ht[y];if(T!==void 0)return Dh(T)}(et),E=Y.message;H===void 0&&(H=P.INTERNAL,E="Unknown error status: "+et+" with message "+Y.message),S=!0,C.r_(new x(H,E)),g.close()}else V(Et,`RPC '${t}' stream ${s} received:`,z),C.i_(z)}}),k(u,Vl.STAT_EVENT,D=>{D.stat===co.PROXY?V(Et,`RPC '${t}' stream ${s} detected buffering proxy`):D.stat===co.NOPROXY&&V(Et,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{C.n_()},0),C}}/**
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
 */function yd(){return typeof window<"u"?window:null}function bs(){return typeof document<"u"?document:null}/**
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
 */function fi(r){return new Pp(r,!0)}/**
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
 */class Id{constructor(t,e,n=1e3,s=1.5,i=6e4){this.bi=t,this.timerId=e,this.u_=n,this.c_=s,this.l_=i,this.h_=0,this.P_=null,this.T_=Date.now(),this.reset()}reset(){this.h_=0}I_(){this.h_=this.l_}E_(t){this.cancel();const e=Math.floor(this.h_+this.d_()),n=Math.max(0,Date.now()-this.T_),s=Math.max(0,e-n);s>0&&V("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.h_} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.P_=this.bi.enqueueAfterDelay(this.timerId,s,()=>(this.T_=Date.now(),t())),this.h_*=this.c_,this.h_<this.u_&&(this.h_=this.u_),this.h_>this.l_&&(this.h_=this.l_)}A_(){this.P_!==null&&(this.P_.skipDelay(),this.P_=null)}cancel(){this.P_!==null&&(this.P_.cancel(),this.P_=null)}d_(){return(Math.random()-.5)*this.h_}}/**
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
 */const Wc="PersistentStream";class Ed{constructor(t,e,n,s,i,a,u,l){this.bi=t,this.R_=n,this.V_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=l,this.state=0,this.m_=0,this.f_=null,this.g_=null,this.stream=null,this.p_=0,this.y_=new Id(t,e)}w_(){return this.state===1||this.state===5||this.b_()}b_(){return this.state===2||this.state===3}start(){this.p_=0,this.state!==4?this.auth():this.S_()}async stop(){this.w_()&&await this.close(0)}D_(){this.state=0,this.y_.reset()}v_(){this.b_()&&this.f_===null&&(this.f_=this.bi.enqueueAfterDelay(this.R_,6e4,()=>this.C_()))}F_(t){this.M_(),this.stream.send(t)}async C_(){if(this.b_())return this.close(0)}M_(){this.f_&&(this.f_.cancel(),this.f_=null)}x_(){this.g_&&(this.g_.cancel(),this.g_=null)}async close(t,e){this.M_(),this.x_(),this.y_.cancel(),this.m_++,t!==4?this.y_.reset():e&&e.code===P.RESOURCE_EXHAUSTED?(ct(e.toString()),ct("Using maximum backoff delay to prevent overloading the backend."),this.y_.I_()):e&&e.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.O_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zo(e)}O_(){}auth(){this.state=1;const t=this.N_(this.m_),e=this.m_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,s])=>{this.m_===e&&this.B_(n,s)},n=>{t(()=>{const s=new x(P.UNKNOWN,"Fetching auth token failed: "+n.message);return this.L_(s)})})}B_(t,e){const n=this.N_(this.m_);this.stream=this.k_(t,e),this.stream.jo(()=>{n(()=>this.listener.jo())}),this.stream.Jo(()=>{n(()=>(this.state=2,this.g_=this.bi.enqueueAfterDelay(this.V_,1e4,()=>(this.b_()&&(this.state=3),Promise.resolve())),this.listener.Jo()))}),this.stream.Zo(s=>{n(()=>this.L_(s))}),this.stream.onMessage(s=>{n(()=>++this.p_==1?this.q_(s):this.onNext(s))})}S_(){this.state=5,this.y_.E_(async()=>{this.state=0,this.start()})}L_(t){return V(Wc,`close with error: ${t}`),this.stream=null,this.close(4,t)}N_(t){return e=>{this.bi.enqueueAndForget(()=>this.m_===t?e():(V(Wc,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class w_ extends Ed{constructor(t,e,n,s,i,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,s,a),this.serializer=i}k_(t,e){return this.connection.a_("Listen",t,e)}q_(t){return this.onNext(t)}onNext(t){this.y_.reset();const e=Dp(this.serializer,t),n=function(i){if(!("targetChange"in i))return B.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?B.min():a.readTime?Pt(a.readTime):B.min()}(t);return this.listener.Q_(e,n)}U_(t){const e={};e.database=bo(this.serializer),e.addTarget=function(i,a){let u;const l=a.target;if(u=Ls(l)?{documents:Bh(i,l)}:{query:Uh(i,l).gt},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=kh(i,a.resumeToken);const d=Ao(i,a.expectedCount);d!==null&&(u.expectedCount=d)}else if(a.snapshotVersion.compareTo(B.min())>0){u.readTime=Sn(i,a.snapshotVersion.toTimestamp());const d=Ao(i,a.expectedCount);d!==null&&(u.expectedCount=d)}return u}(this.serializer,t);const n=Np(this.serializer,t);n&&(e.labels=n),this.F_(e)}K_(t){const e={};e.database=bo(this.serializer),e.removeTarget=t,this.F_(e)}}class A_ extends Ed{constructor(t,e,n,s,i,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,s,a),this.serializer=i}get W_(){return this.p_>0}start(){this.lastStreamToken=void 0,super.start()}O_(){this.W_&&this.G_([])}k_(t,e){return this.connection.a_("Write",t,e)}q_(t){return L(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,L(!t.writeResults||t.writeResults.length===0,55816),this.listener.z_()}onNext(t){L(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.y_.reset();const e=xp(t.writeResults,t.commitTime),n=Pt(t.commitTime);return this.listener.j_(n,e)}H_(){const t={};t.database=bo(this.serializer),this.F_(t)}G_(t){const e={streamToken:this.lastStreamToken,writes:t.map(n=>qs(this.serializer,n))};this.F_(e)}}/**
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
 */class R_{}class b_ extends R_{constructor(t,e,n,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=s,this.J_=!1}Y_(){if(this.J_)throw new x(P.FAILED_PRECONDITION,"The client has already been terminated.")}Qo(t,e,n,s){return this.Y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Qo(t,Ro(e,n),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new x(P.UNKNOWN,i.toString())})}Wo(t,e,n,s,i){return this.Y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.Wo(t,Ro(e,n),s,a,u,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new x(P.UNKNOWN,a.toString())})}terminate(){this.J_=!0,this.connection.terminate()}}class S_{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.Z_=0,this.X_=null,this.ea=!0}ta(){this.Z_===0&&(this.na("Unknown"),this.X_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.X_=null,this.ra("Backend didn't respond within 10 seconds."),this.na("Offline"),Promise.resolve())))}ia(t){this.state==="Online"?this.na("Unknown"):(this.Z_++,this.Z_>=1&&(this.sa(),this.ra(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.na("Offline")))}set(t){this.sa(),this.Z_=0,t==="Online"&&(this.ea=!1),this.na(t)}na(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ra(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ea?(ct(e),this.ea=!1):V("OnlineStateTracker",e)}sa(){this.X_!==null&&(this.X_.cancel(),this.X_=null)}}/**
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
 */const Qe="RemoteStore";class P_{constructor(t,e,n,s,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.oa=[],this._a=new Map,this.aa=new Set,this.ua=[],this.ca=i,this.ca.vo(a=>{n.enqueueAndForget(async()=>{He(this)&&(V(Qe,"Restarting streams for network reachability change."),await async function(l){const d=F(l);d.aa.add(4),await Fn(d),d.la.set("Unknown"),d.aa.delete(4),await zr(d)}(this))})}),this.la=new S_(n,s)}}async function zr(r){if(He(r))for(const t of r.ua)await t(!0)}async function Fn(r){for(const t of r.ua)await t(!1)}function mi(r,t){const e=F(r);e._a.has(t.targetId)||(e._a.set(t.targetId,t),fa(e)?da(e):Bn(e).b_()&&ha(e,t))}function Vn(r,t){const e=F(r),n=Bn(e);e._a.delete(t),n.b_()&&Td(e,t),e._a.size===0&&(n.b_()?n.v_():He(e)&&e.la.set("Unknown"))}function ha(r,t){if(r.ha.Ke(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(B.min())>0){const e=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Bn(r).U_(t)}function Td(r,t){r.ha.Ke(t),Bn(r).K_(t)}function da(r){r.ha=new Ap({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),Rt:t=>r._a.get(t)||null,Pt:()=>r.datastore.serializer.databaseId}),Bn(r).start(),r.la.ta()}function fa(r){return He(r)&&!Bn(r).w_()&&r._a.size>0}function He(r){return F(r).aa.size===0}function vd(r){r.ha=void 0}async function V_(r){r.la.set("Online")}async function C_(r){r._a.forEach((t,e)=>{ha(r,t)})}async function D_(r,t){vd(r),fa(r)?(r.la.ia(t),da(r)):r.la.set("Unknown")}async function x_(r,t,e){if(r.la.set("Online"),t instanceof Nh&&t.state===2&&t.cause)try{await async function(s,i){const a=i.cause;for(const u of i.targetIds)s._a.has(u)&&(await s.remoteSyncer.rejectListen(u,a),s._a.delete(u),s.ha.removeTarget(u))}(r,t)}catch(n){V(Qe,"Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Ws(r,n)}else if(t instanceof Rs?r.ha.Xe(t):t instanceof xh?r.ha.ot(t):r.ha.nt(t),!e.isEqual(B.min()))try{const n=await ld(r.localStore);e.compareTo(n)>=0&&await function(i,a){const u=i.ha.It(a);return u.targetChanges.forEach((l,d)=>{if(l.resumeToken.approximateByteSize()>0){const m=i._a.get(d);m&&i._a.set(d,m.withResumeToken(l.resumeToken,a))}}),u.targetMismatches.forEach((l,d)=>{const m=i._a.get(l);if(!m)return;i._a.set(l,m.withResumeToken(lt.EMPTY_BYTE_STRING,m.snapshotVersion)),Td(i,l);const g=new Wt(m.target,l,d,m.sequenceNumber);ha(i,g)}),i.remoteSyncer.applyRemoteEvent(u)}(r,e)}catch(n){V(Qe,"Failed to raise snapshot:",n),await Ws(r,n)}}async function Ws(r,t,e){if(!Ee(t))throw t;r.aa.add(1),await Fn(r),r.la.set("Offline"),e||(e=()=>ld(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{V(Qe,"Retrying IndexedDB access"),await e(),r.aa.delete(1),await zr(r)})}function wd(r,t){return t().catch(e=>Ws(r,e,t))}async function Ln(r){const t=F(r),e=_e(t);let n=t.oa.length>0?t.oa[t.oa.length-1].batchId:Le;for(;N_(t);)try{const s=await __(t.localStore,n);if(s===null){t.oa.length===0&&e.v_();break}n=s.batchId,k_(t,s)}catch(s){await Ws(t,s)}Ad(t)&&Rd(t)}function N_(r){return He(r)&&r.oa.length<10}function k_(r,t){r.oa.push(t);const e=_e(r);e.b_()&&e.W_&&e.G_(t.mutations)}function Ad(r){return He(r)&&!_e(r).w_()&&r.oa.length>0}function Rd(r){_e(r).start()}async function M_(r){_e(r).H_()}async function O_(r){const t=_e(r);for(const e of r.oa)t.G_(e.mutations)}async function F_(r,t,e){const n=r.oa.shift(),s=Zo.from(n,t,e);await wd(r,()=>r.remoteSyncer.applySuccessfulWrite(s)),await Ln(r)}async function L_(r,t){t&&_e(r).W_&&await async function(n,s){if(function(a){return vp(a)&&a!==P.ABORTED}(s.code)){const i=n.oa.shift();_e(n).D_(),await wd(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ln(n)}}(r,t),Ad(r)&&Rd(r)}async function Yc(r,t){const e=F(r);e.asyncQueue.verifyOperationInProgress(),V(Qe,"RemoteStore received new credentials");const n=He(e);e.aa.add(3),await Fn(e),n&&e.la.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.aa.delete(3),await zr(e)}async function ko(r,t){const e=F(r);t?(e.aa.delete(2),await zr(e)):t||(e.aa.add(2),await Fn(e),e.la.set("Unknown"))}function Bn(r){return r.Pa||(r.Pa=function(e,n,s){const i=F(e);return i.Y_(),new w_(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(r.datastore,r.asyncQueue,{jo:V_.bind(null,r),Jo:C_.bind(null,r),Zo:D_.bind(null,r),Q_:x_.bind(null,r)}),r.ua.push(async t=>{t?(r.Pa.D_(),fa(r)?da(r):r.la.set("Unknown")):(await r.Pa.stop(),vd(r))})),r.Pa}function _e(r){return r.Ta||(r.Ta=function(e,n,s){const i=F(e);return i.Y_(),new A_(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(r.datastore,r.asyncQueue,{jo:()=>Promise.resolve(),Jo:M_.bind(null,r),Zo:L_.bind(null,r),z_:O_.bind(null,r),j_:F_.bind(null,r)}),r.ua.push(async t=>{t?(r.Ta.D_(),await Ln(r)):(await r.Ta.stop(),r.oa.length>0&&(V(Qe,`Stopping write stream with ${r.oa.length} pending writes`),r.oa=[]))})),r.Ta}/**
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
 */class ma{constructor(t,e,n,s,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new jt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,s,i){const a=Date.now()+n,u=new ma(t,e,a,s,i);return u.start(n),u}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new x(P.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ga(r,t){if(ct("AsyncQueue",`${t}: ${r}`),Ee(r))return new x(P.UNAVAILABLE,`${t}: ${r}`);throw r}/**
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
 */class fn{static emptySet(t){return new fn(t.comparator)}constructor(t){this.comparator=t?(e,n)=>t(e,n)||M.comparator(e.key,n.key):(e,n)=>M.comparator(e.key,n.key),this.keyedMap=lr(),this.sortedSet=new nt(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof fn)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,i=n.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const n=new fn;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}/**
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
 */class Jc{constructor(){this.Ia=new nt(M.comparator)}track(t){const e=t.doc.key,n=this.Ia.get(e);n?t.type!==0&&n.type===3?this.Ia=this.Ia.insert(e,t):t.type===3&&n.type!==1?this.Ia=this.Ia.insert(e,{type:n.type,doc:t.doc}):t.type===2&&n.type===2?this.Ia=this.Ia.insert(e,{type:2,doc:t.doc}):t.type===2&&n.type===0?this.Ia=this.Ia.insert(e,{type:0,doc:t.doc}):t.type===1&&n.type===0?this.Ia=this.Ia.remove(e):t.type===1&&n.type===2?this.Ia=this.Ia.insert(e,{type:1,doc:n.doc}):t.type===0&&n.type===1?this.Ia=this.Ia.insert(e,{type:2,doc:t.doc}):O(63341,{Vt:t,Ea:n}):this.Ia=this.Ia.insert(e,t)}da(){const t=[];return this.Ia.inorderTraversal((e,n)=>{t.push(n)}),t}}class Cn{constructor(t,e,n,s,i,a,u,l,d){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=l,this.hasCachedResults=d}static fromInitialDocuments(t,e,n,s,i){const a=[];return e.forEach(u=>{a.push({type:0,doc:u})}),new Cn(t,e,fn.emptySet(e),a,n,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&oi(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==n[s].type||!e[s].doc.isEqual(n[s].doc))return!1;return!0}}/**
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
 */class B_{constructor(){this.Aa=void 0,this.Ra=[]}Va(){return this.Ra.some(t=>t.ma())}}class U_{constructor(){this.queries=Xc(),this.onlineState="Unknown",this.fa=new Set}terminate(){(function(e,n){const s=F(e),i=s.queries;s.queries=Xc(),i.forEach((a,u)=>{for(const l of u.Ra)l.onError(n)})})(this,new x(P.ABORTED,"Firestore shutting down"))}}function Xc(){return new te(r=>ph(r),oi)}async function bd(r,t){const e=F(r);let n=3;const s=t.query;let i=e.queries.get(s);i?!i.Va()&&t.ma()&&(n=2):(i=new B_,n=t.ma()?0:1);try{switch(n){case 0:i.Aa=await e.onListen(s,!0);break;case 1:i.Aa=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const u=ga(a,`Initialization of query '${un(t.query)}' failed`);return void t.onError(u)}e.queries.set(s,i),i.Ra.push(t),t.ga(e.onlineState),i.Aa&&t.pa(i.Aa)&&pa(e)}async function Sd(r,t){const e=F(r),n=t.query;let s=3;const i=e.queries.get(n);if(i){const a=i.Ra.indexOf(t);a>=0&&(i.Ra.splice(a,1),i.Ra.length===0?s=t.ma()?0:1:!i.Va()&&t.ma()&&(s=2))}switch(s){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function q_(r,t){const e=F(r);let n=!1;for(const s of t){const i=s.query,a=e.queries.get(i);if(a){for(const u of a.Ra)u.pa(s)&&(n=!0);a.Aa=s}}n&&pa(e)}function z_(r,t,e){const n=F(r),s=n.queries.get(t);if(s)for(const i of s.Ra)i.onError(e);n.queries.delete(t)}function pa(r){r.fa.forEach(t=>{t.next()})}var Mo,Zc;(Zc=Mo||(Mo={})).ya="default",Zc.Cache="cache";class Pd{constructor(t,e,n){this.query=t,this.wa=e,this.ba=!1,this.Sa=null,this.onlineState="Unknown",this.options=n||{}}pa(t){if(!this.options.includeMetadataChanges){const n=[];for(const s of t.docChanges)s.type!==3&&n.push(s);t=new Cn(t.query,t.docs,t.oldDocs,n,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.ba?this.Da(t)&&(this.wa.next(t),e=!0):this.va(t,this.onlineState)&&(this.Ca(t),e=!0),this.Sa=t,e}onError(t){this.wa.error(t)}ga(t){this.onlineState=t;let e=!1;return this.Sa&&!this.ba&&this.va(this.Sa,t)&&(this.Ca(this.Sa),e=!0),e}va(t,e){if(!t.fromCache||!this.ma())return!0;const n=e!=="Offline";return(!this.options.Fa||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Da(t){if(t.docChanges.length>0)return!0;const e=this.Sa&&this.Sa.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}Ca(t){t=Cn.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ba=!0,this.wa.next(t)}ma(){return this.options.source!==Mo.Cache}}/**
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
 */class Vd{constructor(t){this.key=t}}class Cd{constructor(t){this.key=t}}class j_{constructor(t,e){this.query=t,this.qa=e,this.Qa=null,this.hasCachedResults=!1,this.current=!1,this.$a=j(),this.mutatedKeys=j(),this.Ua=yh(t),this.Ka=new fn(this.Ua)}get Wa(){return this.qa}Ga(t,e){const n=e?e.za:new Jc,s=e?e.Ka:this.Ka;let i=e?e.mutatedKeys:this.mutatedKeys,a=s,u=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((m,g)=>{const I=s.get(m),S=Br(this.query,g)?g:null,C=!!I&&this.mutatedKeys.has(I.key),k=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let D=!1;I&&S?I.data.isEqual(S.data)?C!==k&&(n.track({type:3,doc:S}),D=!0):this.ja(I,S)||(n.track({type:2,doc:S}),D=!0,(l&&this.Ua(S,l)>0||d&&this.Ua(S,d)<0)&&(u=!0)):!I&&S?(n.track({type:0,doc:S}),D=!0):I&&!S&&(n.track({type:1,doc:I}),D=!0,(l||d)&&(u=!0)),D&&(S?(a=a.add(S),i=k?i.add(m):i.delete(m)):(a=a.delete(m),i=i.delete(m)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),i=i.delete(m.key),n.track({type:1,doc:m})}return{Ka:a,za:n,ys:u,mutatedKeys:i}}ja(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,s){const i=this.Ka;this.Ka=t.Ka,this.mutatedKeys=t.mutatedKeys;const a=t.za.da();a.sort((m,g)=>function(S,C){const k=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return O(20277,{Vt:D})}};return k(S)-k(C)}(m.type,g.type)||this.Ua(m.doc,g.doc)),this.Ha(n),s=s!=null&&s;const u=e&&!s?this.Ja():[],l=this.$a.size===0&&this.current&&!s?1:0,d=l!==this.Qa;return this.Qa=l,a.length!==0||d?{snapshot:new Cn(this.query,t.Ka,i,a,t.mutatedKeys,l===0,d,!1,!!n&&n.resumeToken.approximateByteSize()>0),Ya:u}:{Ya:u}}ga(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ka:this.Ka,za:new Jc,mutatedKeys:this.mutatedKeys,ys:!1},!1)):{Ya:[]}}Za(t){return!this.qa.has(t)&&!!this.Ka.has(t)&&!this.Ka.get(t).hasLocalMutations}Ha(t){t&&(t.addedDocuments.forEach(e=>this.qa=this.qa.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.qa=this.qa.delete(e)),this.current=t.current)}Ja(){if(!this.current)return[];const t=this.$a;this.$a=j(),this.Ka.forEach(n=>{this.Za(n.key)&&(this.$a=this.$a.add(n.key))});const e=[];return t.forEach(n=>{this.$a.has(n)||e.push(new Cd(n))}),this.$a.forEach(n=>{t.has(n)||e.push(new Vd(n))}),e}Xa(t){this.qa=t.Ns,this.$a=j();const e=this.Ga(t.documents);return this.applyChanges(e,!0)}eu(){return Cn.fromInitialDocuments(this.query,this.Ka,this.mutatedKeys,this.Qa===0,this.hasCachedResults)}}const Un="SyncEngine";class $_{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class K_{constructor(t){this.key=t,this.tu=!1}}class G_{constructor(t,e,n,s,i,a){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.nu={},this.ru=new te(u=>ph(u),oi),this.iu=new Map,this.su=new Set,this.ou=new nt(M.comparator),this._u=new Map,this.au=new ia,this.uu={},this.cu=new Map,this.lu=Ge.ir(),this.onlineState="Unknown",this.hu=void 0}get isPrimaryClient(){return this.hu===!0}}async function Q_(r,t,e=!0){const n=gi(r);let s;const i=n.ru.get(t);return i?(n.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.eu()):s=await Dd(n,t,e,!0),s}async function H_(r,t){const e=gi(r);await Dd(e,t,!0,!1)}async function Dd(r,t,e,n){const s=await Gs(r.localStore,Mt(t)),i=s.targetId,a=r.sharedClientState.addLocalQueryTarget(i,e);let u;return n&&(u=await _a(r,t,i,a==="current",s.resumeToken)),r.isPrimaryClient&&e&&mi(r.remoteStore,s),u}async function _a(r,t,e,n,s){r.Pu=(g,I,S)=>async function(k,D,$,z){let U=D.view.Ga($);U.ys&&(U=await Do(k.localStore,D.query,!1).then(({documents:E})=>D.view.Ga(E,U)));const Y=z&&z.targetChanges.get(D.targetId),et=z&&z.targetMismatches.get(D.targetId)!=null,H=D.view.applyChanges(U,k.isPrimaryClient,Y,et);return Oo(k,D.targetId,H.Ya),H.snapshot}(r,g,I,S);const i=await Do(r.localStore,t,!0),a=new j_(t,i.Ns),u=a.Ga(i.documents),l=qr.createSynthesizedTargetChangeForCurrentChange(e,n&&r.onlineState!=="Offline",s),d=a.applyChanges(u,r.isPrimaryClient,l);Oo(r,e,d.Ya);const m=new $_(t,e,a);return r.ru.set(t,m),r.iu.has(e)?r.iu.get(e).push(t):r.iu.set(e,[t]),d.snapshot}async function W_(r,t,e){const n=F(r),s=n.ru.get(t),i=n.iu.get(s.targetId);if(i.length>1)return n.iu.set(s.targetId,i.filter(a=>!oi(a,t))),void n.ru.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Pn(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),e&&Vn(n.remoteStore,s.targetId),Dn(n,s.targetId)}).catch(Ie)):(Dn(n,s.targetId),await Pn(n.localStore,s.targetId,!0))}async function Y_(r,t){const e=F(r),n=e.ru.get(t),s=e.iu.get(n.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),Vn(e.remoteStore,n.targetId))}async function J_(r,t,e){const n=Ta(r);try{const s=await function(a,u){const l=F(a),d=ot.now(),m=u.reduce((S,C)=>S.add(C.key),j());let g,I;return l.persistence.runTransaction("Locally write mutations","readwrite",S=>{let C=kt(),k=j();return l.Cs.getEntries(S,m).next(D=>{C=D,C.forEach(($,z)=>{z.isValidDocument()||(k=k.add($))})}).next(()=>l.localDocuments.getOverlayedDocuments(S,C)).next(D=>{g=D;const $=[];for(const z of u){const U=Ep(z,g.get(z.key).overlayedDocument);U!=null&&$.push(new ee(z.key,U,oh(U.value.mapValue),St.exists(!0)))}return l.mutationQueue.addMutationBatch(S,d,$,u)}).next(D=>{I=D;const $=D.applyToLocalDocumentSet(g,k);return l.documentOverlayCache.saveOverlays(S,D.batchId,$)})}).then(()=>({batchId:I.batchId,changes:Eh(g)}))}(n.localStore,t);n.sharedClientState.addPendingMutation(s.batchId),function(a,u,l){let d=a.uu[a.currentUser.toKey()];d||(d=new nt(q)),d=d.insert(u,l),a.uu[a.currentUser.toKey()]=d}(n,s.batchId,e),await ve(n,s.changes),await Ln(n.remoteStore)}catch(s){const i=ga(s,"Failed to persist write");e.reject(i)}}async function xd(r,t){const e=F(r);try{const n=await g_(e.localStore,t);t.targetChanges.forEach((s,i)=>{const a=e._u.get(i);a&&(L(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.tu=!0:s.modifiedDocuments.size>0?L(a.tu,14607):s.removedDocuments.size>0&&(L(a.tu,42227),a.tu=!1))}),await ve(e,n,t)}catch(n){await Ie(n)}}function tl(r,t,e){const n=F(r);if(n.isPrimaryClient&&e===0||!n.isPrimaryClient&&e===1){const s=[];n.ru.forEach((i,a)=>{const u=a.view.ga(t);u.snapshot&&s.push(u.snapshot)}),function(a,u){const l=F(a);l.onlineState=u;let d=!1;l.queries.forEach((m,g)=>{for(const I of g.Ra)I.ga(u)&&(d=!0)}),d&&pa(l)}(n.eventManager,t),s.length&&n.nu.Q_(s),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function X_(r,t,e){const n=F(r);n.sharedClientState.updateQueryState(t,"rejected",e);const s=n._u.get(t),i=s&&s.key;if(i){let a=new nt(M.comparator);a=a.insert(i,ut.newNoDocument(i,B.min()));const u=j().add(i),l=new Ur(B.min(),new Map,new nt(q),a,u);await xd(n,l),n.ou=n.ou.remove(i),n._u.delete(t),Ea(n)}else await Pn(n.localStore,t,!1).then(()=>Dn(n,t,e)).catch(Ie)}async function Z_(r,t){const e=F(r),n=t.batch.batchId;try{const s=await m_(e.localStore,t);Ia(e,n,null),ya(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await ve(e,s)}catch(s){await Ie(s)}}async function ty(r,t,e){const n=F(r);try{const s=await function(a,u){const l=F(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let m;return l.mutationQueue.lookupMutationBatch(d,u).next(g=>(L(g!==null,37113),m=g.keys(),l.mutationQueue.removeMutationBatch(d,g))).next(()=>l.mutationQueue.performConsistencyCheck(d)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(d,m,u)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,m)).next(()=>l.localDocuments.getDocuments(d,m))})}(n.localStore,t);Ia(n,t,e),ya(n,t),n.sharedClientState.updateMutationState(t,"rejected",e),await ve(n,s)}catch(s){await Ie(s)}}function ya(r,t){(r.cu.get(t)||[]).forEach(e=>{e.resolve()}),r.cu.delete(t)}function Ia(r,t,e){const n=F(r);let s=n.uu[n.currentUser.toKey()];if(s){const i=s.get(t);i&&(e?i.reject(e):i.resolve(),s=s.remove(t)),n.uu[n.currentUser.toKey()]=s}}function Dn(r,t,e=null){r.sharedClientState.removeLocalQueryTarget(t);for(const n of r.iu.get(t))r.ru.delete(n),e&&r.nu.Tu(n,e);r.iu.delete(t),r.isPrimaryClient&&r.au.Ur(t).forEach(n=>{r.au.containsKey(n)||Nd(r,n)})}function Nd(r,t){r.su.delete(t.path.canonicalString());const e=r.ou.get(t);e!==null&&(Vn(r.remoteStore,e),r.ou=r.ou.remove(t),r._u.delete(e),Ea(r))}function Oo(r,t,e){for(const n of e)n instanceof Vd?(r.au.addReference(n.key,t),ey(r,n)):n instanceof Cd?(V(Un,"Document no longer in limbo: "+n.key),r.au.removeReference(n.key,t),r.au.containsKey(n.key)||Nd(r,n.key)):O(19791,{Iu:n})}function ey(r,t){const e=t.key,n=e.path.canonicalString();r.ou.get(e)||r.su.has(n)||(V(Un,"New document in limbo: "+e),r.su.add(n),Ea(r))}function Ea(r){for(;r.su.size>0&&r.ou.size<r.maxConcurrentLimboResolutions;){const t=r.su.values().next().value;r.su.delete(t);const e=new M(J.fromString(t)),n=r.lu.next();r._u.set(n,new K_(e)),r.ou=r.ou.insert(e,n),mi(r.remoteStore,new Wt(Mt(ii(e.path)),n,"TargetPurposeLimboResolution",Vt.le))}}async function ve(r,t,e){const n=F(r),s=[],i=[],a=[];n.ru.isEmpty()||(n.ru.forEach((u,l)=>{a.push(n.Pu(l,t,e).then(d=>{var m;if((d||e)&&n.isPrimaryClient){const g=d?!d.fromCache:(m=e?.targetChanges.get(l.targetId))===null||m===void 0?void 0:m.current;n.sharedClientState.updateQueryState(l.targetId,g?"current":"not-current")}if(d){s.push(d);const g=ua.Ps(l.targetId,d);i.push(g)}}))}),await Promise.all(a),n.nu.Q_(s),await async function(l,d){const m=F(l);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>w.forEach(d,I=>w.forEach(I.ls,S=>m.persistence.referenceDelegate.addReference(g,I.targetId,S)).next(()=>w.forEach(I.hs,S=>m.persistence.referenceDelegate.removeReference(g,I.targetId,S)))))}catch(g){if(!Ee(g))throw g;V(ca,"Failed to update sequence numbers: "+g)}for(const g of d){const I=g.targetId;if(!g.fromCache){const S=m.Ss.get(I),C=S.snapshotVersion,k=S.withLastLimboFreeSnapshotVersion(C);m.Ss=m.Ss.insert(I,k)}}}(n.localStore,i))}async function ny(r,t){const e=F(r);if(!e.currentUser.isEqual(t)){V(Un,"User change. New user:",t.toKey());const n=await cd(e.localStore,t);e.currentUser=t,function(i,a){i.cu.forEach(u=>{u.forEach(l=>{l.reject(new x(P.CANCELLED,a))})}),i.cu.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await ve(e,n.Ms)}}function ry(r,t){const e=F(r),n=e._u.get(t);if(n&&n.tu)return j().add(n.key);{let s=j();const i=e.iu.get(t);if(!i)return s;for(const a of i){const u=e.ru.get(a);s=s.unionWith(u.view.Wa)}return s}}async function sy(r,t){const e=F(r),n=await Do(e.localStore,t.query,!0),s=t.view.Xa(n);return e.isPrimaryClient&&Oo(e,t.targetId,s.Ya),s}async function iy(r,t){const e=F(r);return dd(e.localStore,t).then(n=>ve(e,n))}async function oy(r,t,e,n){const s=F(r),i=await function(u,l){const d=F(u),m=F(d.mutationQueue);return d.persistence.runTransaction("Lookup mutation documents","readonly",g=>m.Hn(g,l).next(I=>I?d.localDocuments.getDocuments(g,I):w.resolve(null)))}(s.localStore,t);i!==null?(e==="pending"?await Ln(s.remoteStore):e==="acknowledged"||e==="rejected"?(Ia(s,t,n||null),ya(s,t),function(u,l){F(F(u).mutationQueue).Xn(l)}(s.localStore,t)):O(6720,"Unknown batchState",{Eu:e}),await ve(s,i)):V(Un,"Cannot apply mutation batch with id: "+t)}async function ay(r,t){const e=F(r);if(gi(e),Ta(e),t===!0&&e.hu!==!0){const n=e.sharedClientState.getAllActiveQueryTargets(),s=await el(e,n.toArray());e.hu=!0,await ko(e.remoteStore,!0);for(const i of s)mi(e.remoteStore,i)}else if(t===!1&&e.hu!==!1){const n=[];let s=Promise.resolve();e.iu.forEach((i,a)=>{e.sharedClientState.isLocalQueryTarget(a)?n.push(a):s=s.then(()=>(Dn(e,a),Pn(e.localStore,a,!0))),Vn(e.remoteStore,a)}),await s,await el(e,n),function(a){const u=F(a);u._u.forEach((l,d)=>{Vn(u.remoteStore,d)}),u.au.Kr(),u._u=new Map,u.ou=new nt(M.comparator)}(e),e.hu=!1,await ko(e.remoteStore,!1)}}async function el(r,t,e){const n=F(r),s=[],i=[];for(const a of t){let u;const l=n.iu.get(a);if(l&&l.length!==0){u=await Gs(n.localStore,Mt(l[0]));for(const d of l){const m=n.ru.get(d),g=await sy(n,m);g.snapshot&&i.push(g.snapshot)}}else{const d=await hd(n.localStore,a);u=await Gs(n.localStore,d),await _a(n,kd(d),a,!1,u.resumeToken)}s.push(u)}return n.nu.Q_(i),s}function kd(r){return mh(r.path,r.collectionGroup,r.orderBy,r.filters,r.limit,"F",r.startAt,r.endAt)}function uy(r){return function(e){return F(F(e).persistence).us()}(F(r).localStore)}async function cy(r,t,e,n){const s=F(r);if(s.hu)return void V(Un,"Ignoring unexpected query state notification.");const i=s.iu.get(t);if(i&&i.length>0)switch(e){case"current":case"not-current":{const a=await dd(s.localStore,_h(i[0])),u=Ur.createSynthesizedRemoteEventForCurrentChange(t,e==="current",lt.EMPTY_BYTE_STRING);await ve(s,a,u);break}case"rejected":await Pn(s.localStore,t,!0),Dn(s,t,n);break;default:O(64155,e)}}async function ly(r,t,e){const n=gi(r);if(n.hu){for(const s of t){if(n.iu.has(s)&&n.sharedClientState.isActiveQueryTarget(s)){V(Un,"Adding an already active target "+s);continue}const i=await hd(n.localStore,s),a=await Gs(n.localStore,i);await _a(n,kd(i),a.targetId,!1,a.resumeToken),mi(n.remoteStore,a)}for(const s of e)n.iu.has(s)&&await Pn(n.localStore,s,!1).then(()=>{Vn(n.remoteStore,s),Dn(n,s)}).catch(Ie)}}function gi(r){const t=F(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=xd.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=ry.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=X_.bind(null,t),t.nu.Q_=q_.bind(null,t.eventManager),t.nu.Tu=z_.bind(null,t.eventManager),t}function Ta(r){const t=F(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Z_.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=ty.bind(null,t),t}class Mr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=fi(t.databaseInfo.databaseId),this.sharedClientState=this.Au(t),this.persistence=this.Ru(t),await this.persistence.start(),this.localStore=this.Vu(t),this.gcScheduler=this.mu(t,this.localStore),this.indexBackfillerScheduler=this.fu(t,this.localStore)}mu(t,e){return null}fu(t,e){return null}Vu(t){return ud(this.persistence,new ad,t.initialUser,this.serializer)}Ru(t){return new oa(di.Ei,this.serializer)}Au(t){return new _d}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Mr.provider={build:()=>new Mr};class hy extends Mr{constructor(t){super(),this.cacheSizeBytes=t}mu(t,e){L(this.persistence.referenceDelegate instanceof Ks,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new ed(n,t.asyncQueue,e)}Ru(t){const e=this.cacheSizeBytes!==void 0?vt.withCacheSize(this.cacheSizeBytes):vt.DEFAULT;return new oa(n=>Ks.Ei(n,e),this.serializer)}}class Md extends Mr{constructor(t,e,n){super(),this.gu=t,this.cacheSizeBytes=e,this.forceOwnership=n,this.kind="persistent",this.synchronizeTabs=!1}async initialize(t){await super.initialize(t),await this.gu.initialize(this,t),await Ta(this.gu.syncEngine),await Ln(this.gu.remoteStore),await this.persistence.Ki(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}Vu(t){return ud(this.persistence,new ad,t.initialUser,this.serializer)}mu(t,e){const n=this.persistence.referenceDelegate.garbageCollector;return new ed(n,t.asyncQueue,e)}fu(t,e){const n=new wg(e,this.persistence);return new vg(t.asyncQueue,n)}Ru(t){const e=od(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey),n=this.cacheSizeBytes!==void 0?vt.withCacheSize(this.cacheSizeBytes):vt.DEFAULT;return new aa(this.synchronizeTabs,e,t.clientId,n,t.asyncQueue,yd(),bs(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Au(t){return new _d}}class dy extends Md{constructor(t,e){super(t,e,!1),this.gu=t,this.cacheSizeBytes=e,this.synchronizeTabs=!0}async initialize(t){await super.initialize(t);const e=this.gu.syncEngine;this.sharedClientState instanceof eo&&(this.sharedClientState.syncEngine={yo:oy.bind(null,e),wo:cy.bind(null,e),bo:ly.bind(null,e),us:uy.bind(null,e),po:iy.bind(null,e)},await this.sharedClientState.start()),await this.persistence.Ki(async n=>{await ay(this.gu.syncEngine,n),this.gcScheduler&&(n&&!this.gcScheduler.started?this.gcScheduler.start():n||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(n&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():n||this.indexBackfillerScheduler.stop())})}Au(t){const e=yd();if(!eo.C(e))throw new x(P.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=od(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey);return new eo(e,t.asyncQueue,n,t.clientId,t.initialUser)}}class Or{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>tl(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=ny.bind(null,this.syncEngine),await ko(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new U_}()}createDatastore(t){const e=fi(t.databaseInfo.databaseId),n=function(i){return new v_(i)}(t.databaseInfo);return function(i,a,u,l){return new b_(i,a,u,l)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(n,s,i,a,u){return new P_(n,s,i,a,u)}(this.localStore,this.datastore,t.asyncQueue,e=>tl(this.syncEngine,e,0),function(){return Hc.C()?new Hc:new y_}())}createSyncEngine(t,e){return function(s,i,a,u,l,d,m){const g=new G_(s,i,a,u,l,d);return m&&(g.hu=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const i=F(s);V(Qe,"RemoteStore shutting down."),i.aa.add(5),await Fn(i),i.ca.shutdown(),i.la.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}Or.provider={build:()=>new Or};/**
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
 */class Od{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.pu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.pu(this.observer.error,t):ct("Uncaught Error in snapshot listener:",t.toString()))}yu(){this.muted=!0}pu(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
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
 */const ye="FirestoreClient";class fy{constructor(t,e,n,s,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=s,this.user=Tt.UNAUTHENTICATED,this.clientId=kl.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,async a=>{V(ye,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(n,a=>(V(ye,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new jt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=ga(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function ro(r,t){r.asyncQueue.verifyOperationInProgress(),V(ye,"Initializing OfflineComponentProvider");const e=r.configuration;await t.initialize(e);let n=e.initialUser;r.setCredentialChangeListener(async s=>{n.isEqual(s)||(await cd(t.localStore,s),n=s)}),t.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=t}async function nl(r,t){r.asyncQueue.verifyOperationInProgress();const e=await Fd(r);V(ye,"Initializing OnlineComponentProvider"),await t.initialize(e,r.configuration),r.setCredentialChangeListener(n=>Yc(t.remoteStore,n)),r.setAppCheckTokenChangeListener((n,s)=>Yc(t.remoteStore,s)),r._onlineComponents=t}async function Fd(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){V(ye,"Using user provided OfflineComponentProvider");try{await ro(r,r._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===P.FAILED_PRECONDITION||s.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;wr("Error using user provided cache. Falling back to memory cache: "+e),await ro(r,new Mr)}}else V(ye,"Using default OfflineComponentProvider"),await ro(r,new hy(void 0));return r._offlineComponents}async function va(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(V(ye,"Using user provided OnlineComponentProvider"),await nl(r,r._uninitializedComponentsProvider._online)):(V(ye,"Using default OnlineComponentProvider"),await nl(r,new Or))),r._onlineComponents}function Ld(r){return Fd(r).then(t=>t.persistence)}function Bd(r){return va(r).then(t=>t.remoteStore)}function my(r){return va(r).then(t=>t.syncEngine)}async function Ud(r){const t=await va(r),e=t.eventManager;return e.onListen=Q_.bind(null,t.syncEngine),e.onUnlisten=W_.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=H_.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Y_.bind(null,t.syncEngine),e}function gy(r){return r.asyncQueue.enqueue(async()=>{const t=await Ld(r),e=await Bd(r);return t.setNetworkEnabled(!0),function(s){const i=F(s);return i.aa.delete(0),zr(i)}(e)})}function py(r){return r.asyncQueue.enqueue(async()=>{const t=await Ld(r),e=await Bd(r);return t.setNetworkEnabled(!1),async function(s){const i=F(s);i.aa.add(0),await Fn(i),i.la.set("Offline")}(e)})}function _y(r,t,e={}){const n=new jt;return r.asyncQueue.enqueueAndForget(async()=>function(i,a,u,l,d){const m=new Od({next:I=>{m.yu(),a.enqueueAndForget(()=>Sd(i,g));const S=I.docs.has(u);!S&&I.fromCache?d.reject(new x(P.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&I.fromCache&&l&&l.source==="server"?d.reject(new x(P.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(I)},error:I=>d.reject(I)}),g=new Pd(ii(u.path),m,{includeMetadataChanges:!0,Fa:!0});return bd(i,g)}(await Ud(r),r.asyncQueue,t,e,n)),n.promise}function yy(r,t,e={}){const n=new jt;return r.asyncQueue.enqueueAndForget(async()=>function(i,a,u,l,d){const m=new Od({next:I=>{m.yu(),a.enqueueAndForget(()=>Sd(i,g)),I.fromCache&&l.source==="server"?d.reject(new x(P.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(I)},error:I=>d.reject(I)}),g=new Pd(u,m,{includeMetadataChanges:!0,Fa:!0});return bd(i,g)}(await Ud(r),r.asyncQueue,t,e,n)),n.promise}/**
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
 */function qd(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
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
 */const rl=new Map;/**
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
 */function zd(r,t,e){if(!e)throw new x(P.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function Iy(r,t,e,n){if(t===!0&&n===!0)throw new x(P.INVALID_ARGUMENT,`${r} and ${e} cannot be used together.`)}function sl(r){if(!M.isDocumentKey(r))throw new x(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function il(r){if(M.isDocumentKey(r))throw new x(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function pi(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":O(12329,{type:typeof r})}function Kt(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new x(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=pi(r);throw new x(P.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return r}/**
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
 */const Ey="firestore.googleapis.com",ol=!0;class al{constructor(t){var e,n;if(t.host===void 0){if(t.ssl!==void 0)throw new x(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Ey,this.ssl=ol}else this.host=t.host,this.ssl=(e=t.ssl)!==null&&e!==void 0?e:ol;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Yh;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<td)throw new x(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Iy("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=qd((n=t.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new x(P.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new x(P.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new x(P.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(n,s){return n.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class wa{constructor(t,e,n,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new al({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new x(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new x(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new al(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new dg;switch(n.type){case"firstParty":return new gg(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new x(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=rl.get(e);n&&(V("ComponentProvider","Removing Datastore"),rl.delete(e),n.terminate())}(this),Promise.resolve()}}/**
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
 */class We{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new We(this.firestore,t,this._query)}}class Dt{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new me(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Dt(this.firestore,t,this._key)}}class me extends We{constructor(t,e,n){super(t,e,ii(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Dt(this.firestore,null,new M(t))}withConverter(t){return new me(this.firestore,t,this._path)}}function eI(r,t,...e){if(r=Yt(r),zd("collection","path",t),r instanceof wa){const n=J.fromString(t,...e);return il(n),new me(r,null,n)}{if(!(r instanceof Dt||r instanceof me))throw new x(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(J.fromString(t,...e));return il(n),new me(r.firestore,null,n)}}function Ty(r,t,...e){if(r=Yt(r),arguments.length===1&&(t=kl.newId()),zd("doc","path",t),r instanceof wa){const n=J.fromString(t,...e);return sl(n),new Dt(r,null,new M(n))}{if(!(r instanceof Dt||r instanceof me))throw new x(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(J.fromString(t,...e));return sl(n),new Dt(r.firestore,r instanceof me?r.converter:null,new M(n))}}/**
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
 */const ul="AsyncQueue";class cl{constructor(t=Promise.resolve()){this.Qu=[],this.$u=!1,this.Uu=[],this.Ku=null,this.Wu=!1,this.Gu=!1,this.zu=[],this.y_=new Id(this,"async_queue_retry"),this.ju=()=>{const n=bs();n&&V(ul,"Visibility state changed to "+n.visibilityState),this.y_.A_()},this.Hu=t;const e=bs();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.ju)}get isShuttingDown(){return this.$u}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Ju(),this.Yu(t)}enterRestrictedMode(t){if(!this.$u){this.$u=!0,this.Gu=t||!1;const e=bs();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.ju)}}enqueue(t){if(this.Ju(),this.$u)return new Promise(()=>{});const e=new jt;return this.Yu(()=>this.$u&&this.Gu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Qu.push(t),this.Zu()))}async Zu(){if(this.Qu.length!==0){try{await this.Qu[0](),this.Qu.shift(),this.y_.reset()}catch(t){if(!Ee(t))throw t;V(ul,"Operation failed with retryable error: "+t)}this.Qu.length>0&&this.y_.E_(()=>this.Zu())}}Yu(t){const e=this.Hu.then(()=>(this.Wu=!0,t().catch(n=>{throw this.Ku=n,this.Wu=!1,ct("INTERNAL UNHANDLED ERROR: ",ll(n)),n}).then(n=>(this.Wu=!1,n))));return this.Hu=e,e}enqueueAfterDelay(t,e,n){this.Ju(),this.zu.indexOf(t)>-1&&(e=0);const s=ma.createAndSchedule(this,t,e,n,i=>this.Xu(i));return this.Uu.push(s),s}Ju(){this.Ku&&O(47125,{ec:ll(this.Ku)})}verifyOperationInProgress(){}async tc(){let t;do t=this.Hu,await t;while(t!==this.Hu)}nc(t){for(const e of this.Uu)if(e.timerId===t)return!0;return!1}rc(t){return this.tc().then(()=>{this.Uu.sort((e,n)=>e.targetTimeMs-n.targetTimeMs);for(const e of this.Uu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.tc()})}sc(t){this.zu.push(t)}Xu(t){const e=this.Uu.indexOf(t);this.Uu.splice(e,1)}}function ll(r){let t=r.message||"";return r.stack&&(t=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),t}/**
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
 */const vy=-1;class we extends wa{constructor(t,e,n,s){super(t,e,n,s),this.type="firestore",this._queue=new cl,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new cl(t),this._firestoreClient=void 0,await t}}}function wy(r,t,e){e||(e=Fs);const n=Wm(r,"firestore");if(n.isInitialized(e)){const s=n.getImmediate({identifier:e}),i=n.getOptions(e);if(Vs(i,t))return s;throw new x(P.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(t.cacheSizeBytes!==void 0&&t.localCache!==void 0)throw new x(P.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(t.cacheSizeBytes!==void 0&&t.cacheSizeBytes!==-1&&t.cacheSizeBytes<td)throw new x(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return n.initialize({options:t,instanceIdentifier:e})}function jr(r){if(r._terminated)throw new x(P.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||Ay(r),r._firestoreClient}function Ay(r){var t,e,n;const s=r._freezeSettings(),i=function(u,l,d,m){return new Jg(u,l,d,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,qd(m.experimentalLongPollingOptions),m.useFetchStreams)}(r._databaseId,((t=r._app)===null||t===void 0?void 0:t.options.appId)||"",r._persistenceKey,s);r._componentsProvider||!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((n=s.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),r._firestoreClient=new fy(r._authCredentials,r._appCheckCredentials,r._queue,i,r._componentsProvider&&function(u){const l=u?._online.build();return{_offline:u?._offline.build(l),_online:l}}(r._componentsProvider))}function Ry(r){return gy(jr(r=Kt(r,we)))}function by(r){return py(jr(r=Kt(r,we)))}/**
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
 */class xn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new xn(lt.fromBase64String(t))}catch(e){throw new x(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new xn(lt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class _i{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new x(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new it(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class yi{constructor(t){this._methodName=t}}/**
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
 */class Aa{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new x(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new x(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return q(this._lat,t._lat)||q(this._long,t._long)}}/**
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
 */class Ra{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(n,s){if(n.length!==s.length)return!1;for(let i=0;i<n.length;++i)if(n[i]!==s[i])return!1;return!0}(this._values,t._values)}}/**
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
 */const Sy=/^__.*__$/;class Py{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return this.fieldMask!==null?new ee(t,this.data,this.fieldMask,e,this.fieldTransforms):new On(t,this.data,e,this.fieldTransforms)}}class jd{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new ee(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function $d(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw O(40011,{oc:r})}}class ba{constructor(t,e,n,s,i,a){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=s,i===void 0&&this._c(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get oc(){return this.settings.oc}ac(t){return new ba(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}uc(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.ac({path:n,cc:!1});return s.lc(t),s}hc(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.ac({path:n,cc:!1});return s._c(),s}Pc(t){return this.ac({path:void 0,cc:!0})}Tc(t){return Ys(t,this.settings.methodName,this.settings.Ic||!1,this.path,this.settings.Ec)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}_c(){if(this.path)for(let t=0;t<this.path.length;t++)this.lc(this.path.get(t))}lc(t){if(t.length===0)throw this.Tc("Document fields must not be empty");if($d(this.oc)&&Sy.test(t))throw this.Tc('Document fields cannot begin and end with "__"')}}class Vy{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||fi(t)}dc(t,e,n,s=!1){return new ba({oc:t,methodName:e,Ec:n,path:it.emptyPath(),cc:!1,Ic:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Sa(r){const t=r._freezeSettings(),e=fi(r._databaseId);return new Vy(r._databaseId,!!t.ignoreUndefinedProperties,e)}function Cy(r,t,e,n,s,i={}){const a=r.dc(i.merge||i.mergeFields?2:0,t,e,s);Va("Data must be an object, but it was:",a,n);const u=Kd(n,a);let l,d;if(i.merge)l=new Ct(a.fieldMask),d=a.fieldTransforms;else if(i.mergeFields){const m=[];for(const g of i.mergeFields){const I=Fo(t,g,e);if(!a.contains(I))throw new x(P.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);Qd(m,I)||m.push(I)}l=new Ct(m),d=a.fieldTransforms.filter(g=>l.covers(g.field))}else l=null,d=a.fieldTransforms;return new Py(new wt(u),l,d)}class Ii extends yi{_toFieldTransform(t){if(t.oc!==2)throw t.oc===1?t.Tc(`${this._methodName}() can only appear at the top level of your update data`):t.Tc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Ii}}class Pa extends yi{_toFieldTransform(t){return new Sh(t.path,new An)}isEqual(t){return t instanceof Pa}}function Dy(r,t,e,n){const s=r.dc(1,t,e);Va("Data must be an object, but it was:",s,n);const i=[],a=wt.empty();Te(n,(l,d)=>{const m=Ca(t,l,e);d=Yt(d);const g=s.hc(m);if(d instanceof Ii)i.push(m);else{const I=$r(d,g);I!=null&&(i.push(m),a.set(m,I))}});const u=new Ct(i);return new jd(a,u,s.fieldTransforms)}function xy(r,t,e,n,s,i){const a=r.dc(1,t,e),u=[Fo(t,n,e)],l=[s];if(i.length%2!=0)throw new x(P.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let I=0;I<i.length;I+=2)u.push(Fo(t,i[I])),l.push(i[I+1]);const d=[],m=wt.empty();for(let I=u.length-1;I>=0;--I)if(!Qd(d,u[I])){const S=u[I];let C=l[I];C=Yt(C);const k=a.hc(S);if(C instanceof Ii)d.push(S);else{const D=$r(C,k);D!=null&&(d.push(S),m.set(S,D))}}const g=new Ct(d);return new jd(m,g,a.fieldTransforms)}function Ny(r,t,e,n=!1){return $r(e,r.dc(n?4:3,t))}function $r(r,t){if(Gd(r=Yt(r)))return Va("Unsupported field value:",t,r),Kd(r,t);if(r instanceof yi)return function(n,s){if(!$d(s.oc))throw s.Tc(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Tc(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.cc&&t.oc!==4)throw t.Tc("Nested arrays are not supported");return function(n,s){const i=[];let a=0;for(const u of n){let l=$r(u,s.Pc(a));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),a++}return{arrayValue:{values:i}}}(r,t)}return function(n,s){if((n=Yt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return mp(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=ot.fromDate(n);return{timestampValue:Sn(s.serializer,i)}}if(n instanceof ot){const i=new ot(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Sn(s.serializer,i)}}if(n instanceof Aa)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof xn)return{bytesValue:kh(s.serializer,n._byteString)};if(n instanceof Dt){const i=s.databaseId,a=n.firestore._databaseId;if(!a.isEqual(i))throw s.Tc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:na(n.firestore._databaseId||s.databaseId,n._key.path)}}if(n instanceof Ra)return function(a,u){return{mapValue:{fields:{[Qo]:{stringValue:Ho},[En]:{arrayValue:{values:a.toArray().map(d=>{if(typeof d!="number")throw u.Tc("VectorValues must only contain numeric values.");return Jo(u.serializer,d)})}}}}}}(n,s);throw s.Tc(`Unsupported field value: ${pi(n)}`)}(r,t)}function Kd(r,t){const e={};return Jl(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Te(r,(n,s)=>{const i=$r(s,t.uc(n));i!=null&&(e[n]=i)}),{mapValue:{fields:e}}}function Gd(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof ot||r instanceof Aa||r instanceof xn||r instanceof Dt||r instanceof yi||r instanceof Ra)}function Va(r,t,e){if(!Gd(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const n=pi(e);throw n==="an object"?t.Tc(r+" a custom object"):t.Tc(r+" "+n)}}function Fo(r,t,e){if((t=Yt(t))instanceof _i)return t._internalPath;if(typeof t=="string")return Ca(r,t);throw Ys("Field path arguments must be of type string or ",r,!1,void 0,e)}const ky=new RegExp("[~\\*/\\[\\]]");function Ca(r,t,e){if(t.search(ky)>=0)throw Ys(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,e);try{return new _i(...t.split("."))._internalPath}catch{throw Ys(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,e)}}function Ys(r,t,e,n,s){const i=n&&!n.isEmpty(),a=s!==void 0;let u=`Function ${t}() called with invalid data`;e&&(u+=" (via `toFirestore()`)"),u+=". ";let l="";return(i||a)&&(l+=" (found",i&&(l+=` in field ${n}`),a&&(l+=` in document ${s}`),l+=")"),new x(P.INVALID_ARGUMENT,u+r+l)}function Qd(r,t){return r.some(e=>e.isEqual(t))}/**
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
 */class Hd{constructor(t,e,n,s,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Dt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new My(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Ei("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class My extends Hd{data(){return super.data()}}function Ei(r,t){return typeof t=="string"?Ca(r,t):t instanceof _i?t._internalPath:t._delegate._internalPath}/**
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
 */function Oy(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new x(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Da{}class Wd extends Da{}function nI(r,t,...e){let n=[];t instanceof Da&&n.push(t),n=n.concat(e),function(i){const a=i.filter(l=>l instanceof xa).length,u=i.filter(l=>l instanceof Ti).length;if(a>1||a>0&&u>0)throw new x(P.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n);for(const s of n)r=s._apply(r);return r}class Ti extends Wd{constructor(t,e,n){super(),this._field=t,this._op=e,this._value=n,this.type="where"}static _create(t,e,n){return new Ti(t,e,n)}_apply(t){const e=this._parse(t);return Yd(t._query,e),new We(t.firestore,t.converter,vo(t._query,e))}_parse(t){const e=Sa(t.firestore);return function(i,a,u,l,d,m,g){let I;if(d.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new x(P.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){dl(g,m);const C=[];for(const k of g)C.push(hl(l,i,k));I={arrayValue:{values:C}}}else I=hl(l,i,g)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||dl(g,m),I=Ny(u,a,g,m==="in"||m==="not-in");return K.create(d,m,I)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function rI(r,t,e){const n=t,s=Ei("where",r);return Ti._create(s,n,e)}class xa extends Da{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new xa(t,e)}_parse(t){const e=this._queryConstraints.map(n=>n._parse(t)).filter(n=>n.getFilters().length>0);return e.length===1?e[0]:X.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(s,i){let a=s;const u=i.getFlattenedFilters();for(const l of u)Yd(a,l),a=vo(a,l)}(t._query,e),new We(t.firestore,t.converter,vo(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Na extends Wd{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new Na(t,e)}_apply(t){const e=function(s,i,a){if(s.startAt!==null)throw new x(P.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new x(P.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Nr(i,a)}(t._query,this._field,this._direction);return new We(t.firestore,t.converter,function(s,i){const a=s.explicitOrderBy.concat([i]);return new Mn(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(t._query,e))}}function sI(r,t="asc"){const e=t,n=Ei("orderBy",r);return Na._create(n,e)}function hl(r,t,e){if(typeof(e=Yt(e))=="string"){if(e==="")throw new x(P.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!gh(t)&&e.indexOf("/")!==-1)throw new x(P.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const n=t.path.child(J.fromString(e));if(!M.isDocumentKey(n))throw new x(P.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return Dr(r,new M(n))}if(e instanceof Dt)return Dr(r,e._key);throw new x(P.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${pi(e)}.`)}function dl(r,t){if(!Array.isArray(r)||r.length===0)throw new x(P.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Yd(r,t){const e=function(s,i){for(const a of s)for(const u of a.getFlattenedFilters())if(i.indexOf(u.op)>=0)return u.op;return null}(r.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new x(P.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new x(P.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class Fy{convertValue(t,e="none"){switch(ge(t)){case 0:return null;case 1:return t.booleanValue;case 2:return st(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Zt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw O(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return Te(t,(s,i)=>{n[s]=this.convertValue(i,e)}),n}convertVectorValue(t){var e,n,s;const i=(s=(n=(e=t.fields)===null||e===void 0?void 0:e[En].arrayValue)===null||n===void 0?void 0:n.values)===null||s===void 0?void 0:s.map(a=>st(a.doubleValue));return new Ra(i)}convertGeoPoint(t){return new Aa(st(t.latitude),st(t.longitude))}convertArray(t,e){return(t.values||[]).map(n=>this.convertValue(n,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=ri(t);return n==null?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Vr(t));default:return null}}convertTimestamp(t){const e=Xt(t);return new ot(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=J.fromString(t);L($h(n),9688,{name:t});const s=new ze(n.get(1),n.get(3)),i=new M(n.popFirst(5));return s.isEqual(e)||ct(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}/**
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
 */function Ly(r,t,e){let n;return n=r?r.toFirestore(t):t,n}/**
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
 */class fr{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Jd extends Hd{constructor(t,e,n,s,i,a){super(t,e,n,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Ss(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Ei("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class Ss extends Jd{data(t={}){return super.data(t)}}class By{constructor(t,e,n,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new fr(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new Ss(this._firestore,this._userDataWriter,n.key,n,new fr(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new x(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(u=>{const l=new Ss(s._firestore,s._userDataWriter,u.doc.key,u.doc,new fr(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);return u.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(u=>i||u.type!==3).map(u=>{const l=new Ss(s._firestore,s._userDataWriter,u.doc.key,u.doc,new fr(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,m=-1;return u.type!==0&&(d=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),m=a.indexOf(u.doc.key)),{type:Uy(u.type),doc:l,oldIndex:d,newIndex:m}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Uy(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return O(61501,{type:r})}}/**
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
 */function iI(r){r=Kt(r,Dt);const t=Kt(r.firestore,we);return _y(jr(t),r._key).then(e=>qy(t,r,e))}class Xd extends Fy{constructor(t){super(),this.firestore=t}convertBytes(t){return new xn(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Dt(this.firestore,null,e)}}function oI(r){r=Kt(r,We);const t=Kt(r.firestore,we),e=jr(t),n=new Xd(t);return Oy(r._query),yy(e,r._query).then(s=>new By(t,n,r,s))}function aI(r,t,e,...n){r=Kt(r,Dt);const s=Kt(r.firestore,we),i=Sa(s);let a;return a=typeof(t=Yt(t))=="string"||t instanceof _i?xy(i,"updateDoc",r._key,t,e,n):Dy(i,"updateDoc",r._key,t),ka(s,[a.toMutation(r._key,St.exists(!0))])}function uI(r){return ka(Kt(r.firestore,we),[new ci(r._key,St.none())])}function cI(r,t){const e=Kt(r.firestore,we),n=Ty(r),s=Ly(r.converter,t);return ka(e,[Cy(Sa(r.firestore),"addDoc",n._key,s,r.converter!==null,{}).toMutation(n._key,St.exists(!1))]).then(()=>n)}function ka(r,t){return function(n,s){const i=new jt;return n.asyncQueue.enqueueAndForget(async()=>J_(await my(n),s,i)),i.promise}(jr(r),t)}function qy(r,t,e){const n=e.docs.get(t._key),s=new Xd(r);return new Jd(r,s,t._key,n,new fr(e.hasPendingWrites,e.fromCache),t.converter)}class zy{constructor(t){let e;this.kind="persistent",t?.tabManager?(t.tabManager._initialize(t),e=t.tabManager):(e=Gy(),e._initialize(t)),this._onlineComponentProvider=e._onlineComponentProvider,this._offlineComponentProvider=e._offlineComponentProvider}toJSON(){return{kind:this.kind}}}function jy(r){return new zy(r)}class $y{constructor(t){this.forceOwnership=t,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(t){this._onlineComponentProvider=Or.provider,this._offlineComponentProvider={build:e=>new Md(e,t?.cacheSizeBytes,this.forceOwnership)}}}class Ky{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(t){this._onlineComponentProvider=Or.provider,this._offlineComponentProvider={build:e=>new dy(e,t?.cacheSizeBytes)}}}function Gy(r){return new $y(void 0)}function Qy(){return new Ky}function lI(){return new Pa("serverTimestamp")}(function(t,e=!0){(function(s){kn=s})(Zm),Cs(new Tr("firestore",(n,{instanceIdentifier:s,options:i})=>{const a=n.getProvider("app").getImmediate(),u=new we(new fg(n.getProvider("auth-internal")),new pg(a,n.getProvider("app-check-internal")),function(d,m){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new x(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ze(d.options.projectId,m)}(a,s),a);return i=Object.assign({useFetchStreams:e},i),u._setSettings(i),u},"PUBLIC").setMultipleInstances(!0)),dn(Gu,Qu,t),dn(Gu,Qu,"esm2017")})();var Hy="firebase",Wy="11.6.1";/**
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
 */dn(Hy,Wy,"app");const Yy={apiKey:"AIzaSyD1t2AKrSAoY7RklFTfQpEKtxRbAgIr7E0",authDomain:"nwsingatest.firebaseapp.com",projectId:"nwsingatest",storageBucket:"nwsingatest.firebasestorage.app",messagingSenderId:"545366628547",appId:"1:545366628547:web:5a368ecc0f6c2575fdea76"},Zd=tg(Yy),Js=wy(Zd,{localCache:jy({cacheSizeBytes:vy,tabManager:Qy()})}),Jy=()=>{window.addEventListener("online",()=>{console.log("App is online, enabling Firestore network"),Ry(Js).catch(r=>console.error("Error enabling network:",r))}),window.addEventListener("offline",()=>{console.log("App is offline, disabling Firestore network"),by(Js).catch(r=>console.error("Error disabling network:",r))})},Xy=Of(({app:r})=>{r.config.globalProperties.$firebase={app:Zd,db:Js},Jy()}),hI=Object.freeze(Object.defineProperty({__proto__:null,db:Js,default:Xy},Symbol.toStringTag,{value:"Module"}));export{Ty as a,iI as b,eI as c,Js as d,cI as e,uI as f,oI as g,hI as h,sI as o,nI as q,lI as s,aI as u,rI as w};
