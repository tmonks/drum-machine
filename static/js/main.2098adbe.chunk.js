(window["webpackJsonpdrum-machine"]=window["webpackJsonpdrum-machine"]||[]).push([[0],{12:function(e,n,t){},13:function(e,n,t){},23:function(e,n,t){},24:function(e,n,t){},25:function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),r=t(4),o=t.n(r),m=(t(12),t(6)),d=t(1),c=(t(13),t(5)),u=t.n(c);t(23);function l(e){return i.a.createElement("div",{id:"display-container"},i.a.createElement("div",{id:"triangle-left"}),i.a.createElement("div",{id:"display"},e.clipName),i.a.createElement("div",{id:"triangle-right"}))}t(24);function s(e){var n=null,t=Object(a.useState)(!1),r=Object(d.a)(t,2),o=r[0],m=r[1];Object(a.useEffect)(function(){e.hit&&(n.currentTime=0,n.play())},[e.hit,n]);return i.a.createElement("div",{className:"drum-pad ".concat(e.hit?"hit":""," ").concat(o?"animated":""),onMouseDown:function(){return m(!1),void e.mouseDownHandler(e.drumPadID)},onMouseUp:function(){return m(!0),void e.mouseUpHandler(e.drumPadID)},onAnimationEnd:function(){return m(!1)},id:"drumPad"+e.drumPadID},e.letter,i.a.createElement("audio",{ref:function(e){n=e},src:"/drum-machine/sounds/"+e.clip,id:e.letter,className:"clip"}))}var p=[{id:"Q",samples:[{name:"tom tom",file:"power-drum-kit/TOMLOW2.mp3"}]},{id:"W",samples:[{name:"rim shot",file:"power-drum-kit/RIMSHOT1.mp3"}]},{id:"E",samples:[{name:"clap",file:"power-drum-kit/CLAP.mp3"}]},{id:"A",samples:[{name:"crash cymbal",file:"power-drum-kit/CRASH1.mp3"}]},{id:"S",samples:[{name:"ride cymbal",file:"power-drum-kit/RIDEMID.mp3"}]},{id:"D",samples:[{name:"hi-hat open",file:"power-drum-kit/HHOPEN2.mp3"}]},{id:"Z",samples:[{name:"snare",file:"power-drum-kit/SNARE12.mp3"}]},{id:"X",samples:[{name:"bass drum",file:"power-drum-kit/BDRUM13.mp3"}]},{id:"C",samples:[{name:"hi-hat closed",file:"power-drum-kit/HHCLOSE1.mp3"}]}];Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(function(){var e=Object(a.useState)(""),n=Object(d.a)(e,2),t=n[0],r=n[1],o=Object(a.useState)([!1,!1,!1,!1,!1,!1,!1,!1,!1]),c=Object(d.a)(o,2),f=c[0],v=c[1],E=Object(a.useState)(0),h=Object(d.a)(E,2),w=h[0],k=(h[1],function(e){return p.findIndex(function(n){return n.id===e})}),b=function(e,n){if(e>=0&&e<f.length){var t=Object(m.a)(f);t[e]=n,v(t),r(p[e].samples[w].name)}},O=function(e){b(e,!0)},g=function(e){b(e,!1)};return Object(a.useEffect)(function(){var e=function(e){var n=k(String.fromCharCode(e.keyCode));n>=0&&b(n,!0)},n=function(e){var n=k(String.fromCharCode(e.keyCode));n>=0&&b(n,!1)};return console.log("Adding event listeners..."),document.addEventListener("keydown",e,!1),document.addEventListener("keyup",n,!1),function(){console.log("Cleaning up..."),document.removeEventListener("keydown",e,!1),document.removeEventListener("keyup",n,!1)}},[]),i.a.createElement("div",null,i.a.createElement(u.a,null),i.a.createElement("div",{id:"drum-machine"},i.a.createElement("div",{className:"title"},"DRUM MACHINE"),i.a.createElement(l,{clipName:t}),p.map(function(e,n){return i.a.createElement(s,{hit:f[n],mouseDownHandler:O,mouseUpHandler:g,letter:e.id,drumPadID:n,key:n,clip:e.samples[w].file})})))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},7:function(e,n,t){e.exports=t(25)}},[[7,1,2]]]);
//# sourceMappingURL=main.2098adbe.chunk.js.map