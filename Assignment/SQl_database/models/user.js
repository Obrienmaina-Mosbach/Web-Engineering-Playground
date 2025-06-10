/*const Sequelize = require('sequelize')
const sequelize = require('../sequelize')

const User = sequelize.define('user', {
    name: {
        type: Sequelize.STRING,
    },
    email: {
        type: Sequelize.STRING,
    }
})

module.exports = User;*/


const express = require('express');
const app = express();
const User = require('./user.js'); // Adjust path if needed

app.get('/users', async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving users');
    }
});

module.exports = app; 

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});