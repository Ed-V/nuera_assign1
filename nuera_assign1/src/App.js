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
<p>start</p>
      </div>
    );
  }
}

export default inject('itemStore')(observer(App));
