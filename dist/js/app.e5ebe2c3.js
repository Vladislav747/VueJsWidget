(function(e){function t(t){for(var n,c,i=t[0],u=t[1],l=t[2],p=0,f=[];p<i.length;p++)c=i[p],Object.prototype.hasOwnProperty.call(s,c)&&s[c]&&f.push(s[c][0]),s[c]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);o&&o(t);while(f.length)f.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,i=1;i<r.length;i++){var u=r[i];0!==s[u]&&(n=!1)}n&&(a.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},s={app:0},a=[];function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var o=u;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("85ec"),s=r.n(n);s.a},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("Toolbar",{on:{newElement:e.calculateCurrency}}),r("CurrencyCards",{attrs:{currencyType:this.currency,filteredCurrencies:this.filteredCurrencies}})],1)},a=[],c=(r("4de4"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"tab-content currency__body"},[r("div",{staticClass:"tab-pane active",attrs:{id:"tab_usd"}},[r("div",{staticClass:"input-wrapper"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.currValue,expression:"currValue"}],attrs:{type:"text",id:"input__curr",placeholder:"0"},domProps:{value:e.currValue},on:{input:function(t){t.target.composing||(e.currValue=t.target.value)}}}),r("span",{staticClass:"currencyType"},[e._v(e._s(e.currencyType))])]),r("div",{staticClass:"cards"},e._l(e.displayElements,(function(t){return r("currency-card",{key:t,attrs:{sum:e.currValue,currency:e.currencyType,convertCurrency:t}})})),1),r("div",{staticClass:"pagination-wrapper"},[r("div",{staticClass:"pagination_el pagination__prev"},[r("span",{on:{click:function(t){return t.preventDefault(),e.prevPage(t)}}},[e._v("Назад")])]),r("div",{staticClass:"pagination_el pagination__next"},[r("span",{on:{click:function(t){return t.preventDefault(),e.nextPage(t)}}},[e._v("Далее")])])])])])}),i=[],u=(r("fb6a"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card__item"},[r("div",{staticClass:"first"},[r("span",{staticClass:"first__number"},[e._v(e._s(e.sum)+" ")]),r("span",{staticClass:"first__cur"},[e._v(e._s(e.currency)+" =")])]),r("div",{staticClass:"second"},[r("span",{staticClass:"second__number"},[e._v(e._s(e.convertSum)+" ")]),r("span",{staticClass:"second__cur"},[e._v(e._s(e.convertCurrency))])])])}),l=[],o=(r("b680"),r("d4ec")),p=r("bee2"),f=function(){function e(t,r){Object(o["a"])(this,e),this.url="https://api.exchangeratesapi.io/latest",this.currency=t.toUpperCase(),this.baseCurrency=r.toUpperCase()}return Object(p["a"])(e,[{key:"generateURL",value:function(){var e=this.url+"?symbols="+this.currency+"&base="+this.baseCurrency;return e}},{key:"getData",value:function(){this.url=this.generateURL();var e="";console.table(this.currency,this.baseCurrency);var t=new XMLHttpRequest;if(t.open("GET",this.url,!1),t.send(),200!=t.status&&4!=t.readyState)console.log("Request error");else{console.log(t.responseText,"xhr");var r=JSON.parse(t.responseText),n=r.rates[this.currency].toFixed(2);e=n}return e}}]),e}(),d=f,h={name:"CurrencyCard",props:{currency:String,sum:String,convertCurrency:String},data:function(){return{convertSum:0}},updated:function(){this.calculateSum()},mounted:function(){this.calculateSum()},methods:{calculateSum:function(){var e=new d(this.convertCurrency,this.currency);this.convertSum=this.sum*e.getData()}}},v=h,y=r("2877"),g=Object(y["a"])(v,u,l,!1,null,null,null),m=g.exports,b={name:"CurrencyCards",components:{CurrencyCard:m},props:{currencyType:{default:"eur",type:String},filteredCurrencies:{default:["usd","rub","nok","jpy","cad"]}},data:function(){return{currValue:"0",curenciesArr:["usd","rub","nok","jpy","eur","cad"],perPage:4,numberOfPages:0,page:1}},computed:{displayElements:function(){return this.paginate(this.filteredCurrencies)}},mounted:function(){this.setPages()},watch:function(){this.paginate(this.filteredCurrencies)},methods:{paginate:function(e){var t=this.perPage,r=this.page*t-t,n=this.page*t;return e.slice(r,n)},nextPage:function(){console.log(this.currValue,"object"),this.page+1<=this.numberOfPages&&this.page++,this.paginate(this.filteredCurrencies)},prevPage:function(){this.page-1>=1&&this.page--,this.paginate(this.filteredCurrencies)},setPages:function(){this.numberOfPages=Math.ceil(this.filteredCurrencies.length/this.perPage)}}},_=b,C=Object(y["a"])(_,c,i,!1,null,null,null),w=C.exports,x=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"currency__toolbar"},[r("div",{staticClass:"currency__title"},[r("span",[e._v("Курс "),r("span",{staticClass:"currency__val"},[e._v(e._s(e.currentEl))]),e._v(" сегодня")])]),r("div",{staticClass:"nav-wrapper"},[r("a",{staticClass:"nav-wrapper__link",attrs:{href:"#"},on:{click:e.prevTabElement}},[r("svg",{attrs:{width:"7",height:"12",viewBox:"0 0 7 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M7 10.58L2.9925 6L7 1.41L5.76625 0L0.51625 6L5.76625 12L7 10.58Z",fill:"#CCAE68"}})])]),r("div",{staticClass:"nav-tabs--overflow"},[r("ul",{ref:"navtabs",staticClass:"nav nav-tabs"},e._l(e.curenciesArr,(function(t){return r("li",{key:t,staticClass:"nav__item"},[r("a",{staticClass:"small",class:{active:t==e.currentEl},attrs:{href:"#","data-cur":"{el}"},on:{click:function(r){return r.preventDefault(),e.changeElement(t)}}},[e._v(e._s(t))])])})),0)]),r("a",{staticClass:"nav-wrapper__link",attrs:{href:"#"},on:{click:e.nextTabElement}},[r("svg",{attrs:{width:"7",height:"12",viewBox:"0 0 7 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M0.516357 10.58L4.52386 6L0.516357 1.41L1.75011 0L7.00011 6L1.75011 12L0.516357 10.58Z",fill:"#CCAE68"}})])])])])},E=[],j={name:"Toolbar",props:{msg:String},data:function(){return{curenciesArr:["usd","rub","nok","jpy","eur","cad"],currentEl:"eur",currentElNumber:5}},methods:{nextTabElement:function(){this.currentElNumber<=this.curenciesArr.length-1&&(this.currentElNumber++,this.$refs.navtabs.style.transform="translatex(90px)",console.log(this.$refs.navtabs.style,"check2"))},prevTabElement:function(){console.log("prevTabElement"),console.log(this.currentElNumber),this.currentElNumber>1&&(this.currentElNumber--,this.$refs.navtabs.style.transform="translatex(-90px)")},changeElement:function(e){this.currentEl=e,this.$emit("newElement",this.currentEl)}}},O=j,k=Object(y["a"])(O,x,E,!1,null,null,null),P=k.exports,T={name:"App",components:{CurrencyCards:w,Toolbar:P},data:function(){return{currency:"eur",filteredCurrencies:["usd","rub","nok","jpy","cad"],curenciesArr:["usd","rub","nok","jpy","eur","cad"]}},methods:{calculateCurrency:function(e){var t=this;this.currency=e,this.filteredCurrencies=this.curenciesArr.filter((function(e){return e!==t.currency})),console.log(this.filteredCurrencies)}}},S=T,L=(r("034f"),Object(y["a"])(S,s,a,!1,null,null,null)),A=L.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(A)}}).$mount("#app")},"85ec":function(e,t,r){}});
//# sourceMappingURL=app.e5ebe2c3.js.map