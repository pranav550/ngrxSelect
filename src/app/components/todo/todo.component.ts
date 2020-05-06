import { Todo } from './../../shared/models/todo';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = []
  constructor(private store: Store<{ todos: Todo[] }>) { }

  ngOnInit(): void {
    this.getTodo()
  }

  getTodo() {
    this.store.pipe(select('todos')).subscribe(res => {
      console.log(res)
      this.todos = res
    })
  }

}
