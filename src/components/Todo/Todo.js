import React,{useState} from "react";
import TodoList from "../TodoList/TodoList";

const Todo = () => {
    const [todos, setTodos]= useState([
        {id: 1,task: "aditi"}
    ]);
    return (
        <div className="todo">
            <TodoList
                todos={todos}
                setTodos={setTodos}
            />
        </div>
    )
}
export default Todo;