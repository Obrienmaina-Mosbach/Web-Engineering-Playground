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



    //let sql = "INSERT INTO Employees (idEmployees, Name, Department, Years_Active, Salary) VALUES (1001, 'Alex Miller', 'Human Resources', '3', 55000.75), (2054, 'Brenda Chen', 'Research & Development', '8', 92100.50), (3123, 'Carlos Rodriguez', 'Customer Support', '1', 42300.00), (4567, 'Diana Johnson', 'Finance', '12', 115750.20), (5890, 'Eve OConnell', 'Product Management', '6', 88900.99)";


    //To prevent SQL Injection use placeholders:

    /*let newRecord = [
        {idEmployees: 995382768,
        Name: 'Colds',
        Department: 'Gardening',
        Years_Active: '12',
        Salary: 14593.3},

        {idEmployees: 2283767,
        Name: 'Mols',
        Department: 'skdarn',
        Years_Active: '2',
        Salary: 23593.3}

    ]

        const valuesToInsert = newRecord.map(record => [
        record.idEmployees,
        record.Name,
        record.Department,
        record.Years_Active,
        record.Salary
    ]);

    const insertQuery = "INSERT INTO Employees (idEmployees, Name, Department, Years_Active, Salary) VALUES ? ";

    connection.query(insertQuery, [valuesToInsert], (err, results) => {
            if (err) {
                console.error("Error inserting records:", err);
                throw err;
            }
            console.log(`${results.affectedRows} records inserted.`);
            // You'll get affectedRows count for multiple inserts

            createTable(connection)
        });
        */


        /*function createTable(dbConnection) {
                const createTableQuery = `CREATE TABLE IF NOT EXISTS Companies (
                id INT AUTO_INCREMENT PRIMARY KEY,
                Name VARCHAR(255),
                Website VARCHAR(255)
                )`

                dbConnection.query(createTableQuery, (err, results) => {
                if (err) {
                    console.error('Error creating table:', err);
                    throw err; // Re-throw or handle error
                }
                console.log('Table "Companies" created or already exists.');
            });
        }*/

            /*const selectQuery = 'SELECT * FROM Employees'

            connection.query(selectQuery, (err, results) => {
                if(err) throw err;
                console.log('Fetched date', results)
            })*/


        /*const updateData = {
            Department: 'School Liaise'

        }
        const EmployeeIdToUpdate = 24578567;

        const updateQuery = 'UPDATE Employees SET ? WHERE idEmployees = ?'

        connection.query(updateQuery, [updateData, EmployeeIdToUpdate], (err, results) => {
            if (err) throw err;
            console.log('Data updated successfully')
        })*/


        
        const deleteData = 1001;

        const deleteQuery = 'DELETE FROM Employees WHERE idEmployees = ?'

        connection.query(deleteQuery, [deleteData], (err, results) => {
            if (err) throw err;
            console.log('Record deleted successfully')
        })

})







