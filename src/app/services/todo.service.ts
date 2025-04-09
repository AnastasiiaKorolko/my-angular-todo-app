import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TodoItem } from '../models/todo-item';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) { }

  getTodos(): Observable<TodoItem[]> {
    return this.http.get<TodoItem[]>(this.apiUrl);
  }

  addTodo(todo: TodoItem): Observable<TodoItem> {
    return this.http.post<TodoItem>(this.apiUrl, todo);
  }

  updateTodo(todo: TodoItem): Observable<TodoItem> {
    return this.http.put<TodoItem>(`${this.apiUrl}/${todo.id}`, todo);
  }

  deleteTodo(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
