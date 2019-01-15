$(function(){
	/* -------------------------- Nav Bar -------------------------- */

	//Default button array
	var navArray = ["Browse", "Albums", "Artists", "Advertising", "Pricing", "Contact"];
	//Nav button loop
		for(var i=0; i<navArray.length; i++){
			navArray[i] = new navButton(navArray[i]);
		}

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
				for(var k=0; k<navArray.length; k++){
					var listItem = document.createElement('li');
						listItem.setAttribute('class', 'nav-item');
						var listButton = document.createElement('a');
							listButton.setAttribute('class', 'nav-link');
							listButton.setAttribute('href', navArray[k].link);
							$(listButton).text(navArray[k].label);
						listItem.append(listButton);
					buttonList.append(listItem);
				}
			collapseContent.append(buttonList);
		navBar.append(brand, collapseButton, collapseContent);
	$('#bod').append(navBar);
	
	//Nav button object function
	function navButton(label){
		this.label = label;
		this.link = "navLinks/" + label ;
	}
	//Nav button management
	function customNav(buttonID, newLabel){
		navArray[buttonID] = newLabel;
	}

})