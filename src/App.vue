<script setup>
import AppSidebar from "./components/layout/AppSidebar.vue";
</script>

<template>
  <div class="app-layout">
    <AppSidebar />
    <main class="main-content">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.app-layout {
  display: flex;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  padding: 2rem;
  background: white;
}
</style>
