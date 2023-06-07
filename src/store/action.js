export const actions = {
  increament(context, payload) {
    context.commit("increamentCounter", payload);
  },
  getlist(context, payload) {
    context.commit("getInfo", payload);
  },
};
