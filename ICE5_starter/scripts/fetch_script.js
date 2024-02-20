console.log('fetch_script.js loaded')

let url_posts = 'https://jsonplaceholder.typicode.com/posts';
let url_comments = 'https://jsonplaceholder.typicode.com/comments';
let url_albums = 'https://jsonplaceholder.typicode.com/albums';
let url_photos = 'https://jsonplaceholder.typicode.com/photos';
let url_todos = 'https://jsonplaceholder.typicode.com/todos';
let url_users = 'https://jsonplaceholder.typicode.com/users';

// create the fetch function
async function goFethch(url) {
    let response = await fetch(url);
    let data =await response.json();

    return data;
}

// for each url variable above, call the fetch function in a console.log
(async () => {
    
    console.log(await goFethch(url_albums));
    console.log(await goFethch(url_posts));
    console.log(await goFethch(url_comments));
    console.log(await goFethch(url_todos));
    console.log(await goFethch(url_users));
// console.log(goFethch(url_));


// from the photos url, put 2 random photos into the img elements in the html
let photos = await goFethch(url_photos);
let randomPhotos = photos.sort(() => Math.random() - 0.5).slice(0, 2);

// to see the results, right click on the page and click inspect, and click the console tab
console.log(randomPhotos);

document.getElementById("fakeImg_1").src = randomPhotos(0).thubnailUrl;
document.getElementById("fakeImg_2").src = randomPhotos(1).thubnailUrl;
})();