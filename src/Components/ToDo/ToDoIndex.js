import React, { Component } from "react";

export default class ToDoIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoArr: [],
      toDos: "",
      complete: false,
    };
  }

  changeState = (event) => {
    this.setState({ toDos: event.target.value });
  };

  submitChange = (event) => {
    event.preventDefault();
    this.setState({
      toDoArr: [...this.state.toDoArr, this.state.toDos],
      toDos: "",
    });
  };

  checkMark = () => {
    this.setState({ completed: !this.state.completed });
}

  render() {
    return (
      <div>
        <form onSubmit={this.submitChange}>
          <input
            type="text"
            value={this.state.toDos}
            onChange={this.changeState}
          />
          <input type="submit" />
        </form>
        <ul>
          {this.state.toDoArr.map((toDos) => {
            return (
              <li>
                {toDos}
                <input type="checkbox" onChange={this.checkMark} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
