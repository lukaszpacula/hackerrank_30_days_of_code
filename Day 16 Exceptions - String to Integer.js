function main() {
    const S = readLine();
    const N = parseInt(S);
    try {
        console.log(N.toString().replace("NaN", "Bad String"));
        }
    catch(err) {
        console.log("Bad String");
    }
}
