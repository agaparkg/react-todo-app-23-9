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
  };

  render() {
    const { todos, newTodoInput } = this.state;
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
              return <SingleTodo key={todo.id} todo={todo} />;
            })}
          </List>
        </main>
      </>
    );
  }
}
