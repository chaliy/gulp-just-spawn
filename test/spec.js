'use strict';

let expect = require('chai').expect;

let spawn = require('..');

describe('Jast Spawn', () => {

  it('should spawn', () => 
  	spawn('npm', ['version']).then(code => expect(code).to.be.equal(0)));

  it('should report error if something wrong', () => 
  	spawn('foo', ['bar']).catch(code => expect(code).to.be.equal(1)));


  it('should spawn multiple', function() { 
  	this.timeout(5000);
  	
  	return spawn([
		  {cmd: 'npm', args: ['version']},
		  {cmd: 'npm', args: ['version']}  
		])
		.then(code => expect(code).to.be.equal(0));
  });

});
