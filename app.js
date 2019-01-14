const express = require('express');
const app = express();  //set up express app
const db = require('./db/db.js');

//get all todos
app.get('/todos', (req, res) => {
    res.status(200).send({
        success: 'true',
        message: 'todos retrieved successfully',
        todos: db
    });
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});