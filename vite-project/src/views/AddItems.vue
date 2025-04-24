<template>
    <div class="container mx-auto p-4">
        <h1 class="text-2xl font-bold mb-4">Add Items</h1>
        <button @click="addItems" class="bg-green-500 text-white px-4 py-2 rounded">
            Add 5 Items
        </button>

        <div v-if="isLoading" class="text-gray-500">Loading...</div>
        <div v-if="error" class="text-red-500">{{ error }}</div>
        <div v-if="!error && !isLoading">Items added successfully!</div>
    </div>
</template>

<script setup>
import { usePostStore } from '../stores/postStore'

const postStore = usePostStore()

// Use Pinia actions
const { isLoading, error } = postStore

const addItems = () => {
    postStore.addItems([
        { name: 'New Item 1' },
        { name: 'New Item 2' },
        { name: 'New Item 3' },
        { name: 'New Item 4' },
        { name: 'New Item 5' },
    ])
}
</script>