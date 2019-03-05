function setLanding(appendTo){


	var soundContainer = document.createElement('div');
		soundContainer.setAttribute('class', 'container row sound-container');
	var soundSpacerL = document.createElement('div');
		soundSpacerL.setAttribute('class', 'col-xs-4 col-md-4');
	var soundShell = document.createElement('div');
		soundShell.setAttribute('class', 'sound-shell col-xs-4 col-md-4');
		var soundToggle = document.createElement('button');
			soundToggle.setAttribute('id', 'sound-toggle');
			soundToggle.setAttribute('class', 'btn btn-lg');
			soundToggle.setAttribute('data-toggle', 'button');
			soundToggle.setAttribute('aria-pressed', 'false');
			soundToggle.setAttribute('aria-label', 'Toggle Sound');
			var soundIcon = document.createElement('span');
				soundIcon.setAttribute('id', 'sound-icon');
				soundIcon.setAttribute('class', 'fas fa-volume-mute');
				soundIcon.setAttribute('aria-hidden', 'true');
			soundToggle.append(soundIcon);
		soundShell.append(soundToggle);
	var soundSpacerR = document.createElement('div');
		soundSpacerR.setAttribute('class', 'col-xs-4 col-md-4');
	soundContainer.append(soundSpacerL, soundShell, soundSpacerR);


	var graphicContainer = document.createElement('div');
		graphicContainer.setAttribute('class', 'container row graphic-container');
		var graphicSpacerL = document.createElement('div');
			graphicSpacerL.setAttribute('class', 'col-xs-4 col-md-4');
		var graphicShell = document.createElement('div');
			graphicShell.setAttribute('class', 'graphic-shell col-xs-4 col-md-4');
			var graphicLink = document.createElement('a');
				graphicLink.setAttribute('href', 'creator.html');
				var ravenSprite = document.createElement('img');
					ravenSprite.setAttribute('class', 'raven-sprite');
					ravenSprite.setAttribute('src', 'images/branding/Raven-Sprite-01.png');
				var glowSprite = document.createElement('img');
					glowSprite.setAttribute('id', 'glow-target');
					glowSprite.setAttribute('class', 'glow-sprite');
					glowSprite.setAttribute('src', 'images/branding/glow-sprite-01.png');
				graphicLink.append(ravenSprite, glowSprite);
			graphicShell.append(graphicLink);
		var graphicSpacerR = document.createElement('div');
			graphicSpacerR.setAttribute('class', 'col-xs-4 col-md-4');
		graphicContainer.append(graphicSpacerL, graphicShell, graphicSpacerR);


	var clientContainer = document.createElement('div');
		clientContainer.setAttribute('class', 'container row client-container');
		var clientSpacerL = document.createElement('div');
			clientSpacerL.setAttribute('class', 'col-xs-3 col-md-3');
		var creatorShell = document.createElement('div');
			creatorShell.setAttribute('class', 'client-shell col-xs-3 col-md-3');
			var creatorLink = document.createElement('a');
				creatorLink.setAttribute('class', 'btn btn-outline-secondary btn-lg creator');
				creatorLink.setAttribute('href', 'creator.html');
				$(creatorLink).text('Creators');
			creatorShell.append(creatorLink);
		var advertiserShell = document.createElement('div');
			advertiserShell.setAttribute('class', 'client-shell col-xs-3 col-md-3');
			var advertiserLink = document.createElement('a');
				advertiserLink.setAttribute('class', 'btn btn-outline-secondary btn-lg advertiser');
				advertiserLink.setAttribute('href', 'advertiser.html');
				$(advertiserLink).text('Advertisers');
			advertiserShell.append(advertiserLink);
		var clientSpacerR = document.createElement('div');
			clientSpacerR.setAttribute('class', 'col-xs-3 col-md-3');
		clientContainer.append(clientSpacerL, creatorShell, advertiserShell, clientSpacerR);


	appendTo.append(soundContainer, graphicContainer, clientContainer);
}


