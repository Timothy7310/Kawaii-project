<template>
  <header class="header">
    <AppWrapper className="header__inner">
      <AppLogo />
      <HeaderNavigation />
      <HeaderAuth />
    </AppWrapper>
  </header>
</template>

<script setup lang="ts">
import HeaderNavigation from '@/widgets/HeaderNavigation.vue';
import HeaderAuth from '@/widgets/HeaderAuth.vue';
</script>

<style scoped>
.header__inner {
  display: grid;
  grid-template-columns: minmax(220px, min-content) 1fr minmax(220px, min-content);
  align-items: center;
  gap: 10px;
  padding: 20px 0px;
}
</style>
