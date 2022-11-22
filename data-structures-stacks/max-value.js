/* exported maxValue */

function maxValue(stack) {
  let maxValue = stack.pop();
  while (stack.peek() !== undefined) {
    const currentTop = stack.pop();
    maxValue = currentTop > maxValue ? currentTop : maxValue;
  }
  if (maxValue !== undefined) {
    return maxValue;
  } else {
    return -Infinity;
  }
}
