(self.webpackChunk=self.webpackChunk||[]).push([[637],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,f=m["".concat(p,".").concat(d)]||m[d]||l[d]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},45:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),a={id:"compose",title:"compose",hide_title:!0},c={unversionedId:"api/compose",id:"api/compose",isDocsHomePage:!1,title:"compose",description:"Composes functions from right to left.",source:"@site/../docs/api/compose.md",sourceDirName:"api",slug:"/api/compose",permalink:"/redux-in-chinese/api/compose",version:"current",frontMatter:{id:"compose",title:"compose",hide_title:!0},sidebar:"docs",previous:{title:"bindActionCreators",permalink:"/redux-in-chinese/api/bindactioncreators"},next:{title:"Redux Toolkit: \u6982\u89c8",permalink:"/redux-in-chinese/redux-toolkit/overview"}},p=[],s={toc:p};function u(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"composefunctions"},(0,i.kt)("inlineCode",{parentName:"h1"},"compose(...functions)")),(0,i.kt)("p",null,"Composes functions from right to left."),(0,i.kt)("p",null,"This is a functional programming utility, and is included in Redux as a convenience.\nYou might want to use it to apply several ",(0,i.kt)("a",{parentName:"p",href:"/redux-in-chinese/understanding/thinking-in-redux/glossary#store-enhancer"},"store enhancers")," in a row."),(0,i.kt)("h4",{id:"arguments"},"Arguments"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"(",(0,i.kt)("em",{parentName:"li"},"arguments"),"): The functions to compose. Each function is expected to accept a single parameter. Its return value will be provided as an argument to the function standing to the left, and so on. The exception is the right-most argument which can accept multiple parameters, as it will provide the signature for the resulting composed function.")),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,"(",(0,i.kt)("em",{parentName:"p"},"Function"),"): The final function obtained by composing the given functions from right to left."),(0,i.kt)("h4",{id:"example"},"Example"),(0,i.kt)("p",null,"This example demonstrates how to use ",(0,i.kt)("inlineCode",{parentName:"p"},"compose")," to enhance a ",(0,i.kt)("a",{parentName:"p",href:"/redux-in-chinese/api/store"},"store")," with ",(0,i.kt)("a",{parentName:"p",href:"/redux-in-chinese/api/applymiddleware"},(0,i.kt)("inlineCode",{parentName:"a"},"applyMiddleware"))," and a few developer tools from the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/reduxjs/redux-devtools"},"redux-devtools")," package."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { createStore, applyMiddleware, compose } from 'redux'\nimport thunk from 'redux-thunk'\nimport DevTools from './containers/DevTools'\nimport reducer from '../reducers'\n\nconst store = createStore(\n  reducer,\n  compose(applyMiddleware(thunk), DevTools.instrument())\n)\n")),(0,i.kt)("h4",{id:"tips"},"Tips"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"All ",(0,i.kt)("inlineCode",{parentName:"li"},"compose")," does is let you write deeply nested function transformations without the rightward drift of the code. Don't give it too much credit!")))}u.isMDXComponent=!0}}]);