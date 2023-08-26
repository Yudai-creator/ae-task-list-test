<template>
    <div :class="`flex flex-col gap-4 ${isClicked === true ? 'shadow-md' : ''}`">
      <!-- start if clicked, show next section -->
      <div id="add-task-bar" class="flex justify-between p-3 border-b border-gray-100">
        <div class="flex gap-2 w-3/4">
          <div id="add-task-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="blue" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-square">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="12" y1="8" x2="12" y2="16"></line>
              <line x1="8" y1="12" x2="16" y2="12"></line>
            </svg>
          </div>
          <div id="add-task-field" class="w-full">
            <input id="task-input" @click="showTaskActions" v-model="taskInput" type="text" placeholder="Type to add new task" class="w-full">
          </div>
        </div>
        <img-avatar :is-clicked="isClicked" :task-input="taskInput"/>
      </div>

      <div v-html="parsedInput"></div>

      <!-- end if clicked, show next section -->
      <div v-if="isClicked === true" id="add-task-actions" class="flex justify-between flex-wrap bg-gray-50 p-3">
        <div id="add-task-secondary-actions" class="flex flex-wrap lg:gap-8 gap-1">
          <div>
            <button :class="`lg:px-4 lg:py-2 p-1 ${taskInput != '' ? 'border-gray-300 text-gray-500 cursor-pointer' : 'border-gray-200 text-gray-200 cursor-default'} border-2 rounded-md flex items-center gap-2`">
              <svg :class="`${taskInput != '' ? 'opacity-100' : 'opacity-20'}`" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="gray" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-maximize-2">
                <polyline points="15 3 21 3 21 9"></polyline>
                <polyline points="9 21 3 21 3 15"></polyline>
                <line x1="21" y1="3" x2="14" y2="10"></line>
                <line x1="3" y1="21" x2="10" y2="14"></line>
              </svg>
              <p class="lg:block hidden">Open</p>
            </button>
          </div>
          <div class="flex lg:gap-2 gap-1">
            <button :class="`lg:px-4 lg:py-2 p-1 max-h-[31.2px] lg:max-h-full ${taskInput != '' ? 'border-gray-300 text-gray-500 cursor-pointer' : 'border-gray-200 text-gray-200 cursor-default'} border-2 rounded-md flex items-center gap-2`">
              <svg :class="`${taskInput != '' ? 'opacity-100' : 'opacity-20'}`" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="gray" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              <p class="lg:block hidden">Today</p>
            </button>
            <button :class="`lg:px-4 lg:py-2 p-1 max-h-[31.2px] lg:max-h-full ${taskInput != '' ? 'border-gray-300 text-gray-500 cursor-pointer' : 'border-gray-200 text-gray-200 cursor-default'} border-2 rounded-md flex items-center gap-2`">
              <svg :class="`${taskInput != '' ? 'opacity-100' : 'opacity-20'}`" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="gray" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-unlock">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 9.9-1"></path>
              </svg>
              <p class="lg:block hidden">Public</p>
            </button>
            <button :class="`lg:px-4 lg:py-2 p-1 max-h-[31.2px] lg:max-h-full ${taskInput != '' ? 'border-gray-300 text-gray-500 cursor-pointer' : 'border-gray-200 text-gray-200 cursor-default'} border-2 rounded-md flex items-center gap-2`">
              <svg :class="`${taskInput != '' ? 'opacity-100' : 'opacity-20'}`" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="gray" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              <p class="lg:block hidden">Highlight</p>
            </button>
            <button :class="`lg:px-4 lg:py-2 p-1 max-h-[31.2px] lg:max-h-full ${taskInput != '' ? 'border-gray-300 text-gray-500 cursor-pointer' : 'border-gray-200 text-gray-200 cursor-default'} border-2 rounded-md flex items-center gap-2`">
              <svg :class="`${taskInput != '' ? 'opacity-100' : 'opacity-20'}`" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="gray" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trending-up">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                  <polyline points="17 6 23 6 23 12"></polyline>
              </svg>
              <p class="lg:block hidden">Estimation</p>
            </button>
          </div>
        </div>
        <div id="add-task-primary-actions" class="flex gap-2">
          <button @click="showTaskActions" class="px-4 py-2 bg-slate-200 rounded-md lg:block hidden">
            Cancel
          </button>
          <button @click="addTask" class="lg:px-4 lg:py-2 p-2 bg-blue-800 lg:w-20 text-white rounded-md flex items-center justify-center">
            <svg class="lg:hidden block" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            <p class="lg:block hidden">
              {{addButtonLabel}}
            </p>
          </button>
        </div>
      </div>
    </div>
</template>

<script setup>
import ImgAvatar from './imgs/ImgAvatar.vue';
import { useTaskStore } from '../stores/taskStore';
import {ref, computed} from 'vue'

const isClicked = ref(false)
const taskInput = ref('')

const taskStore = useTaskStore();

function showTaskActions () {
    isClicked.value = !isClicked.value
}

const addButtonLabel = computed(() => {
  return taskInput.value ? 'Add' : 'Ok';
});

// Using store
const addTask = () => {
  if (taskInput.value.trim() !== '') {
    taskStore.addTask(taskInput.value);
    taskInput.value = '';
    isClicked.value = !isClicked.value
  }
};

const cancel = () => {
  taskInput.value = '';
};


const parsedInput = computed(() => {
  let parsedText = '';
  let currentColor = 'black';
  
  for (let i = 0; i < taskInput.value.length; i++) {
    const char = taskInput.value[i];
    
    if (char === '@') {
      currentColor = 'blue';
      parsedText += `<span style="color: ${currentColor}">@`;
    } else if (char === '#') {
      currentColor = 'green';
      parsedText += `<span style="color: ${currentColor}">#`;
    } else {
      parsedText += char;
    }
  }
  
  return parsedText;
});

</script>

<style scoped>

</style>