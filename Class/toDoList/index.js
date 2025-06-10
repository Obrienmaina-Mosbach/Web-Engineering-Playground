// index.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const methodOverride = require('method-override');
const path = require('path');
const fs = require('fs'); // Keep for logger

// Load environment variables from .env file
dotenv.config();

const Todo = require('./Models/todo'); // Import your Todo Mongoose model

const app = express();
const PORT = process.env.PORT || 3000;

// --- Middlewares ---
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Ensure EJS looks in the 'views' directory

// Middleware to parse URL-encoded bodies (for form data)
app.use(express.urlencoded({ extended: true }));
// Middleware for parsing JSON data (for API endpoints)
app.use(express.json());
// Middleware for method override (to use PUT/DELETE from HTML forms)
app.use(methodOverride('_method'));

// Custom Logger Middleware (good for debugging)
function logger(req, res, next) {
    const logMessage = `${new Date().toISOString()} - ${req.method} ${req.url}\n`;
    fs.appendFile('access.log', logMessage, (err) => {
        if (err) {
            console.error('Error writing to log file:', err);
        }
    });
    next();
}
app.use(logger);

// --- MongoDB Connection ---
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/todoApp')
    .then(() => console.log('MongoDB connected successfully!'))
    .catch(err => console.error('MongoDB connection error:', err));

// --- Routes ---

// Route to display all tasks (the main To-Do List page)
app.get('/', async (req, res) => { //'/' for simplicity as main page
    try {
        const todos = await Todo.find({}); // Fetch all tasks from MongoDB
        res.render('todolist', { todos }); // Render todolist.ejs, passing the tasks
    } catch (error) {
        console.error('Error retrieving tasks for view:', error);
        res.status(500).send('Failed to load to-do list.');
    }
});

// Route to create a new task
app.post('/todos', async (req, res) => {
    try {
        const { title, description } = req.body; // EJS form uses 'title' and 'description'
        if (!title) {
            return res.status(400).send('Task title is required.');
        }

        const newTodo = new Todo({
            taskName: title,       // Map 'title' from form to 'taskName' in schema
            taskDescription: description, // Map 'description' from form to 'taskDescription'
            status: 'pending'      // New tasks are 'pending' by default
        });

        await newTodo.save();
        res.redirect('/'); // Redirect back to the main list after creation
    } catch (error) {
        console.error('Error creating task:', error);
        res.status(500).send('Failed to add task.');
    }
});

// Route to toggle task status (Mark as Done/Undone)
app.put('/todos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { done } = req.body; // 'done' comes as 'true' or 'false' string from the form

        // Determine the new status based on the 'done' value
        const newStatus = (done === 'true' || done === true) ? 'completed' : 'pending';

        const updatedTodo = await Todo.findByIdAndUpdate(
            id,
            { status: newStatus },
            { new: true, runValidators: true } // Return updated doc and run schema validators
        );

        if (!updatedTodo) {
            return res.status(404).send('Task not found.');
        }
        res.redirect('/'); // Redirect back to the main list
    } catch (error) {
        console.error('Error updating task status:', error);
        res.status(500).send('Failed to update task.');
    }
});

// Route to delete a task
app.delete('/todos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedTodo = await Todo.findByIdAndDelete(id);

        if (!deletedTodo) {
            return res.status(404).send('Task not found.');
        }
        res.redirect('/'); // Redirect back to the main list
    } catch (error) {
        console.error('Error deleting task:', error);
        res.status(500).send('Failed to delete task.');
    }
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});