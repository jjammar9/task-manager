<script setup>
import { computed } from "vue";
import { useTaskStore } from "@/stores/taskStore";

const store = useTaskStore();

const progress = computed(() => {
  if (store.totalTasks === 0) return 0;
  return Math.round((store.completedTasks.length / store.totalTasks) * 100);
});
</script>

<template>
  <div class="home">
    <h1 class="title">Dashboard</h1>
    <p class="subtitle">Here's your progress today</p>

    <div class="stats">
      <div class="stat-card">
        <span class="stat-number">{{ store.totalTasks }}</span>
        <span class="stat-label">Total Tasks</span>
      </div>
      <div class="stat-card completed">
        <span class="stat-number">{{ store.completedTasks.length }}</span>
        <span class="stat-label">Completed</span>
      </div>
      <div class="stat-card active">
        <span class="stat-number">{{ store.activeTasks.length }}</span>
        <span class="stat-label">Active</span>
      </div>
    </div>

    <div class="progress-section">
      <div class="progress-header">
        <span>Overall Progress</span>
        <span>{{ progress }}%</span>
      </div>
      <div class="progress-bar">
        <div class="progress-fill" :style="{ width: progress + '%' }"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home {
  max-width: 700px;
}

.title {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.25rem;
}

.subtitle {
  color: var(--text-secondary);
  margin-bottom: 2rem;
}

.stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;
}

.stat-card {
  background: var(--bg-primary);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  box-shadow: var(--shadow);
}

.stat-card.completed {
  background: #f0fdf4;
  border-color: #bbf7d0;
}

.stat-card.active {
  background: #eff6ff;
  border-color: #bfdbfe;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-primary);
}

.stat-card.completed .stat-number {
  color: var(--success);
}

.stat-card.active .stat-number {
  color: var(--primary);
}

.stat-label {
  font-size: 0.875rem;
  color: var(--text-secondary);
  font-weight: 500;
}

.progress-section {
  background: var(--bg-primary);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 1.5rem;
  box-shadow: var(--shadow);
}

.progress-header {
  display: flex;
  justify-content: space-between;
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.progress-bar {
  height: 10px;
  background: var(--bg-tertiary);
  border-radius: var(--radius-full);
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: var(--primary);
  border-radius: var(--radius-full);
  transition: width 0.5s ease;
}
</style>
