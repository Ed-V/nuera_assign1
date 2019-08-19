import React, { Component } from "react";
import CalcControl from "./../../component/ui/CalcControl";
import * as category from "./../../entity/category";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemName: "",
      itemCost: 0,
      itemCategory: category.Electronics
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    alert("It worked");
  };

  handleCostChanged = event => {
    this.setState({ itemCost: event.target.value });
  };

  handleNameChanged = event => {
    this.setState({ itemName: event.target.value });
  };

  handleCategoryChanged = event => {
    this.setState({ itemCategory: event.target.value });
  };

  render() {
    return (
      <div className="container">
        <div>Item lddist</div>
        <CalcControl
          itemName={this.state.itemName}
          itemCost={this.state.itemCost}
          itemCategory={this.state.itemCategory}
          handleCostChanged={this.handleCostChanged}
          handleNameChanged={this.handleNameChanged}
          handleCategoryChanged={this.handleCategoryChanged}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default Calculator;
