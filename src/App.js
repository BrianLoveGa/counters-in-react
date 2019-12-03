import React, { Component } from "react";
import Header from "./Header";
import CounterList from "./CounterList";

export default class App extends Component {

    constructor() {
      super()

      this.state={
        counters: 5
      }
      this.decreaseCounters = this.decreaseCounters.bind(this)
    this.increaseCounters = this.increaseCounters.bind(this)
    }

    increaseCounters() {
      let counters = this.state.counters + 1
  
      this.setState({ counters }, () => console.log(this.state.counters))
    }

    decreaseCounters() {
      let counters = this.state.counters - 1
  
      this.setState({ counters }, () => console.log(this.state.counters))
    }



  render() {
    return (
      <div className="App">
        <Header 
        increaseCounters={this.increaseCounters}
        decreaseCounters={this.decreaseCounters}
        />
        <CounterList counters={this.state.counters}/>
        
      </div>
    );
  }
}
