(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{293:function(t,e,o){var content=o(295);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(57).default)("b217a8ce",content,!0,{sourceMap:!1})},294:function(t,e,o){"use strict";o(293)},295:function(t,e,o){var n=o(56)((function(i){return i[1]}));n.push([t.i,".link{transition:all .2s ease-in-out}.link.button-search{background:#036fd7;border-radius:999px;padding:.4rem .6rem;font-size:.8rem}.link.button-search:hover{background:#024a8f}.link.button-avatar{background:#036fd7;border-radius:999px;display:flex;align-items:center}.link.button-avatar .avatar img{width:32px;height:32px;border-radius:999px}.link.button-avatar .dropdown{margin-left:.2rem;padding:.1rem .35rem .1rem .1rem}.link.button-avatar .dropdown .icon{transition:all .2s ease-in-out;background:#037bef;border-radius:999px;font-size:.7rem;padding:.25rem .45rem .2rem}.link.button-avatar:hover{background:#024a8f}.link.button-avatar:hover .dropdown .icon{background:#025cb3}.button-theme{position:relative}.button-theme .checkbox{cursor:pointer;opacity:0;position:absolute}.button-theme .label{cursor:pointer;width:40px;height:22px;background-color:#036fd7;display:flex;border-radius:50px;align-items:center;justify-content:space-between;padding:5px;position:relative;transform:scale(1.5)}.button-theme .ball{width:16px;height:16px;background-color:#F9FAFB;position:absolute;top:3px;left:0;margin-left:4px;margin-right:3px;border-radius:50%;transition:all .3s linear}.button-theme .checkbox:checked+.label .ball{transform:translateX(17px);background-color:#1F2937}.button-theme .fa-moon,.button-theme .fa-sun{font-size:.6rem}.button-theme .fa-moon{color:#fff}.button-theme .fa-sun{color:#ff0}",""]),n.locals={},t.exports=n},297:function(t,e,o){"use strict";o.r(e);var n=o(0);var r=Object(n.d)({setup:function(){var t=function(){var t=Object(n.m)(!1),e=function(e){var o=e.matches?"dark":"light";t.value="dark"===o,console.log(o)};Object(n.j)((function(){var o=window.matchMedia("(prefers-color-scheme: dark)");o.addEventListener("change",e),localStorage.getItem("theme")?t.value="dark"===localStorage.getItem("theme"):t.value=o.matches})),Object(n.i)((function(){window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change",e)})),Object(n.r)(t,(function(){return o()}));var o=function(){localStorage.setItem("theme",t.value?"dark":"light"),r()},r=function(){var e=localStorage.getItem("theme")||"light";t.value="dark"===e,"dark"===e?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")};return{theme:t,toggleTheme:o}}();return{theme:t.theme,toggleTheme:t.toggleTheme,navbarActionItems:Object(n.l)([{text:"ANIME",to:"/anime",icon:["fas","play"]},{text:"MANGA",to:"/manga",icon:["fas","book-open"]},{text:"MUSIC",to:"/music",icon:["fas","music"]},{text:"V-TUBER",to:"/v-tuber",icon:["fas","paw"]},{text:"COMMUNITY",to:"/community",icon:["fas","campground"]},{text:"BLOG",to:"/blog",icon:["fas","newspaper"]}])}}}),c=(o(294),o(55)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"navbar"},[o("div",{staticClass:"container mx-auto px-4 flex"},[o("NuxtLink",{staticClass:"brand",attrs:{to:"/"}},[o("img",{attrs:{src:t.$static("/images/logo/white_46.png"),alt:"Logo"}}),t._v(" "),o("span",[t._v("AnimID")])]),t._v(" "),o("div",{staticClass:"menu"},[t._l(t.navbarActionItems,(function(e,i){return o("div",{key:i,staticClass:"item"},[o("NuxtLink",{staticClass:"link",attrs:{to:e.to,tag:"a"}},[o("span",[t._v(t._s(e.text))])])],1)})),t._v(" "),o("div",{staticClass:"item"},[o("button",{staticClass:"link button-search"},[o("font-awesome-icon",{attrs:{icon:["fas","search"]}})],1)]),t._v(" "),o("div",{staticClass:"item"},[o("div",{staticClass:"button-theme"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.theme,expression:"theme"}],staticClass:"checkbox",attrs:{id:"checkbox",type:"checkbox"},domProps:{checked:Array.isArray(t.theme)?t._i(t.theme,null)>-1:t.theme},on:{change:function(e){var o=t.theme,n=e.target,r=!!n.checked;if(Array.isArray(o)){var c=t._i(o,null);n.checked?c<0&&(t.theme=o.concat([null])):c>-1&&(t.theme=o.slice(0,c).concat(o.slice(c+1)))}else t.theme=r}}}),t._v(" "),o("label",{staticClass:"label",attrs:{for:"checkbox"}},[o("font-awesome-icon",{attrs:{icon:["fas","moon"]}}),t._v(" "),o("font-awesome-icon",{attrs:{icon:["fas","sun"]}}),t._v(" "),o("div",{staticClass:"ball"})],1)])]),t._v(" "),o("div",{staticClass:"item"},[o("button",{staticClass:"link button-avatar"},[o("div",{staticClass:"avatar"},[o("img",{attrs:{src:t.$static("/images/avatars/1.png"),alt:"Avatar"}})]),t._v(" "),o("div",{staticClass:"dropdown"},[o("div",{staticClass:"icon"},[o("font-awesome-icon",{attrs:{icon:["fas","chevron-down"]}})],1),t._v(" "),o("div",{staticClass:"menu"},[o("div",{staticClass:"item"},[o("NuxtLink",{staticClass:"link",attrs:{to:"/",tag:"a"}},[t._v("My Profile")])],1),t._v(" "),o("div",{staticClass:"item"},[o("NuxtLink",{staticClass:"link",attrs:{to:"/",tag:"a"}},[t._v("Messenger")])],1),t._v(" "),o("div",{staticClass:"item"},[o("NuxtLink",{staticClass:"link",attrs:{to:"/",tag:"a"}},[t._v("Logout")])],1)])])])])],2)],1)])}),[],!1,null,null,null);e.default=component.exports}}]);