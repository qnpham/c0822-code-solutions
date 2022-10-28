import React from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/todos')
      .then(r => r.json())
      .then(todos => this.setState({ todos }))
      .catch(err => console.error(err));
  }

  addTodo(newTodo) {
    fetch('http://localhost:3000/api/todos', {
      method: 'POST',
      body: JSON.stringify(newTodo),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(r => r.json())
      .then(r => {
        const todosArray = this.state.todos;
        const newArray = todosArray.concat(r);
        this.setState({ todos: newArray });
      }
      );

  }

  toggleCompleted(todoId) {
    const todos = this.state.todos;

    const obj = {};
    for (const key in this.state.todos) {
      if (this.state.todos[key].todoId === todoId) {
        todos[key].isCompleted
          ? obj.isCompleted = false
          : obj.isCompleted = true;
      }
    }
    fetch(`http://localhost:3000/api/todos/${todoId}`, {
      method: 'PATCH',
      body: JSON.stringify(obj),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(r => r.json())
      .then(r => {
        for (let i = 0; i < todos.length; i++) {
          if (todos[i].todoId === todoId) {
            todos[i] = r;
          }
        }
        this.setState({ todos });
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="Todo App"/>
            <TodoForm onSubmit={this.addTodo}/>
            <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
          </div>
        </div>
      </div>
    );
  }
}
