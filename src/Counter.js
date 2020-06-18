import React, { Component } from "react";
import { connect } from "react-redux";

class Counter extends Component {
  render() {
    return (
      <div style={{ padding: 20, border: "1px solid #ccc" }}>
        <h1>Counter {this.props.counter}</h1>
        <hr />
        <div>
          <button onClick={() => this.props.onChange(15)}>Add 15</button>
          <button onClick={() => this.props.onChange(-15)}>Sub -15</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state.counter2.counter2);
  return {
    counter: state.counter2.counter2,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    onChange: (number) => dispatch({ type: "ADD2", payload: number }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
