//Artist section instantiation
function setartists(appendTo){
	//Default artist list
	var artistArray = ['Mountain Songs I', 'Ictus Tactus', 'Indomitus', 'Epicus Flactus', 'Velum Inveritas', 'Raghaflatus Maximus'];
		//Artist object instatiation loop
		for(var x=0; x<artistArray.length; x++){
			artistArray[x] = new artistObj(artistArray[x]);
		}
	var artistSectionTitle = document.createElement('div');
		artistSectionTitle.setAttribute('class', 'row col-md-12 section-title');
		$(artistSectionTitle).text("Artists");
	var artistContainer = document.createElement('div');
		artistContainer.setAttribute('id', 'artistDiv');
		artistContainer.setAttribute('class', 'row col-md-12 grid-container');
		for(var n=0; n<artistArray.length; n++){
			var artist = document.createElement('a');
				artist.setAttribute('class', 'col-md-4 artist-grid');
				artist.setAttribute('href', artistArray[n].link);
				var artistCover = document.createElement('img');
					artistCover.setAttribute('class', 'artistImage');
					artistCover.setAttribute('src', 'images/' + artistArray[n].label + ' Images/cover.jpg');
				artist.append(artistCover);
			artistContainer.append(artist);
		}
	appendTo.append(artistSectionTitle, artistContainer);
}

function artistObj(label){
	this.label = label;
	this.link = 'artistLinks/' + label + ' Links/artistPage.html';
}