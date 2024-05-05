import React, { Component } from 'react'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      count:0
    }
    this.increment = () => {this.setState((state)=>{return { count: state.count+1}})}
    this.decrement = () => {this.setState((state)=>{return { count: state.count-1}})}

  }

  render() {
    return (<>
      <h1>Counter App</h1>
      <div>Count: {this.state.count}</div>
      <button onClick={this.increment}>Increment</button>
      <button onClick={this.decrement}>Decrement</button>
      </>
    )
  }
}

