<template>
  <div class="media-data">
    <h2 class="media-data__title visually-hidden">Data</h2>
    <ul class="media-data__list">
      <li
        v-if="Boolean(data.airing?.edges?.length)"
        class="media-data__item media-data__item"
      >
        <h3 class="media-data__item-title media-data__item-title--airing">Airing</h3>
        <span
          v-for="episode in data.airing?.edges"
          :title="frendlyDate"
          class="media-data__item-text media-data__item-text--airing"
          >{{ `Ep ${episode?.node?.episode}: ${timeBeforeAiring}` }}</span
        >
      </li>

      <li
        v-if="data.format"
        class="media-data__item"
      >
        <h3 class="media-data__item-title">Format</h3>
        <span class="media-data__item-text">{{ data.format }}</span>
      </li>

      <li
        v-if="data.episodes"
        class="media-data__item"
      >
        <h3 class="media-data__item-title">Episodes</h3>
        <span class="media-data__item-text">{{ data.episodes }}</span>
      </li>

      <li
        v-if="data.duration"
        class="media-data__item"
      >
        <h3 class="media-data__item-title">Episode Duration</h3>
        <span class="media-data__item-text">{{ data.duration }}</span>
      </li>

      <li
        v-if="data.status"
        class="media-data__item"
      >
        <h3 class="media-data__item-title">Status</h3>
        <span class="media-data__item-text">{{ data.status }}</span>
      </li>

      <li
        v-if="data.startDate?.day && data.startDate.month && data.startDate.year"
        class="media-data__item"
      >
        <h3 class="media-data__item-title">Start Date</h3>
        <span class="media-data__item-text">
          {{ `${data.startDate.day}.${data.startDate.month}.${data.startDate.year}` }}
        </span>
      </li>

      <li
        v-if="data.endDate?.day && data.endDate?.month && data.endDate?.year"
        class="media-data__item"
      >
        <h3 class="media-data__item-title">End Date</h3>
        <span class="media-data__item-text">
          {{ `${data.endDate?.day}.${data.endDate?.month}.${data.endDate?.year}` }}
        </span>
      </li>

      <li
        v-if="data.season && data.seasonYear"
        class="media-data__item"
      >
        <h3 class="media-data__item-title">Season</h3>
        <span class="media-data__item-text">{{ `${data.season} ${data.seasonYear}` }}</span>
      </li>

      <li
        v-if="data.averageScore"
        class="media-data__item"
      >
        <h3 class="media-data__item-title">Average Score</h3>
        <span class="media-data__item-text">{{ `${data.averageScore}%` }}</span>
      </li>

      <li
        v-if="data.meanScore"
        class="media-data__item"
      >
        <h3 class="media-data__item-title">Mean Score</h3>
        <span class="media-data__item-text">{{ `${data.meanScore}%` }}</span>
      </li>

      <li
        v-if="data.popularity"
        class="media-data__item"
      >
        <h3 class="media-data__item-title">Popularity</h3>
        <span class="media-data__item-text">{{ data.popularity }}</span>
      </li>

      <li
        v-if="data.favourites"
        class="media-data__item"
      >
        <h3 class="media-data__item-title">Favorites</h3>
        <span class="media-data__item-text">{{ data.favourites }}</span>
      </li>

      <li
        v-if="Boolean(data.studios?.nodes?.length)"
        class="media-data__item"
      >
        <h3 class="media-data__item-title">Studios</h3>
        <span
          v-for="studio in data.studios?.nodes"
          class="media-data__item-text"
        >
          {{ studio?.name }}
        </span>
      </li>

      <li
        v-if="data.source"
        class="media-data__item"
      >
        <h3 class="media-data__item-title">Source</h3>
        <span class="media-data__item-text">{{ data.source }}</span>
      </li>

      <li
        v-if="data.hashtag"
        class="media-data__item"
      >
        <h3 class="media-data__item-title">Hashtag</h3>
        <a
          :href="`https://vk.com/feed?q=%23${data.hashtag.slice(1)}&section=search`"
          class="media-data__item-text media-data__item-text--link"
          target="_blank"
          rel="nofollow noopener"
          >{{ data.hashtag }}</a
        >
      </li>

      <li
        v-if="Boolean(data.genres?.length)"
        class="media-data__item"
      >
        <h3 class="media-data__item-title">Genres</h3>
        <span
          v-for="genre in data.genres"
          class="media-data__item-text"
          >{{ genre }}</span
        >
      </li>

      <li
        v-if="data.title?.romaji"
        class="media-data__item"
      >
        <h3 class="media-data__item-title">Romaji</h3>
        <span class="media-data__item-text">{{ data.title?.romaji }}</span>
      </li>

      <li
        v-if="data.title?.english"
        class="media-data__item"
      >
        <h3 class="media-data__item-title">English</h3>
        <span class="media-data__item-text">{{ data.title?.english }}</span>
      </li>

      <li
        v-if="data.title?.native"
        class="media-data__item"
      >
        <h3 class="media-data__item-title">Native</h3>
        <span class="media-data__item-text">{{ data.title?.native }}</span>
      </li>

      <li
        v-if="Boolean(data.synonyms?.length)"
        class="media-data__item"
      >
        <h3 class="media-data__item-title">Synonyms</h3>
        <span
          v-for="synonym in data.synonyms"
          class="media-data__item-text"
        >
          {{ synonym }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { MediaDataType } from '@/app/types';
import { computed } from 'vue';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import localizedDate from 'dayjs/plugin/localizedFormat';
dayjs.extend(relativeTime);
dayjs.extend(localizedDate);

const props = defineProps<{ data: MediaDataType }>();

const timeBeforeAiring = computed(() => {
  const firstEp = props.data.airing?.edges?.[0];
  const firstEpAiringTime = (firstEp?.node?.airingAt as number) * 1000;

  return dayjs(new Date()).to(firstEpAiringTime, true);
});

const frendlyDate = computed(() => {
  const firstEp = props.data.airing?.edges?.[0];
  return dayjs.unix(firstEp?.node?.airingAt as number).format('YYYY-MM-DD HH:mm Z');
});
</script>

<style>
.media-data {
  padding: 18px;
  background-color: var(--color-dark);
  border-radius: 4px;
  &__title {
    margin: 0px 0px 20px 0px;
    font-size: 24px;
  }
  &__list {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  &__item {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
    &-title {
      font-size: 16px;
      margin: 0;
      color: var(--color-white);
      font-weight: 600;
      &--airing {
        color: var(--color-accent);
      }
    }
    &-text {
      font-size: 12px;
      color: var(--color-secondary);
      font-weight: 400;
      &--link {
        transition: var(--base-animation) color;
        &:hover {
          color: var(--color-media);
        }
      }
      &--airing {
        color: var(--color-accent);
      }
    }
  }
}
</style>
