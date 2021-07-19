import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrls: ['./update-todo.component.css']
})
export class UpdateTodoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() todo;

  updatedTodo = '';

  @Output() canceleEditing = new EventEmitter<string>();
  @Output() updateTodo = new EventEmitter<string>();

  handelChange(e):void{
    this.updatedTodo = e.target.value;
  }

  handelCancel(): void{
    this.canceleEditing.emit()
  }
  editTodo():void {
    if(this.updatedTodo.trim().length){
      this.updateTodo.emit(this.updatedTodo)
    }
  }
}
