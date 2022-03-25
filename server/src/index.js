const express = require('express')
const db = require('./connector')
const cors = require('cors')
const app = express()

app.use(express.urlencoded())
app.use(express.json()) 
app.use(cors())

app.get('/api/get', (req, res) => {
    const sqlInsert = "SELECT * FROM todo"
    db.query(sqlInsert, (error, results, fields) => {
        res.json(results)
        if(error)
            throw error
    })
    
})

app.post('/api/insert', (req, res, next) => {
    const todo_title = req.body.todoTitle
    const todo_content = req.body.todoContent
    
    const sqlInsert = "INSERT INTO todo(todo_title, todo_content) VALUES (?, ?)"
    db.query(sqlInsert, [todo_title, todo_content], (error, results, fields) => {
        if(error) 
            throw error;
    })
})

app.listen(3001, () => {
    console.log("App is running at port 3001")
})