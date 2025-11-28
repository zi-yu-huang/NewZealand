<script setup lang="ts">
import posts_list from  "../../mock/campsites";
</script>

<template>
  <div class="relative flex flex-col">
    <div class="grid gap-8 lg:grid-cols-2">
      <div v-for="i in posts_list">
        <UBlogPost
          :image="i.image"
          class="card_shadow"
          orientation="horizontal"
          :title="i.title"
          :ui="{header:'h-full'}"
          :to="i.link"
        >
          <template #description>
            <div >
              <p class="text-[20px] text-gray-600 dark:text-white">
                {{ i.city }}
              </p>

              <div
                class="grid grid-cols-[80px_1fr] text-gray-900 dark:text-white"
              >
                <p>Bathroom</p>
                <div class="flex flex-row">
                  <div v-for="j in i.bathroom" :key="`bath-fill-${j}`">
                    <UIcon name="i-heroicons-star-solid" class="size-4" />
                  </div>
                  <div v-for="j in 5 - i.bathroom" :key="`bath-empty-${j}`">
                    <UIcon
                      name="i-heroicons-star"
                      class="size-4 text-gray-400"
                    />
                  </div>
                </div>
                <div
                  class="grid grid-cols-[80px_1fr] text-gray-900 dark:text-white"
                >
                  <p>Kitchen</p>
                  <div class="flex flex-row">
                    <div v-for="k in i.kitchen" :key="`kitchen-fill-${k}`">
                      <UIcon name="i-heroicons-star-solid" class="size-4" />
                    </div>
                    <div v-for="k in 5 - i.kitchen" :key="`kitchen-empty-${k}`">
                      <UIcon
                        name="i-heroicons-star"
                        class="size-4 text-gray-400"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </UBlogPost>
      </div>
    </div>
    <div class="self-center mt-10">
      <UButton
        active
        color="neutral"
        variant="outline"
        active-color="neutral"
        active-variant="solid"
        target="_blank"
        to="https://www.notion.so/2b8405d0e09b80a99d44cf759015ff60"
      >
        查看全部營地評分
      </UButton>
    </div>
  </div>
</template>
<style scoped>
.card_shadow {
  box-shadow: #5d667a 4px 4px 0px 4px;
  /* background-color: yellow; */
}
.body-set {
  height: auto;
  /* background-color: rgb(48, 146, 232); */
}
.art-style {
  /* background-color: rgb(92, 30, 84); */
}
</style>
