function invertColor(hex) {
    // Remove the hash if it exists
    hex = hex.replace(/^#/, '');

    // Convert to RGB
    let r = parseInt(hex.slice(0, 2), 16);
    let g = parseInt(hex.slice(2, 4), 16);
    let b = parseInt(hex.slice(4, 6), 16);

    // Invert the RGB values
    r = 255 - r;
    g = 255 - g;
    b = 255 - b;

    // Convert back to hex
    const invertedColor = `#${(r << 16 | g << 8 | b).toString(16).padStart(6, '0')}`;

    return invertedColor;
}

function invertColors() {
    const elementsToInvert = document.querySelectorAll('*');

    elementsToInvert.forEach(element => {
        const computedStyles = window.getComputedStyle(element);

        // Get the color property value
        const color = computedStyles.getPropertyValue('color');

        // Invert the color and apply it to the element
        element.style.color = invertColor(color);
    });

    // Add any additional logic for inverting background colors, borders, etc.
}