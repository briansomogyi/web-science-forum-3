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

// 1. Update an item by ID
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const { name } = req.body
    const item = items.find((item) => item.id === id)
    if (item) {
        item.name = name || item.name
        res.json(item)
    } else {
        res.status(404).json({ error: 'Item not found' })
    }
})

// 2. Replace all items
router.put('/', (req, res) => {
    const { newItems } = req.body
    if (!Array.isArray(newItems) || newItems.length === 0) {
        return res.status(400).json({ error: 'An array of items is required' })
    }
    items = newItems.map((item, index) => ({
        id: index + 1,
        name: item.name || `Replaced Item ${index + 1}`,
    }))
    res.json({ message: 'Items replaced successfully', items })
})

// 3. Append metadata to an existing item
router.put('/metadata/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const { description } = req.body
    const item = items.find((item) => item.id === id)
    if (item) {
        item.description = description || 'No description provided'
        res.json(item)
    } else {
        res.status(404).json({ error: 'Item not found' })
    }
})

// 4. Batch update multiple items
router.put('/batch', (req, res) => {
    const { updatedItems } = req.body
    if (!Array.isArray(updatedItems)) {
        return res.status(400).json({ error: 'An array of updated items is required' })
    }
    updatedItems.forEach((updatedItem) => {
        const item = items.find((item) => item.id === updatedItem.id)
        if (item) {
            item.name = updatedItem.name || item.name
        }
    })
    res.json({ message: 'Batch update completed', items })
})

// 5. Update item status
router.put('/status/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const { status } = req.body
    const item = items.find((item) => item.id === id)
    if (item) {
        item.status = status || 'active'
        res.json(item)
    } else {
        res.status(404).json({ error: 'Item not found' })
    }
})

export default router
