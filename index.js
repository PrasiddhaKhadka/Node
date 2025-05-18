// console.log("This is Nodejs tutorial for beginners");
// console.log("This is a new line");
// console.log("This is a new line");
// console.log("This is a new line");

// // process.exit(1);
// // process.exitCode = 1;

// // const car = require("./car");
// // console.log(car);

// const {data} = require("./car");

// console.log(data.ford.year);




//  FOR PATH AND FILE SYSTEM IN NODE 

const path = require("path");

const filePath ="/Users/prasiddhakhadka/Desktop/node/files/sample.txt";

//directory name 
// console.log(path.dirname(filePath));
// console.log(__dirname);

// // base name
// console.log(path.basename(filePath));
// console.log(__filename);

// //extension
// console.log(path.extname(filePath));


// const sampleFile = "testing.txt";
// console.log(path.join(path.dirname(filePath),sampleFile));


const fs = require("fs");

fs.readFile(filePath,"utf8",(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
})