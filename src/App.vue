<template>
  <div class="wrapper">
    <h1 class="mb-8 text-2xl uppercase font-semibold text-blue-700 text-center">
      Task List Test
    </h1>
    <add-task/>
    <div class="tasks-list mt-4">
      <task-list  :tasks="taskStore.tasks"/>
    </div>
  </div>
</template>

<script setup>
import {ref, computed} from 'vue'
import AddTask from './components/AddTask.vue';
import TaskList from './components/TaskList.vue';
import { useTaskStore } from './stores/taskStore';
import { onMounted } from 'vue';

// Greensock Animation Platform library
import { gsap } from "gsap";

const taskStore = useTaskStore();

// const formattedStrings = computed(() => {
//   return taskStore.tasks.map( (task) => {
//     return task.replace(/@([^\s]+)/g, '<span class="mention">@$1</span>');
//   })
// });


onMounted(() => {
  gsap.fromTo('h1', {scale: 1.2, y: 20}, {duration: .5, scale: 1, y: 0})
  gsap.fromTo('#add-task', {opacity: 0, y: 20}, {duration: .5, opacity: 1, y: 0}, "+=.5")   
})

</script>

<style scoped>

</style>
