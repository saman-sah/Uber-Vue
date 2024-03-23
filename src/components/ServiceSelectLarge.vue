<template>
  <div id="ServiceSelectLarge">
    <div class="w-full rounded-2xl bg-custom-1 h-custom">

      <div class="flex justify-between p-2">
        <div class="text-lg ml-2 text-gray-900 mt-14">
          {{ text }}
        </div>
        <div class="mt-3 mr-1">
          <img 
            :src="'img/uber/'+ image +'.png'"
            alt=""
            :width="imageWidth"
          >
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { toRefs, defineProps } from 'vue'
const props = defineProps({
  text: {
    type: String,
    default: ''
  },
  imageWidth: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    default: ''
  }
})
const { text, imageWidth, image } = toRefs(props)
</script>