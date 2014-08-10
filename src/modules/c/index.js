'use strict';

var template = require('./test.hbs');

module.exports = function () {
    var names = {'names': [
        {
            'FirstName': 'Christian',
            'LastName': 'Lohr'
        },
        {
            'FirstName': 'Jenny',
            'LastName': 'Lohr'
        },
        {
            'FirstName': 'Logan',
            'LastName': 'Lohr'
        }
    ]};
    var rendered = template(names);
    document.getElementById('names').innerHTML = rendered;
    console.log('c');
};