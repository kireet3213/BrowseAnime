<template>
  <v-autocomplete
    :items="items"
    append-inner-icon="mdi-microphone"
    auto-select-first
    class="flex-full-width"
    density="compact"
    item-props
    menu-icon=""
    placeholder="Search"
    prepend-inner-icon="mdi-magnify"
    rounded
    theme="light"
    variant="solo"
    bg-color="#ECEFF1"
  ></v-autocomplete>
</template>
<script setup lang="ts">
import { ref } from "vue";

const items = ref([
  {
    prependIcon: "mdi-clock-outline",
    title: "One Punch",
  },
  {
    prependIcon: "mdi-clock-outline",
    title: "Fullmetal Alchemist: Brotherhood",
  },
  {
    prependIcon: "mdi-clock-outline",
    title: "Gintama",
  },
  {
    prependIcon: "mdi-clock-outline",
    title: "Shingeki no Kyojin",
  },
  {
    prependIcon: "mdi-clock-outline",
    title: "Bleach: Sennen Kessen-hen",
  },
]);
</script>
<style></style>
