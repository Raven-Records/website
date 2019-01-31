$(function(){
	//Glowing Logo Test Code

	var pulseOn = true;
	$('.graphic-shell').bind({
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
})