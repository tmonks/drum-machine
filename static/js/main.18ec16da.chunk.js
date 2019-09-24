(window["webpackJsonpdrum-machine"]=window["webpackJsonpdrum-machine"]||[]).push([[0],{12:function(e,a,n){},22:function(e,a,n){},23:function(e,a,n){},24:function(e,a,n){},25:function(e,a,n){"use strict";n.r(a);var i=n(0),r=n.n(i),t=n(4),o=n.n(t),m=(n(12),n(6)),l=n(1),c=n(5),d=n.n(c);n(22);function f(e){return r.a.createElement("div",{id:"bank-selector"},r.a.createElement("div",{id:"arrow-left",onClick:function(){return e.clickLeftHandler()}}),r.a.createElement("div",{className:"display"},e.currentBank),r.a.createElement("div",{id:"arrow-right",onClick:function(){return e.clickRightHandler()}}))}n(23);function p(e){var a=null,n=Object(i.useState)(!1),t=Object(l.a)(n,2),o=t[0],m=t[1];Object(i.useEffect)(function(){if(e.hit){a.currentTime=0,m(!1);var n=a.play();void 0!==n&&n.then(function(){m(!0),e.releasePad(e.drumPadID)}).catch(function(e){console.log("playback failed: "+e)})}},[e.hit,a]);return r.a.createElement("div",{className:"drum-pad ".concat(o?"animating":""),onMouseDown:function(){return m(!1),void e.hitPad(e.drumPadID)},onAnimationEnd:function(){return m(!1)},id:"drumPad"+e.drumPadID},e.letter,r.a.createElement("audio",{ref:function(e){a=e},src:"/drum-machine/sounds/"+e.clip,id:e.letter,className:"clip"}))}var u=[{name:"drum set",samples:[{name:"ride edge",file:"power-drum-kit/RIDEEDGE.mp3"},{name:"ride mid",file:"power-drum-kit/RIDEMID.mp3"},{name:"crash",file:"power-drum-kit/CRASH1.mp3"},{name:"tom low 1",file:"power-drum-kit/TOMLOW1.mp3"},{name:"tom low 2",file:"power-drum-kit/TOMLOW2.mp3"},{name:"snare",file:"power-drum-kit/SNARE12.mp3"},{name:"bass drum",file:"power-drum-kit/BDRUM13.mp3"},{name:"hi-hat open 2",file:"power-drum-kit/HHOPEN2.mp3"},{name:"hi-hat closed",file:"power-drum-kit/HHCLOSE1.mp3"},{name:"bongo 1",file:"power-drum-kit/BONGO1.mp3"},{name:"bongo 2",file:"power-drum-kit/BONGO2.mp3"},{name:"clap",file:"power-drum-kit/CLAP.mp3"},{name:"ride cup",file:"power-drum-kit/RIDECUP.mp3"},{name:"rim shot",file:"power-drum-kit/RIMSHOT1.mp3"},{name:"tom hi 3",file:"power-drum-kit/TOMHI3.mp3"},{name:"kick 1",file:"power-drum-kit/606-kick1.mp3"},{name:"tom hi 1",file:"power-drum-kit/TOMHI1.mp3"},{name:"hi-hat open 1",file:"power-drum-kit/HHOPEN1.mp3"}]},{name:"animal sounds",samples:[{name:"wolf",file:"animals/112[kb]cheesy_lofi_werewolf.aif.mp3"},{name:"cricket",file:"animals/172[kb]cricket.aif.mp3"},{name:"bull dog",file:"animals/175[kb]bulldog.wav.mp3"},{name:"tropical bird",file:"animals/185[kb]annoying-tropical-bird.aif.mp3"},{name:"frog",file:"animals/22[kb]bullfrog.aif.mp3"},{name:"lion",file:"animals/24[kb]lion-roar.wav.mp3"},{name:"grizzly bear",file:"animals/268[kb]grizzly-bear-big-growl.wav.mp3"},{name:"ducks",file:"animals/455[kb]duck-quacks.wav.mp3"},{name:"loon",file:"animals/87[kb]jungle-bird.aif.mp3"}]},{name:"beat boxing",samples:[{name:"lo-fi bass drum",file:"beat-box/15[kb]vox_lofi_bd.aif.mp3"},{name:"bass drum",file:"beat-box/28[kb]vox_bd.aif.mp3"},{name:"hi hat",file:"beat-box/28[kb]vox_hi_hat.aif.mp3"},{name:"scratch",file:"beat-box/28[kb]vox_scratch.aif.mp3"},{name:"snare",file:"beat-box/32[kb]vox_snare.aif.mp3"},{name:"break 2",file:"beat-box/36[kb]lofi_vox_break 2.aif.mp3"},{name:"crash",file:"beat-box/37[kb]vox_crash.aif.mp3"},{name:"phat bass drum",file:"beat-box/44[kb]phat_vox_bd.aif.mp3"},{name:"breathy rhythm",file:"beat-box/50[kb]vox_breathy_rhythm.aif.mp3"},{name:"break 1",file:"beat-box/66[kb]lofi_vox_break 1.aif.mp3"}]},{name:"cartoon effects",samples:[{name:"rude raspberry",file:"cartoon/108[kb]rude-raspberry.wav.mp3"},{name:"sports whistle",file:"cartoon/156[kb]sports-whistle.wav.mp3"},{name:"spin whistle",file:"cartoon/159[kb]cartoon-spin-whistle.wav.mp3"},{name:"hit",file:"cartoon/241[kb]cartoon-hit.wav.mp3"},{name:"car horn 2",file:"cartoon/271[kb]model-a-car-horn 2.wav.mp3"},{name:"car zooming past",file:"cartoon/300[kb]car-zooms-past.wav.mp3"},{name:"cork pull and pop",file:"cartoon/394[kb]cork-pull-and-pop.wav.mp3"},{name:"belch",file:"cartoon/417[kb]big-ol-belch-2.wav.mp3"},{name:"car horn 1",file:"cartoon/586[kb]model-a-car-horn.wav.mp3"},{name:"cloth rip",file:"cartoon/92[kb]cloth-rip.wav.mp3"}]},{name:"donkey kong jr",samples:[{name:"snap jaw",file:"donkey-kong-jr/12[kb]snapjaw.wav.mp3"},{name:"roar",file:"donkey-kong-jr/23[kb]roar.wav.mp3"},{name:"land",file:"donkey-kong-jr/28[kb]land.wav.mp3"},{name:"jump",file:"donkey-kong-jr/36[kb]jump.wav.mp3"},{name:"drop",file:"donkey-kong-jr/78[kb]drop.wav.mp3"},{name:"effect 1",file:"donkey-kong-jr/7[kb]effect01.wav.mp3"},{name:"death",file:"donkey-kong-jr/89[kb]death.wav.mp3"},{name:"climb",file:"donkey-kong-jr/8[kb]climb.wav.mp3"},{name:"walk",file:"donkey-kong-jr/8[kb]walk.wav.mp3"}]}];n(24);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(function(){var e=Object(i.useState)(""),a=Object(l.a)(e,2),n=a[0],t=a[1],o=Object(i.useState)([!1,!1,!1,!1,!1,!1,!1,!1,!1]),c=Object(l.a)(o,2),k=c[0],s=c[1],b=Object(i.useState)(0),w=Object(l.a)(b,2),h=w[0],v=w[1],g=["Q","W","E","A","S","D","Z","X","C"],E=Object(i.useCallback)(function(e,a){if(e>=0&&e<k.length){var n=Object(m.a)(k);n[e]=a,s(n),a&&t(u[h].samples[e].name)}},[h]);return Object(i.useEffect)(function(){console.log("useEffect running");var e=function(e){var a=g.findIndex(function(a){return a===String.fromCharCode(e.keyCode)});a>=0&&E(a,!0)};return document.addEventListener("keydown",e,!1),function(){document.removeEventListener("keydown",e,!1)}},[E]),r.a.createElement("div",null,r.a.createElement(d.a,null),r.a.createElement("div",{id:"drum-machine"},r.a.createElement("div",{className:"title"},"SOUND MACHINE"),r.a.createElement(f,{currentBank:u[h].name,clickRightHandler:function(){v((h+1)%u.length),t("")},clickLeftHandler:function(){v((h+u.length-1)%u.length),t("")}}),r.a.createElement("div",{id:"display",className:"display"},n),g.map(function(e,a){return r.a.createElement(p,{hit:k[a],hitPad:function(e){return E(e,!0)},releasePad:function(e){return E(e,!1)},letter:e,drumPadID:a,key:a,clip:u[h].samples[a].file})})))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},7:function(e,a,n){e.exports=n(25)}},[[7,1,2]]]);
//# sourceMappingURL=main.18ec16da.chunk.js.map