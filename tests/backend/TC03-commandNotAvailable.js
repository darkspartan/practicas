var request=require('supertest');
var assert=require('assert');
var should=require('should');

describe('Put not defined', function (){
	it('should get a 404', function(){
		request('http://localhost:5000/')
		.put('/contacts')
		.send()
		.end(function (err,res){
			res.status.should.be.equal(404);
		});
	});
});