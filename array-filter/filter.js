const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function customFilter(array, predicate) {
  const tempArray = [];
  array.forEach(element => {
    if (predicate(element)) {
      tempArray.push(element);
    }
  });
  return tempArray;
}

const filtered = customFilter(array, element => element > 5);
console.log('customFilter:', filtered);
