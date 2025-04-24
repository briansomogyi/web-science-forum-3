import { defineStore } from 'pinia'

export const usePostStore = defineStore('postStore', {
    state: () => ({
        posts: [],
    }),
    actions: {
        fetchPosts() {
            // Logic for fetching posts
        },
    },
})
