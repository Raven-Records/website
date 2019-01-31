$(function(){
	var newNavArray = ['logo', 'Log in', 'Sign up'];
	replaceNavArray(newNavArray);

	/* -------------------------- Index Grid -------------------------- */

	setLanding($('#bod'));
	/*Audio element*/
	var audioElement = document.createElement('audio');
    	audioElement.setAttribute('src', 'music/Mountain Songs I/The_Pre_Retox_Detox.mp3');
	    audioElement.addEventListener('ended', function() {
	        this.play();
	    }, false);
	/*Landing Page Sound Toggler*/
	$('#sound-toggle').click(function() {
		$("#sound-icon").toggleClass("fa-volume-mute fa-volume-up");
		if($("#sound-icon").hasClass("fa-volume-up")){
			audioElement.play();
		}else{
			audioElement.pause();
		}
		console.log(1);
	    
	});

	/* ------------------------ End Index Grid ------------------------ */
})