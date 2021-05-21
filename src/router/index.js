import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    meta: {
      notAuth: true,
    },
  },
  {
    path: '/registration/',
    name: 'Registration',
    component: () => import('@/views/Registration.vue'),
    meta: {
      notAuth: true,
    },
  },
  {
    path: '/recovery-password/',
    name: 'RecoveryPassword',
    component: () => import('@/views/recoveryPassword.vue'),
    meta: {
      notAuth: true,
    },
  },
  {
    path: '/personal/',
    name: 'Personal',
    component: () => import('@/views/Personal.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/order/add',
    name: 'OrderAdd',
    component: () => import('@/views/Order/OrderAdd.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/order/:id/edit',
    name: 'OrderEdit',
    component: () => import('@/views/Order/OrderEdit.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/order/',
    name: 'OrderList',
    component: () => import('@/views/Order/OrderList.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/message/',
    name: 'MessageList',
    component: () => import('@/views/Message/MessageList.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/message/add',
    name: 'MessageAdd',
    component: () => import('@/views/Message/MessageAdd.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/message/:id/edit',
    name: 'MessageEdit',
    component: () => import('@/views/Message/MessageEdit.vue'),
    meta: {
      requiresAuth: true,
    },
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((item) => item.meta.requiresAuth)) {
    if (!store.getters.getUserId) {
      next('/');
    }
  }

  if (to.matched.some((item) => item.meta.notAuth)) {
    if (store.getters.getUserId) {
      next('/order/');
    }
  }

  next();
});

export default router;
