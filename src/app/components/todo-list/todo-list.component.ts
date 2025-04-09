import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../../services/todo.service';
import { TodoItem } from '../../models/todo-item';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: TodoItem[] = [];
  newTodoTitle: string = '';
  loading: boolean = false;
  editingTodoId: number | null | undefined = undefined;

  editedTodoTitle: string = '';

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.loading = true;
    this.todoService.getTodos().subscribe({
      next: (data) => {
        this.todos = data.slice(0, 10);
        this.loading = false;
      },
      error: (error) => {
        console.error('Помилка при завантаженні завдань:', error);
        this.loading = false;
      }
    });
  }

  addTodo(): void {
    if (!this.newTodoTitle.trim()) return;

    const newTodo: TodoItem = {
      title: this.newTodoTitle,
      completed: false,
      userId: 1
    };

    this.todoService.addTodo(newTodo).subscribe({
      next: (todo) => {
        this.todos.unshift(todo);
        this.newTodoTitle = '';
      },
      error: (error) => console.error('Помилка при додаванні завдання:', error)
    });
  }

  toggleComplete(todo: TodoItem): void {
    const updatedTodo = { ...todo, completed: !todo.completed };

    this.todoService.updateTodo(updatedTodo).subscribe({
      next: () => {
        todo.completed = !todo.completed;
      },
      error: (error) => console.error('Помилка при оновленні завдання:', error)
    });
  }

  deleteTodo(id: number | undefined): void {
    if (id === undefined) return;

    this.todoService.deleteTodo(id).subscribe({
      next: () => {
        this.todos = this.todos.filter(todo => todo.id !== id);
      },
      error: (error) => console.error('Помилка при видаленні завдання:', error)
    });
  }

  startEditing(todo: TodoItem): void {
    this.editingTodoId = todo.id;
    this.editedTodoTitle = todo.title;
  }

  saveEdit(todo: TodoItem): void {
    if (this.editedTodoTitle.trim() === '') return;

    const updatedTodo = { ...todo, title: this.editedTodoTitle };

    this.todoService.updateTodo(updatedTodo).subscribe({
      next: () => {
        todo.title = this.editedTodoTitle;
        this.editingTodoId = null;
        this.editedTodoTitle = '';
      },
      error: (error) => console.error('Failed to save updated:', error)
    });
  }

  cancelEdit(): void {
    this.editingTodoId = null;
    this.editedTodoTitle = '';
  }
}
