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
            <input @click="showTaskActions" v-model="taskInput" type="text" placeholder="Type to add new task" class="w-full">
          </div>
        </div>
        <img-avatar :is-clicked="isClicked" :task-input="taskInput"/>
      </div>

      <div v-html="parsedInput"></div>

      <!-- end if clicked, show next section -->
      <div v-if="isClicked === true" id="add-task-actions" class="flex justify-between bg-gray-50 p-3">
        <div id="add-task-secondary-actions" class="flex gap-8">
          <div>
            <button :class="`px-4 py-2 ${taskInput != '' ? 'border-gray-300 text-gray-500 cursor-pointer' : 'border-gray-200 text-gray-200 cursor-default'} border-2   rounded-md flex gap-2`">
              <i data-feather="maximize-2"></i>
              Open
            </button>
          </div>
          <div class="flex gap-2">
            <button :class="`px-4 py-2 ${taskInput != '' ? 'border-gray-300 text-gray-500 cursor-pointer' : 'border-gray-200 text-gray-200 cursor-default'} border-2   rounded-md flex gap-2`">
              <i data-feather="calendar"></i>
              Today
            </button>
            <button :class="`px-4 py-2 ${taskInput != '' ? 'border-gray-300 text-gray-500 cursor-pointer' : 'border-gray-200 text-gray-200 cursor-default'} border-2   rounded-md flex gap-2`">
              <i data-feather="unlock"></i>
              Public
            </button>
            <button :class="`px-4 py-2 ${taskInput != '' ? 'border-gray-300 text-gray-500 cursor-pointer' : 'border-gray-200 text-gray-200 cursor-default'} border-2   rounded-md flex gap-2`">
              
              Highlight
            </button>
            <button :class="`px-4 py-2 ${taskInput != '' ? 'border-gray-300 text-gray-500 cursor-pointer' : 'border-gray-200 text-gray-200 cursor-default'} border-2   rounded-md flex gap-2`">
              Estimation
            </button>
          </div>
        </div>
        <div id="add-task-primary-actions" class="flex gap-2">
          <button @click="showTaskActions" class="px-4 py-2 bg-slate-200 rounded-md disabled">
            Cancel
          </button>
          <button @click="addTask" class="px-4 py-2 bg-blue-800 w-20 text-white rounded-md">
            {{addButtonLabel}}
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
    console.log(isClicked.value)
}

const addButtonLabel = computed(() => {
  return taskInput.value ? 'Add' : 'Ok';
});

// Using store
const addTask = () => {
  if (taskInput.value.trim() !== '') {
    taskStore.addTask(taskInput.value);
    taskInput.value = '';
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