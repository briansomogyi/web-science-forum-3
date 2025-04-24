<template>
    <div class="container mx-auto p-4">
        <h1 class="text-2xl font-bold mb-4">Update Items</h1>
        <button @click="updateItems" class="bg-yellow-500 text-white px-4 py-2 rounded">
            Update 5 Items
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

const updateItems = async () => {
    isLoading.value = true
    error.value = null
    success.value = null

    const updatedItems = [
        { name: 'Updated Item 1' },
        { name: 'Updated Item 2' },
        { name: 'Updated Item 3' },
        { name: 'Updated Item 4' },
        { name: 'Updated Item 5' },
    ]

    try {
        const response = await axios.put('http://localhost:3000/api/items', {
            updatedItems,
        })
        success.value = 'Items updated successfully!'
    } catch (err) {
        error.value = 'Failed to update items'
        console.error(err)
    } finally {
        isLoading.value = false
    }
}
</script>

<style scoped>
/* Add additional styling if needed */
</style>