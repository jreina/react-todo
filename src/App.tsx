import React, { Component } from "react";
import { TodoLane } from "./components/TodoLane";
import { TodoInput } from "./components/TodoInput";
import TodoService from "./services/TodoService";
import { Todo } from "./models/Todo";

class App extends Component<{}, { items: Array<Todo> }> {
  constructor(props: {}) {
    super(props);
    this.state = { items: [] };
  }
  componentDidMount() {
    TodoService.todos.subscribe(items => this.setState({ items }));
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <TodoInput />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <TodoLane
              items={this.state.items.filter(
                item => !item.isInProgress && !item.isComplete
              )}
            />
          </div>
          <div className="col-md-4">
            <TodoLane
              items={this.state.items.filter(item => item.isInProgress)}
            />
          </div>
          <div className="col-md-4">
            <TodoLane
              items={this.state.items.filter(item => item.isComplete)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
