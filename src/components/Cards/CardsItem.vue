<template>
  <li
    class="item"
    :style="{ '--color-hover': colorHover ? colorHover : 'var(--base-color-hover)' }"
  >
    <VSkeletonLoader
      v-if="isLoading"
      theme="dark"
      :height="265"
    >
    </VSkeletonLoader>
    <a
      v-else
      href=""
      class="poster__wrap"
    >
      <img
        :src="imageSrc"
        class="poster"
        alt=""
      />
    </a>

    <VSkeletonLoader
      v-if="isLoading"
      theme="dark"
      type="list-item-two-line"
    >
    </VSkeletonLoader>
    <a
      v-else
      href=""
      class="title__wrap"
    >
      <h3 class="title">{{ titleEng || titleOriginal }}</h3>
      <span class="title__original">{{ titleEng ? titleOriginal : '' }}</span>
    </a>
  </li>
</template>

<script setup lang="ts">
type Props = {
  imageSrc?: string;
  colorHover?: string;
  titleEng?: string;
  titleOriginal?: string;
  isLoading: boolean;
};

defineProps<Props>();
</script>

<style scoped>
.item {
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: var(--color-white);
  &:hover {
    color: var(--color-hover);
  }
}
.poster {
  height: 100%;
  left: 0;
  object-fit: cover;
  animation: fade-in 1000ms;
  position: absolute;
  top: 0;
  width: 100%;
  &__wrap {
    background-color: var(--skeleton-base-color);
    background-color: var(--color-hover);
    border-radius: 4px;
    height: 265px;
    overflow: hidden;
    position: relative;
    width: 100%;
    z-index: 5;
  }
}

.title {
  font-size: 16px;
  font-weight: 600;
  line-height: 21px;
  margin: 0;
  text-align: start;
  color: inherit;
  transition: color 0.3s ease-in-out;

  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  &__original {
    font-size: 13px;
    font-weight: 400;
    text-align: start;
    color: var(--color-secondary);

    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
  &__wrap {
    display: flex;
    flex-direction: column;
    gap: 5px;
    color: inherit;
  }
}
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
