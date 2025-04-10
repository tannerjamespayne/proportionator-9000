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

        // Fetch scale factor from Google Sheets
        let scaleFactor = getGoogleSheetData('G10'); // Fetch the value from G10

        // Fetch skateboard width based on inputs
        let skateboardWidth = calculateSkateboardWidth();

        // Update outputs with fetched data
        scaleFactorOutput.innerText = `Scale Factor: ${scaleFactor}x`;
        skateboardWidthOutput.innerText = `Skateboard Width: ${skateboardWidth.toFixed(2)} in`;

        // Show the reset button after 4 seconds
        setTimeout(() => {
            resetBtn.style.display = 'block';
        }, 4000);
    }, 2000);

    // Change button color to yellow after loading bar finishes
    proportionateBtn.style.backgroundColor = '#ffbf00'; // Sunburst Yellow
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

// Function to get data from Google Sheets (fetch G10 value for scale factor)
function getGoogleSheetData(cell) {
    // Use your actual method to fetch the value from Google Sheets.
    // Here's a placeholder example where we return a constant value (this would be replaced with actual API fetch).
    return 7.5; // Example scale factor (value pulled from G10 in your Google Sheets)
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

// Function to get data from Google Sheets (fetch G10 value for scale factor)
function getGoogleSheetData(cell) {
    // Use your actual method to fetch the value from Google Sheets.
    // Here's a placeholder example where we return a constant value (this would be replaced with actual API fetch).
    return 7.5; // Example scale factor (value pulled from G10 in your Google Sheets)
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
