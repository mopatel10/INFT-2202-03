console.log('app.js loaded')

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
     text = "It is one of his best works!"
     //create a paragraph
     let newP = $("<p></p>");
    // TO DO: add text with html()
    newP.appedn
    // append to contentDiv

    // add text
     newP.text("I am very excited for the opening of the new adaptation of his work.");
    // TO DO: test when very excited is in a strong tag

    // TO DO: append to newP text

 });

/**
 * function to demo adding toggle to button
 *  */
 $(function () {
     //TO DO: complete the function
     //get the button
     //add a click function
         //get the parent div's p tags
         //for each p in the div
             //if it has toggleHide class
                //remove toggleHide class and add toggleShow class
                // styling is controlled in the css
            // otherwise assume it has the toggleShow class
                //remove toggleShow and add toggleHide

  });



// FORM JQUERY
// TO DO: import form validation functions with alias

 //if the submit button is on the page
 if ($("#btnRegSubmit")) {
    // TO DO: add a click function that calls a callack function
     $("#btnRegSubmit").click(function (e) {
        // prevent the default submit action (stay on the page)

        // create a new user
        // you normally wouldn't do this unless you had validated, but we're going to do it to show how class memebers work in calling the validation

            // get the first name input

            // get the last name input

            // get the username input

            // get the email input

            // get the password input



        // debug statement for object
        // console.log(`UserDetails: ${user.displayUser()}`)

        // validate first name

        // validate last name

        // validate  username

        // validate confirm password

 });
 }

// TO DO: if reset button present

    // bind a click event handler

        // clear out all error message paragraphs




// SLIDESHOW
// TO DO: if there's a gallery class on the page

    // call a callback function to handle the galler rotation


        // get the image tag
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

        // call the setInterval method that will re-call this method at a set interval

            // increment the image index but no greater than how many images you have

            // fade out the current image

                // $(this) refers to the object that calls the callback or in this case galleryImage
                // change the src attribute of the image

                // fade it back in

                // debug statement

            //set the time for more than how long the fade out and in process will take or you won't get the images you expect

