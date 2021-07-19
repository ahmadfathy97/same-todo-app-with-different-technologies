<template>
  <div id="app">
    <h1 class="title">VUE TODO APP</h1>
    <div class="todos-container">
      <AddTodo @addT="addTodo"/>
      <div class="todos" v-if="oldTodos.length">
        <Todo v-for="(text, index) in oldTodos"
        :todo="{text: text, index: index}"
        :key="index"
        @openEditDialogue="openEditTodo"
        @deleteT="deleteTodo"
        />
      </div>
      <div class="" v-else>there are no todos yet</div>
      <EditTodo v-if="openEdit" :todo="currentTodo" @cancel="openEdit = false" @edit="editTodo"/>
    </div>
  </div>
</template>

<script>

import Todo from './components/Todo.vue';
import EditTodo from './components/EditTodo.vue';
import AddTodo from './components/AddTodo.vue';

export default {
  name: 'App',
  components: {
    Todo,
    AddTodo,
    EditTodo
  },
  data(){
    return{
      openEdit: false,
      oldTodos: [],
      currentTodo: {}
    }
  },
  mounted(){
    this.oldTodos = JSON.parse(localStorage.getItem('vue-todos')) || [];
  },
  methods:{
    addTodo(x){
      this.oldTodos.push(x);
      localStorage.setItem('vue-todos', JSON.stringify(this.oldTodos));
    },
    openEditTodo(todo){
      this.currentTodo = todo;
      this.openEdit = true;
    },
    editTodo(todo){
      this.oldTodos[todo.index] = todo.text;
      localStorage.setItem('vue-todos', JSON.stringify(this.oldTodos));
    },
    deleteTodo(index){
      this.oldTodos.splice(index,1);
      localStorage.setItem('vue-todos', JSON.stringify(this.oldTodos));
    }
  }
}
</script>

<style>
*{padding: 0;margin: 0;box-sizing: border-box;font-family: cursive}
:root{
  --app-color: #128812;
  --secondary-color: #ddd;
  --danger: #ff5366;
}
::selection{
  background: var(--secondary-color);
  color: #ddd;
}

:is(input, a, button, textarea):focus{
  outline: 2px dashed var(--secondary-color);
}
textarea{
  resize: vertical;
  max-height: 50vmin;
  display: block;
  width: 100%;
  padding: .25rem;
  border: 1px solid var(--app-color);
  border-bottom-width: 3px ;
  font-size: 26px;
/*   box-shadow: 0 -2px 8px  var(--app-color) inset; */
}
#app{
  padding: 2rem .25rem;
  display: grid;
  place-items: center;
}
.title{
  text-align: center;
  padding: .5rem .5rem;
  margin-left: 1rem auto 2rem;
  color: #222;
  position: relative;
  letter-spacing: 3px;
}
.title:after{
  content: '';
  position: absolute;
  width: 100%;
  height: 8px;
  border-radius: 5px;
  background: var(--app-color);
  bottom: calc(.25rem + 8px);
  left:0;
  z-index: -2
}


.todos-container{
  min-width: 380px;
  max-width: 720px;
  padding: 1rem .5rem;
  width: 100%;
  border: 1px solid var(--app-color);
  border-radius: 8px;
  box-shadow: 0 5px 5px #222;
}
.todos-container .todos{
  margin: 1rem auto;
}
.todos-container .todos .todo{
  margin: .5rem .25rem;
  padding: .5rem .25rem;
  border-radius: 4px;
  background: var(--app-color);
  color: var(--secondary-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}
.todos-container .todos .todo span{
  padding: .25rem;
  word-break: break-word
}
.todos-container .todos .todo span:hover {
  text-decoration: line-through wavy var(--danger) 3px;
}
.btn{
  margin: .5rem;
  padding: .25rem .5rem;
  font-size: 20px;
  background: var(--secondary-color);
  border: 1px solid var(--secondary-color);
  color: var(--app-color);
  cursor: pointer;
  border-radius: 5px;
}
.todos-container .todos .todo .edit:hover{
  background: #000;
}

.edit-form{
  position: fixed;
  top:0;left:0;
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  display: flex;
  align-items:center;
  justify-content:center;
  flex-direction: column;
  background: rgba(255,255,255,.95);
  z-index: 99999;
}

.edit-form .cancel{
  background: var(--danger);
  color: #000
}

</style>
