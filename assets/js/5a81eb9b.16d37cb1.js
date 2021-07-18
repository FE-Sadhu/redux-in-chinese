(self.webpackChunk=self.webpackChunk||[]).push([[3875],{3905:function(e,n,r){"use strict";r.d(n,{Zo:function(){return l},kt:function(){return m}});var t=r(7294);function p(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){p(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,t,p=function(e,n){if(null==e)return{};var r,t,p={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(p[r]=e[r]);return p}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var u=t.createContext({}),c=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},l=function(e){var n=c(e.components);return t.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,p=e.mdxType,o=e.originalType,u=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=c(r),m=p,f=d["".concat(u,".").concat(m)]||d[m]||s[m]||o;return r?t.createElement(f,i(i({ref:n},l),{},{components:r})):t.createElement(f,i({ref:n},l))}));function m(e,n){var r=arguments,p=n&&n.mdxType;if("string"==typeof e||p){var o=r.length,i=new Array(o);i[0]=d;var a={};for(var u in n)hasOwnProperty.call(n,u)&&(a[u]=n[u]);a.originalType=e,a.mdxType="string"==typeof e?e:p,i[1]=a;for(var c=2;c<o;c++)i[c]=r[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9491:function(e,n,r){"use strict";r.r(n),r.d(n,{frontMatter:function(){return i},metadata:function(){return a},toc:function(){return u},default:function(){return l}});var t=r(2122),p=r(9756),o=(r(7294),r(3905)),i={id:"isolating-redux-sub-apps",title:"\u5b50\u5e94\u7528\u9694\u79bb",hide_title:!1},a={unversionedId:"recipes/isolating-redux-sub-apps",id:"recipes/isolating-redux-sub-apps",isDocsHomePage:!1,title:"\u5b50\u5e94\u7528\u9694\u79bb",description:"\u8003\u8651\u4e00\u4e0b\u8fd9\u6837\u7684\u573a\u666f\uff1a\u6709\u4e00\u4e2a\u5927\u5e94\u7528\uff08\u5bf9\u5e94 ` \u7ec4\u4ef6\uff09\u5305\u542b\u4e86\u5f88\u591a\u5c0f\u7684\u201c\u5b50\u5e94\u7528\u201d\uff08\u5bf9\u5e94 SubApp` \u7ec4\u4ef6\uff09\uff1a",source:"@site/../docs/recipes/IsolatingSubapps.md",sourceDirName:"recipes",slug:"/recipes/isolating-redux-sub-apps",permalink:"/recipes/isolating-redux-sub-apps",version:"current",frontMatter:{id:"isolating-redux-sub-apps",title:"\u5b50\u5e94\u7528\u9694\u79bb",hide_title:!1},sidebar:"docs",previous:{title:"\u5b9e\u73b0\u64a4\u9500\u91cd\u505a",permalink:"/recipes/implementing-undo-history"},next:{title:"\u4ee3\u7801\u5206\u5272",permalink:"/recipes/code-splitting"}},u=[],c={toc:u};function l(e){var n=e.components,r=(0,p.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,t.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u8003\u8651\u4e00\u4e0b\u8fd9\u6837\u7684\u573a\u666f\uff1a\u6709\u4e00\u4e2a\u5927\u5e94\u7528\uff08\u5bf9\u5e94 ",(0,o.kt)("inlineCode",{parentName:"p"},"<BigApp>")," \u7ec4\u4ef6\uff09\u5305\u542b\u4e86\u5f88\u591a\u5c0f\u7684\u201c\u5b50\u5e94\u7528\u201d\uff08\u5bf9\u5e94 ",(0,o.kt)("inlineCode",{parentName:"p"},"SubApp")," \u7ec4\u4ef6\uff09\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import React, { Component } from 'react'\nimport SubApp from './subapp'\n\nclass BigApp extends Component {\n  render() {\n    return (\n      <div>\n        <SubApp />\n        <SubApp />\n        <SubApp />\n      </div>\n    )\n  }\n}\n")),(0,o.kt)("p",null,"\u8fd9\u4e9b ",(0,o.kt)("inlineCode",{parentName:"p"},"<SubApp>")," \u662f\u5b8c\u5168\u72ec\u7acb\u7684\u3002\u5b83\u4eec\u5e76\u4e0d\u4f1a\u5171\u4eab\u6570\u636e\u6216 action\uff0c\u4e5f\u4e92\u4e0d\u53ef\u89c1\u4e14\u4e0d\u9700\u8981\u901a\u4fe1\u3002"),(0,o.kt)("p",null,"\u8fd9\u65f6\u6700\u597d\u7684\u505a\u6cd5\u662f\u4e0d\u8981\u628a\u5b83\u6df7\u5165\u5230\u6807\u51c6 Redux \u7684 reducer \u7ec4\u4ef6\u4e2d\u3002\n\u5bf9\u4e8e\u4e00\u822c\u578b\u7684\u5e94\u7528\uff0c\u8fd8\u662f\u5efa\u8bae\u4f7f\u7528 reducer \u7ec4\u4ef6\u3002\u4f46\u5bf9\u4e8e \u201c\u5e94\u7528\u96c6\u5408\u201d\uff0c\u201c\u4eea\u8868\u677f\u201d\uff0c\u6216\u8005\u4f01\u4e1a\u7ea7\u8f6f\u4ef6\u8fd9\u4e9b\u628a\u591a\u4e2a\u672c\u6765\u72ec\u7acb\u7684\u5de5\u5177\u51d1\u5230\u4e00\u8d77\u6253\u5305\u7684\u573a\u666f\uff0c\u53ef\u4ee5\u8bd5\u4e0b\u5b50\u5e94\u7528\u7684\u65b9\u6848\u3002"),(0,o.kt)("p",null,"\u5b50\u5e94\u7528\u7684\u65b9\u6848\u8fd8\u9002\u7528\u4e8e\u6709\u591a\u4e2a\u4ea7\u54c1\u6216\u5782\u76f4\u4e1a\u52a1\u7684\u5927\u56e2\u961f\u3002\u5c0f\u56e2\u961f\u53ef\u4ee5\u72ec\u7acb\u53d1\u5e03\u5b50\u5e94\u7528\u6216\u8005\u4e92\u76f8\u72ec\u7acb\u4e8e\u81ea\u5df1\u7684\u201c\u5e94\u7528\u58f3\u201d\u4e2d\u3002"),(0,o.kt)("p",null,"\u4e0b\u9762\u662f connect \u8fc7\u7684\u5b50\u5e94\u7528\u7684\u6839\u7ec4\u4ef6\u3002\n\u50cf\u5176\u5b83\u7ec4\u4ef6\u4e00\u6837\uff0c\u5b83\u8fd8\u53ef\u4ee5\u6e32\u67d3\u66f4\u591a\u5b50\u7ec4\u4ef6\uff0cconnect \u6216\u8005\u6ca1\u6709 connect \u7684\u90fd\u53ef\u4ee5\u3002\u901a\u5e38\u53ea\u8981\u628a\u5b83\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"<Provider>")," \u6e32\u67d3\u5c31\u591f\u4e86\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"class App extends Component { ... }\nexport default connect(mapStateToProps)(App)\n")),(0,o.kt)("p",null,"\u4f46\u662f\uff0c\u5982\u679c\u4e0d\u60f3\u8ba9\u5916\u90e8\u77e5\u9053\u5b50\u5e94\u7528\u7684\u7ec4\u4ef6\u662f Redux \u5e94\u7528\u7684\u8bdd\uff0c\u53ef\u4ee5\u4e0d\u8c03\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"ReactDOM.render(<Provider><App /></Provider>)"),"\u3002"),(0,o.kt)("p",null,"\u6216\u8005\u53ef\u4ee5\u5728\u201c\u5927\u5e94\u7528\u201d\u4e2d\u540c\u65f6\u8fd0\u884c\u5b83\u7684\u591a\u4e2a\u5b9e\u4f8b\u5462\uff0c\u8fd8\u80fd\u4fdd\u8bc1\u6bcf\u4e2a\u5728\u9ed1\u76d2\u91cc\u8fd0\u884c\uff0c\u5916\u754c\u5bf9 Redux \u65e0\u611f\u77e5\u3002"),(0,o.kt)("p",null,"\u4e3a\u4e86\u4f7f\u7528 React API \u6765\u9690\u85cf Redux \u7684\u75d5\u8ff9\uff0c\u5728\u7ec4\u4ef6\u7684\u6784\u9020\u65b9\u6cd5\u91cc\u521d\u59cb\u5316 store \u5e76\u628a\u5b83\u5305\u5230\u4e00\u4e2a\u7279\u6b8a\u7684\u7ec4\u4ef6\u4e2d\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import React, { Component } from 'react'\nimport { Provider } from 'react-redux'\nimport reducer from './reducers'\nimport App from './App'\n\nclass SubApp extends Component {\n  constructor(props) {\n    super(props)\n    this.store = createStore(reducer)\n  }\n\n  render() {\n    return (\n      <Provider store={this.store}>\n        <App />\n      </Provider>\n    )\n  }\n}\n")),(0,o.kt)("p",null,"\u8fd9\u6837\u7684\u8bdd\u6bcf\u4e2a\u5b9e\u4f8b\u90fd\u662f\u72ec\u7acb\u7684\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u5e94\u7528\u95f4\u9700\u8981\u5171\u4eab\u6570\u636e\uff0c",(0,o.kt)("em",{parentName:"p"},"\u4e0d")," \u63a8\u8350\u4f7f\u7528\u8fd9\u4e2a\u6a21\u5f0f\u3002\n\u4f46\u662f\uff0c\u5982\u679c\u5927\u5e94\u7528\u5b8c\u5168\u4e0d\u9700\u8981\u8bbf\u95ee\u5b50\u5e94\u7528\u5185\u90e8\u6570\u636e\u7684\u8bdd\u975e\u5e38\u6709\u7528\uff0c\n\u540c\u65f6\u6211\u4eec\u8fd8\u60f3\u628a Redux \u4f5c\u4e3a\u4e00\u79cd\u5185\u90e8\u7ec6\u8282\u5b9e\u73b0\u65b9\u5f0f\u5bf9\u5916\u90e8\u9690\u85cf\u3002\n\u6bcf\u4e2a\u7ec4\u4ef6\u5b9e\u4f8b\u90fd\u6709\u5b83\u81ea\u5df1\u7684 store\uff0c\u6240\u4ee5\u5b83\u4eec\u5f7c\u6b64\u662f",(0,o.kt)("em",{parentName:"p"},"\u4e0d\u53ef\u89c1"),"\u7684\u3002"))}l.isMDXComponent=!0}}]);