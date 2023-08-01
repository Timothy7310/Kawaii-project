<template>
  <section class="relations">
    <h2 class="relations__title overview-title">Relations</h2>
    <ul class="relations__list">
      <li
        v-for="relation in relations"
        class="relations__item"
      >
        <router-link
          :to="{
            name: isManga(relation?.node?.type ?? MediaType.Anime) ? 'MediaManga' : 'MediaAnime',
            params: { id: relation?.node?.id },
          }"
          tabindex="-1"
        >
          <img
            :src="relation?.node?.coverImage?.medium ?? ''"
            alt=""
            class="relations__item-poster"
          />
        </router-link>
        <div class="relations__item-text">
          <span class="relations__item-relation">
            {{ transformUnderlineText(relation?.node?.status ?? '', capitalize) }}
          </span>
          <router-link
            :to="{
              name: isManga(relation?.node?.type ?? MediaType.Anime) ? 'MediaManga' : 'MediaAnime',
              params: { id: relation?.node?.id },
            }"
          >
            <h3 class="relations__item-title">
              {{
                relation?.node?.title?.english ??
                relation?.node?.title?.userPreferred ??
                relation?.node?.title?.romaji ??
                relation?.node?.title?.native
              }}
            </h3>
          </router-link>
          <div class="relations__item-info">
            <span class="relations__item-type">{{ capitalize(relation?.node?.type ?? '') }}</span>
            <span class="relations__item-status">
              {{ transformUnderlineText(relation?.node?.status ?? '', capitalize) }}
            </span>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { MediaType } from '@/__generated__/types';
import { MediaRelationsType } from '@/app/types';
import { capitalize } from '@/helpers/capitalize';
import { transformUnderlineText } from '@/helpers/transformUnderlineText';

defineProps<{ relations: MediaRelationsType }>();

const isManga = (type: MediaType) => {
  return type === MediaType.Manga;
};
</script>

<style>
.relations {
  &__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 30px;
    row-gap: 20px;
  }
  &__item {
    background-color: var(--color-dark);
    border-radius: 10px;
    display: grid;
    gap: 15px;
    grid-template-columns: 85px 1fr;
    &-poster {
      height: 100%;
      object-fit: cover;
    }
    &-text {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 5px;
      padding: 10px 10px 10px 0px;
    }
    &-relation {
      color: var(--color-media);
      font-size: 12px;
    }
    &-title {
      margin: 0;
      font-size: 16px;
      transition: var(--base-animation) color;
      &:hover {
        color: var(--color-media);
      }
    }
    &-info {
      margin-top: auto;
      display: flex;
      gap: 10px;
      color: var(--color-secondary);
      font-size: 12px;
    }
  }
}
</style>
