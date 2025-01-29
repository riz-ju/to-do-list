import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TodosModule } from '../app/todos/todos.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, TodosModule],
  bootstrap: [AppComponent]
})
export class AppModule {}


