'use strict';

const DataModel = require('../memory.js');

class Products extends DataModel {
  constructor() {
    super();
    this.schema = {
      id: {required: true},
      name: { required: true },
      category_id: {required: true},
      price: {required: true},
      weight: {required: false},
      quantity_in_stock: {required: true},
    };
  }
}

module.exports = Products;

// can add field types 