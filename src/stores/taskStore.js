import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useTaskStore = defineStore("tasks", () => {
  // STATE — the data
  const tasks = ref([
    { id: 1, title: "Buy milk", completed: false },
    { id: 2, title: "Learn Vue", completed: false },
    { id: 3, title: "Push to GitHub", completed: false },
  ]);

  // ACTIONS — functions that change data
  const addTask = (title) => {
    tasks.value.push({
      id: Date.now(),
      title,
      completed: false,
    });
  };

  const deleteTask = (id) => {
    tasks.value = tasks.value.filter((t) => t.id !== id);
  };

  const toggleTask = (id) => {
    const task = tasks.value.find((t) => t.id === id);
    task.completed = !task.completed;
  };

  // GETTERS — computed values
  const completedTasks = computed(() => tasks.value.filter((t) => t.completed));
  const activeTasks = computed(() => tasks.value.filter((t) => !t.completed));
  const totalTasks = computed(() => tasks.value.length);

  return {
    tasks,
    addTask,
    deleteTask,
    toggleTask,
    completedTasks,
    activeTasks,
    totalTasks,
  };
});
