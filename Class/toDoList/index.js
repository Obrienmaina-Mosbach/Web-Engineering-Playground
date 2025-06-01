const methodOverride = require('method-override');


const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs')
const path = require('path')
const ejs =require('ejs')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));
// Middleware for parsing JSON data
app.use(express.json());
app.use(methodOverride('_method'));

function logger(req, res, next) {
    const logMessage = `${new Date().toISOString()} - ${req.method} ${req.url}\n`

    fs.appendFile('access.log', logMessage, (err) =>{
        if(err) {
            console.error('Error writing to log file:', err)
        }
    })
    next()
}

app.use(logger)


// Dummy data (replace with a database later)
const todos = [
    { id: 1, title: 'Buy groceries' , description: 'Milk, eggs, bread' , done: false },

    { id: 2, title: 'Complete homework', description: 'Math assignment', done: true},
];



app.get('/todos', (req, res) =>{
    res.json(todos)
})


app.post('/todos', (req, res) =>{
    const newTodo = {
        id: todos.length +1,
        title: req.body.title,
        description: req.body.description,
        done: false,
    }

    todos.push(newTodo)
    res.status(201).json(newTodo)


})

app.put('/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const todo = todos.find(t => t.id === id);
    if (todo) {
        todo.done = req.body.done === 'true';
    }
    res.redirect('/todo-list');
});

app.delete('/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = todos.findIndex(t => t.id === id);
    if (index !== -1) {
        todos.splice(index, 1);
    }
    res.redirect('/todo-list');
});


app.get('/todo-list', (req, res) =>{
    res.render('todo-list', { todos })
})

app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
})