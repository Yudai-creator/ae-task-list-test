<template>
    <div id="add-task-secondary-actions" class="flex flex-wrap lg:gap-8 gap-1">
        <div>
              <btn-task
                btn-name="Open"
                :btn-styles="`lg:px-4 lg:py-2 p-1 ${taskInput != '' ? 'text-gray-600 bg-slate-200 cursor-pointer' : ' text-gray-200 bg-slate-100 cursor-default'} rounded-md flex items-center gap-2`"
                btn-img="https://ik.imagekit.io/u33i3sss0/test/maximize-2(1)_-XDQkJsp4.png?updatedAt=1693110407648"
                :btn-img-styles="`${taskInput != '' ? 'opacity-100' : 'opacity-20'}`"
              />
        </div>
        <div class="flex lg:gap-2 gap-1">
              <btn-task
                btn-name="Today"
                :btn-styles="`lg:px-4 lg:py-2 p-1 max-h-[31.2px] lg:max-h-full ${taskInput != '' ? 'border-gray-300 text-gray-500 cursor-pointer' : 'border-gray-200 text-gray-200 cursor-default'} border-2 rounded-md flex items-center gap-2`"
                btn-img="https://ik.imagekit.io/u33i3sss0/test/calendar(1)_WfMN3saXF.png?updatedAt=1693110407630"
                :btn-img-styles="`${taskInput != '' ? 'opacity-100' : 'opacity-20'}`"
              />
              <btn-task
                btn-name="Public"
                :btn-styles="`lg:px-4 lg:py-2 p-1 max-h-[31.2px] lg:max-h-full ${taskInput != '' ? 'border-gray-300 text-gray-500 cursor-pointer' : 'border-gray-200 text-gray-200 cursor-default'} border-2 rounded-md flex items-center gap-2`"
                btn-img="https://ik.imagekit.io/u33i3sss0/test/unlock(1)_BcXrCNZ1v.png?updatedAt=1693110407134"
                :btn-img-styles="`${taskInput != '' ? 'opacity-100' : 'opacity-20'}`"
              />
              <btn-task
                btn-name="Highlight"
                :btn-styles="`lg:px-4 lg:py-2 p-1 max-h-[31.2px] lg:max-h-full ${taskInput != '' ? 'border-gray-300 text-gray-500 cursor-pointer' : 'border-gray-200 text-gray-200 cursor-default'} border-2 rounded-md flex items-center gap-2`"
                btn-img="https://ik.imagekit.io/u33i3sss0/test/star_2-E-a0pN4.png?updatedAt=1693110407632"
                :btn-img-styles="`${taskInput != '' ? 'opacity-100' : 'opacity-20'}`"
              />
              <btn-task
                btn-name="Estimation"
                :btn-styles="`lg:px-4 lg:py-2 p-1 max-h-[31.2px] lg:max-h-full ${taskInput != '' ? 'border-gray-300 text-gray-500 cursor-pointer' : 'border-gray-200 text-gray-200 cursor-default'} border-2 rounded-md flex items-center gap-2`"
                btn-img="https://ik.imagekit.io/u33i3sss0/test/trending-up_t2GUN--k-.png?updatedAt=1693110407638"
                :btn-img-styles="`${taskInput != '' ? 'opacity-100' : 'opacity-20'}`"
              />
        </div>
    </div>
</template>

<script setup>
import BtnTask from './BtnTask.vue';
const props = defineProps({
    taskInput: String,
})

</script>