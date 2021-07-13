(self.webpackChunk=self.webpackChunk||[]).push([[7255],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return s}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),p=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),k=p(r),s=n,m=k["".concat(u,".").concat(s)]||k[s]||d[s]||o;return r?a.createElement(m,i(i({ref:t},c),{},{components:r})):a.createElement(m,i({ref:t},c))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=k;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},4911:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u},default:function(){return c}});var a=r(2122),n=r(9756),o=(r(7294),r(3905)),i={id:"overview",title:"Redux Toolkit: \u6982\u89c8",description:"Redux Toolkit is the recommended way to write Redux logic",hide_title:!1},l={unversionedId:"redux-toolkit/overview",id:"redux-toolkit/overview",isDocsHomePage:!1,title:"Redux Toolkit: \u6982\u89c8",description:"Redux Toolkit is the recommended way to write Redux logic",source:"@site/../docs/redux-toolkit/overview.md",sourceDirName:"redux-toolkit",slug:"/redux-toolkit/overview",permalink:"/redux-in-chinese/redux-toolkit/overview",version:"current",frontMatter:{id:"overview",title:"Redux Toolkit: \u6982\u89c8",description:"Redux Toolkit is the recommended way to write Redux logic",hide_title:!1},sidebar:"docs",previous:{title:"compose",permalink:"/redux-in-chinese/api/compose"}},u=[{value:"Redux Toolkit \u662f\u4ec0\u4e48\uff1f",id:"redux-toolkit-\u662f\u4ec0\u4e48\uff1f",children:[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",children:[]}]},{value:"\u76ee\u7684",id:"\u76ee\u7684",children:[]},{value:"\u4e3a\u4ec0\u4e48\u9700\u8981\u4f7f\u7528 Redux Toolkit",id:"\u4e3a\u4ec0\u4e48\u9700\u8981\u4f7f\u7528-redux-toolkit",children:[]},{value:"\u5305\u542b\u4e86\u4ec0\u4e48",id:"\u5305\u542b\u4e86\u4ec0\u4e48",children:[]},{value:"\u6587\u6863",id:"\u6587\u6863",children:[{value:"\u6587\u6863\u94fe\u63a5",id:"\u6587\u6863\u94fe\u63a5",children:[]}]}],p={toc:u};function c(e){var t=e.components,r=(0,n.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"redux-toolkit-\u662f\u4ec0\u4e48\uff1f"},"Redux Toolkit \u662f\u4ec0\u4e48\uff1f"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://redux-toolkit.js.org"},"Redux Toolkit"))," \u662f\u6211\u4eec\u5b98\u65b9\u7684\uff0c\u6709\u89c2\u70b9\u7684\uff0c\u5f00\u7bb1\u5373\u7528\u7684\u9ad8\u6548 Redux \u5f00\u53d1\u5de5\u5177\u96c6\u3002\u5b83\u65e8\u5728\u6210\u4e3a\u6807\u51c6\u7684 Redux \u903b\u8f91\u5f00\u53d1\u65b9\u5f0f\uff0c\u6211\u4eec\u5f3a\u70c8\u5efa\u8bae\u60a8\u4f7f\u7528\u5b83\u3002"),(0,o.kt)("p",null,"\u5b83\u5305\u62ec\u51e0\u4e2a\u5b9e\u7528\u7a0b\u5e8f\u529f\u80fd\uff0c\u8fd9\u4e9b\u529f\u80fd\u53ef\u4ee5\u7b80\u5316\u6700\u5e38\u89c1\u573a\u666f\u4e0b\u7684 Redux \u5f00\u53d1\uff0c\u5305\u62ec\u914d\u7f6e store\u3001\u5b9a\u4e49 reducer\uff0c\u4e0d\u53ef\u53d8\u7684\u66f4\u65b0\u903b\u8f91\u3001\u751a\u81f3\u53ef\u4ee5\u7acb\u5373\u521b\u5efa\u6574\u4e2a\u72b6\u6001\u7684 \u201c\u5207\u7247 slice\u201d\uff0c\u800c\u65e0\u9700\u624b\u52a8\u7f16\u5199\u4efb\u4f55 action creator \u6216\u8005 action type\u3002\u5b83\u8fd8\u5305\u62ec\u4f7f\u7528\u6700\u5e7f\u6cdb\u7684 Redux \u63d2\u4ef6\uff0c\u4f8b\u5982 Redux Thunk \u7528\u4e8e\u5f02\u6b65\u903b\u8f91\uff0c\u800c Reselect \u7528\u4e8e\u7f16\u5199\u9009\u62e9\u5668 selector \u51fd\u6570\uff0c\u56e0\u6b64\u4f60\u53ef\u4ee5\u7acb\u5373\u4f7f\u7528\u5b83\u4eec\u3002"),(0,o.kt)("h3",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,o.kt)("p",null,"Redux Toolkit \u63d0\u4f9b NPM \u8f6f\u4ef6\u5305\uff0c\u5b89\u88c5\u65b9\u5f0f\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# NPM\nnpm install @reduxjs/toolkit\n\n# Yarn\nyarn add @reduxjs/toolkit\n")),(0,o.kt)("h2",{id:"\u76ee\u7684"},"\u76ee\u7684"),(0,o.kt)("p",null,"Redux \u6838\u5fc3\u5e93\u662f\u6545\u610f\u8bbe\u8ba1\u4e3a\u65e0\u89c2\u70b9\uff08unopinionated\uff09\u3002 \u5b83\u4f7f\u4f60\u53ef\u4ee5\u51b3\u5b9a\u5982\u4f55\u5904\u7406\u6240\u6709\u5185\u5bb9\uff0c\u4f8b\u5982\u914d\u7f6e store\uff0c\u5305\u542b\u4f60\u7684\u72b6\u6001\u4ee5\u53ca\u5982\u4f55\u6784\u5efa reducer\u3002"),(0,o.kt)("p",null,"\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u8fd9\u662f\u5f88\u597d\u7684\uff0c\u56e0\u4e3a\u63d0\u4f9b\u4e86\u7075\u6d3b\u6027\uff0c\u4f46\u5e76\u4e0d\u603b\u662f\u9700\u8981\u7075\u6d3b\u6027\u3002\u6709\u65f6\uff0c\u6211\u4eec\u53ea\u662f\u60f3\u4ee5\u6700\u7b80\u5355\u7684\u65b9\u5f0f\u4e0a\u624b\uff0c\u5e76\u4e14\u5f00\u7bb1\u5373\u7528\u4e86\u4e00\u4e9b\u826f\u597d\u7684\u9ed8\u8ba4\u884c\u4e3a\u3002\u6216\u8005\uff0c\u4e5f\u8bb8\u60a8\u6b63\u5728\u7f16\u5199\u4e00\u4e2a\u66f4\u5927\u7684\u5e94\u7528\u7a0b\u5e8f\u5e76\u53d1\u73b0\u81ea\u5df1\u6b63\u5728\u7f16\u5199\u4e00\u4e9b\u7c7b\u4f3c\u7684\u4ee3\u7801\uff0c\u800c\u4f60\u60f3\u51cf\u5c11\u5fc5\u987b\u624b\u5de5\u7f16\u5199\u7684\u4ee3\u7801\u91cf\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Redux Toolkit")," \u5b83\u6700\u521d\u662f\u4e3a\u4e86\u5e2e\u52a9\u89e3\u51b3\u6709\u5173 Redux \u7684\u4e09\u4e2a\u5e38\u89c1\u95ee\u9898\u800c\u521b\u5efa\u7684\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'"\u914d\u7f6e Redux store \u8fc7\u4e8e\u590d\u6742"'),(0,o.kt)("li",{parentName:"ul"},'"\u6211\u5fc5\u987b\u6dfb\u52a0\u5f88\u591a\u8f6f\u4ef6\u5305\u624d\u80fd\u5f00\u59cb\u4f7f\u7528 Redux \u505a\u4e8b\u60c5"'),(0,o.kt)("li",{parentName:"ul"},'"Redux \u6709\u592a\u591a\u6837\u677f\u4ee3\u7801"')),(0,o.kt)("p",null,"\u6211\u4eec\u4e0d\u53ef\u80fd\u89e3\u51b3\u6240\u6709\u573a\u666f\u7684\u95ee\u9898\uff0c\u4f46\u662f\u501f\u9274\u4e8e ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/create-react-app"},(0,o.kt)("inlineCode",{parentName:"a"},"create-react-app"))," \u548c ",(0,o.kt)("a",{parentName:"p",href:"https://dev-blog.apollodata.com/zero-config-graphql-state-management-27b1f1b3c2c3"},(0,o.kt)("inlineCode",{parentName:"a"},"apollo-boost"))," \u7684\u601d\u8def\uff0c\u6211\u4eec\u53ef\u4ee5\u63d0\u4f9b\u4e00\u7ec4\u5b98\u65b9\u63a8\u8350\u7684\u5de5\u5177\uff0c\u8fd9\u4e9b\u5de5\u5177\u53ef\u4ee5\u5904\u7406\u6700\u5e38\u89c1\u7684\u7528\u4f8b\u5e76\u51cf\u5c11\u505a\u51fa\u989d\u5916\u51b3\u7b56\u7684\u9700\u8981\u3002"),(0,o.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u9700\u8981\u4f7f\u7528-redux-toolkit"},"\u4e3a\u4ec0\u4e48\u9700\u8981\u4f7f\u7528 Redux Toolkit"),(0,o.kt)("p",null,"\u901a\u8fc7\u9075\u5faa\u6211\u4eec\u63a8\u8350\u7684\u6700\u4f73\u5b9e\u8df5\uff0c\u63d0\u4f9b\u826f\u597d\u7684\u9ed8\u8ba4\u884c\u4e3a\uff0c\u6355\u83b7\u9519\u8bef\u5e76\u5141\u8bb8\u60a8\u7f16\u5199\u66f4\u7b80\u5355\u7684\u4ee3\u7801\uff0c",(0,o.kt)("strong",{parentName:"p"},"React Toolkit")," \u4f7f\u5f97\u7f16\u5199\u826f\u597d\u7684 Redux \u5e94\u7528\u7a0b\u5e8f\u548c\u52a0\u5feb\u5f00\u53d1\u901f\u5ea6\u53d8\u5f97\u66f4\u52a0\u5bb9\u6613\u3002 Redux\u5de5\u5177\u5305\u5bf9",(0,o.kt)("strong",{parentName:"p"},"\u6240\u6709 Redux \u7528\u6237\u90fd\u6709\u5e2e\u52a9"),"\u65e0\u8bba\u6280\u80fd\u6c34\u5e73\u6216\u8005\u7ecf\u9a8c\u5982\u4f55\u3002\u53ef\u4ee5\u5728\u65b0\u9879\u76ee\u5f00\u59cb\u65f6\u6dfb\u52a0\u5b83\uff0c\u4e5f\u53ef\u4ee5\u5728\u73b0\u6709\u9879\u76ee\u4e2d\u5c06\u5176\u7528\u4f5c\u589e\u91cf\u8fc1\u79fb\u7684\u4e00\u90e8\u5206\u3002"),(0,o.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c",(0,o.kt)("strong",{parentName:"p"},"\u60a8\u4e0d\u662f",(0,o.kt)("em",{parentName:"strong"},"\u5fc5\u987b"),"\u4f7f\u7528 Redux Toolkit \u624d\u80fd\u4f7f\u7528Redux"),"\u3002\u6709\u8bb8\u591a\u73b0\u6709\u7684\u5e94\u7528\u4f7f\u7528\u5176\u4ed6 Redux \u5c01\u88c5\u5e93\uff0c\u6216\u8005",(0,o.kt)("strong",{parentName:"p"},"\u7eaf\u624b\u5199")," Redux \u903b\u8f91\u3002",(0,o.kt)("strong",{parentName:"p"},"\u5982\u679c\u4f60\u5e0c\u671b\u4f7f\u7528\u5176\u4ed6\u65b9\u6cd5\uff0c\u8bf7\u7ee7\u7eed\uff01")),(0,o.kt)("p",null,"\u603b\u4f53\u800c\u8a00\uff0c\u65e0\u8bba\u60a8\u662f\u5f00\u53d1\u7b2c\u4e00\u4e2a\u9879\u76ee\u7684\u5168\u65b0 Redux \u7528\u6237\uff0c\u8fd8\u662f\u60f3\u7b80\u5316\u73b0\u6709\u5e94\u7528\u7a0b\u5e8f\u7684\u7ecf\u9a8c\u4e30\u5bcc\u7684\u7528\u6237\uff0c",(0,o.kt)("strong",{parentName:"p"},"\u4f7f\u7528 Redux Toolkit \u90fd\u5c06\u4f7f\u4f60\u7684\u4ee3\u7801\u66f4\u597d\uff0c\u66f4\u53ef\u7ef4\u62a4"),"\u3002"),(0,o.kt)("h2",{id:"\u5305\u542b\u4e86\u4ec0\u4e48"},"\u5305\u542b\u4e86\u4ec0\u4e48"),(0,o.kt)("p",null,"Redux Toolkit \u5305\u542b\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://redux-toolkit.js.org/api/configureStore"},(0,o.kt)("inlineCode",{parentName:"a"},"configureStore()")," \u51fd\u6570")," \u63d0\u4f9b\u7b80\u5316\u7684\u914d\u7f6e\u9009\u9879\u3002\u5b83\u53ef\u4ee5\u81ea\u52a8\u7ec4\u5408\u5207\u7247 slice \u7684 reducer\uff0c\u6dfb\u52a0\u4f60\u63d0\u4f9b\u7684\u4efb\u4f55 Redux \u4e2d\u95f4\u4ef6\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u5305\u542b ",(0,o.kt)("inlineCode",{parentName:"li"},"redux-thunk"),"\uff0c\u5e76\u542f\u7528 Redux DevTools \u6269\u5c55\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://redux-toolkit.js.org/api/createReducer"},(0,o.kt)("inlineCode",{parentName:"a"},"createReducer()")," \u5de5\u5177")," \u8ba9\u4f60\u81ea\u52a8\u505a action type \u5230 reducer \u7684\u5bf9\u5e94\uff0c\u800c\u4e0d\u662f\u7f16\u5199 switch...case \u8bed\u53e5\u3002\u53e6\u5916\uff0c\u5b83\u4f1a\u81ea\u52a8\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/mweststrate/immer"},(0,o.kt)("inlineCode",{parentName:"a"},"immer")," \u5e93"),"\u6765\u8ba9\u4f60\u4f7f\u7528\u666e\u901a\u7684 mutable \u4ee3\u7801\u7f16\u5199\u66f4\u7b80\u5355\u7684 immutable \u66f4\u65b0\uff0c\u4f8b\u5982 ",(0,o.kt)("inlineCode",{parentName:"li"},"state.todos[3].completed = true"),"\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://redux-toolkit.js.org/api/createAction"},(0,o.kt)("inlineCode",{parentName:"a"},"createAction()")," \u5de5\u5177")," \u8fd4\u56de\u7ed9\u5b9a action type \u5b57\u7b26\u4e32\u7684 action creator \u51fd\u6570\u3002\u8be5\u51fd\u6570\u672c\u8eab\u5df2\u5b9a\u4e49\u4e86 ",(0,o.kt)("inlineCode",{parentName:"li"},"toString()"),"\uff0c\u56e0\u6b64\u53ef\u4ee5\u4ee3\u66ff\u5e38\u91cf\u7c7b\u578b\u4f7f\u7528\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://redux-toolkit.js.org/api/createSlice"},(0,o.kt)("inlineCode",{parentName:"a"},"createSlice()")," \u51fd\u6570")," \u63a5\u53d7\u4e00\u7ec4\u5316 reducer \u51fd\u6570\uff0c\u4e00\u4e2a slice \u5207\u7247\u540d\u548c\u521d\u59cb\u72b6\u6001 initial state\uff0c\u5e76\u81ea\u52a8\u751f\u6210\u5177\u6709\u76f8\u5e94 action creator \u548c action type \u7684 slice reducer\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://redux-toolkit.js.org/api/createSelector"},(0,o.kt)("inlineCode",{parentName:"a"},"createSelector")," \u5de5\u5177")," \u6765\u6e90\u4e8e ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/reduxjs/reselect"},"Reselect")," \u5e93\uff0c\u91cd\u65b0 export \u51fa\u6765\u4ee5\u65b9\u4fbf\u4f7f\u7528\u3002")),(0,o.kt)("h2",{id:"\u6587\u6863"},"\u6587\u6863"),(0,o.kt)("p",null,"Redux Toolkit \u5b8c\u6574\u7684\u6587\u6863\u5728\u8fd9\u91cc ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://redux-toolkit.js.org"},"https://redux-toolkit.js.org")),"."),(0,o.kt)("h3",{id:"\u6587\u6863\u94fe\u63a5"},"\u6587\u6863\u94fe\u63a5"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u7b80\u4ecb"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://redux-toolkit.js.org/introduction/quick-start"},"\u5feb\u901f\u5f00\u59cb")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u6559\u7a0b"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://redux-toolkit.js.org/tutorials/basic-tutorial"},"\u57fa\u7840\u6559\u7a0b")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://redux-toolkit.js.org/tutorials/intermediate-tutorial"},"\u4e2d\u7ea7\u6559\u7a0b")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://redux-toolkit.js.org/tutorials/advanced-tutorial"},"\u9ad8\u7ea7\u6559\u7a0b")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u4f7f\u7528 Redux Toolkit"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://redux-toolkit.js.org/usage/usage-guide"},"\u5165\u95e8")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"API \u6587\u6863"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://redux-toolkit.js.org/api/configureStore"},(0,o.kt)("inlineCode",{parentName:"a"},"configureStore"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://redux-toolkit.js.org/api/getDefaultMiddleware"},(0,o.kt)("inlineCode",{parentName:"a"},"getDefaultMiddleware"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://redux-toolkit.js.org/api/createReducer"},(0,o.kt)("inlineCode",{parentName:"a"},"createReducer"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://redux-toolkit.js.org/api/createAction"},(0,o.kt)("inlineCode",{parentName:"a"},"createAction"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://redux-toolkit.js.org/api/createSlice"},(0,o.kt)("inlineCode",{parentName:"a"},"createSlice"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://redux-toolkit.js.org/api/createSelector"},(0,o.kt)("inlineCode",{parentName:"a"},"createSelector"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://redux-toolkit.js.org/api/other-exports"},"\u5176\u4ed6 Export"))))))}c.isMDXComponent=!0}}]);