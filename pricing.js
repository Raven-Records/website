//Pricing section instantiation
function setPricing(appendTo){
	//Default pricing title array
	var pricingTitleArray = ['Pay per Second', 'Youtuber Subscription', 'Custom License'];
		
	//Default pricing cost array
	var pricingCostArray = ['$1/sec', '$10/mo', 'You Decide'];

	//Default Pay per Second features array
	var payPerSecFeatures = ['Control your length', 'Minimize costs', 'Pay only a little'];

	//Default Youtube Subscription features array
	var youtuberFeatures = ['Access to thousands of songs', 'Unique seasonal promotions', 'Social media boost', 'For channels up to 10,000 subscribers'];

	//Default Custom License features array
	var customFeatures = ['Control your budget', 'Create unique music', 'Streamline licensing'];

	//Default pricing features array
	var pricingFeaturesArray = [payPerSecFeatures, youtuberFeatures, customFeatures];

	//Pricing object array
	var pricingObjectArray = ['0', '0', '0'];

		//Pricing object instatiation loop
		for(var x=0; x<pricingObjectArray.length; x++){
			pricingObjectArray[x] = new pricingObj(pricingTitleArray[x], pricingCostArray[x], pricingFeaturesArray[x]);
		}


	var pricingSectionTitle = document.createElement('div');
		pricingSectionTitle.setAttribute('class', 'row col-md-12 section-title');
		$(pricingSectionTitle).text("Pricing");
	var pricingContainer = document.createElement('div');
		pricingContainer.setAttribute('id', 'pricingDiv');
		pricingContainer.setAttribute('class', 'row col-md-12 grid-container');
		for(var n=0; n<pricingObjectArray.length; n++){
			var pricing = document.createElement('div');
				pricing.setAttribute('class', 'col-md-6 pricing-grid text-center');
				var pricingInstance = document.createElement('div');
					pricingInstance.setAttribute('class', 'card mb-4 shadow-sm');
					var pricingHeader = document.createElement('div');
						pricingHeader.setAttribute('class', 'card-header');
						var pricingHeaderText = document.createElement('h4');
							pricingHeaderText.setAttribute('class', 'my-0 font-weight-normal');
							$(pricingHeaderText).text(pricingObjectArray[n].label);
						pricingHeader.append(pricingHeaderText);
					var pricingBody = document.createElement('div');
						pricingBody.setAttribute('class', 'card-body');
						var pricingCost = document.createElement('h1');
							pricingCost.setAttribute('class', 'card-title pricing-card-title');
							$(pricingCost).text(pricingObjectArray[n].cost);
						var pricingFeaturesList = document.createElement('ul');
							//Note: this for loop is a bit of a mind boggler, points back to the list of features for each pricing bracket
							for(var y=0; y<pricingObjectArray[n].features.length; y++){
								var pricingFeature = document.createElement('li');
									$(pricingFeature).text(pricingObjectArray[n].features[y]);
							pricingFeaturesList.append(pricingFeature);
							}
						pricingBody.append(pricingCost, pricingFeaturesList);
					pricingInstance.append(pricingHeader, pricingBody);
				pricing.append(pricingInstance);
			pricingContainer.append(pricing);
		}
	appendTo.append(pricingSectionTitle, pricingContainer);
}

function pricingObj(label, cost, features){
	this.label = label;
	this.cost = cost;
	this.features = features;
	this.link = 'pricingLinks/' + label + ' Checkout.html';
}