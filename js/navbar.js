$(function(){
	setNav();
})
/* -------------------------- Nav Bar -------------------------- */

//Default button array
var navArray = ["Logo", "About", "Albums", "Artists", "Credits", "Careers", "Advertising", "Pricing", "Contact"];

function setNav(){

	//Nav button object instatiation loop
		for(var i=0; i<navArray.length; i++){
			navArray[i] = new navButton(navArray[i]);
		}
	var navBar = document.createElement('nav');
		navBar.setAttribute('id', 'topNav');
		navBar.setAttribute('class', 'navbar navbar-expand-lg fixed-top');
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
				var navColumnLeft = document.createElement('div');
					navColumnLeft.setAttribute('class', 'col-md-6 col-xs-6 nav-left nav-column');
				var navColumnRight = document.createElement('div');
					navColumnRight.setAttribute('class', 'col-md-6 col-xs-6 nav-right nav-column');
				for(var k=0; k<navArray.length; k++){
					var listItem = document.createElement('li');
						listItem.setAttribute('class', 'nav-item');						
						if (k==0) {
							var navLogo = document.createElement('a');
								navLogo.setAttribute('class', 'logo');			
								navLogo.setAttribute('href', 'index.html');
								var logoImg = document.createElement('img');
									logoImg.setAttribute('src', 'images/branding/text-logo.png');
								navLogo.append(logoImg);
							listItem.append(navLogo);
							navColumnLeft.append(listItem);
							buttonList.append(navColumnLeft);
						} else {
							var listButton = document.createElement('a');
								listButton.setAttribute('class', 'nav-link');
								listButton.setAttribute('href', navArray[k].link);
								listButton.setAttribute('id', navArray[k].label + 'Button');
							$(listButton).text(navArray[k].label);
							navColumnRight.append(listButton);	
						}							
						buttonList.append(navColumnRight);
				}
			collapseContent.append(buttonList);
		navBar.append(collapseButton, collapseContent);

	//Nav Spacer to account for nav covering top of page (possibly temporary)
	var navSpacer = document.createElement('nav');
		navSpacer.setAttribute('id', 'topNavSpacer');
		navSpacer.setAttribute('class', 'row col-md-12 mt-nav')
	//$('#bod').insertBefore(navBar, $('#bod').firstChild);

	$('#bod').append(navBar, navSpacer);
}

//Nav button object function
function navButton(label){
	this.label = label;
	if (label === "About") {
		/*switch (Insert Cookie Reference Here){
			case "General";
				this.link = "general.html";
			case "Business";
				
		}*/
		this.link = "creator" + ".html";
	} else {
		this.link = label + ".html";
	}
}


/* ------------------------ End Nav Bar ------------------------ */

//Nav button management
function replaceNavButton(buttonID, newLabel){
	navArray[buttonID] = newLabel;
	$('#bod nav').remove();
	setNav();
}
function replaceNavArray(newArray){
	this.navArray = newArray;
	$('#bod nav').remove();
	setNav();
}