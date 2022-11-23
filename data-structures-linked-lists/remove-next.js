/* exported removeNext */

function removeNext(list) {
  if (list.next !== null) {
    const extraList = list.next.next;
    list.next = extraList;
  }
}
