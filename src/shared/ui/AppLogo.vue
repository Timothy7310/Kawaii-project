<template>
  <router-link
    class="logo"
    :to="{ name: 'Home' }"
  >
    <h1 class="logo__text"> Kawaii <span class="logo__span">project</span> </h1>
  </router-link>
</template>

<script setup lang="ts"></script>

<style>
.logo {
  justify-self: start;
  &__text {
    display: flex;
    flex-direction: column;
    font-size: 24px;
    margin: 0;
    color: var(--color-white);
    transition: var(--base-animation) color;
  }
  &__span {
    font-size: 18px;
    color: inherit;
    font-weight: 400;
    transition: var(--base-animation) color;
  }
  :hover {
    &.logo__text {
      & .logo__span {
        color: var(--color-accent);
      }
    }
  }
}
</style>
