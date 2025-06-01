connection.end((err)=>{
    if(err){
        console.error('Error closing the database connection: ' +err.stack)
        return
    }

    console.log('Database connection closed')
})