document.addEventListener("DOMContentLoaded", () => {
    const minusButton = document.getElementById("minusButton");
    const plusButton = document.getElementById("plusButton");
    const itemQuantity = document.getElementById("itemQuantity");
    const cartIcon = itemQuantity.querySelector(".cart-icon");
    const addText = itemQuantity.querySelector(".add-text");

    let quantity = 0;

    // Update UI based on quantity
    function updateUI() {
        if (quantity > 0) {
            itemQuantity.textContent = quantity;
            itemQuantity.classList.add("filled");
            minusButton.disabled = false;
        } else {
            itemQuantity.innerHTML = '';
            itemQuantity.append(cartIcon, addText);
            itemQuantity.classList.remove("filled");
            minusButton.disabled = true;
        }
    }

    // Event listeners for buttons
    plusButton.addEventListener("click", () => {
        quantity++;
        updateUI();
    });

    minusButton.addEventListener("click", () => {
        if (quantity > 0) {
            quantity--;
            updateUI();
        }
    });
});
