const uuid = require('uuid/v4');
function ship(color, size, owner) { 
  return {
    id: uuid(),
    color,
    size,
    owner
  };
}
module.exports = ship;