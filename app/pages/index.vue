<script setup>
import Header from "../layouts/header.vue";
import Banner from "../components/banner.vue";
import TopList from "../layouts/top_list.vue";
import TripItinerary from "~/layouts/trip_itinerary.vue";


</script>

<template>
  <Header />
  <Banner />
  <div class="bg_color ">
    <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
      <TopList />
      <TripItinerary />
    </div>
  </div>
</template>
<style>
.bg_color {
  background: linear-gradient(#e6d9d4, #FCC6BB);
}
</style>
