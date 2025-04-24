import { defineStore } from 'pinia'
import axios from 'axios'

export const usePostStore = defineStore('postStore', {
    // State to store items and any related flags
    state: () => ({
        items: [], // Stores fetched items
        isLoading: false, // Loading state
        error: null, // Error messages
    }),

    // Actions to interact with the API and update the state
    actions: {
        async fetchItems() {
            this.isLoading = true
            this.error = null
            try {
                const response = await axios.get('http://localhost:3000/api/items')
                this.items = response.data // Save fetched items to state
            } catch (err) {
                this.error = 'Failed to fetch items'
                console.error(err)
            } finally {
                this.isLoading = false
            }
        },

        async addItems(newItems) {
            this.isLoading = true
            this.error = null
            try {
                const response = await axios.post('http://localhost:3000/api/items', {
                    newItems,
                })
                this.items = response.data.items // Update state with the new items
            } catch (err) {
                this.error = 'Failed to add items'
                console.error(err)
            } finally {
                this.isLoading = false
            }
        },

        async updateItems(updatedItems) {
            this.isLoading = true
            this.error = null
            try {
                const response = await axios.put('http://localhost:3000/api/items', {
                    updatedItems,
                })
                this.items = response.data.items // Update state with the updated items
            } catch (err) {
                this.error = 'Failed to update items'
                console.error(err)
            } finally {
                this.isLoading = false
            }
        },

        async deleteItems() {
            this.isLoading = true
            this.error = null
            try {
                const response = await axios.delete('http://localhost:3000/api/items')
                this.items = response.data.remainingItems // Update state with remaining items
            } catch (err) {
                this.error = 'Failed to delete items'
                console.error(err)
            } finally {
                this.isLoading = false
            }
        },
    },
})
