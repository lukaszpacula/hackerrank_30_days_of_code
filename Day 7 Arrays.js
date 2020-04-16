function main() {
    const n = parseInt(readLine(), 10);
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    arr.reverse();
    var i;
    var txt = "";
    for (i=0; i<arr.length; i++) {
        txt += arr[i] + " ";
    }
    console.log(txt);
}
