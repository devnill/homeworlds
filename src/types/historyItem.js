function historyItem(action,args, systems=[]) {
  return {
    action,
    args,
    systems
  };
}
module.exports = historyItem;