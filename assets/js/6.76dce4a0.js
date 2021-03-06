(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{351:function(s,t,a){"use strict";a.r(t);var r=a(43),e=Object(r.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"bootptrap4-in-laravel-の使い方"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bootptrap4-in-laravel-の使い方"}},[s._v("#")]),s._v(" Bootptrap4(in Laravel)の使い方")]),s._v(" "),a("h2",{attrs:{id:"導入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#導入"}},[s._v("#")]),s._v(" 導入")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Laravel-Project/resources\n├── js\n│   ├── app.js\n│   └── bootstrap.js\n├── lang\n│   └── en\n│       ├── auth.php\n│       ├── pagination.php\n│       ├── passwords.php\n│       └── validation.php\n├── sass\n│   └── app.scss\n└── views\n    └── welcome.blade.php #主な編集先ファイル\n")])])]),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" welcome"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("blade"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("php "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("DOCTYPE")]),s._v(" html"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("html lang"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[s._v("\"{{ str_replace('_', '-', app()->getLocale()) }}\"")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("head"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("meta charset"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[s._v('"utf-8"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("meta name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[s._v('"viewport"')]),s._v(" content"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[s._v('"width=device-width, initial-scale=1"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("title"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("Laravel "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("and")]),s._v(" Bootstrap4"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("title"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" Bootstrapの"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("CSS")]),s._v("を"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("CDN")]),s._v("経由で読み込む "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("link rel"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[s._v('"stylesheet"')]),s._v(" href"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[s._v('"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"')]),s._v("\n        integrity"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[s._v('"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"')]),s._v(" crossorigin"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[s._v('"anonymous"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" Bootstrapの"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("CSS")]),s._v("を"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("CDN")]),s._v("経由で読み込む "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("head"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("body"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("a id"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[s._v('"skippy"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[s._v('"sr-only sr-only-focusable"')]),s._v(" href"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[s._v('"#content"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("div "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[s._v('"container"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("span "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[s._v('"skiplink-text"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("Skip to main content"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("span"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("a"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("nav "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[s._v('"navbar navbar-expand-md navbar-dark bg-dark mb-4"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("a "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[s._v('"navbar-brand"')]),s._v(" href"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[s._v('"#"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("Top navbar"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("a"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("button "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[s._v('"navbar-toggler"')]),s._v(" type"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[s._v('"button"')]),s._v(" data"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("toggle"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[s._v('"collapse"')]),s._v(" data"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("target"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[s._v('"#navbarCollapse"')]),s._v("\n            aria"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("controls"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[s._v('"navbarCollapse"')]),s._v(" aria"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("expanded"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[s._v('"false"')]),s._v(" aria"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("label"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[s._v('"Toggle navigation"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("span "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[s._v('"navbar-toggler-icon"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("span"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("button"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("div "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[s._v('"collapse navbar-collapse"')]),s._v(" id"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[s._v('"navbarCollapse"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("ul "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[s._v('"navbar-nav mr-auto"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("li "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[s._v('"nav-item active"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n                    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("a "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[s._v('"nav-link"')]),s._v(" href"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[s._v('"#"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("Home "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("span "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[s._v('"sr-only"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("current"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("span"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("a"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("li"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("li "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[s._v('"nav-item"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n                    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("a "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[s._v('"nav-link"')]),s._v(" href"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[s._v('"#"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("Link"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("a"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("li"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("li "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[s._v('"nav-item"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n                    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("a "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[s._v('"nav-link disabled"')]),s._v(" href"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[s._v('"#"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("Disabled"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("a"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("li"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("ul"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("form "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[s._v('"form-inline mt-2 mt-md-0"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("input "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[s._v('"form-control mr-sm-2"')]),s._v(" type"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[s._v('"text"')]),s._v(" placeholder"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[s._v('"Search"')]),s._v(" aria"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("label"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[s._v('"Search"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("button "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[s._v('"btn btn-outline-success my-2 my-sm-0"')]),s._v(" type"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[s._v('"submit"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("Search"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("button"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("form"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("nav"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("main role"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[s._v('"main"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[s._v('"container"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("div "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[s._v('"jumbotron"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("h1"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("Laravel "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("and")]),s._v(" Bootstrap4"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("h1"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("main"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" Bootstrapに必要な"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("JS")]),s._v("ファイルを"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("CDN")]),s._v("経由で読み込む "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("script src"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[s._v('"https://code.jquery.com/jquery-3.3.1.slim.min.js"')]),s._v("\n        integrity"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[s._v('"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"')]),s._v(" crossorigin"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[s._v('"anonymous"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("script src"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[s._v('"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"')]),s._v("\n        integrity"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[s._v('"sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"')]),s._v(" crossorigin"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[s._v('"anonymous"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("script src"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[s._v('"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"')]),s._v("\n        integrity"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[s._v('"sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"')]),s._v(" crossorigin"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[s._v('"anonymous"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" Bootstrapに必要な"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("JS")]),s._v("ファイルを"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("CDN")]),s._v("経由で読み込む "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("body"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("html"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);