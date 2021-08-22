import React from "react";
import Panel from './Panel';
import Display from './Display';
import calculate from '../util/calculate';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const result = calculate(this.state, buttonName);
    this.setState(result);
}

  render() {
    return (
      <div className="app">
        <Display value = {this.state.next || this.state.total || "0"} />
        <Panel clickHandler={this.handleClick} />
      </div>

    );
  }
}

export default App;
