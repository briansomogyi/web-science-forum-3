import express from 'express'
const router = express.Router()

// Example data
let items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    { id: 4, name: 'Item 4' },
    { id: 5, name: 'Item 5' },
]

// 1. Delete an item by ID
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const itemIndex = items.findIndex((item) => item.id === id)
    if (itemIndex !== -1) {
        const deletedItem = items.splice(itemIndex, 1)
        res.json({ message: 'Item deleted successfully', deletedItem })
    } else {
        res.status(404).json({ error: 'Item not found' })
    }
})

// 2. Delete all items
router.delete('/', (req, res) => {
    const deletedItems = items
    items = []
    res.json({ message: 'All items deleted', deletedItems })
})

// 3. Delete items by range
router.delete('/range/:start/:end', (req, res) => {
    const start = parseInt(req.params.start) - 1
    const end = parseInt(req.params.end)
    const deletedItems = items.splice(start, end - start)
    res.json({ message: 'Items deleted successfully', deletedItems })
})

// 4. Delete by query parameter (e.g., delete by name)
router.delete('/name', (req, res) => {
    const { name } = req.query
    items = items.filter((item) => item.name !== name)
    res.json({ message: `Items with name "${name}" deleted`, items })
})

// 5. Delete items with a specific condition
router.delete('/condition', (req, res) => {
    const { condition } = req.body // Define your condition logic
    const deletedItems = items.filter((item) => item.condition === condition)
    items = items.filter((item) => item.condition !== condition)
    res.json({ message: 'Items deleted based on condition', deletedItems })
})

export default router
