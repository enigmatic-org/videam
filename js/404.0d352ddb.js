(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["404-vue"],{"0fd9":function(t,n,e){"use strict";e("99af"),e("4160"),e("caad"),e("13d5"),e("4ec9"),e("b64b"),e("d3b7"),e("ac1f"),e("2532"),e("3ca3"),e("5319"),e("159b"),e("ddb0");var a=e("ade3"),r=e("5530"),c=(e("4b85"),e("2b0e")),o=e("d9f7"),i=e("80d2"),u=["sm","md","lg","xl"],s=["start","end","center"];function l(t,n){return u.reduce((function(e,a){return e[t+Object(i["u"])(a)]=n(),e}),{})}var f=function(t){return[].concat(s,["baseline","stretch"]).includes(t)},d=l("align",(function(){return{type:String,default:null,validator:f}})),b=function(t){return[].concat(s,["space-between","space-around"]).includes(t)},g=l("justify",(function(){return{type:String,default:null,validator:b}})),p=function(t){return[].concat(s,["space-between","space-around","stretch"]).includes(t)},v=l("alignContent",(function(){return{type:String,default:null,validator:p}})),y={align:Object.keys(d),justify:Object.keys(g),alignContent:Object.keys(v)},j={align:"align",justify:"justify",alignContent:"align-content"};function m(t,n,e){var a=j[t];if(null!=e){if(n){var r=n.replace(t,"");a+="-".concat(r)}return a+="-".concat(e),a.toLowerCase()}}var h=new Map;n["a"]=c["a"].extend({name:"v-row",functional:!0,props:Object(r["a"])(Object(r["a"])(Object(r["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:f}},d),{},{justify:{type:String,default:null,validator:b}},g),{},{alignContent:{type:String,default:null,validator:p}},v),render:function(t,n){var e=n.props,r=n.data,c=n.children,i="";for(var u in e)i+=String(e[u]);var s=h.get(i);return s||function(){var t,n;for(n in s=[],y)y[n].forEach((function(t){var a=e[t],r=m(n,t,a);r&&s.push(r)}));s.push((t={"no-gutters":e.noGutters,"row--dense":e.dense},Object(a["a"])(t,"align-".concat(e.align),e.align),Object(a["a"])(t,"justify-".concat(e.justify),e.justify),Object(a["a"])(t,"align-content-".concat(e.alignContent),e.alignContent),t)),h.set(i,s)}(),t(e.tag,Object(o["a"])(r,{staticClass:"row",class:s}),c)}})},"16f4":function(t,n,e){t.exports=e.p+"img/404.3382744b.png"},"4b85":function(t,n,e){},"4ec9":function(t,n,e){"use strict";var a=e("6d61"),r=e("6566");t.exports=a("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),r)},"62ad":function(t,n,e){"use strict";e("4160"),e("caad"),e("13d5"),e("45fc"),e("4ec9"),e("a9e3"),e("b64b"),e("d3b7"),e("ac1f"),e("3ca3"),e("5319"),e("2ca0"),e("159b"),e("ddb0");var a=e("ade3"),r=e("5530"),c=(e("4b85"),e("2b0e")),o=e("d9f7"),i=e("80d2"),u=["sm","md","lg","xl"],s=function(){return u.reduce((function(t,n){return t[n]={type:[Boolean,String,Number],default:!1},t}),{})}(),l=function(){return u.reduce((function(t,n){return t["offset"+Object(i["u"])(n)]={type:[String,Number],default:null},t}),{})}(),f=function(){return u.reduce((function(t,n){return t["order"+Object(i["u"])(n)]={type:[String,Number],default:null},t}),{})}(),d={col:Object.keys(s),offset:Object.keys(l),order:Object.keys(f)};function b(t,n,e){var a=t;if(null!=e&&!1!==e){if(n){var r=n.replace(t,"");a+="-".concat(r)}return"col"!==t||""!==e&&!0!==e?(a+="-".concat(e),a.toLowerCase()):a.toLowerCase()}}var g=new Map;n["a"]=c["a"].extend({name:"v-col",functional:!0,props:Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])({cols:{type:[Boolean,String,Number],default:!1}},s),{},{offset:{type:[String,Number],default:null}},l),{},{order:{type:[String,Number],default:null}},f),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,n){var e=n.props,r=n.data,c=n.children,i=(n.parent,"");for(var u in e)i+=String(e[u]);var s=g.get(i);return s||function(){var t,n;for(n in s=[],d)d[n].forEach((function(t){var a=e[t],r=b(n,t,a);r&&s.push(r)}));var r=s.some((function(t){return t.startsWith("col-")}));s.push((t={col:!r||!e.cols},Object(a["a"])(t,"col-".concat(e.cols),e.cols),Object(a["a"])(t,"offset-".concat(e.offset),e.offset),Object(a["a"])(t,"order-".concat(e.order),e.order),Object(a["a"])(t,"align-self-".concat(e.alignSelf),e.alignSelf),t)),g.set(i,s)}(),t(e.tag,Object(o["a"])(r,{class:s}),c)}})},"8cdb":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-container",[a("v-row",{attrs:{align:"center"}},[a("v-col",{staticClass:"pa-10",attrs:{md:"6",align:"center"}},[a("v-img",{attrs:{alt:"404 logo",src:e("16f4")}})],1),a("v-col",{attrs:{md:"6",align:"center"}},[a("h4",{staticClass:"text-h4 font-weight-black my-8"},[t._v("Page not found")]),a("h5",{staticClass:"text-h5 font-weight-medium mb-2"},[t._v("There is no one here")]),a("h6",{staticClass:"text-h6 font-weight-light mb-4"},[t._v(" If you follow the direction you can survive ")]),a("v-btn",{staticClass:"elevation-0 mb-13",attrs:{to:"/",rounded:"",color:"primary"}},[a("v-icon",{staticClass:"mr-2"},[t._v("mdi-arrow-left")]),t._v(" Go home ")],1)],1)],1)],1)},r=[],c={name:"Err404.vue"},o=c,i=e("2877"),u=e("6544"),s=e.n(u),l=e("8336"),f=e("62ad"),d=e("a523"),b=e("132d"),g=e("adda"),p=e("0fd9"),v=Object(i["a"])(o,a,r,!1,null,null,null);n["default"]=v.exports;s()(v,{VBtn:l["a"],VCol:f["a"],VContainer:d["a"],VIcon:b["a"],VImg:g["a"],VRow:p["a"]})},a523:function(t,n,e){"use strict";e("99af"),e("4de4"),e("b64b"),e("2ca0"),e("20f6"),e("4b85");var a=e("e8f2"),r=e("d9f7");n["a"]=Object(a["a"])("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,n){var e,a=n.props,c=n.data,o=n.children,i=c.attrs;return i&&(c.attrs={},e=Object.keys(i).filter((function(t){if("slot"===t)return!1;var n=i[t];return t.startsWith("data-")?(c.attrs[t]=n,!1):n||"string"===typeof n}))),a.id&&(c.domProps=c.domProps||{},c.domProps.id=a.id),t(a.tag,Object(r["a"])(c,{staticClass:"container",class:Array({"container--fluid":a.fluid}).concat(e||[])}),o)}})},e8f2:function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));e("99af"),e("4de4"),e("a15b"),e("b64b"),e("2ca0"),e("498a");var a=e("2b0e");function r(t){return a["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(n,e){var a=e.props,r=e.data,c=e.children;r.staticClass="".concat(t," ").concat(r.staticClass||"").trim();var o=r.attrs;if(o){r.attrs={};var i=Object.keys(o).filter((function(t){if("slot"===t)return!1;var n=o[t];return t.startsWith("data-")?(r.attrs[t]=n,!1):n||"string"===typeof n}));i.length&&(r.staticClass+=" ".concat(i.join(" ")))}return a.id&&(r.domProps=r.domProps||{},r.domProps.id=a.id),n(a.tag,r,c)}})}}}]);
//# sourceMappingURL=404.0d352ddb.js.map