<template>
<BaseNavigationDrawer :items="items" location="left"/>
</template>
<script setup lang="ts">
import BaseNavigationDrawer from '@/layouts/BaseNavigationDrawer.vue';
import { ref } from 'vue';

const items = ref([
  {
    title: "Categories",
    value: "foo",
  },
  {
    title: "Favourites",
    value: "Favourites",
  },
  {
    title: "Most Viewed",
    value: "Most Viewed",
  },
  {
    title: "Logout",
    value: "Logout",
  },
]);
</script>
<style>

</style>
