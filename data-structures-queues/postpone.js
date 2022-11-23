/* exported postpone */

function postpone(queue) {
  const front = queue.dequeue();
  if (front !== undefined) {
    queue.enqueue(front);
  }
}
