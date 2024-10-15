<script setup>
import { HomeIcon, FlagIcon, InboxIcon, ClockIcon, Cog6ToothIcon, BellIcon } from '@heroicons/vue/24/outline'

const menuItems = [
  { name: 'Dashboard', icon: HomeIcon, path: '/' },
  { name: 'Campaigns', icon: FlagIcon, path: '/campaigns' },
  { name: 'Mailboxes', icon: InboxIcon, path: '/mailboxes' },
  { name: 'Pending Approval', icon: ClockIcon, path: '/pending-approval' },
  { name: 'Notifications', icon: BellIcon, path: '/notifications' },
  { name: 'Settings', icon: Cog6ToothIcon, path: '/settings' },
]
</script>

<template>
  <aside class="bg-[#FAFAF8] w-64 h-full border-r border-[#E5E5E3] overflow-y-auto fixed left-0 top-[64px] bottom-0 px-2">
    <nav class="mt-8">
      <ul class="space-y-1">
        <li v-for="item in menuItems" :key="item.name">
          <NuxtLink :to="item.path" class="flex items-center p-1 text-gray-600 hover:bg-white rounded-lg border border-transparent" :class="{ 'bg-white shadow-sm !border-300': $route.path === item.path }">
            <div :class="{ 'bg-perlon-orange !border-gray-500': $route.path === item.path }" class="p-1 rounded mr-3 border border-transparent" >
              <component :is="item.icon" class="w-4 h-4" />
            </div>
            {{ item.name }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
    <div class="absolute bottom-16 left-0 right-0 p-4">
      <NuxtLink to="/settings" class="flex items-center space-x-3 hover:bg-white rounded-lg p-2 transition-colors duration-200">
        <img src="https://i.pravatar.cc/40?img=8" alt="User avatar" class="w-10 h-10 rounded-full">
        <div>
          <p class="font-semibold">James Arnold</p>
          <p class="text-xs text-gray-500">Account Settings</p>
        </div>
      </NuxtLink>
    </div>
  </aside>
</template>