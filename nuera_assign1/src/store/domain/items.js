import { observable, action, decorate, computed } from "mobx";
import { computedFn } from "mobx-utils";
import item from "../../entity/item";
import * as itemCategory from "../../entity/category";

export const itemStore = class ItemStore {
  itemList = [];

  addItem(name, value, category) {
    this.itemList.push(new item(name, value, category));
  }

  removeItem(id) {
    let toRemove = this.itemList.findIndex(item => item.id === id);
    this.itemList.splice(toRemove, 1);
  }

  calcCategoryTotal = computedFn(function calcCategoryTotal(category) {
    let result = this.itemList.filter(x => x.includes(category));
    let total = 0;

    result.forEach(element => {
      total += element.value;
    });

    return total;
  });

  get sortedArray() {
 
    let sortedResult = [];

    itemCategory.CategoryList.forEach(category => {
      let sortedSegment = [];
      this.itemList.forEach(item => {
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
};

decorate(itemStore, {
  itemList: observable,
  addItem: action,
  removeItem: action,
  sortedArray: computed
});
