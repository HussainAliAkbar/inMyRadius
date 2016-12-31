'use strict';

module.exports = {
  test
};

function test(payload) {
  console.log('yayy');
  return Promise.resolve({testing: 1});
}
