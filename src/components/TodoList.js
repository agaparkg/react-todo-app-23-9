import React, { Component } from "react";
import { Button, InputGroup, Input, List } from "reactstrap";
import SingleTodo from "./SingleTodo";
import { v4 as uuidv4 } from "uuid";

const localStorageTodos = JSON.parse(localStorage.getItem("todos"));
const initialTodos = localStorageTodos != null ? localStorageTodos : [];

export default class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todos: initialTodos,
      newTodoInput: "",
      editId: null,
    };
  }

  handleInputChange = (event) => {
    this.setState({ newTodoInput: event.target.value });
  };

  handleAddTodo = () => {
    const { todos, newTodoInput } = this.state;
    // const newTodos = JSON.parse(JSON.stringify(todos));
    // const newTodos = todos.map((todo) => {
    //   return { ...todo };
    // });
    const newTodos = todos.map((todo) => ({ ...todo }));

    if (newTodoInput.trim() !== "") {
      const newTodo = {
        id: uuidv4(),
        text: newTodoInput,
        complete: false,
      };

      newTodos.push(newTodo);
    } else {
      alert("Please type a todo text");
    }

    this.setState({ todos: newTodos, newTodoInput: "" });
    this.updateLocalStorage(newTodos);
  };

  updateLocalStorage = (newTodos) => {
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  handleTodoComplete = (event, id) => {
    const { todos } = this.state;

    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, complete: event.target.checked };
      }

      return todo;
    });

    this.setState({ todos: newTodos });
    this.updateLocalStorage(newTodos);
  };

  handleTodoDelete = (id) => {
    const { todos } = this.state;

    const newTodos = todos.filter((todo) => todo.id !== id);

    this.setState({ todos: newTodos });
    this.updateLocalStorage(newTodos);
  };

  handleTodoEdit = (id) => {
    this.setState({ editId: id });
  };

  handleTodoSave = (todoText, id) => {
    const { todos } = this.state;

    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, text: todoText };
      }

      return todo;
    });

    this.setState({ todos: newTodos, editId: null });
    this.updateLocalStorage(newTodos);
  };

  handleClearAllTodos = () => {
    this.setState({ todos: [] });
    this.updateLocalStorage([]);
  };

  render() {
    const { todos, newTodoInput, editId } = this.state;
    return (
      <>
        <h1>Todo List React App</h1>
        <InputGroup>
          <Input onChange={this.handleInputChange} value={newTodoInput} />
          <Button onClick={this.handleAddTodo} color="primary">
            Add Todo
          </Button>
        </InputGroup>
        <main>
          <List style={{ padding: "0" }}>
            {todos.map((todo) => {
              const editable = editId === todo.id;
              // null === todo.id => false
              // "dsdfj-dafasdf-adsfd-dfadf" === todo.id => true
              // console.log("you can edit todo with id", editable && todo.id);
              return (
                <SingleTodo
                  key={todo.id}
                  todo={todo}
                  editable={editable}
                  handleTodoEdit={this.handleTodoEdit}
                  handleTodoComplete={this.handleTodoComplete}
                  handleTodoDelete={this.handleTodoDelete}
                  handleTodoSave={this.handleTodoSave}
                />
              );
            })}
          </List>
        </main>
        <footer>
          {todos.length > 1 ? (
            <Button onClick={this.handleClearAllTodos} color="danger">
              Clear All Todos
            </Button>
          ) : null}
        </footer>
      </>
    );
  }
}
