const express = require('express')
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

const foodData = require('./data/food.json');
app.use(cors())

app.get('/', (req, res) =>{
    res.send('Server ten is running')
});

app.get('/food', (req, res) =>{
    res.send(foodData);
})
app.get('/food/:id', (req, res) =>{
    const id = req.params.id;
    console.log(id);
    const selectFood = foodData.find(n => n.id === id);
    res.send(selectFood);
})

app.listen(port, () =>{
    console.log(`assignment ten is running on port: ${port}`)
})