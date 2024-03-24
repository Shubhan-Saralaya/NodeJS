const fs=require('fs');

//todo reading files
fs.readFile("./names.txt",(err,data)=>{
    if(err){
        console.log(err);
    }
    console.log(data.toString());
    lastfile;
    }
);

const lastfile=()=>{
    console.log(`last file is printed`);
}
lastfile;




//todo writing files

fs.writeFile(`./name.txt`,`apurva \n` ,(err)=>{
    if(!err) {
        console.log("gg");
    }
});

//todo dirs 

const deleter = ()=> {
    setTimeout( ()=>{
    console.log( "deleting the directory" );
    fs.rmdir( `./myfolder1`,(err)=>
    {
    err ? console.log(err):console.log("directory deleted") ;
     })
},5000)
};


if(!fs.existsSync("./myfolder1")){

fs.mkdir(`./myfolder1`,(err)=>{
    console.log(err || `made my folder`);
});
}
else{
    deleter();
}
    




//todo deleting  files/dirs