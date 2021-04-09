let array=[]


var fs = require("fs");
var lines = fs.readFileSync("./sample.txt","utf8");
lines = lines.split('\n')

// function named append
// parameters: object
// description: 
// pushes object to array
// ex. array.push(object)
let append = (object)=> array=[...array,object]

const ParseObject = line=>{

    line = line.split(',')

    let object = {
        question: line[0],
        mcq: [
            line[1],
            line[2],
            line[3],
            line[4]
        ],
        answer: line[5]
    }

    return object
}

for (let line of lines){

    
    if(line.split(",").length===1){
        continue
    }

    let object=ParseObject(line)

    append(object)
}

console.log(array)