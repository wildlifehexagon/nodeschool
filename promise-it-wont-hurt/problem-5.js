'use strict';

const promise = new Promise(function(fulfill, reject) {
  fulfill('PROMISE VALUE');
  return reject(new Error('I DID NOT FIRE'));
});

promise.then(console.log);

console.log('MAIN PROGRAM');
