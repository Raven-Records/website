$(function(){
	var newNavArray = ['logo', 'Log in', 'Sign up'];
	replaceNavArray(newNavArray);

	/* -------------------------- Bus Grid -------------------------- */
	//Introduction Section
	var introContainer = document.createElement('div');
		introContainer.setAttribute('id', 'introDiv');
		introContainer.setAttribute('class', 'row col-md-12 content-grid');
		introContainer.setAttribute('style', 'height:110vh;width:100vw');

	//Credits section instatiation

	//Default credits list
	var creditArray = ['Video Game 1', 'Video Game 2', 'Video Game 3', 'Indie Film 1', 'Indie Film 2', 'Indie Film 3'];
		//Credit object instatiation loop
		for(var x=0; x<creditArray.length; x++){
			creditArray[x] = new creditObj(creditArray[x]);
		}
	var creditContainer = document.createElement('div');
		creditContainer.setAttribute('id', 'creditDiv');
		creditContainer.setAttribute('class', 'row col-md-12 grid-container');
		for(var n=0; n<creditArray.length; n++){
			var credit = document.createElement('a');
				credit.setAttribute('class', 'col-md-4 content-grid');
				credit.setAttribute('href', creditArray[n].link);
				var creditCover = document.createElement('img');
					creditCover.setAttribute('class', 'creditImage');
					creditCover.setAttribute('src', 'images/' + creditArray[n].label + ' Images/cover.jpg');
				credit.append(creditCover);
			creditContainer.append(credit);
		}
	$('#bod').append(introContainer, creditContainer);

	function creditObj(label){
		this.label = label;
		this.link = "creditLinks/" + label + ' Links/creditPage.html' ;
	}

	/* ------------------------ End Bus Grid ------------------------ */
})