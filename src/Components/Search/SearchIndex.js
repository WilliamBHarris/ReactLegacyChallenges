import React, { Component } from "react";
import { Input } from "reactstrap";

export default class SearchIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      things: [
        "pen",
        "marker",
        "eraser",
        "notebook",
        "pencil",
        "scissors",
        "highlighter",
        "stapler",
        "paper clip",
        "binder",
        "hole punch",
        "laminator",
        "laminating sheets",
        "protective sheets",
        "index cards",
      ],
      search: "",
    };
    this.searchThings = this.searchThings.bind(this);
  }


  searchThings(event) {
    event.preventDefault();
    this.setState({
        search: ''
    });
    console.log(this.state.search)
  }

  changeHandler(event) {
    this.setState({ search: event.target.value });
  }


  render() {

    return (
      <div>
        <form onSubmit={this.searchThings}>
          <Input
            type="text"
            value={this.state.search}
            onChange={(e) => this.changeHandler(e)}
          />
          {/* <button type="submit">Search</button> */}
        </form>
        <h3>Results:</h3>
        <SearchRes search={this.state.search} things={this.state.things} />
      </div>
    );
  }
}

const SearchRes = (props) => {
    return (
      <div>
     <ThingRes search={props.search} things={props.things} />
      </div>
    );
  }


const ThingRes = (props) => {
  return (
    <div>
      {props.things.includes(props.search) ? <h4>{props.search}</h4> : <h4 >{props.things.map((thing) => {
        return <li>{thing}</li>
      })}</h4>}
      
    </div>
  );
};
