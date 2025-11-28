<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items: NavigationMenuItem[] = [
  {
    label: 'GarboGo',
    to: 'https://zi-yu-huang.github.io/GarboGo_/',
    target: '_blank'
  },
  {
    label: 'Notion',
    to: 'https://www.notion.so/NewZealand-8-26-9-23-224405d0e09b80668940dd66ba78658a',
    target: '_blank'
  },
  {
    label: 'About Me',
    to: 'https://zi-yu-huang.github.io',
    target: '_blank'
  }
]
</script>

<template>
  <UFooter>
    <template #left>
      <p class="text-muted text-sm">Copyright © {{ new Date().getFullYear() }}</p>
    </template>

    <UNavigationMenu :items="items" variant="link" />

    <template #right>
      <!-- <UButton
        icon="i-simple-icons-x"
        color="neutral"
        variant="ghost"
        to="https://go.nuxt.com/x"
        target="_blank"
        aria-label="X"
      /> -->
      <UButton
        icon="i-simple-icons-github"
        color="neutral"
        variant="ghost"
        to="https://github.com/zi-yu-huang"
        target="_blank"
        aria-label="GitHub"
      />
    </template>
  </UFooter>
</template>
