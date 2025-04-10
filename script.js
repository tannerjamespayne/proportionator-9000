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

function startLoading() {
    // Disable input fields and button during loading
    fbLengthInput.disabled = true;
    fbWidthInput.disabled = true;
    proportionateButton.disabled = true;

    // Show loading bar
    loadingBarContainer.style.display = "block";

    // Start loading bar
    let loadTime = 3000; // 3 seconds for loading
    let width = 0;

    let interval = setInterval(() => {
        width += 1;
        loadingBar.style.width = width + "%";

        if (width >= 100) {
            clearInterval(interval);
            setTimeout(showOutput, 1000); // Wait 1 second before showing output
        }
    }, loadTime / 100); // Updates every fraction of a second
}

function showOutput() {
    // Calculate scale factor and skateboard width
    let fbLength = parseFloat(fbLengthInput.value);
    let fbWidth = parseFloat(fbWidthInput.value);
    let skateboardLength = 32; // fixed value
    let scaleFactor = fbLength / skateboardLength;

    // Display the results
    scaleFactorOutput.innerText = "Scale Factor: " + scaleFactor.toFixed(3) + "x";
    skateboardWidthOutput.innerText = "Skateboard Width: " + (fbWidth * scaleFactor).toFixed(2) + " in";

    output.style.display = "block"; // Show the output section

    setTimeout(() => {
        resetButton.style.display = "inline-block"; // Show reset button after output
    }, 1000); // Wait 1 second before showing reset button
}

function resetPage() {
    // Reset input fields
    fbLengthInput.value = "";
    fbWidthInput.value = "";
    
    // Reset the outputs
    output.style.display = "none";
    resetButton.style.display = "none";
    proportionateButton.disabled = false;

    // Enable input fields
    fbLengthInput.disabled = false;
    fbWidthInput.disabled = false;

    // Hide inputs again until the button is clicked
    document.getElementById('inputs').style.display = "none";
}

// Show inputs when Proportionate button is clicked
proportionateButton.addEventListener("click", function() {
    document.getElementById('inputs').style.display = "block";
});


function resetPage() {
    // Reset input fields
    fbLengthInput.value = "";
    fbWidthInput.value = "";
    
    // Reset the outputs
    output.style.display = "none";
    resetButton.style.display = "none";
    proportionateButton.disabled = false;

    // Enable input fields
    fbLengthInput.disabled = false;
    fbWidthInput.disabled = false;

    // Hide inputs again until the button is clicked
    document.getElementById('inputs').style.display = "none";
}

// Show inputs when Proportionate button is clicked
proportionateButton.addEventListener("click", function() {
    document.getElementById('inputs').style.display = "block";
});
