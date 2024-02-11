// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Add Welcome Text
    let welcomeText = "Welcome to my Website";
    document.getElementById("welcomeText").innerHTML = welcomeText;

    // Add Welcome Note
    let welcomeNote = "Explore my world of creativity and inspiration. I'm here to provide you with amazing content and experiences.";
    document.getElementById("welcomeNote").innerHTML = welcomeNote;
});

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Add title and description to product 1
    document.getElementById("gameTitle").innerHTML = "Black Ops II";
    document.getElementById("gameDesc").innerHTML = "Black Ops II is an amazing game with an amazing multiplayer, an amazing campaign, and amazing zombies. The campaign is one of the best in the series with Mendez being one of the best villains in gaming, along with amazing characters like Frank Woods, Alex Mason, David Mason, and Harper.";

    // Add title and description to product 2
    document.getElementById("movieTitle").innerHTML = "As Above, So Below";
    document.getElementById("movieDesc").innerHTML = "As Above, So Below is a film about a group of subterranean explorers who encounter terror beneath the streets of Paris after descending into the city's ancient catacombs. Just when it seems their journey can't get any more nightmarish, the demons of their pasts strike back with a vengeance.";

    // Add title and description to product 3
    document.getElementById("bookTitle").innerHTML = "Bones";
    document.getElementById("bookDesc").innerHTML = "Bones is a graphic novel series about the three Bone cousins -- Fone Bone, Phoney Bone, and Smiley Bone -- who are separated and lost in a vast, uncharted desert. One by one, they find their way into a deep, forested valley filled with wonderful and terrifying creatures.";
});

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Service 1
    let service1Name = "Web Designing";
    let service1Desc = "Web designing encompasses a range of disciplines, including visual design, user experience (UX) design, and front-end development. Leveraging my expertise in graphic design, HTML, CSS, and JavaScript, I meticulously design and develop websites that not only look great but also function seamlessly across devices and browsers.";

    document.getElementById("service1Name").innerHTML = service1Name;
    document.getElementById("service1Desc").innerHTML = service1Desc;

    // Service 2
    let service2Name = "Object Oriented Programming";
    let service2Desc = "Object-Oriented Programming (OOP) is a powerful paradigm used in software development for creating modular, scalable, and reusable code. As an experienced developer proficient in OOP, I leverage this approach to build robust and maintainable software solutions tailored to your specific needs.";

    document.getElementById("service2Name").innerHTML = service2Name;
    document.getElementById("service2Desc").innerHTML = service2Desc;

    // Service 3
    let service3Name = "Mobile Development";
    let service3Desc = "C# for Windows Forms development is a specialized skillset focused on creating desktop applications for the Windows operating system using the C# programming language and the Windows Forms framework. As a proficient developer in C# for Windows Forms, I specialize in building intuitive and feature-rich desktop applications tailored to meet your specific business needs.";

    document.getElementById("service3Name").innerHTML = service3Name;
    document.getElementById("service3Desc").innerHTML = service3Desc;
});

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    let aboutName = "Mohammed Patel";
    let aboutDesc = "Hello! I'm Mohammed, a passionate web developer based in the Durham Region. I have a strong interest in building elegant and user-friendly web applications that solve real-world problems. Outside of work, you can often find me volunteering at the local community center, where I teach coding classes to underprivileged youth. I believe in the power of technology to empower and uplift communities, and I'm committed to making a positive impact through my work. In my free time, I enjoy playing guitar, exploring new hiking trails, and experimenting with new recipes in the kitchen. I'm always up for an adventure and love discovering new experiences and cultures. Thank you for visiting my page. I'm excited to connect with fellow developers, collaborate on exciting projects, and continue learning and growing in this ever-evolving field!";

    document.getElementById("aboutName").innerHTML = aboutName;
    document.getElementById("aboutDesc").innerHTML = aboutDesc;

});

// Change product link to 'Intrests'

// Select the element with class "nav-link" inside the list item
let productsLink = document.querySelector('li.nav-item a.nav-link[href="./products.html"]');
productsLink.textContent = "Interests";

// Add nav bar item
document.addEventListener("DOMContentLoaded", function() {
    
    // Create a new list item element
    let getUl = document.getElementsByTagName("ul")[0];

    let listItem = document.createElement("li");
    listItem.className = "nav-item";

    // Create a new anchor element
    let link = document.createElement("a");
    link.className = "nav-link";
    link.href = "#"; 
    link.innerHTML = '<i class="fas fa-users">Human Resources</i>';

    // Append the anchor element to the list item
    listItem.appendChild(link);
    getUl.appendChild(listItem);
    
    let contactLoc = document.querySelector('li.nav-item a.nav-link[href="./contact.html"]');
    // Insert the new list item before the "Contact Us" link
    getUl.insertBefore(listItem, contactLoc);
});
