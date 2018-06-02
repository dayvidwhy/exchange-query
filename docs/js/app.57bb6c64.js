(function(t){function e(e){for(var s,i,o=e[0],c=e[1],l=e[2],d=0,f=[];d<o.length;d++)i=o[d],r[i]&&f.push(r[i][0]),r[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(f.length)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],s=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(s=!1)}s&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var s={},r={1:0},a=[];function i(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=s,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(n,s,function(e){return t[e]}.bind(null,s));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;a.push([4,0]),n()})({4:function(t,e,n){t.exports=n("Vtdi")},E3xt:function(t,e,n){},JiuZ:function(t,e,n){"use strict";var s=n("oaqq"),r=n.n(s);r.a},VNhs:function(t,e,n){},Vtdi:function(t,e,n){"use strict";n.r(e);n("VRzm");var s=n("Kw5r"),r=(n("tUrg"),n("L2JU")),a=n("vDqi"),i=n.n(a);s["a"].use(r["a"]);var o=new r["a"].Store({state:{searchingFor:"",searchType:"q",response:{title:"",url:"",field:""}},getters:{getResponseTitle:function(t){return t.response.title},getResponseUrl:function(t){return t.response.url},getResponseField:function(t){return t.response.field}},mutations:{SET_SEARCHING_FOR:function(t,e){t.searchingFor=e},RESET_OUTPUT:function(t){t.response.title="",t.response.field="",t.response.url=""},SET_TITLE:function(t,e){t.response.title=e},SET_FIELD:function(t,e){t.response.field=e},SET_URL:function(t,e){t.response.url=e},SET_LUCKY_SEARCH:function(t){t.searchType="q"},SET_SERIOUS_SEARCH:function(t){t.searchType="title"}},actions:{QUERY_SERVICE:function(t){var e=t.state,n=t.commit;if(""!==e.searchingFor){var s="https://api.stackexchange.com/2.2/search/advanced?order=desc&sort=activity&"+e.searchType+"="+e.searchingFor+"&accepted=True&site=stackoverflow";i.a.get(s).then(function(t){if(t.data.items.length<=0)n("SET_TITLE","There was no answer to this question :(");else{var e=t.data.items[0];n("SET_TITLE",e.title),n("SET_URL",e.link);var s="https://api.stackexchange.com/2.2/answers/"+e.accepted_answer_id+"?order=desc&sort=activity&site=stackoverflow&filter=withbody";i.a.get(s).then(function(t){n("SET_FIELD",t.data.items[0].body)}).catch(function(t){console.log(t)})}}).catch(function(t){console.log(t)})}else e.response.title="You should ask me something."}}}),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("banner"),n("searcher"),n("credits")],1)},l=[],u=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},d=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"row blue-bg",attrs:{role:"banner"}},[n("div",{staticClass:"banner-text align-center"},[t._v("\n\t\tMade by "),n("a",{staticClass:"banner-link",attrs:{href:"https://davidyoung.tech"}},[t._v("https://davidyoung.tech")])])])}],f={name:"banner",components:{},data:function(){return{}}},h=f,p=(n("hxvK"),n("KHd+")),v=Object(p["a"])(h,u,d,!1,null,null,null),g=v.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"grid-container",attrs:{role:"main"}},[n("div",{staticClass:"row align-center"},[n("svg",{attrs:{viewBox:"0 0 1792 1792",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M1417 1632h-1118v-480h-160v640h1438v-640h-160v480zm-942-524l33-157 783 165-33 156zm103-374l67-146 725 339-67 145zm201-356l102-123 614 513-102 123zm397-378l477 641-128 96-477-641zm-718 1471v-159h800v159h-800z"}})])]),t._m(0),t._m(1),n("div",{staticClass:"row"},[n("div",{staticClass:"col-10 offset-1"},[n("div",{staticClass:"card"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],attrs:{type:"text",maxlength:"124",placeholder:"Just tell me the answer to.."},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}})])])]),n("div",{staticClass:"row"},[n("div",{staticClass:"card"},[n("div",{staticClass:"col-3 offset-3"},[n("button",{attrs:{type:"button"},on:{click:t.luckySearch}},[t._v("\n\t\t\t\t\tI'm Feeling Stacky\n\t\t\t\t")])]),n("div",{staticClass:"col-3 align-right"},[n("button",{attrs:{type:"button"},on:{click:t.seriesSearch}},[t._v("\n\t\t\t\t\tI'm Feeling Serious\n\t\t\t\t")])])])]),n("div",{staticClass:"row push-down"},[n("div",{staticClass:"card"},[n("div",{staticClass:"col-10 offset-1 responses"},[n("h4",{staticClass:"response-field push-down"},[t._v("\n\t\t\t\t\t"+t._s(t.getResponseTitle)+"\n\t\t\t\t")]),n("div",{staticClass:"response-field"},[t._v("\n\t\t\t\t\t"+t._s(t.getResponseUrl)+"\n\t\t\t\t")]),n("div",{staticClass:"response-field",domProps:{innerHTML:t._s(t.getResponseField)}})])])])])},m=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("h1",{staticClass:"align-center"},[t._v("\n\t\t\tI'm Feeling Stacky\n\t\t")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-8 offset-2"},[n("div",{staticClass:"card"},[n("h3",{staticClass:"align-center"},[t._v("\n\t\t\t\t\tWhat do you need to know right now?\n\t\t\t\t")]),n("p",{staticClass:"align-center"},[t._v("\n\t\t\t\t\tDo not phrase your query as a question, only include keywords.\n\t\t\t\t")])])])])}],E=n("yT7P"),S={name:"searcher",components:{},data:function(){return{}},computed:Object(E["a"])({},Object(r["e"])(["searchingFor"]),Object(r["c"])(["getResponseTitle","getResponseUrl","getResponseField"]),{search:{get:function(){return this.searchingFor},set:function(t){this.SET_SEARCHING_FOR(t)}}}),methods:Object(E["a"])({},Object(r["d"])(["SET_LUCKY_SEARCH","RESET_OUTPUT","SET_SERIOUS_SEARCH","SET_SEARCHING_FOR"]),Object(r["b"])(["QUERY_SERVICE"]),{luckySearch:function(){this.SET_LUCKY_SEARCH(),this.RESET_OUTPUT(),this.QUERY_SERVICE()},seriesSearch:function(){this.SET_SERIOUS_SEARCH(),this.RESET_OUTPUT(),this.QUERY_SERVICE()}})},y=S,w=(n("h/ub"),Object(p["a"])(y,_,m,!1,null,null,null)),T=w.exports,b=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},C=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"row"},[n("div",{staticClass:"card"},[n("div",{staticClass:"tiny-text"},[t._v("\n\t\t\tThis site is not affiliated with stackexchange or any of its relevant websites.\n\t\t")]),n("div",{staticClass:"tiny-text"},[n("a",{attrs:{href:"https://github.com/dayvidwhy/feeling-stacky"}},[t._v("\n\t\t\t\tSource on github\n\t\t\t")])])])])}],R={name:"credits",components:{},data:function(){return{}}},O=R,U=(n("JiuZ"),Object(p["a"])(O,b,C,!1,null,null,null)),x=U.exports,j={name:"app",components:{banner:g,searcher:T,credits:x},data:function(){return{}},mounted:function(){(function(t,e,n,s,r,a,i){t["GoogleAnalyticsObject"]=r,t[r]=t[r]||function(){(t[r].q=t[r].q||[]).push(arguments)},t[r].l=1*new Date,a=e.createElement(n),i=e.getElementsByTagName(n)[0],a.async=1,a.src=s,i.parentNode.insertBefore(a,i)})(window,document,"script","//www.google-analytics.com/analytics.js","ga"),ga("create","UA-90329277-1","auto"),ga("send","pageview")}},k=j,I=(n("dgcV"),Object(p["a"])(k,c,l,!1,null,null,null)),F=I.exports;s["a"].config.productionTip=!1,new s["a"]({el:"#app",store:o,render:function(t){return t(F)}})},dgcV:function(t,e,n){"use strict";var s=n("VNhs"),r=n.n(s);r.a},"h/ub":function(t,e,n){"use strict";var s=n("E3xt"),r=n.n(s);r.a},hxvK:function(t,e,n){"use strict";var s=n("twyh"),r=n.n(s);r.a},oaqq:function(t,e,n){},twyh:function(t,e,n){}});
//# sourceMappingURL=app.57bb6c64.js.map