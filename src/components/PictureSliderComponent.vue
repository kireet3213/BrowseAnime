<template>
  <CarouselComponent :items="items" />
</template>
<script setup lang="ts">
import CarouselComponent from '@/layouts/BaseCarouselComponent.vue';
const items = [
  { src: "naruto2.jpg" },
  { src: "gojo.jpeg" },
  { src: "kilua.jpg" },
  { src: "hashira-all.jpg" },
  { src: "goku.jpg" },
  { src: "kurasaki.jpg" },
];
</script>
<style></style>
