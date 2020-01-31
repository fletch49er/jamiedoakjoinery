/*
 * ========================================================================
 * File 		: navbar.js
 * Purpose	: Dynamic navigation bar 
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
		
	//create navbar_data object
	var navbar_data = {
		home: {link: 'Home', url: 'index.php', title: 'Home page'},
		programmes: {link: 'Programmes', url: 'whatif.php', title: 'Programmes page'},
		featuredArticle: {link: 'Featured Articles', url:'featuredArticles.php', title: 'Featured Articles page'},
		about: {link: 'About Us', url: 'about.php', title: 'About us page'},
		modernThinking: {link: 'Modern Thinking', url: 'modernThinking.php', title: 'Modern Thinking page'},
		contact: {link: 'Contact Us', url: 'contact.php', title: 'Contact us page'}
	};
	
	//load list array with navbar_link object names
	var list = new Array('home', 'whatif', 'featuredArticle', 'about', 'modernThinking', 'contact');

	//get current page 'URL'
	var page_url = String(window.location);
	var check = page_url.split(/[\/]|[.]/);
	if (check[check.length] == 'index'){
		check[check.length] = 'home';
	}
	alert(check[check.length]);
	//construct navbar
	var navbar = "";
	var n = 0; 
	//check current page and add highlight
	for(var item in navbar_data) {
		var pattern = list[n];
		with (navbar_data[item]) {
			if (list[n].match(pattern)) {
				navbar += '<a href="'+url+'" title="'+title+'"><span class="current">'+link+'</span></a>';
			} else{
			navbar += '<a href="'+url+'" title="'+title+'">'+link+'</a>';		
			}
			//if not last item
			if (n < (list.length-1)) {
				navbar += '&nbsp;&nbsp;|&nbsp;&nbsp;';
			}
		}
		n++;
	}
	
	//display navbar
	document.write(navbar);
	document.write ('<hr />');