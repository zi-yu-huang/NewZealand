<script setup lang="ts">
import campsites from "~/components/campsites.vue";
</script>
<template>
  <div class="relative overflow-hidden w-full h-full">
    <div
      class="absolute inset-x-0 top-0 h-1/10 bg-linear-to-b from-[#7CA2E3] to-transparent lg:h-1/10"
      style="z-index: 1"
    ></div>
    <img
      class="absolute w-full h-full max-w-none object-cover"
      src="/images/campan.webp"
      alt="bg"
      loading="lazy"
    />
    <p
    id="section3"
      class="text-4xl font-serif relative flex justify-center items-center"
      style="z-index: 2"
    >
      Favourite Campsites
    </p>
    <campsites class="max-w-screen-2xl mx-auto py-10 px-4 sm:px-6 lg:px-12" />
  </div>
</template>
