// ADDING ITEMS TO START AND END OF LIST
// Get the <ul> element
let elementUl = document.getElementsByTagName("ul")[0];

// ADD NEW ITEM TO END OF LIST
// Create element
let newElement = document.createElement("li");
// Create text node
let node = document.createTextNode("Chicken");
// Add text node to element
newElement.appendChild(node);
// Add element end of list
elementUl.appendChild(newElement);

// ADD NEW ITEM START OF LIST
// Create element
let element = document.createElement("li");
// Create text node
let node2 = document.createTextNode("Cheese");
// Add text node to element 
element.appendChild(node2);
// Add element to list
elementUl.insertBefore(element, elementUl.firstChild);

// All <li> elements
let listItems = document.getElementsByTagName('li');

// ADD A CLASS OF COOL TO ALL LIST ITEMS
// Counter variable
let i;
// Loop through elements
for(i = 0; i < listItems.length; i++){
    // Change class to cool
    listItems[i].classList.add("cool");
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
// h2 element
let hTwo = document.querySelector('h2');
// h2 text
let hTwoText = " Number of Items:";
// No. of <li> elements
let numOfEle = elementUl.getElementsByTagName("li").length;
// Content
let content = hTwoText + numOfEle;
// Update h2 using innerHTML (not textContent) because it contains markup
hTwo.innerHTML += content;