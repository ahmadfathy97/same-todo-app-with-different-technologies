const slctElem = (s) => document.querySelector(s);
const slctElems = (s) => document.querySelectorAll(s);

let oldTodos;
let newTodo = slctElem('#new-todo'),
    todos = slctElem('.todos'),
    editForm = slctElem('.edit-form'),
    closeEditForm = slctElem('.cancel'),
    confirmEditing = slctElem('.done'),
    editTodoInput = slctElem('#edit-todo');

window.onload = function(){
  oldTodos = JSON.parse(localStorage.getItem('js-todos')) || [];
  if(oldTodos.length){
    oldTodos.forEach((todo, i)=> {
      todos.innerHTML += appendTodo(todo, i);
    })
  } else {
    todos.textContent = 'there are no todos yet';
  }
}

newTodo.addEventListener('keyup', insertTodo);
function insertTodo(e){
  let todo = e.target.value.trim();
  if(e.keyCode === 13 && todo.length) {
    if(!oldTodos.length){
      todos.innerHTML = appendTodo(todo, 0);
    } else {
      todos.innerHTML += appendTodo(todo, oldTodos.length);;
    }
    oldTodos = [...oldTodos, todo];
    localStorage.setItem('js-todos', JSON.stringify(oldTodos))
    e.target.value = '';
  }
}

function deleteTodo(el){
  oldTodos.splice(el.dataset.todoid,1);
  localStorage.setItem('js-todos', JSON.stringify(oldTodos));
  todos.innerHTML = '';
  if(!oldTodos.length) {
    todos.textContent = 'there are no todos yet';
  } else{
    oldTodos.forEach((todo, i)=> {
      todos.innerHTML += appendTodo(todo, i);
    })
  }
}

let currentElement;
function editTodo(el){
  editForm.style.display = "flex";
  editTodoInput.focus();
  currentElement = el.previousElementSibling;
  editTodoInput.value = currentElement.textContent;
}

closeEditForm.addEventListener('click', closeForm);

confirmEditing.addEventListener('click', (e)=>{
  if(editTodoInput.value.trim().length){
    currentElement.textContent = editTodoInput.value;
    oldTodos[currentElement.dataset.todoid] = editTodoInput.value;
    localStorage.setItem('js-todos', JSON.stringify(oldTodos));
  }
  closeForm();
})

function closeForm(){
  editForm.style.display = "none";
}


function appendTodo(todo,i){
  return `<div class="todo">
          <span onclick="deleteTodo(this)" data-todoid="${i}">${todo}</span>
          <button class="btn edit" onclick="editTodo(this)">Edit</button>
        </div>`;
}
