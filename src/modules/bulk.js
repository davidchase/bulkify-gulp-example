var bulk = require('bulk-require');
var components = bulk(__dirname, ['a', 'b', 'c']);
for (var component in components) {
    if (components.hasOwnProperty(component)) {
        components[component]();
    }
}