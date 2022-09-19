function ExampleConstructor() {

}
console.log('ExampleConstructor.prototype:', ExampleConstructor.prototype);
console.log('typeof ExampleConstructor.prototype:', typeof ExampleConstructor.prototype);

var test = new ExampleConstructor();
console.log('test:', test);

var checkInstance = test instanceof ExampleConstructor;
console.log('checkInstance:', checkInstance);
