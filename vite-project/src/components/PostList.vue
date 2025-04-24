<!-- PostList.vue -->
<template>
    <button @click="fetchPosts">Fetch Posts</button> <!-- Trigger the API call -->

    <div v-if="isLoading">Loading...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else>
        <PostItem v-for="post in posts" :key="post.id" :post="post" @select-post="handleSelectPost" />
    </div>
</template>

<script setup>
import { usePostStore } from '../stores/postStore' // Import the Pinia store

const postStore = usePostStore()

// Extract reactive state and actions from the store
const { posts, isLoading, error, fetchPosts } = postStore

const handleSelectPost = (post) => {
    console.log(post)
}
</script>