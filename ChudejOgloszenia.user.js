// ==UserScript==
// @name ChudejkoFormFiller
// @author Shadoba
// @version 1.0
// @encoding utf-8
// @homepage https://github.com/Shadoba/Chudejko
// @updateURL https://raw.githubusercontent.com/Shadoba/Chudejko/master/ChudejOgloszenia.user.js
// @downloadURL https://raw.githubusercontent.com/Shadoba/Chudejko/master/ChudejOgloszenia.user.js
// @include http://*/*
// @include https://*/*
// @grant unsafeWindow
// @grant GM_addStyle
// @grant GM_getValue
// @grant GM_setValue
// @grant GM_xmlhttpRequest
// @grant GM_registerMenuCommand
// @grant GM_deleteValue
// @grant GM_listValues
// @grant GM_getResourceText
// @grant GM_getResourceURL
// @grant GM_log
// @grant GM_openInTab
// @grant GM_setClipboard
// @grant GM_info
// @grant GM_getMetadata
// @run-at document-end
// @include https://gumtree.pl/*
// ==/UserScript==

window.location.href = "https://www.gumtree.pl/post.html";

var CategorySelect = document.getElementById('catSelector').children[1];

alert(CategorySelect.lastChild);
