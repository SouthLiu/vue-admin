import { IMenus } from './model';

// 如果Layout是以import Layout from '@/layouts/index.vue'形式引入,打包会报错

export const menus: IMenus[] = [
  {
    name: 'Login',
    path: '/login',
    meta: {
      title: '登录',
      isHidden: true
    },
    component: () => import('@/pages/login/index.vue')
  },
  {
    name: 'Layout',
    path: '/',
    redirect: '/dashboard',
    meta: { isHidden: true },
    component: () => import('@/layouts/index.vue'),
    children: [
      {
        name: 'Dashboard',
        path: '/dashboard',
        meta: { title: '首页' },
        component: () => import('@/pages/dashboard/index.vue')
      },
    ]
  },
  {
    name: 'System',
    path: '/system',
    meta: {
      title: '系统管理',
      iconfont: 'icon-xitongguanli'
    },
    component: () => import('@/layouts/index.vue'),
    redirect: '/system/user',
    children: [
      {
        name: 'SystemUser',
        path: '/system/user',
        meta: {
          title: '用户管理',
          isKeepAlive: true
        },
        component: () => import('@/pages/system/user/index.vue')
      },
      {
        name: 'SystemRole',
        path: '/system/role',
        meta: {
          title: '角色管理',
          isKeepAlive: true
        },
        component: () => import('@/pages/system/role/index.vue')
      },
    ]
  }
]
