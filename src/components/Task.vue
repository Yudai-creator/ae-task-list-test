<template>
    <div class="flex items-center gap-2">
        <input type="checkbox" name="task" id="1">
        <p>
            {{ task }}
        </p>
        <button @click="deleteTask">
            Delete
        </button>
    </div>
</template>

<script setup>
import { useTaskStore } from '../stores/taskStore';

const props = defineProps({
    task: String,
})

const taskStore = useTaskStore();

const deleteTask = () => {
  taskStore.deleteTask(props.task);
};

</script>

<style scoped>

</style>