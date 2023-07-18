<template>
  <AppWrapper :className="'inner__anime'">
    <CardsList
      :title="'Trending now'"
      :variables="{
        sort: MediaSort.TrendingDesc,
        type: MediaType.Anime,
      }"
    />
    <CardsList
      :title="'Popular this season'"
      :variables="{
        sort: MediaSort.PopularityDesc,
        seasonYear: 2023,
        season: MediaSeason.Spring,
        type: MediaType.Anime,
      }"
    />
    <CardsList
      :title="'Upcoming next season'"
      :variables="{
        sort: MediaSort.PopularityDesc,
        seasonYear: 2023,
        season: MediaSeason.Summer,
        type: MediaType.Anime,
      }"
    />
    <CardsList
      :title="'All time popular'"
      :variables="{ sort: MediaSort.PopularityDesc, type: MediaType.Anime }"
    />
  </AppWrapper>
</template>

<script setup lang="ts">
import { MediaSort, MediaSeason, MediaType } from '@/__generated__/types';
import CardsList from '@/components/Cards/CardsList.vue';
</script>

<style>
.inner__anime {
  display: flex;
  flex-direction: column;
  justify-content: flex-start !important;
  gap: 40px;
}
</style>
