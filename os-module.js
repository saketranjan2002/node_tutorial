// Built-in Modules

// OS
// PATH
// FS
// HTTP

const os=require('os')
//info about current user
const user=os.userInfo()
console.log(user);

// method returns the system uptime in secods
console.log(`The System uptime is ${os.uptime()} seconds`);

const currentOS={
  name:os.type(),
  release:os.release(),
  totalmem:os.totalmem(),
  freemem:os.freemem(),  
}
console.log(currentOS);