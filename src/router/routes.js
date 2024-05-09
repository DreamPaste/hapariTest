let routes;
routes = [
  {
    path: '/',
    component: () => import('src/layouts/TestCode.vue'),
    children: [
      { path: '/TestCode2', component: () => import('src/layouts/TestCode2.vue') }
    ]
  }
];

export default routes;
