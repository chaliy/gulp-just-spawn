'use strict';

let spawn = require('child_process').spawn;

let spawnee = (command, args, options) => {
  if (Array.isArray(command)){    
    let next = result => {
      let c = command.shift();
      if (c){
        return spawnee(c.cmd, c.args, c.options).then(next);
      }
      return Promise.resolve(result);
    };
    
    return next();
  }
  
  return new Promise((resolve, reject) => {
    let procOptions = Object.assign({stdio: 'inherit', shell: true}, options || {});
    let proc = spawn(command, args, procOptions);    

    proc.on('exit', code => {      
      if (code === 0) resolve(code);
      else reject(code); 
    });
  })
};

module.exports = spawnee;