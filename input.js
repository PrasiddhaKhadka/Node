const readLine = require ("readline");
const prompt = require ("prompt-sync")();

const rl = readLine.createInterface({
    input: process.stdin, // standard input 
    output: process.stdout // standard output
});

rl.question("What is your name", (answer) => {
    console.log(`Your name is ${answer}`);
    rl.close();
})

const promptInput = prompt("What is your name");
console.log(`Your name is ${promptInput}`);