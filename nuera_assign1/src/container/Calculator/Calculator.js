import React, { Component } from "react";
import calcControl from "./../../component/ui/CalcControl";
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

  handleCostChanged = value => {
    console.log(value);
  };

  render() {
    return (
      <Container>
        <div>Item list</div>
        <calcControl
          itemName={this.state.itemName}
          itemCost={this.state.itemCost}
          itemCategory={this.state.itemCategory}
          handleCostChanged={this.handleCostChanged}
        />
      </Container>
    );
  }
}

export default Calculator;
