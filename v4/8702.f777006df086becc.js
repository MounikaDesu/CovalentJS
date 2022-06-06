"use strict";(self.webpackChunkdocs_app=self.webpackChunkdocs_app||[]).push([[8702],{38702:(fe,d,s)=>{s.r(d),s.d(d,{DynamicFormsDemoModule:()=>_e});var i=s(69808),c=s(93075),u=s(47423),_=s(9224),f=s(4834),a=s(37863),y=s(4521),e=s(5e3),g=s(48763),l=s(84140),p=s(31655);function D(t,o){if(1&t&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&t){const n=e.oxw(3).$implicit;e.xp6(1),e.hij("Min length value: ",n.minLength,"")}}function T(t,o){if(1&t&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&t){const n=e.oxw(3).$implicit;e.xp6(1),e.hij("Max length value: ",n.minLength,"")}}function C(t,o){if(1&t&&(e.TgZ(0,"span"),e.YNc(1,D,2,1,"span",3),e.YNc(2,T,2,1,"span",3),e.qZA()),2&t){const n=e.oxw().control;e.xp6(1),e.Q6J("ngIf",n.hasError("minlength")),e.xp6(1),e.Q6J("ngIf",n.hasError("maxlength"))}}function F(t,o){if(1&t&&e.YNc(0,C,3,2,"span",3),2&t){const n=o.control;e.Q6J("ngIf",n.touched||!n.pristine)}}function x(t,o){1&t&&e.YNc(0,F,1,1,"ng-template",2),2&t&&e.Q6J("tdDynamicFormsError",o.$implicit.name)}let h=(()=>{class t{constructor(){this.textElements=[{name:"input",hint:"this is an input hint",type:a.Xl.Input,required:!1,flex:50},{name:"requiredInput",label:"Input Label",placeholder:"Input Placeholder",type:a.Xl.Input,required:!0,flex:50},{name:"textLength",label:"Text Length",type:a.Xl.Input,minLength:4,maxLength:12,flex:50},{name:"text",type:a.J0.Text,required:!1,default:"Default",flex:50,disabled:!0},{name:"textarea",hint:"this is a textarea hint",type:a.Xl.Textarea,required:!1},{name:"requiredPassword",label:"Password Label",type:a.Xl.Password,required:!0}]}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["dynamic-forms-demo-text"]],decls:2,vars:2,consts:[[3,"elements"],["ngFor","",3,"ngForOf"],[3,"tdDynamicFormsError"],[4,"ngIf"]],template:function(n,m){1&n&&(e.TgZ(0,"td-dynamic-forms",0),e.YNc(1,x,1,1,"ng-template",1),e.qZA()),2&n&&(e.Q6J("elements",m.textElements),e.xp6(1),e.Q6J("ngForOf",m.textElements))},directives:[l.k,i.sg,p.jN,i.O5],styles:[""]}),t})();function Z(t,o){if(1&t&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&t){const n=e.oxw(3).$implicit;e.xp6(1),e.hij("Min value: ",n.min,"")}}function v(t,o){if(1&t&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&t){const n=e.oxw(3).$implicit;e.xp6(1),e.hij("Max value: ",n.max,"")}}function E(t,o){if(1&t&&(e.TgZ(0,"span"),e.YNc(1,Z,2,1,"span",3),e.YNc(2,v,2,1,"span",3),e.qZA()),2&t){const n=e.oxw().control;e.xp6(1),e.Q6J("ngIf",n.hasError("min")),e.xp6(1),e.Q6J("ngIf",n.hasError("max"))}}function J(t,o){if(1&t&&e.YNc(0,E,3,2,"span",3),2&t){const n=o.control;e.Q6J("ngIf",n.touched||!n.pristine)}}function b(t,o){1&t&&e.YNc(0,J,1,1,"ng-template",2),2&t&&e.Q6J("tdDynamicFormsError",o.$implicit.name)}let V=(()=>{class t{constructor(){this.numberElements=[{name:"number",label:"Number",type:a.J0.Number,required:!0,min:18,max:70},{name:"slider",type:a.Xl.Slider,hint:"this is a slider hint",min:18,max:70}]}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["dynamic-forms-demo-number"]],decls:2,vars:2,consts:[[3,"elements"],["ngFor","",3,"ngForOf"],[3,"tdDynamicFormsError"],[4,"ngIf"]],template:function(n,m){1&n&&(e.TgZ(0,"td-dynamic-forms",0),e.YNc(1,b,1,1,"ng-template",1),e.qZA()),2&n&&(e.Q6J("elements",m.numberElements),e.xp6(1),e.Q6J("ngForOf",m.numberElements))},directives:[l.k,i.sg,p.jN,i.O5],styles:[""]}),t})(),N=(()=>{class t{constructor(){this.booleanElements=[{name:"boolean",label:"Boolean Label",type:a.J0.Boolean,hint:"this is a boolean",default:!1},{name:"slideToggle",type:a.Xl.SlideToggle,hint:"this is a slide toggle",default:!0},{name:"checkbox",type:a.Xl.Checkbox,hint:"this is a checkbox"}]}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["dynamic-forms-demo-boolean"]],decls:1,vars:1,consts:[[3,"elements"]],template:function(n,m){1&n&&e._UZ(0,"td-dynamic-forms",0),2&n&&e.Q6J("elements",m.booleanElements)},directives:[l.k],styles:[""]}),t})(),Q=(()=>{class t{constructor(){this.dateElements=[{name:"dateInput",label:"Select a date",hint:"this is a datepicker hint",type:a.Xl.Datepicker,min:new Date(2018,1,1).setHours(0,0,0,0)}]}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["dynamic-forms-demo-date"]],decls:1,vars:1,consts:[[3,"elements"]],template:function(n,m){1&n&&e._UZ(0,"td-dynamic-forms",0),2&n&&e.Q6J("elements",m.dateElements)},directives:[l.k],styles:[""]}),t})(),A=(()=>{class t{constructor(){this.arrayElements=[{name:"array",type:a.J0.Array,selections:["Test1","Test2","Test3","Test4"],default:"Test1"},{name:"requiredSelect",type:a.Xl.Select,selections:["Test1","Test2","Test3","Test4"],required:!0},{name:"requiredMultipleSelect",type:a.Xl.Select,multiple:!0,selections:["Test1","Test2","Test3","Test4"],required:!0},{name:"valueLabelSelect",hint:"this is a select hint",type:a.Xl.Select,selections:[{label:"Test1",value:1},{label:"Test2",value:2},{label:"Test3",value:3},{label:"Test4",value:4}],required:!0}]}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["dynamic-forms-demo-array"]],decls:1,vars:1,consts:[[3,"elements"]],template:function(n,m){1&n&&e._UZ(0,"td-dynamic-forms",0),2&n&&e.Q6J("elements",m.arrayElements)},directives:[l.k],styles:[""]}),t})(),I=(()=>{class t{constructor(){this.fileElements=[{name:"fileInput",label:"Browse a file",hint:"this is a file input hint",type:a.Xl.FileInput}]}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["dynamic-forms-demo-file-input"]],decls:1,vars:1,consts:[[3,"elements"]],template:function(n,m){1&n&&e._UZ(0,"td-dynamic-forms",0),2&n&&e.Q6J("elements",m.fileElements)},directives:[l.k],styles:[""]}),t})();const q=["manualValidateForm"];function U(t,o){1&t&&(e.TgZ(0,"span"),e._uU(1,"Must be even."),e.qZA())}function Y(t,o){1&t&&(e.TgZ(0,"span"),e._uU(1,"Must be odd."),e.qZA())}function w(t,o){if(1&t&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&t){const n=e.oxw(3).$implicit;e.xp6(1),e.hij("Must be greater than ",n.min,".")}}function M(t,o){if(1&t&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&t){const n=e.oxw(3).$implicit;e.xp6(1),e.hij("Must be less than ",n.max,".")}}function X(t,o){if(1&t&&(e.TgZ(0,"span"),e.YNc(1,U,2,0,"span",7),e.YNc(2,Y,2,0,"span",7),e.YNc(3,w,2,1,"span",7),e.YNc(4,M,2,1,"span",7),e.qZA()),2&t){const n=e.oxw().control;e.xp6(1),e.Q6J("ngIf",n.hasError("even")),e.xp6(1),e.Q6J("ngIf",n.hasError("odd")),e.xp6(1),e.Q6J("ngIf",n.hasError("min")),e.xp6(1),e.Q6J("ngIf",n.hasError("max"))}}function O(t,o){if(1&t&&e.YNc(0,X,5,4,"span",7),2&t){const n=o.control;e.Q6J("ngIf",n.touched||!n.pristine)}}function S(t,o){1&t&&e.YNc(0,O,1,1,"ng-template",2),2&t&&e.Q6J("tdDynamicFormsError",o.$implicit.name)}function j(t,o){1&t&&(e.TgZ(0,"span"),e._uU(1,"Must contain at least 1 number."),e.qZA())}function B(t,o){1&t&&(e.TgZ(0,"span"),e._uU(1,"Password needs from 8 - 20 characters."),e.qZA())}function L(t,o){1&t&&(e.TgZ(0,"span"),e._uU(1,"Need at least one special character (!, @, #, $, %)."),e.qZA())}function $(t,o){if(1&t&&(e.TgZ(0,"span"),e.YNc(1,j,2,0,"span",7),e.YNc(2,B,2,0,"span",7),e.YNc(3,L,2,0,"span",7),e.qZA()),2&t){const n=e.oxw().control;e.xp6(1),e.Q6J("ngIf",n.hasError("oneNumber")),e.xp6(1),e.Q6J("ngIf",n.hasError("length")),e.xp6(1),e.Q6J("ngIf",n.hasError("oneSpecialChar"))}}function k(t,o){if(1&t&&e.YNc(0,$,4,3,"span",7),2&t){const n=o.control;e.Q6J("ngIf",n.touched||!n.pristine)}}function P(t,o){1&t&&(e.TgZ(0,"span"),e._uU(1,"Only hex color characters."),e.qZA())}function R(t,o){if(1&t&&(e.TgZ(0,"span"),e.YNc(1,P,2,0,"span",7),e.qZA()),2&t){const n=e.oxw().control;e.xp6(1),e.Q6J("ngIf",n.hasError("pattern"))}}function z(t,o){if(1&t&&e.YNc(0,R,2,1,"span",7),2&t){const n=o.control;e.Q6J("ngIf",n.touched||!n.pristine)}}function H(t,o){if(1&t&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&t){const n=e.oxw(2).control;e.xp6(1),e.Oqu(n.errors.consonants)}}function W(t,o){if(1&t&&(e.TgZ(0,"span"),e.YNc(1,H,2,1,"span",7),e.qZA()),2&t){const n=e.oxw().control;e.xp6(1),e.Q6J("ngIf",n.hasError("consonants"))}}function G(t,o){if(1&t&&e.YNc(0,W,2,1,"span",7),2&t){const n=o.control;e.Q6J("ngIf",n.touched||!n.pristine)}}let K=(()=>{class t{constructor(){this.customValidationElements=[{name:"evenElement",label:"Even Number",type:a.J0.Number,validators:[{validator:n=>!n.value&&0!==n.value||n.value%2==0?null:{even:!0}}]}],this.multipleValidatorTypes=[{name:"passwordElement",label:"Password",type:a.Xl.Password,required:!0,validators:[{validator:n=>/\d/i.test(n.value)?null:{oneNumber:!0}},{validator:n=>n.value&&n.value.length>=8&&n.value.length<=20?null:{length:!0}},{validator:n=>new RegExp("["+["!","@","#","$","%"].join("").toString()+"]","g").test(n.value)?null:{oneSpecialChar:!0}}]}],this.angularValidators=[{name:"hexColorElement",label:"Hexidecimal Color",type:a.J0.Text,validators:[{validator:c.kI.pattern(/^#[A-Fa-f0-9]{6}$/)}]}],this.manualValidatorElement=[{name:"vowelsElement",label:"Vowels only",type:a.J0.Text,required:!0}]}submitManualValidator(){const n="vowelsElement";this.manualValidateForm.controls[n].value.match(/[^aeiou]/)&&this.manualValidateForm.controls[n].setErrors({consonants:"Only vowel characters. Do not use any consonants."})}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["dynamic-forms-demo-custom-validation"]],viewQuery:function(n,m){if(1&n&&e.Gf(q,7),2&n){let r;e.iGM(r=e.CRH())&&(m.manualValidateForm=r.first)}},decls:23,vars:7,consts:[[3,"elements"],["ngFor","",3,"ngForOf"],[3,"tdDynamicFormsError"],["tdDynamicFormsError","hexColorElement"],["manualValidateForm",""],["tdDynamicFormsError","vowelsElement"],["mat-raised-button","","color","primary",1,"text-upper",3,"disabled","click"],[4,"ngIf"]],template:function(n,m){if(1&n&&(e.TgZ(0,"h4"),e._uU(1,"Custom Validation"),e.qZA(),e.TgZ(2,"td-dynamic-forms",0),e.YNc(3,S,1,1,"ng-template",1),e.qZA(),e._UZ(4,"mat-divider"),e.TgZ(5,"h4"),e._uU(6,"Multiple Validators"),e.qZA(),e.TgZ(7,"td-dynamic-forms",0),e.YNc(8,k,1,1,"ng-template",2),e.qZA(),e._UZ(9,"mat-divider"),e.TgZ(10,"h4"),e._uU(11,"Angular Validators"),e.qZA(),e.TgZ(12,"td-dynamic-forms",0),e.YNc(13,z,1,1,"ng-template",3),e.qZA(),e._UZ(14,"mat-divider"),e.TgZ(15,"h4"),e._uU(16,"Manual Validators"),e.qZA(),e.TgZ(17,"td-dynamic-forms",0,4),e.YNc(19,G,1,1,"ng-template",5),e.TgZ(20,"mat-card-actions"),e.TgZ(21,"button",6),e.NdJ("click",function(){return m.submitManualValidator()}),e._uU(22," Submit "),e.qZA(),e.qZA(),e.qZA()),2&n){const r=e.MAs(18);e.xp6(2),e.Q6J("elements",m.customValidationElements),e.xp6(1),e.Q6J("ngForOf",m.customValidationElements),e.xp6(4),e.Q6J("elements",m.multipleValidatorTypes),e.xp6(1),e.Q6J("tdDynamicFormsError","passwordElement"),e.xp6(4),e.Q6J("elements",m.angularValidators),e.xp6(5),e.Q6J("elements",m.manualValidatorElement),e.xp6(4),e.Q6J("disabled",!r.valid)}},directives:[l.k,i.sg,p.jN,i.O5,f.d,_.hq,u.lW],styles:[""]}),t})();var ee=s(36634);function te(t,o){}const ne=function(t,o){return{control:t,errors:o}};function oe(t,o){if(1&t&&(e.TgZ(0,"div",2),e.YNc(1,te,0,0,"ng-template",3),e.qZA()),2&t){const n=e.oxw();e.xp6(1),e.Q6J("ngTemplateOutlet",n.errorMessageTemplate)("ngTemplateOutletContext",e.WLB(2,ne,n.control,null==n.control?null:n.control.errors))}}function me(t,o){1&t&&(e.TgZ(0,"span"),e._uU(1,"This field cannot be empty"),e.qZA())}function ae(t,o){if(1&t&&(e.TgZ(0,"span"),e.YNc(1,me,2,0,"span",3),e.qZA()),2&t){const n=e.oxw().control;e.xp6(1),e.Q6J("ngIf",n.hasError("required"))}}function se(t,o){if(1&t&&(e._UZ(0,"br"),e._uU(1,"Validation: "),e.YNc(2,ae,2,1,"span",3)),2&t){const n=o.control;e.xp6(2),e.Q6J("ngIf",n.touched||!n.pristine)}}function ie(t,o){1&t&&e.YNc(0,se,3,1,"ng-template",2),2&t&&e.Q6J("tdDynamicFormsError",o.$implicit.name)}let le=(()=>{class t{constructor(){this.selections=[]}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["td-dynamic-input-test"]],decls:2,vars:4,consts:[["ngDefaultControl","",3,"formControl"],["class","tc-red-600",4,"ngIf"],[1,"tc-red-600"],[3,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(n,m){1&n&&(e._UZ(0,"td-code-editor",0),e.YNc(1,oe,2,5,"div",1)),2&n&&(e.Udp("height",300,"px"),e.Q6J("formControl",m.control),e.xp6(1),e.Q6J("ngIf",m.errorMessageTemplate&&(null==m.control?null:m.control.errors)))},directives:[ee.dD,c.Fj,c.JJ,c.oH,i.O5,i.tP],encapsulation:2}),t})(),re=(()=>{class t{constructor(){this.customElements=[{name:"custom",type:le,default:"SELECT * from dynamic.element",flex:100,validators:[{validator:n=>{var m;return(null===(m=n.value)||void 0===m?void 0:m.length)?null:{required:!0}}}],customConfig:{placeholder:"Lists"}}]}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["dynamic-forms-demo-custom-elements"]],decls:8,vars:2,consts:[[3,"elements"],["ngFor","",3,"ngForOf"],[3,"tdDynamicFormsError"],[4,"ngIf"]],template:function(n,m){1&n&&(e._uU(0,"Using td-code-editor component as a custom dynamic element "),e._UZ(1,"br"),e._UZ(2,"br"),e.TgZ(3,"td-dynamic-forms",0),e.YNc(4,ie,1,1,"ng-template",1),e.qZA(),e.TgZ(5,"em"),e._uU(6,"Try typing then leaving field blank to see error validation"),e.qZA(),e._UZ(7,"br")),2&n&&(e.xp6(3),e.Q6J("elements",m.customElements),e.xp6(1),e.Q6J("ngForOf",m.customElements))},directives:[l.k,i.sg,p.jN,i.O5],styles:[""]}),t})();const ce=[{path:"",component:(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["dynamic-forms-demo"]],decls:16,vars:16,consts:[[3,"demoId","demoTitle"]],template:function(n,m){1&n&&(e.TgZ(0,"demo-component",0),e._UZ(1,"dynamic-forms-demo-text"),e.qZA(),e.TgZ(2,"demo-component",0),e._UZ(3,"dynamic-forms-demo-number"),e.qZA(),e.TgZ(4,"demo-component",0),e._UZ(5,"dynamic-forms-demo-boolean"),e.qZA(),e.TgZ(6,"demo-component",0),e._UZ(7,"dynamic-forms-demo-date"),e.qZA(),e.TgZ(8,"demo-component",0),e._UZ(9,"dynamic-forms-demo-array"),e.qZA(),e.TgZ(10,"demo-component",0),e._UZ(11,"dynamic-forms-demo-file-input"),e.qZA(),e.TgZ(12,"demo-component",0),e._UZ(13,"dynamic-forms-demo-custom-validation"),e.qZA(),e.TgZ(14,"demo-component",0),e._UZ(15,"dynamic-forms-demo-custom-elements"),e.qZA()),2&n&&(e.Q6J("demoId","dynamic-forms-demo-text")("demoTitle","Text / Textarea / Text Input Elements"),e.xp6(2),e.Q6J("demoId","dynamic-forms-demo-number")("demoTitle","Number Input / Slider Elements"),e.xp6(2),e.Q6J("demoId","dynamic-forms-demo-boolean")("demoTitle","Boolean / Slide Toggle / Checkbox Elements"),e.xp6(2),e.Q6J("demoId","dynamic-forms-demo-date")("demoTitle","Date Element"),e.xp6(2),e.Q6J("demoId","dynamic-forms-demo-array")("demoTitle","Array / Select Element"),e.xp6(2),e.Q6J("demoId","dynamic-forms-demo-file-input")("demoTitle","File Input Element"),e.xp6(2),e.Q6J("demoId","dynamic-forms-demo-custom-validation")("demoTitle","Custom Validations"),e.xp6(2),e.Q6J("demoId","dynamic-forms-demo-custom-elements")("demoTitle","Custom Elements"))},directives:[g.z,h,V,N,Q,A,I,K,re],styles:[""]}),t})()}];let pe=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[y.Bz.forChild(ce)],y.Bz]}),t})();var de=s(92234),ue=s(52481);let _e=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[de.l,pe,a.gd,ue.T,i.ez,c.u5,c.UX,u.ot,_.QW,f.t]]}),t})()}}]);