const express = require('express')
const router = express.Router()
const Note = require('../models/note')

// Get All
router.get('/', async (req, res) => {
    try {
        const notes = await Note.find()
        res.json(notes)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Get One
router.get('/:id', (req, res) => {
    const note = new Note({
        text: req.body.text
    })
    try{
        const newNote = await note.save()
        res.status(201).json(newNote)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
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


slxt25v2