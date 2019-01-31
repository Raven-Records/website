//Introduction section instantiation
function setIntro(appendTo){
	var introContainer = document.createElement('div');
		introContainer.setAttribute('id', 'introDiv');
		introContainer.setAttribute('class', 'row col-md-12 content-grid');
		introContainer.setAttribute('style', 'height:110vh;width:100vw');
	appendTo.append(introContainer);
}