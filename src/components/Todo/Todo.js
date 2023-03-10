import React,{useState} from "react";
import AddInput from "../AddInput/AddInput";
import Header from "../Headers/Headers";
import TodoList from "../TodoList/TodoList";
import "./Todo.css"

const Todo = () => {
    const [todos, setTodos]= useState([
        {id: 1,task: "aditi"}
    ]);
    return (
        <div className="todo">
        <Header title="Todo" />
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