// const x = "1";
// const y ="2";

// console.log(x,y);

// %s for String
// %d for Number
// %i for integer
// %o for Object

// console.log("I am %d years old and My name is %s",25,"Prasiddha");

// const sum = ()=> console.log("The sum of 2 and 3 is %d",2+3); 

// const mult = ()=> console.log("The multiplication of 2 and 3 is %d",2*3);


// const mesaureTime = ()=>{
//     console.time("sum");
//     sum();
//     console.timeEnd("sum");
//     console.time("mult");
//     mult();
//     console.timeEnd("mult");
// }


// mesaureTime();


const ProgressBar = require("progress");

const bar = new ProgressBar ("downloading [:bar] :rate/bps :percent :etas",{
    total:20});

const timer = setInterval(() => {
    bar.tick;
    if (bar.complete) {
        clearInterval(interval);
    }
}, 100 );