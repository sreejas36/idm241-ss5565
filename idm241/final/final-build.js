function toggleCircle(circle) {
    const card = circle.closest('.card');
    const circles = card.querySelectorAll('.circle');
    const image = card.querySelector('img');

    // Remove 'selected' class from all circles within the same card
    circles.forEach(c => c.classList.remove('selected'));

    // Add 'selected' class to the clicked circle
    circle.classList.add('selected');

    // Change the image based on the selected circle's data-color attribute
    const selectedColor = circle.getAttribute('data-color');

    // Handle images for each card independently
    switch (selectedColor) {
        // First card images
        case "1":
            image.src = "/assets/light-corrector.png";
            image.alt = "Light Color Corrector";
            break;
        case "2":
            image.src = "/assets/medium-corrector.png";
            image.alt = "Medium Color Corrector";
            break;
        case "3":
            image.src = "/assets/fair-corrector.png";
            image.alt = "Fair Color Corrector";
            break;
        case "4":
            image.src = "/assets/deep-corrector.png";
            image.alt = "Deep Color Corrector";
            break;

        // Second card images
        case "5":
            image.src = "/assets/blue-polish.png";
            image.alt = "Blue Nail Polish";
            break;
        case "6":
            image.src = "/assets/red-polish.png";
            image.alt = "Red Nail Polish";
            break;
        case "7":
            image.src = "/assets/magenta-polish.png";
            image.alt = "Magenta Nail Polish";
            break;
        case "8":
            image.src = "/assets/lilac-polish.png";
            image.alt = ":Lilac Nail Polish";
            break;
        case "9":
            image.src = "/assets/pink-polish.png";
            image.alt = "Pink Nail Polish";
            break;

        default:
            // Default images for each card
            if (card.querySelector('img').id === 'selected-image-1') {
                image.src = "/assets/light-corrector.png";
                image.alt = "Light Color Corrector";
            } else if (card.querySelector('img').id === 'selected-image-2') {
                image.src = "/assets/blue-polish.png";
                image.alt = "Blue Nail Polish";
            }
    }

    // Add animation effect to the image
    image.classList.add('shown');
    setTimeout(() => {
        image.classList.remove('shown');
    }, 300);
}



// function toggleCircle(circle) {
//     // Remove 'selected' class from all circles
//     const circles = document.querySelectorAll('.circle');
//     circles.forEach(c => c.classList.remove('selected'));

//     // Add 'selected' class to the clicked circle
//     circle.classList.add('selected');

//     // Change the image based on the selected circle's data-color attribute
//     const selectedColor = circle.getAttribute('data-color');
//     const image = document.getElementById('selected-image');

//     // Update the image source dynamically
//     switch (selectedColor) {
//         case "5":
//             image.src = "/assets/light-corrector.png"; // Replace with your image URL
//             image.alt = "Light Color Corrector";
//             break;
//         case "6":
//             image.src = "/assets/medium-corrector.png"; // Replace with your image URL
//             image.alt = "Medium Color Corrector";
//             break;
//         case "7":
//             image.src = "/assets/fair-corrector.png"; // Replace with your image URL
//             image.alt = "Fair Color Corrector";
//             break;
//         case "8":
//             image.src = "/assets/deep-corrector.png"; // Replace with your image URL
//             image.alt = "Deep Color Corrector";
//             break;
//         default:
//             image.src = "/assets/light-corrector.png";
//             image.alt = "Light Color Corrector";
//     }

//     // Add animation effect to the image
//     image.classList.add('shown');
//     setTimeout(() => {
//         image.classList.remove('shown');
//     }, 300);
// }

// // animating numbers

// const minusButton = document.getElementById("minusButton");
// const plusButton = document.getElementById("plusButton");
// const itemQuantity = document.getElementById("itemQuantity");

// let quantity = 0;

// function updateQuantityDisplay() {
//     if (quantity === 0) {
//         minusButton.disabled = true;
//         itemQuantity.innerHTML = `
//             <img src="/assets/cart.svg" alt="Cart Icon" class="icon cart-icon">
//             <span class="add-text">Add</span>`;
//     } else {
//         minusButton.disabled = false;
//         itemQuantity.innerHTML = `<span class="number">${quantity}</span>`;
//     }

//     // Add animation class and remove it after animation ends
//     const numberElement = itemQuantity.querySelector(".number");
//     if (numberElement) {
//         numberElement.classList.add("quantity-animate");
//         numberElement.addEventListener("animationend", () => {
//             numberElement.classList.remove("quantity-animate");
//         }, { once: true });
//     }
// }

// plusButton.addEventListener("click", () => {
//     quantity++;
//     updateQuantityDisplay();
// });

// minusButton.addEventListener("click", () => {
//     if (quantity > 0) {
//         quantity--;
//         updateQuantityDisplay();
//     }
// });

// // Initialize the display
// updateQuantityDisplay();

document.querySelectorAll(".card").forEach(card => {
    const minusButton = card.querySelector(".minus");
    const plusButton = card.querySelector(".plus");
    const itemQuantity = card.querySelector(".quantity");
    let quantity = 0;

    function updateQuantityDisplay() {
        if (quantity === 0) {
            minusButton.disabled = true;
            itemQuantity.innerHTML = `
                <img src="/assets/cart.svg" alt="Cart Icon" class="icon cart-icon">
                <span class="add-text">Add</span>`;
        } else {
            minusButton.disabled = false;
            itemQuantity.innerHTML = `<span class="number">${quantity}</span>`;
        }

        // Add animation class and remove it after animation ends
        const numberElement = itemQuantity.querySelector(".number");
        if (numberElement) {
            numberElement.classList.add("quantity-animate");
            numberElement.addEventListener("animationend", () => {
                numberElement.classList.remove("quantity-animate");
            }, { once: true });
        }
    }

    plusButton.addEventListener("click", () => {
        quantity++;
        updateQuantityDisplay();
    });

    minusButton.addEventListener("click", () => {
        if (quantity > 0) {
            quantity--;
            updateQuantityDisplay();
        }
    });

    // Initialize the display for each product card
    updateQuantityDisplay();
});

