import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first } from 'rxjs';
import { TODOItem } from '../todoitem';

@Injectable({
  providedIn: 'root'
})
export class TodoService {


  private _todoList: TODOItem[] = [];

  public get todoList(): TODOItem[] {
    return this._todoList;
  }

  private todoListUrl = 'http://localhost:5000/todo-list';
  private freshTodoListUrl = 'http://localhost:5000/fresh-todo-list';

  constructor(private httpClient: HttpClient) {}

  public getAndSetTodoList() {
    return this.httpClient
      .get<TODOItem[]>(this.todoListUrl)         
     
  }

  public getAndSetNewTodoList() {
    return this.httpClient
      .get<Array<TODOItem>>(this.freshTodoListUrl)
     
  }
}
