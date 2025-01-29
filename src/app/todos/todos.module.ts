import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from '../todos/todo-list/todo-list.component';
import { TodoItemComponent } from '../todos/todo-item/todo-item.component';
import { FormsModule } from '@angular/forms';
import { TodoService } from './todo.service';

@NgModule({
  declarations: [TodoListComponent, TodoItemComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [TodoService],
  bootstrap: [TodoListComponent],
  exports: [TodoListComponent]
})

export class TodosModule { }
