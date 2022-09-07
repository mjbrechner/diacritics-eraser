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