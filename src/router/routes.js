let routes;
routes = [
  {
    path: '/',
    name: 'CertiInfo',
    component: () => import('src/Certification/CertiInfo.vue'),
  },
 {
   path: '/CertiReview',
   name: 'CertiReview',
   component: () => import('src/Certification/CertiReview.vue'),
   props: true
},

{
  path: '/CertiModify',
  name: 'CertiModify',
  component: () => import('src/Certification/CertiModify.vue'),
  props: true
},
  {
    path: '/InfoTable',
    name: 'InfoTable',
    component: () => import('src/Contest/InfoTable.vue')
  },
  {
    name: 'ContestTab',
    path: '/ContestTab',
    component: () => import('src/Contest/ContestTab.vue')
  },
  {
    path: '/contestInfo',
    name: 'contestInfo',
    component: () => import('src/Contest/contestInfo.vue')
  },

];

export default routes;
