/* Copyright Patware 2026. Educational purposes only. All rights reserved. */
"use strict";(()=>{var c=document.querySelectorAll("a[href]");c.forEach(e=>{e.getAttribute("href")!=="#"&&e.addEventListener("click",t=>{if(!t.isTrusted)return;t.preventDefault();let r=e.href;chrome.tabs.create({url:r,active:!0,pinned:!1})})});})();
