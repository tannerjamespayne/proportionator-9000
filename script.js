let proportionateBtn = document.getElementById('proportionate-btn');
let resetBtn = document.getElementById('reset-button');
let outputContainer = document.getElementById('output-container');
let scaleFactorOutput = document.getElementById('scaleFactorOutput');
let skateboardWidthOutput = document.getElementById('skateboardWidthOutput');

let skateboardLength = document.getElementById('skateboard-length');
let fingerboardLength = document.getElementById('fingerboard-length');
let fingerboardWidth = document.getElementById('fingerboard-width');

// Function to start the calculation
function startCalculation() {
    // Display the output container
    outputContainer.style.display = 'block';

    // Calculate the scale factor and skateboard width
    let scaleFactor = calculateScaleFactor();
    let skateboardWidth = calculateSkateboardWidth();

    // Update the outputs
    scaleFactorOutput.innerText = `Scale Factor: ${scaleFactor} x`;
    skateboardWidthOutput.innerText = `Skateboard Width: ${skateboardWidth.toFixed(2)} in`;

    // Show the reset button after 4 seconds
    setTimeout(() => {
        resetBtn.style.display = 'block';
    }, 4000);
}

// Function to calculate skateboard width
function calculateSkateboardWidth() {
    let fbLength = parseFloat(fingerboardLength.value);
    let fbWidth = parseFloat(fingerboardWidth.value);
    let sbLength = parseFloat(skateboardLength.value);

    // Perform calculations based on input values (e.g., adjust for the proportion)
    let skateboardWidth = (fbWidth * sbLength) / fbLength; // Example formula

    return skateboardWidth;
}

// Function to calculate scale factor
function calculateScaleFactor() {
    let sbLength = parseFloat(skateboardLength.value);
    let fbLength = parseFloat(fingerboardLength.value);

    // Calculate scale factor using the formula: (skateboard length * 25.4) / fingerboard length
    let scaleFactor = (sbLength * 25.4) / fbLength;

    return scaleFactor.toFixed(3); // Keeping scale factor to 3 decimal places
}

// Function to reset the app
function resetApp() {
    // Reset the input fields and hide outputs
    skateboardLength.value = 32;
    fingerboardLength.value = '';
    fingerboardWidth.value = '';

    outputContainer.style.display = 'none';
    resetBtn.style.display = 'none';
}
