import { Component } from '@angular/core';
import { TodoService, Todo } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  standalone : false,
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  newTodoTitle: string = '';
  todos: Todo[];

  constructor(private todoservice: TodoService){
    this.todos = this.todoservice.getTodos();
  }

  addTodo(){
    if(this.newTodoTitle.trim()){
      this.todoservice.addTodo(this.newTodoTitle);
      this.newTodoTitle = '';
    }
  }

  toggleTodo(id: number){
    this.todoservice.toggleTodo(id);
  }

  removeTodo(id: number){
    this.todoservice.removeTodo(id);
    this.todos = this.todoservice.getTodos();
  }

}
