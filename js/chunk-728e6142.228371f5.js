(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-728e6142"],{"1dde":function(t,r,e){var n=e("d039"),c=e("b622"),o=e("2d00"),a=c("species");t.exports=function(t){return o>=51||!n((function(){var r=[],e=r.constructor={};return e[a]=function(){return{foo:1}},1!==r[t](Boolean).foo}))}},"65f0":function(t,r,e){var n=e("861d"),c=e("e8b5"),o=e("b622"),a=o("species");t.exports=function(t,r){var e;return c(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!c(e.prototype)?n(e)&&(e=e[a],null===e&&(e=void 0)):e=void 0),new(void 0===e?Array:e)(0===r?0:r)}},"6d09":function(t,r,e){"use strict";e.r(r);var n=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[e("h2",[t._v("This is an admin Products Page")]),e("table",{staticClass:"table mt-2 rounded"},[t._m(0),e("tbody",t._l(t.products,(function(r){return e("tr",{key:r.id},[e("th",{staticClass:"text-center p-3",attrs:{scope:"row"}},[t._v(t._s(r.category))]),e("td",{staticClass:"text-center p-3"},[t._v(t._s(r.title))]),e("td",{staticClass:"text-center p-3"},[t._v(t._s(r.origin_price))]),e("td",{staticClass:"text-center p-3"},[t._v(t._s(r.price))])])})),0)])])},c=[function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("thead",{staticClass:"alert-success"},[e("tr",[e("th",{staticClass:"text-center border-0",attrs:{width:"120"}},[t._v("分類")]),e("th",{staticClass:"text-center border-0",attrs:{width:"120"}},[t._v("產品名稱")]),e("th",{staticClass:"text-center border-0",attrs:{width:"120"}},[t._v("牌價")]),e("th",{staticClass:"text-center border-0",attrs:{width:"120"}},[t._v("售價")])])])}],o=(e("99af"),{data:function(){return{products:{imageUrl:[]}}},props:["token"],created:function(){var t=this,r="".concat("https://course-ec-api.hexschool.io/api/").concat("8a8058c0-58d2-485b-b7fc-3c9be181cca7","/admin/ec/products");this.$http.get(r).then((function(r){console.log(r),t.products=r.data.data}))}}),a=o,s=e("2877"),i=Object(s["a"])(a,n,c,!1,null,null,null);r["default"]=i.exports},8418:function(t,r,e){"use strict";var n=e("c04e"),c=e("9bf2"),o=e("5c6c");t.exports=function(t,r,e){var a=n(r);a in t?c.f(t,a,o(0,e)):t[a]=e}},"99af":function(t,r,e){"use strict";var n=e("23e7"),c=e("d039"),o=e("e8b5"),a=e("861d"),s=e("7b0b"),i=e("50c4"),u=e("8418"),d=e("65f0"),f=e("1dde"),l=e("b622"),p=e("2d00"),h=l("isConcatSpreadable"),v=9007199254740991,b="Maximum allowed index exceeded",_=p>=51||!c((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),x=f("concat"),w=function(t){if(!a(t))return!1;var r=t[h];return void 0!==r?!!r:o(t)},y=!_||!x;n({target:"Array",proto:!0,forced:y},{concat:function(t){var r,e,n,c,o,a=s(this),f=d(a,0),l=0;for(r=-1,n=arguments.length;r<n;r++)if(o=-1===r?a:arguments[r],w(o)){if(c=i(o.length),l+c>v)throw TypeError(b);for(e=0;e<c;e++,l++)e in o&&u(f,l,o[e])}else{if(l>=v)throw TypeError(b);u(f,l++,o)}return f.length=l,f}})},e8b5:function(t,r,e){var n=e("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}}}]);
//# sourceMappingURL=chunk-728e6142.228371f5.js.map