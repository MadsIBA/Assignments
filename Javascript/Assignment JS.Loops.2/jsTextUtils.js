//Unfinished

'use strict';

const first = function (txt) {
    return txt.charAt(0);
}

const last = function (txt) {
    return txt.charAt(txt.length - 1);
}

const middle = function (txt) {
    return txt.substring(1, txt.length - 1);
}

'use strict';
var phrase = prompt('Enter Phrase');

console.log('First: ' + first(phrase));
console.log('Last: ' + last(phrase));
console.log('Middle: ' + middle(phrase));
