$(function(){
	/* -------------------------- Nav Bar -------------------------- */

	//Default button array
	var navArray = ["Browse", "Albums", "Artists", "Advertising", "Pricing", "Contact"];
	//Nav button object instatiation loop
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

	/* ------------------------ End Nav Bar ------------------------ */
	/* -------------------------- Gen Grid -------------------------- */

	var bannerContainer = document.createElement('div');
		bannerContainer.setAttribute('id', 'bannerDiv');
		bannerContainer.setAttribute('class', 'row col-md-12 content-grid banner-grid');
		bannerContainer.setAttribute('style', 'height:20vh;width:100vw');
	var introContainer = document.createElement('div');
		introContainer.setAttribute('id', 'introDiv');
		introContainer.setAttribute('class', 'row col-md-12 content-grid');
		introContainer.setAttribute('style', 'height:110vh;width:100vw');

	//Album section instatiation

	//Default album list
	var albumArray = ['Mountain Songs I', 'Ictus Tactus', 'Indomitus', 'Epicus Flactus', 'Velum Inveritas', 'Raghaflatus Maximus'];
		//Album object instatiation loop
		for(var x=0; x<albumArray.length; x++){
			albumArray[x] = new albumObj(albumArray[x]);
		}
	var albumContainer = document.createElement('div');
		albumContainer.setAttribute('id', 'albumDiv');
		albumContainer.setAttribute('class', 'row col-md-12 grid-container');
		for(var n=0; n<albumArray.length; n++){
					//var albumItem = document.createElement('li');
						//albumItem.setAttribute('class', 'col-md-4 content-grid');
						var album = document.createElement('a');
							album.setAttribute('class', 'col-md-4 content-grid');
							album.setAttribute('href', albumArray[n].link);
							var albumCover = document.createElement('img');
								albumCover.setAttribute('class', 'albumImage');
								albumCover.setAttribute('src', 'images/' + albumArray[n].label + ' Images/cover.jpg');
							album.append(albumCover);
						//albumItem.append(album);
					albumContainer.append(album);
				}
	$('#bod').append(bannerContainer, introContainer, albumContainer);

	function albumObj(label){
		this.label = label;
		this.link = "albumLinks/" + label + ' Links/artistIndex.html' ;
	}

	/* ------------------------ End Gen Grid ------------------------ */
	
})