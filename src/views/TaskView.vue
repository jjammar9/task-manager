<script setup>
import { ref, computed } from "vue";

const tasks = ref([
  { id: 1, title: "Buy milk", completed: false },
  { id: 2, title: "Learn Vue", completed: false },
  { id: 3, title: "Push to GitHub", completed: false },
]);

const filter = ref("all");

const filteredTasks = computed(() => {
  if (filter.value === "active") return tasks.value.filter((t) => !t.completed);
  if (filter.value === "completed")
    return tasks.value.filter((t) => t.completed);
  return tasks.value;
});

const newTask = ref("");

const addTask = () => {
  if (newTask.value === "") return;
  tasks.value.push({
    id: Date.now(),
    title: newTask.value,
    completed: false,
  });
  newTask.value = "";
};

const deleteTask = (id) => {
  tasks.value = tasks.value.filter((t) => t.id !== id);
};

const toggleTask = (id) => {
  const task = tasks.value.find((t) => t.id === id);
  task.completed = !task.completed;
};
</script>

<template>
  <div class="tasks-page">
    <h1 class="title">My Tasks</h1>

    <div class="add-task">
      <input
        type="text"
        v-model="newTask"
        placeholder="Add a new task..."
        @keyup.enter="addTask"
      />
      <button @click="addTask">Add</button>
    </div>

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
      <li v-for="task in filteredTasks" :key="task.id" class="task-item">
        <input
          type="checkbox"
          :checked="task.completed"
          @change="toggleTask(task.id)"
        />
        <span :class="{ completed: task.completed }">{{ task.title }}</span>
        <button class="delete-btn" @click="deleteTask(task.id)">✕</button>
      </li>
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

.add-task {
  display: flex;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.add-task input {
  flex: 1;
  padding: 0.75rem 1rem;
  border: 1.5px solid var(--border);
  border-radius: var(--radius-md);
  font-size: 0.95rem;
  color: var(--text-primary);
  background: var(--bg-primary);
  transition: border 0.2s;
}

.add-task input:focus {
  border-color: var(--primary);
}

.add-task button {
  padding: 0.75rem 1.5rem;
  background: var(--primary);
  color: white;
  border-radius: var(--radius-md);
  font-weight: 600;
  font-size: 0.95rem;
  transition: background 0.2s;
}

.add-task button:hover {
  background: var(--primary-dark);
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
}

.task-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  justify-content: space-between;
  padding: 1rem 1.25rem;
  background: var(--bg-primary);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow);
  transition: box-shadow 0.2s;
}

.task-item:hover {
  box-shadow: var(--shadow-md);
}

.task-item span {
  flex: 1;
  font-size: 0.95rem;
  color: var(--text-primary);
}

.delete-btn {
  background: transparent;
  color: var(--text-muted);
  font-size: 1rem;
  padding: 0.25rem 0.5rem;
  border-radius: var(--radius-sm);
  transition: all 0.2s;
}

.delete-btn:hover {
  background: var(--primary-light);
  color: var(--primary);
  transform: scale(1.1);
}

.delete-btn:active {
  transform: scale(0.95);
}

.completed {
  text-decoration: line-through;
  color: var(--text-muted);
}
</style>
