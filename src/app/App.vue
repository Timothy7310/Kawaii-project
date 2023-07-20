<script setup lang="ts"></script>

<template>
  <AppHeader />
  <router-view :key="`${$route.path}${JSON.stringify($route.query)}`" />
  <AppFooter />
</template>

<style scoped></style>
