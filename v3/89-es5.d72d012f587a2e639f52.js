!function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{rxbK:function(n,a,o){"use strict";o.r(a),o.d(a,"DynamicFormsDemoModule",function(){return Me});var c=o("SVse"),i=o("s7LF"),r=o("Dxy4"),s=o("PDjf"),m=o("BSbQ"),l=o("9X6E"),d=o("/OM5"),u=o("iInd"),b=o("8Y7J"),f=o("MJ5V"),p=o("7RBA"),h=o("AzUz");function y(e,t){if(1&e&&(b.Ub(0,"span"),b.Oc(1),b.Tb()),2&e){var n=b.gc(3).$implicit;b.Cb(1),b.Qc("Min length value: ",n.minLength,"")}}function v(e,t){if(1&e&&(b.Ub(0,"span"),b.Oc(1),b.Tb()),2&e){var n=b.gc(3).$implicit;b.Cb(1),b.Qc("Max length value: ",n.minLength,"")}}function g(e,t){if(1&e&&(b.Ub(0,"span"),b.Mc(1,y,2,1,"span",3),b.Mc(2,v,2,1,"span",3),b.Tb()),2&e){var n=b.gc().control;b.Cb(1),b.mc("ngIf",n.hasError("minlength")),b.Cb(1),b.mc("ngIf",n.hasError("maxlength"))}}function T(e,t){if(1&e&&b.Mc(0,g,3,2,"span",3),2&e){var n=t.control;b.mc("ngIf",n.touched||!n.pristine)}}function E(e,t){1&e&&b.Mc(0,T,1,1,"ng-template",2),2&e&&b.mc("tdDynamicFormsError",t.$implicit.name)}var I,C=((I=function e(){t(this,e),this.textElements=[{name:"input",hint:"this is an input hint",type:d.b.Input,required:!1,flex:50},{name:"requiredInput",label:"Input Label",placeholder:"Input Placeholder",type:d.b.Input,required:!0,flex:50},{name:"textLength",label:"Text Length",type:d.b.Input,minLength:4,maxLength:12,flex:50},{name:"text",type:d.c.Text,required:!1,default:"Default",flex:50,disabled:!0},{name:"textarea",hint:"this is a textarea hint",type:d.b.Textarea,required:!1},{name:"requiredPassword",label:"Password Label",type:d.b.Password,required:!0}]}).\u0275fac=function(e){return new(e||I)},I.\u0275cmp=b.Ib({type:I,selectors:[["dynamic-forms-demo-text"]],decls:2,vars:2,consts:[[3,"elements"],["ngFor","",3,"ngForOf"],[3,"tdDynamicFormsError"],[4,"ngIf"]],template:function(e,t){1&e&&(b.Ub(0,"td-dynamic-forms",0),b.Mc(1,E,1,1,"ng-template",1),b.Tb()),2&e&&(b.mc("elements",t.textElements),b.Cb(1),b.mc("ngForOf",t.textElements))},directives:[p.a,c.m,h.c,c.n],styles:[""]}),I);function M(e,t){if(1&e&&(b.Ub(0,"span"),b.Oc(1),b.Tb()),2&e){var n=b.gc(3).$implicit;b.Cb(1),b.Qc("Min value: ",n.min,"")}}function x(e,t){if(1&e&&(b.Ub(0,"span"),b.Oc(1),b.Tb()),2&e){var n=b.gc(3).$implicit;b.Cb(1),b.Qc("Max value: ",n.max,"")}}function U(e,t){if(1&e&&(b.Ub(0,"span"),b.Mc(1,M,2,1,"span",3),b.Mc(2,x,2,1,"span",3),b.Tb()),2&e){var n=b.gc().control;b.Cb(1),b.mc("ngIf",n.hasError("min")),b.Cb(1),b.mc("ngIf",n.hasError("max"))}}function w(e,t){if(1&e&&b.Mc(0,U,3,2,"span",3),2&e){var n=t.control;b.mc("ngIf",n.touched||!n.pristine)}}function O(e,t){1&e&&b.Mc(0,w,1,1,"ng-template",2),2&e&&b.mc("tdDynamicFormsError",t.$implicit.name)}var F,P,V,D,S,q=((S=function e(){t(this,e),this.numberElements=[{name:"number",label:"Number",type:d.c.Number,required:!0,min:18,max:70},{name:"slider",type:d.b.Slider,hint:"this is a slider hint",min:18,max:70}]}).\u0275fac=function(e){return new(e||S)},S.\u0275cmp=b.Ib({type:S,selectors:[["dynamic-forms-demo-number"]],decls:2,vars:2,consts:[[3,"elements"],["ngFor","",3,"ngForOf"],[3,"tdDynamicFormsError"],[4,"ngIf"]],template:function(e,t){1&e&&(b.Ub(0,"td-dynamic-forms",0),b.Mc(1,O,1,1,"ng-template",1),b.Tb()),2&e&&(b.mc("elements",t.numberElements),b.Cb(1),b.mc("ngForOf",t.numberElements))},directives:[p.a,c.m,h.c,c.n],styles:[""]}),S),L=((D=function e(){t(this,e),this.booleanElements=[{name:"boolean",label:"Boolean Label",type:d.c.Boolean,hint:"this is a boolean",default:!1},{name:"slideToggle",type:d.b.SlideToggle,hint:"this is a slide toggle",default:!0},{name:"checkbox",type:d.b.Checkbox,hint:"this is a checkbox"}]}).\u0275fac=function(e){return new(e||D)},D.\u0275cmp=b.Ib({type:D,selectors:[["dynamic-forms-demo-boolean"]],decls:1,vars:1,consts:[[3,"elements"]],template:function(e,t){1&e&&b.Pb(0,"td-dynamic-forms",0),2&e&&b.mc("elements",t.booleanElements)},directives:[p.a],styles:[""]}),D),$=((V=function e(){t(this,e),this.dateElements=[{name:"dateInput",label:"Select a date",hint:"this is a datepicker hint",type:d.b.Datepicker,min:new Date(2018,1,1).setHours(0,0,0,0)}]}).\u0275fac=function(e){return new(e||V)},V.\u0275cmp=b.Ib({type:V,selectors:[["dynamic-forms-demo-date"]],decls:1,vars:1,consts:[[3,"elements"]],template:function(e,t){1&e&&b.Pb(0,"td-dynamic-forms",0),2&e&&b.mc("elements",t.dateElements)},directives:[p.a],styles:[""]}),V),k=((P=function e(){t(this,e),this.arrayElements=[{name:"array",type:d.c.Array,selections:["Test1","Test2","Test3","Test4"],default:"Test1"},{name:"requiredSelect",type:d.b.Select,selections:["Test1","Test2","Test3","Test4"],required:!0},{name:"requiredMultipleSelect",type:d.b.Select,multiple:!0,selections:["Test1","Test2","Test3","Test4"],required:!0},{name:"valueLabelSelect",hint:"this is a select hint",type:d.b.Select,selections:[{label:"Test1",value:1},{label:"Test2",value:2},{label:"Test3",value:3},{label:"Test4",value:4}],required:!0}]}).\u0275fac=function(e){return new(e||P)},P.\u0275cmp=b.Ib({type:P,selectors:[["dynamic-forms-demo-array"]],decls:1,vars:1,consts:[[3,"elements"]],template:function(e,t){1&e&&b.Pb(0,"td-dynamic-forms",0),2&e&&b.mc("elements",t.arrayElements)},directives:[p.a],styles:[""]}),P),N=((F=function e(){t(this,e),this.fileElements=[{name:"fileInput",label:"Browse a file",hint:"this is a file input hint",type:d.b.FileInput}]}).\u0275fac=function(e){return new(e||F)},F.\u0275cmp=b.Ib({type:F,selectors:[["dynamic-forms-demo-file-input"]],decls:1,vars:1,consts:[[3,"elements"]],template:function(e,t){1&e&&b.Pb(0,"td-dynamic-forms",0),2&e&&b.mc("elements",t.fileElements)},directives:[p.a],styles:[""]}),F),Q=["manualValidateForm"];function A(e,t){1&e&&(b.Ub(0,"span"),b.Oc(1,"Must be even."),b.Tb())}function B(e,t){1&e&&(b.Ub(0,"span"),b.Oc(1,"Must be odd."),b.Tb())}function z(e,t){if(1&e&&(b.Ub(0,"span"),b.Oc(1),b.Tb()),2&e){var n=b.gc(3).$implicit;b.Cb(1),b.Qc("Must be greater than ",n.min,".")}}function j(e,t){if(1&e&&(b.Ub(0,"span"),b.Oc(1),b.Tb()),2&e){var n=b.gc(3).$implicit;b.Cb(1),b.Qc("Must be less than ",n.max,".")}}function J(e,t){if(1&e&&(b.Ub(0,"span"),b.Mc(1,A,2,0,"span",7),b.Mc(2,B,2,0,"span",7),b.Mc(3,z,2,1,"span",7),b.Mc(4,j,2,1,"span",7),b.Tb()),2&e){var n=b.gc().control;b.Cb(1),b.mc("ngIf",n.hasError("even")),b.Cb(1),b.mc("ngIf",n.hasError("odd")),b.Cb(1),b.mc("ngIf",n.hasError("min")),b.Cb(1),b.mc("ngIf",n.hasError("max"))}}function H(e,t){if(1&e&&b.Mc(0,J,5,4,"span",7),2&e){var n=t.control;b.mc("ngIf",n.touched||!n.pristine)}}function K(e,t){1&e&&b.Mc(0,H,1,1,"ng-template",2),2&e&&b.mc("tdDynamicFormsError",t.$implicit.name)}function R(e,t){1&e&&(b.Ub(0,"span"),b.Oc(1,"Must contain at least 1 number."),b.Tb())}function X(e,t){1&e&&(b.Ub(0,"span"),b.Oc(1,"Password needs from 8 - 20 characters."),b.Tb())}function Y(e,t){1&e&&(b.Ub(0,"span"),b.Oc(1,"Need at least one special character (!, @, #, $, %)."),b.Tb())}function G(e,t){if(1&e&&(b.Ub(0,"span"),b.Mc(1,R,2,0,"span",7),b.Mc(2,X,2,0,"span",7),b.Mc(3,Y,2,0,"span",7),b.Tb()),2&e){var n=b.gc().control;b.Cb(1),b.mc("ngIf",n.hasError("oneNumber")),b.Cb(1),b.mc("ngIf",n.hasError("length")),b.Cb(1),b.mc("ngIf",n.hasError("oneSpecialChar"))}}function W(e,t){if(1&e&&b.Mc(0,G,4,3,"span",7),2&e){var n=t.control;b.mc("ngIf",n.touched||!n.pristine)}}function Z(e,t){1&e&&(b.Ub(0,"span"),b.Oc(1,"Only hex color characters."),b.Tb())}function _(e,t){if(1&e&&(b.Ub(0,"span"),b.Mc(1,Z,2,0,"span",7),b.Tb()),2&e){var n=b.gc().control;b.Cb(1),b.mc("ngIf",n.hasError("pattern"))}}function ee(e,t){if(1&e&&b.Mc(0,_,2,1,"span",7),2&e){var n=t.control;b.mc("ngIf",n.touched||!n.pristine)}}function te(e,t){if(1&e&&(b.Ub(0,"span"),b.Oc(1),b.Tb()),2&e){var n=b.gc(2).control;b.Cb(1),b.Pc(n.errors.consonants)}}function ne(e,t){if(1&e&&(b.Ub(0,"span"),b.Mc(1,te,2,1,"span",7),b.Tb()),2&e){var n=b.gc().control;b.Cb(1),b.mc("ngIf",n.hasError("consonants"))}}function ae(e,t){if(1&e&&b.Mc(0,ne,2,1,"span",7),2&e){var n=t.control;b.mc("ngIf",n.touched||!n.pristine)}}var oe,ce=((oe=function(){function n(){t(this,n),this.customValidationElements=[{name:"evenElement",label:"Even Number",type:d.c.Number,validators:[{validator:function(e){return!e.value&&0!==e.value||e.value%2==0?void 0:{even:!0}}}]}],this.multipleValidatorTypes=[{name:"passwordElement",label:"Password",type:d.b.Password,required:!0,validators:[{validator:function(e){return/\d/i.test(e.value)?void 0:{oneNumber:!0}}},{validator:function(e){return e.value&&e.value.length>=8&&e.value.length<=20?void 0:{length:!0}}},{validator:function(e){return new RegExp("["+["!","@","#","$","%"].join("").toString()+"]","g").test(e.value)?void 0:{oneSpecialChar:!0}}}]}],this.angularValidators=[{name:"hexColorElement",label:"Hexidecimal Color",type:d.c.Text,validators:[{validator:i.s.pattern(/^#[A-Fa-f0-9]{6}$/)}]}],this.manualValidatorElement=[{name:"vowelsElement",label:"Vowels only",type:d.c.Text,required:!0}]}var a,o,c;return a=n,(o=[{key:"submitManualValidator",value:function(){var e="vowelsElement";this.manualValidateForm.controls[e].value.match(/[^aeiou]/)&&this.manualValidateForm.controls[e].setErrors({consonants:"Only vowel characters. Do not use any consonants."})}}])&&e(a.prototype,o),c&&e(a,c),n}()).\u0275fac=function(e){return new(e||oe)},oe.\u0275cmp=b.Ib({type:oe,selectors:[["dynamic-forms-demo-custom-validation"]],viewQuery:function(e,t){var n;1&e&&b.Ic(Q,!0),2&e&&b.zc(n=b.dc())&&(t.manualValidateForm=n.first)},decls:23,vars:7,consts:[[3,"elements"],["ngFor","",3,"ngForOf"],[3,"tdDynamicFormsError"],["tdDynamicFormsError","hexColorElement"],["manualValidateForm",""],["tdDynamicFormsError","vowelsElement"],["mat-raised-button","","color","primary",1,"text-upper",3,"disabled","click"],[4,"ngIf"]],template:function(e,t){if(1&e&&(b.Ub(0,"h4"),b.Oc(1,"Custom Validation"),b.Tb(),b.Ub(2,"td-dynamic-forms",0),b.Mc(3,K,1,1,"ng-template",1),b.Tb(),b.Pb(4,"mat-divider"),b.Ub(5,"h4"),b.Oc(6,"Multiple Validators"),b.Tb(),b.Ub(7,"td-dynamic-forms",0),b.Mc(8,W,1,1,"ng-template",2),b.Tb(),b.Pb(9,"mat-divider"),b.Ub(10,"h4"),b.Oc(11,"Angular Validators"),b.Tb(),b.Ub(12,"td-dynamic-forms",0),b.Mc(13,ee,1,1,"ng-template",3),b.Tb(),b.Pb(14,"mat-divider"),b.Ub(15,"h4"),b.Oc(16,"Manual Validators"),b.Tb(),b.Ub(17,"td-dynamic-forms",0,4),b.Mc(19,ae,1,1,"ng-template",5),b.Ub(20,"mat-card-actions"),b.Ub(21,"button",6),b.cc("click",function(){return t.submitManualValidator()}),b.Oc(22," Submit "),b.Tb(),b.Tb(),b.Tb()),2&e){var n=b.Ac(18);b.Cb(2),b.mc("elements",t.customValidationElements),b.Cb(1),b.mc("ngForOf",t.customValidationElements),b.Cb(4),b.mc("elements",t.multipleValidatorTypes),b.Cb(1),b.mc("tdDynamicFormsError","passwordElement"),b.Cb(4),b.mc("elements",t.angularValidators),b.Cb(5),b.mc("elements",t.manualValidatorElement),b.Cb(4),b.mc("disabled",!n.valid)}},directives:[p.a,c.m,m.a,h.c,s.b,r.b,c.n],styles:[""]}),oe),ie=o("Bpzi");function re(e,t){}var se=function(e,t){return{control:e,errors:t}};function me(e,t){if(1&e&&(b.Ub(0,"div",2),b.Mc(1,re,0,0,"ng-template",3),b.Tb()),2&e){var n=b.gc();b.Jc("font-size","70","%"),b.Cb(1),b.mc("ngTemplateOutlet",n.errorMessageTemplate)("ngTemplateOutletContext",b.rc(4,se,n.control,null==n.control?null:n.control.errors))}}function le(e,t){1&e&&(b.Ub(0,"span"),b.Oc(1,"No more than 2 chips"),b.Tb())}function de(e,t){if(1&e&&(b.Ub(0,"span"),b.Mc(1,le,2,0,"span",3),b.Tb()),2&e){var n=b.gc().control;b.Cb(1),b.mc("ngIf",n.hasError("invalidChips"))}}function ue(e,t){if(1&e&&b.Mc(0,de,2,1,"span",3),2&e){var n=t.control;b.mc("ngIf",n.touched||!n.pristine)}}function be(e,t){1&e&&b.Mc(0,ue,1,1,"ng-template",2),2&e&&b.mc("tdDynamicFormsError",t.$implicit.name)}var fe,pe,he,ye,ve,ge=((pe=function e(){t(this,e),this.selections=[]}).\u0275fac=function(e){return new(e||pe)},pe.\u0275cmp=b.Ib({type:pe,selectors:[["td-dynamic-input-test"]],decls:2,vars:4,consts:[[3,"items","formControl","placeholder"],["class","tc-red-600",3,"font-size",4,"ngIf"],[1,"tc-red-600"],[3,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(e,t){1&e&&(b.Pb(0,"td-chips",0),b.Mc(1,me,2,7,"div",1)),2&e&&(b.mc("items",t.selections)("formControl",t.control)("placeholder",t.placeholder),b.Cb(1),b.mc("ngIf",t.errorMessageTemplate&&(null==t.control?null:t.control.errors)))},directives:[ie.c,i.m,i.f,c.n,c.s],encapsulation:2}),pe),Te=((fe=function e(){t(this,e),this.customElements=[{name:"custom",type:ge,default:["list1"],selections:["list1","list2","list3"],flex:100,validators:[{validator:function(e){return e.value.length<=2?void 0:{invalidChips:!0}}}],customConfig:{placeholder:"Lists"}}]}).\u0275fac=function(e){return new(e||fe)},fe.\u0275cmp=b.Ib({type:fe,selectors:[["dynamic-forms-demo-custom-elements"]],decls:2,vars:2,consts:[[3,"elements"],["ngFor","",3,"ngForOf"],[3,"tdDynamicFormsError"],[4,"ngIf"]],template:function(e,t){1&e&&(b.Ub(0,"td-dynamic-forms",0),b.Mc(1,be,1,1,"ng-template",1),b.Tb()),2&e&&(b.mc("elements",t.customElements),b.Cb(1),b.mc("ngForOf",t.customElements))},directives:[p.a,c.m,h.c,c.n],styles:[""]}),fe),Ee=[{path:"",component:(he=function e(){t(this,e)},he.\u0275fac=function(e){return new(e||he)},he.\u0275cmp=b.Ib({type:he,selectors:[["dynamic-forms-demo"]],decls:16,vars:16,consts:[[3,"demoId","demoTitle"]],template:function(e,t){1&e&&(b.Ub(0,"demo-component",0),b.Pb(1,"dynamic-forms-demo-text"),b.Tb(),b.Ub(2,"demo-component",0),b.Pb(3,"dynamic-forms-demo-number"),b.Tb(),b.Ub(4,"demo-component",0),b.Pb(5,"dynamic-forms-demo-boolean"),b.Tb(),b.Ub(6,"demo-component",0),b.Pb(7,"dynamic-forms-demo-date"),b.Tb(),b.Ub(8,"demo-component",0),b.Pb(9,"dynamic-forms-demo-array"),b.Tb(),b.Ub(10,"demo-component",0),b.Pb(11,"dynamic-forms-demo-file-input"),b.Tb(),b.Ub(12,"demo-component",0),b.Pb(13,"dynamic-forms-demo-custom-validation"),b.Tb(),b.Ub(14,"demo-component",0),b.Pb(15,"dynamic-forms-demo-custom-elements"),b.Tb()),2&e&&(b.mc("demoId","dynamic-forms-demo-text")("demoTitle","Text / Textarea / Text Input Elements"),b.Cb(2),b.mc("demoId","dynamic-forms-demo-number")("demoTitle","Number Input / Slider Elements"),b.Cb(2),b.mc("demoId","dynamic-forms-demo-boolean")("demoTitle","Boolean / Slide Toggle / Checkbox Elements"),b.Cb(2),b.mc("demoId","dynamic-forms-demo-date")("demoTitle","Date Element"),b.Cb(2),b.mc("demoId","dynamic-forms-demo-array")("demoTitle","Array / Select Element"),b.Cb(2),b.mc("demoId","dynamic-forms-demo-file-input")("demoTitle","File Input Element"),b.Cb(2),b.mc("demoId","dynamic-forms-demo-custom-validation")("demoTitle","Custom Validations"),b.Cb(2),b.mc("demoId","dynamic-forms-demo-custom-elements")("demoTitle","Custom Elements"))},directives:[f.a,C,q,L,$,k,N,ce,Te],styles:[""]}),he)}],Ie=((ye=function e(){t(this,e)}).\u0275mod=b.Mb({type:ye}),ye.\u0275inj=b.Lb({factory:function(e){return new(e||ye)},imports:[[u.g.forChild(Ee)],u.g]}),ye),Ce=o("Krbs"),Me=((ve=function e(){t(this,e)}).\u0275mod=b.Mb({type:ve}),ve.\u0275inj=b.Lb({factory:function(e){return new(e||ve)},imports:[[Ce.a,Ie,l.a,d.a,c.c,i.i,i.q,r.c,s.e,m.b]]}),ve)}}])}();