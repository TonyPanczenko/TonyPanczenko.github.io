import{l}from"./vendor.cfd917ce.js";let a=[],n=[];function u(e){n=n.filter(t=>t!==e)}function s(e){u(e),n.push(e)}function r(e){u(e),n.length===0&&a.length>0&&(a[a.length-1](),a=[])}function i(e){n.length===0?e():a.push(e)}function c(e){a=a.filter(t=>t!==e)}const d={dark:{type:Boolean,default:null}};function f(e,t){return l(()=>e.dark===null?t.dark.isActive:e.dark)}export{s as a,f as b,i as c,c as d,r,d as u};
