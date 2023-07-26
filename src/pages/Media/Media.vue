<template>
  <AppWrapper>
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
      <MediaTags
        :tags="media.tags"
        v-if="media.tags"
      />
    </section>
  </AppWrapper>
</template>

<script setup lang="ts">
import { useMediaPageQuery } from './__generated__/MediaPageQuery';
import { computed } from 'vue';
import MediaHead from '@/components/Media/MediaHead.vue';
import MediaTags from '@/components/Media/MediaTags.vue';

const props = defineProps<{ id: string }>();

const { result, loading, error } = useMediaPageQuery({ id: +props.id });
const media = computed(() => result?.value?.Media);
</script>

<style>
.media {
  width: 100%;
}
</style>
