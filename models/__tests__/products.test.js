const Products = require('../categories/products.js');

describe('Products Model', () => {

  let products;

  beforeEach(() => {
    products = new Products();
  })

  // How might we repeat this to check on types?
  it('sanitize() returns undefined with missing requirements', () => {
    const schema = products.schema;
    var testRecord = {};
    for (var field in schema) {
      if (schema[field].required) {
        testRecord[field] = null;
      }
    }
    expect(products.sanitize(testRecord)).toBeUndefined();
  });

  it('can post() a new product', () => {
    let obj = {name: 'Test Product'};
    return products.create(obj)
      .then(record => {
        Object.keys(obj).forEach(key => {
          expect(record[key]).toEqual(obj[key]);
        });
      })
      .catch(e => console.error('ERR', e));
  });

  it('can get() a product', () => {
    let obj = {name: 'Test Product'};
    return products.create(obj)
      .then(record => {
        return products.get(record._id)
          .then(product => {
            Object.keys(obj).forEach(key => {
              expect(product[0][key]).toEqual(obj[key]);
            });
          });
      });
  });

  it('can delete() a product', () => {
    let obj = {name: 'Test Product'};
    return products.create(obj)
      .then(record => {

      })
  })

  it('can update() a product', () => {
    let obj = {name: 'Test Product'};
    return products.create(obj)
      .then(record => {
        
      })
  })

});