var m=Object.defineProperty;var i=(e,r)=>m(e,"name",{value:r,configurable:!0});import{_ as u,aa as g,F as x,aP as h,a3 as $,q as I,aQ as j,af as N,U as E,aR as S,aS as w,u as D,a7 as O,k as P,aI as _}from"./index-87d24e55.js";import{a4 as y}from"./index-681e4b07-1b4f21a0.js";var U=u,A=x.findIndex,M=g,v="findIndex",p=!0;v in[]&&Array(1)[v](function(){p=!1});U({target:"Array",proto:!0,forced:p},{findIndex:i(function(r){return A(this,r,arguments.length>1?arguments[1]:void 0)},"findIndex")});M(v);var R=u,L=y,T=g;R({target:"Array",proto:!0},{fill:L});T("fill");var q=Object.is||i(function(r,t){return r===t?r!==0||1/r===1/t:r!=r&&t!=t},"is"),C=$,G=h,W=I,V=j,X=N,c=q,d=E,k=S,K=w;G("search",function(e,r,t){return[i(function(a){var s=X(this),o=V(a)?void 0:k(a,e);return o?C(o,a,s):new RegExp(a)[e](d(s))},"search"),function(n){var a=W(this),s=d(n),o=t(r,a,s);if(o.done)return o.value;var l=a.lastIndex;c(l,0)||(a.lastIndex=0);var f=K(a,s);return c(a.lastIndex,l)||(a.lastIndex=l),f===null?-1:f.index}]});var b=D,Q=i(function(e){return e!==void 0&&(b(e,"value")||b(e,"writable"))},"isDataDescriptor$1"),z=u,B=$,H=O,J=I,Y=Q,Z=P,rr=_;function F(e,r){var t=arguments.length<3?e:arguments[2],n,a;if(J(e)===t)return e[r];if(n=Z.f(e,r),n)return Y(n)?n.value:n.get===void 0?void 0:B(n.get,t);if(H(a=rr(e)))return F(a,r,t)}i(F,"get");z({target:"Reflect",stat:!0},{get:F});var er=O,ar=Math.floor,tr=Number.isInteger||i(function(r){return!er(r)&&isFinite(r)&&ar(r)===r},"isInteger"),nr=u,ir=tr;nr({target:"Number",stat:!0},{isInteger:ir});var sr=u;sr({target:"Number",stat:!0,nonConfigurable:!0,nonWritable:!0},{MAX_SAFE_INTEGER:9007199254740991});export{tr as i};
//# sourceMappingURL=es.number.max-safe-integer-4b594120.js.map