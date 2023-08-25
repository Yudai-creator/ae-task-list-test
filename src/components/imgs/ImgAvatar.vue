<template>
    <img v-if="isClicked" width="30" :class="`${taskInput != '' ? 'opacity-100' : ' opacity-25'}`" src="https://ik.imagekit.io/u33i3sss0/figma_pfp(5)_Rrl76Qnuu.png?updatedAt=1692986988771" alt="me">
</template>

<script setup>

const props = defineProps({
    isClicked: Boolean,
    taskInput: String
})


</script>