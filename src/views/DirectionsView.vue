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
            !isPickupActive ? 'square-black' : 'square-gray'
            ,''
          ]"
          ></div>
        </div>
        
      </div>
      
      <div class="col-span-10 pr-4">
        <div class="w-full mt-5"></div>
        <div class="mb-2 mt-5">
          <AutoCompleteInput
            theId="firstInput"
            v-model:input="pickup"
            placeholder="Enter pick-up location"
            @isActive="isPickupActive = true"
          />
        </div>
        <div class="mb-3">
          <AutoCompleteInput
            theId="secondInput"
            v-model:input="destination"
            placeholder="Where to ?"
            @isActive="isPickupActive = false"
          />
        </div>
      </div>

    </div>

    <div class="flex items-center border-b border-b-color-custom">
      <div class="bg-gray-400 mx-5 my-3.5 p-1.5 rounded-full">
        <MapMarkerIcon
          size="30"
          fillColor="#f5f5f5"
        />
      </div>
      <div class="">
        <div class="text-lg text-gray-600">
          London, UK
        </div>
        <div class="text-lg text-gray-400">
          London, UK
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ArrowLeftIcon from 'vue-material-design-icons/ArrowLeft.vue'
import MapMarkerIcon from 'vue-material-design-icons/MapMarker.vue'

import AutoCompleteInput from '@/components/AutoCompleteInput.vue'

const destination = ref('')
const isPickupActive = ref(true)
</script>