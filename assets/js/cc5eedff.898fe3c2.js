(self.webpackChunk=self.webpackChunk||[]).push([[3403],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,f=d["".concat(p,".").concat(m)]||d[m]||s[m]||a;return n?r.createElement(f,o(o({ref:t},l),{},{components:n})):r.createElement(f,o({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:i,o[1]=u;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6446:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p},default:function(){return l}});var r=n(2122),i=n(9756),a=(n(7294),n(3905)),o={id:"motivation",title:"\u52a8\u673a",description:"\u539f\u7406 > \u52a8\u673a: Redux \u5230\u5e95\u89e3\u51b3\u4ec0\u4e48\u95ee\u9898\uff1f",sidebar_label:"\u52a8\u673a",hide_title:!1},u={unversionedId:"understanding/thinking-in-redux/motivation",id:"understanding/thinking-in-redux/motivation",isDocsHomePage:!1,title:"\u52a8\u673a",description:"\u539f\u7406 > \u52a8\u673a: Redux \u5230\u5e95\u89e3\u51b3\u4ec0\u4e48\u95ee\u9898\uff1f",source:"@site/../docs/understanding/thinking-in-redux/Motivation.md",sourceDirName:"understanding/thinking-in-redux",slug:"/understanding/thinking-in-redux/motivation",permalink:"/redux-in-chinese/understanding/thinking-in-redux/motivation",version:"current",sidebar_label:"\u52a8\u673a",frontMatter:{id:"motivation",title:"\u52a8\u673a",description:"\u539f\u7406 > \u52a8\u673a: Redux \u5230\u5e95\u89e3\u51b3\u4ec0\u4e48\u95ee\u9898\uff1f",sidebar_label:"\u52a8\u673a",hide_title:!1},sidebar:"docs",previous:{title:"Initializing State",permalink:"/redux-in-chinese/recipes/structuring-reducers/initializing-state"},next:{title:"\u4e09\u5927\u539f\u5219",permalink:"/redux-in-chinese/understanding/thinking-in-redux/three-principles"}},p=[],c={toc:p};function l(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u968f\u7740 JavaScript \u5355\u9875\u5e94\u7528\u5f00\u53d1\u65e5\u8d8b\u590d\u6742\uff0c",(0,a.kt)("strong",{parentName:"p"},"JavaScript \u9700\u8981\u7ba1\u7406\u6bd4\u4efb\u4f55\u65f6\u5019\u90fd\u8981\u591a\u7684 state\uff08\u72b6\u6001\uff09"),"\u3002 \u8fd9\u4e9b state \u53ef\u80fd\u5305\u62ec\u670d\u52a1\u5668\u54cd\u5e94\u3001\u7f13\u5b58\u6570\u636e\u3001\u672c\u5730\u751f\u6210\u5c1a\u672a\u6301\u4e45\u5316\u5230\u670d\u52a1\u5668\u7684\u6570\u636e\uff0c\u4e5f\u5305\u62ec UI \u72b6\u6001\uff0c\u5982\u6fc0\u6d3b\u7684\u8def\u7531\uff0c\u88ab\u9009\u4e2d\u7684\u6807\u7b7e\uff0c\u662f\u5426\u663e\u793a\u52a0\u8f7d\u52a8\u6548\u6216\u8005\u5206\u9875\u5668\u7b49\u7b49\u3002"),(0,a.kt)("p",null,"\u7ba1\u7406\u4e0d\u65ad\u53d8\u5316\u7684 state \u975e\u5e38\u56f0\u96be\u3002\u5982\u679c\u4e00\u4e2a model \u7684\u53d8\u5316\u4f1a\u5f15\u8d77\u53e6\u4e00\u4e2a model \u53d8\u5316\uff0c\u90a3\u4e48\u5f53 view \u53d8\u5316\u65f6\uff0c\u5c31\u53ef\u80fd\u5f15\u8d77\u5bf9\u5e94 model \u4ee5\u53ca\u53e6\u4e00\u4e2a model \u7684\u53d8\u5316\uff0c\u4f9d\u6b21\u5730\uff0c\u53ef\u80fd\u4f1a\u5f15\u8d77\u53e6\u4e00\u4e2a view \u7684\u53d8\u5316\u3002\u76f4\u81f3\u4f60\u641e\u4e0d\u6e05\u695a\u5230\u5e95\u53d1\u751f\u4e86\u4ec0\u4e48\u3002",(0,a.kt)("strong",{parentName:"p"},"state \u5728\u4ec0\u4e48\u65f6\u5019\uff0c\u7531\u4e8e\u4ec0\u4e48\u539f\u56e0\uff0c\u5982\u4f55\u53d8\u5316\u5df2\u7136\u4e0d\u53d7\u63a7\u5236\u3002")," \u5f53\u7cfb\u7edf\u53d8\u5f97\u9519\u7efc\u590d\u6742\u7684\u65f6\u5019\uff0c\u60f3\u91cd\u73b0\u95ee\u9898\u6216\u8005\u6dfb\u52a0\u65b0\u529f\u80fd\u5c31\u4f1a\u53d8\u5f97\u4e3e\u6b65\u7ef4\u8270\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u8fd9\u8fd8\u4e0d\u591f\u7cdf\u7cd5\uff0c\u8003\u8651\u4e00\u4e9b",(0,a.kt)("strong",{parentName:"p"},"\u6765\u81ea\u524d\u7aef\u5f00\u53d1\u9886\u57df\u7684\u65b0\u9700\u6c42"),"\uff0c\u5982\u66f4\u65b0\u8c03\u4f18\u3001\u670d\u52a1\u7aef\u6e32\u67d3\u3001\u8def\u7531\u8df3\u8f6c\u524d\u8bf7\u6c42\u6570\u636e\u7b49\u7b49\u3002\u524d\u7aef\u5f00\u53d1\u8005\u6b63\u5728\u7ecf\u53d7\u524d\u6240\u672a\u6709\u7684\u590d\u6742\u6027\uff0c",(0,a.kt)("a",{parentName:"p",href:"http://www.quirksmode.org/blog/archives/2015/07/stop_pushing_th.html"},"\u96be\u9053\u5c31\u8fd9\u4e48\u653e\u5f03\u4e86\u5417\uff1f"),"\u5f53\u7136\u4e0d\u662f\u3002"),(0,a.kt)("p",null,"\u8fd9\u91cc\u7684\u590d\u6742\u6027\u5f88\u5927\u7a0b\u5ea6\u4e0a\u6765\u81ea\u4e8e\uff1a",(0,a.kt)("strong",{parentName:"p"},"\u6211\u4eec\u603b\u662f\u5c06\u4e24\u4e2a\u96be\u4ee5\u7406\u6e05\u7684\u6982\u5ff5\u6df7\u6dc6\u5728\u4e00\u8d77\uff1a\u53d8\u5316\u548c\u5f02\u6b65"),"\u3002 \u6211\u79f0\u5b83\u4eec\u4e3a",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Diet_Coke_and_Mentos_eruption"},"\u66fc\u59a5\u601d\u548c\u53ef\u4e50"),"\u3002\u5982\u679c\u628a\u4e8c\u8005\u5206\u5f00\uff0c\u80fd\u505a\u7684\u5f88\u597d\uff0c\u4f46\u6df7\u5230\u4e00\u8d77\uff0c\u5c31\u53d8\u5f97\u4e00\u56e2\u7cdf\u3002\u4e00\u4e9b\u5e93\u5982 ",(0,a.kt)("a",{parentName:"p",href:"http://facebook.github.io/react"},"React")," \u8bd5\u56fe\u5728\u89c6\u56fe\u5c42\u7981\u6b62\u5f02\u6b65\u548c\u76f4\u63a5\u64cd\u4f5c DOM \u6765\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u3002\u7f8e\u4e2d\u4e0d\u8db3\u7684\u662f\uff0cReact \u4f9d\u65e7\u628a\u5904\u7406 state \u4e2d\u6570\u636e\u7684\u95ee\u9898\u7559\u7ed9\u4e86\u4f60\u3002Redux \u5c31\u662f\u4e3a\u4e86\u5e2e\u4f60\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u3002"),(0,a.kt)("p",null,"\u8ddf\u968f ",(0,a.kt)("a",{parentName:"p",href:"http://facebook.github.io/flux"},"Flux"),"\u3001",(0,a.kt)("a",{parentName:"p",href:"http://martinfowler.com/bliki/CQRS.html"},"CQRS")," \u548c ",(0,a.kt)("a",{parentName:"p",href:"http://martinfowler.com/eaaDev/EventSourcing.html"},"Event Sourcing")," \u7684\u811a\u6b65\uff0c\u901a\u8fc7\u9650\u5236\u66f4\u65b0\u53d1\u751f\u7684\u65f6\u95f4\u548c\u65b9\u5f0f\uff0c",(0,a.kt)("strong",{parentName:"p"},"Redux \u8bd5\u56fe\u8ba9 state \u7684\u53d8\u5316\u53d8\u5f97\u53ef\u9884\u6d4b"),"\u3002\u8fd9\u4e9b\u9650\u5236\u6761\u4ef6\u53cd\u6620\u5728 Redux \u7684",(0,a.kt)("a",{parentName:"p",href:"/redux-in-chinese/understanding/thinking-in-redux/three-principles"},"\u4e09\u5927\u539f\u5219"),"\u4e2d\u3002"))}l.isMDXComponent=!0}}]);