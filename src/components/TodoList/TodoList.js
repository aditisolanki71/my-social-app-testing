const TodoList = ({todos,setTodos}) => {
    return (
        <div>
            {
                todos.map((todo,index) => (
                    <div>
                        {todo.task}
                    </div>
                ))
            }
        </div>
    )
}
export default TodoList;