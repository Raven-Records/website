//Careers section instatiation
function setCareers(appendTo){
	//Default careers list
	var careerArray = ['WRITE', 'SING', 'PLAY', 'PRODUCE'];
		//Career object instatiation loop
		for(var x=0; x<careerArray.length; x++){
			careerArray[x] = new careerObj(careerArray[x]);
		}
	var careerSectionTitle = document.createElement('div');
		careerSectionTitle.setAttribute('class', 'row col-md-12 section-title');
		$(careerSectionTitle).text("Careers");
	var careerContainer = document.createElement('div');
		careerContainer.setAttribute('id', 'careerDiv');
		careerContainer.setAttribute('class', 'row col-md-12 grid-container');
		for(var n=0; n<careerArray.length; n++){
			var career = document.createElement('div');
				career.setAttribute('class', 'col-md-6 careerGrid');
				var careerCover = document.createElement('img');
					careerCover.setAttribute('class', 'careerImage');
					careerCover.setAttribute('src', 'images/' + careerArray[n].label + ' Images/cover.jpg');
					careerCover.setAttribute('href', careerArray[n].link);
				var careerLabel = document.createElement('p');
					careerLabel.setAttribute('class', 'careerLabel');
					$(careerLabel).text(careerArray[n].label);
				career.append(careerCover, careerLabel);
			careerContainer.append(career);
		}
	appendTo.append(careerSectionTitle, careerContainer);
}

function careerObj(label){
	this.label = label;
	this.link = "careerLinks/" + label + ' Links/careerPage.html' ;
}