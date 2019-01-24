//Pricing section instantiation
function setPricing(appendTo){
	//Default pricing list
	var pricingArray = ['Youtuber Subscription', 'Custom License'];
		//Pricing object instatiation loop
		for(var x=0; x<pricingArray.length; x++){
			pricingArray[x] = new pricingObj(pricingArray[x]);
		}
	var pricingSectionTitle = document.createElement('div');
		pricingSectionTitle.setAttribute('class', 'row col-md-12 section-title');
		$(pricingSectionTitle).text("Pricing");
	var pricingContainer = document.createElement('div');
		pricingContainer.setAttribute('id', 'pricingDiv');
		pricingContainer.setAttribute('class', 'row col-md-12 grid-container');
		for(var n=0; n<pricingArray.length; n++){
			var pricing = document.createElement('a');
				pricing.setAttribute('class', 'col-md-4 pricing-grid');
				pricing.setAttribute('href', pricingArray[n].link);
				var pricingCover = document.createElement('img');
					pricingCover.setAttribute('class', 'pricingImage');
					pricingCover.setAttribute('src', 'images/' + pricingArray[n].label + ' Images/cover.jpg');
				pricing.append(pricingCover);
			pricingContainer.append(pricing);
		}
	appendTo.append(pricingSectionTitle, pricingContainer);
}

function pricingObj(label){
	this.label = label;
	this.link = 'pricingLinks/' + label + ' Links/pricingPage.html';
}