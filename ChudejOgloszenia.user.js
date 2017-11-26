// ==UserScript==
// @name ChudejkoFormFiller
// @author Shadoba
// @version 1.0
// @encoding utf-8
// @homepage https://github.com/Shadoba/Chudejko
// @updateURL https://raw.githubusercontent.com/Shadoba/Chudejko/master/ChudejOgloszenia.user.js
// @downloadURL https://raw.githubusercontent.com/Shadoba/Chudejko/master/ChudejOgloszenia.user.js
// @grant none
// @run-at document-end
// @include https://gumtree.pl/*
// ==/UserScript==

window.location.href = "https://www.gumtree.pl/post.html";

var CategorySelect = document.getElementById('catSelector').children[1];

alert(CategorySelect.lastChild);
