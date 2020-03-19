
const normalize = {
  historyItem({action, args, delta, isSacrifice}) {
    return {
      action,
      args,
      delta,
      isSacrifice
    };
  },
  system({name, ships, stars}) {
    return {
      name,
      id: id(),
      ships,
      stars
    };
  },
  star({color, size, ships, isHomeworldFor = null}) {
    return {
      color,
      size,
      ships,
      isHomeworldFor
    };
  },
  ship({color, size, owner}) {
    return {
      id: id(),
      color,
      size,
      owner
    };
  }
};
