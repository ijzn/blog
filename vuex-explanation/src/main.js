import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex';

Vue.config.productionTip = false

Vue.use(Vuex);
/**
 * module的初始化过程是以递归进行的。
 */
const moduleA = {
  // 命名变量空间
  namespaced: true,
  state: {
    count: 1
  },
  mutations: {
    add(state) {
      state.count++
    }
  },
  actions: {
    actionAdd(ctx){
      ctx.commit('add');
    }
  },
  getters: {
    compenedCount(state) {
      return state.count + 1
    }
  }
};

const moduleB = {
  namespaced: true,
  state: {
    count: 1
  },
  mutations: {
    add(state) {
      state.count++
    }
  },
  actions: {
    actionAdd(ctx){
      ctx.commit('add');
    }
  },
  getters: {
    compenedCount(state) {
      return state.count + 1
    }
  }
};

const store = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB,
  },
  state: {
    count: 1,
  },
  mutations: {
    add(state) {
      state.count++
    }
  },
  actions: {
    async actionAdd(ctx){
      await ctx.commit('add')
    }
  },
  getters: {
    compenedCount(state) {
      return state.count + 1
    }
  }
});
window.store = store;

// eslint-disable-next-line no-console
console.log(store);

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
