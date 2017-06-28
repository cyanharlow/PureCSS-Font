var entry = document.getElementById('entry');
var result = document.getElementById('result');
var button = document.getElementById('submit');

var textcolor = document.getElementById('textcolor');
var backgroundcolor = document.getElementById('backgroundcolor');
var textsize = document.getElementById('textsize');
var fontweight = document.getElementById('fontweight');

button.addEventListener('click', function() {
    runConverter();
}, false);

function runConverter() {
    var wordarray = [];
    for (var i = 0; i < entry.length; i++) {
        var className = entry.charAt(i).toLowerCase();
        if (entry.charAt(i) === ' ') {
            className = 'space';
        }
        wordarray.push('<i class="AZ ' + className + '></i>')
    }
    result.innerHTML = wordarray.join('');
}
