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
      <MediaNavigation @changeTabs="(value) => (activeTab = value)" />
      <MediaTags
        :tags="media.tags"
        v-if="media.tags"
      />
      <MediaContent
        :info="{
          staff: media.staff?.edges,
          characters: media.characters?.edges,
          trailer: media.trailer,
        }"
        :content="activeTab"
      />
    </section>
  </AppWrapper>
</template>

<script setup lang="ts">
import { MediaActiveTabs } from '@/app/types';
import { useMediaPageQuery } from './__generated__/MediaPageQuery';
import { computed, ref } from 'vue';
import MediaHead from '@/components/Media/MediaHead.vue';
import MediaTags from '@/components/Media/MediaTags.vue';
import MediaNavigation from '@/components/Media/MediaNavigation.vue';
import MediaContent from '@/components/Media/MediaContent.vue';

const props = defineProps<{ id: string }>();
const activeTab = ref<MediaActiveTabs>(MediaActiveTabs.Overview);

const { result, loading, error } = useMediaPageQuery({ id: +props.id });
const media = computed(() => result?.value?.Media);
</script>

<style>
.media {
  width: 100%;
  display: grid;
  grid-template-columns: 230px 1fr;
  grid-template-rows: max-content 40px 1fr;
  gap: 40px;
  &__inner {
    align-items: flex-start !important;
  }
}
</style>
