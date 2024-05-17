let routes;
routes = [
  {
    path: '/',
    component: () => import('layouts/CertiInfo.vue')
  },

  { path: '/CertiReview',
    name: 'CertiReview',
    component: () => import('src/layouts/CertiReview.vue')
  }
];

export default routes;
