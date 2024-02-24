console.log('ajax_script.js loaded');

let url_posts = 'https://jsonplaceholder.typicode.com/posts';
let url_comments = 'https://jsonplaceholder.typicode.com/comments';
let url_albums = 'https://jsonplaceholder.typicode.com/albums';
let url_photos = 'https://jsonplaceholder.typicode.com/photos';
let url_todos = 'https://jsonplaceholder.typicode.com/todos';
let url_users = 'https://jsonplaceholder.typicode.com/users';

// GET methode
function getFunction(url) {
    $.get(url, function(data) {
        console.log(data);
    });
}

// for each url variable above, call the function in a console.log
console.log(getFunction(url_posts));
console.log(getFunction(url_comments));
console.log(getFunction(url_albums));
console.log(getFunction(url_photos));
console.log(getFunction(url_todos));
console.log(getFunction(url_users));

// from the photos url, put 2 random photos into the img elements in the html
$(function() {

    $.get(url_photos, function(data) {

        let randomPhotos = data.sort(() => Math.random() - 0.5).slice(0, 2);
        console.log(randomPhotos);

        $('#photo1').attr('src', randomPhotos[0].url);
        $('#photo2').attr('src', randomPhotos[1].url);
    });
});
