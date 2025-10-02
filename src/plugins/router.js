import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home.vue')
      },
      {
        path: 'trattamenti/agopuntura',
        name: 'Agopuntura',
        component: () => import('@/views/trattamenti/Agopuntura.vue')
      },
      {
        path: 'trattamenti/fitoterapia-aromaterapia',
        name: 'Fitoterapia e Aromaterapia',
        component: () => import('@/views/trattamenti/FitoterapiaAromaterapia.vue')
      },
      {
        path: 'trattamenti/taopatch',
        name: 'Taopatch',
        component: () => import('@/views/trattamenti/Taopatch.vue')
      },
      {
        path: 'trattamenti/sobada-rebozo',
        name: 'Sobada e Rebozo',
        component: () => import('@/views/trattamenti/SobadaRebozo.vue')
      },
      {
        path: 'trattamenti/tecniche-complementari',
        name: 'Tecniche complementari',
        component: () => import('@/views/trattamenti/TecnicheComplementari.vue')
      },
      {
        path: '/chi-sono',
        name: 'ChiSono',
        component: () => import('@/views/ChiSono.vue')        
      },
      {
        path: '/contatti',
        name: 'Contatti',
        component: () => import('@/views/Contatti.vue')
      },
      {
        path: '/scopri-di-piu',
        name: 'ScopriDiPiu',
        component: () => import('@/views/ScopriDiPiu.vue')
      },
      {
        path: '/blog',
        name: 'Blog',
        component: () => import('@/views/Blog.vue')
      },
      {
        path: '/blog/:id',
        name: 'Dettaglio Blog',
        component: () => import('@/views/DettaglioBlog.vue')
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { left: 0, top: 0, behavior: 'smooth' };
  }
});

export default router;
