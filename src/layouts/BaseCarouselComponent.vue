<template>
  <v-carousel cycle color="white" interval="3000" :show-arrows="true">
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
      cover
      max-height:300px
    >

  </v-carousel-item>
  </v-carousel>
</template>
<script setup lang="ts">
interface Props {
  items: Array<{ src: string }>;
}
defineProps<Props>();
</script>
<style></style>
