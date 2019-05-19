import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex';

Vue.config.productionTip = false

Vue.use(Vuex);

const moduleA = {
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

};


const store = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB,
  },
  state: {
    count: 1,
  },

});





new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
