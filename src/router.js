import Vue from 'vue';
import Router from 'vue-router';
import BatterForm from './components/mlbdata/BatterForm.vue';
import PitcherForm from './components/mlbdata/PitcherForm.vue';
import BatterShow from './components/mlbdata/BatterShow.vue';
import PitcherShow from './components/mlbdata/PitcherShow.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/batting',
      name: 'BatterForm',
      component: BatterForm,
    },
    {
      path: '/pitching',
      name: 'PitcherForm',
      component: PitcherForm,
    },
    {
      path: '/batting/player*',
      name: 'BatterShow',
      component: BatterShow,
    },
    {
      path: '/pitching/player*',
      name: 'PitcherShow',
      component: PitcherShow,
    }
  ],
});