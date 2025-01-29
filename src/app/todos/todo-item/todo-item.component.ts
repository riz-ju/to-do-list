import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../todo.service';

@Component({
  selector: 'app-todo-item',
  standalone : false,
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  @Input() todo!: Todo;
  @Output() toggle = new EventEmitter<void>();
  @Output() remove = new EventEmitter<void>();
}

