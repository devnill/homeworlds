function historyItem(action, args, delta, isSacrifice) {
  return {
    action,
    args,
    delta,
    isSacrifice
  };
}
module.exports = historyItem;