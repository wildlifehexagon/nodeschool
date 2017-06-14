'use strict';

const promise = new Promise(function(fulfill, reject) {
  return setTimeout(function() {
    reject(new Error('REJECTED!'));
  }, 300);
});

function onReject(error) {
  console.log(error.message);
};

promise.then(function(pass) {
  console.log('success');
}, onReject);
