/* 
 * This line should configure the submit handler for your form.
 * It should use the submitAnimalForm method below.
 */
document.querySelector('form').addEventListener('submit', submitAnimalForm);

/* 
 * This line should get the list of available animals, then render the table when the page loads.
 * It should use the getAnimals and renderAnimalTable methods below.
 */
window.addEventListener('load', async () => {
  const animals = await getAnimals();
  renderAnimalTable(animals);
});

/* 
 * renderAnimalTable
 * This method should take an array of animals, and display a table of them.
 * If the array is empty, it should hide the table and instead show a message that there are currently no animals.
 * @param Animal[];
 * @return void
 */
function renderAnimalTable(arrayOfAnimals) {
  const tableContainer = document.getElementById('retrieve-container');
  const table = document.createElement('table');
  const messageArea = document.createElement('div');
  messageArea.classList.add('alert');
  
  if (arrayOfAnimals.length === 0) {
    tableContainer.innerHTML = '';
    messageArea.classList.add('alert-info');
    messageArea.textContent = 'There are currently no animals in the database.';
    tableContainer.appendChild(messageArea);
  } else {
    table.classList.add('table');
    table.classList.add('table-striped');
    table.innerHTML = `
      <thead>
        <tr>
          <th>Name</th>
          <th>Heads</th>
          <th>Legs</th>
          <th>Sound</th>
        </tr>
      </thead>
      <tbody>
        ${arrayOfAnimals.map(animal => `
          <tr>
            <td>${animal.name}</td>
            <td>${animal.heads}</td>
            <td>${animal.legs}</td>
            <td>${animal.sound}</td>
          </tr>
        `).join('')}
      </tbody>
    `;
    tableContainer.innerHTML = '';
    tableContainer.appendChild(table);
  }
}

/* 
 * submitAnimalForm
 * This method should be what gets called when your form is submitted.
 * It should utilize the fetch methods below.
 * It should hide or show an error message if there is a problem.
 * If it is successful, it should do something to update the list of animals.
 * @param event;
 * @return void
 */
async function submitAnimalForm(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const name = formData.get('name');
  const heads = formData.get('heads');
  const legs = formData.get('legs');
  const sound = formData.get('sound');
  
  const animal = { name, heads, legs, sound };
  const result = await postAnimal(animal);

  if (result.error) {
    const messageArea = document.createElement('div');
    messageArea.classList.add('alert');
    messageArea.classList.add('alert-danger');
    messageArea.textContent = result.error;
    document.getElementById('create-container').appendChild(messageArea);
  } else {
    document.getElementById('create-container').innerHTML = '';
    const animals = await getAnimals();
    renderAnimalTable(animals);
  }
}

/* 
 * postAnimal
 * This method should use fetch to post a new animal to the server.
 * It should only return a successful response from the server, or an object with an error message.
 * It should not modify the dom at all.
 * For full points, your fetch methods should utilize the URL, Headers, and Request classes.
 * @param event;
 * @return Animal | Error
 */
async function postAnimal(event) {
  try {
    const response = await fetch('/api/animal', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(event)
    });
    if (!response.ok) {
      const error = await response.json();
      return { error: error.message };
    }
    return await response.json();
  } catch (error) {
    return { error: error.message };
  }
}

/* 
 * getAnimal
 * This method should use fetch to get a list of animals from the server.
 * It should only return an array of animals, or an object with an error message.
 * It should not modify the dom at all.
 * For full points, your fetch methods should utilize the URL, Headers, and Request classes.
 * @param event | null;
 * @return Animal[] | Error
 */
async function getAnimals(event) {
  try {
    const response = await fetch('/api/animal');
    if (!response.ok) {
      const error = await response.json();
      return { error: error.message };
    }
    return await response.json();
  } catch (error) {
    return { error: error.message };
  }
}

/**
 * TEST 4
 */
window.addEventListener('load', async () => {
  try {
    const animals = await getAnimals();
    if (animals.error) {
      displayErrorMessage(animals.error);
    } else if (animals.length === 0) {
      displayNoAnimalsMessage();
    } else {
      renderAnimalTable(animals);
    }
  } catch (error) {
    displayErrorMessage('Failed to fetch animals. Please try again later.');
  }
});

function displayErrorMessage(message) {
  const messageArea = document.createElement('div');
  messageArea.classList.add('alert');
  messageArea.classList.add('alert-danger');
  messageArea.textContent = message;
  document.getElementById('retrieve-container').appendChild(messageArea);
}

function displayNoAnimalsMessage() {
  const messageArea = document.createElement('div');
  messageArea.classList.add('alert');
  messageArea.classList.add('alert-info');
  messageArea.textContent = 'There are currently no animals in the database.';
  document.getElementById('retrieve-container').appendChild(messageArea);
}

