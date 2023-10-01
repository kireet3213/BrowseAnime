<template>
  <CarouselComponent :items="items" />
</template>
<script setup lang="ts">
import CarouselComponent from '@/layouts/BaseCarouselComponent.vue';
const items = [
  { src: "../src/assets/naruto2.jpg" },
  { src: "../src/assets/gojo.jpeg" },
  { src: "../src/assets/kilua.jpg" },
  { src: "../src/assets/hashira-all.jpg" },
  { src: "../src/assets/goku.jpg" },
  { src: "../src/assets/kurasaki.jpg" },
];
</script>
<style></style>
