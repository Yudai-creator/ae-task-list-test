<template>
  <div class="wrapper">
    <div class="flex flex-col gap-4">
      <!-- start if clicked, show next section -->
      <div id="add-task-bar" class="flex gap-4 p-3">
        <div id="add-task-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="blue" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-square">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="12" y1="8" x2="12" y2="16"></line>
            <line x1="8" y1="12" x2="16" y2="12"></line>
          </svg>
        </div>
        <div id="add-task-field" class="w-full">
          <input type="text" placeholder="Type to add new task" class="w-full">
        </div>
      </div>
      <!-- end if clicked, show next section -->
      <div id="add-task-actions" class="flex justify-between bg-gray-100 p-3">
        <div id="add-task-secondary-actions" class="flex gap-8">
          <div>
            <button class="px-4 py-2 border-2 border-gray-300 text-gray-500 rounded-md flex gap-2">
              <i data-feather="maximize-2"></i>
              Open
            </button>
          </div>
          <div class="flex gap-2">
            <button class="px-4 py-2 border-2 border-gray-300 text-gray-500 rounded-md flex gap-2">
              <i data-feather="calendar"></i>
              Today
            </button>
            <button class="px-4 py-2 border-2 border-gray-300 text-gray-500 rounded-md flex gap-2">
              <i data-feather="unlock"></i>
              Public
            </button>
            <button class="px-4 py-2 border-2 border-gray-300 text-gray-500 rounded-md flex gap-2">
              
              Highlight
            </button>
            <button class="px-4 py-2 border-2 border-gray-300 text-gray-500 rounded-md flex gap-2">
              Estimation
            </button>
          </div>
        </div>
        <div id="add-task-primary-actions" class="flex gap-4">
          <button class="px-4 py-2 bg-slate-200 rounded-md">
            Cancel
          </button>
          <button class="px-4 py-2 bg-blue-800 text-white rounded-md">
            Add
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import feather from 'feather-icons'


onMounted(() => {
  feather.replace();
})

</script>

<style scoped>

</style>
