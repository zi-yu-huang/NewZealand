<script setup>
import Card from "../components/card.vue";
import topList from "../../mock/topList.js";

const isMobile = ref(false);
if (process.client) {
  const checkIsMobile = () => {
    isMobile.value = window.innerWidth <= 768;
  };

  checkIsMobile();
  window.addEventListener("resize", checkIsMobile);
}
</script>

<template>
  <div class="my-26 flex flex-col items-center lg:px-8">
    <p id="section1" class="mb-10 text-4xl font-serif">Highlight Places</p>
    <UCarousel
      v-slot="{ item }"
      :items="topList"
      :ui="{
        item: 'basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4 flex justify-center',
        dot: 'size-4',
      }"
      class="w-full max-w-full mx-auto"
      slidesToScroll="1"
      :arrows="isMobile ? false : true"
      indicators
      dots
    >
      <div class="w-full h-full ">
        <Card :toplist="item" />
      </div>
    </UCarousel>
  </div>
</template>
<style scoped></style>
