<template>
  <div class="media-head">
    <VSkeletonLoader
      v-if="info.isLoading"
      theme="dark"
      :height="325"
      :width="230"
      :min-width="230"
    >
    </VSkeletonLoader>
    <div
      v-else
      class="media-head__poster-wrap"
    >
      <img
        :src="info.coverImage?.large ?? ''"
        alt=""
        class="media-head__poster"
      />
    </div>
    <VSkeletonLoader
      v-if="info.isLoading"
      theme="dark"
      type="article"
      :width="'100%'"
      :style="{ 'align-items': 'flex-start' }"
    >
    </VSkeletonLoader>
    <div
      v-else
      class="media-head__text"
    >
      <h1 class="media-head__title">
        {{
          info.title?.english ??
          info.title?.native ??
          info.title?.romaji ??
          info.title?.userPreferred
        }}
      </h1>
      <p
        v-if="info.description"
        v-html="description"
        class="media-head__description"
      >
      </p>
      <button
        class="media-head__read-more"
        v-if="isBigDesc"
        @click.prevent="loadMore"
        >Read More</button
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { MediaCoverImage, MediaTitle, Scalars } from '@/__generated__/types';
import { sliceDescription } from '@/helpers/sliceDescription';
import { ref } from 'vue';
import { maxDescriptionLength } from '@/app/constants';

type Props = {
  coverImage?: MediaCoverImage | null;
  title?: MediaTitle | null;
  description?: Scalars['String']['output'] | null;
  isLoading: boolean;
};
const props = defineProps<{ info: Props }>();

const description = ref(sliceDescription(props.info.description ?? ''));

const isBigDesc = ref((props.info.description ?? '')?.length >= maxDescriptionLength);

const loadMore = () => {
  description.value = props.info.description ?? '';
  isBigDesc.value = false;
};
</script>

<style>
.media-head {
  display: flex;
  gap: 35px;
  width: 100%;
  &__poster {
    height: 100%;
    left: 0;
    object-fit: cover;
    animation: fade-in 1000ms;
    position: absolute;
    top: 0;
    width: 100%;
    &-wrap {
      align-self: flex-start;
      background-color: var(--color-media);
      border-radius: 5px;
      height: 325px;
      width: 100%;
      max-width: 230px;
      overflow: hidden;
      position: relative;
      z-index: 5;
    }
  }
  &__text {
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    gap: 15px;
    position: relative;
  }
  &__title {
    margin: 0;
    font-size: 32px;
    color: var(--color-media);
  }
  &__description {
    margin: 0;
    font-size: 18px;
  }
  &__read-more {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 40px;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    opacity: 0;
    background: var(--description-load-more-bg);
    transition: opacity var(--base-animation);
    color: var(--color-media);
    &:hover {
      opacity: 1;
    }
  }
}
</style>
