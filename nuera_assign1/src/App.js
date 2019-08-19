import React from "react";
import logo from "./logo.svg";
import "./App.css";
import * as category from './entity/category'
import { observer, inject }  from 'mobx-react';


class App extends React.Component {

test = () => {

this.props.itemStore.addItem("test", "test", category.Electronics);
console.log(this.props.itemStore.itemList);
}


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <button onClick={this.test}>Click me</button>
      </div>
    );
  }
}

export default inject('itemStore')(observer(App));
