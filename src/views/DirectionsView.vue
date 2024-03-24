<template>
  <div id="Directions">
    <div class="grid grid-cols-12 mt-4 shadow-md">
      <div class="col-span-2 mx-auto">

        <div>
          <ArrowLeftIcon size="35" />
        </div>
        <div class="h-16 mt-4 w-full">
          <div :class="[
            isPickupActive ? 'circle-black' : 'circle-gray'
            ,''
          ]"
          ></div>
          <div class="custom-line" />
          <div :class="[
            isPickupActive ? 'square-black' : 'square-gray'
            ,''
          ]"
          ></div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ArrowLeftIcon from 'vue-material-design-icons/ArrowLeft.vue'

const isPickupActive = ref(true)
</script>