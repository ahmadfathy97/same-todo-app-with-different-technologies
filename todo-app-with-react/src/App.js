import Todo from './components/Todo.js';
import AddTodo from './components/AddTodo.js';
import EditTodo from './components/EditTodo.js';

import {useState} from 'react';

function App() {
  let [todos, setTodos] = useState(JSON.parse(localStorage.getItem('react-todo')) || []);
  let [isFormEditOpen, setFormEdit] = useState(false);
  let [currentTodo, setCurrentTodo] = useState({todo:'', id: ''});


  let addTodo = (e)=>{
    if(e.keyCode === 13){
      if(e.target.value.trim().length){
        localStorage.setItem('react-todo', JSON.stringify([...todos, e.target.value.trim()]))
        setTodos([...todos, e.target.value.trim()]);
        e.target.value = '';
      }
    }
  }


  let deleteTodo = (id) => {
    localStorage.setItem('react-todo', JSON.stringify(todos.filter((item, i) => i !== id)));
    setTodos(todos.filter((item, i) => i !== id));
  }

  let updateTodo = (todo, id)=>{
    localStorage.setItem('react-todo', JSON.stringify(todos.map((item, i) => i === id ? todo : item)));
    setTodos(todos.map((item, i) => i === id ? todo : item));
    closeForm()
  }
  let openEditForm = (todo, id) => {
    setFormEdit(true);
    setCurrentTodo({todo, id});
  }
  let closeForm = ()=>{
    setFormEdit(false);
  }
  return (
    <div className="App">

      <header className="App-header">
        <h1 className="title">REACT TODO APP</h1>
      </header>

      <section className="todos-container">

        <AddTodo addTodo={addTodo}/>

        <div className="todos">
          {todos.length? todos.map((todo,i)=> <Todo todo={todo} i={i} key={i} deleteTodo={deleteTodo} openEditForm={openEditForm} />) : 'there are no todos yet'}
        </div>
        {isFormEditOpen && <EditTodo todo={currentTodo} closeForm={closeForm} updateTodo={updateTodo}/>}
      </section>
    </div>
  );
}

export default App;
