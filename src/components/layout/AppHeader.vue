<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <header class="header">
    <h2 class="page-title">{{ route.name }}</h2>
  </header>
</template>

<style scoped>
.header {
  height: 64px;
  background: var(--bg-primary);
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: center;
  padding: 0 var(--space-8);
  box-shadow: var(--shadow);
}

.page-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-primary);
  text-transform: capitalize;
}
</style>
