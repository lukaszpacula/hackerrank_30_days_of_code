function main() {
     var arr = Array(6);
     var maxSum, i, j;
      for (i = 0; i < 6; i++) {
         arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
     }
      var findMaxSum = (n, m) => {
         var sum = 0;
         for (i = 0; i < 3; i++) {
             for (j = 0; j < 3; j++) {
                 sum += !(i === 1 && (j === 0 || j === 2)) && arr[n + i][m + j];
             }
         }
         return sum;
     }
     var search = () => {
         var sum;
         for (var i = 0; i < 4; i++) {
             for (var j = 0; j < 4; j++) {
                 sum = findMaxSum(i, j);
                 (i === 0 && j === 0) && (maxSum = sum);
                 maxSum < sum && (maxSum = sum);
             }
         }
     }
     search();
     console.log(maxSum);
}
