import React from "react";
import Aux from "./../../hoc/Auxiliary";

const items = props => {
  const itemsDisplay = props.itemList.map(itemElement => (
    <Aux>
      <div className="columns">
        <div className="column">{itemElement[0].category}</div>
        <div className="column">
          {props.categoryTotal(itemElement[0].category)}
        </div>
      </div>
      
      {itemElement.map(innerItemElement => (
        <div className="columns">
          <div className="column">{innerItemElement.name}</div>
          <div className="column">${innerItemElement.value}</div>
          <div className="column"><button onClick={props.handleItemDelete.bind(this)} data-itemRef={innerItemElement.id}>Remove</button></div>
        </div>
      ))}
    </Aux>
  ));

  return <div>{itemsDisplay}</div>;
};

export default items;
