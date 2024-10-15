<template>
  <div>
    <h1 class="text-xl font-semibold mb-8 text-gray-800">Pending Approval</h1>
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <ul class="divide-y divide-gray-200">
        <li v-for="item in pendingApprovals" :key="item.id" class="relative p-6 sm:py-4 sm:px-6">
          <div class="flex items-center justify-between">
            <div>
              <h3 class="text-md font-medium text-gray-900">{{ item.title }}</h3>
              <div class="mt-1 flex items-center text-sm text-gray-500">
                <UserIcon class="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                <span>{{ item.requester }}</span>
                <span class="mx-2">&middot;</span>
                <CalendarIcon class="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                <span>{{ item.date }}</span>
              </div>
              <p class="mt-2 text-sm text-gray-600">{{ item.description }}</p>
            </div>
            <div class="flex space-x-2 absolute right-5 top-5">
              <button @click="approveItem(item.id)" class="p-2 rounded-md bg-green-100 text-green-600 hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                <span class="sr-only">Approve</span>
                <CheckIcon class="h-3 w-3" />
              </button>
              <button @click="declineItem(item.id)" class="p-2 rounded-md bg-red-100 text-red-600 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                <span class="sr-only">Decline</span>
                <XMarkIcon class="h-3 w-3" />
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { UserIcon, CalendarIcon, CheckIcon, XMarkIcon } from '@heroicons/vue/24/outline'

const pendingApprovals = ref([])

  const {data, error} = await useFetch('/api/pending-approval')

  if(error.value) {
    console.error(error.value)
  }

   pendingApprovals.value = data.value


const approveItem = async (id) => {
  await $fetch(`/api/pending-approval?id=${id}`, { method: 'DELETE' })
  pendingApprovals.value = pendingApprovals.value.filter(item => item.id !== id)
}

const declineItem = async (id) => {
  await $fetch(`/api/pending-approval?id=${id}`, { method: 'DELETE' })
  pendingApprovals.value = pendingApprovals.value.filter(item => item.id !== id)
}
</script>