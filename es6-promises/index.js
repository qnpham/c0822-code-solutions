const takeAChance = require('./take-a-chance');
const promise = takeAChance('Quan');

promise.then(resolve => console.log(resolve));
promise.catch(error => console.log(error.message));
