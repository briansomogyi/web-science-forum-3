<template>
    <div class="container mx-auto p-4">
        <h1 class="text-2xl font-bold mb-4">Delete Items</h1>
        <button @click="deleteItems" class="bg-red-500 text-white px-4 py-2 rounded">
            Delete First 2 Items
        </button>

        <div v-if="isLoading" class="text-gray-500">Loading...</div>
        <div v-if="error" class="text-red-500">{{ error }}</div>
        <div v-if="!error && !isLoading">Items deleted successfully!</div>
    </div>
</template>

<script setup>
import { usePostStore } from '../stores/postStore'

const postStore = usePostStore()

// Use Pinia actions
const { isLoading, error } = postStore

const deleteItems = () => {
    postStore.deleteItems()
}
</script>