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
        path: 'trattamenti/fitoterapia',
        name: 'Fitoterapia',
        component: () => import('@/views/trattamenti/Fitoterapia.vue')
      },
      {
        path: 'trattamenti/aromaterapia',
        name: 'Aromaterapia',
        component: () => import('@/views/trattamenti/Aromaterapia.vue')
      },
      {
        path: 'trattamenti/taopatch',
        name: 'Taopatch',
        component: () => import('@/views/trattamenti/Taopatch.vue')
      },
      {
        path: 'trattamenti/emotional-freedom-technique',
        name: 'EFT (Emotional Freedom Technique)',
        component: () => import('@/views/trattamenti/EmotionalFreedomTechnique.vue')
      },
      {
        path: 'trattamenti/sabada-rebozo',
        name: 'Sabada e Rebozo',
        component: () => import('@/views/trattamenti/SabadaRebozo.vue')
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
        path: '/agenda',
        name: 'Agenda',
        component: () => import('@/views/Agenda.vue')
      },
      {
        path: '/agenda/:id',
        name: 'Dettaglio Agenda',
        component: () => import('@/views/DettaglioAgenda.vue')
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, savedPosition) {
    if (to.hash)
      return {
        el: to.hash,
        behavior: 'smooth'
      };
    else if (savedPosition)
      return savedPosition;
    else
      return { left: 0, top: 0 };
  }
});

export default router;