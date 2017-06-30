function switcher(character, isCode) {
    var beginning = '<i class="AZ ';
    var end = '"></i>';
    var wordsplice = '</i><i class="AZ wd">'
    var wordbreak = '</i><br><i class="AZ wd">'
    if (isCode) {
        beginning = '&lt;<em class="el">i</em> <em class="cl">class</em>="<em class="nm">AZ ';
        end = '</em>"&gt;&lt;/<em class="el">i</em>&gt;';
        wordsplice = '&lt;/<em class="el">i</em>&gt;&lt;<em class="el">i</em>&lt;<em class="el">i</em> <em class="cl">class</em>="<em class="nm">wd</em>"&gt;'
        wordbreak = '&lt;/<em class="el">i</em>&gt;&lt;br&gt;&lt;<em class="el">i</em>&lt;<em class="el">i</em> <em class="cl">class</em>="<em class="nm">AZ wd</em>"&gt;'
    }
    var className = character.toLowerCase();
    var isNumber = "0123456789".indexOf(character) >= 0;
    var insertion;
    if (character === " ") {
        insertion = wordsplice;
    } else if (character === '\n' || character === '\r') {
        insertion = wordbreak;
    } else if (isNumber) {
        insertion = beginning + 'd' + character + end;
    } else if (!isNumber) {
        switch (character) {
            case '!':
                className = 'ex';
                break;
            case '.':
                className = '_p';
                break;
            case ',':
                className = '_c';
                break;
            case '?':
                className = '_q';
                break;
            default:
                className = character;
        }
        insertion = beginning + className + end;
    }
    return insertion;
}

function runConverter() {
    var wordarray = [];
    for (var i = 0; i < entry.value.length; i++) {
        wordarray.push(switcher(entry.value.charAt(i), false));
    }
    result.innerHTML = '<i class="AZ wd">' + wordarray.join("") + '</i>';
    window.scrollTo(0, resultbackground.offsetTop);
    runCoder();
}

function runCoder() {
    var codearray = [];
    for (var i = 0; i < entry.value.length; i++) {
        codearray.push(switcher(entry.value.charAt(i), true))
    }
    codearea.innerHTML = '&lt;<em class="el">span</em> <em class="cl">data-az-weight</em>="<em class="nm">' + fontweight.value + '</em>" <em class="cl">style</em>="<em class="nm">color: ' + fontcolor.value + '; font-size: ' + fontsize.value + 'px;"</em>&gt; &lt;<em class="el">i</em> <em class="cl">class</em>="<em class="nm">AZ wd</em>"&gt;' + codearray.join("") + '&lt;/<em class="el">i</em>&gt;&lt;/<em class="el">span</em>&gt;';
}

function changeFontColor() {
    result.style.color = fontcolor.value;
    runCoder();
}

function changeBackgroundColor() {
    resultbackground.style.backgroundColor = backgroundcolor.value;
    runCoder();
}

function changeFontSize() {
    result.style.fontSize = fontsize.value + 'px';
    runCoder();
}

function changeFontWeight() {
    result.setAttribute('data-az-weight', fontweight.value)
    runCoder();
}
