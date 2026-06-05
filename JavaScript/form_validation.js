/*
    form_validation.js
    JavaScript file for newsletter signup form
    Assessment 4 - Introduction to the Web
    Author: Luban Mahdi
    Date: 05 June 2026
*/

// This function runs when the signup page loads.
function showWelcomeMessage() {
    alert("Welcome to the Luban Mahdi Interactive - Newsletter Signup");
}

// This function validates the newsletter signup form.
function validateSignupForm() {
    var firstName = document.getElementById("firstName").value.trim();
    var lastName = document.getElementById("lastName").value.trim();

    // Check if first name is empty.
    if (firstName === "") {
        alert("Please enter your First Name.");
        document.getElementById("firstName").focus();
        return false;
    }

    // Check if last name is empty.
    if (lastName === "") {
        alert("Please enter your Last Name.");
        document.getElementById("lastName").focus();
        return false;
    }

    alert("Thank you for signing up to the Luban Mahdi Interactive newsletter.");
    return true;
}

// This function opens the newsletter signup page in a new browser tab.
function openSignupPage() {
    window.open("lmahdi_A4_signup.html", "_blank");
}
