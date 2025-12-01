<script setup>
const props = defineProps({
  toplist: Object,
});
</script>

<template>
  <div
    class="card-container aspect-9/16 relative rounded-lg overflow-hidden cursor-pointer"
  >
    <a :href="props.toplist.link" target="_blank">
      <div
        class="card-image-layer absolute inset-0 bg-cover bg-center transition-transform duration-500"
        :style="{ 'background-image': `url(${props.toplist.src})` }"
      ></div>

      <div
        class="card-content-layer absolute inset-0 p-9 text-white font-bold font-serif flex flex-col justify-end z-10"
        style="box-shadow: rgba(0, 0, 0, 0.82) 0px -200px 90px -80px inset"
      >
      <!-- rgba(0, 0, 0, 0.82) 0px -220px 60px -60px inset -->
        <div class="flex justify-between">
          <div class="content-end pr-0.5">
            <div class="flex items-center gap-1">
              <UIcon name="i-lucide-map-pin" class="size-4" />
              <p>{{ props.toplist.city }}</p>
            </div>
            <div class="text-2xl">{{ props.toplist.name }}</div>
          </div>
          <div class="flex flex-col items-center gap-0.5">
            <p>{{ props.toplist.rankstar }}</p>
            <div v-for="i in 5 - props.toplist.rankstar">
              <UIcon name="i-heroicons-star" class="size-4" />
            </div>
            <div v-for="i in props.toplist.rankstar">
              <UIcon name="i-heroicons-star-solid" class="size-4" />
            </div>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<style scoped>
/* 懸停時，對整個卡片進行縮放 */
.card-image-layer {
  /* Tailwind 的 transition-transform duration-500 已經涵蓋了這點 */
  transition: transform 0.5s ease;
}

/* 2. 關鍵：當滑鼠懸停在容器上時，對圖片層進行放大 */
.card-container:hover .card-image-layer {
  transform: scale(1.2); /* 放大 10% */
}
</style>
