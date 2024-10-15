<template>
  <div class="flex flex-col h-screen bg-white">
    <AppHeader />
    <div class="flex flex-1 overflow-hidden">
      <AppSidebar class="fixed left-0 top-[64px] bottom-0 w-64" />
      <main class="flex-1 overflow-auto bg-white p-8 ml-64">
        <AppBreadcrumb />
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
import AppHeader from '~/components/AppHeader.vue'
import AppSidebar from '~/components/AppSidebar.vue'
import AppBreadcrumb from '~/components/AppBreadcrumb.vue'
</script>