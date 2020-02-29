const {id} = require('../util.js');
function ship(color, size, owner) { 
  return {
    id: id(),
    color,
    size,
    owner
  };
}
module.exports = ship;