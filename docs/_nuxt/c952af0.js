(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{291:function(t,e,n){var content=n(294);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(68).default)("b217a8ce",content,!0,{sourceMap:!1})},293:function(t,e,n){"use strict";n(291)},294:function(t,e,n){var o=n(67)((function(i){return i[1]}));o.push([t.i,".link{transition:all .2s ease-in-out}.link.button-search{background:#036fd7;border-radius:999px;padding:.4rem .6rem;font-size:.8rem}.link.button-search:hover{background:#024a8f}.link.button-avatar{background:#036fd7;border-radius:999px;display:flex;align-items:center}.link.button-avatar .avatar img{width:32px;height:32px;border-radius:999px}.link.button-avatar .dropdown{margin-left:.2rem;padding:.1rem .35rem .1rem .1rem}.link.button-avatar .dropdown .icon{transition:all .2s ease-in-out;background:#037bef;border-radius:999px;font-size:.7rem;padding:.25rem .45rem .2rem}.link.button-avatar:hover{background:#024a8f}.link.button-avatar:hover .dropdown .icon{background:#025cb3}.button-theme{position:relative}.button-theme .checkbox{cursor:pointer;opacity:0;position:absolute}.button-theme .label{cursor:pointer;width:38px;height:20px;background-color:#036fd7;display:flex;border-radius:50px;align-items:center;justify-content:space-between;padding:5px;position:relative;transform:scale(1.5)}.button-theme .ball{width:14px;height:14px;background-color:#fff;position:absolute;top:3px;left:0;margin-left:4px;margin-right:3px;border-radius:50%;transition:transform .2s linear}.button-theme .checkbox:checked+.label .ball{transform:translateX(17px)}.button-theme .fa-moon,.button-theme .fa-sun{font-size:.6rem}.button-theme .fa-moon{color:#fff}.button-theme .fa-sun{color:#ff0}",""]),o.locals={},t.exports=o},301:function(t,e,n){"use strict";n.r(e);var o=n(0);var r=Object(o.d)({setup:function(){var t=function(){var t=Object(o.m)(!1),e=function(e){var n=e.matches?"dark":"light";t.value="dark"===n,console.log(n)};Object(o.j)((function(){var n=window.matchMedia("(prefers-color-scheme: dark)");n.addEventListener("change",e),t.value=n.matches})),Object(o.i)((function(){window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change",e)})),Object(o.r)(t,(function(){return n()}));var n=function(){localStorage.setItem("theme",t.value?"dark":"light"),r()},r=function(){var e=localStorage.getItem("theme")||"light";t.value="dark"===e,"dark"===e?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")};return{theme:t,toggleTheme:n}}();return{theme:t.theme,toggleTheme:t.toggleTheme}}}),c=(n(293),n(55)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navbar"},[n("div",{staticClass:"container mx-auto px-4 flex"},[n("NuxtLink",{staticClass:"brand",attrs:{to:"/"}},[n("img",{attrs:{src:t.$static("/images/logo/white_46.png"),alt:"Logo"}}),t._v(" "),n("span",[t._v("AnimID")])]),t._v(" "),n("div",{staticClass:"menu"},[n("div",{staticClass:"item"},[n("NuxtLink",{staticClass:"link",attrs:{to:"/anime",tag:"a"}},[t._v("ANIME")])],1),t._v(" "),n("div",{staticClass:"item"},[n("NuxtLink",{staticClass:"link",attrs:{to:"/",tag:"a"}},[t._v("MANGA")])],1),t._v(" "),n("div",{staticClass:"item"},[n("NuxtLink",{staticClass:"link",attrs:{to:"/",tag:"a"}},[t._v("COMMUNITY")])],1),t._v(" "),n("div",{staticClass:"item"},[n("NuxtLink",{staticClass:"link",attrs:{to:"/",tag:"a"}},[t._v("BLOG")])],1),t._v(" "),n("div",{staticClass:"item"},[n("button",{staticClass:"link button-search"},[n("font-awesome-icon",{attrs:{icon:["fas","search"]}})],1)]),t._v(" "),n("div",{staticClass:"item"},[n("div",{staticClass:"button-theme"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.theme,expression:"theme"}],staticClass:"checkbox",attrs:{id:"checkbox",type:"checkbox"},domProps:{checked:Array.isArray(t.theme)?t._i(t.theme,null)>-1:t.theme},on:{change:function(e){var n=t.theme,o=e.target,r=!!o.checked;if(Array.isArray(n)){var c=t._i(n,null);o.checked?c<0&&(t.theme=n.concat([null])):c>-1&&(t.theme=n.slice(0,c).concat(n.slice(c+1)))}else t.theme=r}}}),t._v(" "),n("label",{staticClass:"label",attrs:{for:"checkbox"}},[n("font-awesome-icon",{attrs:{icon:["fas","moon"]}}),t._v(" "),n("font-awesome-icon",{attrs:{icon:["fas","sun"]}}),t._v(" "),n("div",{staticClass:"ball"})],1)])]),t._v(" "),n("div",{staticClass:"item"},[n("button",{staticClass:"link button-avatar"},[n("div",{staticClass:"avatar"},[n("img",{attrs:{src:t.$static("/images/avatars/1.png"),alt:"Avatar"}})]),t._v(" "),n("div",{staticClass:"dropdown"},[n("div",{staticClass:"icon"},[n("font-awesome-icon",{attrs:{icon:["fas","chevron-down"]}})],1),t._v(" "),n("div",{staticClass:"menu"},[n("div",{staticClass:"item"},[n("NuxtLink",{staticClass:"link",attrs:{to:"/",tag:"a"}},[t._v("My Profile")])],1),t._v(" "),n("div",{staticClass:"item"},[n("NuxtLink",{staticClass:"link",attrs:{to:"/",tag:"a"}},[t._v("Messenger")])],1),t._v(" "),n("div",{staticClass:"item"},[n("NuxtLink",{staticClass:"link",attrs:{to:"/",tag:"a"}},[t._v("Logout")])],1)])])])])])],1)])}),[],!1,null,null,null);e.default=component.exports}}]);