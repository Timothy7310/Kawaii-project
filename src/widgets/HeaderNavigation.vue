<template>
  <nav>
    <ul class="nav__list">
      <li>
        <router-link
          class="nav__link"
          :to="{ name: 'Anime' }"
          @mouseover="isAnimate = true"
          @mouseleave="isAnimate = false"
        >
          Anime <AppEyes :isAnimate="isAnimate" />
        </router-link>
      </li>
      <li>
        <router-link
          class="nav__link"
          :to="{ name: 'Manga' }"
        >
          Manga 📖
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isAnimate = ref(false);
</script>

<style scoped>
.nav__list {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.nav__link {
  color: var(--color-white);
  font-size: 21px;
  transition: color var(--base-animation);
  display: flex;
  align-items: center;
  gap: 5px;
  &:hover {
    color: var(--color-accent);
  }
  &.router-link-active {
    color: var(--color-accent);
  }
}
</style>
