<template>
  <div>
    <h1 class="text-xl font-semibold mb-8 text-gray-800">Campaigns</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      <div class="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <h2 class="text-xl font-semibold mb-4 text-gray-800">Active Campaigns</h2>
        <div class="flex items-center justify-between">
          <div class="text-4xl font-bold text-perlon-orange">{{ activeCampaigns }}</div>
          <div class="bg-orange-100 p-2 rounded-full">
            <RocketLaunchIcon class="w-6 h-6 text-perlon-orange" />
          </div>
        </div>
      </div>
      <div class="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <h2 class="text-xl font-semibold mb-4 text-gray-800">Draft Campaigns</h2>
        <div class="flex items-center justify-between">
          <div class="text-4xl font-bold text-blue-600">{{ draftCampaigns }}</div>
          <div class="bg-blue-100 p-2 rounded-full">
            <PencilSquareIcon class="w-6 h-6 text-blue-600" />
          </div>
        </div>
      </div>
      <div class="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <h2 class="text-xl font-semibold mb-4 text-gray-800">Completed Campaigns</h2>
        <div class="flex items-center justify-between">
          <div class="text-4xl font-bold text-green-600">{{ completedCampaigns }}</div>
          <div class="bg-green-100 p-2 rounded-full">
            <CheckCircleIcon class="w-6 h-6 text-green-600" />
          </div>
        </div>
      </div>
    </div>
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div class="p-4 sm:px-6 sm:py-4">
        <h2 class="text-lg font-semibold text-gray-800">Recent Campaigns</h2>
      </div>
      <ul>
        <li v-for="campaign in recentCampaigns" :key="campaign.id" class="p-6 sm:py-4 sm:px-6 hover:bg-gray-50">
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <div :class="[
                'p-2 rounded-full mr-4',
                campaign.status === 'active' ? 'bg-green-100 text-green-600' :
                campaign.status === 'draft' ? 'bg-blue-100 text-blue-600' :
                'bg-gray-100 text-gray-600'
              ]">
                <component :is="getStatusIcon(campaign.status)" class="w-5 h-5" />
              </div>
              <div>
                <h3 class="text-md font-medium text-gray-900">{{ campaign.name }}</h3>
                <p class="text-sm text-gray-400">{{ campaign.description }}</p>
              </div>
            </div>
            <div class="text-sm text-gray-500">
              {{ campaign.date }}
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { RocketLaunchIcon, PencilSquareIcon, CheckCircleIcon, ClockIcon } from '@heroicons/vue/24/outline'

const recentCampaigns = ref([])

onMounted(async () => {
  const { data, error } = await useFetch('/api/campaigns')
  if (error.value) {
    console.error('Error fetching campaigns:', error.value)
  } else {
    recentCampaigns.value = data.value
  }
})

const activeCampaigns = computed(() => recentCampaigns.value.filter(c => c.status === 'active').length)
const draftCampaigns = computed(() => recentCampaigns.value.filter(c => c.status === 'draft').length)
const completedCampaigns = computed(() => recentCampaigns.value.filter(c => c.status === 'completed').length)

const getStatusIcon = (status) => {
  switch (status) {
    case 'active':
      return RocketLaunchIcon
    case 'draft':
      return PencilSquareIcon
    case 'completed':
      return CheckCircleIcon
    default:
      return ClockIcon
  }
}
</script>