(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"/0+H":function(t,e,n){"use strict";var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var r=o(n("q1tI")),i=n("lwAK");function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,o=t.hybrid,r=void 0!==o&&o,i=t.hasQuery;return n||r&&(void 0!==i&&i)}e.isInAmpMode=a,e.useAmp=function(){return a(r.default.useContext(i.AmpStateContext))}},"1OyB":function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return o}))},"5Yp1":function(t,e,n){"use strict";var o=n("q1tI"),r=n.n(o),i=n("XEPl"),a=n("Sa42"),s=r.a.createElement;e.a=function(t){return s("div",null,s(i.a,null),t.children,s(a.a,null))}},"8Kt/":function(t,e,n){"use strict";var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var r=o(n("q1tI")),i=o(n("Xuae")),a=n("lwAK"),s=n("FYa8"),l=n("/0+H");function c(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[r.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function u(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===r.default.Fragment?t.concat(r.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}e.defaultHead=c;var f=["name","httpEquiv","charSet","itemProp"];function p(t,e){return t.reduce((function(t,e){var n=r.default.Children.toArray(e.props.children);return t.concat(n)}),[]).reduce(u,[]).reverse().concat(c(e.inAmpMode)).filter(function(){var t=new Set,e=new Set,n=new Set,o={};return function(r){var i=!0;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){var a=r.key.slice(r.key.indexOf("$")+1);t.has(a)?i=!1:t.add(a)}switch(r.type){case"title":case"base":e.has(r.type)?i=!1:e.add(r.type);break;case"meta":for(var s=0,l=f.length;s<l;s++){var c=f[s];if(r.props.hasOwnProperty(c))if("charSet"===c)n.has(c)?i=!1:n.add(c);else{var u=r.props[c],p=o[c]||new Set;p.has(u)?i=!1:(p.add(u),o[c]=p)}}}return i}}()).reverse().map((function(t,e){var n=t.key||e;return r.default.cloneElement(t,{key:n})}))}var x=i.default();function h(t){var e=t.children;return r.default.createElement(a.AmpStateContext.Consumer,null,(function(t){return r.default.createElement(s.HeadManagerContext.Consumer,null,(function(n){return r.default.createElement(x,{reduceComponentsToState:p,handleStateChange:n,inAmpMode:l.isInAmpMode(t)},e)}))}))}h.rewind=x.rewind,e.default=h},Bnag:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},EbDI:function(t,e){t.exports=function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}},FYa8:function(t,e,n){"use strict";var o=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var r=o(n("q1tI"));e.HeadManagerContext=r.createContext(null)},Ijbi:function(t,e){t.exports=function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}},Ji7U:function(t,e,n){"use strict";function o(t,e){return(o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function r(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}n.d(e,"a",(function(){return r}))},RIqP:function(t,e,n){var o=n("Ijbi"),r=n("EbDI"),i=n("Bnag");t.exports=function(t){return o(t)||r(t)||i()}},Sa42:function(t,e,n){"use strict";var o=n("MX0m"),r=n.n(o),i=n("q1tI"),a=n.n(i),s=(a.a.createElement,a.a.createElement,a.a.createElement);e.a=function(){return s("div",{className:"jsx-1446935878"},s("div",{className:"jsx-1446935878 footer-box"},s("div",{className:"jsx-1446935878 quick-links"},"Quick Links"),s("div",{className:"jsx-1446935878 service-links"},"Services"),s("div",{className:"jsx-1446935878 contact"},"Contact"),s("div",{className:"jsx-1446935878 quick-links-inner"},"Home",s("br",{className:"jsx-1446935878"}),"About",s("br",{className:"jsx-1446935878"}),"Success",s("br",{className:"jsx-1446935878"}),"Stories",s("br",{className:"jsx-1446935878"}),"Insights",s("br",{className:"jsx-1446935878"}),"Career",s("br",{className:"jsx-1446935878"}),"Contact"),s("div",{className:"jsx-1446935878 service-inner"},"Open Source Implementation",s("br",{className:"jsx-1446935878"}),"Scala Programming",s("br",{className:"jsx-1446935878"}),"Restful API'S",s("br",{className:"jsx-1446935878"}),"Automated Devops Deployment",s("br",{className:"jsx-1446935878"}),"Big Data Analytics",s("br",{className:"jsx-1446935878"}),"Native Apps Building"),s("div",{className:"jsx-1446935878 service-inner2"},"Full/Mean Stack Development",s("br",{className:"jsx-1446935878"}),"Third Party Integrations",s("br",{className:"jsx-1446935878"}),"Crypto Currency Development",s("br",{className:"jsx-1446935878"}),"Java Programming",s("br",{className:"jsx-1446935878"}),"Us Staffing"),s("div",{className:"jsx-1446935878 contact-inner"},"+91(991)502-1146",s("br",{className:"jsx-1446935878"}),"hr@spineor.com"),s("div",{className:"jsx-1446935878 copyright"},"Copyright2020-Spineor.com"),s("div",{className:"jsx-1446935878 facebook"}),s("div",{className:"jsx-1446935878 linkedin"}),s("div",{className:"jsx-1446935878 youtube"})),s(r.a,{id:"1446935878"},[".footer-box.jsx-1446935878{position:absolute;width:1344px;height:434px;left:0px;top:5415px;background:#000000;}",".quick-links.jsx-1446935878{position:absolute;width:125px;height:28px;left:94px;top:88px;font-family:Roboto;font-style:normal;font-weight:500;font-size:24px;line-height:28px;color:#FFFFFF;}",".service-links.jsx-1446935878{position:absolute;width:125px;height:28px;left:406px;top:88px;font-family:Roboto;font-style:normal;font-weight:500;font-size:24px;line-height:28px;color:#FFFFFF;}",".contact.jsx-1446935878{position:absolute;width:125px;height:28px;left:1044px;top:88px;font-family:Roboto;font-style:normal;font-weight:500;font-size:24px;line-height:28px;color:#FFFFFF;}",".quick-links-inner.jsx-1446935878{position:absolute;width:129px;height:186px;left:94px;top:146px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:18px;line-height:170%;color:#EBEBEB;}",".service-inner.jsx-1446935878{position:absolute;width:258px;height:186px;left:406px;top:146px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:18px;line-height:170%;color:#EBEBEB;}",".service-inner2.jsx-1446935878{position:absolute;width:245px;height:155px;left:723px;top:146px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:18px;line-height:170%;color:#EBEBEB;}",".contact-inner.jsx-1446935878{position:absolute;width:154px;height:62px;left:1044px;top:147px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:18px;line-height:170%;color:#EBEBEB;}",".copyright.jsx-1446935878{position:absolute;width:149px;height:14px;left:615px;top:393px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:12px;line-height:14px;color:#DCDCDC;}"]))}},Uhid:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/About",function(){return n("AQdx")}])},XEPl:function(t,e,n){"use strict";var o=n("MX0m"),r=n.n(o),i=n("q1tI"),a=n.n(i),s=n("YFqc"),l=n.n(s),c=a.a.createElement;e.a=function(){return c("div",{className:"jsx-2554541966"},c("div",{className:"jsx-2554541966 nav-box"},c(l.a,{href:"/"},c("a",{className:"jsx-2554541966"},c("img",{src:"\\images\\spineor-logo.png",className:"jsx-2554541966 spineor-logo"}))),c(l.a,{href:"/About"},c("a",{className:"jsx-2554541966"},c("div",{className:"jsx-2554541966 about"},"ABOUT"))),c(l.a,{href:"/Service"},c("a",{className:"jsx-2554541966"},c("div",{className:"jsx-2554541966 service"},"SERVICES"))),c(l.a,{href:"/success"},c("a",{className:"jsx-2554541966"},c("div",{className:"jsx-2554541966 success"},"SUCCESS STORIES"))),c(l.a,{href:"/OurInfa"},c("a",{className:"jsx-2554541966"},c("div",{className:"jsx-2554541966 insights"},"INSIGHTS"))),c(l.a,{href:"/"},c("a",{className:"jsx-2554541966"},c("div",{className:"jsx-2554541966 career"},"CAREER"))),c(l.a,{href:"/"},c("a",{className:"jsx-2554541966"},c("div",{className:"jsx-2554541966 contact"},"CONTACT"))),c("div",{className:"jsx-2554541966"},c("button",{className:"jsx-2554541966 quote-button"},c("a",{className:"jsx-2554541966"},"GET A QUOTE")))),c(r.a,{id:"2554541966"},[".nav-box.jsx-2554541966{position:absolute;width:1344px;height:74px;left:0px;top:0px;position:fixed;background:#FFFFFF;}",".spineor-logo.jsx-2554541966{position:absolute;width:140px;height:41px;left:19px;top:16px;}",".about.jsx-2554541966{position:absolute;width:45px;height:16px;left:480px;top:30px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:14px;line-height:16px;color:#000000;}",".service.jsx-2554541966{position:absolute;width:45px;height:16px;left:572px;top:30px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:14px;line-height:16px;color:#000000;}",".success.jsx-2554541966{position:absolute;width:122px;height:16px;left:686px;top:30px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:14px;line-height:16px;color:#000000;}",".insights.jsx-2554541966{position:absolute;width:45px;height:16px;left:852px;top:30px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:14px;line-height:16px;color:#000000;}",".career.jsx-2554541966{position:absolute;width:45px;height:16px;left:961px;top:30px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:14px;line-height:16px;color:#000000;}",".contact.jsx-2554541966{position:absolute;width:45px;height:16px;left:1060px;top:30px;font-family:Roboto;font-style:normal;font-weight:normal;font-size:14px;line-height:16px;color:#000000;}",".quote-button.jsx-2554541966{position:absolute;width:122px;height:40px;left:1158px;top:18px;background:#184A88;font-family:Roboto;font-style:normal;font-weight:normal;font-size:14px;border-radius:2px;}","a.jsx-2554541966{color:#FFFFFF;}"]))}},Xuae:function(t,e,n){"use strict";var o=n("lwsE"),r=n("PJYZ"),i=n("W8MJ"),a=n("a1gu"),s=n("Nsbk"),l=n("7W2i"),c=n("RIqP");function u(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(e,"__esModule",{value:!0});var f=n("q1tI"),p=!1;e.default=function(){var t,e=new Set;function n(n){t=n.props.reduceComponentsToState(c(e),n.props),n.props.handleStateChange&&n.props.handleStateChange(t)}return function(c){l(h,c);var f,x=(f=h,function(){var t,e=s(f);if(u()){var n=s(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return a(this,t)});function h(t){var i;return o(this,h),i=x.call(this,t),p&&(e.add(r(i)),n(r(i))),i}return i(h,null,[{key:"rewind",value:function(){var n=t;return t=void 0,e.clear(),n}}]),i(h,[{key:"componentDidMount",value:function(){e.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){e.delete(this),n(this)}},{key:"render",value:function(){return null}}]),h}(f.Component)}},foSv:function(t,e,n){"use strict";function o(t){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return o}))},lwAK:function(t,e,n){"use strict";var o=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var r=o(n("q1tI"));e.AmpStateContext=r.createContext({})},md7G:function(t,e,n){"use strict";function o(t){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t){return(r="function"===typeof Symbol&&"symbol"===o(Symbol.iterator)?function(t){return o(t)}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":o(t)})(t)}function i(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}n.d(e,"a",(function(){return i}))},vuIU:function(t,e,n){"use strict";function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function r(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}n.d(e,"a",(function(){return r}))}},[["Uhid",0,1,2,3,6]]]);