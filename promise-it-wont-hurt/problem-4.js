'use strict';

const promise = new Promise(function(fulfill, reject) {
  fulfill('I FIRED');
  return reject(new Error('I DID NOT FIRE'));
});

function onRejected(error) {
  console.log(error.message);
};

promise.then(console.log, onRejected);
