function square (num1){
    return num1**2;
}
function add (num2, num3){
    console.log(num2 + num3)
}
function receivesAFunction(add) {
    square();
    add();
}

function returnsANamedFunction(){
    return function thisFunctionHasAName(){};
}

function returnsAnAnonymousFunction(){
    return function(){};
}