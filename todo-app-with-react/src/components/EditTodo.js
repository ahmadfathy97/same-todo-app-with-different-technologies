import {useState} from 'react';
const EditTodo = function({todo, closeForm, updateTodo}){
  let [todoObject, setTodo] = useState(todo || {});
  let handleChange = (e)=>{
    setTodo({todo: e.target.value, id: todoObject.id})
  }
  return(
    <section className="edit-form">
      <textarea id="edit-todo" value={todoObject.todo} onChange={handleChange}></textarea>
      <div>
        <button className="btn done" onClick={()=> updateTodo(todoObject.todo, todoObject.id)}>Done</button>
        <button className="btn cancel" onClick={closeForm}>Cancel</button>
      </div>
    </section>
  )
}
export default EditTodo
