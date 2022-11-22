/* exported getTop */

function getTop(stack) {
  const top = stack.peek();
  if (top !== undefined) {
    return top;
  }
}
