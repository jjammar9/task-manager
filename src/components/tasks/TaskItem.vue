<script setup>
defineProps(["task"]);
defineEmits(["delete", "toggle"]);
</script>

<template>
  <li class="task-item">
    <input
      type="checkbox"
      :checked="task.completed"
      @change="$emit('toggle', task.id)"
    />
    <span :class="{ completed: task.completed }">{{ task.title }}</span>
    <button class="delete-btn" @click="$emit('delete', task.id)">✕</button>
  </li>
</template>
<style scoped>
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
