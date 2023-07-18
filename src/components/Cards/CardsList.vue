<template>
  <section
    v-if="loading"
    class="list__wrap"
  >
    <h2 class="title">{{ title }}</h2>
    <ul class="list">
      <CardsItem
        v-for="id in skeletonArr"
        :key="id"
        :isLoading="loading"
      />
    </ul>
  </section>

  <h2 v-if="error">Oops, some error with message: {{ error.message }}</h2>

  <section
    v-if="results"
    class="list__wrap"
  >
    <h2 class="title">{{ title }}</h2>
    <ul class="list">
      <CardsItem
        v-for="result in results"
        :key="result?.id"
        :colorHover="(result?.coverImage?.color as string)"
        :titleEng="result?.title?.english ?? ''"
        :titleOriginal="result?.title?.romaji ?? ''"
        :imageSrc="result?.coverImage?.large ?? ''"
        :isLoading="loading"
      />
    </ul>
  </section>
</template>

<script setup lang="ts">
import { MediaSort, MediaSeason, MediaType } from '@/__generated__/types';
import { computed, ref } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import CardsItem from '@/components/Cards/CardsItem.vue';
import { useCardsListQuery } from './__generated__/CardsListQuery';

type Props = {
  title: string;
  variables: {
    sort: MediaSort;
    type: MediaType;
    seasonYear?: number;
    season?: MediaSeason;
  };
};

const props = defineProps<Props>();

const { result, loading, error } = useCardsListQuery({ ...props.variables });

const results = computed(() => result.value?.Page?.media);
const skeletonArr = ref([uuidv4(), uuidv4(), uuidv4(), uuidv4(), uuidv4(), uuidv4()]);
</script>

<style scoped>
.list {
  display: grid;
  grid-gap: 28px 30px;
  grid-template-columns: repeat(6, 185px);
  justify-content: space-between;
  margin: 0;
  padding: 0;
  &__wrap {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}

.title {
  font-size: 20px;
  font-weight: 700;
  margin: 0;
  text-align: start;
}
</style>
