// src/stores/main.js
import { defineStore } from 'pinia'

export const usePostStore = defineStore('postStore', {
    // State: The central data of the store
    state: () => {
        return {
            posts: [], // Array to hold post objects
            currentPost: null, // For storing the currently selected post
            isLoading: false, // Flag for loading state
            errorMessage: null, // Store any error messages
        }
    },

    // Getters: Used to compute derived state
    getters: {
        postCount(state) {
            return state.posts.length // Total number of posts
        },
        hasError(state) {
            return !!state.errorMessage // Boolean flag for errors
        },
    },

    // Actions: Methods that modify the state or handle business logic
    actions: {
        // Fetch posts from an API or backend
        async fetchPosts() {
            this.isLoading = true
            try {
                const response = await fetch('https://example.com/api/posts')
                const data = await response.json()
                this.posts = data
            } catch (error) {
                this.errorMessage = 'Failed to fetch posts'
            } finally {
                this.isLoading = false
            }
        },

        // Set the currently selected post
        selectPost(post) {
            this.currentPost = post
        },

        // Add a new post to the store
        addPost(newPost) {
            this.posts.push(newPost)
        },

        // Clear the error message
        clearError() {
            this.errorMessage = null
        },
    },
})
