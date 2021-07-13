(self.webpackChunk=self.webpackChunk||[]).push([[3875],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return l},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return t?r.createElement(h,i(i({ref:n},l),{},{components:t})):r.createElement(h,i({ref:n},l))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9491:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return s},default:function(){return l}});var r=t(2122),o=t(9756),a=(t(7294),t(3905)),i={id:"isolating-redux-sub-apps",title:"Isolating Redux Sub-Apps",hide_title:!1},p={unversionedId:"recipes/isolating-redux-sub-apps",id:"recipes/isolating-redux-sub-apps",isDocsHomePage:!1,title:"Isolating Redux Sub-Apps",description:"Consider the case of a \u201cbig\u201d app (contained in a `` component)",source:"@site/../docs/recipes/IsolatingSubapps.md",sourceDirName:"recipes",slug:"/recipes/isolating-redux-sub-apps",permalink:"/redux-in-chinese/recipes/isolating-redux-sub-apps",version:"current",frontMatter:{id:"isolating-redux-sub-apps",title:"Isolating Redux Sub-Apps",hide_title:!1},sidebar:"docs",previous:{title:"Implementing Undo History",permalink:"/redux-in-chinese/recipes/implementing-undo-history"},next:{title:"Code Splitting",permalink:"/redux-in-chinese/recipes/code-splitting"}},s=[],c={toc:s};function l(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Consider the case of a \u201cbig\u201d app (contained in a ",(0,a.kt)("inlineCode",{parentName:"p"},"<BigApp>")," component)\nthat embeds smaller \u201csub-apps\u201d (contained in ",(0,a.kt)("inlineCode",{parentName:"p"},"<SubApp>")," components):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import React, { Component } from 'react'\nimport SubApp from './subapp'\n\nclass BigApp extends Component {\n  render() {\n    return (\n      <div>\n        <SubApp />\n        <SubApp />\n        <SubApp />\n      </div>\n    )\n  }\n}\n")),(0,a.kt)("p",null,"These ",(0,a.kt)("inlineCode",{parentName:"p"},"<SubApp>"),"s will be completely independent. They won't share data or\nactions, and won't see or communicate with each other."),(0,a.kt)("p",null,"It's best not to mix this approach with standard Redux reducer composition.\nFor typical web apps, stick with reducer composition. For\n\u201cproduct hubs\u201d, \u201cdashboards\u201d, or enterprise software that groups disparate\ntools into a unified package, give the sub-app approach a try."),(0,a.kt)("p",null,"The sub-app approach is also useful for large teams that are divided by product\nor feature verticals. These teams can ship sub-apps independently or in combination\nwith an enclosing \u201capp shell\u201d."),(0,a.kt)("p",null,"Below is a sub-app's root connected component.\nAs usual, it can render more components, connected or not, as children.\nUsually we'd render it in ",(0,a.kt)("inlineCode",{parentName:"p"},"<Provider>")," and be done with it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"class App extends Component { ... }\nexport default connect(mapStateToProps)(App)\n")),(0,a.kt)("p",null,"However, we don't have to call ",(0,a.kt)("inlineCode",{parentName:"p"},"ReactDOM.render(<Provider><App /></Provider>)"),"\nif we're interested in hiding the fact that the sub-app component is a Redux app."),(0,a.kt)("p",null,"Maybe we want to be able to run multiple instances of it in the same \u201cbigger\u201d app\nand keep it as a complete black box, with Redux being an implementation detail."),(0,a.kt)("p",null,"To hide Redux behind a React API, we can wrap it in a special component that\ninitializes the store in the constructor:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import React, { Component } from 'react'\nimport { Provider } from 'react-redux'\nimport { createStore } from 'redux'\nimport reducer from './reducers'\nimport App from './App'\n\nclass SubApp extends Component {\n  constructor(props) {\n    super(props)\n    this.store = createStore(reducer)\n  }\n\n  render() {\n    return (\n      <Provider store={this.store}>\n        <App />\n      </Provider>\n    )\n  }\n}\n")),(0,a.kt)("p",null,"This way every instance will be independent."),(0,a.kt)("p",null,"This pattern is ",(0,a.kt)("em",{parentName:"p"},"not")," recommended for parts of the same app that share data.\nHowever, it can be useful when the bigger app has zero access to the smaller apps' internals,\nand we'd like to keep the fact that they are implemented with Redux as an implementation detail.\nEach component instance will have its own store, so they won't \u201cknow\u201d about each other."))}l.isMDXComponent=!0}}]);