
import { createStore } from 'vuex';

export default createStore({
  state: {
    count: 1,
  },
  mutations: {
    setCount(state: any, value: number): void {
      state.count = value;
    },
  },
  actions: {
    getCount(state: any): number {
      return state.count;
    },
  },
  modules: {},
});
