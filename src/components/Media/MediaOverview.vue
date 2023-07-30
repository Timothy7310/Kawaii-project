<template>
  <section
    v-if="info.characters"
    class="characters"
  >
    <h2 class="characters__title overview-title">Characters</h2>
    <MediaCharactersList :characters="info.characters" />
  </section>

  <section
    v-if="info.staff"
    class="staff"
  >
    <h2 class="staff__title overview-title">Staff</h2>
    <MediaStaffList :staff="info.staff" />
  </section>

  <section
    v-if="info.trailer"
    class="trailer"
  >
    <h2 class="trailer__title overview-title">Trailer</h2>
    <MediaTrailer :trailer="info.trailer" />
  </section>

  <MediaRelations
    v-if="info.relations"
    :relations="info.relations"
  />
</template>

<script setup lang="ts">
import { MediaStaffEdge, MediaCharacters, MediaTrailerType, MediaRelationsType } from '@/app/types';
import MediaStaffList from '@/components/Media/MediaStaffList.vue';
import MediaCharactersList from '@/components/Media/MediaCharactersList.vue';
import MediaTrailer from '@/components/Media/MediaTrailer.vue';
import MediaRelations from '@/components/Media/MediaRelations.vue';

defineProps<{
  info: {
    relations: MediaRelationsType;
    staff: MediaStaffEdge;
    characters: MediaCharacters;
    trailer: MediaTrailerType;
  };
}>();
</script>

<style>
.overview-title {
  font-size: 24px;
  margin-bottom: 20px;
  color: var(--color-white);
}
</style>
