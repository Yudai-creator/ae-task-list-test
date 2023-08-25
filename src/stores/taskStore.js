import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTaskStore = defineStore('taskStore', {
    state: () => ({
      tasks: [],
    }),
    actions: {
      addTask(task) {
        this.tasks.push(task);
      },
      deleteTask(task) {
        const index = this.tasks.indexOf(task);
        if (index !== -1) {
          this.tasks.splice(index, 1);
        }
      },
    },
  });