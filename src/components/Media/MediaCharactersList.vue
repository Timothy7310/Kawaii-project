<template>
  <ul class="characters-list">
    <li
      v-for="character in characters"
      class="characters-item"
    >
      <img
        :src="character?.node?.image?.medium ?? ''"
        alt=""
        class="characters-item__avatar"
      />

      <h3 class="characters-item__name">{{
        character?.node?.name?.full ?? character?.node?.name?.userPreferred
      }}</h3>
      <span
        v-if="character?.role"
        class="characters-item__role"
        >{{ character?.role }}</span
      >
    </li>
  </ul>
</template>

<script setup lang="ts">
import { MediaCharacters } from '@/app/types';
defineProps<{ characters: MediaCharacters }>();
</script>

<style>
.characters {
  &-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 20px;
    column-gap: 30px;
  }
  &-item {
    display: grid;
    grid-template-rows: max-content 1fr;
    grid-template-columns: 68px 1fr;
    gap: 15px;
    background-color: var(--color-dark);
    border-radius: 4px;
    overflow: hidden;
    &__avatar {
      grid-row: 1 / 3;
      grid-column: 1;
      height: 100%;
      object-fit: cover;
    }
    &__name {
      grid-row: 1;
      grid-column: 2;
      margin: 10px 0px 0px 0px;
      font-size: 18px;
    }
    &__role {
      grid-row: 2;
      grid-column: 2;
      align-self: end;
      margin-bottom: 10px;
      font-size: 14px;
      color: var(--color-secondary);
    }
  }
}
</style>
