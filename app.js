function getNumber(num){
    var result = document.getElementById("result");
    result.value += num;
}

function clearNumber(){
    var result = document.getElementById("result");
    result.value = "";
}

function getResult(){
    var result = document.getElementById("result");
    result.value = eval(result.value);
}

function getClear(){
    var result = document.getElementById("result");
    result.value = result.substr(0,result.length-1);
}