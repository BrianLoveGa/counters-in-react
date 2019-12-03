import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <h1 className="App-title">React Counters</h1>
        <button className="more" onClick={this.props.increaseCounters}>show More</button>
        <button className="less" onClick={this.props.decreaseCounters}>too many take one away</button>
      </header>
    );
  }
}

export default Header;
