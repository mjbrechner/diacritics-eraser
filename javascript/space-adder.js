'use strict';

// Erase diacritics and other special characters
//test
function eraseDiacritics() {
    let textboxContents = document.getElementById("textbox").value;

    if (textboxContents) {
        document.getElementById("textbox").value = textboxContents.replace(/([a-zA-Z\u00C0-\u024F\u1E00-\u1EFF\u2C60-\u2C7F\uA720-\uA7FF\uAB30-\uAB6B])\./g, "$1. ").trimEnd();
        let fixedText = document.getElementById("textbox").value;
        navigator.clipboard.writeText(fixedText);
        document.getElementById("copied-notice").textContent = "Text copied";
        document.getElementById("copied-notice").style.visibility = "visible";
        setTimeout(copiedNoticeFinish, 1500);
    } else {
        document.getElementById("copied-notice").textContent = "No text to copy";
        document.getElementById("copied-notice").style.visibility = "visible";
        setTimeout(copiedNoticeFinish, 2000);
    }


}

// Copy text to clipboard
function copyToClipboard() {
    let copier = document.getElementById("textbox").value
    if (copier) {
        navigator.clipboard.writeText(copier);
        document.getElementById("copied-notice").textContent = "Text copied";
        document.getElementById("copied-notice").style.visibility = "visible";
        setTimeout(copiedNoticeFinish, 1500);
    } else {
        document.getElementById("copied-notice").textContent = "No text to copy";
        document.getElementById("copied-notice").style.visibility = "visible";
        setTimeout(copiedNoticeFinish, 2000);
    }
}

// Return "text copied" message to hidden
function copiedNoticeFinish() {
    document.getElementById("copied-notice").style.visibility = "hidden";
}

// Clear textbox of all text
function clearText() {
    document.getElementById("textbox").value = "";
}