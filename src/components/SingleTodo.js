import React, { Component } from "react";
import { Button, InputGroup, Input, InputGroupText } from "reactstrap";

export default class SingleTodo extends Component {
  render() {
    return (
      <InputGroup style={{ marginBottom: "2px" }}>
        <InputGroupText>
          <Input
            addon
            aria-label="Checkbox for following text input"
            type="checkbox"
          />
        </InputGroupText>
        <Input placeholder="Check it out" />
        <Button color="danger">Delete</Button>
      </InputGroup>
    );
  }
}
