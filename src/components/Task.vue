<template>
    <div class="flex items-center gap-2">
        <input type="checkbox" name="task" id="1">
        <p>
            {{ task.text }}
        </p>
    </div>
</template>

<script setup>
const props = defineProps({
    task: Object,
})

</script>

<style scoped>

</style>