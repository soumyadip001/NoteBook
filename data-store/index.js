const express = require('express')
const path = require('path')
const cors = require('cors')
require('./db/mongodb')
const noteRouter = require('./routes/notes')

const app = express()
const port = process.env.PORT || 8000

app.use(cors())
app.use(express.json())
app.use(noteRouter)


app.get('/', (req, res) => {
    res.send('getting data')
})

app.listen(port, () => {
    console.log('Server is running on port '+ port)
})