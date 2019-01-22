$(function(){
	/* -------------------------- Nav Bar -------------------------- */
	var newNavArray = ['logo', 'Log in', 'Sign up'];
	replaceNavArray(newNavArray);
	/* ------------------------ End Nav Bar ------------------------ */
	/*User Variables*/
    var u = "";
    var p = "";

	/*Log form*/
	var logElement = document.createElement('form');
		logElement.setAttribute('id' , 'logForm');
		var fieldElement = document.createElement('fieldset');
			var legendElement = document.createElement('legend');
				var userElement = document.createElement('input');
					userElement.setAttribute('type', 'text');
					$(userElement).addClass('row');
					userElement.setAttribute('value', 'Username');
				var passElement = document.createElement('input');
					passElement.setAttribute('type', 'password');
					$(passElement).addClass('row');
					passElement.setAttribute('value', 'Password');
				//Log Form submit functions
				var submitButton = document.createElement('button');
					$(submitButton).addClass('row');
					$(submitButton).text("Submit");
					$(submitButton).click(function(){
	        			u=$(userElement).val();
	        			p=$(passElement).val();
	        			updateCookie();
	        			console.log("Username is: " + u);
	        			$('#log').text("Log out");
	        			$('#account').text(u);
	        			console.log("Cookie user is: " + $.cookie("username"));
	        			logForm.hide();
	        		});
	        	legendElement.append(userElement, passElement, submitButton);
			fieldElement.append(legendElement);
		logElement.append(fieldElement);
		$('#mainNav').append(logElement);
	// Initially hide form
    var logForm = $("#logForm").hide();

    /*Audio element*/
	var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'music/Mountain Songs I/The_Pre_Retox_Detox.mp3');
    
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
		console.log(1);
        
    });

    $('#restart').click(function() {
        audioElement.currentTime = 0;
    });

    $('#log').click(function(){
    	var user=$.cookie("username");
    	if (user != "" && user != null) {
    		alert("Are you sure you want to log out " + user + "?");
    	}else{
    		event.preventDefault(); // Prevent default anchor behaviour
        	logForm.show();

    	}
    })

    function updateCookie(){
    	$.cookie("username", u);
        $.cookie("password", p);
    }

    /* Cookie Functions 
    function setCookie(cname,cvalue,exdays) {
	    var d = new Date();
	    d.setTime(d.getTime() + (exdays*24*60*60*1000));
	    var expires = "expires=" + d.toGMTString();
	    document.cookie = cname+"="+cvalue+"; "+expires;
	}
	function getCookie(cname) {
	    var name = cname + "=";
	    var ca = document.cookie.split(';');
	    for(var i=0; i<ca.length; i++) {
	        var c = ca[i];
	        while (c.charAt(0)==' ') c = c.substring(1);
	        if (c.indexOf(name) == 0) {
	            return c.substring(name.length, c.length);
	        }
	    }
	    return "";
	}*/
	try{
    function checkCookie(){
    	var user=$.cookie("username");
    	if (user != "") {
    		$('#log').text("Log out");
    		$('#account').text(user)
    	}else{
    		$('#log').text("Log in");
    		$('#account').text("Sign up");
    	}
    }
	}catch(e){
		if (e instanceof ReferenceError) {
        console.log("Cookie not found");
    	}
		
	}

	/* Test Code */

	//Glowing Logo Test Code

	var pulseOn = true;
	$('.music-shell').bind({
		'mouseenter': function(){console.log('Mouse over'); pulseOn = false; glow();}, 
		'mouseleave': function(){console.log('Mouse leave'); pulseOn = true; pulse();}
	});
	
	function pulse() {           
		var raven = $('#glow-target');
		if(pulseOn==true){
			raven.animate({opacity:'1'}, 2000);
			raven.animate({opacity:'0'}, 2000, pulse);
		}
    }
    pulse();
	function glow() {
		var raven = $('#glow-target');
		raven.animate({opacity:'1'}, 500);
	}
	/* End Test Code */

})