<!-- PostList.vue -->
<template>
    <div>
        <PostItem v-for="post in posts" :key="post.id" :post="post" @select-post="handleSelectPost" />
    </div>
</template>

<script setup>
import { usePostStore } from '../stores/main'
import PostItem from './PostItem.vue'

const store = usePostStore()
const posts = store.posts

const handleSelectPost = (post) => {
    console.log(post)
}
</script>