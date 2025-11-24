<script setup>
import Card from "../components/card.vue";
import topList from "../../mock/topList.js";

</script>

<template>
  <div class="my-36 flex flex-col items-center lg:px-5 ">
    <h3 class="mb-10 text-5xl text-white font-serif">Highlight Places</h3>

    <UCarousel
      v-slot="{ item }"
      :items="topList"
      :ui="{
        item: 'basis-full md:basis-1/2 lg:basis-1/4 flex justify-center',
      }"
      class="w-full max-w-full mx-auto"
      arrows
      indicators
    >
      <div class="w-80">
        <Card :toplist="item" />
      </div>
    </UCarousel>
  </div>
</template>
<style>

</style>
