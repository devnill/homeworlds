
const validate = {
  standardValidation(state, args) {
    // check to see if its the players turn
    if (!player.isCurrentPlayer(state, args)) {
      return 'not your turn';
    }
  
    // check to see if the player has played yet
    if (state.history.filter((actionObj) => actionObj.player === args.player && actionObj.action !== 'endTurn') > 1) {
      return 'already player';
    }
    return null;
  },
  validateBank(bank) {
    const invalidBankSection = ['green', 'red', 'yellow', 'blue']
      .find((color) => {
        const colorhasInvalidCategory = bank[color].find((size) => {
          const categoryInvalid = size < 0;
          return categoryInvalid;
        });
        return colorhasInvalidCategory !== undefined;
      });
    return !!invalidBankSection;
  }
};