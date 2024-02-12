console.log('app.js loaded')
import { User } from './user.js' ; 
/**
 * iffe to insert nav bar at the top of each page
 */
$(function () {
    let navBar = `<div class="navigation">
	                <nav class="nav">
		                <a class="nav-link active" href="index.html">Home</a>
		                <a class="nav-link" href="slideshow.html">Slideshow</a>
		                <a class="nav-link disabled" id="username" href="#"></a>
		                <a class="nav-link" href="form.html">Form</a>
	                </nav>
                </div>`

    //TO DO: replace the nav-holder
    $("#nav-holder").html(navBar);
});

/**
 * function to add styling to all links on the page
 */
$(function () {
    $("a").addClass("fancy-link");
});


/**
 * fuction to demo adding content with .text() and .html()
 *  */
 $(function () {

     let navDiv = $("div:first");
     console.log(navDiv.html())
     console.log(navDiv.text())

     let contentDiv = $("#content-div");
     console.log(contentDiv.html())
     console.log(contentDiv.text())

     //text to use with new paragraph
     let text = "It is one of his best works!"
     //create a paragraph
     let newP = $("<p></p>");
    // TO DO: add text with html()
    newP.html(text);
    // append to contentDiv
    contentDiv.append(newP);
    // add text
    newP.append("I am ");
    // TO DO: test when very excited is in a strong tag
    
    newP.append("<strong>very excited</strong>");    

    // append to newP text
    newP.append(" for the opening of the new adaptation of his work.");
    contentDiv.append(newP);
 });

/**
 * function to demo adding toggle to button
 *  */
 $(function () {
     //TO DO: complete the function
     //get the button
    let toggleButton = $('#toggle');
     //add a click function
    toggleButton.click (function() {
         //get the parent div's p tags
        let paragraphs = $('div p');
         //for each p in the div
         paragraphs.each(function(index,para) {
             //if it has toggleHide class
            let currentClass = $(para).attr('class');
            if (currentClass == 'toggleHide') {
                //remove toggleHide class and add toggleShow class
                $(para).toggleClass('toggleHide toggleShow');
                // styling is controlled in the css

            // otherwise assume it has the toggleShow class
            }else if (currentClass == 'toggleShow'){
                $(para).toggleClass('toggleShow toggleHide');
            } 
                //remove toggleShow and add toggleHide

        })

    })
  
 });



// FORM JQUERY
// TO DO: import form validation functions with alias
import * as validateData from './form.js';
 //if the submit button is on the page
 if ($("#btnRegSubmit")) {
    // TO DO: add a click function that calls a callack function
     $("#btnRegSubmit").click(function (e) {
        // prevent the default submit action (stay on the page)
        e.preventDefault(); 
        // create a new user
        // you normally wouldn't do this unless you had validated, but we're going to do it to show how class memebers work in calling the validation

            // get the first name input
            let firstName = $("#inputFirst").val();
            // get the last name input
            let lastName = $("#inputLast").val();
            // get the username input
            let userName = $("#inputUsername").val();
            // get the email input
            let email = $("#inputEmail").val();
            // get the password input
            let password = $("#inputPassword").val();
            let confirmedPassword = $("#inputPassword2").val();

            let user = new User(firstName, lastName, userName, email, password);
        // debug statement for object
        console.log(`UserDetails: ${user.displayUser()}`)

        // validate first name
        let validateFN = validateData.validateFirst(firstName);
        // validate last name
        let validateLN = validateData.validateLast(lastName);
        // validate  username
        let validateUser = validateData.validateUsername(userName);
        // validate email
        let validateEmail = validateData.validateEmail(email);
        // validate confirm password
        let validatePass = validateData.validatePassword(password, confirmedPassword);

        // Check and print errors for each validated field
        if (validateFN) {
            $("#first-group .errorMessage").html(validateFN);
             
        }
        if (validateLN) {
            $("#last-group .errorMessage").html(validateLN);
            
        }
        if (validateUser) {
            $("#username-group .errorMessage").html(validateUser);
            
        }
        if (validateEmail) {
            $("#email-group .errorMessage").html(validateEmail);
            
        }
        if (validatePass) {
            $("#pass1-group .errorMessage").html(validatePass);
        }
 });    
 }

// TO DO: if reset button present
if ($("#btnRegReset")) {
    $("#btnRegReset").click(function (e) {
        // bind a click event handler
        e.preventDefault();
        // clear out all error message paragraphs
        $(".errorMessage").empty();
    })
}



// SLIDESHOW
// TO DO: if there's a gallery class on the page
if ($("#gallery")) {
    // Call a callback function to handle the gallery rotation
    galleryRotate();
}

function galleryRotate() {
    // get the image tag
    let imagesId = $('#images');
        // get a list of your images
         let images = [
             "./images/portraits/portrait-01.jpg",
             "./images/portraits/portrait-02.jpg",
             "./images/portraits/portrait-03.jpg",
             "./images/portraits/portrait-04.jpg",
             "./images/portraits/portrait-05.jpg",
             "./images/portraits/portrait-06.jpg",
             "./images/portraits/portrait-07.jpg",
             "./images/portraits/portrait-08.jpg",
             "./images/portraits/portrait-09.jpg",
             "./images/portraits/portrait-10.jpg",
             "./images/portraits/portrait-11.jpg",
             "./images/portraits/portrait-12.jpg",
             "./images/portraits/portrait-13.jpg",
             "./images/portraits/portrait-14.jpg",
             "./images/portraits/portrait-15.jpg",
             "./images/portraits/portrait-16.jpg",
             "./images/portraits/portrait-17.jpg",
             "./images/portraits/portrait-18.jpg",

         ]



    // set a first index
    let index = 0;
    // call the setInterval method that will re-call this method at a set interval
    setInterval(function() {
        // increment the image index but no greater than how many images you have
        index = (index + 1) % images.length;
        // fade out the current image
        imagesId.fadeOut(1000, function() {
            // $(this) refers to the object that calls the callback or in this case galleryImage
            // change the src attribute of the image
            $(this).attr("src", images[index]);
            // fade it back in
            $(this).fadeIn(1000);
        });
        // debug statement
        console.log("Switched to image:", images[index]);
        //set the time for more than how long the fade out and in process will take or you won't get the images you expect
        }, 2000); 
}