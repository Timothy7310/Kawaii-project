<template>
  <section class="staff">
    <h2 class="staff__title">Staff</h2>
    <MediaStaffList :staff="info.staff" />
  </section>
</template>

<script setup lang="ts">
import { MediaStaffEdge } from '@/app/types';
import MediaStaffList from '@/components/Media/MediaStaffList.vue';
defineProps<{ info: { staff: MediaStaffEdge } }>();
</script>

<style>
.staff__title {
  font-size: 24px;
  margin-bottom: 20px;
  color: var(--color-white);
}
</style>
