import React, { Component } from "react";
import { Button, InputGroup, Input, InputGroupText } from "reactstrap";

export default class SingleTodo extends Component {
  render() {
    console.log(this.props);
    const {
      todo: { text, id, complete },
    } = this.props;
    const completed = complete ? "cross" : "";
    return (
      <InputGroup style={{ marginBottom: "2px" }}>
        <InputGroupText>
          <Input
            onClick={(e) => {
              console.log(e.target.checked);
            }}
            addon
            aria-label="Checkbox for following text input"
            type="checkbox"
          />
        </InputGroupText>
        <Input className={completed} placeholder={text} />
        <Button color="danger">Delete</Button>
      </InputGroup>
    );
  }
}
