(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,n){e.exports=n(36)},35:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(14),u=n.n(c),o=n(6),l=(n(34),n(35),n(12)),i=n(22),s=n(23);var d=n(24);var f=Object(l.combineReducers)({users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USERS_FETCH_DATA_SUCCESS":return t.users;default:return e}},usersHasErrored:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USERS_HAS_ERRORED":return t.hasErrored;default:return e}},usersIsLoading:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USERS_IS_LOADING":return t.isLoading;default:return e}},loadButton:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_BUTTON":return t.isPushed;default:return e}},addToFriends:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TO_FRIENDS":return e.includes(t.friends)?e:[].concat(Object(d.a)(e),[t.friends]);case"REMOVE_FROM_FRIENDS":return e.filter(function(e,n){return n!==t.id});default:return e}}});var p=n(7),m=n(8),E=n(10),h=n(9),b=function(){return a.a.createElement("div",{className:"preloader"},a.a.createElement("div",{className:"loader"}))},O=n(42),v=n(43),j=n(44),y=n(37),S=n(38),g=n(39),_=n(40),R=n(41),D=n(45),k=function(e){Object(E.a)(n,e);var t=Object(h.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){var e=this,t=this.props.user;return a.a.createElement("div",null,a.a.createElement(y.a,{src:t.picture.large}),a.a.createElement(S.a,null,a.a.createElement(g.a,null,a.a.createElement("b",null,t.name.first," ",t.name.last)),a.a.createElement(_.a,null,t.gender)),a.a.createElement(R.a,null,a.a.createElement(D.a,{onClick:function(){return e.props.ToFriends(t)},color:"secondary",block:!0},"friends!")))}}]),n}(a.a.Component),w=Object(o.b)(null,function(e){return{ToFriends:function(t){return e(function(e){return{type:"ADD_TO_FRIENDS",friends:e}}(t))}}})(k),C=function(e){Object(E.a)(n,e);var t=Object(h.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return this.props.hasErrored?console.log("Opps! Something went wrong"):this.props.isLoading?a.a.createElement(b,null):a.a.createElement(O.a,null,this.props.users.map(function(e,t){return a.a.createElement(v.a,{sm:"2"},a.a.createElement(j.a,{body:!0,className:"crd text-center",key:t},a.a.createElement(w,{user:e})))}))}}]),n}(a.a.Component),T=Object(o.b)(function(e){return{users:e.users,hasErrored:e.usersHasErrored,isLoading:e.usersIsLoading}})(C),N=n(15),A=function(e){Object(E.a)(n,e);var t=Object(h.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.friend,r=t.index;return a.a.createElement("div",null,a.a.createElement(y.a,{src:n.picture.large}),a.a.createElement(S.a,null,a.a.createElement(g.a,null,a.a.createElement("b",null,n.name.first," ",n.name.last)),a.a.createElement(_.a,null,a.a.createElement("h6",null,n.gender))),a.a.createElement(R.a,null,a.a.createElement(D.a,{onClick:function(){return e.props.remove(r)},color:"danger",block:!0},"Remove")))}}]),n}(a.a.Component),F=Object(o.b)(null,function(e){return{remove:function(t){return e(function(e){return{type:"REMOVE_FROM_FRIENDS",id:e}}(t))}}})(A),I=function(e){Object(E.a)(n,e);var t=Object(h.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return console.log(this.props.friends),this.props.friends?a.a.createElement(O.a,null,this.props.friends.map(function(e,t){var n;return a.a.createElement(v.a,{key:t+10,md:"2"},a.a.createElement(j.a,(n={body:!0,className:"crd text-center",key:t},Object(N.a)(n,"body",!0),Object(N.a)(n,"outline",!0),Object(N.a)(n,"color","primary"),n),a.a.createElement(F,{friend:e,index:t})))})):null}}]),n}(a.a.Component),L=Object(o.b)(function(e){return{friends:e.addToFriends}})(I),U=function(e){return{type:"USERS_IS_LOADING",isLoading:e}},x=function(e){return{type:"USERS_HAS_ERRORED",hasErrored:e}},H=function(e){return{type:"USERS_FETCH_DATA_SUCCESS",users:e}};var M=function(e){Object(E.a)(n,e);var t=Object(h.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){var e=this;return a.a.createElement("div",null,a.a.createElement(T,null),a.a.createElement(L,null),a.a.createElement(D.a,{onClick:function(){return e.props.fetchData("https://randomuser.me/api/?results=10")},outline:!0,color:"primary",size:"lg",className:"load_but"},"load"))}}]),n}(a.a.Component),B=Object(o.b)(null,function(e){return{fetchData:function(t){return e(function(e){return function(t){t(U(!0)),fetch(e).then(function(e){if(!e.ok)throw new Error(e.statusText);return t(U(!1)),e}).then(function(e){return e.json()}).then(function(e){return e.results}).then(function(e){return t(H(e))}).catch(function(){return t(x(!0))})}}(t))}}})(M),G=Object(l.createStore)(f,Object(s.composeWithDevTools)(Object(l.applyMiddleware)(i.a)));function J(){return a.a.createElement("div",{className:"App"},a.a.createElement(o.a,{store:G},a.a.createElement(B,null)))}var V=document.getElementById("root");u.a.render(a.a.createElement(J,null),V)}},[[25,1,2]]]);
//# sourceMappingURL=main.3c6e3607.chunk.js.map