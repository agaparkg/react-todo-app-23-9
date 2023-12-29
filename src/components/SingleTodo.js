import React, { Component } from "react";
import { Button, InputGroup, Input, InputGroupText } from "reactstrap";

export default class SingleTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: this.props.todo.text,
    };
  }

  handleInputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  render() {
    const { inputValue } = this.state;

    const {
      todo: { id, complete },
      handleTodoComplete,
      handleTodoDelete,
      handleTodoEdit,
      editable,
      handleTodoSave,
    } = this.props;
    const completed = complete ? "cross" : "";

    return (
      <InputGroup style={{ marginBottom: "2px" }}>
        <InputGroupText>
          <Input
            onClick={(event) => {
              handleTodoComplete(event, id);
            }}
            addon
            aria-label="Checkbox for following text input"
            type="checkbox"
          />
        </InputGroupText>
        <Input
          onChange={this.handleInputChange}
          value={inputValue}
          className={completed}
          disabled={!editable}
        />
        {editable ? (
          <Button
            onClick={() => handleTodoSave(inputValue, id)}
            color="primary"
          >
            Save
          </Button>
        ) : (
          <Button onClick={() => handleTodoEdit(id)} color="secondary">
            Edit
          </Button>
        )}
        <Button onClick={() => handleTodoDelete(id)} color="danger">
          Delete
        </Button>
      </InputGroup>
    );
  }
}
