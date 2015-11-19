var request = require('supertest');
var should = require('should');
var assert = require('assert');

describe('Insert and then delete', function () {
	it('should insert a contact', function (){
		// Insert a contact
		request('http://localhost:5000')
		.get('/contacts')
		.send()
		.end(function(err,res){
			res.status.should.be.equal(200);
			for (var i = 0; i < res.body.length; i++) {
				assert(res.body[i].name.match('[A-Za-z_]+') != null);
				assert(res.body[i].email.match(/^[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z0-9]+$/) != null);
				assert(res.body[i].number.match('^[0-9\+]+$') != null);
				
			}
			assert(true);
		});
	});
});
