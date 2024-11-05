const plusButton = document.getElementById('plusButton');
const minusButton = document.getElementById('minusButton');
const itemQuantityDisplay = document.getElementById('itemQuantity');

let itemQuantity = 0;

plusButton.addEventListener('click', () => {
    itemQuantity++;
    updateQuantityDisplay();
});

minusButton.addEventListener('click', () => {
    if (itemQuantity > 0) {
        itemQuantity--;
        updateQuantityDisplay();
    }
});

function updateQuantityDisplay() {
    const quantityElement = document.getElementById('itemQuantity');
    const addText = quantityElement.querySelector('.add-text');
    const cartIcon = quantityElement.querySelector('.cart-icon');

    if (itemQuantity > 0) {
        quantityElement.classList.add('filled');
        quantityElement.textContent = itemQuantity; // Shows quantity only
    } else {
        quantityElement.classList.remove('filled');
        quantityElement.innerHTML = `<img src="/assets/cart.svg" alt="Cart Icon" class="icon cart-icon"> Add`;
    }

    // Enable or disable the minus button
    minusButton.disabled = itemQuantity === 0;
    minusButton.querySelector('.icon').style.opacity = itemQuantity === 0 ? 0.4 : 1;
}
