function main() {
    var n = parseInt(readLine());
    a = readLine().split(' ');
    a = a.map(Number);
    var totalSwaps = 0;
    for (var i = 0; i < n; i++) {
    var numberOfSwaps = 0;
    for (var j = 0; j < n - 1; j++) {
        if (a[j] > a[j + 1]) {
            swap(j, j + 1, a);
            numberOfSwaps++;
            totalSwaps++;
        }
    }
    if (numberOfSwaps == 0) {
        break;
    }
}
    console.log("Array is sorted in "+totalSwaps+" swaps.");
    console.log("First Element: " + a[0]);
    console.log("Last Element: " + a[n-1]);
}

function swap(x,y,array) {
    var b = array[y];
    array[y] = array[x];
    array[x] = b;
}
