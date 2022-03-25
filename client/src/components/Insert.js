import { useState, useEffect} from 'react'
import axios from 'axios'

function Insert() {
    const [todoTitle, setTodoTitle] = useState('')
    const [todoContent, setTodoContent] = useState('')
    const [courses, setCourses] = useState([])

    useEffect(() => {
        const getCourses = async () => {
            try {
                const res = await axios.get('http://localhost:3001/api/get')
                setCourses(res.data)
            }
            catch(error) {
                console.log(error);
            }
        }

        getCourses()
    }, [])

    const submitAction = (e) => {
        axios.post("http://localhost:3001/api/insert", {
            todoTitle,
            todoContent
        })

        setCourses(prev => {
            return ([
                ...prev,
                {
                    todo_title: todoTitle,
                    todo_content: todoContent
                }
            ])
        })
    }

    console.log('re-render');
    console.log(courses);

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
            <button type="button" className="btn btn-primary"
                onClick={() => submitAction()}
            >Submit</button>
        </form>

        <div className="card" style={{width: '18rem'}}>
            <div className="card-header">
                Todo List
            </div>
            <ul className="list-group list-group-flush">
                {courses.length===0?<li className="list-group-item">Empty</li>:courses.map(course => (
                    <li key={course.id} className="list-group-item">
                        {course.todo_content}
                    </li>))} 
            </ul>
        </div>
        </>
    )
}

export default Insert