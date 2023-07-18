import { createApp, render, provide, h } from 'vue';
import '@/app/index.css';
import App from '@/app/App.vue';
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core';
import { DefaultApolloClient } from '@vue/apollo-composable';
import router from '@/app/router';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { VSkeletonLoader } from 'vuetify/labs/VSkeletonLoader';
import AppFooter from '@/components/AppFooter.vue';
import AppHeader from '@/components/AppHeader.vue';
import AppEyes from '@/shared/ui/AppEyes.vue';
import AppLogo from '@/shared/ui/AppLogo.vue';
import AppTotoro from '@/shared/ui/AppTotoro.vue';
import AppWrapper from '@/shared/ui/AppWrapper.vue';

const root = document.querySelector('#app') as Element;

// Add Apollo
const httpLink = createHttpLink({
  uri: 'https://graphql.anilist.co',
});
const cache = new InMemoryCache();
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});
const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },

  render: () => h(App),
});

// Add Vuetify
const vuetify = createVuetify({
  components: {
    ...components,
    VSkeletonLoader,
  },
  directives,
});

// Add basic components
app.component('AppFooter', AppFooter);
app.component('AppHeader', AppHeader);
app.component('AppEyes', AppEyes);
app.component('AppLogo', AppLogo);
app.component('AppTotoro', AppTotoro);
app.component('AppWrapper', AppWrapper);

app.use(router);
app.use(vuetify);
app.mount(root);
