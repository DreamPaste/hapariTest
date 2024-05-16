let routes;
routes = [
  {
    path: '/',
    component: () => import('src/layouts/TestCode.vue'),
  },
  { path: '/Certi-Info',
    name:'CertiInfo',
    component: () => import('layouts/Certi-Info.vue')
  },
  { path: '/CertiReview',
    name: 'CertiReview',
    component: () => import('src/layouts/CertiReview.vue')
  }
];

export default routes;
