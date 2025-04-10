let loadingBar = document.getElementById('loading-bar');
let proportionateBtn = document.getElementById('proportionate-btn');
let resetBtn = document.getElementById('reset-button');
let outputContainer = document.getElementById('output-container');
let scaleFactorOutput = document.getElementById('scaleFactorOutput');
let skateboardWidthOutput = document.getElementById('skateboardWidthOutput');

let skateboardLength = document.getElementById('skateboard-length');
let fingerboardLength = document.getElementById('fingerboard-length');
let fingerboardWidth = document.getElementById('fingerboard-width');

// Function to start the loading process
function startLoading() {
    // Make the loading bar visible and start it
    loadingBar.style.width = '0%';
    loadingBar.style.transition = 'width 2s ease-in-out'; // Smooth transition for 2 seconds
    loadingBar.style.width = '100%';

    // After 2 seconds, show the outputs
    setTimeout(() => {
        outputContainer.style.display = 'block';

        // Calculate scale factor
        let scaleFactor = calculateScaleFactor();

        // Fetch skateboard width based on inputs
        let skateboardWidth = calculateSkateboardWidth();

        // Update outputs with fetched data
        scaleFactorOutput.innerText = `Scale Factor: ${scaleFactor} x`;
        skateboardWidthOutput.innerText = `Skateboard Width: ${skateboardWidth.toFixed(2)} in`;

        // Show the reset button after 4 seconds
        setTimeout(() => {
            resetBtn.style.display = 'block';
        }, 4000);
    }, 2000);

    // Change button color to yellow after loading bar finishes
    proportionateBtn.style.backgroundColor = '#e12f2f'; // Cherry Red
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

    // Reset the proportionate button to red
    proportionateBtn.style.backgroundColor = '#e12f2f'; // Cherry Red

    // Reset loading bar
    loadingBar.style.width = '0%';
}
