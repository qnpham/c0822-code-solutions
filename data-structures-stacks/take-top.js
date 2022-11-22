/* exported takeTop */

function takeTop(stack) {
  const top = stack.peek();
  if (top !== undefined) {
    return stack.pop();
  }
}
