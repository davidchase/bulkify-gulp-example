var bulk = require('bulk-require');
var components = bulk(__dirname, [ 'modules/**/*.js']);
for (var component in components) {
    if (components.hasOwnProperty(component)) {
        require(components[component])();
    }
}
/*
require('./modules/a');
require('./modules/b');
require('./modules/c');
*/