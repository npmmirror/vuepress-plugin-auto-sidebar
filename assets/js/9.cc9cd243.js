(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{253:function(t,e,a){"use strict";a.r(e);var r=a(28),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"_0-更多的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-更多的问题"}},[t._v("#")]),t._v(" 0. 更多的问题")]),t._v(" "),a("p",[t._v("该部分的功能实现大部分基本来源于我个人记笔记时的需求，所以在广泛使用上可能不那么友好，如果你有一些其余的需求或者意见可以给我"),a("a",{attrs:{href:"https://github.com/shanyuhai123/vuepress-plugin-auto-sidebar/issues/new",target:"_blank",rel:"noopener noreferrer"}},[t._v("提一个 Issue"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"_1-它的作用是生成侧边栏吗？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-它的作用是生成侧边栏吗？"}},[t._v("#")]),t._v(" 1. 它的作用是生成侧边栏吗？")]),t._v(" "),a("p",[t._v("不，它"),a("strong",[t._v("并不是")]),t._v("一个自动生成侧边栏的插件，"),a("strong",[t._v("它仅仅可以帮助你对同一目录下的文件进行分组。")])]),t._v(" "),a("blockquote",[a("p",[t._v("🙂 这是写这个插件的初始目标，谁知写完后完全不是那么一回事。")])]),t._v(" "),a("h2",{attrs:{id:"_2-页面显示-404。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-页面显示-404。"}},[t._v("#")]),t._v(" 2. 页面显示 404。")]),t._v(" "),a("p",[t._v("在 "),a("a",{attrs:{href:"https://v1.vuepress.vuejs.org/zh/guide/directory-structure.html#%E9%BB%98%E8%AE%A4%E7%9A%84%E9%A1%B5%E9%9D%A2%E8%B7%AF%E7%94%B1",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuepress"),a("OutboundLink")],1),t._v(" 说明了文件路径与页面路由之间的映射关系：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("文件的相对路径")]),t._v(" "),a("th",[t._v("页面路由地址")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("/README.md")])]),t._v(" "),a("td",[a("code",[t._v("/")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("/guide/README.md")])]),t._v(" "),a("td",[a("code",[t._v("/guide/")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("/config.md")])]),t._v(" "),a("td",[a("code",[t._v("/config.html")])])])])]),t._v(" "),a("p",[t._v("所以当你访问 "),a("code",[t._v("/guide/")]),t._v(" 而 404 时是由于缺乏了它对应的 "),a("code",[t._v("README.md")]),t._v(" 文件。")]),t._v(" "),a("h2",{attrs:{id:"_3-侧边栏显示的是文件路径，而非文件名。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-侧边栏显示的是文件路径，而非文件名。"}},[t._v("#")]),t._v(" 3. 侧边栏显示的是文件路径，而非文件名。")]),t._v(" "),a("p",[t._v("这是由于你的 "),a("code",[t._v("md")]),t._v(" 文件中缺乏标题导致的，标题的产生有两种方式:")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("添加 "),a("a",{attrs:{href:"https://v1.vuepress.vuejs.org/zh/guide/frontmatter.html#front-matter",target:"_blank",rel:"noopener noreferrer"}},[t._v("Front Matter"),a("OutboundLink")],1),t._v(" 的 title 属性 "),a("Badge",{attrs:{text:"推荐",type:"warning"}})],1),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 标题\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("markdown 语法中的标题")]),t._v(" "),a("div",{staticClass:"language-markdown extra-class"},[a("pre",{pre:!0,attrs:{class:"language-markdown"}},[a("code",[a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 一级标题")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("##")]),t._v(" 二级标题")]),t._v("\n")])])])])])])}),[],!1,null,null,null);e.default=s.exports}}]);