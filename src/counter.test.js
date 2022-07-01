const counter = require('./modules/counter.js')

test('test counter', () => { 
  expect(counter([1, 2, 3, 4, 5])).toBe(5);
 })