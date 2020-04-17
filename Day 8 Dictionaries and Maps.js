function processData(input) {
  var input = input.split('\n')
  var n = parseInt(input[0]);
  var phoneBook = [];
  var i;
  for (i = 0; i < n; i++){
        var pos = input[i+1];
        pos = pos.split(" ");
        phoneBook[pos[0]] = pos[1];
  }
    for (i = n+1; i < input.length; i++){
    var num = (phoneBook[input[i]]);
    if (num !== undefined) {
        console.log(input[i]+"="+num);
    } else {
        console.log("Not found");
    }
    }
} 
