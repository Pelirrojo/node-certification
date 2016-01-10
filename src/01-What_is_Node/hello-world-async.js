
'use strict';

var colors = require('colors');

console.log('Hello '.rainbow);

setTimeout(function () {
    console.log("World".rainbow);
}, Math.floor(Math.random() * 1000));


console.log((colors.inverse('This is EOF! ?????')));
console.log('OMG! How did I get here??'.inverse);
