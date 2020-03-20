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
    id: id(),
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
    id: id(),
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
