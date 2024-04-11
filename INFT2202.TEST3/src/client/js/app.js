// Configure the submit handler for the form
document.getElementById('animal-form').addEventListener('submit', submitAnimalForm);

// Get the list of available animals and render the table when the page loads
window.addEventListener('load', async () => {
  renderAnimalTable(await getAnimals());
});

// Function to render the table of animals
function renderAnimalTable(arrayOfAnimals) {
  const tableContainer = document.getElementById('retrieve-container');
  const messageArea = document.createElement('div');
  messageArea.classList.add('alert');

  if (arrayOfAnimals.length === 0) {
    tableContainer.innerHTML = '';
    messageArea.classList.add('alert-info');
    messageArea.textContent = 'There are currently no animals in the database.';
    tableContainer.appendChild(messageArea);
  } else {
    const table = document.createElement('table');
    table.classList.add('table', 'table-striped');
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

// Function to handle form submission
async function submitAnimalForm(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const animal = {
    name: formData.get('name'),
    heads: formData.get('heads'),
    legs: formData.get('legs'),
    sound: formData.get('sound')
  };

  const result = await postAnimal(animal);
  const messageArea = document.createElement('div');
  messageArea.classList.add('alert');

  if (result.error) {
    messageArea.classList.add('alert-danger');
    messageArea.textContent = result.error;
  } else {
    messageArea.classList.add('alert-success');
    messageArea.textContent = 'Animal added successfully.';
    renderAnimalTable(await getAnimals());
  }

  document.getElementById('form-message-area').innerHTML = '';
  document.getElementById('form-message-area').appendChild(messageArea);
}

// Function to post a new animal to the server
async function postAnimal(animal) {
  try {
    const response = await fetch('/api/animal', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(animal)
    });
    return await response.json();
  } catch (error) {
    return { error: 'Failed to add animal. Please try again later.' };
  }
}

// Function to get a list of animals from the server
async function getAnimals() {
  try {
    const response = await fetch('/api/animal');
    return await response.json();
  } catch (error) {
    return { error: 'Failed to fetch animals. Please try again later.' };
  }
}
