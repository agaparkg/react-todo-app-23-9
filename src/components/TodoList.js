import React, { Component } from "react";
import { Button, InputGroup, Input, List } from "reactstrap";
import SingleTodo from "./SingleTodo";

export default class TodoList extends Component {
  render() {
    return (
      <>
        <h1>Todo List React App</h1>
        <InputGroup>
          <Input />
          <Button color="primary">Add Todo</Button>
        </InputGroup>
        <main>
          <List style={{ padding: "0" }}>
            <SingleTodo />
          </List>
        </main>
      </>
    );
  }
}
