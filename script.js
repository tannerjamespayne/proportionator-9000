let proportionateButton = document.getElementById('proportionateButton');
let resetButton = document.getElementById('resetButton');
let loadingBarContainer = document.getElementById('loadingBarContainer');
let loadingBar = document.getElementById('loadingBar');
let output = document.getElementById('output');
let scaleFactorOutput = document.getElementById('scaleFactorOutput');
let skateboardWidthOutput = document.getElementById('skateboardWidthOutput');
let fbLengthInput = document.getElementById('fb_length');
let fbWidthInput = document.getElementById('fb_width');
let skateboardLengthInput = document.getElementById('skateboard_length');

// Function to handle loading bar behavior
function startLoading() {
    // Disable input fields and button during loading
    fbLengthInput.disabled = true;
    fbWidthInput.disabled = true;
    proportionateButton.disabled = true;

    // Show loading bar
    loadingBarContainer.style.display = "block";

    // Start loading bar animation (smooth in 2 seconds)
    let loadTime = 2000; // 2 seconds for loading
    let width = 0;

    let interval = setInterval(() => {
        width += 1;
        loadingBar.style.width = width + "%";

        if (width >= 100) {
            clearInterval(interval);
            setTimeout(showOutput, 1000); // Wait 1 second before showing output
            proportionateButton.style.backgroundColor = '#f1c40f'; // Yellow after completion
        }
    }, loadTime / 100); // Updates every fraction of a second
}

// Function to calculate and display the output
function showOutput() {
    // Get user input values
    let fbLength = parseFloat(fbLengthInput.value);
    let fbWidth = parseFloat(fbWidthInput.value);
    let skateboardLength = parseFloat(skateboardLengthInput.value); // Fixed as 32 for now

    // Calculate scale factor (fbLength / skateboardLength)
    let scaleFactor = fbLength / skateboardLength;

    // Display scale factor and skateboard width
    scaleFactorOutput.innerText = "Scale Factor: " + scaleFactor.toFixed(3) + "x";
    skateboardWidthOutput.innerText = "Skateboard Width: " + (fbWidth * scaleFactor).toFixed(2) + " in";

    output.style.display = "block"; // Show the output section

    // Show reset button after 4 seconds
    setTimeout(() => {
        resetButton.style.display = "inline-block"; // Show reset button
    }, 4000); // Wait 4 seconds before showing reset button
}

// Reset the page to its initial state
function resetPage() {
    // Reset input fields (fingerboard length and width, but not skateboard length)
    fbLengthInput.value = "";
    fbWidthInput.value = "";

    // Reset the outputs
    output.style.display = "none";
    resetButton.style.display = "none";

    // Reset the proportionate button to red
    proportionateButton.style.transition = "background-color 0.5s ease"; // Smooth transition
    proportionateButton.style.backgroundColor = '#e74c3c'; // Cherry red

    // Reset button color
    loadingBar.style.width = '0%'; // Reset loading bar
    loadingBarContainer.style.display = "none"; // Hide loading bar

    // Re-enable input fields
    fbLengthInput.disabled = false;
    fbWidthInput.disabled = false;

    // Re-enable proportionate button
    proportionateButton.disabled = false;
}
