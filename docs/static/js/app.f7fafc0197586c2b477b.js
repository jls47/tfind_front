webpackJsonp([1],{"/yRs":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s,a=(s=n("8ebl")).default||s,o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"vue-street-view-pano-container"},[e("div",{ref:"vue-street-view-pano",staticClass:"vue-street-view-pano"}),this._v(" "),this._t("default")],2)},staticRenderFns:[]};var r=n("VU/8")(a,o,!1,function(t){n("CjMs")},null,null);e.default=r.exports},"5ZbH":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s,a=(s=n("hOwk")).default||s,o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"vue-map-container"},[e("div",{ref:"vue-map",staticClass:"vue-map"}),this._v(" "),e("div",{staticClass:"vue-map-hidden"},[this._t("default")],2),this._v(" "),this._t("visible")],2)},staticRenderFns:[]};var r=n("VU/8")(a,o,!1,function(t){n("dtWn")},null,null);e.default=r.exports},"5cLx":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s,a=(s=n("WgA/")).default||s,o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{ref:"flyaway"},[this._t("default")],2)])},staticRenderFns:[]},r=n("VU/8")(a,o,!1,null,null,null);e.default=r.exports},"7pMb":function(t,e){},"9R0g":function(t,e){},"9myH":function(t,e){},"9tkH":function(t,e){},CjMs:function(t,e){},D9CB:function(t,e){},Dudh:function(t,e){},EwX7:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("7+uW"),a=n("NYxO"),o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var r=n("VU/8")({name:"App"},o,!1,function(t){n("hY/q")},null,null).exports,i=n("/ocq"),u=n("mtWM"),l=n.n(u),c=n("Zrlr"),m=n.n(c),d=n("wxAW"),p=n.n(d),v=function(){function t(){m()(this,t)}return p()(t,null,[{key:"getAllTournaments",value:function(){var t=this;return l.a.get("https://tfind-back.herokuapp.com/api/tournaments").then(function(e){return t.tournaments=e.data.data,console.log(t.tournaments),t.tournaments}).catch(function(e){console.log(e),t.errors.push(e)})}},{key:"getOneTournament",value:function(t){var e=this;return l.a.get("https://tfind-back.herokuapp.com/api/tournaments/"+t).then(function(t){return e.tournament=t.data.data,e.tournament}).catch(function(t){console.log(t)})}},{key:"searchTournament",value:function(t){var e=this;return l.a.get("https://tfind-back.herokuapp.com/api/tournaments/search/"+t).then(function(t){return e.tournaments=t.data.data,e.tournaments}).catch(function(t){console.log(t)})}},{key:"createTournament",value:function(t){return l.a.post("https://tfind-back.herokuapp.com/api/tournaments",t).then(function(t){console.log(t)}).catch(function(t){console.log(t)})}},{key:"editTournament",value:function(t){return l.a.put("https://tfind-back.herokuapp.com/tournaments",t).then(function(t){console.log(t)}).catch(function(t){console.log(t)})}},{key:"getCoords",value:function(t){return l.a.get("https://maps.googleapis.com/maps/api/geocode/json?address=\n      "+t+"&key=AIzaSyBhbN6rJ1_e8abY-PLQrsC7Af5IaA3i9Mo").then(function(t){return{formatted:t.data.results[0].formatted_address,coords:t.data.results[0].geometry.location}}).catch(function(t){console.log(t)})}},{key:"getTournamentsByCoordinates",value:function(t){var e=this;return l.a.get("https://tfind-back.herokuapp.com/api/tournaments/coords",{params:t}).then(function(t){return e.tournaments=t.data.data,e.tournaments}).catch(function(t){console.log(t)})}}]),t}(),h={name:"mapMarkers",props:["locations"],data:function(){return{msg:"loaded",centerlat:47.6062,centerlong:-122.3321,places:this.locations}},watch:{locations:{handler:function(){console.log(this.tourneys),this.places=this.locations}}},created:function(){},methods:{}},f={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(this.places,function(e){return n("GmapMarker",{attrs:{position:{lat:parseFloat(e.lat),lng:parseFloat(e.lng)},clickable:!0,draggable:!0},on:{click:function(e){t.center=t.m.position}}})}),1)},staticRenderFns:[]};var g=n("VU/8")(h,f,!1,function(t){n("RpSN")},null,null).exports,_=n("sA6N"),b={name:"gMap",props:["tourneys"],computed:{google:_.gmapApi},data:function(){return{msg:"loaded",touse:this.tourneys}},mounted:function(){this.getFirstCenter()},watch:{tourneys:{handler:function(){console.log(this.tourneys),this.touse=this.tourneys}}},methods:{getFirstCenter:function(){var t=this;this.$refs.mapRef.$mapPromise.then(function(e){for(var n,s,a=0,o=0,r=[],i=[],u={SW:{lat:0,lng:0},NE:{lat:0,lng:0}},l=0;l<t.touse.length;l++)a+=parseFloat(t.touse[l].lat),o+=parseFloat(t.touse[l].lng),r.push(parseFloat(t.touse[l].lat)),i.push(parseFloat(t.touse[l].lng));u.SW.lat=Math.min.apply(Math,r),u.SW.lng=Math.min.apply(Math,i),u.NE.lat=Math.max.apply(Math,r),u.NE.lng=Math.max.apply(Math,i);var c=new google.maps.LatLng(u.SW.lat,u.SW.lng),m=new google.maps.LatLng(u.NE.lat,u.NE.lng),d=new google.maps.LatLngBounds;d.extend(c),d.extend(m),n=a/t.touse.length,s=o/t.touse.length,e.panTo({lat:n,lng:s}),e.fitBounds(d)})},updateBounds:function(){var t=this;this.$refs.mapRef.$mapPromise.then(function(e){t.$emit("moved",e.getBounds())})}},components:{markers:g}},w={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("GmapMap",{ref:"mapRef",staticStyle:{width:"500px",height:"300px"},attrs:{center:{lat:0,lng:0},zoom:7,"map-type-id":"terrain"},on:{idle:function(e){t.updateBounds()}}},[n("markers",{attrs:{locations:this.touse}})],1)},staticRenderFns:[]};var y={name:"tournaments",data:function(){return{search:{string:"",location:""},searchinput:"Search tournaments",tournaments:[],filtering:!1,redoMapSearch:!1,mapMovements:0,bounds:{SW:{lat:0,lng:0},NE:{lat:0,lng:0}}}},components:{gmap:n("VU/8")(b,w,!1,function(t){n("9myH")},null,null).exports},methods:{offerUpdateSearch:function(t){this.mapMovements+=1,this.mapMovements>1&&(console.log(t),this.bounds.NE.lat=t.ma.l,this.bounds.NE.lng=t.ga.l,this.bounds.SW.lat=t.ma.j,this.bounds.SW.lng=t.ga.j,this.redoMapSearch=!0)},clicked1:function(){J.$emit("clicked",this.search.string2)},newBoundSearch:function(){var t=this;console.log(this.bounds),v.getTournamentsByCoordinates(this.bounds).then(function(e){t.tournaments=e})},handleSubmit:function(){var t=this;console.log(this.search.string),this.search.string.length>=1?v.searchTournament(this.search.string).then(function(e){t.tournaments=e}):v.getAllTournaments().then(function(e){t.tournaments=e})}}},C={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tournaments container"},[n("form",{staticClass:"searchBar",on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[n("label",[n("div",{staticClass:"field"},[n("div",{staticClass:"control"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.search.string,expression:"search.string"}],staticClass:"input",attrs:{id:"tSearch",type:"text"},domProps:{value:t.search.string},on:{input:function(e){e.target.composing||t.$set(t.search,"string",e.target.value)}}}),n("br"),n("button",{staticClass:"button is-danger",attrs:{type:"submit"},on:{click:t.clicked1}},[t._v("Search")])])])]),t._v(" "),t.search.string?n("p",[t._v('Searching for "'+t._s(t.search.string)+'"')]):t._e()]),t._v(" "),n("div",[t.tournaments.length>0?n("ul",{staticClass:"results1 columns"},[1==t.redoMapSearch?n("button",{staticClass:"map button is-danger",on:{click:t.newBoundSearch}},[t._v("Update results")]):t._e(),n("br"),n("br"),t._v(" "),t._l(t.tournaments,function(e){return n("li",{staticClass:"entry1 column"},[n("p",[n("strong",[t._v(t._s(e.name))])]),t._v(" "),n("p",[t._v(t._s(e.address))]),t._v(" "),n("router-link",{attrs:{to:{name:"singleT",params:{id:e.id}}}},[t._v("See details")])],1)}),t._v(" "),n("gmap",{staticClass:"column is-half",attrs:{tourneys:t.tournaments},on:{moved:t.offerUpdateSearch}})],2):t._e()])])},staticRenderFns:[]};var x=n("VU/8")(y,C,!1,function(t){n("SAhu")},null,null).exports,S={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cookies"},[n("article",{staticClass:"message"},[n("div",{staticClass:"message-header"},[n("p",[t._v("Hi there")]),t._v(" "),n("button",{staticClass:"delete",attrs:{"aria-label":"delete"}})]),t._v(" "),n("div",{staticClass:"message-body"},[n("p",[t._v("This site has some extended functionality with cookies.  Not needing to re-login upon refresh, etc.  Do you accept the use of cookies on this site?")]),t._v(" "),n("button",{staticClass:"button is-danger",attrs:{type:"submit"}},[t._v("Yes")]),t._v(" "),n("button",{staticClass:"button is-danger",attrs:{type:"submit"}},[t._v("No")])])])])}]};var k=n("VU/8")({name:"cookieNotifier",data:function(){return{}}},S,!1,function(t){n("Dudh")},null,null).exports,T=function(){function t(){m()(this,t)}return p()(t,null,[{key:"createAccount",value:function(t){return console.log(t),l.a.post("https://tfind-back.herokuapp.com/api/users",t).then(function(t){console.log(t)}).catch(function(t){console.log(t)})}},{key:"activateAccount",value:function(t){return console.log(t),l.a.put("https://tfind-back.herokuapp.com/api/users",t).then(function(t){return console.log(t.statusText),t.statusText}).catch(function(t){console.log(t)})}},{key:"login",value:function(t){return console.log(t.name),l.a.get("https://tfind-back.herokuapp.com/login",{params:{name:t.name,password:t.password}}).then(function(t){return console.log(t),t}).catch(function(t){console.log(t)})}}]),t}(),N={name:"register",data:function(){return{user:{name:"",region:"",torg:!1,password:"",email:""},password2:"",submitted:!1,hasErrors:!1,errors:{name:"",password:"",email:""}}},methods:{handleSubmit:function(){console.log(this.user),1==this.checkForm()&&(T.createAccount(this.user),this.submitted=!0)},checkForm:function(){if(this.errors={},this.user.name||(this.errors.username="Username needed!"),this.user.password&&this.user.password==this.password2||(this.errors.password="Problems with the password!"),this.user.email&&this.validEmail(this.user.email)||(this.errors.email="Needs a valid email!"),!this.errors.length)return!0;this.hasErrors=!0},validEmail:function(t){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t)}}},$={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tournaments"},[0==this.submitted?n("div",[n("form",{on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[n("label",[n("div",{staticClass:"field"},[n("div",{staticClass:"control"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.user.name,expression:"user.name"}],staticClass:"input is-danger",attrs:{type:"text",placeholder:"Name"},domProps:{value:t.user.name},on:{input:function(e){e.target.composing||t.$set(t.user,"name",e.target.value)}}}),n("br"),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],staticClass:"input is-danger",attrs:{type:"text",placeholder:"Email Address"},domProps:{value:t.user.email},on:{input:function(e){e.target.composing||t.$set(t.user,"email",e.target.value)}}}),n("br"),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.user.region,expression:"user.region"}],staticClass:"input is-danger",attrs:{type:"text",placeholder:"Region"},domProps:{value:t.user.region},on:{input:function(e){e.target.composing||t.$set(t.user,"region",e.target.value)}}}),n("br"),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"input is-danger",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}}),n("br"),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password2,expression:"password2"}],staticClass:"input is-danger",attrs:{type:"password",placeholder:"Confirm Password"},domProps:{value:t.password2},on:{input:function(e){e.target.composing||(t.password2=e.target.value)}}}),n("br"),t._v(" "),t.user.password!=t.password2&&t.password2?n("p",{staticClass:"modalP"},[t._v("Passwords do not  match!")]):t._e(),n("br"),t._v(" "),n("label",{staticClass:"checkbox"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.user.torg,expression:"user.torg"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.user.torg)?t._i(t.user.torg,null)>-1:t.user.torg},on:{change:function(e){var n=t.user.torg,s=e.target,a=!!s.checked;if(Array.isArray(n)){var o=t._i(n,null);s.checked?o<0&&t.$set(t.user,"torg",n.concat([null])):o>-1&&t.$set(t.user,"torg",n.slice(0,o).concat(n.slice(o+1)))}else t.$set(t.user,"torg",a)}}}),t._v(" "),n("p",{staticClass:"modalP"},[t._v("Are you an organizer?")])])])])]),t._v(" "),n("br"),t._v(" "),n("button",{attrs:{type:"submit"}},[t._v("Create")])])]):t._e(),t._v(" "),1==this.submitted?n("div",[n("p",{staticClass:"modalP"},[t._v("Your details have been submitted and a confirmation email should be on its way to "+t._s(this.user.email)+".")])]):t._e()])},staticRenderFns:[]};var E=n("VU/8")(N,$,!1,function(t){n("7pMb")},null,null).exports,P=n("Dd8w"),A=n.n(P),O={name:"login",data:function(){return{isActive:!1,error:!1,params:{name:"",password:""}}},methods:A()({handleSubmit:function(){var t=this;this.params&&T.login(this.params).then(function(e){e?(console.log(e),"success"==e.data.status?(t.login(e.data.user[0]),t.$emit("log")):t.error=!0):t.error=!0})},active:function(){0==this.isActive?this.isActive=!0:this.isActive=!1}},Object(a.b)(["login"]))},M={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown",class:{"is-active":t.isActive}},[n("div",{staticClass:"dropdown-trigger"},[n("button",{staticClass:"button is-danger is-inverted",attrs:{"aria-haspopup":"true","aria-controls":"dropdown-menu3"},on:{click:function(e){t.active()}}},[t._v("Login")])]),t._v(" "),n("div",{staticClass:"dropdown-menu",attrs:{id:"dropdown-menu3",role:"menu"}},[n("div",{staticClass:"dropdown-content"},[n("form",{on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[n("label",{staticClass:"label"},[n("div",{staticClass:"control"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.params.name,expression:"params.name"}],staticClass:"input",attrs:{type:"text",placeholder:"Username"},domProps:{value:t.params.name},on:{input:function(e){e.target.composing||t.$set(t.params,"name",e.target.value)}}}),n("br"),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.params.password,expression:"params.password"}],staticClass:"input",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.params.password},on:{input:function(e){e.target.composing||t.$set(t.params,"password",e.target.value)}}})])]),n("br"),t._v(" "),n("button",{staticClass:"button is-danger",attrs:{type:"submit"}},[t._v("Login")])]),t._v(" "),1==this.error?n("article",{staticClass:"message is-danger"},[n("div",{staticClass:"message-body"},[t._v("\n          Username or password are incorrect.  Try again!\n        ")])]):t._e()])])])},staticRenderFns:[]};var U=n("VU/8")(O,M,!1,function(t){n("D9CB")},null,null).exports,F={name:"logout",data:function(){return{}},methods:A()({logOut:function(){this.logout(),this.$emit("out")}},Object(a.b)(["logout"]))},R={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logout"},[e("button",{staticClass:"button is-danger is-inverted",on:{click:this.logOut}},[this._v("Sign Out")])])},staticRenderFns:[]};var D={name:"HelloWorld",data:function(){return{msg:"Test your might!",loginStatus:this.$store.getters.loginStatus,registration:!1,TOstatus:this.$store.getters.loginDetails.TO}},created:function(){},components:{tourneys:x,register:E,login:U,logout:n("VU/8")(F,R,!1,function(t){n("9R0g")},null,null).exports,cookieNotifier:k},mounted:function(){console.log(Q.state),this.loginStatus=Q.state.loggedIn},methods:{onLog:function(){this.loginStatus=Q.state.loggedIn},openModal:function(){this.registration=!0},closeModal:function(){this.registration=!1}},computed:{TO:function(){this.TOstatus=this.$store.getters.loginDetails.TO}},watch:{TO:function(){return this.TOstatus}}},L={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav",{staticClass:"navbar is-danger"},[t._m(0),t._v(" "),n("div",{staticClass:"navbar-end"},[n("div",{staticClass:"navbar-item"},[n("div",{staticClass:"buttons"},[1==this.loginStatus&&1==this.TOstatus?n("div",[n("router-link",{attrs:{tag:"a",to:"/create"}},[n("button",{staticClass:"button is-danger is-inverted"},[t._v("Create Tournament")])])],1):t._e()])]),t._v(" "),n("div",{staticClass:"navbar-item"},[n("div",{staticClass:"buttons"},[0==this.loginStatus?n("div",[n("login",{on:{log:t.onLog}}),t._v(" "),n("button",{staticClass:"button is-danger is-inverted",on:{click:t.openModal}},[t._v("Sign Up")])],1):n("div",[n("logout",{on:{out:t.onLog}})],1)])])])]),t._v(" "),1==this.registration?n("div",{staticClass:"modal is-active"},[n("div",{staticClass:"modal-background"}),t._v(" "),n("div",{staticClass:"modal-content"},[n("register")],1),t._v(" "),n("button",{staticClass:"modal-close is-large",attrs:{"aria-label":"close"},on:{click:t.closeModal}})]):t._e(),t._v(" "),n("div",{staticClass:"hello container"},[n("h1",[t._v(t._s(t.msg))]),t._v(" "),n("div",[n("tourneys")],1)]),t._v(" "),n("cookieNotifier")],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"navbar-start"},[e("a",{staticClass:"navbar-item",attrs:{href:"https://www.jlukes.com/tfind"}},[this._v("\n        Logo\n      ")])])}]};var z=n("VU/8")(D,L,!1,function(t){n("9tkH")},"data-v-2f651da0",null).exports,V={name:"tournaments",data:function(){return{form:{name:"",region:"",address:"",torg:"",size:"",entrycond:"",games:[],series:[],lat:0,lng:0,formatted:""},forminput:"form tournaments",tournaments:[]}},methods:{handleSubmit:function(){var t=this,e=this.form.games.split(", "),n=this.form.series.split(", ");for(var s in this.form.series=[],this.form.games=[],e)this.form.games.push('"'+e[s]+'"');for(var s in n)this.form.series.push('"'+n[s]+'"');if(console.log(this.form),this.form){console.log(this.address);var a=this.form.address.replace(/ /g,"+");v.getCoords(a).then(function(e){t.form.lat=e.coords.lat,t.form.lng=e.coords.lng,t.form.address=e.formatted,v.createTournament(t.form).then(function(e){t.tournaments=e})})}}}},j={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tournaments"},[n("form",{on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[n("label",[n("div",{staticClass:"field"},[n("div",{staticClass:"control"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"input",attrs:{type:"text",placeholder:"Tournament Name"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}}),n("br"),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.region,expression:"form.region"}],staticClass:"input",attrs:{type:"text",placeholder:"Tournament Region"},domProps:{value:t.form.region},on:{input:function(e){e.target.composing||t.$set(t.form,"region",e.target.value)}}}),n("br"),t._v(" "),t._v('"/>'),n("br"),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.torg,expression:"form.torg"}],staticClass:"input",attrs:{type:"text",placeholder:"Organizer"},domProps:{value:t.form.torg},on:{input:function(e){e.target.composing||t.$set(t.form,"torg",e.target.value)}}}),n("br"),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.size,expression:"form.size"}],staticClass:"input",attrs:{type:"text",placeholder:"Size"},domProps:{value:t.form.size},on:{input:function(e){e.target.composing||t.$set(t.form,"size",e.target.value)}}}),n("br"),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.entrycond,expression:"form.entrycond"}],staticClass:"input",attrs:{type:"text",placeholder:"Entry Conditions"},domProps:{value:t.form.entrycond},on:{input:function(e){e.target.composing||t.$set(t.form,"entrycond",e.target.value)}}}),n("br"),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.games,expression:"form.games"}],staticClass:"input",attrs:{type:"text",placeholder:"Games (separated by commas)"},domProps:{value:t.form.games},on:{input:function(e){e.target.composing||t.$set(t.form,"games",e.target.value)}}}),n("br"),t._v(" "),t._v('"/>'),n("br")])])]),t._v(" "),n("button",{staticClass:"button is-danger",attrs:{type:"submit"}},[t._v("Create")])]),t._v(" "),t.form.name.length>0?n("ul",[n("p",[t._v("Does this look right?")])]):t._e()])},staticRenderFns:[]};var I=n("VU/8")(V,j,!1,function(t){n("uxrV")},null,null).exports,W={name:"tournaments",data:function(){return{form:{name:"",region:"",address:"",torg:"",size:"",entrycond:"",games:[],series:[]},searchinput:"Search tournaments",tournament:{},editing:!1,id:this.$route.params.id}},created:function(){var t=this;console.log(this.id+" id"),v.getOneTournament(this.id).then(function(e){t.tournament=e})},methods:{handleSubmit:function(){var t=this;console.log(this.search.string),this.search.string.length>=1?v.searchTournament(this.search.string).then(function(e){t.tournaments=e}):v.getAllTournaments().then(function(e){t.tournaments=e})}}},B={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tournaments"},[t.tournament.length>0?n("div",[n("p",[n("strong",[t._v(t._s(t.tournament[0].name))])]),t._v(" "),n("p",[t._v(t._s(t.tournament[0].torg))]),t._v(" "),n("p",[t._v(t._s(t.tournament[0].series))]),t._v(" "),n("p",[t._v(t._s(t.tournament[0].games))]),t._v(" "),n("p",[t._v(t._s(t.tournament[0].address))]),t._v(" "),n("p",[t._v(t._s(t.tournament[0].size))])]):t._e(),t._v(" "),1==t.editing?n("form",{on:{submit:function(t){t.preventDefault()}}},[n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],attrs:{type:"text"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.region,expression:"form.region"}],attrs:{type:"text"},domProps:{value:t.form.region},on:{input:function(e){e.target.composing||t.$set(t.form,"region",e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.address,expression:"form.address"}],attrs:{type:"text"},domProps:{value:t.form.address},on:{input:function(e){e.target.composing||t.$set(t.form,"address",e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.torg,expression:"form.torg"}],attrs:{type:"text"},domProps:{value:t.form.torg},on:{input:function(e){e.target.composing||t.$set(t.form,"torg",e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.size,expression:"form.size"}],attrs:{type:"text"},domProps:{value:t.form.size},on:{input:function(e){e.target.composing||t.$set(t.form,"size",e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.entrycond,expression:"form.entrycond"}],attrs:{type:"text"},domProps:{value:t.form.entrycond},on:{input:function(e){e.target.composing||t.$set(t.form,"entrycond",e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.games,expression:"form.games"}],attrs:{type:"text"},domProps:{value:t.form.games},on:{input:function(e){e.target.composing||t.$set(t.form,"games",e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.series,expression:"form.series"}],attrs:{type:"text"},domProps:{value:t.form.series},on:{input:function(e){e.target.composing||t.$set(t.form,"series",e.target.value)}}})]),t._v(" "),n("button",{attrs:{type:"submit"}},[t._v("Create")])]):t._e()])},staticRenderFns:[]};var H=n("VU/8")(W,B,!1,function(t){n("EwX7")},null,null).exports,G={name:"register",data:function(){return{status:""}},mounted:function(){var t=this;if(this.$route.params.hash){console.log(this.$route.params.hash+"aaa");var e={hash:this.$route.params.hash};T.activateAccount(e).then(function(e){t.status=e})}},methods:{handleSubmit:function(){}}},X={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tournaments"},["OK"==this.status?e("div",{staticClass:"success"},[this._v("\n    Now you can login!  Click "),e("a",{attrs:{href:"https://www.jlukes.com/tfind_front"}},[this._v("here")]),this._v(" to go to the main page.\n  ")]):e("div",{staticClass:"failure"},[this._v("\n    Oops, something went wrong.  Click "),e("a",{attrs:{href:"https://www.jlukes.com/tfind_front"}},[this._v("here")]),this._v(" to go to the main page or try again.\n  ")])])},staticRenderFns:[]};var Y=n("VU/8")(G,X,!1,function(t){n("XknN")},null,null).exports;s.a.use(i.a);var Z=new i.a({routes:[{path:"/",name:"HelloWorld",component:z},{path:"/tournaments",name:"Tournaments",component:x},{path:"/create",name:"createTournament",component:I},{path:"/singlet/:id",name:"singleT",component:H},{path:"/register",name:"register",component:E},{path:"/activate/:hash",name:"activate",component:Y}]});n.d(e,"serverBus",function(){return J}),s.a.config.productionTip=!1,s.a.use(a.a),s.a.use(_,{load:{key:"AIzaSyBqKv4liCN4Qb-ptZ0uU8qUQ0bNyDxoS9c",libraries:"places"}});var q=new a.a.Store({state:{status:"search",loggedIn:!1,loginDetails:{user:"none",id:0,TO:!1}},mutations:{SET_USE_CONTEXT:function(t,e){t.status=e},SET_LOGIN_STATUS:function(t,e){t.loggedIn=e},SET_LOGIN_DETAILS:function(t,e){console.log(e),t.loginDetails.user=e.name,t.loginDetails.id=e.id,t.loginDetails.TO=e.torg}},actions:{search:function(t){t.commit("SET_USE_CONTEXT","search")},createAccount:function(t){t.commit("SET_USE_CONTEXT","createAccount")},createTournament:function(t){t.commit("SET_USE_CONTEXT","createTournament")},login:function(t,e){console.log(t),t.commit("SET_LOGIN_DETAILS",e),t.commit("SET_LOGIN_STATUS",!0)},logout:function(t){t.commit("SET_LOGIN_STATUS",!1)}},getters:{searchStatus:function(t){return t.status},loginStatus:function(t){return t.loginStatus},loginDetails:function(t){return t.loginDetails}}}),Q=e.default=q,J=new s.a;new s.a({el:"#app",router:Z,store:q,components:{App:r},template:"<App/>"})},RpSN:function(t,e){},SAhu:function(t,e){},T5eZ:function(t,e,n){"use strict";var s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("label",[e("span",{domProps:{textContent:this._s(this.label)}}),this._v(" "),e("input",{ref:"input",class:this.className,attrs:{type:"text",placeholder:this.placeholder}})])},staticRenderFns:[]};e.a=s},XknN:function(t,e){},YI6p:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("jIen"),a=n.n(s);for(var o in s)"default"!==o&&function(t){n.d(e,t,function(){return s[t]})}(o);var r=n("T5eZ"),i=n("VU/8")(a.a,r.a,!1,null,null,null);e.default=i.exports},dtWn:function(t,e){},"hY/q":function(t,e){},preG:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s,a=(s=n("hQTS")).default||s,o={render:function(){var t=this.$createElement;return(this._self._c||t)("input",this._g(this._b({ref:"input"},"input",this.$attrs,!1),this.$listeners))},staticRenderFns:[]},r=n("VU/8")(a,o,!1,null,null,null);e.default=r.exports},uxrV:function(t,e){}},["NHnr"]);