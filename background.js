/* Copyright Patware 2026. Educational purposes only. All rights reserved. */
"use strict";(()=>{chrome.runtime.onInstalled.addListener(()=>{chrome.scripting.registerContentScripts([{id:"patpass-injector",js:["index.js"],matches:["https://work.ink/*"],runAt:"document_start",world:chrome.scripting.ExecutionWorld.MAIN}])});})();
