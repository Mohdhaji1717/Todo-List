const error_container = document.getElementById('error');
const nameInput = document.getElementById('nameInput');
const addButton = document.getElementById('addButton');
const nameList = document.getElementById('nameList');
let errormsg; // Declare errormsg outside of the scope so it can be referenced later

addButton.addEventListener('click', () => {
  const name = nameInput.value.trim();
  
  if (name !== '') {
    // Create list item element
    const listItem = document.createElement('li');
    listItem.classList.add('name-item');
    listItem.textContent = name;
    
    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.textContent = 'Delete';
    
    // Add event listener to delete button
    deleteButton.addEventListener('click', () => {
      nameList.removeChild(listItem);
    });
    
    // Append elements to the list
    listItem.appendChild(deleteButton);
    nameList.appendChild(listItem);
    
    // Clear any existing error message
    if (errormsg) {
      error_container.removeChild(errormsg);
      errormsg = null; // Reset errormsg to null after removal
    }
    
    // Clear input field
    nameInput.value = '';
  }
  else { 
    // If the name input is empty, display the error message
    if (!errormsg) {
      errormsg = document.createElement('p');
      errormsg.classList.add('error-msg');
      errormsg.innerHTML = "Please Enter an Item!";
      error_container.appendChild(errormsg);
    }
  }
});

// Add an event listener to nameInput to clear error messages when typing
nameInput.addEventListener('input', () => {
  if (errormsg) {
    error_container.removeChild(errormsg);
    errormsg = null; // Reset errormsg to null after removal
  }
});
