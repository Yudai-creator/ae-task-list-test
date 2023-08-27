<template>
    <div class="w-full">
        <div :class="`${isClicked === true ? 'shadow-sm' : ''} border-gray-100 transition-all hover:shadow-sm`">
            <div 
            :class="`flex items-center gap-2 p-3 ${isClicked === true ? 'shadow-md' : ''} border-b border-gray-100 transition-all hover:shadow-sm`"
            >
                <div class="flex justify-between items-center w-full">
                    <div class="flex gap-3">   
                        <input @click="showTaskActions" type="checkbox" name="task" id="1">
                        <p id="task-text">
                            {{ task }}
                        </p>
                    </div>
                    <img-avatar :is-clicked="isClicked"/>
                </div>
            </div>
            <div v-if="isClicked === true" id="add-task-actions" class="flex justify-between bg-gray-50 p-3">
                <div class="flex lg:gap-8 gap-1">
                    <div>
                        <button class="lg:px-4 lg:py-2 p-1 border-gray-300 text-gray-500 cursor-pointer border-2 rounded-md flex items-center gap-2">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="gray" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-maximize-2">
                                <polyline points="15 3 21 3 21 9"></polyline>
                                <polyline points="9 21 3 21 3 15"></polyline>
                                <line x1="21" y1="3" x2="14" y2="10"></line>
                                <line x1="3" y1="21" x2="10" y2="14"></line>
                            </svg>
                            <p class="lg:block hidden">Open</p>
                        </button>
                    </div>
                    <div class="flex lg:gap-2 gap-1">
                        <button class="lg:px-4 lg:py-2 p-1 max-h-[31.2px] lg:max-h-full border-gray-300 text-gray-500 cursor-pointer border-2 rounded-md flex items-center gap-2">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="gray" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                <line x1="16" y1="2" x2="16" y2="6"></line>
                                <line x1="8" y1="2" x2="8" y2="6"></line>
                                <line x1="3" y1="10" x2="21" y2="10"></line>
                            </svg>
                            <p class="lg:block hidden">Today</p>
                        </button>
                        <button class="lg:px-4 lg:py-2 p-1 max-h-[31.2px] lg:max-h-full border-gray-300 text-gray-500 cursor-pointer border-2 rounded-md flex items-center gap-2">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="gray" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-unlock">
                                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                <path d="M7 11V7a5 5 0 0 1 9.9-1"></path>
                            </svg>
                            <p class="lg:block hidden">Public</p>
                        </button>
                        <button class="lg:px-4 lg:py-2 p-1 max-h-[31.2px] lg:max-h-full border-gray-300 text-gray-500 cursor-pointer border-2 rounded-md flex items-center gap-2">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="gray" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star">
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                            </svg>
                            <p class="lg:block hidden">Highlight</p>
                        </button>
                        <button class="lg:px-4 lg:py-2 p-1 max-h-[31.2px] lg:max-h-full border-gray-300 text-gray-500 cursor-pointer border-2 rounded-md flex items-center gap-2">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="gray" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trending-up">
                                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                                <polyline points="17 6 23 6 23 12"></polyline>
                            </svg>
                            <p class="lg:block hidden">Estimation</p>
                        </button>
                    </div>
                </div>
                <div class="flex gap-2">
                    <btn-task
                        @click="showTaskActions"
                        btn-name="Cancel"
                        btn-styles="px-4 py-2 bg-slate-200 rounded-md lg:block hidden"
                    />
                    <btn-task
                        v-if="isClicked"
                        @click="deleteTask"
                        btn-name="Delete"
                        btn-styles="lg:px-4 lg:py-2 p-2 bg-blue-800 lg:w-20 text-white rounded-md flex items-center justify-center"
                        btn-img="https://ik.imagekit.io/u33i3sss0/test/x_SxEU5jH9e.png?updatedAt=1693110407742"
                        btn-img-styles="lg:hidden block"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import BtnTask from './BtnTask.vue';
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

    input[type="checkbox"]{
        width: 20px;
        height: 20px;
    }

</style>