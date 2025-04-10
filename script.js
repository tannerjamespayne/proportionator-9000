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
    loadingBar.style.width = '100%';

    // After 2 seconds, show the outputs
    setTimeout(() => {
        outputContainer.style.display = 'block';

        // Populate outputs based on current inputs
        let scaleFactor = calculateScaleFactor();
        let skateboardWidth = calculateSkateboardWidth();

        scaleFactorOutput.innerText = `Scale Factor: ${scaleFactor}x`;
        skateboardWidthOutput.innerText = `Skateboard Width (in): ${skateboardWidth.toFixed(2)}`;

        // Show the reset button after 4 seconds
        setTimeout(() => {
            resetBtn.style.display = 'block';
        }, 4000);
    }, 2000);

    // Change button color to yellow after loading bar finishes
    proportionateBtn.style.backgroundColor = '#ffbf00'; // Sunburst Yellow
}

// Function to calculate scale factor
function calculateScaleFactor() {
    let fbLength = parseFloat(fingerboardLength.value);
    let fbWidth = parseFloat(fingerboardWidth.value);
    let sbLength = parseFloat(skateboardLength.value);

    // Pull the scale factor value from G10 in Google Sheets (already calculated in your sheet)
    let scaleFactor = getGoogleSheetData('G10'); // Use your method to fetch G10 value

    return scaleFactor;
}

// Function to calculate skateboard width
function calculateSkateboardWidth() {
    let fbLength = parseFloat(fingerboardLength.value);
    let fbWidth = parseFloat(fingerboardWidth.value);
    let sbLength = parseFloat(skateboardLength.value);

    // Perform calculations using the existing formulas in your sheet

    let skateboardWidth = (fbWidth * sbLength) / fbLength; // Example calculation

    return skateboardWidth;
}

// Function to get data from Google Sheets (use your actual method to fetch data)
function getGoogleSheetData(cell) {
    // This is a placeholder. Replace with your actual method to pull the data.
    return 7.5; // Example scale factor
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
