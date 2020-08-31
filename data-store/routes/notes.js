const express = require('express')
const router = express.Router()
const fs = require('fs')
const path = require('path')

router.get('/notes', async (req, res) => {
    const category = 'node';
    const Note = require("../models/note")(category);

    try {
        const notes = await Note.find()
        if (!notes) {
            return res.status(404).send()
        }

        res.send(notes)
    } catch (e) {
        res.status(500).send()
    }
})

router.post('/notes', async (req, res) => {
    const title = req.body.title
    const content = req.body.content
    const category = req.body.category.toLowerCase()

    if (!title || title.trim() === '' || typeof title === 'undefined') {
        return res.status(400).send({
            error: "Please provide title"
        })
    }

    if (!category || category.trim() === '' || typeof category === 'undefined') {
        return res.status(400).send({
            error: "Please provide the category"
        })
    }

    // write into file
    const inputFilePath = path.join(__dirname, "..", "data", category, title+".txt");
    fs.writeFile(inputFilePath, content, (err) => {
        if (err) {
            // log success
        } else {
            // log failue
        }
    });

    // write into mongo
    const Note = require("../models/note")(category);
    const note = new Note({
        question: title,
        answer: content,
        status: 'A',
        level: '1'
    })

    try {
        await note.save()
        res.status(201).send(note)
    } catch(error) {
        res.status(400).send(error)
    }


})

module.exports = router