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
</script>

<template>
  <UHeader toggle-side="left" class="bg-[#f4e0d8] opacity-[0.9] border-none">
    <template #title>
      <p class="h-6 w-auto">NewZealand</p>
    </template>

    <UNavigationMenu :items="items" @click.stop="handleNavigationClick" />

    <template #right>
      <UButton
        color="neutral"
        variant="ghost"
        to="https://github.com/zi-yu-huang"
        target="_blank"
        icon="i-simple-icons-github"
        aria-label="GitHub"
      />
    </template>
    <template #body>
        <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
      </template>
  </UHeader>
</template>
<style scoped>

</style>


