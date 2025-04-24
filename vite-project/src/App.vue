<script setup>
import { RouterLink, RouterView } from "vue-router"
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <nav class="bg-gray-800 text-white p-4 flex gap-4">
    <RouterLink to="/get-items" class="hover:text-blue-300">Get Items</RouterLink>
    <RouterLink to="/add-items" class="hover:text-blue-300">Add Items</RouterLink>
    <RouterLink to="/update-items" class="hover:text-blue-300">Update Items</RouterLink>
    <RouterLink to="/delete-items" class="hover:text-blue-300">Delete Items</RouterLink>
  </nav>
  <RouterView />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
