(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{DEU0:function(e,t,r){"use strict";r.r(t);var n=function(){var e={alias:null,args:null,kind:"ScalarField",name:"description",storageKey:null},t={alias:null,args:null,kind:"ScalarField",name:"imageUrl",storageKey:null},r={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"AssetMedia_asset",selections:[{alias:null,args:null,kind:"ScalarField",name:"animationUrl",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"backgroundColor",storageKey:null},{alias:null,args:null,concreteType:"CollectionType",kind:"LinkedField",name:"collection",plural:!1,selections:[e,{alias:null,args:null,concreteType:"DisplayDataType",kind:"LinkedField",name:"displayData",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"cardDisplayStyle",storageKey:null}],storageKey:null},t,{alias:null,args:null,kind:"ScalarField",name:"hidden",storageKey:null},r,{alias:null,args:null,kind:"ScalarField",name:"slug",storageKey:null}],storageKey:null},e,r,{alias:null,args:null,kind:"ScalarField",name:"tokenId",storageKey:null},t,{alias:null,args:null,kind:"ScalarField",name:"isDelisted",storageKey:null}],type:"AssetType",abstractKey:null}}();n.hash="070d3544a86f9bec8b9bd43290d798e1",t.default=n},K2c3:function(e,t,r){"use strict";var n=r("OQL8"),a=r("fwM5"),o=r("bkNG");function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){var r;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"===typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(e,t)}(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,l=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return i=e.done,e},e:function(e){l=!0,o=e},f:function(){try{i||null==r.return||r.return()}finally{if(l)throw o}}}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}t.__esModule=!0,t.default=void 0;var c,d=(c=r("mXGw"))&&c.__esModule?c:{default:c},f=r("TW2t"),h=r("P09+");var p=[],y=[],b=!1;function m(e){var t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then((function(e){return r.loading=!1,r.loaded=e,e})).catch((function(e){throw r.loading=!1,r.error=e,e})),r}function g(e){var t={loading:!1,loaded:{},error:null},r=[];try{Object.keys(e).forEach((function(n){var a=m(e[n]);a.loading?t.loading=!0:(t.loaded[n]=a.loaded,t.error=a.error),r.push(a.promise),a.promise.then((function(e){t.loaded[n]=e})).catch((function(e){t.error=e}))}))}catch(n){t.error=n}return t.promise=Promise.all(r).then((function(e){return t.loading=!1,e})).catch((function(e){throw t.loading=!1,e})),t}function v(e,t){return d.default.createElement(function(e){return e&&e.__esModule?e.default:e}(e),t)}function O(e,t){var r=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:v,webpack:null,modules:null},t),n=null;function a(){if(!n){var t=new j(e,r);n={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return n.promise()}if(!b&&"function"===typeof r.webpack){var o=r.webpack();y.push((function(e){var t,r=s(o);try{for(r.s();!(t=r.n()).done;){var n=t.value;if(-1!==e.indexOf(n))return a()}}catch(i){r.e(i)}finally{r.f()}}))}var i=function(e,t){a();var o=d.default.useContext(h.LoadableContext),i=(0,f.useSubscription)(n);return d.default.useImperativeHandle(t,(function(){return{retry:n.retry}}),[]),o&&Array.isArray(r.modules)&&r.modules.forEach((function(e){o(e)})),d.default.useMemo((function(){return i.loading||i.error?d.default.createElement(r.loading,{isLoading:i.loading,pastDelay:i.pastDelay,timedOut:i.timedOut,error:i.error,retry:n.retry}):i.loaded?r.render(i.loaded,e):null}),[e,i])};return i.preload=function(){return a()},i.displayName="LoadableComponent",d.default.forwardRef(i)}var j=function(){function e(t,r){a(this,e),this._loadFn=t,this._opts=r,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return o(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,r=this._opts;t.loading&&("number"===typeof r.delay&&(0===r.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),r.delay)),"number"===typeof r.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),r.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=l(l({},this._state),{},{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function w(e){return O(m,e)}function k(e,t){for(var r=[];e.length;){var n=e.pop();r.push(n(t))}return Promise.all(r).then((function(){if(e.length)return k(e,t)}))}w.Map=function(e){if("function"!==typeof e.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return O(g,e)},w.preloadAll=function(){return new Promise((function(e,t){k(p).then(e,t)}))},w.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var r=function(){return b=!0,t()};k(y,e).then(r,r)}))},window.__NEXT_PRELOADREADY=w.preloadReady;var _=w;t.default=_},Ld9l:function(e,t,r){e.exports=r("mReo")},N8ZH:function(e,t,r){"use strict";var n,a=r("oYCi"),o=r("etRO"),i=r("4jfz"),l=r("g2+O"),s=r("mHfP"),u=r("1U+3"),c=r("DY1Z"),d=r("m6w3"),f=r("mXGw"),h=r.n(f),p=r("Ld9l"),y=r.n(p),b=r("UutA"),m=r("vI8H"),g=r("C/iq"),v=r("LsOE"),O=r("u6YR"),j=r("B6yL"),w=r("D4YM"),k=r("tQfM"),_=r("jwE9"),P=r("m5he"),x=r("uMSw");function A(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function D(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?A(Object(r),!0).forEach((function(t){Object(d.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):A(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function M(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(c.a)(e);if(t){var a=Object(c.a)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return Object(u.a)(this,r)}}var S=y()((function(){return Promise.all([r.e(32),r.e(37)]).then(r.bind(null,"PHJS"))}),{ssr:!1,loadableGenerated:{webpack:function(){return["PHJS"]},modules:["../components/assets/AssetMedia.react.tsx -> ../viz/ModelScene.react"]}}),C=function(e){return e.match(/^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/)},E=function(e){Object(s.a)(r,e);var t=M(r);function r(){var e;Object(o.a)(this,r);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return e=t.call.apply(t,[this].concat(i)),Object(d.a)(Object(l.a)(e),"state",{}),Object(d.a)(Object(l.a)(e),"audioRef",h.a.createRef()),Object(d.a)(Object(l.a)(e),"renderImage",(function(t,r){var n=e.props,o=n.size,i=n.mediaStyles,l=n.alt,s="COVER"===r?"cover":"CONTAIN"===r?"contain":void 0;return Object(a.jsx)(x.a,{alt:l,className:Object(O.c)("AssetMedia",{img:!0,invert:"dark"===e.context.theme&&t===g.Tb}),fade:!0,imgStyle:D({width:"cover"===s?"100%":"auto",height:"cover"===s?"100%":"auto",maxWidth:"100%",maxHeight:"100%"},i),isSpinnerShown:!0,size:o,sizing:s,url:t})})),e}return Object(i.a)(r,[{key:"getBackgroundColor",value:function(){var e=this.props,t=e.asset.backgroundColor,r=e.backgroundColor,n=this.context.theme;return t?"#".concat(t):null!==r&&void 0!==r?r:"light"===n?k.a.white:k.a.charcoal}},{key:"renderPlayButton",value:function(){var e=this,t=this.props,r=t.autoPlay,n=t.useCustomPlayButton,o=this.state.isPlaying;return!r&&n?Object(a.jsx)(P.b,{className:"AssetMedia--play-icon",size:24,value:o?"pause":"play_arrow",onClick:function(t){var r,n;t.preventDefault(),o?null===(r=e.audioRef.current)||void 0===r||r.pause():null===(n=e.audioRef.current)||void 0===n||n.play(),e.setState({isPlaying:!o})}}):null}},{key:"renderAnimationOrVideo",value:function(e){var t,r=e.animationUrl,n=e.imagePreviewUrl,o=e.cardDisplayStyle,i=this.props,l=i.isMuted,s=i.autoPlay,u=i.showControls,c=i.showModel,d=i.mediaStyles,f=this.state.isPlaying,h=s||f||!n,p=this.getBackgroundColor();return Object(a.jsxs)("div",{className:"AssetMedia--animation",children:[Object(j.g)(r)?c?Object(a.jsx)(S,{backgroundColor:p,url:r}):n?this.renderImage(n,o):null:Object(j.f)(r)?Object(a.jsx)(_.a,{className:"AssetMedia--playback-wrapper",style:{backgroundColor:p},onContextMenu:function(e){return e.preventDefault()},children:h?Object(a.jsx)("video",{autoPlay:h,className:"AssetMedia--video",controls:u,controlsList:"nodownload",loop:!0,muted:l||!n,playsInline:!0,poster:n,src:r,style:d}):n?this.renderImage(n,o):null}):Object(a.jsx)(a.Fragment,{children:h?Object(a.jsx)("iframe",{allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,frameBorder:"0",height:"100%",sandbox:"".concat(C(r)?"allow-same-origin ":"","allow-scripts"),src:(t=r,t.replace("youtu.be/","www.youtube.com/watch?v=").replace(/\/watch\?v=([A-Za-z0-9_-]+\??)/,"/embed/$1?autoplay=1&controls=0&loop=1&playlist=$1&")),style:{minHeight:"inherit"},width:"100%"}):n?this.renderImage(n,o):null}),Object(j.g)(r)||!n||!Object(j.f)(r)&&!C(r)?null:this.renderPlayButton()]})}},{key:"renderAudio",value:function(e,t,r){var n=this.props,o=n.isMuted,i=n.autoPlay,l=n.showControls,s=this.getBackgroundColor();return Object(a.jsx)("div",{className:"AssetMedia--animation",children:Object(a.jsxs)("div",{className:"AssetMedia--playback-wrapper",style:{backgroundColor:s},onContextMenu:function(e){return e.preventDefault()},children:[this.renderImage(t,r),Object(a.jsx)("audio",{autoPlay:i,className:"AssetMedia--audio",controls:l,controlsList:"nodownload",loop:!0,muted:o,preload:"none",ref:this.audioRef,src:e}),this.renderPlayButton()]})})}},{key:"render",value:function(){var e,t,r=this.props,n=r.asset,o=r.className,i=r.title,l=n.animationUrl,s=n.collection,u=n.imageUrl,c=null!==(e=s.displayData.cardDisplayStyle)&&void 0!==e?e:"CONTAIN",d=this.getBackgroundColor(),f=l&&!Object(j.b)(l)?l:u&&Object(j.f)(u)?u:void 0,h=l&&Object(j.c)(l)?l:void 0,p=l&&Object(j.b)(l)?l:u||(null===s||void 0===s?void 0:s.imageUrl)||g.Tb;if(n.isDelisted){var y=this.props.size;return Object(a.jsx)(x.a,{className:Object(O.c)("AssetMedia",{img:!0,invert:"dark"===this.context.theme}),fade:!0,imgStyle:{width:"100%",height:"100%",maxWidth:"100%",maxHeight:"100%"},size:y,sizing:"cover",url:g.O})}return t=h&&p?this.renderAudio(h,p,c):Object(j.f)(p)?this.renderAnimationOrVideo({animationUrl:p,cardDisplayStyle:c}):f?this.renderAnimationOrVideo({animationUrl:f,imagePreviewUrl:p,cardDisplayStyle:c}):this.renderImage(p,c),Object(a.jsx)(R,{className:o,title:i,children:Object(a.jsx)(_.a,{borderRadius:"inherit",height:"100%",minHeight:"inherit",style:{padding:"PADDED"===c?"8px":void 0,backgroundColor:d},width:"100%",children:t})})}}]),r}(m.b);t.a=Object(v.b)(E,{fragments:{asset:void 0!==n?n:n=r("DEU0")}});var R=b.d.div.withConfig({displayName:"AssetMediareact__DivContainer",componentId:"sc-1vbfbdi-0"})(["min-height:inherit;border-radius:inherit;height:100%;width:100%;.AssetMedia--animation{position:relative;min-height:inherit;height:100%;width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;border-radius:inherit;.AssetMedia--playback-wrapper{height:100%;width:100%;border-radius:inherit;.AssetMedia--audio{width:100%;outline:none;}.AssetMedia--video{height:100%;width:100%;}> img{","}}}.AssetMedia--play-icon,.AssetMedia--play-shadow{position:absolute;}.AssetMedia--play-icon{align-items:center;border-radius:50%;border:1px solid ",";display:flex;height:32px;justify-content:center;bottom:8px;right:8px;width:32px;"," &:hover{box-shadow:",";}}.AssetMedia--play-shadow{width:26px;height:26px;right:11px;bottom:11px;border-radius:50%;box-shadow:",";pointer-events:none;}.AssetMedia--img{"," > img{","}}.AssetMedia--invert{filter:grayscale(1) invert(1);}"],Object(w.b)({variants:{light:{borderRadius:"inherit"}}}),(function(e){return e.theme.colors.border}),(function(e){return Object(w.b)({variants:{light:{color:e.theme.colors.gray,backgroundColor:e.theme.colors.white,"&:hover":{color:e.theme.colors.oil}},dark:{color:e.theme.colors.fog,backgroundColor:e.theme.colors.oil,"&:hover":{color:e.theme.colors.white,backgroundColor:e.theme.colors.ash}}}})}),(function(e){return e.theme.shadow}),(function(e){return e.theme.shadow}),Object(w.b)({variants:{light:{borderRadius:"inherit"}}}),Object(w.b)({variants:{light:{borderRadius:"inherit"}}}))},"P09+":function(e,t,r){"use strict";var n;t.__esModule=!0,t.LoadableContext=void 0;var a=((n=r("mXGw"))&&n.__esModule?n:{default:n}).default.createContext(null);t.LoadableContext=a},mReo:function(e,t,r){"use strict";var n=r("OQL8");function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.__esModule=!0,t.noSSR=s,t.default=function(e,t){var r=i.default,n={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};e instanceof Promise?n.loader=function(){return e}:"function"===typeof e?n.loader=e:"object"===typeof e&&(n=o(o({},n),e));if(n=o(o({},n),t),"object"===typeof e&&!(e instanceof Promise)&&(e.render&&(n.render=function(t,r){return e.render(r,t)}),e.modules)){r=i.default.Map;var a={},l=e.modules();Object.keys(l).forEach((function(e){var t=l[e];"function"!==typeof t.then?a[e]=t:a[e]=function(){return t.then((function(e){return e.default||e}))}})),n.loader=a}n.loadableGenerated&&delete(n=o(o({},n),n.loadableGenerated)).loadableGenerated;if("boolean"===typeof n.ssr){if(!n.ssr)return delete n.ssr,s(r,n);delete n.ssr}return r(n)};l(r("mXGw"));var i=l(r("K2c3"));function l(e){return e&&e.__esModule?e:{default:e}}function s(e,t){return delete t.webpack,delete t.modules,e(t)}}}]);
//# sourceMappingURL=6708652baaa10fa5e01f78da632c79fcd06f0c73.270e632c94fcd6cf02a8.js.map