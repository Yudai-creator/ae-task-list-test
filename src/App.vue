<template>
  <div class="wrapper">
    <add-task/>
    <div class="tasks-list p-3">
      <!-- <task
        v-for="(task, index) in tasks"
        :key="index"
        :text="task"
        @remove="removeTask(index)"
      /> -->
      <task-list :tasks="tasks"/>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import AddTask from './components/AddTask.vue';
import TaskList from './components/TaskList.vue';

import Task from './components/Task.vue';

import { onMounted } from 'vue';
import feather from 'feather-icons'

const tasks = ref([
  {
    id:1,
    text: "Esto es una tareita de prueba",
  }
]);

// const addTask = (task) => {
//   tasks.value = [...tasks, task]
// }

// const addTask = (task) => {
//   tasks.value.push(task);
// };

// const removeTask = (index) => {
//   tasks.value.splice(index, 1);
// };


onMounted(() => {
  feather.replace();
})

</script>

<style scoped>

</style>
