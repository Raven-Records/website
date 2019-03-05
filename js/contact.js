//Contact section instantiation
function setContact(appendTo){
	//Default contact title array
	var contactTitleArray = ['General', 'Advertising', 'Press', 'Licensing'];
		
	//Default contact Email array
	var contactEmailArray = ['info@ravenrecords.com', 'advertising@ravenrecords.com', 'press@ravenrecords.com', 'licensing@ravenrecords.com'];

	//Default Pay per Second features array
	var generalEmailInfo = ['For any general questions you might have about Raven Records or one of our artists'];

	//Default Youtube Subscription features array
	var advertisingEmailInfo = ['For any advertising inquiries'];

	//Default Custom License features array
	var pressEmailInfo = ['For any press inquiries regarding Raven Records or one of our associated artists'];

	//Default Licensing email description
	var licensingEmailInfo = ['For any licensing inquiries'];

	//Default contact features array
	var contactInfoArray = [generalEmailInfo, advertisingEmailInfo, pressEmailInfo, licensingEmailInfo];

	//Contact object array
	var contactObjectArray = ['0', '0', '0', '0'];

		//Contact object instatiation loop
		for(var x=0; x<contactObjectArray.length; x++){
			contactObjectArray[x] = new contactObj(contactTitleArray[x], contactEmailArray[x], contactInfoArray[x]);
		}


	var contactSectionTitle = document.createElement('div');
		contactSectionTitle.setAttribute('class', 'row col-md-12 section-title');
		$(contactSectionTitle).text("Get in touch");
	var contactContainer = document.createElement('div');
		contactContainer.setAttribute('id', 'contactDiv');
		contactContainer.setAttribute('class', 'row col-md-12 grid-container');
		for(var n=0; n<contactObjectArray.length; n++){
			var contact = document.createElement('div');
				contact.setAttribute('class', 'col-md-6 contact-grid text-center');
				var contactInstance = document.createElement('div');
					contactInstance.setAttribute('class', 'card mb-4 contact');
					var contactHeader = document.createElement('div');
						contactHeader.setAttribute('class', 'card-header');
						var contactHeaderText = document.createElement('h4');
							contactHeaderText.setAttribute('class', 'my-0 font-weight-normal');
							$(contactHeaderText).text(contactObjectArray[n].label);
						contactHeader.append(contactHeaderText);
					var contactBody = document.createElement('div');
						contactBody.setAttribute('class', 'card-body');
						var contactEmail = document.createElement('medium');
							contactEmail.setAttribute('class', 'text-muted');
							$(contactEmail).text(contactObjectArray[n].email);
						var contactFeaturesList = document.createElement('ul');
							contactFeaturesList.setAttribute('class', 'list-unstyled mt-3 mb-4');
							//Note: this for loop is a bit of a mind boggler, points back to the list of features for each contact bracket
							for(var y=0; y<contactObjectArray[n].features.length; y++){
								var contactFeature = document.createElement('li');
									$(contactFeature).text(contactObjectArray[n].features[y]);
							contactFeaturesList.append(contactFeature);
							}
						contactBody.append(contactEmail, contactFeaturesList);
					var linkRow = document.createElement('div');
						linkRow.setAttribute('class', 'container row link-container');
						var linkSpacer = document.createElement('div');
							linkSpacer.setAttribute('class', 'col-xs-4 col-md-4 contact-btn');
						var contactLink = document.createElement('a');
							contactLink.setAttribute('class', 'col-xs-4 col-md-4 btn btn-outline-secondary btn-lg contact-btn');
							contactLink.setAttribute('href', contactObjectArray[n].link);
							$(contactLink).text('Contact');
						linkRow.append(linkSpacer, contactLink);
					contactInstance.append(contactHeader, contactBody, linkRow);
				contact.append(contactInstance);
			contactContainer.append(contact);
		}
	appendTo.append(contactSectionTitle, contactContainer);
}

function contactObj(label, email, features){
	this.label = label;
	this.email = email;
	this.features = features;
	this.link = 'contactLinks/' + label + ' Checkout.html';
}