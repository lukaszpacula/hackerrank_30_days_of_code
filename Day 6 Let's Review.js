function processData(input) {
    array = input.split("\n");
    var n = parseInt(array[0]);
    for (var i = 0; i < n; i++) { 
         var x = array[i+1];
         var l = x.length;
         var arr = x.split("");
         var txt1 = "";
         var txt2 = "";
         for (var j = 0; j < l; j++) {
             if (j % 2 == 0) {
                 txt1 = txt1 + arr[j];
             } else {
                 txt2 = txt2 + arr[j];
             }
         }
         console.log(txt1 + " " + txt2);
    }
}
