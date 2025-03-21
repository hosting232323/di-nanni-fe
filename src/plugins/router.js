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
        path: '/trattamenti',
        name: 'Trattamenti',
        component: () => import('@/views/Trattamenti.vue'),
        children: [
          {
            path: 'agopuntura',
            name: 'Agopuntura',
            component: () => import('@/views/trattamenti/Agopuntura.vue')
          },
          {
            path: 'fitoterapia',
            name: 'Fitoterapia',
            component: () => import('@/views/trattamenti/Fitoterapia.vue')
          },
          {
            path: 'aromaterapia',
            name: 'Aromaterapia',
            component: () => import('@/views/trattamenti/Aromaterapia.vue')
          },
          {
            path: 'tecniche-complementari',
            name: 'TecnicheComplementari',
            component: () => import('@/views/trattamenti/TecnicheComplementari.vue')
          }
        ]
      },
      {
        path: '/chi-sono',
        name: 'ChiSono',
        component: () => import('@/views/ChiSono.vue'),
        children: [
          {
            path: 'come-procedo',
            name: 'ComeProcedo',
            component: () => import('@/views/chi-sono/ComeProcedo.vue')
          },
          {
            path: 'la-mia-storia',
            name: 'LaMiaStoria',
            component: () => import('@/views/chi-sono/LaMiaStoria.vue')
          }
        ]
      },
      {
        path: '/contatti',
        name: 'Contatti',
        component: () => import('@/views/Contatti.vue'),
        children: [
          {
            path: 'scrivimi',
            name: 'Scrivimi',
            component: () => import('@/views/contatti/Scrivimi.vue')
          },
          {
            path: 'info',
            name: 'ContattiInfo',
            component: () => import('@/views/contatti/Info.vue')
          }
        ]
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
      },
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