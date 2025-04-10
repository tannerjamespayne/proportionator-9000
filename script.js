let proportionateButton = document.getElementById('proportionateButton');
let resetButton = document.getElementById('resetButton');
let loadingBar = document.getElementById('loadingBar');
let output = document.getElementById('output');
let scaleFactorOutput = document.getElementById('scaleFactorOutput');
let skateboardWidthOutput = document.getElementById('skateboardWidthOutput');
let fbLengthInput = document.getElementById('fb_length');
let fbWidthInput = document.getElementById('fb_width');
let skateboardLengthInput = document.getElementById('skateboard_length');

// Function to handle loading bar behavior inside the proportionate button
function startLoading() {
    // Disable input fields and button during loading
    fbLengthInput.disabled = true;
    fbWidthInput.disabled = true;
    proportionateButton.disabled = true;

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

    // Ensure valid inputs before calculation
    if (isNaN(fbLength) || isNaN(fbWidth)) {
        alert("Please input valid numbers.");
        resetPage();
        return;
    }

    // Calculate scale factor (fbLength / skateboardLength) 
    // This should return a value in the range of 7-10
    let scaleFactor = fbLength / skateboardLength;

    // Calculate skateboard width (fbWidth * scaleFactor)
    // This should return a value in the 8-14 inch range
    let skateboardWidth = fbWidth * scaleFactor;

    // Display scale factor and skateboard width
    scaleFactorOutput.innerText = "Scale Factor: " + scaleFactor.toFixed(3) + "x";
    skateboardWidthOutput.innerText = "Skateboard Width: " + skateboardWidth.toFixed(2) + " in";

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
    loadingBar.style.transition = "width 0s"; // Instant reset
    loadingBar.style.width = '0%'; // Hide loading bar initially
    setTimeout(() => {
        loadingBar.style.transition = "width 2s"; // Resume smooth transition after reset
    }, 50); // Short delay to apply smooth transition after reset

    // Re-enable input fields
    fbLengthInput.disabled = false;
    fbWidthInput.disabled = false;

    // Re-enable proportionate button
    proportionateButton.disabled = false;
}

// Event listener for the proportionate button to start the calculation
proportionateButton.addEventListener('click', function() {
    startLoading();
});

// Event listener for the reset button
resetButton.addEventListener('click', function() {
    // Reset page, but keep skateboard length unchanged
    fbLengthInput.value = "";  // Reset fingerboard length
    fbWidthInput.value = "";   // Reset fingerboard width
    output.style.display = "none";  // Hide outputs
    resetButton.style.display = "none"; // Hide reset button
    loadingBar.style.width = "0%"; // Reset loading bar

    // Keep the skateboard length input as it is
    skateboardLengthInput.disabled = false;  // Make sure the skateboard length can still be changed
    proportionateButton.style.backgroundColor = '#e74c3c'; // Reset to cherry red
});
