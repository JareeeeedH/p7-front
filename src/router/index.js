import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../components/HomeComponent';
import Register from '../components/Register';
import Login from '../components/LoginComponent';
import Profile from '../components/ProfileComponent';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import('../views/About.vue')
  // }
];

const router = new VueRouter({
  routes,
});

export default router;
