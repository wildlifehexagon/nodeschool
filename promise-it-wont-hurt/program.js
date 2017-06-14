'use strict';

var catchAll = promise.catch(function(err) {
  console.error('THERE IS AN ERROR!');
  console.error(err.message);
});

const promise = Promise.resolve('SECRET VALUE #1')

const promise2 = Promise.reject(new Error('SECRET VALUE #2'));

promise.then(promise, promise2);
promise2.then(promise, promise2);
