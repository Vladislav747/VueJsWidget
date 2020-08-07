import Vue from 'vue';
//import VueRouter from 'vue-router';
import App from './App.vue';

// Vue.use(VueRouter);

// const routes = [
//   {
//     name
//   } 
// ]

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app')
