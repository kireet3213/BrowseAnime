<template>
  <v-carousel cycle color="white" interval="3000" height=670 :show-arrows="true" hide-delimiters>
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="getImageUrl(item.src)"
      cover
      max-height:400px
    >

  </v-carousel-item>
  </v-carousel>
</template>
<script setup lang="ts">
interface Props {
  items: Array<{ src: string }>;
}
defineProps<Props>();
function getImageUrl(name:string) {
  console.log(new URL(`../assets/${name}`, import.meta.url).href);

  return new URL(`../assets/${name}`, import.meta.url).href
}
</script>
<style></style>
