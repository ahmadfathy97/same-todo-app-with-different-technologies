const AddTodo = function({addTodo}){
  return(
    <div>
      <textarea id="new-todo" onKeyUp={(e)=>{addTodo(e)}}></textarea>
    </div>
  )
}
export default AddTodo;
