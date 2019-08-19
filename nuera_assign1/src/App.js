import React from "react";
import logo from "./logo.svg";
import "./App.css";
import * as category from "./entity/category";
import { observer, inject } from "mobx-react";
import Layout from "./component/layout/layout";

class App extends React.Component {
  test = () => {
    this.props.itemStore.addItem("test", "test", category.Electronics);
    console.log(this.props.itemStore.itemList);
  };

  render() {
    return (
      <div className="App">
        <Layout />
      </div>
    );
  }
}

export default inject("itemStore")(observer(App));
