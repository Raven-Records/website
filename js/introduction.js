//Introduction section instantiation
function setIntro(appendTo){
	var introContainer = document.createElement('div');
		introContainer.setAttribute('id', 'introDiv');
		introContainer.setAttribute('class', 'row col-md-12 content-grid');
		introContainer.setAttribute('style', 'height:110vh;width:100vw');
		var introTextBox = document.createElement('div');
			introTextBox.setAttribute('id', 'introTextBox');
			introTextBox.setAttribute('class', 'lead');
			var introText = document.createElement('p');
				introText.setAttribute('id', 'introText');
				$(introText).text('THIS IS A LINE OF EXAMPLE TEXT. \
									THIS SHOULD BE REPLACED WITH A CALL TO ACTION.');
			introTextBox.append(introText);
		introContainer.append(introTextBox);
	appendTo.append(introContainer);
}

//Custom text function
function setIntroText(newText){
	$(introText).text(newText);
}