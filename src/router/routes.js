let routes;
routes = [
  //자격증 상세페이지
  {
    path: '/CertiInfo',
    name: 'CertiInfo',
    component: () => import('src/Certification/CertiInfo.vue'),
  },
  //자격증 메인페이지
  {
    path: '/',
    name: 'CertificationMain',
    component: () => import('src/Certification/CertificationMain.vue'),
  },
  //자격증 실시간검색어
  {
    path: '/CertiRealTime',
    name: 'CertiRealTime',
    component: () => import('src/Certification/CertiRealTime.vue'),
  },
  //자격증 달력
  {
    path: '/CertiDate',
    name: 'CertiDate',
    component: () => import('src/Certification/CertiRealTime.vue'),
  },
  //자격증메인페이지 그래프
  {
    path: '/CertiMainHorizontal',
    name: 'CertiMainHorizontal',
    component: () => import('src/Certification/CertiMainHorizontal.vue'),
  },
  //자격증 후기
 {
   path: '/CertiReview',
   name: 'CertiReview',
   component: () => import('src/Certification/CertiReview.vue'),
   props: true
},
  //자격증 후기수정
{
  path: '/CertiModify',
  name: 'CertiModify',
  component: () => import('src/Certification/CertiModify.vue'),
  props: true
},
  //공모전 테이블
  {
    path: '/InfoTable',
    name: 'InfoTable',
    component: () => import('src/Contest/InfoTable.vue')
  },
  //공모전 탭
  {
    name: 'ContestTab',
    path: '/ContestTab',
    component: () => import('src/Contest/ContestTab.vue')
  },
  //공모전 상세페이지
  {
    path: '/contestInfo',
    name: 'contestInfo',
    component: () => import('src/Contest/contestInfo.vue')
  },

];

export default routes;
