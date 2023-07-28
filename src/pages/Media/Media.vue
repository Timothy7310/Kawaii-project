<template>
  <AppWrapper className="media__inner">
    <section
      class="media"
      v-if="loading"
    >
      <MediaHead
        :info="{
          isLoading: loading,
        }"
      />
    </section>
    <div v-else-if="error">error {{ error.message }}</div>
    <section
      v-else-if="media"
      class="media"
      :style="{ '--color-media': media.coverImage?.color ?? 'var(--base-color-hover)' }"
    >
      <MediaHead
        :info="{
          coverImage: media.coverImage,
          title: media.title,
          description: media.description,
          isLoading: loading,
        }"
      />
      <MediaNavigation activeTab="Overview" />
      <MediaTags
        :tags="media.tags"
        v-if="media.tags"
      />
      <div class="media-content">Overview</div>
    </section>
  </AppWrapper>
</template>

<script setup lang="ts">
import { useMediaPageQuery } from './__generated__/MediaPageQuery';
import { computed } from 'vue';
import MediaHead from '@/components/Media/MediaHead.vue';
import MediaTags from '@/components/Media/MediaTags.vue';
import MediaNavigation from '@/components/Media/MediaNavigation.vue';

const props = defineProps<{ id: string }>();

const { result, loading, error } = useMediaPageQuery({ id: +props.id });
const media = computed(() => result?.value?.Media);
</script>

<style>
.media {
  width: 100%;
  display: grid;
  grid-template-columns: 230px 1fr;
  grid-template-rows: max-content 50px 1fr;
  row-gap: 40px;
  &__inner {
    align-items: flex-start !important;
  }
}
</style>
