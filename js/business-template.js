$(function(){
	//Nav instantiation
	var newNavArray = ['logo', 'Log in', 'Sign up'];
	replaceNavArray(newNavArray);

	/* -------------------------- Bus Grid -------------------------- */

	setIntro($('#bod')); //src = js/introduction.js
	setCredits($('#bod')); //src = js/credits.js

	/* ------------------------ End Bus Grid ------------------------ */
})