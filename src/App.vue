<template>
  <div class="wrapper">
    <h1 class="mb-8">Task List</h1>
    <add-task/>
    <div class="tasks-list mt-4">
      <task-list  :tasks="taskStore.tasks"/>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import AddTask from './components/AddTask.vue';
import TaskList from './components/TaskList.vue';

import { useTaskStore } from './stores/taskStore';

import { onMounted } from 'vue';


const taskStore = useTaskStore();


</script>

<style scoped>

</style>
