// http://howtonode.org/why-use-closure
'use strict';

var newPerson = require('./closure-factory');

var tim = newPerson("Tim", 28);
    tim.greet();
    tim.slowGreet();
