//Album section instantiation
function setAlbums(appendTo){
	//Default album list
	var albumArray = ['Mountain Songs I', 'Ictus Tactus', 'Indomitus', 'Epicus Flactus', 'Velum Inveritas', 'Raghaflatus Maximus'];
		//Album object instatiation loop
		for(var x=0; x<albumArray.length; x++){
			albumArray[x] = new albumObj(albumArray[x]);
		}
	var albumSectionTitle = document.createElement('div');
		albumSectionTitle.setAttribute('class', 'row col-md-12 section-title');
		$(albumSectionTitle).text("Albums");
	var albumContainer = document.createElement('div');
		albumContainer.setAttribute('id', 'albumDiv');
		albumContainer.setAttribute('class', 'row col-md-12 grid-container');
		for(var n=0; n<albumArray.length; n++){
			var album = document.createElement('a');
				album.setAttribute('class', 'col-md-4 album-grid');
				album.setAttribute('href', albumArray[n].link);
				var albumCover = document.createElement('img');
					albumCover.setAttribute('class', 'albumImage');
					albumCover.setAttribute('src', 'images/' + albumArray[n].label + ' Images/cover.jpg');
				album.append(albumCover);
			albumContainer.append(album);
		}
	appendTo.append(albumSectionTitle, albumContainer);
}

function albumObj(label){
	this.label = label;
	this.link = 'albumLinks/' + label + ' Links/albumPage.html';
}