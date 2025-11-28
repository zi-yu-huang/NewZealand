<script setup>
import tripList1 from "../../mock/tripList1";
import tripList2 from "../../mock/tripList2";
</script>

<template>
  <div class="flex flex-col items-center pb-12">
    <p id="section2" class="text-4xl font-serif">Trip Itinerary</p>
    <UButton
      trailing-icon="i-lucide-arrow-right"
      class="mt-4 bg-[#794948] hover:bg-[#af8483] active:bg-[#c18382] dark:text-white"
      to="https://reurl.cc/bN7v0X"
      target="_blank"
      >點我看完整Google Map行程</UButton
    >
    <div class="grid lg:grid-cols-[1fr_2fr_1fr]">
      <div class="flex flex-col justify-evenly items-center">
        <img
          src="/images/newZealand.webp"
          loading="lazy"
          alt="newZealand"
          class="order-0 md:order-0"
        />
      </div>
      <div class="flex flex-col justify-center md:order-first">
        <div v-for="i in tripList1" class="py-2 flex justify-center">
          <UBlogPost
            :title="i.title"
            :description="i.dis"
            :image="i.src"
            :date="i.city"
            :to="i.link"
            target="_blank"
            class="h-full w-full"
            variant="soft"
          />
        </div>
      </div>
      <div class="flex flex-col order-0 md:order-0" style="top: -30px">
        <div v-for="j in tripList2" class="py-2 flex justify-center">
          <UBlogPost
            :title="j.title"
            :description="j.dis"
            :image="j.src"
            :date="j.city"
            :to="j.link"
            target="_blank"
            class="h-full w-full"
            variant="soft"
          />
        </div>
      </div>
    </div>
  </div>
</template>
