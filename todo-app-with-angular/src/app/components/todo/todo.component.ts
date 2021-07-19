import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() todo;
  @Input() i;

  @Output() openEditing = new EventEmitter<string>();
  @Output() deleteTheTodo = new EventEmitter<string>();

  openEditForm(): void{
    this.openEditing.emit()
  }
  deleteTodo(){
    this.deleteTheTodo.emit()
  }
}
