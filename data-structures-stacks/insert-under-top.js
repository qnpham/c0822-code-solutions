/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  const peek = stack.peek();
  if (peek !== undefined) {
    const top = stack.pop();
    stack.push(value);
    stack.push(top);
  }
}
