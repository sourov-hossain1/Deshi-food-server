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

app.listen(port, () =>{
    console.log(`assignment ten is running on port: ${port}`)
})