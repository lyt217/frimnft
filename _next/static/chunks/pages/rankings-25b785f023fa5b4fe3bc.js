_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[71],{"1olU":function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var a=t("etRO"),r=t("mHfP"),i=t("1U+3"),l=t("DY1Z"),o=t("m6w3");function s(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,a=Object(l.a)(e);if(n){var r=Object(l.a)(this).constructor;t=Reflect.construct(a,arguments,r)}else t=a.apply(this,arguments);return Object(i.a)(this,t)}}var c=function(e){Object(r.a)(t,e);var n=s(t);function t(){return Object(a.a)(this,t),n.apply(this,arguments)}return t}(t("opVg").a);Object(o.a)(c,"query",void 0)},41:function(e,n,t){t("xhzY"),e.exports=t("whgR")},EHdi:function(e,n,t){"use strict";t.r(n);var a,r,i=t("oYCi"),l=t("JiVo"),o=t("etRO"),s=t("4jfz"),c=t("g2+O"),d=t("mHfP"),u=t("1U+3"),p=t("DY1Z"),g=t("m6w3"),h=t("mXGw"),f=t.n(h),b=t("TiKg"),m=t.n(b),y=t("UutA"),j=t("m5he"),k=t("uMSw"),v=t("/lKe"),O=t("XaKp"),x=t("Q5Gx"),w=t("/mO9"),S=t("YMbP"),N=t("GTDp"),_=t("C/iq"),A=t("IzZr"),C=t("FS/q"),V=t("j/Wi"),D=t("j2zt"),F=t("LsOE"),K=t("1olU"),T=t("LjoF"),R=t("HSVd"),E=t("heV+"),P=t("wwms"),L=t("K7R9");function B(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function I(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?B(Object(t),!0).forEach((function(n){Object(g.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):B(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function z(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,a=Object(p.a)(e);if(n){var r=Object(p.a)(this).constructor;t=Reflect.construct(a,arguments,r)}else t=a.apply(this,arguments);return Object(u.a)(this,t)}}var H=new Map([["seven_day_volume","SEVEN_DAY_VOLUME"],["seven_day_change","SEVEN_DAY_CHANGE"],["total_volume","TOTAL_VOLUME"],["average_price","AVERAGE_PRICE"],["num_owners","NUM_OWNERS"],["total_supply","TOTAL_SUPPLY"]]),M=new Map(Array.from(H,(function(e){return[e[1],e[0]]}))),U=[{name:"All"},{slug:"new",name:"New"}].concat(_.z),q=function(e){Object(d.a)(t,e);var n=z(t);function t(){var e;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return e=n.call.apply(n,[this].concat(r)),Object(g.a)(Object(c.a)(e),"state",{chain:e.props.query.chain,sortAscending:"true"===e.props.query.sortAscending,sortBy:H.get(e.props.query.sortBy||"seven_day_volume"),categorySlug:e.props.query.category}),Object(g.a)(Object(c.a)(e),"renderHeader",(function(n,t,a){var r=e.state.sortBy===n?e.state.sortAscending?"\u2191":"\u2193":"";return Object(i.jsx)("h6",{className:"rankings--table-header-item",onClick:function(){e.setSortBy(n)},children:Object(i.jsx)(V.d,{content:a,children:Object(i.jsxs)("a",{style:{cursor:"pointer"},children:[r,t]})})},n)})),Object(g.a)(Object(c.a)(e),"setSortBy",(function(n){var t=e.state,a=t.sortAscending,r={sortAscending:n===t.sortBy?!a:a,sortBy:n};e.setState(r),R.a.push(R.a.getPathWithMergedQuery(I(I({},r),{},{chain:e.state.chain,sortBy:M.get(n),category:e.state.categorySlug})))})),Object(g.a)(Object(c.a)(e),"setChain",(function(n){e.setState({chain:n}),R.a.push(R.a.getPathWithMergedQuery({chain:n&&_.B[n],sortBy:M.get(e.state.sortBy),category:e.state.categorySlug}))})),Object(g.a)(Object(c.a)(e),"setVertical",(function(n){e.setState({categorySlug:n}),R.a.push(R.a.getPathWithMergedQuery({chain:e.state.chain,sortBy:M.get(e.state.sortBy),category:n}))})),Object(g.a)(Object(c.a)(e),"renderCategory",(function(e,n){var t=e.createdDate,a=e.imageUrl,r=e.name,l=e.slug,o=e.stats,s=m()().diff(m.a.utc(t),"days")<_.hb,c=Object(T.i)(o.sevenDayVolume,2),d=Object(T.d)(o.sevenDayChange).times(100).toFixed(2).toLocaleString(),u=Object(T.d)(o.sevenDayChange).equals(0),p=Object(T.d)(o.sevenDayChange).greaterThan(0),g=Object(T.i)(o.totalVolume,2),h=Object(T.i)(o.averagePrice,2),f=Object(T.k)(o.numOwners),b=Object(T.k)(o.totalSupply);return Object(i.jsxs)(W,{className:"rankings--table-row relative",isNew:s,children:[Object(i.jsx)("div",{className:"rankings--table-row-badge",children:"NEW"}),Object(i.jsx)("div",{className:"rankings--table-cell rankings--table-row-rank",children:"".concat(n+1,".")}),Object(i.jsx)("span",{className:"rankings--table-cell",children:Object(i.jsxs)("div",{className:"rankings--category-wrapper",children:[Object(i.jsx)(k.a,{size:24,sizing:"cover",url:a||void 0,variant:"round"}),Object(i.jsx)("span",{className:"rankings--category-title",children:Object(i.jsx)(v.c,{className:"rankings--category-title-link",href:"/activity/".concat(l),children:Object(i.jsx)("strong",{children:r})})})]})}),Object(i.jsxs)("span",{className:"rankings--table-cell",children:["\u3194 ",c]}),Object(i.jsx)("span",{className:"rankings--table-cell ".concat(u?"":p?"green-text":"red-text"),children:u?"---":"".concat(d,"%")}),Object(i.jsxs)("span",{className:"rankings--table-cell",children:["\u3194 ",g]}),Object(i.jsxs)("span",{className:"rankings--table-cell",children:["\u3194 ",h]}),Object(i.jsx)("span",{className:"rankings--table-cell",children:f}),Object(i.jsx)("span",{className:"rankings--table-cell",children:"rarible"===l?"---":b})]},l)})),e}return Object(s.a)(t,[{key:"componentDidMount",value:function(){Object(D.h)("rankings")}},{key:"renderFilters",value:function(){var e=this;return Object(i.jsx)(Q,{"data-testid":"rankings--filter-bar",children:U.map((function(n,t){var a=n.slug,r=n.name,l=e.state.categorySlug===a;return Object(i.jsx)("div",{className:"rankings--filter-bar-wrapper",children:Object(i.jsxs)(G,{"aria-selected":l,selected:l,onClick:function(){e.setVertical(a)},children:["new"===a?Object(i.jsx)(j.b,{className:"rankings--tab-label-icon",value:"flash_on"}):null,r]},a||"")},"".concat(a,"-").concat(t))}))})}},{key:"render",value:function(){var e=this.props,n=e.data,t=e.page;return Object(i.jsx)("div",{className:"container rankings_container",children:Object(i.jsxs)(Y,{children:[Object(i.jsxs)($,{children:["Top NFTs",Object(i.jsx)("div",{className:"rankings--subheader",children:"Volume, average, price and other statistics for top NFTs, updated hourly."})]}),Object(i.jsxs)("div",{className:"rankings--scrollable",children:[Object(i.jsx)("div",{className:"rankings--gradient"}),this.renderFilters(),Object(i.jsx)(w.a,{flags:["staff"],children:Object(i.jsx)(N.a,{className:"rankings--table-header-chain-selector",getKey:function(e){return e||"all"},header:this.state.chain?_.A[this.state.chain]:"Select a chain",isClosedOnSelect:!0,items:[void 0].concat(Object(l.a)(Object(P.c)())),render:function(e){return Object(i.jsx)("div",{children:e?_.A[e]:"All chains"})},showAllOptions:!0,onItemClick:this.setChain})}),Object(i.jsx)("div",{className:"rankings--table",children:Object(i.jsxs)("div",{className:"rankings--table-body",children:[Object(i.jsxs)("div",{className:"rankings--table-header",children:[Object(i.jsx)("h6",{style:{fontSize:"14px",fontWeight:600,letterSpacing:"1px",margin:"12px 116px 12px 8px"},children:Object(i.jsx)(V.d,{content:"Each collection includes aggregated across multiple smart contracts and platforms.",children:Object(i.jsx)("span",{children:"Collection"})})}),this.renderHeader("SEVEN_DAY_VOLUME","7 day volume","Total ETH value of sales from the past week"),this.renderHeader("SEVEN_DAY_CHANGE","7 day change","% change in ETH value of sales from the previous week"),this.renderHeader("TOTAL_VOLUME","total volume","Total ETH value of sales for all time"),this.renderHeader("AVERAGE_PRICE","avg price","Average price an item was last sold for"),this.renderHeader("NUM_OWNERS","owners","Number of unique wallet addresses holding tokens"),this.renderHeader("TOTAL_SUPPLY","assets","Total number of items in this collection")]}),n?Object(i.jsxs)(i.Fragment,{children:[Object(F.d)(n.collections).filter((function(e){return e.name})).map(this.renderCategory),Object(i.jsx)(C.a,{intersectionOptions:{rootMargin:"512px"},page:t,size:100,children:Object(i.jsx)(O.a,{relative:!0})})]}):Object(i.jsx)("div",{className:"rankings--table-loader",children:Object(i.jsx)(O.a,{})})]})})]})]})})}}]),t}(f.a.Component),Y=y.d.div.withConfig({displayName:"rankings__DivContainer",componentId:"sc-186wz2p-0"})(["width:100%;.rankings--scrollable{margin-left:5%;position:relative;width:95%;.rankings--gradient{background:linear-gradient( to right,rgba(255,255,255,0) 0%,rgb(251,251,251) 66% );height:100%;pointer-events:none;position:absolute;right:0;top:0;width:60px;z-index:1;}.rankings--table{-webkit-overflow-scrolling:touch;display:flex;flex-direction:column;justify-content:space-between;margin-top:7px;overflow-x:scroll;width:100%;.rankings--table-header{border-bottom:1px solid rgba(0,0,0,0.1);min-height:40px;padding:0 5px 7px 0px;width:100%;display:flex;align-items:center;.rankings--table-header-item{display:inline-block;font-size:14px;font-weight:600;letter-spacing:1px;text-transform:uppercase;width:14%;}.rankings--table-header-chain-selector{display:inline-block;margin:0 26px 0 9px;width:14%;}}.rankings--table-body{min-height:600px;min-width:1200px;overflow-x:inherit;width:100%;.rankings--table-loader{margin-top:250px;}.rankings--table-row{display:flex;padding:20px 10px;width:100%;&:nth-child(even){background:rgba(0,0,0,0.01);}.rankings--table-cell{align-items:center;color:",";display:flex;font-size:15px;line-height:16px;padding-top:4px;width:20%;&:nth-child(1){color:rgba(0,0,0,0.7);font-weight:600;}&.rankings--table-row-rank{width:50px;}.rankings--category-wrapper{align-items:center;display:flex;.rankings--category-title{color:",";display:block;font-size:14px;margin-left:7px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:140px;.rankings--category-title-link{color:",";font-weight:normal;}}}}}}}}",""],L.l,L.l,L.l,Object(x.e)({mobile:Object(y.c)([".rankings--scrollable{width:100%;margin-left:0;}.rankings--gradient{display:none;}"])})),W=y.d.div.withConfig({displayName:"rankings__DivRow",componentId:"sc-186wz2p-1"})(["position:relative;.rankings--table-row-badge{display:none;color:white;font-weight:bold;font-size:10px;transform:rotate(-45deg);position:absolute;left:1px;top:8px;z-index:1;}",";"],(function(e){return e.isNew?Object(y.c)(['.rankings--table-row-badge{display:block;}&::before,&::after{content:"";position:absolute;top:0;left:0;border-color:transparent;border-style:solid;}&::after{border-width:1.35em;border-left-color:',";border-top-color:",";}"],L.a,L.a):""})),$=y.d.h1.withConfig({displayName:"rankings__H1Ranking",componentId:"sc-186wz2p-2"})(["font-size:30px;margin:2.1rem auto 1.68rem;text-align:center;width:90%;img{height:36px;margin-right:10px;margin-top:-5px;vertical-align:middle;}.rankings--subheader{font-size:18px;margin-top:0;}",""],Object(x.e)({mobile:Object(y.c)(["width:100%;.rankings--subheader{display:block;float:none;margin-top:10px;text-align:center;}"])})),Q=y.d.div.withConfig({displayName:"rankings__FilterBar",componentId:"sc-186wz2p-3"})(["border-bottom:1px solid ",";display:flex;margin-top:20px;margin-bottom:20px;overflow-x:scroll;.rankings--filter-bar-wrapper{display:flex;align-items:center;&:last-of-type{padding-right:25px;}}.rankings--tab-label-icon{font-size:inherit;opacity:0.4;display:inline-flex;}",""],(function(e){return e.theme.colors.border}),Object(x.e)({mobile:Object(y.c)([".rankings--filter-bar-wrapper{&:last-of-type{padding-right:0;}}"])})),G=y.d.div.withConfig({displayName:"rankings__FilterTab",componentId:"sc-186wz2p-4"})(["cursor:pointer;float:left;margin-right:20px;padding:10px;white-space:nowrap;display:flex;",";"],(function(e){return e.selected?Object(y.c)(["color:",";font-weight:500;@media (min-width:","){border-bottom:3px solid ",";}"],(function(e){return e.theme.colors.text.body}),L.e,L.o):Object(y.c)(["color:",";"],(function(e){return e.theme.colors.withOpacity.text.body.heavy}))})),X=void 0!==a?a:a=t("WVrF"),Z=Object(F.f)(R.a.withQuery(q),{fragments:{data:void 0!==r?r:r=t("SqUB")},query:X}),J=function(e){Object(d.a)(t,e);var n=z(t);function t(){return Object(o.a)(this,t),n.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){var e=this.props.data;return Object(i.jsxs)(A.a,{className:"Rankings",hideFooter:!0,children:[Object(i.jsx)(S.a,{title:"Top NFTs by Market Cap"}),Object(i.jsx)(Z,{data:e})]})}}]),t}(K.a);Object(g.a)(J,"query",X),Object(g.a)(J,"getInitialProps",E.a.nextParser({category:E.a.Optional(E.a.CategorySlug),chain:E.a.Optional(E.a.ChainIdentifier),sortAscending:E.a.Optional(E.a.boolean),sortBy:E.a.Optional(E.a.string)},(function(e){var n,t=e.category,a=e.chain,r=e.sortAscending,i=e.sortBy,l=null===(n=U.find((function(e){return e.slug===t&&"new"!==t})))||void 0===n?void 0:n.slug;return{categorySlug:t,variables:{chain:a?[a]:void 0,count:100,createdAfter:"new"===t?m()().subtract(_.hb,"days").format():void 0,sortAscending:r,sortBy:H.get(i||"seven_day_volume"),parents:l?[l]:void 0}}}))),n.default=J},"FS/q":function(e,n,t){"use strict";t.d(n,"a",(function(){return v}));var a=t("oYCi"),r=t("/dBk"),i=t.n(r),l=t("qd51"),o=t("mXGw");function s(){return(s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var c=new Map,d=new WeakMap,u=0;function p(e){return Object.keys(e).sort().filter((function(n){return void 0!==e[n]})).map((function(n){return n+"_"+("root"===n?(t=e.root)?(d.has(t)||(u+=1,d.set(t,u.toString())),d.get(t)):"0":e[n]);var t})).toString()}function g(e,n,t){if(void 0===t&&(t={}),!e)return function(){};var a=function(e){var n=p(e),t=c.get(n);if(!t){var a,r=new Map,i=new IntersectionObserver((function(n){n.forEach((function(n){var t,i=n.isIntersecting&&a.some((function(e){return n.intersectionRatio>=e}));e.trackVisibility&&"undefined"===typeof n.isVisible&&(n.isVisible=i),null==(t=r.get(n.target))||t.forEach((function(e){e(i,n)}))}))}),e);a=i.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),t={id:n,observer:i,elements:r},c.set(n,t)}return t}(t),r=a.id,i=a.observer,l=a.elements,o=l.get(e)||[];return l.has(e)||l.set(e,o),o.push(n),i.observe(e),function(){o.splice(o.indexOf(n),1),0===o.length&&(l.delete(e),i.unobserve(e)),0===l.size&&(i.disconnect(),c.delete(r))}}function h(e){return"function"!==typeof e.children}var f=function(e){var n,t;function a(n){var t;return(t=e.call(this,n)||this).node=null,t._unobserveCb=null,t.handleNode=function(e){t.node&&(t.unobserve(),e||t.props.triggerOnce||t.props.skip||t.setState({inView:!!t.props.initialInView,entry:void 0})),t.node=e||null,t.observeNode()},t.handleChange=function(e,n){e&&t.props.triggerOnce&&t.unobserve(),h(t.props)||t.setState({inView:e,entry:n}),t.props.onChange&&t.props.onChange(e,n)},t.state={inView:!!n.initialInView,entry:void 0},t}t=e,(n=a).prototype=Object.create(t.prototype),n.prototype.constructor=n,n.__proto__=t;var r=a.prototype;return r.componentDidUpdate=function(e){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold&&e.skip===this.props.skip&&e.trackVisibility===this.props.trackVisibility&&e.delay===this.props.delay||(this.unobserve(),this.observeNode())},r.componentWillUnmount=function(){this.unobserve(),this.node=null},r.observeNode=function(){if(this.node&&!this.props.skip){var e=this.props,n=e.threshold,t=e.root,a=e.rootMargin,r=e.trackVisibility,i=e.delay;this._unobserveCb=g(this.node,this.handleChange,{threshold:n,root:t,rootMargin:a,trackVisibility:r,delay:i})}},r.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},r.render=function(){if(!h(this.props)){var e=this.state,n=e.inView,t=e.entry;return this.props.children({inView:n,entry:t,ref:this.handleNode})}var a=this.props,r=a.children,i=a.as,l=a.tag,c=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(a,["children","as","tag","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView"]);return Object(o.createElement)(i||l||"div",s({ref:this.handleNode},c),r)},a}(o.Component);f.displayName="InView",f.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1};var b=t("7ovJ"),m=t("jwE9"),y=t("C/iq"),j=t("nB74");function k(){return(k=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("undefined"!==typeof window.IntersectionObserver){e.next=3;break}return e.next=3,t.e(85).then(t.t.bind(null,"62jW",7));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}y.jb||function(){k.apply(this,arguments)}();var v=function(e){var n=e.disableLoader,t=e.isFirstPageLoading,r=e.intersectionOptions,s=e.page,c=s.hasMore,d=s.loadMore,u=s.isLoading,p=e.children,h=e.onLoad,f=e.onLoadStart,y=e.size,k=function(e){var n=void 0===e?{}:e,t=n.threshold,a=n.delay,r=n.trackVisibility,i=n.rootMargin,l=n.root,s=n.triggerOnce,c=n.skip,d=n.initialInView,u=Object(o.useRef)(),p=Object(o.useState)({inView:!!d}),h=p[0],f=p[1],b=Object(o.useCallback)((function(e){void 0!==u.current&&(u.current(),u.current=void 0),c||e&&(u.current=g(e,(function(e,n){f({inView:e,entry:n}),n.isIntersecting&&s&&u.current&&(u.current(),u.current=void 0)}),{root:l,rootMargin:i,threshold:t,trackVisibility:r,delay:a}))}),[Array.isArray(t)?t.toString():t,l,i,s,c,r,a]);Object(o.useEffect)((function(){u.current||!h.entry||s||c||f({inView:!!d})}));var m=[b,h.inView,h.entry];return m.ref=m[0],m.inView=m[1],m.entry=m[2],m}(r),v=k.ref,O=k.inView,x=Object(o.useState)(!1),w=x[0],S=x[1],N=u(),_=c(),A=function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f&&f(),S(!0),e.next=4,d(y);case 4:S(!1),h&&h();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(o.useEffect)((function(){O&&_&&!w&&!N&&A()}),[O,_,w,N]);return Object(a.jsx)(m.a,{ref:v,children:w||t?p||(!n||t?Object(a.jsx)(b.a,{margin:"8px",children:Object(a.jsx)(j.a,{})}):null):null})}},GTDp:function(e,n,t){"use strict";var a=t("oYCi"),r=t("etRO"),i=t("4jfz"),l=t("g2+O"),o=t("mHfP"),s=t("1U+3"),c=t("DY1Z"),d=t("m6w3"),u=t("mXGw"),p=t("UutA"),g=t("u6YR"),h=t("K7R9"),f=t("m5he"),b=t("OsKK");function m(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,a=Object(c.a)(e);if(n){var r=Object(c.a)(this).constructor;t=Reflect.construct(a,arguments,r)}else t=a.apply(this,arguments);return Object(s.a)(this,t)}}var y=function(e){Object(o.a)(t,e);var n=m(t);function t(){var e;Object(r.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return e=n.call.apply(n,[this].concat(i)),Object(d.a)(Object(l.a)(e),"state",{isOpen:!1}),e}return Object(i.a)(t,[{key:"render",value:function(){var e=this,n=this.props,t=n.className,r=n.getKey,i=n.header,l=n.isClosedOnSelect,o=n.items,s=n.onItemClick,c=n.render,d=n.showAllOptions,u=this.state.isOpen,p=Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:"Dropdown--header","data-testid":"Dropdown--header",onClick:function(){return e.setState({isOpen:!u})},children:[Object(a.jsx)("div",{children:i}),Object(a.jsx)(f.b,{className:"Dropdown--icon",value:u?"expand_less":"expand_more"})]}),Object(a.jsx)("ul",{className:Object(g.c)("Dropdown",{items:!0,showAllOptions:d}),children:o.map((function(n){return Object(a.jsx)("li",{className:"Dropdown--item","data-testid":"Dropdown--item",onClick:function(){l?e.setState({isOpen:!1},(function(){return s(n)})):s(n)},children:c(n)},r(n))}))})]});return Object(a.jsx)(b.b,{children:function(n){var r=n.isFramed;return Object(a.jsx)(j,{className:Object(g.c)("Dropdown",{open:u,isFramed:r},t),tabIndex:-1,onBlur:function(n){n.currentTarget.contains(n.relatedTarget)||e.setState({isOpen:!1})},children:r?Object(a.jsx)("div",{className:"Dropdown--content-container",children:p}):Object(a.jsx)(b.e,{className:"Dropdown--content-container",children:p})})}})}}]),t}(u.Component);n.a=y;var j=p.d.div.withConfig({displayName:"Dropdownreact__DivContainer",componentId:"gd2cw9-0"})(["cursor:pointer;height:48px;outline:none;user-select:none;.Dropdown--content-container{position:relative;.Dropdown--header{background:",";color:",";align-items:center;display:flex;height:48px;justify-content:space-between;padding:0 12px;.Dropdown--icon{color:",";}}.Dropdown--items{background:",";color:",";max-height:0;margin:0;overflow-y:auto;.Dropdown--item{align-items:center;border-top:1px solid ",";display:flex;height:48px;padding:0 12px;&:first-child{border-top:none;}&:hover{background-color:",";}}}}&.Dropdown--open{.Dropdown--content-container{box-shadow:0px 1px 20px rgba(0,0,0,0.25);z-index:2;.Dropdown--header{border-bottom:1px solid ",";}.Dropdown--items{max-height:200px;&.Dropdown--showAllOptions{max-height:fit-content;}}}}&.Dropdown--isFramed{border-radius:inherit;.Dropdown--content-container{border-radius:inherit;}}"],(function(e){return e.theme.colors.input}),(function(e){return e.theme.colors.text.on.input}),h.j,(function(e){return e.theme.colors.input}),(function(e){return e.theme.colors.text.on.input}),(function(e){return e.theme.colors.border}),(function(e){return e.theme.colors.hover}),(function(e){return e.theme.colors.border}))},SqUB:function(e,n,t){"use strict";t.r(n);var a={argumentDefinitions:[{kind:"RootArgument",name:"chain"},{kind:"RootArgument",name:"count"},{kind:"RootArgument",name:"createdAfter"},{kind:"RootArgument",name:"cursor"},{kind:"RootArgument",name:"parents"},{kind:"RootArgument",name:"sortAscending"},{kind:"RootArgument",name:"sortBy"}],kind:"Fragment",metadata:{connection:[{count:"count",cursor:"cursor",direction:"forward",path:["collections"]}]},name:"rankings_collections",selections:[{alias:"collections",args:[{kind:"Variable",name:"chains",variableName:"chain"},{kind:"Variable",name:"createdAfter",variableName:"createdAfter"},{kind:"Literal",name:"includeHidden",value:!0},{kind:"Variable",name:"parents",variableName:"parents"},{kind:"Variable",name:"sortAscending",variableName:"sortAscending"},{kind:"Variable",name:"sortBy",variableName:"sortBy"}],concreteType:"CollectionTypeConnection",kind:"LinkedField",name:"__rankings_collections_connection",plural:!1,selections:[{alias:null,args:null,concreteType:"CollectionTypeEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"CollectionType",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"createdDate",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"imageUrl",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"slug",storageKey:null},{alias:null,args:null,concreteType:"CollectionStatsType",kind:"LinkedField",name:"stats",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"averagePrice",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"marketCap",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"numOwners",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"sevenDayChange",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"sevenDayVolume",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"totalSupply",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"totalVolume",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"PageInfo",kind:"LinkedField",name:"pageInfo",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"endCursor",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"hasNextPage",storageKey:null}],storageKey:null}],storageKey:null}],type:"Query",abstractKey:null,hash:"34aed0d039d9b7390b8826ca3285ad05"};n.default=a},WVrF:function(e,n,t){"use strict";t.r(n);var a=function(){var e={defaultValue:null,kind:"LocalArgument",name:"chain"},n={defaultValue:null,kind:"LocalArgument",name:"count"},t={defaultValue:null,kind:"LocalArgument",name:"createdAfter"},a={defaultValue:null,kind:"LocalArgument",name:"cursor"},r={defaultValue:null,kind:"LocalArgument",name:"parents"},i={defaultValue:null,kind:"LocalArgument",name:"sortAscending"},l={defaultValue:null,kind:"LocalArgument",name:"sortBy"},o=[{kind:"Variable",name:"after",variableName:"cursor"},{kind:"Variable",name:"chains",variableName:"chain"},{kind:"Variable",name:"createdAfter",variableName:"createdAfter"},{kind:"Variable",name:"first",variableName:"count"},{kind:"Literal",name:"includeHidden",value:!0},{kind:"Variable",name:"parents",variableName:"parents"},{kind:"Variable",name:"sortAscending",variableName:"sortAscending"},{kind:"Variable",name:"sortBy",variableName:"sortBy"}],s={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{fragment:{argumentDefinitions:[e,n,t,a,r,i,l],kind:"Fragment",metadata:null,name:"rankingsQuery",selections:[{args:null,kind:"FragmentSpread",name:"rankings_collections"}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[e,n,a,l,i,r,t],kind:"Operation",name:"rankingsQuery",selections:[{alias:null,args:o,concreteType:"CollectionTypeConnection",kind:"LinkedField",name:"collections",plural:!1,selections:[{alias:null,args:null,concreteType:"CollectionTypeEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"CollectionType",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"createdDate",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"imageUrl",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"slug",storageKey:null},{alias:null,args:null,concreteType:"CollectionStatsType",kind:"LinkedField",name:"stats",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"averagePrice",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"marketCap",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"numOwners",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"sevenDayChange",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"sevenDayVolume",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"totalSupply",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"totalVolume",storageKey:null},s],storageKey:null},s,{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"PageInfo",kind:"LinkedField",name:"pageInfo",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"endCursor",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"hasNextPage",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:o,filters:["chains","sortBy","sortAscending","parents","createdAfter","includeHidden"],handle:"connection",key:"rankings_collections",kind:"LinkedHandle",name:"collections"}]},params:{cacheID:"0468c103a899aa485aa173e9c64d4abe",id:null,metadata:{},name:"rankingsQuery",operationKind:"query",text:"query rankingsQuery(\n  $chain: [ChainScalar!]\n  $count: Int!\n  $cursor: String\n  $sortBy: CollectionSort\n  $sortAscending: Boolean\n  $parents: [CollectionSlug!]\n  $createdAfter: DateTime\n) {\n  ...rankings_collections\n}\n\nfragment rankings_collections on Query {\n  collections(after: $cursor, chains: $chain, first: $count, sortBy: $sortBy, sortAscending: $sortAscending, parents: $parents, createdAfter: $createdAfter, includeHidden: true) {\n    edges {\n      node {\n        createdDate\n        imageUrl\n        name\n        slug\n        stats {\n          averagePrice\n          marketCap\n          numOwners\n          sevenDayChange\n          sevenDayVolume\n          totalSupply\n          totalVolume\n          id\n        }\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"}}}();a.hash="de99be243309b5af1020dafa7e6719e6",n.default=a},XaKp:function(e,n,t){"use strict";t.d(n,"a",(function(){return b}));var a=t("oYCi"),r=t("etRO"),i=t("4jfz"),l=t("mHfP"),o=t("1U+3"),s=t("DY1Z"),c=(t("mXGw"),t("UutA")),d=t("vI8H"),u=t("nB74"),p=t("tft1"),g=t("wwms"),h=t("jwE9");function f(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,a=Object(s.a)(e);if(n){var r=Object(s.a)(this).constructor;t=Reflect.construct(a,arguments,r)}else t=a.apply(this,arguments);return Object(o.a)(this,t)}}var b=function(e){Object(l.a)(t,e);var n=f(t);function t(){return Object(r.a)(this,t),n.apply(this,arguments)}return Object(i.a)(t,[{key:"renderSpinner",value:function(){return Object(a.jsx)(h.a,{children:Object(a.jsx)(u.a,{size:"large"})})}},{key:"render",value:function(){var e=this.props,n=e.blockchain,t=e.relative,r=Object(g.e)().exchange;return t?Object(a.jsx)(m,{children:this.renderSpinner()}):n?Object(a.jsxs)("div",{children:[Object(a.jsx)(m,{children:this.renderSpinner()}),Object(a.jsx)("h6",{className:"center-align",children:this.tr("Waiting for blockchain confirmation...")}),r.pendingTransactionHash?Object(a.jsx)("p",{className:"center-align",children:Object(a.jsx)("a",{className:"btn",href:p.b.getTransactionUrl(r.pendingTransactionHash),rel:"noreferrer",target:"_blank",children:"View Transaction"})}):null]}):this.renderSpinner()}}]),t}(d.b),m=c.d.div.withConfig({displayName:"Loadingreact__DivLoadingBlock",componentId:"jtrk8r-0"})(["position:relative;width:100%;height:150px;"])},whgR:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/rankings",function(){return t("EHdi")}])}},[[41,1,2,7,5,6,3,4,9,8,0]]]);
//# sourceMappingURL=rankings-25b785f023fa5b4fe3bc.js.map