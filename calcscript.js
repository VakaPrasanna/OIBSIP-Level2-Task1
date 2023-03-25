function clearScreen() {
    //This function clears entire values.
    document.getElementById("result").value = "";
}

function display(v) {
    //This function displays values.
    document.getElementById("result").value += v;
}

function calculate() {
  //This function performs required mathematical logic of an expression by evaluating it and displays result.
    var x = document.getElementById("result").value;
    var y = eval(x);
    document.getElementById("result").value = y;
}

function del(){
    //This function deletes only the last value.
    document.getElementById("result").value = document.getElementById("result").value.slice(0,-1);
}

function sqrt(){
    //This function calculates Mathematical Square Root for a number.
    var a = document.getElementById("result").value;
    var b = Math.sqrt(a);
    document.getElementById("result").value = b;
}