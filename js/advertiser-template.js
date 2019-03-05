$(function(){
	//Nav instantiation
	var newNavArray = ['logo', 'Log in', 'Sign up'];
	replaceNavArray(newNavArray);

	/* -------------------------- Bus Grid -------------------------- */

	setAdvertising($('#bod')); //src = js/advertising.js
	setCredits($('#bod')); //src = js/credits.js

	/* ------------------------ End Bus Grid ------------------------ */
})