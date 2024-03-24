<template>
  <div id="ServiceSelectSmall">

    <div class="w-full rounded-2xl bg-custom-1 h-custom-sm relative">      
      <div class="absolute top-1/3 left-1/3 transform -translate-x-1/4 -translate-y-1/4 mt-0.5">
        <img 
          :src="'img/uber/'+ image +'.png'"
          width="55"
        >
      </div>
    </div>
    <div class="text-xs text-center mt-2 text-gray-900">
      {{ text }}
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
  image: {
    type: String,
    default: ''
  },
})
const { text, image } = toRefs(props)
</script>