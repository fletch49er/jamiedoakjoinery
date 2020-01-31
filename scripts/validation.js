/*---------------------------------------------------------------------------
 * File:		validation.js
 * Purpose: Javascript form validation for contacts.php (EIP) 
 *						
 * Author:	Mark Fletcher
 * Date:		28.07.2015
 *  
 * Notes:	 
 *
 * Revision:
 *
 *--------------------------------------------------------------------------*/
// object to store form field validation status
var validate = {
	val_name : false,
	val_tel : false,
	val_email : false
} // end object

// object to store valid messages
var messages = {
	ok_name : ' ',
	ok_tel : ' ',
	ok_email : ' ',
	err_name : 'A valid name = forename and surname.',
	err_tel : 'A valid telephone number = "0123 123 1234" or "01234 123456".',
	err_email : 'A valid email address = "yourname@emailaddress.com" or "yourname@emailaddress.co.uk".'
} // end object

// highlight message to user on error
function changeText(id, message, bgcolor, valid) {
	if (valid == true) {
		var textColor = "#0f0";
		var image = "url(css/images/success.png)"
	} else {
		var textColor = "#f00";
		var image = "url(css/images/error.png)";
	}
	var node = document.getElementById(id);
	node.style.backgroundImage = image;
	node.style.borderColor = textColor;
	node.style.borderStyle = "solid";	
} // end function

// validate full name with regEx
function validateName() {
	var pattern = /^[A-Z]{1}[a-z]*\s([A-Z]\s){0,2}(Mc|Mac|O\'){0,1}[A-Z]{1}[a-z]+$/;
	var nameValue = document.getElementById("nameField").value;
	if (pattern.test(nameValue)) {
		validate['val_name'] = true;
		changeText("nameField", messages['ok_name'], "#fff", true);
	}	else {
		validate['val_name'] = false;
		changeText("nameField", messages['err_name'], "#fff", false);
	}
} // end function

// validate telephone number with regEx
function validateTel() {
	var pattern = /^((\+44\s?\(0\)\s?\d{2,4})|(\+44\s?(01|02|03|07|08)\d{2,3})|(\+44\s?(1|2|3|7|8)\d{2,3})|(\(\+44\)\s?\d{3,4})|(\(\d{5}\))|((01|02|03|07|08)\d{2,3})|(\d{5}))(\s|-|.)(((\d{3,4})(\s|-)(\d{3,4}))|((\d{6,7})))$/;
	var telValue = document.getElementById("telField").value;
	if (pattern.test(telValue)) {
		validate['val_tel'] = true;
		changeText("telField", messages['ok_tel'], "#fff", true);
	}	else {
		validate['val_tel'] = false;
		changeText("telField", messages['err_tel'], "#fff", false);
	}
} // end function

// validate email address with regEx
function validateEmail() {
	var pattern = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
	var emailValue = document.getElementById("emailField").value;
	if (pattern.test(emailValue)) {
		validate['val_email'] = true;
		changeText("emailField", messages['ok_email'], "#fff", true);
	}	else {
		validate['val_email'] = false;
		changeText("emailField", messages['err_email'], "#fff", false);
	}
} // end function
	
// form submit function with a validation check
function validateContactForm() {
	var formStatus = true;
	// call the field validation functions one by one
	validateName();
	validateTel();
	validateEmail();
	for(var status in validate) {
		if(validate.hasOwnProperty(status)) {
			if(!validate[status]) {
				formStatus = false;
			} // else leave formStatus true
		} // end validate.hasOwnProperty
	} // end for status
	alert(formStatus);
	return formStatus;	
} // end function

// call form validation
function pop_up(message) {
	alert(messages[message]);
} // end function