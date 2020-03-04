const {id} = require('../util.js');
function system(name, ships, stars) { 
  return {
    id: id(),
    ships,
    stars
  };
}
module.exports = system;