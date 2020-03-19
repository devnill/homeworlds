
const board = {
  findSystem(board, system) {
    const [targetSystems, otherSystems] = _.partition(board, (s) => s.id === system.id);
    const targetSystem = targetSystems.length ? targetSystems[0] : null;
    return [targetSystem, otherSystems];
  }
};