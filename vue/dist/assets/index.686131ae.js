import{n as i,p as m}from"./index.46025505.js";var o=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("t-card",[t("t-form",{ref:"form",attrs:{data:e.formData,rules:e.FORM_RULES,"label-align":"top","label-width":100},on:{reset:e.onReset,submit:e.onSubmit}},[t("div",{staticClass:"form-basic-container"},[t("div",{staticClass:"form-basic-item"},[t("div",{staticClass:"form-basic-container-title"},[e._v("\u5408\u540C\u4FE1\u606F")]),t("t-row",{staticClass:"row-gap",attrs:{gutter:[16,24]}},[t("t-col",{attrs:{span:6}},[t("t-form-item",{attrs:{label:"\u5408\u540C\u540D\u79F0",name:"name"}},[t("t-input",{style:{width:"322px"},attrs:{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"},model:{value:e.formData.name,callback:function(a){e.$set(e.formData,"name",a)},expression:"formData.name"}})],1)],1),t("t-col",{attrs:{span:6}},[t("t-form-item",{attrs:{label:"\u5408\u540C\u7C7B\u578B",name:"type"}},[t("t-select",{staticClass:"demo-select-base",style:{width:"322px"},attrs:{placeholder:"\u8BF7\u9009\u62E9\u7C7B\u578B",clearable:""},model:{value:e.formData.type,callback:function(a){e.$set(e.formData,"type",a)},expression:"formData.type"}},e._l(e.typeOptions,function(a,r){return t("t-option",{key:r,attrs:{value:a.value,label:a.label}},[e._v(" "+e._s(a.label)+" ")])}),1)],1)],1),t("t-col",{attrs:{span:8}},[t("t-form-item",{attrs:{label:"\u5408\u540C\u6536\u4ED8\u7C7B\u578B",name:"payment"}},[t("t-radio-group",{model:{value:e.formData.payment,callback:function(a){e.$set(e.formData,"payment",a)},expression:"formData.payment"}},[t("t-radio",{attrs:{value:"1"}},[e._v(" \u6536\u6B3E ")]),t("t-radio",{attrs:{value:"2"}},[e._v(" \u4ED8\u6B3E ")])],1),t("span",{staticClass:"space-item"}),t("t-input",{style:{width:"160px"},attrs:{placeholder:"\u8BF7\u8F93\u5165\u91D1\u989D"}})],1)],1),t("t-col",{attrs:{span:6}},[t("t-form-item",{attrs:{label:"\u7532\u65B9",name:"partyA"}},[t("t-select",{staticClass:"demo-select-base",style:{width:"322px"},attrs:{placeholder:"\u8BF7\u9009\u62E9\u7C7B\u578B",clearable:""},model:{value:e.formData.partyA,callback:function(a){e.$set(e.formData,"partyA",a)},expression:"formData.partyA"}},e._l(e.partyAOptions,function(a,r){return t("t-option",{key:r,attrs:{value:a.value,label:a.label}},[e._v(" "+e._s(a.label)+" ")])}),1)],1)],1),t("t-col",{attrs:{span:6}},[t("t-form-item",{attrs:{label:"\u4E59\u65B9",name:"partyB"}},[t("t-select",{staticClass:"demo-select-base",style:{width:"322px"},attrs:{placeholder:"\u8BF7\u9009\u62E9\u7C7B\u578B",clearable:""},model:{value:e.formData.partyB,callback:function(a){e.$set(e.formData,"partyB",a)},expression:"formData.partyB"}},e._l(e.partyBOptions,function(a,r){return t("t-option",{key:r,attrs:{value:a.value,label:a.label}},[e._v(" "+e._s(a.label)+" ")])}),1)],1)],1),t("t-col",{attrs:{span:6}},[t("t-form-item",{attrs:{label:"\u5408\u540C\u7B7E\u8BA2\u65E5\u671F",name:"signDate"}},[t("t-date-picker",{style:{width:"322px"},attrs:{theme:"primary",mode:"date",separator:"/"},model:{value:e.formData.signDate,callback:function(a){e.$set(e.formData,"signDate",a)},expression:"formData.signDate"}})],1)],1),t("t-col",{attrs:{span:6}},[t("t-form-item",{attrs:{label:"\u5408\u540C\u751F\u6548\u65E5\u671F",name:"startDate"}},[t("t-date-picker",{style:{width:"322px"},attrs:{theme:"primary",mode:"date",separator:"/"},model:{value:e.formData.startDate,callback:function(a){e.$set(e.formData,"startDate",a)},expression:"formData.startDate"}})],1)],1),t("t-col",{attrs:{span:6}},[t("t-form-item",{attrs:{label:"\u5408\u540C\u7ED3\u675F\u65E5\u671F",name:"endDate"}},[t("t-date-picker",{style:{width:"322px"},attrs:{theme:"primary",mode:"date",separator:"/"},model:{value:e.formData.endDate,callback:function(a){e.$set(e.formData,"endDate",a)},expression:"formData.endDate"}})],1)],1),t("t-col",{attrs:{span:6}},[t("t-form-item",{attrs:{label:"",name:"files"}},[t("t-upload",{attrs:{action:"https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo",tips:"\u8BF7\u4E0A\u4F20pdf\u6587\u4EF6\uFF0C\u5927\u5C0F\u572860M\u4EE5\u5185","size-limit":{size:60,unit:"MB"},"format-response":e.formatResponse,"before-upload":e.beforeUpload},on:{fail:e.handleFail},model:{value:e.formData.files,callback:function(a){e.$set(e.formData,"files",a)},expression:"formData.files"}},[t("t-button",{staticClass:"form-submit-upload-btn",attrs:{variant:"outline"}},[e._v(" \u4E0A\u4F20\u5408\u540C\u6587\u4EF6 ")])],1)],1)],1)],1),t("div",{staticClass:"form-basic-container-title form-title-gap"},[e._v("\u5176\u5B83\u4FE1\u606F")]),t("t-form-item",{attrs:{label:"\u5907\u6CE8",name:"comment"}},[t("t-textarea",{attrs:{height:124,placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8"},model:{value:e.formData.comment,callback:function(a){e.$set(e.formData,"comment",a)},expression:"formData.comment"}})],1),t("t-form-item",{attrs:{label:"\u516C\u8BC1\u4EBA"}},[t("t-avatar-group",[t("t-avatar",[e._v("D")]),t("t-avatar",[e._v("S")]),t("t-avatar",[e._v("+")])],1)],1)],1)]),t("div",{staticClass:"form-submit-container"},[t("div",{staticClass:"form-submit-sub"},[t("div",{staticClass:"form-submit-left"},[t("t-button",{staticClass:"form-submit-confirm",attrs:{theme:"primary",type:"submit"}},[e._v(" \u63D0\u4EA4 ")]),t("t-button",{staticClass:"form-submit-cancel",attrs:{type:"reset",theme:"default",variant:"base"}},[e._v(" \u53D6\u6D88 ")])],1)])])])],1)},p=[];o._withStripped=!0;const u={name:"",type:"",partyA:"",partyB:"",signDate:"",startDate:"",endDate:"",payment:"1",amount:0,comment:"",files:[]},c={name:[{required:!0,message:"\u8BF7\u8F93\u5165\u5408\u540C\u540D\u79F0",type:"error"}],type:[{required:!0,message:"\u8BF7\u9009\u62E9\u5408\u540C\u7C7B\u578B",type:"error"}],payment:[{required:!0,message:"\u8BF7\u9009\u62E9\u5408\u540C\u6536\u4ED8\u7C7B\u578B",type:"error"}],amount:[{required:!0,message:"\u8BF7\u8F93\u5165\u5408\u540C\u91D1\u989D",type:"error"}],partyA:[{required:!0,message:"\u8BF7\u9009\u62E9\u7532\u65B9",type:"error"}],partyB:[{required:!0,message:"\u8BF7\u9009\u62E9\u4E59\u65B9",type:"error"}],signDate:[{required:!0,message:"\u8BF7\u9009\u62E9\u65E5\u671F",type:"error"}],startDate:[{required:!0,message:"\u8BF7\u9009\u62E9\u65E5\u671F",type:"error"}],endDate:[{required:!0,message:"\u8BF7\u9009\u62E9\u65E5\u671F",type:"error"}]},f={name:"FormBase",data(){return{prefix:m,stepSuccess:!0,formData:{...u},FORM_RULES:c,typeOptions:[{label:"\u7C7B\u578BA",value:"1"},{label:"\u7C7B\u578BB",value:"2"},{label:"\u7C7B\u578BC",value:"3"}],partyAOptions:[{label:"\u516C\u53F8A",value:"1"},{label:"\u516C\u53F8B",value:"2"},{label:"\u516C\u53F8C",value:"3"}],partyBOptions:[{label:"\u516C\u53F8A",value:"1"},{label:"\u516C\u53F8B",value:"2"},{label:"\u516C\u53F8C",value:"3"}],textareaValue:"",rules:{name:[{required:!0,message:"\u8BF7\u8F93\u5165\u5408\u540C\u540D\u79F0",type:"error"}],type:[{required:!0,message:"\u8BF7\u9009\u62E9\u5408\u540C\u7C7B\u578B",type:"error"}],payment:[{required:!0,message:"\u8BF7\u9009\u62E9\u5408\u540C\u6536\u4ED8\u7C7B\u578B",type:"error"}],amount:[{required:!0,message:"\u8BF7\u8F93\u5165\u5408\u540C\u91D1\u989D",type:"error"}],partyA:[{required:!0,message:"\u8BF7\u9009\u62E9\u7532\u65B9",type:"error"}],partyB:[{required:!0,message:"\u8BF7\u9009\u62E9\u4E59\u65B9",type:"error"}],signDate:[{required:!0,message:"\u8BF7\u9009\u62E9\u65E5\u671F",type:"error"}],startDate:[{required:!0,message:"\u8BF7\u9009\u62E9\u65E5\u671F",type:"error"}],endDate:[{required:!0,message:"\u8BF7\u9009\u62E9\u65E5\u671F",type:"error"}]}}},methods:{handleFail({file:e}){this.$message.error(`\u6587\u4EF6 ${e.name} \u4E0A\u4F20\u5931\u8D25`)},beforeUpload(e){return/\.(pdf)$/.test(e.name)?!0:(this.$message.warning("\u8BF7\u4E0A\u4F20pdf\u6587\u4EF6"),!1)},formatResponse(e){return{...e,error:"\u4E0A\u4F20\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5",url:e.url}},changeStatus(){this.stepSuccess=!this.stepSuccess},onReset(){this.$message.warning("\u53D6\u6D88\u65B0\u5EFA")},onSubmit({validateResult:e}){e===!0&&this.$message.success("\u65B0\u5EFA\u6210\u529F")}}},l={};var n=i(f,o,p,!1,d,"3354442a",null,null);function d(e){for(let s in l)this[s]=l[s]}n.options.__file="src/pages/form/base/index.vue";var y=function(){return n.exports}();export{y as default};