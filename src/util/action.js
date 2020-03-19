const action = {
  actionSuccess(state) {
    return {
      err: null,
      state
    };
  },
  actionFailure(state, reason) {
    return {
      err: reason || true,
      state
    };
  }
};