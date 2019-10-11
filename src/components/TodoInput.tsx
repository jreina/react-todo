import React, { Component, FormEvent, ChangeEvent } from "react";
import TodoService from "../services/TodoService";

export class TodoInput extends Component<{}, { value: string }> {
  constructor(props: {}) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event: FormEvent) {
    event.preventDefault();
    TodoService.add(this.state.value);
    this.setState({ value: "" });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>
            Title:
            <input
              type="text"
              className="form-control"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <input className="btn-btn-success" type="submit" value="Submit" />
      </form>
    );
  }
}
