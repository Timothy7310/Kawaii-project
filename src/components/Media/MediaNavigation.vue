<template>
  <div class="media-navigation">
    <button
      class="media-navigation__button"
      :class="{ 'media-navigation__button--active': activeTab === tabs }"
      v-for="tabs in MediaActiveTabs"
      @click="({currentTarget}) => changeTab(currentTarget as EventTarget)"
      :data-type="tabs"
      >{{ capitalize(tabs) }}</button
    >
  </div>
</template>

<script setup lang="ts">
import { MediaActiveTabs } from '@/app/types';
import { ref } from 'vue';
import { capitalize } from '@/helpers/capitalize';

const emits = defineEmits(['changeTabs']);

const activeTab = ref<MediaActiveTabs>(MediaActiveTabs.Overview);

const changeTab = (target: EventTarget) => {
  if (!(target instanceof HTMLButtonElement)) {
    return;
  }
  activeTab.value = (target.dataset.type as MediaActiveTabs) || activeTab.value;
  emits('changeTabs', activeTab.value);
};
</script>

<style>
.media-navigation {
  grid-row: 2;
  grid-column: 1 / 3;
  display: flex;
  gap: 10px;
  justify-content: center;
  border-bottom: 1px solid var(--color-accent);
  &__button {
    color: var(--color-secondary);
    transition: color var(--base-animation);
    text-transform: capitalize;
    &:hover {
      color: var(--color-white);
    }
    &--active {
      color: var(--color-accent);
      &:hover {
        color: var(--color-accent);
      }
    }
  }
}
</style>
