(this.webpackJsonpsimon=this.webpackJsonpsimon||[]).push([[0],[,,,,function(e,t,a){e.exports=a(13)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n,o=a(0),c=a.n(o),r=a(3),l=a.n(r),i=(a(9),a(1)),s=(a(10),function(e){return c.a.createElement("div",{className:"scoreboard-outer-container"},c.a.createElement("div",{className:"round-moves-container"},c.a.createElement("h3",{className:"round-display"},"ROUND: ",e.roundCount),c.a.createElement("h3",{className:"round-display"},"MOVES: ",e.playerClickDisplay,"/",e.roundCount)),c.a.createElement("button",{onClick:e.startGame,className:"new-game-button"},0!==e.randomNumArray.length?"NEW GAME":"START GAME"))}),u=(a(11),[]),m=[],d=0,b=0,f=function(){var e=Object(o.useState)(!1),t=Object(i.a)(e,2),a=t[0],r=t[1],l=Object(o.useState)(!1),f=Object(i.a)(l,2),E=f[0],v=f[1],N=Object(o.useState)(!1),h=Object(i.a)(N,2),O=h[0],p=h[1],j=Object(o.useState)(!1),g=Object(i.a)(j,2),y=g[0],w=g[1],x=Object(o.useState)(""),M=Object(i.a)(x,2),S=M[0],k=M[1],C=Object(o.useState)(""),A=Object(i.a)(C,2),R=A[0],T=A[1],G=Object(o.useState)(0),U=Object(i.a)(G,2),W=U[0],Y=U[1],D=Object(o.useState)(!0),I=Object(i.a)(D,2),B=I[0],J=I[1],V={0:r,1:v,2:p,3:w},H=function(){k("GAME"),T("OVER!"),J(!0)},$=function(){k("RIGHT!"),T(""),J(!0),m=[],setTimeout((function(){q()}),1e3)},q=function(){if(10===b)z();else{b++,d=0,Y(0),k("MY"),T("TURN!"),n=0;for(var e=1;e<=2*b;e++)F(e)}},z=function(){k("YOU"),T("WIN!"),J(!0)},F=function(e){setTimeout((function(){e%2!==0?V[u[Math.floor(n)]](!0):V[u[Math.floor(n)]](!1),n+=.5,e===2*b&&(k("YOUR"),J(!1))}),800*e)},K=function(){for(var e=[],t=0;t<10;t++)e.push(Math.floor(4*Math.random()));return e},L=function(e){m.push(e),d++,Y(W+1),b===d&&function(){for(var e=!0,t=0;t<m.length;t++)m[t]!==u[t]&&e&&(e=!1);e?$():H()}()};return c.a.createElement("section",null,c.a.createElement(s,{roundCount:b,startGame:function(){u=K(),b=0,m=[],d=0,Y(0),k("MY"),T("TURN!"),q()},playerClickDisplay:W,randomNumArray:u}),c.a.createElement("div",{className:"gameboard-outer-container"},c.a.createElement("div",{className:"center-circle"},c.a.createElement("p",{className:"turn-text-1"},S),c.a.createElement("p",{className:"turn-text-2"},R)),c.a.createElement("div",{className:B?"top-section disabled":"top-section"},c.a.createElement("div",{onClick:function(){return L(0)},className:a?"red-box red-active":"red-box"}),c.a.createElement("div",{onClick:function(){return L(1)},className:E?"yellow-box yellow-active":"yellow-box"})),c.a.createElement("div",{className:B?"bottom-section disabled":"bottom-section"},c.a.createElement("div",{onClick:function(){return L(2)},className:O?"green-box green-active":"green-box"}),c.a.createElement("div",{onClick:function(){return L(3)},className:y?"blue-box blue-active":"blue-box"}))))},E=(a(12),function(){return c.a.createElement("div",{className:"App"},c.a.createElement("h1",{className:"game-title-text"},"Mr. Simon"),c.a.createElement(f,null))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.d584d455.chunk.js.map