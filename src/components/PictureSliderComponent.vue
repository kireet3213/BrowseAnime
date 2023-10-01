<template>
  <CarouselComponent :items="items" />
</template>
<script setup lang="ts">
import CarouselComponent from '@/layouts/BaseCarouselComponent.vue';
const items = [
  { src: "all-anime-itchigo-kurosaki-iqgoc9lu4ulwtpbv.jpg" },
  { src: "all-anime-kaioken-goku-1ieoqpiw9ky2ays7.jpg" },
  { src: "all-anime-naruto-shippuden-characters-9abrv947f94pkmpq.jpg" },
  { src: "all-anime-ninja-character-naruto-2wcwj1v8i7g20lfw.jpg" },
  { src: "all-anime-tokyo-ghoul-ken-kaneki-wgismi5ivofqlsbr.jpg" },
];
</script>
<style></style>
