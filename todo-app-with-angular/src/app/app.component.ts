import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos: string[] = JSON.parse(localStorage.getItem('angular-todos')) || [];
  isEditFormOpend: Boolean = false;
  currentTodo = {todo: '', i: null}

  closeEditForm() {
    this.isEditFormOpend = false;
  }

  openEditForm(todo, i) {
    this.currentTodo = {todo, i};
    this.isEditFormOpend = true;
  }

  insertTodo(todo){
    this.todos = [...this.todos, todo];
    localStorage.setItem('angular-todos', JSON.stringify(this.todos))
  }

  EditTodo(todo){
    this.todos = this.todos.map((t, i)=> i == this.currentTodo.i ? todo : t);
    localStorage.setItem('angular-todos', JSON.stringify(this.todos))

    this.closeEditForm()
  }

  deleteTodo(i){
    this.todos = this.todos.filter((todo, index) => index != i);
    localStorage.setItem('angular-todos', JSON.stringify(this.todos))
  }
  title = 'todo-app-with-angular';
}
