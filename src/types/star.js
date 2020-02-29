const id = require('../util.js');
function star(color, size, ships, isHomeworldFor=null) { 
    return {
        id: id(),
        color,
        size,
        ships,
        isHomeworldFor
    };
}
module.exports = star;