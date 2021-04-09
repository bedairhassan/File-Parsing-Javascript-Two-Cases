var isAlpha = function(ch){
    return /^[A-Z]$/i.test(ch);
  }


let obj={
    'question':"",
    'answer':"",
    'mcq':[]
}
let copyObj={
    'question':"",
    'answer':"",
    'mcq':[]
}
let array=[]


var fs = require("fs");
var lines = fs.readFileSync("./sample.txt","utf8");
lines = lines.split('\n')

let Type=line=>{

    line = line.toLocaleLowerCase()

    if(line.includes("answer")){
        return 'answer'
    }

    if(line.includes(")")){

        let first = line.split(")")[0]

        if (isAlpha(first)){
            return 'mcq'
        }else{
            return 'question'
        }
    }

    return ''
}

let append = (line,type)=>{

    if(type==='question'){ // string
        obj['question']=line
    }
    else if(type==='mcq'){ // array 

        if(obj['mcq'].length===0){
            obj['mcq']=[line]
        }else{
            let tmp = obj['mcq']
            tmp = [...tmp,line]    
            obj['mcq']=tmp
        }

        // obj['mcq'].push(line)
    }
    else if(type==='answer'){ // string

        obj['answer']=line
        array=[...array,obj]
        obj=copyObj
    }
}

for (let line of lines){


    if(line.length===1){
        continue
    }

    let type =Type(line)

    append(line,type)
}

console.log(array)