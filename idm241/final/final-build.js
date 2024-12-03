function toggleCircle(circle) {
    // Remove 'selected' class from all circles
    const circles = document.querySelectorAll('.circle');
    circles.forEach(c => c.classList.remove('selected'));

    // Add 'selected' class to the clicked circle
    circle.classList.add('selected');

    // Change the image based on the selected circle's data-color attribute
    const selectedColor = circle.getAttribute('data-color');
    const image = document.getElementById('selected-image');

    // Update the image source dynamically
    switch (selectedColor) {
    case "1":
        image.src = "/assets/light-corrector.png"; // Replace with your image URL
        image.alt = "Light Color Corrector";
        break;
    case "2":
        image.src = "/assets/medium-corrector.png"; // Replace with your image URL
        image.alt = "Medium Color Corrector";
        break;
    case "3":
        image.src = "/assets/fair-corrector.png"; // Replace with your image URL
        image.alt = "Fair Color Corrector";
        break;
    case "4":
        image.src = "/assets/deep-corrector.png"; // Replace with your image URL
        image.alt = "Deep Color Corrector";
        break;
    default:
        image.src = "/assets/light-corrector.png";
        image.alt = "Light Color Corrector";
    }

    // Add animation effect to the image
    image.classList.add('shown');
    setTimeout(() => {
    image.classList.remove('shown');
    }, 300);
}