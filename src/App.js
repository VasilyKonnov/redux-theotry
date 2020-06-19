import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.scss";
import Counter from "./Counter";
import { add, sub, addNumber, plusTen } from "./redux/actions/actions";

class App extends Component {
  render() {
    return (
      <div className={"App"}>
        <h1>
          Счетчик <strong>{this.props.counter}</strong>
        </h1>

        <hr />

        <div className="Actions">
          <button onClick={this.props.onAdd}>Добавить 1</button>
          <button onClick={this.props.onSub}>Вычесть 1</button>
          <button onClick={this.props.plus10}>Прибавить 10</button>
        </div>
        <div className="Actions">
          <button onClick={() => this.props.addNumber(15)}>Добавить 15</button>
          <button onClick={() => this.props.addNumber(35)}>Добавить 35</button>
          <button onClick={() => this.props.addNumber(-48)}>Отнять -48</button>
        </div>
        <Counter />
      </div>
    );
  }
}

// Это функции которыми мы соединяем компонент с redux
// И уже их мы используем в компоненте при помощи приставки this

function mapStateToProps(state) {
  console.log("State", state.counter1.counter);
  return {
    counter: state.counter1.counter,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    onAdd: () => dispatch(add()),
    onSub: () => dispatch(sub()),
    plus10: () => dispatch(plusTen()),
    addNumber: (number) => dispatch(addNumber(number)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
