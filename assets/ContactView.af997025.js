import{ab as ln,ac as un,x as W,z as Ge,A as fe,ad as Nn,k as yt,ae as $n,l as _,m as x,af as Ln,r as L,ag as qn,ah as Un,ai as jn,U as st,t as oe,aj as cn,ak as dn,y as bt,al as zn,s as Fe,S as we,aa as Rt,am as Hn,O as Kn,an as Wn,K as Gn,ao as Mt,ap as Zn,aq as Yn,o as Xn,c as Qn,b as ue,w as Jn,ar as er,u as tr,a as nr,a4 as rr,as as sr}from"./vendor.cfd917ce.js";import{c as wt,u as ir,b as ar,d as or}from"./use-dark.8a9a51bd.js";import{_ as lr}from"./index.4fd1765a.js";function ur({validate:t,resetValidation:e,requiresQForm:n}){const r=ln(un,!1);if(r!==!1){const{props:s,proxy:i}=fe();Object.assign(i,{validate:t,resetValidation:e}),W(()=>s.disable,a=>{a===!0?(typeof e=="function"&&e(),r.unbindComponent(i)):r.bindComponent(i)}),s.disable!==!0&&r.bindComponent(i),Ge(()=>{s.disable!==!0&&r.unbindComponent(i)})}else n===!0&&console.error("Parent QForm not found on useFormChild()!")}const Vt=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,Ft=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,Pt=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,Pe=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,Be=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,Bt={date:t=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(t),time:t=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(t),fulltime:t=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(t),timeOrFulltime:t=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(t),email:t=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t),hexColor:t=>Vt.test(t),hexaColor:t=>Ft.test(t),hexOrHexaColor:t=>Pt.test(t),rgbColor:t=>Pe.test(t),rgbaColor:t=>Be.test(t),rgbOrRgbaColor:t=>Pe.test(t)||Be.test(t),hexOrRgbColor:t=>Vt.test(t)||Pe.test(t),hexaOrRgbaColor:t=>Ft.test(t)||Be.test(t),anyColor:t=>Pt.test(t)||Pe.test(t)||Be.test(t)};"Boolean Number String Function Array Date RegExp Object".split(" ").forEach(t=>{t.toLowerCase()});const cr={...Nn,min:{type:Number,default:0},max:{type:Number,default:100},color:String,centerColor:String,trackColor:String,fontSize:String,thickness:{type:Number,default:.2,validator:t=>t>=0&&t<=1},angle:{type:Number,default:0},showValue:Boolean,reverse:Boolean,instantFeedback:Boolean};function dr(t,e,n){return n<=e?e:Math.min(n,Math.max(e,t))}const it=50,hn=2*it,fn=hn*Math.PI,hr=Math.round(fn*1e3)/1e3;yt({name:"QCircularProgress",props:{...cr,value:{type:Number,default:0},animationSpeed:{type:[String,Number],default:600},indeterminate:Boolean},setup(t,{slots:e}){const{proxy:{$q:n}}=fe(),r=$n(t),s=_(()=>{const k=(n.lang.rtl===!0?-1:1)*t.angle;return{transform:t.reverse!==(n.lang.rtl===!0)?`scale3d(-1, 1, 1) rotate3d(0, 0, 1, ${-90-k}deg)`:`rotate3d(0, 0, 1, ${k-90}deg)`}}),i=_(()=>t.instantFeedback!==!0&&t.indeterminate!==!0?{transition:`stroke-dashoffset ${t.animationSpeed}ms ease 0s, stroke ${t.animationSpeed}ms ease`}:""),a=_(()=>hn/(1-t.thickness/2)),o=_(()=>`${a.value/2} ${a.value/2} ${a.value} ${a.value}`),l=_(()=>dr(t.value,t.min,t.max)),f=_(()=>fn*(1-(l.value-t.min)/(t.max-t.min))),y=_(()=>t.thickness/2*a.value);function S({thickness:k,offset:b,color:A,cls:K}){return x("circle",{class:"q-circular-progress__"+K+(A!==void 0?` text-${A}`:""),style:i.value,fill:"transparent",stroke:"currentColor","stroke-width":k,"stroke-dasharray":hr,"stroke-dashoffset":b,cx:a.value,cy:a.value,r:it})}return()=>{const k=[];t.centerColor!==void 0&&t.centerColor!=="transparent"&&k.push(x("circle",{class:`q-circular-progress__center text-${t.centerColor}`,fill:"currentColor",r:it-y.value/2,cx:a.value,cy:a.value})),t.trackColor!==void 0&&t.trackColor!=="transparent"&&k.push(S({cls:"track",thickness:y.value,offset:0,color:t.trackColor})),k.push(S({cls:"circle",thickness:y.value,offset:f.value,color:t.color}));const b=[x("svg",{class:"q-circular-progress__svg",style:s.value,viewBox:o.value,"aria-hidden":"true"},k)];return t.showValue===!0&&b.push(x("div",{class:"q-circular-progress__text absolute-full row flex-center content-center",style:{fontSize:t.fontSize}},e.default!==void 0?e.default():[x("div",l.value)])),x("div",{class:`q-circular-progress q-circular-progress--${t.indeterminate===!0?"in":""}determinate`,style:r.value,role:"progressbar","aria-valuemin":t.min,"aria-valuemax":t.max,"aria-valuenow":t.indeterminate===!0?void 0:l.value},Ln(e.internal,b))}}});const fr=["rejected"],mr=[...fr,"start","finish","added","removed"],gr=()=>!0;function pr(t){const e={};return t.forEach(n=>{e[n]=gr}),e}pr(mr);let Qe,Oe=0;const j=new Array(256);for(let t=0;t<256;t++)j[t]=(t+256).toString(16).substring(1);const vr=(()=>{const t=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(t!==void 0){if(t.randomBytes!==void 0)return t.randomBytes;if(t.getRandomValues!==void 0)return e=>{const n=new Uint8Array(e);return t.getRandomValues(n),n}}return e=>{const n=[];for(let r=e;r>0;r--)n.push(Math.floor(Math.random()*256));return n}})(),Ot=4096;function yr(){(Qe===void 0||Oe+16>Ot)&&(Oe=0,Qe=vr(Ot));const t=Array.prototype.slice.call(Qe,Oe,Oe+=16);return t[6]=t[6]&15|64,t[8]=t[8]&63|128,j[t[0]]+j[t[1]]+j[t[2]]+j[t[3]]+"-"+j[t[4]]+j[t[5]]+"-"+j[t[6]]+j[t[7]]+"-"+j[t[8]]+j[t[9]]+"-"+j[t[10]]+j[t[11]]+j[t[12]]+j[t[13]]+j[t[14]]+j[t[15]]}const br=[!0,!1,"ondemand"],wr={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],validator:t=>br.includes(t)}};function Er(t,e){const{props:n,proxy:r}=fe(),s=L(!1),i=L(null),a=L(null);ur({validate:A,resetValidation:b});let o=0,l;const f=_(()=>n.rules!==void 0&&n.rules!==null&&n.rules.length>0),y=_(()=>n.disable!==!0&&f.value===!0),S=_(()=>n.error===!0||s.value===!0),k=_(()=>typeof n.errorMessage=="string"&&n.errorMessage.length>0?n.errorMessage:i.value);W(()=>n.modelValue,()=>{K()}),W(()=>n.reactiveRules,$=>{$===!0?l===void 0&&(l=W(()=>n.rules,()=>{K(!0)})):l!==void 0&&(l(),l=void 0)},{immediate:!0}),W(t,$=>{$===!0?a.value===null&&(a.value=!1):a.value===!1&&(a.value=!0,y.value===!0&&n.lazyRules!=="ondemand"&&e.value===!1&&B())});function b(){o++,e.value=!1,a.value=null,s.value=!1,i.value=null,B.cancel()}function A($=n.modelValue){if(y.value!==!0)return!0;const N=++o;e.value!==!0&&n.lazyRules!==!0&&(a.value=!0);const T=(D,u)=>{s.value!==D&&(s.value=D);const h=u||void 0;i.value!==h&&(i.value=h),e.value=!1},O=[];for(let D=0;D<n.rules.length;D++){const u=n.rules[D];let h;if(typeof u=="function"?h=u($):typeof u=="string"&&Bt[u]!==void 0&&(h=Bt[u]($)),h===!1||typeof h=="string")return T(!0,h),!1;h!==!0&&h!==void 0&&O.push(h)}return O.length===0?(T(!1),!0):(e.value=!0,Promise.all(O).then(D=>{if(D===void 0||Array.isArray(D)===!1||D.length===0)return N===o&&T(!1),!0;const u=D.find(h=>h===!1||typeof h=="string");return N===o&&T(u!==void 0,u),u===void 0},D=>(N===o&&(console.error(D),T(!0)),!1)))}function K($){y.value===!0&&n.lazyRules!=="ondemand"&&(a.value===!0||n.lazyRules!==!0&&$!==!0)&&B()}const B=qn(A,0);return Ge(()=>{l!==void 0&&l(),B.cancel()}),Object.assign(r,{resetValidation:b,validate:A}),Un(r,"hasError",()=>S.value),{isDirtyModel:a,hasRules:f,hasError:S,errorMessage:k,validate:A,resetValidation:b}}const Nt=/^on[A-Z]/;function Sr(t,e){const n={listeners:L({}),attributes:L({})};function r(){const s={},i={};for(const a in t)a!=="class"&&a!=="style"&&Nt.test(a)===!1&&(s[a]=t[a]);for(const a in e.props)Nt.test(a)===!0&&(i[a]=e.props[a]);n.attributes.value=s,n.listeners.value=i}return jn(r),r(),n}function at(t){return t===void 0?`f_${yr()}`:t}function ot(t){return t!=null&&(""+t).length>0}const _r={...ir,...wr,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]},Cr=["update:modelValue","clear","focus","blur","popup-show","popup-hide"];function kr(){const{props:t,attrs:e,proxy:n,vnode:r}=fe();return{isDark:ar(t,n.$q),editable:_(()=>t.disable!==!0&&t.readonly!==!0),innerLoading:L(!1),focused:L(!1),hasPopupOpen:!1,splitAttrs:Sr(e,r),targetUid:L(at(t.for)),rootRef:L(null),targetRef:L(null),controlRef:L(null)}}function Ir(t){const{props:e,emit:n,slots:r,attrs:s,proxy:i}=fe(),{$q:a}=i;let o;t.hasValue===void 0&&(t.hasValue=_(()=>ot(e.modelValue))),t.emitValue===void 0&&(t.emitValue=c=>{n("update:modelValue",c)}),t.controlEvents===void 0&&(t.controlEvents={onFocusin:g,onFocusout:p}),Object.assign(t,{clearValue:m,onControlFocusin:g,onControlFocusout:p,focus:h}),t.computedCounter===void 0&&(t.computedCounter=_(()=>{if(e.counter!==!1){const c=typeof e.modelValue=="string"||typeof e.modelValue=="number"?(""+e.modelValue).length:Array.isArray(e.modelValue)===!0?e.modelValue.length:0,w=e.maxlength!==void 0?e.maxlength:e.maxValues;return c+(w!==void 0?" / "+w:"")}}));const{isDirtyModel:l,hasRules:f,hasError:y,errorMessage:S,resetValidation:k}=Er(t.focused,t.innerLoading),b=t.floatingLabel!==void 0?_(()=>e.stackLabel===!0||t.focused.value===!0||t.floatingLabel.value===!0):_(()=>e.stackLabel===!0||t.focused.value===!0||t.hasValue.value===!0),A=_(()=>e.bottomSlots===!0||e.hint!==void 0||f.value===!0||e.counter===!0||e.error!==null),K=_(()=>e.filled===!0?"filled":e.outlined===!0?"outlined":e.borderless===!0?"borderless":e.standout?"standout":"standard"),B=_(()=>`q-field row no-wrap items-start q-field--${K.value}`+(t.fieldClass!==void 0?` ${t.fieldClass.value}`:"")+(e.rounded===!0?" q-field--rounded":"")+(e.square===!0?" q-field--square":"")+(b.value===!0?" q-field--float":"")+(N.value===!0?" q-field--labeled":"")+(e.dense===!0?" q-field--dense":"")+(e.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(t.isDark.value===!0?" q-field--dark":"")+(t.getControl===void 0?" q-field--auto-height":"")+(t.focused.value===!0?" q-field--focused":"")+(y.value===!0?" q-field--error":"")+(y.value===!0||t.focused.value===!0?" q-field--highlighted":"")+(e.hideBottomSpace!==!0&&A.value===!0?" q-field--with-bottom":"")+(e.disable===!0?" q-field--disabled":e.readonly===!0?" q-field--readonly":"")),$=_(()=>"q-field__control relative-position row no-wrap"+(e.bgColor!==void 0?` bg-${e.bgColor}`:"")+(y.value===!0?" text-negative":typeof e.standout=="string"&&e.standout.length>0&&t.focused.value===!0?` ${e.standout}`:e.color!==void 0?` text-${e.color}`:"")),N=_(()=>e.labelSlot===!0||e.label!==void 0),T=_(()=>"q-field__label no-pointer-events absolute ellipsis"+(e.labelColor!==void 0&&y.value!==!0?` text-${e.labelColor}`:"")),O=_(()=>({id:t.targetUid.value,editable:t.editable.value,focused:t.focused.value,floatingLabel:b.value,modelValue:e.modelValue,emitValue:t.emitValue})),D=_(()=>{const c={for:t.targetUid.value};return e.disable===!0?c["aria-disabled"]="true":e.readonly===!0&&(c["aria-readonly"]="true"),c});W(()=>e.for,c=>{t.targetUid.value=at(c)});function u(){const c=document.activeElement;let w=t.targetRef!==void 0&&t.targetRef.value;w&&(c===null||c.id!==t.targetUid.value)&&(w.hasAttribute("tabindex")===!0||(w=w.querySelector("[tabindex]")),w&&w!==c&&w.focus({preventScroll:!0}))}function h(){wt(u)}function v(){or(u);const c=document.activeElement;c!==null&&t.rootRef.value.contains(c)&&c.blur()}function g(c){clearTimeout(o),t.editable.value===!0&&t.focused.value===!1&&(t.focused.value=!0,n("focus",c))}function p(c,w){clearTimeout(o),o=setTimeout(()=>{document.hasFocus()===!0&&(t.hasPopupOpen===!0||t.controlRef===void 0||t.controlRef.value===null||t.controlRef.value.contains(document.activeElement)!==!1)||(t.focused.value===!0&&(t.focused.value=!1,n("blur",c)),w!==void 0&&w())})}function m(c){st(c),a.platform.is.mobile!==!0?(t.targetRef!==void 0&&t.targetRef.value||t.rootRef.value).focus():t.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),e.type==="file"&&(t.inputRef.value.value=null),n("update:modelValue",null),n("clear",e.modelValue),oe(()=>{k(),a.platform.is.mobile!==!0&&(l.value=!1)})}function M(){const c=[];return r.prepend!==void 0&&c.push(x("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:Fe},r.prepend())),c.push(x("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},E())),y.value===!0&&e.noErrorIcon===!1&&c.push(G("error",[x(Rt,{name:a.iconSet.field.error,color:"negative"})])),e.loading===!0||t.innerLoading.value===!0?c.push(G("inner-loading-append",r.loading!==void 0?r.loading():[x(Hn,{color:e.color})])):e.clearable===!0&&t.hasValue.value===!0&&t.editable.value===!0&&c.push(G("inner-clearable-append",[x(Rt,{class:"q-field__focusable-action",tag:"button",name:e.clearIcon||a.iconSet.field.clear,tabindex:0,type:"button","aria-hidden":null,role:null,onClick:m})])),r.append!==void 0&&c.push(x("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:Fe},r.append())),t.getInnerAppend!==void 0&&c.push(G("inner-append",t.getInnerAppend())),t.getControlChild!==void 0&&c.push(t.getControlChild()),c}function E(){const c=[];return e.prefix!==void 0&&e.prefix!==null&&c.push(x("div",{class:"q-field__prefix no-pointer-events row items-center"},e.prefix)),t.getShadowControl!==void 0&&t.hasShadow.value===!0&&c.push(t.getShadowControl()),t.getControl!==void 0?c.push(t.getControl()):r.rawControl!==void 0?c.push(r.rawControl()):r.control!==void 0&&c.push(x("div",{ref:t.targetRef,class:"q-field__native row",tabindex:-1,...t.splitAttrs.attributes.value,"data-autofocus":e.autofocus===!0||void 0},r.control(O.value))),N.value===!0&&c.push(x("div",{class:T.value},we(r.label,e.label))),e.suffix!==void 0&&e.suffix!==null&&c.push(x("div",{class:"q-field__suffix no-pointer-events row items-center"},e.suffix)),c.concat(we(r.default))}function P(){let c,w;y.value===!0?S.value!==null?(c=[x("div",{role:"alert"},S.value)],w=`q--slot-error-${S.value}`):(c=we(r.error),w="q--slot-error"):(e.hideHint!==!0||t.focused.value===!0)&&(e.hint!==void 0?(c=[x("div",e.hint)],w=`q--slot-hint-${e.hint}`):(c=we(r.hint),w="q--slot-hint"));const d=e.counter===!0||r.counter!==void 0;if(e.hideBottomSpace===!0&&d===!1&&c===void 0)return;const F=x("div",{key:w,class:"q-field__messages col"},c);return x("div",{class:"q-field__bottom row items-start q-field__bottom--"+(e.hideBottomSpace!==!0?"animated":"stale")},[e.hideBottomSpace===!0?F:x(Kn,{name:"q-transition--field-message"},()=>F),d===!0?x("div",{class:"q-field__counter"},r.counter!==void 0?r.counter():t.computedCounter.value):null])}function G(c,w){return w===null?null:x("div",{key:c,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},w)}Object.assign(i,{focus:h,blur:v});let Q=!1;return cn(()=>{Q=!0}),dn(()=>{Q===!0&&e.autofocus===!0&&i.focus()}),bt(()=>{zn.value===!0&&e.for===void 0&&(t.targetUid.value=at()),e.autofocus===!0&&i.focus()}),Ge(()=>{clearTimeout(o)}),function(){const w=t.getControl===void 0&&r.control===void 0?{...t.splitAttrs.attributes.value,"data-autofocus":e.autofocus===!0||void 0,...D.value}:D.value;return x("label",{ref:t.rootRef,class:[B.value,s.class],style:s.style,...w},[r.before!==void 0?x("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:Fe},r.before()):null,x("div",{class:"q-field__inner relative-position col self-stretch"},[x("div",{ref:t.controlRef,class:$.value,tabindex:-1,...t.controlEvents},M()),A.value===!0?P():null]),r.after!==void 0?x("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:Fe},r.after()):null])}}const $t={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},$e={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:t=>t.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:t=>t.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:t=>t.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:t=>t.toLocaleLowerCase()}},mn=Object.keys($e);mn.forEach(t=>{$e[t].regex=new RegExp($e[t].pattern)});const xr=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+mn.join("")+"])|(.)","g"),Lt=/[.*+?^${}()|[\]\\]/g,q=String.fromCharCode(1),Ar={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function Tr(t,e,n,r){let s,i,a,o;const l=L(null),f=L(S());function y(){return t.autogrow===!0||["textarea","text","search","url","tel","password"].includes(t.type)}W(()=>t.type+t.autogrow,b),W(()=>t.mask,u=>{if(u!==void 0)A(f.value,!0);else{const h=O(f.value);b(),t.modelValue!==h&&e("update:modelValue",h)}}),W(()=>t.fillMask+t.reverseFillMask,()=>{l.value===!0&&A(f.value,!0)}),W(()=>t.unmaskedValue,()=>{l.value===!0&&A(f.value)});function S(){if(b(),l.value===!0){const u=N(O(t.modelValue));return t.fillMask!==!1?D(u):u}return t.modelValue}function k(u){if(u<s.length)return s.slice(-u);let h="",v=s;const g=v.indexOf(q);if(g>-1){for(let p=u-v.length;p>0;p--)h+=q;v=v.slice(0,g)+h+v.slice(g)}return v}function b(){if(l.value=t.mask!==void 0&&t.mask.length>0&&y(),l.value===!1){o=void 0,s="",i="";return}const u=$t[t.mask]===void 0?t.mask:$t[t.mask],h=typeof t.fillMask=="string"&&t.fillMask.length>0?t.fillMask.slice(0,1):"_",v=h.replace(Lt,"\\$&"),g=[],p=[],m=[];let M=t.reverseFillMask===!0,E="",P="";u.replace(xr,(w,d,F,te,ae)=>{if(te!==void 0){const Z=$e[te];m.push(Z),P=Z.negate,M===!0&&(p.push("(?:"+P+"+)?("+Z.pattern+"+)?(?:"+P+"+)?("+Z.pattern+"+)?"),M=!1),p.push("(?:"+P+"+)?("+Z.pattern+")?")}else if(F!==void 0)E="\\"+(F==="\\"?"":F),m.push(F),g.push("([^"+E+"]+)?"+E+"?");else{const Z=d!==void 0?d:ae;E=Z==="\\"?"\\\\\\\\":Z.replace(Lt,"\\\\$&"),m.push(Z),g.push("([^"+E+"]+)?"+E+"?")}});const G=new RegExp("^"+g.join("")+"("+(E===""?".":"[^"+E+"]")+"+)?$"),Q=p.length-1,c=p.map((w,d)=>d===0&&t.reverseFillMask===!0?new RegExp("^"+v+"*"+w):d===Q?new RegExp("^"+w+"("+(P===""?".":P)+"+)?"+(t.reverseFillMask===!0?"$":v+"*")):new RegExp("^"+w));a=m,o=w=>{const d=G.exec(w);d!==null&&(w=d.slice(1).join(""));const F=[],te=c.length;for(let ae=0,Z=w;ae<te;ae++){const Xe=c[ae].exec(Z);if(Xe===null)break;Z=Z.slice(Xe.shift().length),F.push(...Xe)}return F.length>0?F.join(""):w},s=m.map(w=>typeof w=="string"?w:q).join(""),i=s.split(q).join(h)}function A(u,h,v){const g=r.value,p=g.selectionEnd,m=g.value.length-p,M=O(u);h===!0&&b();const E=N(M),P=t.fillMask!==!1?D(E):E,G=f.value!==P;g.value!==P&&(g.value=P),G===!0&&(f.value=P),document.activeElement===g&&oe(()=>{if(P===i){const c=t.reverseFillMask===!0?i.length:0;g.setSelectionRange(c,c,"forward");return}if(v==="insertFromPaste"&&t.reverseFillMask!==!0){const c=p-1;B.right(g,c,c);return}if(["deleteContentBackward","deleteContentForward"].indexOf(v)>-1){const c=t.reverseFillMask===!0?p===0?P.length>E.length?1:0:Math.max(0,P.length-(P===i?0:Math.min(E.length,m)+1))+1:p;g.setSelectionRange(c,c,"forward");return}if(t.reverseFillMask===!0)if(G===!0){const c=Math.max(0,P.length-(P===i?0:Math.min(E.length,m+1)));c===1&&p===1?g.setSelectionRange(c,c,"forward"):B.rightReverse(g,c,c)}else{const c=P.length-m;g.setSelectionRange(c,c,"backward")}else if(G===!0){const c=Math.max(0,s.indexOf(q),Math.min(E.length,p)-1);B.right(g,c,c)}else{const c=p-1;B.right(g,c,c)}});const Q=t.unmaskedValue===!0?O(P):P;String(t.modelValue)!==Q&&n(Q,!0)}function K(u,h,v){const g=N(O(u.value));h=Math.max(0,s.indexOf(q),Math.min(g.length,h)),u.setSelectionRange(h,v,"forward")}const B={left(u,h,v,g){const p=s.slice(h-1).indexOf(q)===-1;let m=Math.max(0,h-1);for(;m>=0;m--)if(s[m]===q){h=m,p===!0&&h++;break}if(m<0&&s[h]!==void 0&&s[h]!==q)return B.right(u,0,0);h>=0&&u.setSelectionRange(h,g===!0?v:h,"backward")},right(u,h,v,g){const p=u.value.length;let m=Math.min(p,v+1);for(;m<=p;m++)if(s[m]===q){v=m;break}else s[m-1]===q&&(v=m);if(m>p&&s[v-1]!==void 0&&s[v-1]!==q)return B.left(u,p,p);u.setSelectionRange(g?h:v,v,"forward")},leftReverse(u,h,v,g){const p=k(u.value.length);let m=Math.max(0,h-1);for(;m>=0;m--)if(p[m-1]===q){h=m;break}else if(p[m]===q&&(h=m,m===0))break;if(m<0&&p[h]!==void 0&&p[h]!==q)return B.rightReverse(u,0,0);h>=0&&u.setSelectionRange(h,g===!0?v:h,"backward")},rightReverse(u,h,v,g){const p=u.value.length,m=k(p),M=m.slice(0,v+1).indexOf(q)===-1;let E=Math.min(p,v+1);for(;E<=p;E++)if(m[E-1]===q){v=E,v>0&&M===!0&&v--;break}if(E>p&&m[v-1]!==void 0&&m[v-1]!==q)return B.leftReverse(u,p,p);u.setSelectionRange(g===!0?h:v,v,"forward")}};function $(u){if(Wn(u)===!0)return;const h=r.value,v=h.selectionStart,g=h.selectionEnd;if(u.keyCode===37||u.keyCode===39){const p=B[(u.keyCode===39?"right":"left")+(t.reverseFillMask===!0?"Reverse":"")];u.preventDefault(),p(h,v,g,u.shiftKey)}else u.keyCode===8&&t.reverseFillMask!==!0&&v===g?B.left(h,v,g,!0):u.keyCode===46&&t.reverseFillMask===!0&&v===g&&B.rightReverse(h,v,g,!0)}function N(u){if(u==null||u==="")return"";if(t.reverseFillMask===!0)return T(u);const h=a;let v=0,g="";for(let p=0;p<h.length;p++){const m=u[v],M=h[p];if(typeof M=="string")g+=M,m===M&&v++;else if(m!==void 0&&M.regex.test(m))g+=M.transform!==void 0?M.transform(m):m,v++;else return g}return g}function T(u){const h=a,v=s.indexOf(q);let g=u.length-1,p="";for(let m=h.length-1;m>=0&&g>-1;m--){const M=h[m];let E=u[g];if(typeof M=="string")p=M+p,E===M&&g--;else if(E!==void 0&&M.regex.test(E))do p=(M.transform!==void 0?M.transform(E):E)+p,g--,E=u[g];while(v===m&&E!==void 0&&M.regex.test(E));else return p}return p}function O(u){return typeof u!="string"||o===void 0?typeof u=="number"?o(""+u):u:o(u)}function D(u){return i.length-u.length<=0?u:t.reverseFillMask===!0&&u.length>0?i.slice(0,-u.length)+u:u+i.slice(u.length)}return{innerValue:f,hasMask:l,moveCursorForPaste:K,updateMaskValue:A,onMaskedKeydown:$}}const Dr={name:String};function Rr(t){return _(()=>t.name||t.for)}function Mr(t,e){function n(){const r=t.modelValue;try{const s="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(r)===r&&("length"in r?Array.from(r):[r]).forEach(i=>{s.items.add(i)}),{files:s.files}}catch{return{files:void 0}}}return e===!0?_(()=>{if(t.type==="file")return n()}):_(n)}const Vr=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,Fr=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,Pr=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,Br=/[a-z0-9_ -]$/i;function Or(t){return function(n){if(n.type==="compositionend"||n.type==="change"){if(n.target.qComposing!==!0)return;n.target.qComposing=!1,t(n)}else n.type==="compositionupdate"&&n.target.qComposing!==!0&&typeof n.data=="string"&&(Gn.is.firefox===!0?Br.test(n.data)===!1:Vr.test(n.data)===!0||Fr.test(n.data)===!0||Pr.test(n.data)===!0)===!0&&(n.target.qComposing=!0)}}var be=yt({name:"QInput",inheritAttrs:!1,props:{..._r,...Ar,...Dr,modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...Cr,"paste","change"],setup(t,{emit:e,attrs:n}){const r={};let s=NaN,i,a,o,l;const f=L(null),y=Rr(t),{innerValue:S,hasMask:k,moveCursorForPaste:b,updateMaskValue:A,onMaskedKeydown:K}=Tr(t,e,M,f),B=Mr(t,!0),$=_(()=>ot(S.value)),N=Or(m),T=kr(),O=_(()=>t.type==="textarea"||t.autogrow===!0),D=_(()=>O.value===!0||["text","search","url","tel","password"].includes(t.type)),u=_(()=>{const d={...T.splitAttrs.listeners.value,onInput:m,onPaste:p,onChange:P,onBlur:G,onFocus:Mt};return d.onCompositionstart=d.onCompositionupdate=d.onCompositionend=N,k.value===!0&&(d.onKeydown=K),t.autogrow===!0&&(d.onAnimationend=E),d}),h=_(()=>{const d={tabindex:0,"data-autofocus":t.autofocus===!0||void 0,rows:t.type==="textarea"?6:void 0,"aria-label":t.label,name:y.value,...T.splitAttrs.attributes.value,id:T.targetUid.value,maxlength:t.maxlength,disabled:t.disable===!0,readonly:t.readonly===!0};return O.value===!1&&(d.type=t.type),t.autogrow===!0&&(d.rows=1),d});W(()=>t.type,()=>{f.value&&(f.value.value=t.modelValue)}),W(()=>t.modelValue,d=>{if(k.value===!0){if(a===!0&&(a=!1,String(d)===s))return;A(d)}else S.value!==d&&(S.value=d,t.type==="number"&&r.hasOwnProperty("value")===!0&&(i===!0?i=!1:delete r.value));t.autogrow===!0&&oe(E)}),W(()=>t.autogrow,d=>{d===!0?oe(E):f.value!==null&&n.rows>0&&(f.value.style.height="auto")}),W(()=>t.dense,()=>{t.autogrow===!0&&oe(E)});function v(){wt(()=>{const d=document.activeElement;f.value!==null&&f.value!==d&&(d===null||d.id!==T.targetUid.value)&&f.value.focus({preventScroll:!0})})}function g(){f.value!==null&&f.value.select()}function p(d){if(k.value===!0&&t.reverseFillMask!==!0){const F=d.target;b(F,F.selectionStart,F.selectionEnd)}e("paste",d)}function m(d){if(!d||!d.target)return;if(t.type==="file"){e("update:modelValue",d.target.files);return}const F=d.target.value;if(d.target.qComposing===!0){r.value=F;return}if(k.value===!0)A(F,!1,d.inputType);else if(M(F),D.value===!0&&d.target===document.activeElement){const{selectionStart:te,selectionEnd:ae}=d.target;te!==void 0&&ae!==void 0&&oe(()=>{d.target===document.activeElement&&F.indexOf(d.target.value)===0&&d.target.setSelectionRange(te,ae)})}t.autogrow===!0&&E()}function M(d,F){l=()=>{t.type!=="number"&&r.hasOwnProperty("value")===!0&&delete r.value,t.modelValue!==d&&s!==d&&(s=d,F===!0&&(a=!0),e("update:modelValue",d),oe(()=>{s===d&&(s=NaN)})),l=void 0},t.type==="number"&&(i=!0,r.value=d),t.debounce!==void 0?(clearTimeout(o),r.value=d,o=setTimeout(l,t.debounce)):l()}function E(){const d=f.value;if(d!==null){const F=d.parentNode.style,{overflow:te}=d.style;F.marginBottom=d.scrollHeight-1+"px",d.style.height="1px",d.style.overflow="hidden",d.style.height=d.scrollHeight+"px",d.style.overflow=te,F.marginBottom=""}}function P(d){N(d),clearTimeout(o),l!==void 0&&l(),e("change",d.target.value)}function G(d){d!==void 0&&Mt(d),clearTimeout(o),l!==void 0&&l(),i=!1,a=!1,delete r.value,t.type!=="file"&&setTimeout(()=>{f.value!==null&&(f.value.value=S.value!==void 0?S.value:"")})}function Q(){return r.hasOwnProperty("value")===!0?r.value:S.value!==void 0?S.value:""}Ge(()=>{G()}),bt(()=>{t.autogrow===!0&&E()}),Object.assign(T,{innerValue:S,fieldClass:_(()=>`q-${O.value===!0?"textarea":"input"}`+(t.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:_(()=>t.type!=="file"&&typeof t.shadowText=="string"&&t.shadowText.length>0),inputRef:f,emitValue:M,hasValue:$,floatingLabel:_(()=>$.value===!0||ot(t.displayValue)),getControl:()=>x(O.value===!0?"textarea":"input",{ref:f,class:["q-field__native q-placeholder",t.inputClass],style:t.inputStyle,...h.value,...u.value,...t.type!=="file"?{value:Q()}:B.value}),getShadowControl:()=>x("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(O.value===!0?"":" text-no-wrap")},[x("span",{class:"invisible"},Q()),x("span",t.shadowText)])});const c=Ir(T),w=fe();return Object.assign(w.proxy,{focus:v,select:g,getNativeElement:()=>f.value}),c}}),Nr=yt({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validation-success","validation-error"],setup(t,{slots:e,emit:n}){const r=fe(),s=L(null);let i=0;const a=[];function o(b){const A=[],K=typeof b=="boolean"?b:t.noErrorFocus!==!0,B=++i,$=(N,T)=>{n("validation-"+(N===!0?"success":"error"),T)};for(let N=0;N<a.length;N++){const T=a[N],O=T.validate();if(typeof O.then=="function")A.push(O.then(D=>({valid:D,comp:T}),D=>({valid:!1,comp:T,err:D})));else if(O!==!0){if(t.greedy===!1)return $(!1,T),K===!0&&typeof T.focus=="function"&&T.focus(),Promise.resolve(!1);A.push({valid:!1,comp:T})}}return A.length===0?($(!0),Promise.resolve(!0)):Promise.all(A).then(N=>{const T=N.filter(h=>h.valid!==!0);if(T.length===0)return B===i&&$(!0),!0;const{valid:O,comp:D,err:u}=T[0];return B===i&&(u!==void 0&&console.error(u),$(!1,D),K===!0&&O!==!0&&typeof D.focus=="function"&&D.focus()),!1})}function l(){i++,a.forEach(b=>{typeof b.resetValidation=="function"&&b.resetValidation()})}function f(b){b!==void 0&&st(b);const A=i+1;o().then(K=>{A===i&&K===!0&&(t.onSubmit!==void 0?n("submit",b):b!==void 0&&b.target!==void 0&&typeof b.target.submit=="function"&&b.target.submit())})}function y(b){b!==void 0&&st(b),n("reset"),oe(()=>{l(),t.autofocus===!0&&t.noResetFocus!==!0&&S()})}function S(){wt(()=>{if(s.value===null)return;const b=s.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(s.value.querySelectorAll("[tabindex]"),A=>A.tabIndex>-1);b!=null&&b.focus({preventScroll:!0})})}Zn(un,{bindComponent(b){a.push(b)},unbindComponent(b){const A=a.indexOf(b);A>-1&&a.splice(A,1)}});let k=!1;return cn(()=>{k=!0}),dn(()=>{k===!0&&t.autofocus===!0&&S()}),bt(()=>{t.autofocus===!0&&S()}),Object.assign(r.proxy,{validate:o,resetValidation:l,submit:f,reset:y,focus:S,getValidationComponents:()=>a}),()=>x("form",{class:"q-form",ref:s,onSubmit:f,onReset:y},we(e.default))}});function $r(){return ln(Yn)}/**
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
 */const gn=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Lr=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],a=t[n++],o=t[n++],l=((s&7)<<18|(i&63)<<12|(a&63)<<6|o&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],a=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},qr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],a=s+1<t.length,o=a?t[s+1]:0,l=s+2<t.length,f=l?t[s+2]:0,y=i>>2,S=(i&3)<<4|o>>4;let k=(o&15)<<2|f>>6,b=f&63;l||(b=64,a||(k=64)),r.push(n[y],n[S],n[k],n[b])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(gn(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Lr(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],o=s<t.length?n[t.charAt(s)]:0;++s;const f=s<t.length?n[t.charAt(s)]:64;++s;const S=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||o==null||f==null||S==null)throw Error();const k=i<<2|o>>4;if(r.push(k),f!==64){const b=o<<4&240|f>>2;if(r.push(b),S!==64){const A=f<<6&192|S;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Ur=function(t){const e=gn(t);return qr.encodeByteArray(e,!0)},pn=function(t){return Ur(t).replace(/\./g,"")};/**
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
 */class jr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}function zr(){return typeof indexedDB=="object"}function Hr(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const Kr="FirebaseError";class ve extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Kr,Object.setPrototypeOf(this,ve.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,vn.prototype.create)}}class vn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?Wr(i,r):"Error",o=`${this.serviceName}: ${a} (${s}).`;return new ve(s,o,r)}}function Wr(t,e){return t.replace(Gr,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Gr=/\{\$([^}]+)}/g;function lt(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],a=e[s];if(qt(i)&&qt(a)){if(!lt(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function qt(t){return t!==null&&typeof t=="object"}/**
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
 */function ke(t){return t&&t._delegate?t._delegate:t}class Ie{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ce="[DEFAULT]";/**
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
 */class Zr{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new jr;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Xr(e))try{this.getOrInitializeService({instanceIdentifier:ce})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=ce){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ce){return this.instances.has(e)}getOptions(e=ce){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,a]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(i);r===o&&a.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Yr(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ce){return this.component?this.component.multipleInstances?e:ce:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Yr(t){return t===ce?void 0:t}function Xr(t){return t.instantiationMode==="EAGER"}/**
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
 */class Qr{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Zr(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var R;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(R||(R={}));const Jr={debug:R.DEBUG,verbose:R.VERBOSE,info:R.INFO,warn:R.WARN,error:R.ERROR,silent:R.SILENT},es=R.INFO,ts={[R.DEBUG]:"log",[R.VERBOSE]:"log",[R.INFO]:"info",[R.WARN]:"warn",[R.ERROR]:"error"},ns=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=ts[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class yn{constructor(e){this.name=e,this._logLevel=es,this._logHandler=ns,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in R))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Jr[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,R.DEBUG,...e),this._logHandler(this,R.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,R.VERBOSE,...e),this._logHandler(this,R.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,R.INFO,...e),this._logHandler(this,R.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,R.WARN,...e),this._logHandler(this,R.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,R.ERROR,...e),this._logHandler(this,R.ERROR,...e)}}const rs=(t,e)=>e.some(n=>t instanceof n);let Ut,jt;function ss(){return Ut||(Ut=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function is(){return jt||(jt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const bn=new WeakMap,ut=new WeakMap,wn=new WeakMap,Je=new WeakMap,Et=new WeakMap;function as(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",a)},i=()=>{n(le(t.result)),s()},a=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&bn.set(n,t)}).catch(()=>{}),Et.set(e,t),e}function os(t){if(ut.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",a),t.removeEventListener("abort",a)},i=()=>{n(),s()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",a),t.addEventListener("abort",a)});ut.set(t,e)}let ct={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ut.get(t);if(e==="objectStoreNames")return t.objectStoreNames||wn.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return le(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ls(t){ct=t(ct)}function us(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(et(this),e,...n);return wn.set(r,e.sort?e.sort():[e]),le(r)}:is().includes(t)?function(...e){return t.apply(et(this),e),le(bn.get(this))}:function(...e){return le(t.apply(et(this),e))}}function cs(t){return typeof t=="function"?us(t):(t instanceof IDBTransaction&&os(t),rs(t,ss())?new Proxy(t,ct):t)}function le(t){if(t instanceof IDBRequest)return as(t);if(Je.has(t))return Je.get(t);const e=cs(t);return e!==t&&(Je.set(t,e),Et.set(e,t)),e}const et=t=>Et.get(t);function ds(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(t,e),o=le(a);return r&&a.addEventListener("upgradeneeded",l=>{r(le(a.result),l.oldVersion,l.newVersion,le(a.transaction))}),n&&a.addEventListener("blocked",()=>n()),o.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",()=>s())}).catch(()=>{}),o}const hs=["get","getKey","getAll","getAllKeys","count"],fs=["put","add","delete","clear"],tt=new Map;function zt(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(tt.get(e))return tt.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=fs.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||hs.includes(n)))return;const i=async function(a,...o){const l=this.transaction(a,s?"readwrite":"readonly");let f=l.store;return r&&(f=f.index(o.shift())),(await Promise.all([f[n](...o),s&&l.done]))[0]};return tt.set(e,i),i}ls(t=>({...t,get:(e,n,r)=>zt(e,n)||t.get(e,n,r),has:(e,n)=>!!zt(e,n)||t.has(e,n)}));/**
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
 */class ms{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(gs(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function gs(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const dt="@firebase/app",Ht="0.7.30";/**
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
 */const de=new yn("@firebase/app"),ps="@firebase/app-compat",vs="@firebase/analytics-compat",ys="@firebase/analytics",bs="@firebase/app-check-compat",ws="@firebase/app-check",Es="@firebase/auth",Ss="@firebase/auth-compat",_s="@firebase/database",Cs="@firebase/database-compat",ks="@firebase/functions",Is="@firebase/functions-compat",xs="@firebase/installations",As="@firebase/installations-compat",Ts="@firebase/messaging",Ds="@firebase/messaging-compat",Rs="@firebase/performance",Ms="@firebase/performance-compat",Vs="@firebase/remote-config",Fs="@firebase/remote-config-compat",Ps="@firebase/storage",Bs="@firebase/storage-compat",Os="@firebase/firestore",Ns="@firebase/firestore-compat",$s="firebase",Ls="9.9.2";/**
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
 */const En="[DEFAULT]",qs={[dt]:"fire-core",[ps]:"fire-core-compat",[ys]:"fire-analytics",[vs]:"fire-analytics-compat",[ws]:"fire-app-check",[bs]:"fire-app-check-compat",[Es]:"fire-auth",[Ss]:"fire-auth-compat",[_s]:"fire-rtdb",[Cs]:"fire-rtdb-compat",[ks]:"fire-fn",[Is]:"fire-fn-compat",[xs]:"fire-iid",[As]:"fire-iid-compat",[Ts]:"fire-fcm",[Ds]:"fire-fcm-compat",[Rs]:"fire-perf",[Ms]:"fire-perf-compat",[Vs]:"fire-rc",[Fs]:"fire-rc-compat",[Ps]:"fire-gcs",[Bs]:"fire-gcs-compat",[Os]:"fire-fst",[Ns]:"fire-fst-compat","fire-js":"fire-js",[$s]:"fire-js-all"};/**
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
 */const Le=new Map,ht=new Map;function Us(t,e){try{t.container.addComponent(e)}catch(n){de.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function qe(t){const e=t.name;if(ht.has(e))return de.debug(`There were multiple attempts to register component ${e}.`),!1;ht.set(e,t);for(const n of Le.values())Us(n,t);return!0}function js(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const zs={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},he=new vn("app","Firebase",zs);/**
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
 */class Hs{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ie("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw he.create("app-deleted",{appName:this._name})}}/**
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
 */const Ks=Ls;function Ws(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:En,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw he.create("bad-app-name",{appName:String(r)});const s=Le.get(r);if(s){if(lt(t,s.options)&&lt(n,s.config))return s;throw he.create("duplicate-app",{appName:r})}const i=new Qr(r);for(const o of ht.values())i.addComponent(o);const a=new Hs(t,n,i);return Le.set(r,a),a}function Gs(t=En){const e=Le.get(t);if(!e)throw he.create("no-app",{appName:t});return e}function me(t,e,n){var r;let s=(r=qs[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const o=[`Unable to register library "${s}" with version "${e}":`];i&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&o.push("and"),a&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),de.warn(o.join(" "));return}qe(new Ie(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Zs="firebase-heartbeat-database",Ys=1,xe="firebase-heartbeat-store";let nt=null;function Sn(){return nt||(nt=ds(Zs,Ys,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(xe)}}}).catch(t=>{throw he.create("idb-open",{originalErrorMessage:t.message})})),nt}async function Xs(t){var e;try{return(await Sn()).transaction(xe).objectStore(xe).get(_n(t))}catch(n){if(n instanceof ve)de.warn(n.message);else{const r=he.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});de.warn(r.message)}}}async function Kt(t,e){var n;try{const s=(await Sn()).transaction(xe,"readwrite");return await s.objectStore(xe).put(e,_n(t)),s.done}catch(r){if(r instanceof ve)de.warn(r.message);else{const s=he.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});de.warn(s.message)}}}function _n(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Qs=1024,Js=30*24*60*60*1e3;class ei{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ni(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Wt();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=Js}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Wt(),{heartbeatsToSend:n,unsentEntries:r}=ti(this._heartbeatsCache.heartbeats),s=pn(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Wt(){return new Date().toISOString().substring(0,10)}function ti(t,e=Qs){const n=[];let r=t.slice();for(const s of t){const i=n.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Gt(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Gt(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ni{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return zr()?Hr().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Xs(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Kt(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Kt(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Gt(t){return pn(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function ri(t){qe(new Ie("platform-logger",e=>new ms(e),"PRIVATE")),qe(new Ie("heartbeat",e=>new ei(e),"PRIVATE")),me(dt,Ht,t),me(dt,Ht,"esm2017"),me("fire-js","")}ri("");/**
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
 */class Y{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Y.UNAUTHENTICATED=new Y(null),Y.GOOGLE_CREDENTIALS=new Y("google-credentials-uid"),Y.FIRST_PARTY=new Y("first-party-uid"),Y.MOCK_USER=new Y("mock-user");/**
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
 */let ye="9.9.2";/**
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
 */const ge=new yn("@firebase/firestore");function Ue(t,...e){if(ge.logLevel<=R.DEBUG){const n=e.map(St);ge.debug(`Firestore (${ye}): ${t}`,...n)}}function Cn(t,...e){if(ge.logLevel<=R.ERROR){const n=e.map(St);ge.error(`Firestore (${ye}): ${t}`,...n)}}function si(t,...e){if(ge.logLevel<=R.WARN){const n=e.map(St);ge.warn(`Firestore (${ye}): ${t}`,...n)}}function St(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
*/var e}/**
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
 */function U(t="Unexpected state"){const e=`FIRESTORE (${ye}) INTERNAL ASSERTION FAILED: `+t;throw Cn(e),new Error(e)}function Ae(t,e){t||U()}function ii(t,e){return t}/**
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
 */const Zt="ok",ai="cancelled",Ee="unknown",V="invalid-argument",oi="deadline-exceeded",li="not-found",ui="permission-denied",ft="unauthenticated",ci="resource-exhausted",pe="failed-precondition",di="aborted",hi="out-of-range",fi="unimplemented",mi="internal",gi="unavailable";class C extends ve{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class pi{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class vi{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Y.UNAUTHENTICATED))}shutdown(){}}class yi{constructor(e){this.auth=null,e.onInit(n=>{this.auth=n})}getToken(){return this.auth?this.auth.getToken().then(e=>e?(Ae(typeof e.accessToken=="string"),new pi(e.accessToken,new Y(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}class bi{constructor(e,n,r){this.type="FirstParty",this.user=Y.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const s=e.auth.getAuthHeaderValueForFirstParty([]);s&&this.headers.set("Authorization",s),r&&this.headers.set("X-Goog-Iam-Authorization-Token",r)}}class wi{constructor(e,n,r){this.t=e,this.i=n,this.o=r}getToken(){return Promise.resolve(new bi(this.t,this.i,this.o))}start(e,n){e.enqueueRetryable(()=>n(Y.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ei{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Si{constructor(e){this.u=e,this.appCheck=null,e.onInit(n=>{this.appCheck=n})}getToken(){return this.appCheck?this.appCheck.getToken().then(e=>e?(Ae(typeof e.token=="string"),new Ei(e.token)):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}/**
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
 */class _i{constructor(e,n,r,s,i,a,o,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=o,this.useFetchStreams=l}}class Te{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Te("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Te&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */class De{constructor(e,n,r){n===void 0?n=0:n>e.length&&U(),r===void 0?r=e.length-n:r>e.length-n&&U(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return De.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof De?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),a=n.get(s);if(i<a)return-1;if(i>a)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class H extends De{construct(e,n,r){return new H(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new C(V,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new H(n)}static emptyPath(){return new H([])}}const Ci=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class X extends De{construct(e,n,r){return new X(e,n,r)}static isValidIdentifier(e){return Ci.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),X.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new X(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new C(V,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;s<e.length;){const o=e[s];if(o==="\\"){if(s+1===e.length)throw new C(V,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new C(V,"Path has invalid escape sequence: "+e);r+=l,s+=2}else o==="`"?(a=!a,s++):o!=="."||a?(r+=o,s++):(i(),s++)}if(i(),a)throw new C(V,"Unterminated ` in path: "+e);return new X(n)}static emptyPath(){return new X([])}}/**
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
 */class ee{constructor(e){this.path=e}static fromPath(e){return new ee(H.fromString(e))}static fromName(e){return new ee(H.fromString(e).popFirst(5))}static empty(){return new ee(H.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&H.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return H.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ee(new H(e.slice()))}}/**
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
 */function kn(t,e,n){if(!n)throw new C(V,`Function ${t}() cannot be called with an empty ${e}.`)}function Yt(t){if(!ee.isDocumentKey(t))throw new C(V,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Xt(t){if(ee.isDocumentKey(t))throw new C(V,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function _t(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":U()}function ki(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new C(V,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=_t(t);throw new C(V,`Expected type '${e.name}', but it was: ${n}`)}}return t}function je(t){return t===0&&1/t==-1/0}/**
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
 */const Ii={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
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
 */var Qt,I;function Jt(t){if(t===void 0)return Cn("RPC_ERROR","HTTP error has no status"),Ee;switch(t){case 200:return Zt;case 400:return pe;case 401:return ft;case 403:return ui;case 404:return li;case 409:return di;case 416:return hi;case 429:return ci;case 499:return ai;case 500:return Ee;case 501:return fi;case 503:return gi;case 504:return oi;default:return t>=200&&t<300?Zt:t>=400&&t<500?pe:t>=500&&t<600?mi:Ee}}/**
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
 */(I=Qt||(Qt={}))[I.OK=0]="OK",I[I.CANCELLED=1]="CANCELLED",I[I.UNKNOWN=2]="UNKNOWN",I[I.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",I[I.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",I[I.NOT_FOUND=5]="NOT_FOUND",I[I.ALREADY_EXISTS=6]="ALREADY_EXISTS",I[I.PERMISSION_DENIED=7]="PERMISSION_DENIED",I[I.UNAUTHENTICATED=16]="UNAUTHENTICATED",I[I.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",I[I.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",I[I.ABORTED=10]="ABORTED",I[I.OUT_OF_RANGE=11]="OUT_OF_RANGE",I[I.UNIMPLEMENTED=12]="UNIMPLEMENTED",I[I.INTERNAL=13]="INTERNAL",I[I.UNAVAILABLE=14]="UNAVAILABLE",I[I.DATA_LOSS=15]="DATA_LOSS";class xi extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.h=n+"://"+e.host,this.l="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}m(e,n,r,s,i){const a=this.p(e,n);Ue("RestConnection","Sending: ",a,r);const o={};return this.g(o,s,i),this.v(e,a,o,r).then(l=>(Ue("RestConnection","Received: ",l),l),l=>{throw si("RestConnection",`${e} failed with error: `,l,"url: ",a,"request:",r),l})}T(e,n,r,s,i,a){return this.m(e,n,r,s,i)}g(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+ye,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}p(e,n){const r=Ii[e];return`${this.h}/v1/${n}:${r}`}}{constructor(e,n){super(e),this.I=n}A(e,n){throw new Error("Not supported by FetchConnection")}async v(e,n,r,s){const i=JSON.stringify(s);let a;try{a=await this.I(n,{method:"POST",headers:r,body:i})}catch(o){throw new C(Jt(o.status),"Request failed with error: "+o.statusText)}if(!a.ok)throw new C(Jt(a.status),"Request failed with error: "+a.statusText);return a.json()}}/**
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
 */function Ai(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Ti{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=Ai(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Re(t,e){return t<e?-1:t>e?1:0}function In(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class ne{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new C(V,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new C(V,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new C(V,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new C(V,"Timestamp seconds out of range: "+e)}static now(){return ne.fromMillis(Date.now())}static fromDate(e){return ne.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ne(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Re(this.nanoseconds,e.nanoseconds):Re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */function en(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ct(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}/**
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
 */class ze{constructor(e,n){this.comparator=e,this.root=n||z.EMPTY}insert(e,n){return new ze(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,z.BLACK,null,null))}remove(e){return new ze(this.comparator,this.root.remove(e,this.comparator).copy(null,null,z.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ne(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ne(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ne(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ne(this.root,e,this.comparator,!0)}}class Ne{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class z{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r!=null?r:z.RED,this.left=s!=null?s:z.EMPTY,this.right=i!=null?i:z.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new z(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,s!=null?s:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return z.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return z.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,z.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,z.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw U();const e=this.left.check();if(e!==this.right.check())throw U();return e+(this.isRed()?0:1)}}z.EMPTY=null,z.RED=!0,z.BLACK=!1;z.EMPTY=new class{constructor(){this.size=0}get key(){throw U()}get value(){throw U()}get color(){throw U()}get left(){throw U()}get right(){throw U()}copy(t,e,n,r,s){return this}insert(t,e,n){return new z(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class He{constructor(e){this.comparator=e,this.data=new ze(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new tn(this.data.getIterator())}getIteratorFrom(e){return new tn(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof He)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new He(this.comparator);return n.data=e,n}}class tn{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Me{constructor(e){this.fields=e,e.sort(X.comparator)}static empty(){return new Me([])}unionWith(e){let n=new He(X.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Me(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return In(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class ie{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new ie(n)}static fromUint8Array(e){const n=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new ie(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ie.EMPTY_BYTE_STRING=new ie("");const Di=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function mt(t){if(Ae(!!t),typeof t=="string"){let e=0;const n=Di.exec(t);if(Ae(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:J(t.seconds),nanos:J(t.nanos)}}function J(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function nn(t){return typeof t=="string"?ie.fromBase64String(t):ie.fromUint8Array(t)}/**
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
 */function Ri(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function rn(t){const e=mt(t.mapValue.fields.__local_write_time__.timestampValue);return new ne(e.seconds,e.nanos)}function sn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ri(t)?4:function(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}(t)?9007199254740991:10:U()}function gt(t,e){if(t===e)return!0;const n=sn(t);if(n!==sn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return rn(t).isEqual(rn(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=mt(r.timestampValue),a=mt(s.timestampValue);return i.seconds===a.seconds&&i.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,s){return nn(r.bytesValue).isEqual(nn(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,s){return J(r.geoPointValue.latitude)===J(s.geoPointValue.latitude)&&J(r.geoPointValue.longitude)===J(s.geoPointValue.longitude)}(t,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return J(r.integerValue)===J(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=J(r.doubleValue),a=J(s.doubleValue);return i===a?je(i)===je(a):isNaN(i)&&isNaN(a)}return!1}(t,e);case 9:return In(t.arrayValue.values||[],e.arrayValue.values||[],gt);case 10:return function(r,s){const i=r.mapValue.fields||{},a=s.mapValue.fields||{};if(en(i)!==en(a))return!1;for(const o in i)if(i.hasOwnProperty(o)&&(a[o]===void 0||!gt(i[o],a[o])))return!1;return!0}(t,e);default:return U()}}function rt(t){return!!t&&"mapValue"in t}function Se(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ct(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Se(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Se(t.arrayValue.values[n]);return e}return Object.assign({},t)}class Ke{constructor(e){this.value=e}static empty(){return new Ke({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!rt(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Se(n)}setAll(e){let n=X.emptyPath(),r={},s=[];e.forEach((a,o)=>{if(!n.isImmediateParentOf(o)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=o.popLast()}a?r[o.lastSegment()]=Se(a):s.push(o.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());rt(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return gt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];rt(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Ct(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ke(Se(this.value))}}/**
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
 */class Mi{constructor(e,n=null,r=[],s=[],i=null,a="F",o=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=o,this.endAt=l,this.$=null,this.F=null,this.startAt,this.endAt}}/**
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
 */function Vi(t,e){return function(n){return typeof n=="number"&&Number.isInteger(n)&&!je(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}(e)?function(n){return{integerValue:""+n}}(e):function(n,r){if(n.S){if(isNaN(r))return{doubleValue:"NaN"};if(r===1/0)return{doubleValue:"Infinity"};if(r===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:je(r)?"-0":r}}(t,e)}/**
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
 */class Ze{constructor(){this._=void 0}}class xn extends Ze{}class Fi extends Ze{constructor(e){super(),this.elements=e}}class Pi extends Ze{constructor(e){super(),this.elements=e}}class Bi extends Ze{constructor(e,n){super(),this.q=e,this.O=n}}/**
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
 */class Oi{constructor(e,n){this.field=e,this.transform=n}}class _e{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new _e}static exists(e){return new _e(void 0,e)}static updateTime(e){return new _e(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}class Ye{}class An extends Ye{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Tn extends Ye{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}class Ni extends Ye{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class $i extends Ye{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}class Li{constructor(e,n){this.databaseId=e,this.S=n}}function pt(t,e){return t.S?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function qi(t,e){return t.S?e.toBase64():e.toUint8Array()}function Ui(t,e){return pt(t,e.toTimestamp())}function Dn(t,e){return function(n){return new H(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function vt(t,e){return Dn(t.databaseId,e.path)}function ji(t){return new H(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function an(t,e,n){return{name:vt(t,e),fields:n.value.mapValue.fields}}function zi(t,e){let n;if(e instanceof An)n={update:an(t,e.key,e.value)};else if(e instanceof Ni)n={delete:vt(t,e.key)};else if(e instanceof Tn)n={update:an(t,e.key,e.data),updateMask:Hi(e.fieldMask)};else{if(!(e instanceof $i))return U();n={verify:vt(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,i){const a=i.transform;if(a instanceof xn)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Fi)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Pi)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Bi)return{fieldPath:i.field.canonicalString(),increment:a.O};throw U()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:Ui(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:U()}(t,e.precondition)),n}function Hi(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}/**
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
 */function kt(t){return new Li(t,!0)}/**
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
 */class Ki extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.H=r,this.q=s,this.J=!1}X(){if(this.J)throw new C(pe,"The client has already been terminated.")}m(e,n,r){return this.X(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.H.m(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===ft&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new C(Ee,s.toString())})}T(e,n,r,s){return this.X(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.H.T(e,n,r,i,a,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===ft&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new C(Ee,i.toString())})}terminate(){this.J=!0}}async function Wi(t,e){const n=ii(t),r=ji(n.q)+"/documents",s={writes:e.map(i=>zi(n.q,i))};await n.m("Commit",r,s)}/**
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
 */const Ce=new Map;function Gi(t){if(t._terminated)throw new C(pe,"The client has already been terminated.");if(!Ce.has(t)){Ue("ComponentProvider","Initializing Datastore");const i=function(l){return new xi(l,fetch.bind(null))}((e=t._databaseId,n=t.app.options.appId||"",r=t._persistenceKey,s=t._freezeSettings(),new _i(e,n,r,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,s.useFetchStreams))),a=kt(t._databaseId),o=function(l,f,y,S){return new Ki(l,f,y,S)}(t._authCredentials,t._appCheckCredentials,i,a);Ce.set(t,o)}var e,n,r,s;/**
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
*/return Ce.get(t)}class on{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new C(V,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new C(V,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(r,s,i,a){if(s===!0&&a===!0)throw new C(V,`${r} and ${i} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class It{constructor(e,n,r){this._authCredentials=n,this._appCheckCredentials=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new on({}),this._settingsFrozen=!1,e instanceof Te?this._databaseId=e:(this._app=e,this._databaseId=function(s){if(!Object.prototype.hasOwnProperty.apply(s.options,["projectId"]))throw new C(V,'"projectId" not provided in firebase.initializeApp.');return new Te(s.options.projectId)}(e))}get app(){if(!this._app)throw new C(pe,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new C(pe,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new on(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new vi;switch(n.type){case"gapi":const r=n.client;return Ae(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new wi(r,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new C(V,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Ce.get(e);n&&(Ue("ComponentProvider","Removing Datastore"),Ce.delete(e),n.terminate())}(this),Promise.resolve()}}function Zi(t=Gs()){return js(t,"firestore/lite").getImmediate()}/**
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
 */class re{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new se(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new re(this.firestore,e,this._key)}}class xt{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new xt(this.firestore,e,this._query)}}class se extends xt{constructor(e,n,r){super(e,n,new Mi(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new re(this.firestore,null,new ee(e))}withConverter(e){return new se(this.firestore,e,this._path)}}function Yi(t,e,...n){if(t=ke(t),kn("collection","path",e),t instanceof It){const r=H.fromString(e,...n);return Xt(r),new se(t,null,r)}{if(!(t instanceof re||t instanceof se))throw new C(V,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(H.fromString(e,...n));return Xt(r),new se(t.firestore,null,r)}}function Xi(t,e,...n){if(t=ke(t),arguments.length===1&&(e=Ti.R()),kn("doc","path",e),t instanceof It){const r=H.fromString(e,...n);return Yt(r),new re(t,null,new ee(r))}{if(!(t instanceof re||t instanceof se))throw new C(V,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(H.fromString(e,...n));return Yt(r),new re(t.firestore,t instanceof se?t.converter:null,new ee(r))}}/**
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
 */class Rn{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new C(V,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new X(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Ve{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ve(ie.fromBase64String(e))}catch(n){throw new C(V,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ve(ie.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class At{constructor(e){this._methodName=e}}/**
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
 */class Mn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new C(V,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new C(V,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Re(this._lat,e._lat)||Re(this._long,e._long)}}/**
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
 */const Qi=/^__.*__$/;class Ji{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Tn(e,this.data,this.fieldMask,n,this.fieldTransforms):new An(e,this.data,n,this.fieldTransforms)}}function Vn(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw U()}}class Tt{constructor(e,n,r,s,i,a){this.settings=e,this.databaseId=n,this.q=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Z(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get tt(){return this.settings.tt}et(e){return new Tt(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.q,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}nt(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.et({path:r,rt:!1});return s.st(e),s}it(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.et({path:r,rt:!1});return s.Z(),s}ot(e){return this.et({path:void 0,rt:!0})}ut(e){return We(e,this.settings.methodName,this.settings.ct||!1,this.path,this.settings.at)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Z(){if(this.path)for(let e=0;e<this.path.length;e++)this.st(this.path.get(e))}st(e){if(e.length===0)throw this.ut("Document fields must not be empty");if(Vn(this.tt)&&Qi.test(e))throw this.ut('Document fields cannot begin and end with "__"')}}class ea{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.q=r||kt(e)}ht(e,n,r,s=!1){return new Tt({tt:e,methodName:n,at:r,path:X.emptyPath(),rt:!1,ct:s},this.databaseId,this.q,this.ignoreUndefinedProperties)}}function ta(t){const e=t._freezeSettings(),n=kt(t._databaseId);return new ea(t._databaseId,!!e.ignoreUndefinedProperties,n)}function na(t,e,n,r,s,i={}){const a=t.ht(i.merge||i.mergeFields?2:0,e,n,s);On("Data must be an object, but it was:",a,r);const o=Pn(r,a);let l,f;if(i.merge)l=new Me(a.fieldMask),f=a.fieldTransforms;else if(i.mergeFields){const y=[];for(const S of i.mergeFields){const k=ra(e,S,n);if(!a.contains(k))throw new C(V,`Field '${k}' is specified in your field mask but missing from your input data.`);aa(y,k)||y.push(k)}l=new Me(y),f=a.fieldTransforms.filter(S=>l.covers(S.field))}else l=null,f=a.fieldTransforms;return new Ji(new Ke(o),l,f)}class Dt extends At{_toFieldTransform(e){return new Oi(e.path,new xn)}isEqual(e){return e instanceof Dt}}function Fn(t,e){if(Bn(t=ke(t)))return On("Unsupported field value:",e,t),Pn(t,e);if(t instanceof At)return function(n,r){if(!Vn(r.tt))throw r.ut(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ut(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.rt&&e.tt!==4)throw e.ut("Nested arrays are not supported");return function(n,r){const s=[];let i=0;for(const a of n){let o=Fn(a,r.ot(i));o==null&&(o={nullValue:"NULL_VALUE"}),s.push(o),i++}return{arrayValue:{values:s}}}(t,e)}return function(n,r){if((n=ke(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Vi(r.q,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=ne.fromDate(n);return{timestampValue:pt(r.q,s)}}if(n instanceof ne){const s=new ne(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:pt(r.q,s)}}if(n instanceof Mn)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Ve)return{bytesValue:qi(r.q,n._byteString)};if(n instanceof re){const s=r.databaseId,i=n.firestore._databaseId;if(!i.isEqual(s))throw r.ut(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Dn(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ut(`Unsupported field value: ${_t(n)}`)}(t,e)}function Pn(t,e){const n={};return function(r){for(const s in r)if(Object.prototype.hasOwnProperty.call(r,s))return!1;return!0}(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ct(t,(r,s)=>{const i=Fn(s,e.nt(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Bn(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ne||t instanceof Mn||t instanceof Ve||t instanceof re||t instanceof At)}function On(t,e,n){if(!Bn(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=_t(n);throw r==="an object"?e.ut(t+" a custom object"):e.ut(t+" "+r)}}function ra(t,e,n){if((e=ke(e))instanceof Rn)return e._internalPath;if(typeof e=="string")return ia(t,e);throw We("Field path arguments must be of type string or ",t,!1,void 0,n)}const sa=new RegExp("[~\\*/\\[\\]]");function ia(t,e,n){if(e.search(sa)>=0)throw We(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Rn(...e.split("."))._internalPath}catch{throw We(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function We(t,e,n,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let o=`Function ${e}() called with invalid data`;n&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(i||a)&&(l+=" (found",i&&(l+=` in field ${r}`),a&&(l+=` in document ${s}`),l+=")"),new C(V,o+t+l)}function aa(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */function oa(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}function la(t,e){const n=Xi(t=ki(t,se)),r=oa(t.converter,e),s=na(ta(t.firestore),"addDoc",n._key,r,n.converter!==null,{});return Wi(Gi(t.firestore),[s.toMutation(n._key,_e.exists(!1))]).then(()=>n)}function ua(){return new Dt("serverTimestamp")}(function(t){ye=t})(`${Ks}_lite`),qe(new Ie("firestore/lite",(t,{options:e})=>{const n=t.getProvider("app").getImmediate(),r=new It(n,new yi(t.getProvider("auth-internal")),new Si(t.getProvider("app-check-internal")));return e&&r._setSettings(e),r},"PUBLIC")),me("firestore-lite","3.4.14",""),me("firestore-lite","3.4.14","esm2017");var ca="firebase",da="9.9.2";/**
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
 */me(ca,da,"app");const ha={apiKey:"AIzaSyB_jnHj8V9kFNfI6VdsfmxyWedh5Nm2c5I",authDomain:"portfolio-3-b67c8.firebaseapp.com",projectId:"portfolio-3-b67c8",storageBucket:"portfolio-3-b67c8.appspot.com",messagingSenderId:"296130979049",appId:"1:296130979049:web:3bc979ed03dd532f0f3c78"},fa=Ws(ha),ma=Zi(fa),ga={addMessage:async t=>await la(Yi(ma,"messages"),Object.assign({dateAdded:ua()},t))};const pa={class:"layout row justify-center",style:{height:"100vh"}},va={class:"row col justify-center"},ya={__name:"ContactView",setup(t){const e=$r(),n=L(null),r=L(null),s=L(null),i=L(null),a=L(null),o=sr(async()=>{try{await ga.addMessage({name:n.value,company:r.value,email:s.value,phoneNum:i.value,message:a.value}),e.notify({message:"Message sent",color:"secondary",textColor:"white",timeout:2e3})}catch{e.notify({message:"Message could not be sent",color:"warning",textColor:"black",timeout:2e3})}},5e3);return(l,f)=>(Xn(),Qn("main",pa,[ue(Nr,{onSubmit:er(tr(o),["prevent"]),class:"col row content-center q-col-gutter-lg form"},{default:Jn(()=>[ue(be,{outlined:"",modelValue:n.value,"onUpdate:modelValue":f[0]||(f[0]=y=>n.value=y),label:"Name *","label-color":"dark","lazy-rules":"","no-error-icon":"",rules:[y=>!!y||"What is your name?"],class:"col-12 col-sm-6",maxlength:"1000"},null,8,["modelValue","rules"]),ue(be,{outlined:"",modelValue:r.value,"onUpdate:modelValue":f[1]||(f[1]=y=>r.value=y),label:"Company *","label-color":"dark","lazy-rules":"","no-error-icon":"",rules:[y=>!!y||"What company do you represent?"],class:"col-12 col-sm-6",maxlength:"100"},null,8,["modelValue","rules"]),ue(be,{outlined:"",modelValue:s.value,"onUpdate:modelValue":f[2]||(f[2]=y=>s.value=y),type:"email",label:"Email *","label-color":"dark","lazy-rules":"","no-error-icon":"",rules:[y=>!!y||"What is your email address?",y=>y.includes("@")||"Please enter a valid email address"],class:"col-12 col-sm-6",maxlength:"50"},null,8,["modelValue","rules"]),ue(be,{outlined:"",modelValue:i.value,"onUpdate:modelValue":f[3]||(f[3]=y=>i.value=y),type:"tel",label:"Telephone number","label-color":"dark","lazy-rules":"","no-error-icon":"",class:"col-12 col-sm-6",maxlength:"20"},null,8,["modelValue"]),ue(be,{outlined:"",modelValue:a.value,"onUpdate:modelValue":f[4]||(f[4]=y=>a.value=y),type:"textarea",label:"Your message *","label-color":"dark","lazy-rules":"","no-error-icon":"",rules:[y=>!!y||"Message cannot be empty"],class:"col-12 form__element","input-class":"form__textarea",rows:"8",maxlength:"5000"},null,8,["modelValue","rules"]),nr("div",va,[ue(rr,{glossy:"",unelevated:"",color:"black",label:"Send",type:"submit",class:"form__button"})])]),_:1},8,["onSubmit"])]))}};var Sa=lr(ya,[["__scopeId","data-v-7ea56d68"]]);export{Sa as default};
