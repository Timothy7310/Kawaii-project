<template>
  <AppWrapper :className="'inner__anime'">
    <CardsList
      :title="'Trending now'"
      :variables="{
        sort: MediaSort.TrendingDesc,
        type: MediaType.Manga,
      }"
    />
    <CardsList
      :title="'All time popular'"
      :variables="{ sort: MediaSort.PopularityDesc, type: MediaType.Manga }"
    />
  </AppWrapper>
</template>

<script setup lang="ts">
import { MediaSort, MediaType } from '@/__generated__/types';
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
