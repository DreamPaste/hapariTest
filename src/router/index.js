import { createRouter, createWebHistory } from "vue-router";


const router = createRouter({
  history: createWebHistory(""),
  routes:
  [
  // 자격증 상세페이지
  {
    path: '/CertiInfo/:certificationName',
    name: 'CertiInfo',
    component: () => import('src/Certification/CertiInfo.vue'),
    props: true
  },
  // 자격증 메인페이지
  {
    path: '/',
    name: 'CertificationMain',
    component: () => import('src/Certification/CertificationMain.vue'),
    props: true
  },
  // 자격증 실시간검색어
  {
    path: '/CertiRealTime',
    name: 'CertiRealTime',
    component: () => import('src/Certification/CertiRealTime.vue'),
    props: true
  },
  // 자격증 달력
  {
    path: '/CertiDate',
    name: 'CertiDate',
    component: () => import('src/Certification/CertiDate.vue'),
    props: true
  },
  // 자격증 메인페이지 그래프
  {
    path: '/CertiMainHorizontal',
    name: 'CertiMainHorizontal',
    component: () => import('src/Certification/CertiMainHorizontal.vue'),
    props: true
  },
  // 자격증 후기
  {
    path: '/CertiReview/:certificationName',
    name: 'CertiReview',
    component: () => import('src/Certification/CertiReview.vue'),
    props: true
  },
  // 자격증 후기 수정
  {
    path: '/CertiModify/:certificationName',
    name: 'CertiModify',
    component: () => import('src/Certification/CertiModify.vue'),
    props: true
  },
  // 자격증 메인페이지에서 정보 플러스 더보기 클릭시 상세페이지
  {
    path: '/InfoPlus',
    name: 'InfoPlus',
    component: () => import('src/Certification/InfoPlus.vue'),
    props: true
  },
  // 공모전 테이블
  {
    path: '/InfoTable',
    name: 'InfoTable',
    component: () => import('src/Contest/InfoTable.vue'),
    props: true
  },
  // 공모전 탭
  {
    name: 'ContestTab',
    path: '/ContestTab',
    component: () => import('src/Contest/ContestTab.vue'),
    props: true
  },
  // 공모전 상세페이지
  {
    path: '/contestInfo',
    name: 'contestInfo',
    component: () => import('src/Contest/contestInfo.vue'),
    props: true
  },
  // 스터디 상세페이지
  {
    path: '/StudyInfo',
    name: 'StudyInfo',
    component: () => import('src/Study/StudyInfo.vue'),
    props: true
  },
  // 스터디그룹 상세 내용
  {
    path: '/StudyDetail',
    name: 'StudyDetail',
    component: () => import('src/Study/StudyDetail.vue'),
    props: true
  },
    // 검색시 페이지
    {
      path: '/SearchPage',
      name: 'SearchPage',
      component: () => import('src/Main/SearchPage.vue'),
      props: true
    },
  { // 추가 (오류)
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => {
      return import(
        /* webpackChunkName: "NotFoundView" */ 'src/components/NotFoundView.vue'
        );
    },
  },
  ],
});

export default router;
