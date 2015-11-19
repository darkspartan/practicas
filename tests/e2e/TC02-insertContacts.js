var request=require('supertest');
var assert=require('assert');
var should=require('should');

describe('Data is inserted', function () {
	it('data inserted contact', function (){
		browser.ignoreSynchronization = true;
		browser.get('http://localhost:5000');
		browser.driver.sleep(2000);
		var contacts = element.all(by.repeater('contact in contactlist'));
		contacts.count().then(function(originalCount) {
			startCount = originalCount;
			element(by.model("contact.name")).sendKeys('TestValen');
			element(by.model("contact.email")).sendKeys('test@gmaili.info');
			element(by.model("contact.number")).sendKeys('7374');
			
			browser.actions().mouseMove(element(by.buttonText("Add"))).click().perform();

			browser.driver.sleep(5000);
			contacts = element.all(by.repeater('contact in contactlist'));
			expect(contacts.count()).toEqual(startCount + 1);
			element.all(by.buttonText("Delete")).last().click();
		});

	});
});