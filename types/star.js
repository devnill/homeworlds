const uuid = require('uuid/v4');
function star(color, size, ships, isHomeworldFor=null) { 
  return {
    id: uuid(),
    color,
    size,
    ships,
    isHomeworldFor
  };
}
module.exports = star;