(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1311:function(t,e,n){"use strict";n.d(e,"a",(function(){return Ht}));var o=n(10);const r=/^[a-z0-9]+(-[a-z0-9]+)*$/,c=Object.freeze({left:0,top:0,width:16,height:16,rotate:0,vFlip:!1,hFlip:!1});function l(data){return{...c,...data}}const f=(t,e,n,o="")=>{const r=t.split(":");if("@"===t.slice(0,1)){if(r.length<2||r.length>3)return null;o=r.shift().slice(1)}if(r.length>3||!r.length)return null;if(r.length>1){const t=r.pop(),n=r.pop(),c={provider:r.length>0?r[0]:o,prefix:n,name:t};return e&&!d(c)?null:c}const c=r[0],l=c.split("-");if(l.length>1){const t={provider:o,prefix:l.shift(),name:l.join("-")};return e&&!d(t)?null:t}if(n&&""===o){const t={provider:o,prefix:"",name:c};return e&&!d(t,n)?null:t}return null},d=(t,e)=>!!t&&!(""!==t.provider&&!t.provider.match(r)||!(e&&""===t.prefix||t.prefix.match(r))||!t.name.match(r));function h(data,t,e=!1){const n=function t(e,n){if(void 0!==data.icons[e])return Object.assign({},data.icons[e]);if(n>5)return null;const o=data.aliases;if(o&&void 0!==o[e]){const r=o[e],l=t(r.parent,n+1);return l?function(t,e){const n={...t};for(const t in c){const o=t;if(void 0!==e[o]){const t=e[o];if(void 0===n[o]){n[o]=t;continue}switch(o){case"rotate":n[o]=(n[o]+t)%4;break;case"hFlip":case"vFlip":n[o]=t!==n[o];break;default:n[o]=t}}}return n}(l,r):l}const r=data.chars;return!n&&r&&void 0!==r[e]?t(r[e],n+1):null}(t,0);if(n)for(const t in c)void 0===n[t]&&void 0!==data[t]&&(n[t]=data[t]);return n&&e?l(n):n}function v(data,t,e){e=e||{};const n=[];if("object"!=typeof data||"object"!=typeof data.icons)return n;data.not_found instanceof Array&&data.not_found.forEach((e=>{t(e,null),n.push(e)}));const o=data.icons;Object.keys(o).forEach((e=>{const o=h(data,e,!0);o&&(t(e,o),n.push(e))}));const r=e.aliases||"all";if("none"!==r&&"object"==typeof data.aliases){const e=data.aliases;Object.keys(e).forEach((o=>{if("variations"===r&&function(t){for(const e in c)if(void 0!==t[e])return!0;return!1}(e[o]))return;const l=h(data,o,!0);l&&(t(o,l),n.push(o))}))}return n}const y={provider:"string",aliases:"object",not_found:"object"};for(const t in c)y[t]=typeof c[t];function m(t){if("object"!=typeof t||null===t)return null;const data=t;if("string"!=typeof data.prefix||!t.icons||"object"!=typeof t.icons)return null;for(const e in y)if(void 0!==t[e]&&typeof t[e]!==y[e])return null;const e=data.icons;for(const t in e){const n=e[t];if(!t.match(r)||"string"!=typeof n.body)return null;for(const t in c)if(void 0!==n[t]&&typeof n[t]!=typeof c[t])return null}const n=data.aliases;if(n)for(const t in n){const o=n[t],l=o.parent;if(!t.match(r)||"string"!=typeof l||!e[l]&&!n[l])return null;for(const t in c)if(void 0!==o[t]&&typeof o[t]!=typeof c[t])return null}return data}let x=Object.create(null);try{const t=window||self;t&&1===t._iconifyStorage.version&&(x=t._iconifyStorage.storage)}catch(t){}function w(t,e){void 0===x[t]&&(x[t]=Object.create(null));const n=x[t];return void 0===n[e]&&(n[e]=function(t,e){return{provider:t,prefix:e,icons:Object.create(null),missing:Object.create(null)}}(t,e)),n[e]}function j(t,data){if(!m(data))return[];const e=Date.now();return v(data,((n,o)=>{o?t.icons[n]=o:t.missing[n]=e}))}function k(t,e){const n=t.icons[e];return void 0===n?null:n}let O=!1;function I(t){return"boolean"==typeof t&&(O=t),O}function E(t){const e="string"==typeof t?f(t,!0,O):t;return e?k(w(e.provider,e.prefix),e.name):null}function S(t,data){const e=f(t,!0,O);if(!e)return!1;return function(t,e,n){try{if("string"==typeof n.body)return t.icons[e]=Object.freeze(l(n)),!0}catch(t){}return!1}(w(e.provider,e.prefix),e.name,data)}const M=Object.freeze({inline:!1,width:null,height:null,hAlign:"center",vAlign:"middle",slice:!1,hFlip:!1,vFlip:!1,rotate:0});function A(t,e){const n={};for(const o in t){const r=o;if(n[r]=t[r],void 0===e[r])continue;const c=e[r];switch(r){case"inline":case"slice":"boolean"==typeof c&&(n[r]=c);break;case"hFlip":case"vFlip":!0===c&&(n[r]=!n[r]);break;case"hAlign":case"vAlign":"string"==typeof c&&""!==c&&(n[r]=c);break;case"width":case"height":("string"==typeof c&&""!==c||"number"==typeof c&&c||null===c)&&(n[r]=c);break;case"rotate":"number"==typeof c&&(n[r]+=c)}}return n}const _=/(-?[0-9.]*[0-9]+[0-9.]*)/g,F=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function T(t,e,n){if(1===e)return t;if(n=void 0===n?100:n,"number"==typeof t)return Math.ceil(t*e*n)/n;if("string"!=typeof t)return t;const o=t.split(_);if(null===o||!o.length)return t;const r=[];let code=o.shift(),c=F.test(code);for(;;){if(c){const t=parseFloat(code);isNaN(t)?r.push(code):r.push(Math.ceil(t*e*n)/n)}else r.push(code);if(code=o.shift(),void 0===code)return r.join("");c=!c}}function L(t){let e="";switch(t.hAlign){case"left":e+="xMin";break;case"right":e+="xMax";break;default:e+="xMid"}switch(t.vAlign){case"top":e+="YMin";break;case"bottom":e+="YMax";break;default:e+="YMid"}return e+=t.slice?" slice":" meet",e}function D(t,e){const n={left:t.left,top:t.top,width:t.width,height:t.height};let o,r,body=t.body;[t,e].forEach((t=>{const e=[],o=t.hFlip,r=t.vFlip;let c,l=t.rotate;switch(o?r?l+=2:(e.push("translate("+(n.width+n.left).toString()+" "+(0-n.top).toString()+")"),e.push("scale(-1 1)"),n.top=n.left=0):r&&(e.push("translate("+(0-n.left).toString()+" "+(n.height+n.top).toString()+")"),e.push("scale(1 -1)"),n.top=n.left=0),l<0&&(l-=4*Math.floor(l/4)),l%=4,l){case 1:c=n.height/2+n.top,e.unshift("rotate(90 "+c.toString()+" "+c.toString()+")");break;case 2:e.unshift("rotate(180 "+(n.width/2+n.left).toString()+" "+(n.height/2+n.top).toString()+")");break;case 3:c=n.width/2+n.left,e.unshift("rotate(-90 "+c.toString()+" "+c.toString()+")")}l%2==1&&(0===n.left&&0===n.top||(c=n.left,n.left=n.top,n.top=c),n.width!==n.height&&(c=n.width,n.width=n.height,n.height=c)),e.length&&(body='<g transform="'+e.join(" ")+'">'+body+"</g>")})),null===e.width&&null===e.height?(r="1em",o=T(r,n.width/n.height)):null!==e.width&&null!==e.height?(o=e.width,r=e.height):null!==e.height?(r=e.height,o=T(r,n.width/n.height)):(o=e.width,r=T(o,n.height/n.width)),"auto"===o&&(o=n.width),"auto"===r&&(r=n.height),o="string"==typeof o?o:o.toString()+"",r="string"==typeof r?r:r.toString()+"";const c={attributes:{width:o,height:r,preserveAspectRatio:L(e),viewBox:n.left.toString()+" "+n.top.toString()+" "+n.width.toString()+" "+n.height.toString()},body:body};return e.inline&&(c.inline=!0),c}const R=/\sid="(\S+)"/g,P="IconifyId"+Date.now().toString(16)+(16777216*Math.random()|0).toString(16);let U=0;function $(body,t=P){const e=[];let n;for(;n=R.exec(body);)e.push(n[1]);return e.length?(e.forEach((e=>{const n="function"==typeof t?t(e):t+(U++).toString(),o=e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");body=body.replace(new RegExp('([#;"])('+o+')([")]|\\.[a-z])',"g"),"$1"+n+"$3")})),body):body}const z=Object.create(null);function C(t,e){z[t]=e}function N(t){return z[t]||z[""]}function J(source){let t;if("string"==typeof source.resources)t=[source.resources];else if(t=source.resources,!(t instanceof Array&&t.length))return null;return{resources:t,path:void 0===source.path?"/":source.path,maxURL:source.maxURL?source.maxURL:500,rotate:source.rotate?source.rotate:750,timeout:source.timeout?source.timeout:5e3,random:!0===source.random,index:source.index?source.index:0,dataAfterTimeout:!1!==source.dataAfterTimeout}}const Y=Object.create(null),H=["https://api.simplesvg.com","https://api.unisvg.com"],B=[];for(;H.length>0;)1===H.length||Math.random()>.5?B.push(H.shift()):B.push(H.pop());function V(t,e){const n=J(e);return null!==n&&(Y[t]=n,!0)}function G(t){return Y[t]}Y[""]=J({resources:["https://api.iconify.design"].concat(B)});const K=(base,t)=>{let e=base,n=-1!==e.indexOf("?");return Object.keys(t).forEach((o=>{let r;try{r=function(t){switch(typeof t){case"boolean":return t?"true":"false";case"number":case"string":return encodeURIComponent(t);default:throw new Error("Invalid parameter")}}(t[o])}catch(t){return}e+=(n?"&":"?")+encodeURIComponent(o)+"="+r,n=!0})),e},Q={},W={};let X=(()=>{let t;try{if(t=fetch,"function"==typeof t)return t}catch(t){}return null})();const Z={prepare:(t,e,n)=>{const o=[];let r=Q[e];void 0===r&&(r=function(t,e){const n=G(t);if(!n)return 0;let o;if(n.maxURL){let t=0;n.resources.forEach((e=>{const n=e;t=Math.max(t,n.length)}));const r=K(e+".json",{icons:""});o=n.maxURL-t-n.path.length-r.length}else o=0;const r=t+":"+e;return W[t]=n.path,Q[r]=o,o}(t,e));const c="icons";let l={type:c,provider:t,prefix:e,icons:[]},f=0;return n.forEach(((n,d)=>{f+=n.length+1,f>=r&&d>0&&(o.push(l),l={type:c,provider:t,prefix:e,icons:[]},f=n.length),l.icons.push(n)})),o.push(l),o},send:(t,e,n)=>{if(!X)return void n("abort",424);let path=function(t){if("string"==typeof t){if(void 0===W[t]){const e=G(t);if(!e)return"/";W[t]=e.path}return W[t]}return"/"}(e.provider);switch(e.type){case"icons":{const t=e.prefix,n=e.icons.join(",");path+=K(t+".json",{icons:n});break}case"custom":{const t=e.uri;path+="/"===t.slice(0,1)?t.slice(1):t;break}default:return void n("abort",400)}let o=503;X(t+path).then((t=>{const e=t.status;if(200===e)return o=501,t.json();setTimeout((()=>{n(function(t){return 404===t}(e)?"abort":"next",e)}))})).then((data=>{"object"==typeof data&&null!==data?setTimeout((()=>{n("success",data)})):setTimeout((()=>{n("next",o)}))})).catch((()=>{n("next",o)}))}};const tt=Object.create(null),et=Object.create(null);function nt(t,e){t.forEach((source=>{const t=source.provider;if(void 0===tt[t])return;const n=tt[t],o=source.prefix,r=n[o];r&&(n[o]=r.filter((t=>t.id!==e)))}))}let ot=0;var it={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function ct(t,e,n,o){const r=t.resources.length,c=t.random?Math.floor(Math.random()*r):t.index;let l;if(t.random){let e=t.resources.slice(0);for(l=[];e.length>1;){const t=Math.floor(Math.random()*e.length);l.push(e[t]),e=e.slice(0,t).concat(e.slice(t+1))}l=l.concat(e)}else l=t.resources.slice(c).concat(t.resources.slice(0,c));const f=Date.now();let d,h="pending",v=0,y=null,m=[],x=[];function w(){y&&(clearTimeout(y),y=null)}function j(){"pending"===h&&(h="aborted"),w(),m.forEach((t=>{"pending"===t.status&&(t.status="aborted")})),m=[]}function k(t,e){e&&(x=[]),"function"==typeof t&&x.push(t)}function O(){h="failed",x.forEach((t=>{t(void 0,d)}))}function I(){m.forEach((t=>{"pending"===t.status&&(t.status="aborted")})),m=[]}function E(){if("pending"!==h)return;w();const o=l.shift();if(void 0===o)return m.length?void(y=setTimeout((()=>{w(),"pending"===h&&(I(),O())}),t.timeout)):void O();const r={status:"pending",resource:o,callback:(e,data)=>{!function(e,n,data){const o="success"!==n;switch(m=m.filter((t=>t!==e)),h){case"pending":break;case"failed":if(o||!t.dataAfterTimeout)return;break;default:return}if("abort"===n)return d=data,void O();if(o)return d=data,void(m.length||(l.length?E():O()));if(w(),I(),!t.random){const n=t.resources.indexOf(e.resource);-1!==n&&n!==t.index&&(t.index=n)}h="completed",x.forEach((t=>{t(data)}))}(r,e,data)}};m.push(r),v++,y=setTimeout(E,t.rotate),n(o,e,r.callback)}return"function"==typeof o&&x.push(o),setTimeout(E),function(){return{startTime:f,payload:e,status:h,queriesSent:v,queriesPending:m.length,subscribe:k,abort:j}}}function st(t){const e=function(t){if(!("object"==typeof t&&"object"==typeof t.resources&&t.resources instanceof Array&&t.resources.length))throw new Error("Invalid Reduncancy configuration");const e=Object.create(null);let n;for(n in it)void 0!==t[n]?e[n]=t[n]:e[n]=it[n];return e}(t);let n=[];function o(){n=n.filter((t=>"pending"===t().status))}return{query:function(t,r,c){const l=ct(e,t,r,((data,t)=>{o(),c&&c(data,t)}));return n.push(l),l},find:function(t){const e=n.find((e=>t(e)));return void 0!==e?e:null},setIndex:t=>{e.index=t},getIndex:()=>e.index,cleanup:o}}function at(){}const lt=Object.create(null);function ft(t,e,n){let o,r;if("string"==typeof t){const e=N(t);if(!e)return n(void 0,424),at;r=e.send;const c=function(t){if(void 0===lt[t]){const e=G(t);if(!e)return;const n={config:e,redundancy:st(e)};lt[t]=n}return lt[t]}(t);c&&(o=c.redundancy)}else{const e=J(t);if(e){o=st(e);const n=N(t.resources?t.resources[0]:"");n&&(r=n.send)}}return o&&r?o.query(e,r,n)().abort:(n(void 0,424),at)}const ut={};function pt(){}const ht=Object.create(null),gt=Object.create(null),bt=Object.create(null),vt=Object.create(null);function yt(t,e){void 0===bt[t]&&(bt[t]=Object.create(null));const n=bt[t];n[e]||(n[e]=!0,setTimeout((()=>{n[e]=!1,function(t,e){void 0===et[t]&&(et[t]=Object.create(null));const n=et[t];n[e]||(n[e]=!0,setTimeout((()=>{if(n[e]=!1,void 0===tt[t]||void 0===tt[t][e])return;const o=tt[t][e].slice(0);if(!o.length)return;const r=w(t,e);let c=!1;o.forEach((n=>{const o=n.icons,l=o.pending.length;o.pending=o.pending.filter((n=>{if(n.prefix!==e)return!0;const l=n.name;if(void 0!==r.icons[l])o.loaded.push({provider:t,prefix:e,name:l});else{if(void 0===r.missing[l])return c=!0,!0;o.missing.push({provider:t,prefix:e,name:l})}return!1})),o.pending.length!==l&&(c||nt([{provider:t,prefix:e}],n.id),n.callback(o.loaded.slice(0),o.missing.slice(0),o.pending.slice(0),n.abort))}))})))}(t,e)})))}const mt=Object.create(null);function xt(t,e,n){void 0===gt[t]&&(gt[t]=Object.create(null));const o=gt[t];void 0===vt[t]&&(vt[t]=Object.create(null));const r=vt[t];void 0===ht[t]&&(ht[t]=Object.create(null));const c=ht[t];void 0===o[e]?o[e]=n:o[e]=o[e].concat(n).sort(),r[e]||(r[e]=!0,setTimeout((()=>{r[e]=!1;const n=o[e];delete o[e];const l=N(t);if(!l)return void function(){const n=(""===t?"":"@"+t+":")+e,time=Math.floor(Date.now()/6e4);mt[n]<time&&(mt[n]=time,console.error('Unable to retrieve icons for "'+n+'" because API is not configured properly.'))}();l.prepare(t,e,n).forEach((n=>{ft(t,n,((data,o)=>{const r=w(t,e);if("object"!=typeof data){if(404!==o)return;const t=Date.now();n.icons.forEach((e=>{r.missing[e]=t}))}else try{const n=j(r,data);if(!n.length)return;const o=c[e];n.forEach((t=>{delete o[t]})),ut.store&&ut.store(t,data)}catch(t){console.error(t)}yt(t,e)}))}))})))}const wt=(t,e)=>{const n=function(t,e=!0,n=!1){const o=[];return t.forEach((t=>{const r="string"==typeof t?f(t,!1,n):t;e&&!d(r,n)||o.push({provider:r.provider,prefix:r.prefix,name:r.name})})),o}(t,!0,I()),o=function(t){const e={loaded:[],missing:[],pending:[]},n=Object.create(null);t.sort(((a,b)=>a.provider!==b.provider?a.provider.localeCompare(b.provider):a.prefix!==b.prefix?a.prefix.localeCompare(b.prefix):a.name.localeCompare(b.name)));let o={provider:"",prefix:"",name:""};return t.forEach((t=>{if(o.name===t.name&&o.prefix===t.prefix&&o.provider===t.provider)return;o=t;const r=t.provider,c=t.prefix,l=t.name;void 0===n[r]&&(n[r]=Object.create(null));const f=n[r];void 0===f[c]&&(f[c]=w(r,c));const d=f[c];let h;h=void 0!==d.icons[l]?e.loaded:""===c||void 0!==d.missing[l]?e.missing:e.pending;const v={provider:r,prefix:c,name:l};h.push(v)})),e}(n);if(!o.pending.length){let t=!0;return e&&setTimeout((()=>{t&&e(o.loaded,o.missing,o.pending,pt)})),()=>{t=!1}}const r=Object.create(null),c=[];let l,h;o.pending.forEach((t=>{const e=t.provider,n=t.prefix;if(n===h&&e===l)return;l=e,h=n,c.push({provider:e,prefix:n}),void 0===ht[e]&&(ht[e]=Object.create(null));const o=ht[e];void 0===o[n]&&(o[n]=Object.create(null)),void 0===r[e]&&(r[e]=Object.create(null));const f=r[e];void 0===f[n]&&(f[n]=[])}));const time=Date.now();return o.pending.forEach((t=>{const e=t.provider,n=t.prefix,o=t.name,c=ht[e][n];void 0===c[o]&&(c[o]=time,r[e][n].push(o))})),c.forEach((source=>{const t=source.provider,e=source.prefix;r[t][e].length&&xt(t,e,r[t][e])})),e?function(t,e,n){const o=ot++,r=nt.bind(null,n,o);if(!e.pending.length)return r;const c={id:o,icons:e,callback:t,abort:r};return n.forEach((source=>{const t=source.provider,e=source.prefix;void 0===tt[t]&&(tt[t]=Object.create(null));const n=tt[t];void 0===n[e]&&(n[e]=[]),n[e].push(c)})),r}(e,o,c):pt},jt="iconify2",kt="iconify",Ot="iconify-count",It="iconify-version",Et=36e5,St={local:!0,session:!0};let Mt=!1;const At={local:0,session:0},_t={local:[],session:[]};let Ft="undefined"==typeof window?{}:window;function Tt(t){const e=t+"Storage";try{if(Ft&&Ft[e]&&"number"==typeof Ft[e].length)return Ft[e]}catch(t){}return St[t]=!1,null}function Lt(t,e,n){try{return t.setItem(Ot,n.toString()),At[e]=n,!0}catch(t){return!1}}function Dt(t){const e=t.getItem(Ot);if(e){const t=parseInt(e);return t||0}return 0}const Rt=()=>{if(Mt)return;Mt=!0;const t=Math.floor(Date.now()/Et)-168;function e(e){const n=Tt(e);if(!n)return;const o=e=>{const o=kt+e.toString(),r=n.getItem(o);if("string"!=typeof r)return!1;let c=!0;try{const data=JSON.parse(r);if("object"!=typeof data||"number"!=typeof data.cached||data.cached<t||"string"!=typeof data.provider||"object"!=typeof data.data||"string"!=typeof data.data.prefix)c=!1;else{const t=data.provider,e=data.data.prefix;c=j(w(t,e),data.data).length>0}}catch(t){c=!1}return c||n.removeItem(o),c};try{const t=n.getItem(It);if(t!==jt)return t&&function(t){try{const e=Dt(t);for(let i=0;i<e;i++)t.removeItem(kt+i.toString())}catch(t){}}(n),void function(t,e){try{t.setItem(It,jt)}catch(t){}Lt(t,e,0)}(n,e);let r=Dt(n);for(let i=r-1;i>=0;i--)o(i)||(i===r-1?r--:_t[e].push(i));Lt(n,e,r)}catch(t){}}for(const t in St)e(t)},Pt=(t,data)=>{function e(e){if(!St[e])return!1;const n=Tt(e);if(!n)return!1;let o=_t[e].shift();if(void 0===o&&(o=At[e],!Lt(n,e,o+1)))return!1;try{const e={cached:Math.floor(Date.now()/Et),provider:t,data:data};n.setItem(kt+o.toString(),JSON.stringify(e))}catch(t){return!1}return!0}Mt||Rt(),Object.keys(data.icons).length&&(data.not_found&&delete(data=Object.assign({},data)).not_found,e("local")||e("session"))};const Ut=/[\s,]+/;function $t(t,e){e.split(Ut).forEach((e=>{switch(e.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0}}))}function zt(t,e){e.split(Ut).forEach((e=>{const n=e.trim();switch(n){case"left":case"center":case"right":t.hAlign=n;break;case"top":case"middle":case"bottom":t.vAlign=n;break;case"slice":case"crop":t.slice=!0;break;case"meet":t.slice=!1}}))}function Ct(t,e=0){const n=t.replace(/^-?[0-9.]*/,"");function o(t){for(;t<0;)t+=4;return t%4}if(""===n){const e=parseInt(t);return isNaN(e)?0:o(e)}if(n!==t){let e=0;switch(n){case"%":e=25;break;case"deg":e=90}if(e){let r=parseFloat(t.slice(0,t.length-n.length));return isNaN(r)?0:(r/=e,r%1==0?o(r):0)}}return e}const Nt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"};let qt={};["horizontal","vertical"].forEach((t=>{["Align","Flip"].forEach((e=>{const n={attr:t.slice(0,1)+e,boolean:"Flip"===e};qt[t+"-"+e.toLowerCase()]=n,qt[t.slice(0,1)+"-"+e.toLowerCase()]=n,qt[t+e]=n}))}));const Jt=(t,e,n,o)=>{const r=A(M,e),c={...Nt},style={};for(let t in e){const n=e[t];if(void 0!==n)switch(t){case"icon":case"style":case"onLoad":break;case"inline":case"hFlip":case"vFlip":r[t]=!0===n||"true"===n||1===n;break;case"flip":"string"==typeof n&&$t(r,n);break;case"align":"string"==typeof n&&zt(r,n);break;case"color":style.color=n;break;case"rotate":"string"==typeof n?r[t]=Ct(n):"number"==typeof n&&(r[t]=n);break;case"ariaHidden":case"aria-hidden":!0!==n&&"true"!==n&&delete c["aria-hidden"];break;default:void 0!==qt[t]?!qt[t].boolean||!0!==n&&"true"!==n&&1!==n?qt[t].boolean||"string"!=typeof n||""===n||(r[qt[t].attr]=n):r[qt[t].attr]=!0:void 0===M[t]&&(c[t]=n)}}const l=D(o,r);for(let t in l.attributes)c[t]=l.attributes[t];l.inline&&(style.verticalAlign="-0.125em");let f=0,d=e.id;"string"==typeof d&&(d=d.replace(/-/g,"_"));const data={attrs:c,domProps:{innerHTML:$(l.body,d?()=>d+"ID"+f++:"iconifyVue")}};return Object.keys(style).length>0&&(data.style=style),n&&(["on","ref"].forEach((t=>{void 0!==n[t]&&(data[t]=n[t])})),["staticClass","class"].forEach((t=>{void 0!==n[t]&&(data.class=n[t])}))),t("svg",data)};if(I(!0),C("",Z),"undefined"!=typeof document&&"undefined"!=typeof window){ut.store=Pt,Rt();const t=window;if(void 0!==t.IconifyPreload){const e=t.IconifyPreload,n="Invalid IconifyPreload syntax.";"object"==typeof e&&null!==e&&(e instanceof Array?e:[e]).forEach((t=>{try{("object"!=typeof t||null===t||t instanceof Array||"object"!=typeof t.icons||"string"!=typeof t.prefix||!function(data,t){if("object"!=typeof data)return!1;if("string"!=typeof t&&(t="string"==typeof data.provider?data.provider:""),O&&""===t&&("string"!=typeof data.prefix||""===data.prefix)){let t=!1;return m(data)&&(data.prefix="",v(data,((e,n)=>{n&&S(e,n)&&(t=!0)}))),t}return!("string"!=typeof data.prefix||!d({provider:t,prefix:data.prefix,name:"a"}))&&!!j(w(t,data.prefix),data)}(t))&&console.error(n)}catch(t){console.error(n)}}))}if(void 0!==t.IconifyProviders){const e=t.IconifyProviders;if("object"==typeof e&&null!==e)for(let t in e){const n="IconifyProviders["+t+"] is invalid.";try{const o=e[t];if("object"!=typeof o||!o||void 0===o.resources)continue;V(t,o)||console.error(n)}catch(t){console.error(n)}}}}const Yt=l({body:""}),Ht=o.default.extend({inheritAttrs:!1,data:()=>({iconMounted:!1}),beforeMount(){this._name="",this._loadingIcon=null,this.iconMounted=!0},beforeDestroy(){this.abortLoading()},methods:{abortLoading(){this._loadingIcon&&(this._loadingIcon.abort(),this._loadingIcon=null)},getIcon(t,e){if("object"==typeof t&&null!==t&&"string"==typeof t.body)return this._name="",this.abortLoading(),{data:l(t)};let n;if("string"!=typeof t||null===(n=f(t,!1,!0)))return this.abortLoading(),null;const data=E(n);if(null===data)return this._loadingIcon&&this._loadingIcon.name===t||(this.abortLoading(),this._name="",this._loadingIcon={name:t,abort:wt([n],(()=>{this.$forceUpdate()}))}),null;this.abortLoading(),this._name!==t&&(this._name=t,e&&e(t));const o=["iconify"];return""!==n.prefix&&o.push("iconify--"+n.prefix),""!==n.provider&&o.push("iconify--"+n.provider),{data:data,classes:o}}},render(t){const e=this.$attrs;let n=this.$data;const o=this.iconMounted?this.getIcon(e.icon,e.onLoad):null;return o?(o.classes&&(n={...n,class:("string"==typeof n.class?n.class+" ":"")+o.classes.join(" ")}),Jt(t,e,n,o.data)):Jt(t,e,n,Yt)}})}}]);