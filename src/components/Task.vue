<template>
    <div :class="`${isClicked === true ? 'shadow-md' : ''} border-gray-100 transition-all hover:shadow-sm`">
        <div 
        :class="`flex items-center gap-2 p-3 ${isClicked === true ? 'shadow-md' : ''} border-b border-gray-100 transition-all hover:shadow-sm`"
        >
            <div class="flex justify-between items-center w-full">
                <div class="flex gap-3">   
                    <input @click="showTaskActions" class="border-blue-500 cursor-pointer p-2" type="checkbox" name="task" id="1">
                    <p>
                        {{ task }}
                    </p>
                </div>
                <img-avatar :is-clicked="isClicked"/>
            </div>
        </div>
        <div v-if="isClicked === true" id="add-task-actions" class="flex justify-between bg-gray-50 p-3">
            <div id="add-task-secondary-actions" class="flex gap-8">
                <div>
                    <button class="px-4 py-2 border-gray-300 text-gray-500 cursor-pointer border-2 rounded-md flex gap-2">
                    Open
                    </button>
                </div>
                <div class="flex gap-2">
                    <button class="px-4 py-2 border-gray-300 text-gray-500 cursor-pointer border-2 rounded-md flex gap-2">
                    Today
                    </button>
                    <button class="px-4 py-2 border-gray-300 text-gray-500 cursor-pointer border-2 rounded-md flex gap-2">
                    Public
                    </button>
                    <button class="px-4 py-2 border-gray-300 text-gray-500 cursor-pointer border-2 rounded-md flex gap-2">
                    
                    Highlight
                    </button>
                    <button class="px-4 py-2 border-gray-300 text-gray-500 cursor-pointer border-2 rounded-md flex gap-2">
                    Estimation
                    </button>
                </div>
                </div>
                <div id="add-task-primary-actions" class="flex gap-2">
                <button @click="showTaskActions" class="px-4 py-2 bg-slate-200 rounded-md disabled">
                    Cancel
                </button>
                <button v-if="isClicked" @click="deleteTask" class="px-4 py-2 bg-blue-800 w-20 text-white rounded-md">
                    Delete
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import ImgAvatar from './imgs/ImgAvatar.vue';
import { ref } from 'vue';
import { useTaskStore } from '../stores/taskStore';

const props = defineProps({
    task: String,
})

const isClicked = ref(false)

const taskStore = useTaskStore();

const deleteTask = () => {
  taskStore.deleteTask(props.task);
};

function showTaskActions () {
    isClicked.value = !isClicked.value
}

</script>

<style scoped>

</style>