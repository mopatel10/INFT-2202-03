/**
 * Blog.js
 * Author: Mohammed Patel
 * StudentID: 100822322
 * Date Completed: 03-15-2024
 */

// Function to fetch blog posts from JSONPlaceholder API
async function fetchBlogPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching blog posts:', error);
    }
}



// Function to fetch images from Pixabay API and create blog cards
async function createBlogCards() {
    // Selecting the container to append the blog cards
    const blogContainer = document.querySelector('.blog-container');

    // Fetching blog posts data
    const posts = await fetchBlogPosts();
    
    try {
        // Fetching images data from Pixabay API
        const response = await fetch('https://pixabay.com/api/?key=42894037-d9b043fa796fc0d18b8f4451a&q=motorcycle&per_page=20');
        const data = await response.json();

        // Looping through blog posts data to create blog cards
        posts.forEach((post, index) => {
            const card = document.createElement('div');
            card.classList.add('blog-card');

            const meta = document.createElement('div');
            meta.classList.add('meta');

            const photo = document.createElement('div');
            photo.classList.add('photo');

            const details = document.createElement('ul');
            details.classList.add('details');
            details.innerHTML = `
                <li class="author"><a href="#">Mohammed Patel</a></li>
                <li class="date">01-02-2024</li>
                <li class="tags">
                    <ul>
                        <li><a href="#">Tag 1</a></li>
                    
                    </ul>
                </li>
            `;

            const description = document.createElement('div');
            description.classList.add('description');
            description.innerHTML = `
                <h1>${post.title}</h1>
                <p>${post.body}</p>
                <p class="read-more">
                    <a href="#">Read More</a>
                </p>
            `;

            // Check if data is not empty and has valid images
            if (data.hits && data.hits.length > 0 && data.hits[index % data.hits.length].hasOwnProperty('webformatURL')) {
                const img = document.createElement('img');
                img.setAttribute('src', data.hits[index % data.hits.length].webformatURL);
                photo.appendChild(img);
            }

            meta.appendChild(photo);
            meta.appendChild(details);

            card.appendChild(meta);
            card.appendChild(description);

            // Alternate styling for every other card
            if (index % 2 === 1) {
                card.classList.add('alt');
            }

            // Appending the created card to the blog container
            blogContainer.appendChild(card);
        });
    } catch (error) {
        console.error('Error creating blog cards:', error);
    }
}

// Invoke the function to create blog cards when the page loads
document.addEventListener('DOMContentLoaded', createBlogCards);
