// inbuilt module

const os =require('os');

// user info
const user =os.userInfo();
console.log(user)

//methods return the system uptime

console.log(`The system Uptime is ${os.uptime}`)

const currentOs ={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}

console.log(currentOs)