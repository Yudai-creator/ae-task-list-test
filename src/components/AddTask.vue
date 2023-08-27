<template>
    <div id="add-task" :class="`flex flex-col gap-4 ${isClicked === true ? 'shadow-md' : ''}`">
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
      <transition name="fade" mode="out-in">
        <div v-if="isClicked === true" id="add-task-actions" class="flex justify-between flex-wrap bg-gray-50 p-3">
          <add-task-actions :task-input="taskInput"/>
          <div id="add-task-primary-actions" class="flex gap-2">
            <btn-task @click="cancel" btn-styles="px-4 py-2 bg-slate-200 rounded-md lg:block hidden" btn-name="Cancel"/>
            <btn-task 
              @click="addTask" 
              :btn-name="addButtonLabel" 
              btn-img="https://ik.imagekit.io/u33i3sss0/test/plus_YjxRJ8vTBn.png?updatedAt=1693110407989" 
              btn-img-styles="lg:hidden block" 
              btn-styles="lg:px-4 lg:py-2 p-2 bg-blue-800 lg:w-20 text-white rounded-md flex items-center justify-center"
            />
          </div>
        </div>
      </transition>
    </div>
</template>

<script setup>
import AddTaskActions from './AddTaskActions.vue';
import BtnTask from './BtnTask.vue';
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
  }else {
    isClicked.value = !isClicked.value
  }
};

const cancel = () => {
  taskInput.value = '';
};


</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>