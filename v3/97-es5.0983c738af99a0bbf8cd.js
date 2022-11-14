!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{C8DH:function(t,n,o){"use strict";o.r(n),o.d(n,"HighlightDemoModule",function(){return j});var i,s,c,r,h,l,d=o("SVse"),a=o("XkJo"),m=o("iInd"),p=o("8Y7J"),b=o("MJ5V"),u=o("0UeP"),g=o("P3Mj"),f=((c=function t(){e(this,t),this.html="\n  <div>\n    <h1>hello world!</h1>\n    <span>Some additional text here</span>\n  </div>\n  "}).\u0275fac=function(e){return new(e||c)},c.\u0275cmp=p.Ib({type:c,selectors:[["highlight-demo-html"]],decls:2,vars:1,consts:[["codeLang","html"]],template:function(e,t){1&e&&(p.Ub(0,"td-highlight",0),p.Oc(1),p.Tb()),2&e&&(p.Cb(1),p.Qc(" ",t.html,"\n"))},directives:[g.a],styles:[""]}),c),y=((s=function t(){e(this,t),this.code="\n  import { Injectable } from '@angular/core';\n  import { Observable, Subject } from 'rxjs';\n\n  @Injectable()\n  export class Service {\n\n    private _sources: {[key : string]: Subject<any>} = {};\n    private _observables: {[key: string]: Observable<any>} = {};\n\n    constructor() { }\n\n    public register(name) : Observable<any> {\n      this._sources[name] = new Subject<any>();\n      this._observables[name] = this._sources[name].asObservable();\n      return this._observables[name];\n    }\n\n    public emit(name: string): void {\n      if (this._sources[name]) {\n        this._sources[name].next(null);\n      }\n    }\n  }\n  "}).\u0275fac=function(e){return new(e||s)},s.\u0275cmp=p.Ib({type:s,selectors:[["highlight-demo-ts"]],decls:2,vars:1,consts:[["codeLang","typescript"]],template:function(e,t){1&e&&(p.Ub(0,"td-highlight",0),p.Oc(1),p.Tb()),2&e&&(p.Cb(1),p.Qc(" ",t.code,"\n"))},directives:[g.a],styles:[""]}),s),v=((i=function t(){e(this,t),this.css="\n  .flex-container {\n    display: flex;\n  }\n  ",this.tooltipsConfig={copy:"Copy text",copied:"Text copied"}}).\u0275fac=function(e){return new(e||i)},i.\u0275cmp=p.Ib({type:i,selectors:[["highlight-demo-copy-code"]],decls:2,vars:3,consts:[["codeLang","css",3,"copyCodeToClipboard","copyCodeTooltips"]],template:function(e,t){1&e&&(p.Ub(0,"td-highlight",0),p.Oc(1),p.Tb()),2&e&&(p.mc("copyCodeToClipboard",!0)("copyCodeTooltips",t.tooltipsConfig),p.Cb(1),p.Qc(" ",t.css,"\n"))},directives:[g.a],styles:[""]}),i),C=[{path:"",component:(r=function t(){e(this,t)},r.\u0275fac=function(e){return new(e||r)},r.\u0275cmp=p.Ib({type:r,selectors:[["highlight-demo"]],decls:8,vars:8,consts:[[3,"demoId","demoTitle"]],template:function(e,t){1&e&&(p.Ub(0,"demo-component",0),p.Pb(1,"highlight-demo-css"),p.Tb(),p.Ub(2,"demo-component",0),p.Pb(3,"highlight-demo-html"),p.Tb(),p.Ub(4,"demo-component",0),p.Pb(5,"highlight-demo-ts"),p.Tb(),p.Ub(6,"demo-component",0),p.Pb(7,"highlight-demo-copy-code"),p.Tb()),2&e&&(p.mc("demoId","highlight-demo-css")("demoTitle","CSS"),p.Cb(2),p.mc("demoId","highlight-demo-html")("demoTitle","HTML"),p.Cb(2),p.mc("demoId","highlight-demo-ts")("demoTitle","TypeScript"),p.Cb(2),p.mc("demoId","highlight-demo-copy-code")("demoTitle","CopyCode"))},directives:[b.a,u.a,f,y,v],styles:[""]}),r)}],T=((h=function t(){e(this,t)}).\u0275mod=p.Mb({type:h}),h.\u0275inj=p.Lb({factory:function(e){return new(e||h)},imports:[[m.g.forChild(C)],m.g]}),h),w=o("Krbs"),I=o("KymJ"),j=((l=function t(){e(this,t)}).\u0275mod=p.Mb({type:l}),l.\u0275inj=p.Lb({factory:function(e){return new(e||l)},imports:[[I.a,w.a,T,a.a,d.c]]}),l)}}])}();