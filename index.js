const express = require('express')
const app = express();
const fruits = [
    { id: 1, Name: "Apple", "quantity": 5 },
    { id: 2, Name: "Banana", "quantity": 5 },
    { id: 3, Name: "Orange", "quantity": 5 },
    { id: 4, Name: "Avacado", "quantity": 5 },
    { id: 5, Name: "Nector", "quantity": 5 },
    { id: 6, Name: "Guava", "quantity": 5 }
]
const port = 5000;
app.get('/api/fruits', (req, res) => {
    res.json(fruits)
})
app.post('/api/fruits/fruit', (req, res) => {
    console.log('good')
})
app.listen(port, () => {
    console.log(`server running on ${port}`)
})
