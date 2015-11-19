var request = require('supertest');
var should = require('should');
var assert = require('assert');


describe('Get of an unexisting data', function () {
	it('should get a 200', function (){
		request ('http://localhost:5000')
      .post( "/contacts" )
      .send( {"name":"Sergio","email":"sertrimur@gmail.com","number":"617000349"} )
      .end(function(err,res){
			res.status.should.be.equal(200);
		});
      	browser.driver.sleep(5000);
		element.all(by.buttonText("Delete")).last().click();
	});
	
});