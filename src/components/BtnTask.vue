<template>
    <button :class="`${btnStyles}`">
        <img :class="btnImgStyles" :src="btnImg">
        <p class="lg:block hidden">
            {{ btnName }}
        </p>
    </button>
</template>

<script setup>

const props = defineProps({
    btnStyles: String,
    btnName: String,
    btnImg: String,
    btnImgStyles: String
})

</script>

