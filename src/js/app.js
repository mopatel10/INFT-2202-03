$(document).ready(function() {
    // Question 0 - No JavaScript required

    // Question 1
    // Update the page title to say "Mohammed Patel - Test 2"
    // Update the navbar title to say "Mohammed Patel"
    // Replace the footer text with a copyright symbol and the year, using the Date object.
    $('title').text("Mohammed Patel - Test 2");
    $('.navbar-brand').text("Mohammed Patel");
    $('footer .container').html('&copy; ' + new Date().getFullYear());

    // Question 2
    // get a reference to the test table
    // get a reference to the second row in the table
    // update the student number to be 100100100
    var testTable = $('#test-table');
    var secondRow = testTable.find('tbody tr:nth-child(2)');
    secondRow.find('td:nth-child(3)').text("100100100");

    // Question 3
    // create a table row with your own information
    // create a table delimeter and set your first name
    // add it to your table row
    // create a table delimeter and set your last name
    // add it to your table row
    // create a table delimeter and set your banner id
    // add it to your table row
    // add your row to the test table body
    var newRow = $('<tr class="table-info"></tr>');
    newRow.append('<td>Mohammed</td>');
    newRow.append('<td>Patel</td>');
    newRow.append('<td>100822322</td>');
    testTable.find('tbody').append(newRow);

    // Question 4
    // remove Alice Bobberts from the table
    testTable.find('tbody tr:nth-child(3)').remove();

    // Question 5
    // add the .table-info class to your personal row
    newRow.addClass('table-info');

    // Question 6
    // remove the .table-warning class from Adam Kunz's row
    testTable.find('tbody tr:nth-child(1)').removeClass('table-warning');

    // Question 7
    // change .table-dark to .table-success for John Doe's row
    testTable.find('tbody tr:nth-child(2)').removeClass('table-dark').addClass('table-success');

    // Question 8
    // Go to https://getbootstrap.com/docs/5.3/components/card/
    // Using jquery, add a new container div to the <main> section
    // In that container, add a new bootstrap card. This should take several steps.
    // // make a card, make an image, append the image to the card
    // // make a card body, append it to the card
    // // make a heading, a paragraph, a link, append them to the card-body
    // // append the card to the new container
    // use holder.js to render the image in the card
    // add a heading with your name in the card body, and a sentence or two about yourself.
    var newContainer = $('<div class="container"></div>');
    var newCard = $('<div class="card"></div>');
    var cardImage = $('<img src="holder.js/100px180?text=Image&bg=28a745" class="card-img-top" alt="Image">');
    var cardBody = $('<div class="card-body"></div>');
    var cardTitle = $('<h5 class="card-title">Mohammed Patel</h5>');
    var cardText = $('<p class="card-text">Hi, my name is Mohammed Patel and im am in Computer Programming and Analysis</p>');
    var cardLink = $('<a href="#" class="btn btn-primary">Learn more</a>');

    cardBody.append(cardTitle);
    cardBody.append(cardText);
    cardBody.append(cardLink);
    newCard.append(cardImage);
    newCard.append(cardBody);
    newContainer.append(newCard);
    $('main').append(newContainer);
});
