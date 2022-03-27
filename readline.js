const readline=require('readline')
let rl=readline.createInterface(
    {input:process.stdin,
     output:process.stdout   
    
    }
)

rl.question('course name : ',course=>{
    console.log('course name is '+course);
    rl.close()
})

rl.on('close',()=>{
    console.log("course name found successfully");
})