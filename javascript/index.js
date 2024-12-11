'use strict';

// Erase diacritics and other special characters

function eraseDiacritics() {
    let e = document.getElementById("textbox").value;
    document.getElementById("textbox").value = e.replace(/[áăắặằẳẵǎâấậầẩẫäạàảāąåǻãɑ]/g, 'a')
        .replace(/[æǽ]/g, 'ae')
        .replace(/[ḅɓ]/g, 'b')
        .replace(/[ćčçĉċ]/g, 'c')
        .replace(/[ďḓḍɗḏđɖ]/g, 'd')
        .replace(/[éĕěêếệềểễëėẹèẻēęẽ]/g, 'e')
        .replace(/[ƒ]/g, 'f')
        .replace(/[ǵğǧģĝġḡɡ]/g, 'g')
        .replace(/[ḫĥḥẖħ]/g, 'h')
        .replace(/[íĭǐîïịìỉīįɨĩı]/g, 'i')
        .replace(/[ǰĵ]/g, 'j')
        .replace(/[ķḳƙḵĸ]/g, 'k')
        .replace(/[ĺƚɬľļḽḷḹḻŀɫɭł]/g, 'l')
        .replace(/[ḿṁṃɱ]/g, 'm')
        .replace(/[ŉńňņṋṅṇǹṉñ]/g, 'n')
        .replace(/[óŏǒôốộồổỗöọőòỏơớợờởỡōǫøǿõ]/g, 'o')
        .replace(/[œ]/g, 'oe')
        .replace(/[ŕřŗṙṛṝṟ]/g, 'r')
        .replace(/[śšşŝșṡṣʂ]/g, 's')
        .replace(/[ß]/g, 'ss')
        .replace(/[ťţṱțẗṭṯ]/g, 't')
        .replace(/[ʉúŭǔûüǘǚǜǖụűùủưứựừửữūųůũ]/g, 'u')
        .replace(/[ʋ]/g, 'v')
        .replace(/[ẃŵẅẁ]/g, 'w')
        .replace(/[ýŷÿẏỵỳƴỷȳỹ]/g, 'y')
        .replace(/[źžżẓẕƶ]/g, 'z')
        .replace(/[ÁĂẮẶẰẲẴǍÂẤẬẦẨẪÄẠÀẢĀĄÅǺÃ]/g, 'A')
        .replace(/[ÆǼ]/g, 'AE')
        .replace(/[ḄƁ]/g, 'B')
        .replace(/[ĆČÇĈĊ]/g, 'C')
        .replace(/[ĎḒḌƊḎĐ]/g, 'D')
        .replace(/[ÉĔĚÊẾỆỀỂỄËĖẸÈẺĒĘẼ]/g, 'E')
        .replace(/[Ƒ]/g, 'F')
        .replace(/[ǴĞǦĢĜĠḠ]/g, 'G')
        .replace(/[ḪĤḤĦ]/g, 'H')
        .replace(/[ÍĬǏÎÏİỊÌỈĪĮĨ]/g, 'I')
        .replace(/[Ĵ]/g, 'J')
        .replace(/[ĶḲƘḴ]/g, 'K')
        .replace(/[ĹȽĽĻḼḶḸḺĿŁ]/g, 'L')
        .replace(/[ḾṀṂ]/g, 'M')
        .replace(/[ŃŇŅṊṄṆǸƝṈÑ]/g, 'N')
        .replace(/[ÓŎǑÔỐỘỒỔỖÖỌŐÒỎƠỚỢỜỞỠŌƟǪØǾÕ]/g, 'O')
        .replace(/[Œɶ]/g, 'OE')
        .replace(/[ŔŘŖṘṚṜṞ]/g, 'R')
        .replace(/[ŚŠŞŜȘṠṢ]/g, 'S')
        .replace(/[ẞ]/g, 'SS')
        .replace(/[ŤŢṰȚṬṮŦ]/g, 'T')
        .replace(/[ÚŬǓÛÜǗǙǛǕỤŰÙỦƯỨỰỪỬỮŪŲŮŨ]/g, 'U')
        .replace(/[ẂŴẄẀ]/g, 'W')
        .replace(/[ÝŶŸẎỴỲƳỶȲỸ]/g, 'Y')
        .replace(/[ŹŽŻẒẔƵ]/g, 'Z')
        .replace(/[’ʼ]/g, '\'')
}

function convertGermanDiacritics() {
    let e = document.getElementById("textbox").value;
    document.getElementById("textbox").value = e.replace(/[ä]/g, 'ae')
        .replace(/[Ä]/g, 'Ae')    
        .replace(/[ö]/g, 'oe')
        .replace(/[Ö]/g, 'Oe')
        .replace(/[ü]/g, 'ue')
        .replace(/[Ü]/g, 'Ue')
        .replace(/[ß]/g, 'ss')
        .replace(/[ẞ]/g, 'SS')
}

function convertEsperantoDiacritics() {
    let e = document.getElementById("textbox").value;
    document.getElementById("textbox").value = e.replace(/[ĉ]/g, 'cx')
        .replace(/[Ĉ]/g, 'Cx')    
        .replace(/[ĝ]/g, 'gx')
        .replace(/[Ĝ]/g, 'Gx')
        .replace(/[ĥ]/g, 'hx')
        .replace(/[Ĥ]/g, 'Hx')
        .replace(/[ĵ]/g, 'jx')
        .replace(/[Ĵ]/g, 'Jx')
        .replace(/[ŝ]/g, 'sx')
        .replace(/[Ŝ]/g, 'Sx')
        .replace(/[ŭ]/g, 'ux')
        .replace(/[Ŭ]/g, 'Ux')
}

// Copy text to clipboard
function copyToClipboard() {
    let e = document.getElementById("textbox").value
    if (e) {
        navigator.clipboard.writeText(e);
        document.getElementById("copied-notice").textContent = "Spaces added and text copied to clipboard";
        document.getElementById("copied-notice").style.visibility = "visible";
        setTimeout(copiedNoticeFinish, 1500);
    } else {
        document.getElementById("copied-notice").textContent = "No text available";
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

// TO DO: figure out a way for transliterations that involve changing a single capitalized character to two characters (e.g. Æ to AE) to have
// only the first character capitalized if other lowercase letters are present in the text, but to have both characters capitalized if
// lowercase characters are absent. That would be one method of avoiding a situation in which an otherwise ALL CAPS text is interrupted by
// the presence of second-character lowercase forms while ensuring that any other text (that could have a mix of uppercase and lowercase characters)
// will only display the first-character uppercase with these converted characters (e.g. Æ to Ae).