'use strict';

let spawn = require('child_process').spawn;

module.exports = (command, args, options) => {
  if (Array.isArray(command)){    
    let next = () => {
      let c = command.shift();
      if (c){
        return cmd(c.cmd, c.args, c.options).then(next);
      }
      return Promise.resolve();
    };
    
    return next();
  }
  
  return new Promise((resolve, reject) => {
    let procOptions = Object.assign({stdio: 'inherit', shell: true}, options || {});
    let proc = spawn(command, args, procOptions);    

    proc.on('exit', code => {      
      console.log(code);
      if (code === 0) resolve(code)
      else reject(code)              
    });
  })
};