chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('original.html', {
    'id': "mainwin",
	'outerBounds': {
      'width': 300,
      'height': 380
    },
	//'frame': 'none'
  });
});