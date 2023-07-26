import Main from '@/pages/Main.vue';
import Anime from '@/pages/Anime.vue';
import Manga from '@/pages/Manga.vue';
import Media from '@/pages/Media/Media.vue';
import NotFound from '@/pages/NotFound.vue';

import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Main,
  },
  {
    path: '/anime',
    name: 'Anime',
    component: Anime,
  },
  {
    path: '/manga',
    name: 'Manga',
    component: Manga,
  },
  {
    path: '/manga/:id',
    name: 'MediaManga',
    props: true,
    component: Media,
  },
  {
    path: '/anime/:id',
    name: 'MediaAnime',
    props: true,
    component: Media,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
  },
];

const router = createRouter({ history: createWebHistory(), routes });

export default router;
