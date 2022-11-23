/* exported includes */

function includes(list, value) {
  let nextList = list;
  while (nextList.next !== null) {
    if (nextList.data === value) return true;
    nextList = nextList.next;
  }
  if (nextList.data === value) {
    return true;
  } else {
    return false;
  }
}
