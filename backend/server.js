require('./db.js')
const express = require('express')
var cors = require('cors') 
// require('./routes/notes.js')/

const port = 3008

const app = express()
app.use(cors({ origin: 'http://localhost:3000'}));
app.use(express.json())
// availlable routes
app.use('/api/auth', require('./routes/auth'))
// app.use('/api/notes', require('./routes/notes'))
// app.use('/api/Notes', require('./routes/Notes'))

app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`)
})