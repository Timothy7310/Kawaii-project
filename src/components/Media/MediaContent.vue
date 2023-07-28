<template>
  <MediaOverview v-if="content === MediaActiveTabs.Overview" />
  <MediaStaff v-if="content === MediaActiveTabs.Staff" />
</template>

<script setup lang="ts">
import { MediaActiveTabs } from '@/app/types';
import MediaOverview from './MediaOverview.vue';
import MediaStaff from './MediaStaff.vue';

defineProps<{ content: MediaActiveTabs }>();
</script>

<style></style>
