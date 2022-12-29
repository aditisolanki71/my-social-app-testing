import { useState } from "react";
import { v4 } from "uuid";
import "./AddInput.css"

const AddInput = ({ setTodos, todos }) => {
    const [ todo, setTodo ] = useState("")

    const addTodo = () => {
        if(!todo) return;
        let newTodos = [...todos, {id: v4(),task: todo, completed: false}]
        setTodos(newTodos)
        setTodo("")
    }

    return (
        <div className="input-container">
            <input 
                className="input"  
                value={todo}
                placeholder="Add a new task here..."
                onChange={e => setTodo(e.target.value)}
            />
             <button 
                className="add-btn"
                onClick={addTodo}
                >
                Add
            </button>
        </div>
    )
}
export default AddInput;