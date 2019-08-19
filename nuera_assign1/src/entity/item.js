import uuid from 'uuid/v4';

export default class Item {
  constructor(name, value, category) {
    this._id = uuid();
    this._name = name;
    this._value = value;
    this._category = category;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  get value() {
    return this._value;
  }

  set value(newValue) {
    this._value = newValue;
  }

  set category(newCategory) {
    this._category = newCategory;
  }

  get category() {
    return this._category;
  }
}


