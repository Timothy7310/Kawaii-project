<template>
  <ul class="staff-list">
    <li
      v-for="person in staff"
      class="staff-item"
    >
      <img
        :src="person?.node?.image?.medium ?? ''"
        alt=""
        class="staff-item__avatar"
      />

      <h3 class="staff-item__name">{{ person?.node?.name?.full }}</h3>
      <span class="staff-item__role">{{ person?.role }}</span>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { MediaStaffEdge } from '@/app/types';
defineProps<{ staff: MediaStaffEdge }>();
</script>

<style>
.staff {
  &-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 20px;
    column-gap: 30px;
  }
  &-item {
    display: grid;
    grid-template-rows: max-content max-content;
    grid-template-columns: 68px 1fr;
    gap: 15px;
    background-color: var(--color-dark);
    border-radius: 4px;
    overflow: hidden;
    &__avatar {
      grid-row: 1 / 3;
      grid-column: 1;
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
