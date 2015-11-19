var request=require('supertest');
var assert=require('assert');
var should=require('should');

describe('Cannot insert duplicate', function (){
	it('should show a buch of data', function(){
		
		browser.get('http://localhost:5000/');
		element(by.model('contact.name')).sendKeys("Dani");
    	element(by.model('contact.email')).sendKeys("Test@asdf.com");
    	element(by.model('contact.number')).sendKeys("632145032");

    	element(by.id('addContact')).click();

    	var contacts = element.all(by.repeater('contact in contactlist'));

    	browser.get('http://localhost:5000/');
    	browser.waitForAngular();
    	browser.driver.sleep(4000);

    	element(by.model('contact.name')).sendKeys("Dani");
    	element(by.model('contact.email')).sendKeys("Test@asdf.com");
    	element(by.model('contact.number')).sendKeys("632145032");
    	
    	element(by.id('addContact')).click();

    	var contacts2 = element.all(by.repeater('contact in contactlist'));
    	

	});
});