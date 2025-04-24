<template>
    <div class="container mx-auto p-4">
        <h1 class="text-2xl font-bold mb-4">Get Items</h1>
        <button @click="fetchItems" class="bg-blue-500 text-white px-4 py-2 rounded mb-4">
            Fetch Items
        </button>

        <div v-if="isLoading" class="text-gray-500">Loading...</div>
        <div v-if="error" class="text-red-500">{{ error }}</div>
        <ul v-else>
            <li v-for="item in items" :key="item.id" class="bg-gray-200 p-2 mb-2 rounded">
                {{ item.name }}
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const items = ref([])
const isLoading = ref(false)
const error = ref(null)

const fetchItems = async () => {
    isLoading.value = true
    error.value = null

    try {
        const response = await axios.get('http://localhost:3000/api/items')
        items.value = response.data
    } catch (err) {
        error.value = 'Failed to fetch items'
        console.error(err)
    } finally {
        isLoading.value = false
    }
}
</script>

<style scoped>
/* Add additional styling if needed */
</style>