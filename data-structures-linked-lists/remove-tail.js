/* exported removeTail */

function removeTail(list) {
  if (list.next === null) return;
  let beforeTail = list;
  while (beforeTail.next.next !== null) {
    beforeTail = beforeTail.next;
  }
  beforeTail.next = null;
}
