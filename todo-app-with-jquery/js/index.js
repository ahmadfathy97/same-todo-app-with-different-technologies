let oldTodos;
$( document ).ready(function() {
  oldTodos = JSON.parse(localStorage.getItem('jquery-todos')) || [];
  if(oldTodos.length){
    oldTodos.forEach((todo, i)=> {
      $('.todos').append(appendTodo(todo, i));
    })
  } else {
    $('.todos').text('there are no todos yet');
  }
});


$('#new-todo').on('keyup', insertTodo);
function insertTodo(e){
  let todo = $(this).val().trim();
  if(e.which === 13 && todo.length) {
    if(!oldTodos.length){
      $('.todos').html(appendTodo(todo, 0));
    } else {
      $('.todos').append(appendTodo(todo, oldTodos.length));
    }
    oldTodos = [...oldTodos, todo];
    localStorage.setItem('jquery-todos', JSON.stringify(oldTodos))
    $(this).val('');
  }
}

function deleteTodo(el){
  oldTodos.splice(el.dataset.todoid,1);
  localStorage.setItem('jquery-todos', JSON.stringify(oldTodos));
  $('.todos').html('');
  if(!oldTodos.length) {
    $('.todos').text('there are no todos yet');
  } else{
    oldTodos.forEach((todo, i)=> {
      $('.todos').append(appendTodo(todo, i));
    })
  }
}

let currentElement;
function editTodo(el){
  $('.edit-form').css('display', "flex");
  $('#edit-todo').focus();
  currentElement = el.previousElementSibling;
  $('#edit-todo').val(currentElement.textContent) ;
}

$('.cancel').on('click', closeForm);

$('.done').on('click', (e)=>{
  if($('#edit-todo').val().trim().length){
    currentElement.textContent = $('#edit-todo').val();
    oldTodos[currentElement.dataset.todoid] = $('#edit-todo').val();
    localStorage.setItem('jquery-todos', JSON.stringify(oldTodos));
  }
  closeForm();
})

function closeForm(){
  $('.edit-form').css('display', "none");
}


function appendTodo(todo,i){
  return `<div class="todo">
          <span onclick="deleteTodo(this)" data-todoid="${i}">${todo}</span>
          <button class="btn edit" onclick="editTodo(this)">Edit</button>
        </div>`;
}
