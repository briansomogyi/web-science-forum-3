import express from 'express'
const router = express.Router()

// Example data (in-memory)
let items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    { id: 4, name: 'Item 4' },
    { id: 5, name: 'Item 5' },
]

// 1. Get all items
router.get('/', (req, res) => {
    res.json(items)
})

// 2. Get an item by ID
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const item = items.find((item) => item.id === id)
    item ? res.json(item) : res.status(404).json({ error: 'Item not found' })
})

// 3. Get items by range
router.get('/range/:start/:end', (req, res) => {
    const start = parseInt(req.params.start)
    const end = parseInt(req.params.end)
    res.json(items.slice(start - 1, end))
})

// 4. Get total count of items
router.get('/count', (req, res) => {
    res.json({ count: items.length })
})

// 5. Search items by name
router.get('/search/:name', (req, res) => {
    const name = req.params.name.toLowerCase()
    const filteredItems = items.filter((item) => item.name.toLowerCase().includes(name))
    res.json(filteredItems)
})

export default router
