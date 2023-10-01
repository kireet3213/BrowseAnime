<template>
  <div :class="['text-h4', 'pa-5', 'font-weight-medium']">
    {{ heading }}
  </div>
</template>
<script setup lang="ts">
interface Props {
  heading: any;
}
defineProps<Props>();
</script>
<style></style>
