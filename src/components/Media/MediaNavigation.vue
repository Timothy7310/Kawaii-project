<template>
  <div class="media-navigation">
    <!-- TODO: сделать красиво) -->
    <button
      class="media-navigation__button"
      :class="{ 'media-navigation__button--active': prop.activeTab === 'Overview' }"
      >Overview</button
    >
    <button
      class="media-navigation__button"
      :class="{ 'media-navigation__button--active': prop.activeTab === 'Watch' }"
      >Watch</button
    >
    <button
      class="media-navigation__button"
      :class="{ 'media-navigation__button--active': prop.activeTab === 'Characters' }"
      >Characters</button
    >
    <button
      class="media-navigation__button"
      :class="{ 'media-navigation__button--active': prop.activeTab === 'Staff' }"
      >Staff</button
    >
    <button
      class="media-navigation__button"
      :class="{ 'media-navigation__button--active': prop.activeTab === 'Reviews' }"
      >Reviews</button
    >
    <button
      class="media-navigation__button"
      :class="{ 'media-navigation__button--active': prop.activeTab === 'Stats' }"
      >Stats</button
    >
    <button
      class="media-navigation__button"
      :class="{ 'media-navigation__button--active': prop.activeTab === 'Social' }"
      >Social</button
    >
  </div>
</template>

<script setup lang="ts">
type Props = {
  activeTab: 'Overview' | 'Watch' | 'Characters' | 'Staff' | 'Reviews' | 'Stats' | 'Social';
};
const prop = defineProps<Props>();
</script>

<style>
.media-navigation {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin: 40px 0px;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--color-accent);
  &__button {
    color: var(--color-secondary);
    transition: color var(--base-animation);
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
