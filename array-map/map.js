const array = [1, 2, 3, 4, 5];
function map(array, transform) {
  const tempArray = [];
  array.forEach(element => tempArray.push(transform(element)));
  return tempArray;
}

console.log('map bonus original:', array);
console.log('map bonus challenge:', map(array, element => element * 2));
