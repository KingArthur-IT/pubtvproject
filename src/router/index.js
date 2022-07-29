import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import ProfilePage from '@/views/ProfilePage.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'

import Favourite from '@/components/ProfilePage/Favourite.vue'
import FlashCard from '@/components/ProfilePage/FlashCard.vue'
import Settings from '@/components/ProfilePage/Settings.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      meta: { auth: false }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { auth: false }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: { auth: false }
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfilePage,
      meta: { auth: true },
      children: [
        {
          path: '',
          redirect: {name: 'settings'}
        },
        {
          path: 'favourite',
          name: 'favourite',
          component: Favourite,
        },
        {
          path: 'flash-card',
          name: 'flashcard',
          component: FlashCard,
        },
        {
          path: 'settings',
          name: 'settings',
          component: Settings,
        },
      ]
    },
  ]
})

export default router
