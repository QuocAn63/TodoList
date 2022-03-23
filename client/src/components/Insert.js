import { useState, useEffect } from 'react'
import axios from 'axios'

function Insert() {
    const [todoTitle, setTodoTitle] = useState('')
    const [todoContent, setTodoContent] = useState('')

    const submitAction = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3001/api/insert", {
            todoTitle,
            todoContent
        })
            .then(() => {
                alert("Successfully inserted")
            })
            .catch((error) => {
                alert("Error: " + error)
            })
    }

    return (
        <>
        <form action="POST">
            <div className="mb-3">
                <label for="todo_title" className="form-label">Title</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="todo_title" 
                    name="todo_title"
                    value = {todoTitle}
                    onChange={e => setTodoTitle(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label for="todo_title" className="form-label">Description</label>
                <input 
                    type="text" 
                    className="form-control" id="todo_title" name="todo_title"
                    value = {todoContent}
                    onChange = {e => setTodoContent(e.target.value)}    
                />
            </div>
            <button type="submit" className="btn btn-primary"
                onClick={submitAction}
            >Submit</button>
        </form>
        </>
    )
}

export default Insert