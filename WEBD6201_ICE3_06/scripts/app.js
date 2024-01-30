// Change the class of each box, reordering the colours

// Get the boxes with JQuery
let boxes = $('.box');
// Loop through each box
boxes.each(function(index, box){   
        // Get the class of the current box
    let currentClass = $(box).attr('class');
    // If the class is red make it blue
    if (currentClass === 'box red-box'){
        $(box).attr('class', 'blue-box')
    }
    // If the class is blue, make it green
    else if (currentClass === 'box blue-box'){
        $(box).attr('class', 'green-box')
    }
    // If the class is green, make it red
    else if (currentClass === 'box green-box'){
        $(box).attr('class', 'red-box')
    }
});
// Create a button to open the modal
let button = $('<button>Open Model</button>')
// Add button to page
$('#content').append(button);
// Get the button with JQuery

// Add a click event listener to the button
button.on('click', function(){
    $('.lightbox').show();
});
// When the button is clicked, show the model