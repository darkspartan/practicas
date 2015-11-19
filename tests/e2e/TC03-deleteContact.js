describe('Data is deleted', function () {
	it('delete 1 contact', function (){
		browser.ignoreSynchronization = true;
		browser.get('http://localhost:5000');
		browser.driver.sleep(2000);
		var contacts = element.all(by.repeater('contact in contactlist'));
		contacts.count().then(function(originalCount) {
			startCount = originalCount;
			element.all(by.buttonText("Delete")).last().click();
			browser.driver.sleep(3000);
			contacts = element.all(by.repeater('contact in contactlist'));
			expect(contacts.count()).toEqual(startCount - 1);	
		});
	});
});