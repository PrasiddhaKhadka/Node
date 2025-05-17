// function printMessage(msg) {
//     console.log(msg);
// }
// console.log(printMessage);
// // printMessage;
// printMessage("Hello World");



// const variableFunction = function printHelloWorld() {
//     console.log("Hello World New");
// }

// variableFunction();



function addSum(a,b){
    return a+b;
}

console.log(addSum(1,2));


// rest param 

function restParam(x,...y){
    return x+y;
    
}
console.log(restParam(1,5,3,4));