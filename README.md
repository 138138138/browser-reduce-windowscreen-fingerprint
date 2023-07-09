# **Browser Reduce window.screen Fingerprint**

# Introduction

Your browser has a unique fingerprint. Ad companies use this uniqueness to track users' behavior even if user has enabled incognito mode and VPN.

To reduce the ability to track users, I created this script.

By default in **Chromium**, the `window.screen` object reports your outer and inner device resolution. The outer one (`width`/`height`) is common, like 1920x1080. But the inner one (`availWidth`/`availHeight`) is something like 1920x1030. The height difference is the taskbar height.

The `window.screen` also has `availTop` and `availLeft` properties. This exposes the placement of your start menu's position. For example, if you place your taskbar at the left of screen, `availLeft` will be 50, and resolution will be 1870x1080. If you place your taskbar at the right of screen, `availLeft` will be 0, and resolution will be 1870x1080.

The `window.screen` also exposes if you have multiple monitors with the `isExtended` property. It will be `true` if you have second screen, and `false` if you do not.

# Mitigations for Brave Browser

Brave already enable screen fingerprinting out of the box. You can check your screen information on [https://browserleaks.com/javascript](https://browserleaks.com/javascript). If it is not enabled, go to `about:flags` then enable `Block screen fingerprinting`.

# Mitigations for other Chromium-based browsers

1. Set the `availWidth` and `availHeight` to be the same as `width` and `height`.
2. Set `availTop` and `availLeft` to 0.
3. Set `isExtended` to `false`.

This script is only useful in **Chromium-based** browsers.

Firefox already has windows size based fingerprint mitigation. It can be enabled by entering `about:config`, then setting `privacy.resistFingerprinting` to `true`.

# How to install

1. Install TamperMonkey or ViolentMonkey your browser.
2. Use the install script link: [here](https://github.com/138138138/browser-reduce-windowscreen-fingerprint/raw/main/download.user.js). TamperMonkey or ViolentMonkey will auto detect it and install it for you.
