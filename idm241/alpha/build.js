const addButton = document.getElementById('addButton');
const icon = document.getElementById('icon');
const buttonText = document.getElementById('buttonText');

addButton.addEventListener('click', function() {
    // Disable hover effect
    addButton.classList.add('no-hover');

    // Change to "Adding" state
    addButton.classList.add('adding');
    buttonText.textContent = 'Adding...';
    icon.src = '/assets/loading.svg'; // Change to loading icon

    // Simulate a delay of 2 seconds for "Adding" state
    setTimeout(function() {
        // Change to "Added" state
        addButton.classList.remove('adding');
        buttonText.textContent = 'Added';
        icon.src = '/assets/check.svg'; // Change to checkmark icon

        // After 3 seconds, revert back to "Add" state
        setTimeout(function() {
            addButton.classList.remove('no-hover'); // Enable hover again
            buttonText.textContent = 'Add';
            icon.src = '/assets/cart.svg'; // Revert to cart icon
        }, 3000);
    }, 2000);
});





// const addButton = document.getElementById('addButton');
// const icon = document.getElementById('icon');
// const buttonText = document.getElementById('buttonText');

// addButton.addEventListener('click', function() {
//     // Change to "Adding" state
//     addButton.classList.add('adding');
//     buttonText.textContent = 'Adding...';
//     icon.src = 'assets/loading.svg'; // Change to loading icon

//     // Simulate a delay of 2 seconds for "Adding" state
//     setTimeout(function() {
//         // Change to "Added" state
//         addButton.classList.remove('adding');
//         addButton.classList.add('added');
//         buttonText.textContent = 'Added';
//         icon.src = 'assets/checkmark.svg'; // Change to checkmark icon

//         // After 3 seconds, revert back to "Add" state
//         setTimeout(function() {
//             addButton.classList.remove('added');
//             buttonText.textContent = 'Add';
//             icon.src = 'assets/cart.svg'; // Revert to cart icon
//         }, 3000);
//     }, 2000);
// });


console.log()

// const addButton = document.getElementById('addButton');
// const icon = document.getElementById('icon');
// const buttonText = document.getElementById('buttonText');

// addButton.addEventListener('click', function() {
//     // Change to "Adding" state
//     addButton.classList.add('adding');
//     buttonText.textContent = 'Adding...';
//     icon.src = 'assets/loading.svg'; // Use a loading or spinner icon

//     // Simulate a delay of 2 seconds for "Adding"
//     setTimeout(function() {
//         // Change to "Added" state after 2 seconds
//         addButton.classList.remove('adding');
//         addButton.classList.add('added');
//         buttonText.textContent = 'Added';
//         icon.src = 'assets/check.svg'; // Use a checkmark icon

//         // After 3 seconds, revert back to the original "Add" state
//         setTimeout(function() {
//             addButton.classList.remove('added');
//             buttonText.textContent = 'Add';
//             icon.src = 'assets/cart.svg'; // Use the cart icon again
//         }, 3000);
//     }, 2000);
// });


// const buttonText = document.getElementById('buttonText');
// const buttonIcon = document.getElementById('icon');

// addButton.addEventListener('click', function() {
//     // Change text to "Adding..." and show a loading icon (optional)
//     buttonText.innerText = "Adding...";
//     buttonIcon.src = "assets/loading.svg";  // Change to a loading spinner image
//     buttonIcon.classList.add('loading-icon'); // Apply spinning animation
//     addButton.disabled = true;  // Disable the button to prevent multiple clicks

//     // Simulate a delay (e.g., waiting for server response)
//     setTimeout(function() {
//         // After delay, change text to "Added" and show checkmark icon
//         buttonText.innerText = "Added";
//         buttonIcon.src = "assets/check.svg";  // Change to a checkmark icon
//         buttonIcon.classList.remove('loading-icon');  // Remove spinning animation


//     // Reset the button to "Add" after 3 seconds
//     setTimeout(function() {
//         buttonText.innerText = "Add";
//         buttonIcon.src = "assets/cart.svg";  // Revert back to the cart icon
//         addButton.disabled = false;  // Re-enable the button
//     }, 3000);  // 3-second delay to reset the button

    
//     }, 2000);  // 2-second delay
// });