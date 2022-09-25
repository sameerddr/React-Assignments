import "./App.css";
import React, { Component } from "react";
import Todo from "./TodoApp/Todo";
class App extends Component {
  render() {
    return (
      <div>
        <h1 className="head">Todo By SameerDDR</h1>
        <Todo />
      </div>
    );
  }
}

export default App;
