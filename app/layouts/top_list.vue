<script setup>
import Card from "../components/card.vue";
import topList from "../../mock/topList.js";
</script>

<template>
  <div class="my-26 flex flex-col items-center lg:px-8">
    <p id="section1" class="mb-10 text-4xl font-serif">Highlight Places</p>

    <UCarousel
      v-slot="{ item }"
      :items="topList"
      :ui="{
        item: 'basis-full md:basis-1/2 lg:basis-1/4 flex justify-center',
      }"
      class="w-full max-w-full mx-auto"
      slidesToScroll=1
      arrows
      indicators
      dots
      
    >
      <div class="w-80">
        <Card :toplist="item" />
      </div>
    </UCarousel>
  </div>
</template>
