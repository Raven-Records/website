$(function(){
	/* Nav Bar */
	var navBar = document.createElement('nav');
		navBar.setAttribute('id', 'genNav');
		navBar.setAttribute('class', 'navbar navbar-expand-lg fixed-top');
		var brand = document.createElement('a');
			brand.setAttribute('class', 'navbar-brand');
			brand.setAttribute('href', 'index.html');
		var collapseButton = document.createElement('button');
			collapseButton.setAttribute('class', 'navbar-toggler');
			collapseButton.setAttribute('type', 'button');
			collapseButton.setAttribute('data-toggle', 'collapse');
			collapseButton.setAttribute('data-target', '#navbarSupportedContent');
			collapseButton.setAttribute('aria-controls', 'navbarSupportedContent');
			collapseButton.setAttribute('aria-expanded', 'false');
			collapseButton.setAttribute('aria-label', 'Toggle navigation');
			var togglerIcon = document.createElement('span');
				togglerIcon.setAttribute('class', 'navbar-toggler-icon');
			collapseButton.append(togglerIcon);
		var collapseContent = document.createElement('div');
			collapseContent.setAttribute('class', 'collapse navbar-collapse');
			collapseContent.setAttribute('id', 'navbarSupportedContent');
			var buttonList = document.createElement('ul');
				buttonList.setAttribute('class', 'navbar-nav mr-4');
				
})