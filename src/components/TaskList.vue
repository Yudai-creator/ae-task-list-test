<template>
    <div v-for="task in tasks" :key="task.id" class="flex items-center gap-2">
        <task :task="task"/>
    </div>
</template>

<script setup>
import Task from './Task.vue';

const props = defineProps({
    tasks: Array,
})

</script>

<style scoped>

</style>