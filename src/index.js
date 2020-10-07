
module.exports = function towelSort (matrix = []) {
  let towelArray = [];

  for (let i = 0; i < matrix.length; i++){
    let j;
    if (i == 0 || i % 2 == 0){
      j = 0;
      while (j < matrix[i].length) {
        towelArray.push(matrix[i][j]);
        j++;
      }
    } else {
      j = matrix[i].length - 1;
      while (-1 < j) {
        towelArray.push(matrix[i][j]);
        j--;
      }
    }
  }
  return towelArray;
}
