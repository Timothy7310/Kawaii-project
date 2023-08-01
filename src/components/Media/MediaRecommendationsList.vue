<template>
  <ul
    class="recommendations__list"
    ref="list"
  >
    <li
      v-for="recommendation in recommendations"
      class="recommendations__item"
      :style="{
        '--color-recommendation': hexToRgb(
          recommendation?.node?.mediaRecommendation?.coverImage?.color ||
            colorMedia ||
            colorAccent ||
            ''
        ),
      }"
    >
      <router-link
        :to="{ name: 'MediaAnime', params: { id: recommendation?.node?.mediaRecommendation?.id } }"
        tabindex="-1"
      >
        <img
          :src="recommendation?.node?.mediaRecommendation?.coverImage?.extraLarge ?? ''"
          alt=""
          class="recommendations__item-poster"
        />
      </router-link>

      <router-link
        :to="{ name: 'MediaAnime', params: { id: recommendation?.node?.mediaRecommendation?.id } }"
      >
        <h3 class="recommendations__item-title">
          {{
            recommendation?.node?.mediaRecommendation?.title?.english ??
            recommendation?.node?.mediaRecommendation?.title?.romaji
          }}
        </h3>
      </router-link>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { MediaRecommendationsType } from '@/app/types/index';
import { hexToRgb } from '@/helpers/hexToRgb';
import { ref, onMounted, computed } from 'vue';

defineProps<{ recommendations: MediaRecommendationsType }>();

const list = ref<HTMLElement | null>(null);
const colorAccent = ref<string>('');
const colorMedia = ref<string>('');

onMounted(() => {
  const element = list.value ?? document.documentElement;
  colorAccent.value = getComputedStyle(element).getPropertyValue('--color-accent');
  colorMedia.value = getComputedStyle(element).getPropertyValue('--color-media');
});
</script>

<style>
.recommendations {
  &__list {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: 20px;
  }
  &__item {
    display: flex;
    flex-direction: column;
    gap: 10px;
    &-poster {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 5px;
      overflow: hidden;
      aspect-ratio: 9 / 13;
      box-shadow: 0 4px 4px rgba(var(--color-recommendation), 0.05);
      transition: box-shadow var(--base-animation);
    }
    &-title {
      font-size: 18px;
      margin: 0;
      transition: color var(--base-animation);
      &:hover {
        color: rgb(var(--color-recommendation));
      }
    }
    &:hover {
      & .recommendations__item-poster {
        box-shadow: 0 14px 30px rgba(var(--color-recommendation), 0.3),
          0 4px 4px rgba(var(--color-recommendation), 0.05);
      }
    }
  }
}
</style>
