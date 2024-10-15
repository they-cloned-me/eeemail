<template>
  <header class="bg-[#FAFAF8] p-4 flex justify-between items-center border-b border-[#E5E5E3] z-10">
    <div class="flex items-center space-x-2">
      <div class="w-8 h-8 bg-perlon-orange rounded-md flex items-center justify-center text-black font-bold text-xl">r</div>
      <span class="text-xl font-semibold">random</span>
    </div>
    <div class="flex space-x-2">
      <button v-for="(icon, index) in headerIcons" :key="index" class="text-gray-600 hover:text-gray-800 relative">
        <NuxtLink :to="getIconLink(index)" class="hover:bg-white hover:shadow-sm p-1.5 rounded block">
          <component :is="icon" class="w-4 h-4" />
          <span v-if="index === 2 && hasUnreadNotifications" class="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
        </NuxtLink>
      </button>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { QuestionMarkCircleIcon, ChatBubbleLeftIcon, BellIcon } from '@heroicons/vue/24/outline'

const headerIcons = [QuestionMarkCircleIcon, ChatBubbleLeftIcon, BellIcon]
const hasUnreadNotifications = ref(false)

const getIconLink = (index) => {
  switch (index) {
    case 2: // BellIcon
      return '/notifications'
    default:
      return '#'
  }
}

onMounted(async () => {
  const { data } = await useFetch('/api/notifications/unread')
  hasUnreadNotifications.value = data.value > 0
})
</script>