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

<style>
@tailwind base;
@tailwind components;
</style>
