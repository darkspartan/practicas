
describe('Data is tested', function () {
	it('data generic test', function (){
		browser.ignoreSynchronization = true;
		browser.get('http://localhost:5000');
		element.all(by.repeater('contact in contactlist')).each(function(element, index) {
			element.getText().then(function (text) {
				var dataRow = text.split(' ');
				expect(dataRow[0]).toMatch('[A-Za-z_]+');
				expect(dataRow[1]).toMatch(/^[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z0-9]+$/);
				expect(dataRow[2]).toMatch('^[0-9\+]+$');
			});
		});

	});
});