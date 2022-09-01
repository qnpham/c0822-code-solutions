/* exported getStudentNames */
/*
make a result array
make a loop starting from zero and will increment as long as it is less than or equal to
parameter length minus one
in each iteration get name property of parameter at index of loop
while in the same iteration, push the resulted key of parameter into result array
return result array
*/
function getStudentNames(students) {
  var result = [];
  for (var i = 0; i <= students.length - 1; i++) {
    result.push(students[i].name);
  }
  return result;
}
