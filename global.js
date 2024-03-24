//console.log(global);

//: to understand global variables
//: global is object, similar to window but for server 
//: cannot use document.write/querySelector cause document is an object in window not global

const names=require('./names.js');
const os= require('os');
console.log(os.platform(), os.homedir());


/* 
 console.log(names);


 ! names.ListNames.forEach((name)=>{
     console.log(`${name}`);
 });



global.setTimeout(() => {
   console.log("hello world");
}, 3000);


let peacock=[];
let second=1; 
let val="";

 !const addSec  = setInterval(()=>{
    val="";
    peacock.push(second);
    second++;
    !peacock.forEach(element => {
       val+=element+" ";
    });
    console.log(val)
    if(peacock.length>3){
        clearInterval(addSec);
    }
} ,1000); */



    