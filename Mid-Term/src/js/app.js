(function() {

    // Question 1
    // Update the page title to say "Mohammed Patel - Test 1"
    document.title = "Mohammed Patel - Test 1";

    // Update the navbar title to say "Mohammed Patel"
    document.querySelector(".navbar-brand").textContent = "Mohammed Patel";


    // Question 2
    // get a reference to the test table
    // get a reference to the second row in the table
    // update the student number to be 100100100
    var testTable = document.getElementById("test-table");
    var secondRow = testTable.getElementsByTagName("tr")[1];
    secondRow.getElementsByTagName("td")[2].textContent = "100100100";


    // Question 3
    // create a table row with your own information
    // create a table delimeter and set your first name
    // add it to your table row
    // create a table delimeter and set your last name
    // add it to your table row
    // create a table delimeter and set your banner id
    // add it to your table row
    // add your row to the test table body
    var newRow = document.createElement("tr");
    var firstNameCell = document.createElement("td");
    firstNameCell.textContent = "Mohammed";
    var lastNameCell = document.createElement("td");
    lastNameCell.textContent = "Patel";
    var bannerIdCell = document.createElement("td");
    bannerIdCell.textContent = "100822322";
    newRow.appendChild(firstNameCell);
    newRow.appendChild(lastNameCell);
    newRow.appendChild(bannerIdCell);
    testTable.querySelector("tbody").appendChild(newRow);


    // Question 4
    // remove Alice Bobberts from the table
    var aliceRow = testTable.querySelector("tbody").getElementsByTagName("tr")[2];
    aliceRow.parentNode.removeChild(aliceRow);


    // Question 5
    // add the .table-info class to your personal row
    newRow.classList.add("table-info");


    // Question 6
    // remove the .table-warning class from Adam Kunz's row
    var adamRow = testTable.querySelector("tbody").getElementsByTagName("tr")[0];
    adamRow.classList.remove("table-warning");


    // Question 7
    // change .table-dark to .table-success for John Doe's row
    var johnRow = testTable.querySelector("tbody").getElementsByTagName("tr")[1];
    johnRow.classList.replace("table-dark", "table-success");


    // Question 8
    // To install holderjs via npm, you would use the following command:
    // npm install holderjs
    // Then, include the holder script at the bottom of index.html
    // under the container div holding the test-table, create another container div, and create an image place"holder".
    // Here's a sample code for creating a placeholder image:
    /*
    <div class="container">
        <div id="placeholder-image" class="text-center">
            <img src="holder.js/200x200?text=Placeholder" alt="Placeholder Image">
        </div>
    </div>
    */

    (function() {
        // Create container div
        var containerDiv = document.createElement("div");
        containerDiv.classList.add("container");
    
        // Create inner div for placeholder image
        var placeholderDiv = document.createElement("div");
        
        placeholderDiv.classList.add("text-center");
    
        // Create image element
        var imageElement = document.createElement("img");
        imageElement.src = "./holder.js/200x200";
        imageElement.alt = "Image Placeholder";
    
        // Append image element to placeholder div
        placeholderDiv.appendChild(imageElement);
    
        // Append placeholder div to container div
        containerDiv.appendChild(placeholderDiv);
    
        // Append container div to the body of the document
        document.body.appendChild(containerDiv);
    })();
    

})();
