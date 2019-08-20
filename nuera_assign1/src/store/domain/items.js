import { observable, action, decorate, computed } from "mobx";
import { computedFn } from "mobx-utils";
import item from "../../entity/item";
import * as itemCategory from "../../entity/category";

export const itemStore = class ItemStore {
  

    _itemList = [];


  addItem(name, value, category) {
    this._itemList.push(new item(name, value, category));

  }

  removeItem(id) {
    let toRemove = this._itemList.findIndex(item => item.id === id);
    this._itemList.splice(toRemove, 1);
  }

  calcCategoryTotal = computedFn((category) => {
    let total = 0;
     this._itemList.forEach(element => {
      if (element.category === category) {
        total = (total + element.value);
      }
    });



    return total;
  });

  get sortedArray() {
    let sortedResult = [];

    itemCategory.CategoryList.forEach(category => {
      let sortedSegment = [];
      this._itemList.forEach(item => {
        if (category === item.category) {
          sortedSegment.push(item);
        }
      });

      if (sortedSegment.length > 0) {
        sortedResult.push(sortedSegment);
      }
    });

    return sortedResult;
  }

  get itemList(){
    return this._itemList;
  }

  get itemTotalPrice() {
    let totalCost = 0;

    this._itemList.forEach(item => {
      totalCost += item.value;
    });

    return totalCost;
  }
};

decorate(itemStore, {
  _itemList: observable,
  addItem: action,
  removeItem: action,
  sortedArray: computed,
  itemTotalPrice: computed,
  itemList: computed
});
