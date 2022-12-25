import React,{useState} from "react";
import AddInput from "../AddInput/AddInput";
import TodoList from "../TodoList/TodoList";
import "./Todo.css"

const Todo = () => {
    const [todos, setTodos]= useState([
        {id: 1,task: "aditi"}
    ]);
    return (
        <div>
            <AddInput 
                setTodos={setTodos}
                todos={todos}
            />
            <TodoList
                todos={todos}
                setTodos={setTodos}
            />
        </div>
    )
}
export default Todo;