import { defineStore } from 'pinia'
import axios from 'axios' // Import Axios to make HTTP requests

export const usePostStore = defineStore('postStore', {
    // State: Stores posts and related data
    state: () => ({
        posts: [], // Array to store posts
        isLoading: false, // Flag for loading state
        error: null, // Error message
    }),

    // Actions: Define logic for fetching posts
    actions: {
        async fetchPosts() {
            this.isLoading = true // Set loading state to true
            this.error = null // Clear previous errors

            try {
                // Make the API request
                const response = await axios.get('http://localhost:3000/api/data') // Replace with your actual API endpoint
                this.posts = response.data // Save the response data into the state
            } catch (err) {
                // Handle errors
                this.error = 'Failed to fetch posts'
                console.error(err)
            } finally {
                this.isLoading = false // Reset loading state
            }
        },
    },

    // Getters (optional): Define derived state
    getters: {
        postCount(state) {
            return state.posts.length // Compute total number of posts
        },
    },
})
