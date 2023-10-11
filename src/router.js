import { createRouter, createWebHistory } from 'vue-router';

import HomepageVue from './pages/Homepage.vue';
import GeneratedDrinks from './pages/GeneratedDrinks.vue';
import OverviewPage from './pages/OverviewPage.vue';
import DrinkDetails from './pages/DrinkDetails.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        redirect: '/start',
      },
      {
        name: 'start',
        path: '/start', // our-domain.com/teams => Teamslist
        component: HomepageVue,
        // alias: '/',
      },
      {
        name: 'generateddrinks',
        path: '/generateddrinks', // our-domain.com/teams => Teamslist
        component: GeneratedDrinks,
  
      },
      {
        name: 'overview',
        path: '/overview', // our-domain.com/teams => Teamslist
        component: OverviewPage,
  
      },
      {
        name: 'details',
        path: '/details/:drinkInfo/:id',
        props: {default: true},
        component: DrinkDetails,
      },
    ],
    linkActiveClass: 'active',
  });

  export default router;