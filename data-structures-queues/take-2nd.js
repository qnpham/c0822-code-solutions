/* exported take2nd */

function take2nd(queue) {
  const first = queue.dequeue();
  if (first !== undefined) {
    queue.enqueue(first);
    const second = queue.dequeue();
    return second;
  } else {
    return undefined;
  }
}
