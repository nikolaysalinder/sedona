import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/home/Home';
import Hotels from '@/components/hotels/Hotels';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/hotels',
      name: 'Hotels',
      component: Hotels,
    },
  ],
});
