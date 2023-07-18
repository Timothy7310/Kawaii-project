<script setup lang="ts"></script>

<template>
  <AppHeader />
  <main><router-view :key="`${$route.path}${JSON.stringify($route.query)}`" /></main>
  <AppFooter />
</template>

<style scoped></style>
