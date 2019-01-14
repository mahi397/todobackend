const express = require('express');
const app = express();  //set up express app
const db = require('./db/db.js');
const bodyparser = require('body-parser');

//get all todos
app.get('/api/todos', (req, res) => {
    res.status(200).send({
        success: 'true',
        message: 'todos retrieved successfully',
        todos: db
    });
});

//parse incoming requests' data
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));

//create new todo
app.post('/api/todos', (req, res) => {
    if(!req.body.title){
        return res.status(400).send({
            success: 'false',
            message: 'title is required'
        });
    }
    else if(!req.body.description){
        return res.status(400).send({
            success: 'false',
            message: 'description is required'
        });
    }

    const todo = [{
        id: db.length + 1,
        title: req.body.title,
        description: req.body.description
    }];

    db.push(todo);
    return res.status(401).send({
        success: 'true',
        message: 'todo created successfully',
        todo
    });
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});