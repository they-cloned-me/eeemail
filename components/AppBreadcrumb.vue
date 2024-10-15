<template>
  <nav aria-label="Breadcrumb" class="mb-4">
    <ol class="flex items-center space-x-2 text-sm">
      <li v-for="(crumb, index) in breadcrumbs" :key="index" class="flex items-center">
        <NuxtLink
          v-if="index < breadcrumbs.length - 1"
          :to="crumb.path"
          class="text-gray-500 hover:text-perlon-orange transition-colors duration-200"
        >
          {{ crumb.name }}
        </NuxtLink>
        <span
          v-else
          class="text-gray-900 font-medium"
          aria-current="page"
        >
          {{ crumb.name }}
        </span>
        <ChevronRightIcon v-if="index < breadcrumbs.length - 1" class="w-4 h-4 text-gray-400 mx-2" />
      </li>
    </ol>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { ChevronRightIcon } from '@heroicons/vue/20/solid'

const route = useRoute()

const breadcrumbs = computed(() => {
  const pathArray = route.path.split('/').filter(Boolean)
  return [
    { name: 'Home', path: '/' },
    ...pathArray.map((segment, index) => ({
      name: segment.charAt(0).toUpperCase() + segment.slice(1),
      path: '/' + pathArray.slice(0, index + 1).join('/')
    }))
  ]
})
</script>