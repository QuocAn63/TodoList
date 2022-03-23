const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'todolist'    
})

connection.connect(error => {
    if(error) {
        console.error('error connecting: ' + error.stack)
        return;
    }

    console.log('connected as id: ' + connection.threadId)
})

module.exports = connection