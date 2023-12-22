import { Button, InputGroup, Input, List, InputGroupText } from "reactstrap";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Todo List React App</h1>
      <InputGroup>
        <Input />
        <Button color="primary">Add Todo</Button>
      </InputGroup>
      <main>
        <List style={{ padding: "0" }}>
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
        </List>
      </main>
    </div>
  );
}

export default App;
