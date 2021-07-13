(self.webpackChunk=self.webpackChunk||[]).push([[6486],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9526:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c},default:function(){return l}});var n=r(2122),o=r(9756),a=(r(7294),r(3905)),i={id:"migrating-to-redux",title:"Migrating to Redux",hide_title:!1},u={unversionedId:"recipes/migrating-to-redux",id:"recipes/migrating-to-redux",isDocsHomePage:!1,title:"Migrating to Redux",description:"Redux is not a monolithic framework, but a set of contracts and a few functions that make them work together. The majority of your \u201cRedux code\u201d will not even use Redux APIs, as most of the time you'll be writing functions.",source:"@site/../docs/recipes/MigratingToRedux.md",sourceDirName:"recipes",slug:"/recipes/migrating-to-redux",permalink:"/redux-in-chinese/recipes/migrating-to-redux",version:"current",frontMatter:{id:"migrating-to-redux",title:"Migrating to Redux",hide_title:!1},sidebar:"docs",previous:{title:"Usage with TypeScript",permalink:"/redux-in-chinese/recipes/usage-with-typescript"},next:{title:"Using Object Spread Operator",permalink:"/redux-in-chinese/recipes/using-object-spread-operator"}},c=[{value:"From Flux",id:"from-flux",children:[]},{value:"From Backbone",id:"from-backbone",children:[]}],s={toc:c};function l(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Redux is not a monolithic framework, but a set of contracts and a ",(0,a.kt)("a",{parentName:"p",href:"/redux-in-chinese/api/api-reference"},"few functions that make them work together"),". The majority of your \u201cRedux code\u201d will not even use Redux APIs, as most of the time you'll be writing functions."),(0,a.kt)("p",null,"This makes it easy to migrate both to and from Redux.\nWe don't want to lock you in!"),(0,a.kt)("h2",{id:"from-flux"},"From Flux"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/redux-in-chinese/understanding/thinking-in-redux/glossary#reducer"},"Reducers")," capture \u201cthe essence\u201d of Flux Stores, so it's possible to gradually migrate an existing Flux project towards Redux, whether you are using ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/acdlite/flummox"},"Flummox"),", ",(0,a.kt)("a",{parentName:"p",href:"http://github.com/goatslacker/alt"},"Alt"),", ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebook/flux"},"traditional Flux"),", or any other Flux library."),(0,a.kt)("p",null,"Your process will look like this:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Create a function called ",(0,a.kt)("inlineCode",{parentName:"p"},"createFluxStore(reducer)")," that creates a Flux store compatible with your existing app from a reducer function. Internally it might look similar to ",(0,a.kt)("a",{parentName:"p",href:"/redux-in-chinese/api/createstore"},(0,a.kt)("inlineCode",{parentName:"a"},"createStore"))," (",(0,a.kt)("a",{parentName:"p",href:"https://github.com/reduxjs/redux/blob/v4.0.5/src/createStore.js"},"source"),") implementation from Redux. Its dispatch handler should just call the ",(0,a.kt)("inlineCode",{parentName:"p"},"reducer")," for any action, store the next state, and emit change.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"This allows you to gradually rewrite every Flux Store in your app as a reducer, but still export ",(0,a.kt)("inlineCode",{parentName:"p"},"createFluxStore(reducer)")," so the rest of your app is not aware that this is happening and sees the Flux stores.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"As you rewrite your Stores, you will find that you need to avoid certain Flux anti-patterns such as fetching API inside the Store, or triggering actions inside the Stores. Your Flux code will be easier to follow once you port it to be based on reducers!")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"When you have ported all of your Flux Stores to be implemented on top of reducers, you can replace the Flux library with a single Redux store, and combine those reducers you already have into one using ",(0,a.kt)("a",{parentName:"p",href:"/redux-in-chinese/api/combinereducers"},(0,a.kt)("inlineCode",{parentName:"a"},"combineReducers(reducers)")),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Now all that's left to do is to port the UI to ",(0,a.kt)("a",{parentName:"p",href:"/redux-in-chinese/tutorials/fundamentals/part-5-ui-react"},"use React-Redux")," or equivalent.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Finally, you might want to begin using some Redux idioms like middleware to further simplify your asynchronous code."))),(0,a.kt)("h2",{id:"from-backbone"},"From Backbone"),(0,a.kt)("p",null,"Backbone's model layer is quite different from Redux, so we don't suggest mixing them. If possible, it is best that you rewrite your app's model layer from scratch instead of connecting Backbone to Redux. However, if a rewrite is not feasible, you may use ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/redbooth/backbone-redux"},"backbone-redux")," to migrate gradually, and keep the Redux store in sync with Backbone models and collections."),(0,a.kt)("p",null,"If your Backbone codebase is too big for a quick rewrite or you don't want to manage interactions between store and models, use ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/naugtur/backbone-redux-migrator"},"backbone-redux-migrator")," to help your two codebases coexist while keeping healthy separation. Once your rewrite finishes, Backbone code can be discarded and your Redux application can work on its own once you configure router."))}l.isMDXComponent=!0}}]);