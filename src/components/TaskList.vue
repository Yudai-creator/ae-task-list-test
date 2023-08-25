<template>
    <div class="flex flex-col gap-4">
        <task v-for="(task, index) in tasks" :key="index" :task="task"/>
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