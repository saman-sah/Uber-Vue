<template>
  <div
    id="AutoCompleteInput"
    class="flex items-center"
  >
    <input
      :id="theId"
      v-model="inputComputed"
      @click="emit('isActive', true)"
      type="text"
      class="text-md bg-gray-100 appearance-none w-full py-2.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:bg-gray-200"
      :placeholder="placeholder"
      autocomplete="off"
    >
    <WindowCloseIcon
      size="30"
      fillColor="2e2e2d"
      @click="emit('clearInput')"
    />
  </div>
</template>

<script setup>
import { toRefs, computed, defineProps, defineEmits } from 'vue';

import WindowCloseIcon from 'vue-material-design-icons/WindowClose.vue'

const emit = defineEmits([
  'update:input',
  'clearInput',
  'isActive'
])

const props = defineProps({
  theId: {
    type: String,
    default: ''
  },
  input: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  }
})

const { theId, input, placeholder }  = toRefs(props)

const inputComputed = computed({
  get: () => input.value,
  set: (val) => emit('update:input', val)
})
</script>