import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

import TestPage from '../views/TestPage.vue';
import PointsPage from '../views/PointsPage.vue';
import InspectionsPage from '../views/InspectionsPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/folder/Inbox'
  },
  {
    path: '/folder/:id',
    component: () => import ('../views/FolderPage.vue')
  },
  {
    path: '/TestPage/:id',
    name: 'TestPage',
    component: TestPage
  },
  {
    path: '/PointsPage/:id',
    name: 'PointsPage',
    component: PointsPage
  },
  {
    path: '/InspectionsPage/:id',
    name: 'InspectionsPage',
    component: InspectionsPage
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
