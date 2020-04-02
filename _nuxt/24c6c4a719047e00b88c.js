(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{361:function(t,e,r){},362:function(t,e,r){},365:function(t,e,r){"use strict";var c=r(361);r.n(c).a},366:function(t,e,r){"use strict";var c=r(362);r.n(c).a},371:function(t,e,r){"use strict";r.r(e);var c={data:function(){return{carriers:[],isExampleOpened:!1,example:{carrier:"kr.epost",track:"1111111111111",carriers_api_res:"Loading...",track_api_res:"Loading..."}}},beforeMount:function(){this.fetchData(),this.updateTrackExample()},watch:{$route:function(){this.fetchData(),this.updateTrackExample()},exampleUrl:function(){this.updateTrackExample()}},computed:{exampleUrl:function(){return"/#/".concat(this.example.carrier,"/").concat(this.example.track)},exampleHtml:function(){return'<a href="https://tracker.delivery/#/'.concat(this.example.carrier,"/").concat(this.example.track,'" target="_blank">배송조회</a>')}},methods:{openExample:function(){var t=/([a-z]{2})\.([a-z0-9]+)/g.test(this.example.carrier)&&/(\d{10,})/g.test(this.example.track);t?this.isExampleOpened=t:this.$toast.open({duration:2e3,message:"올바르지 않은 송장번호입니다!",type:"is-danger"})},fetchData:function(){var t=this;this.$axios.get("/carriers").then((function(e){t.carriers=e.data,t.example.carriers_api_res=JSON.stringify(e.data,null,"   ")})).catch((function(){t.carriers=[]}))},updateTrackExample:function(){var t=this;this.example.track_api_res="Loading...",this.$axios.get("/carriers/".concat(this.example.carrier,"/tracks/").concat(this.example.track)).then((function(e){t.example.track_api_res=JSON.stringify(e.data,null,"   ")})).catch((function(e){t.example.track_api_res=JSON.stringify(e.response.data,null,"   ")}))}}},n=(r(365),r(366),r(24)),component=Object(n.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"guide"}},[t._m(0),t._v(" "),r("div",{staticClass:"hero is-medium is-warning"},[r("div",{staticClass:"hero-body"},[r("h1",{staticClass:"title"},[t._v(t._s(t.$t("guide.hero.title")))]),t._v(" "),r("h2",{staticClass:"subtitle"},[t._v(t._s(t.$t("guide.hero.subtitle")))]),t._v(" "),r("p",[t._v("\n          "+t._s(t.$t("guide.hero.phrase"))+"\n        ")]),t._v(" "),t._m(1),t._v(" "),r("button",{staticClass:"locale-button",class:{"is-active":"ko"===t.$i18n.locale},on:{click:function(e){t.$i18n.locale="ko"}}},[t._v("ko")]),t._v(" "),r("button",{staticClass:"locale-button",class:{"is-active":"en"===t.$i18n.locale},on:{click:function(e){t.$i18n.locale="en"}}},[t._v("en")]),t._v(" "),r("button",{staticClass:"locale-button",class:{"is-active":"ja"===t.$i18n.locale},on:{click:function(e){t.$i18n.locale="ja"}}},[t._v("ja")])])]),t._v(" "),r("div",{staticClass:"content"},[r("h1",{staticClass:"title"},[t._v(t._s(t.$t("guide.content.link.title")))]),t._v(" "),r("p",[t._v(t._s(t.$t("guide.content.link.phrase")))]),t._v(" "),r("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[r("code",{staticClass:"html"},[t._v('\n<a href="https://tracker.delivery/#/:carrier_id/:track_id" target="_blank">배송조회</a>\n      ')])]),t._v(" "),r("h3",{staticClass:"title"},[t._v(t._s(t.$t("guide.content.example")))]),t._v(" "),r("b-field",[r("b-select",{model:{value:t.example.carrier,callback:function(e){t.$set(t.example,"carrier",e)},expression:"example.carrier"}},[r("option",{staticStyle:{color:"#ccc"},attrs:{value:"",selected:"",disabled:""}},[t._v(t._s(t.$t("guide.content.link.carriers")))]),t._v(" "),t._l(t.carriers,(function(e){return r("option",{key:e.id,domProps:{value:e.id}},[t._v(t._s(e.name))])}))],2),t._v(" "),r("b-input",{attrs:{type:"number",placeholder:"송장번호"},model:{value:t.example.track,callback:function(e){t.$set(t.example,"track",e)},expression:"example.track"}}),t._v(" "),r("a",{staticClass:"button",on:{click:function(e){return t.openExample()}}},[t._v(t._s(t.$t("guide.content.link.try-example")))])],1),t._v(" "),r("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.exampleHtml,expression:"exampleHtml"}]},[r("code",{staticClass:"html"})]),t._v(" "),r("h1",{staticClass:"title"},[t._v(t._s(t.$t("guide.content.api.title")))]),t._v(" "),r("p",[t._v(t._s(t.$t("guide.content.api.phrase")))]),t._v(" "),r("h3",{staticClass:"title"},[t._v(t._s(t.$t("guide.content.api.carriers-api")))]),t._v(" "),t._m(2),t._v(" "),r("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.example.carriers_api_res,expression:"example.carriers_api_res"}]},[r("code",{staticClass:"json"})]),t._v(" "),r("h3",{staticClass:"title"},[t._v(t._s(t.$t("guide.content.api.tracks-api")))]),t._v(" "),r("b-field",[r("b-select",{model:{value:t.example.carrier,callback:function(e){t.$set(t.example,"carrier",e)},expression:"example.carrier"}},[r("option",{staticStyle:{color:"#ccc"},attrs:{value:"",selected:"",disabled:""}},[t._v(t._s(t.$t("guide.content.api.carrier")))]),t._v(" "),t._l(t.carriers,(function(e){return r("option",{key:e.id,domProps:{value:e.id}},[t._v(t._s(e.name))])}))],2),t._v(" "),r("b-input",{attrs:{type:"number",placeholder:"송장번호"},model:{value:t.example.track,callback:function(e){t.$set(t.example,"track",e)},expression:"example.track"}})],1),t._v(" "),t._m(3),t._v(" "),r("p",[r("span",{staticClass:"tag"},[t._v("Example")]),t._v(" https://apis.tracker.delivery/carriers/"+t._s(t.example.carrier)+"/tracks/"+t._s(t.example.track)+"\n      ")]),t._v(" "),r("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.example.track_api_res,expression:"example.track_api_res"}],staticStyle:{"white-space":"pre-wrap"}},[r("code",{staticClass:"json"})]),t._v(" "),r("h1",{staticClass:"title"},[t._v(t._s(t.$t("guide.content.support.carrier")))]),t._v(" "),0!==t.carriers.length?r("table",[r("thead",[r("tr",[r("th",[t._v(t._s(t.$t("guide.content.support.name")))]),t._v(" "),r("th",[t._v(t._s(t.$t("guide.content.support.code")))])])]),t._v(" "),t._l(t.carriers,(function(e){return r("tbody",{key:e.id},[r("tr",[r("td",[t._v(t._s(e.name))]),t._v(" "),r("td",[t._v(t._s(e.id))])])])}))],2):t._e(),t._v(" "),r("h1",{staticClass:"title"},[t._v("Sponsorship (Enterprise)")]),t._v(" "),r("p",[t._v(t._s(t.$t("guide.sponsorship"))+": "),r("a",{attrs:{href:"mailto:contact@tracker.delivery"}},[t._v("contact@tracker.delivery")])])],1),t._v(" "),r("footer",{staticClass:"footer"},[r("p",[t._v("\n        "+t._s(t.$t("guide.footer"))+": "),r("a",{attrs:{href:"https://github.com/shlee322/delivery-tracker/issues",target:"_blank"}},[t._v("Github")])])]),t._v(" "),r("b-modal",{attrs:{active:t.isExampleOpened},on:{"update:active":function(e){t.isExampleOpened=e}}},[r("iframe",{staticStyle:{height:"100%",width:"100%","min-width":"320px","min-height":"480px"},attrs:{src:t.exampleUrl}})]),t._v(" "),r("script",{attrs:{async:"",defer:"",src:"https://buttons.github.io/buttons.js"}})],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:"https://github.com/shlee322/delivery-tracker"}},[e("img",{staticStyle:{position:"absolute",top:"0",left:"0",border:"0"},attrs:{src:"https://s3.amazonaws.com/github/ribbons/forkme_left_orange_ff7600.png",alt:"Fork me on GitHub"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{"margin-top":"20px"}},[e("a",{staticClass:"github-button",attrs:{href:"https://github.com/shlee322/delivery-tracker","data-icon":"octicon-star","data-size":"large","data-show-count":"true","aria-label":"Star shlee322/delivery-tracker on GitHub"}},[this._v("Star")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("span",{staticClass:"tag is-dark"},[this._v("GET")]),this._v("\n        https://apis.tracker.delivery/carriers\n      ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("span",{staticClass:"tag is-dark"},[this._v("GET")]),this._v("\n        https://apis.tracker.delivery/carriers/:carrier_id/tracks/:track_id\n      ")])}],!1,null,"9131d49c",null);e.default=component.exports}}]);