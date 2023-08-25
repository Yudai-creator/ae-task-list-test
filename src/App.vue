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
      <task-list :tasks="taskStore.tasks"/>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import AddTask from './components/AddTask.vue';
import TaskList from './components/TaskList.vue';

import { useTaskStore } from './stores/taskStore';

import { onMounted } from 'vue';
import feather from 'feather-icons'

const taskStore = useTaskStore();

onMounted(() => {
  feather.replace();
})

</script>

<style scoped>

</style>
