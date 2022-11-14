!function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function n(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}function t(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{A3cJ:function(e,a,i){"use strict";i.r(a),i.d(a,"PagingDemoModule",function(){return A});var c,o=i("SVse"),r=i("nCcV"),s=i("iInd"),g=i("8Y7J"),p=i("MJ5V"),u=i("mOPi"),m=((c=function e(){t(this,e)}).\u0275fac=function(e){return new(e||c)},c.\u0275cmp=g.Ib({type:c,selectors:[["paging-demo-basic"]],decls:3,vars:5,consts:[[3,"firstLast","pageSize","total"],["pagingBar",""]],template:function(e,n){if(1&e&&(g.Ub(0,"td-paging-bar",0,1),g.Oc(2),g.Tb()),2&e){var t=g.Ac(1);g.mc("firstLast",!0)("pageSize",100)("total",1345),g.Cb(2),g.Rc(" ",t.range," of ",t.total,"\n")}},directives:[u.a],styles:[""]}),c),f=i("s7LF"),b=i("ZTz/"),l=i("UhP/");function d(e,n){if(1&e&&(g.Ub(0,"mat-option",5),g.Oc(1),g.Tb()),2&e){var t=n.$implicit;g.mc("value",t),g.Cb(1),g.Qc(" ",t," ")}}var v,h,y,T,w,C,I=function(){return[50,100,200,500,1e3,2e3]},L=((h=function(){function e(){t(this,e),this.pageSize=new f.e(50)}return n(e,[{key:"changePageSize",value:function(e){this.eventPageSize=e}}]),e}()).\u0275fac=function(e){return new(e||h)},h.\u0275cmp=g.Ib({type:h,selectors:[["paging-demo-dynamic"]],decls:7,vars:10,consts:[[3,"firstLast","pageSize","total","change"],["pagingBarPageSize",""],["hide-xs",""],[3,"formControl"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(e,n){if(1&e&&(g.Ub(0,"td-paging-bar",0,1),g.cc("change",function(e){return n.changePageSize(e)}),g.Ub(2,"span",2),g.Oc(3,"Rows per page:"),g.Tb(),g.Ub(4,"mat-select",3),g.Mc(5,d,2,2,"mat-option",4),g.Tb(),g.Oc(6),g.Tb()),2&e){var t=g.Ac(1);g.mc("firstLast",!0)("pageSize",n.pageSize.value)("total",1345),g.Cb(4),g.Jc("width",50,"px"),g.mc("formControl",n.pageSize),g.Cb(1),g.mc("ngForOf",g.pc(9,I)),g.Cb(1),g.Rc(" ",t.range," of ",t.total,"\n")}},directives:[u.a,b.a,f.m,f.f,o.m,l.m],styles:[""]}),h),z=((v=function(){function e(){t(this,e)}return n(e,[{key:"changeLinks",value:function(e){this.eventLinks=e}}]),e}()).\u0275fac=function(e){return new(e||v)},v.\u0275cmp=g.Ib({type:v,selectors:[["paging-demo-links"]],decls:3,vars:5,consts:[["pageLinkCount","5",3,"firstLast","pageSize","total","change"],["pagingBarLinks",""]],template:function(e,n){if(1&e&&(g.Ub(0,"td-paging-bar",0,1),g.cc("change",function(e){return n.changeLinks(e)}),g.Oc(2),g.Tb()),2&e){var t=g.Ac(1);g.mc("firstLast",!0)("pageSize",100)("total",1345),g.Cb(2),g.Rc(" ",t.range," of ",t.total,"\n")}},directives:[u.a],styles:[""]}),v),S=i("Q2Ze"),k=i("e6WT"),U=((y=function(){function e(){t(this,e)}return n(e,[{key:"changeInput",value:function(e){this.eventInput=e}}]),e}()).\u0275fac=function(e){return new(e||y)},y.\u0275cmp=g.Ib({type:y,selectors:[["paging-demo-input"]],decls:8,vars:10,consts:[["pageLinkCount","5",3,"firstLast","pageSize","total","change"],["pagingBarInput",""],["hide-xs",""],["matInput","","type","number",3,"min","max","value","change"],["goToInput",""]],template:function(e,n){if(1&e){var t=g.Vb();g.Ub(0,"td-paging-bar",0,1),g.cc("change",function(e){return n.changeInput(e)}),g.Ub(2,"p",2),g.Oc(3,"Go to:"),g.Tb(),g.Ub(4,"mat-form-field"),g.Ub(5,"input",3,4),g.cc("change",function(){g.Dc(t);var e=g.Ac(6),n=g.Ac(1);return n.navigateToPage(e.value),e.value=n.page}),g.Tb(),g.Tb(),g.Oc(7),g.Tb()}if(2&e){var a=g.Ac(1);g.mc("firstLast",!1)("pageSize",100)("total",1345),g.Cb(4),g.Jc("width",30,"px"),g.Cb(1),g.mc("min",1)("max",a.maxPage)("value",a.page),g.Cb(2),g.Rc(" ",a.range," of ",a.total,"\n")}},directives:[u.a,S.c,k.b],styles:[""]}),y),P=[{path:"",component:(T=function e(){t(this,e)},T.\u0275fac=function(e){return new(e||T)},T.\u0275cmp=g.Ib({type:T,selectors:[["paging-demo"]],decls:8,vars:5,consts:[[3,"demoId","demoTitle"],[3,"demoId"]],template:function(e,n){1&e&&(g.Ub(0,"demo-component",0),g.Pb(1,"paging-demo-basic"),g.Tb(),g.Ub(2,"demo-component",1),g.Pb(3,"paging-demo-dynamic"),g.Tb(),g.Ub(4,"demo-component",1),g.Pb(5,"paging-demo-links"),g.Tb(),g.Ub(6,"demo-component",1),g.Pb(7,"paging-demo-input"),g.Tb()),2&e&&(g.mc("demoId","paging-demo-basic")("demoTitle","Basic"),g.Cb(2),g.mc("demoId","paging-demo-dynamic"),g.Cb(2),g.mc("demoId","paging-demo-links"),g.Cb(2),g.mc("demoId","paging-demo-input"))},directives:[p.a,m,L,z,U],styles:[""]}),T)}],O=((w=function e(){t(this,e)}).\u0275mod=g.Mb({type:w}),w.\u0275inj=g.Lb({factory:function(e){return new(e||w)},imports:[[s.g.forChild(P)],s.g]}),w),x=i("Krbs"),A=((C=function e(){t(this,e)}).\u0275mod=g.Mb({type:C}),C.\u0275inj=g.Lb({factory:function(e){return new(e||C)},imports:[[x.a,O,r.a,o.c,b.b,f.q,k.c]]}),C)}}])}();