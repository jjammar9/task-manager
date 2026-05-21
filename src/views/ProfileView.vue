<script setup>
import { useTaskStore } from "@/stores/taskStore";

const store = useTaskStore();
</script>

<template>
  <div class="profile">
    <div class="profile-card">
      <div class="avatar">👤</div>
      <h2>My Profile</h2>
      <p class="email">developer@taska.com</p>
    </div>

    <div class="stats">
      <div class="stat">
        <span class="number">{{ store.totalTasks }}</span>
        <span class="label">Total Tasks</span>
      </div>
      <div class="stat">
        <span class="number">{{ store.completedTasks.length }}</span>
        <span class="label">Completed</span>
      </div>
      <div class="stat">
        <span class="number">{{ store.activeTasks.length }}</span>
        <span class="label">Active</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.profile {
  max-width: 500px;
}

.profile-card {
  background: var(--bg-primary);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 2rem;
  text-align: center;
  margin-bottom: 1.5rem;
  box-shadow: var(--shadow);
}

.avatar {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.profile-card h2 {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.25rem;
}

.email {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.stat {
  background: var(--bg-primary);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  box-shadow: var(--shadow);
}

.number {
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary);
}

.label {
  font-size: 0.875rem;
  color: var(--text-secondary);
}
</style>
