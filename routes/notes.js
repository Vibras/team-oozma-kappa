const express = require('express')
const router = express.Router()
const Note = require('../models/note')

// Get All
router.get('/', async (req, res) => {
    res.send('Hello World')
})

// Get One
router.get('/:id', (req, res) => {
    // req.params.id
    res.send(req.params.id)
})

// Create One
router.post('/', (req, res) => {

})

// Update One
router.patch('/:id', (req, res) => {

})

// Delete One
router.delete('/:id', (req, res) => {

})

module.exports = router
