import { createWebHistory, createRouter, RouteRecordRaw } from 'vue-router';
/* Layout */
import Layout from '@/layout/index.vue';
import i18n from '@/lang/index';

// 公共路由
export const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/h5',
    component: () => import('@/views/h5/index.vue')
  },
  {
    path: '/pc',
    component: () => import('@/views/index.vue')
  },
  {
    path: '',
    component: Layout
  }
];

// 动态路由，基于用户权限动态去加载
export const dynamicRoutes: RouteRecordRaw[] = [];

/**
 * 创建路由
 */
const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_CONTEXT_PATH),
  routes: constantRoutes,
  // 刷新时，滚动条位置还原
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { top: 0 };
  }
});

export default router;
