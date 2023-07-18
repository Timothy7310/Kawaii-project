<template>
  <AppWrapper :className="'inner__404'">
    <h1>Oops!</h1>
    <p>Sorry, an unexpected error has occurred.</p>
  </AppWrapper>
</template>

<script setup lang="ts"></script>

<style>
.inner__404 {
  flex-direction: column;
  justify-content: flex-start !important;
}
</style>
