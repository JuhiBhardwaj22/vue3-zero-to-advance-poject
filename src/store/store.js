import { createStore } from "vuex";
import { state } from "./state";
import { mutations } from "./mutation";
import { actions } from "./action";
import { getters } from "./getter";

export const store = createStore({ state, mutations, actions, getters });
