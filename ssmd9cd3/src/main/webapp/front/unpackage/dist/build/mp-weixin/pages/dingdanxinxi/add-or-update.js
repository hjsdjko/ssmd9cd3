(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/dingdanxinxi/add-or-update"],{"04c7":function(e,n,r){"use strict";var i=r("0a49"),t=r.n(i);t.a},"0846":function(e,n,r){"use strict";r.r(n);var i=r("b92f"),t=r("86f6");for(var a in t)"default"!==a&&function(e){r.d(n,e,(function(){return t[e]}))}(a);r("04c7");var u,o=r("f0c5"),c=Object(o["a"])(t["default"],i["b"],i["c"],!1,null,"3ca6f77e",null,!1,i["a"],u);n["default"]=c.exports},"0a49":function(e,n,r){},"0d3a":function(e,n,r){"use strict";(function(e){r("bed8");i(r("66fd"));var n=i(r("0846"));function i(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,r("543d")["createPage"])},"28a5":function(e,n,r){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=t(r("a34a"));function t(e){return e&&e.__esModule?e:{default:e}}function a(e,n,r,i,t,a,u){try{var o=e[a](u),c=o.value}catch(s){return void r(s)}o.done?n(c):Promise.resolve(c).then(i,t)}function u(e){return function(){var n=this,r=arguments;return new Promise((function(i,t){var u=e.apply(n,r);function o(e){a(u,i,t,o,c,"next",e)}function c(e){a(u,i,t,o,c,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([r.e("common/vendor"),r.e("components/w-picker/w-picker")]).then(function(){return resolve(r("eb07"))}.bind(null,r)).catch(r.oe)},c={data:function(){return{ruleForm:{dingdanhao:this.getUUID(),zhanghao:"",xingming:"",dianhua:"",cheweihao:"",meitianjiage:"",zulinshizhang:"",jiage:"",zulinshijian:"",cheweitupian:"",sfsh:"",shhf:"",ispay:"",clicknum:"",userid:""},user:{},ro:{dingdanhao:!1,zhanghao:!1,xingming:!1,dianhua:!1,cheweihao:!1,meitianjiage:!1,zulinshizhang:!1,jiage:!1,zulinshijian:!1,cheweitupian:!1,sfsh:!1,shhf:!1,ispay:!1,clicknum:!1,userid:!1}}},components:{wPicker:o},computed:{jiage:{get:function(){return 1*this.ruleForm.meitianjiage*this.ruleForm.zulinshizhang}}},onLoad:function(n){var r=this;return u(i.default.mark((function t(){var a,u,o,c;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.getStorageSync("nowTable"),t.next=3,r.$api.session(a);case 3:if(u=t.sent,r.user=u.data,r.ruleForm.zhanghao=r.user.zhanghao,r.ruleForm.xingming=r.user.xingming,r.ruleForm.dianhua=r.user.dianhua,r.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(r.ruleForm.refid=n.refid,r.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){t.next=16;break}return r.ruleForm.id=n.id,t.next=14,r.$api.info("dingdanxinxi",r.ruleForm.id);case 14:u=t.sent,r.ruleForm=u.data;case 16:if(!n.cross){t.next=71;break}o=e.getStorageSync("crossObj"),t.t0=i.default.keys(o);case 19:if((t.t1=t.t0()).done){t.next=71;break}if(c=t.t1.value,"dingdanhao"!=c){t.next=25;break}return r.ruleForm.dingdanhao=o[c],r.ro.dingdanhao=!0,t.abrupt("continue",19);case 25:if("zhanghao"!=c){t.next=29;break}return r.ruleForm.zhanghao=o[c],r.ro.zhanghao=!0,t.abrupt("continue",19);case 29:if("xingming"!=c){t.next=33;break}return r.ruleForm.xingming=o[c],r.ro.xingming=!0,t.abrupt("continue",19);case 33:if("dianhua"!=c){t.next=37;break}return r.ruleForm.dianhua=o[c],r.ro.dianhua=!0,t.abrupt("continue",19);case 37:if("cheweihao"!=c){t.next=41;break}return r.ruleForm.cheweihao=o[c],r.ro.cheweihao=!0,t.abrupt("continue",19);case 41:if("meitianjiage"!=c){t.next=45;break}return r.ruleForm.meitianjiage=o[c],r.ro.meitianjiage=!0,t.abrupt("continue",19);case 45:if("zulinshizhang"!=c){t.next=49;break}return r.ruleForm.zulinshizhang=o[c],r.ro.zulinshizhang=!0,t.abrupt("continue",19);case 49:if("jiage"!=c){t.next=53;break}return r.ruleForm.jiage=o[c],r.ro.jiage=!0,t.abrupt("continue",19);case 53:if("zulinshijian"!=c){t.next=57;break}return r.ruleForm.zulinshijian=o[c],r.ro.zulinshijian=!0,t.abrupt("continue",19);case 57:if("cheweitupian"!=c){t.next=61;break}return r.ruleForm.cheweitupian=o[c],r.ro.cheweitupian=!0,t.abrupt("continue",19);case 61:if("clicknum"!=c){t.next=65;break}return r.ruleForm.clicknum=o[c],r.ro.clicknum=!0,t.abrupt("continue",19);case 65:if("userid"!=c){t.next=69;break}return r.ruleForm.userid=o[c],r.ro.userid=!0,t.abrupt("continue",19);case 69:t.next=19;break;case 71:r.styleChange();case 72:case"end":return t.stop()}}),t)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},zulinshijianConfirm:function(e){console.log(e),this.ruleForm.zulinshijian=e.result,this.$forceUpdate()},cheweitupianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.cheweitupian=e.$base.url+"upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=this;return u(i.default.mark((function n(){return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.ruleForm.jiage=e.jiage,e.ruleForm.zulinshizhang){n.next=4;break}return e.$utils.msg("租赁时长不能为空"),n.abrupt("return");case 4:if(!e.ruleForm.zulinshizhang||e.$validate.isIntNumer(e.ruleForm.zulinshizhang)){n.next=7;break}return e.$utils.msg("租赁时长应输入整数"),n.abrupt("return");case 7:if(e.ruleForm.zulinshijian){n.next=10;break}return e.$utils.msg("租赁时间不能为空"),n.abrupt("return");case 10:if(!e.ruleForm.clicknum||e.$validate.isIntNumer(e.ruleForm.clicknum)){n.next=13;break}return e.$utils.msg("点击次数应输入整数"),n.abrupt("return");case 13:if(e.ruleForm.userid){n.next=16;break}return e.$utils.msg("用户id不能为空"),n.abrupt("return");case 16:if(!e.ruleForm.id){n.next=21;break}return n.next=19,e.$api.update("dingdanxinxi",e.ruleForm);case 19:n.next=23;break;case 21:return n.next=23,e.$api.add("dingdanxinxi",e.ruleForm);case 23:e.$utils.msgBack("提交成功");case 24:case"end":return n.stop()}}),n)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,r=n.getFullYear(),i=n.getMonth()+1,t=n.getDate();return"start"===e?r-=60:"end"===e&&(r+=2),i=i>9?i:"0"+i,t=t>9?t:"0"+t,"".concat(r,"-").concat(i,"-").concat(t)},toggleTab:function(e){this.$refs[e].show()}}};n.default=c}).call(this,r("543d")["default"])},"86f6":function(e,n,r){"use strict";r.r(n);var i=r("28a5"),t=r.n(i);for(var a in i)"default"!==a&&function(e){r.d(n,e,(function(){return i[e]}))}(a);n["default"]=t.a},b92f:function(e,n,r){"use strict";r.d(n,"b",(function(){return t})),r.d(n,"c",(function(){return a})),r.d(n,"a",(function(){return i}));var i={wPicker:function(){return Promise.all([r.e("common/vendor"),r.e("components/w-picker/w-picker")]).then(r.bind(null,"eb07"))}},t=function(){var e=this,n=e.$createElement;e._self._c},a=[]}},[["0d3a","common/runtime","common/vendor"]]]);