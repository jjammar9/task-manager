<script setup>
import { ref, computed } from "vue";
import { useTaskStore } from "@/stores/taskStore";
import TaskItem from "@/components/tasks/TaskItem.vue";
import TaskForm from "@/components/tasks/TaskForm.vue";

const store = useTaskStore();
const filter = ref("all");

const filteredTasks = computed(() => {
  if (filter.value === "active") return store.activeTasks;
  if (filter.value === "completed") return store.completedTasks;
  return store.tasks;
});
</script>

<template>
  <div class="tasks-page">
    <h1 class="title">My Tasks</h1>

    <TaskForm @add="store.addTask" />

    <div class="filters">
      <button :class="{ active: filter === 'all' }" @click="filter = 'all'">
        All
      </button>
      <button
        :class="{ active: filter === 'active' }"
        @click="filter = 'active'"
      >
        Active
      </button>
      <button
        :class="{ active: filter === 'completed' }"
        @click="filter = 'completed'"
      >
        Completed
      </button>
    </div>

    <ul class="task-list">
      <TaskItem
        v-for="task in filteredTasks"
        :key="task.id"
        :task="task"
        @delete="store.deleteTask"
        @toggle="store.toggleTask"
      />
    </ul>
  </div>
</template>
<style scoped>
.tasks-page {
  max-width: 600px;
}

.title {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 2rem;
}

.filters {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.filters button {
  padding: 0.5rem 1.25rem;
  border-radius: var(--radius-full);
  background: var(--bg-tertiary);
  color: var(--text-secondary);
  font-weight: 500;
  font-size: 0.875rem;
  transition: all 0.2s;
}

.filters button:hover {
  background: var(--primary-light);
  color: var(--primary);
}

.filters button.active {
  background: var(--primary);
  color: white;
}

.task-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 0;
}
</style>
