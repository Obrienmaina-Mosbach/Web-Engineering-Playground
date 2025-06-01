const express = require('express')
const app = express()
const port = process.env.PORT || 3500

//initializing a route with a get request
app.get('/', (req, res) =>{
    res.sendStatus(500)
    res.json({"message": "Error"})
})

app.listen(port, () =>{
    console.log(`Server is running on port ${port}`)
})

