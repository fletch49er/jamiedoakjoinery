/*
 * ========================================================================
 * Script	 	: navbar.js
 * Purpose		: Dynamic navigation bar 
 *						
 * Author		: Mark Fletcher
 * Date			: 08.03.2015
 * 
 * Notes: 
 *
 * Revision:
 *		10.03.2015		1st issue.
 *
 * ========================================================================
 */
//create navbar_obj object
var navbar_obj = {
	home: {link: 'Home', url: 'index.php', title: 'Home page'},
	about: {link: 'About Us', url: 'about.php', title: 'About us page'},
	modernThinking: {link: 'Modern Thinking', url: 'modernThinking.php', title: 'Modern Thinking page'},
	// support: {link: 'Grant &amp; Government Support', url: 'home.php', title: 'Grant &amp; Government Support page'},
	news: {link: 'News', url:'news.php', title: 'News page'},
	contact: {link: 'Contact Us', url: 'contact.php', title: 'Contact us page'}
}

//create prog_obj object
var prog_obj = {
	whatif: {link: 'What If', url: 'whatif.php', title: 'What If programme page'},
	movingup: {link: 'Moving Up', url: 'movingup.php', title: 'Moving Up programmes page'}
}
	
//load list array with navbar_link object names
var list = new Array('home', 'about', 'modernThinking','news', 'contact'); // 'support', 
	
//get current page 'URL'
var page_url = String(window.location);
var check = page_url.split(/[\/]|[.]/);
var checkUrl = check.length-2;
if (check[check.length-2] == 'index') {
	check[check.length-2] = 'home';
}
if ((check[check.length-2] == 'whatif') || (check[check.length-2] == 'movingup')) {
		check[check.length-2] = 'modernThinking';
}
	
//showPopup function
function  showPopup() {
	document.getElementById("popup").style.display="block";
}
	
//hidePopup function
function hidePopup() {
	document.getElementById("popup").style.display="none";
}

// initialize variable	
var popup = '<div id="popup"><p onclick="hidePopup()">';
//construct navbar
var n = 0;
//check current page and add highlight
for(var item in navbar_obj) {
	var pattern = list[n];
	with (navbar_obj[item]) {
		if (check[check.length-2].match(pattern)) {
			popup += '<a href="'+url+'" title="'+title+'"><span class="current">'+link+'</span></a>';
		} else {
			popup += '<a href="'+url+'" title="'+title+'">'+link+'</a>';		
		}
		//if not last item
		if (n < (list.length-1)) {
			popup += '<br />';
		}
	}
	n++;
}
popup += '</p></div>';
document.write(popup);

//assign available screen width value to variable
var w1 = screen.availWidth;
	
//check available screen width
var menuIcon = "../images/menuIcon256.png";
var navbar = "";
if (w1 <= "480") {
	navbar = '<img id="menuIcon" src="'+menuIcon+'" alt="Navbar Menu Icon" onclick="showPopup()" />';
} else {
	//construct navbar
	var n = 0;
	//check current page and add highlight
	for(var item in navbar_obj) {
		var pattern = list[n];
		with (navbar_obj[item]) {
			if (check[check.length-2].match(pattern)) {
				navbar += '<a href="'+url+'" title="'+title+'"><span class="current">'+link+'</span></a>';
			} else {
			navbar += '<a href="'+url+'" title="'+title+'">'+link+'</a>';		
			}
			//if not last item
			if (n < (list.length-1)) {
				navbar += '&nbsp;&nbsp;|&nbsp;&nbsp;';
			}
		}
			n++;
	}	
}
	
//display navbar
document.write(navbar);
document.write ('<hr />');