import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  todo = '';

  @Output() addTodo = new EventEmitter<string>();
  handelKeyup(e){
    if(e.keyCode === 13 && this.todo.trim().length){
      this.addTodo.emit(this.todo);
      e.target.value = '';
    }
    this.todo = e.target.value;
  }
}
