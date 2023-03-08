// ==UserScript==
// @name        browser-reduce-windowscreen-fingerprint
// @version     1.0.0
// @description Reduce the fingerprint uniqueness in window.screen in chromium-based browsers
// @author      138138138
// @include     *
// @grant       none
// @run-at      document-start
// ==/UserScript==

Object.defineProperty(window.screen, "availWidth", { value: window.screen.width, writable: false, enumerable: true });
Object.defineProperty(window.screen, "availHeight", { value: window.screen.height, writable: false, enumerable: true });
Object.defineProperty(window.screen, "availTop", { value: 0, writable: false, enumerable: true });
Object.defineProperty(window.screen, "availLeft", { value: 0, writable: false, enumerable: true });
Object.defineProperty(window.screen, "isExtended", { value: false, writable: false, enumerable: true });
