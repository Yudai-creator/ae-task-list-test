<template>
    <task v-for="(task, index) in tasks" :key="index" :task="task"/>
</template>

<script setup>
import Task from './Task.vue';

const props = defineProps({
    tasks: Array,
})

</script>

<style scoped>

</style>