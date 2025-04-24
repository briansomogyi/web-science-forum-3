<template>
    <div class="container mx-auto p-4">
        <h1 class="text-2xl font-bold mb-4">Update Items</h1>
        <button @click="updateItems" class="bg-yellow-500 text-white px-4 py-2 rounded">
            Update 5 Items
        </button>

        <div v-if="isLoading" class="text-gray-500">Loading...</div>
        <div v-if="error" class="text-red-500">{{ error }}</div>
        <div v-if="!error && !isLoading">Items updated successfully!</div>
    </div>
</template>

<script setup>
import { usePostStore } from '../stores/postStore'

const postStore = usePostStore()

// Use Pinia actions
const { isLoading, error } = postStore

const updateItems = () => {
    postStore.updateItems([
        { name: 'Updated Item 1' },
        { name: 'Updated Item 2' },
        { name: 'Updated Item 3' },
        { name: 'Updated Item 4' },
        { name: 'Updated Item 5' },
    ])
}
</script>