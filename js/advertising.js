//Advertising section instantiation
function setAdvertising(appendTo){
	var advertisingContainer = document.createElement('div');
		advertisingContainer.setAttribute('id', 'advertisingDiv');
		advertisingContainer.setAttribute('class', 'row col-md-12 content-grid');
		var advertisingTextBox = document.createElement('div');
			advertisingTextBox.setAttribute('id', 'advertisingTextBox');
			advertisingTextBox.setAttribute('class', 'lead');
			var advertisingText = document.createElement('p');
				advertisingText.setAttribute('id', 'advertisingText');
				$(advertisingText).text('TAKE THE GUESSWORK OUT OF YOUR MEDIA MARKETING STRATEGY.');
			var advertisingSubText = document.createElement('p');
				advertisingSubText.setAttribute('id', 'advertisingSubText');
				$(advertisingSubText).text('QUICKLY ACCESS MUSIC CONSUPTION DATA WITH THE DEEPEST ANALYSIS AND REPORTS POSSIBLE');
			advertisingTextBox.append(advertisingText, advertisingSubText);
		var advertisingContactBox = document.createElement('div');
			advertisingContactBox.setAttribute('id', 'advertisingContactBox');
			advertisingContactBox.setAttribute('class', 'contact');
			var contactTextLead = document.createElement('p');
				contactTextLead.setAttribute('id', 'contactTextLead');
				$(contactTextLead).text('GET IN TOUCH');
			var contactTextLink = document.createElement('a');
				contactTextLink.setAttribute('id', 'contactTextLink');
				contactTextLink.setAttribute('href', './contact.html');
				$(contactTextLink).text('advertising@ravenrecords.com');
			advertisingContactBox.append(contactTextLead, contactTextLink);
		advertisingContainer.append(advertisingTextBox, advertisingContactBox);
	appendTo.append(advertisingContainer);
}

//Custom text function
function setAdvertisingText(newText){
	$(advertisingText).text(newText);
}