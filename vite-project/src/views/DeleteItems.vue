<template>
    <div class="container mx-auto p-4">
        <h1 class="text-2xl font-bold mb-4">Delete Items</h1>
        <button @click="deleteItems" class="bg-red-500 text-white px-4 py-2 rounded">
            Delete First 2 Items
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

const deleteItems = async () => {
    isLoading.value = true
    error.value = null
    success.value = null

    try {
        const response = await axios.delete('http://localhost:3000/api/items')
        success.value = 'Items deleted successfully!'
    } catch (err) {
        error.value = 'Failed to delete items'
        console.error(err)
    } finally {
        isLoading.value = false
    }
}
</script>

<style scoped>
/* Add additional styling if needed */
</style>