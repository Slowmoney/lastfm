(function(t){function a(a){for(var n,i,s=a[0],c=a[1],l=a[2],p=0,m=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&m.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(a);while(m.length)m.shift()();return o.push.apply(o,l||[]),e()}function e(){for(var t,a=0;a<o.length;a++){for(var e=o[a],n=!0,s=1;s<e.length;s++){var c=e[s];0!==r[c]&&(n=!1)}n&&(o.splice(a--,1),t=i(i.s=e[0]))}return t}var n={},r={app:0},o=[];function i(a){if(n[a])return n[a].exports;var e=n[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=n,i.d=function(t,a,e){i.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,a){if(1&a&&(t=i(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var n in t)i.d(e,n,function(a){return t[a]}.bind(null,n));return e},i.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(a,"a",a),a},i.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},i.p="/lastfm/dist/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=a,s=s.slice();for(var l=0;l<s.length;l++)a(s[l]);var u=c;o.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},1649:function(t,a,e){"use strict";var n=e("b402"),r=e.n(n);r.a},"43ca":function(t,a,e){"use strict";var n=e("c932"),r=e.n(n);r.a},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var n=e("2b0e"),r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",[e("v-snackbar",{attrs:{color:"error",top:!0},model:{value:t.error,callback:function(a){t.error=a},expression:"error"}},[t._v(" Network error ")]),e("v-app-bar",{attrs:{app:""}},["/"!=this.$router.history.current.fullPath?e("v-btn",{attrs:{text:"",icon:"",color:"primary"},on:{click:function(a){return t.$router.go(-1)}}},[e("v-icon",[t._v("mdi-arrow-left")])],1):t._e()],1),e("v-content",[e("v-container",{attrs:{fluid:""}},[e("router-view")],1)],1),e("v-footer",{attrs:{app:""}},[e("v-bottom-navigation",{model:{value:t.bottomNav,callback:function(a){t.bottomNav=a},expression:"bottomNav"}},[-1!==t.baseRoutes.indexOf(this.$router.history.current.name)?[e("v-btn",{attrs:{value:"Home"}},[e("span",[t._v("Home")]),e("v-icon",[t._v("mdi-poll")])],1),e("v-btn",{attrs:{value:"TopTracks"}},[e("span",[t._v("Chart")]),e("v-icon",[t._v("mdi-poll")])],1),e("v-btn",{attrs:{value:"TopArtist"}},[e("span",[t._v("Top Artist")]),e("v-icon",[t._v("mdi-align-vertical-top")])],1)]:[e("v-btn",{attrs:{value:"Artist"}},[e("span",[t._v("Artist")]),e("v-icon",[t._v("mdi-poll")])],1),e("v-btn",{attrs:{value:"ArtistTopTracks"}},[e("span",[t._v("ArtistTopTracks")]),e("v-icon",[t._v("mdi-poll")])],1),e("v-btn",{attrs:{value:"ArtistTopAlbums"}},[e("span",[t._v("ArtistTopAlbums")]),e("v-icon",[t._v("mdi-poll")])],1)]],2)],1)],1)},o=[],i=(e("b0c0"),{name:"App",components:{},data:function(){return{bottomNav:"Home",baseRoutes:["Home","TopTracks","TopArtist"],error:!1}},created:function(){var t=this;this.$eventBus.$on("error",(function(){t.error=!t.error})),this.$eventBus.$on("changeNav",(function(t){console.log("event load",t)}))},mounted:function(){console.log("this.$router.history.current.name",this.$router.history.current.name),this.bottomNav=this.$router.history.current.name},watch:{bottomNav:function(t){console.log(this.$router,t,this.$router.history.current.name==t),this.$router.history.current.name!=t&&this.$router.push({name:t})}}}),s=i,c=e("2877"),l=e("6544"),u=e.n(l),p=e("7496"),m=e("40dc"),d=e("b81c"),v=e("8336"),f=e("a523"),h=e("a75b"),b=e("553a"),g=e("132d"),_=e("2db4"),y=Object(c["a"])(s,r,o,!1,null,null,null),k=y.exports;u()(y,{VApp:p["a"],VAppBar:m["a"],VBottomNavigation:d["a"],VBtn:v["a"],VContainer:f["a"],VContent:h["a"],VFooter:b["a"],VIcon:g["a"],VSnackbar:_["a"]});var T=e("8c4f"),A=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",{attrs:{"grid-list-xs":""}},[e("v-layout",{attrs:{column:"","max-width":"300px"}},[t._l(t.topArtist,(function(a,n){return e("v-card",{key:n,staticClass:"d-inline-block",attrs:{"min-width":"300px"},on:{click:function(e){return t.$router.push({name:"Artist",params:{name:a.name}})}}},[[e("v-card-title",{attrs:{"primary-title":""}},[t._v(t._s(n+1)+". "+t._s(a.name))]),e("v-card-subtitle",[e("v-icon",[t._v("mdi-play")]),t._v(" "+t._s(a.playcount)+" "),e("v-icon",[t._v("mdi-headphones")]),t._v(" "+t._s(a.listeners)+" ")],1)]],2)})),e("infinite-loading",{on:{infinite:t.infiniteHandle}})],2)],1)},V=[],$=e("2909"),x=e("e166"),w=e.n(x),C={name:"TopArtist",components:{InfiniteLoading:w.a},data:function(){return{page:1,topArtist:[]}},beforeCreate:function(){this.$eventBus.$emit("changeNav","TopArtist")},methods:{infiniteHandle:function(t){var a=this;this.$lastfm.chart.getTopArtist(this.page).then((function(e){var n;e.data.artists.artist.length?(a.page+=1,(n=a.topArtist).push.apply(n,Object($["a"])(e.data.artists.artist)),t.loaded()):t.complete()})).catch((function(){a.$eventBus.$emit("error")}))}}},j=C,I=e("b0af"),O=e("99d9"),S=e("a722"),B=Object(c["a"])(j,A,V,!1,null,null,null),L=B.exports;u()(B,{VCard:I["a"],VCardSubtitle:O["a"],VCardTitle:O["c"],VContainer:f["a"],VIcon:g["a"],VLayout:S["a"]});var N=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",[t._l(t.topAlbums,(function(a,n){return e("v-layout",{key:n,attrs:{"ma-4":""},on:{click:function(e){return t.$router.push({name:"ArtistAlbumInfo",params:{albumname:a.name}})}}},[e("v-sheet",{attrs:{"min-width":"500px",width:"100%"}},[e("v-row",{attrs:{align:"start",justify:"start"}},[e("v-img",{attrs:{"max-width":"100px",height:"100px",src:a.image[2]["#text"]}}),e("v-col",{attrs:{"min-width":"100px"}},[e("v-card-title",{attrs:{"primary-title":""}},[t._v(t._s(n+1)+". "+t._s(a.name))]),e("v-card-subtitle",[e("v-icon",[t._v("mdi-play")]),t._v(" "+t._s(a.playcount)+" ")],1)],1)],1)],1)],1)})),e("infinite-loading",{on:{infinite:t.infiniteHandle}})],2)},H=[],P={name:"ArtistTopAlbums",components:{InfiniteLoading:w.a},data:function(){return{page:1,topAlbums:[]}},beforeCreate:function(){this.$eventBus.$emit("changeNav","ArtistTopAlbums")},methods:{infiniteHandle:function(t){var a=this;this.$lastfm.chart.getArtistTopAlbums(this.page,this.$route.params.name).then((function(e){var n;e.data.topalbums.album.length?(a.page+=1,(n=a.topAlbums).push.apply(n,Object($["a"])(e.data.topalbums.album)),t.loaded()):t.complete()})).catch((function(){a.$eventBus.$emit("error")}))}}},E=P,R=e("62ad"),M=e("adda"),F=e("0fd9"),J=e("8dd9"),K=Object(c["a"])(E,N,H,!1,null,null,null),U=K.exports;u()(K,{VCardSubtitle:O["a"],VCardTitle:O["c"],VCol:R["a"],VContainer:f["a"],VIcon:g["a"],VImg:M["a"],VLayout:S["a"],VRow:F["a"],VSheet:J["a"]});var q=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",{attrs:{"grid-list-xs":""}},[e("v-layout",{attrs:{column:"","max-width":"300px"}},[t._l(t.topTracks,(function(a,n){return e("v-card",{key:n,staticClass:"d-inline-block",attrs:{"min-width":"300px"}},[[e("v-card-title",{attrs:{"primary-title":""}},[t._v(t._s(n+1)+". "+t._s(a.name))]),e("v-card-subtitle",[e("v-icon",[t._v("mdi-play")]),t._v(" "+t._s(a.playcount)+" "),e("v-icon",[t._v("mdi-headphones")]),t._v(" "+t._s(a.listeners)+" ")],1)]],2)})),e("infinite-loading",{on:{infinite:t.infiniteHandle}})],2)],1)},z=[],D={name:"topTracks",components:{InfiniteLoading:w.a},data:function(){return{page:1,topTracks:[]}},beforeCreate:function(){this.$eventBus.$emit("changeNav","TopTracks")},methods:{infiniteHandle:function(t){var a=this;this.$lastfm.chart.getTopTracks(this.page).then((function(e){var n;e.data.tracks.track.length?(a.page+=1,(n=a.topTracks).push.apply(n,Object($["a"])(e.data.tracks.track)),t.loaded()):t.complete()})).catch((function(t){a.$eventBus.$emit("error")}))}}},G=D,Q=Object(c["a"])(G,q,z,!1,null,null,null),W=Q.exports;u()(Q,{VCard:I["a"],VCardSubtitle:O["a"],VCardTitle:O["c"],VContainer:f["a"],VIcon:g["a"],VLayout:S["a"]});var X=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",{attrs:{"grid-list-xs":""}},[e("v-layout",{attrs:{column:"","max-width":"300px"}},[t._l(t.topTracks,(function(a,n){return e("v-card",{key:n,staticClass:"d-inline-block",attrs:{"min-width":"300px"}},[[e("v-card-title",{attrs:{"primary-title":""}},[t._v(t._s(n+1)+". "+t._s(a.name))]),e("v-card-subtitle",[e("v-icon",[t._v("mdi-play")]),t._v(" "+t._s(a.playcount)+" "),e("v-icon",[t._v("mdi-headphones")]),t._v(" "+t._s(a.listeners)+" ")],1)]],2)})),e("infinite-loading",{on:{infinite:t.infiniteHandle}})],2)],1)},Y=[],Z={name:"topTracks",components:{InfiniteLoading:w.a},data:function(){return{page:1,topTracks:[]}},created:function(){this.$eventBus.$emit("changeNav","ArtistTopTracks")},methods:{infiniteHandle:function(t){var a=this;this.$lastfm.chart.getArtistTopTracks(this.page,this.$route.params.name).then((function(e){var n;e.data.toptracks.track.length?(a.page+=1,(n=a.topTracks).push.apply(n,Object($["a"])(e.data.toptracks.track)),t.loaded()):t.complete()})).catch((function(){a.$eventBus.$emit("error")}))}}},tt=Z,at=Object(c["a"])(tt,X,Y,!1,null,null,null),et=at.exports;u()(at,{VCard:I["a"],VCardSubtitle:O["a"],VCardTitle:O["c"],VContainer:f["a"],VIcon:g["a"],VLayout:S["a"]});var nt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-layout",{staticStyle:{"min-width":"200px"},attrs:{row:"",wrap:""}},[e("v-flex",[e("v-row",[e("v-card",{attrs:{loading:!t.loadend,width:"100%"}},[e("v-row",[e("v-col",{staticClass:"px-1 pt-2"},[e("v-skeleton-loader",{ref:"skeleton",staticClass:"mx-3",staticStyle:{"min-width":"200px"},attrs:{boilerplate:!1,type:"image",loading:!t.loadend}},[e("v-img",{attrs:{src:t.album.image["2"]["#text"]}})],1)],1),e("v-col",{staticClass:"px-6"},[e("v-skeleton-loader",{staticClass:"v-card-title",attrs:{type:"article",loading:!t.loadend}},[e("v-card-title",{attrs:{"primary-title":""}},[t._v(t._s(t.album.name))]),e("v-card-subtitle",{attrs:{"primary-title":""}},[t._v(" "+t._s(t.album.artist)+" ")]),t.album.wiki?[e("v-card-text",[t._v(t._s(t.album.wiki.summary))]),e("v-card-text",[t._v("Published: "+t._s(t.album.wiki.published))])]:t._e()],2)],1)],1)],1)],1),e("v-row",[e("v-card",{attrs:{width:"100%"}},[e("v-subheader",{staticClass:"pl-10"},[t._v("TRACKS")]),e("v-skeleton-loader",{staticClass:"px-4",attrs:{type:"list-item",loading:!t.loadend}},[e("v-col",t._l(t.album.tracks.track,(function(a,n){return e("v-list",{key:n,attrs:{"two-line":"",nav:""}},[e("v-list-item",[e("v-list-item-content",[e("v-list-item-title",[t._v(" "+t._s(a["@attr"].rank)+". "+t._s(a.name)+" ")]),e("v-list-item-subtitle",[t._v(t._s(Math.floor(a.duration/60))+":"+t._s(a.duration%60))])],1)],1)],1)})),1)],1)],1)],1)],1)],1)},rt=[],ot={name:"ArtistAlbumInfo",components:{},data:function(){return{loadend:!1,album:{image:["","","",""],wiki:{summary:""},tracks:{track:[]}}}},beforeCreate:function(){var t=this;this.$lastfm.chart.getAlbumInfo(this.page,this.$route.params.name,this.$route.params.albumname).then((function(a){t.loadend=!0,t.album=a.data.album})).catch((function(){t.$eventBus.$emit("error")})),this.$eventBus.$emit("changeNav","ArtistAlbumInfo")},computed:{imageHeight:function(){return console.log(this.$vuetify.breakpoint),this.$vuetify.breakpoint.name}},methods:{}},it=ot,st=(e("1649"),e("0e8f")),ct=e("8860"),lt=e("da13"),ut=e("5d23"),pt=e("3129"),mt=e("e0c7"),dt=Object(c["a"])(it,nt,rt,!1,null,null,null),vt=dt.exports;u()(dt,{VCard:I["a"],VCardSubtitle:O["a"],VCardText:O["b"],VCardTitle:O["c"],VCol:R["a"],VFlex:st["a"],VImg:M["a"],VLayout:S["a"],VList:ct["a"],VListItem:lt["a"],VListItemContent:ut["a"],VListItemSubtitle:ut["b"],VListItemTitle:ut["c"],VRow:F["a"],VSkeletonLoader:pt["a"],VSubheader:mt["a"]});var ft=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-layout",{staticStyle:{"min-width":"200px"},attrs:{"mx-4":"",row:"",wrap:""}},[e("v-flex",[e("v-row",[e("v-card",{attrs:{loading:!t.loadend,width:"100%"}},[e("v-row",[e("v-col",{staticClass:"px-1 pt-2"},[e("v-responsive",{attrs:{"aspect-ratio":16/9}},[t.loadend?e("v-img",{attrs:{src:t.artist.image["3"]["#text"]}}):e("v-skeleton-loader",{ref:"skeleton",staticClass:"mx-3",attrs:{boilerplate:!1,type:"image"}})],1)],1),e("v-col",{staticClass:"pl-20"},[e("v-skeleton-loader",{class:"ml-4 py-4",attrs:{type:"heading",loading:!t.loadend}},[e("v-card-title",{staticStyle:{"word-break":"inherit"},attrs:{"primary-title":""}},[t._v(" "+t._s(t.artist.name)+" ")])],1)],1)],1)],1)],1),e("v-row",[e("v-card",{attrs:{width:"100%"}},[e("v-subheader",{staticClass:"pl-10"},[t._v("TOP ALBUMS")]),e("v-skeleton-loader",{staticClass:"px-4",attrs:{type:"list-item",loading:!t.loadend}},[e("ArtistTopAlbums")],1)],1)],1)],1)],1)},ht=[],bt={name:"ArtistInfo",data:function(){return{loadend:!1,artist:[],test:!1}},components:{ArtistTopAlbums:U},mounted:function(){var t=this;this.$lastfm.chart.getArtistInfo(this.$route.params.name).then((function(a){t.loadend=!0,t.artist=a.data.artist})).catch((function(){t.$eventBus.$emit("error")})),this.$eventBus.$emit("changeNav","ArtistInfo")}},gt=bt,_t=(e("43ca"),e("6b53")),yt=Object(c["a"])(gt,ft,ht,!1,null,null,null),kt=yt.exports;u()(yt,{VCard:I["a"],VCardTitle:O["c"],VCol:R["a"],VFlex:st["a"],VImg:M["a"],VLayout:S["a"],VResponsive:_t["a"],VRow:F["a"],VSkeletonLoader:pt["a"],VSubheader:mt["a"]});var Tt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-layout",{attrs:{"grid-list-xs":""}},[e("v-col",[e("ArtistTopAlbums")],1),e("v-col",[e("ArtistTopTracks")],1)],1)},At=[],Vt={name:"ArtistTops",components:{ArtistTopTracks:et,ArtistTopAlbums:U}},$t=Vt,xt=Object(c["a"])($t,Tt,At,!1,null,null,null);xt.exports;u()(xt,{VCol:R["a"],VLayout:S["a"]}),n["a"].use(T["a"]);var wt=[{path:"/",name:"Home",component:L},{path:"/chart/",name:"TopTracks",component:W},{path:"/top/",name:"TopArtist",component:L},{path:"/artist/:name",name:"Artist",component:kt,children:[]},{path:"/artist/:name/top",name:"ArtistTopTracks",component:et},{path:"/artist/:name/albums",name:"ArtistTopAlbums",component:U},{path:"/artist/:name/album/:albumname",name:"ArtistAlbumInfo",component:vt}],Ct=new T["a"]({mode:"history",base:"/lastfm/dist/",routes:wt}),jt=Ct,It=e("2f62");n["a"].use(It["a"]);var Ot=new It["a"].Store({state:{},mutations:{},actions:{},modules:{}}),St=e("f309");n["a"].use(St["a"]);var Bt=new St["a"]({icons:{iconfont:"mdi",values:{back:"mdi-arrow-left",product:"mdi-dropbox",support:"mdi-lifebuoy",steam:"mdi-steam-box",pc:"mdi-desktop-classic",xbox:"mdi-xbox",playstation:"mdi-playstation",switch:"mdi-nintendo-switch"}}}),Lt=(e("99af"),e("bc3a")),Nt=e.n(Lt),Ht="https://ws.audioscrobbler.com/2.0/",Pt="c2797e2442ddb38a50280e1e697fa316",Et={chart:{getTopArtist:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return Nt.a.get("".concat(Ht,"?method=chart.gettopartists&api_key=").concat(Pt,"&format=json&page=").concat(t))},getTopTracks:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return Nt.a.get("".concat(Ht,"?method=chart.getTopTracks&api_key=").concat(Pt,"&format=json&page=").concat(t))},getArtistTopAlbums:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return Nt.a.get("".concat(Ht,"?method=artist.getTopAlbums&api_key=").concat(Pt,"&format=json&page=").concat(t,"&artist=").concat(a))},getArtistTopTracks:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return Nt.a.get("".concat(Ht,"?method=artist.getTopTracks&api_key=").concat(Pt,"&format=json&page=").concat(t,"&artist=").concat(a))},getAlbumInfo:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return Nt.a.get("".concat(Ht,"?method=album.getInfo&api_key=").concat(Pt,"&format=json&page=").concat(t,"&artist=").concat(a,"&album=").concat(e))},getArtistInfo:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return Nt.a.get("".concat(Ht,"?method=artist.getInfo&api_key=").concat(Pt,"&format=json&artist=").concat(t))}}},Rt={install:function(t){Object.defineProperty(t.prototype,"$lastfm",{value:Et})}};n["a"].config.productionTip=!1,n["a"].use(Rt),n["a"].prototype.$eventBus=new n["a"],new n["a"]({router:jt,store:Ot,vuetify:Bt,lastfm:Rt,render:function(t){return t(k)}}).$mount("#app")},b402:function(t,a,e){},c932:function(t,a,e){}});
//# sourceMappingURL=app.71daeab1.js.map