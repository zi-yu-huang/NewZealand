<script setup>
import Header from "../layouts/header.vue";
import Banner from "../components/banner.vue";
import TopList from "../layouts/top_list.vue";
import TripItinerary from "~/layouts/trip_itinerary.vue";
import FavCampsites from "~/layouts/fav_campsites.vue";
import Footer from "~/layouts/footer.vue";
</script>

<template>
  <Header />
  <Banner />
  <div class="relative bg_color_index">
    <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12">
      <TopList />
      <TripItinerary />
    </div>
  </div>
    <FavCampsites />

  <Footer />
</template>
<style>
.bg_color_index {
  background: linear-gradient(#e6d9d4 25%, #fcc6bb 85%, #7ca2e3);
  /* #7ba2e3 #7aa1e3 */
}
#section1,
#section2,
#section3 {
  /* 設定滾動時，頂部應保留 80px 的邊距 */
  scroll-margin-top: 80px;
}
</style>
