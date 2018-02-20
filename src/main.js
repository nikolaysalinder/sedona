// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

import Header from './components/Header';
import Home from './components/Home';
import HotelSearch from './components/HotelSearch';
import Footer from './components/Footer';

Vue.component('app-header', Header);
Vue.component('app-home', Home);
Vue.component('app-hotel-search', HotelSearch);
Vue.component('app-footer', Footer);

Vue.config.productionTip = false;


new Vue({ // eslint-disable-line no-new
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
