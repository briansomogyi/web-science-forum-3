<template>
    <div class="container mx-auto p-4">
        <h1 class="text-2xl font-bold mb-4">Add Items</h1>
        <button @click="addItems" class="bg-green-500 text-white px-4 py-2 rounded">
            Add 5 Items
        </button>

        <div v-if="isLoading" class="text-gray-500">Loading...</div>
        <div v-if="error" class="text-red-500">{{ error }}</div>
        <div v-if="success" class="text-green-500">{{ success }}</div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const isLoading = ref(false)
const error = ref(null)
const success = ref(null)

const addItems = async () => {
    isLoading.value = true
    error.value = null
    success.value = null

    const newItems = [
        { name: 'New Item 1' },
        { name: 'New Item 2' },
        { name: 'New Item 3' },
        { name: 'New Item 4' },
        { name: 'New Item 5' },
    ]

    try {
        const response = await axios.post('http://localhost:3000/api/items', {
            newItems,
        })
        success.value = 'Items added successfully!'
    } catch (err) {
        error.value = 'Failed to add items'
        console.error(err)
    } finally {
        isLoading.value = false
    }
}
</script>

<style scoped>
/* Add additional styling if needed */
</style>