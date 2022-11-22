/* exported isEmpty */

function isEmpty(stack) {
  const top = stack.peek();
  if (top === undefined) return true;
  else return false;
}
