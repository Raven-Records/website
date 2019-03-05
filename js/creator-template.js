$(function(){
	/* -------------------------- Nav Bar -------------------------- */
	$('#AboutButton').addClass('active');
	/* ------------------------ End Nav Bar ------------------------ */
	/* -------------------------- Gen Grid -------------------------- */
	var bod = $("#bod");


	//Section instatiation

	setBannerCarousel(bod);
	setIntro(bod); //src = js/introduction.js
	var newIntroText = 'GENERATE NEW VIEWERS WITH PROFESSIONALLY PRODUCED MUSIC AND THEMES';
	setIntroText(newIntroText);
	setAlbums(bod); //src = js/albums.js
	setSpacer(bod);
	setEmailSubscription(bod);
	setSpacer(bod);

	/* ------------------------ End Gen Grid ------------------------ */
	
})