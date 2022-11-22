/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  const peek = stack.peek();
  if (peek !== undefined) {
    const firstTop = stack.pop();
    const secondTop = stack.pop();
    if (secondTop !== undefined) {
      stack.push(secondTop);
    }
    stack.push(firstTop);
    return secondTop;
  }
}
