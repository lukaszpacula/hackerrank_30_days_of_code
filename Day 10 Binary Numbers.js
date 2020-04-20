function main() {
    var n = parseInt(readLine());
    var arr = [];
    while (n != 0) {
        if (n % 2 == 0) {
            arr.push(0);
        } else if (n % 2 == 1) {
            arr.push(1);
        }
        n = Math.floor(n/2);
    }
    var max = 0;
    var current = 0;
    var i, len;
    for (i = 0, len = arr.length; i < len; i++) {
        if (arr[i] == 1) {
            current++;
        }  else if (arr[i] == 0) {
            if (current > max) {
                max = current;
            }
            current = 0;
        }
    }
    console.log(max);
}
