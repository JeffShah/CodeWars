var myGlobal = 10 // Declare your variable here


function fun1(myGlobal) {
  oopsGlobal = 5 // Assign 5 to oopsGlobal Here
  console.log(fun1);
}

// Only change code above this line
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}