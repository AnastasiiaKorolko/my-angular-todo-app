# TodoListApp

A responsive and interactive Todo List application built with Angular, allowing users to manage their tasks efficiently.

## Features

- **Task Management**: Add, edit, and delete tasks
- **Status Toggle**: Mark tasks as completed or pending with a simple click
- **Data Persistence**: Tasks are loaded from a API
- **Responsive Design**: Works seamlessly across desktop and mobile devices

## Live Demo

Check out the working application: [Todo List App](https://anastasiiakorolko.github.io/my-angular-todo-app/)

## Technologies Used

- Angular 19.2.6
- TypeScript
- HTML/CSS
- Angular HTTP Client for data fetching

## Project Structure

The application is organized into components following Angular best practices:
- **TodoListComponent**: Main component for displaying and managing todos
- **TodoItemComponent**: Individual todo item with edit/delete capabilities
- **TodoService**: Service for handling HTTP requests and state management

## Development Process

This Todo List application was developed as a practice project to demonstrate Angular fundamentals, including:
- Component creation and communication
- Service implementation
- HTTP client usage
- Data binding and event handling

## Getting Started

### Prerequisites

- Node.js and npm installed

### Installation

1. Clone the repository:
```bash
git clone https://github.com/AnastasiiaKorolko/my-angular-todo-app.git
```

2. Navigate to the project directory:
```bash
cd my-angular-todo-app
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
ng serve
```

5. Open your browser and navigate to `http://localhost:4200/`

## Building for Production

To build the project for production, run:

```bash
ng build
```

The build artifacts will be stored in the `dist/` directory.

## Additional Information

For more information on using Angular CLI, refer to the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
