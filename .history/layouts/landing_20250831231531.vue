<!-- components/landing/LandingNavbar.vue -->
<template>
  <nav class="navbar">
    <!-- Your navbar content -->
    <div class="nav-actions">
      <button @click="$emit('open-auth', 'login')" class="login-btn">
        Login
      </button>
      <button @click="$emit('open-auth', 'signup')" class="signup-btn">
        Sign Up
      </button>
    </div>
  </nav>
</template>

<script setup lang="ts">
// Define emits
defineEmits<{
  'open-auth': [mode: 'login' | 'signup']
}>()
</script>

<style scoped>
/* Your navbar styles */
.navbar {
  /* styles */
}

.nav-actions {
  display: flex;
  gap: 1rem;
}

.login-btn,
.signup-btn {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: all 0.2s;
}

.login-btn {
  background: transparent;
  color: inherit;
}

.login-btn:hover {
  background: rgba(0, 0, 0, 0.05);
}

.signup-btn {
  background: #3b82f6;
  color: white;
}

.signup-btn:hover {
  background: #2563eb;
}
</style>