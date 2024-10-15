<template>
  <div class="max-w-3xl mx-auto">
    <h1 class="text-xl font-semibold mb-8 text-gray-800">Account Settings</h1>
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
      <form @submit.prevent="updateSettings" class="space-y-8">
        <!-- Name Change Section -->
        <div class="pb-8 border-b border-gray-200">
          <h2 class="text-xl font-semibold mb-6 text-gray-800">Change Name</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label for="firstName" class="block text-sm font-medium text-gray-700 mb-1">First Name</label>
              <input type="text" id="firstName" v-model="firstName" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-perlon-orange focus:ring-1 focus:ring-perlon-orange  bg-gray-50 transition duration-150 ease-in-out hover:border-gray-400 px-3 py-1.5 focus:outline-none">
            </div>
            <div>
              <label for="lastName" class="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
              <input type="text" id="lastName" v-model="lastName" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-perlon-orange focus:ring-1 focus:ring-perlon-orange bg-gray-50 transition duration-150 ease-in-out hover:border-gray-400 px-3 py-1.5	focus:outline-none">
            </div>
          </div>
        </div>

        <!-- Password Change Section -->
        <div class="pb-8 border-b border-gray-200">
          <h2 class="text-xl font-semibold mb-6 text-gray-800">Change Password</h2>
          <div class="space-y-4">
            <div>
              <label for="currentPassword" class="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
              <input type="password" id="currentPassword" v-model="currentPassword" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-perlon-orange focus:ring-1 focus:ring-perlon-orange bg-gray-50 transition duration-150 ease-in-out hover:border-gray-400 px-3 py-1.5	focus:outline-none">
            </div>
            <div>
              <label for="newPassword" class="block text-sm font-medium text-gray-700 mb-1">New Password</label>
              <input type="password" id="newPassword" v-model="newPassword" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-perlon-orange focus:ring-1 focus:ring-perlon-orange bg-gray-50 transition duration-150 ease-in-out hover:border-gray-400 px-3 py-1.5	focus:outline-none">
            </div>
            <div>
              <label for="confirmPassword" class="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
              <input type="password" id="confirmPassword" v-model="confirmPassword" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-perlon-orange focus:ring-1 focus:ring-perlon-orange bg-gray-50 transition duration-150 ease-in-out hover:border-gray-400 px-3 py-1.5	focus:outline-none">
            </div>
          </div>
        </div>

        <!-- Email Display Section -->
        <div class="pb-8 border-b border-gray-200">
          <h2 class="text-xl font-semibold mb-6 text-gray-800">Email Address</h2>
          <p class="text-gray-600 bg-gray-50 px-3 py-1.5 rounded-md border border-gray-200 cursor-not-allowed select-none">{{ email }}</p>
          <p class="text-sm text-gray-500 mt-2">Note: Email address cannot be changed.</p>
        </div>

        <!-- Save Changes Button -->
        <div class="flex justify-end">
          <button type="submit" class="bg-perlon-orange text-black py-2 px-6 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-perlon-orange focus:ring-opacity-50 transition duration-150 ease-in-out">
            Save Changes
          </button>
        </div>
      </form>

      <!-- Delete Account Section -->
      <div class="mt-12 pt-8 border-t border-gray-200">
        <h2 class="text-xl font-semibold mb-4 text-gray-800">Delete Account</h2>
        <p class="text-gray-600 mb-6">Once you delete your account, there is no going back. Please be certain.</p>
        <div class="flex justify-end mt-4">
          <button @click="showDeleteModal = true" class="bg-red-600 text-white py-2 px-6 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition duration-150 ease-in-out">
            Delete Account
          </button>
        </div>
      </div>
    </div>

    <!-- Delete Account Confirmation Modal -->
    <div v-if="showDeleteModal" class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
      <div class="bg-white p-8 rounded-lg shadow-xl max-w-md mx-auto">
        <h3 class="text-2xl font-bold mb-4 text-gray-800">Confirm Account Deletion</h3>
        <p class="text-gray-600 mb-6">Are you sure you want to delete your account? This action cannot be undone.</p>
        <div class="flex justify-end space-x-4">
          <button @click="showDeleteModal = false" class="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition duration-150 ease-in-out">
            Cancel
          </button>
          <button @click="deleteAccount" class="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition duration-150 ease-in-out">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// User data (replace with actual data fetching logic)
const firstName = ref('John')
const lastName = ref('Doe')
const email = ref('john.doe@example.com')

// Password change fields
const currentPassword = ref('')
const newPassword = ref('')
const confirmPassword = ref('')

// Delete account modal
const showDeleteModal = ref(false)

// Update settings function
const updateSettings = () => {
  // Implement the logic to update user settings
  console.log('Updating settings...')
  // Add API calls or state management updates here
}

// Delete account function
const deleteAccount = () => {
  // Implement the logic to delete the user's account
  console.log('Deleting account...')
  // Add API call to delete the account
  showDeleteModal.value = false
}
</script>