function processData(input) {
    var date = input.split("\n");
    var act = date[0].split(" ").map(Number);
    var exp = date[1].split(" ").map(Number);
    var actDate = new Date(act[2] ,act[1] ,act[0]);
    var expDate = new Date(exp[2] ,exp[1] ,exp[0]);
    var fine = 0;
    if ( actDate <= expDate ) {
        fine = 0;
    } else if ( act[1] == exp[1]  &&  act[2] == exp[2] ) {
        fine = 15*(act[0] - exp[0]);
    } else if (act[2] == exp[2]) {
        fine = 500*(act[1] - exp[1]);
    } else {
        fine = 10000;
    }
    console.log(fine);
} 
