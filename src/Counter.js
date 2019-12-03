import React, { Component } from "react"

export default class Counter extends Component {

        constructor() {
          super()
      
          this.state = { count: 0 }
      
          this.increaseCount = this.increaseCount.bind(this)
        }

        increaseCount() {
          this.setState({ count: this.state.count + 1 })
        }
        decreaseCount = () => {
            this.setState({ count: this.state.count - 1 })
          }

    render(){
        return (
            <div className="Counter">
                <h4>counter: {this.state.count}</h4>
                <button onClick={this.decreaseCount} >Decrease it</button>
                <button onClick={this.increaseCount}>Pump it up</button>
            </div>
        )
    }
}