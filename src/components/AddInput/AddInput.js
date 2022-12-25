import { useState } from "react";
import { v4 } from "uuid";
 
const AddInput = ({ setTodos, todos }) => {
    const [ todo, setTodo ] = useState("")

    const addTodo = () => {
        if(!todo) return;
        let newTodos = [...todos, {id: v4(),task: todo, completed: false}]
        setTodos(newTodos)
        setTodo("")
    }

    return (
        <div>
            <input 
                value={todo}
                placeholder="Add task"
                onChange={e => setTodo(e.target.value)}
            />
            <button onClick={addTodo}>
                Add
            </button>
        </div>
    )
}
export default AddInput;