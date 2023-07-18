<template lang="">
  <div class="bounding">
    <div
      class="inner"
      :class="className ?? ''"
    >
      <slot></slot>
    </div>
  </div>
</template>
<script setup lang="ts">
type Props = {
  className?: string;
};

defineProps<Props>();
</script>
<style lang="css">
.bounding {
  margin: 0 auto;
  width: 100%;
  max-width: 1920px;
  padding: 0 20px;
  height: 100%;
}

.inner {
  height: inherit;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
