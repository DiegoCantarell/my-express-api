// Usando objeto express
const express = require('express')
// App de Express
const app = express()
app.use(express.json()) // Indicamos que usaremos JSON
// Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000

// Con esto inicializamos esta app
app.listen(port, () => {
 console.log(`Example app listening on port ${port}`)
})
//GET Create an endpoint that returns a list of explorers
app.get('/v1/explorers', (req, res) => {
    console.log(`Api GET ALL request ${new Date()}`)
    const data1 = {id:1, name:"data1"}
    const data2 = {id:2, name:"data2"}
    const data3 = {id:3, name:"data3"}
    const data4 = {id:4, name:"data4"}
    const data5 = {id:5, name:"data5"}
    
    const data = [data1,data2,data3,data4,data5]
    res.status(200).json(data)
})
//GET Create an endpoint that an explorer returns to you using an ID
app.get('/v1/explorers/:id',(req, res) => {
    console.log(`API explorers GET request ${new Date()}`)
    console.log(`Getting explorer with id ${req.params.id}`)
    const explorer = {id:1, name: "Diego"}
    res.status(200).json(explorer)
})
//POST Create an endpoint that is responsible for creating an explorer
app.post('/v1/explorers',(req, res) => {
    console.log(`API Explorers POST request ${new Date()}`)
    const requestBody = req.body // client parameter
    res.status(201).json({message: "Created"})

})
//PUT Create an endpoint that is responsible for updating an explorer
app.put('/v1/explorers/:id',(req, res) => {
    console.log(`API Explorers PUT request ${new Date()}`)
    console.log(`Update explorer with id ${req.params.id}`)
    const requestBody = req.body //client parameter 
    res.status(200).json({message: "Updated!"})
})
//DELETE Crea un endpoint para eliminar un explorer
app.delete('/v1/explorers/:id', (req, res) => {
    console.log(`API explorers DELETE request ${new Date()}`)
    console.log(`Delete explorer with id ${req.params.id}`)
    const requestBody = req.body //client parameter 
    res.status(200).json({message: "Deleted"})
})







