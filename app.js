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

