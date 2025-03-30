const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'login', component: () => import('pages/LoginPage.vue') },
      { path: 'register', component: () => import('pages/RegisterPage.vue') },
      {
        path: 'dashboard',
        component: () => import('pages/DashboardPage.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'farms',
        component: () => import('pages/FarmsPage.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'sensors',
        component: () => import('pages/SensorsPage.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'history',
        component: () => import('pages/HistoryPage.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'account',
        component: () => import('pages/AccountPage.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'logout',
        component: () => import('pages/LogoutPage.vue'),
        meta: { requiresAuth: true },
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
