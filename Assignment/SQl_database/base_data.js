const mysql = require('mysql2')

const dbConfig ={
    host: 'localhost',
    user: 'root',
    password: 'Fluff_Mac_Wuff_Wuff_0198',
    database: 'BaseDatabase'

}

const connection = mysql.createConnection(dbConfig)

connection.connect((err)=>{
    if(err){
        
        console.error('Error connecting to the database: ' +err.stack)
        return

        
    }

    console.log('connected to the database as id' + connection.threadId);
    let sql = "INSERT INTO Employees (idEmployees, Name, Department, Years_Active, Salary) VALUES (1001, 'Alex Miller', 'Human Resources', '3', 55000.75), (2054, 'Brenda Chen', 'Research & Development', '8', 92100.50), (3123, 'Carlos Rodriguez', 'Customer Support', '1', 42300.00), (4567, 'Diana Johnson', 'Finance', '12', 115750.20), (5890, 'Eve OConnell', 'Product Management', '6', 88900.99)";

    connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });

})






