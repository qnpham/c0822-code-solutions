/* exported takeSmaller */

function takeSmaller(queue) {
  const first = queue.dequeue();
  let smallest = first;
  if (first !== undefined) {
    const second = queue.dequeue();
    if (second !== undefined) {
      if (first < second) {
        queue.enqueue(second);
      } else {
        queue.enqueue(first);
        smallest = second;
      }
    }

    return smallest;
  }
}
