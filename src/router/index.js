import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('@/views/about/index.vue'),
  },
  {
    // 社会招聘
    path: '/social-recruitment',
    component: () => import('@/layouts/index.vue'),
    children: [
      // {
      //   path: '',
      //   redirect: '/social-recruitment/society'
      // },
      {
        path: 'society',
        name: 'Society',
        component: () => import('@/views/society/index.vue')
      },
      {
        path: 'society/list',
        name: 'SocietyList',
        component: () => import('@/views/society/list.vue')
      },
      {
        path: 'society/job/:id',
        name: 'SocietyJobDetail',
        component: () => import('@/views/society/SocietyJobDetail.vue'),
      },
    ],
  },
  {
    // 校园招聘
    path: '/campus-recruitment',
    component: () => import('@/layouts-campus/index.vue'),
    children: [
      {
        path: 'campus',
        name: 'Campus',
        component: () => import('@/views/campus/index.vue')
      },
      {
        path: 'campus/list',
        name: 'CampusList',
        component: () => import('@/views/campus/list.vue')
      },
      {
        path: 'campus/job/:id',
        name: 'JobDetail',
        component: () => import('@/views/campus/JobDetail.vue'),
      },
    ],
  },
  {
    path: '/CoreIntelligentManufacturing',
    name: 'CoreIntelligentManufacturing',
    component: () => import('@/views/about/components/base-1.vue'),
  },
  {
    path: '/PreciseIntelligentManufacturing',
    name: 'PreciseIntelligentManufacturing',
    component: () => import('@/views/about/components/base-2.vue'),
  },
  {
    path: '/ServiceIntelligentManufacturing',
    name: 'ServiceIntelligentManufacturing',
    component: () => import('@/views/about/components/base-3.vue'),
  },
  {
    path: '/developmentHistory',
    name: 'DevelopmentHistory',
    component: () => import('@/views/history/index.vue'),
  },
  {
    path: '/mission',
    name: 'mission',
    component: () => import('@/views/vision/index.vue'),
  },
  {
    path: '/contactus',
    name: 'Contactus',
    component: () => import('@/views/contactus/index.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // 如果有保存的位置，则使用保存的位置
    if (savedPosition) {
      return savedPosition;
    }
    // 否则滚动到顶部
    return { top: 0 };
  },
});

export default router;
