let routes;
routes = [
  {
    path: '/',
    component: () => import('src/Certification/CertiInfo.vue'),
  },

  {
    path: '/InfoTable',
    component: () => import('src/Contest/InfoTable.vue')
  },
  {
    path: '/ContestTab',
    component: () => import('src/Contest/ContestTab.vue')
  },
  { path: '/CertiReview',
    name: 'CertiReview',
    component: () => import('src/Certification/CertiReview.vue'),
    props: true
  },
  { path: '/CertiModify',
    name: 'CertiModify',
    component: () => import('src/Certification/CertiModify.vue'),
    props: true
  },
  { path: '/CertiTab',
    name: 'CertiTab',
    component: () => import('src/Certification/CertiTab.vue'),
    props: true
  }
];

export default routes;
