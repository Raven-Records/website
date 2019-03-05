function setSpacer(appendTo){
	var height = 10;
	var spacer = document.createElement('div');
		spacer.setAttribute('class', 'row col-md-12 spacer');
		spacer.setAttribute('style', 'height:' + height + 'vh');
	appendTo.append(spacer);
}

//Custom height function
function setSpacerHeight(newHeight){
	height = newHeight;
}