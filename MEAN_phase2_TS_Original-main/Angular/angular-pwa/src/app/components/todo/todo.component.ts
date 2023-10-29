import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { TODOItem } from 'src/app/todoitem';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TODOComponent implements OnInit{
  public currentTODO: TODOItem = new TODOItem('', '','','');
  TODOItems!:TODOItem[];
  freshTODOItems!:TODOItem[];

  constructor(private todoListService: TodoService) {}
  ngOnInit(): void {
   this.todoListService.getAndSetTodoList().subscribe({
    next: data=> this.TODOItems = data
   });

   this.fetchFreshTodoList();
  }


  public fetchFreshTodoList() {
    this.todoListService.getAndSetNewTodoList().subscribe({
      next:data=>this.freshTODOItems = data
    });
  }

  public deleteTodo(id: string) {
    const deleteIndex = this.todoListService.todoList.findIndex((todo) => todo.id === id);
    this.todoListService.todoList.splice(deleteIndex, 1);
  }

  public editTodo(todoItem: TODOItem) {
    this.currentTODO = todoItem;
  }

}
