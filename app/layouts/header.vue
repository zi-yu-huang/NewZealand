<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";
import { computed } from "vue"; // 確保您從 Vue 導入了 computed

function ScrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: "Highlight Places",
    to: "#section1",
  },
  {
    label: "Trip Itinerary",
    to: "#section2",
  },
  {
    label: "Favourite Campsites",
    to: "#section3",
  },
]);

// 3. 處理點擊事件：用於 UNavigationMenu
const handleNavigationClick = (event: MouseEvent) => {
  const target = event.target as HTMLAnchorElement;
  const sectionId = target.hash.replace("#", ""); // 取得 #sectionX 中的 sectionX

  if (sectionId) {
    // event.preventDefault(); // 阻止瀏覽器跳轉到頂部
    ScrollToSection(sectionId);
  }
};
const goHome = () => {
  window.location.href = "https://zi-yu-huang.github.io/";
};
</script>

<template>
  <UHeader toggle-side="left" class="bg-[#f4e0d8] opacity-[0.9] border-none">
    <template #title>
      <div @click="goHome" class="cursor-pointer flex items-end gap-1.5">
        <img
          src="/images/myLogo.png"
          alt="Logo"
          loading="lazy"
          class="w-[100px]"
        />
      </div>
    </template>

    <UNavigationMenu :items="items" @click.stop="handleNavigationClick" />

    <template #right>
      <p class="h-6 w-auto font-bold">NewZealand</p>
    </template>
    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
    </template>
  </UHeader>
</template>
<style scoped></style>
