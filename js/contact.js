// Script - contact.js
// This script validates a form.

// Function called when the form is submitted.
// Function validates the form data.
function validateForm(e) {
	'use strict';

	// Get the event object:
	if (typeof e == 'undefined') e = window.event;
	
	// Get form references:
	const name = U.$('name');
	const email = U.$('email');

	// Flag variable:
	let error = false;

	// Validate the name:
	if (/^[A-Z \.\-']{2,20}$/i.test(name.value)) {
		removeErrorMessage('name');
	} else {
		addErrorMessage('name', 'Please enter a valid name.');
		error = true;
	}

	// Validate the email address:
	if (/^[\w.-]+@[\w.-]+\.[A-Za-z]{2,6}$/.test(email.value)) {
		removeErrorMessage('email');
	} else {
		addErrorMessage('email', 'Please enter a valid email address.');
		error = true;
	}

	// If an error occurred, prevent the default behavior:
	if (error) {

		// Prevent the form's submission:
		if (e.preventDefault) {
			e.preventDefault();
		} else {
			e.returnValue = false;
		}
		return false;

	}

} // End of validateForm() function.

// Function called when the terms checkbox changes.
// Function enables and disables the submit button.
function toggleSubmit() {
	'use strict';
	// Get a reference to the submit button:
	let submit = U.$('submit');
	submit.disabled = !U.$('terms').checked;

} // End of toggleSubmit() function.

function setupTooltips() {
	'use strict';
	U.enableTooltips('name');
	U.enableTooltips('email');
}

// Establish functionality on window load:
window.onload = function () {
	'use strict';

	// The validateForm() function handles the form:
	U.addEvent(U.$('theForm'), 'submit', validateForm);

	// Disable the submit button to start:
	U.$('submit').disabled = true;

	// Watch for changes on the terms checkbox:
	U.addEvent(U.$('terms'), 'change', toggleSubmit);

	// Enbable tooltips for the relevant fields:	
	setupTooltips();
};