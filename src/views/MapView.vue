<template>
  <div id="MapView">
    <div id="map"></div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  console.log('Map View');
})
</script>