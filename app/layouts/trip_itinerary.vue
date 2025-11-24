<script setup>
import tripList1 from "../../mock/tripList1";
import tripList2 from "../../mock/tripList2";
</script>

<template>
  <div class="flex flex-col items-center ">
    <p class="text-5xl text-white font-serif">Trip Itinerary</p>
    <div class="grid lg:grid-cols-[1fr_2fr_1fr] ">
      <img src="/images/trip_itinerary/newZealand.png" class="order-0 md:order-0" />
      <div class="flex flex-col justify-evenly md:order-first">
        <div v-for="i in tripList1" class="py-2 flex justify-center ">
          <UBlogPost
            :title="i.title"
            :description="i.dis"
            :image="i.src"
            :date="i.city"
            class="h-full w-[95%] "
          />
        </div>
      </div>
      <div class="flex flex-col justify-evenly order-0 md:order-0">
        <div v-for="j in tripList2" class="py-2 flex justify-center">
          <UBlogPost
            :title="j.title"
            :description="j.dis"
            :image="j.src"
            :date="j.city"
            class="h-full w-[95%]"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<style></style>
