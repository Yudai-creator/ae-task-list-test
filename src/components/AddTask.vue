<template>
    <div :class="`flex flex-col gap-4 ${isClicked === true ? 'shadow-md' : ''}`">
      <!-- start if clicked, show next section -->
      <div id="add-task-bar" class="flex gap-2 p-3 border-b border-gray-100">
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
          <button class="px-4 py-2 bg-blue-800 w-20 text-white rounded-md">
            {{addButtonLabel}}
          </button>
        </div>
      </div>
      <!-- <task :text="taskInput"/> -->
    </div>
</template>

<script setup>
import { useState } from '@/composables/state'
import {ref, computed, defineEmits} from 'vue'

const isClicked = ref(false)
const taskInput = ref('')

// const emit = defineEmits(['inFocus', 'submit'])

function showTaskActions () {
    isClicked.value = !isClicked.value
    console.log(isClicked.value)
}

const addButtonLabel = computed(() => {
  return taskInput.value ? 'Add' : 'Ok';
});

const addTask = () => {
  if (newTask.value.trim() !== '') {
    emit('task-added', newTask.value);
    taskInput.value = '';
  }
};


/*
function addTask() {
    console.log("submited")
    if (addButtonLabel.value === 'Add') {
        const newTask = {
            id: Math.floor(Math.random() * 1000),
            text: taskInput
        }
        taskInput.value = ''
    }
}
*/

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