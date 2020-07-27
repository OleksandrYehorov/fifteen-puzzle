(this["webpackJsonpfifteen-puzzle"]=this["webpackJsonpfifteen-puzzle"]||[]).push([[0],{14:function(e,t,n){e.exports=n(22)},19:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var o=n(0),i=n.n(o),r=n(8),a=n.n(r),c=(n(19),n(1)),l=n(4),s=c.a.li.withConfig({displayName:"FifteenPuzzleCell__Cell",componentId:"sc-16tplzs-0"})(["padding:0.2rem;box-sizing:border-box;width:25%;height:25%;list-style-type:none;position:absolute;top:","%;left:","%;transition:top 0.5s ease-out,left 0.5s ease-out;-webkit-tap-highlight-color:transparent;"],(function(e){return 25*e.coordinates.row}),(function(e){return 25*e.coordinates.col})),u=c.a.div.withConfig({displayName:"FifteenPuzzleCell__CellContent",componentId:"sc-16tplzs-1"})(["box-sizing:border-box;height:100%;background-color:rgb(42,45,51);display:flex;justify-content:center;align-items:center;border-radius:0.3rem;"]),f=c.a.span.withConfig({displayName:"FifteenPuzzleCell__CellValue",componentId:"sc-16tplzs-2"})(["font-size:2rem;"]),d=function(e){var t=e.cell,n=e.onClick;return 16===t.value?null:i.a.createElement(s,{coordinates:t.coordinates,onClick:function(){n&&n(t.value)},style:16===t.value?{opacity:.5}:void 0},i.a.createElement(u,null,i.a.createElement(f,null,t.value)))},h=n(2),p=n(12),m=n(13),g=function(){function e(){Object(p.a)(this,e),this.cellsData=this.getInitialCellsData()}return Object(m.a)(e,[{key:"getInitialCellsData",value:function(){return Array.from(Array(16)).map((function(e,t){return{value:t+1,coordinates:{row:Math.floor(t/4),col:t%4}}}))}},{key:"getMoveSide",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.getEmptyCell();return t?e.coordinates.col===t.coordinates.col?e.coordinates.row<t.coordinates.row?"top":"bottom":e.coordinates.row===t.coordinates.row?e.coordinates.col<t.coordinates.col?"left":"right":null:null}},{key:"getEmptyCell",value:function(){return this.cellsData.find((function(e){return 16===e.value}))}},{key:"makeMove",value:function(e){var t=this.cellsData.find((function(t){return t.value===e}));if(!t)return!1;var n=this.getEmptyCell();if(!n)return!1;var o=this.getMoveSide(t,n);if(!o)return!1;var i=Object(h.a)({},t.coordinates);if("top"===o)this.cellsData.filter((function(e){return e.coordinates.col===n.coordinates.col&&e.coordinates.row<n.coordinates.row&&e.coordinates.row>=t.coordinates.row})).forEach((function(e){e.coordinates.row++}));else if("bottom"===o){this.cellsData.filter((function(e){return e.coordinates.col===n.coordinates.col&&e.coordinates.row>n.coordinates.row&&e.coordinates.row<=t.coordinates.row})).forEach((function(e){e.coordinates.row--}))}else if("left"===o){this.cellsData.filter((function(e){return e.coordinates.row===n.coordinates.row&&e.coordinates.col<n.coordinates.col&&e.coordinates.col>=t.coordinates.col})).forEach((function(e){e.coordinates.col++}))}else{if("right"!==o)return!1;this.cellsData.filter((function(e){return e.coordinates.row===n.coordinates.row&&e.coordinates.col>n.coordinates.col&&e.coordinates.col<=t.coordinates.col})).forEach((function(e){e.coordinates.col--}))}return n.coordinates=i,!0}},{key:"checkWin",value:function(){var t=this.getEmptyCell();if(!t)return!1;var n=e.getCellPosition(t);return this.cellsData.filter((function(e){return 16!==e.value})).every((function(t,o){var i=e.getCellPosition(t);return i>n&&i--,i===o}))}},{key:"shuffle",value:function(){for(var e=w(30,60),t=0;t<e;)this.makeMove(w(1,15))&&t++}},{key:"cells",get:function(){return this.cellsData.map((function(e){return Object(h.a)(Object(h.a)({},e),{},{coordinates:Object(h.a)({},e.coordinates)})}))}}],[{key:"getCellPosition",value:function(e){return 4*e.coordinates.row+e.coordinates.col}}]),e}();function w(e,t){var n=e+Math.random()*(t+1-e);return Math.floor(n)}var v=c.a.div.withConfig({displayName:"FifteenPuzzle__Game",componentId:"sc-1quqtaa-0"})(["width:100%;height:100%;margin:0 0.6rem;display:flex;flex-direction:column;align-items:center;"]),b=c.a.div.withConfig({displayName:"FifteenPuzzle__BoardWrapper",componentId:"sc-1quqtaa-1"})(["box-sizing:border-box;position:relative;width:100%;max-width:26rem;&:after{content:'';display:block;padding-bottom:100%;}"]),y=c.a.ul.withConfig({displayName:"FifteenPuzzle__Board",componentId:"sc-1quqtaa-2"})(["position:absolute;top:0;box-sizing:border-box;margin:0;padding:0;display:flex;flex-wrap:wrap;width:100%;height:100%;background-color:rgb(82,85,91);border-radius:0.5rem;user-select:none;transition:0.2s filter ease-in-out;filter:blur(","rem);"],(function(e){return e.isWin?.2:0})),k=c.a.button.withConfig({displayName:"FifteenPuzzle__Button",componentId:"sc-1quqtaa-3"})(["margin-top:1rem;border:none;background:none;padding:0.5rem 1rem;font-size:2rem;color:white;text-transform:uppercase;outline:none;"]),z=c.a.h2.withConfig({displayName:"FifteenPuzzle__BoardLabel",componentId:"sc-1quqtaa-4"})(["position:absolute;margin:0;top:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;font-size:2.4rem;"]),C=function(){var e=Object(o.useRef)(new g).current,t=Object(o.useState)(e.cells),n=Object(l.a)(t,2),r=n[0],a=n[1],c=Object(o.useState)(!1),s=Object(l.a)(c,2),u=s[0],f=s[1],h=Object(o.useState)(!1),p=Object(l.a)(h,2),m=p[0],w=p[1],C=function(t){e.makeMove(t)&&(a(e.cells),f(e.checkWin()))};Object(o.useEffect)((function(){a(e.cells)}),[e]),Object(o.useEffect)((function(){u&&w(!1)}),[u]);var E="Play";return u&&(E="Play again"),m&&(E="Restart"),i.a.createElement(v,null,i.a.createElement("header",{style:{flexGrow:1}}),i.a.createElement(b,null,i.a.createElement(y,{isWin:u},r.map((function(e){return i.a.createElement(d,{key:e.value,cell:e,onClick:m?C:void 0})}))),u&&i.a.createElement(z,null,"WIN")),i.a.createElement("footer",{style:{flexGrow:1}},i.a.createElement(k,{onClick:function(){var t=function(){e.shuffle(),a(e.cells)};w(!0),f(!1),[0,300,600,900].forEach((function(e){return setTimeout(t,e)}))}},E)))},E=c.a.main.withConfig({displayName:"App__Main",componentId:"p0gsqy-0"})(["height:100%;width:100%;display:flex;align-items:center;justify-content:center;background-color:rgb(34,36,41);color:rgb(224,228,228);"]),x=function(){return i.a.createElement(E,null,i.a.createElement(C,null))},j=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function _(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a.a.render(i.a.createElement(o.StrictMode,null,i.a.createElement(x,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/fifteen-puzzle",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/fifteen-puzzle","/service-worker.js");j?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):_(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):_(t,e)}))}}()}},[[14,1,2]]]);
//# sourceMappingURL=main.0ec5b969.chunk.js.map