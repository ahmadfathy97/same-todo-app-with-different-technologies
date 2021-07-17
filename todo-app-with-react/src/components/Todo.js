const Todo = function({todo, i, deleteTodo, openEditForm}){
  return(
    <div className="todo">
      <span onClick={()=> deleteTodo(i)} data-todoid={i}>{todo}</span>
      <button className="btn edit" onClick={()=> openEditForm(todo, i)}>Edit</button>
    </div>
  )
}
export default Todo;
