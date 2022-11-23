/* exported getLength */

function getLength(list) {
  let counter = 1;
  let nextList = list.next;
  while (nextList !== null) {
    counter++;
    nextList = nextList.next;
  }
  return counter;
}
