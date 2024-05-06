import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

import TestPage from '../views/TestPage.vue';
import PointsPage from '../views/PointsPage.vue';
import InspectionsPage from '../views/InspectionsPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/Inspections/Inspections'
  },
  // {
  //   path: '/folder/:id',
  //   component: () => import ('../views/FolderPage.vue')
  // },
  {
    path: '/Tests/:id',
    name: 'Tests',
    component: TestPage
  },
  {
    path: '/Points/:id',
    name: 'Points',
    component: PointsPage
  },
  {
    path: '/Inspections/:id',
    name: 'Inspections',
    component: InspectionsPage
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
