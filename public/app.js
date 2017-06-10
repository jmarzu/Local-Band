var $ = require('jquery');

yeah();

function yeah() {
	console.log('this is working');
}

$('button').on('click', function(e) {
	console.log('browserify works');
})