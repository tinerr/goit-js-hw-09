!function(){var t=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]"),e=null;function o(t,n){t.disabled=!0,n.disabled=!1}t.addEventListener("click",(function(){o(t,n),e=setInterval((function(){return document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)})),n.addEventListener("click",(function(){o(n,t),clearInterval(e)})),o(n,t)}();
//# sourceMappingURL=01-color-switcher.0946119e.js.map