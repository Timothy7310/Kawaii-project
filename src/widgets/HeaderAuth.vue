<template>
  <router-link
    class="auth"
    to="/auth"
    @mouseover="isAnimate = true"
    @mouseleave="isAnimate = false"
  >
    Sign In <AppTotoro :isAnimate="isAnimate" /> Sign Up
  </router-link>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isAnimate = ref(false);
</script>

<style scoped>
.auth {
  font-size: 18px;
  color: var(--color-secondary);
  transition: color var(--base-animation);
  display: flex;
  gap: 5px;
  align-items: center;
  justify-self: end;
  &:hover {
    color: var(--color-accent);
    & .totoro {
      animation: squish_body 2s infinite;
    }
  }
}
</style>
