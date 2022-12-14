import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { MydetailComponent } from './mydetail/mydetail.component';
import { HomepageComponent } from './homepage/homepage.component';
import {FormsModule} from '@angular/forms';
import { TodosComponent } from './todos/todos.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { TodoItemComponent } from './todo-item/todo-item.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainpageComponent,
    LoginComponent,
    SignupComponent,
    MydetailComponent,
    HomepageComponent,
    TodosComponent,
    AddTodoComponent,
    TodoItemComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
