<template>
  <aside class="sidebar">
    <h1 class="logo">Taska</h1>
    <nav>
      <RouterLink to="/">🏠 Home</RouterLink>
      <RouterLink to="/tasks">✅ Tasks</RouterLink>
      <RouterLink to="/profile">👤 Profile</RouterLink>
    </nav>
  </aside>
</template>

<style scoped>
.sidebar {
  width: 260px;
  min-height: 100vh;
  background: var(--bg-primary);
  border-right: 1px solid var(--border);
  padding: 2rem;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 2rem;
}

nav {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 2rem;
}

nav a {
  padding: 0.75rem 1rem;
  border-radius: 10px;
  color: var(--text-secondary);
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s;
}

nav a:hover {
  background: var(--primary-light);
  color: var(--primary);
}

nav a.router-link-active {
  background: var(--primary-light);
  color: var(--primary);
}
</style>
