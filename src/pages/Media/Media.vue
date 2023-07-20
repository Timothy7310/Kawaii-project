<template>
  <AppWrapper>
    <div v-if="loading">loading...</div>
    <div v-if="error">error {{ error.message }}</div>
    <div v-if="result.Media">
      {{ media.title.english }}
    </div>
  </AppWrapper>
</template>

<script setup lang="ts">
import { useMediaPageQuery } from './__generated__/MediaPageQuery';
import { computed } from 'vue';

const props = defineProps<{ id: number }>();

const { result, loading, error } = useMediaPageQuery({ id: props.id });
const media = computed(() => result.value.Media);
</script>

<style scoped></style>
