//Email Subscription section instantiation
function setEmailSubscription(appendTo){
	var emailSubscriptionContainer = document.createElement('div');
		emailSubscriptionContainer.setAttribute('id', 'emailSubscriptionDiv');
		emailSubscriptionContainer.setAttribute('class', 'row col-md-12 content-grid');
		emailSubscriptionContainer.setAttribute('style', 'height:20vh;width:80vw');
		var emailSubscriptionTextBox = document.createElement('div');
			emailSubscriptionTextBox.setAttribute('id', 'emailSubscriptionTextBox');
			emailSubscriptionTextBox.setAttribute('class', 'lead');
			var emailSubscriptionText = document.createElement('p');
				emailSubscriptionText.setAttribute('id', 'emailSubscriptionText');
				$(emailSubscriptionText).text('SUBSCRIBE FOR MONTHLY UPDATES AND INSIGHTS');
			emailSubscriptionTextBox.append(emailSubscriptionText);
		var emailSubscriptionForm = document.createElement('form');
			emailSubscriptionForm.setAttribute('id', 'emailSubscriptionForm');
			var emailInput = document.createElement('input');
				emailInput.setAttribute('id', 'emailInput');
				emailInput.setAttribute('type', 'email');
				emailInput.setAttribute('class', 'form-control');
				emailInput.setAttribute('placeholder', 'EMAIL ADDRESS');
			var emailSubmitButton = document.createElement('button');
				emailSubmitButton.setAttribute('id', 'emailSubmitButton');
				emailSubmitButton.setAttribute('type', 'submit');
				emailSubmitButton.setAttribute('class', 'btn btn-primary');
				$(emailSubmitButton).text('SUBSCRIBE');
			emailSubscriptionForm.append(emailInput, emailSubmitButton);
		emailSubscriptionContainer.append(emailSubscriptionTextBox, emailSubscriptionForm);
	appendTo.append(emailSubscriptionContainer);
}

//Custom text function
function setEmailSubscriptionText(newText){
	$(emailSubscriptionText).text(newText);
}