const app = require('./user.js');
app.get('/users', async (req, res) =>{
    try{
        const users = await
    User.findAll();
        res.json(users)
    } catch(error){
        console.error(error);
        res.status(500).send('Error retrieving users')
    }
})

app.post('/users', async (req, res)=>{
    try{
        const{firstName, email} = req.body;
        const user = await User.create({
            firstName, email
        })

        res.json(user)
    } catch (error) {
        console.error(error);
        res.status(500).send('Error creating user')
    }
})