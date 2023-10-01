<template>
  <v-navigation-drawer :location=location temporary>
    <v-list border=true  :items="items" ></v-list>
  </v-navigation-drawer>
</template>
<script setup lang="ts">
interface Props {
  items: any;
  location: any;
}
defineProps<Props>();
</script>
<style scoped>
</style>
