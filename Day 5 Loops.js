function main() {
    const n = parseInt(readLine(), 10);
    var i, result;
    for (i = 1; i < 11; i++) {
        result = n*i;
        console.log(n.toString() + " x " + i + " = " + result.toString());
    }
}
