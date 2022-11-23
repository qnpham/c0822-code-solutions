/* exported swapFront */

function swapFront(list) {
  if (list.next === null) {
    return list;
  }
  const head = list;
  const nextList = list.next;
  const extraList = list.next.next;
  nextList.next = head;
  nextList.next.next = extraList;
  list = nextList;
  return list;
}
