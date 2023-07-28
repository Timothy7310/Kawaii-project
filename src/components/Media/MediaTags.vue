<template>
  <div class="media-tags">
    <h2 class="media-tags__title">Tags</h2>
    <ul class="media-tags__list">
      <li
        v-for="tag in tags"
        class="media-tags__item"
      >
        <span
          v-if="tag?.name"
          class="media-tags__item-name"
        >
          {{ tag.name }}
        </span>
        <span
          v-if="tag?.rank"
          class="media-tags__item-rank"
        >
          {{ tag.rank }}%
        </span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  tags: Array<{ __typename: 'MediaTag'; name: string; rank?: number | null } | null> | null;
}>();
</script>

<style>
.media-tags {
  grid-row: 3;
  grid-column: 1;
  &__title {
    margin: 0px 0px 20px 0px;
    font-size: 24px;
  }
  &__list {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  &__item {
    display: flex;
    justify-content: space-between;
    gap: 5px;
    padding: 8px 10px;
    border-radius: 3px;
    font-size: 14px;
    background-color: var(--color-dark);
    color: var(--color-white);
    &-rank {
      color: var(--color-secondary);
    }
  }
}
</style>
