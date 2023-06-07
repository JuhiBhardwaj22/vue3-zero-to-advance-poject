export const getters = {
  getCounter(state) {
    console.log("getter", state);
    return state.counter;
  },
  getData(state) {
    return state.list;
  },
};
