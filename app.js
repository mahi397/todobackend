const express = require('express');
const app = express();  //set up express app
const db = require('./db/db.js');
const bodyparser = require('body-parser');

//get all todos
app.get('/todos', (req, res) => {
    res.status(200).send({
        success: 'true',
        message: 'todos retrieved successfully',
        todos: db
    });
});

//parse incoming requests' data
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));

const port = 3000;
app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});