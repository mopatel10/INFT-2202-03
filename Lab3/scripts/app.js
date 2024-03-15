/**
 * Name: Mohammed Patel (100822322)
 * Date: 01-11-2024
 * Desc: Lab 1 DOM manipulation JavaScript file
 */

/**
 * Wait for the DOM to be fully loaded
 */
document.addEventListener("DOMContentLoaded", function() {
    // Add Welcome Text
    let welcomeText = "Welcome to my Website";
    document.getElementById("welcomeText").innerHTML = welcomeText;

    // Add Welcome Note
    let welcomeNote = "Explore my world of creativity and inspiration. I'm here to provide you with amazing content and experiences.";
    document.getElementById("welcomeNote").innerHTML = welcomeNote;
});

/**
 * Wait for the DOM to be fully loaded
 */
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

/**
 * Wait for the DOM to be fully loaded
 */
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

/**
 * Wait for the DOM to be fully loaded
 */
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

/**
 * Add nav bar item
 */
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

    // Insert the new list item before the "Contact Us" link
    let elementForPlacement = document.getElementsByTagName("li")[4];
    getUl.insertBefore(listItem, elementForPlacement);
});

/**
 * Fixed bottom footer from bootstrap
 */
document.addEventListener("DOMContentLoaded", function() {
    // Create the navbar container
    let navbarContainer = document.createElement("nav");
    navbarContainer.className = "navbar navbar-dark bg-dark fixed-bottom";
    navbarContainer.style.display = "flex";
    navbarContainer.style.justifyContent = "center";

    // Create the container for navbar items
    let navbarContent = document.createElement("div");

    // Create the copyright statement
    let copyright = document.createElement("span");
    copyright.className = "navbar-text";
    copyright.textContent = "Copyright " + new Date().getFullYear() + ", Mohammed Patel";

    // Append copyright statement to navbar container
    navbarContent.appendChild(copyright);

    // Append navbar items container to navbar container
    navbarContainer.appendChild(navbarContent);

    // Append navbar container to the document body
    document.body.appendChild(navbarContainer);
});

/**
 * Form submition
 */
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
  
    form.addEventListener("submit", function(event)  {
      event.preventDefault(); // Prevent the default form submission
  
      // Get form data
      const formData = new FormData(form);
      const formDataObject = {};
      formData.forEach((value, key) => {
        formDataObject[key] = value;
      });
  
      // Output form data to console (optional)
      console.log("Form Data:", formDataObject);
  
      // Start timer for redirection
      setTimeout(function() {
       // window.location.href = "./index.html"; // Redirect to home page
      }, 3000); // 3 seconds delay for redirection
    });
  });

// ******************************************************************
// Lab 2
// add login page link
  document.addEventListener("DOMContentLoaded", function() {
    let ul = document.getElementsByTagName('ul')[0];

    var listItem = document.createElement('li');
    listItem.className = "nav-item ml-auto"; 

    var link = document.createElement('a');
    link.className = 'nav-link';
    link.href = "./login.html";
    
    link.innerHTML = '<i class="fas fa-users">Login</i>';

    listItem.appendChild(link);
    ul.appendChild(listItem);
});

// add Registration page link
document.addEventListener("DOMContentLoaded", function() {
  let ul = document.getElementsByTagName('ul')[0];

  var listItem = document.createElement('li');
  listItem.className = "nav-item ml-auto"; 

  var link = document.createElement('a');
  link.className = 'nav-link';
  link.href = "./register.html";
  
  link.innerHTML = '<i class="fas fa-users">Register</i>';

  listItem.appendChild(link);
  ul.appendChild(listItem);
});

// add Registration page link
document.addEventListener("DOMContentLoaded", function() {
    let ul = document.getElementsByTagName('ul')[0];
  
    var listItem = document.createElement('li');
    listItem.className = "nav-item ml-auto"; 
  
    var link = document.createElement('a');
    link.className = 'nav-link';
    link.href = "./blog.html";
    
    link.innerHTML = '<i class="fas fa-users">Blog</i>';
  
    listItem.appendChild(link);
    ul.appendChild(listItem);
  });

// Move username to nav bar
document.addEventListener("DOMContentLoaded", function() {
  $("#Sign-In").click(function (e){
        e.preventDefault(); 
        
        // Get username 
        let username = $("#login__username").val();
        
        if(username) {
            // Removeexisting user
            $(".navbar-nav .navbar-text").remove();
            let NavItem = $("<li>").addClass("nav-item navbar-text").text("Welcome, " + username);
            NavItem.addClass("nav-link");

            // Find contact us link and add the nav item after contactUs link
            let contactUsLink = $(".navbar-nav .nav-item:nth-child(6)");
            if (contactUsLink.length > 0) {
                contactUsLink.after(NavItem);
            }
        }
    });
});

// Registration form validation
document.addEventListener("DOMContentLoaded", function() {
  let regisForm = document.getElementById("registrationForm");
  // Create error message div
  var errorMessageDiv = document.createElement("div");
  errorMessageDiv.id = "ErrorMessage";

  // Append error message div to the body
  regisForm.appendChild(errorMessageDiv);

    // Hide error message on page load
    $("#ErrorMessage").hide();

    // Form submission handler
    $("#registrationForm").submit(function(event) {
        event.preventDefault(); // Prevent form submission

        // Clear previous error messages
        $("#ErrorMessage").empty().hide();

        // Get form values
        var firstName = $("#firstName").val();
        var lastName = $("#lastName").val();
        var email = $("#email").val();
        var password = $("#password").val();
        var confirmPassword = $("#confirmPassword").val();

        // Perform validation
        var isValid = true;
        if (firstName.length < 2 || lastName.length < 2) {
            $("#ErrorMessage").append("<p>First name and last name must be at least 2 characters long.</p>");
            isValid = false;
        }
        if (email.length < 8 || email.indexOf('@') === -1) {
            $("#ErrorMessage").append("<p>Email must be at least 8 characters long and contain '@'.</p>");
            isValid = false;
        }
        if (password.length < 6 || password !== confirmPassword) {
            $("#ErrorMessage").append("<p>Password must be at least 6 characters long and match confirm password.</p>");
            isValid = false;
        }

        // If form is valid, create User instance and display in console
        if (isValid) {
            var user = new User(firstName, lastName, email, password);
            console.log(user);
            // Clear form
            $("#registrationForm")[0].reset();
        } else {
            $("#ErrorMessage").show();
        }
    
});

// User Class
class User {
    constructor(firstName, lastName, email, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }
}


});
