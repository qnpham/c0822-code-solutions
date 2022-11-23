/* exported getTail */

function getTail(list) {
  let nextList = list;
  while (nextList.next !== null) {
    nextList = nextList.next;
  }
  return nextList.data;
}
