require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';
import App from './components/App.vue';
import VueSweetalert2 from 'vue-sweetalert2'; 
// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.use(VueRouter);
Vue.use(VueSweetalert2);
Vue.use(VueAxios, axios);

import ArticleIndex from './components/ArticleIndex.vue';
import ArticleCreate from './components/ArticleCreate.vue';
import ArticleShow from './components/ArticleShow.vue';
import ArticleEdit from './components/ArticleEdit.vue';

const routes = [
  {
      name: 'home',
      path: '/',
      component: ArticleIndex
  },
  {
      name: 'create',
      path: '/article/create',
      component: ArticleCreate
  },
  {
      name: 'edit',
      path: '/article/edit/:id',
      component: ArticleEdit
  },
  {
    name: 'show',
    path: '/article/show/:id',
    component: ArticleShow
}
];

const router = new VueRouter({ mode: 'history', routes: routes});
const app = new Vue(Vue.util.extend({ router }, App)).$mount('#app');