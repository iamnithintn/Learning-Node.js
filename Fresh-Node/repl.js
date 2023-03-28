const repl = require("repl");
const local = repl.start("$");


local.on('exit',()=>{
    console.log("Exiting Repl");
    process.exit(1)
})