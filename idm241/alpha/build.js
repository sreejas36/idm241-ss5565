const addButton = document.getElementById('addButton');
const buttonText = document.getElementById('buttonText');
const buttonIcon = document.getElementById('icon');

addButton.addEventListener('click', function() {
    // Change text to "Adding..." and show a loading icon (optional)
    buttonText.innerText = "Adding...";
    buttonIcon.src = "assets/loading.svg";  // Change to a loading spinner image
    buttonIcon.classList.add('loading-icon'); // Apply spinning animation
    addButton.disabled = true;  // Disable the button to prevent multiple clicks

    // Simulate a delay (e.g., waiting for server response)
    setTimeout(function() {
        // After delay, change text to "Added" and show checkmark icon
        buttonText.innerText = "Added";
        buttonIcon.src = "assets/check.svg";  // Change to a checkmark icon
        buttonIcon.classList.remove('loading-icon');  // Remove spinning animation


    // Reset the button to "Add" after 3 seconds
    setTimeout(function() {
        buttonText.innerText = "Add";
        buttonIcon.src = "assets/cart.svg";  // Revert back to the cart icon
        addButton.disabled = false;  // Re-enable the button
    }, 3000);  // 3-second delay to reset the button

    
    }, 2000);  // 2-second delay
});