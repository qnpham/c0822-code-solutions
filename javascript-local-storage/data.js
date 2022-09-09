/* exported todos */

var todos = [];
var previousToDosJSON = localStorage.getItem('javascript-local-storage');
if (previousToDosJSON !== null) {
  todos = JSON.parse(previousToDosJSON);
}
window.addEventListener('beforeunload', function (event) {
  var todosJSON = JSON.stringify(todos);
  this.localStorage.setItem('javascript-local-storage', todosJSON);
});
