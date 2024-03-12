$(document).ready(function() {
    // Question 0 - No JavaScript required

    // Question 1
    $('title').text("Mohammed Patel - Test 2");
    $('.navbar-brand').text("Mohammed Patel");
    $('footer .container').html('&copy; ' + new Date().getFullYear());

    // Question 2
    var testTable = $('#test-table');
    var secondRow = testTable.find('tbody tr:nth-child(2)');
    secondRow.find('td:nth-child(3)').text("100100100");

    // Question 3
    var newRow = $('<tr class="table-info"></tr>');
    newRow.append('<td>Mohammed</td>');
    newRow.append('<td>Patel</td>');
    newRow.append('<td>100822322</td>');
    testTable.find('tbody').append(newRow);

    // Question 4
    testTable.find('tbody tr:nth-child(3)').remove();

    // Question 5
    newRow.addClass('table-info');

    // Question 6
    testTable.find('tbody tr:nth-child(1)').removeClass('table-warning');

    // Question 7
    testTable.find('tbody tr:nth-child(2)').removeClass('table-dark').addClass('table-success');

    // Question 8
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
