import { Injectable } from '@angular/core';

export interface Todo{
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  private todos: Todo[] = [];

  getTodos(){
    return this.todos;
  }

  addTodo(title: string){
    const newTodo: Todo = {
      id: Date.now(),
      title,
      completed: false
    };
    this.todos.push(newTodo);
  }

  toggleTodo(id: number){
    const todo = this.todos.find(t => t.id === id);
    if(todo) todo.completed = !todo.completed;
  }

  removeTodo(id: number){
    this.todos = this.todos.filter(t => t.id !== id);
  }

}



