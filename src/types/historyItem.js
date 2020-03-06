function historyItem(action, args, systems = [], isSacrifice) {
  return {
    action,
    args,
    systems,
    isSacrifice
  };
}
module.exports = historyItem;