$(function(){
	/* -------------------------- Nav Bar -------------------------- */
	$('#AboutButton').addClass('active');
	/* ------------------------ End Nav Bar ------------------------ */
	/* -------------------------- Gen Grid -------------------------- */
	var bod = $("#bod");
	//Banner Carousel
	var bannerArray = ['Ictus Tactus.jpg', 'Indomitus.jpg', 'raven-sprite-01.png.jpg', 'Epicus Flactus.jpg', 'Velum Inveritas.jpg'];
	var bannerContainer = document.createElement('div');
		bannerContainer.setAttribute('id', 'bannerDiv');
		bannerContainer.setAttribute('class', 'row col-md-12 banner-grid');
		bannerContainer.setAttribute('style', 'height:27vh;width:100vw');
		var bannerCarousel = document.createElement('div');
			bannerCarousel.setAttribute('id', 'banner-carousel');
			bannerCarousel.setAttribute('class', 'carousel slide');
			bannerCarousel.setAttribute('data-ride', 'carousel');
			var innerCarousel = document.createElement('div');
				innerCarousel.setAttribute('class', 'carousel-inner');
				for (var i = 0; i < bannerArray.length; i++) {
					var carouselItem = document.createElement('div');
						carouselItem.setAttribute('class', 'carousel-item');
						var bannerImg = document.createElement('img');
							bannerImg.setAttribute('class', 'd-block w-30 banner');
							bannerImg.setAttribute('src', 'images/branding/' + bannerArray[i]);
							bannerImg.setAttribute('alt', 'Carousel image ' + i);
						carouselItem.append(bannerImg);
					innerCarousel.append(carouselItem);
				}
				var carouselControlPrev = document.createElement('a');
					carouselControlPrev.setAttribute('class', 'carousel-control-prev');
					carouselControlPrev.setAttribute('href', '#banner-carousel');
					carouselControlPrev.setAttribute('role', 'button');
					carouselControlPrev.setAttribute('data-slide', 'prev');
					var prevIcon = document.createElement('span');
						prevIcon.setAttribute('class', 'carousel-control-prev-icon');
						prevIcon.setAttribute('aria-hidden', 'true');
					var srOnly0 = document.createElement('span');
						srOnly0.setAttribute('class', 'sr-only');
						$(srOnly0).text('Previous');
					carouselControlPrev.append(prevIcon, srOnly0);
				var carouselControlNext = document.createElement('a');
					carouselControlNext.setAttribute('class', 'carousel-control-next')
					carouselControlNext.setAttribute('href', '#banner-carousel');
					carouselControlNext.setAttribute('role', 'button');
					carouselControlNext.setAttribute('data-slide', 'next');
					var nextIcon = document.createElement('span');
						nextIcon.setAttribute('class', 'carousel-control-next-icon');
						nextIcon.setAttribute('aria-hidden', 'true');
					var srOnly1 = document.createElement('span');
						srOnly1.setAttribute('class', 'sr-only');
						$(srOnly1).text('Next');
					carouselControlNext.append(nextIcon, srOnly1);
				innerCarousel.append(carouselControlPrev, carouselControlNext);
			bannerCarousel.append(innerCarousel);
		bannerContainer.append(bannerCarousel);

	//Section instatiation

	bod.append(bannerContainer);
	setIntro(bod); //src = js/introduction.js
	setAlbums(bod); //src = js/albums.js

	/* ------------------------ End Gen Grid ------------------------ */
	
})