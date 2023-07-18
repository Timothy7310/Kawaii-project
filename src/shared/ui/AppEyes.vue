<template>
  <div
    class="eyes"
    :class="{ 'eyes--animate': isAnimate }"
  >
    <div class="eye">
      <div class="eye__pupil"></div>
    </div>
    <div class="eye">
      <div class="eye__pupil"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ isAnimate: boolean }>();
</script>

<style scoped>
.eyes {
  /*HERE you can change colors*/
  --sclera: #fff;
  --pupil: #000;
  --pupil-shine: #fff;
  --border: #000;
  --blink: #000;

  display: flex;
  gap: 0px;
  align-items: center;
  &--animate {
    .eye::before {
      animation: blink 4s infinite;
    }
    .eye::after {
      animation: blink 4s infinite;
    }
    .eye__pupil {
      animation: move_eye_pupil 1.5s infinite;
    }
    .eye__pupil::after {
      animation: move_eye_pupil_shine 1.5s infinite;
    }
  }
}
.eye {
  /*HERE you can change size of eyes*/
  height: 18px;
  aspect-ratio: 3 / 6;
  border-radius: 15px;
  background-color: var(--sclera);
  border: 1px solid var(--border);
  position: relative;
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    background-color: var(--blink);
    width: 100%;
    z-index: 2;
  }
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    background-color: var(--blink);
    width: 100%;
    z-index: 2;
  }
  &__pupil {
    width: 80%;
    aspect-ratio: 1 / 1;
    background-color: var(--pupil);
    border-radius: 100%;
    position: absolute;
    left: 0;
    bottom: 3px;
  }
  &__pupil::after {
    content: '';
    position: absolute;
    width: 30%;
    background-color: var(--pupil-shine);
    aspect-ratio: 1 / 1;
    border-radius: 100%;
    top: 1px;
    right: 1.5px;
  }
}

@keyframes move_eye_pupil {
  0% {
    transform: translateX(0%);
  }
  50% {
    transform: translateX(25%);
  }
  100% {
    transform: translateX(0%);
  }
}

@keyframes move_eye_pupil_shine {
  0% {
    transform: translateX(-85%);
  }
  50% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-85%);
  }
}

@keyframes blink {
  0% {
    height: 0%;
  }

  10% {
    height: 0%;
  }

  20% {
    height: 0%;
  }

  30% {
    height: 0%;
  }

  40% {
    height: 0%;
  }

  50% {
    height: 50%;
  }

  60% {
    height: 0%;
  }

  70% {
    height: 0%;
  }

  80% {
    height: 0%;
  }

  90% {
    height: 0%;
  }

  100% {
    height: 0%;
  }
}
</style>
