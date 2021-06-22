const { v4: uuid } = require('uuid');

function historyItem({ action, args, delta, isSacrifice }) {
  return {
    action,
    args,
    delta,
    isSacrifice
  };
}
function system({ name, ships, stars }) {
  return {
    name,
    id: uuid(),
    ships,
    stars
  };
}
function star({ color, size, ships, isHomeworldFor = null }) {
  return {
    color,
    size,
    ships,
    isHomeworldFor
  };
}
function ship({ color, size, owner }) {
  return {
    id: uuid(),
    color,
    size,
    owner
  };
}


const normalize = {
  historyItem,
  system,
  star,
  ship
};

module.exports = normalize;
