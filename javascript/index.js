'use strict';

// Erase diacritics and other special characters

function eraseDiacritics() {
    let e = document.getElementById("textbox").value;
    document.getElementById("textbox").value = e.replace(/[áăắặằẳẵǎâấậầẩẫäạàảāąåǻãɑ]/g, 'a');
    // document.getElementById("textbox").value = e.replace(/[æǽ]/g, 'ae');
}

// Copy text to clipboard
function copyToClipboard() {
    let e = document.getElementById("textbox").value
    if (e !== ``) {
        navigator.clipboard.writeText(e);
        alert("Text copied to clipboard");
    } else {
        alert("no text to copy");
    }
}