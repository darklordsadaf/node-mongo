const express = require('express')
const cors = require('cors')
var bodyParser = require('body-parser')
const app = express()


app.use(cors());
app.use(bodyParser.json())

const users = ["Ron", "Ash", "Ben", "Paul"]

app.get('/', (req, res) => {
    const fruit = {
        product: "Mango",
        price: 300
    }
    res.send(fruit)
});

app.get('/fruit/banana', (req, res) => {
    res.send({ fruit: "banana", price: 120 })
});

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const name = users[id];
    console.log(req.params.id)
    res.send({ id, name })

})


//post

app.post('/addUser', (req, res) => {
    const user = req.body;
    user.id = 55;
    console.log('data received', req.body);
    res.send(user)
})

app.listen(3000, () => console.log('Listening to port 3000'))