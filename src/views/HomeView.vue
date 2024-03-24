<template>
  <div
    id="Home" 
    class="flex flex-col h-screen"
  >
    <div class="m-3 mb-auto">

      <div class="my-20">
        <img 
          src="/img/uber/uber2.svg" 
          alt=""
          width="150"
        >
      </div>
      <div class="grid grid-cols-2 gap-3 my-3">
        <ServiceSelectLarge 
          text="Ride"
          image-width="74"
          image="ride"
        />
        <ServiceSelectLarge 
          text="Food"
          image-width="72"
          image="food"
          promo
        />
      </div>
      <div class="grid grid-cols-4 gap-3 my-3">
        <ServiceSelectSmall 
          text="2 Wheels"
          image="2wheels"
        />
        <ServiceSelectSmall 
          text="Transit"
          image="transit"
        />
        <ServiceSelectSmall 
          text="Reserve"
          image="reserve"
        />
        <ServiceSelectSmall 
          text="Travel"
          image="travel"
        />
      </div>
      <div class="w-full bg-custom-1 h-14 rounded-full flex items-center p-3">
        <MagnifyIcon size="40" />
        <div class="ml-3 text-xs font-semibold text-gray-700">
          Enter pickup point
        </div>
      </div>
      
    </div>

    <footer class="w-full z-50 flex justify-around p-1 mb-2 border-t-2 border-t-gray-200">
      <div class="grid place-items-center">
        <HomeIcon
          size="30"
          fillColor="#1f1e1e"
        />
        <div class="w-full -mt-1 text-xs text-center text-gray-800 font-semibold">
          Home
        </div>
      </div>
      <div class="grid place-items-center">
        <MapMarkerIcon
          size="30"
          fillColor="#b3b1b1"
        />
        <div class="w-full -mt-1 text-xs text-center text-gray-400 font-semibold">
          Destination
        </div>
      </div>
    </footer>

  </div>
</template>

<script setup>
import HomeIcon from 'vue-material-design-icons/Home.vue'
import MagnifyIcon from 'vue-material-design-icons/Magnify.vue'
import MapMarkerIcon from 'vue-material-design-icons/MapMarker.vue'

import ServiceSelectLarge from '@/components/ServiceSelectLarge.vue'
import ServiceSelectSmall from '@/components/ServiceSelectSmall.vue'
</script>
