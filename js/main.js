$(function(){
	var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'music/landingSong-00.mp3');
    
    audioElement.addEventListener('ended', function() {
        this.play();
    }, false);
    
    audioElement.addEventListener("canplay",function(){
        $("#status").text("Status: Ready to play").css("color","green");
    });
    
    /*Landing Page Sound Toggler*/
    $('#sound-toggle').click(function() {
    	$("#sound-icon").toggleClass("fa-volume-mute fa-volume-up");
		if($("#sound-icon").hasClass("fa-volume-up")){
			audioElement.play();
        	$("#status").text("Status: Playing");
		}else{
			audioElement.pause();
        	$("#status").text("Status: Paused");
		}
        
    });

    $('#restart').click(function() {
        audioElement.currentTime = 0;
    });

})