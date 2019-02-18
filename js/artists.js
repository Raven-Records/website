//Artist section instantiation
function setArtists(appendTo){
	//Default artist list
	var artistArray = ['Rob Arthur Hayse', 'Digi Drizz', 'Indomitus', 'Musicxavier', 'AI 1', 'AI 2'];
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
					artistCover.setAttribute('src', 'images/' + artistArray[n].label + ' Images/profile-image.jpg');
				artist.append(artistCover);
			artistContainer.append(artist);
		}
	appendTo.append(artistSectionTitle, artistContainer);
}

function artistObj(label){
	this.label = label;
	this.link = 'artistLinks/' + label + ' Links/artistPage.html';
}