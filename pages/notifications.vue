<template>
  <div>
    <h1 class="text-xl font-semibold mb-8 text-gray-800">Notifications</h1>
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <ul class="divide-y divide-gray-200">
        <li v-for="notification in notifications" :key="notification.id" class="p-6 sm:py-4 sm:px-6 hover:bg-gray-50">
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <div :class="[
                'p-2 rounded-full mr-4',
                notification.type === 'info' ? 'bg-blue-100 text-blue-600' :
                notification.type === 'warning' ? 'bg-yellow-100 text-yellow-600' :
                'bg-green-100 text-green-600'
              ]">
                <component :is="getNotificationIcon(notification.type)" class="w-5 h-5" />
              </div>
              <div>
                <h3 class="text-md font-medium text-gray-900">{{ notification.title }}</h3>
                <p class="text-sm text-gray-500">{{ notification.message }}</p>
                <p class="text-xs text-gray-400 mt-1">{{ notification.date }}</p>
              </div>
            </div>
            <div class="flex space-x-2">
              <button @click="markNotification(notification.id, 'read')" class="text-sm text-blue-600 hover:text-blue-800">
                Mark as Read
              </button>
              <button @click="markNotification(notification.id, 'later')" class="text-sm text-gray-600 hover:text-gray-800">
                Remind Later
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
import { InformationCircleIcon, ExclamationTriangleIcon, CheckCircleIcon } from '@heroicons/vue/24/outline'

const notifications = ref([])

onMounted(async () => {
  const { data, error } = await useFetch('/api/notifications')
  if (error.value) {
    console.error('Error fetching notifications:', error.value)
  } else {
    notifications.value = data.value
  }
})

const getNotificationIcon = (type) => {
  switch (type) {
    case 'info':
      return InformationCircleIcon
    case 'warning':
      return ExclamationTriangleIcon
    default:
      return CheckCircleIcon
  }
}

const markNotification = async (id, status) => {
  try {
    await $fetch(`/api/notifications/${id}`, {
      method: 'PUT',
      body: { status }
    })
    // Remove the notification from the list
    notifications.value = notifications.value.filter(n => n.id !== id)
  } catch (error) {
    console.error('Error updating notification:', error)
  }
}
</script>