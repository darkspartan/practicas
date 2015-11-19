exports.config={
	seleniumAddress: 'http://localhost:4444/wd/hub',

	specs:[
		'e2e/TC01-loadData.js',
		'e2e/TC02-insertContacts.js',
		'e2e/TC04-testContact.js',
		'e2e/TC05-CannotInsertDuplicateRows.js',
		'backend/TC01-getNotFound.js',
		'backend/TC02-checkData.js',
		'backend/TC03-commandNotAvailable.js',
		'backend/TC04-post.js',
		'e2e/TC03-deleteContact.js',
		

	]


};