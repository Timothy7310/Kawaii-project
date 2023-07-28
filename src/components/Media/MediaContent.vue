<template>
  <div class="media-content">
    <MediaOverview
      :info="info"
      v-if="content === MediaActiveTabs.Overview"
    />
    <MediaStaff v-if="content === MediaActiveTabs.Staff" />
  </div>
</template>

<script setup lang="ts">
import { MediaStaffEdge, MediaCharacters, MediaTrailerType } from '@/app/types';
import { MediaActiveTabs } from '@/app/types';
import MediaOverview from './MediaOverview.vue';
import MediaStaff from './MediaStaff.vue';

type Props = {
  staff: MediaStaffEdge;
  characters: MediaCharacters;
  trailer: MediaTrailerType;
};

defineProps<{ content: MediaActiveTabs; info: Props }>();
</script>

<style>
.media-content {
  grid-row: 3;
  grid-column: 2;
  display: flex;
  flex-direction: column;
  gap: 40px;
}
</style>
