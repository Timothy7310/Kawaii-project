<template>
  <section class="characters">
    <h2 class="characters__title overview-title">Characters</h2>
    <MediaCharactersList :characters="info.characters" />
  </section>
  <section class="staff">
    <h2 class="staff__title overview-title">Staff</h2>
    <MediaStaffList :staff="info.staff" />
  </section>
</template>

<script setup lang="ts">
import { MediaStaffEdge, MediaCharacters } from '@/app/types';
import MediaStaffList from '@/components/Media/MediaStaffList.vue';
import MediaCharactersList from '@/components/Media/MediaCharactersList.vue';
defineProps<{ info: { staff: MediaStaffEdge; characters: MediaCharacters } }>();
</script>

<style>
.overview-title {
  font-size: 24px;
  margin-bottom: 20px;
  color: var(--color-white);
}
</style>
