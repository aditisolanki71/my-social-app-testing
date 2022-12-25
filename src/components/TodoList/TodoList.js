import "./TodoList.css"
const TodoList = ({todos,setTodos}) => {
    return (
        <div className="todolist-container">
            <div className="todos-container">
                <div>
                    {
                        todos.map((todo,index) => (
                            <div>
                                {todo.task}
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default TodoList;