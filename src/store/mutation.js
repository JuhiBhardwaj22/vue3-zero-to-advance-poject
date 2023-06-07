export const mutations = {
  increamentCounter(state, payload) {
    console.log("mutation", payload);
    state.counter = state.counter + payload;
  },
  getInfo(state, payload) {
    state.list = payload;
  },
};
