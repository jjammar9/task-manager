<script setup>
import { ref } from "vue";

const emit = defineEmits(["add"]);
const newTask = ref("");

const handleAdd = () => {
  if (newTask.value === "") return;
  emit("add", newTask.value);
  newTask.value = "";
};
</script>

<template>
  <div class="add-task">
    <input
      type="text"
      v-model="newTask"
      placeholder="Add a new task..."
      @keyup.enter="handleAdd"
    />
    <button @click="handleAdd">Add</button>
  </div>
</template>

<style scoped>
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
</style>
