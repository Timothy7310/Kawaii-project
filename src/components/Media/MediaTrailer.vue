<template>
  <iframe
    v-if="trailer?.site === 'youtube'"
    width="521"
    height="230"
    :src="`https://www.youtube.com/embed/${trailer?.id}`"
    frameborder="0"
    allowfullscreen
  ></iframe>
</template>

<script setup lang="ts">
import { MediaTrailerType } from '@/app/types';
defineProps<{ trailer: MediaTrailerType }>();
</script>

<style></style>
